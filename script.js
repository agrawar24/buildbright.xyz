
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
    localStorage.setItem(lessonKey + "_score", score);
    let score = 0;
    let feedback = "";

    templateQuestions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);

        if (selected && selected.value === item.answer) {
            score++;
        } else {
            feedback += item.explanation + "\n";
        }
    });

    document.getElementById("score").innerText =
        "Score: " + score + "/" + templateQuestions.length;

    document.getElementById("feedback").innerText = feedback;

    // save progress
    const params = new URLSearchParams(window.location.search);
    const lessonKey = params.get("id");

    localStorage.setItem(lessonKey + "_score", score);

    localStorage.setItem(
        "last_lesson",
        getCurrentLessonId()
    );
    setTimeout(() => {
        const course = courses.algebra.lessons;
        const current = getCurrentLessonId();
        const index = course.indexOf(current);

        if (index !== -1 && index < course.length - 1) {
            const next = course[index + 1];
            window.location.href = "lesson.html?id=" + next;
        } else {
            window.location.href = "algebra-topics.html";
        }
    }, 1000);


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
        const status = document.getElementById("ineq-status");

        if (status) {
            status.innerText = "Completed ✔";
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
        btn.innerText = "Continue Learning →";
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