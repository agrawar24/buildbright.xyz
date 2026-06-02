const templateQuestions = [
  {
    q: "Solve: x + 5 = 10",
    options: ["3", "5", "7"],
    answer: "5",
    explanation: "Subtract 5 from both sides: x = 5"
  },
  {
    q: "Solve: 2x = 10",
    options: ["2", "5", "10"],
    answer: "5",
    explanation: "Divide both sides by 2: x = 5"
  },
  {
    q: "Solve: x - 3 = 4",
    options: ["1", "7", "10"],
    answer: "7",
    explanation: "Add 3 to both sides: x = 7"
  }
];

let userAnswers = [];

function loadQuiz() {
  const quizDiv = document.getElementById("quiz");

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
}

window.onload = loadQuiz;