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
    localStorage.setItem("solving_equations_score", score);

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
    const score = localStorage.getItem("solving_equations_score");
    const status = document.getElementById("eq-status");

    if (score && status) {
        status.innerText = "Completed ✔ Score: " + score + "/10";
        status.style.color = "lime";

        const ineq = document.getElementById("ineq-status");
        const func = document.getElementById("func-status");

        if (ineq) {
            ineq.innerText = "Unlocked ✔";
            ineq.style.color = "lime";
        }

        if (func) {
            func.innerText = "Unlocked ✔";
            func.style.color = "lime";
        }
    }
}

// single clean startup
window.addEventListener("load", () => {
    loadQuiz();
    updateProgress();
});