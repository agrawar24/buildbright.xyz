
function updateStreak() {
    const today = new Date().toDateString();
    const last = localStorage.getItem("last_day");
    let streak = parseInt(localStorage.getItem("streak") || "0");

    if (last !== today) {
        streak += 1;
        localStorage.setItem("streak", streak);
        localStorage.setItem("last_day", today);
    }

    const el = document.getElementById("streak");
    if (el) {
        el.innerText = "🔥 Streak: " + streak + " days";
    }
}


const lessons = {
    "equations": {
        title: "Solving Equations",
        explanation: "To solve equations, isolate x step by step.",
        questions: [
            { q: "x + 3 = 7", options: ["2", "4", "6"], answer: "4", explanation: "Subtract 3" },
            { q: "2x = 10", options: ["2", "5", "10"], answer: "5", explanation: "Divide by 2" }
        ]
    },

    // 👉 ADD THIS BELOW (do NOT delete equations)
    "inequalities": {
        title: "Inequalities",
        explanation: "Solve like equations, but flip sign when multiplying/dividing by negatives.",
        questions: [
            { q: "x + 2 > 5", options: ["1", "2", "3"], answer: "3", explanation: "Subtract 2" },
            { q: "2x < 10", options: ["3", "5", "6"], answer: "5", explanation: "Divide by 2" }
        ]
    }
};
const courses = {
    algebra: {
        name: "Algebra",
        lessons: ["equations", "inequalities"]
    },
    geometry: {
        name: "Geometry",
        lessons: []
    },
    calculus: {
        name: "Calculus",
        lessons: []
    }
};









function checkTemplateQuiz() {

    const submitBtn = document.getElementById("submit-btn");
    if (submitBtn) submitBtn.disabled = true;

    const alreadyDone = localStorage.getItem(getCurrentLessonId() + "_done");
    if (alreadyDone) return;

    let score = 0;
    let feedback = "";

    templateQuestions.forEach((item, index) => {

        const selected = document.querySelector(`input[name="q${index}"]:checked`);

        if (selected && selected.value === item.answer) {
            score++;
        } else {
            if (selected) {
                selected.parentElement.style.color = "red";
            }
            feedback += item.explanation + "\n";
        }
    });

    document.getElementById("score").innerText =
        "Score: " + score + "/" + templateQuestions.length;

    document.getElementById("feedback").innerText = feedback;

    const result = document.getElementById("result-msg");

    if (result) {
        if (score >= Math.ceil(templateQuestions.length * 0.7)) {
            result.innerText = "✅ Lesson Passed!";
            result.style.color = "lime";
        } else {
            result.innerText = "❌ Try Again";
            result.style.color = "red";
        }
    }

    const lessonKey = getCurrentLessonId();

    localStorage.setItem(lessonKey + "_score", score);
    localStorage.setItem("last_lesson", lessonKey);

    if (score >= Math.ceil(templateQuestions.length * 0.7)) {
        setTimeout(goToNextLesson, 1000);
    }

    const retryBtn = document.getElementById("retry-btn");

    if (retryBtn && score < Math.ceil(templateQuestions.length * 0.7)) {
        retryBtn.style.display = "inline-block";
    }
    if (score === templateQuestions.length) {
        const result = document.getElementById("result-msg");

        if (result) {
            result.innerText = "🏆 Perfect Score!";
            result.style.color = "gold";
        }
    }
    setTimeout(() => {
        const btn = document.getElementById("next-lesson-msg");

        if (btn) {
            btn.innerText = "Loading next lesson...";
            btn.style.color = "lime";
        }

        goToNextLesson();
    }, 1000);

    localStorage.setItem(getCurrentLessonId() + "_done", "true");

    const inputs = document.querySelectorAll("input[type='radio']");
    inputs.forEach(i => i.disabled = true);
}
















function loadQuiz() {
    if (!window.templateQuestions) return;

    const quizDiv = document.getElementById("quiz");
    if (!quizDiv) return;

    quizDiv.innerHTML = "";

    templateQuestions.forEach((item, index) => {
        let html = `<p>${item.q}</p>`;

        item.options.forEach(opt => {
            html += `
                <label>
                    <input type="radio" name="q${index}" value="${opt}">
                    ${opt}
                </label><br>
            `;
        });

        quizDiv.innerHTML += html + "<br>";
    });
}

function updateProgress() {
    const course = courses.algebra;

    let completed = 0;

    course.lessons.forEach(id => {
        const score = localStorage.getItem(id + "_score");

        if (score !== null) completed++;
    });

    const total = course.lessons.length || 1;
    const percent = Math.round((completed / total) * 100);

    const overall = document.getElementById("overall");
    if (overall) {
        overall.innerText = "Progress: " + percent + "%";
    }

    const eq = localStorage.getItem("equations_score");
    const ineq = localStorage.getItem("inequalities_score");

    if (eq) {
        const status = document.getElementById("eq-status");
        const bar = document.getElementById("eq-bar");

        if (status) {
            status.innerText = "Completed ✔ Score: " + eq + "/10";
            status.style.color = "lime";
        }

        if (bar) bar.value = eq;
    }

    if (ineq) {

        const card = document.getElementById("ineq-status")?.parentElement;
        if (card) {
            card.style.border = "2px solid lime";
        }
        const status = document.getElementById("ineq-status");

        if (status) {
            status.innerText = "Completed ✔ Score: " + ineq + "/10";
            status.style.color = "lime";
        }
    }

    if (eq) {
        const func = document.getElementById("func-status");
        if (func) {
            func.innerText = "Unlocked ✔";
            func.style.color = "lime";
        }
    }
}


