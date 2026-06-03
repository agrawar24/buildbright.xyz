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

    // Show score
    document.getElementById("score").innerText =
        "Score: " + score + "/" + templateQuestions.length;

    document.getElementById("feedback").innerText = feedback;

    // 🔥 SAVE PROGRESS
    localStorage.setItem("solving_equations_score", score);
}
window.onload = function () {
    loadQuiz();

    // Load saved score
    const saved = localStorage.getItem("solving_equations_score");

    if (saved !== null) {
        document.getElementById("score").innerText =
            "Previous Score: " + saved + "/10";
    }
};