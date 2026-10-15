const jeeMathQuestions = {

    "Quadratic Equations": {

        practice: [
            {
                id: "math-q-001",
                topic: "Roots",
                difficulty: "Foundation",
                question: "Find the roots of x² - 5x + 6 = 0.",
                options: [
                    "1 and 6",
                    "2 and 3",
                    "-2 and -3",
                    "-1 and -6"
                ],
                answer: 1,
                explanation:
                    "Factor: (x - 2)(x - 3) = 0. The roots are 2 and 3."
            },
            {
                id: "math-q-002",
                topic: "Discriminant",
                difficulty: "Medium",
                question: "For what value of k does x² - 4x + k = 0 have equal real roots?",
                options: ["2", "4", "8", "16"],
                answer: 1,
                explanation:
                    "Equal roots require b² - 4ac = 0. Thus 16 - 4k = 0, giving k = 4."
            },
            {
                id: "math-q-003",
                topic: "Nature of Roots",
                difficulty: "Medium",
                question: "How many distinct real roots does 2x² + 3x + 5 = 0 have?",
                options: ["0", "1", "2", "3"],
                answer: 0,
                explanation:
                    "The discriminant is 3² - 4(2)(5) = -31. A negative discriminant means no real roots."
            }
        ],

        test: [
            {
                id: "math-qt-001",
                topic: "Sum of Roots",
                difficulty: "Foundation",
                question: "What is the sum of the roots of 3x² - 7x + 2 = 0?",
                options: ["7/3", "-7/3", "2/3", "-2/3"],
                answer: 0,
                explanation:
                    "For ax² + bx + c = 0, the sum of roots is -b/a = 7/3."
            },
            {
                id: "math-qt-002",
                topic: "Product of Roots",
                difficulty: "Medium",
                question: "What is the product of the roots of 5x² + 2x - 15 = 0?",
                options: ["3", "-3", "2/5", "-2/5"],
                answer: 1,
                explanation:
                    "The product of roots is c/a = -15/5 = -3."
            }
        ]
    },

    "Sequences and Series": {

        practice: [
            {
                id: "math-s-001",
                topic: "Arithmetic Progression",
                difficulty: "Foundation",
                question: "Find the 10th term of the AP 3, 7, 11, 15, ...",
                options: ["35", "39", "43", "47"],
                answer: 1,
                explanation:
                    "a₁₀ = a + 9d = 3 + 9(4) = 39."
            },
            {
                id: "math-s-002",
                topic: "Geometric Progression",
                difficulty: "Medium",
                question: "Find the 5th term of the GP 2, 6, 18, ...",
                options: ["54", "81", "162", "243"],
                answer: 2,
                explanation:
                    "The common ratio is 3. The 5th term is 2 × 3⁴ = 162."
            },
            {
                id: "math-s-003",
                topic: "Arithmetic Series",
                difficulty: "Foundation",
                question: "What is the sum of the first 20 positive integers?",
                options: ["190", "200", "210", "220"],
                answer: 2,
                explanation:
                    "S = n(n + 1)/2 = 20 × 21/2 = 210."
            }
        ],

        test: [
            {
                id: "math-st-001",
                topic: "Geometric Series",
                difficulty: "Medium",
                question: "Find the sum 1 + 2 + 4 + 8 + 16.",
                options: ["30", "31", "32", "33"],
                answer: 1,
                explanation:
                    "The sum is (2⁵ - 1)/(2 - 1) = 31."
            },
            {
                id: "math-st-002",
                topic: "Arithmetic Progression",
                difficulty: "Medium",
                question: "The 4th term of an AP is 11 and the 9th term is 26. Find its common difference.",
                options: ["2", "3", "4", "5"],
                answer: 1,
                explanation:
                    "The difference between the 9th and 4th terms is 5d = 26 - 11 = 15, so d = 3."
            }
        ]
    }
};