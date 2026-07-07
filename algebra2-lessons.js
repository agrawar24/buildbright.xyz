const algebra2Lessons = {

    "algebra2-course-intro": {
        title: "Algebra 2 Course Introduction",
        subtitle: "See what you will learn in Algebra 2.",
        body: `

<h2>Welcome to Algebra 2</h2>

<p>Algebra 2 builds on Algebra 1 and prepares students for Precalculus, Calculus, Statistics, science, and advanced problem solving.</p>

<hr>

<h2>What You Will Learn</h2>

<ul>
<li>Equations and inequalities</li>
<li>Linear and quadratic functions</li>
<li>Polynomials</li>
<li>Factoring</li>
<li>Radicals</li>
<li>Rational expressions</li>
<li>Exponents and logarithms</li>
<li>Systems of equations</li>
<li>Sequences and series</li>
<li>Function transformations</li>
</ul>

<hr>

<h2>How This Course Works</h2>

<p>Each lesson teaches one core idea clearly, then gives practice questions to check understanding.</p>

<hr>

<h2>Goal</h2>

<p>By the end of Algebra 2, you should be able to recognize patterns, solve advanced equations, understand functions, and prepare for higher math.</p>

`,
        questions: [
            { q: "Algebra 2 builds on which course?", options: ["Algebra 1", "Geometry", "Calculus"], answer: "Algebra 1", explanation: "Algebra 2 extends Algebra 1 concepts." },
            { q: "Algebra 2 prepares students for?", options: ["Precalculus and Calculus", "Only Geometry", "Only arithmetic"], answer: "Precalculus and Calculus", explanation: "Algebra 2 is a foundation for higher math." },
            { q: "Which topic is part of Algebra 2?", options: ["Quadratic functions", "Triangle centers", "Circle tangents"], answer: "Quadratic functions", explanation: "Quadratics are a major Algebra 2 topic." },
            { q: "Which topic is part of Algebra 2?", options: ["Logarithms", "Triangle congruence", "Surface area"], answer: "Logarithms", explanation: "Logarithms are commonly taught in Algebra 2." },
            { q: "The goal of Algebra 2 is to improve?", options: ["Advanced equation and function skills", "Only counting", "Only drawing"], answer: "Advanced equation and function skills", explanation: "Algebra 2 focuses heavily on functions and equations." }
        ]
    }
    ,

    "algebra2-expressions-review": {
        title: "Expressions Review",
        subtitle: "Review variables, terms, coefficients, and simplifying expressions.",
        body: `

<h2>Introduction</h2>

<p>An <strong>expression</strong> is a mathematical phrase that can contain numbers, variables, and operations.</p>

<hr>

<h2>Vocabulary</h2>

<ul>
<li><strong>Variable</strong> – A letter that represents an unknown value.</li>
<li><strong>Term</strong> – A single number, variable, or product of numbers and variables.</li>
<li><strong>Coefficient</strong> – The number multiplied by a variable.</li>
<li><strong>Constant</strong> – A number without a variable.</li>
<li><strong>Like Terms</strong> – Terms with the same variable part.</li>
</ul>

<hr>

<h2>Example</h2>

<p>Expression: <strong>4x + 7x - 3</strong></p>

<p>4x and 7x are like terms.</p>

<p>4x + 7x = 11x</p>

<p>Simplified expression:</p>

<p><strong>11x - 3</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Only combine like terms.</li>
<li>Do not combine x terms with x² terms.</li>
<li>Keep positive and negative signs attached to terms.</li>
</ul>

<hr>

<h2>Summary</h2>

<p>Simplifying expressions means combining like terms and writing the expression in a cleaner form.</p>

`,
        questions: [
            { q: "An expression contains?", options: ["Numbers, variables, and operations", "Only equal signs", "Only graphs"], answer: "Numbers, variables, and operations", explanation: "Expressions are mathematical phrases." },
            { q: "A variable is usually represented by?", options: ["A letter", "A paragraph", "A graph"], answer: "A letter", explanation: "Variables like x or y represent unknown values." },
            { q: "In 5x, the coefficient is?", options: ["5", "x", "0"], answer: "5", explanation: "The coefficient is the number multiplied by the variable." },
            { q: "In 9x + 4, the constant is?", options: ["4", "9", "x"], answer: "4", explanation: "A constant has no variable." },
            { q: "Which are like terms?", options: ["3x and 8x", "3x and 8y", "3x and 8x²"], answer: "3x and 8x", explanation: "They have the same variable part." },
            { q: "Simplify 4x + 7x.", options: ["11x", "28x", "3x"], answer: "11x", explanation: "Add the coefficients." },
            { q: "Simplify 10y - 3y.", options: ["7y", "13y", "30y"], answer: "7y", explanation: "10y - 3y = 7y." },
            { q: "Can x and x² be combined?", options: ["No", "Yes", "Always"], answer: "No", explanation: "They are not like terms." },
            { q: "Simplify 6a + 2 + 4a.", options: ["10a + 2", "12a", "10a"], answer: "10a + 2", explanation: "Combine 6a and 4a." },
            { q: "Simplifying expressions helps prepare for?", options: ["Solving equations", "Only geometry", "Only probability"], answer: "Solving equations", explanation: "Equation solving often begins with simplifying expressions." }
        ]
    },

    "algebra2-solving-linear-equations": {
        title: "Solving Linear Equations",
        subtitle: "Solve equations by isolating the variable.",
        body: `

<h2>Introduction</h2>

<p>A <strong>linear equation</strong> is an equation where the variable has an exponent of 1.</p>

<p>The goal is to isolate the variable.</p>

<hr>

<h2>Core Strategy</h2>

<ol>
<li>Simplify both sides.</li>
<li>Move variable terms to one side.</li>
<li>Move constants to the other side.</li>
<li>Divide or multiply to solve.</li>
<li>Check your answer.</li>
</ol>

<hr>

<h2>Example</h2>

<p>Solve:</p>

<p><strong>3x + 5 = 20</strong></p>

<p>Subtract 5 from both sides:</p>

<p><strong>3x = 15</strong></p>

<p>Divide by 3:</p>

<p><strong>x = 5</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Do the same operation to both sides.</li>
<li>Keep signs organized.</li>
<li>Do not divide only one term unless the whole side is being divided correctly.</li>
</ul>

<hr>

<h2>Summary</h2>

<p>Solving equations means finding the value that makes the equation true.</p>

`,
        questions: [
            { q: "The goal of solving an equation is to?", options: ["Isolate the variable", "Draw a triangle", "Find area"], answer: "Isolate the variable", explanation: "You solve by getting the variable alone." },
            { q: "Solve x + 4 = 10.", options: ["6", "14", "4"], answer: "6", explanation: "Subtract 4 from both sides." },
            { q: "Solve x - 7 = 3.", options: ["10", "4", "-10"], answer: "10", explanation: "Add 7 to both sides." },
            { q: "Solve 3x = 18.", options: ["6", "15", "54"], answer: "6", explanation: "Divide both sides by 3." },
            { q: "Solve x/5 = 4.", options: ["20", "9", "1"], answer: "20", explanation: "Multiply both sides by 5." },
            { q: "Solve 2x + 3 = 11.", options: ["4", "7", "5"], answer: "4", explanation: "Subtract 3, then divide by 2." },
            { q: "Solve 5x - 10 = 15.", options: ["5", "1", "25"], answer: "5", explanation: "Add 10, then divide by 5." },
            { q: "Whatever you do to one side, you must?", options: ["Do to the other side", "Ignore the other side", "Change the variable"], answer: "Do to the other side", explanation: "This keeps the equation balanced." },
            { q: "A linear equation has variable exponent?", options: ["1", "2", "0"], answer: "1", explanation: "Linear equations have variables to the first power." },
            { q: "Checking an answer means?", options: ["Substituting it back in", "Guessing again", "Changing the equation"], answer: "Substituting it back in", explanation: "Substitution verifies the solution." }
        ]
    }
    ,

    "algebra2-multi-step-equations": {
        title: "Multi-Step Equations",
        subtitle: "Solve equations with variables and constants on both sides.",
        body: `

<h2>Introduction</h2>

<p>Many equations require several steps before the variable is isolated.</p>

<hr>

<h2>General Strategy</h2>

<ol>
<li>Simplify both sides.</li>
<li>Distribute if necessary.</li>
<li>Combine like terms.</li>
<li>Move variable terms to one side.</li>
<li>Move constants to the other side.</li>
<li>Divide by the coefficient.</li>
<li>Check your answer.</li>
</ol>

<hr>

<h2>Example</h2>

<p>Solve:</p>

<p><strong>3x + 8 = 2x + 15</strong></p>

<p>Subtract 2x:</p>

<p><strong>x + 8 = 15</strong></p>

<p>Subtract 8:</p>

<p><strong>x = 7</strong></p>

<hr>

<h2>Remember</h2>

<ul>
<li>Keep the equation balanced.</li>
<li>Always perform the same operation on both sides.</li>
<li>Check your solution.</li>
</ul>

`,
        questions: [
            { q: "First step when solving a multi-step equation?", options: ["Simplify both sides", "Guess", "Multiply everything"], answer: "Simplify both sides", explanation: "Always simplify first." },
            { q: "Solve x + 8 = 15.", options: ["7", "23", "8"], answer: "7", explanation: "Subtract 8." },
            { q: "Solve 2x = 16.", options: ["8", "14", "18"], answer: "8", explanation: "Divide by 2." },
            { q: "Solve 3x + 2 = 14.", options: ["4", "6", "12"], answer: "4", explanation: "Subtract 2 then divide by 3." },
            { q: "Solve 5x - 5 = 20.", options: ["5", "3", "4"], answer: "5", explanation: "Add 5 then divide by 5." },
            { q: "Solve 4x + 6 = 2x + 18.", options: ["6", "12", "4"], answer: "6", explanation: "Move variables left, constants right." },
            { q: "Why check your answer?", options: ["Verify the equation is true", "To make it longer", "You don't"], answer: "Verify the equation is true", explanation: "Always verify." },
            { q: "Can variables appear on both sides?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Many Algebra 2 equations do." },
            { q: "What keeps an equation balanced?", options: ["Doing the same operation to both sides", "Changing only one side", "Guessing"], answer: "Doing the same operation to both sides", explanation: "Balance is maintained by equal operations." },
            { q: "Goal of solving?", options: ["Isolate the variable", "Increase coefficients", "Remove constants"], answer: "Isolate the variable", explanation: "The variable should be alone." }
        ]
    }
    ,

    "algebra2-function-notation": {
        title: "Function Notation",
        subtitle: "Learn how functions use input and output notation.",
        body: `

<h2>Introduction</h2>

<p>A <strong>function</strong> is a rule that takes an input and produces exactly one output.</p>

<p>Function notation is a way to write this rule clearly.</p>

<hr>

<h2>Function Notation</h2>

<p><strong>f(x)</strong> is read as “f of x.”</p>

<p>It does not mean f times x.</p>

<p>It means the output of the function when the input is x.</p>

<hr>

<h2>Example</h2>

<p>If:</p>

<p><strong>f(x) = 2x + 3</strong></p>

<p>Then:</p>

<p><strong>f(4) = 2(4) + 3 = 11</strong></p>

<hr>

<h2>Key Idea</h2>

<p>The number inside the parentheses is the input.</p>

<p>The result is the output.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Do not treat f(x) as multiplication.</li>
<li>Substitute the input everywhere x appears.</li>
<li>Simplify carefully after substituting.</li>
</ul>

<hr>

<h2>Summary</h2>

<p>Function notation helps describe input-output relationships clearly.</p>

`,
        questions: [
            { q: "A function takes an input and gives?", options: ["One output", "Many random outputs", "No output"], answer: "One output", explanation: "Each input in a function has exactly one output." },
            { q: "f(x) is read as?", options: ["f of x", "f times x", "x divided by f"], answer: "f of x", explanation: "Function notation is read as f of x." },
            { q: "Does f(x) mean multiplication?", options: ["No", "Yes", "Always"], answer: "No", explanation: "f(x) means the value of the function at x." },
            { q: "In f(4), the input is?", options: ["4", "f", "x"], answer: "4", explanation: "The number inside parentheses is the input." },
            { q: "If f(x)=x+5, then f(3)=?", options: ["8", "5", "3"], answer: "8", explanation: "Substitute 3 for x: 3+5=8." },
            { q: "If f(x)=2x, then f(6)=?", options: ["12", "8", "6"], answer: "12", explanation: "2(6)=12." },
            { q: "If f(x)=x², then f(5)=?", options: ["25", "10", "7"], answer: "25", explanation: "5²=25." },
            { q: "The output is found by?", options: ["Substituting the input", "Ignoring x", "Changing the rule"], answer: "Substituting the input", explanation: "Replace x with the given input." },
            { q: "Function notation helps show?", options: ["Input and output", "Only area", "Only angles"], answer: "Input and output", explanation: "Functions describe relationships." },
            { q: "Function notation prepares students for?", options: ["Graphing functions", "Triangle proofs", "Circle area"], answer: "Graphing functions", explanation: "Function notation is foundational for graphing and higher algebra." }
        ]
    },

    "algebra2-linear-functions": {
        title: "Linear Functions",
        subtitle: "Understand slope, intercepts, and linear relationships.",
        body: `

<h2>Introduction</h2>

<p>A <strong>linear function</strong> creates a straight-line graph.</p>

<hr>

<h2>Slope-Intercept Form</h2>

<p><strong>y = mx + b</strong></p>

<ul>
<li><strong>m</strong> = slope</li>
<li><strong>b</strong> = y-intercept</li>
</ul>

<hr>

<h2>What Slope Means</h2>

<p>Slope tells how fast the line rises or falls.</p>

<p>Slope is often called <strong>rate of change</strong>.</p>

<hr>

<h2>Example</h2>

<p><strong>y = 3x + 2</strong></p>

<ul>
<li>Slope = 3</li>
<li>Y-intercept = 2</li>
</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Do not confuse slope and y-intercept.</li>
<li>The y-intercept is where the graph crosses the y-axis.</li>
<li>A positive slope rises from left to right.</li>
<li>A negative slope falls from left to right.</li>
</ul>

<hr>

<h2>Summary</h2>

<p>Linear functions show constant rates of change and graph as straight lines.</p>

`,
        questions: [
            { q: "A linear function graphs as a?", options: ["Straight line", "Circle", "Parabola"], answer: "Straight line", explanation: "Linear functions create straight lines." },
            { q: "Slope-intercept form is?", options: ["y = mx + b", "A = πr²", "x² + y² = r²"], answer: "y = mx + b", explanation: "This is the standard form for linear functions." },
            { q: "In y = mx + b, m represents?", options: ["Slope", "Y-intercept", "Area"], answer: "Slope", explanation: "m is the slope." },
            { q: "In y = mx + b, b represents?", options: ["Y-intercept", "Slope", "Variable"], answer: "Y-intercept", explanation: "b is where the line crosses the y-axis." },
            { q: "Slope means?", options: ["Rate of change", "Area", "Volume"], answer: "Rate of change", explanation: "Slope measures how quickly y changes compared to x." },
            { q: "If y=4x+1, slope is?", options: ["4", "1", "5"], answer: "4", explanation: "The coefficient of x is the slope." },
            { q: "If y=4x+1, y-intercept is?", options: ["1", "4", "0"], answer: "1", explanation: "The constant is the y-intercept." },
            { q: "Positive slope means the line?", options: ["Rises left to right", "Falls left to right", "Is vertical"], answer: "Rises left to right", explanation: "Positive slope increases as x increases." },
            { q: "Negative slope means the line?", options: ["Falls left to right", "Rises left to right", "Is horizontal"], answer: "Falls left to right", explanation: "Negative slope decreases as x increases." },
            { q: "Linear functions are useful for modeling?", options: ["Constant rates", "Random shapes", "Only circles"], answer: "Constant rates", explanation: "Linear functions model steady change." }
        ]
    }
    ,

    "algebra2-absolute-value-functions": {
        title: "Absolute Value Functions",
        subtitle: "Learn how absolute value measures distance from zero.",
        body: `

<h2>Introduction</h2>

<p>Absolute value tells us how far a number is from zero on the number line.</p>

<p>Distance is always positive.</p>

<hr>

<h2>Definition</h2>

<p>|5| = 5</p>

<p>|-5| = 5</p>

<hr>

<h2>Absolute Value Function</h2>

<p><strong>f(x)=|x|</strong></p>

<p>The graph forms a V-shape.</p>

<hr>

<h2>Example</h2>

<p>Find |−8|</p>

<p>Answer:</p>

<p><strong>8</strong></p>

<hr>

<h2>Remember</h2>

<ul>
<li>Absolute value is never negative.</li>
<li>It represents distance, not direction.</li>
<li>The graph has a vertex.</li>
</ul>

`,
        questions: [
            { q: "Absolute value measures?", options: ["Distance from zero", "Area", "Slope"], answer: "Distance from zero", explanation: "Absolute value represents distance." },
            { q: "|-9|=?", options: ["9", "-9", "81"], answer: "9", explanation: "Distance from zero is positive." },
            { q: "|6|=?", options: ["6", "-6", "0"], answer: "6", explanation: "Positive numbers stay the same." },
            { q: "Absolute value is always?", options: ["Positive or zero", "Negative", "Fraction"], answer: "Positive or zero", explanation: "Distance cannot be negative." },
            { q: "The graph of y=|x| looks like?", options: ["V", "Circle", "Line"], answer: "V", explanation: "Absolute value graphs are V-shaped." },
            { q: "The lowest point is called?", options: ["Vertex", "Center", "Origin"], answer: "Vertex", explanation: "The graph's turning point is the vertex." },
            { q: "|-15|=?", options: ["15", "-15", "225"], answer: "15", explanation: "Absolute value removes the sign." },
            { q: "Distance between -3 and 0 is?", options: ["3", "-3", "6"], answer: "3", explanation: "Distance is always positive." },
            { q: "Absolute value functions are symmetric about?", options: ["y-axis", "x-axis", "Neither"], answer: "y-axis", explanation: "The graph mirrors across the y-axis." },
            { q: "Absolute value can ever be negative?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Absolute value is never negative." }
        ]
    },

    "algebra2-systems-of-equations": {
        title: "Systems of Equations",
        subtitle: "Solve two equations using substitution and elimination.",
        body: `

<h2>Introduction</h2>

<p>A system of equations contains two or more equations with the same variables.</p>

<hr>

<h2>Goal</h2>

<p>Find the values that satisfy every equation.</p>

<hr>

<h2>Methods</h2>

<ul>
<li>Graphing</li>
<li>Substitution</li>
<li>Elimination</li>
</ul>

<hr>

<h2>Example</h2>

<p>x + y = 10</p>

<p>x − y = 2</p>

<p>Add both equations:</p>

<p>2x = 12</p>

<p>x = 6</p>

<p>Substitute:</p>

<p>y = 4</p>

<hr>

<h2>Summary</h2>

<p>The solution satisfies every equation in the system.</p>

`,
        questions: [
            { q: "A system contains?", options: ["Two or more equations", "One equation", "No variables"], answer: "Two or more equations", explanation: "A system consists of multiple equations." },
            { q: "Main goal?", options: ["Find values satisfying all equations", "Draw circles", "Factor"], answer: "Find values satisfying all equations", explanation: "Solutions satisfy every equation." },
            { q: "One solving method?", options: ["Substitution", "Long division", "Pythagorean Theorem"], answer: "Substitution", explanation: "Substitution is a common technique." },
            { q: "Another solving method?", options: ["Elimination", "Integration", "Differentiation"], answer: "Elimination", explanation: "Elimination removes variables." },
            { q: "Graphing solves by finding?", options: ["Intersection", "Slope", "Area"], answer: "Intersection", explanation: "The intersection is the solution." },
            { q: "If two lines cross once?", options: ["One solution", "No solution", "Infinite solutions"], answer: "One solution", explanation: "Intersecting once means one solution." },
            { q: "Parallel lines have?", options: ["No solution", "One solution", "Infinite solutions"], answer: "No solution", explanation: "Parallel lines never meet." },
            { q: "Identical lines have?", options: ["Infinite solutions", "No solution", "One solution"], answer: "Infinite solutions", explanation: "Every point is shared." },
            { q: "After finding one variable?", options: ["Substitute back", "Guess", "Stop"], answer: "Substitute back", explanation: "Find the remaining variable." },
            { q: "Every solution must satisfy?", options: ["Every equation", "Only one equation", "None"], answer: "Every equation", explanation: "Solutions work in every equation." }
        ]
    }
    ,

    "algebra2-foundations-functions-review": {
        title: "Unit 1 Review",
        subtitle: "Review expressions, equations, function notation, linear functions, absolute value functions, and systems of equations.",

        body: `

<h2>Unit Review</h2>

<p>This review covers the most important ideas from the Foundations and Functions unit.</p>

<hr>

<h2>Key Concepts</h2>

<ul>

<li>Order of Operations (PEMDAS)</li>

<li>Properties of Real Numbers</li>

<li>Solving Linear Equations</li>

<li>Solving Inequalities</li>

<li>Absolute Value Equations</li>

<li>Relations vs. Functions</li>

<li>Function Notation</li>

<li>Domain and Range</li>

<li>Evaluating Functions</li>

<li>Graphing Linear Functions</li>

</ul>

<hr>

<h2>Important Things to Remember</h2>

<ul>

<li>Always follow the order of operations.</li>

<li>A function assigns exactly one output to each input.</li>

<li>Domain represents possible x-values.</li>

<li>Range represents possible y-values.</li>

<li>Function notation tells you which value to substitute.</li>

<li>When solving inequalities, reverse the inequality sign when multiplying or dividing by a negative number.</li>

<li>Absolute value represents distance from zero.</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting PEMDAS.</li>

<li>Mixing up domain and range.</li>

<li>Not reversing an inequality after dividing by a negative.</li>

<li>Thinking every relation is a function.</li>

<li>Substituting incorrectly into function notation.</li>

</ul>

<hr>

<h2>Ready for the Unit Test?</h2>

<p>If you understand these concepts, you're ready for the Foundations & Functions Unit Test.</p>

`,

        questions: [

            {
                q: "A function assigns how many outputs to each input?",

                options: [
                    "Exactly one",
                    "Two",
                    "As many as needed"
                ],

                answer: "Exactly one",

                explanation: "Every input must have only one output."
            },

            {
                q: "The domain represents?",

                options: [
                    "x-values",
                    "y-values",
                    "slopes"
                ],

                answer: "x-values",

                explanation: "The domain is the set of all possible inputs."
            },

            {
                q: "The range represents?",

                options: [
                    "y-values",
                    "x-values",
                    "intercepts"
                ],

                answer: "y-values",

                explanation: "The range is the set of outputs."
            },

            {
                q: "The first step when simplifying expressions is usually?",

                options: [
                    "Follow PEMDAS",
                    "Multiply everything",
                    "Combine all numbers"
                ],

                answer: "Follow PEMDAS",

                explanation: "Order of operations is always used."
            },

            {
                q: "When dividing an inequality by a negative number, you should?",

                options: [
                    "Reverse the inequality sign",
                    "Leave it unchanged",
                    "Square both sides"
                ],

                answer: "Reverse the inequality sign",

                explanation: "This is a fundamental inequality rule."
            },

            {
                q: "f(4) means?",

                options: [
                    "Evaluate the function when x=4",
                    "Multiply by 4",
                    "Graph the function"
                ],

                answer: "Evaluate the function when x=4",

                explanation: "Substitute 4 into the function."
            },

            {
                q: "Absolute value represents?",

                options: [
                    "Distance from zero",
                    "The largest number",
                    "The smallest number"
                ],

                answer: "Distance from zero",

                explanation: "Absolute value is always non-negative."
            },

            {
                q: "Which graph fails the Vertical Line Test?",

                options: [
                    "A graph with one x-value having two y-values",
                    "A straight line",
                    "A parabola"
                ],

                answer: "A graph with one x-value having two y-values",

                explanation: "That graph is not a function."
            },

            {
                q: "Every function is a relation?",

                options: [
                    "Yes",
                    "No",
                    "Only linear functions"
                ],

                answer: "Yes",

                explanation: "Functions are a special type of relation."
            },

            {
                q: "This review prepares you for?",

                options: [
                    "The Unit Test",
                    "The Final Exam",
                    "Geometry"
                ],

                answer: "The Unit Test",

                explanation: "Reviews summarize the entire unit before testing."
            }

        ]

    }
    ,

    "algebra2-foundations-functions-unit-test": {
        title: "Unit 1 Test",
        subtitle: "Test expressions, equations, function notation, linear functions, absolute value functions, and systems of equations.",

        body: `

<h2>Unit Test</h2>

<p>This test covers the full Foundations & Functions unit.</p>

<hr>

<h2>Topics Covered</h2>

<ul>
<li>Expressions and like terms</li>
<li>Solving linear equations</li>
<li>Multi-step equations</li>
<li>Function notation</li>
<li>Linear functions</li>
<li>Absolute value functions</li>
<li>Systems of equations</li>
</ul>

<hr>

<h2>Goal</h2>

<p>Answer each question carefully. A strong score means you are ready to begin Quadratic Functions.</p>

`,

        questions: [

            {
                q: "Simplify: 4x + 7x - 3",
                options: ["11x - 3", "28x - 3", "11x + 3"],
                answer: "11x - 3",
                explanation: "Combine like terms: 4x + 7x = 11x."
            },

            {
                q: "In the expression 6x + 9, the coefficient is?",
                options: ["6", "9", "x"],
                answer: "6",
                explanation: "The coefficient is the number multiplied by the variable."
            },

            {
                q: "Solve: x + 8 = 15",
                options: ["7", "23", "8"],
                answer: "7",
                explanation: "Subtract 8 from both sides."
            },

            {
                q: "Solve: 3x = 24",
                options: ["8", "21", "72"],
                answer: "8",
                explanation: "Divide both sides by 3."
            },

            {
                q: "Solve: 2x + 5 = 17",
                options: ["6", "11", "12"],
                answer: "6",
                explanation: "Subtract 5, then divide by 2."
            },

            {
                q: "Solve: 4x + 6 = 2x + 18",
                options: ["6", "12", "4"],
                answer: "6",
                explanation: "Subtract 2x from both sides, then subtract 6."
            },

            {
                q: "A function assigns each input?",
                options: ["Exactly one output", "Two outputs", "No output"],
                answer: "Exactly one output",
                explanation: "A function gives exactly one output for each input."
            },

            {
                q: "f(x) means?",
                options: ["f of x", "f times x", "x divided by f"],
                answer: "f of x",
                explanation: "Function notation is read as f of x."
            },

            {
                q: "If f(x)=2x+3, then f(4)=?",
                options: ["11", "8", "7"],
                answer: "11",
                explanation: "Substitute 4: 2(4)+3=11."
            },

            {
                q: "If f(x)=x², then f(6)=?",
                options: ["36", "12", "6"],
                answer: "36",
                explanation: "Substitute 6: 6²=36."
            },

            {
                q: "A linear function graphs as a?",
                options: ["Straight line", "Parabola", "Circle"],
                answer: "Straight line",
                explanation: "Linear functions always graph as straight lines."
            },

            {
                q: "Slope-intercept form is?",
                options: ["y = mx + b", "y = ax² + bx + c", "A = πr²"],
                answer: "y = mx + b",
                explanation: "Slope-intercept form is y = mx + b."
            },

            {
                q: "In y = 5x - 2, the slope is?",
                options: ["5", "-2", "2"],
                answer: "5",
                explanation: "The coefficient of x is the slope."
            },

            {
                q: "In y = 5x - 2, the y-intercept is?",
                options: ["-2", "5", "0"],
                answer: "-2",
                explanation: "The constant term is the y-intercept."
            },

            {
                q: "A positive slope means the line?",
                options: ["Rises left to right", "Falls left to right", "Is vertical"],
                answer: "Rises left to right",
                explanation: "Positive slope means y increases as x increases."
            },

            {
                q: "|-12| equals?",
                options: ["12", "-12", "0"],
                answer: "12",
                explanation: "Absolute value measures distance from zero."
            },

            {
                q: "The graph of y = |x| is shaped like a?",
                options: ["V", "U", "Line"],
                answer: "V",
                explanation: "Absolute value functions form a V-shaped graph."
            },

            {
                q: "A system of equations contains?",
                options: ["Two or more equations", "Only one equation", "No variables"],
                answer: "Two or more equations",
                explanation: "A system has multiple equations with the same variables."
            },

            {
                q: "The solution to a system of two lines is the?",
                options: ["Intersection point", "Y-intercept only", "Slope"],
                answer: "Intersection point",
                explanation: "The solution is where the graphs meet."
            },

            {
                q: "Parallel lines have?",
                options: ["No solution", "One solution", "Infinite solutions"],
                answer: "No solution",
                explanation: "Parallel lines never intersect."
            }

        ]

    },

    "algebra2-quadratic-functions": {
        title: "Quadratic Functions",
        subtitle: "Understand parabolas and quadratic equations.",
        body: `

<h2>Introduction</h2>

<p>A <strong>quadratic function</strong> is a function where the highest exponent is 2.</p>

<hr>

<h2>Standard Form</h2>

<p><strong>y = ax² + bx + c</strong></p>

<ul>
<li>a determines whether the graph opens up or down.</li>
<li>b affects the axis of symmetry.</li>
<li>c is the y-intercept.</li>
</ul>

<hr>

<h2>The Graph</h2>

<p>The graph of every quadratic function is called a <strong>parabola</strong>.</p>

<ul>
<li>If a > 0, it opens upward.</li>
<li>If a < 0, it opens downward.</li>
</ul>

<hr>

<h2>Example</h2>

<p><strong>y = x² - 4x + 3</strong></p>

<p>This is a quadratic because the highest exponent is 2.</p>

<hr>

<h2>Vocabulary</h2>

<ul>
<li>Vertex</li>
<li>Axis of Symmetry</li>
<li>Maximum</li>
<li>Minimum</li>
<li>Roots (Zeros)</li>
</ul>

<hr>

<h2>Summary</h2>

<p>Quadratic functions model many real-world situations including motion, optimization, and projectile paths.</p>

`,
        questions: [
            { q: "Highest exponent in a quadratic?", options: ["2", "1", "3"], answer: "2", explanation: "Quadratic functions have degree 2." },
            { q: "The graph of a quadratic is called?", options: ["Parabola", "Circle", "Line"], answer: "Parabola", explanation: "Quadratics graph as parabolas." },
            { q: "Standard form is?", options: ["ax²+bx+c", "mx+b", "x+y=10"], answer: "ax²+bx+c", explanation: "This is the standard quadratic form." },
            { q: "If a>0 the graph?", options: ["Opens upward", "Opens downward", "Is horizontal"], answer: "Opens upward", explanation: "Positive a opens upward." },
            { q: "If a<0 the graph?", options: ["Opens downward", "Opens upward", "Is vertical"], answer: "Opens downward", explanation: "Negative a opens downward." },
            { q: "The point where the parabola changes direction is called?", options: ["Vertex", "Origin", "Slope"], answer: "Vertex", explanation: "The vertex is the turning point." },
            { q: "The y-intercept is represented by?", options: ["c", "a", "b"], answer: "c", explanation: "The constant term is the y-intercept." },
            { q: "Quadratic functions are used to model?", options: ["Projectile motion", "Only triangles", "Only circles"], answer: "Projectile motion", explanation: "Many motion problems are quadratic." },
            { q: "Roots are also called?", options: ["Zeros", "Slopes", "Vertices"], answer: "Zeros", explanation: "Roots and zeros mean the same thing." },
            { q: "Degree means?", options: ["Highest exponent", "Coefficient", "Constant"], answer: "Highest exponent", explanation: "Degree is determined by the largest exponent." }
        ]
    }
    ,

    "algebra2-graphing-parabolas": {
        title: "Graphing Parabolas",
        subtitle: "Learn how to graph quadratic functions.",

        body: `

<h2>Introduction</h2>

<p>A quadratic function graphs as a parabola.</p>

<p>Every parabola has several important features that help describe its shape.</p>

<hr>

<h2>The Five Features</h2>

<ul>
<li>Vertex</li>
<li>Axis of Symmetry</li>
<li>Direction of Opening</li>
<li>y-intercept</li>
<li>x-intercepts (Roots)</li>
</ul>

<hr>

<h2>Example</h2>

<p><strong>y = x² - 4x + 3</strong></p>

<ul>
<li>Opens upward</li>
<li>Vertex at (2,-1)</li>
<li>Axis of symmetry: x = 2</li>
<li>y-intercept: (0,3)</li>
<li>x-intercepts: (1,0) and (3,0)</li>
</ul>

<hr>

<h2>Graphing Steps</h2>

<ol>
<li>Determine whether the parabola opens up or down.</li>
<li>Find the vertex.</li>
<li>Draw the axis of symmetry.</li>
<li>Find the intercepts.</li>
<li>Sketch the curve.</li>
</ol>

<hr>

<h2>Remember</h2>

<p>The parabola is always perfectly symmetric about its axis of symmetry.</p>

`,

        questions: [
            {
                q: "Every quadratic graphs as a?",

                options: ["Parabola", "Circle", "Line"],

                answer: "Parabola",

                explanation: "Quadratic functions graph as parabolas."
            },

            {
                q: "The turning point is called?",

                options: ["Vertex", "Root", "Intercept"],

                answer: "Vertex",

                explanation: "The vertex is the highest or lowest point."
            },

            {
                q: "If a > 0 the parabola?",

                options: ["Opens upward", "Opens downward", "Becomes horizontal"],

                answer: "Opens upward",

                explanation: "Positive leading coefficient opens upward."
            },

            {
                q: "If a < 0 the parabola?",

                options: ["Opens downward", "Opens upward", "Is flat"],

                answer: "Opens downward",

                explanation: "Negative leading coefficient opens downward."
            },

            {
                q: "The parabola is symmetric about the?",

                options: ["Axis of symmetry", "x-axis", "Origin"],

                answer: "Axis of symmetry",

                explanation: "Every parabola mirrors across its axis."
            },

            {
                q: "The y-intercept occurs when?",

                options: ["x = 0", "y = 0", "x = 1"],

                answer: "x = 0",

                explanation: "Substitute x=0."
            },

            {
                q: "The x-intercepts are also called?",

                options: ["Roots", "Slope", "Vertex"],

                answer: "Roots",

                explanation: "Roots are where y=0."
            },

            {
                q: "How many vertices does a parabola have?",

                options: ["One", "Two", "Zero"],

                answer: "One",

                explanation: "Every parabola has exactly one vertex."
            },

            {
                q: "The axis of symmetry passes through the?",

                options: ["Vertex", "Origin", "y-intercept"],

                answer: "Vertex",

                explanation: "The vertex always lies on the axis."
            },

            {
                q: "Graphing becomes easier when you identify?",

                options: ["Key features", "Random points", "Only the intercept"],

                answer: "Key features",

                explanation: "The vertex, axis, and intercepts define the graph."
            }

        ]

    }
    ,

    "algebra2-vertex-form": {
        title: "Vertex Form",
        subtitle: "Learn how vertex form reveals the parabola's key features.",

        body: `

<h2>Introduction</h2>

<p>Quadratic functions can be written in several forms.</p>

<p>One of the most useful is <strong>Vertex Form</strong>.</p>

<hr>

<h2>Vertex Form</h2>

<p><strong>y = a(x − h)² + k</strong></p>

<ul>
<li>a determines whether the parabola opens up or down.</li>
<li>(h, k) is the vertex.</li>
</ul>

<hr>

<h2>Example</h2>

<p><strong>y = (x − 3)² + 2</strong></p>

<ul>
<li>Vertex = (3,2)</li>
<li>Opens upward</li>
<li>Axis of symmetry: x = 3</li>
</ul>

<hr>

<h2>Finding the Vertex</h2>

<p>Remember:</p>

<ul>
<li>(x − h) means h is positive.</li>
<li>(x + h) means h is negative.</li>
</ul>

<hr>

<h2>Example</h2>

<p><strong>y=(x+5)²−7</strong></p>

<p>Vertex:</p>

<p><strong>(−5,−7)</strong></p>

<hr>

<h2>Summary</h2>

<p>Vertex form immediately tells you where the parabola begins and how it opens.</p>

`,

        questions: [

            {
                q: "Vertex form is?",

                options: [
                    "y=a(x−h)²+k",
                    "y=mx+b",
                    "ax²+bx+c"
                ],

                answer: "y=a(x−h)²+k",

                explanation: "This is the standard vertex form."
            },

            {
                q: "The vertex is?",

                options: [
                    "(h,k)",
                    "(a,b)",
                    "(x,y)"
                ],

                answer: "(h,k)",

                explanation: "The vertex is located at (h,k)."
            },

            {
                q: "If a>0 the parabola?",

                options: [
                    "Opens upward",
                    "Opens downward",
                    "Is horizontal"
                ],

                answer: "Opens upward",

                explanation: "Positive a opens upward."
            },

            {
                q: "If a<0 the parabola?",

                options: [
                    "Opens downward",
                    "Opens upward",
                    "Becomes a line"
                ],

                answer: "Opens downward",

                explanation: "Negative a opens downward."
            },

            {
                q: "Vertex of y=(x−4)²+1?",

                options: [
                    "(4,1)",
                    "(-4,1)",
                    "(1,4)"
                ],

                answer: "(4,1)",

                explanation: "h=4 and k=1."
            },

            {
                q: "Vertex of y=(x+6)²−3?",

                options: [
                    "(-6,-3)",
                    "(6,-3)",
                    "(-3,-6)"
                ],

                answer: "(-6,-3)",

                explanation: "x+6 means h=-6."
            },

            {
                q: "Axis of symmetry passes through?",

                options: [
                    "Vertex",
                    "Origin",
                    "y-intercept"
                ],

                answer: "Vertex",

                explanation: "The axis always goes through the vertex."
            },

            {
                q: "The number outside the square controls?",

                options: [
                    "Opening direction",
                    "Vertex",
                    "Intercept"
                ],

                answer: "Opening direction",

                explanation: "The coefficient a determines opening."
            },

            {
                q: "Vertex form makes identifying the vertex?",

                options: [
                    "Very easy",
                    "Impossible",
                    "Harder"
                ],

                answer: "Very easy",

                explanation: "The vertex is immediately visible."
            },

            {
                q: "Why is vertex form useful?",

                options: [
                    "Graphing quickly",
                    "Finding area",
                    "Triangle proofs"
                ],

                answer: "Graphing quickly",

                explanation: "Vertex form makes graphing much easier."
            }

        ]

    }
    ,

    "algebra2-factored-form": {
        title: "Factored Form",
        subtitle: "Use factored form to find the roots of a quadratic quickly.",

        body: `

<h2>Introduction</h2>

<p>Quadratic functions can also be written in <strong>factored form</strong>.</p>

<hr>

<h2>Factored Form</h2>

<p><strong>y = a(x-r₁)(x-r₂)</strong></p>

<p>The numbers r₁ and r₂ are called the <strong>roots</strong> or <strong>zeros</strong>.</p>

<hr>

<h2>Example</h2>

<p><strong>y=(x-2)(x-5)</strong></p>

<p>The roots are:</p>

<ul>
<li>x = 2</li>
<li>x = 5</li>
</ul>

<hr>

<h2>Finding the x-intercepts</h2>

<p>Set each factor equal to zero.</p>

<p>x−2=0 → x=2</p>

<p>x−5=0 → x=5</p>

<hr>

<h2>Graph</h2>

<p>The parabola crosses the x-axis at each root.</p>

<hr>

<h2>Remember</h2>

<ul>
<li>Roots are also called zeros.</li>
<li>The graph crosses the x-axis at the roots.</li>
<li>Factored form makes solving equations much easier.</li>
</ul>

<hr>

<h2>Summary</h2>

<p>Factored form immediately shows where the parabola crosses the x-axis.</p>

`,

        questions: [

            {
                q: "Factored form is?",

                options: [
                    "y=a(x-r₁)(x-r₂)",
                    "y=mx+b",
                    "ax²+bx+c"
                ],

                answer: "y=a(x-r₁)(x-r₂)",

                explanation: "This is the standard factored form."
            },

            {
                q: "The roots are also called?",

                options: [
                    "Zeros",
                    "Vertices",
                    "Intercepts"
                ],

                answer: "Zeros",

                explanation: "Roots and zeros mean the same thing."
            },

            {
                q: "Roots occur where?",

                options: [
                    "y=0",
                    "x=0",
                    "y=1"
                ],

                answer: "y=0",

                explanation: "Roots are where the graph crosses the x-axis."
            },

            {
                q: "For y=(x−4)(x−7), one root is?",

                options: [
                    "4",
                    "7",
                    "Both 4 and 7"
                ],

                answer: "Both 4 and 7",

                explanation: "Set each factor equal to zero."
            },

            {
                q: "For y=(x+2)(x−5), one root is?",

                options: [
                    "-2",
                    "5",
                    "Both -2 and 5"
                ],

                answer: "Both -2 and 5",

                explanation: "x+2=0 gives -2 and x-5=0 gives 5."
            },

            {
                q: "The graph crosses the x-axis at the?",

                options: [
                    "Roots",
                    "Vertex",
                    "Y-intercept"
                ],

                answer: "Roots",

                explanation: "Roots are the x-intercepts."
            },

            {
                q: "Factored form is useful because it shows?",

                options: [
                    "The roots immediately",
                    "The slope",
                    "The area"
                ],

                answer: "The roots immediately",

                explanation: "You can read the roots directly."
            },

            {
                q: "How do you find each root?",

                options: [
                    "Set each factor equal to zero",
                    "Multiply everything",
                    "Add coefficients"
                ],

                answer: "Set each factor equal to zero",

                explanation: "Zero Product Property."
            },

            {
                q: "If a parabola has two different roots, it crosses the x-axis?",

                options: [
                    "Twice",
                    "Once",
                    "Never"
                ],

                answer: "Twice",

                explanation: "Each root is an x-intercept."
            },

            {
                q: "Factored form is especially useful for?",

                options: [
                    "Solving quadratic equations",
                    "Circle geometry",
                    "Probability"
                ],

                answer: "Solving quadratic equations",

                explanation: "Factored form makes solving much faster."
            }

        ]

    }
    ,

    "algebra2-completing-the-square": {
        title: "Completing the Square",
        subtitle: "Rewrite quadratic equations into perfect square form.",

        body: `

<h2>Introduction</h2>

<p>Completing the square is a method used to rewrite a quadratic expression into a perfect square trinomial.</p>

<p>It is useful for solving equations and converting quadratics into vertex form.</p>

<hr>

<h2>The Process</h2>

<ol>
<li>Move the constant to the other side.</li>
<li>Divide by the coefficient of x² if necessary.</li>
<li>Take half of the x coefficient.</li>
<li>Square it.</li>
<li>Add that number to both sides.</li>
<li>Factor the left side.</li>
<li>Solve by taking the square root.</li>
</ol>

<hr>

<h2>Example</h2>

<p>Solve:</p>

<p><strong>x² + 6x + 5 = 0</strong></p>

<p>Move the constant:</p>

<p><strong>x² + 6x = -5</strong></p>

<p>Half of 6 is 3.</p>

<p>3² = 9</p>

<p>Add 9 to both sides.</p>

<p><strong>x² + 6x + 9 = 4</strong></p>

<p>Factor:</p>

<p><strong>(x + 3)² = 4</strong></p>

<p>Square root both sides:</p>

<p><strong>x + 3 = ±2</strong></p>

<p>Solutions:</p>

<p><strong>x = -1</strong></p>

<p><strong>x = -5</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Only take half of the x coefficient.</li>
<li>Remember to square that value.</li>
<li>Add the same value to BOTH sides.</li>
<li>Don't forget both the positive and negative square roots.</li>
</ul>

<hr>

<h2>Summary</h2>

<p>Completing the square transforms a quadratic into a perfect square, making it much easier to solve.</p>

`,

        questions: [

            {
                q: "What is the first step?",
                options: [
                    "Move the constant",
                    "Take the square root",
                    "Factor immediately"
                ],
                answer: "Move the constant",
                explanation: "Move the constant before completing the square."
            },

            {
                q: "Half of 8 is?",
                options: [
                    "4",
                    "8",
                    "16"
                ],
                answer: "4",
                explanation: "Half of 8 is 4."
            },

            {
                q: "Half of 8 squared is?",
                options: [
                    "16",
                    "8",
                    "4"
                ],
                answer: "16",
                explanation: "4² = 16."
            },

            {
                q: "When completing the square, add the same number to?",
                options: [
                    "Both sides",
                    "Left side only",
                    "Right side only"
                ],
                answer: "Both sides",
                explanation: "This keeps the equation balanced."
            },

            {
                q: "(x+5)² expands to?",
                options: [
                    "x²+10x+25",
                    "x²+25",
                    "x²+5x+25"
                ],
                answer: "x²+10x+25",
                explanation: "Use the perfect square formula."
            },

            {
                q: "After factoring (x+3)²=9, the next step is?",
                options: [
                    "Take the square root",
                    "Multiply",
                    "Expand"
                ],
                answer: "Take the square root",
                explanation: "Solve using square roots."
            },

            {
                q: "√9 equals?",
                options: [
                    "±3",
                    "3",
                    "-3"
                ],
                answer: "±3",
                explanation: "Both positive and negative roots are needed."
            },

            {
                q: "Completing the square helps find?",
                options: [
                    "Vertex form",
                    "Circle area",
                    "Slope"
                ],
                answer: "Vertex form",
                explanation: "It naturally converts to vertex form."
            },

            {
                q: "Completing the square works on?",
                options: [
                    "Quadratic equations",
                    "Only linear equations",
                    "Only fractions"
                ],
                answer: "Quadratic equations",
                explanation: "It is a quadratic solving technique."
            },

            {
                q: "The final goal is to create?",
                options: [
                    "A perfect square",
                    "A fraction",
                    "A line"
                ],
                answer: "A perfect square",
                explanation: "That's the purpose of the method."
            }

        ]

    }
    ,

    "algebra2-quadratic-formula": {
        title: "The Quadratic Formula",
        subtitle: "Solve any quadratic equation using one universal formula.",

        body: `

<h2>Introduction</h2>

<p>Some quadratic equations cannot be factored easily.</p>

<p>The Quadratic Formula can solve <strong>every quadratic equation</strong>.</p>

<hr>

<h2>The Formula</h2>

<p><strong>x = (-b ± √(b² − 4ac)) / (2a)</strong></p>

<hr>

<h2>Identify a, b and c</h2>

<p>Every quadratic must first be written in standard form.</p>

<p><strong>ax² + bx + c = 0</strong></p>

<p>Example:</p>

<p><strong>2x² + 5x − 3 = 0</strong></p>

<ul>

<li>a = 2</li>

<li>b = 5</li>

<li>c = -3</li>

</ul>

<hr>

<h2>Example</h2>

<p>Solve:</p>

<p><strong>x² + 5x + 6 = 0</strong></p>

<p>a = 1</p>

<p>b = 5</p>

<p>c = 6</p>

<p>Substitute into the formula and simplify.</p>

<p>The solutions are:</p>

<p><strong>x = -2</strong></p>

<p><strong>x = -3</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Always write the equation equal to zero first.</li>

<li>Be careful with negative signs.</li>

<li>Use parentheses when substituting.</li>

<li>Do not forget the ± symbol.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>The Quadratic Formula always works, even when factoring does not.</p>

`,

        questions: [

            {
                q: "The Quadratic Formula solves?",
                options: [
                    "Every quadratic equation",
                    "Only easy equations",
                    "Only linear equations"
                ],
                answer: "Every quadratic equation",
                explanation: "The Quadratic Formula works for all quadratics."
            },

            {
                q: "Quadratics should first be written in?",
                options: [
                    "ax²+bx+c=0",
                    "y=mx+b",
                    "x+y=10"
                ],
                answer: "ax²+bx+c=0",
                explanation: "Standard form is required."
            },

            {
                q: "In x²+7x+10=0, a equals?",
                options: [
                    "1",
                    "7",
                    "10"
                ],
                answer: "1",
                explanation: "The coefficient of x² is 1."
            },

            {
                q: "In x²+7x+10=0, b equals?",
                options: [
                    "7",
                    "1",
                    "10"
                ],
                answer: "7",
                explanation: "The coefficient of x is b."
            },

            {
                q: "In x²+7x+10=0, c equals?",
                options: [
                    "10",
                    "7",
                    "1"
                ],
                answer: "10",
                explanation: "The constant is c."
            },

            {
                q: "The symbol ± means?",
                options: [
                    "Positive and negative",
                    "Multiply",
                    "Divide"
                ],
                answer: "Positive and negative",
                explanation: "You must calculate both solutions."
            },

            {
                q: "Which method always works?",
                options: [
                    "Quadratic Formula",
                    "Guessing",
                    "Factoring"
                ],
                answer: "Quadratic Formula",
                explanation: "It always works."
            },

            {
                q: "Parentheses help prevent?",
                options: [
                    "Sign mistakes",
                    "Graph errors",
                    "Fractions"
                ],
                answer: "Sign mistakes",
                explanation: "Always substitute carefully."
            },

            {
                q: "The Quadratic Formula came from?",
                options: [
                    "Completing the square",
                    "Graphing",
                    "Factoring"
                ],
                answer: "Completing the square",
                explanation: "The formula is derived from completing the square."
            },

            {
                q: "A quadratic can have?",
                options: [
                    "Two, one, or zero real solutions",
                    "Always two",
                    "Always one"
                ],
                answer: "Two, one, or zero real solutions",
                explanation: "The discriminant determines the number of real solutions."
            }

        ]

    }
    ,

    "algebra2-discriminant": {
        title: "The Discriminant",
        subtitle: "Predict the number of real solutions without solving the equation.",

        body: `

<h2>Introduction</h2>

<p>The <strong>discriminant</strong> is a part of the Quadratic Formula.</p>

<p>It tells us how many real solutions a quadratic equation has before solving it.</p>

<hr>

<h2>The Discriminant</h2>

<p><strong>Δ = b² − 4ac</strong></p>

<hr>

<h2>Three Possible Results</h2>

<ul>

<li><strong>Δ > 0</strong> → Two different real solutions</li>

<li><strong>Δ = 0</strong> → One real solution</li>

<li><strong>Δ < 0</strong> → No real solutions</li>

</ul>

<hr>

<h2>Example 1</h2>

<p>x² − 5x + 6 = 0</p>

<p>a = 1</p>

<p>b = -5</p>

<p>c = 6</p>

<p>Δ = (-5)² − 4(1)(6)</p>

<p>Δ = 25 − 24 = 1</p>

<p>Since Δ is positive, there are <strong>two real solutions.</strong></p>

<hr>

<h2>Example 2</h2>

<p>x² + 4x + 4 = 0</p>

<p>Δ = 16 − 16 = 0</p>

<p>There is <strong>one real solution.</strong></p>

<hr>

<h2>Example 3</h2>

<p>x² + 2x + 5 = 0</p>

<p>Δ = 4 − 20 = -16</p>

<p>There are <strong>no real solutions.</strong></p>

<hr>

<h2>Summary</h2>

<p>The discriminant lets you predict the number of real solutions without solving the equation.</p>

`,

        questions: [

            {
                q: "The discriminant is?",
                options: [
                    "b²−4ac",
                    "2a+b",
                    "a²+b²"
                ],
                answer: "b²−4ac",
                explanation: "The discriminant is b²−4ac."
            },

            {
                q: "If Δ>0 there are?",
                options: [
                    "Two real solutions",
                    "One real solution",
                    "No real solutions"
                ],
                answer: "Two real solutions",
                explanation: "Positive discriminant means two distinct real roots."
            },

            {
                q: "If Δ=0 there are?",
                options: [
                    "One real solution",
                    "Two real solutions",
                    "No real solutions"
                ],
                answer: "One real solution",
                explanation: "The parabola touches the x-axis once."
            },

            {
                q: "If Δ<0 there are?",
                options: [
                    "No real solutions",
                    "One real solution",
                    "Two real solutions"
                ],
                answer: "No real solutions",
                explanation: "Negative discriminant means no real x-intercepts."
            },

            {
                q: "The discriminant comes from?",
                options: [
                    "The Quadratic Formula",
                    "Linear equations",
                    "Slope formula"
                ],
                answer: "The Quadratic Formula",
                explanation: "It is the expression inside the square root."
            },

            {
                q: "The discriminant appears under the?",
                options: [
                    "Square root",
                    "Fraction bar",
                    "Exponent"
                ],
                answer: "Square root",
                explanation: "It is the expression inside √."
            },

            {
                q: "Can you predict the number of roots without solving?",
                options: [
                    "Yes",
                    "No",
                    "Only sometimes"
                ],
                answer: "Yes",
                explanation: "The discriminant tells you immediately."
            },

            {
                q: "Δ=49 means?",
                options: [
                    "Two real solutions",
                    "One real solution",
                    "No real solutions"
                ],
                answer: "Two real solutions",
                explanation: "Positive discriminant."
            },

            {
                q: "Δ=-8 means?",
                options: [
                    "No real solutions",
                    "One real solution",
                    "Two real solutions"
                ],
                answer: "No real solutions",
                explanation: "Negative discriminant."
            },

            {
                q: "Why is the discriminant useful?",
                options: [
                    "It predicts the number of solutions",
                    "It finds slope",
                    "It calculates area"
                ],
                answer: "It predicts the number of solutions",
                explanation: "That's its primary purpose."
            }

        ]

    }

    ,

    "algebra2-quadratics-review": {
        title: "Unit 2 Review",
        subtitle: "Review quadratic functions, parabolas, vertex form, factored form, completing the square, the Quadratic Formula, and the discriminant.",

        body: `

<h2>Unit Review</h2>

<p>This review covers the most important ideas from the Quadratics unit.</p>

<hr>

<h2>Key Concepts</h2>

<ul>
<li>Quadratic functions have degree 2.</li>
<li>The graph of a quadratic function is a parabola.</li>
<li>Standard form is <strong>y = ax² + bx + c</strong>.</li>
<li>Vertex form is <strong>y = a(x − h)² + k</strong>.</li>
<li>Factored form is <strong>y = a(x − r₁)(x − r₂)</strong>.</li>
<li>The vertex is the turning point of the parabola.</li>
<li>The roots, zeros, and x-intercepts all refer to where the graph crosses the x-axis.</li>
<li>The Quadratic Formula solves any quadratic equation.</li>
<li>The discriminant tells how many real solutions a quadratic has.</li>
</ul>

<hr>

<h2>Important Formulas</h2>

<p><strong>Standard Form:</strong> y = ax² + bx + c</p>

<p><strong>Vertex Form:</strong> y = a(x − h)² + k</p>

<p><strong>Factored Form:</strong> y = a(x − r₁)(x − r₂)</p>

<p><strong>Quadratic Formula:</strong> x = (-b ± √(b² − 4ac)) / 2a</p>

<p><strong>Discriminant:</strong> b² − 4ac</p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Forgetting that the sign of <strong>a</strong> controls whether the parabola opens up or down.</li>
<li>Mixing up the vertex in vertex form.</li>
<li>Forgetting the ± symbol in the Quadratic Formula.</li>
<li>Not setting a quadratic equation equal to 0 before solving.</li>
<li>Thinking the discriminant gives the solutions instead of the number of real solutions.</li>
</ul>

<hr>

<h2>Ready for the Unit Test?</h2>

<p>If you understand these ideas, you are ready for the Quadratics Unit Test.</p>

`,

        questions: [

            {
                q: "The graph of a quadratic function is called a?",
                options: ["Parabola", "Line", "Circle"],
                answer: "Parabola",
                explanation: "Quadratic functions graph as parabolas."
            },

            {
                q: "The highest exponent in a quadratic function is?",
                options: ["2", "1", "3"],
                answer: "2",
                explanation: "Quadratic functions have degree 2."
            },

            {
                q: "Standard form of a quadratic is?",
                options: ["y = ax² + bx + c", "y = mx + b", "y = a(x − h)² + k"],
                answer: "y = ax² + bx + c",
                explanation: "This is the standard quadratic form."
            },

            {
                q: "If a > 0, the parabola opens?",
                options: ["Upward", "Downward", "Sideways"],
                answer: "Upward",
                explanation: "A positive leading coefficient opens upward."
            },

            {
                q: "If a < 0, the parabola opens?",
                options: ["Downward", "Upward", "Sideways"],
                answer: "Downward",
                explanation: "A negative leading coefficient opens downward."
            },

            {
                q: "The turning point of a parabola is the?",
                options: ["Vertex", "Slope", "Radius"],
                answer: "Vertex",
                explanation: "The vertex is where the parabola changes direction."
            },

            {
                q: "Vertex form is?",
                options: ["y = a(x − h)² + k", "y = mx + b", "y = ax² + bx + c"],
                answer: "y = a(x − h)² + k",
                explanation: "Vertex form shows the vertex clearly."
            },

            {
                q: "In y = (x − 4)² + 7, the vertex is?",
                options: ["(4, 7)", "(-4, 7)", "(7, 4)"],
                answer: "(4, 7)",
                explanation: "In y=a(x−h)²+k, the vertex is (h,k)."
            },

            {
                q: "Roots are also called?",
                options: ["Zeros", "Slopes", "Vertices"],
                answer: "Zeros",
                explanation: "Roots and zeros both refer to x-values where y=0."
            },

            {
                q: "The discriminant is?",
                options: ["b² − 4ac", "2a", "ax² + bx + c"],
                answer: "b² − 4ac",
                explanation: "The discriminant is the expression under the square root in the Quadratic Formula."
            }

        ]

    }
    ,

    "algebra2-quadratics-unit-test": {
        title: "Unit 2 Test",
        subtitle: "Test quadratic functions, parabolas, vertex form, factored form, completing the square, the Quadratic Formula, and the discriminant.",

        body: `

<h2>Unit Test</h2>

<p>This test covers the full Quadratics unit.</p>

<hr>

<h2>Topics Covered</h2>

<ul>
<li>Quadratic functions</li>
<li>Graphing parabolas</li>
<li>Vertex form</li>
<li>Factored form</li>
<li>Completing the square</li>
<li>The Quadratic Formula</li>
<li>The discriminant</li>
</ul>

<hr>

<h2>Goal</h2>

<p>Answer each question carefully. A strong score means you are ready to begin Polynomials.</p>

`,

        questions: [

            {
                q: "A quadratic function has degree?",
                options: ["2", "1", "3"],
                answer: "2",
                explanation: "The highest exponent in a quadratic is 2."
            },

            {
                q: "The graph of a quadratic function is a?",
                options: ["Parabola", "Line", "Circle"],
                answer: "Parabola",
                explanation: "Quadratic functions graph as parabolas."
            },

            {
                q: "In y = ax² + bx + c, c represents the?",
                options: ["Y-intercept", "Slope", "Vertex"],
                answer: "Y-intercept",
                explanation: "The constant term is the y-intercept."
            },

            {
                q: "If a parabola opens upward, then a is?",
                options: ["Positive", "Negative", "Zero"],
                answer: "Positive",
                explanation: "Positive a-values make parabolas open upward."
            },

            {
                q: "If a parabola opens downward, then a is?",
                options: ["Negative", "Positive", "Zero"],
                answer: "Negative",
                explanation: "Negative a-values make parabolas open downward."
            },

            {
                q: "The axis of symmetry passes through the?",
                options: ["Vertex", "Y-intercept", "Origin only"],
                answer: "Vertex",
                explanation: "The axis of symmetry always passes through the vertex."
            },

            {
                q: "Vertex form is?",
                options: ["y = a(x − h)² + k", "y = mx + b", "y = ax + b"],
                answer: "y = a(x − h)² + k",
                explanation: "Vertex form shows the vertex directly."
            },

            {
                q: "Vertex of y = (x + 3)² − 5 is?",
                options: ["(-3, -5)", "(3, -5)", "(-5, -3)"],
                answer: "(-3, -5)",
                explanation: "x+3 means h=-3, and k=-5."
            },

            {
                q: "Factored form shows the?",
                options: ["Roots", "Slope", "Area"],
                answer: "Roots",
                explanation: "Factored form makes roots easy to identify."
            },

            {
                q: "For y = (x − 2)(x − 6), the roots are?",
                options: ["2 and 6", "-2 and -6", "2 and -6"],
                answer: "2 and 6",
                explanation: "Set each factor equal to zero."
            },

            {
                q: "Roots occur where?",
                options: ["y = 0", "x = 0", "a = 0"],
                answer: "y = 0",
                explanation: "Roots are the x-intercepts."
            },

            {
                q: "Completing the square creates a?",
                options: ["Perfect square trinomial", "Linear function", "Circle"],
                answer: "Perfect square trinomial",
                explanation: "Completing the square rewrites a quadratic as a perfect square."
            },

            {
                q: "When completing the square, half of 10 squared is?",
                options: ["25", "10", "5"],
                answer: "25",
                explanation: "Half of 10 is 5, and 5² = 25."
            },

            {
                q: "After completing the square, you often solve by?",
                options: ["Taking the square root", "Finding slope", "Adding roots"],
                answer: "Taking the square root",
                explanation: "Perfect square form allows square-root solving."
            },

            {
                q: "The Quadratic Formula solves?",
                options: ["Any quadratic equation", "Only linear equations", "Only factored equations"],
                answer: "Any quadratic equation",
                explanation: "The Quadratic Formula works for all quadratic equations."
            },

            {
                q: "Before using the Quadratic Formula, the equation should be?",
                options: ["Set equal to 0", "Set equal to 1", "Written as y=mx+b"],
                answer: "Set equal to 0",
                explanation: "Quadratics should be in ax²+bx+c=0 form."
            },

            {
                q: "In x² + 5x + 6 = 0, a equals?",
                options: ["1", "5", "6"],
                answer: "1",
                explanation: "The coefficient of x² is 1."
            },

            {
                q: "In x² + 5x + 6 = 0, b equals?",
                options: ["5", "1", "6"],
                answer: "5",
                explanation: "The coefficient of x is b."
            },

            {
                q: "If the discriminant is positive, there are?",
                options: ["Two real solutions", "One real solution", "No real solutions"],
                answer: "Two real solutions",
                explanation: "A positive discriminant means two distinct real roots."
            },

            {
                q: "If the discriminant is negative, there are?",
                options: ["No real solutions", "One real solution", "Two real solutions"],
                answer: "No real solutions",
                explanation: "A negative discriminant means no real roots."
            }

        ]

    }
    ,

    "algebra2-polynomial-introduction": {
        title: "Introduction to Polynomials",
        subtitle: "Learn the language of polynomial expressions.",

        body: `

<h2>Introduction</h2>

<p>A <strong>polynomial</strong> is an algebraic expression made from variables, coefficients, and whole-number exponents.</p>

<hr>

<h2>Examples</h2>

<p><strong>3x² + 5x − 7</strong></p>

<p><strong>5x⁴ − 2x² + x + 9</strong></p>

<p><strong>8</strong></p>

<p>These are all polynomials.</p>

<hr>

<h2>What is NOT a Polynomial?</h2>

<ul>

<li>x⁻²</li>

<li>√x</li>

<li>1/x</li>

</ul>

<p>Negative exponents, variables in denominators, and radicals are not allowed.</p>

<hr>

<h2>Vocabulary</h2>

<ul>

<li>Term</li>

<li>Coefficient</li>

<li>Constant</li>

<li>Degree</li>

</ul>

<hr>

<h2>Degree</h2>

<p>The degree of a polynomial is the highest exponent.</p>

<p>Example:</p>

<p><strong>5x⁴ − 3x² + 8</strong></p>

<p>Degree = 4</p>

<hr>

<h2>Summary</h2>

<p>Polynomials are the foundation for many Algebra 2 topics including factoring, graphing, and calculus.</p>

`,

        questions: [

            {
                q: "A polynomial contains?",
                options: [
                    "Whole-number exponents",
                    "Negative exponents only",
                    "Square roots only"
                ],
                answer: "Whole-number exponents",
                explanation: "Polynomial exponents must be whole numbers."
            },

            {
                q: "Which is a polynomial?",
                options: [
                    "3x²+5x−2",
                    "1/x",
                    "√x"
                ],
                answer: "3x²+5x−2",
                explanation: "Only whole-number exponents are allowed."
            },

            {
                q: "Which is NOT a polynomial?",
                options: [
                    "x⁻²",
                    "4x²",
                    "7"
                ],
                answer: "x⁻²",
                explanation: "Negative exponents are not allowed."
            },

            {
                q: "The degree is the?",
                options: [
                    "Highest exponent",
                    "Coefficient",
                    "Constant"
                ],
                answer: "Highest exponent",
                explanation: "Degree is the largest exponent."
            },

            {
                q: "Degree of 9x⁵+x²+1?",
                options: [
                    "5",
                    "2",
                    "1"
                ],
                answer: "5",
                explanation: "The highest exponent is 5."
            },

            {
                q: "The number multiplying a variable is called?",
                options: [
                    "Coefficient",
                    "Degree",
                    "Constant"
                ],
                answer: "Coefficient",
                explanation: "The coefficient multiplies the variable."
            },

            {
                q: "A constant has?",
                options: [
                    "No variable",
                    "One variable",
                    "Two variables"
                ],
                answer: "No variable",
                explanation: "Constants contain no variables."
            },

            {
                q: "Can a polynomial contain √x?",
                options: [
                    "No",
                    "Yes",
                    "Always"
                ],
                answer: "No",
                explanation: "Radicals involving variables are not polynomials."
            },

            {
                q: "Can a polynomial be just one number?",
                options: [
                    "Yes",
                    "No",
                    "Never"
                ],
                answer: "Yes",
                explanation: "Constants are polynomials."
            },

            {
                q: "Polynomials are important because they appear throughout?",
                options: [
                    "Algebra and Calculus",
                    "Only Geometry",
                    "Only Statistics"
                ],
                answer: "Algebra and Calculus",
                explanation: "Polynomials are fundamental throughout higher mathematics."
            }

        ]

    }
    ,

    "algebra2-adding-subtracting-polynomials": {
        title: "Adding and Subtracting Polynomials",
        subtitle: "Combine like terms to simplify polynomial expressions.",

        body: `

<h2>Introduction</h2>

<p>Adding and subtracting polynomials works just like combining like terms.</p>

<hr>

<h2>Like Terms</h2>

<p>Like terms have the same variable raised to the same exponent.</p>

<p>Examples:</p>

<ul>

<li>3x² and 5x²</li>

<li>7x and -2x</li>

<li>8 and -4</li>

</ul>

<hr>

<h2>Example</h2>

<p>(3x² + 5x − 2) + (2x² − x + 6)</p>

<p>Combine like terms:</p>

<p>3x² + 2x² = 5x²</p>

<p>5x − x = 4x</p>

<p>-2 + 6 = 4</p>

<p><strong>Answer:</strong></p>

<p>5x² + 4x + 4</p>

<hr>

<h2>Subtracting</h2>

<p>Distribute the negative sign first.</p>

<p>(4x² + 3x + 2) − (x² − 2x + 5)</p>

<p>= 4x² + 3x + 2 − x² + 2x − 5</p>

<p>= 3x² + 5x − 3</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Only combine like terms.</li>

<li>Remember to distribute negative signs.</li>

<li>Keep exponents unchanged.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Adding and subtracting polynomials simply means combining like terms carefully.</p>

`,

        questions: [

            {
                q: "Like terms have?",
                options: [
                    "The same variable and exponent",
                    "The same coefficient",
                    "The same sign"
                ],
                answer: "The same variable and exponent",
                explanation: "Both the variable and exponent must match."
            },

            {
                q: "3x² + 2x² = ?",
                options: [
                    "5x²",
                    "6x⁴",
                    "5x"
                ],
                answer: "5x²",
                explanation: "Combine the coefficients only."
            },

            {
                q: "7x − 4x = ?",
                options: [
                    "3x",
                    "11x",
                    "3"
                ],
                answer: "3x",
                explanation: "Subtract the coefficients."
            },

            {
                q: "5 + 8 = ?",
                options: [
                    "13",
                    "40",
                    "3"
                ],
                answer: "13",
                explanation: "Constants combine with constants."
            },

            {
                q: "Can x² and x³ be combined?",
                options: [
                    "No",
                    "Yes",
                    "Always"
                ],
                answer: "No",
                explanation: "Their exponents are different."
            },

            {
                q: "Subtracting polynomials first requires?",
                options: [
                    "Distributing the negative",
                    "Factoring",
                    "Graphing"
                ],
                answer: "Distributing the negative",
                explanation: "Always distribute the negative sign."
            },

            {
                q: "4x² − x² = ?",
                options: [
                    "3x²",
                    "5x²",
                    "4x"
                ],
                answer: "3x²",
                explanation: "Subtract the coefficients."
            },

            {
                q: "The exponent changes when combining like terms?",
                options: [
                    "No",
                    "Yes",
                    "Sometimes"
                ],
                answer: "No",
                explanation: "Only coefficients change."
            },

            {
                q: "2x + 8x − 5 = ?",
                options: [
                    "10x − 5",
                    "10x",
                    "15x"
                ],
                answer: "10x − 5",
                explanation: "Combine the x terms only."
            },

            {
                q: "Adding polynomials is mainly about?",
                options: [
                    "Combining like terms",
                    "Factoring",
                    "Finding roots"
                ],
                answer: "Combining like terms",
                explanation: "That's the key skill."
            }

        ]

    }
    ,

    "algebra2-multiplying-polynomials": {
        title: "Multiplying Polynomials",
        subtitle: "Use the distributive property and FOIL to multiply polynomial expressions.",

        body: `

<h2>Introduction</h2>

<p>Multiplying polynomials uses the distributive property.</p>

<p>Every term in the first polynomial must multiply every term in the second polynomial.</p>

<hr>

<h2>FOIL Method</h2>

<p>FOIL is used when multiplying two binomials.</p>

<ul>

<li><strong>F</strong> = First</li>

<li><strong>O</strong> = Outside</li>

<li><strong>I</strong> = Inside</li>

<li><strong>L</strong> = Last</li>

</ul>

<hr>

<h2>Example</h2>

<p>(x + 3)(x + 5)</p>

<p>First: x · x = x²</p>

<p>Outside: x · 5 = 5x</p>

<p>Inside: 3 · x = 3x</p>

<p>Last: 3 · 5 = 15</p>

<p>Combine like terms:</p>

<p><strong>x² + 8x + 15</strong></p>

<hr>

<h2>Another Example</h2>

<p>(2x − 1)(x + 4)</p>

<p>= 2x² + 8x − x − 4</p>

<p>= 2x² + 7x − 4</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Do not forget any multiplication.</li>

<li>Combine like terms after multiplying.</li>

<li>Watch negative signs carefully.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>FOIL is simply a shortcut for the distributive property when multiplying two binomials.</p>

`,

        questions: [

            {
                q: "FOIL stands for?",
                options: [
                    "First, Outside, Inside, Last",
                    "First, Order, Inside, Last",
                    "First, Only, Inside, Left"
                ],
                answer: "First, Outside, Inside, Last",
                explanation: "FOIL reminds you of the multiplication order."
            },

            {
                q: "(x+2)(x+3)=?",
                options: [
                    "x²+5x+6",
                    "x²+6",
                    "x²+5"
                ],
                answer: "x²+5x+6",
                explanation: "Multiply every term, then combine like terms."
            },

            {
                q: "(x+4)(x+1)=?",
                options: [
                    "x²+5x+4",
                    "x²+4",
                    "x²+8x+4"
                ],
                answer: "x²+5x+4",
                explanation: "FOIL gives x²+4x+x+4."
            },

            {
                q: "(x−2)(x+5)=?",
                options: [
                    "x²+3x−10",
                    "x²−7x−10",
                    "x²+10"
                ],
                answer: "x²+3x−10",
                explanation: "Outside and inside combine to 3x."
            },

            {
                q: "Every term in one polynomial multiplies?",
                options: [
                    "Every term in the other polynomial",
                    "Only the first term",
                    "The constant only"
                ],
                answer: "Every term in the other polynomial",
                explanation: "This is the distributive property."
            },

            {
                q: "After multiplying, what should you do?",
                options: [
                    "Combine like terms",
                    "Factor immediately",
                    "Divide everything"
                ],
                answer: "Combine like terms",
                explanation: "Always simplify the final expression."
            },

            {
                q: "(x+1)² equals?",
                options: [
                    "x²+2x+1",
                    "x²+1",
                    "x²+x+1"
                ],
                answer: "x²+2x+1",
                explanation: "Use FOIL or the perfect square pattern."
            },

            {
                q: "(2x)(3x)=?",
                options: [
                    "6x²",
                    "5x",
                    "6x"
                ],
                answer: "6x²",
                explanation: "Multiply coefficients and add exponents."
            },

            {
                q: "Which property is FOIL based on?",
                options: [
                    "Distributive Property",
                    "Commutative Property",
                    "Associative Property"
                ],
                answer: "Distributive Property",
                explanation: "FOIL is just a shortcut for distribution."
            },

            {
                q: "FOIL works specifically for?",
                options: [
                    "Two binomials",
                    "Any polynomial",
                    "Only monomials"
                ],
                answer: "Two binomials",
                explanation: "FOIL is designed for multiplying two binomials."
            }

        ]

    }
    ,

    "algebra2-special-products": {
        title: "Special Products",
        subtitle: "Recognize common polynomial multiplication patterns.",

        body: `

<h2>Introduction</h2>

<p>Some polynomial products appear so often that mathematicians use special formulas instead of multiplying everything each time.</p>

<hr>

<h2>Perfect Square Trinomials</h2>

<p><strong>(a+b)² = a² + 2ab + b²</strong></p>

<p><strong>(a−b)² = a² − 2ab + b²</strong></p>

<hr>

<h2>Difference of Squares</h2>

<p><strong>(a+b)(a−b)=a²−b²</strong></p>

<hr>

<h2>Example 1</h2>

<p><strong>(x+5)²</strong></p>

<p>= x² + 10x + 25</p>

<hr>

<h2>Example 2</h2>

<p><strong>(x−3)²</strong></p>

<p>= x² − 6x + 9</p>

<hr>

<h2>Example 3</h2>

<p><strong>(x+4)(x−4)</strong></p>

<p>= x² − 16</p>

<hr>

<h2>How to Recognize Them</h2>

<ul>

<li>Same sign inside parentheses → Perfect square.</li>

<li>Opposite signs inside parentheses → Difference of squares.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Recognizing these patterns makes multiplication and factoring much faster.</p>

`,

        questions: [

            {
                q: "(a+b)² equals?",
                options: [
                    "a²+2ab+b²",
                    "a²+b²",
                    "a²−b²"
                ],
                answer: "a²+2ab+b²",
                explanation: "This is the perfect square identity."
            },

            {
                q: "(a−b)² equals?",
                options: [
                    "a²−2ab+b²",
                    "a²+b²",
                    "a²−b²"
                ],
                answer: "a²−2ab+b²",
                explanation: "Subtract twice the product."
            },

            {
                q: "(a+b)(a−b) equals?",
                options: [
                    "a²−b²",
                    "a²+b²",
                    "a²−2ab+b²"
                ],
                answer: "a²−b²",
                explanation: "Difference of squares."
            },

            {
                q: "(x+2)² equals?",
                options: [
                    "x²+4x+4",
                    "x²+4",
                    "x²+2x+4"
                ],
                answer: "x²+4x+4",
                explanation: "Apply the perfect square formula."
            },

            {
                q: "(x−7)² equals?",
                options: [
                    "x²−14x+49",
                    "x²−49",
                    "x²+14x+49"
                ],
                answer: "x²−14x+49",
                explanation: "Subtract twice the product."
            },

            {
                q: "(x+9)(x−9) equals?",
                options: [
                    "x²−81",
                    "x²+81",
                    "x²−18x+81"
                ],
                answer: "x²−81",
                explanation: "Difference of squares."
            },

            {
                q: "Which pattern has opposite signs?",
                options: [
                    "Difference of squares",
                    "Perfect square",
                    "FOIL only"
                ],
                answer: "Difference of squares",
                explanation: "Opposite signs produce the difference of squares."
            },

            {
                q: "Which pattern contains ±2ab?",
                options: [
                    "Perfect square",
                    "Difference of squares",
                    "Linear equation"
                ],
                answer: "Perfect square",
                explanation: "Perfect squares include the middle term."
            },

            {
                q: "Why learn these identities?",
                options: [
                    "They simplify multiplication and factoring",
                    "They solve triangles",
                    "They calculate area"
                ],
                answer: "They simplify multiplication and factoring",
                explanation: "These patterns appear constantly in Algebra."
            },

            {
                q: "Special products help you recognize?",
                options: [
                    "Patterns",
                    "Fractions",
                    "Probability"
                ],
                answer: "Patterns",
                explanation: "Pattern recognition is the main goal."
            }

        ]

    }
    ,

    "algebra2-factoring-polynomials": {
        title: "Factoring Polynomials",
        subtitle: "Rewrite polynomials as products of simpler expressions.",

        body: `

<h2>Introduction</h2>

<p>Factoring is the reverse of multiplying polynomials.</p>

<p>Instead of expanding expressions, we break them into factors.</p>

<hr>

<h2>Greatest Common Factor (GCF)</h2>

<p>Always check whether all terms share a common factor.</p>

<p>Example:</p>

<p><strong>6x² + 9x</strong></p>

<p>Factor out 3x:</p>

<p><strong>3x(2x + 3)</strong></p>

<hr>

<h2>Factoring Trinomials</h2>

<p>Example:</p>

<p><strong>x² + 7x + 12</strong></p>

<p>Find two numbers that:</p>

<ul>

<li>Multiply to 12</li>

<li>Add to 7</li>

</ul>

<p>The numbers are 3 and 4.</p>

<p><strong>(x + 3)(x + 4)</strong></p>

<hr>

<h2>Difference of Squares</h2>

<p><strong>x² − 25</strong></p>

<p>= (x + 5)(x − 5)</p>

<hr>

<h2>Perfect Square Trinomials</h2>

<p><strong>x² + 10x + 25</strong></p>

<p>= (x + 5)²</p>

<hr>

<h2>Factoring Strategy</h2>

<ol>

<li>Factor out the GCF first.</li>

<li>Look for special products.</li>

<li>Factor trinomials.</li>

<li>Check your answer by multiplying.</li>

</ol>

<hr>

<h2>Summary</h2>

<p>Factoring allows us to solve equations, simplify expressions, and understand polynomial graphs.</p>

`,

        questions: [

            {
                q: "Factoring is the opposite of?",
                options: [
                    "Multiplying",
                    "Dividing",
                    "Adding"
                ],
                answer: "Multiplying",
                explanation: "Factoring reverses polynomial multiplication."
            },

            {
                q: "What should you always check first?",
                options: [
                    "Greatest Common Factor",
                    "Quadratic Formula",
                    "Graph"
                ],
                answer: "Greatest Common Factor",
                explanation: "Always remove the GCF first."
            },

            {
                q: "Factor 8x + 12",

                options: [
                    "4(2x+3)",
                    "2(4x+12)",
                    "8(x+12)"
                ],

                answer: "4(2x+3)",

                explanation: "4 is the greatest common factor."
            },

            {
                q: "Factor x²+5x+6",

                options: [
                    "(x+2)(x+3)",
                    "(x+1)(x+6)",
                    "(x+5)(x+1)"
                ],

                answer: "(x+2)(x+3)",

                explanation: "2 and 3 multiply to 6 and add to 5."
            },

            {
                q: "Factor x²−16",

                options: [
                    "(x+4)(x−4)",
                    "(x−8)(x+2)",
                    "(x−4)²"
                ],

                answer: "(x+4)(x−4)",

                explanation: "Difference of squares."
            },

            {
                q: "Factor x²+8x+16",

                options: [
                    "(x+4)²",
                    "(x+8)(x+2)",
                    "(x+16)"
                ],

                answer: "(x+4)²",

                explanation: "Perfect square trinomial."
            },

            {
                q: "Which numbers multiply to 15 and add to 8?",

                options: [
                    "3 and 5",
                    "2 and 6",
                    "1 and 15"
                ],

                answer: "3 and 5",

                explanation: "3×5=15 and 3+5=8."
            },

            {
                q: "After factoring, how should you check your answer?",

                options: [
                    "Multiply the factors",
                    "Guess",
                    "Graph it"
                ],

                answer: "Multiply the factors",

                explanation: "Expanding verifies the factorization."
            },

            {
                q: "Difference of squares contains?",

                options: [
                    "Two squared terms separated by subtraction",
                    "Three terms",
                    "One variable"
                ],

                answer: "Two squared terms separated by subtraction",

                explanation: "That's the pattern."
            },

            {
                q: "Factoring is useful because it helps solve?",

                options: [
                    "Quadratic equations",
                    "Only fractions",
                    "Only geometry"
                ],

                answer: "Quadratic equations",

                explanation: "Many quadratic equations are solved by factoring."
            }

        ]

    }
    ,

    "algebra2-polynomial-long-division": {
        title: "Polynomial Long Division",
        subtitle: "Divide one polynomial by another using long division.",

        body: `

<h2>Introduction</h2>

<p>Polynomial long division is very similar to regular number long division.</p>

<p>The goal is to divide a polynomial into another polynomial one term at a time.</p>

<hr>

<h2>When Do We Use It?</h2>

<ul>

<li>Finding simplified polynomial expressions.</li>

<li>Preparing for rational functions.</li>

<li>Finding factors.</li>

</ul>

<hr>

<h2>Division Steps</h2>

<ol>

<li>Divide the first term.</li>

<li>Write the result above the division bar.</li>

<li>Multiply.</li>

<li>Subtract.</li>

<li>Bring down the next term.</li>

<li>Repeat until finished.</li>

</ol>

<hr>

<h2>Example</h2>

<p>Divide:</p>

<p><strong>(x² + 5x + 6) ÷ (x + 2)</strong></p>

<p>Step 1:</p>

<p>x² ÷ x = x</p>

<p>Write x above the division bar.</p>

<p>Multiply:</p>

<p>x(x+2)=x²+2x</p>

<p>Subtract:</p>

<p>3x+6</p>

<p>Repeat:</p>

<p>3x ÷ x = 3</p>

<p>Multiply:</p>

<p>3(x+2)=3x+6</p>

<p>Subtract:</p>

<p>Remainder = 0</p>

<p><strong>Answer: x+3</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Always line up like terms.</li>

<li>Subtract carefully.</li>

<li>Include missing powers with zero coefficients.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Polynomial long division works exactly like number long division, but with variables.</p>

`,

        questions: [

            {
                q: "Polynomial long division is similar to?",
                options: [
                    "Regular long division",
                    "Factoring",
                    "FOIL"
                ],
                answer: "Regular long division",
                explanation: "The process follows the same basic idea."
            },

            {
                q: "First step?",
                options: [
                    "Divide the first terms",
                    "Multiply everything",
                    "Subtract everything"
                ],
                answer: "Divide the first terms",
                explanation: "Always begin by dividing the leading terms."
            },

            {
                q: "After dividing, what comes next?",
                options: [
                    "Multiply",
                    "Graph",
                    "Factor"
                ],
                answer: "Multiply",
                explanation: "Multiply the quotient term back into the divisor."
            },

            {
                q: "After multiplying, you should?",
                options: [
                    "Subtract",
                    "Add",
                    "Square"
                ],
                answer: "Subtract",
                explanation: "Subtract before bringing down the next term."
            },

            {
                q: "After subtracting?",

                options: [
                    "Bring down the next term",
                    "Start over",
                    "Multiply again"
                ],

                answer: "Bring down the next term",

                explanation: "Continue the division process."
            },

            {
                q: "If a power of x is missing, you should?",

                options: [
                    "Insert a zero coefficient",
                    "Ignore it",
                    "Multiply it"
                ],

                answer: "Insert a zero coefficient",

                explanation: "This keeps terms aligned."
            },

            {
                q: "A remainder of zero means?",

                options: [
                    "The divisor is a factor",
                    "The answer is wrong",
                    "The quotient is zero"
                ],

                answer: "The divisor is a factor",

                explanation: "Zero remainder means perfect division."
            },

            {
                q: "Polynomial long division helps prepare for?",

                options: [
                    "Rational functions",
                    "Circle geometry",
                    "Probability"
                ],

                answer: "Rational functions",

                explanation: "Polynomial division is essential for rational expressions."
            },

            {
                q: "Terms should always be?",

                options: [
                    "In descending order",
                    "In random order",
                    "Alphabetical"
                ],

                answer: "In descending order",

                explanation: "Highest exponent first."
            },

            {
                q: "Long division is primarily used to?",

                options: [
                    "Divide polynomials",
                    "Multiply polynomials",
                    "Graph polynomials"
                ],

                answer: "Divide polynomials",

                explanation: "Its purpose is polynomial division."
            }

        ]

    }
    ,

    "algebra2-synthetic-division": {
        title: "Synthetic Division",
        subtitle: "A faster way to divide polynomials by linear factors.",

        body: `

<h2>Introduction</h2>

<p>Synthetic division is a shortcut for polynomial long division.</p>

<p>It only works when dividing by a linear expression of the form <strong>x - c</strong>.</p>

<hr>

<h2>When Can You Use It?</h2>

<ul>

<li>Divisor must be x − c</li>

<li>Example: x − 3</li>

<li>Example: x + 5 (use -5)</li>

</ul>

<hr>

<h2>Steps</h2>

<ol>

<li>Write the coefficients only.</li>

<li>Write c on the left.</li>

<li>Bring down the first coefficient.</li>

<li>Multiply.</li>

<li>Add.</li>

<li>Repeat until finished.</li>

</ol>

<hr>

<h2>Example</h2>

<p>Divide:</p>

<p><strong>x² + 5x + 6</strong></p>

<p>by</p>

<p><strong>x + 2</strong></p>

<p>Since x + 2 = x − (−2), use:</p>

<p><strong>-2</strong></p>

<p>Coefficients:</p>

<p><strong>1   5   6</strong></p>

<p>Bring down 1.</p>

<p>Multiply:</p>

<p>-2 × 1 = -2</p>

<p>Add:</p>

<p>5 + (-2) = 3</p>

<p>Multiply:</p>

<p>-2 × 3 = -6</p>

<p>Add:</p>

<p>6 + (-6) = 0</p>

<p>Quotient:</p>

<p><strong>x + 3</strong></p>

<p>Remainder:</p>

<p><strong>0</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Use the opposite sign.</li>

<li>Write every coefficient.</li>

<li>Include zero coefficients for missing powers.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Synthetic division is a quick alternative to polynomial long division whenever the divisor is linear.</p>

`,

        questions: [

            {
                q: "Synthetic division works only when dividing by?",

                options: [
                    "x-c",
                    "Any polynomial",
                    "x²+1"
                ],

                answer: "x-c",

                explanation: "The divisor must be linear."
            },

            {
                q: "For x+4 you use?",

                options: [
                    "-4",
                    "4",
                    "0"
                ],

                answer: "-4",

                explanation: "Always use the opposite sign."
            },

            {
                q: "Synthetic division uses?",

                options: [
                    "Coefficients only",
                    "Entire polynomial",
                    "Variables only"
                ],

                answer: "Coefficients only",

                explanation: "Only coefficients are written."
            },

            {
                q: "The first coefficient is?",

                options: [
                    "Brought down",
                    "Squared",
                    "Removed"
                ],

                answer: "Brought down",

                explanation: "Always begin by bringing it down."
            },

            {
                q: "After multiplying you?",

                options: [
                    "Add",
                    "Subtract",
                    "Factor"
                ],

                answer: "Add",

                explanation: "Multiply then add."
            },

            {
                q: "Synthetic division is faster than?",

                options: [
                    "Polynomial long division",
                    "Factoring",
                    "Graphing"
                ],

                answer: "Polynomial long division",

                explanation: "It is a shortcut."
            },

            {
                q: "A remainder of zero means?",

                options: [
                    "The divisor is a factor",
                    "The answer is incorrect",
                    "Stop immediately"
                ],

                answer: "The divisor is a factor",

                explanation: "Zero remainder means perfect division."
            },

            {
                q: "Missing powers require?",

                options: [
                    "Zero coefficients",
                    "No changes",
                    "Extra variables"
                ],

                answer: "Zero coefficients",

                explanation: "This keeps the coefficients aligned."
            },

            {
                q: "Synthetic division produces?",

                options: [
                    "A quotient and remainder",
                    "Only a quotient",
                    "Only a remainder"
                ],

                answer: "A quotient and remainder",

                explanation: "Both are found."
            },

            {
                q: "Synthetic division is commonly used before?",

                options: [
                    "Finding factors",
                    "Geometry proofs",
                    "Statistics"
                ],

                answer: "Finding factors",

                explanation: "It helps identify polynomial factors."
            }

        ]

    }
    ,

    "algebra2-remainder-theorem": {
        title: "The Remainder Theorem",
        subtitle: "Find remainders without performing long division.",

        body: `

<h2>Introduction</h2>

<p>The <strong>Remainder Theorem</strong> provides a shortcut for finding the remainder when dividing a polynomial by a linear factor.</p>

<hr>

<h2>The Theorem</h2>

<p>If a polynomial <strong>P(x)</strong> is divided by <strong>x-c</strong>, then the remainder is:</p>

<p><strong>P(c)</strong></p>

<hr>

<h2>Example</h2>

<p>Find the remainder when:</p>

<p><strong>P(x)=x²+3x+2</strong></p>

<p>is divided by</p>

<p><strong>x-2</strong></p>

<p>Substitute 2 into the polynomial:</p>

<p>P(2)=2²+3(2)+2</p>

<p>=4+6+2</p>

<p>=12</p>

<p><strong>The remainder is 12.</strong></p>

<hr>

<h2>Another Example</h2>

<p>P(x)=x³−4x+1</p>

<p>Divide by x+1.</p>

<p>Since x+1=x−(-1), evaluate:</p>

<p><strong>P(-1)</strong></p>

<hr>

<h2>Remember</h2>

<ul>

<li>Use the opposite sign from the divisor.</li>

<li>You only substitute one value.</li>

<li>No long division is necessary.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>The Remainder Theorem allows you to find remainders quickly by evaluating the polynomial.</p>

`,

        questions: [

            {
                q: "The Remainder Theorem uses?",
                options: [
                    "P(c)",
                    "Quadratic Formula",
                    "FOIL"
                ],
                answer: "P(c)",
                explanation: "The remainder equals P(c)."
            },

            {
                q: "Divide by x−5. What value do you substitute?",
                options: [
                    "5",
                    "-5",
                    "0"
                ],
                answer: "5",
                explanation: "Use the opposite sign from the divisor."
            },

            {
                q: "Divide by x+4. What value do you substitute?",
                options: [
                    "-4",
                    "4",
                    "0"
                ],
                answer: "-4",
                explanation: "x+4=x−(-4)."
            },

            {
                q: "The theorem helps find?",
                options: [
                    "The remainder",
                    "The slope",
                    "The area"
                ],
                answer: "The remainder",
                explanation: "It finds the remainder directly."
            },

            {
                q: "If P(3)=8, then dividing by x−3 leaves remainder?",
                options: [
                    "8",
                    "3",
                    "0"
                ],
                answer: "8",
                explanation: "The remainder equals P(3)."
            },

            {
                q: "The Remainder Theorem replaces?",
                options: [
                    "Long division",
                    "Graphing",
                    "Factoring"
                ],
                answer: "Long division",
                explanation: "It avoids lengthy division when only the remainder is needed."
            },

            {
                q: "Does the theorem work with x−c?",
                options: [
                    "Yes",
                    "No",
                    "Only sometimes"
                ],
                answer: "Yes",
                explanation: "The divisor must be x−c."
            },

            {
                q: "To evaluate P(c), you?",
                options: [
                    "Substitute c for x",
                    "Multiply by c",
                    "Factor first"
                ],
                answer: "Substitute c for x",
                explanation: "Simply replace x with c."
            },

            {
                q: "If the remainder equals zero?",
                options: [
                    "The divisor is a factor",
                    "The polynomial is linear",
                    "The answer is incorrect"
                ],
                answer: "The divisor is a factor",
                explanation: "Zero remainder means exact division."
            },

            {
                q: "The Remainder Theorem is closely related to?",
                options: [
                    "The Factor Theorem",
                    "The Pythagorean Theorem",
                    "The Binomial Theorem"
                ],
                answer: "The Factor Theorem",
                explanation: "The Factor Theorem is a special case of the Remainder Theorem."
            }

        ]

    }
    ,

    "algebra2-factor-theorem": {
        title: "The Factor Theorem",
        subtitle: "Determine whether a polynomial has a given factor.",

        body: `

<h2>Introduction</h2>

<p>The <strong>Factor Theorem</strong> is an extension of the Remainder Theorem.</p>

<p>It allows us to determine whether a divisor is actually a factor of a polynomial.</p>

<hr>

<h2>The Factor Theorem</h2>

<p>If:</p>

<p><strong>P(c)=0</strong></p>

<p>then</p>

<p><strong>x-c</strong></p>

<p>is a factor of the polynomial.</p>

<hr>

<h2>Example 1</h2>

<p>Determine whether x−2 is a factor of</p>

<p><strong>P(x)=x²−5x+6</strong></p>

<p>Evaluate:</p>

<p>P(2)=2²−5(2)+6</p>

<p>=4−10+6</p>

<p>=0</p>

<p>Since P(2)=0, x−2 is a factor.</p>

<hr>

<h2>Example 2</h2>

<p>Determine whether x+1 is a factor of</p>

<p><strong>P(x)=x²+3x+4</strong></p>

<p>Evaluate:</p>

<p>P(-1)=1−3+4=2</p>

<p>Since the remainder is not zero, x+1 is NOT a factor.</p>

<hr>

<h2>Relationship to the Remainder Theorem</h2>

<ul>

<li>P(c)=remainder</li>

<li>If remainder=0 → factor</li>

<li>If remainder≠0 → not a factor</li>

</ul>

<hr>

<h2>Summary</h2>

<p>The Factor Theorem provides a quick way to test whether a polynomial contains a particular linear factor.</p>

`,

        questions: [

            {
                q: "If P(c)=0, then x-c is?",
                options: [
                    "A factor",
                    "Not a factor",
                    "A remainder"
                ],
                answer: "A factor",
                explanation: "Zero remainder means the divisor is a factor."
            },

            {
                q: "The Factor Theorem is based on?",
                options: [
                    "The Remainder Theorem",
                    "The Quadratic Formula",
                    "FOIL"
                ],
                answer: "The Remainder Theorem",
                explanation: "The Factor Theorem is a direct consequence of the Remainder Theorem."
            },

            {
                q: "If P(4)=0, then which is a factor?",
                options: [
                    "x-4",
                    "x+4",
                    "x²-4"
                ],
                answer: "x-4",
                explanation: "The factor is x-c."
            },

            {
                q: "If P(-3)=0, then which is a factor?",
                options: [
                    "x+3",
                    "x-3",
                    "x²+3"
                ],
                answer: "x+3",
                explanation: "x+3=x-(-3)."
            },

            {
                q: "If P(2)=5, then x-2 is?",
                options: [
                    "Not a factor",
                    "A factor",
                    "A quadratic"
                ],
                answer: "Not a factor",
                explanation: "Only a remainder of zero indicates a factor."
            },

            {
                q: "The Factor Theorem helps determine?",
                options: [
                    "Whether a divisor is a factor",
                    "The slope",
                    "The vertex"
                ],
                answer: "Whether a divisor is a factor",
                explanation: "It tests for factors quickly."
            },

            {
                q: "A zero remainder means?",
                options: [
                    "Exact division",
                    "Graph the polynomial",
                    "Multiply the polynomial"
                ],
                answer: "Exact division",
                explanation: "No remainder means the divisor divides evenly."
            },

            {
                q: "To test x-5 as a factor, evaluate?",
                options: [
                    "P(5)",
                    "P(-5)",
                    "P(0)"
                ],
                answer: "P(5)",
                explanation: "Substitute the opposite sign."
            },

            {
                q: "To test x+6 as a factor, evaluate?",
                options: [
                    "P(-6)",
                    "P(6)",
                    "P(0)"
                ],
                answer: "P(-6)",
                explanation: "x+6=x-(-6)."
            },

            {
                q: "The Factor Theorem is mainly used for?",
                options: [
                    "Testing factors quickly",
                    "Finding slopes",
                    "Calculating areas"
                ],
                answer: "Testing factors quickly",
                explanation: "It provides a fast factor test."
            }

        ]

    }

    ,

    "algebra2-polynomials-review": {
        title: "Unit 3 Review",
        subtitle: "Review polynomial vocabulary, operations, factoring, division, the Remainder Theorem, and the Factor Theorem.",

        body: `

<h2>Unit Review</h2>

<p>This review covers the major concepts from the Polynomials unit.</p>

<hr>

<h2>Key Concepts</h2>

<ul>

<li>Identifying polynomial expressions</li>

<li>Degree of a polynomial</li>

<li>Classifying polynomials by number of terms</li>

<li>Adding and subtracting polynomials</li>

<li>Multiplying polynomials</li>

<li>Special products</li>

<li>Factoring polynomials</li>

<li>End behavior</li>

<li>Polynomial long division</li>

<li>Synthetic division</li>

<li>Remainder Theorem</li>

<li>Factor Theorem</li>

</ul>

<hr>

<h2>Important Facts</h2>

<ul>

<li>The degree is the highest exponent.</li>

<li>A monomial has one term.</li>

<li>A binomial has two terms.</li>

<li>A trinomial has three terms.</li>

<li>Like terms have identical variable parts.</li>

<li>FOIL is used to multiply two binomials.</li>

<li>Polynomial graphs are smooth and continuous.</li>

<li>The leading coefficient determines end behavior.</li>

<li>Synthetic division is a shortcut for dividing by x − c.</li>

<li>If the remainder is 0, then x − c is a factor.</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Adding unlike terms.</li>

<li>Forgetting to distribute negatives.</li>

<li>Confusing degree with the coefficient.</li>

<li>Using synthetic division when the divisor is not x − c.</li>

<li>Thinking every remainder of 0 means multiple roots.</li>

</ul>

<hr>

<h2>Quick Review</h2>

<p>Before taking the Unit Test, make sure you can:</p>

<ul>

<li>Classify polynomials.</li>

<li>Perform all polynomial operations.</li>

<li>Factor common polynomial expressions.</li>

<li>Determine end behavior.</li>

<li>Use synthetic division.</li>

<li>Apply the Remainder and Factor Theorems.</li>

</ul>

<hr>

<h2>Ready?</h2>

<p>If you understand these concepts, you're ready for the Polynomial Unit Test.</p>

`,

        questions: [

            {
                q: "The degree of 5x⁴ + 2x² − 7 is?",

                options: [
                    "4",
                    "5",
                    "2"
                ],

                answer: "4",

                explanation: "The degree is the highest exponent."
            },

            {
                q: "A polynomial with exactly two terms is called a?",

                options: [
                    "Binomial",
                    "Monomial",
                    "Trinomial"
                ],

                answer: "Binomial",

                explanation: "A binomial has exactly two terms."
            },

            {
                q: "Like terms must have the same?",

                options: [
                    "Variable part",
                    "Coefficient",
                    "Exponent only"
                ],

                answer: "Variable part",

                explanation: "Like terms have identical variables with identical exponents."
            },

            {
                q: "FOIL is used for?",

                options: [
                    "Multiplying two binomials",
                    "Factoring trinomials",
                    "Dividing polynomials"
                ],

                answer: "Multiplying two binomials",

                explanation: "FOIL stands for First, Outer, Inner, Last."
            },

            {
                q: "The graph of a polynomial is?",

                options: [
                    "Smooth",
                    "Broken",
                    "Always a straight line"
                ],

                answer: "Smooth",

                explanation: "Polynomial graphs have no sharp corners or breaks."
            },

            {
                q: "End behavior depends mainly on the?",

                options: [
                    "Leading coefficient and degree",
                    "Constant term",
                    "Y-intercept"
                ],

                answer: "Leading coefficient and degree",

                explanation: "These determine how the graph behaves as x becomes very large or very small."
            },

            {
                q: "Synthetic division works when dividing by?",

                options: [
                    "x − c",
                    "x² + 1",
                    "Any polynomial"
                ],

                answer: "x − c",

                explanation: "Synthetic division only applies to linear divisors of the form x − c."
            },

            {
                q: "If the remainder is zero, then?",

                options: [
                    "The divisor is a factor",
                    "The polynomial has no roots",
                    "The degree changes"
                ],

                answer: "The divisor is a factor",

                explanation: "This is the Factor Theorem."
            },

            {
                q: "The Remainder Theorem evaluates?",

                options: [
                    "f(c)",
                    "The degree",
                    "The leading coefficient"
                ],

                answer: "f(c)",

                explanation: "The remainder equals the value of f(c)."
            },

            {
                q: "The Factor Theorem states that x − c is a factor when?",

                options: [
                    "f(c)=0",
                    "f(c)=1",
                    "The remainder is 2"
                ],

                answer: "f(c)=0",

                explanation: "A zero remainder means the divisor is a factor."
            }

        ]

    }
    ,

    "algebra2-polynomials-unit-test": {
        title: "Unit 3 Test",
        subtitle: "Test polynomial vocabulary, operations, factoring, division, the Remainder Theorem, and the Factor Theorem.",

        body: `

<h2>Unit Test</h2>

<p>This test covers the entire Polynomials unit.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Polynomial vocabulary</li>

<li>Degree and classification</li>

<li>Adding and subtracting polynomials</li>

<li>Multiplying polynomials</li>

<li>Factoring</li>

<li>Graphing and end behavior</li>

<li>Polynomial long division</li>

<li>Synthetic division</li>

<li>Remainder Theorem</li>

<li>Factor Theorem</li>

</ul>

<hr>

<h2>Goal</h2>

<p>Successfully completing this assessment means you're ready to begin the Radicals unit.</p>

`,

        questions: [

            {
                q: "What is the degree of 7x⁵ − 2x² + 9?",

                options: [
                    "5",
                    "7",
                    "2"
                ],

                answer: "5",

                explanation: "The degree is the highest exponent."
            },

            {
                q: "A polynomial with one term is called a?",

                options: [
                    "Monomial",
                    "Binomial",
                    "Trinomial"
                ],

                answer: "Monomial",

                explanation: "One term is a monomial."
            },

            {
                q: "A polynomial with three terms is called a?",

                options: [
                    "Trinomial",
                    "Monomial",
                    "Quadratic"
                ],

                answer: "Trinomial",

                explanation: "Three terms form a trinomial."
            },

            {
                q: "Simplify: (3x² + 2x) + (5x² − x)",

                options: [
                    "8x² + x",
                    "8x² + 3x",
                    "15x⁴ + x"
                ],

                answer: "8x² + x",

                explanation: "Combine like terms."
            },

            {
                q: "Multiply: x(x + 6)",

                options: [
                    "x² + 6x",
                    "x² + 6",
                    "2x + 6"
                ],

                answer: "x² + 6x",

                explanation: "Distribute x to each term."
            },

            {
                q: "(x + 3)(x + 2) equals?",

                options: [
                    "x² + 5x + 6",
                    "x² + 6",
                    "x² + x + 5"
                ],

                answer: "x² + 5x + 6",

                explanation: "Use FOIL."
            },

            {
                q: "Which expression is fully factored?",

                options: [
                    "(x − 2)(x + 5)",
                    "x² + 3x − 10",
                    "x² + 4"
                ],

                answer: "(x − 2)(x + 5)",

                explanation: "It is written as a product of factors."
            },

            {
                q: "The roots of (x − 4)(x + 1) are?",

                options: [
                    "4 and −1",
                    "−4 and 1",
                    "4 and 1"
                ],

                answer: "4 and −1",

                explanation: "Set each factor equal to zero."
            },

            {
                q: "The graph of every polynomial is?",

                options: [
                    "Smooth",
                    "Made of line segments",
                    "Always a parabola"
                ],

                answer: "Smooth",

                explanation: "Polynomial graphs have no sharp corners."
            },

            {
                q: "A polynomial of odd degree has opposite end behavior when?",

                options: [
                    "The leading coefficient is positive",
                    "The constant is positive",
                    "The coefficient of x is zero"
                ],

                answer: "The leading coefficient is positive",

                explanation: "Odd-degree polynomials have opposite end behavior."
            },

            {
                q: "Synthetic division is used when dividing by?",

                options: [
                    "x − c",
                    "x² + 1",
                    "Any polynomial"
                ],

                answer: "x − c",

                explanation: "Synthetic division only works with divisors of the form x − c."
            },

            {
                q: "If dividing by x − 3, what number is used in synthetic division?",

                options: [
                    "3",
                    "−3",
                    "0"
                ],

                answer: "3",

                explanation: "Use the opposite of the constant."
            },

            {
                q: "The Remainder Theorem states the remainder equals?",

                options: [
                    "f(c)",
                    "c²",
                    "The degree"
                ],

                answer: "f(c)",

                explanation: "Evaluating f(c) gives the remainder."
            },

            {
                q: "If f(5)=0, then?",

                options: [
                    "x − 5 is a factor",
                    "x + 5 is a factor",
                    "There are no factors"
                ],

                answer: "x − 5 is a factor",

                explanation: "This is the Factor Theorem."
            },

            {
                q: "A remainder of zero means?",

                options: [
                    "The divisor is a factor",
                    "The polynomial is linear",
                    "The graph has no roots"
                ],

                answer: "The divisor is a factor",

                explanation: "Zero remainder means exact division."
            },

            {
                q: "Which operation combines like terms?",

                options: [
                    "Adding polynomials",
                    "Factoring",
                    "Synthetic division"
                ],

                answer: "Adding polynomials",

                explanation: "Like terms are combined during addition and subtraction."
            },

            {
                q: "Which determines a polynomial's end behavior?",

                options: [
                    "Degree and leading coefficient",
                    "Constant term",
                    "Y-intercept"
                ],

                answer: "Degree and leading coefficient",

                explanation: "These determine how the graph behaves."
            },

            {
                q: "FOIL is primarily used for?",

                options: [
                    "Multiplying two binomials",
                    "Factoring trinomials",
                    "Finding roots"
                ],

                answer: "Multiplying two binomials",

                explanation: "FOIL is a multiplication shortcut."
            },

            {
                q: "Which theorem helps determine if x − c is a factor?",

                options: [
                    "Factor Theorem",
                    "Pythagorean Theorem",
                    "Fundamental Theorem of Arithmetic"
                ],

                answer: "Factor Theorem",

                explanation: "The Factor Theorem uses f(c)=0."
            },

            {
                q: "After mastering this unit, the next Algebra 2 topic is?",

                options: [
                    "Radicals",
                    "Probability",
                    "Statistics"
                ],

                answer: "Radicals",

                explanation: "The next unit studies radicals and rational exponents."
            }

        ]

    },

    "algebra2-introduction-to-radicals": {
        title: "Introduction to Radicals",
        subtitle: "Understand square roots, cube roots, and radical expressions.",

        body: `

<h2>Introduction</h2>

<p>A <strong>radical</strong> is the opposite of an exponent.</p>

<p>Square roots and cube roots are the most common radicals you'll encounter in Algebra 2.</p>

<hr>

<h2>Square Roots</h2>

<p>The square root of a number is a value that, when multiplied by itself, equals the original number.</p>

<p><strong>√25 = 5</strong></p>

<p>Because:</p>

<p><strong>5 × 5 = 25</strong></p>

<hr>

<h2>Cube Roots</h2>

<p>The cube root of a number is a value that, when multiplied by itself three times, equals the original number.</p>

<p><strong>∛27 = 3</strong></p>

<p>Because:</p>

<p><strong>3 × 3 × 3 = 27</strong></p>

<hr>

<h2>Vocabulary</h2>

<ul>

<li>Radical Symbol ( √ )</li>

<li>Radicand (the number inside the radical)</li>

<li>Index (the type of root)</li>

</ul>

<hr>

<h2>Examples</h2>

<p>√36 = 6</p>

<p>√81 = 9</p>

<p>∛64 = 4</p>

<p>∛125 = 5</p>

<hr>

<h2>Summary</h2>

<p>Radicals undo exponents. Understanding radicals is essential before simplifying and solving radical equations.</p>

`,

        questions: [

            {
                q: "A square root is the opposite of?",
                options: [
                    "Squaring",
                    "Adding",
                    "Subtracting"
                ],
                answer: "Squaring",
                explanation: "Square roots undo squaring."
            },

            {
                q: "√49 = ?",
                options: [
                    "7",
                    "14",
                    "49"
                ],
                answer: "7",
                explanation: "7 × 7 = 49."
            },

            {
                q: "√64 = ?",
                options: [
                    "8",
                    "16",
                    "32"
                ],
                answer: "8",
                explanation: "8² = 64."
            },

            {
                q: "∛27 = ?",
                options: [
                    "3",
                    "9",
                    "6"
                ],
                answer: "3",
                explanation: "3³ = 27."
            },

            {
                q: "∛125 = ?",
                options: [
                    "5",
                    "25",
                    "15"
                ],
                answer: "5",
                explanation: "5³ = 125."
            },

            {
                q: "The number inside a radical is called the?",
                options: [
                    "Radicand",
                    "Coefficient",
                    "Exponent"
                ],
                answer: "Radicand",
                explanation: "The radicand is the value inside the radical."
            },

            {
                q: "The symbol √ is called the?",
                options: [
                    "Radical symbol",
                    "Division symbol",
                    "Exponent"
                ],
                answer: "Radical symbol",
                explanation: "It represents a root."
            },

            {
                q: "√100 = ?",
                options: [
                    "10",
                    "20",
                    "50"
                ],
                answer: "10",
                explanation: "10² = 100."
            },

            {
                q: "Radicals are the inverse of?",
                options: [
                    "Exponents",
                    "Fractions",
                    "Decimals"
                ],
                answer: "Exponents",
                explanation: "Roots undo exponents."
            },

            {
                q: "Learning radicals prepares students for?",
                options: [
                    "Solving radical equations",
                    "Geometry proofs",
                    "Statistics"
                ],
                answer: "Solving radical equations",
                explanation: "Radicals lead directly into more advanced Algebra 2 topics."
            }

        ]

    }
    ,

    "algebra2-simplifying-square-roots": {
        title: "Simplifying Square Roots",
        subtitle: "Rewrite radicals in their simplest form.",

        body: `

<h2>Introduction</h2>

<p>Many square roots can be simplified by finding perfect square factors.</p>

<p>The goal is to remove as much as possible from inside the radical.</p>

<hr>

<h2>Perfect Squares</h2>

<ul>

<li>1</li>

<li>4</li>

<li>9</li>

<li>16</li>

<li>25</li>

<li>36</li>

<li>49</li>

<li>64</li>

<li>81</li>

<li>100</li>

</ul>

<hr>

<h2>Example 1</h2>

<p><strong>√50</strong></p>

<p>Find the largest perfect square factor.</p>

<p>50 = 25 × 2</p>

<p>√50 = √25 × √2</p>

<p>= <strong>5√2</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>√72</strong></p>

<p>72 = 36 × 2</p>

<p>√72 = √36 × √2</p>

<p>= <strong>6√2</strong></p>

<hr>

<h2>Remember</h2>

<ul>

<li>Always look for the largest perfect square factor.</li>

<li>Leave non-perfect square factors inside the radical.</li>

<li>Continue simplifying until no perfect square factors remain.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Simplifying radicals makes expressions easier to work with and prepares you for operations involving radicals.</p>

`,

        questions: [

            {
                q: "√49 = ?",
                options: [
                    "7",
                    "14",
                    "49"
                ],
                answer: "7",
                explanation: "7² = 49."
            },

            {
                q: "√50 simplifies to?",
                options: [
                    "5√2",
                    "25√2",
                    "√25"
                ],
                answer: "5√2",
                explanation: "50 = 25×2."
            },

            {
                q: "√72 simplifies to?",
                options: [
                    "6√2",
                    "8√2",
                    "9√2"
                ],
                answer: "6√2",
                explanation: "72 = 36×2."
            },

            {
                q: "The first step in simplifying radicals is?",
                options: [
                    "Find the largest perfect square factor",
                    "Multiply everything",
                    "Use FOIL"
                ],
                answer: "Find the largest perfect square factor",
                explanation: "Perfect square factors come outside the radical."
            },

            {
                q: "√18 simplifies to?",
                options: [
                    "3√2",
                    "9√2",
                    "2√9"
                ],
                answer: "3√2",
                explanation: "18 = 9×2."
            },

            {
                q: "√32 simplifies to?",
                options: [
                    "4√2",
                    "8√2",
                    "2√8"
                ],
                answer: "4√2",
                explanation: "32 = 16×2."
            },

            {
                q: "Which number stays inside the radical?",
                options: [
                    "The non-perfect square factor",
                    "The perfect square",
                    "The coefficient"
                ],
                answer: "The non-perfect square factor",
                explanation: "Only perfect square factors come outside."
            },

            {
                q: "√98 simplifies to?",
                options: [
                    "7√2",
                    "14√2",
                    "49√2"
                ],
                answer: "7√2",
                explanation: "98 = 49×2."
            },

            {
                q: "Perfect square factors move?",
                options: [
                    "Outside the radical",
                    "Stay inside",
                    "Disappear"
                ],
                answer: "Outside the radical",
                explanation: "Their square root becomes the coefficient."
            },

            {
                q: "Why simplify radicals?",
                options: [
                    "To make expressions easier to work with",
                    "To increase numbers",
                    "To change the exponent"
                ],
                answer: "To make expressions easier to work with",
                explanation: "Simplified radicals are easier to compute and compare."
            }

        ]

    }
    ,

    "algebra2-simplifying-cube-roots": {
        title: "Simplifying Cube Roots",
        subtitle: "Simplify cube roots using perfect cube factors.",

        body: `

<h2>Introduction</h2>

<p>Cube roots can also be simplified by factoring out perfect cubes.</p>

<p>The goal is to move perfect cube factors outside the radical.</p>

<hr>

<h2>Perfect Cubes</h2>

<ul>

<li>1</li>

<li>8</li>

<li>27</li>

<li>64</li>

<li>125</li>

<li>216</li>

<li>343</li>

<li>512</li>

<li>729</li>

<li>1000</li>

</ul>

<hr>

<h2>Example 1</h2>

<p><strong>∛54</strong></p>

<p>54 = 27 × 2</p>

<p>∛54 = ∛27 × ∛2</p>

<p>= <strong>3∛2</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>∛250</strong></p>

<p>250 = 125 × 2</p>

<p>∛250 = ∛125 × ∛2</p>

<p>= <strong>5∛2</strong></p>

<hr>

<h2>Remember</h2>

<ul>

<li>Look for the largest perfect cube factor.</li>

<li>Perfect cube factors leave the radical.</li>

<li>Everything else remains inside.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Simplifying cube roots follows the same idea as simplifying square roots, except you use perfect cubes instead of perfect squares.</p>

`,

        questions: [

            {
                q: "∛27 = ?",

                options: [
                    "3",
                    "9",
                    "6"
                ],

                answer: "3",

                explanation: "3³ = 27."
            },

            {
                q: "∛64 = ?",

                options: [
                    "4",
                    "8",
                    "16"
                ],

                answer: "4",

                explanation: "4³ = 64."
            },

            {
                q: "∛125 = ?",

                options: [
                    "5",
                    "25",
                    "15"
                ],

                answer: "5",

                explanation: "5³ = 125."
            },

            {
                q: "∛54 simplifies to?",

                options: [
                    "3∛2",
                    "6∛3",
                    "9∛2"
                ],

                answer: "3∛2",

                explanation: "54 = 27 × 2."
            },

            {
                q: "∛250 simplifies to?",

                options: [
                    "5∛2",
                    "10∛5",
                    "25∛2"
                ],

                answer: "5∛2",

                explanation: "250 = 125 × 2."
            },

            {
                q: "The first step when simplifying cube roots is?",

                options: [
                    "Find the largest perfect cube factor",
                    "Multiply by 3",
                    "Square the number"
                ],

                answer: "Find the largest perfect cube factor",

                explanation: "Always begin by finding the largest perfect cube."
            },

            {
                q: "Perfect cube factors move?",

                options: [
                    "Outside the radical",
                    "Stay inside",
                    "Disappear"
                ],

                answer: "Outside the radical",

                explanation: "Their cube root becomes the coefficient."
            },

            {
                q: "∛216 = ?",

                options: [
                    "6",
                    "12",
                    "18"
                ],

                answer: "6",

                explanation: "6³ = 216."
            },

            {
                q: "Cube roots undo?",

                options: [
                    "Cubing",
                    "Squaring",
                    "Adding"
                ],

                answer: "Cubing",

                explanation: "Cube roots are the inverse of raising to the third power."
            },

            {
                q: "Cube root simplification is similar to square root simplification because?",

                options: [
                    "Both factor out perfect powers",
                    "Both use FOIL",
                    "Both require the Quadratic Formula"
                ],

                answer: "Both factor out perfect powers",

                explanation: "The process is the same—only the perfect powers are different."
            }

        ]

    }
    ,

    "algebra2-adding-subtracting-radicals": {
        title: "Adding and Subtracting Radicals",
        subtitle: "Combine like radicals just like combining like terms.",

        body: `

<h2>Introduction</h2>

<p>Radicals can only be added or subtracted when they are <strong>like radicals</strong>.</p>

<p>Like radicals have the same index and the same radicand.</p>

<hr>

<h2>Like Radicals</h2>

<p>Examples:</p>

<ul>

<li>√5 and 3√5</li>

<li>7√2 and -2√2</li>

</ul>

<p>These can be combined.</p>

<hr>

<h2>Unlike Radicals</h2>

<p>Examples:</p>

<ul>

<li>√2 and √3</li>

<li>√5 and ∛5</li>

</ul>

<p>These cannot be combined.</p>

<hr>

<h2>Example 1</h2>

<p><strong>3√7 + 5√7</strong></p>

<p>= (3 + 5)√7</p>

<p>= <strong>8√7</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>9√2 - 4√2</strong></p>

<p>= <strong>5√2</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>√8 + √2</strong></p>

<p>Simplify first:</p>

<p>√8 = 2√2</p>

<p>2√2 + √2</p>

<p>= <strong>3√2</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Simplify radicals before combining.</li>

<li>Only combine like radicals.</li>

<li>Leave unlike radicals separate.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Adding and subtracting radicals works just like combining like terms in algebra.</p>

`,

        questions: [

            {
                q: "Which radicals are like radicals?",

                options: [
                    "√5 and 3√5",
                    "√5 and √7",
                    "√5 and ∛5"
                ],

                answer: "√5 and 3√5",

                explanation: "They have the same radicand and index."
            },

            {
                q: "3√2 + 5√2 = ?",

                options: [
                    "8√2",
                    "8√4",
                    "16√2"
                ],

                answer: "8√2",

                explanation: "Add the coefficients only."
            },

            {
                q: "10√3 - 6√3 = ?",

                options: [
                    "4√3",
                    "16√3",
                    "4√6"
                ],

                answer: "4√3",

                explanation: "Subtract the coefficients."
            },

            {
                q: "Can √2 and √5 be combined?",

                options: [
                    "No",
                    "Yes",
                    "Always"
                ],

                answer: "No",

                explanation: "They have different radicands."
            },

            {
                q: "Can √7 and ∛7 be combined?",

                options: [
                    "No",
                    "Yes",
                    "Always"
                ],

                answer: "No",

                explanation: "Their indices are different."
            },

            {
                q: "√8 + √2 simplifies to?",

                options: [
                    "3√2",
                    "√10",
                    "2√10"
                ],

                answer: "3√2",

                explanation: "Simplify √8 first."
            },

            {
                q: "Before combining radicals you should?",

                options: [
                    "Simplify them",
                    "Multiply them",
                    "Square them"
                ],

                answer: "Simplify them",

                explanation: "Always simplify first."
            },

            {
                q: "7√11 + 2√11 = ?",

                options: [
                    "9√11",
                    "14√11",
                    "5√11"
                ],

                answer: "9√11",

                explanation: "Add the coefficients."
            },

            {
                q: "Like radicals have the same?",

                options: [
                    "Index and radicand",
                    "Coefficient",
                    "Exponent"
                ],

                answer: "Index and radicand",

                explanation: "Both must match."
            },

            {
                q: "Adding radicals is similar to?",

                options: [
                    "Combining like terms",
                    "FOIL",
                    "Long division"
                ],

                answer: "Combining like terms",

                explanation: "Only like radicals combine."

            }

        ]

    }

    ,

    "algebra2-multiplying-radicals": {
        title: "Multiplying Radicals",
        subtitle: "Multiply radical expressions using the Product Property.",

        body: `

<h2>Introduction</h2>

<p>Radicals are multiplied using the <strong>Product Property of Radicals</strong>.</p>

<p>This property allows us to multiply numbers inside radicals before simplifying.</p>

<hr>

<h2>Product Property</h2>

<p><strong>√a × √b = √(ab)</strong></p>

<hr>

<h2>Example 1</h2>

<p><strong>√3 × √12</strong></p>

<p>= √36</p>

<p>= <strong>6</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>2√5 × 3√5</strong></p>

<p>Multiply coefficients:</p>

<p>2 × 3 = 6</p>

<p>Multiply radicals:</p>

<p>√5 × √5 = 5</p>

<p>Final answer:</p>

<p><strong>30</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>4√2 × 5√8</strong></p>

<p>Multiply coefficients:</p>

<p>20√16</p>

<p>Simplify:</p>

<p><strong>80</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Multiply coefficients separately.</li>

<li>Multiply radicals separately.</li>

<li>Simplify the final radical.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Multiply coefficients together, multiply radicals together, then simplify completely.</p>

`,

        questions: [

            {
                q: "√4 × √9 = ?",

                options: [
                    "6",
                    "13",
                    "36"
                ],

                answer: "6",

                explanation: "√36 = 6."
            },

            {
                q: "√5 × √20 = ?",

                options: [
                    "10",
                    "25",
                    "5"
                ],

                answer: "10",

                explanation: "√100 = 10."
            },

            {
                q: "2√3 × 4√3 = ?",

                options: [
                    "24",
                    "8√9",
                    "Both are correct"
                ],

                answer: "Both are correct",

                explanation: "2×4=8 and √3×√3=3, so 8×3=24."
            },

            {
                q: "The Product Property says?",

                options: [
                    "√a·√b = √ab",
                    "√a+√b = √ab",
                    "√a−√b = √ab"
                ],

                answer: "√a·√b = √ab",

                explanation: "Multiply under one radical."
            },

            {
                q: "3√2 × 2√8 = ?",

                options: [
                    "24",
                    "12",
                    "6√16"
                ],

                answer: "24",

                explanation: "6√16 = 6×4 = 24."
            },

            {
                q: "First multiply?",

                options: [
                    "Coefficients and radicals separately",
                    "Everything together",
                    "Only radicals"
                ],

                answer: "Coefficients and radicals separately",

                explanation: "Treat coefficients and radicals independently."
            },

            {
                q: "√6 × √6 = ?",

                options: [
                    "6",
                    "12",
                    "36"
                ],

                answer: "6",

                explanation: "√36 = 6."
            },

            {
                q: "After multiplying radicals you should?",

                options: [
                    "Simplify",
                    "Factor",
                    "Graph"
                ],

                answer: "Simplify",

                explanation: "Always simplify the final radical."
            },

            {
                q: "5√7 × 2√7 = ?",

                options: [
                    "70",
                    "10√14",
                    "35"
                ],

                answer: "70",

                explanation: "10×7=70."
            },

            {
                q: "Multiplying radicals uses which property?",

                options: [
                    "Product Property",
                    "Quotient Property",
                    "Distributive Property"
                ],

                answer: "Product Property",

                explanation: "This lesson focuses on the Product Property."

            }

        ]

    }
    ,

    "algebra2-dividing-radicals": {
        title: "Dividing Radicals",
        subtitle: "Divide radicals and rationalize the denominator.",

        body: `

<h2>Introduction</h2>

<p>Radicals can also be divided using the <strong>Quotient Property of Radicals</strong>.</p>

<hr>

<h2>Quotient Property</h2>

<p><strong>√a / √b = √(a/b)</strong></p>

<p>This property only works when both radicals are real numbers.</p>

<hr>

<h2>Example 1</h2>

<p><strong>√45 / √5</strong></p>

<p>= √(45/5)</p>

<p>= √9</p>

<p>= <strong>3</strong></p>

<hr>

<h2>Rationalizing the Denominator</h2>

<p>Mathematicians prefer radicals NOT to remain in the denominator.</p>

<p>Multiply the numerator and denominator by the radical in the denominator.</p>

<hr>

<h2>Example 2</h2>

<p><strong>5 / √2</strong></p>

<p>Multiply top and bottom by √2.</p>

<p>= (5√2)/(√2·√2)</p>

<p>= (5√2)/2</p>

<hr>

<h2>Example 3</h2>

<p><strong>3 / √7</strong></p>

<p>= (3√7)/7</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Always rationalize the denominator when required.</li>

<li>Multiply both numerator and denominator.</li>

<li>Simplify the final answer completely.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Divide radicals using the Quotient Property, then remove radicals from the denominator whenever possible.</p>

`,

        questions: [

            {
                q: "√36 ÷ √4 = ?",

                options: [
                    "3",
                    "9",
                    "6"
                ],

                answer: "3",

                explanation: "√(36/4)=√9=3."
            },

            {
                q: "√48 ÷ √3 = ?",

                options: [
                    "4",
                    "16",
                    "12"
                ],

                answer: "4",

                explanation: "√16=4."
            },

            {
                q: "What is the Quotient Property?",

                options: [
                    "√a/√b = √(a/b)",
                    "√a+√b=√(a+b)",
                    "√a×√b=√(a+b)"
                ],

                answer: "√a/√b = √(a/b)",

                explanation: "This is the Quotient Property."

            },

            {
                q: "Why do we rationalize the denominator?",

                options: [
                    "To remove radicals from the denominator",
                    "To make numbers larger",
                    "To simplify exponents"
                ],

                answer: "To remove radicals from the denominator",

                explanation: "Standard mathematical form has no radicals in the denominator."

            },

            {
                q: "5/√5 simplifies to?",

                options: [
                    "√5",
                    "5√5",
                    "5"
                ],

                answer: "√5",

                explanation: "Multiply by √5/√5."

            },

            {
                q: "2/√3 becomes?",

                options: [
                    "2√3/3",
                    "2√3",
                    "√3/2"
                ],

                answer: "2√3/3",

                explanation: "Multiply numerator and denominator by √3."

            },

            {
                q: "7/√7 equals?",

                options: [
                    "√7",
                    "7√7",
                    "1"
                ],

                answer: "√7",

                explanation: "(7√7)/7=√7."

            },

            {
                q: "When rationalizing, multiply?",

                options: [
                    "Both numerator and denominator",
                    "Only numerator",
                    "Only denominator"
                ],

                answer: "Both numerator and denominator",

                explanation: "This keeps the value unchanged."

            },

            {
                q: "After rationalizing you should?",

                options: [
                    "Simplify",
                    "Factor",
                    "Graph"
                ],

                answer: "Simplify",

                explanation: "Always simplify the final expression."

            },

            {
                q: "Dividing radicals uses which property?",

                options: [
                    "Quotient Property",
                    "Product Property",
                    "Associative Property"
                ],

                answer: "Quotient Property",

                explanation: "The Quotient Property applies to radical division."

            }

        ]

    }
    ,

    "algebra2-rational-exponents": {
        title: "Rational Exponents",
        subtitle: "Rewrite radicals using fractional exponents.",

        body: `

<h2>Introduction</h2>

<p>Radicals and exponents are closely related.</p>

<p>A radical can always be written using a rational (fractional) exponent.</p>

<hr>

<h2>Basic Rules</h2>

<p><strong>x^(1/2) = √x</strong></p>

<p><strong>x^(1/3) = ∛x</strong></p>

<p><strong>x^(m/n) = ⁿ√(xᵐ)</strong></p>

<hr>

<h2>Examples</h2>

<p><strong>16^(1/2)</strong></p>

<p>= √16</p>

<p>= <strong>4</strong></p>

<hr>

<p><strong>27^(1/3)</strong></p>

<p>= ∛27</p>

<p>= <strong>3</strong></p>

<hr>

<p><strong>64^(2/3)</strong></p>

<p>= (∛64)²</p>

<p>= 4²</p>

<p>= <strong>16</strong></p>

<hr>

<h2>Understanding m/n</h2>

<ul>

<li>The denominator tells you which root to take.</li>

<li>The numerator tells you which power to raise it to.</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Do not confuse the numerator and denominator.</li>

<li>Take the root before raising to the power when it simplifies the calculation.</li>

<li>Remember that x^(1/2) is the same as √x.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Fractional exponents and radicals represent the same mathematical idea in different forms.</p>

`,

        questions: [

            {
                q: "x^(1/2) equals?",

                options: [
                    "√x",
                    "x²",
                    "2x"
                ],

                answer: "√x",

                explanation: "One-half power means square root."
            },

            {
                q: "x^(1/3) equals?",

                options: [
                    "∛x",
                    "√x",
                    "x³"
                ],

                answer: "∛x",

                explanation: "One-third power means cube root."
            },

            {
                q: "16^(1/2)=?",

                options: [
                    "4",
                    "8",
                    "2"
                ],

                answer: "4",

                explanation: "√16=4."
            },

            {
                q: "27^(1/3)=?",

                options: [
                    "3",
                    "9",
                    "6"
                ],

                answer: "3",

                explanation: "∛27=3."
            },

            {
                q: "64^(2/3)=?",

                options: [
                    "16",
                    "8",
                    "4"
                ],

                answer: "16",

                explanation: "∛64=4 and 4²=16."
            },

            {
                q: "In x^(m/n), the denominator tells you?",

                options: [
                    "Which root",
                    "Which coefficient",
                    "The answer"
                ],

                answer: "Which root",

                explanation: "The denominator gives the root."
            },

            {
                q: "In x^(m/n), the numerator tells you?",

                options: [
                    "The power",
                    "The denominator",
                    "The coefficient"
                ],

                answer: "The power",

                explanation: "The numerator gives the exponent."
            },

            {
                q: "81^(1/2)=?",

                options: [
                    "9",
                    "18",
                    "27"
                ],

                answer: "9",

                explanation: "√81=9."
            },

            {
                q: "125^(1/3)=?",

                options: [
                    "5",
                    "25",
                    "15"
                ],

                answer: "5",

                explanation: "∛125=5."
            },

            {
                q: "Rational exponents are another way to write?",

                options: [
                    "Radicals",
                    "Linear equations",
                    "Logarithms"
                ],

                answer: "Radicals",

                explanation: "Fractional exponents and radicals are equivalent."

            }

        ]

    }
    ,

    "algebra2-solving-radical-equations": {
        title: "Solving Radical Equations",
        subtitle: "Solve equations containing square roots and other radicals.",

        body: `

<h2>Introduction</h2>

<p>A <strong>radical equation</strong> contains a variable inside a radical.</p>

<p>The goal is to isolate the radical before removing it.</p>

<hr>

<h2>General Steps</h2>

<ol>

<li>Isolate the radical.</li>

<li>Square both sides.</li>

<li>Solve the resulting equation.</li>

<li>Check every solution in the original equation.</li>

</ol>

<hr>

<h2>Example 1</h2>

<p><strong>√(x+4)=6</strong></p>

<p>Square both sides:</p>

<p>x+4=36</p>

<p>x=32</p>

<p>Check:</p>

<p>√36=6 ✓</p>

<hr>

<h2>Example 2</h2>

<p><strong>√(2x−1)=5</strong></p>

<p>Square both sides:</p>

<p>2x−1=25</p>

<p>2x=26</p>

<p>x=13</p>

<hr>

<h2>Extraneous Solutions</h2>

<p>Sometimes squaring both sides creates answers that do not satisfy the original equation.</p>

<p>Always substitute your answer back into the original equation.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Do not forget to isolate the radical first.</li>

<li>Always square BOTH sides.</li>

<li>Always check your final answers.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Solving radical equations requires isolating the radical, squaring both sides, solving, and checking for extraneous solutions.</p>

`,

        questions: [

            {
                q: "First step when solving a radical equation?",

                options: [
                    "Isolate the radical",
                    "Square immediately",
                    "Multiply both sides"
                ],

                answer: "Isolate the radical",

                explanation: "Always isolate the radical before squaring."
            },

            {
                q: "√(x+9)=7. x=?",

                options: [
                    "40",
                    "49",
                    "58"
                ],

                answer: "40",

                explanation: "Square both sides: x+9=49."
            },

            {
                q: "√(x)=9. x=?",

                options: [
                    "81",
                    "18",
                    "9"
                ],

                answer: "81",

                explanation: "Square both sides."
            },

            {
                q: "After isolating the radical you should?",

                options: [
                    "Square both sides",
                    "Factor",
                    "Graph"
                ],

                answer: "Square both sides",

                explanation: "This removes the square root."
            },

            {
                q: "Why must every solution be checked?",

                options: [
                    "Extraneous solutions may appear",
                    "The teacher requires it",
                    "To find the slope"
                ],

                answer: "Extraneous solutions may appear",

                explanation: "Squaring both sides can introduce invalid solutions."
            },

            {
                q: "√(2x−1)=5. x=?",

                options: [
                    "13",
                    "12",
                    "25"
                ],

                answer: "13",

                explanation: "Square both sides: 2x−1=25."
            },

            {
                q: "A radical equation contains?",

                options: [
                    "A variable inside a radical",
                    "A fraction only",
                    "Only exponents"
                ],

                answer: "A variable inside a radical",

                explanation: "That defines a radical equation."
            },

            {
                q: "Squaring both sides removes the?",

                options: [
                    "Square root",
                    "Variable",
                    "Coefficient"
                ],

                answer: "Square root",

                explanation: "Squaring is the inverse of taking a square root."
            },

            {
                q: "An extraneous solution is?",

                options: [
                    "A solution that doesn't satisfy the original equation",
                    "A correct solution",
                    "A decimal answer"
                ],

                answer: "A solution that doesn't satisfy the original equation",

                explanation: "Always substitute back into the original equation."
            },

            {
                q: "Final step when solving radical equations?",

                options: [
                    "Check every solution",
                    "Graph it",
                    "Factor it"
                ],

                answer: "Check every solution",

                explanation: "Checking prevents accepting extraneous solutions."
            }

        ]

    }
    ,

    "algebra2-radicals-review": {
        title: "Unit 4 Review",
        subtitle: "Review square roots, cube roots, simplifying radicals, radical operations, rational exponents, and radical equations.",

        body: `

<h2>Unit Review</h2>

<p>This review covers the main ideas from the Radicals unit.</p>

<hr>

<h2>Key Concepts</h2>

<ul>
<li>Square roots and cube roots</li>
<li>Simplifying square roots</li>
<li>Simplifying cube roots</li>
<li>Adding and subtracting like radicals</li>
<li>Multiplying radicals</li>
<li>Dividing radicals</li>
<li>Rationalizing denominators</li>
<li>Rational exponents</li>
<li>Solving radical equations</li>
<li>Checking for extraneous solutions</li>
</ul>

<hr>

<h2>Important Facts</h2>

<ul>
<li>Square roots undo squaring.</li>
<li>Cube roots undo cubing.</li>
<li>Only like radicals can be added or subtracted.</li>
<li>Radicals should be simplified completely.</li>
<li>x^(1/2) means √x.</li>
<li>x^(1/3) means ∛x.</li>
<li>Radical equations must always be checked.</li>
</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Combining unlike radicals.</li>
<li>Forgetting to simplify first.</li>
<li>Leaving radicals in the denominator.</li>
<li>Confusing rational exponents with regular exponents.</li>
<li>Not checking for extraneous solutions.</li>
</ul>

<hr>

<h2>Ready for the Unit Test?</h2>

<p>If you understand these concepts, you are ready for the Radicals Unit Test.</p>

`,

        questions: [

            {
                q: "√64 equals?",
                options: ["8", "16", "32"],
                answer: "8",
                explanation: "8² = 64."
            },

            {
                q: "∛125 equals?",
                options: ["5", "25", "15"],
                answer: "5",
                explanation: "5³ = 125."
            },

            {
                q: "√50 simplifies to?",
                options: ["5√2", "25√2", "10√5"],
                answer: "5√2",
                explanation: "50 = 25 × 2, so √50 = 5√2."
            },

            {
                q: "∛54 simplifies to?",
                options: ["3∛2", "6∛3", "9∛2"],
                answer: "3∛2",
                explanation: "54 = 27 × 2, so ∛54 = 3∛2."
            },

            {
                q: "Which radicals can be combined?",
                options: ["√7 and 4√7", "√7 and √3", "√7 and ∛7"],
                answer: "√7 and 4√7",
                explanation: "They have the same index and radicand."
            },

            {
                q: "3√5 + 2√5 equals?",
                options: ["5√5", "6√5", "5√10"],
                answer: "5√5",
                explanation: "Add the coefficients and keep the radical the same."
            },

            {
                q: "√3 × √12 equals?",
                options: ["6", "√15", "12"],
                answer: "6",
                explanation: "√3 × √12 = √36 = 6."
            },

            {
                q: "x^(1/2) is the same as?",
                options: ["√x", "x²", "∛x"],
                answer: "√x",
                explanation: "A one-half exponent means square root."
            },

            {
                q: "x^(1/3) is the same as?",
                options: ["∛x", "√x", "x³"],
                answer: "∛x",
                explanation: "A one-third exponent means cube root."
            },

            {
                q: "Why must radical equation answers be checked?",
                options: ["Extraneous solutions may occur", "The answer is always negative", "Radicals cannot be solved"],
                answer: "Extraneous solutions may occur",
                explanation: "Squaring both sides can create invalid solutions."
            }

        ]

    }
    ,

    "algebra2-radicals-unit-test": {
        title: "Unit 4 Test",
        subtitle: "Test square roots, cube roots, simplifying radicals, radical operations, rational exponents, and radical equations.",

        body: `

<h2>Unit Test</h2>

<p>This test covers the full Radicals unit.</p>

<hr>

<h2>Topics Covered</h2>

<ul>
<li>Square roots</li>
<li>Cube roots</li>
<li>Simplifying radicals</li>
<li>Adding and subtracting radicals</li>
<li>Multiplying radicals</li>
<li>Dividing radicals</li>
<li>Rational exponents</li>
<li>Solving radical equations</li>
<li>Extraneous solutions</li>
</ul>

<hr>

<h2>Goal</h2>

<p>A strong score means you are ready to begin Rational Expressions.</p>

`,

        questions: [

            {
                q: "√81 equals?",
                options: ["9", "18", "27"],
                answer: "9",
                explanation: "9² = 81."
            },

            {
                q: "∛27 equals?",
                options: ["3", "9", "6"],
                answer: "3",
                explanation: "3³ = 27."
            },

            {
                q: "√72 simplifies to?",
                options: ["6√2", "8√2", "9√2"],
                answer: "6√2",
                explanation: "72 = 36 × 2."
            },

            {
                q: "√18 simplifies to?",
                options: ["3√2", "9√2", "2√9"],
                answer: "3√2",
                explanation: "18 = 9 × 2."
            },

            {
                q: "∛250 simplifies to?",
                options: ["5∛2", "10∛5", "25∛2"],
                answer: "5∛2",
                explanation: "250 = 125 × 2."
            },

            {
                q: "7√3 - 2√3 equals?",
                options: ["5√3", "9√3", "5√6"],
                answer: "5√3",
                explanation: "Subtract the coefficients."
            },

            {
                q: "Can √2 and √5 be combined?",
                options: ["No", "Yes", "Always"],
                answer: "No",
                explanation: "They have different radicands."
            },

            {
                q: "√6 × √6 equals?",
                options: ["6", "12", "36"],
                answer: "6",
                explanation: "√6 × √6 = √36 = 6."
            },

            {
                q: "2√3 × 4√3 equals?",
                options: ["24", "8√6", "12"],
                answer: "24",
                explanation: "2×4=8 and √3×√3=3, so 8×3=24."
            },

            {
                q: "√48 ÷ √3 equals?",
                options: ["4", "16", "12"],
                answer: "4",
                explanation: "√(48/3)=√16=4."
            },

            {
                q: "Why do we rationalize the denominator?",
                options: ["To remove radicals from the denominator", "To make the answer larger", "To change the index"],
                answer: "To remove radicals from the denominator",
                explanation: "Standard simplified form avoids radicals in the denominator."
            },

            {
                q: "2/√3 rationalizes to?",
                options: ["2√3/3", "√3/2", "2√3"],
                answer: "2√3/3",
                explanation: "Multiply numerator and denominator by √3."
            },

            {
                q: "16^(1/2) equals?",
                options: ["4", "8", "2"],
                answer: "4",
                explanation: "16^(1/2)=√16=4."
            },

            {
                q: "27^(1/3) equals?",
                options: ["3", "9", "6"],
                answer: "3",
                explanation: "27^(1/3)=∛27=3."
            },

            {
                q: "64^(2/3) equals?",
                options: ["16", "8", "4"],
                answer: "16",
                explanation: "∛64=4, and 4²=16."
            },

            {
                q: "In x^(m/n), the denominator tells you?",
                options: ["Which root to take", "The coefficient", "The final answer"],
                answer: "Which root to take",
                explanation: "The denominator gives the root index."
            },

            {
                q: "First step when solving a radical equation?",
                options: ["Isolate the radical", "Square immediately", "Divide by 2"],
                answer: "Isolate the radical",
                explanation: "Always isolate the radical before removing it."
            },

            {
                q: "√(x+9)=7. x equals?",
                options: ["40", "49", "58"],
                answer: "40",
                explanation: "Square both sides: x+9=49, so x=40."
            },

            {
                q: "√(2x−1)=5. x equals?",
                options: ["13", "12", "25"],
                answer: "13",
                explanation: "Square both sides: 2x−1=25, so x=13."
            },

            {
                q: "An extraneous solution is?",
                options: ["A solution that does not satisfy the original equation", "A correct solution", "A simplified radical"],
                answer: "A solution that does not satisfy the original equation",
                explanation: "Always check radical equation solutions in the original equation."
            }

        ]

    },



    "algebra2-introduction-to-rational-expressions": {
        title: "Introduction to Rational Expressions",
        subtitle: "Learn what rational expressions are and how they are different from polynomials.",

        body: `

<h2>Introduction</h2>

<p>A <strong>rational expression</strong> is a fraction whose numerator and/or denominator contains a polynomial.</p>

<hr>

<h2>Examples</h2>

<p><strong>x / (x+2)</strong></p>

<p><strong>(x²-4)/(x-2)</strong></p>

<p><strong>(3x+1)/(x²+5)</strong></p>

<p>These are all rational expressions.</p>

<hr>

<h2>Restrictions</h2>

<p>The denominator can never equal zero.</p>

<p>Example:</p>

<p><strong>1/x</strong></p>

<p>x cannot equal 0.</p>

<p>Example:</p>

<p><strong>5/(x-4)</strong></p>

<p>x cannot equal 4.</p>

<hr>

<h2>Why Restrictions Matter</h2>

<p>Division by zero is undefined.</p>

<p>Every rational expression has values that must be excluded from its domain.</p>

<hr>

<h2>Vocabulary</h2>

<ul>

<li>Numerator</li>

<li>Denominator</li>

<li>Restriction</li>

<li>Domain</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Rational expressions behave much like fractions, except they contain polynomials instead of just numbers.</p>

`,

        questions: [

            {
                q: "A rational expression is?",

                options: [
                    "A fraction containing polynomials",
                    "A square root",
                    "A linear equation"
                ],

                answer: "A fraction containing polynomials",

                explanation: "Rational expressions are fractions whose numerator and/or denominator are polynomials."
            },

            {
                q: "The denominator can equal zero?",

                options: [
                    "No",
                    "Yes",
                    "Sometimes"
                ],

                answer: "No",

                explanation: "Division by zero is undefined."
            },

            {
                q: "For 1/x, x cannot equal?",

                options: [
                    "0",
                    "1",
                    "-1"
                ],

                answer: "0",

                explanation: "The denominator cannot be zero."
            },

            {
                q: "For 5/(x-4), x cannot equal?",

                options: [
                    "4",
                    "5",
                    "0"
                ],

                answer: "4",

                explanation: "4 makes the denominator zero."
            },

            {
                q: "The top of a fraction is called the?",

                options: [
                    "Numerator",
                    "Denominator",
                    "Coefficient"
                ],

                answer: "Numerator",

                explanation: "The numerator is the top part of a fraction."
            },

            {
                q: "The bottom of a fraction is called the?",

                options: [
                    "Denominator",
                    "Numerator",
                    "Exponent"
                ],

                answer: "Denominator",

                explanation: "The denominator is the bottom part of a fraction."
            },

            {
                q: "Restrictions come from?",

                options: [
                    "The denominator",
                    "The numerator",
                    "The coefficient"
                ],

                answer: "The denominator",

                explanation: "Restrictions are values that make the denominator zero."
            },

            {
                q: "Division by zero is?",

                options: [
                    "Undefined",
                    "Zero",
                    "Infinity"
                ],

                answer: "Undefined",

                explanation: "Division by zero has no defined value."
            },

            {
                q: "Rational expressions are most similar to?",

                options: [
                    "Fractions",
                    "Circles",
                    "Parabolas"
                ],

                answer: "Fractions",

                explanation: "They follow many of the same rules as numerical fractions."
            },

            {
                q: "Why are restrictions important?",

                options: [
                    "They define where the expression exists",
                    "They simplify multiplication",
                    "They change exponents"
                ],

                answer: "They define where the expression exists",

                explanation: "Restrictions determine the domain of the expression."
            }

        ]

    }
    ,

    "algebra2-simplifying-rational-expressions": {
        title: "Simplifying Rational Expressions",
        subtitle: "Reduce rational expressions by factoring and canceling common factors.",

        body: `

<h2>Introduction</h2>

<p>Simplifying rational expressions is similar to simplifying numerical fractions.</p>

<p>The key difference is that you must factor polynomials before canceling.</p>

<hr>

<h2>Basic Rule</h2>

<p>You may only cancel <strong>common factors</strong>.</p>

<p>You cannot cancel individual terms.</p>

<hr>

<h2>Example 1</h2>

<p><strong>(6x)/(9)</strong></p>

<p>Divide numerator and denominator by 3.</p>

<p><strong>2x/3</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>(x²−9)/(x−3)</strong></p>

<p>Factor the numerator:</p>

<p>(x−3)(x+3)</p>

<p>Cancel the common factor:</p>

<p><strong>x+3</strong></p>

<p>Restriction:</p>

<p><strong>x ≠ 3</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Factor first.</li>

<li>Only cancel factors.</li>

<li>Never cancel terms connected by addition or subtraction.</li>

<li>Always keep the original restrictions.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Always factor completely before simplifying a rational expression.</p>

`,

        questions: [

            {
                q: "Before simplifying a rational expression you should?",

                options: [
                    "Factor completely",
                    "Cancel immediately",
                    "Multiply everything"
                ],

                answer: "Factor completely",

                explanation: "Factoring reveals common factors that can be canceled."
            },

            {
                q: "You may cancel?",

                options: [
                    "Common factors",
                    "Common terms",
                    "Anything that matches"
                ],

                answer: "Common factors",

                explanation: "Only factors may be canceled."
            },

            {
                q: "(x²−9)/(x−3) simplifies to?",

                options: [
                    "x+3",
                    "x−3",
                    "x²−3"
                ],

                answer: "x+3",

                explanation: "Factor the numerator into (x−3)(x+3)."
            },

            {
                q: "The restriction for (x²−9)/(x−3) is?",

                options: [
                    "x ≠ 3",
                    "x ≠ -3",
                    "x ≠ 0"
                ],

                answer: "x ≠ 3",

                explanation: "The original denominator cannot equal zero."
            },

            {
                q: "Can you cancel x in (x+2)/x?",

                options: [
                    "No",
                    "Yes",
                    "Always"
                ],

                answer: "No",

                explanation: "x+2 is a sum, not a factor."
            },

            {
                q: "6x/9 simplifies to?",

                options: [
                    "2x/3",
                    "3x/2",
                    "2/3x"
                ],

                answer: "2x/3",

                explanation: "Divide numerator and denominator by 3."
            },

            {
                q: "Factoring helps identify?",

                options: [
                    "Common factors",
                    "Slopes",
                    "Roots only"
                ],

                answer: "Common factors",

                explanation: "Common factors can be canceled."
            },

            {
                q: "Restrictions come from?",

                options: [
                    "The original denominator",
                    "The simplified denominator",
                    "The numerator"
                ],

                answer: "The original denominator",

                explanation: "Restrictions never disappear after simplifying."
            },

            {
                q: "Can terms connected by + or − be canceled?",

                options: [
                    "No",
                    "Yes",
                    "Always"
                ],

                answer: "No",

                explanation: "Only complete factors may be canceled."
            },

            {
                q: "Simplifying rational expressions is most similar to simplifying?",

                options: [
                    "Fractions",
                    "Quadratic equations",
                    "Radicals"
                ],

                answer: "Fractions",

                explanation: "The same basic fraction rules apply."

            }

        ]

    }
    ,

    "algebra2-multiplying-rational-expressions": {
        title: "Multiplying Rational Expressions",
        subtitle: "Multiply rational expressions and simplify the result.",

        body: `

<h2>Introduction</h2>

<p>Multiplying rational expressions is very similar to multiplying ordinary fractions.</p>

<p>Multiply the numerators together, multiply the denominators together, then simplify.</p>

<hr>

<h2>General Rule</h2>

<p><strong>(a/b) × (c/d) = (ac)/(bd)</strong></p>

<hr>

<h2>Example 1</h2>

<p><strong>(2/x) × (3/5)</strong></p>

<p>Multiply numerators:</p>

<p>2 × 3 = 6</p>

<p>Multiply denominators:</p>

<p>x × 5 = 5x</p>

<p><strong>Answer:</strong></p>

<p>6/(5x)</p>

<hr>

<h2>Example 2</h2>

<p><strong>(x²−9)/(x−3) × 1/(x+3)</strong></p>

<p>Factor:</p>

<p>(x−3)(x+3)/(x−3)</p>

<p>Cancel common factors.</p>

<p><strong>Answer:</strong></p>

<p>1</p>

<p>Restrictions:</p>

<p>x ≠ 3</p>

<p>x ≠ -3</p>

<hr>

<h2>Cross-Canceling</h2>

<p>You may simplify common factors before multiplying.</p>

<p>This makes calculations easier.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Factor first whenever possible.</li>

<li>Only cancel common factors.</li>

<li>Keep all original restrictions.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Multiply numerators, multiply denominators, then simplify completely.</p>

`,

        questions: [

            {
                q: "To multiply rational expressions you first?",

                options: [
                    "Multiply numerators and denominators",
                    "Add denominators",
                    "Subtract numerators"
                ],

                answer: "Multiply numerators and denominators",

                explanation: "Rational expressions multiply just like fractions."
            },

            {
                q: "You should simplify?",

                options: [
                    "Before and after multiplying",
                    "Never",
                    "Only before"
                ],

                answer: "Before and after multiplying",

                explanation: "Factoring first often allows cancellation."
            },

            {
                q: "Common factors may be?",

                options: [
                    "Canceled",
                    "Added",
                    "Squared"
                ],

                answer: "Canceled",

                explanation: "Only common factors may be canceled."
            },

            {
                q: "Can terms joined by + be canceled?",

                options: [
                    "No",
                    "Yes",
                    "Always"
                ],

                answer: "No",

                explanation: "Only factors can be canceled."
            },

            {
                q: "(2/x)(5/3)=?",

                options: [
                    "10/(3x)",
                    "7/(3x)",
                    "10x/3"
                ],

                answer: "10/(3x)",

                explanation: "Multiply straight across."
            },

            {
                q: "Factoring helps identify?",

                options: [
                    "Common factors",
                    "Slopes",
                    "Intercepts"
                ],

                answer: "Common factors",

                explanation: "Factoring reveals what can be canceled."
            },

            {
                q: "Restrictions come from?",

                options: [
                    "Original denominators",
                    "The numerator",
                    "The final answer only"
                ],

                answer: "Original denominators",

                explanation: "Restrictions never disappear."
            },

            {
                q: "Cross-canceling is performed on?",

                options: [
                    "Common factors",
                    "Common terms",
                    "Coefficients only"
                ],

                answer: "Common factors",

                explanation: "Only factors can be canceled."
            },

            {
                q: "After multiplying you should?",

                options: [
                    "Simplify",
                    "Graph",
                    "Square everything"
                ],

                answer: "Simplify",

                explanation: "Always simplify the final expression."
            },

            {
                q: "Multiplying rational expressions is most similar to?",

                options: [
                    "Multiplying fractions",
                    "Adding polynomials",
                    "Solving equations"
                ],

                answer: "Multiplying fractions",

                explanation: "The process is nearly identical."

            }

        ]

    }
    ,

    "algebra2-dividing-rational-expressions": {
        title: "Dividing Rational Expressions",
        subtitle: "Divide rational expressions by multiplying by the reciprocal.",

        body: `

<h2>Introduction</h2>

<p>Dividing rational expressions is very similar to dividing ordinary fractions.</p>

<p>Instead of dividing, multiply by the reciprocal.</p>

<hr>

<h2>The Rule</h2>

<p><strong>(a/b) ÷ (c/d) = (a/b) × (d/c)</strong></p>

<p>This is often remembered as:</p>

<p><strong>Keep • Change • Flip</strong></p>

<ul>

<li>Keep the first fraction.</li>

<li>Change division to multiplication.</li>

<li>Flip the second fraction.</li>

</ul>

<hr>

<h2>Example 1</h2>

<p><strong>(2/x) ÷ (5/3)</strong></p>

<p>Rewrite:</p>

<p>(2/x) × (3/5)</p>

<p>= <strong>6/(5x)</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>(x²−9)/(x−3) ÷ (x+3)</strong></p>

<p>Rewrite as multiplication:</p>

<p>(x²−9)/(x−3) × 1/(x+3)</p>

<p>Factor:</p>

<p>(x−3)(x+3)/(x−3) × 1/(x+3)</p>

<p>Cancel common factors.</p>

<p><strong>Answer: 1</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Always flip the SECOND fraction.</li>

<li>Factor before canceling.</li>

<li>Keep all denominator restrictions.</li>

<li>Simplify completely.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Dividing rational expressions becomes multiplication after taking the reciprocal of the second expression.</p>

`,

        questions: [

            {
                q: "When dividing rational expressions, what happens first?",

                options: [
                    "Change division to multiplication",
                    "Multiply immediately",
                    "Factor first"
                ],

                answer: "Change division to multiplication",

                explanation: "Replace division with multiplication."
            },

            {
                q: "Which fraction gets flipped?",

                options: [
                    "The second fraction",
                    "The first fraction",
                    "Both fractions"
                ],

                answer: "The second fraction",

                explanation: "Only the divisor is replaced by its reciprocal."
            },

            {
                q: "The phrase 'Keep, Change, Flip' means?",

                options: [
                    "Keep the first fraction, change ÷ to ×, flip the second fraction",
                    "Keep both fractions the same",
                    "Flip both fractions"
                ],

                answer: "Keep the first fraction, change ÷ to ×, flip the second fraction",

                explanation: "This is the standard procedure."
            },

            {
                q: "After flipping, you should?",

                options: [
                    "Multiply",
                    "Subtract",
                    "Add"
                ],

                answer: "Multiply",

                explanation: "Division becomes multiplication."
            },

            {
                q: "Can common factors still be canceled?",

                options: [
                    "Yes",
                    "No",
                    "Only numbers"
                ],

                answer: "Yes",

                explanation: "Cancel common factors after rewriting."
            },

            {
                q: "Restrictions come from?",

                options: [
                    "The original denominators",
                    "The numerator",
                    "The reciprocal"
                ],

                answer: "The original denominators",

                explanation: "Original restrictions always remain."
            },

            {
                q: "Why do we factor expressions first?",

                options: [
                    "To identify common factors",
                    "To make numbers bigger",
                    "To avoid multiplying"
                ],

                answer: "To identify common factors",

                explanation: "Factoring makes simplification possible."
            },

            {
                q: "Dividing rational expressions is most similar to dividing?",

                options: [
                    "Fractions",
                    "Decimals",
                    "Integers"
                ],

                answer: "Fractions",

                explanation: "The same reciprocal rule applies."
            },

            {
                q: "After multiplying, you should?",

                options: [
                    "Simplify",
                    "Graph",
                    "Square everything"
                ],

                answer: "Simplify",

                explanation: "Always simplify the final answer."
            },

            {
                q: "The reciprocal of 3/5 is?",

                options: [
                    "5/3",
                    "3/5",
                    "-5/3"
                ],

                answer: "5/3",

                explanation: "Swap the numerator and denominator."
            }

        ]

    }
    ,

    "algebra2-adding-subtracting-rational-expressions": {
        title: "Adding and Subtracting Rational Expressions",
        subtitle: "Combine rational expressions using a common denominator.",

        body: `

<h2>Introduction</h2>

<p>Adding and subtracting rational expressions works just like adding and subtracting fractions.</p>

<p>Before combining, the expressions must have a common denominator.</p>

<hr>

<h2>Same Denominator</h2>

<p>If the denominators are already the same, simply combine the numerators.</p>

<p><strong>(3/x) + (5/x) = 8/x</strong></p>

<hr>

<h2>Different Denominators</h2>

<p>If the denominators are different, first find the Least Common Denominator (LCD).</p>

<p>Rewrite each fraction using the LCD before adding or subtracting.</p>

<hr>

<h2>Example 1</h2>

<p><strong>(2/x) + (5/x)</strong></p>

<p>The denominators are already the same.</p>

<p><strong>Answer:</strong></p>

<p>7/x</p>

<hr>

<h2>Example 2</h2>

<p><strong>(1/x) + (1/2)</strong></p>

<p>LCD = 2x</p>

<p>Rewrite each fraction:</p>

<p>2/(2x) + x/(2x)</p>

<p><strong>Answer:</strong></p>

<p>(x+2)/(2x)</p>

<hr>

<h2>Example 3</h2>

<p><strong>(4/x) - (1/x)</strong></p>

<p><strong>Answer:</strong></p>

<p>3/x</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Never add denominators.</li>

<li>Find the LCD first.</li>

<li>Only combine numerators after the denominators match.</li>

<li>Simplify the final answer whenever possible.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Find a common denominator, rewrite each expression, combine the numerators, and simplify.</p>

`,

        questions: [

            {
                q: "Before adding rational expressions, you must?",

                options: [
                    "Find a common denominator",
                    "Multiply denominators",
                    "Cancel everything"
                ],

                answer: "Find a common denominator",

                explanation: "The denominators must match before adding or subtracting."
            },

            {
                q: "(3/x)+(5/x)=?",

                options: [
                    "8/x",
                    "8/2x",
                    "15/x²"
                ],

                answer: "8/x",

                explanation: "Add the numerators because the denominators are already the same."
            },

            {
                q: "(7/x)-(2/x)=?",

                options: [
                    "5/x",
                    "9/x",
                    "5"
                ],

                answer: "5/x",

                explanation: "Subtract the numerators."
            },

            {
                q: "What does LCD stand for?",

                options: [
                    "Least Common Denominator",
                    "Lowest Common Division",
                    "Least Coefficient Difference"
                ],

                answer: "Least Common Denominator",

                explanation: "The LCD is used to combine fractions."
            },

            {
                q: "Can you add denominators together?",

                options: [
                    "No",
                    "Yes",
                    "Always"
                ],

                answer: "No",

                explanation: "Only numerators are added once the denominators are the same."
            },

            {
                q: "(1/x)+(1/2) has an LCD of?",

                options: [
                    "2x",
                    "x",
                    "2"
                ],

                answer: "2x",

                explanation: "2x is the least common denominator."
            },

            {
                q: "After finding the LCD, you should?",

                options: [
                    "Rewrite each fraction",
                    "Multiply everything",
                    "Factor immediately"
                ],

                answer: "Rewrite each fraction",

                explanation: "Equivalent fractions are needed before adding."
            },

            {
                q: "If the denominators already match, you?",

                options: [
                    "Combine the numerators",
                    "Multiply denominators",
                    "Square everything"
                ],

                answer: "Combine the numerators",

                explanation: "No new denominator is needed."
            },

            {
                q: "After adding rational expressions you should?",

                options: [
                    "Simplify",
                    "Graph",
                    "Take a square root"
                ],

                answer: "Simplify",

                explanation: "Always reduce the final expression when possible."
            },

            {
                q: "Adding rational expressions is most similar to adding?",

                options: [
                    "Fractions",
                    "Polynomials",
                    "Radicals"
                ],

                answer: "Fractions",

                explanation: "The process is nearly identical to adding numerical fractions."
            }

        ]

    }
    ,

    "algebra2-solving-rational-equations": {
        title: "Solving Rational Equations",
        subtitle: "Solve equations containing rational expressions while checking for invalid solutions.",

        body: `

<h2>Introduction</h2>

<p>A <strong>rational equation</strong> is an equation that contains one or more rational expressions.</p>

<p>To solve these equations, we eliminate the denominators first.</p>

<hr>

<h2>General Steps</h2>

<ol>

<li>Find the Least Common Denominator (LCD).</li>

<li>Multiply every term by the LCD.</li>

<li>Solve the resulting equation.</li>

<li>Check every solution in the original equation.</li>

</ol>

<hr>

<h2>Example 1</h2>

<p><strong>1/x = 3</strong></p>

<p>Multiply both sides by x.</p>

<p>1 = 3x</p>

<p>x = 1/3</p>

<hr>

<h2>Example 2</h2>

<p><strong>2/x = 8</strong></p>

<p>Multiply both sides by x.</p>

<p>2 = 8x</p>

<p>x = 1/4</p>

<hr>

<h2>Why Check Your Answer?</h2>

<p>Some solutions make the denominator equal zero.</p>

<p>These are called <strong>extraneous solutions</strong> and must be rejected.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Multiply EVERY term by the LCD.</li>

<li>Do not forget denominator restrictions.</li>

<li>Always check your answer in the original equation.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Solving rational equations involves clearing denominators, solving the equation, and checking for invalid solutions.</p>

`,

        questions: [

            {
                q: "First step when solving a rational equation?",

                options: [
                    "Find the LCD",
                    "Factor",
                    "Graph"
                ],

                answer: "Find the LCD",

                explanation: "The LCD is used to eliminate denominators."
            },

            {
                q: "After finding the LCD you should?",

                options: [
                    "Multiply every term by it",
                    "Divide everything",
                    "Square both sides"
                ],

                answer: "Multiply every term by it",

                explanation: "This clears the fractions."
            },

            {
                q: "Why do we check our solutions?",

                options: [
                    "To detect invalid solutions",
                    "To make the numbers smaller",
                    "To simplify fractions"
                ],

                answer: "To detect invalid solutions",

                explanation: "Some answers make a denominator equal zero."
            },

            {
                q: "A denominator can equal zero?",

                options: [
                    "No",
                    "Yes",
                    "Sometimes"
                ],

                answer: "No",

                explanation: "Division by zero is undefined."
            },

            {
                q: "A solution that makes a denominator zero is called?",

                options: [
                    "An extraneous solution",
                    "A perfect solution",
                    "A common factor"
                ],

                answer: "An extraneous solution",

                explanation: "It must be rejected."
            },

            {
                q: "The LCD is used to?",

                options: [
                    "Clear denominators",
                    "Find the slope",
                    "Factor quadratics"
                ],

                answer: "Clear denominators",

                explanation: "Multiplying by the LCD removes fractions."
            },

            {
                q: "Should every term be multiplied by the LCD?",

                options: [
                    "Yes",
                    "No",
                    "Only the numerator"
                ],

                answer: "Yes",

                explanation: "Every term must be multiplied."
            },

            {
                q: "After clearing fractions you usually get?",

                options: [
                    "A regular algebra equation",
                    "A graph",
                    "A radical"
                ],

                answer: "A regular algebra equation",

                explanation: "Once the denominators are removed, solve normally."
            },

            {
                q: "When should you check your answer?",

                options: [
                    "At the end",
                    "At the beginning",
                    "Never"
                ],

                answer: "At the end",

                explanation: "Always substitute into the original equation."
            },

            {
                q: "Rational equations are solved by first removing?",

                options: [
                    "Denominators",
                    "Variables",
                    "Exponents"
                ],

                answer: "Denominators",

                explanation: "Clearing denominators simplifies the equation."
            }

        ]

    }

    ,

    "algebra2-rational-expressions-review": {
        title: "Unit 5 Review",
        subtitle: "Review rational expressions, restrictions, simplifying, multiplying, dividing, adding, subtracting, and rational equations.",

        body: `

<h2>Unit Review</h2>

<p>This review covers the major concepts from the Rational Expressions unit.</p>

<hr>

<h2>Key Concepts</h2>

<ul>

<li>Identifying rational expressions</li>

<li>Finding excluded values</li>

<li>Simplifying rational expressions</li>

<li>Multiplying rational expressions</li>

<li>Dividing rational expressions</li>

<li>Adding and subtracting rational expressions</li>

<li>Finding common denominators</li>

<li>Complex fractions</li>

<li>Solving rational equations</li>

<li>Checking for extraneous solutions</li>

</ul>

<hr>

<h2>Important Facts</h2>

<ul>

<li>Denominators can never equal zero.</li>

<li>Always factor before simplifying.</li>

<li>Only factors may be cancelled.</li>

<li>Never cancel terms connected by addition or subtraction.</li>

<li>When dividing fractions, multiply by the reciprocal.</li>

<li>Always verify solutions to rational equations.</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Canceling terms instead of factors.</li>

<li>Forgetting excluded values.</li>

<li>Adding numerators without a common denominator.</li>

<li>Not simplifying final answers.</li>

<li>Accepting extraneous solutions.</li>

</ul>

<hr>

<h2>Ready?</h2>

<p>If you understand these concepts, you're ready for the Rational Expressions Unit Test.</p>

`,

        questions: [

            {
                q: "A rational expression is a fraction containing?",
                options: [
                    "Polynomials",
                    "Radicals",
                    "Logarithms"
                ],
                answer: "Polynomials",
                explanation: "Rational expressions are ratios of polynomials."
            },

            {
                q: "A denominator may never equal?",
                options: [
                    "0",
                    "1",
                    "-1"
                ],
                answer: "0",
                explanation: "Division by zero is undefined."
            },

            {
                q: "Before simplifying, you should?",
                options: [
                    "Factor completely",
                    "Multiply everything",
                    "Find a common denominator"
                ],
                answer: "Factor completely",
                explanation: "Factoring exposes common factors."
            },

            {
                q: "Only what may be cancelled?",
                options: [
                    "Common factors",
                    "Terms",
                    "Coefficients only"
                ],
                answer: "Common factors",
                explanation: "Terms connected by addition or subtraction cannot be cancelled."
            },

            {
                q: "When dividing rational expressions you should?",
                options: [
                    "Multiply by the reciprocal",
                    "Add numerators",
                    "Subtract denominators"
                ],
                answer: "Multiply by the reciprocal",
                explanation: "Keep-Change-Flip."
            },

            {
                q: "Before adding rational expressions you need?",
                options: [
                    "A common denominator",
                    "A common numerator",
                    "Matching coefficients"
                ],
                answer: "A common denominator",
                explanation: "Fractions must have common denominators before adding."
            },

            {
                q: "Values making the denominator zero are called?",
                options: [
                    "Excluded values",
                    "Roots",
                    "Solutions"
                ],
                answer: "Excluded values",
                explanation: "They are not in the domain."
            },

            {
                q: "Solutions to rational equations should always be?",
                options: [
                    "Checked",
                    "Squared",
                    "Rounded"
                ],
                answer: "Checked",
                explanation: "Extraneous solutions may occur."
            },

            {
                q: "An invalid solution is called an?",
                options: [
                    "Extraneous solution",
                    "Imaginary number",
                    "Coefficient"
                ],
                answer: "Extraneous solution",
                explanation: "It works after algebraic manipulation but not in the original equation."
            },

            {
                q: "The next Algebra 2 unit is?",
                options: [
                    "Exponential Functions",
                    "Probability",
                    "Statistics"
                ],
                answer: "Exponential Functions",
                explanation: "Exponential Functions come next."
            }

        ]

    }
    ,

    "algebra2-rational-expressions-unit-test": {
        title: "Unit 5 Test",
        subtitle: "Test rational expressions, restrictions, simplifying, multiplying, dividing, adding, subtracting, and rational equations.",

        body: `

<h2>Unit Test</h2>

<p>This assessment covers the complete Rational Expressions unit.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Rational expressions</li>

<li>Domain restrictions</li>

<li>Simplifying rational expressions</li>

<li>Multiplying rational expressions</li>

<li>Dividing rational expressions</li>

<li>Adding and subtracting rational expressions</li>

<li>Complex fractions</li>

<li>Solving rational equations</li>

<li>Extraneous solutions</li>

</ul>

<hr>

<h2>Goal</h2>

<p>A strong score means you are ready to begin Exponential Functions.</p>

`,

        questions: [

            {
                q: "A rational expression is a ratio of?",
                options: [
                    "Two polynomials",
                    "Two radicals",
                    "Two logarithms"
                ],
                answer: "Two polynomials",
                explanation: "A rational expression is a fraction containing polynomials."
            },

            {
                q: "Which value can never appear in a denominator?",
                options: [
                    "0",
                    "1",
                    "-1"
                ],
                answer: "0",
                explanation: "Division by zero is undefined."
            },

            {
                q: "Before simplifying a rational expression you should?",
                options: [
                    "Factor completely",
                    "Multiply numerators",
                    "Find LCD"
                ],
                answer: "Factor completely",
                explanation: "Factoring exposes common factors."
            },

            {
                q: "Which may be cancelled?",
                options: [
                    "Common factors",
                    "Terms",
                    "Constants only"
                ],
                answer: "Common factors",
                explanation: "Only entire factors can be cancelled."
            },

            {
                q: "x²−9 factors as?",
                options: [
                    "(x−3)(x+3)",
                    "(x−9)(x+1)",
                    "(x−3)²"
                ],
                answer: "(x−3)(x+3)",
                explanation: "This is a difference of squares."
            },

            {
                q: "When multiplying rational expressions you should?",
                options: [
                    "Multiply numerators and denominators",
                    "Find a common denominator",
                    "Cross multiply"
                ],
                answer: "Multiply numerators and denominators",
                explanation: "Then simplify."
            },

            {
                q: "When dividing rational expressions you should?",
                options: [
                    "Multiply by the reciprocal",
                    "Add numerators",
                    "Subtract denominators"
                ],
                answer: "Multiply by the reciprocal",
                explanation: "Keep-Change-Flip."
            },

            {
                q: "Before adding rational expressions you need?",
                options: [
                    "A common denominator",
                    "A common numerator",
                    "Equal coefficients"
                ],
                answer: "A common denominator",
                explanation: "Fractions must have common denominators."
            },

            {
                q: "The least common denominator is used when?",
                options: [
                    "Adding or subtracting fractions",
                    "Multiplying fractions",
                    "Factoring"
                ],
                answer: "Adding or subtracting fractions",
                explanation: "LCD allows addition and subtraction."
            },

            {
                q: "Can x cancel from x+5?",
                options: [
                    "No",
                    "Yes",
                    "Always"
                ],
                answer: "No",
                explanation: "Only factors—not terms—may cancel."
            },

            {
                q: "Can (x−2) cancel with (x−2) when they are factors?",
                options: [
                    "Yes",
                    "No",
                    "Never"
                ],
                answer: "Yes",
                explanation: "Entire common factors cancel."
            },

            {
                q: "The values excluded from the domain are those that make the denominator?",
                options: [
                    "Equal zero",
                    "Equal one",
                    "Negative"
                ],
                answer: "Equal zero",
                explanation: "These values are undefined."
            },

            {
                q: "A complex fraction contains?",
                options: [
                    "A fraction inside another fraction",
                    "A square root",
                    "A logarithm"
                ],
                answer: "A fraction inside another fraction",
                explanation: "Complex fractions contain nested fractions."
            },

            {
                q: "The first step in solving a rational equation is often to?",
                options: [
                    "Multiply both sides by the LCD",
                    "Take the square root",
                    "Graph the equation"
                ],
                answer: "Multiply both sides by the LCD",
                explanation: "This clears the denominators."
            },

            {
                q: "After solving a rational equation you should?",
                options: [
                    "Check every solution",
                    "Square every answer",
                    "Round to two decimals"
                ],
                answer: "Check every solution",
                explanation: "Extraneous solutions may occur."
            },

            {
                q: "An answer that satisfies the transformed equation but not the original equation is called?",
                options: [
                    "An extraneous solution",
                    "A rational root",
                    "A factor"
                ],
                answer: "An extraneous solution",
                explanation: "Always substitute answers back into the original equation."
            },

            {
                q: "If a denominator becomes zero after substitution, the solution is?",
                options: [
                    "Invalid",
                    "Correct",
                    "Irrational"
                ],
                answer: "Invalid",
                explanation: "Division by zero is undefined."
            },

            {
                q: "Factoring before simplifying helps identify?",
                options: [
                    "Common factors",
                    "Common denominators",
                    "Slopes"
                ],
                answer: "Common factors",
                explanation: "Factoring reveals factors that may cancel."
            },

            {
                q: "The domain of a rational expression excludes?",
                options: [
                    "Values that make the denominator zero",
                    "Negative numbers",
                    "Fractions"
                ],
                answer: "Values that make the denominator zero",
                explanation: "Those values make the expression undefined."
            },

            {
                q: "After completing this unit, the next Algebra 2 topic is?",
                options: [
                    "Exponential Functions",
                    "Probability",
                    "Statistics"
                ],
                answer: "Exponential Functions",
                explanation: "The next unit begins with Introduction to Exponential Functions."
            }

        ]

    },

    "algebra2-introduction-to-exponential-functions": {
        title: "Introduction to Exponential Functions",
        subtitle: "Learn how exponential functions model rapid growth and decay.",

        body: `

<h2>Introduction</h2>

<p>An <strong>exponential function</strong> is a function where the variable is in the exponent.</p>

<p>Unlike linear functions, exponential functions do not grow by adding the same amount each time. Instead, they grow or shrink by multiplying by the same factor.</p>

<hr>

<h2>General Form</h2>

<p><strong>y = a(b)<sup>x</sup></strong></p>

<ul>

<li><strong>a</strong> = starting value</li>

<li><strong>b</strong> = growth or decay factor</li>

<li><strong>x</strong> = exponent</li>

</ul>

<hr>

<h2>Growth vs. Decay</h2>

<ul>

<li>If <strong>b > 1</strong>, the function shows <strong>exponential growth</strong>.</li>

<li>If <strong>0 < b < 1</strong>, the function shows <strong>exponential decay</strong>.</li>

</ul>

<hr>

<h2>Example 1</h2>

<p><strong>y = 2(3)<sup>x</sup></strong></p>

<p>Since 3 is greater than 1, this function represents <strong>exponential growth</strong>.</p>

<hr>

<h2>Example 2</h2>

<p><strong>y = 5(0.5)<sup>x</sup></strong></p>

<p>Since 0.5 is between 0 and 1, this function represents <strong>exponential decay</strong>.</p>

<hr>

<h2>Real-Life Applications</h2>

<ul>

<li>Population growth</li>

<li>Compound interest</li>

<li>Bacteria growth</li>

<li>Radioactive decay</li>

<li>Depreciation</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Exponential functions model situations where quantities change by multiplying rather than adding.</p>

`,

        questions: [

            {
                q: "In an exponential function, the variable is located?",

                options: [
                    "In the exponent",
                    "In the coefficient",
                    "In the denominator"
                ],

                answer: "In the exponent",

                explanation: "The defining feature of an exponential function is that the variable is in the exponent."
            },

            {
                q: "The general form of an exponential function is?",

                options: [
                    "y = a(b)^x",
                    "y = mx + b",
                    "ax² + bx + c"
                ],

                answer: "y = a(b)^x",

                explanation: "This is the standard exponential function."
            },

            {
                q: "If b > 1, the function shows?",

                options: [
                    "Exponential growth",
                    "Exponential decay",
                    "Linear growth"
                ],

                answer: "Exponential growth",

                explanation: "A base greater than 1 causes the function to increase."
            },

            {
                q: "If 0 < b < 1, the function shows?",

                options: [
                    "Exponential decay",
                    "Exponential growth",
                    "Quadratic growth"
                ],

                answer: "Exponential decay",

                explanation: "A base between 0 and 1 decreases over time."
            },

            {
                q: "Which is an exponential function?",

                options: [
                    "y = 4(2)^x",
                    "y = 3x + 1",
                    "y = x² + 5"
                ],

                answer: "y = 4(2)^x",

                explanation: "The variable is in the exponent."
            },

            {
                q: "In y = 7(5)^x, the starting value is?",

                options: [
                    "7",
                    "5",
                    "x"
                ],

                answer: "7",

                explanation: "The coefficient a is the starting value."
            },

            {
                q: "In y = 2(4)^x, the growth factor is?",

                options: [
                    "4",
                    "2",
                    "x"
                ],

                answer: "4",

                explanation: "The base is the growth factor."
            },

            {
                q: "Which situation is commonly modeled by exponential growth?",

                options: [
                    "Population growth",
                    "Constant speed",
                    "Perimeter of a square"
                ],

                answer: "Population growth",

                explanation: "Populations often grow exponentially."
            },

            {
                q: "Which situation is commonly modeled by exponential decay?",

                options: [
                    "Radioactive decay",
                    "Adding $10 each week",
                    "Drawing a triangle"
                ],

                answer: "Radioactive decay",

                explanation: "Radioactive materials decay exponentially."
            },

            {
                q: "Exponential functions change by?",

                options: [
                    "Multiplying by the same factor",
                    "Adding the same amount",
                    "Subtracting the same amount"
                ],

                answer: "Multiplying by the same factor",

                explanation: "Exponential change is multiplicative, not additive."
            }

        ]

    }
    ,

    "algebra2-exponential-growth": {
        title: "Exponential Growth",
        subtitle: "Model situations where quantities grow by a constant percentage.",

        body: `

<h2>Introduction</h2>

<p>Exponential growth occurs when a quantity increases by the same percentage over equal time intervals.</p>

<p>Unlike linear growth, the amount added becomes larger over time.</p>

<hr>

<h2>Growth Formula</h2>

<p><strong>y = a(1 + r)<sup>t</sup></strong></p>

<ul>

<li><strong>a</strong> = initial amount</li>

<li><strong>r</strong> = growth rate (decimal)</li>

<li><strong>t</strong> = time</li>

</ul>

<hr>

<h2>Example 1</h2>

<p>A town has a population of 500 people.</p>

<p>The population grows by 10% each year.</p>

<p>Formula:</p>

<p><strong>y = 500(1.10)<sup>t</sup></strong></p>

<hr>

<h2>Example 2</h2>

<p>You invest $1,000.</p>

<p>It grows by 5% each year.</p>

<p>Formula:</p>

<p><strong>y = 1000(1.05)<sup>t</sup></strong></p>

<hr>

<h2>Recognizing Growth</h2>

<ul>

<li>The growth factor is greater than 1.</li>

<li>The graph rises faster over time.</li>

<li>The increase becomes larger each period.</li>

</ul>

<hr>

<h2>Real-Life Examples</h2>

<ul>

<li>Population growth</li>

<li>Compound interest</li>

<li>Bacteria growth</li>

<li>Social media followers</li>

<li>Investment growth</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Exponential growth occurs whenever something increases by the same percentage over equal periods of time.</p>

`,

        questions: [

            {
                q: "Exponential growth means?",

                options: [
                    "A constant percent increase",
                    "A constant amount added",
                    "A constant amount subtracted"
                ],

                answer: "A constant percent increase",

                explanation: "Growth occurs by multiplying by the same factor."
            },

            {
                q: "The exponential growth formula is?",

                options: [
                    "y=a(1+r)^t",
                    "y=mx+b",
                    "ax²+bx+c"
                ],

                answer: "y=a(1+r)^t",

                explanation: "This is the standard exponential growth model."
            },

            {
                q: "A 10% growth rate is written as?",

                options: [
                    "0.10",
                    "10",
                    "0.01"
                ],

                answer: "0.10",

                explanation: "Percentages must be converted to decimals."
            },

            {
                q: "The growth factor for 8% growth is?",

                options: [
                    "1.08",
                    "0.08",
                    "8.00"
                ],

                answer: "1.08",

                explanation: "Add 1 to the decimal growth rate."
            },

            {
                q: "In y=500(1.10)^t, the initial amount is?",

                options: [
                    "500",
                    "1.10",
                    "10"
                ],

                answer: "500",

                explanation: "The coefficient is the starting value."
            },

            {
                q: "If a quantity grows by 25%, the growth factor is?",

                options: [
                    "1.25",
                    "0.25",
                    "2.50"
                ],

                answer: "1.25",

                explanation: "1 + 0.25 = 1.25."
            },

            {
                q: "Which situation is exponential growth?",

                options: [
                    "A savings account earning interest",
                    "Walking 2 miles every day",
                    "Subtracting 5 each week"
                ],

                answer: "A savings account earning interest",

                explanation: "Interest grows by a percentage."
            },

            {
                q: "During exponential growth, the graph?",

                options: [
                    "Gets steeper over time",
                    "Remains flat",
                    "Forms a straight line"
                ],

                answer: "Gets steeper over time",

                explanation: "Growth accelerates over time."
            },

            {
                q: "Exponential growth changes by?",

                options: [
                    "Multiplication",
                    "Addition",
                    "Subtraction"
                ],

                answer: "Multiplication",

                explanation: "The same growth factor is repeatedly multiplied."
            },

            {
                q: "Population growth is commonly modeled using?",

                options: [
                    "Exponential growth",
                    "Linear equations",
                    "Quadratic functions"
                ],

                answer: "Exponential growth",

                explanation: "Populations often increase by a percentage over time."
            }

        ]

    }
    ,

    "algebra2-exponential-decay": {
        title: "Exponential Decay",
        subtitle: "Model situations where quantities decrease by a constant percentage.",

        body: `

<h2>Introduction</h2>

<p>Exponential decay occurs when a quantity decreases by the same percentage over equal time intervals.</p>

<p>Unlike linear decrease, the amount lost becomes smaller over time.</p>

<hr>

<h2>Decay Formula</h2>

<p><strong>y = a(1 - r)<sup>t</sup></strong></p>

<ul>

<li><strong>a</strong> = initial amount</li>

<li><strong>r</strong> = decay rate (decimal)</li>

<li><strong>t</strong> = time</li>

</ul>

<hr>

<h2>Example 1</h2>

<p>A car is worth $20,000.</p>

<p>It loses 15% of its value every year.</p>

<p>Formula:</p>

<p><strong>y = 20000(0.85)<sup>t</sup></strong></p>

<hr>

<h2>Example 2</h2>

<p>A radioactive substance loses 8% of its mass every year.</p>

<p>Starting amount: 500 grams.</p>

<p>Formula:</p>

<p><strong>y = 500(0.92)<sup>t</sup></strong></p>

<hr>

<h2>Recognizing Decay</h2>

<ul>

<li>The decay factor is between 0 and 1.</li>

<li>The graph decreases over time.</li>

<li>The decrease becomes smaller each period.</li>

</ul>

<hr>

<h2>Real-Life Examples</h2>

<ul>

<li>Car depreciation</li>

<li>Radioactive decay</li>

<li>Medicine leaving the body</li>

<li>Cooling temperatures</li>

<li>Population decline</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Exponential decay models situations where something decreases by the same percentage over equal periods of time.</p>

`,

        questions: [

            {
                q: "Exponential decay means?",

                options: [
                    "A constant percent decrease",
                    "A constant amount subtracted",
                    "A constant amount added"
                ],

                answer: "A constant percent decrease",

                explanation: "Decay occurs by multiplying by the same factor less than 1."
            },

            {
                q: "The exponential decay formula is?",

                options: [
                    "y=a(1-r)^t",
                    "y=a(1+r)^t",
                    "y=mx+b"
                ],

                answer: "y=a(1-r)^t",

                explanation: "Subtract the decay rate from 1."
            },

            {
                q: "A 20% decay rate is written as?",

                options: [
                    "0.20",
                    "20",
                    "0.02"
                ],

                answer: "0.20",

                explanation: "Percentages are converted to decimals."
            },

            {
                q: "The decay factor for 20% decay is?",

                options: [
                    "0.80",
                    "1.20",
                    "0.20"
                ],

                answer: "0.80",

                explanation: "1 − 0.20 = 0.80."
            },

            {
                q: "In y=500(0.92)^t, the initial amount is?",

                options: [
                    "500",
                    "0.92",
                    "92"
                ],

                answer: "500",

                explanation: "The coefficient is the starting value."
            },

            {
                q: "If something loses 35% each year, the decay factor is?",

                options: [
                    "0.65",
                    "1.35",
                    "0.35"
                ],

                answer: "0.65",

                explanation: "1 − 0.35 = 0.65."
            },

            {
                q: "Which situation represents exponential decay?",

                options: [
                    "Radioactive decay",
                    "Population growth",
                    "Earning interest"
                ],

                answer: "Radioactive decay",

                explanation: "Radioactive substances decay by a percentage."
            },

            {
                q: "During exponential decay, the graph?",

                options: [
                    "Falls and gradually levels off",
                    "Forms a straight line",
                    "Gets steeper upward"
                ],

                answer: "Falls and gradually levels off",

                explanation: "The graph approaches zero without reaching it."
            },

            {
                q: "Exponential decay changes by?",

                options: [
                    "Multiplication",
                    "Addition",
                    "Subtraction"
                ],

                answer: "Multiplication",

                explanation: "Each step multiplies by the same decay factor."
            },

            {
                q: "A decay factor must be?",

                options: [
                    "Greater than 0 but less than 1",
                    "Greater than 1",
                    "Equal to 0"
                ],

                answer: "Greater than 0 but less than 1",

                explanation: "Decay factors are always between 0 and 1."
            }

        ]

    }
    ,

    "algebra2-compound-interest": {
        title: "Compound Interest",
        subtitle: "Learn how money grows when interest is earned on both the principal and previously earned interest.",

        body: `

<h2>Introduction</h2>

<p>Compound interest means you earn interest on both your original investment and the interest you've already earned.</p>

<p>This causes your money to grow faster over time.</p>

<hr>

<h2>Compound Interest Formula</h2>

<p><strong>A = P(1 + r/n)<sup>nt</sup></strong></p>

<ul>

<li><strong>A</strong> = Final amount</li>

<li><strong>P</strong> = Principal (starting amount)</li>

<li><strong>r</strong> = Annual interest rate (decimal)</li>

<li><strong>n</strong> = Number of times interest is compounded each year</li>

<li><strong>t</strong> = Time (years)</li>

</ul>

<hr>

<h2>Example 1</h2>

<p>You invest <strong>$1,000</strong>.</p>

<p>Interest rate: <strong>5%</strong></p>

<p>Compounded once per year.</p>

<p>After 3 years:</p>

<p><strong>A = 1000(1.05)³</strong></p>

<p>A ≈ <strong>$1,157.63</strong></p>

<hr>

<h2>Example 2</h2>

<p>You invest <strong>$2,000</strong>.</p>

<p>Interest rate: <strong>4%</strong></p>

<p>Compounded monthly.</p>

<p>n = 12</p>

<p>Use the full compound interest formula.</p>

<hr>

<h2>Simple vs. Compound Interest</h2>

<ul>

<li><strong>Simple Interest</strong> earns interest only on the original principal.</li>

<li><strong>Compound Interest</strong> earns interest on both the principal and previously earned interest.</li>

</ul>

<hr>

<h2>Real-Life Applications</h2>

<ul>

<li>Savings accounts</li>

<li>Investments</li>

<li>Retirement accounts</li>

<li>Loans</li>

<li>Credit cards</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Compound interest causes money to grow exponentially because interest is repeatedly earned on previous interest.</p>

`,

        questions: [

            {
                q: "Compound interest earns interest on?",

                options: [
                    "The principal and previously earned interest",
                    "The principal only",
                    "The interest only"
                ],

                answer: "The principal and previously earned interest",

                explanation: "This is what makes compound interest grow faster."
            },

            {
                q: "The compound interest formula is?",

                options: [
                    "A=P(1+r/n)^(nt)",
                    "y=mx+b",
                    "A=Prt"
                ],

                answer: "A=P(1+r/n)^(nt)",

                explanation: "This is the standard compound interest formula."
            },

            {
                q: "P represents?",

                options: [
                    "Principal",
                    "Percent",
                    "Payment"
                ],

                answer: "Principal",

                explanation: "P is the starting amount invested."
            },

            {
                q: "A represents?",

                options: [
                    "Final amount",
                    "Annual rate",
                    "Average"
                ],

                answer: "Final amount",

                explanation: "A is the total value after interest."
            },

            {
                q: "The annual interest rate should be written as?",

                options: [
                    "A decimal",
                    "A whole number",
                    "A fraction only"
                ],

                answer: "A decimal",

                explanation: "For example, 5% = 0.05."
            },

            {
                q: "n represents?",

                options: [
                    "Number of compounding periods per year",
                    "Number of years",
                    "Interest rate"
                ],

                answer: "Number of compounding periods per year",

                explanation: "Monthly means n = 12, quarterly means n = 4."
            },

            {
                q: "t represents?",

                options: [
                    "Time in years",
                    "Total interest",
                    "Tax rate"
                ],

                answer: "Time in years",

                explanation: "t measures how long the money is invested."
            },

            {
                q: "Which grows faster?",

                options: [
                    "Compound interest",
                    "Simple interest",
                    "They always grow equally"
                ],

                answer: "Compound interest",

                explanation: "Interest earns additional interest over time."
            },

            {
                q: "A savings account usually uses?",

                options: [
                    "Compound interest",
                    "Quadratic functions",
                    "Polynomial division"
                ],

                answer: "Compound interest",

                explanation: "Banks typically compound interest."
            },

            {
                q: "Compound interest is an example of?",

                options: [
                    "Exponential growth",
                    "Linear growth",
                    "Quadratic growth"
                ],

                answer: "Exponential growth",

                explanation: "Money increases by multiplying by a growth factor."

            }

        ]

    }
    ,

    "algebra2-solving-exponential-equations": {
        title: "Solving Exponential Equations",
        subtitle: "Solve exponential equations by rewriting both sides with the same base.",

        body: `

<h2>Introduction</h2>

<p>An <strong>exponential equation</strong> has a variable in the exponent.</p>

<p>Many exponential equations can be solved by rewriting both sides using the same base.</p>

<hr>

<h2>Basic Strategy</h2>

<ol>

<li>Rewrite both sides using the same base.</li>

<li>Set the exponents equal.</li>

<li>Solve the resulting equation.</li>

</ol>

<hr>

<h2>Example 1</h2>

<p><strong>2<sup>x</sup> = 8</strong></p>

<p>Rewrite 8 as:</p>

<p><strong>2³</strong></p>

<p>Since the bases are equal:</p>

<p><strong>x = 3</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>5<sup>x</sup> = 125</strong></p>

<p>Rewrite 125 as:</p>

<p><strong>5³</strong></p>

<p>Therefore:</p>

<p><strong>x = 3</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>4<sup>x+1</sup> = 64</strong></p>

<p>Rewrite 64 as:</p>

<p><strong>4³</strong></p>

<p>Set exponents equal:</p>

<p>x + 1 = 3</p>

<p><strong>x = 2</strong></p>

<hr>

<h2>When Bases Cannot Be Rewritten</h2>

<p>Some exponential equations cannot be rewritten with the same base.</p>

<p>Those equations are solved using <strong>logarithms</strong>, which you will learn in the next unit.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Rewrite both sides using the same base whenever possible.</li>

<li>Only set exponents equal after the bases match.</li>

<li>Check your final answer.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Many exponential equations become simple algebra problems once both sides have the same base.</p>

`,

        questions: [

            {
                q: "An exponential equation has the variable?",

                options: [
                    "In the exponent",
                    "In the denominator",
                    "In the coefficient"
                ],

                answer: "In the exponent",

                explanation: "That's the defining feature of an exponential equation."
            },

            {
                q: "2^x = 16. x = ?",

                options: [
                    "4",
                    "8",
                    "2"
                ],

                answer: "4",

                explanation: "16 = 2⁴."
            },

            {
                q: "3^x = 27. x = ?",

                options: [
                    "3",
                    "9",
                    "6"
                ],

                answer: "3",

                explanation: "27 = 3³."
            },

            {
                q: "5^x = 25. x = ?",

                options: [
                    "2",
                    "5",
                    "10"
                ],

                answer: "2",

                explanation: "25 = 5²."
            },

            {
                q: "4^(x+1)=64. x=?",

                options: [
                    "2",
                    "3",
                    "1"
                ],

                answer: "2",

                explanation: "64 = 4³, so x+1=3."
            },

            {
                q: "Before setting exponents equal, the bases must be?",

                options: [
                    "The same",
                    "Different",
                    "Squared"
                ],

                answer: "The same",

                explanation: "Only equal bases allow equal exponents."
            },

            {
                q: "64 can be rewritten as?",

                options: [
                    "2⁶",
                    "2⁵",
                    "2⁴"
                ],

                answer: "2⁶",

                explanation: "2×2×2×2×2×2 = 64."
            },

            {
                q: "If the bases cannot be rewritten the same, you'll usually use?",

                options: [
                    "Logarithms",
                    "FOIL",
                    "Long division"
                ],

                answer: "Logarithms",

                explanation: "Logarithms solve exponential equations with unlike bases."
            },

            {
                q: "After rewriting the bases, you should?",

                options: [
                    "Set the exponents equal",
                    "Multiply the exponents",
                    "Subtract the bases"
                ],

                answer: "Set the exponents equal",

                explanation: "Equal bases imply equal exponents."
            },

            {
                q: "Exponential equations are commonly solved by?",

                options: [
                    "Rewriting with the same base",
                    "Factoring",
                    "Completing the square"
                ],

                answer: "Rewriting with the same base",

                explanation: "This is the simplest method whenever possible."
            }

        ]

    }
    ,

    "algebra2-applications-of-exponential-functions": {
        title: "Applications of Exponential Functions",
        subtitle: "Use exponential functions to model real-world situations.",

        body: `

<h2>Introduction</h2>

<p>Exponential functions appear everywhere in everyday life.</p>

<p>Whenever something changes by the same percentage over equal time intervals, an exponential model is usually appropriate.</p>

<hr>

<h2>Common Applications</h2>

<ul>

<li>Population growth</li>

<li>Bacteria growth</li>

<li>Compound interest</li>

<li>Radioactive decay</li>

<li>Car depreciation</li>

<li>Medicine leaving the bloodstream</li>

</ul>

<hr>

<h2>Example 1 — Population Growth</h2>

<p>A town begins with <strong>2,000 people</strong>.</p>

<p>The population grows by <strong>3%</strong> each year.</p>

<p>The model is:</p>

<p><strong>P = 2000(1.03)<sup>t</sup></strong></p>

<hr>

<h2>Example 2 — Car Depreciation</h2>

<p>A car is worth <strong>$30,000</strong>.</p>

<p>It loses <strong>12%</strong> of its value each year.</p>

<p>The model is:</p>

<p><strong>V = 30000(0.88)<sup>t</sup></strong></p>

<hr>

<h2>Example 3 — Bacteria</h2>

<p>A culture starts with <strong>500 bacteria</strong>.</p>

<p>The population doubles every hour.</p>

<p>The model is:</p>

<p><strong>P = 500(2)<sup>t</sup></strong></p>

<hr>

<h2>Choosing the Correct Model</h2>

<ul>

<li>Use growth if the quantity increases.</li>

<li>Use decay if the quantity decreases.</li>

<li>Always convert percentages into decimals.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Exponential models help predict future values in science, finance, medicine, engineering, and many other fields.</p>

`,

        questions: [

            {
                q: "Population growth is usually modeled with?",

                options: [
                    "Exponential growth",
                    "Linear growth",
                    "Quadratic functions"
                ],

                answer: "Exponential growth",

                explanation: "Population usually grows by a percentage."
            },

            {
                q: "Car depreciation is an example of?",

                options: [
                    "Exponential decay",
                    "Linear growth",
                    "Quadratic growth"
                ],

                answer: "Exponential decay",

                explanation: "The value decreases by a percentage."
            },

            {
                q: "Compound interest models?",

                options: [
                    "Exponential growth",
                    "Linear growth",
                    "Polynomial growth"
                ],

                answer: "Exponential growth",

                explanation: "Interest grows by multiplying."
            },

            {
                q: "Radioactive materials undergo?",

                options: [
                    "Exponential decay",
                    "Linear decay",
                    "Quadratic decay"
                ],

                answer: "Exponential decay",

                explanation: "Radioactive substances lose a constant percentage over time."
            },

            {
                q: "A quantity doubles every year. This is?",

                options: [
                    "Exponential growth",
                    "Linear growth",
                    "Constant growth"
                ],

                answer: "Exponential growth",

                explanation: "Doubling means multiplying by 2."
            },

            {
                q: "Before using an exponential model, percentages should be written as?",

                options: [
                    "Decimals",
                    "Whole numbers",
                    "Fractions only"
                ],

                answer: "Decimals",

                explanation: "5% becomes 0.05."
            },

            {
                q: "A bacteria population increases by 50% every hour. This is?",

                options: [
                    "Exponential growth",
                    "Exponential decay",
                    "Linear growth"
                ],

                answer: "Exponential growth",

                explanation: "The population grows by a constant percentage."
            },

            {
                q: "Medicine leaving the body is commonly modeled by?",

                options: [
                    "Exponential decay",
                    "Quadratic functions",
                    "Linear equations"
                ],

                answer: "Exponential decay",

                explanation: "Medicine decreases by a percentage over time."
            },

            {
                q: "Exponential models are used because they describe?",

                options: [
                    "Percent change over time",
                    "Constant addition",
                    "Random change"
                ],

                answer: "Percent change over time",

                explanation: "Exponential functions model multiplicative change."
            },

            {
                q: "Exponential functions are commonly used in?",

                options: [
                    "Science, finance, and medicine",
                    "Only geometry",
                    "Only algebra"
                ],

                answer: "Science, finance, and medicine",

                explanation: "They appear in many real-world applications."
            }

        ]

    }
    ,

    "algebra2-introduction-to-logarithms": {
        title: "Introduction to Logarithms",
        subtitle: "Understand logarithms as the inverse of exponential functions.",

        body: `

<h2>Introduction</h2>

<p>A <strong>logarithm</strong> answers one question:</p>

<p><strong>"What exponent produces this number?"</strong></p>

<p>Logarithms are the inverse of exponential functions, just like subtraction is the inverse of addition.</p>

<hr>

<h2>Basic Definition</h2>

<p><strong>log<sub>b</sub>(x)=y</strong></p>

<p>means</p>

<p><strong>b<sup>y</sup>=x</strong></p>

<hr>

<h2>Example 1</h2>

<p><strong>log₂(8)=3</strong></p>

<p>Because:</p>

<p><strong>2³=8</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>log₁₀(100)=2</strong></p>

<p>Because:</p>

<p><strong>10²=100</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>log₅(125)=3</strong></p>

<p>Because:</p>

<p><strong>5³=125</strong></p>

<hr>

<h2>Important Vocabulary</h2>

<ul>

<li><strong>Base</strong> — the repeated factor</li>

<li><strong>Exponent</strong> — the power</li>

<li><strong>Logarithm</strong> — the exponent needed</li>

</ul>

<hr>

<h2>Why Learn Logarithms?</h2>

<ul>

<li>Solve exponential equations</li>

<li>Model earthquakes (Richter Scale)</li>

<li>Measure sound (Decibels)</li>

<li>Study population growth</li>

<li>Analyze finance and science data</li>

</ul>

<hr>

<h2>Summary</h2>

<p>A logarithm tells you the exponent needed to produce a given number.</p>

`,

        questions: [

            {
                q: "A logarithm answers what question?",

                options: [
                    "What exponent?",
                    "What coefficient?",
                    "What denominator?"
                ],

                answer: "What exponent?",

                explanation: "A logarithm tells you which exponent produces a given number."
            },

            {
                q: "Logarithms are the inverse of?",

                options: [
                    "Exponential functions",
                    "Linear functions",
                    "Quadratic functions"
                ],

                answer: "Exponential functions",

                explanation: "Logarithms undo exponential functions."
            },

            {
                q: "log₂(8)=?",

                options: [
                    "3",
                    "4",
                    "2"
                ],

                answer: "3",

                explanation: "2³=8."
            },

            {
                q: "log₁₀(100)=?",

                options: [
                    "2",
                    "10",
                    "100"
                ],

                answer: "2",

                explanation: "10²=100."
            },

            {
                q: "log₅(125)=?",

                options: [
                    "3",
                    "5",
                    "25"
                ],

                answer: "3",

                explanation: "5³=125."
            },

            {
                q: "In log₂(16)=4, the base is?",

                options: [
                    "2",
                    "16",
                    "4"
                ],

                answer: "2",

                explanation: "The base is the small number written below 'log'."
            },

            {
                q: "In log₂(16)=4, the exponent is?",

                options: [
                    "4",
                    "2",
                    "16"
                ],

                answer: "4",

                explanation: "The logarithm gives the exponent."
            },

            {
                q: "Which equation is equivalent to log₃(27)=3?",

                options: [
                    "3³=27",
                    "27³=3",
                    "3²=27"
                ],

                answer: "3³=27",

                explanation: "Rewrite logarithmic form into exponential form."
            },

            {
                q: "Logarithms are commonly used in?",

                options: [
                    "Science and finance",
                    "Only geometry",
                    "Only statistics"
                ],

                answer: "Science and finance",

                explanation: "Logarithms appear in many real-world applications."
            },

            {
                q: "The value of a logarithm is always?",

                options: [
                    "An exponent",
                    "A coefficient",
                    "A denominator"
                ],

                answer: "An exponent",

                explanation: "The answer to a logarithm is an exponent."
            }

        ]

    }
    ,

    "algebra2-converting-exponential-logarithmic-form": {
        title: "Converting Between Exponential and Logarithmic Form",
        subtitle: "Rewrite equations between exponential form and logarithmic form.",

        body: `

<h2>Introduction</h2>

<p>Exponential equations and logarithmic equations are two ways to write the same relationship.</p>

<hr>

<h2>Main Relationship</h2>

<p><strong>log<sub>b</sub>(x)=y</strong></p>

<p>means</p>

<p><strong>b<sup>y</sup>=x</strong></p>

<hr>

<h2>Example 1</h2>

<p><strong>log₂(16)=4</strong></p>

<p>Exponential form:</p>

<p><strong>2⁴=16</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>3²=9</strong></p>

<p>Logarithmic form:</p>

<p><strong>log₃(9)=2</strong></p>

<hr>

<h2>How to Remember</h2>

<p>The base stays the base.</p>

<p>The logarithm equals the exponent.</p>

<p>The number inside the log is the result of the power.</p>

<hr>

<h2>Summary</h2>

<p>Converting between forms helps solve exponential and logarithmic equations.</p>

`,

        questions: [

            {
                q: "log₂(16)=4 converts to?",
                options: ["2⁴=16", "16²=4", "4²=16"],
                answer: "2⁴=16",
                explanation: "The base is 2, the exponent is 4, and the result is 16."
            },

            {
                q: "3²=9 converts to?",
                options: ["log₃(9)=2", "log₂(9)=3", "log₉(3)=2"],
                answer: "log₃(9)=2",
                explanation: "The base stays 3 and the exponent becomes the log value."
            },

            {
                q: "In log₅(25)=2, the base is?",
                options: ["5", "25", "2"],
                answer: "5",
                explanation: "The base is the small number written below log."
            },

            {
                q: "In log₅(25)=2, the exponent is?",
                options: ["2", "5", "25"],
                answer: "2",
                explanation: "A logarithm gives the exponent."
            },

            {
                q: "10³=1000 converts to?",
                options: ["log₁₀(1000)=3", "log₃(1000)=10", "log₁₀(3)=1000"],
                answer: "log₁₀(1000)=3",
                explanation: "10 raised to the third power equals 1000."
            },

            {
                q: "log₄(64)=3 converts to?",
                options: ["4³=64", "64³=4", "3⁴=64"],
                answer: "4³=64",
                explanation: "The base is 4 and the exponent is 3."
            },

            {
                q: "The answer to a logarithm is always a/an?",
                options: ["Exponent", "Base", "Coefficient"],
                answer: "Exponent",
                explanation: "A logarithm asks what exponent is needed."
            },

            {
                q: "The base changes when converting forms?",
                options: ["No", "Yes", "Sometimes"],
                answer: "No",
                explanation: "The base stays the same in both forms."
            },

            {
                q: "Which is logarithmic form?",
                options: ["log₂(8)=3", "2³=8", "x²+3x+2"],
                answer: "log₂(8)=3",
                explanation: "Logarithmic form uses log notation."
            },

            {
                q: "Which is exponential form?",
                options: ["5²=25", "log₅(25)=2", "log₂(8)=3"],
                answer: "5²=25",
                explanation: "Exponential form uses a base raised to a power."
            }

        ]

    }
    ,

    "algebra2-properties-of-logarithms": {
        title: "Properties of Logarithms",
        subtitle: "Use the Product, Quotient, and Power Properties of logarithms.",

        body: `

<h2>Introduction</h2>

<p>Logarithm properties allow us to rewrite logarithmic expressions in simpler forms.</p>

<p>These properties are especially useful when solving logarithmic equations.</p>

<hr>

<h2>Product Property</h2>

<p><strong>log<sub>b</sub>(MN) = log<sub>b</sub>(M) + log<sub>b</sub>(N)</strong></p>

<p>The logarithm of a product becomes the sum of two logarithms.</p>

<hr>

<h2>Quotient Property</h2>

<p><strong>log<sub>b</sub>(M/N) = log<sub>b</sub>(M) − log<sub>b</sub>(N)</strong></p>

<p>The logarithm of a quotient becomes the difference of two logarithms.</p>

<hr>

<h2>Power Property</h2>

<p><strong>log<sub>b</sub>(M<sup>k</sup>) = k · log<sub>b</sub>(M)</strong></p>

<p>The exponent moves to the front as a coefficient.</p>

<hr>

<h2>Example 1</h2>

<p><strong>log₂(8 × 4)</strong></p>

<p>= log₂(8) + log₂(4)</p>

<p>= 3 + 2</p>

<p>= <strong>5</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>log₁₀(100/10)</strong></p>

<p>= log₁₀(100) − log₁₀(10)</p>

<p>= 2 − 1</p>

<p>= <strong>1</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>log₃(9²)</strong></p>

<p>= 2 log₃(9)</p>

<p>= 2 × 2</p>

<p>= <strong>4</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>These properties only apply to multiplication, division, and exponents.</li>

<li>They do <strong>not</strong> work for addition or subtraction inside the logarithm.</li>

<li>Always keep the base the same.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>The Product, Quotient, and Power Properties allow logarithms to be rewritten into equivalent forms that are easier to work with.</p>

`,

        questions: [

            {
                q: "The Product Property changes multiplication into?",

                options: [
                    "Addition",
                    "Subtraction",
                    "Division"
                ],

                answer: "Addition",

                explanation: "The logarithm of a product becomes the sum of two logarithms."
            },

            {
                q: "The Quotient Property changes division into?",

                options: [
                    "Subtraction",
                    "Addition",
                    "Multiplication"
                ],

                answer: "Subtraction",

                explanation: "The logarithm of a quotient becomes the difference of two logarithms."
            },

            {
                q: "The Power Property moves the exponent?",

                options: [
                    "To the front",
                    "Inside the logarithm",
                    "To the denominator"
                ],

                answer: "To the front",

                explanation: "The exponent becomes a coefficient."
            },

            {
                q: "log(MN) equals?",

                options: [
                    "log(M)+log(N)",
                    "log(M)-log(N)",
                    "log(MN²)"
                ],

                answer: "log(M)+log(N)",

                explanation: "This is the Product Property."
            },

            {
                q: "log(M/N) equals?",

                options: [
                    "log(M)-log(N)",
                    "log(M)+log(N)",
                    "log(N)-log(M)"
                ],

                answer: "log(M)-log(N)",

                explanation: "This is the Quotient Property."
            },

            {
                q: "log(M⁵) equals?",

                options: [
                    "5log(M)",
                    "log(5M)",
                    "log(M)+5"
                ],

                answer: "5log(M)",

                explanation: "The exponent becomes the coefficient."
            },

            {
                q: "Which operation becomes addition?",

                options: [
                    "Multiplication",
                    "Division",
                    "Exponentiation"
                ],

                answer: "Multiplication",

                explanation: "Products become sums."
            },

            {
                q: "Which operation becomes subtraction?",

                options: [
                    "Division",
                    "Multiplication",
                    "Addition"
                ],

                answer: "Division",

                explanation: "Quotients become differences."
            },

            {
                q: "Do logarithm properties work for log(M+N)?",

                options: [
                    "No",
                    "Yes",
                    "Only sometimes"
                ],

                answer: "No",

                explanation: "There is no addition property for logarithms."
            },

            {
                q: "These properties are mainly used for?",

                options: [
                    "Rewriting logarithmic expressions",
                    "Graphing lines",
                    "Factoring quadratics"
                ],

                answer: "Rewriting logarithmic expressions",

                explanation: "They simplify logarithmic expressions and help solve equations."
            }

        ]

    }
    ,

    "algebra2-expanding-logarithms": {
        title: "Expanding Logarithms",
        subtitle: "Rewrite logarithms as sums and differences using logarithm properties.",

        body: `

<h2>Introduction</h2>

<p>Expanding a logarithm means rewriting one logarithm as several simpler logarithms.</p>

<p>To expand logarithms, we use the Product, Quotient, and Power Properties.</p>

<hr>

<h2>Step 1 — Apply the Product Property</h2>

<p><strong>log(MN)=log(M)+log(N)</strong></p>

<p>Products become sums.</p>

<hr>

<h2>Step 2 — Apply the Quotient Property</h2>

<p><strong>log(M/N)=log(M)-log(N)</strong></p>

<p>Quotients become differences.</p>

<hr>

<h2>Step 3 — Apply the Power Property</h2>

<p><strong>log(M<sup>k</sup>)=k·log(M)</strong></p>

<p>Exponents become coefficients.</p>

<hr>

<h2>Example 1</h2>

<p><strong>log(5x)</strong></p>

<p>= log(5) + log(x)</p>

<hr>

<h2>Example 2</h2>

<p><strong>log(x²)</strong></p>

<p>= 2log(x)</p>

<hr>

<h2>Example 3</h2>

<p><strong>log((3x²)/y)</strong></p>

<p>= log(3x²) − log(y)</p>

<p>= log(3) + log(x²) − log(y)</p>

<p>= <strong>log(3) + 2log(x) − log(y)</strong></p>

<hr>

<h2>Order Matters</h2>

<p>Expand products and quotients first.</p>

<p>Apply the Power Property after identifying exponents.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Do not expand log(x+y).</li>

<li>Only products, quotients, and powers can be expanded.</li>

<li>Move exponents to the front as coefficients.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Expanding logarithms uses the Product, Quotient, and Power Properties to rewrite one logarithm into simpler logarithmic expressions.</p>

`,

        questions: [

            {
                q: "log(ab) expands to?",

                options: [
                    "log(a)+log(b)",
                    "log(a)-log(b)",
                    "2log(ab)"
                ],

                answer: "log(a)+log(b)",

                explanation: "Products become sums."
            },

            {
                q: "log(a/b) expands to?",

                options: [
                    "log(a)-log(b)",
                    "log(a)+log(b)",
                    "log(b)-log(a)"
                ],

                answer: "log(a)-log(b)",

                explanation: "Quotients become differences."
            },

            {
                q: "log(x⁴) expands to?",

                options: [
                    "4log(x)",
                    "log(4x)",
                    "log(x)+4"
                ],

                answer: "4log(x)",

                explanation: "The exponent becomes the coefficient."
            },

            {
                q: "log(7x) expands to?",

                options: [
                    "log(7)+log(x)",
                    "log(7x²)",
                    "7log(x)"
                ],

                answer: "log(7)+log(x)",

                explanation: "Products become sums."
            },

            {
                q: "log((5x)/y) expands to?",

                options: [
                    "log(5)+log(x)-log(y)",
                    "log(5x)-log(y²)",
                    "log(5)+log(y)-log(x)"
                ],

                answer: "log(5)+log(x)-log(y)",

                explanation: "Apply the Product Property, then the Quotient Property."
            },

            {
                q: "Can log(x+y) be expanded?",

                options: [
                    "No",
                    "Yes",
                    "Only sometimes"
                ],

                answer: "No",

                explanation: "There is no logarithm property for addition."
            },

            {
                q: "Which property moves an exponent to the front?",

                options: [
                    "Power Property",
                    "Product Property",
                    "Quotient Property"
                ],

                answer: "Power Property",

                explanation: "The exponent becomes a coefficient."
            },

            {
                q: "Products become?",

                options: [
                    "Sums",
                    "Differences",
                    "Products"
                ],

                answer: "Sums",

                explanation: "Use the Product Property."
            },

            {
                q: "Quotients become?",

                options: [
                    "Differences",
                    "Sums",
                    "Products"
                ],

                answer: "Differences",

                explanation: "Use the Quotient Property."
            },

            {
                q: "The goal of expanding logarithms is to?",

                options: [
                    "Rewrite one logarithm as several simpler logarithms",
                    "Solve for x immediately",
                    "Factor polynomials"
                ],

                answer: "Rewrite one logarithm as several simpler logarithms",

                explanation: "Expanding separates expressions into simpler logarithms."
            }

        ]

    }
    ,

    "algebra2-condensing-logarithms": {
        title: "Condensing Logarithms",
        subtitle: "Combine multiple logarithms into a single logarithm.",

        body: `

<h2>Introduction</h2>

<p>Condensing logarithms is the opposite of expanding logarithms.</p>

<p>Instead of breaking one logarithm into several, we combine several logarithms into one.</p>

<hr>

<h2>Product Property</h2>

<p><strong>log(M)+log(N)=log(MN)</strong></p>

<p>Addition becomes multiplication.</p>

<hr>

<h2>Quotient Property</h2>

<p><strong>log(M)-log(N)=log(M/N)</strong></p>

<p>Subtraction becomes division.</p>

<hr>

<h2>Power Property</h2>

<p><strong>k·log(M)=log(M<sup>k</sup>)</strong></p>

<p>The coefficient becomes the exponent.</p>

<hr>

<h2>Example 1</h2>

<p><strong>log(x)+log(y)</strong></p>

<p>= <strong>log(xy)</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>log(a)-log(b)</strong></p>

<p>= <strong>log(a/b)</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>2log(x)+log(y)-log(z)</strong></p>

<p>Move the coefficient:</p>

<p>= log(x²)+log(y)-log(z)</p>

<p>Combine products:</p>

<p>= log(x²y)-log(z)</p>

<p>Combine quotient:</p>

<p>= <strong>log((x²y)/z)</strong></p>

<hr>

<h2>Order Matters</h2>

<p>Always move coefficients into exponents before combining logarithms.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Combine only logarithms with the same base.</li>

<li>Move coefficients to exponents first.</li>

<li>Addition becomes multiplication.</li>

<li>Subtraction becomes division.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Condensing logarithms combines multiple logarithmic expressions into one using the Product, Quotient, and Power Properties.</p>

`,

        questions: [

            {
                q: "log(a)+log(b) condenses to?",

                options: [
                    "log(ab)",
                    "log(a+b)",
                    "log(a/b)"
                ],

                answer: "log(ab)",

                explanation: "Addition becomes multiplication."
            },

            {
                q: "log(a)-log(b) condenses to?",

                options: [
                    "log(a/b)",
                    "log(ab)",
                    "log(a-b)"
                ],

                answer: "log(a/b)",

                explanation: "Subtraction becomes division."
            },

            {
                q: "3log(x) condenses to?",

                options: [
                    "log(x³)",
                    "log(3x)",
                    "3+x"
                ],

                answer: "log(x³)",

                explanation: "The coefficient becomes the exponent."
            },

            {
                q: "2log(x)+log(y) condenses to?",

                options: [
                    "log(x²y)",
                    "log(2xy)",
                    "log(x²+y)"
                ],

                answer: "log(x²y)",

                explanation: "Apply the Power Property first."
            },

            {
                q: "log(x)+log(y)-log(z) condenses to?",

                options: [
                    "log((xy)/z)",
                    "log(x+y-z)",
                    "log(xyz)"
                ],

                answer: "log((xy)/z)",

                explanation: "Products stay in the numerator and quotients go in the denominator."
            },

            {
                q: "Before combining logarithms with coefficients, you should?",

                options: [
                    "Move coefficients to exponents",
                    "Multiply everything",
                    "Add the coefficients"
                ],

                answer: "Move coefficients to exponents",

                explanation: "Use the Power Property first."
            },

            {
                q: "Addition between logarithms becomes?",

                options: [
                    "Multiplication",
                    "Division",
                    "Addition"
                ],

                answer: "Multiplication",

                explanation: "This is the Product Property."
            },

            {
                q: "Subtraction between logarithms becomes?",

                options: [
                    "Division",
                    "Multiplication",
                    "Addition"
                ],

                answer: "Division",

                explanation: "This is the Quotient Property."
            },

            {
                q: "Condensing logarithms is the opposite of?",

                options: [
                    "Expanding logarithms",
                    "Factoring",
                    "Graphing"
                ],

                answer: "Expanding logarithms",

                explanation: "One combines while the other separates."
            },

            {
                q: "The final answer after condensing should usually be?",

                options: [
                    "One logarithm",
                    "Several logarithms",
                    "No logarithms"
                ],

                answer: "One logarithm",

                explanation: "The goal is to combine everything into a single logarithm."
            }

        ]

    }
    ,

    "algebra2-solving-logarithmic-equations": {
        title: "Solving Logarithmic Equations",
        subtitle: "Solve logarithmic equations by rewriting them in exponential form.",

        body: `

<h2>Introduction</h2>

<p>A <strong>logarithmic equation</strong> contains one or more logarithms with a variable.</p>

<p>Many logarithmic equations can be solved by rewriting them in exponential form.</p>

<hr>

<h2>General Steps</h2>

<ol>

<li>Isolate the logarithm.</li>

<li>Rewrite the equation in exponential form.</li>

<li>Solve for the variable.</li>

<li>Check your answer in the original equation.</li>

</ol>

<hr>

<h2>Example 1</h2>

<p><strong>log₂(x)=5</strong></p>

<p>Rewrite in exponential form:</p>

<p><strong>2⁵=x</strong></p>

<p><strong>x=32</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>log₁₀(x)=3</strong></p>

<p>Rewrite:</p>

<p><strong>10³=x</strong></p>

<p><strong>x=1000</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>log₃(x−1)=2</strong></p>

<p>Rewrite:</p>

<p><strong>3²=x−1</strong></p>

<p>9=x−1</p>

<p><strong>x=10</strong></p>

<hr>

<h2>Checking Solutions</h2>

<p>Every logarithm requires a <strong>positive argument</strong>.</p>

<p>If the value inside a logarithm is zero or negative, the solution is invalid.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Always isolate the logarithm first.</li>

<li>Rewrite correctly into exponential form.</li>

<li>Always check the final answer.</li>

<li>The argument of a logarithm must be greater than zero.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Most logarithmic equations are solved by converting them into exponential form and checking that the solution makes every logarithm valid.</p>

`,

        questions: [

            {
                q: "First step when solving a logarithmic equation?",

                options: [
                    "Isolate the logarithm",
                    "Square both sides",
                    "Factor everything"
                ],

                answer: "Isolate the logarithm",

                explanation: "Always isolate the logarithm before converting forms."
            },

            {
                q: "log₂(x)=4. x=?",

                options: [
                    "16",
                    "8",
                    "4"
                ],

                answer: "16",

                explanation: "2⁴=16."
            },

            {
                q: "log₁₀(x)=2. x=?",

                options: [
                    "100",
                    "20",
                    "10"
                ],

                answer: "100",

                explanation: "10²=100."
            },

            {
                q: "log₅(x)=3. x=?",

                options: [
                    "125",
                    "25",
                    "15"
                ],

                answer: "125",

                explanation: "5³=125."
            },

            {
                q: "log₃(x−2)=2. x=?",

                options: [
                    "11",
                    "9",
                    "7"
                ],

                answer: "11",

                explanation: "3²=9, so x−2=9."
            },

            {
                q: "After rewriting into exponential form, you should?",

                options: [
                    "Solve for the variable",
                    "Take another logarithm",
                    "Graph the equation"
                ],

                answer: "Solve for the variable",

                explanation: "The equation becomes a regular algebra problem."
            },

            {
                q: "The argument of a logarithm must be?",

                options: [
                    "Greater than zero",
                    "Greater than or equal to zero",
                    "Any real number"
                ],

                answer: "Greater than zero",

                explanation: "Logarithms are only defined for positive arguments."
            },

            {
                q: "Why should every solution be checked?",

                options: [
                    "To make sure the logarithm is defined",
                    "To find another answer",
                    "To simplify the equation"
                ],

                answer: "To make sure the logarithm is defined",

                explanation: "Some algebraic solutions make the logarithm invalid."
            },

            {
                q: "log₂(32)=?",

                options: [
                    "5",
                    "32",
                    "16"
                ],

                answer: "5",

                explanation: "2⁵=32."
            },

            {
                q: "Most logarithmic equations are solved by converting them to?",

                options: [
                    "Exponential form",
                    "Vertex form",
                    "Slope-intercept form"
                ],

                answer: "Exponential form",

                explanation: "This is the standard solution method."
            }

        ]

    }
    ,

    "algebra2-applications-of-logarithms": {
        title: "Applications of Logarithms",
        subtitle: "Explore how logarithms are used in science, engineering, finance, and technology.",

        body: `

<h2>Introduction</h2>

<p>Logarithms are used whenever numbers grow or shrink very quickly.</p>

<p>They make extremely large or extremely small numbers much easier to understand and compare.</p>

<hr>

<h2>Earthquakes</h2>

<p>The <strong>Richter Scale</strong> measures earthquake strength using logarithms.</p>

<p>Each whole-number increase represents a much larger release of energy.</p>

<hr>

<h2>Sound</h2>

<p><strong>Decibels (dB)</strong> measure sound intensity using logarithms.</p>

<p>This allows scientists to compare very quiet and very loud sounds.</p>

<hr>

<h2>Chemistry</h2>

<p>The <strong>pH Scale</strong> measures how acidic or basic a solution is.</p>

<p>The pH scale is logarithmic.</p>

<hr>

<h2>Finance</h2>

<p>Logarithms help solve compound interest problems when the time is unknown.</p>

<p>They are also used to model investment growth.</p>

<hr>

<h2>Computer Science</h2>

<p>Algorithms and data structures often use logarithms to measure efficiency.</p>

<p>For example, binary search has logarithmic performance.</p>

<hr>

<h2>Medicine</h2>

<p>Logarithms are used to analyze medical data, population growth, and drug concentration over time.</p>

<hr>

<h2>Summary</h2>

<p>Logarithms are powerful mathematical tools used throughout science, engineering, medicine, finance, and technology to describe exponential relationships.</p>

`,

        questions: [

            {
                q: "The Richter Scale measures?",

                options: [
                    "Earthquake strength",
                    "Wind speed",
                    "Temperature"
                ],

                answer: "Earthquake strength",

                explanation: "The Richter Scale uses logarithms to measure earthquake magnitude."
            },

            {
                q: "Decibels measure?",

                options: [
                    "Sound intensity",
                    "Population",
                    "Distance"
                ],

                answer: "Sound intensity",

                explanation: "Sound intensity is measured on a logarithmic scale."
            },

            {
                q: "The pH Scale measures?",

                options: [
                    "Acidity",
                    "Speed",
                    "Pressure"
                ],

                answer: "Acidity",

                explanation: "The pH Scale is logarithmic."
            },

            {
                q: "Logarithms are useful because they simplify?",

                options: [
                    "Very large and very small numbers",
                    "Only fractions",
                    "Only integers"
                ],

                answer: "Very large and very small numbers",

                explanation: "Logarithms compress large ranges of values."
            },

            {
                q: "Compound interest problems may require?",

                options: [
                    "Logarithms",
                    "Quadratic Formula",
                    "FOIL"
                ],

                answer: "Logarithms",

                explanation: "Logarithms can solve for unknown time."
            },

            {
                q: "Binary search is associated with?",

                options: [
                    "Logarithms",
                    "Quadratics",
                    "Geometry"
                ],

                answer: "Logarithms",

                explanation: "Binary search runs in logarithmic time."
            },

            {
                q: "Which field commonly uses logarithms?",

                options: [
                    "Medicine",
                    "Science",
                    "Finance",
                    "All of the above"
                ],

                answer: "All of the above",

                explanation: "Logarithms appear in many different fields."
            },

            {
                q: "Logarithms help describe?",

                options: [
                    "Exponential relationships",
                    "Only linear equations",
                    "Only circles"
                ],

                answer: "Exponential relationships",

                explanation: "They are the inverse of exponential functions."
            },

            {
                q: "Why are logarithmic scales useful?",

                options: [
                    "They compress large ranges of values",
                    "They eliminate fractions",
                    "They avoid decimals"
                ],

                answer: "They compress large ranges of values",

                explanation: "Large differences become easier to compare."
            },

            {
                q: "Logarithms are most closely connected to?",

                options: [
                    "Exponential functions",
                    "Linear equations",
                    "Polynomials"
                ],

                answer: "Exponential functions",

                explanation: "Logarithms are the inverse of exponential functions."
            }

        ]

    }
    ,

    "algebra2-exponential-logarithms-review": {
        title: "Unit 6 Review",
        subtitle: "Review exponential functions, growth, decay, compound interest, logarithms, log properties, and logarithmic equations.",

        body: `

<h2>Unit Review</h2>

<p>This review covers Exponential Functions and Logarithms.</p>

<hr>

<h2>Key Concepts</h2>

<ul>
<li>Exponential functions</li>
<li>Exponential growth</li>
<li>Exponential decay</li>
<li>Compound interest</li>
<li>Solving exponential equations</li>
<li>Logarithms as inverse operations</li>
<li>Converting exponential and logarithmic form</li>
<li>Logarithm properties</li>
<li>Expanding and condensing logarithms</li>
<li>Solving logarithmic equations</li>
<li>Applications of logarithms</li>
</ul>

<hr>

<h2>Important Facts</h2>

<ul>
<li>Exponential functions change by multiplication.</li>
<li>If the base is greater than 1, the function shows growth.</li>
<li>If the base is between 0 and 1, the function shows decay.</li>
<li>Logarithms answer the question: “What exponent?”</li>
<li>Logarithms are the inverse of exponential functions.</li>
<li>The argument of a logarithm must be positive.</li>
</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Confusing growth factor and growth rate.</li>
<li>Forgetting to convert percentages to decimals.</li>
<li>Forgetting that logarithms give exponents.</li>
<li>Not checking logarithmic equation solutions.</li>
<li>Trying to use log properties on addition inside a logarithm.</li>
</ul>

<hr>

<h2>Ready?</h2>

<p>If you understand these ideas, you are ready for the Exponential & Logarithmic Functions Unit Test.</p>

`,

        questions: [

            {
                q: "An exponential function has the variable where?",
                options: ["In the exponent", "In the denominator", "In the coefficient"],
                answer: "In the exponent",
                explanation: "That is the defining feature of an exponential function."
            },

            {
                q: "If b > 1 in y = a(b)^x, the function shows?",
                options: ["Growth", "Decay", "No change"],
                answer: "Growth",
                explanation: "A base greater than 1 creates exponential growth."
            },

            {
                q: "If 0 < b < 1, the function shows?",
                options: ["Decay", "Growth", "Linear change"],
                answer: "Decay",
                explanation: "A base between 0 and 1 creates exponential decay."
            },

            {
                q: "Compound interest is an example of?",
                options: ["Exponential growth", "Linear growth", "Quadratic growth"],
                answer: "Exponential growth",
                explanation: "Money grows by multiplying over time."
            },

            {
                q: "A logarithm answers what question?",
                options: ["What exponent?", "What coefficient?", "What denominator?"],
                answer: "What exponent?",
                explanation: "A logarithm gives the exponent needed to produce a number."
            },

            {
                q: "Logarithms are the inverse of?",
                options: ["Exponential functions", "Linear functions", "Polynomials"],
                answer: "Exponential functions",
                explanation: "Logarithms undo exponential functions."
            },

            {
                q: "log₂(8) equals?",
                options: ["3", "4", "2"],
                answer: "3",
                explanation: "2³ = 8."
            },

            {
                q: "log₁₀(100) equals?",
                options: ["2", "10", "100"],
                answer: "2",
                explanation: "10² = 100."
            },

            {
                q: "The argument of a logarithm must be?",
                options: ["Positive", "Zero", "Negative"],
                answer: "Positive",
                explanation: "Logarithms are only defined for positive arguments."
            },

            {
                q: "This unit prepares you for?",
                options: ["Sequences and Series", "Geometry", "Statistics"],
                answer: "Sequences and Series",
                explanation: "Arithmetic sequences come next."
            }

        ]

    }
    ,

    "algebra2-exponential-logarithms-unit-test": {
        title: "Unit 6 Test",
        subtitle: "Test exponential functions, growth, decay, compound interest, logarithms, log properties, and logarithmic equations.",

        body: `

<h2>Unit Test</h2>

<p>This test covers the full Exponential and Logarithmic Functions unit.</p>

<hr>

<h2>Topics Covered</h2>

<ul>
<li>Exponential functions</li>
<li>Growth and decay</li>
<li>Compound interest</li>
<li>Solving exponential equations</li>
<li>Logarithms</li>
<li>Converting forms</li>
<li>Logarithm properties</li>
<li>Expanding and condensing logs</li>
<li>Solving logarithmic equations</li>
<li>Real-world logarithm applications</li>
</ul>

<hr>

<h2>Goal</h2>

<p>A strong score means you are ready to begin Sequences and Series.</p>

`,

        questions: [

            {
                q: "Which is an exponential function?",
                options: ["y = 4(2)^x", "y = 3x + 1", "y = x² + 5"],
                answer: "y = 4(2)^x",
                explanation: "The variable is in the exponent."
            },

            {
                q: "In y = 7(5)^x, the starting value is?",
                options: ["7", "5", "x"],
                answer: "7",
                explanation: "The coefficient is the starting value."
            },

            {
                q: "In y = 2(4)^x, the growth factor is?",
                options: ["4", "2", "x"],
                answer: "4",
                explanation: "The base is the growth factor."
            },

            {
                q: "A 10% growth rate is written as?",
                options: ["0.10", "10", "1.10"],
                answer: "0.10",
                explanation: "Percentages must be converted to decimals."
            },

            {
                q: "The growth factor for 8% growth is?",
                options: ["1.08", "0.08", "8.00"],
                answer: "1.08",
                explanation: "1 + 0.08 = 1.08."
            },

            {
                q: "A 20% decay factor is?",
                options: ["0.80", "1.20", "0.20"],
                answer: "0.80",
                explanation: "1 − 0.20 = 0.80."
            },

            {
                q: "Which situation shows exponential decay?",
                options: ["Radioactive decay", "Population growth", "Compound interest"],
                answer: "Radioactive decay",
                explanation: "Radioactive substances decrease by a percentage."
            },

            {
                q: "Compound interest earns interest on?",
                options: ["Principal and previous interest", "Principal only", "Interest only"],
                answer: "Principal and previous interest",
                explanation: "That is why compound interest grows faster."
            },

            {
                q: "2^x = 16. What is x?",
                options: ["4", "8", "2"],
                answer: "4",
                explanation: "2⁴ = 16."
            },

            {
                q: "5^x = 125. What is x?",
                options: ["3", "5", "25"],
                answer: "3",
                explanation: "5³ = 125."
            },

            {
                q: "A logarithm tells you the?",
                options: ["Exponent", "Coefficient", "Denominator"],
                answer: "Exponent",
                explanation: "The answer to a logarithm is an exponent."
            },

            {
                q: "log₂(16) equals?",
                options: ["4", "2", "8"],
                answer: "4",
                explanation: "2⁴ = 16."
            },

            {
                q: "log₃(27) equals?",
                options: ["3", "9", "6"],
                answer: "3",
                explanation: "3³ = 27."
            },

            {
                q: "log₅(125) equals?",
                options: ["3", "5", "25"],
                answer: "3",
                explanation: "5³ = 125."
            },

            {
                q: "log₂(16)=4 converts to?",
                options: ["2⁴=16", "16²=4", "4²=16"],
                answer: "2⁴=16",
                explanation: "The base stays 2, and the logarithm value becomes the exponent."
            },

            {
                q: "3²=9 converts to?",
                options: ["log₃(9)=2", "log₂(9)=3", "log₉(3)=2"],
                answer: "log₃(9)=2",
                explanation: "The base is 3, the result is 9, and the exponent is 2."
            },

            {
                q: "log(ab) expands to?",
                options: ["log(a)+log(b)", "log(a)-log(b)", "log(a)/log(b)"],
                answer: "log(a)+log(b)",
                explanation: "Products become sums."
            },

            {
                q: "log(a/b) expands to?",
                options: ["log(a)-log(b)", "log(a)+log(b)", "log(ab)"],
                answer: "log(a)-log(b)",
                explanation: "Quotients become differences."
            },

            {
                q: "log(x²) expands to?",
                options: ["2log(x)", "log(2x)", "log(x)+2"],
                answer: "2log(x)",
                explanation: "Exponents become coefficients."
            },

            {
                q: "When solving logarithmic equations, every solution must be checked because?",
                options: ["Log arguments must be positive", "The answer is always negative", "Logs cannot be solved"],
                answer: "Log arguments must be positive",
                explanation: "Values that make a logarithm zero or negative inside are invalid."
            }

        ]

    },


    "algebra2-arithmetic-sequences": {
        title: "Arithmetic Sequences",
        subtitle: "Recognize and write arithmetic sequences using a common difference.",

        body: `

<h2>Introduction</h2>

<p>An <strong>arithmetic sequence</strong> is a sequence where the difference between consecutive terms is always the same.</p>

<p>This constant value is called the <strong>common difference</strong>.</p>

<hr>

<h2>Examples</h2>

<p><strong>2, 5, 8, 11, 14, ...</strong></p>

<p>Common difference = +3</p>

<br>

<p><strong>20, 15, 10, 5, 0, ...</strong></p>

<p>Common difference = -5</p>

<hr>

<h2>Finding the Common Difference</h2>

<p>Subtract consecutive terms.</p>

<p><strong>d = next term − previous term</strong></p>

<hr>

<h2>Arithmetic Sequence Formula</h2>

<p><strong>a<sub>n</sub> = a<sub>1</sub> + (n−1)d</strong></p>

<ul>

<li><strong>a₁</strong> = first term</li>

<li><strong>d</strong> = common difference</li>

<li><strong>n</strong> = term number</li>

</ul>

<hr>

<h2>Example</h2>

<p>Find the 8th term of:</p>

<p><strong>4, 7, 10, 13, ...</strong></p>

<p>a₁ = 4</p>

<p>d = 3</p>

<p>a₈ = 4 + (8−1)(3)</p>

<p>= 4 + 21</p>

<p>= <strong>25</strong></p>

<hr>

<h2>Real-Life Applications</h2>

<ul>

<li>Weekly savings</li>

<li>Staircase patterns</li>

<li>Regular salary increases</li>

<li>Constant-distance travel</li>

</ul>

<hr>

<h2>Summary</h2>

<p>An arithmetic sequence increases or decreases by the same amount each time. The common difference makes it easy to find any term using the arithmetic sequence formula.</p>

`,

        questions: [

            {
                q: "What is an arithmetic sequence?",

                options: [
                    "A sequence with a constant difference",
                    "A sequence with a constant ratio",
                    "A random sequence"
                ],

                answer: "A sequence with a constant difference",

                explanation: "Arithmetic sequences change by adding or subtracting the same amount."
            },

            {
                q: "The common difference of 3, 8, 13, 18 is?",

                options: [
                    "5",
                    "3",
                    "8"
                ],

                answer: "5",

                explanation: "Each term increases by 5."
            },

            {
                q: "The common difference of 20, 16, 12, 8 is?",

                options: [
                    "-4",
                    "4",
                    "-8"
                ],

                answer: "-4",

                explanation: "Each term decreases by 4."
            },

            {
                q: "The arithmetic sequence formula is?",

                options: [
                    "aₙ=a₁+(n−1)d",
                    "aₙ=a₁rⁿ",
                    "y=mx+b"
                ],

                answer: "aₙ=a₁+(n−1)d",

                explanation: "This formula finds any term of an arithmetic sequence."
            },

            {
                q: "In the formula, d represents?",

                options: [
                    "The common difference",
                    "The first term",
                    "The term number"
                ],

                answer: "The common difference",

                explanation: "d is the constant difference between terms."
            },

            {
                q: "Find the next term: 6, 10, 14, 18",

                options: [
                    "22",
                    "24",
                    "20"
                ],

                answer: "22",

                explanation: "Add the common difference of 4."
            },

            {
                q: "Find the 5th term: 2, 5, 8, 11...",

                options: [
                    "14",
                    "15",
                    "13"
                ],

                answer: "14",

                explanation: "Keep adding 3."
            },

            {
                q: "Arithmetic sequences change by?",

                options: [
                    "Addition or subtraction",
                    "Multiplication",
                    "Division"
                ],

                answer: "Addition or subtraction",

                explanation: "The change is always a constant difference."
            },

            {
                q: "A common difference can be?",

                options: [
                    "Positive or negative",
                    "Only positive",
                    "Only negative"
                ],

                answer: "Positive or negative",

                explanation: "Arithmetic sequences can increase or decrease."
            },

            {
                q: "Arithmetic sequences are useful for modeling?",

                options: [
                    "Constant change",
                    "Percent growth",
                    "Random events"
                ],

                answer: "Constant change",

                explanation: "They describe situations with equal increases or decreases."
            }

        ]

    }

    ,

    "algebra2-geometric-sequences": {
        title: "Geometric Sequences",
        subtitle: "Recognize and write geometric sequences using a common ratio.",

        body: `

<h2>Introduction</h2>

<p>A <strong>geometric sequence</strong> is a sequence where each term is found by multiplying the previous term by the same number.</p>

<p>This constant multiplier is called the <strong>common ratio</strong>.</p>

<hr>

<h2>Examples</h2>

<p><strong>2, 6, 18, 54, 162, ...</strong></p>

<p>Common ratio = 3</p>

<br>

<p><strong>64, 32, 16, 8, 4, ...</strong></p>

<p>Common ratio = 1/2</p>

<hr>

<h2>Finding the Common Ratio</h2>

<p>Divide consecutive terms.</p>

<p><strong>r = (next term) ÷ (previous term)</strong></p>

<hr>

<h2>Geometric Sequence Formula</h2>

<p><strong>a<sub>n</sub> = a<sub>1</sub>r<sup>n−1</sup></strong></p>

<ul>

<li><strong>a₁</strong> = first term</li>

<li><strong>r</strong> = common ratio</li>

<li><strong>n</strong> = term number</li>

</ul>

<hr>

<h2>Example</h2>

<p>Find the 5th term of:</p>

<p><strong>3, 6, 12, 24, ...</strong></p>

<p>a₁ = 3</p>

<p>r = 2</p>

<p>a₅ = 3(2)<sup>4</sup></p>

<p>= 3 × 16</p>

<p>= <strong>48</strong></p>

<hr>

<h2>Real-Life Applications</h2>

<ul>

<li>Population growth</li>

<li>Compound interest</li>

<li>Bacteria growth</li>

<li>Radioactive decay</li>

<li>Computer memory growth</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Geometric sequences change by multiplying by the same ratio each time. They model exponential growth and decay.</p>

`,

        questions: [

            {
                q: "What is a geometric sequence?",

                options: [
                    "A sequence with a constant ratio",
                    "A sequence with a constant difference",
                    "A random sequence"
                ],

                answer: "A sequence with a constant ratio",

                explanation: "Each term is multiplied by the same number."
            },

            {
                q: "The common ratio of 2, 6, 18, 54 is?",

                options: [
                    "3",
                    "6",
                    "2"
                ],

                answer: "3",

                explanation: "Each term is multiplied by 3."
            },

            {
                q: "The common ratio of 81, 27, 9, 3 is?",

                options: [
                    "1/3",
                    "3",
                    "-3"
                ],

                answer: "1/3",

                explanation: "Each term is divided by 3."
            },

            {
                q: "The geometric sequence formula is?",

                options: [
                    "aₙ=a₁r^(n−1)",
                    "aₙ=a₁+(n−1)d",
                    "y=mx+b"
                ],

                answer: "aₙ=a₁r^(n−1)",

                explanation: "This formula finds any term in a geometric sequence."
            },

            {
                q: "In the formula, r represents?",

                options: [
                    "The common ratio",
                    "The common difference",
                    "The first term"
                ],

                answer: "The common ratio",

                explanation: "r is the constant multiplier."
            },

            {
                q: "Find the next term: 5, 10, 20, 40",

                options: [
                    "80",
                    "45",
                    "60"
                ],

                answer: "80",

                explanation: "Multiply by 2."
            },

            {
                q: "Find the next term: 64, 32, 16, 8",

                options: [
                    "4",
                    "2",
                    "6"
                ],

                answer: "4",

                explanation: "Multiply by 1/2."
            },

            {
                q: "Geometric sequences change by?",

                options: [
                    "Multiplication or division",
                    "Addition",
                    "Subtraction"
                ],

                answer: "Multiplication or division",

                explanation: "Each term is multiplied by the common ratio."
            },

            {
                q: "A common ratio can be?",

                options: [
                    "Greater than 1 or between 0 and 1",
                    "Only greater than 1",
                    "Only negative"
                ],

                answer: "Greater than 1 or between 0 and 1",

                explanation: "Ratios greater than 1 create growth; ratios between 0 and 1 create decay."
            },

            {
                q: "Geometric sequences are closely related to?",

                options: [
                    "Exponential functions",
                    "Linear functions",
                    "Quadratic functions"
                ],

                answer: "Exponential functions",

                explanation: "Both involve repeated multiplication."
            }

        ]

    }
    ,

    "algebra2-arithmetic-series": {
        title: "Arithmetic Series",
        subtitle: "Find the sum of terms in an arithmetic sequence.",

        body: `

<h2>Introduction</h2>

<p>An <strong>arithmetic series</strong> is the sum of the terms in an arithmetic sequence.</p>

<p>Instead of finding just one term, we add multiple terms together.</p>

<hr>

<h2>Arithmetic Series Formula</h2>

<p><strong>S<sub>n</sub> = (n/2)(a<sub>1</sub> + a<sub>n</sub>)</strong></p>

<ul>

<li><strong>Sₙ</strong> = sum of the first n terms</li>

<li><strong>n</strong> = number of terms</li>

<li><strong>a₁</strong> = first term</li>

<li><strong>aₙ</strong> = last term</li>

</ul>

<hr>

<h2>Example 1</h2>

<p>Find the sum:</p>

<p><strong>2 + 5 + 8 + 11 + 14</strong></p>

<p>a₁ = 2</p>

<p>aₙ = 14</p>

<p>n = 5</p>

<p>S₅ = (5/2)(2+14)</p>

<p>= (5/2)(16)</p>

<p>= <strong>40</strong></p>

<hr>

<h2>Example 2</h2>

<p>Find the sum of the first 10 terms of:</p>

<p><strong>4, 7, 10, 13, ...</strong></p>

<p>First find the 10th term:</p>

<p>a₁₀ = 4 + (10−1)(3)</p>

<p>= 31</p>

<p>Now use the series formula:</p>

<p>S₁₀ = (10/2)(4+31)</p>

<p>= 5 × 35</p>

<p>= <strong>175</strong></p>

<hr>

<h2>Real-Life Applications</h2>

<ul>

<li>Total weekly savings</li>

<li>Salary increases</li>

<li>Stacking objects</li>

<li>Sports scoring systems</li>

</ul>

<hr>

<h2>Summary</h2>

<p>An arithmetic series is the sum of an arithmetic sequence. The arithmetic series formula quickly finds the total without adding every term individually.</p>

`,

        questions: [

            {
                q: "An arithmetic series is?",

                options: [
                    "The sum of an arithmetic sequence",
                    "A geometric sequence",
                    "A quadratic equation"
                ],

                answer: "The sum of an arithmetic sequence",

                explanation: "A series is the sum of the terms in a sequence."
            },

            {
                q: "The arithmetic series formula is?",

                options: [
                    "Sₙ=(n/2)(a₁+aₙ)",
                    "aₙ=a₁+(n−1)d",
                    "aₙ=a₁rⁿ"
                ],

                answer: "Sₙ=(n/2)(a₁+aₙ)",

                explanation: "This formula finds the sum of an arithmetic series."
            },

            {
                q: "Sₙ represents?",

                options: [
                    "The sum of the first n terms",
                    "The nth term",
                    "The common difference"
                ],

                answer: "The sum of the first n terms",

                explanation: "S stands for sum."
            },

            {
                q: "What information is needed to use the arithmetic series formula?",

                options: [
                    "First term, last term, and number of terms",
                    "Only the first term",
                    "Only the common difference"
                ],

                answer: "First term, last term, and number of terms",

                explanation: "These values are substituted into the formula."
            },

            {
                q: "Find the sum: 1+2+3+4+5",

                options: [
                    "15",
                    "10",
                    "20"
                ],

                answer: "15",

                explanation: "The first five counting numbers add to 15."
            },

            {
                q: "Which symbol represents the last term?",

                options: [
                    "aₙ",
                    "a₁",
                    "Sₙ"
                ],

                answer: "aₙ",

                explanation: "aₙ represents the nth (last) term."
            },

            {
                q: "If there are 20 terms, n equals?",

                options: [
                    "20",
                    "10",
                    "2"
                ],

                answer: "20",

                explanation: "n is simply the number of terms."
            },

            {
                q: "Before finding the series sum, you may need to find?",

                options: [
                    "The last term",
                    "The slope",
                    "The midpoint"
                ],

                answer: "The last term",

                explanation: "The last term is often calculated first."
            },

            {
                q: "Arithmetic series are based on?",

                options: [
                    "Arithmetic sequences",
                    "Geometric sequences",
                    "Logarithms"
                ],

                answer: "Arithmetic sequences",

                explanation: "A series is the sum of a sequence."
            },

            {
                q: "The arithmetic series formula saves time because it?",

                options: [
                    "Finds the total without adding every term",
                    "Finds the common ratio",
                    "Finds the slope"
                ],

                answer: "Finds the total without adding every term",

                explanation: "The formula avoids lengthy addition."
            }

        ]

    }
    ,

    "algebra2-geometric-series": {
        title: "Geometric Series",
        subtitle: "Find the sum of the terms in a geometric sequence.",

        body: `

<h2>Introduction</h2>

<p>A <strong>geometric series</strong> is the sum of the terms in a geometric sequence.</p>

<p>Instead of finding just one term, we find the total of several terms.</p>

<hr>

<h2>Geometric Series Formula</h2>

<p><strong>S<sub>n</sub> = a<sub>1</sub>[(1-r<sup>n</sup>)/(1-r)]</strong></p>

<p>This formula works whenever <strong>r ≠ 1</strong>.</p>

<ul>

<li><strong>Sₙ</strong> = sum of the first n terms</li>

<li><strong>a₁</strong> = first term</li>

<li><strong>r</strong> = common ratio</li>

<li><strong>n</strong> = number of terms</li>

</ul>

<hr>

<h2>Example 1</h2>

<p>Find the sum of:</p>

<p><strong>2 + 4 + 8 + 16</strong></p>

<p>a₁ = 2</p>

<p>r = 2</p>

<p>n = 4</p>

<p>S₄ = 2[(1-2⁴)/(1-2)]</p>

<p>= 2[(1-16)/(-1)]</p>

<p>= 2(15)</p>

<p>= <strong>30</strong></p>

<hr>

<h2>Example 2</h2>

<p>Find the sum of the first 5 terms of:</p>

<p><strong>3, 6, 12, 24, 48</strong></p>

<p>a₁ = 3</p>

<p>r = 2</p>

<p>n = 5</p>

<p>S₅ = 3[(1-2⁵)/(1-2)]</p>

<p>= 3(31)</p>

<p>= <strong>93</strong></p>

<hr>

<h2>Real-Life Applications</h2>

<ul>

<li>Compound interest</li>

<li>Population growth</li>

<li>Bacteria growth</li>

<li>Computer storage</li>

<li>Investment growth</li>

</ul>

<hr>

<h2>Summary</h2>

<p>A geometric series is the sum of a geometric sequence. The geometric series formula quickly calculates the total without adding each term individually.</p>

`,

        questions: [

            {
                q: "A geometric series is?",

                options: [
                    "The sum of a geometric sequence",
                    "A geometric sequence",
                    "An arithmetic sequence"
                ],

                answer: "The sum of a geometric sequence",

                explanation: "A series is the sum of the terms."
            },

            {
                q: "Which value represents the common ratio?",

                options: [
                    "r",
                    "d",
                    "n"
                ],

                answer: "r",

                explanation: "r is the constant multiplier."
            },

            {
                q: "What does Sₙ represent?",

                options: [
                    "The sum of the first n terms",
                    "The nth term",
                    "The common ratio"
                ],

                answer: "The sum of the first n terms",

                explanation: "S stands for sum."
            },

            {
                q: "The sequence 2, 4, 8, 16 has common ratio?",

                options: [
                    "2",
                    "4",
                    "8"
                ],

                answer: "2",

                explanation: "Each term is multiplied by 2."
            },

            {
                q: "The sum of 2+4+8+16 is?",

                options: [
                    "30",
                    "32",
                    "28"
                ],

                answer: "30",

                explanation: "2+4+8+16=30."
            },

            {
                q: "Geometric series are based on?",

                options: [
                    "Geometric sequences",
                    "Arithmetic sequences",
                    "Linear equations"
                ],

                answer: "Geometric sequences",

                explanation: "A geometric series is the sum of a geometric sequence."
            },

            {
                q: "If the common ratio is greater than 1, the terms generally?",

                options: [
                    "Increase",
                    "Decrease",
                    "Stay constant"
                ],

                answer: "Increase",

                explanation: "Multiplying by a number greater than 1 causes growth."
            },

            {
                q: "If the common ratio is between 0 and 1, the terms generally?",

                options: [
                    "Decrease",
                    "Increase",
                    "Stay constant"
                ],

                answer: "Decrease",

                explanation: "Multiplying by a fraction causes decay."
            },

            {
                q: "Geometric series are commonly used to model?",

                options: [
                    "Compound interest",
                    "Linear motion",
                    "Constant speed"
                ],

                answer: "Compound interest",

                explanation: "Compound interest grows geometrically."
            },

            {
                q: "Why use the geometric series formula?",

                options: [
                    "To find the total quickly",
                    "To find the slope",
                    "To graph a parabola"
                ],

                answer: "To find the total quickly",

                explanation: "The formula avoids adding every term one by one."
            }

        ]

    }
    ,

    "algebra2-sigma-notation": {
        title: "Sigma Notation",
        subtitle: "Write and evaluate sums using sigma notation.",

        body: `

<h2>Introduction</h2>

<p><strong>Sigma notation</strong> is a shorthand way to write the sum of many terms.</p>

<p>The Greek letter <strong>Σ</strong> (sigma) means <strong>sum</strong>.</p>

<hr>

<h2>Parts of Sigma Notation</h2>

<p><strong>Σ(expression)</strong></p>

<p>The notation includes:</p>

<ul>

<li><strong>Starting value</strong></li>

<li><strong>Ending value</strong></li>

<li><strong>Expression to evaluate</strong></li>

</ul>

<hr>

<h2>Example 1</h2>

<p><strong>Σ(i)</strong></p>

<p>where i = 1 to 5</p>

<p>Expand it:</p>

<p>1 + 2 + 3 + 4 + 5</p>

<p>= <strong>15</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>Σ(2i)</strong></p>

<p>where i = 1 to 4</p>

<p>Expand it:</p>

<p>2 + 4 + 6 + 8</p>

<p>= <strong>20</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>Σ(i²)</strong></p>

<p>where i = 1 to 3</p>

<p>Expand it:</p>

<p>1² + 2² + 3²</p>

<p>= 1 + 4 + 9</p>

<p>= <strong>14</strong></p>

<hr>

<h2>When Is Sigma Notation Used?</h2>

<ul>

<li>Arithmetic series</li>

<li>Geometric series</li>

<li>Statistics</li>

<li>Calculus</li>

<li>Computer science</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Sigma notation provides a compact way to represent and calculate the sum of many terms.</p>

`,

        questions: [

            {
                q: "The symbol Σ means?",

                options: [
                    "Sum",
                    "Difference",
                    "Product"
                ],

                answer: "Sum",

                explanation: "Sigma is the Greek letter used to represent summation."
            },

            {
                q: "Σ(i), from i=1 to 4 equals?",

                options: [
                    "10",
                    "8",
                    "16"
                ],

                answer: "10",

                explanation: "1+2+3+4=10."
            },

            {
                q: "Σ(2i), from i=1 to 3 equals?",

                options: [
                    "12",
                    "6",
                    "18"
                ],

                answer: "12",

                explanation: "2+4+6=12."
            },

            {
                q: "Σ(i²), from i=1 to 3 equals?",

                options: [
                    "14",
                    "9",
                    "12"
                ],

                answer: "14",

                explanation: "1+4+9=14."
            },

            {
                q: "Sigma notation is mainly used to represent?",

                options: [
                    "Sums",
                    "Products",
                    "Ratios"
                ],

                answer: "Sums",

                explanation: "Sigma notation represents addition."
            },

            {
                q: "Sigma notation is commonly used in?",

                options: [
                    "Calculus",
                    "Statistics",
                    "Computer Science",
                    "All of the above"
                ],

                answer: "All of the above",

                explanation: "Sigma notation appears throughout higher mathematics."
            },

            {
                q: "The variable below Σ is called the?",

                options: [
                    "Index",
                    "Coefficient",
                    "Base"
                ],

                answer: "Index",

                explanation: "The index changes as each term is evaluated."
            },

            {
                q: "The number above Σ represents?",

                options: [
                    "The ending value",
                    "The starting value",
                    "The answer"
                ],

                answer: "The ending value",

                explanation: "It tells where to stop summing."
            },

            {
                q: "The number below Σ represents?",

                options: [
                    "The starting value",
                    "The ending value",
                    "The coefficient"
                ],

                answer: "The starting value",

                explanation: "It tells where to begin."
            },

            {
                q: "Sigma notation is useful because it?",

                options: [
                    "Shortens long sums",
                    "Simplifies fractions",
                    "Factors polynomials"
                ],

                answer: "Shortens long sums",

                explanation: "It provides a compact way to write long additions."
            }

        ]

    }
    ,

    "algebra2-sequences-series-review": {
        title: "Unit 7 Review",
        subtitle: "Review arithmetic sequences, geometric sequences, arithmetic series, geometric series, and sigma notation.",

        body: `

<h2>Unit Review</h2>

<p>This review covers sequences and series.</p>

<hr>

<h2>Key Concepts</h2>

<ul>
<li>Arithmetic sequences</li>
<li>Common difference</li>
<li>Geometric sequences</li>
<li>Common ratio</li>
<li>Arithmetic series</li>
<li>Geometric series</li>
<li>Sigma notation</li>
</ul>

<hr>

<h2>Important Facts</h2>

<ul>
<li>Arithmetic sequences change by adding or subtracting the same amount.</li>
<li>Geometric sequences change by multiplying or dividing by the same ratio.</li>
<li>A series is the sum of a sequence.</li>
<li>Sigma notation is shorthand for repeated addition.</li>
</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Confusing common difference with common ratio.</li>
<li>Using the arithmetic formula for a geometric sequence.</li>
<li>Forgetting that a series means sum.</li>
<li>Misreading the starting and ending values in sigma notation.</li>
</ul>

<hr>

<h2>Ready?</h2>

<p>If you understand these concepts, you are ready for the Sequences & Series Unit Test.</p>

`,

        questions: [

            {
                q: "An arithmetic sequence has a constant?",
                options: ["Difference", "Ratio", "Exponent"],
                answer: "Difference",
                explanation: "Arithmetic sequences change by adding or subtracting the same amount."
            },

            {
                q: "A geometric sequence has a constant?",
                options: ["Ratio", "Difference", "Sum"],
                answer: "Ratio",
                explanation: "Geometric sequences change by multiplying or dividing by the same number."
            },

            {
                q: "The sequence 3, 6, 9, 12 has common difference?",
                options: ["3", "6", "2"],
                answer: "3",
                explanation: "Each term increases by 3."
            },

            {
                q: "The sequence 2, 6, 18, 54 has common ratio?",
                options: ["3", "6", "2"],
                answer: "3",
                explanation: "Each term is multiplied by 3."
            },

            {
                q: "A series is?",
                options: ["The sum of a sequence", "One term only", "A graph"],
                answer: "The sum of a sequence",
                explanation: "A series adds the terms of a sequence."
            },

            {
                q: "Arithmetic series are based on?",
                options: ["Arithmetic sequences", "Geometric sequences", "Logarithms"],
                answer: "Arithmetic sequences",
                explanation: "An arithmetic series is the sum of an arithmetic sequence."
            },

            {
                q: "Geometric series are based on?",
                options: ["Geometric sequences", "Arithmetic sequences", "Linear equations"],
                answer: "Geometric sequences",
                explanation: "A geometric series is the sum of a geometric sequence."
            },

            {
                q: "The symbol Σ means?",
                options: ["Sum", "Slope", "Square root"],
                answer: "Sum",
                explanation: "Sigma notation represents repeated addition."
            },

            {
                q: "The variable below Σ is called the?",
                options: ["Index", "Coefficient", "Base"],
                answer: "Index",
                explanation: "The index changes as the sum is evaluated."
            },

            {
                q: "The next Algebra 2 unit is?",
                options: ["Probability", "Radicals", "Quadratics"],
                answer: "Probability",
                explanation: "Basic Probability comes next."
            }

        ]

    }
    ,

    "algebra2-sequences-series-unit-test": {
        title: "Unit 7 Test",
        subtitle: "Test arithmetic sequences, geometric sequences, arithmetic series, geometric series, and sigma notation.",

        body: `

<h2>Unit Test</h2>

<p>This test covers the full Sequences & Series unit.</p>

<hr>

<h2>Topics Covered</h2>

<ul>
<li>Arithmetic sequences</li>
<li>Geometric sequences</li>
<li>Arithmetic series</li>
<li>Geometric series</li>
<li>Sigma notation</li>
</ul>

<hr>

<h2>Goal</h2>

<p>A strong score means you are ready to begin Probability.</p>

`,

        questions: [

            {
                q: "Which sequence is arithmetic?",
                options: ["4, 7, 10, 13", "2, 4, 8, 16", "1, 4, 9, 16"],
                answer: "4, 7, 10, 13",
                explanation: "It increases by 3 each time."
            },

            {
                q: "Which sequence is geometric?",
                options: ["3, 6, 12, 24", "5, 8, 11, 14", "2, 5, 8, 11"],
                answer: "3, 6, 12, 24",
                explanation: "Each term is multiplied by 2."
            },

            {
                q: "Common difference of 10, 15, 20, 25 is?",
                options: ["5", "10", "15"],
                answer: "5",
                explanation: "Each term increases by 5."
            },

            {
                q: "Common difference of 30, 25, 20, 15 is?",
                options: ["-5", "5", "10"],
                answer: "-5",
                explanation: "Each term decreases by 5."
            },

            {
                q: "Common ratio of 5, 10, 20, 40 is?",
                options: ["2", "5", "10"],
                answer: "2",
                explanation: "Each term is multiplied by 2."
            },

            {
                q: "Common ratio of 81, 27, 9, 3 is?",
                options: ["1/3", "3", "-3"],
                answer: "1/3",
                explanation: "Each term is divided by 3."
            },

            {
                q: "Arithmetic sequence formula is?",
                options: ["aₙ=a₁+(n−1)d", "aₙ=a₁r^(n−1)", "y=mx+b"],
                answer: "aₙ=a₁+(n−1)d",
                explanation: "This formula finds the nth term of an arithmetic sequence."
            },

            {
                q: "Geometric sequence formula is?",
                options: ["aₙ=a₁r^(n−1)", "aₙ=a₁+(n−1)d", "Sₙ=n/2(a₁+aₙ)"],
                answer: "aₙ=a₁r^(n−1)",
                explanation: "This formula finds the nth term of a geometric sequence."
            },

            {
                q: "Find the next term: 6, 10, 14, 18",
                options: ["22", "20", "24"],
                answer: "22",
                explanation: "Add 4 each time."
            },

            {
                q: "Find the next term: 4, 12, 36, 108",
                options: ["324", "216", "112"],
                answer: "324",
                explanation: "Multiply by 3 each time."
            },

            {
                q: "An arithmetic series finds?",
                options: ["The sum of an arithmetic sequence", "The common ratio", "The exponent"],
                answer: "The sum of an arithmetic sequence",
                explanation: "A series means sum."
            },

            {
                q: "A geometric series finds?",
                options: ["The sum of a geometric sequence", "Only the first term", "The common difference"],
                answer: "The sum of a geometric sequence",
                explanation: "A geometric series adds geometric sequence terms."
            },

            {
                q: "In a series, Sₙ represents?",
                options: ["The sum of the first n terms", "The first term", "The common difference"],
                answer: "The sum of the first n terms",
                explanation: "S stands for sum."
            },

            {
                q: "In arithmetic sequences, d represents?",
                options: ["Common difference", "Common ratio", "Number of terms"],
                answer: "Common difference",
                explanation: "d is the repeated amount added or subtracted."
            },

            {
                q: "In geometric sequences, r represents?",
                options: ["Common ratio", "Common difference", "First term"],
                answer: "Common ratio",
                explanation: "r is the repeated multiplier."
            },

            {
                q: "Sigma notation is used to write?",
                options: ["Long sums compactly", "Only fractions", "Only exponents"],
                answer: "Long sums compactly",
                explanation: "Sigma notation is shorthand for repeated addition."
            },

            {
                q: "Σ means?",
                options: ["Add the terms", "Multiply the terms", "Divide the terms"],
                answer: "Add the terms",
                explanation: "Sigma means sum."
            },

            {
                q: "The number below Σ tells you?",
                options: ["Where to start", "Where to stop", "The final answer"],
                answer: "Where to start",
                explanation: "The lower value gives the starting index."
            },

            {
                q: "The number above Σ tells you?",
                options: ["Where to stop", "Where to start", "The coefficient"],
                answer: "Where to stop",
                explanation: "The upper value gives the ending index."
            },

            {
                q: "After Sequences & Series, the next topic is?",
                options: ["Probability", "Quadratics", "Radicals"],
                answer: "Probability",
                explanation: "The next unit starts with Basic Probability."
            }

        ]

    },


    "algebra2-basic-probability": {
        title: "Basic Probability",
        subtitle: "Calculate the likelihood of events using probability.",

        body: `

<h2>Introduction</h2>

<p><strong>Probability</strong> measures how likely an event is to happen.</p>

<p>Every probability is a number between <strong>0</strong> and <strong>1</strong>.</p>

<ul>

<li><strong>0</strong> means impossible.</li>

<li><strong>1</strong> means certain.</li>

</ul>

<hr>

<h2>Probability Formula</h2>

<p><strong>Probability = (Number of Favorable Outcomes) ÷ (Total Number of Possible Outcomes)</strong></p>

<hr>

<h2>Example 1</h2>

<p>A fair six-sided die is rolled.</p>

<p>What is the probability of rolling a 4?</p>

<p>There is 1 favorable outcome and 6 possible outcomes.</p>

<p><strong>P(4)=1/6</strong></p>

<hr>

<h2>Example 2</h2>

<p>A bag contains:</p>

<ul>

<li>3 red marbles</li>

<li>5 blue marbles</li>

<li>2 green marbles</li>

</ul>

<p>Total marbles = 10</p>

<p>Probability of selecting a blue marble:</p>

<p><strong>P(Blue)=5/10=1/2</strong></p>

<hr>

<h2>Complement Rule</h2>

<p>The probability an event does <strong>not</strong> occur is:</p>

<p><strong>P(Not A)=1−P(A)</strong></p>

<p>If the probability of rain is 0.30, then:</p>

<p><strong>P(No Rain)=0.70</strong></p>

<hr>

<h2>Real-Life Applications</h2>

<ul>

<li>Weather forecasting</li>

<li>Sports predictions</li>

<li>Games of chance</li>

<li>Medical testing</li>

<li>Insurance</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Probability compares favorable outcomes to all possible outcomes and is always between 0 and 1.</p>

`,

        questions: [

            {
                q: "Probability is always between?",

                options: [
                    "0 and 1",
                    "1 and 10",
                    "-1 and 1"
                ],

                answer: "0 and 1",

                explanation: "Probabilities cannot be less than 0 or greater than 1."
            },

            {
                q: "The probability formula is?",

                options: [
                    "Favorable Outcomes ÷ Total Outcomes",
                    "Total Outcomes ÷ Favorable Outcomes",
                    "Favorable Outcomes × Total Outcomes"
                ],

                answer: "Favorable Outcomes ÷ Total Outcomes",

                explanation: "This is the basic probability formula."
            },

            {
                q: "A fair die is rolled. What is the probability of rolling a 2?",

                options: [
                    "1/6",
                    "1/2",
                    "2/6"
                ],

                answer: "1/6",

                explanation: "Only one face shows a 2."
            },

            {
                q: "A bag has 4 red and 6 blue marbles. What is P(Red)?",

                options: [
                    "2/5",
                    "4/6",
                    "6/10"
                ],

                answer: "2/5",

                explanation: "4 out of 10 simplifies to 2/5."
            },

            {
                q: "A probability of 0 means?",

                options: [
                    "Impossible",
                    "Certain",
                    "Likely"
                ],

                answer: "Impossible",

                explanation: "The event cannot occur."
            },

            {
                q: "A probability of 1 means?",

                options: [
                    "Certain",
                    "Impossible",
                    "Unlikely"
                ],

                answer: "Certain",

                explanation: "The event will definitely occur."
            },

            {
                q: "If P(A)=0.35, then P(Not A)=?",

                options: [
                    "0.65",
                    "0.35",
                    "1.35"
                ],

                answer: "0.65",

                explanation: "Use the complement rule: 1−0.35."
            },

            {
                q: "Which is a valid probability?",

                options: [
                    "0.72",
                    "1.4",
                    "-0.3"
                ],

                answer: "0.72",

                explanation: "Valid probabilities lie between 0 and 1."
            },

            {
                q: "Probability is commonly used in?",

                options: [
                    "Weather forecasting",
                    "Insurance",
                    "Sports",
                    "All of the above"
                ],

                answer: "All of the above",

                explanation: "Probability is used in many real-world fields."
            },

            {
                q: "Probability compares?",

                options: [
                    "Favorable outcomes to total outcomes",
                    "Favorable outcomes to unfavorable outcomes",
                    "Total outcomes to impossible outcomes"
                ],

                answer: "Favorable outcomes to total outcomes",

                explanation: "This is the definition of probability."
            }

        ]

    }
    ,

    "algebra2-conditional-probability": {
        title: "Conditional Probability",
        subtitle: "Find the probability of an event given that another event has already occurred.",

        body: `

<h2>Introduction</h2>

<p><strong>Conditional probability</strong> is the probability of an event occurring given that another event has already happened.</p>

<p>The word <strong>"given"</strong> tells you that the sample space has changed.</p>

<hr>

<h2>Conditional Probability Formula</h2>

<p><strong>P(A | B) = P(A and B) / P(B)</strong></p>

<p>Read as:</p>

<p><strong>"The probability of A given B."</strong></p>

<hr>

<h2>Example 1</h2>

<p>A standard deck has 52 cards.</p>

<p>You know the selected card is a face card.</p>

<p>There are 12 face cards.</p>

<p>Of those, 4 are Kings.</p>

<p><strong>P(King | Face Card) = 4/12 = 1/3</strong></p>

<hr>

<h2>Example 2</h2>

<p>A class has:</p>

<ul>

<li>12 students who play soccer</li>

<li>8 of those students also play basketball</li>

</ul>

<p>Find the probability that a student plays basketball given they already play soccer.</p>

<p><strong>P(Basketball | Soccer)=8/12=2/3</strong></p>

<hr>

<h2>Recognizing Conditional Probability</h2>

<p>Look for words like:</p>

<ul>

<li>Given</li>

<li>Already know</li>

<li>Assuming</li>

<li>Restricted to</li>

</ul>

<hr>

<h2>Real-Life Applications</h2>

<ul>

<li>Medical testing</li>

<li>Weather forecasting</li>

<li>Insurance</li>

<li>Machine learning</li>

<li>Sports analytics</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Conditional probability calculates the chance of an event after new information changes the sample space.</p>

`,

        questions: [

            {
                q: "Conditional probability means?",

                options: [
                    "The probability given another event has occurred",
                    "The probability of impossible events",
                    "The probability of independent events"
                ],

                answer: "The probability given another event has occurred",

                explanation: "Conditional probability uses additional information."
            },

            {
                q: "The symbol P(A | B) means?",

                options: [
                    "The probability of A given B",
                    "The probability of A and B",
                    "The probability of A or B"
                ],

                answer: "The probability of A given B",

                explanation: "The vertical bar means 'given.'"
            },

            {
                q: "The word that usually signals conditional probability is?",

                options: [
                    "Given",
                    "Or",
                    "And"
                ],

                answer: "Given",

                explanation: "'Given' indicates the sample space has changed."
            },

            {
                q: "If there are 20 students, 5 are left-handed, and you know a selected student is left-handed, what is the new sample space?",

                options: [
                    "5",
                    "20",
                    "15"
                ],

                answer: "5",

                explanation: "The sample space is limited to the given condition."
            },

            {
                q: "Conditional probability changes the?",

                options: [
                    "Sample space",
                    "Formula for addition",
                    "Number of events"
                ],

                answer: "Sample space",

                explanation: "The condition limits the possible outcomes."
            },

            {
                q: "Medical testing commonly uses?",

                options: [
                    "Conditional probability",
                    "Quadratic equations",
                    "Polynomial division"
                ],

                answer: "Conditional probability",

                explanation: "Doctors interpret test results using conditional probabilities."
            },

            {
                q: "Weather forecasts often use?",

                options: [
                    "Conditional probability",
                    "Linear equations",
                    "Sequences"
                ],

                answer: "Conditional probability",

                explanation: "Forecasts are updated as new information becomes available."
            },

            {
                q: "The denominator in P(A | B) is?",

                options: [
                    "P(B)",
                    "P(A)",
                    "P(A or B)"
                ],

                answer: "P(B)",

                explanation: "The probability is conditioned on event B."
            },

            {
                q: "Conditional probability is used when?",

                options: [
                    "New information is known",
                    "No information is available",
                    "The sample space never changes"
                ],

                answer: "New information is known",

                explanation: "The condition changes the possible outcomes."
            },

            {
                q: "Conditional probability is important because it?",

                options: [
                    "Updates probabilities using new information",
                    "Always equals 1",
                    "Only applies to dice"
                ],

                answer: "Updates probabilities using new information",

                explanation: "Additional information changes the likelihood of events."
            }

        ]

    }
    ,

    "algebra2-permutations": {
        title: "Permutations",
        subtitle: "Count arrangements where the order of objects matters.",

        body: `

<h2>Introduction</h2>

<p>A <strong>permutation</strong> is an arrangement of objects where <strong>order matters</strong>.</p>

<p>If changing the order creates a different arrangement, use permutations.</p>

<hr>

<h2>Examples</h2>

<p>ABC and BAC are different permutations because the order changed.</p>

<p>Choosing first, second, and third place in a race is a permutation.</p>

<hr>

<h2>Permutation Formula</h2>

<p><strong>nP<sub>r</sub> = n! / (n-r)!</strong></p>

<ul>

<li><strong>n</strong> = total number of objects</li>

<li><strong>r</strong> = number of objects selected</li>

</ul>

<hr>

<h2>Factorial Review</h2>

<p><strong>5! = 5 × 4 × 3 × 2 × 1 = 120</strong></p>

<p><strong>4! = 24</strong></p>

<p><strong>3! = 6</strong></p>

<p><strong>0! = 1</strong></p>

<hr>

<h2>Example 1</h2>

<p>How many ways can 3 students be chosen from 5 students to receive gold, silver, and bronze medals?</p>

<p>n = 5</p>

<p>r = 3</p>

<p>5P₃ = 5! / 2!</p>

<p>= 120 / 2</p>

<p>= <strong>60</strong></p>

<hr>

<h2>Example 2</h2>

<p>How many different 4-letter arrangements can be made from 6 different letters?</p>

<p>6P₄ = 6! / 2!</p>

<p>= 720 / 2</p>

<p>= <strong>360</strong></p>

<hr>

<h2>When to Use Permutations</h2>

<ul>

<li>Race results</li>

<li>Passwords</li>

<li>Seat assignments</li>

<li>Officer positions</li>

<li>Any situation where order matters</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Use permutations whenever the order of selected objects changes the outcome.</p>

`,

        questions: [

            {
                q: "A permutation is used when?",

                options: [
                    "Order matters",
                    "Order does not matter",
                    "Probability is zero"
                ],

                answer: "Order matters",

                explanation: "Permutations count arrangements where changing the order creates a different outcome."
            },

            {
                q: "The permutation formula is?",

                options: [
                    "n!/(n-r)!",
                    "n!/r!",
                    "n!/(r!(n-r)!)"
                ],

                answer: "n!/(n-r)!",

                explanation: "This is the permutation formula."
            },

            {
                q: "5! equals?",

                options: [
                    "120",
                    "60",
                    "24"
                ],

                answer: "120",

                explanation: "5×4×3×2×1=120."
            },

            {
                q: "0! equals?",

                options: [
                    "1",
                    "0",
                    "Undefined"
                ],

                answer: "1",

                explanation: "By definition, 0! = 1."
            },

            {
                q: "How many ways can first and second place be awarded among 5 runners?",

                options: [
                    "20",
                    "10",
                    "25"
                ],

                answer: "20",

                explanation: "5P₂ = 5×4 = 20."
            },

            {
                q: "Which situation uses permutations?",

                options: [
                    "Assigning gold, silver, and bronze medals",
                    "Choosing 3 committee members",
                    "Selecting pizza toppings"
                ],

                answer: "Assigning gold, silver, and bronze medals",

                explanation: "The order of the medals matters."
            },

            {
                q: "Passwords are usually counted using?",

                options: [
                    "Permutations",
                    "Combinations",
                    "Probability only"
                ],

                answer: "Permutations",

                explanation: "Changing the order creates a different password."
            },

            {
                q: "In nPᵣ, n represents?",

                options: [
                    "Total number of objects",
                    "Objects selected",
                    "Factorial"
                ],

                answer: "Total number of objects",

                explanation: "n is the total available."
            },

            {
                q: "In nPᵣ, r represents?",

                options: [
                    "Objects selected",
                    "Total objects",
                    "Common ratio"
                ],

                answer: "Objects selected",

                explanation: "r is the number chosen."
            },

            {
                q: "The key word that signals permutations is?",

                options: [
                    "Order",
                    "Average",
                    "Probability"
                ],

                answer: "Order",

                explanation: "If order matters, use permutations."
            }

        ]

    }
    ,

    "algebra2-combinations": {
        title: "Combinations",
        subtitle: "Count selections where the order of objects does not matter.",

        body: `

<h2>Introduction</h2>

<p>A <strong>combination</strong> is a selection of objects where <strong>order does not matter</strong>.</p>

<p>If changing the order does not create a different selection, use combinations.</p>

<hr>

<h2>Examples</h2>

<p>Selecting Alice, Bob, and Charlie for a committee is the same as selecting Charlie, Alice, and Bob.</p>

<p>The order does not matter.</p>

<hr>

<h2>Combination Formula</h2>

<p><strong>nC<sub>r</sub> = n! / (r!(n-r)!)</strong></p>

<ul>

<li><strong>n</strong> = total number of objects</li>

<li><strong>r</strong> = number of objects selected</li>

</ul>

<hr>

<h2>Factorial Review</h2>

<p><strong>5! = 120</strong></p>

<p><strong>4! = 24</strong></p>

<p><strong>3! = 6</strong></p>

<p><strong>0! = 1</strong></p>

<hr>

<h2>Example 1</h2>

<p>How many committees of 3 students can be chosen from 5 students?</p>

<p>n = 5</p>

<p>r = 3</p>

<p>5C₃ = 5! / (3!2!)</p>

<p>= 120 / (6×2)</p>

<p>= 120 / 12</p>

<p>= <strong>10</strong></p>

<hr>

<h2>Example 2</h2>

<p>How many groups of 2 people can be chosen from 6 people?</p>

<p>6C₂ = 6! / (2!4!)</p>

<p>= 720 / (2×24)</p>

<p>= 720 / 48</p>

<p>= <strong>15</strong></p>

<hr>

<h2>Permutations vs. Combinations</h2>

<table border="1" cellpadding="8">

<tr>
<th>Situation</th>
<th>Use</th>
</tr>

<tr>
<td>Race medals</td>
<td>Permutation</td>
</tr>

<tr>
<td>Committee members</td>
<td>Combination</td>
</tr>

<tr>
<td>Password</td>
<td>Permutation</td>
</tr>

<tr>
<td>Choosing pizza toppings</td>
<td>Combination</td>
</tr>

</table>

<hr>

<h2>Summary</h2>

<p>Use combinations whenever the order of selected objects does not change the outcome.</p>

`,

        questions: [

            {
                q: "A combination is used when?",

                options: [
                    "Order does not matter",
                    "Order matters",
                    "Probability equals zero"
                ],

                answer: "Order does not matter",

                explanation: "Combinations count selections where the order is unimportant."
            },

            {
                q: "The combination formula is?",

                options: [
                    "n!/(r!(n-r)!)",
                    "n!/(n-r)!",
                    "n!/r!"
                ],

                answer: "n!/(r!(n-r)!)",

                explanation: "This is the standard combination formula."
            },

            {
                q: "Which situation uses combinations?",

                options: [
                    "Choosing a committee",
                    "Awarding gold, silver, and bronze medals",
                    "Creating a password"
                ],

                answer: "Choosing a committee",

                explanation: "The order of committee members does not matter."
            },

            {
                q: "Which situation uses permutations?",

                options: [
                    "Race results",
                    "Choosing a committee",
                    "Selecting pizza toppings"
                ],

                answer: "Race results",

                explanation: "First, second, and third place are different positions."
            },

            {
                q: "How many committees of 2 students can be chosen from 4 students?",

                options: [
                    "6",
                    "12",
                    "8"
                ],

                answer: "6",

                explanation: "4C₂ = 4!/(2!2!) = 6."
            },

            {
                q: "Which keyword usually signals combinations?",

                options: [
                    "Choose",
                    "Arrange",
                    "Order"
                ],

                answer: "Choose",

                explanation: "Choosing groups usually means order does not matter."
            },

            {
                q: "If order matters, use?",

                options: [
                    "Permutations",
                    "Combinations",
                    "Probability"
                ],

                answer: "Permutations",

                explanation: "Order matters → permutations."
            },

            {
                q: "If order does not matter, use?",

                options: [
                    "Combinations",
                    "Permutations",
                    "Sequences"
                ],

                answer: "Combinations",

                explanation: "Order does not matter → combinations."
            },

            {
                q: "In nCᵣ, r represents?",

                options: [
                    "The number selected",
                    "The total number of objects",
                    "The common ratio"
                ],

                answer: "The number selected",

                explanation: "r is the number of objects chosen."
            },

            {
                q: "The biggest difference between permutations and combinations is?",

                options: [
                    "Whether order matters",
                    "The factorial formula",
                    "The number of objects"
                ],

                answer: "Whether order matters",

                explanation: "This is the key distinction students should remember."
            }

        ]

    }
    ,

    "algebra2-probability-review": {
        title: "Unit 8 Review",
        subtitle: "Review basic probability, independent and dependent events, conditional probability, permutations, and combinations.",

        body: `

<h2>Unit Review</h2>

<p>This review covers the major concepts from the Probability & Counting unit.</p>

<hr>

<h2>Key Concepts</h2>

<ul>

<li>Basic probability</li>

<li>Experimental vs. theoretical probability</li>

<li>Independent events</li>

<li>Dependent events</li>

<li>Conditional probability</li>

<li>Permutations</li>

<li>Combinations</li>

</ul>

<hr>

<h2>Important Facts</h2>

<ul>

<li>Probability is always between 0 and 1.</li>

<li>A probability of 0 means an event is impossible.</li>

<li>A probability of 1 means an event is certain.</li>

<li>Independent events do not affect each other.</li>

<li>Dependent events affect future outcomes.</li>

<li>Order matters for permutations.</li>

<li>Order does not matter for combinations.</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Confusing permutations with combinations.</li>

<li>Using multiplication when addition is needed.</li>

<li>Forgetting to reduce probabilities.</li>

<li>Ignoring whether events are independent or dependent.</li>

<li>Forgetting that conditional probability changes the sample space.</li>

</ul>

<hr>

<h2>Quick Review</h2>

<ul>

<li>Know when to add or multiply probabilities.</li>

<li>Recognize independent versus dependent events.</li>

<li>Determine whether order matters.</li>

<li>Use permutations when order matters.</li>

<li>Use combinations when order does not matter.</li>

</ul>

<hr>

<h2>Ready?</h2>

<p>If you understand these concepts, you're ready for the Probability & Counting Unit Test.</p>

`,

        questions: [

            {
                q: "Probability is always between?",
                options: [
                    "0 and 1",
                    "1 and 100",
                    "-1 and 1"
                ],
                answer: "0 and 1",
                explanation: "Every probability lies between 0 and 1 inclusive."
            },

            {
                q: "A probability of 0 means?",
                options: [
                    "Impossible",
                    "Certain",
                    "Likely"
                ],
                answer: "Impossible",
                explanation: "An impossible event has probability 0."
            },

            {
                q: "A probability of 1 means?",
                options: [
                    "Certain",
                    "Impossible",
                    "Unlikely"
                ],
                answer: "Certain",
                explanation: "A certain event always occurs."
            },

            {
                q: "Independent events are events that?",
                options: [
                    "Do not affect each other",
                    "Always happen together",
                    "Cannot happen"
                ],
                answer: "Do not affect each other",
                explanation: "The outcome of one event does not change the probability of the other."
            },

            {
                q: "Dependent events are events that?",
                options: [
                    "Affect each other",
                    "Never occur",
                    "Always have probability 1"
                ],
                answer: "Affect each other",
                explanation: "The first event changes the probability of the second."
            },

            {
                q: "Conditional probability means?",
                options: [
                    "The probability of an event given another event has occurred",
                    "The probability of impossible events",
                    "The probability of independent events"
                ],
                answer: "The probability of an event given another event has occurred",
                explanation: "Conditional probability changes the sample space."
            },

            {
                q: "Permutations are used when?",
                options: [
                    "Order matters",
                    "Order does not matter",
                    "There is only one object"
                ],
                answer: "Order matters",
                explanation: "Different arrangements count as different outcomes."
            },

            {
                q: "Combinations are used when?",
                options: [
                    "Order does not matter",
                    "Order matters",
                    "The numbers are negative"
                ],
                answer: "Order does not matter",
                explanation: "Only the selection matters."
            },

            {
                q: "Which is larger for the same numbers?",
                options: [
                    "Permutation",
                    "Combination",
                    "They are always equal"
                ],
                answer: "Permutation",
                explanation: "Permutations count more outcomes because order matters."
            },

            {
                q: "This unit prepares you for?",
                options: [
                    "Statistics",
                    "Quadratics",
                    "Functions"
                ],
                answer: "Statistics",
                explanation: "The next Algebra 2 unit begins with Mean, Median, and Mode."
            }

        ]

    }
    ,

    "algebra2-probability-unit-test": {
        title: "Unit 8 Test",
        subtitle: "Test basic probability, independent and dependent events, conditional probability, permutations, and combinations.",

        body: `

<h2>Unit Test</h2>

<p>This assessment covers the complete Probability & Counting unit.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Basic probability</li>

<li>Experimental and theoretical probability</li>

<li>Independent events</li>

<li>Dependent events</li>

<li>Conditional probability</li>

<li>Permutations</li>

<li>Combinations</li>

</ul>

<hr>

<h2>Goal</h2>

<p>A strong score means you are ready to begin Statistics.</p>

`,

        questions: [

            {
                q: "The probability of an impossible event is?",
                options: [
                    "0",
                    "1",
                    "0.5"
                ],
                answer: "0",
                explanation: "Impossible events have probability 0."
            },

            {
                q: "The probability of a certain event is?",
                options: [
                    "1",
                    "0",
                    "100"
                ],
                answer: "1",
                explanation: "Certain events always occur."
            },

            {
                q: "Probability can never be greater than?",
                options: [
                    "1",
                    "10",
                    "100"
                ],
                answer: "1",
                explanation: "Probabilities are always between 0 and 1."
            },

            {
                q: "Rolling a fair six-sided die, the probability of rolling a 4 is?",
                options: [
                    "1/6",
                    "1/4",
                    "1/3"
                ],
                answer: "1/6",
                explanation: "Each outcome is equally likely."
            },

            {
                q: "Rolling an even number on a fair die has probability?",
                options: [
                    "1/2",
                    "1/6",
                    "2/3"
                ],
                answer: "1/2",
                explanation: "There are three even numbers out of six."
            },

            {
                q: "Experimental probability is based on?",
                options: [
                    "Observed results",
                    "Mathematical formulas only",
                    "Guessing"
                ],
                answer: "Observed results",
                explanation: "Experimental probability comes from actual trials."
            },

            {
                q: "Theoretical probability is based on?",
                options: [
                    "Possible outcomes",
                    "Past experiments only",
                    "Opinion"
                ],
                answer: "Possible outcomes",
                explanation: "It assumes all outcomes are equally likely."
            },

            {
                q: "Independent events are events that?",
                options: [
                    "Do not affect each other",
                    "Always occur together",
                    "Never occur"
                ],
                answer: "Do not affect each other",
                explanation: "The outcome of one event does not change the other."
            },

            {
                q: "Dependent events are events that?",
                options: [
                    "Affect each other",
                    "Never occur",
                    "Always have equal probability"
                ],
                answer: "Affect each other",
                explanation: "One outcome changes the probability of the next."
            },

            {
                q: "Drawing two cards without replacement is?",
                options: [
                    "Dependent",
                    "Independent",
                    "Impossible"
                ],
                answer: "Dependent",
                explanation: "Removing the first card changes the probabilities."
            },

            {
                q: "Flipping a coin twice is an example of?",
                options: [
                    "Independent events",
                    "Dependent events",
                    "Conditional probability"
                ],
                answer: "Independent events",
                explanation: "One flip does not affect the other."
            },

            {
                q: "Conditional probability means?",
                options: [
                    "The probability of an event given another event has occurred",
                    "The probability of impossible events",
                    "The probability of independent events"
                ],
                answer: "The probability of an event given another event has occurred",
                explanation: "The sample space changes after the first event."
            },

            {
                q: "A permutation is used when?",
                options: [
                    "Order matters",
                    "Order does not matter",
                    "There is only one choice"
                ],
                answer: "Order matters",
                explanation: "Different arrangements count separately."
            },

            {
                q: "A combination is used when?",
                options: [
                    "Order does not matter",
                    "Order matters",
                    "There are no repetitions"
                ],
                answer: "Order does not matter",
                explanation: "Only the selected items matter."
            },

            {
                q: "Which situation uses permutations?",
                options: [
                    "A race with 1st, 2nd, and 3rd place",
                    "Choosing a committee",
                    "Picking pizza toppings"
                ],
                answer: "A race with 1st, 2nd, and 3rd place",
                explanation: "Finishing order matters."
            },

            {
                q: "Which situation uses combinations?",
                options: [
                    "Choosing three classmates for a committee",
                    "A race",
                    "Assigning lockers"
                ],
                answer: "Choosing three classmates for a committee",
                explanation: "The order of committee members does not matter."
            },

            {
                q: "Permutations generally produce?",
                options: [
                    "More outcomes than combinations",
                    "Fewer outcomes than combinations",
                    "The same number of outcomes"
                ],
                answer: "More outcomes than combinations",
                explanation: "Counting different orders increases the total."
            },

            {
                q: "A probability of 0.75 means?",
                options: [
                    "A 75% chance",
                    "A 7.5% chance",
                    "A guaranteed event"
                ],
                answer: "A 75% chance",
                explanation: "0.75 is equivalent to 75%."
            },

            {
                q: "Which probability is most likely?",
                options: [
                    "0.90",
                    "0.40",
                    "0.10"
                ],
                answer: "0.90",
                explanation: "The closer a probability is to 1, the more likely the event."
            },

            {
                q: "After completing this unit, the next Algebra 2 topic is?",
                options: [
                    "Statistics",
                    "Functions",
                    "Quadratics"
                ],
                answer: "Statistics",
                explanation: "The next unit begins with Mean, Median, and Mode."
            }

        ]

    },

    "algebra2-mean-median-mode": {
        title: "Mean, Median, and Mode",
        subtitle: "Measure the center of a data set using mean, median, and mode.",

        body: `

<h2>Introduction</h2>

<p>Statistics helps us understand and summarize data.</p>

<p>Three common measures of center are the <strong>mean</strong>, <strong>median</strong>, and <strong>mode</strong>.</p>

<hr>

<h2>Mean</h2>

<p>The <strong>mean</strong> is the average.</p>

<p><strong>Mean = (Sum of all values) ÷ (Number of values)</strong></p>

<p>Example:</p>

<p>4, 6, 8</p>

<p>Mean = (4 + 6 + 8) ÷ 3 = 18 ÷ 3 = <strong>6</strong></p>

<hr>

<h2>Median</h2>

<p>The <strong>median</strong> is the middle value after arranging the numbers from smallest to largest.</p>

<p>Example:</p>

<p>2, 5, 7, 9, 12</p>

<p>Median = <strong>7</strong></p>

<p>If there are an even number of values, average the two middle numbers.</p>

<p>Example:</p>

<p>3, 5, 8, 12</p>

<p>Median = (5 + 8) ÷ 2 = <strong>6.5</strong></p>

<hr>

<h2>Mode</h2>

<p>The <strong>mode</strong> is the value that appears most often.</p>

<p>Example:</p>

<p>2, 4, 4, 5, 6</p>

<p>Mode = <strong>4</strong></p>

<p>A data set may have:</p>

<ul>

<li>No mode</li>

<li>One mode</li>

<li>More than one mode</li>

</ul>

<hr>

<h2>When to Use Each Measure</h2>

<ul>

<li><strong>Mean</strong> — Best when there are no extreme values (outliers).</li>

<li><strong>Median</strong> — Best when there are outliers.</li>

<li><strong>Mode</strong> — Best for finding the most common value.</li>

</ul>

<hr>

<h2>Real-Life Applications</h2>

<ul>

<li>Test scores</li>

<li>House prices</li>

<li>Sports statistics</li>

<li>Business reports</li>

<li>Survey results</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Mean, median, and mode describe the center of a data set in different ways. Choosing the best measure depends on the type of data and whether outliers are present.</p>

`,

        questions: [

            {
                q: "The mean is also called the?",

                options: [
                    "Average",
                    "Middle value",
                    "Most common value"
                ],

                answer: "Average",

                explanation: "The mean is found by adding all values and dividing by the number of values."
            },

            {
                q: "Find the mean of 2, 4, 6.",

                options: [
                    "4",
                    "6",
                    "3"
                ],

                answer: "4",

                explanation: "(2+4+6) ÷ 3 = 4."
            },

            {
                q: "The median of 3, 5, 8, 10, 12 is?",

                options: [
                    "8",
                    "10",
                    "7"
                ],

                answer: "8",

                explanation: "The middle number is 8."
            },

            {
                q: "The median of 2, 4, 6, 8 is?",

                options: [
                    "5",
                    "4",
                    "6"
                ],

                answer: "5",

                explanation: "Average the two middle values: (4+6) ÷ 2 = 5."
            },

            {
                q: "The mode of 1, 2, 2, 3, 5 is?",

                options: [
                    "2",
                    "3",
                    "5"
                ],

                answer: "2",

                explanation: "2 appears more often than any other number."
            },

            {
                q: "Which measure is most affected by outliers?",

                options: [
                    "Mean",
                    "Median",
                    "Mode"
                ],

                answer: "Mean",

                explanation: "Very large or very small values can greatly change the mean."
            },

            {
                q: "Which measure is usually best when outliers are present?",

                options: [
                    "Median",
                    "Mean",
                    "Mode"
                ],

                answer: "Median",

                explanation: "The median is resistant to extreme values."
            },

            {
                q: "A data set can have more than one?",

                options: [
                    "Mode",
                    "Mean",
                    "Median"
                ],

                answer: "Mode",

                explanation: "A data set can be bimodal or multimodal."
            },

            {
                q: "Which measure identifies the most frequent value?",

                options: [
                    "Mode",
                    "Mean",
                    "Median"
                ],

                answer: "Mode",

                explanation: "The mode is the value that occurs most often."
            },

            {
                q: "Mean, median, and mode are all measures of?",

                options: [
                    "Center",
                    "Spread",
                    "Probability"
                ],

                answer: "Center",

                explanation: "They describe the central tendency of a data set."
            }

        ]

    }
    ,



    "algebra2-normal-distribution": {
        title: "Normal Distribution",
        subtitle: "Understand the bell curve and how data is distributed around the mean.",

        body: `

<h2>Introduction</h2>


<p>The <strong>normal distribution</strong> is one of the most important concepts in statistics.</p>

<p>It describes data that is clustered around the average and forms a symmetric, bell-shaped curve.</p>

<hr>

<h2>The Bell Curve</h2>

<p>In a normal distribution:</p>

<ul>

<li>The highest point is the <strong>mean</strong>.</li>

<li>The left and right sides are mirror images.</li>

<li>Most values are close to the mean.</li>

<li>Very large or very small values are less common.</li>

</ul>

<hr>

<h2>The 68-95-99.7 Rule</h2>

<p>For a normal distribution:</p>

<ul>

<li><strong>About 68%</strong> of the data lies within <strong>1 standard deviation</strong> of the mean.</li>

<li><strong>About 95%</strong> lies within <strong>2 standard deviations</strong>.</li>

<li><strong>About 99.7%</strong> lies within <strong>3 standard deviations</strong>.</li>

</ul>

<hr>

<h2>Example</h2>

<p>A class has an average test score of <strong>80</strong> with a standard deviation of <strong>5</strong>.</p>

<p>About 68% of students scored between:</p>

<p><strong>75 and 85</strong></p>

<p>About 95% scored between:</p>

<p><strong>70 and 90</strong></p>

<hr>

<h2>Real-Life Applications</h2>

<ul>

<li>Exam scores</li>

<li>Heights of people</li>

<li>IQ scores</li>

<li>Manufacturing measurements</li>

<li>Scientific research</li>

</ul>

<hr>

<h2>Important Note</h2>

<p>Not every data set follows a normal distribution.</p>

<p>Many real-world data sets are skewed or contain outliers.</p>

<hr>

<h2>Summary</h2>

<p>The normal distribution is a bell-shaped model that describes many natural data sets. It helps us understand how data is distributed around the mean.</p>

`,

        questions: [

            {
                q: "The normal distribution is commonly called the?",

                options: [
                    "Bell curve",
                    "Parabola",
                    "Circle"
                ],

                answer: "Bell curve",

                explanation: "Its graph has a bell-shaped appearance."
            },

            {
                q: "The center of a normal distribution is the?",

                options: [
                    "Mean",
                    "Mode only",
                    "Maximum value"
                ],

                answer: "Mean",

                explanation: "The mean is located at the center of the distribution."
            },

            {
                q: "The normal distribution is?",

                options: [
                    "Symmetric",
                    "Always increasing",
                    "Always decreasing"
                ],

                answer: "Symmetric",

                explanation: "The left and right sides are mirror images."
            },

            {
                q: "Approximately what percent of data lies within one standard deviation of the mean?",

                options: [
                    "68%",
                    "50%",
                    "95%"
                ],

                answer: "68%",

                explanation: "This is part of the 68-95-99.7 Rule."
            },

            {
                q: "Approximately what percent of data lies within two standard deviations?",

                options: [
                    "95%",
                    "68%",
                    "99.7%"
                ],

                answer: "95%",

                explanation: "About 95% of the data falls within two standard deviations."
            },

            {
                q: "Approximately what percent of data lies within three standard deviations?",

                options: [
                    "99.7%",
                    "95%",
                    "68%"
                ],

                answer: "99.7%",

                explanation: "Nearly all the data falls within three standard deviations."
            },

            {
                q: "Which of these often follows a normal distribution?",

                options: [
                    "Exam scores",
                    "Lottery numbers",
                    "Coin flips"
                ],

                answer: "Exam scores",

                explanation: "Many large sets of exam scores are approximately normally distributed."
            },

            {
                q: "Standard deviation measures?",

                options: [
                    "Spread",
                    "Center",
                    "Probability"
                ],

                answer: "Spread",

                explanation: "Standard deviation measures how far values are from the mean."
            },

            {
                q: "Most values in a normal distribution are?",

                options: [
                    "Near the mean",
                    "At the maximum",
                    "At the minimum"
                ],

                answer: "Near the mean",

                explanation: "The bell curve is tallest at the mean."
            },

            {
                q: "Do all real-world data sets follow a normal distribution?",

                options: [
                    "No",
                    "Yes",
                    "Always"
                ],

                answer: "No",

                explanation: "Some data sets are skewed or contain outliers."
            }

        ]

    },
    "algebra2-statistics-review": {
        title: "Unit 9 Review",
        subtitle: "Review mean, median, mode, range, data displays, correlation, line of best fit, and normal distribution.",

        body: `

<h2>Unit Review</h2>

<p>This review covers the major concepts from the Statistics unit.</p>

<hr>

<h2>Key Concepts</h2>

<ul>

<li>Mean</li>

<li>Median</li>

<li>Mode</li>

<li>Range</li>

<li>Interquartile Range (IQR)</li>

<li>Box-and-Whisker Plots</li>

<li>Histograms</li>

<li>Scatter Plots</li>

<li>Correlation</li>

<li>Line of Best Fit</li>

</ul>

<hr>

<h2>Important Facts</h2>

<ul>

<li>The mean is the arithmetic average.</li>

<li>The median is the middle value of an ordered data set.</li>

<li>The mode is the value that appears most often.</li>

<li>The range is the difference between the largest and smallest values.</li>

<li>The IQR measures the spread of the middle 50% of the data.</li>

<li>Scatter plots help identify relationships between variables.</li>

<li>Correlation describes the strength and direction of a relationship.</li>

<li>Correlation does not imply causation.</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Mixing up mean and median.</li>

<li>Forgetting to order data before finding the median.</li>

<li>Assuming correlation means one variable causes another.</li>

<li>Ignoring outliers when interpreting data.</li>

<li>Misreading box-and-whisker plots.</li>

</ul>

<hr>

<h2>Quick Review</h2>

<ul>

<li>Know when to use mean, median, and mode.</li>

<li>Interpret common statistical graphs.</li>

<li>Recognize positive, negative, and no correlation.</li>

<li>Understand the purpose of the line of best fit.</li>

</ul>

<hr>

<h2>Ready?</h2>

<p>If you understand these concepts, you're ready for the Statistics Unit Test.</p>

`,

        questions: [

            {
                q: "The mean is the?",
                options: [
                    "Average",
                    "Middle value",
                    "Most common value"
                ],
                answer: "Average",
                explanation: "Add all values and divide by the number of values."
            },

            {
                q: "The median is the?",
                options: [
                    "Middle value",
                    "Average",
                    "Highest value"
                ],
                answer: "Middle value",
                explanation: "The median is the center of ordered data."
            },

            {
                q: "The mode is the?",
                options: [
                    "Most frequent value",
                    "Middle value",
                    "Average"
                ],
                answer: "Most frequent value",
                explanation: "The mode occurs most often."
            },

            {
                q: "The range is found by?",
                options: [
                    "Highest minus lowest",
                    "Mean minus median",
                    "Median minus mode"
                ],
                answer: "Highest minus lowest",
                explanation: "Range measures the total spread."
            },

            {
                q: "The IQR measures?",
                options: [
                    "The middle 50% of the data",
                    "The entire data set",
                    "The average"
                ],
                answer: "The middle 50% of the data",
                explanation: "IQR = Q3 − Q1."
            },

            {
                q: "Scatter plots show?",
                options: [
                    "Relationships between two variables",
                    "Fractions",
                    "Angles"
                ],
                answer: "Relationships between two variables",
                explanation: "Scatter plots compare paired numerical data."
            },

            {
                q: "Positive correlation means?",
                options: [
                    "As one variable increases, the other tends to increase",
                    "As one increases, the other decreases",
                    "There is no relationship"
                ],
                answer: "As one variable increases, the other tends to increase",
                explanation: "Both variables generally move in the same direction."
            },

            {
                q: "Negative correlation means?",
                options: [
                    "As one variable increases, the other tends to decrease",
                    "Both variables increase together",
                    "There is no relationship"
                ],
                answer: "As one variable increases, the other tends to decrease",
                explanation: "The variables move in opposite directions."
            },

            {
                q: "Correlation does not imply?",
                options: [
                    "Causation",
                    "Association",
                    "A relationship"
                ],
                answer: "Causation",
                explanation: "Two variables may be related without one causing the other."
            },

            {
                q: "The final unit of Algebra 2 is?",
                options: [
                    "Statistics",
                    "Probability",
                    "Quadratics"
                ],
                answer: "Statistics",
                explanation: "Statistics is the final Algebra 2 unit."
            }

        ]

    }
    ,

    "algebra2-statistics-unit-test": {
        title: "Unit 9 Test",
        subtitle: "Test mean, median, mode, range, data displays, correlation, line of best fit, and normal distribution.",

        body: `

<h2>Unit Test</h2>

<p>This assessment covers the complete Statistics unit.</p>

<hr>

<h2>Topics Covered</h2>

<ul>
<li>Mean</li>
<li>Median</li>
<li>Mode</li>
<li>Range</li>
<li>Interquartile Range (IQR)</li>
<li>Box-and-whisker plots</li>
<li>Histograms</li>
<li>Scatter plots</li>
<li>Correlation</li>
<li>Line of best fit</li>
</ul>

<hr>

<h2>Goal</h2>

<p>A strong score means you have completed the Algebra 2 course.</p>

`,

        questions: [

            {
                q: "The mean of 4, 6, and 8 is?",
                options: ["6", "8", "18"],
                answer: "6",
                explanation: "Add the values: 4+6+8=18. Divide by 3 to get 6."
            },

            {
                q: "The median of 3, 7, 9 is?",
                options: ["7", "3", "9"],
                answer: "7",
                explanation: "The median is the middle value when the data is ordered."
            },

            {
                q: "The mode of 2, 4, 4, 6, 8 is?",
                options: ["4", "6", "8"],
                answer: "4",
                explanation: "The mode is the value that appears most often."
            },

            {
                q: "The range of 5, 9, 12, 20 is?",
                options: ["15", "20", "5"],
                answer: "15",
                explanation: "Range = highest value − lowest value = 20 − 5 = 15."
            },

            {
                q: "Before finding the median, data should be?",
                options: ["Put in order", "Multiplied", "Graphed only"],
                answer: "Put in order",
                explanation: "The median is based on the middle value of ordered data."
            },

            {
                q: "If a data set has two middle values, the median is found by?",
                options: ["Averaging the two middle values", "Choosing the larger value", "Choosing the smaller value"],
                answer: "Averaging the two middle values",
                explanation: "For an even number of data values, average the two middle values."
            },

            {
                q: "The interquartile range is found by?",
                options: ["Q3 − Q1", "Highest − lowest", "Mean − median"],
                answer: "Q3 − Q1",
                explanation: "IQR measures the spread of the middle 50% of the data."
            },

            {
                q: "A box-and-whisker plot shows?",
                options: ["The five-number summary", "Only the mean", "Only the mode"],
                answer: "The five-number summary",
                explanation: "Box plots display minimum, Q1, median, Q3, and maximum."
            },

            {
                q: "A histogram is used to display?",
                options: ["Frequency of data intervals", "Only ordered pairs", "Only exact solutions"],
                answer: "Frequency of data intervals",
                explanation: "Histograms group numerical data into intervals."
            },

            {
                q: "A scatter plot shows?",
                options: ["The relationship between two variables", "Only one number", "Only categorical data"],
                answer: "The relationship between two variables",
                explanation: "Scatter plots use paired data to show relationships."
            },

            {
                q: "Positive correlation means?",
                options: ["Both variables tend to increase together", "One increases while the other decreases", "There is no pattern"],
                answer: "Both variables tend to increase together",
                explanation: "Positive correlation means the variables move in the same direction."
            },

            {
                q: "Negative correlation means?",
                options: ["One variable increases while the other decreases", "Both variables increase together", "There is no relationship"],
                answer: "One variable increases while the other decreases",
                explanation: "Negative correlation means the variables move in opposite directions."
            },

            {
                q: "No correlation means?",
                options: ["There is no clear relationship", "The graph is always linear", "The variables are equal"],
                answer: "There is no clear relationship",
                explanation: "No correlation means the points do not show a clear pattern."
            },

            {
                q: "Correlation does not prove?",
                options: ["Causation", "Association", "A pattern"],
                answer: "Causation",
                explanation: "Two variables can be related without one causing the other."
            },

            {
                q: "A line of best fit is used to?",
                options: ["Model a trend in scatter plot data", "Find the mode", "Create a box plot"],
                answer: "Model a trend in scatter plot data",
                explanation: "A line of best fit summarizes the overall trend."
            },

            {
                q: "An outlier is?",
                options: ["A data value far from the rest", "The average value", "The middle value"],
                answer: "A data value far from the rest",
                explanation: "Outliers are unusually high or low values."
            },

            {
                q: "Which measure is most affected by outliers?",
                options: ["Mean", "Median", "Mode"],
                answer: "Mean",
                explanation: "The mean uses every value, so extreme values can change it a lot."
            },

            {
                q: "Which measure is often better when outliers exist?",
                options: ["Median", "Mean", "Range"],
                answer: "Median",
                explanation: "The median is less affected by extreme values."
            },

            {
                q: "Standard deviation describes?",
                options: ["How spread out data values are", "The middle value", "The most common value"],
                answer: "How spread out data values are",
                explanation: "Standard deviation measures variation from the mean."
            },

            {
                q: "Completing this unit means you have completed?",
                options: ["Algebra 2", "Geometry", "Only the first unit"],
                answer: "Algebra 2",
                explanation: "Statistics is the final Algebra 2 unit."
            }

        ]

    },
















};
