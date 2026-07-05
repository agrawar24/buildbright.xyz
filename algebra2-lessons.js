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










};
