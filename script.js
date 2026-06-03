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
        total: 2,
        lessons: ["equations", "inequalities"]
    }
};
function checkTemplateQuiz() {
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

    updateProgress();
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

    const percent = Math.round((completed / course.total) * 100);

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
window.addEventListener("load", () => {
    loadLesson();
    updateProgress();
});