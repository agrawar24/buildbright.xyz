
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

    let score = 0;
    let feedback = "";

    templateQuestions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const allOptions = document.querySelectorAll(`input[name="q${index}"]`);

        allOptions.forEach(option => {
            const label = option.parentElement;

            if (option.value === item.answer) {
                label.style.background = "#d7f8df";
                label.style.color = "#0b6b25";
            }

            if (selected && option === selected && selected.value !== item.answer) {
                label.style.background = "#ffe0e0";
                label.style.color = "#b00020";
            }

            option.disabled = true;
        });

        if (selected && selected.value === item.answer) {
            score++;
        } else {
            feedback += `Question ${index + 1}: ${item.explanation}\n\n`;
        }
    });

    document.getElementById("score").innerText =
        "Score: " + score + "/" + templateQuestions.length;

    const passingScore = Math.ceil(templateQuestions.length * 0.7);
    const feedbackBox = document.getElementById("feedback");

    if (score === templateQuestions.length) {
        feedbackBox.innerText = "🏆 Perfect score! Excellent work.";
    } else if (score >= passingScore) {
        feedbackBox.innerText =
            "✅ Lesson passed!\n\nReview these explanations:\n\n" + feedback;
    } else {
        feedbackBox.innerText =
            "❌ Try again.\n\nReview these explanations:\n\n" + feedback;
    }

    const retryBtn = document.getElementById("retry-btn");

    if (retryBtn && score < passingScore) {
        retryBtn.style.display = "inline-block";
    }

    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");
    const topic = params.get("topic");
    const lessonKey = subject + "_" + topic;

    localStorage.setItem(lessonKey + "_score", score);
    localStorage.setItem(lessonKey + "_done", "true");
    localStorage.setItem("last_lesson", lessonKey);

    updateGlobalProgress();

    const nextTopicBtn = document.getElementById("next-topic-btn");
    if (nextTopicBtn && score >= passingScore) {
        nextTopicBtn.style.display = "inline-block";
    }
}


function updateGlobalProgress() {
    const allTopics = Object.values(topicData).flat();
    let completed = 0;

    allTopics.forEach(topic => {
        const topicId = topic.toLowerCase().replaceAll(" ", "-");

        for (let subject in topicData) {
            if (topicData[subject].includes(topic)) {
                if (localStorage.getItem(subject + "_" + topicId + "_done")) {
                    completed++;
                }
            }
        }
    });

    const percent = Math.round((completed / allTopics.length) * 100);
    const tracker = document.getElementById("global-progress");

    if (tracker) {
        tracker.innerText = percent + "%";
    }
}

window.addEventListener("load", updateGlobalProgress);









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

function showCourseSelector() {
    const selector = document.getElementById("course-selector");

    if (selector) {
        selector.style.display = "block";
    }
}

const topicData = {

    algebra1: [
        "Solving Equations",
        "Multi Step Equations",
        "Variables on Both Sides",
        "Inequalities",
        "Compound Inequalities",
        "Absolute Value Equations",
        "Absolute Value Inequalities",
        "Coordinate Plane",
        "Graphing Lines",
        "Slope",
        "Slope Intercept Form",
        "Point Slope Form",
        "Standard Form",
        "Linear Functions",
        "Systems of Equations",
        "Systems by Substitution",
        "Systems by Elimination",
        "Systems of Inequalities",
        "Exponents",
        "Scientific Notation",
        "Polynomials",
        "Adding and Subtracting Polynomials",
        "Multiplying Polynomials",
        "Factoring",
        "Quadratic Equations",
        "Graphing Quadratics",
        "Completing the Square",
        "Quadratic Formula",
        "Radicals",
        "Rational Expressions"
    ],

    geometry: [
        "Angles",
        "Triangles",
        "Congruence",
        "Similarity",
        "Circles",
        "Area",
        "Volume",
        "Coordinate Geometry"
    ],

    algebra2: [
        "Complex Numbers",
        "Polynomial Functions",
        "Logarithms",
        "Exponential Functions",
        "Sequences",
        "Series"
    ],

    calculus1: [
        "Limits",
        "Continuity",
        "Derivatives",
        "Applications of Derivatives"
    ],

    calculus2: [
        "Integration",
        "Area Between Curves",
        "Volumes",
        "Sequences",
        "Series"
    ],

    calculus3: [
        "Vectors",
        "Partial Derivatives",
        "Multiple Integrals",
        "Vector Fields"
    ],

    calculus4: [
        "Differential Equations",
        "Laplace Transforms",
        "Fourier Series"
    ]
};

