/* ==========================================
   BUILDBRIGHT — SHARED JEE QUESTION LOADER
   ========================================== */

function getJeeQuestions(subject, chapter, mode = "practice") {

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

    const subjectBank = banks[subject];

    if (!subjectBank) {
        return [];
    }

    const chapterBank = subjectBank[chapter];

    if (!chapterBank) {
        return [];
    }

    const questions = chapterBank[mode];

    if (!Array.isArray(questions)) {
        return [];
    }

    return questions.filter(question =>
        question &&
        typeof question.question === "string" &&
        Array.isArray(question.options) &&
        question.options.length === 4 &&
        Number.isInteger(question.answer) &&
        question.answer >= 0 &&
        question.answer < 4
    );
}