function updateHomeProgress() {
    const algebra = courses.algebra.lessons;

    let completed = 0;

    algebra.forEach(id => {
        const score = localStorage.getItem(id + "_score");
        if (score !== null) completed++;
    });

    const percent = Math.round((completed / algebra.length) * 100);

    const display = document.getElementById("algebra-progress");

    if (display) {
        display.innerText = "Algebra: " + (isNaN(percent) ? 0 : percent) + "%";
    }

    const bar = document.getElementById("home-bar");
    if (bar) bar.value = percent;
}

function getCurrentLessonId() {
    return new URLSearchParams(window.location.search).get("id");
}

window.addEventListener("load", () => {
    loadLesson();
    updateProgress();
    updateHomeProgress();
    setupContinueButton();
    setupNextLesson();
    checkBadge();
    showBadge();
    updateStreak();
    updatePathUI();
    highlightCurrentLesson();



    function goToNextLesson() {
        const subject = "algebra";
        const course = getCourse(subject);

        const current = getCurrentLessonId();
        const index = course.indexOf(current);

        if (index !== -1 && index < course.length - 1) {
            const next = course[index + 1];
            window.location.href = "lesson.html?id=" + next;
        } else {
            window.location.href = "algebra-topics.html";
        }
    }
});

function checkBadge() {
    const algebra = courses.algebra.lessons;

    let done = 0;

    algebra.forEach(id => {
        const score = localStorage.getItem(id + "_score");
        if (score !== null) done++;
    });

    const badgeKey = "algebra_badge";

    if (done === algebra.length) {
        localStorage.setItem(badgeKey, "true");
    }
}

function showBadge() {
    const badge = localStorage.getItem("algebra_badge");
    const el = document.getElementById("algebra-badge");

    if (!el) return;

    if (badge === "true") {
        el.innerText = "🏆 Algebra Completed!";
        el.style.color = "gold";
    }
}

function setupContinueButton() {
    const btn = document.getElementById("continue-btn");
    if (!btn) return;

    const course = courses.algebra.lessons;

    let nextLesson = null;

    for (let id of course) {
        const score = localStorage.getItem(id + "_score");

        if (!score) {
            nextLesson = id;
            break;
        }
    }

    if (nextLesson) {
        btn.href = "lesson.html?id=" + nextLesson;
        btn.innerText = "Continue Learning → " + nextLesson;
    } else {
        btn.href = "algebra-topics.html";
        btn.innerText = "Review Algebra ✔";
    }
}


function loadLesson() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) return;

    const lesson = lessons[id];

    if (!lesson) return;

    const title = document.getElementById("lesson-title");
    const explanation = document.getElementById("lesson-explanation");
    const quiz = document.getElementById("quiz");

    if (title) title.innerText = lesson.title;
    if (explanation) explanation.innerText = lesson.explanation;

    window.templateQuestions = lesson.questions;

    if (quiz) {
        loadQuiz();
    }
}


function getCurrentLessonid() {

    return new URLSearchParams(window.location.search).get("id");
}

function getSubjectProgress(subject) {
    const course = courses[subject];

    let done = 0;

    course.lessons.forEach(id => {
        if (localStorage.getItem(id + "_score")) {
            done++;
        }
    });

    return Math.round((done / (course.lessons.length || 1)) * 100);
}

function getCourse(subject) {
    return courses[subject]?.lessons || [];
}

function setupNextLesson() {
    const subject = "algebra";
    const course = getCourse(subject);

    const current = getCurrentLessonId();
    const index = course.indexOf(current);

    const btn = document.getElementById("next-lesson");
    if (!btn) return;

    if (index !== -1 && index < course.length - 1) {
        const nextLesson = course[index + 1];
        btn.href = "lesson.html?id=" + nextLesson;
        btn.innerText = "Next Lesson →";
    } else {
        btn.href = "algebra-topics.html";
        btn.innerText = "Course Complete 🎉";
    }
}

function updatePathUI() {
    const eqScore = localStorage.getItem("equations_score");

    const nodeEq = document.getElementById("node-equations");
    const nodeIneq = document.getElementById("node-inequalities");

    // ✅ If equations completed
    if (eqScore !== null) {

        // Update equations node
        if (nodeEq) {
            nodeEq.style.border = "2px solid lime";
        }

        // Unlock inequalities
        if (nodeIneq) {
            nodeIneq.classList.remove("locked");
            nodeIneq.innerHTML = `
                <a href="lesson.html?id=inequalities">2. Inequalities</a>
                <p id="ineq-status">Ready ✔</p>
            `;
        }
    }
}

function highlightCurrentLesson() {
    const current = getCurrentLessonId();

    if (!current) return;

    const node = document.getElementById("node-" + current);

    if (node) {
        node.style.boxShadow = "0 0 15px lime";
    }
}