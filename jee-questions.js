/* ==========================================
   BUILDBRIGHT JEE QUESTION EXPLORER
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const chapterSelect =
        document.getElementById("questionChapter");

    const difficultySelect =
        document.getElementById("questionDifficulty");

    const searchInput =
        document.getElementById("questionSearch");

    const questionList =
        document.getElementById("questionList");

    const questionCount =
        document.getElementById("questionCount");

    // Read all three subject question banks.
    const subjectSelect =
        document.getElementById("questionSubject");

    const banks = {
        physics:
            typeof jeePhysicsQuestions !== "undefined"
                ? jeePhysicsQuestions
                : {},

        mathematics:
            typeof jeeMathQuestions !== "undefined"
                ? jeeMathQuestions
                : {},

        chemistry:
            typeof jeeChemistryQuestions !== "undefined"
                ? jeeChemistryQuestions
                : {}
    };

    const questions = [];

    // Combine practice questions from every subject.
    Object.entries(banks).forEach(([subject, bank]) => {

        Object.entries(bank).forEach(([chapter, data]) => {

            if (!Array.isArray(data.practice)) {
                return;
            }

            data.practice.forEach((question, index) => {

                if (
                    !question ||
                    typeof question.question !== "string" ||
                    !Array.isArray(question.options) ||
                    question.options.length !== 4 ||
                    !Number.isInteger(question.answer) ||
                    question.answer < 0 ||
                    question.answer > 3
                ) {
                    return;
                }

                questions.push({
                    ...question,
                    subject,
                    chapter,
                    uniqueId:
                        subject + "-" + chapter + "-" +
                        (question.id || index)
                });

            });

        });

    });

    // Show chapters belonging to the selected subject.
    function updateChapterOptions() {

        const selectedSubject = subjectSelect.value;

        const availableChapters = [
            ...new Set(
                questions
                    .filter(q =>
                        selectedSubject === "all" ||
                        q.subject === selectedSubject
                    )
                    .map(q => q.chapter)
            )
        ].sort();

        chapterSelect.replaceChildren();

        const allOption = document.createElement("option");
        allOption.value = "all";
        allOption.textContent = "All Chapters";

        chapterSelect.appendChild(allOption);

        availableChapters.forEach(chapter => {

            const option = document.createElement("option");

            option.value = chapter;
            option.textContent = chapter;

            chapterSelect.appendChild(option);

        });

    }
    // Add available difficulty levels.
    [...new Set(
        questions.map(q => q.difficulty).filter(Boolean)
    )]
        .sort()
        .forEach(difficulty => {

            const option = document.createElement("option");

            option.value = difficulty;
            option.textContent = difficulty;

            difficultySelect.appendChild(option);

        });

    function renderQuestions() {


        const selectedSubject = subjectSelect.value;
        const selectedChapter = chapterSelect.value;
        const selectedDifficulty = difficultySelect.value;
        const searchTerm = searchInput.value.trim().toLowerCase();

        const filtered = questions.filter(q => {


            const matchesSubject =
                selectedSubject === "all" ||
                q.subject === selectedSubject;
            const matchesChapter =
                selectedChapter === "all" ||
                q.chapter === selectedChapter;

            const matchesDifficulty =
                selectedDifficulty === "all" ||
                q.difficulty === selectedDifficulty;

            const searchableText = [
                q.question,
                q.topic,
                q.chapter
            ].join(" ").toLowerCase();

            const matchesSearch =
                searchableText.includes(searchTerm);

            return matchesSubject &&
                matchesChapter &&
                matchesDifficulty &&
                matchesSearch;

        });

        questionCount.textContent =
            filtered.length + " questions available";

        questionList.replaceChildren();

        if (filtered.length === 0) {

            const empty = document.createElement("p");

            empty.className = "question-bank-empty";
            empty.textContent =
                "No questions match your filters. Try another chapter or search.";

            questionList.appendChild(empty);
            return;

        }

        filtered.forEach((question, index) => {

            const card = document.createElement("article");
            card.className = "question-bank-card";

            const meta = document.createElement("div");
            meta.className = "question-bank-meta";
            const subjectBadge = document.createElement("span");

            subjectBadge.textContent =
                question.subject.charAt(0).toUpperCase() +
                question.subject.slice(1);

            meta.appendChild(subjectBadge);

            const chapter = document.createElement("span");
            chapter.textContent = question.chapter;

            const difficulty = document.createElement("span");
            difficulty.textContent =
                question.difficulty || "Practice";

            meta.append(chapter, difficulty);

            const title = document.createElement("h3");
            title.textContent =
                (index + 1) + ". " + question.question;

            const options = document.createElement("div");
            options.className = "question-bank-options";

            const feedback = document.createElement("div");
            feedback.className = "question-bank-feedback";
            feedback.setAttribute("aria-live", "polite");

            const optionButtons = [];

            question.options.forEach((answer, answerIndex) => {

                const button = document.createElement("button");

                button.type = "button";
                button.className = "question-bank-option";

                button.textContent =
                    String.fromCharCode(65 + answerIndex) +
                    ". " + answer;

                button.addEventListener("click", () => {

                    const isCorrect =
                        answerIndex === question.answer;

                    optionButtons.forEach((optionButton, i) => {

                        optionButton.disabled = true;

                        if (i === question.answer) {
                            optionButton.classList.add("correct");
                        }

                        if (
                            i === answerIndex &&
                            !isCorrect
                        ) {
                            optionButton.classList.add("incorrect");
                        }

                    });

                    const result = document.createElement("strong");

                    result.textContent = isCorrect
                        ? "Correct answer!"
                        : "Not quite. Review the explanation.";

                    const explanation = document.createElement("p");

                    explanation.textContent =
                        question.explanation ||
                        "No explanation available yet.";

                    feedback.replaceChildren(
                        result,
                        explanation
                    );

                    feedback.classList.add("visible");

                });

                optionButtons.push(button);
                options.appendChild(button);

            });

            card.append(
                meta,
                title,
                options,
                feedback
            );

            questionList.appendChild(card);

        });

    }


    subjectSelect.addEventListener("change", () => {

        updateChapterOptions();
        renderQuestions();

    });
    chapterSelect.addEventListener("change", renderQuestions);
    difficultySelect.addEventListener("change", renderQuestions);
    searchInput.addEventListener("input", renderQuestions);

    updateChapterOptions();
    renderQuestions();

});