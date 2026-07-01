





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
        el.innerText = streak + " days";
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

    const lessonNavigation = `
        <div class="lesson-navigation">
            <button class="nav-prev" onclick="goToPreviousTopic()">⬅ Previous</button>
            <button class="nav-home" onclick="window.location.href='index.html'">🏠 Home</button>
            <button class="nav-next" onclick="goToNextTopic()">Next ➜</button>
        </div>
    `;

    document.getElementById("lesson-title").innerText = "";
    document.getElementById("lesson-subtitle").innerText = "";
    document.getElementById("lesson-body").innerHTML =
        upgradedHeader + lesson.body + lessonNavigation;

    window.templateQuestions = lesson.questions;
}


function startQuiz() {
    const quizSection = document.getElementById("quiz-section");
    const startBtn = document.getElementById("start-quiz-btn");

    if (quizSection) quizSection.style.display = "block";
    if (startBtn) startBtn.style.display = "none";

    function loadQuiz() {
        if (!window.templateQuestions) return;

        const quizDiv = document.getElementById("quiz");
        if (!quizDiv) return;

        quizDiv.innerHTML = "";

        templateQuestions.forEach((item, index) => {
            let html = `
            <div class="quiz-card">
                <div class="quiz-question">Q${index + 1}. ${item.q}</div>
        `;

            item.options.forEach(opt => {
                html += `
                <label class="quiz-option">
                    <input type="radio" name="q${index}" value="${opt}">
                    ${opt}
                </label>
            `;
            });

            html += `</div>`;

            quizDiv.innerHTML += html;
        });
    }
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

    const scoreBox = document.getElementById("score");
    const feedbackBox = document.getElementById("feedback");

    if (feedbackBox) {
        feedbackBox.classList.add("quiz-results-box");
    }

    templateQuestions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const allOptions = document.querySelectorAll(`input[name="q${index}"]`);

        allOptions.forEach(option => {
            const label = option.parentElement;

            if (option.value === item.answer) {
                label.classList.add("correct");
            }

            if (selected && option === selected && selected.value !== item.answer) {
                label.classList.add("wrong");
            }

            option.disabled = true;
        });

        if (selected && selected.value === item.answer) {
            score++;
        } else {
            feedback += `Question ${index + 1}: ${item.explanation}\n\n`;
        }
    });

    const passingScore = Math.ceil(templateQuestions.length * 0.7);

    if (scoreBox) {
        scoreBox.innerText = "Score: " + score + "/" + templateQuestions.length;
    }


    if (feedbackBox) {
        if (score >= passingScore) {
            feedbackBox.innerHTML = `
            <div class="lesson-complete-card">
                <h2>🎉 Lesson Complete!</h2>

                <p>Score: ${score}/${templateQuestions.length}</p>

                <div class="lesson-complete-xp">⭐ +25 XP</div>

                <p>Great job! You passed this lesson.</p>

                ${feedback ? `<p style="white-space:pre-line;text-align:left;margin-top:18px;">Review:\n\n${feedback}</p>` : ""}

                <div class="lesson-complete-actions">
                    <button class="complete-next-btn" onclick="goToNextTopic()">Continue ➜</button>
                    <button class="complete-home-btn" onclick="window.location.href='index.html'">🏠 Home</button>
                </div>
            </div>
        `;
        } else {
            feedbackBox.innerHTML = `
            <div class="lesson-complete-card" style="background:#fff7ed;border-color:#fed7aa;">
                <h2 style="color:#9a3412;">Keep Practicing</h2>

                <p>Score: ${score}/${templateQuestions.length}</p>

                <p>You need ${passingScore}/${templateQuestions.length} to pass.</p>

                <p style="white-space:pre-line;text-align:left;margin-top:18px;">Review:\n\n${feedback}</p>
            </div>
        `;
        }
    }

    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");
    const topic = params.get("topic");
    const lessonKey = subject + "_" + topic;

    localStorage.setItem(lessonKey + "_score", score);
    localStorage.setItem(lessonKey + "_done", "true");
    localStorage.setItem("last_lesson", lessonKey);

    if (score >= passingScore) {

        const xpEarned = 25;

        const newXP = addXP(xpEarned);

        checkAchievements(score, templateQuestions.length);

        feedback += "\n\n⭐ You earned " + xpEarned + " XP!";
        feedback += "\n🏆 Total XP: " + newXP;

    }


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



function getXP() {
    return parseInt(localStorage.getItem("buildbright_xp") || "0");
}

function addXP(amount) {
    const total = getXP() + amount;
    localStorage.setItem("buildbright_xp", total);
    return total;
}

function updateXPDisplay() {
    const xp = getXP();

    const el = document.getElementById("xp-display");

    if (el) {
        el.innerText = xp + " XP";
    }
}

/* ===============================
   ACHIEVEMENTS
================================ */

function unlockAchievement(id, title, description) {
    const key = "achievement_" + id;

    if (localStorage.getItem(key)) return;

    localStorage.setItem(key, "true");

    const popup = document.createElement("div");
    popup.className = "achievement-popup";
    popup.innerHTML = `
        <h3>🏆 Achievement Unlocked!</h3>
        <strong>${title}</strong>
        <p>${description}</p>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 4500);
}

function checkAchievements(score, totalQuestions) {
    const totalXP = getXP();

    if (totalXP >= 25) {
        unlockAchievement("first_xp", "First Steps", "Earned your first XP.");
    }

    if (score === totalQuestions) {
        unlockAchievement("perfect_quiz", "Perfect Score", "Got every question correct.");
    }

    if (totalXP >= 500) {
        unlockAchievement("xp_500", "Rising Scholar", "Earned 500 total XP.");
    }

    if (totalXP >= 1000) {
        unlockAchievement("xp_1000", "BuildBright Champion", "Earned 1000 total XP.");
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

function goToPreviousTopic() {

    const params = new URLSearchParams(window.location.search);

    const subject = params.get("subject");
    const topic = params.get("topic");

    const topics = topicData[subject];

    if (!topics) return;

    const index = topics.indexOf(topic);

    if (index > 0) {

        const previousTopic = topics[index - 1];

        window.location.href =
            "lesson.html?subject=" +
            subject +
            "&topic=" +
            previousTopic;

    } else {

        window.location.href = "index.html";

    }

}

window.addEventListener("load", () => {

    updateStreak();

    updateGlobalProgress();

    updateXPDisplay();

    loadDynamicLesson();

});