function loadTopics() {

    const subject =
        document.getElementById("subject-select").value;

    const topicSelect =
        document.getElementById("topic-select");

    topicSelect.innerHTML =
        '<option value="">Select topic</option>';

    if (!topicData[subject]) return;

    topicData[subject].forEach(topic => {

        const option =
            document.createElement("option");

        option.value = topic;
        option.textContent = topic;

        topicSelect.appendChild(option);
    });
}

function startSelectedLesson() {

    const subject =
        document.getElementById("subject-select").value;

    const topic =
        document.getElementById("topic-select").value;

    if (!subject || !topic) {

        alert(
            "Please select a course and topic."
        );

        return;
    }

    localStorage.setItem(
        "selectedSubject",
        subject
    );

    localStorage.setItem(
        "selectedTopic",
        topic
    );

    const topicId = topic
        .toLowerCase()
        .replaceAll(" ", "-");

    window.location.href =
        "lesson.html?subject=" + subject + "&topic=" + topicId;
}

const lessonBank = {
    algebra1: {
        "solving-equations": {
            title: "Solving Equations",
            subtitle: "Learn how to isolate x step by step.",
            body: `
                <p>An equation says two expressions are equal.</p>
                <p>Your goal is to find the value of the variable.</p>

                <h2>Example</h2>
                <p><strong>x + 5 = 12</strong></p>
                <p>Subtract 5 from both sides:</p>
                <p><strong>x = 7</strong></p>

                <p>Whatever you do to one side, you must do to the other side.</p>
            `,


            questions: [
                { q: "x + 3 = 8", options: ["4", "5", "6"], answer: "5", explanation: "Subtract 3 from both sides: x = 5." },
                { q: "x - 4 = 10", options: ["6", "14", "40"], answer: "14", explanation: "Add 4 to both sides: x = 14." },
                { q: "2x = 12", options: ["5", "6", "10"], answer: "6", explanation: "Divide both sides by 2: x = 6." },
                { q: "x / 3 = 4", options: ["1", "7", "12"], answer: "12", explanation: "Multiply both sides by 3: x = 12." },
                { q: "x + 9 = 20", options: ["9", "11", "29"], answer: "11", explanation: "Subtract 9 from both sides: x = 11." },

                { q: "3x = 21", options: ["6", "7", "9"], answer: "7", explanation: "Divide both sides by 3: x = 7." },
                { q: "x - 8 = 15", options: ["7", "23", "120"], answer: "23", explanation: "Add 8 to both sides: x = 23." },
                { q: "4x = 32", options: ["6", "8", "12"], answer: "8", explanation: "Divide both sides by 4: x = 8." },
                { q: "x / 5 = 6", options: ["11", "30", "1"], answer: "30", explanation: "Multiply both sides by 5: x = 30." },
                { q: "x + 14 = 25", options: ["11", "39", "9"], answer: "11", explanation: "Subtract 14 from both sides: x = 11." },

                { q: "2x + 3 = 11", options: ["3", "4", "7"], answer: "4", explanation: "Subtract 3: 2x = 8. Divide by 2: x = 4." },
                { q: "5x - 10 = 15", options: ["3", "5", "25"], answer: "5", explanation: "Add 10: 5x = 25. Divide by 5: x = 5." },
                { q: "3x + 6 = 18", options: ["4", "6", "8"], answer: "4", explanation: "Subtract 6: 3x = 12. Divide by 3: x = 4." },
                { q: "4x - 7 = 9", options: ["2", "4", "16"], answer: "4", explanation: "Add 7: 4x = 16. Divide by 4: x = 4." },
                { q: "6x + 2 = 20", options: ["2", "3", "6"], answer: "3", explanation: "Subtract 2: 6x = 18. Divide by 6: x = 3." },
                { q: "7x - 5 = 30", options: ["4", "5", "7"], answer: "5", explanation: "Add 5: 7x = 35. Divide by 7: x = 5." },
                { q: "8x + 4 = 28", options: ["3", "4", "6"], answer: "3", explanation: "Subtract 4: 8x = 24. Divide by 8: x = 3." },
                { q: "9x - 9 = 45", options: ["4", "5", "6"], answer: "6", explanation: "Add 9: 9x = 54. Divide by 9: x = 6." },
                { q: "10x + 5 = 65", options: ["5", "6", "7"], answer: "6", explanation: "Subtract 5: 10x = 60. Divide by 10: x = 6." },
                { q: "12x - 6 = 30", options: ["2", "3", "4"], answer: "3", explanation: "Add 6: 12x = 36. Divide by 12: x = 3." }
            ]
        },

        "multi-step-equations": {
            title: "Multi-Step Equations",
            subtitle: "Solve equations that take more than one move.",
            body: `
        <p>A multi-step equation needs more than one operation to solve.</p>
        <p>The goal is still the same: isolate the variable.</p>

        <h2>Example</h2>
        <p><strong>2x + 5 = 17</strong></p>
        <p>Step 1: Subtract 5 from both sides.</p>
        <p><strong>2x = 12</strong></p>
        <p>Step 2: Divide both sides by 2.</p>
        <p><strong>x = 6</strong></p>

        <p>Always undo addition/subtraction first, then multiplication/division.</p>
    `,

            questions: [
                { q: "2x + 3 = 11", options: ["3", "4", "7"], answer: "4", explanation: "Subtract 3: 2x = 8. Divide by 2: x = 4." },
                { q: "3x + 4 = 19", options: ["5", "6", "7"], answer: "5", explanation: "Subtract 4: 3x = 15. Divide by 3: x = 5." },
                { q: "4x - 2 = 14", options: ["3", "4", "5"], answer: "4", explanation: "Add 2: 4x = 16. Divide by 4: x = 4." },
                { q: "5x + 5 = 30", options: ["4", "5", "6"], answer: "5", explanation: "Subtract 5: 5x = 25. Divide by 5: x = 5." },
                { q: "6x - 6 = 18", options: ["3", "4", "5"], answer: "4", explanation: "Add 6: 6x = 24. Divide by 6: x = 4." },

                { q: "2x - 7 = 15", options: ["8", "10", "11"], answer: "11", explanation: "Add 7: 2x = 22. Divide by 2: x = 11." },
                { q: "3x - 9 = 12", options: ["5", "6", "7"], answer: "7", explanation: "Add 9: 3x = 21. Divide by 3: x = 7." },
                { q: "4x + 8 = 28", options: ["4", "5", "6"], answer: "5", explanation: "Subtract 8: 4x = 20. Divide by 4: x = 5." },
                { q: "7x + 1 = 50", options: ["6", "7", "8"], answer: "7", explanation: "Subtract 1: 7x = 49. Divide by 7: x = 7." },
                { q: "8x - 4 = 60", options: ["7", "8", "9"], answer: "8", explanation: "Add 4: 8x = 64. Divide by 8: x = 8." },

                { q: "2(x + 3) = 14", options: ["4", "5", "7"], answer: "4", explanation: "Distribute: 2x + 6 = 14. Subtract 6: 2x = 8. Divide by 2: x = 4." },
                { q: "3(x - 2) = 15", options: ["5", "7", "9"], answer: "7", explanation: "Distribute: 3x - 6 = 15. Add 6: 3x = 21. Divide by 3: x = 7." },
                { q: "4(x + 1) = 24", options: ["4", "5", "6"], answer: "5", explanation: "Distribute: 4x + 4 = 24. Subtract 4: 4x = 20. Divide by 4: x = 5." },
                { q: "5(x - 3) = 20", options: ["4", "7", "10"], answer: "7", explanation: "Distribute: 5x - 15 = 20. Add 15: 5x = 35. Divide by 5: x = 7." },
                { q: "6(x + 2) = 48", options: ["6", "8", "10"], answer: "6", explanation: "Distribute: 6x + 12 = 48. Subtract 12: 6x = 36. Divide by 6: x = 6." },
                { q: "2x + 5 = 3x - 4", options: ["7", "8", "9"], answer: "9", explanation: "Subtract 2x: 5 = x - 4. Add 4: x = 9." },
                { q: "4x - 6 = 2x + 10", options: ["6", "8", "10"], answer: "8", explanation: "Subtract 2x: 2x - 6 = 10. Add 6: 2x = 16. Divide by 2: x = 8." },
                { q: "5x + 2 = 3x + 18", options: ["6", "8", "10"], answer: "8", explanation: "Subtract 3x: 2x + 2 = 18. Subtract 2: 2x = 16. Divide by 2: x = 8." },
                { q: "7x - 5 = 4x + 16", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 4x: 3x - 5 = 16. Add 5: 3x = 21. Divide by 3: x = 7." },
                { q: "9x + 3 = 6x + 24", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 6x: 3x + 3 = 24. Subtract 3: 3x = 21. Divide by 3: x = 7." }
            ]
        },

        "variables-on-both-sides": {
            title: "Variables on Both Sides",
            subtitle: "Move variables to one side before solving.",
            body: `
                <p>Some equations have variables on both sides.</p>
                <p>Move all x terms to one side first.</p>

                <h2>Example</h2>

                <p><strong>3x + 4 = x + 12</strong></p>

                <p>Subtract x from both sides:</p>
                <p><strong>2x + 4 = 12</strong></p>

                <p>Subtract 4:</p>
                <p><strong>2x = 8</strong></p>

                <p>Divide by 2:</p>
                <p><strong>x = 4</strong></p>
            `,
            questions: [
                {
                    q: "2x + 3 = x + 7",
                    options: ["2", "4", "6"],
                    answer: "4",
                    explanation: "Subtract x from both sides, then subtract 3."
                }
            ]
        }

    }
};




























function loadDynamicLesson() {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");
    const topic = params.get("topic");

    if (!subject || !topic) return;

    const lesson = lessonBank[subject]?.[topic];
    if (!lesson) {
        document.getElementById("lesson-title").innerText = "Coming Soon";
        document.getElementById("lesson-subtitle").innerText = "This lesson is being built.";
        document.getElementById("lesson-body").innerHTML = `
        <p>This topic has been added to the BuildBright roadmap.</p>
        <p>Full lesson content and 20 practice questions will be added soon.</p>
    `;

        const startQuizBtn = document.getElementById("start-quiz-btn");
        if (startQuizBtn) {
            startQuizBtn.style.display = "none";
        }

        return;
    };

    document.getElementById("lesson-title").innerText = lesson.title;
    document.getElementById("lesson-subtitle").innerText = lesson.subtitle;
    document.getElementById("lesson-body").innerHTML = lesson.body;

    window.templateQuestions = lesson.questions;
}

function startQuiz() {
    document.getElementById("quiz-section").style.display = "block";
    document.getElementById("start-quiz-btn").style.display = "none";
    loadQuiz();
}

window.addEventListener("load", loadDynamicLesson);

function goToNextTopic() {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");
    const topic = params.get("topic");

    const topics = topicData[subject];

    if (!topics) return;

    const topicNames = topics.map(t =>
        t.toLowerCase().replaceAll(" ", "-")
    );

    const index = topicNames.indexOf(topic);

    if (index !== -1 && index < topicNames.length - 1) {
        const nextTopic = topicNames[index + 1];

        window.location.href =
            "lesson.html?subject=" + subject + "&topic=" + nextTopic;
    } else {
        window.location.href = "index.html";
    }
}