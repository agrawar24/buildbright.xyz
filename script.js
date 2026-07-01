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

const lessonBank = {
    algebra1: algebra1Lessons,
    geometry: geometryLessons
};

const topicData = {
    algebra1: Object.keys(algebra1Lessons),
    geometry: Object.keys(geometryLessons),

    algebra2: [],
    calculus1: [],
    calculus2: [],
    calculus3: [],
    calculus4: []
};

function showCourseSelector() {
    const selector = document.getElementById("course-selector");

    if (selector) {
        selector.style.display = "block";
    }
}

function formatTopicName(topicId) {
    const lesson = lessonBank.algebra1?.[topicId];
    if (lesson && lesson.title) return lesson.title;

    return topicId
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function loadTopics() {
    const subjectSelect = document.getElementById("subject-select");
    const topicSelect = document.getElementById("topic-select");



    if (!subjectSelect || !topicSelect) return;

    const subject = subjectSelect.value;

    topicSelect.innerHTML = '<option value="">Select topic</option>';

    if (!topicData[subject]) return;

    topicData[subject].forEach(topicId => {
        const option = document.createElement("option");

        option.value = topicId;
        option.textContent = formatTopicName(topicId);

        topicSelect.appendChild(option);
    });
}

function startSelectedLesson() {
    const subject = document.getElementById("subject-select").value;
    const topic = document.getElementById("topic-select").value;

    if (!subject || !topic) {
        alert("Please select a course and topic.");
        return;
    }

    localStorage.setItem("selectedSubject", subject);
    localStorage.setItem("selectedTopic", topic);

    window.location.href =
        "lesson.html?subject=" + subject + "&topic=" + topic;
}

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
            <p>Full lesson content and practice questions will be added soon.</p>
        `;

        const startQuizBtn = document.getElementById("start-quiz-btn");
        if (startQuizBtn) startQuizBtn.style.display = "none";

        return;
    }

    const lessonKeys = Object.keys(lessonBank[subject]);
    const currentIndex = lessonKeys.indexOf(topic);
    const progressPercent = Math.round(((currentIndex + 1) / lessonKeys.length) * 100);

    const upgradedHeader = `
    <section class="lesson-header">
        <div class="lesson-kicker">
            📘 ${subject.toUpperCase()} • Lesson ${currentIndex + 1} of ${lessonKeys.length}
        </div>

        <div class="lesson-title-row">
            <div class="lesson-title-main">
                <h1>${lesson.title}</h1>
                <p>${lesson.subtitle || ""}</p>
            </div>

            <div class="lesson-badges">
                <span class="lesson-badge">🟢 Core</span>
                <span class="lesson-badge">⏱ 8–10 min</span>
                <span class="lesson-badge">${progressPercent}% Complete</span>
            </div>
        </div>

        <div class="lesson-progress-wrap">
            <div class="lesson-progress-info">
                <span>Course Progress</span>
                <span>${currentIndex + 1}/${lessonKeys.length}</span>
            </div>

            <div class="lesson-progress-bar">
                <div class="lesson-progress-fill" style="width:${progressPercent}%"></div>
            </div>
        </div>
    </section>
`;

    document.getElementById("lesson-title").innerText = "";
    document.getElementById("lesson-subtitle").innerText = "";
    document.getElementById("lesson-body").innerHTML = upgradedHeader + lesson.body;

    window.templateQuestions = lesson.questions;
}

function startQuiz() {
    const quizSection = document.getElementById("quiz-section");
    const startBtn = document.getElementById("start-quiz-btn");

    if (quizSection) quizSection.style.display = "block";
    if (startBtn) startBtn.style.display = "none";

    loadQuiz();
}

function loadQuiz() {
    if (!window.templateQuestions) return;

    const quizDiv = document.getElementById("quiz");
    if (!quizDiv) return;

    quizDiv.innerHTML = "";

    templateQuestions.forEach((item, index) => {
        let html = `<p><strong>Q${index + 1}. ${item.q}</strong></p>`;

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

    const scoreBox = document.getElementById("score");
    const feedbackBox = document.getElementById("feedback");

    const passingScore = Math.ceil(templateQuestions.length * 0.7);

    if (scoreBox) {
        scoreBox.innerText = "Score: " + score + "/" + templateQuestions.length;
    }

    if (feedbackBox) {
        if (score === templateQuestions.length) {
            feedbackBox.innerText = "🏆 Perfect score! Excellent work.";
        } else if (score >= passingScore) {
            feedbackBox.innerText =
                "✅ Lesson passed!\n\nReview these explanations:\n\n" + feedback;
        } else {
            feedbackBox.innerText =
                "❌ Try again.\n\nReview these explanations:\n\n" + feedback;
        }
    }

    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");
    const topic = params.get("topic");
    const lessonKey = subject + "_" + topic;

    localStorage.setItem(lessonKey + "_score", score);
    localStorage.setItem(lessonKey + "_done", "true");
    localStorage.setItem("last_lesson", lessonKey);

    updateGlobalProgress();

    const retryBtn = document.getElementById("retry-btn");
    if (retryBtn && score < passingScore) {
        retryBtn.style.display = "inline-block";
    }

    const nextTopicBtn = document.getElementById("next-topic-btn");
    if (nextTopicBtn && score >= passingScore) {
        nextTopicBtn.style.display = "inline-block";
    }
}
function updateGlobalProgress() {
    const allTopics = Object.entries(topicData).flatMap(([subject, topics]) =>
        topics.map(topic => ({ subject, topic }))
    );
    let completed = 0;
    allTopics.forEach(item => {
        if (localStorage.getItem(item.subject + "_" + item.topic + "_done")) {
            completed++;
        }
    });
    const percent = allTopics.length
        ? Math.round((completed / allTopics.length) * 100)
        : 0;
    const tracker = document.getElementById("global-progress");
    if (tracker) {
        tracker.innerText = percent + "%";
    }
}
function goToNextTopic() {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");
    const topic = params.get("topic");

    const topics = topicData[subject];
    if (!topics) return;

    const index = topics.indexOf(topic);

    if (index !== -1 && index < topics.length - 1) {
        const nextTopic = topics[index + 1];

        window.location.href =
            "lesson.html?subject=" + subject + "&topic=" + nextTopic;
    } else {
        window.location.href = "index.html";
    }
}
window.addEventListener("load", () => {
    updateStreak();
    updateGlobalProgress();
    loadDynamicLesson();
});