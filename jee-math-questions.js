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
            },
            {
                id: "math-q-004",
                topic: "Sum and Product of Roots",
                difficulty: "Foundation",
                question: "If the roots of x² - 8x + 15 = 0 are α and β, find α + β.",
                options: ["-8", "8", "15", "-15"],
                answer: 1,
                explanation:
                    "For ax² + bx + c = 0, the sum of roots is -b/a. Here, α + β = 8."
            },
            {
                id: "math-q-005",
                topic: "Discriminant",
                difficulty: "Foundation",
                question: "Find the discriminant of x² + 6x + 9 = 0.",
                options: ["0", "9", "18", "36"],
                answer: 0,
                explanation:
                    "D = b² - 4ac = 36 - 36 = 0. The equation has equal real roots."
            },
            {
                id: "math-q-006",
                topic: "Forming Quadratic Equations",
                difficulty: "Medium",
                question: "Which quadratic equation has roots 4 and -3?",
                options: [
                    "x² + x - 12 = 0",
                    "x² - x - 12 = 0",
                    "x² + x + 12 = 0",
                    "x² - x + 12 = 0"
                ],
                answer: 1,
                explanation:
                    "The sum of roots is 1 and their product is -12. The equation is x² - x - 12 = 0."
            },
            {
                id: "math-q-007",
                topic: "Nature of Roots",
                difficulty: "Medium",
                question: "For which values of k does x² + 2x + k = 0 have two distinct real roots?",
                options: ["k > 1", "k = 1", "k < 1", "k ≥ 1"],
                answer: 2,
                explanation:
                    "Two distinct real roots require D > 0. Thus 4 - 4k > 0, giving k < 1."
            },
            {
                id: "math-q-008",
                topic: "Transformation of Roots",
                difficulty: "Hard",
                question: "If α and β are roots of x² - 5x + 3 = 0, find α² + β².",
                options: ["19", "22", "25", "28"],
                answer: 0,
                explanation:
                    "α + β = 5 and αβ = 3. Therefore α² + β² = (α + β)² - 2αβ = 25 - 6 = 19."
            },
            {
                id: "math-q-009",
                topic: "Reciprocal Roots",
                difficulty: "Hard",
                question: "If α and β are roots of 2x² - 7x + 3 = 0, find 1/α + 1/β.",
                options: ["7/3", "3/7", "7/2", "2/7"],
                answer: 0,
                explanation:
                    "1/α + 1/β = (α + β)/(αβ). Since α + β = 7/2 and αβ = 3/2, the result is 7/3."
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
            },
            {
                id: "math-qt-003",
                topic: "Equal Roots",
                difficulty: "Medium",
                question: "Find k if 4x² + kx + 9 = 0 has equal real roots and k is positive.",
                options: ["6", "9", "12", "18"],
                answer: 2,
                explanation:
                    "Equal roots require k² - 4(4)(9) = 0. Thus k² = 144, and positive k = 12."
            },
            {
                id: "math-qt-004",
                topic: "Quadratic Expressions",
                difficulty: "Foundation",
                question: "What is the minimum value of x² - 6x + 11 for real x?",
                options: ["1", "2", "3", "5"],
                answer: 1,
                explanation:
                    "Complete the square: x² - 6x + 11 = (x - 3)² + 2. The minimum value is 2."
            },
            {
                id: "math-qt-005",
                topic: "Roots and Coefficients",
                difficulty: "Hard",
                question: "If the roots of x² - 4x + 1 = 0 are α and β, find α³ + β³.",
                options: ["48", "52", "56", "60"],
                answer: 1,
                explanation:
                    "α + β = 4 and αβ = 1. Using α³ + β³ = (α + β)³ - 3αβ(α + β), we get 64 - 12 = 52."
            },
            {
                id: "math-qt-006",
                topic: "Quadratic Inequalities",
                difficulty: "Hard",
                question: "For which values of x is x² - 5x + 6 < 0?",
                options: [
                    "x < 2",
                    "x > 3",
                    "2 < x < 3",
                    "x < 2 or x > 3"
                ],
                answer: 2,
                explanation:
                    "Factor as (x - 2)(x - 3) < 0. The product is negative between the roots, so 2 < x < 3."
            }
        ],
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
            },
            {
                id: "math-s-004",
                topic: "Arithmetic Progression",
                difficulty: "Foundation",
                question: "Find the 15th term of the AP 5, 8, 11, 14, ...",
                options: ["44", "47", "50", "53"],
                answer: 1,
                explanation:
                    "The first term is 5 and the common difference is 3. a₁₅ = 5 + 14(3) = 47."
            },
            {
                id: "math-s-005",
                topic: "Geometric Progression",
                difficulty: "Foundation",
                question: "Find the common ratio of the GP 3, 12, 48, 192, ...",
                options: ["3", "4", "6", "12"],
                answer: 1,
                explanation:
                    "The common ratio is the second term divided by the first: 12/3 = 4."
            },
            {
                id: "math-s-006",
                topic: "Arithmetic Series",
                difficulty: "Medium",
                question: "Find the sum of the first 25 terms of the AP 2, 5, 8, ...",
                options: ["900", "925", "950", "975"],
                answer: 2,
                explanation:
                    "Sₙ = n/2[2a + (n - 1)d]. Thus S₂₅ = 25/2[4 + 24(3)] = 25/2 × 76 = 950."
            },
            {
                id: "math-s-007",
                topic: "Geometric Series",
                difficulty: "Medium",
                question: "Find the sum of the first 6 terms of the GP 2, 4, 8, ...",
                options: ["62", "126", "128", "254"],
                answer: 1,
                explanation:
                    "S₆ = a(r⁶ - 1)/(r - 1) = 2(64 - 1) = 126."
            },
            {
                id: "math-s-008",
                topic: "Arithmetic Progression",
                difficulty: "Hard",
                question: "The 5th term of an AP is 18 and the 12th term is 46. Find the first term.",
                options: ["2", "4", "6", "8"],
                answer: 0,
                explanation:
                    "a + 4d = 18 and a + 11d = 46. Subtracting gives 7d = 28, so d = 4. Hence a = 18 - 16 = 2."
            },
            {
                id: "math-s-009",
                topic: "Infinite Geometric Series",
                difficulty: "Hard",
                question: "Find the sum to infinity of the GP 12, 6, 3, 3/2, ...",
                options: ["18", "20", "24", "30"],
                answer: 2,
                explanation:
                    "The common ratio is 1/2. Since |r| < 1, S∞ = a/(1 - r) = 12/(1 - 1/2) = 24."
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
            },
            {
                id: "math-st-003",
                topic: "Arithmetic Series",
                difficulty: "Foundation",
                question: "Find the sum of the first 30 positive even integers.",
                options: ["900", "930", "960", "990"],
                answer: 1,
                explanation:
                    "The sum is 2(1 + 2 + ... + 30) = 30 × 31 = 930."
            },
            {
                id: "math-st-004",
                topic: "Geometric Progression",
                difficulty: "Medium",
                question: "The 3rd term of a GP is 12 and the 5th term is 48. If the common ratio is positive, find it.",
                options: ["2", "3", "4", "6"],
                answer: 0,
                explanation:
                    "ar² = 12 and ar⁴ = 48. Dividing gives r² = 4. Since r is positive, r = 2."
            },
            {
                id: "math-st-005",
                topic: "Arithmetic Progression",
                difficulty: "Hard",
                question: "How many terms of the AP 7, 11, 15, ... are needed to obtain a sum of 525?",
                options: ["12", "14", "15", "18"],
                answer: 2,
                explanation:
                    "Sₙ = n/2[14 + 4(n - 1)] = n(2n + 5). For n = 15, the sum is 15 × 35 = 525."
            },
            {
                id: "math-st-006",
                topic: "Infinite Geometric Series",
                difficulty: "Hard",
                question: "The sum to infinity of a GP is 20 and its first term is 5. Find the common ratio.",
                options: ["1/4", "1/2", "3/4", "4/5"],
                answer: 2,
                explanation:
                    "S∞ = a/(1 - r). Therefore 20 = 5/(1 - r), giving 1 - r = 1/4 and r = 3/4."
            }
        ]
    },

    "Complex Numbers": {

        practice: [
            {
                id: "math-c-001",
                topic: "Imaginary Unit",
                difficulty: "Foundation",
                question: "What is the value of i²?",
                options: ["1", "-1", "i", "-i"],
                answer: 1,
                explanation:
                    "By definition, i² = -1."
            },
            {
                id: "math-c-002",
                topic: "Addition",
                difficulty: "Foundation",
                question: "Simplify (3 + 2i) + (4 - 5i).",
                options: ["7 + 7i", "7 - 3i", "-1 + 7i", "-1 - 3i"],
                answer: 1,
                explanation:
                    "Add real parts and imaginary parts separately: 3 + 4 = 7 and 2i - 5i = -3i."
            },
            {
                id: "math-c-003",
                topic: "Conjugate",
                difficulty: "Foundation",
                question: "What is the complex conjugate of 5 - 3i?",
                options: ["-5 + 3i", "5 + 3i", "-5 - 3i", "3 + 5i"],
                answer: 1,
                explanation:
                    "The conjugate of a + bi is a - bi. Therefore, the conjugate of 5 - 3i is 5 + 3i."
            },
            {
                id: "math-c-004",
                topic: "Modulus",
                difficulty: "Medium",
                question: "Find the modulus of 6 + 8i.",
                options: ["8", "10", "12", "14"],
                answer: 1,
                explanation:
                    "|6 + 8i| = √(6² + 8²) = √100 = 10."
            },
            {
                id: "math-c-005",
                topic: "Multiplication",
                difficulty: "Medium",
                question: "Simplify (2 + 3i)(1 - 2i).",
                options: ["8 - i", "8 + i", "-4 - i", "-4 + i"],
                answer: 0,
                explanation:
                    "Expand: 2 - 4i + 3i - 6i² = 2 - i + 6 = 8 - i."
            },
            {
                id: "math-c-006",
                topic: "Powers of i",
                difficulty: "Medium",
                question: "Find the value of i²³.",
                options: ["1", "-1", "i", "-i"],
                answer: 3,
                explanation:
                    "Powers of i repeat every four. Since 23 leaves remainder 3 when divided by 4, i²³ = i³ = -i."
            },
            {
                id: "math-c-007",
                topic: "Division",
                difficulty: "Hard",
                question: "Simplify (3 + 4i)/(1 + 2i).",
                options: [
                    "11/5 + 2i/5",
                    "11/5 - 2i/5",
                    "1 + 2i",
                    "2 + i"
                ],
                answer: 1,
                explanation:
                    "Multiply numerator and denominator by 1 - 2i. The numerator becomes 11 - 2i and the denominator becomes 5."
            },
            {
                id: "math-c-008",
                topic: "Complex Equations",
                difficulty: "Hard",
                question: "If z + conjugate(z) = 8 and z - conjugate(z) = 6i, find z.",
                options: ["4 + 3i", "4 - 3i", "8 + 6i", "3 + 4i"],
                answer: 0,
                explanation:
                    "Let z = a + bi. Then 2a = 8 and 2bi = 6i. Hence a = 4 and b = 3."
            },
            {
                id: "math-c-009",
                topic: "Argument",
                difficulty: "Hard",
                question: "What is the principal argument of -1 + i?",
                options: ["π/4", "3π/4", "-3π/4", "-π/4"],
                answer: 1,
                explanation:
                    "The point (-1, 1) lies in quadrant II with reference angle π/4. Its principal argument is 3π/4."
            }
        ],

        test: [
            {
                id: "math-ct-001",
                topic: "Modulus",
                difficulty: "Foundation",
                question: "Find the modulus of 3 - 4i.",
                options: ["3", "4", "5", "7"],
                answer: 2,
                explanation:
                    "The modulus is √(3² + (-4)²) = 5."
            },
            {
                id: "math-ct-002",
                topic: "Powers of i",
                difficulty: "Foundation",
                question: "Find the value of i¹⁰.",
                options: ["1", "-1", "i", "-i"],
                answer: 1,
                explanation:
                    "Since 10 leaves remainder 2 when divided by 4, i¹⁰ = i² = -1."
            },
            {
                id: "math-ct-003",
                topic: "Conjugate",
                difficulty: "Medium",
                question: "If z = 2 + 5i, find z × conjugate(z).",
                options: ["7", "21", "25", "29"],
                answer: 3,
                explanation:
                    "z × conjugate(z) = |z|² = 2² + 5² = 29."
            },
            {
                id: "math-ct-004",
                topic: "Complex Equations",
                difficulty: "Medium",
                question: "Find the real part of (1 + i)².",
                options: ["0", "1", "2", "-2"],
                answer: 0,
                explanation:
                    "(1 + i)² = 1 + 2i + i² = 2i. Its real part is 0."
            },
            {
                id: "math-ct-005",
                topic: "Modulus Properties",
                difficulty: "Hard",
                question: "If |z| = 3 and |w| = 4, what is |zw|?",
                options: ["1", "7", "12", "25"],
                answer: 2,
                explanation:
                    "The modulus of a product equals the product of the moduli: |zw| = |z||w| = 3 × 4 = 12."
            },
            {
                id: "math-ct-006",
                topic: "Complex Roots",
                difficulty: "Hard",
                question: "Find the roots of z² + 4 = 0.",
                options: [
                    "±2",
                    "±4i",
                    "±2i",
                    "±4"
                ],
                answer: 2,
                explanation:
                    "z² = -4, so z = ±2i."
            }
        ]
    },

    "Permutations and Combinations": {

        practice: [
            {
                id: "math-pc-001",
                topic: "Factorials",
                difficulty: "Foundation",
                question: "Find the value of 5!.",
                options: ["20", "60", "100", "120"],
                answer: 3,
                explanation:
                    "5! = 5 × 4 × 3 × 2 × 1 = 120."
            },
            {
                id: "math-pc-002",
                topic: "Permutations",
                difficulty: "Foundation",
                question: "How many ways can 3 students be arranged in a row?",
                options: ["3", "6", "9", "12"],
                answer: 1,
                explanation:
                    "The number of arrangements is 3! = 6."
            },
            {
                id: "math-pc-003",
                topic: "Combinations",
                difficulty: "Foundation",
                question: "How many ways can 2 students be selected from 5 students?",
                options: ["5", "10", "15", "20"],
                answer: 1,
                explanation:
                    "The number of selections is C(5,2) = 5!/(2!3!) = 10."
            },
            {
                id: "math-pc-004",
                topic: "Permutations",
                difficulty: "Medium",
                question: "Find the number of arrangements of 4 different books on a shelf.",
                options: ["12", "16", "24", "48"],
                answer: 2,
                explanation:
                    "Four distinct books can be arranged in 4! = 24 ways."
            },
            {
                id: "math-pc-005",
                topic: "Combinations",
                difficulty: "Medium",
                question: "How many ways can a committee of 3 be selected from 7 people?",
                options: ["21", "28", "35", "42"],
                answer: 2,
                explanation:
                    "C(7,3) = 7!/(3!4!) = 35."
            },
            {
                id: "math-pc-006",
                topic: "Repeated Letters",
                difficulty: "Medium",
                question: "How many distinct arrangements can be formed using all letters of LEVEL?",
                options: ["20", "30", "60", "120"],
                answer: 1,
                explanation:
                    "LEVEL has 5 letters with L repeated twice and E repeated twice. The number of arrangements is 5!/(2!2!) = 30."
            },
            {
                id: "math-pc-007",
                topic: "Restricted Arrangements",
                difficulty: "Hard",
                question: "In how many ways can 5 distinct people sit in a row if two specified people must sit together?",
                options: ["24", "48", "60", "120"],
                answer: 1,
                explanation:
                    "Treat the two specified people as one block. Arrange 4 units in 4! ways and the pair internally in 2! ways. Total = 4! × 2 = 48."
            },
            {
                id: "math-pc-008",
                topic: "Circular Permutations",
                difficulty: "Hard",
                question: "In how many ways can 6 distinct people sit around a circular table if rotations are considered identical?",
                options: ["120", "240", "360", "720"],
                answer: 0,
                explanation:
                    "For n distinct people around a circle, the number of arrangements is (n - 1)!. Thus 5! = 120."
            },
            {
                id: "math-pc-009",
                topic: "Restricted Selections",
                difficulty: "Hard",
                question: "A group of 3 is selected from 5 boys and 4 girls. How many groups contain exactly 2 girls?",
                options: ["20", "30", "40", "60"],
                answer: 1,
                explanation:
                    "Choose 2 girls from 4 and 1 boy from 5. C(4,2) × C(5,1) = 6 × 5 = 30."
            }
        ],

        test: [
            {
                id: "math-pct-001",
                topic: "Permutations",
                difficulty: "Foundation",
                question: "Find P(5,2), the number of ordered arrangements of 2 objects selected from 5 distinct objects.",
                options: ["10", "15", "20", "25"],
                answer: 2,
                explanation:
                    "P(5,2) = 5!/(5 - 2)! = 5 × 4 = 20."
            },
            {
                id: "math-pct-002",
                topic: "Combinations",
                difficulty: "Foundation",
                question: "Find C(6,2).",
                options: ["12", "15", "18", "30"],
                answer: 1,
                explanation:
                    "C(6,2) = 6 × 5/2 = 15."
            },
            {
                id: "math-pct-003",
                topic: "Repeated Letters",
                difficulty: "Medium",
                question: "How many distinct arrangements can be made using all letters of BANANA?",
                options: ["30", "60", "90", "120"],
                answer: 1,
                explanation:
                    "BANANA has 6 letters: A occurs 3 times and N occurs twice. The number of arrangements is 6!/(3!2!) = 60."
            },
            {
                id: "math-pct-004",
                topic: "Restricted Arrangements",
                difficulty: "Medium",
                question: "How many ways can 4 distinct people sit in a row if two specified people must not sit together?",
                options: ["8", "12", "16", "24"],
                answer: 1,
                explanation:
                    "Total arrangements = 4! = 24. Arrangements with the pair together = 3! × 2! = 12. Required = 24 - 12 = 12."
            },
            {
                id: "math-pct-005",
                topic: "Restricted Selections",
                difficulty: "Hard",
                question: "A committee of 4 is formed from 6 men and 5 women. How many committees contain exactly 2 men and 2 women?",
                options: ["100", "120", "150", "180"],
                answer: 2,
                explanation:
                    "Choose 2 men from 6 and 2 women from 5. C(6,2) × C(5,2) = 15 × 10 = 150."
            },
            {
                id: "math-pct-006",
                topic: "Circular Permutations",
                difficulty: "Hard",
                question: "In how many ways can 5 distinct people sit around a circular table if rotations are considered identical?",
                options: ["12", "24", "60", "120"],
                answer: 1,
                explanation:
                    "The number of circular arrangements is (5 - 1)! = 4! = 24."
            }
        ]
    },

    "Binomial Theorem": {

        practice: [
            {
                id: "math-bt-001",
                topic: "Binomial Expansion",
                difficulty: "Foundation",
                question: "Expand (1 + x)³.",
                options: [
                    "1 + 3x + 3x² + x³",
                    "1 + 2x + 3x² + x³",
                    "1 + 3x + x² + x³",
                    "1 + x + x² + x³"
                ],
                answer: 0,
                explanation:
                    "Using binomial coefficients 1, 3, 3, 1, we get (1 + x)³ = 1 + 3x + 3x² + x³."
            },
            {
                id: "math-bt-002",
                topic: "Binomial Coefficients",
                difficulty: "Foundation",
                question: "Find the value of C(7,2).",
                options: ["14", "21", "28", "35"],
                answer: 1,
                explanation:
                    "C(7,2) = 7!/(2!5!) = 7 × 6/2 = 21."
            },
            {
                id: "math-bt-003",
                topic: "Number of Terms",
                difficulty: "Foundation",
                question: "How many terms are there in the expansion of (a + b)⁸ before combining any like terms?",
                options: ["7", "8", "9", "10"],
                answer: 2,
                explanation:
                    "The binomial expansion of (a + b)ⁿ contains n + 1 terms. For n = 8, there are 9 terms."
            },
            {
                id: "math-bt-004",
                topic: "Coefficient of a Term",
                difficulty: "Medium",
                question: "Find the coefficient of x³ in (1 + x)⁶.",
                options: ["15", "20", "30", "60"],
                answer: 1,
                explanation:
                    "The coefficient of x³ is C(6,3) = 6!/(3!3!) = 20."
            },
            {
                id: "math-bt-005",
                topic: "General Term",
                difficulty: "Medium",
                question: "Find the fourth term in the expansion of (2 + x)⁵.",
                options: ["20x³", "40x³", "80x³", "10x³"],
                answer: 1,
                explanation:
                    "T₄ = C(5,3) × 2² × x³ = 10 × 4x³ = 40x³."
            },
            {
                id: "math-bt-006",
                topic: "Middle Term",
                difficulty: "Medium",
                question: "Find the middle term in the expansion of (1 + x)⁴.",
                options: ["4x", "6x²", "4x³", "x⁴"],
                answer: 1,
                explanation:
                    "There are 5 terms, so the third term is the middle term. T₃ = C(4,2)x² = 6x²."
            },
            {
                id: "math-bt-007",
                topic: "Independent Term",
                difficulty: "Hard",
                question: "Find the term independent of x in (x² + 1/x)⁶.",
                options: ["10", "15", "20", "30"],
                answer: 1,
                explanation:
                    "The general term is C(6,r)x^(12-3r). For a constant term, 12 - 3r = 0, so r = 4. The coefficient is C(6,4) = 15."
            },
            {
                id: "math-bt-008",
                topic: "Coefficient Calculation",
                difficulty: "Hard",
                question: "Find the coefficient of x⁴ in (1 + 2x)⁶.",
                options: ["120", "180", "240", "360"],
                answer: 2,
                explanation:
                    "The coefficient is C(6,4) × 2⁴ = 15 × 16 = 240."
            },
            {
                id: "math-bt-009",
                topic: "Sum of Coefficients",
                difficulty: "Hard",
                question: "Find the sum of all coefficients in the expansion of (2x - 3)⁵.",
                options: ["-1", "1", "32", "-32"],
                answer: 0,
                explanation:
                    "The sum of coefficients is obtained by setting x = 1. Thus (2 - 3)⁵ = (-1)⁵ = -1."
            }
        ],

        test: [
            {
                id: "math-btt-001",
                topic: "Binomial Coefficients",
                difficulty: "Foundation",
                question: "Find C(8,3).",
                options: ["28", "56", "70", "112"],
                answer: 1,
                explanation:
                    "C(8,3) = 8 × 7 × 6/(3 × 2 × 1) = 56."
            },
            {
                id: "math-btt-002",
                topic: "Binomial Expansion",
                difficulty: "Foundation",
                question: "Find the coefficient of x² in (1 + x)⁵.",
                options: ["5", "10", "15", "20"],
                answer: 1,
                explanation:
                    "The coefficient of x² is C(5,2) = 10."
            },
            {
                id: "math-btt-003",
                topic: "General Term",
                difficulty: "Medium",
                question: "Find the fifth term in the expansion of (1 + 2x)⁶.",
                options: ["120x⁴", "180x⁴", "240x⁴", "360x⁴"],
                answer: 2,
                explanation:
                    "T₅ = C(6,4)(2x)⁴ = 15 × 16x⁴ = 240x⁴."
            },
            {
                id: "math-btt-004",
                topic: "Middle Terms",
                difficulty: "Medium",
                question: "How many middle terms are there in the expansion of (a + b)⁷?",
                options: ["1", "2", "3", "4"],
                answer: 1,
                explanation:
                    "The expansion has 8 terms. Since the number of terms is even, there are two middle terms."
            },
            {
                id: "math-btt-005",
                topic: "Independent Term",
                difficulty: "Hard",
                question: "Find the constant term in the expansion of (x + 1/x)⁸.",
                options: ["56", "70", "84", "112"],
                answer: 1,
                explanation:
                    "The general term is C(8,r)x^(8-2r). Setting 8 - 2r = 0 gives r = 4. The constant term is C(8,4) = 70."
            },
            {
                id: "math-btt-006",
                topic: "Binomial Identities",
                difficulty: "Hard",
                question: "Find C(10,0) + C(10,1) + ... + C(10,10).",
                options: ["512", "1000", "1024", "2048"],
                answer: 2,
                explanation:
                    "Using the identity Σ C(n,r) = 2ⁿ, the sum is 2¹⁰ = 1024."
            }
        ]
    }
};