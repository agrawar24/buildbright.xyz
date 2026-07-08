









const calculus1Lessons = {
    "calculus1-course-intro": {
        title: "Calculus I Course Introduction",
        subtitle: "See what you will learn in Calculus I.",

        body: `

<h2>Welcome to Calculus I</h2>

<p>Calculus I introduces the mathematics of change, motion, slopes, limits, derivatives, and integrals.</p>

<hr>

<h2>What You Will Learn</h2>

<ul>
<li>Limits and continuity</li>
<li>Derivatives</li>
<li>Rates of change</li>
<li>Tangent lines</li>
<li>Applications of derivatives</li>
<li>Antiderivatives</li>
<li>Definite integrals</li>
<li>Area under curves</li>
</ul>

<hr>

<h2>Goal</h2>

<p>By the end of Calculus I, you should understand how functions change and how calculus helps model real-world motion, growth, and accumulation.</p>

`,

        questions: [
            {
                q: "Calculus is mainly the study of?",
                options: ["Change", "Triangles only", "Counting"],
                answer: "Change",
                explanation: "Calculus studies how quantities change and accumulate."
            },
            {
                q: "A major idea in Calculus I is?",
                options: ["Limits", "Triangle congruence", "Long division only"],
                answer: "Limits",
                explanation: "Limits are one of the foundations of calculus."
            },
            {
                q: "Derivatives help measure?",
                options: ["Rate of change", "Only area", "Only probability"],
                answer: "Rate of change",
                explanation: "A derivative measures how fast something changes."
            },
            {
                q: "Integrals are connected to?",
                options: ["Accumulation and area", "Only factoring", "Only angles"],
                answer: "Accumulation and area",
                explanation: "Integrals measure accumulated quantities such as area."
            },
            {
                q: "Calculus I prepares students for?",
                options: ["Advanced math, science, and engineering", "Only arithmetic", "Only spelling"],
                answer: "Advanced math, science, and engineering",
                explanation: "Calculus is foundational for many advanced fields."
            }
        ]
    }
    ,

    "calculus1-what-is-calculus": {
        title: "What is Calculus?",
        subtitle: "Learn what calculus is and why it is one of the most important branches of mathematics.",

        body: `

<h2>What is Calculus?</h2>

<p>Calculus is the study of <strong>change</strong> and <strong>accumulation</strong>. It helps us answer questions such as:</p>

<ul>
<li>How fast is something moving?</li>
<li>How quickly is a population growing?</li>
<li>How much water has flowed into a tank?</li>
<li>What is the area under a curve?</li>
</ul>

<hr>

<h2>The Two Main Parts of Calculus</h2>

<h3>1. Differential Calculus</h3>

<p>Differential calculus studies rates of change using <strong>derivatives</strong>.</p>

<p>Examples include:</p>

<ul>
<li>Speed of a car</li>
<li>Slope of a curve</li>
<li>Growth rate of bacteria</li>
</ul>

<hr>

<h3>2. Integral Calculus</h3>

<p>Integral calculus studies accumulation using <strong>integrals</strong>.</p>

<p>Examples include:</p>

<ul>
<li>Area under a graph</li>
<li>Total distance traveled</li>
<li>Volume of a solid</li>
</ul>

<hr>

<h2>Real-World Applications</h2>

<ul>

<li>Physics</li>

<li>Engineering</li>

<li>Economics</li>

<li>Medicine</li>

<li>Artificial Intelligence</li>

<li>Computer Graphics</li>

<li>Machine Learning</li>

</ul>

<hr>

<h2>Coming Up Next</h2>

<p>Before learning limits, we'll review the function concepts that calculus builds upon.</p>

`,

        questions: [

            {
                q: "Calculus is primarily the study of?",
                options: [
                    "Change and accumulation",
                    "Only geometry",
                    "Only arithmetic"
                ],
                answer: "Change and accumulation",
                explanation: "Calculus focuses on how quantities change and accumulate."
            },

            {
                q: "Which branch of calculus studies rates of change?",
                options: [
                    "Differential Calculus",
                    "Integral Calculus",
                    "Statistics"
                ],
                answer: "Differential Calculus",
                explanation: "Differential calculus uses derivatives to study change."
            },

            {
                q: "Which branch of calculus studies accumulation?",
                options: [
                    "Integral Calculus",
                    "Differential Calculus",
                    "Algebra"
                ],
                answer: "Integral Calculus",
                explanation: "Integral calculus uses integrals to measure accumulated quantities."
            },

            {
                q: "A derivative measures?",
                options: [
                    "Rate of change",
                    "Area only",
                    "Volume only"
                ],
                answer: "Rate of change",
                explanation: "Derivatives describe how quickly a quantity changes."
            },

            {
                q: "An integral is commonly used to find?",
                options: [
                    "Area under a curve",
                    "Slope of a line only",
                    "Probability only"
                ],
                answer: "Area under a curve",
                explanation: "One of the most common applications of integrals is finding area."
            },

            {
                q: "Which field commonly uses calculus?",
                options: [
                    "Engineering",
                    "All of these",
                    "Physics"
                ],
                answer: "All of these",
                explanation: "Calculus is fundamental in engineering, physics, economics, computer science, and many other disciplines."
            }

        ]

    }
    ,

    "calculus1-review-of-functions": {
        title: "Review of Functions",
        subtitle: "Review the function concepts that are essential for success in calculus.",

        body: `

<h2>Why Review Functions?</h2>

<p>Calculus is built on functions. Before studying limits and derivatives, it's important to understand how functions behave and how they are represented.</p>

<hr>

<h2>What is a Function?</h2>

<p>A function is a rule that assigns exactly one output to every input.</p>

<p>Example:</p>

<p><strong>f(x) = 2x + 3</strong></p>

<p>If x = 4:</p>

<p><strong>f(4) = 2(4) + 3 = 11</strong></p>

<hr>

<h2>Domain and Range</h2>

<ul>
<li><strong>Domain</strong> — all possible input values.</li>
<li><strong>Range</strong> — all possible output values.</li>
</ul>

<hr>

<h2>Function Notation</h2>

<p>Examples:</p>

<ul>

<li>f(x)</li>

<li>g(x)</li>

<li>h(x)</li>

</ul>

<p>The notation tells us which function we're using.</p>

<hr>

<h2>Common Types of Functions</h2>

<ul>

<li>Linear</li>

<li>Quadratic</li>

<li>Polynomial</li>

<li>Rational</li>

<li>Radical</li>

<li>Exponential</li>

<li>Logarithmic</li>

<li>Trigonometric</li>

</ul>

<hr>

<h2>Transformations</h2>

<p>Functions can be transformed by:</p>

<ul>

<li>Shifting left or right</li>

<li>Shifting up or down</li>

<li>Stretching or compressing</li>

<li>Reflecting across an axis</li>

</ul>

<hr>

<h2>Why Functions Matter in Calculus</h2>

<p>Every limit, derivative, and integral begins with a function. Understanding functions makes every future topic easier.</p>

`,

        questions: [

            {
                q: "A function assigns?",
                options: [
                    "Exactly one output for each input",
                    "Many outputs for each input",
                    "No outputs"
                ],
                answer: "Exactly one output for each input",
                explanation: "Every input in a function corresponds to exactly one output."
            },

            {
                q: "The domain of a function is?",
                options: [
                    "All possible input values",
                    "All possible output values",
                    "The graph only"
                ],
                answer: "All possible input values",
                explanation: "The domain consists of every allowable x-value."
            },

            {
                q: "The range of a function is?",
                options: [
                    "All possible output values",
                    "All possible input values",
                    "The slope"
                ],
                answer: "All possible output values",
                explanation: "The range contains every possible y-value."
            },

            {
                q: "Which notation represents a function?",
                options: [
                    "f(x)",
                    "x + y",
                    "= 5"
                ],
                answer: "f(x)",
                explanation: "Function notation identifies a specific function."
            },

            {
                q: "Which of these is NOT a common function type?",
                options: [
                    "Triangle Function",
                    "Exponential Function",
                    "Polynomial Function"
                ],
                answer: "Triangle Function",
                explanation: "There is no standard function family called the Triangle Function."
            },

            {
                q: "Calculus is primarily built on understanding?",
                options: [
                    "Functions",
                    "Fractions only",
                    "Geometry only"
                ],
                answer: "Functions",
                explanation: "Functions are the foundation of limits, derivatives, and integrals."
            }

        ]

    }
    ,

    "calculus1-introduction-to-limits": {
        title: "Introduction to Limits",
        subtitle: "Learn what a limit is and why it is the foundation of calculus.",

        body: `

<h2>What is a Limit?</h2>

<p>A <strong>limit</strong> describes the value that a function approaches as the input approaches a certain number.</p>

<p>Instead of asking what the function equals at one point, calculus often asks what value the function is getting closer and closer to.</p>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<p><strong>f(x) = 2x + 1</strong></p>

<p>As x approaches 3:</p>

<ul>

<li>x = 2.9 → f(x) = 6.8</li>

<li>x = 2.99 → f(x) = 6.98</li>

<li>x = 2.999 → f(x) = 6.998</li>

</ul>

<p>The function approaches <strong>7</strong>.</p>

<p>We write:</p>

<p><strong>lim<sub>x→3</sub> (2x+1) = 7</strong></p>

<hr>

<h2>Limit Notation</h2>

<p>The notation</p>

<p><strong>lim<sub>x→a</sub> f(x)</strong></p>

<p>means:</p>

<p>"What value does the function approach as x approaches a?"</p>

<hr>

<h2>The Function Doesn't Have to Reach the Value</h2>

<p>A limit can exist even if the function is undefined at that point.</p>

<p>Calculus cares about what happens <strong>near</strong> the point—not necessarily at the point.</p>

<hr>

<h2>Why Limits Matter</h2>

<p>Limits are used to define:</p>

<ul>

<li>Derivatives</li>

<li>Instantaneous velocity</li>

<li>Tangent lines</li>

<li>Continuity</li>

<li>Integrals</li>

</ul>

<hr>

<h2>Real-World Example</h2>

<p>If a car is approaching a stop sign, we can study its speed as it approaches the sign instead of only looking at one exact instant.</p>

<p>This idea of "approaching" is exactly what limits describe.</p>

<hr>

<h2>Coming Up Next</h2>

<p>Next, we'll learn how to estimate limits by looking at graphs.</p>

`,

        questions: [

            {
                q: "A limit tells us?",
                options: [
                    "The value a function approaches",
                    "The largest value of a function",
                    "The slope only"
                ],
                answer: "The value a function approaches",
                explanation: "A limit describes the value the function gets closer and closer to."
            },

            {
                q: "The notation limₓ→a f(x) asks?",
                options: [
                    "What value the function approaches",
                    "What the derivative is",
                    "What the area is"
                ],
                answer: "What value the function approaches",
                explanation: "A limit studies the behavior near a point."
            },

            {
                q: "A limit can exist even if the function is undefined at that point.",
                options: [
                    "True",
                    "False"
                ],
                answer: "True",
                explanation: "Limits depend on nearby values, not necessarily the function's value at the point."
            },

            {
                q: "Limits are used to define?",
                options: [
                    "Derivatives",
                    "Only matrices",
                    "Only probability"
                ],
                answer: "Derivatives",
                explanation: "The derivative is defined using a limit."
            },

            {
                q: "Calculus mainly studies values that are?",
                options: [
                    "Approaching a point",
                    "Always equal",
                    "Always integers"
                ],
                answer: "Approaching a point",
                explanation: "Calculus focuses on behavior near a point."
            },

            {
                q: "Which topic comes immediately after learning what a limit is?",
                options: [
                    "Evaluating Limits Graphically",
                    "Integration",
                    "Probability"
                ],
                answer: "Evaluating Limits Graphically",
                explanation: "The next step is learning to estimate limits from graphs."
            }

        ]

    }
    ,

    "calculus1-evaluating-limits-graphically": {
        title: "Evaluating Limits Graphically",
        subtitle: "Learn how to determine limits by analyzing graphs.",

        body: `

<h2>Reading Limits from Graphs</h2>

<p>One of the easiest ways to estimate a limit is by looking at the graph of a function.</p>

<p>Instead of asking what the function equals at one point, ask:</p>

<p><strong>"What y-value is the graph approaching?"</strong></p>

<hr>

<h2>Example 1</h2>

<p>Suppose the graph gets closer and closer to <strong>y = 5</strong> as x approaches 2.</p>

<p>Then we write:</p>

<p><strong>lim<sub>x→2</sub> f(x) = 5</strong></p>

<p>It does not matter whether the point at x = 2 is open or closed if the graph approaches the same value from both sides.</p>

<hr>

<h2>Approaching from the Left</h2>

<p>The left-hand limit looks at values where x approaches from numbers less than the target value.</p>

<p>Example:</p>

<p>x = 1.8 → 1.9 → 1.99 → 2</p>

<hr>

<h2>Approaching from the Right</h2>

<p>The right-hand limit looks at values where x approaches from numbers greater than the target value.</p>

<p>Example:</p>

<p>x = 2.2 → 2.1 → 2.01 → 2</p>

<hr>

<h2>When Does a Limit Exist?</h2>

<p>A limit exists only if:</p>

<ul>

<li>The left-hand limit equals the right-hand limit.</li>

</ul>

<p>If both sides approach the same number, that number is the limit.</p>

<hr>

<h2>When Does a Limit NOT Exist?</h2>

<ul>

<li>The graph approaches different values from the left and right.</li>

<li>The graph jumps.</li>

<li>The function increases or decreases without bound near the point.</li>

</ul>

<hr>

<h2>Open Circles</h2>

<p>An open circle does <strong>not</strong> automatically mean the limit does not exist.</p>

<p>The limit depends only on what value the graph approaches.</p>

<hr>

<h2>Closed Dots</h2>

<p>A closed dot gives the actual function value.</p>

<p>The function value and the limit may be different.</p>

<hr>

<h2>Key Idea</h2>

<p>Always follow the graph toward the point from both directions.</p>

<p>If both sides approach the same y-value, that value is the limit.</p>

`,

        questions: [

            {
                q: "To evaluate a graphical limit, you should look for?",
                options: [
                    "The y-value the graph approaches",
                    "The highest point",
                    "The x-intercept"
                ],
                answer: "The y-value the graph approaches",
                explanation: "Limits describe the value the graph approaches."
            },

            {
                q: "A limit exists when?",
                options: [
                    "The left and right limits are equal",
                    "The graph has no holes",
                    "The function equals zero"
                ],
                answer: "The left and right limits are equal",
                explanation: "Both sides must approach the same value."
            },

            {
                q: "An open circle always means the limit does not exist.",
                options: [
                    "False",
                    "True"
                ],
                answer: "False",
                explanation: "Open circles affect the function value, not necessarily the limit."
            },

            {
                q: "A closed dot represents?",
                options: [
                    "The actual function value",
                    "The derivative",
                    "The slope only"
                ],
                answer: "The actual function value",
                explanation: "Closed dots indicate the value of the function."
            },

            {
                q: "If the left-hand limit is 3 and the right-hand limit is 5, the limit?",
                options: [
                    "Does not exist",
                    "Equals 4",
                    "Equals 5"
                ],
                answer: "Does not exist",
                explanation: "Both one-sided limits must be equal."
            },

            {
                q: "When reading a graph, you approach the point from?",
                options: [
                    "Both directions",
                    "Only the left",
                    "Only the right"
                ],
                answer: "Both directions",
                explanation: "Limits require checking behavior from both sides."
            }

        ]

    }

    ,

    "calculus1-evaluating-limits-numerically": {
        title: "Evaluating Limits Numerically",
        subtitle: "Use tables of values to estimate the limit of a function.",

        body: `

<h2>Evaluating Limits with Tables</h2>

<p>Another way to estimate a limit is by creating a table of values.</p>

<p>Instead of looking at the graph, we calculate function values very close to the point of interest.</p>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<p><strong>f(x)=x²</strong></p>

<p>We want to estimate:</p>

<p><strong>lim<sub>x→2</sub> x²</strong></p>

<table border="1" cellpadding="6">

<tr>

<th>x</th>

<th>f(x)</th>

</tr>

<tr>

<td>1.9</td>

<td>3.61</td>

</tr>

<tr>

<td>1.99</td>

<td>3.9601</td>

</tr>

<tr>

<td>1.999</td>

<td>3.996001</td>

</tr>

<tr>

<td>2.001</td>

<td>4.004001</td>

</tr>

<tr>

<td>2.01</td>

<td>4.0401</td>

</tr>

<tr>

<td>2.1</td>

<td>4.41</td>

</tr>

</table>

<p>The values approach <strong>4</strong>.</p>

<p>Therefore:</p>

<p><strong>lim<sub>x→2</sub> x² = 4</strong></p>

<hr>

<h2>Choosing Values</h2>

<p>When creating a table:</p>

<ul>

<li>Choose values slightly smaller than the target.</li>

<li>Choose values slightly larger than the target.</li>

<li>Use several decimal places to improve accuracy.</li>

</ul>

<hr>

<h2>One-Sided Behavior</h2>

<p>Sometimes the left side and right side behave differently.</p>

<p>Always compare both sides before deciding whether a limit exists.</p>

<hr>

<h2>Advantages of Tables</h2>

<ul>

<li>Easy to compute.</li>

<li>Useful when algebra is difficult.</li>

<li>Shows numerical evidence for a limit.</li>

</ul>

<hr>

<h2>Limitations</h2>

<ul>

<li>Tables estimate the limit.</li>

<li>They do not provide an exact proof.</li>

<li>Later lessons will show algebraic methods that produce exact answers.</li>

</ul>

<hr>

<h2>Coming Up Next</h2>

<p>Next, we'll learn how to evaluate limits algebraically using substitution and factoring.</p>

`,

        questions: [

            {
                q: "A numerical limit is estimated using?",
                options: [
                    "A table of values",
                    "A compass",
                    "A ruler"
                ],
                answer: "A table of values",
                explanation: "Tables allow us to estimate the value a function approaches."
            },

            {
                q: "When estimating a limit numerically, values should be chosen?",
                options: [
                    "On both sides of the target value",
                    "Only above the target value",
                    "Only below the target value"
                ],
                answer: "On both sides of the target value",
                explanation: "Checking both sides helps determine whether the limit exists."
            },

            {
                q: "The table provides?",
                options: [
                    "An estimate of the limit",
                    "The derivative",
                    "The integral"
                ],
                answer: "An estimate of the limit",
                explanation: "Tables provide numerical evidence, not a formal proof."
            },

            {
                q: "If values from both sides approach the same number, then?",
                options: [
                    "That number is the limit",
                    "The limit does not exist",
                    "The function is undefined"
                ],
                answer: "That number is the limit",
                explanation: "Matching left- and right-hand behavior indicates the limit."
            },

            {
                q: "Tables are most useful when?",
                options: [
                    "Estimating limits",
                    "Finding area exactly",
                    "Factoring polynomials"
                ],
                answer: "Estimating limits",
                explanation: "Tables are commonly used to estimate limits before using algebra."
            },

            {
                q: "The next method for evaluating limits is?",
                options: [
                    "Algebraic methods",
                    "Integration",
                    "Optimization"
                ],
                answer: "Algebraic methods",
                explanation: "After graphs and tables, we learn algebraic techniques."
            }

        ]

    }
    ,

    "calculus1-evaluating-limits-algebraically": {
        title: "Evaluating Limits Algebraically",
        subtitle: "Learn how to evaluate limits using algebraic techniques.",

        body: `

<h2>Evaluating Limits Algebraically</h2>

<p>Once we understand limits graphically and numerically, we can often evaluate them exactly using algebra.</p>

<hr>

<h2>Method 1: Direct Substitution</h2>

<p>If the function is continuous at the given value, simply substitute the x-value into the function.</p>

<p><strong>Example:</strong></p>

<p>Find:</p>

<p><strong>lim<sub>x→4</sub>(3x−5)</strong></p>

<p>Substitute x = 4:</p>

<p><strong>3(4)−5 = 12−5 = 7</strong></p>

<p>Therefore:</p>

<p><strong>lim<sub>x→4</sub>(3x−5)=7</strong></p>

<hr>

<h2>Method 2: Factoring</h2>

<p>Sometimes direct substitution produces an indeterminate form such as <strong>0/0</strong>.</p>

<p>Example:</p>

<p><strong>lim<sub>x→2</sub> (x²−4)/(x−2)</strong></p>

<p>Factor the numerator:</p>

<p><strong>x²−4=(x−2)(x+2)</strong></p>

<p>Cancel the common factor:</p>

<p><strong>(x+2)</strong></p>

<p>Now substitute x = 2:</p>

<p><strong>2+2=4</strong></p>

<hr>

<h2>Method 3: Rationalizing</h2>

<p>When radicals appear, multiply by the conjugate.</p>

<p>This removes the square root and often eliminates the indeterminate form.</p>

<hr>

<h2>Common Indeterminate Forms</h2>

<ul>

<li>0/0</li>

<li>∞/∞</li>

</ul>

<p>These do <strong>not</strong> tell us the answer.</p>

<p>They simply tell us that more algebra is needed.</p>

<hr>

<h2>Choosing the Correct Method</h2>

<ul>

<li>If substitution works, use it.</li>

<li>If you obtain 0/0, try factoring.</li>

<li>If radicals are present, try rationalizing.</li>

<li>If necessary, simplify before substituting.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Most limits in Calculus I begin by trying direct substitution first. If that fails, algebraic simplification usually leads to the answer.</p>

`,

        questions: [

            {
                q: "What is the first method you should try when evaluating a limit algebraically?",
                options: [
                    "Direct substitution",
                    "Factoring immediately",
                    "Graphing"
                ],
                answer: "Direct substitution",
                explanation: "Always attempt direct substitution first."
            },

            {
                q: "If direct substitution gives 0/0, you should?",
                options: [
                    "Simplify the expression",
                    "Stop because the limit does not exist",
                    "Guess the answer"
                ],
                answer: "Simplify the expression",
                explanation: "The indeterminate form 0/0 means additional algebra is required."
            },

            {
                q: "The expression x²−4 factors into?",
                options: [
                    "(x−2)(x+2)",
                    "(x−4)(x+1)",
                    "(x−2)²"
                ],
                answer: "(x−2)(x+2)",
                explanation: "This is the difference of two squares."
            },

            {
                q: "When radicals appear, a common technique is?",
                options: [
                    "Multiply by the conjugate",
                    "Differentiate immediately",
                    "Take the square root of both sides"
                ],
                answer: "Multiply by the conjugate",
                explanation: "Rationalizing removes radicals from the denominator or numerator."
            },

            {
                q: "The form 0/0 means?",
                options: [
                    "An indeterminate form",
                    "The limit equals zero",
                    "The limit does not exist"
                ],
                answer: "An indeterminate form",
                explanation: "0/0 requires additional algebra before evaluating the limit."
            },

            {
                q: "After simplifying a limit expression, what should you usually do next?",
                options: [
                    "Substitute the x-value again",
                    "Differentiate",
                    "Integrate"
                ],
                answer: "Substitute the x-value again",
                explanation: "Once simplified, direct substitution often gives the exact limit."
            }

        ]

    }
    ,

    "calculus1-one-sided-limits": {
        title: "One-Sided Limits",
        subtitle: "Learn how left-hand and right-hand limits determine whether a limit exists.",

        body: `

<h2>What are One-Sided Limits?</h2>

<p>Sometimes we want to know what happens when a function approaches a point from only one direction.</p>

<ul>

<li><strong>Left-Hand Limit</strong> → Approach from values less than the number.</li>

<li><strong>Right-Hand Limit</strong> → Approach from values greater than the number.</li>

</ul>

<hr>

<h2>Left-Hand Limit</h2>

<p>The notation:</p>

<p><strong>lim<sub>x→a⁻</sub> f(x)</strong></p>

<p>means we approach <strong>a</strong> from the left.</p>

<p>Example:</p>

<ul>

<li>x = 1.5</li>

<li>x = 1.9</li>

<li>x = 1.99</li>

<li>x → 2</li>

</ul>

<hr>

<h2>Right-Hand Limit</h2>

<p>The notation:</p>

<p><strong>lim<sub>x→a⁺</sub> f(x)</strong></p>

<p>means we approach <strong>a</strong> from the right.</p>

<p>Example:</p>

<ul>

<li>x = 2.5</li>

<li>x = 2.1</li>

<li>x = 2.01</li>

<li>x → 2</li>

</ul>

<hr>

<h2>When Does the Limit Exist?</h2>

<p>A limit exists only if:</p>

<ul>

<li>The left-hand limit equals the right-hand limit.</li>

</ul>

<p>If both sides approach the same number, then that number is the limit.</p>

<hr>

<h2>Example</h2>

<p>Suppose a graph approaches:</p>

<ul>

<li>5 from the left</li>

<li>5 from the right</li>

</ul>

<p>Then:</p>

<p><strong>lim<sub>x→a</sub>f(x)=5</strong></p>

<hr>

<h2>When Does the Limit Not Exist?</h2>

<p>If:</p>

<ul>

<li>Left-hand limit = 3</li>

<li>Right-hand limit = 8</li>

</ul>

<p>then the limit does <strong>not</strong> exist because the two sides are different.</p>

<hr>

<h2>Jump Discontinuities</h2>

<p>A jump discontinuity occurs when the graph "jumps" from one value to another.</p>

<p>These are common examples where limits do not exist.</p>

<hr>

<h2>Key Idea</h2>

<p>Always evaluate both one-sided limits first.</p>

<p>If they match, the limit exists.</p>

`,

        questions: [

            {
                q: "The notation x→a⁻ means?",
                options: [
                    "Approach from the left",
                    "Approach from the right",
                    "Move away from a"
                ],
                answer: "Approach from the left",
                explanation: "The minus sign indicates values less than the target."
            },

            {
                q: "The notation x→a⁺ means?",
                options: [
                    "Approach from the right",
                    "Approach from the left",
                    "Approach from above"
                ],
                answer: "Approach from the right",
                explanation: "The plus sign indicates values greater than the target."
            },

            {
                q: "A limit exists when?",
                options: [
                    "The left-hand and right-hand limits are equal",
                    "The graph has no holes",
                    "The function equals zero"
                ],
                answer: "The left-hand and right-hand limits are equal",
                explanation: "Both one-sided limits must agree."
            },

            {
                q: "If the left-hand limit is 4 and the right-hand limit is 6, the limit?",
                options: [
                    "Does not exist",
                    "Equals 5",
                    "Equals 6"
                ],
                answer: "Does not exist",
                explanation: "Different one-sided limits mean the overall limit does not exist."
            },

            {
                q: "A jump discontinuity usually causes?",
                options: [
                    "The limit to not exist",
                    "The derivative to be zero",
                    "The graph to become linear"
                ],
                answer: "The limit to not exist",
                explanation: "Jump discontinuities have unequal one-sided limits."
            },

            {
                q: "To determine whether a limit exists, you should first?",
                options: [
                    "Compare the left-hand and right-hand limits",
                    "Take the derivative",
                    "Find the area under the curve"
                ],
                answer: "Compare the left-hand and right-hand limits",
                explanation: "Matching one-sided limits determine whether the overall limit exists."
            }

        ]

    }
    ,

    "calculus1-infinite-limits": {
        title: "Infinite Limits",
        subtitle: "Learn how functions behave as they increase or decrease without bound.",

        body: `

<h2>What is an Infinite Limit?</h2>

<p>An <strong>infinite limit</strong> occurs when the values of a function grow larger and larger (or smaller and smaller) without bound as x approaches a particular value.</p>

<hr>

<h2>Positive Infinity</h2>

<p>If the function increases without bound, we write:</p>

<p><strong>lim<sub>x→a</sub> f(x) = ∞</strong></p>

<p>This means the function becomes larger and larger as x approaches <strong>a</strong>.</p>

<hr>

<h2>Negative Infinity</h2>

<p>If the function decreases without bound, we write:</p>

<p><strong>lim<sub>x→a</sub> f(x) = -∞</strong></p>

<p>This means the function becomes smaller and smaller without limit.</p>

<hr>

<h2>Vertical Asymptotes</h2>

<p>Infinite limits often occur near a <strong>vertical asymptote</strong>.</p>

<p>A vertical asymptote is a vertical line that the graph approaches but never touches.</p>

<p>Example:</p>

<p><strong>f(x)=1/(x−2)</strong></p>

<p>The graph has a vertical asymptote at:</p>

<p><strong>x = 2</strong></p>

<hr>

<h2>Approaching from Different Sides</h2>

<p>Sometimes the function behaves differently depending on the direction of approach.</p>

<ul>

<li>From the left, the function may approach −∞.</li>

<li>From the right, the function may approach +∞.</li>

</ul>

<p>Always examine both sides separately.</p>

<hr>

<h2>Important Note</h2>

<p>Infinity is <strong>not</strong> a real number.</p>

<p>It simply describes behavior that increases or decreases without bound.</p>

<hr>

<h2>Summary</h2>

<ul>

<li>Infinite limits describe unbounded behavior.</li>

<li>They commonly occur at vertical asymptotes.</li>

<li>Always check the left-hand and right-hand limits separately.</li>

</ul>

`,

        questions: [

            {
                q: "An infinite limit means the function?",
                options: [
                    "Increases or decreases without bound",
                    "Equals zero",
                    "Stops changing"
                ],
                answer: "Increases or decreases without bound",
                explanation: "Infinite limits describe values that grow without bound."
            },

            {
                q: "A vertical asymptote is?",
                options: [
                    "A vertical line the graph approaches",
                    "A horizontal line",
                    "A point on the graph"
                ],
                answer: "A vertical line the graph approaches",
                explanation: "The graph gets closer and closer to the vertical line."
            },

            {
                q: "The function 1/(x−2) has a vertical asymptote at?",
                options: [
                    "x = 2",
                    "x = 1",
                    "x = 0"
                ],
                answer: "x = 2",
                explanation: "The denominator equals zero when x = 2."
            },

            {
                q: "Infinity is?",
                options: [
                    "Not a real number",
                    "A whole number",
                    "Always equal to zero"
                ],
                answer: "Not a real number",
                explanation: "Infinity describes unbounded growth, not a numerical value."
            },

            {
                q: "Should you check both one-sided limits near a vertical asymptote?",
                options: [
                    "Yes",
                    "No",
                    "Only if the graph is linear"
                ],
                answer: "Yes",
                explanation: "The left and right sides may behave differently."
            },

            {
                q: "Infinite limits are commonly associated with?",
                options: [
                    "Vertical asymptotes",
                    "Horizontal lines only",
                    "Parabolas only"
                ],
                answer: "Vertical asymptotes",
                explanation: "Vertical asymptotes often produce infinite limits."
            }

        ]

    }
    ,

    "calculus1-limits-at-infinity": {
        title: "Limits at Infinity",
        subtitle: "Learn how functions behave as x becomes very large or very small.",

        body: `

<h2>What is a Limit at Infinity?</h2>

<p>A <strong>limit at infinity</strong> describes what happens to a function as x becomes extremely large or extremely small.</p>

<p>Instead of approaching a number like x = 2, we let x approach:</p>

<ul>

<li>Positive Infinity (∞)</li>

<li>Negative Infinity (-∞)</li>

</ul>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<p><strong>f(x)=1/x</strong></p>

<p>As x becomes larger and larger:</p>

<table border="1" cellpadding="6">

<tr>

<th>x</th>

<th>f(x)</th>

</tr>

<tr>

<td>10</td>

<td>0.1</td>

</tr>

<tr>

<td>100</td>

<td>0.01</td>

</tr>

<tr>

<td>1000</td>

<td>0.001</td>

</tr>

</table>

<p>The values get closer and closer to <strong>0</strong>.</p>

<p>Therefore:</p>

<p><strong>lim<sub>x→∞</sub> 1/x = 0</strong></p>

<hr>

<h2>Horizontal Asymptotes</h2>

<p>If a function approaches a constant value as x approaches positive or negative infinity, that value is called a <strong>horizontal asymptote</strong>.</p>

<p>Example:</p>

<p><strong>y = 0</strong></p>

<hr>

<h2>Positive and Negative Infinity</h2>

<p>Always check both directions.</p>

<ul>

<li>x → ∞</li>

<li>x → -∞</li>

</ul>

<p>The function may approach different values in each direction.</p>

<hr>

<h2>Infinite Limits vs. Limits at Infinity</h2>

<table border="1" cellpadding="6">

<tr>

<th>Infinite Limits</th>

<th>Limits at Infinity</th>

</tr>

<tr>

<td>x approaches a number</td>

<td>x approaches ±∞</td>

</tr>

<tr>

<td>Function approaches ±∞</td>

<td>Function approaches a finite value</td>

</tr>

<tr>

<td>Usually involves a vertical asymptote</td>

<td>Usually involves a horizontal asymptote</td>

</tr>

</table>

<hr>

<h2>Key Idea</h2>

<p>Infinite limits describe what happens near a specific x-value.</p>

<p>Limits at infinity describe what happens far away from the origin as x becomes extremely large or extremely small.</p>

`,

        questions: [

            {
                q: "A limit at infinity studies what happens when?",
                options: [
                    "x becomes very large or very small",
                    "y equals zero",
                    "The graph crosses the x-axis"
                ],
                answer: "x becomes very large or very small",
                explanation: "Limits at infinity examine the behavior of a function as x approaches positive or negative infinity."
            },

            {
                q: "The function 1/x approaches what value as x approaches positive infinity?",
                options: [
                    "0",
                    "1",
                    "Infinity"
                ],
                answer: "0",
                explanation: "As x increases, 1/x becomes smaller and approaches zero."
            },

            {
                q: "A horizontal asymptote is?",
                options: [
                    "A horizontal line the graph approaches",
                    "A vertical line",
                    "The x-axis only"
                ],
                answer: "A horizontal line the graph approaches",
                explanation: "Horizontal asymptotes describe end behavior."
            },

            {
                q: "Infinite limits are usually associated with?",
                options: [
                    "Vertical asymptotes",
                    "Horizontal asymptotes",
                    "Circles"
                ],
                answer: "Vertical asymptotes",
                explanation: "Infinite limits occur near vertical asymptotes."
            },

            {
                q: "Limits at infinity are usually associated with?",
                options: [
                    "Horizontal asymptotes",
                    "Vertical asymptotes",
                    "Parabolas"
                ],
                answer: "Horizontal asymptotes",
                explanation: "End behavior is often described by a horizontal asymptote."
            },

            {
                q: "The main difference between infinite limits and limits at infinity is?",
                options: [
                    "Infinite limits approach a number for x, while limits at infinity let x approach ±∞",
                    "There is no difference",
                    "Limits at infinity only apply to polynomials"
                ],
                answer: "Infinite limits approach a number for x, while limits at infinity let x approach ±∞",
                explanation: "Infinite limits study behavior near a specific x-value, while limits at infinity study end behavior."
            }

        ]

    }
    ,

    "calculus1-continuity": {
        title: "Continuity",
        subtitle: "Learn when a function is continuous and how to identify discontinuities.",

        body: `

<h2>What is Continuity?</h2>

<p>A function is <strong>continuous</strong> if its graph can be drawn without lifting your pencil from the paper.</p>

<p>In other words, the graph has no holes, jumps, or breaks.</p>

<hr>

<h2>The Three Conditions for Continuity</h2>

<p>A function is continuous at x = a if ALL three conditions are true:</p>

<ol>

<li><strong>f(a)</strong> exists.</li>

<li><strong>lim<sub>x→a</sub> f(x)</strong> exists.</li>

<li>The limit equals the function value.</li>

</ol>

<p>Symbolically:</p>

<p><strong>lim<sub>x→a</sub> f(x) = f(a)</strong></p>

<hr>

<h2>Example of a Continuous Function</h2>

<p>The function:</p>

<p><strong>f(x)=x²</strong></p>

<p>is continuous everywhere because it satisfies all three conditions at every point.</p>

<hr>

<h2>Removable Discontinuity</h2>

<p>A removable discontinuity occurs when there is a hole in the graph.</p>

<p>The limit exists, but the function value is either missing or different.</p>

<hr>

<h2>Jump Discontinuity</h2>

<p>A jump discontinuity occurs when the left-hand limit and right-hand limit are different.</p>

<p>The graph "jumps" from one value to another.</p>

<hr>

<h2>Infinite Discontinuity</h2>

<p>An infinite discontinuity occurs near a vertical asymptote where the function increases or decreases without bound.</p>

<hr>

<h2>Piecewise Functions</h2>

<p>Piecewise-defined functions often require checking continuity at the points where the formula changes.</p>

<p>Evaluate:</p>

<ul>

<li>The left-hand limit</li>

<li>The right-hand limit</li>

<li>The function value</li>

</ul>

<hr>

<h2>Why Continuity Matters</h2>

<p>Many important theorems in calculus require functions to be continuous.</p>

<p>Continuous functions also allow derivatives and integrals to behave predictably.</p>

<hr>

<h2>Summary</h2>

<ul>

<li>Continuous functions have no breaks.</li>

<li>All three continuity conditions must be satisfied.</li>

<li>Not every discontinuity is the same.</li>

<li>Limits help determine continuity.</li>

</ul>

`,

        questions: [

            {
                q: "A continuous graph can be drawn?",
                options: [
                    "Without lifting your pencil",
                    "Only with straight lines",
                    "Only using circles"
                ],
                answer: "Without lifting your pencil",
                explanation: "This is the common visual description of continuity."
            },

            {
                q: "How many conditions must be satisfied for continuity?",
                options: [
                    "Three",
                    "Two",
                    "One"
                ],
                answer: "Three",
                explanation: "Function exists, limit exists, and both are equal."
            },

            {
                q: "A removable discontinuity is usually?",
                options: [
                    "A hole in the graph",
                    "A vertical asymptote",
                    "A jump"
                ],
                answer: "A hole in the graph",
                explanation: "Removable discontinuities occur when only a point is missing or incorrect."
            },

            {
                q: "A jump discontinuity occurs when?",
                options: [
                    "The left-hand and right-hand limits are different",
                    "The function equals zero",
                    "The graph is curved"
                ],
                answer: "The left-hand and right-hand limits are different",
                explanation: "Different one-sided limits create a jump."
            },

            {
                q: "An infinite discontinuity usually occurs at?",
                options: [
                    "A vertical asymptote",
                    "A horizontal asymptote",
                    "The origin"
                ],
                answer: "A vertical asymptote",
                explanation: "Infinite discontinuities occur when function values grow without bound."
            },

            {
                q: "A function is continuous if?",
                options: [
                    "The limit equals the function value",
                    "The derivative is zero",
                    "The graph crosses the x-axis"
                ],
                answer: "The limit equals the function value",
                explanation: "This is the third and final condition for continuity."
            }

        ]

    }
    ,

    "calculus1-intermediate-value-theorem": {
        title: "Intermediate Value Theorem",
        subtitle: "Learn how continuous functions guarantee values between two points.",

        body: `

<h2>What is the Intermediate Value Theorem?</h2>

<p>The <strong>Intermediate Value Theorem (IVT)</strong> states that if a function is continuous on an interval, then it must take on every value between its starting and ending values.</p>

<hr>

<h2>The Theorem</h2>

<p>If a function <strong>f(x)</strong> is continuous on the interval <strong>[a,b]</strong>, and if <strong>N</strong> is any number between <strong>f(a)</strong> and <strong>f(b)</strong>, then there is at least one value <strong>c</strong> in the interval such that:</p>

<p><strong>f(c)=N</strong></p>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<ul>

<li>f(1)=2</li>

<li>f(5)=10</li>

</ul>

<p>If the function is continuous, then it must equal:</p>

<ul>

<li>3</li>

<li>4</li>

<li>5</li>

<li>6</li>

<li>7</li>

<li>8</li>

<li>9</li>

</ul>

<p>at least once somewhere between x = 1 and x = 5.</p>

<hr>

<h2>Why Does This Work?</h2>

<p>A continuous graph has no jumps or breaks.</p>

<p>To move from one value to another, it must pass through every value in between.</p>

<hr>

<h2>Finding Roots</h2>

<p>The Intermediate Value Theorem is often used to show that an equation has a solution.</p>

<p>If:</p>

<ul>

<li>f(a) is positive</li>

<li>f(b) is negative</li>

</ul>

<p>then the graph must cross the x-axis somewhere between a and b.</p>

<p>This means there is at least one root.</p>

<hr>

<h2>Important Note</h2>

<p>The theorem guarantees that a solution exists, but it does <strong>not</strong> tell us exactly where the solution is.</p>

<hr>

<h2>Requirements</h2>

<ul>

<li>The function must be continuous.</li>

<li>The desired value must lie between f(a) and f(b).</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Continuous functions pass through every intermediate value.</li>

<li>IVT guarantees existence—not location.</li>

<li>The theorem is commonly used to prove that roots exist.</li>

</ul>

`,

        questions: [

            {
                q: "The Intermediate Value Theorem applies only to?",
                options: [
                    "Continuous functions",
                    "Piecewise functions only",
                    "Discontinuous functions"
                ],
                answer: "Continuous functions",
                explanation: "Continuity is required for the theorem to hold."
            },

            {
                q: "The theorem guarantees?",
                options: [
                    "A value exists between two outputs",
                    "The exact location of the value",
                    "The derivative equals zero"
                ],
                answer: "A value exists between two outputs",
                explanation: "IVT guarantees existence but not the exact location."
            },

            {
                q: "If f(a)=3 and f(b)=9, a continuous function must also equal?",
                options: [
                    "6",
                    "12",
                    "-2"
                ],
                answer: "6",
                explanation: "6 lies between 3 and 9, so the function must take this value somewhere in the interval."
            },

            {
                q: "If a continuous function changes from positive to negative, it must?",
                options: [
                    "Cross the x-axis",
                    "Become horizontal",
                    "Have a maximum"
                ],
                answer: "Cross the x-axis",
                explanation: "A sign change guarantees at least one root by the Intermediate Value Theorem."
            },

            {
                q: "The Intermediate Value Theorem tells us the exact x-value of the solution.",
                options: [
                    "False",
                    "True"
                ],
                answer: "False",
                explanation: "The theorem guarantees existence, not the exact location."
            },

            {
                q: "Which condition is required before using the Intermediate Value Theorem?",
                options: [
                    "The function must be continuous",
                    "The function must be quadratic",
                    "The derivative must exist"
                ],
                answer: "The function must be continuous",
                explanation: "Continuity on the interval is the key requirement."
            }

        ]

    }
    ,

    "calculus1-intermediate-value-theorem": {
        title: "Intermediate Value Theorem",
        subtitle: "Learn how continuous functions guarantee values between two points.",

        body: `

<h2>What is the Intermediate Value Theorem?</h2>

<p>The <strong>Intermediate Value Theorem (IVT)</strong> states that if a function is continuous on an interval, then it must take on every value between its starting and ending values.</p>

<hr>

<h2>The Theorem</h2>

<p>If a function <strong>f(x)</strong> is continuous on the interval <strong>[a,b]</strong>, and if <strong>N</strong> is any number between <strong>f(a)</strong> and <strong>f(b)</strong>, then there is at least one value <strong>c</strong> in the interval such that:</p>

<p><strong>f(c)=N</strong></p>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<ul>

<li>f(1)=2</li>

<li>f(5)=10</li>

</ul>

<p>If the function is continuous, then it must equal:</p>

<ul>

<li>3</li>

<li>4</li>

<li>5</li>

<li>6</li>

<li>7</li>

<li>8</li>

<li>9</li>

</ul>

<p>at least once somewhere between x = 1 and x = 5.</p>

<hr>

<h2>Why Does This Work?</h2>

<p>A continuous graph has no jumps or breaks.</p>

<p>To move from one value to another, it must pass through every value in between.</p>

<hr>

<h2>Finding Roots</h2>

<p>The Intermediate Value Theorem is often used to show that an equation has a solution.</p>

<p>If:</p>

<ul>

<li>f(a) is positive</li>

<li>f(b) is negative</li>

</ul>

<p>then the graph must cross the x-axis somewhere between a and b.</p>

<p>This means there is at least one root.</p>

<hr>

<h2>Important Note</h2>

<p>The theorem guarantees that a solution exists, but it does <strong>not</strong> tell us exactly where the solution is.</p>

<hr>

<h2>Requirements</h2>

<ul>

<li>The function must be continuous.</li>

<li>The desired value must lie between f(a) and f(b).</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Continuous functions pass through every intermediate value.</li>

<li>IVT guarantees existence—not location.</li>

<li>The theorem is commonly used to prove that roots exist.</li>

</ul>

`,

        questions: [

            {
                q: "The Intermediate Value Theorem applies only to?",
                options: [
                    "Continuous functions",
                    "Piecewise functions only",
                    "Discontinuous functions"
                ],
                answer: "Continuous functions",
                explanation: "Continuity is required for the theorem to hold."
            },

            {
                q: "The theorem guarantees?",
                options: [
                    "A value exists between two outputs",
                    "The exact location of the value",
                    "The derivative equals zero"
                ],
                answer: "A value exists between two outputs",
                explanation: "IVT guarantees existence but not the exact location."
            },

            {
                q: "If f(a)=3 and f(b)=9, a continuous function must also equal?",
                options: [
                    "6",
                    "12",
                    "-2"
                ],
                answer: "6",
                explanation: "6 lies between 3 and 9, so the function must take this value somewhere in the interval."
            },

            {
                q: "If a continuous function changes from positive to negative, it must?",
                options: [
                    "Cross the x-axis",
                    "Become horizontal",
                    "Have a maximum"
                ],
                answer: "Cross the x-axis",
                explanation: "A sign change guarantees at least one root by the Intermediate Value Theorem."
            },

            {
                q: "The Intermediate Value Theorem tells us the exact x-value of the solution.",
                options: [
                    "False",
                    "True"
                ],
                answer: "False",
                explanation: "The theorem guarantees existence, not the exact location."
            },

            {
                q: "Which condition is required before using the Intermediate Value Theorem?",
                options: [
                    "The function must be continuous",
                    "The function must be quadratic",
                    "The derivative must exist"
                ],
                answer: "The function must be continuous",
                explanation: "Continuity on the interval is the key requirement."
            }

        ]

    }
    ,

    "calculus1-unit-1-test": {
        title: "Unit 1 Test",
        subtitle: "Test your understanding of limits, continuity, and the Intermediate Value Theorem.",

        body: `

<h2>Unit 1 Test</h2>

<p>This assessment covers all concepts from Unit 1.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Functions Review</li>

<li>Introduction to Limits</li>

<li>Graphical Limits</li>

<li>Numerical Limits</li>

<li>Algebraic Limits</li>

<li>One-Sided Limits</li>

<li>Infinite Limits</li>

<li>Limits at Infinity</li>

<li>Continuity</li>

<li>Intermediate Value Theorem</li>

</ul>

<hr>

<h2>Instructions</h2>

<p>Answer each question without using notes. A strong score means you are ready to begin derivatives.</p>

`,

        questions: [

            {
                q: "A limit describes?",
                options: [
                    "The value a function approaches",
                    "The derivative",
                    "The integral"
                ],
                answer: "The value a function approaches",
                explanation: "Limits describe the behavior of a function near a point."
            },

            {
                q: "The notation limₓ→a f(x) means?",
                options: [
                    "The value the function approaches as x approaches a",
                    "The slope at x = a",
                    "The area under the curve"
                ],
                answer: "The value the function approaches as x approaches a",
                explanation: "This is the definition of a limit."
            },

            {
                q: "Which method should you usually try first when evaluating a limit algebraically?",
                options: [
                    "Direct substitution",
                    "Factoring",
                    "Graphing"
                ],
                answer: "Direct substitution",
                explanation: "Always try direct substitution before simplifying."
            },

            {
                q: "If direct substitution gives 0/0, you should?",
                options: [
                    "Simplify the expression",
                    "Assume the limit is zero",
                    "Assume the limit does not exist"
                ],
                answer: "Simplify the expression",
                explanation: "0/0 is an indeterminate form that requires additional algebra."
            },

            {
                q: "For a limit to exist, the left-hand and right-hand limits must?",
                options: [
                    "Be equal",
                    "Be positive",
                    "Be zero"
                ],
                answer: "Be equal",
                explanation: "Matching one-sided limits determine whether the limit exists."
            },

            {
                q: "The notation x→a⁻ means?",
                options: [
                    "Approach from the left",
                    "Approach from the right",
                    "Approach from above"
                ],
                answer: "Approach from the left",
                explanation: "The minus sign indicates values less than a."
            },

            {
                q: "The notation x→a⁺ means?",
                options: [
                    "Approach from the right",
                    "Approach from the left",
                    "Approach from below"
                ],
                answer: "Approach from the right",
                explanation: "The plus sign indicates values greater than a."
            },

            {
                q: "Infinite limits are commonly associated with?",
                options: [
                    "Vertical asymptotes",
                    "Horizontal asymptotes",
                    "Parabolas"
                ],
                answer: "Vertical asymptotes",
                explanation: "Infinite limits occur near vertical asymptotes."
            },

            {
                q: "Limits at infinity describe?",
                options: [
                    "End behavior",
                    "Behavior near a specific point",
                    "Only polynomial functions"
                ],
                answer: "End behavior",
                explanation: "Limits at infinity examine what happens as x becomes extremely large or small."
            },

            {
                q: "A horizontal asymptote describes?",
                options: [
                    "The value a function approaches as x approaches ±∞",
                    "The slope of the graph",
                    "The derivative"
                ],
                answer: "The value a function approaches as x approaches ±∞",
                explanation: "Horizontal asymptotes describe end behavior."
            },

            {
                q: "A function is continuous if?",
                options: [
                    "The limit exists, the function exists, and they are equal",
                    "The derivative equals zero",
                    "The graph crosses the x-axis"
                ],
                answer: "The limit exists, the function exists, and they are equal",
                explanation: "All three continuity conditions must be satisfied."
            },

            {
                q: "A removable discontinuity is usually?",
                options: [
                    "A hole in the graph",
                    "A vertical asymptote",
                    "A jump"
                ],
                answer: "A hole in the graph",
                explanation: "The limit exists, but the function value is missing or different."
            },

            {
                q: "A jump discontinuity occurs when?",
                options: [
                    "The one-sided limits are different",
                    "The graph has a hole",
                    "The derivative is undefined"
                ],
                answer: "The one-sided limits are different",
                explanation: "Different left- and right-hand limits create a jump."
            },

            {
                q: "The Intermediate Value Theorem applies to?",
                options: [
                    "Continuous functions",
                    "Only polynomial functions",
                    "Discontinuous functions"
                ],
                answer: "Continuous functions",
                explanation: "Continuity is required before using the theorem."
            },

            {
                q: "The Intermediate Value Theorem guarantees?",
                options: [
                    "A solution exists",
                    "The exact solution",
                    "The derivative"
                ],
                answer: "A solution exists",
                explanation: "IVT guarantees existence but not the exact location."
            },

            {
                q: "Which topic is the foundation of all of Calculus I?",
                options: [
                    "Limits",
                    "Integrals",
                    "Matrices"
                ],
                answer: "Limits",
                explanation: "Limits provide the foundation for derivatives and integrals."
            },

            {
                q: "An open circle on a graph automatically means the limit does not exist.",
                options: [
                    "False",
                    "True"
                ],
                answer: "False",
                explanation: "Limits depend on approaching values, not whether the point is open or closed."
            },

            {
                q: "A table of values provides?",
                options: [
                    "An estimate of the limit",
                    "A proof of the derivative",
                    "The integral"
                ],
                answer: "An estimate of the limit",
                explanation: "Tables estimate the value a function approaches."
            },

            {
                q: "The graph of 1/x approaches which horizontal asymptote as x→∞?",
                options: [
                    "y = 0",
                    "x = 0",
                    "y = 1"
                ],
                answer: "y = 0",
                explanation: "As x becomes very large, 1/x approaches zero."
            },

            {
                q: "Completing this assessment means you are ready to begin?",
                options: [
                    "Derivatives",
                    "Integration",
                    "Differential Equations"
                ],
                answer: "Derivatives",
                explanation: "Unit 2 begins with derivatives."

            }

        ]

    }
    ,

    "calculus1-introduction-to-derivatives": {
        title: "Introduction to Derivatives",
        subtitle: "Learn how derivatives measure instantaneous rate of change.",

        body: `

<h2>What is a Derivative?</h2>

<p>A <strong>derivative</strong> measures how fast a function is changing at a specific point.</p>

<p>In simpler words, the derivative tells us the <strong>instantaneous rate of change</strong>.</p>

<hr>

<h2>Connection to Slope</h2>

<p>In Algebra, slope measures the rate of change of a straight line.</p>

<p>In Calculus, derivatives measure the slope of a curve at one exact point.</p>

<hr>

<h2>Secant Line vs. Tangent Line</h2>

<ul>

<li>A <strong>secant line</strong> passes through two points on a curve.</li>

<li>A <strong>tangent line</strong> touches the curve at one point and represents the instantaneous slope there.</li>

</ul>

<hr>

<h2>Example</h2>

<p>If a car is traveling, its average speed over 1 hour is like a secant slope.</p>

<p>Its speed at one exact instant is like a derivative.</p>

<hr>

<h2>Derivative Notation</h2>

<p>Common derivative notations include:</p>

<ul>

<li><strong>f'(x)</strong></li>

<li><strong>dy/dx</strong></li>

<li><strong>d/dx [f(x)]</strong></li>

</ul>

<hr>

<h2>Why Derivatives Matter</h2>

<ul>

<li>Find instantaneous velocity</li>

<li>Find slopes of curves</li>

<li>Analyze increasing and decreasing behavior</li>

<li>Find maximum and minimum values</li>

<li>Solve optimization problems</li>

</ul>

<hr>

<h2>Summary</h2>

<p>The derivative is one of the central ideas of calculus. It tells us how a function changes at an exact point.</p>

`,

        questions: [

            {
                q: "A derivative measures?",
                options: [
                    "Instantaneous rate of change",
                    "Area only",
                    "Volume only"
                ],
                answer: "Instantaneous rate of change",
                explanation: "A derivative tells how fast a function changes at one point."
            },

            {
                q: "A tangent line touches a curve at?",
                options: [
                    "One point",
                    "Two points",
                    "No points"
                ],
                answer: "One point",
                explanation: "A tangent line represents the local slope at a point."
            },

            {
                q: "A secant line passes through?",
                options: [
                    "Two points",
                    "One point",
                    "No points"
                ],
                answer: "Two points",
                explanation: "A secant line represents average rate of change between two points."
            },

            {
                q: "Which notation represents a derivative?",
                options: [
                    "f'(x)",
                    "f(x)+g(x)",
                    "x² only"
                ],
                answer: "f'(x)",
                explanation: "f'(x) is common derivative notation."
            },

            {
                q: "Derivatives are used to find?",
                options: [
                    "Slopes of curves",
                    "Only triangle area",
                    "Only probability"
                ],
                answer: "Slopes of curves",
                explanation: "Derivatives generalize slope from lines to curves."
            },

            {
                q: "Instantaneous velocity is an example of?",
                options: [
                    "A derivative",
                    "An integral",
                    "A histogram"
                ],
                answer: "A derivative",
                explanation: "Velocity at an exact instant is a rate of change."
            }

        ]

    }
    ,

    "calculus1-derivative-as-a-limit": {
        title: "Derivative as a Limit",
        subtitle: "Learn how limits are used to define the derivative of a function.",

        body: `

<h2>The Definition of a Derivative</h2>

<p>A derivative is defined using a limit.</p>

<p>Instead of finding the slope between two different points, we allow the two points to get closer and closer together until they become one point.</p>

<hr>

<h2>The Difference Quotient</h2>

<p>The expression</p>

<p><strong>(f(x+h)-f(x))/h</strong></p>

<p>is called the <strong>difference quotient</strong>.</p>

<p>It represents the average rate of change between two nearby points.</p>

<hr>

<h2>The Derivative Formula</h2>

<p>The derivative is defined by the limit:</p>

<p><strong>f'(x)=lim<sub>h→0</sub> (f(x+h)-f(x))/h</strong></p>

<p>As h approaches zero, the secant line becomes the tangent line.</p>

<hr>

<h2>Geometric Meaning</h2>

<ul>

<li>Secant line → Average rate of change</li>

<li>Tangent line → Instantaneous rate of change</li>

</ul>

<p>The derivative gives the slope of the tangent line.</p>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<p><strong>f(x)=x²</strong></p>

<p>The derivative can be found by applying the limit definition.</p>

<p>Later lessons will show a much faster method called the <strong>Power Rule</strong>.</p>

<hr>

<h2>Why Learn the Definition?</h2>

<p>Although most derivatives are found using shortcut rules, every derivative rule is derived from this limit definition.</p>

<hr>

<h2>Key Idea</h2>

<p>The derivative is simply the limit of the average rate of change as the two points become infinitely close together.</p>

`,

        questions: [

            {
                q: "The derivative is defined using?",
                options: [
                    "Limits",
                    "Integrals",
                    "Matrices"
                ],
                answer: "Limits",
                explanation: "The derivative is fundamentally defined as a limit."
            },

            {
                q: "The expression (f(x+h)-f(x))/h is called the?",
                options: [
                    "Difference Quotient",
                    "Power Rule",
                    "Chain Rule"
                ],
                answer: "Difference Quotient",
                explanation: "This expression represents the average rate of change."
            },

            {
                q: "As h approaches zero, the secant line becomes the?",
                options: [
                    "Tangent line",
                    "Horizontal line",
                    "Vertical line"
                ],
                answer: "Tangent line",
                explanation: "The derivative is the slope of the tangent line."
            },

            {
                q: "A secant line measures?",
                options: [
                    "Average rate of change",
                    "Instantaneous rate of change",
                    "Area under a curve"
                ],
                answer: "Average rate of change",
                explanation: "Secant lines connect two different points."
            },

            {
                q: "A tangent line measures?",
                options: [
                    "Instantaneous rate of change",
                    "Average rate of change",
                    "Volume"
                ],
                answer: "Instantaneous rate of change",
                explanation: "The tangent line touches the curve at one point."
            },

            {
                q: "Every derivative rule comes from?",
                options: [
                    "The limit definition of the derivative",
                    "The Quadratic Formula",
                    "The Pythagorean Theorem"
                ],
                answer: "The limit definition of the derivative",
                explanation: "All derivative rules are derived from the limit definition."
            }

        ]

    }
    ,

    "calculus1-power-rule": {
        title: "Power Rule",
        subtitle: "Learn the fastest way to find derivatives of polynomial functions.",

        body: `

<h2>The Power Rule</h2>

<p>The <strong>Power Rule</strong> is one of the most important rules in calculus.</p>

<p>Instead of using the limit definition every time, we can use a shortcut for functions of the form:</p>

<p><strong>f(x)=xⁿ</strong></p>

<hr>

<h2>The Rule</h2>

<p>To differentiate a power of x:</p>

<ol>

<li>Bring the exponent to the front as a coefficient.</li>

<li>Subtract 1 from the exponent.</li>

</ol>

<p>In words:</p>

<p><strong>xⁿ becomes nxⁿ⁻¹</strong></p>

<hr>

<h2>Examples</h2>

<p><strong>Example 1</strong></p>

<p>f(x)=x⁵</p>

<p>f'(x)=5x⁴</p>

<hr>

<p><strong>Example 2</strong></p>

<p>f(x)=x³</p>

<p>f'(x)=3x²</p>

<hr>

<p><strong>Example 3</strong></p>

<p>f(x)=x²</p>

<p>f'(x)=2x</p>

<hr>

<p><strong>Example 4</strong></p>

<p>f(x)=x</p>

<p>Since x=x¹</p>

<p>f'(x)=1</p>

<hr>

<h2>Negative Exponents</h2>

<p>The Power Rule also works for negative exponents.</p>

<p>Example:</p>

<p>f(x)=x⁻²</p>

<p>f'(x)=−2x⁻³</p>

<hr>

<h2>Fractional Exponents</h2>

<p>The rule also works for fractional exponents.</p>

<p>Example:</p>

<p>f(x)=x½</p>

<p>f'(x)=½x⁻½</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to subtract 1 from the exponent.</li>

<li>Leaving the exponent unchanged.</li>

<li>Applying the Power Rule to constants.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>The Power Rule allows us to differentiate polynomial functions quickly without using the limit definition.</p>

`,

        questions: [

            {
                q: "The derivative of x⁶ is?",
                options: [
                    "6x⁵",
                    "5x⁶",
                    "6x⁶"
                ],
                answer: "6x⁵",
                explanation: "Bring down the exponent and subtract 1 from the exponent."
            },

            {
                q: "The derivative of x³ is?",
                options: [
                    "3x²",
                    "2x³",
                    "x²"
                ],
                answer: "3x²",
                explanation: "Apply the Power Rule."
            },

            {
                q: "The derivative of x is?",
                options: [
                    "1",
                    "x",
                    "0"
                ],
                answer: "1",
                explanation: "Since x=x¹, its derivative is 1."
            },

            {
                q: "The Power Rule works for?",
                options: [
                    "Positive, negative, and fractional exponents",
                    "Only positive integers",
                    "Only quadratic functions"
                ],
                answer: "Positive, negative, and fractional exponents",
                explanation: "The Power Rule applies to all real exponents where the function is defined."
            },

            {
                q: "When using the Power Rule, you first?",
                options: [
                    "Move the exponent to the front",
                    "Add one to the exponent",
                    "Multiply by x"
                ],
                answer: "Move the exponent to the front",
                explanation: "The exponent becomes the coefficient."
            },

            {
                q: "The derivative of x⁻² is?",
                options: [
                    "−2x⁻³",
                    "−3x⁻²",
                    "2x⁻¹"
                ],
                answer: "−2x⁻³",
                explanation: "Apply the Power Rule exactly the same way."
            }

        ]

    }
    ,

    "calculus1-constant-rule": {
        title: "Constant Rule",
        subtitle: "Learn why the derivative of every constant is zero.",

        body: `

<h2>The Constant Rule</h2>

<p>A constant is any number that does not change.</p>

<p>Since constants never change, their rate of change is always zero.</p>

<hr>

<h2>The Rule</h2>

<p>If:</p>

<p><strong>f(x)=c</strong></p>

<p>where <strong>c</strong> is any constant, then:</p>

<p><strong>f'(x)=0</strong></p>

<hr>

<h2>Examples</h2>

<p><strong>Example 1</strong></p>

<p>f(x)=7</p>

<p>f'(x)=0</p>

<hr>

<p><strong>Example 2</strong></p>

<p>f(x)=−12</p>

<p>f'(x)=0</p>

<hr>

<p><strong>Example 3</strong></p>

<p>f(x)=π</p>

<p>f'(x)=0</p>

<hr>

<p><strong>Example 4</strong></p>

<p>f(x)=1000</p>

<p>f'(x)=0</p>

<hr>

<h2>Why?</h2>

<p>The derivative measures how quickly something changes.</p>

<p>A constant never changes, so its rate of change is zero.</p>

<hr>

<h2>Graph Interpretation</h2>

<p>The graph of a constant function is a horizontal line.</p>

<p>Every horizontal line has a slope of zero.</p>

<hr>

<h2>Combining with the Power Rule</h2>

<p>If a function contains both constants and powers of x, differentiate each part separately.</p>

<p>Example:</p>

<p><strong>f(x)=x⁴+5</strong></p>

<p><strong>f'(x)=4x³+0=4x³</strong></p>

<hr>

<h2>Summary</h2>

<ul>

<li>Constants never change.</li>

<li>The derivative of every constant is zero.</li>

<li>This rule is used constantly throughout calculus.</li>

</ul>

`,

        questions: [

            {
                q: "The derivative of 9 is?",
                options: [
                    "0",
                    "9",
                    "1"
                ],
                answer: "0",
                explanation: "Every constant has a derivative of zero."
            },

            {
                q: "The derivative of π is?",
                options: [
                    "0",
                    "π",
                    "1"
                ],
                answer: "0",
                explanation: "π is a constant."
            },

            {
                q: "The graph of a constant function is?",
                options: [
                    "A horizontal line",
                    "A vertical line",
                    "A parabola"
                ],
                answer: "A horizontal line",
                explanation: "Constant functions have slope zero everywhere."
            },

            {
                q: "The derivative measures?",
                options: [
                    "Rate of change",
                    "Area",
                    "Volume"
                ],
                answer: "Rate of change",
                explanation: "Derivatives measure how quickly a quantity changes."
            },

            {
                q: "The derivative of x⁵+8 is?",
                options: [
                    "5x⁴",
                    "5x⁴+8",
                    "x⁴"
                ],
                answer: "5x⁴",
                explanation: "The derivative of the constant 8 is zero."
            },

            {
                q: "Which statement is true?",
                options: [
                    "The derivative of every constant is zero.",
                    "Every constant has derivative one.",
                    "Constants cannot be differentiated."
                ],
                answer: "The derivative of every constant is zero.",
                explanation: "This is the Constant Rule."
            }

        ]

    }
    ,

    "calculus1-constant-multiple-rule": {
        title: "Constant Multiple Rule",
        subtitle: "Learn how constants affect derivatives.",

        body: `

<h2>The Constant Multiple Rule</h2>

<p>Sometimes a function has a constant multiplied by another function.</p>

<p>Instead of differentiating the constant, simply keep it and differentiate the rest.</p>

<hr>

<h2>The Rule</h2>

<p>If:</p>

<p><strong>f(x)=c·g(x)</strong></p>

<p>then:</p>

<p><strong>f'(x)=c·g'(x)</strong></p>

<p>The constant stays exactly the same.</p>

<hr>

<h2>Example 1</h2>

<p><strong>f(x)=5x³</strong></p>

<p>Using the Power Rule:</p>

<p><strong>f'(x)=5(3x²)=15x²</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>f(x)=−7x⁴</strong></p>

<p><strong>f'(x)=−28x³</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>f(x)=πx²</strong></p>

<p><strong>f'(x)=2πx</strong></p>

<hr>

<h2>Example 4</h2>

<p><strong>f(x)=½x⁶</strong></p>

<p><strong>f'(x)=3x⁵</strong></p>

<hr>

<h2>Combining Rules</h2>

<p>Most derivatives use both the Constant Multiple Rule and the Power Rule together.</p>

<p>Example:</p>

<p><strong>f(x)=9x⁸</strong></p>

<p><strong>f'(x)=72x⁷</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Changing the constant.</li>

<li>Forgetting to multiply by the exponent.</li>

<li>Dropping the constant entirely.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Leave the constant alone.</li>

<li>Differentiate only the variable part.</li>

<li>Multiply the final answer by the constant.</li>

</ul>

`,

        questions: [

            {
                q: "The derivative of 6x⁴ is?",
                options: [
                    "24x³",
                    "6x³",
                    "4x⁴"
                ],
                answer: "24x³",
                explanation: "Keep the constant 6 and apply the Power Rule."
            },

            {
                q: "The derivative of −3x⁵ is?",
                options: [
                    "−15x⁴",
                    "15x⁴",
                    "−3x⁴"
                ],
                answer: "−15x⁴",
                explanation: "Multiply −3 by 5."
            },

            {
                q: "The derivative of πx² is?",
                options: [
                    "2πx",
                    "πx",
                    "2x²"
                ],
                answer: "2πx",
                explanation: "π is treated as a constant."
            },

            {
                q: "When differentiating 8f(x), you should?",
                options: [
                    "Keep the 8 and differentiate f(x)",
                    "Differentiate the 8",
                    "Remove the 8"
                ],
                answer: "Keep the 8 and differentiate f(x)",
                explanation: "This is exactly the Constant Multiple Rule."
            },

            {
                q: "The derivative of ½x⁶ is?",
                options: [
                    "3x⁵",
                    "6x⁵",
                    "½x⁵"
                ],
                answer: "3x⁵",
                explanation: "½ × 6 = 3."
            },

            {
                q: "The Constant Multiple Rule is commonly used together with?",
                options: [
                    "The Power Rule",
                    "The Quadratic Formula",
                    "The Intermediate Value Theorem"
                ],
                answer: "The Power Rule",
                explanation: "Most polynomial derivatives use both rules together."
            }

        ]

    }
    ,

    "calculus1-sum-and-difference-rules": {
        title: "Sum and Difference Rules",
        subtitle: "Learn how to differentiate sums and differences of functions.",

        body: `

<h2>The Sum Rule</h2>

<p>The derivative of a sum is the sum of the derivatives.</p>

<p>If:</p>

<p><strong>f(x)=g(x)+h(x)</strong></p>

<p>Then:</p>

<p><strong>f'(x)=g'(x)+h'(x)</strong></p>

<hr>

<h2>The Difference Rule</h2>

<p>The derivative of a difference is the difference of the derivatives.</p>

<p>If:</p>

<p><strong>f(x)=g(x)-h(x)</strong></p>

<p>Then:</p>

<p><strong>f'(x)=g'(x)-h'(x)</strong></p>

<hr>

<h2>Example 1</h2>

<p><strong>f(x)=x³+x²</strong></p>

<p>Differentiate each term separately.</p>

<p><strong>f'(x)=3x²+2x</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>f(x)=5x⁴−2x²+7</strong></p>

<p>Differentiate each term.</p>

<p><strong>f'(x)=20x³−4x</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>f(x)=8x⁵+x−12</strong></p>

<p><strong>f'(x)=40x⁴+1</strong></p>

<hr>

<h2>Step-by-Step Strategy</h2>

<ol>

<li>Separate the expression into individual terms.</li>

<li>Differentiate each term using the rules you've learned.</li>

<li>Combine the results.</li>

</ol>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to differentiate every term.</li>

<li>Dropping negative signs.</li>

<li>Forgetting the derivative of a constant is zero.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Differentiate each term individually, then keep the addition and subtraction signs exactly the same.</p>

`,

        questions: [

            {
                q: "The derivative of a sum is?",
                options: [
                    "The sum of the derivatives",
                    "The product of the derivatives",
                    "Always zero"
                ],
                answer: "The sum of the derivatives",
                explanation: "This is the Sum Rule."
            },

            {
                q: "The derivative of x³+x² is?",
                options: [
                    "3x²+2x",
                    "5x²",
                    "3x²+x"
                ],
                answer: "3x²+2x",
                explanation: "Differentiate each term separately."
            },

            {
                q: "The derivative of 5x⁴−2x²+7 is?",
                options: [
                    "20x³−4x",
                    "20x³−4x+7",
                    "5x³−2x"
                ],
                answer: "20x³−4x",
                explanation: "The derivative of the constant is zero."
            },

            {
                q: "The derivative of 8x⁵+x−12 is?",
                options: [
                    "40x⁴+1",
                    "40x⁴+x",
                    "8x⁴+1"
                ],
                answer: "40x⁴+1",
                explanation: "The derivative of x is 1 and the constant disappears."
            },

            {
                q: "When differentiating sums, you should?",
                options: [
                    "Differentiate each term separately",
                    "Differentiate only the largest exponent",
                    "Combine all exponents first"
                ],
                answer: "Differentiate each term separately",
                explanation: "Each term is differentiated independently."
            },

            {
                q: "The derivative of a constant is?",
                options: [
                    "0",
                    "1",
                    "The constant itself"
                ],
                answer: "0",
                explanation: "This follows the Constant Rule."
            }

        ]

    }
    ,

    "calculus1-product-rule": {
        title: "Product Rule",
        subtitle: "Learn how to differentiate the product of two functions.",

        body: `

<h2>Why Do We Need the Product Rule?</h2>

<p>When two functions are multiplied together, you <strong>cannot</strong> simply differentiate each function separately and multiply the answers.</p>

<p>Instead, calculus uses the <strong>Product Rule</strong>.</p>

<hr>

<h2>The Product Rule</h2>

<p>If:</p>

<p><strong>f(x)=u(x)v(x)</strong></p>

<p>then:</p>

<p><strong>f'(x)=u'v+uv'</strong></p>

<p>Differentiate the first function while leaving the second unchanged, then add the first function multiplied by the derivative of the second.</p>

<hr>

<h2>Memory Trick</h2>

<p><strong>"Derivative of the first times the second, plus the first times the derivative of the second."</strong></p>

<hr>

<h2>Example 1</h2>

<p><strong>f(x)=x²(x+3)</strong></p>

<p>Let:</p>

<ul>

<li>u=x²</li>

<li>v=x+3</li>

</ul>

<p>Then:</p>

<ul>

<li>u'=2x</li>

<li>v'=1</li>

</ul>

<p>Apply the Product Rule:</p>

<p><strong>f'(x)=2x(x+3)+x²(1)</strong></p>

<p>Simplify:</p>

<p><strong>f'(x)=3x²+6x</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>f(x)=(3x−1)(x⁴)</strong></p>

<p>Differentiate each function separately:</p>

<p><strong>f'(x)=3(x⁴)+(3x−1)(4x³)</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Multiplying the derivatives together.</li>

<li>Differentiating only one factor.</li>

<li>Forgetting the plus sign in the formula.</li>

</ul>

<hr>

<h2>When Should You Use It?</h2>

<p>Use the Product Rule whenever two differentiable functions are multiplied together.</p>

<hr>

<h2>Summary</h2>

<ul>

<li>Identify the two factors.</li>

<li>Differentiate one factor at a time.</li>

<li>Use the formula:</li>

</ul>

<p><strong>u'v + uv'</strong></p>

`,

        questions: [

            {
                q: "The Product Rule is used when?",
                options: [
                    "Two functions are multiplied",
                    "Two functions are added",
                    "A constant appears"
                ],
                answer: "Two functions are multiplied",
                explanation: "The Product Rule applies only to products of functions."
            },

            {
                q: "The Product Rule formula is?",
                options: [
                    "u'v + uv'",
                    "u'v'",
                    "uv"
                ],
                answer: "u'v + uv'",
                explanation: "Differentiate the first, then the second, and add the results."
            },

            {
                q: "The derivative of x²(x+3) is?",
                options: [
                    "3x²+6x",
                    "2x²+3",
                    "x³+3"
                ],
                answer: "3x²+6x",
                explanation: "Apply the Product Rule and simplify."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Multiplying the derivatives together",
                    "Using the Power Rule",
                    "Keeping the constant"
                ],
                answer: "Multiplying the derivatives together",
                explanation: "The Product Rule requires adding two products, not multiplying derivatives."
            },

            {
                q: "The '+' sign in the Product Rule is?",
                options: [
                    "Always required",
                    "Optional",
                    "Used only for polynomials"
                ],
                answer: "Always required",
                explanation: "The Product Rule always has two terms joined by addition."
            },

            {
                q: "Before applying the Product Rule, you should first?",
                options: [
                    "Identify the two factors",
                    "Expand every expression",
                    "Find the integral"
                ],
                answer: "Identify the two factors",
                explanation: "Clearly identifying u and v makes applying the rule much easier."
            }

        ]

    }
    ,

    "calculus1-quotient-rule": {
        title: "Quotient Rule",
        subtitle: "Learn how to differentiate quotients of two functions.",

        body: `

<h2>Why Do We Need the Quotient Rule?</h2>

<p>When one function is divided by another, the Power Rule and Product Rule are usually not enough.</p>

<p>Instead, we use the <strong>Quotient Rule</strong>.</p>

<hr>

<h2>The Quotient Rule</h2>

<p>If:</p>

<p><strong>f(x)=u(x)/v(x)</strong></p>

<p>then:</p>

<p><strong>f'(x)= (u'v − uv') / v²</strong></p>

<p>Notice that the denominator is always squared.</p>

<hr>

<h2>Memory Trick</h2>

<p><strong>"Low d-high minus high d-low, over low squared."</strong></p>

<ul>

<li>Low = denominator</li>

<li>High = numerator</li>

</ul>

<hr>

<h2>Example 1</h2>

<p><strong>f(x)=x²/(x+1)</strong></p>

<p>Let:</p>

<ul>

<li>u=x²</li>

<li>v=x+1</li>

</ul>

<p>Then:</p>

<ul>

<li>u'=2x</li>

<li>v'=1</li>

</ul>

<p>Apply the Quotient Rule:</p>

<p><strong>f'(x)= [2x(x+1) − x²] / (x+1)²</strong></p>

<p>Simplify:</p>

<p><strong>f'(x)= (x²+2x)/(x+1)²</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>f(x)= (3x+2)/(x²)</strong></p>

<p>Differentiate the numerator and denominator separately before applying the rule.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to square the denominator.</li>

<li>Reversing the subtraction order.</li>

<li>Differentiating only the numerator.</li>

<li>Using the Product Rule instead of the Quotient Rule.</li>

</ul>

<hr>

<h2>When Should You Use It?</h2>

<p>Use the Quotient Rule whenever one differentiable function is divided by another.</p>

<hr>

<h2>Summary</h2>

<ul>

<li>Identify the numerator and denominator.</li>

<li>Differentiate each separately.</li>

<li>Apply:</li>

</ul>

<p><strong>(u'v − uv') / v²</strong></p>

`,

        questions: [

            {
                q: "The Quotient Rule is used when?",
                options: [
                    "One function is divided by another",
                    "Two functions are multiplied",
                    "Functions are added"
                ],
                answer: "One function is divided by another",
                explanation: "The Quotient Rule is specifically for quotients."
            },

            {
                q: "The denominator of the Quotient Rule is?",
                options: [
                    "Squared",
                    "Cubed",
                    "Left unchanged"
                ],
                answer: "Squared",
                explanation: "The denominator is always squared."
            },

            {
                q: "The Quotient Rule formula is?",
                options: [
                    "(u'v − uv') / v²",
                    "u'v + uv'",
                    "(u+v)'"
                ],
                answer: "(u'v − uv') / v²",
                explanation: "This is the standard Quotient Rule."
            },

            {
                q: "The memory trick 'Low d-high minus high d-low' refers to?",
                options: [
                    "The Quotient Rule",
                    "The Product Rule",
                    "The Chain Rule"
                ],
                answer: "The Quotient Rule",
                explanation: "This phrase helps remember the Quotient Rule."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Forgetting to square the denominator",
                    "Using the Power Rule correctly",
                    "Keeping the subtraction sign"
                ],
                answer: "Forgetting to square the denominator",
                explanation: "The denominator must always be squared."
            },

            {
                q: "Before using the Quotient Rule, you should first?",
                options: [
                    "Identify the numerator and denominator",
                    "Expand every expression",
                    "Take the integral"
                ],
                answer: "Identify the numerator and denominator",
                explanation: "Correctly identifying u and v makes applying the rule straightforward."
            }

        ]

    }
    ,

    "calculus1-chain-rule": {
        title: "Chain Rule",
        subtitle: "Learn how to differentiate composite functions using the Chain Rule.",

        body: `

<h2>Why Do We Need the Chain Rule?</h2>

<p>Sometimes one function is inside another function. These are called <strong>composite functions</strong>.</p>

<p>Examples include:</p>

<ul>

<li>(x²+1)⁵</li>

<li>√(3x+2)</li>

<li>sin(x³)</li>

</ul>

<p>To differentiate composite functions, we use the <strong>Chain Rule</strong>.</p>

<hr>

<h2>The Chain Rule</h2>

<p>If:</p>

<p><strong>y=f(g(x))</strong></p>

<p>then:</p>

<p><strong>dy/dx=f'(g(x))·g'(x)</strong></p>

<p>Differentiate the <strong>outside function</strong> first, then multiply by the derivative of the <strong>inside function</strong>.</p>

<hr>

<h2>Memory Trick</h2>

<p><strong>"Outside first, inside second."</strong></p>

<p>Or:</p>

<p><strong>"Differentiate the outside, leave the inside alone, then multiply by the derivative of the inside."</strong></p>

<hr>

<h2>Example 1</h2>

<p><strong>f(x)=(x²+1)⁵</strong></p>

<p>Outside function:</p>

<p><strong>( )⁵</strong></p>

<p>Inside function:</p>

<p><strong>x²+1</strong></p>

<p>Derivative:</p>

<p><strong>5(x²+1)⁴(2x)</strong></p>

<p>Simplified:</p>

<p><strong>10x(x²+1)⁴</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>f(x)=√(3x+2)</strong></p>

<p>Rewrite:</p>

<p><strong>(3x+2)<sup>1/2</sup></strong></p>

<p>Derivative:</p>

<p><strong>½(3x+2)<sup>-1/2</sup>(3)</strong></p>

<p>Simplified:</p>

<p><strong>3 / (2√(3x+2))</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>f(x)=(5x−4)⁷</strong></p>

<p>Derivative:</p>

<p><strong>7(5x−4)⁶(5)</strong></p>

<p>Simplified:</p>

<p><strong>35(5x−4)⁶</strong></p>

<hr>

<h2>How to Recognize a Composite Function</h2>

<p>If one function is written inside another, the Chain Rule is usually required.</p>

<p>Examples:</p>

<ul>

<li>( )²</li>

<li>√( )</li>

<li>sin( )</li>

<li>ln( )</li>

<li>e^( )</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to multiply by the derivative of the inside function.</li>

<li>Differentiating the inside first.</li>

<li>Confusing the Chain Rule with the Product Rule.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Identify the outside function.</li>

<li>Differentiate the outside.</li>

<li>Leave the inside unchanged.</li>

<li>Multiply by the derivative of the inside.</li>

</ul>

`,

        questions: [

            {
                q: "The Chain Rule is used for?",
                options: [
                    "Composite functions",
                    "Products only",
                    "Quotients only"
                ],
                answer: "Composite functions",
                explanation: "The Chain Rule differentiates one function inside another."
            },

            {
                q: "Which function is differentiated first?",
                options: [
                    "The outside function",
                    "The inside function",
                    "Both at the same time"
                ],
                answer: "The outside function",
                explanation: "Always differentiate the outside first."
            },

            {
                q: "After differentiating the outside function, you should?",
                options: [
                    "Multiply by the derivative of the inside",
                    "Integrate",
                    "Square the answer"
                ],
                answer: "Multiply by the derivative of the inside",
                explanation: "This is the defining step of the Chain Rule."
            },

            {
                q: "The derivative of (x²+1)⁵ is?",
                options: [
                    "10x(x²+1)⁴",
                    "5(x²+1)⁴",
                    "10x(x²+1)⁵"
                ],
                answer: "10x(x²+1)⁴",
                explanation: "Apply the Chain Rule: 5(x²+1)⁴·2x."
            },

            {
                q: "Which expression requires the Chain Rule?",
                options: [
                    "(3x+1)⁴",
                    "x⁴",
                    "5x²"
                ],
                answer: "(3x+1)⁴",
                explanation: "The exponent is applied to another function."
            },

            {
                q: "A common mistake when using the Chain Rule is?",
                options: [
                    "Forgetting the derivative of the inside function",
                    "Using the Power Rule correctly",
                    "Keeping the inside unchanged until the end"
                ],
                answer: "Forgetting the derivative of the inside function",
                explanation: "Many students forget the final multiplication by the derivative of the inside."

            }

        ]

    }
    ,

    "calculus1-higher-order-derivatives": {
        title: "Higher-Order Derivatives",
        subtitle: "Learn how to find second, third, and higher-order derivatives.",

        body: `

<h2>What are Higher-Order Derivatives?</h2>

<p>Once you've found the first derivative of a function, you can differentiate it again.</p>

<p>The result is called the <strong>second derivative</strong>.</p>

<p>You can continue differentiating to find the third derivative, fourth derivative, and beyond.</p>

<hr>

<h2>Derivative Notation</h2>

<p>The most common notations are:</p>

<ul>

<li><strong>First Derivative:</strong> f'(x)</li>

<li><strong>Second Derivative:</strong> f''(x)</li>

<li><strong>Third Derivative:</strong> f'''(x)</li>

<li><strong>Fourth Derivative:</strong> f⁽⁴⁾(x)</li>

</ul>

<hr>

<h2>Example 1</h2>

<p><strong>f(x)=x⁴</strong></p>

<p>First derivative:</p>

<p><strong>f'(x)=4x³</strong></p>

<p>Second derivative:</p>

<p><strong>f''(x)=12x²</strong></p>

<p>Third derivative:</p>

<p><strong>f'''(x)=24x</strong></p>

<p>Fourth derivative:</p>

<p><strong>f⁽⁴⁾(x)=24</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>f(x)=3x⁵−2x²+7</strong></p>

<p>First derivative:</p>

<p><strong>15x⁴−4x</strong></p>

<p>Second derivative:</p>

<p><strong>60x³−4</strong></p>

<hr>

<h2>Physical Meaning</h2>

<ul>

<li><strong>Position</strong></li>

<li><strong>Velocity = First Derivative</strong></li>

<li><strong>Acceleration = Second Derivative</strong></li>

<li><strong>Jerk = Third Derivative</strong></li>

</ul>

<p>Higher-order derivatives describe how rates of change continue to change.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Physics</li>

<li>Engineering</li>

<li>Economics</li>

<li>Machine Learning</li>

<li>Optimization</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Higher-order derivatives are found by repeatedly differentiating the previous derivative.</p>

`,

        questions: [

            {
                q: "The second derivative is found by?",
                options: [
                    "Differentiating the first derivative",
                    "Integrating the function",
                    "Squaring the derivative"
                ],
                answer: "Differentiating the first derivative",
                explanation: "The second derivative is simply the derivative of the first derivative."
            },

            {
                q: "The notation for the second derivative is?",
                options: [
                    "f''(x)",
                    "f(x)",
                    "∫f(x)"
                ],
                answer: "f''(x)",
                explanation: "Double prime denotes the second derivative."
            },

            {
                q: "If position is the original function, the second derivative represents?",
                options: [
                    "Acceleration",
                    "Velocity",
                    "Distance"
                ],
                answer: "Acceleration",
                explanation: "Acceleration is the derivative of velocity."
            },

            {
                q: "The derivative of x⁴ is?",
                options: [
                    "4x³",
                    "x³",
                    "4x⁴"
                ],
                answer: "4x³",
                explanation: "Apply the Power Rule."
            },

            {
                q: "The second derivative of x⁴ is?",
                options: [
                    "12x²",
                    "16x²",
                    "4x²"
                ],
                answer: "12x²",
                explanation: "Differentiate 4x³ to obtain 12x²."
            },

            {
                q: "Higher-order derivatives are found by?",
                options: [
                    "Repeated differentiation",
                    "Repeated integration",
                    "Repeated factoring"
                ],
                answer: "Repeated differentiation",
                explanation: "Each higher-order derivative is obtained by differentiating the previous derivative."
            }

        ]

    }
    ,

    "calculus1-implicit-differentiation": {
        title: "Implicit Differentiation",
        subtitle: "Learn how to differentiate equations when y is not isolated.",

        body: `

<h2>What is Implicit Differentiation?</h2>

<p>Until now, we've differentiated functions where <strong>y</strong> was already written in terms of <strong>x</strong>.</p>

<p>Example:</p>

<p><strong>y=x²+3x</strong></p>

<p>Sometimes, however, x and y are mixed together in the same equation.</p>

<p>Example:</p>

<p><strong>x²+y²=25</strong></p>

<p>Instead of solving for y first, we differentiate both sides of the equation with respect to x.</p>

<hr>

<h2>The Key Rule</h2>

<p>Whenever you differentiate a term containing <strong>y</strong>, you must multiply by:</p>

<p><strong>dy/dx</strong></p>

<p>This is because y is itself a function of x.</p>

<hr>

<h2>Example 1</h2>

<p><strong>x²+y²=25</strong></p>

<p>Differentiate both sides:</p>

<p><strong>2x + 2y(dy/dx) = 0</strong></p>

<p>Solve for dy/dx:</p>

<p><strong>dy/dx = -x/y</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>xy=12</strong></p>

<p>Use the Product Rule:</p>

<p><strong>x(dy/dx)+y=0</strong></p>

<p>Solve:</p>

<p><strong>dy/dx = -y/x</strong></p>

<hr>

<h2>When Should You Use Implicit Differentiation?</h2>

<ul>

<li>Circles</li>

<li>Ellipses</li>

<li>Relations</li>

<li>Equations where y is not isolated</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to multiply by <strong>dy/dx</strong>.</li>

<li>Forgetting to use the Product Rule when needed.</li>

<li>Trying to solve for y before differentiating.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Differentiate every term with respect to x.</li>

<li>Whenever y is differentiated, include <strong>dy/dx</strong>.</li>

<li>Solve the resulting equation for <strong>dy/dx</strong>.</li>

</ul>

`,

        questions: [

            {
                q: "Implicit differentiation is used when?",
                options: [
                    "y is not isolated",
                    "Only polynomials are given",
                    "There are no variables"
                ],
                answer: "y is not isolated",
                explanation: "Implicit differentiation is used when x and y appear together in an equation."
            },

            {
                q: "When differentiating y², you get?",
                options: [
                    "2y(dy/dx)",
                    "2y",
                    "y²"
                ],
                answer: "2y(dy/dx)",
                explanation: "Because y depends on x, the Chain Rule introduces dy/dx."
            },

            {
                q: "The derivative of x²+y²=25 is?",
                options: [
                    "2x + 2y(dy/dx)=0",
                    "2x + 2y = 25",
                    "x+y=25"
                ],
                answer: "2x + 2y(dy/dx)=0",
                explanation: "Differentiate each term with respect to x."
            },

            {
                q: "Implicit differentiation often requires which rule when variables are multiplied together?",
                options: [
                    "Product Rule",
                    "Power Rule",
                    "Constant Rule"
                ],
                answer: "Product Rule",
                explanation: "Expressions like xy require the Product Rule."
            },

            {
                q: "After differentiating implicitly, your final goal is usually to solve for?",
                options: [
                    "dy/dx",
                    "x",
                    "y²"
                ],
                answer: "dy/dx",
                explanation: "Implicit differentiation finds the derivative dy/dx."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Forgetting the factor dy/dx",
                    "Using the Power Rule",
                    "Differentiating constants as zero"
                ],
                answer: "Forgetting the factor dy/dx",
                explanation: "Every derivative involving y must include dy/dx."
            }

        ]

    }
    ,

    "calculus1-derivatives-of-trigonometric-functions": {
        title: "Derivatives of Trigonometric Functions",
        subtitle: "Learn the derivative formulas for the six trigonometric functions.",

        body: `

<h2>Why Learn Trigonometric Derivatives?</h2>

<p>Trigonometric functions appear throughout mathematics, physics, engineering, and many real-world applications.</p>

<p>Fortunately, each trigonometric function has a standard derivative formula.</p>

<hr>

<h2>The Six Basic Derivatives</h2>

<table border="1" cellpadding="6">

<tr>
<th>Function</th>
<th>Derivative</th>
</tr>

<tr>
<td>sin(x)</td>
<td>cos(x)</td>
</tr>

<tr>
<td>cos(x)</td>
<td>-sin(x)</td>
</tr>

<tr>
<td>tan(x)</td>
<td>sec²(x)</td>
</tr>

<tr>
<td>cot(x)</td>
<td>-csc²(x)</td>
</tr>

<tr>
<td>sec(x)</td>
<td>sec(x)tan(x)</td>
</tr>

<tr>
<td>csc(x)</td>
<td>-csc(x)cot(x)</td>
</tr>

</table>

<hr>

<h2>Example 1</h2>

<p><strong>f(x)=sin(x)</strong></p>

<p><strong>f'(x)=cos(x)</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>f(x)=cos(x)</strong></p>

<p><strong>f'(x)=-sin(x)</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>f(x)=5sin(x)</strong></p>

<p>Apply the Constant Multiple Rule:</p>

<p><strong>f'(x)=5cos(x)</strong></p>

<hr>

<h2>Example 4</h2>

<p><strong>f(x)=3x²+4cos(x)</strong></p>

<p>Differentiate each term separately:</p>

<p><strong>f'(x)=6x-4sin(x)</strong></p>

<hr>

<h2>Using the Chain Rule</h2>

<p>If the angle is not simply x, use the Chain Rule.</p>

<p>Example:</p>

<p><strong>f(x)=sin(3x)</strong></p>

<p><strong>f'(x)=3cos(3x)</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting the negative sign for the derivative of cosine.</li>

<li>Confusing the derivatives of tangent and secant.</li>

<li>Forgetting to apply the Chain Rule when needed.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Memorize the six trigonometric derivative formulas.</li>

<li>Apply previous derivative rules when constants or powers are present.</li>

<li>Use the Chain Rule whenever the angle is more than just x.</li>

</ul>

`,

        questions: [

            {
                q: "The derivative of sin(x) is?",
                options: [
                    "cos(x)",
                    "-cos(x)",
                    "sin(x)"
                ],
                answer: "cos(x)",
                explanation: "The derivative of sine is cosine."
            },

            {
                q: "The derivative of cos(x) is?",
                options: [
                    "-sin(x)",
                    "sin(x)",
                    "cos(x)"
                ],
                answer: "-sin(x)",
                explanation: "Remember the negative sign."
            },

            {
                q: "The derivative of tan(x) is?",
                options: [
                    "sec²(x)",
                    "sec(x)",
                    "cos²(x)"
                ],
                answer: "sec²(x)",
                explanation: "This is one of the fundamental trigonometric derivative formulas."
            },

            {
                q: "The derivative of 5sin(x) is?",
                options: [
                    "5cos(x)",
                    "cos(x)",
                    "5sin(x)"
                ],
                answer: "5cos(x)",
                explanation: "Apply the Constant Multiple Rule."
            },

            {
                q: "The derivative of sin(3x) is?",
                options: [
                    "3cos(3x)",
                    "cos(3x)",
                    "3sin(3x)"
                ],
                answer: "3cos(3x)",
                explanation: "Apply the Chain Rule by multiplying by the derivative of 3x."
            },

            {
                q: "Which derivative contains a negative sign?",
                options: [
                    "d/dx[cos(x)]",
                    "d/dx[sin(x)]",
                    "d/dx[tan(x)]"
                ],
                answer: "d/dx[cos(x)]",
                explanation: "The derivative of cosine is negative sine."
            }

        ]

    }
    ,

    "calculus1-derivatives-of-exponential-functions": {
        title: "Derivatives of Exponential Functions",
        subtitle: "Learn how to differentiate exponential functions, including e<sup>x</sup>.",

        body: `

<h2>What is an Exponential Function?</h2>

<p>An exponential function has the variable in the exponent.</p>

<p>Examples include:</p>

<ul>

<li>2<sup>x</sup></li>

<li>5<sup>x</sup></li>

<li>10<sup>x</sup></li>

<li>e<sup>x</sup></li>

</ul>

<hr>

<h2>The Special Number e</h2>

<p>The number <strong>e ≈ 2.71828</strong> is called Euler's Number.</p>

<p>It is one of the most important constants in mathematics because it models continuous growth.</p>

<hr>

<h2>The Derivative of e<sup>x</sup></h2>

<p>The function <strong>e<sup>x</sup></strong> is unique because its derivative is itself.</p>

<p><strong>d/dx[e<sup>x</sup>] = e<sup>x</sup></strong></p>

<hr>

<h2>The Derivative of a<sup>x</sup></h2>

<p>For any positive constant <strong>a</strong>:</p>

<p><strong>d/dx[a<sup>x</sup>] = a<sup>x</sup> ln(a)</strong></p>

<p>where <strong>ln(a)</strong> is the natural logarithm of a.</p>

<hr>

<h2>Example 1</h2>

<p><strong>f(x)=e<sup>x</sup></strong></p>

<p><strong>f'(x)=e<sup>x</sup></strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>f(x)=4e<sup>x</sup></strong></p>

<p><strong>f'(x)=4e<sup>x</sup></strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>f(x)=3<sup>x</sup></strong></p>

<p><strong>f'(x)=3<sup>x</sup>ln(3)</strong></p>

<hr>

<h2>Using the Chain Rule</h2>

<p>If the exponent is not simply x, apply the Chain Rule.</p>

<p>Example:</p>

<p><strong>f(x)=e<sup>5x</sup></strong></p>

<p><strong>f'(x)=5e<sup>5x</sup></strong></p>

<hr>

<h2>Applications</h2>

<ul>

<li>Population growth</li>

<li>Compound interest</li>

<li>Radioactive decay</li>

<li>Continuous growth models</li>

<li>Finance</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>The derivative of e<sup>x</sup> is e<sup>x</sup>.</li>

<li>The derivative of a<sup>x</sup> is a<sup>x</sup>ln(a).</li>

<li>Use the Chain Rule whenever the exponent is more than just x.</li>

</ul>

`,

        questions: [

            {
                q: "The derivative of eˣ is?",
                options: [
                    "eˣ",
                    "xeˣ",
                    "1"
                ],
                answer: "eˣ",
                explanation: "The derivative of eˣ is itself."
            },

            {
                q: "The derivative of 5eˣ is?",
                options: [
                    "5eˣ",
                    "eˣ",
                    "5xeˣ"
                ],
                answer: "5eˣ",
                explanation: "Apply the Constant Multiple Rule."
            },

            {
                q: "The derivative of 3ˣ is?",
                options: [
                    "3ˣln(3)",
                    "3ˣ",
                    "ln(3)"
                ],
                answer: "3ˣln(3)",
                explanation: "Use the exponential derivative formula."
            },

            {
                q: "Which exponential function has a derivative equal to itself?",
                options: [
                    "eˣ",
                    "2ˣ",
                    "10ˣ"
                ],
                answer: "eˣ",
                explanation: "This is the unique property of eˣ."
            },

            {
                q: "The derivative of e^(5x) is?",
                options: [
                    "5e^(5x)",
                    "e^(5x)",
                    "25e^(5x)"
                ],
                answer: "5e^(5x)",
                explanation: "Apply the Chain Rule by multiplying by the derivative of 5x."
            },

            {
                q: "Exponential functions are commonly used to model?",
                options: [
                    "Growth and decay",
                    "Triangle congruence",
                    "Polynomial factoring"
                ],
                answer: "Growth and decay",
                explanation: "Exponential functions model continuous growth and decay."

            }

        ]

    }
    ,

    "calculus1-derivatives-of-logarithmic-functions": {
        title: "Derivatives of Logarithmic Functions",
        subtitle: "Learn how to differentiate natural logarithms and logarithms with other bases.",

        body: `

<h2>What is a Logarithmic Function?</h2>

<p>A logarithmic function is the inverse of an exponential function.</p>

<p>Common examples include:</p>

<ul>

<li>ln(x)</li>

<li>log₂(x)</li>

<li>log₁₀(x)</li>

</ul>

<hr>

<h2>The Natural Logarithm</h2>

<p>The natural logarithm is written as:</p>

<p><strong>ln(x)</strong></p>

<p>It is the logarithm with base <strong>e</strong>.</p>

<hr>

<h2>The Derivative of ln(x)</h2>

<p>The derivative of the natural logarithm is:</p>

<p><strong>d/dx[ln(x)] = 1/x</strong></p>

<p>This is one of the most important derivative formulas in calculus.</p>

<hr>

<h2>Example 1</h2>

<p><strong>f(x)=ln(x)</strong></p>

<p><strong>f'(x)=1/x</strong></p>

<hr>

<h2>Example 2</h2>

<p><strong>f(x)=5ln(x)</strong></p>

<p><strong>f'(x)=5/x</strong></p>

<hr>

<h2>Using the Chain Rule</h2>

<p>If the argument is more than just x, apply the Chain Rule.</p>

<p>Example:</p>

<p><strong>f(x)=ln(x²+1)</strong></p>

<p>Differentiate the outside first:</p>

<p><strong>1/(x²+1)</strong></p>

<p>Multiply by the derivative of the inside:</p>

<p><strong>2x</strong></p>

<p>Final answer:</p>

<p><strong>2x/(x²+1)</strong></p>

<hr>

<h2>Logarithms with Other Bases</h2>

<p>For any positive base <strong>a</strong>:</p>

<p><strong>d/dx[logₐ(x)] = 1 / (x ln(a))</strong></p>

<hr>

<h2>Example 3</h2>

<p><strong>f(x)=log₁₀(x)</strong></p>

<p><strong>f'(x)=1/(x ln(10))</strong></p>

<hr>

<h2>Applications</h2>

<ul>

<li>Earthquake measurements</li>

<li>Sound intensity (decibels)</li>

<li>Population growth</li>

<li>Finance</li>

<li>Machine Learning</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to use the Chain Rule.</li>

<li>Confusing ln(x) with log₁₀(x).</li>

<li>Forgetting that the derivative of ln(x) is 1/x.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>The derivative of ln(x) is 1/x.</li>

<li>The derivative of logₐ(x) is 1/(x ln(a)).</li>

<li>Apply the Chain Rule whenever the argument is not simply x.</li>

</ul>

`,

        questions: [

            {
                q: "The derivative of ln(x) is?",
                options: [
                    "1/x",
                    "ln(x)",
                    "x"
                ],
                answer: "1/x",
                explanation: "This is the fundamental derivative formula for the natural logarithm."
            },

            {
                q: "The derivative of 5ln(x) is?",
                options: [
                    "5/x",
                    "1/x",
                    "5ln(x)"
                ],
                answer: "5/x",
                explanation: "Apply the Constant Multiple Rule."
            },

            {
                q: "The derivative of ln(x²+1) is?",
                options: [
                    "2x/(x²+1)",
                    "1/(x²+1)",
                    "2x"
                ],
                answer: "2x/(x²+1)",
                explanation: "Use the Chain Rule by multiplying by the derivative of the inside."
            },

            {
                q: "The derivative of log₁₀(x) is?",
                options: [
                    "1/(x ln(10))",
                    "1/x",
                    "ln(10)"
                ],
                answer: "1/(x ln(10))",
                explanation: "This is the derivative formula for logarithms with base 10."
            },

            {
                q: "Which derivative requires the Chain Rule?",
                options: [
                    "ln(3x+2)",
                    "ln(x)",
                    "log₁₀(x)"
                ],
                answer: "ln(3x+2)",
                explanation: "Differentiate the inside function and multiply."
            },

            {
                q: "The natural logarithm has base?",
                options: [
                    "e",
                    "10",
                    "2"
                ],
                answer: "e",
                explanation: "The natural logarithm is the logarithm with base e."
            }

        ]

    }
    ,

    "calculus1-unit-2-review": {
        title: "Unit 2 Review",
        subtitle: "Review all derivative concepts and rules from Unit 2.",

        body: `

<h2>Unit 2 Review</h2>

<p>This review summarizes every major concept covered in Unit 2.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Introduction to Derivatives</li>

<li>Derivative as a Limit</li>

<li>Power Rule</li>

<li>Constant Rule</li>

<li>Constant Multiple Rule</li>

<li>Sum and Difference Rules</li>

<li>Product Rule</li>

<li>Quotient Rule</li>

<li>Chain Rule</li>

<li>Higher-Order Derivatives</li>

<li>Implicit Differentiation</li>

<li>Derivatives of Trigonometric Functions</li>

<li>Derivatives of Exponential Functions</li>

<li>Derivatives of Logarithmic Functions</li>

</ul>

<hr>

<h2>Key Derivative Rules</h2>

<ul>

<li>Power Rule: Bring the exponent down and subtract one from the exponent.</li>

<li>Constant Rule: The derivative of every constant is zero.</li>

<li>Constant Multiple Rule: Keep the constant and differentiate the function.</li>

<li>Sum and Difference Rules: Differentiate each term individually.</li>

<li>Product Rule: Differentiate the first times the second plus the first times the derivative of the second.</li>

<li>Quotient Rule: Low d-high minus high d-low over low squared.</li>

<li>Chain Rule: Differentiate the outside first, then multiply by the derivative of the inside.</li>

</ul>

<hr>

<h2>Important Derivative Formulas</h2>

<ul>

<li>d/dx[sin(x)] = cos(x)</li>

<li>d/dx[cos(x)] = -sin(x)</li>

<li>d/dx[tan(x)] = sec²(x)</li>

<li>d/dx[e<sup>x</sup>] = e<sup>x</sup></li>

<li>d/dx[ln(x)] = 1/x</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting the Chain Rule.</li>

<li>Using the Product Rule instead of the Quotient Rule.</li>

<li>Dropping negative signs.</li>

<li>Forgetting to differentiate every term.</li>

<li>Forgetting the derivative of constants is zero.</li>

<li>Forgetting the factor dy/dx in implicit differentiation.</li>

</ul>

<hr>

<h2>Ready?</h2>

<p>If you understand these concepts and can apply the derivative rules correctly, you are ready for the Unit 2 Test.</p>

`,

        questions: [

            {
                q: "What does a derivative measure?",
                options: [
                    "Instantaneous rate of change",
                    "Area under a curve",
                    "Average value"
                ],
                answer: "Instantaneous rate of change",
                explanation: "The derivative measures how fast a function changes at a specific point."
            },

            {
                q: "Which rule is used for (x²+1)⁵?",
                options: [
                    "Chain Rule",
                    "Product Rule",
                    "Quotient Rule"
                ],
                answer: "Chain Rule",
                explanation: "The Chain Rule is used for composite functions."
            },

            {
                q: "Which rule is used for x²(x+3)?",
                options: [
                    "Product Rule",
                    "Power Rule",
                    "Chain Rule"
                ],
                answer: "Product Rule",
                explanation: "The Product Rule is used when multiplying two functions."
            },

            {
                q: "Which rule is used for x²/(x+1)?",
                options: [
                    "Quotient Rule",
                    "Power Rule",
                    "Chain Rule"
                ],
                answer: "Quotient Rule",
                explanation: "The Quotient Rule is used when dividing two functions."
            },

            {
                q: "The derivative of eˣ is?",
                options: [
                    "eˣ",
                    "xeˣ",
                    "1"
                ],
                answer: "eˣ",
                explanation: "The derivative of eˣ is itself."
            },

            {
                q: "The derivative of ln(x) is?",
                options: [
                    "1/x",
                    "ln(x)",
                    "x"
                ],
                answer: "1/x",
                explanation: "This is one of the fundamental derivative formulas."
            }

        ]

    }
    ,

    "calculus1-unit-2-test": {
        title: "Unit 2 Test",
        subtitle: "Test your understanding of derivatives and differentiation rules.",

        body: `

<h2>Unit 2 Test</h2>

<p>This assessment covers every topic from Unit 2.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Introduction to Derivatives</li>

<li>Derivative as a Limit</li>

<li>Power Rule</li>

<li>Constant Rule</li>

<li>Constant Multiple Rule</li>

<li>Sum and Difference Rules</li>

<li>Product Rule</li>

<li>Quotient Rule</li>

<li>Chain Rule</li>

<li>Higher-Order Derivatives</li>

<li>Implicit Differentiation</li>

<li>Derivatives of Trigonometric Functions</li>

<li>Derivatives of Exponential Functions</li>

<li>Derivatives of Logarithmic Functions</li>

</ul>

<hr>

<h2>Instructions</h2>

<p>Complete this assessment without using notes. A strong score means you are ready to begin applying derivatives to real-world problems.</p>

`,

        questions: [

            {
                q: "A derivative measures?",
                options: [
                    "Instantaneous rate of change",
                    "Area under a curve",
                    "Average value"
                ],
                answer: "Instantaneous rate of change",
                explanation: "A derivative measures how fast a function changes at a specific point."
            },

            {
                q: "The derivative of x⁶ is?",
                options: [
                    "6x⁵",
                    "5x⁶",
                    "6x⁶"
                ],
                answer: "6x⁵",
                explanation: "Apply the Power Rule."
            },

            {
                q: "The derivative of 8 is?",
                options: [
                    "0",
                    "1",
                    "8"
                ],
                answer: "0",
                explanation: "The derivative of every constant is zero."
            },

            {
                q: "The derivative of 4x⁵ is?",
                options: [
                    "20x⁴",
                    "5x⁴",
                    "4x⁴"
                ],
                answer: "20x⁴",
                explanation: "Use the Constant Multiple Rule and the Power Rule."
            },

            {
                q: "Which rule is used for (x²+1)⁴?",
                options: [
                    "Chain Rule",
                    "Product Rule",
                    "Quotient Rule"
                ],
                answer: "Chain Rule",
                explanation: "The Chain Rule is used for composite functions."
            },

            {
                q: "Which rule is used for x²(x+5)?",
                options: [
                    "Product Rule",
                    "Power Rule",
                    "Chain Rule"
                ],
                answer: "Product Rule",
                explanation: "The Product Rule differentiates products of two functions."
            },

            {
                q: "Which rule is used for x²/(x+1)?",
                options: [
                    "Quotient Rule",
                    "Product Rule",
                    "Power Rule"
                ],
                answer: "Quotient Rule",
                explanation: "The Quotient Rule differentiates quotients of functions."
            },

            {
                q: "The derivative of sin(x) is?",
                options: [
                    "cos(x)",
                    "-sin(x)",
                    "tan(x)"
                ],
                answer: "cos(x)",
                explanation: "This is one of the fundamental trigonometric derivative formulas."
            },

            {
                q: "The derivative of cos(x) is?",
                options: [
                    "-sin(x)",
                    "sin(x)",
                    "cos(x)"
                ],
                answer: "-sin(x)",
                explanation: "Remember the negative sign."
            },

            {
                q: "The derivative of tan(x) is?",
                options: [
                    "sec²(x)",
                    "sec(x)",
                    "cos²(x)"
                ],
                answer: "sec²(x)",
                explanation: "The derivative of tangent is sec²(x)."
            },

            {
                q: "The derivative of eˣ is?",
                options: [
                    "eˣ",
                    "xeˣ",
                    "1"
                ],
                answer: "eˣ",
                explanation: "The derivative of eˣ is itself."
            },

            {
                q: "The derivative of ln(x) is?",
                options: [
                    "1/x",
                    "ln(x)",
                    "x"
                ],
                answer: "1/x",
                explanation: "The derivative of the natural logarithm is 1/x."
            },

            {
                q: "The derivative of ln(x²+1) is?",
                options: [
                    "2x/(x²+1)",
                    "1/(x²+1)",
                    "2x"
                ],
                answer: "2x/(x²+1)",
                explanation: "Use the Chain Rule."
            },

            {
                q: "When differentiating y² using implicit differentiation, you obtain?",
                options: [
                    "2y(dy/dx)",
                    "2y",
                    "y²"
                ],
                answer: "2y(dy/dx)",
                explanation: "The Chain Rule introduces the factor dy/dx."
            },

            {
                q: "The second derivative is found by?",
                options: [
                    "Differentiating the first derivative",
                    "Integrating the first derivative",
                    "Squaring the first derivative"
                ],
                answer: "Differentiating the first derivative",
                explanation: "Higher-order derivatives are found by repeated differentiation."
            },

            {
                q: "A common mistake when using the Quotient Rule is?",
                options: [
                    "Forgetting to square the denominator",
                    "Using the Power Rule",
                    "Adding instead of subtracting exponents"
                ],
                answer: "Forgetting to square the denominator",
                explanation: "The denominator of the Quotient Rule is always squared."
            },

            {
                q: "The derivative of (5x−1)⁶ is?",
                options: [
                    "30(5x−1)⁵",
                    "6(5x−1)⁵",
                    "25(5x−1)⁶"
                ],
                answer: "30(5x−1)⁵",
                explanation: "Apply the Chain Rule: 6(5x−1)⁵ × 5."
            },

            {
                q: "The derivative of 3sin(x) is?",
                options: [
                    "3cos(x)",
                    "cos(x)",
                    "3sin(x)"
                ],
                answer: "3cos(x)",
                explanation: "Use the Constant Multiple Rule."
            },

            {
                q: "Which derivative rule is used most often throughout Calculus?",
                options: [
                    "Chain Rule",
                    "Constant Rule",
                    "Difference Rule"
                ],
                answer: "Chain Rule",
                explanation: "The Chain Rule is one of the most frequently used rules in Calculus I and beyond."
            },

            {
                q: "Completing Unit 2 prepares you to study?",
                options: [
                    "Applications of Derivatives",
                    "Limits",
                    "Functions"
                ],
                answer: "Applications of Derivatives",
                explanation: "Unit 3 focuses on applying derivatives to solve real-world and graphical problems."
            }

        ]

    }
    ,

    "calculus1-tangent-lines": {
        title: "Tangent Lines",
        subtitle: "Learn how derivatives help find the equation of a tangent line.",

        body: `

<h2>What is a Tangent Line?</h2>

<p>A <strong>tangent line</strong> is a line that touches a curve at one point and has the same slope as the curve at that point.</p>

<p>In calculus, the derivative gives the slope of the tangent line.</p>

<hr>

<h2>Key Idea</h2>

<p>If you know:</p>

<ul>
<li>A point on the curve</li>
<li>The derivative at that point</li>
</ul>

<p>then you can write the equation of the tangent line.</p>

<hr>

<h2>Step-by-Step Process</h2>

<ol>
<li>Find the derivative f'(x).</li>
<li>Plug in the x-value to find the slope.</li>
<li>Find the y-value using the original function.</li>
<li>Use point-slope form.</li>
</ol>

<hr>

<h2>Point-Slope Form</h2>

<p><strong>y − y₁ = m(x − x₁)</strong></p>

<ul>
<li>m = slope</li>
<li>(x₁, y₁) = point of tangency</li>
</ul>

<hr>

<h2>Example</h2>

<p>Find the tangent line to:</p>

<p><strong>f(x)=x²</strong></p>

<p>at x = 3.</p>

<p>Step 1: Find the derivative.</p>

<p><strong>f'(x)=2x</strong></p>

<p>Step 2: Find the slope at x = 3.</p>

<p><strong>f'(3)=6</strong></p>

<p>Step 3: Find the point.</p>

<p><strong>f(3)=9</strong></p>

<p>Point: <strong>(3,9)</strong></p>

<p>Step 4: Use point-slope form.</p>

<p><strong>y − 9 = 6(x − 3)</strong></p>

<p>Simplified:</p>

<p><strong>y = 6x − 9</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Using the function value as the slope.</li>
<li>Forgetting to find the y-value from the original function.</li>
<li>Using f(x) instead of f'(x) for slope.</li>
</ul>

<hr>

<h2>Summary</h2>

<p>The derivative gives the slope of the tangent line, and point-slope form gives the equation of the line.</p>

`,

        questions: [

            {
                q: "The derivative gives the slope of the?",
                options: [
                    "Tangent line",
                    "Area under the curve",
                    "Original function only"
                ],
                answer: "Tangent line",
                explanation: "The derivative gives the slope of the curve at a point."
            },

            {
                q: "To find a tangent line, you need?",
                options: [
                    "A point and a slope",
                    "Only a graph",
                    "Only the y-intercept"
                ],
                answer: "A point and a slope",
                explanation: "A line is determined by a point and slope."
            },

            {
                q: "The slope of the tangent line comes from?",
                options: [
                    "The derivative",
                    "The original function value",
                    "The x-axis"
                ],
                answer: "The derivative",
                explanation: "Evaluate f'(x) at the given x-value."
            },

            {
                q: "Point-slope form is?",
                options: [
                    "y − y₁ = m(x − x₁)",
                    "y = mx + b",
                    "x² + y² = r²"
                ],
                answer: "y − y₁ = m(x − x₁)",
                explanation: "Point-slope form uses a known point and slope."
            },

            {
                q: "For f(x)=x², f'(x)=?",
                options: [
                    "2x",
                    "x",
                    "x²"
                ],
                answer: "2x",
                explanation: "Apply the Power Rule."
            },

            {
                q: "For f(x)=x² at x=3, the slope is?",
                options: [
                    "6",
                    "9",
                    "3"
                ],
                answer: "6",
                explanation: "f'(x)=2x, so f'(3)=6."
            }

        ]

    }
    ,

    "calculus1-normal-lines": {
        title: "Normal Lines",
        subtitle: "Learn how to find the equation of a normal line using derivatives.",

        body: `

<h2>What is a Normal Line?</h2>

<p>A <strong>normal line</strong> is a line that is <strong>perpendicular</strong> to the tangent line at a point on a curve.</p>

<p>If the derivative gives the slope of the tangent line, then the normal line has the negative reciprocal of that slope.</p>

<hr>

<h2>Relationship Between Tangent and Normal Lines</h2>

<ul>

<li>Tangent Line Slope = f'(x)</li>

<li>Normal Line Slope = −1 / f'(x)</li>

</ul>

<p>If the tangent line has slope <strong>m</strong>, then the normal line has slope:</p>

<p><strong>−1/m</strong></p>

<hr>

<h2>Step-by-Step Process</h2>

<ol>

<li>Find the derivative.</li>

<li>Evaluate the derivative at the given x-value.</li>

<li>Find the point on the graph.</li>

<li>Find the negative reciprocal of the tangent slope.</li>

<li>Use point-slope form.</li>

</ol>

<hr>

<h2>Example</h2>

<p>Find the normal line to:</p>

<p><strong>f(x)=x²</strong></p>

<p>at x = 2.</p>

<p>Derivative:</p>

<p><strong>f'(x)=2x</strong></p>

<p>Tangent slope:</p>

<p><strong>f'(2)=4</strong></p>

<p>Normal slope:</p>

<p><strong>−1/4</strong></p>

<p>Point:</p>

<p><strong>(2,4)</strong></p>

<p>Equation:</p>

<p><strong>y−4 = (−1/4)(x−2)</strong></p>

<hr>

<h2>Special Cases</h2>

<p>If the tangent line is horizontal (slope = 0), then the normal line is vertical.</p>

<p>If the tangent line is vertical, then the normal line is horizontal.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the tangent slope instead of the normal slope.</li>

<li>Forgetting to take the negative reciprocal.</li>

<li>Using the wrong point from the graph.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>The derivative gives the tangent slope.</li>

<li>The normal slope is the negative reciprocal.</li>

<li>Use point-slope form to write the equation.</li>

</ul>

`,

        questions: [

            {
                q: "A normal line is always?",
                options: [
                    "Perpendicular to the tangent line",
                    "Parallel to the tangent line",
                    "Horizontal"
                ],
                answer: "Perpendicular to the tangent line",
                explanation: "Normal lines are perpendicular to tangent lines."
            },

            {
                q: "If the tangent slope is 5, the normal slope is?",
                options: [
                    "−1/5",
                    "5",
                    "1/5"
                ],
                answer: "−1/5",
                explanation: "Take the negative reciprocal."
            },

            {
                q: "If the tangent slope is 2, the normal slope is?",
                options: [
                    "−1/2",
                    "2",
                    "1/2"
                ],
                answer: "−1/2",
                explanation: "The normal slope is the negative reciprocal."
            },

            {
                q: "The tangent slope comes from?",
                options: [
                    "The derivative",
                    "The y-intercept",
                    "The x-coordinate"
                ],
                answer: "The derivative",
                explanation: "Evaluate the derivative at the point."
            },

            {
                q: "If the tangent line is horizontal, the normal line is?",
                options: [
                    "Vertical",
                    "Horizontal",
                    "Parallel"
                ],
                answer: "Vertical",
                explanation: "Horizontal and vertical lines are perpendicular."
            },

            {
                q: "The equation of the normal line uses?",
                options: [
                    "Point-slope form",
                    "Slope-intercept form only",
                    "Quadratic formula"
                ],
                answer: "Point-slope form",
                explanation: "Point-slope form is the easiest method."

            }

        ]

    }
    ,

    "calculus1-increasing-and-decreasing-functions": {
        title: "Increasing and Decreasing Functions",
        subtitle: "Learn how the first derivative determines where a function increases or decreases.",

        body: `

<h2>What Does Increasing Mean?</h2>

<p>A function is <strong>increasing</strong> when its y-values get larger as x increases.</p>

<p>Graphically, the curve rises as you move from left to right.</p>

<hr>

<h2>What Does Decreasing Mean?</h2>

<p>A function is <strong>decreasing</strong> when its y-values get smaller as x increases.</p>

<p>Graphically, the curve falls as you move from left to right.</p>

<hr>

<h2>Using the First Derivative</h2>

<p>The sign of the derivative tells us whether a function is increasing or decreasing.</p>

<table border="1" cellpadding="6">

<tr>
<th>Derivative</th>
<th>Behavior</th>
</tr>

<tr>
<td>f'(x) > 0</td>
<td>Increasing</td>
</tr>

<tr>
<td>f'(x) < 0</td>
<td>Decreasing</td>
</tr>

<tr>
<td>f'(x) = 0</td>
<td>Possible critical point</td>
</tr>

</table>

<hr>

<h2>Critical Points</h2>

<p>A <strong>critical point</strong> occurs where:</p>

<ul>

<li>f'(x)=0</li>

<li>or the derivative does not exist.</li>

</ul>

<p>Critical points are possible locations of maximums or minimums.</p>

<hr>

<h2>Example</h2>

<p><strong>f(x)=x³−3x</strong></p>

<p>Derivative:</p>

<p><strong>f'(x)=3x²−3</strong></p>

<p>Set the derivative equal to zero:</p>

<p><strong>3x²−3=0</strong></p>

<p><strong>x=−1 and x=1</strong></p>

<p>These values divide the graph into intervals.</p>

<p>Test the sign of the derivative in each interval to determine whether the function is increasing or decreasing.</p>

<hr>

<h2>First Derivative Test</h2>

<ul>

<li>If the derivative changes from positive to negative, there is a local maximum.</li>

<li>If the derivative changes from negative to positive, there is a local minimum.</li>

<li>If the sign does not change, there is neither.</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the function instead of the derivative.</li>

<li>Forgetting to test intervals.</li>

<li>Assuming every critical point is a maximum or minimum.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Positive derivative → Increasing.</li>

<li>Negative derivative → Decreasing.</li>

<li>Derivative equal to zero identifies critical points.</li>

<li>Use the First Derivative Test to classify critical points.</li>

</ul>

`,

        questions: [

            {
                q: "If f'(x) > 0, the function is?",
                options: [
                    "Increasing",
                    "Decreasing",
                    "Constant"
                ],
                answer: "Increasing",
                explanation: "A positive derivative means the graph rises from left to right."
            },

            {
                q: "If f'(x) < 0, the function is?",
                options: [
                    "Decreasing",
                    "Increasing",
                    "Undefined"
                ],
                answer: "Decreasing",
                explanation: "A negative derivative means the graph falls from left to right."
            },

            {
                q: "A critical point occurs when?",
                options: [
                    "f'(x)=0 or does not exist",
                    "f(x)=0 only",
                    "The graph crosses the y-axis"
                ],
                answer: "f'(x)=0 or does not exist",
                explanation: "These are the possible locations of local extrema."
            },

            {
                q: "If the derivative changes from positive to negative, the function has a?",
                options: [
                    "Local maximum",
                    "Local minimum",
                    "Point of inflection"
                ],
                answer: "Local maximum",
                explanation: "The function changes from increasing to decreasing."
            },

            {
                q: "If the derivative changes from negative to positive, the function has a?",
                options: [
                    "Local minimum",
                    "Local maximum",
                    "Horizontal asymptote"
                ],
                answer: "Local minimum",
                explanation: "The function changes from decreasing to increasing."
            },

            {
                q: "To determine increasing and decreasing intervals, you should analyze?",
                options: [
                    "The sign of the first derivative",
                    "The y-intercept",
                    "The second derivative only"
                ],
                answer: "The sign of the first derivative",
                explanation: "The first derivative tells whether the function is increasing or decreasing."
            }

        ]

    }
    ,

    "calculus1-local-maximums-and-minimums": {
        title: "Local Maximums and Minimums",
        subtitle: "Learn how to identify and classify relative extrema using derivatives.",

        body: `

<h2>What are Local Maximums and Minimums?</h2>

<p>A <strong>local maximum</strong> is a point where a function has the greatest value compared to nearby points.</p>

<p>A <strong>local minimum</strong> is a point where a function has the smallest value compared to nearby points.</p>

<hr>

<h2>Critical Points</h2>

<p>Local extrema occur only at <strong>critical points</strong>.</p>

<p>A critical point is where:</p>

<ul>

<li>f'(x)=0</li>

<li>or the derivative does not exist.</li>

</ul>

<hr>

<h2>The First Derivative Test</h2>

<p>Use the sign of the derivative before and after a critical point.</p>

<table border="1" cellpadding="6">

<tr>
<th>Derivative Changes</th>
<th>Conclusion</th>
</tr>

<tr>
<td>Positive → Negative</td>
<td>Local Maximum</td>
</tr>

<tr>
<td>Negative → Positive</td>
<td>Local Minimum</td>
</tr>

<tr>
<td>No Sign Change</td>
<td>Neither</td>
</tr>

</table>

<hr>

<h2>Example</h2>

<p><strong>f(x)=x³−3x</strong></p>

<p>Derivative:</p>

<p><strong>f'(x)=3x²−3</strong></p>

<p>Critical points:</p>

<p><strong>x=-1 and x=1</strong></p>

<ul>

<li>At x = -1, the derivative changes from positive to negative.</li>

<li>This gives a local maximum.</li>

<li>At x = 1, the derivative changes from negative to positive.</li>

<li>This gives a local minimum.</li>

</ul>

<hr>

<h2>Local vs Absolute Extrema</h2>

<p>A <strong>local</strong> maximum or minimum only compares nearby points.</p>

<p>An <strong>absolute</strong> maximum or minimum is the highest or lowest value on the entire domain.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Finding the highest profit</li>

<li>Finding the lowest cost</li>

<li>Determining optimal dimensions</li>

<li>Modeling real-world systems</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Assuming every critical point is an extremum.</li>

<li>Forgetting to test the sign of the derivative.</li>

<li>Confusing local and absolute extrema.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Find critical points.</li>

<li>Use the First Derivative Test.</li>

<li>Classify each point as a local maximum, local minimum, or neither.</li>

</ul>

`,

        questions: [

            {
                q: "A local maximum occurs when the derivative changes from?",
                options: [
                    "Positive to negative",
                    "Negative to positive",
                    "Positive to positive"
                ],
                answer: "Positive to negative",
                explanation: "The function changes from increasing to decreasing."
            },

            {
                q: "A local minimum occurs when the derivative changes from?",
                options: [
                    "Negative to positive",
                    "Positive to negative",
                    "Negative to negative"
                ],
                answer: "Negative to positive",
                explanation: "The function changes from decreasing to increasing."
            },

            {
                q: "Local extrema occur at?",
                options: [
                    "Critical points",
                    "Every x-intercept",
                    "Every y-intercept"
                ],
                answer: "Critical points",
                explanation: "Critical points are the only possible locations of local extrema."
            },

            {
                q: "A critical point occurs where?",
                options: [
                    "f'(x)=0 or the derivative does not exist",
                    "f(x)=0 only",
                    "The graph crosses the y-axis"
                ],
                answer: "f'(x)=0 or the derivative does not exist",
                explanation: "This is the definition of a critical point."
            },

            {
                q: "If the derivative does not change sign at a critical point, the point is?",
                options: [
                    "Neither a local maximum nor a local minimum",
                    "A local maximum",
                    "A local minimum"
                ],
                answer: "Neither a local maximum nor a local minimum",
                explanation: "A sign change is required for a local extremum."
            },

            {
                q: "An absolute maximum is?",
                options: [
                    "The greatest value on the entire domain",
                    "The greatest nearby value only",
                    "The derivative equals zero"
                ],
                answer: "The greatest value on the entire domain",
                explanation: "Absolute extrema consider the entire domain, not just nearby points."
            }

        ]

    }
    ,

    "calculus1-concavity-and-second-derivative": {
        title: "Concavity and the Second Derivative",
        subtitle: "Learn how the second derivative determines the shape of a graph.",

        body: `

<h2>What is Concavity?</h2>

<p><strong>Concavity</strong> describes the direction in which a graph bends.</p>

<p>A graph can bend upward or downward as x changes.</p>

<hr>

<h2>Concave Up</h2>

<p>A function is <strong>concave up</strong> when the graph bends upward like a bowl.</p>

<p>The slope of the tangent lines is increasing.</p>

<p>This occurs when:</p>

<p><strong>f''(x) > 0</strong></p>

<hr>

<h2>Concave Down</h2>

<p>A function is <strong>concave down</strong> when the graph bends downward like an upside-down bowl.</p>

<p>The slope of the tangent lines is decreasing.</p>

<p>This occurs when:</p>

<p><strong>f''(x) < 0</strong></p>

<hr>

<h2>Using the Second Derivative</h2>

<p>The second derivative tells us how the first derivative changes.</p>

<table border="1" cellpadding="6">

<tr>
<th>Second Derivative</th>
<th>Concavity</th>
</tr>

<tr>
<td>f''(x) > 0</td>
<td>Concave Up</td>
</tr>

<tr>
<td>f''(x) < 0</td>
<td>Concave Down</td>
</tr>

</table>

<hr>

<h2>Example</h2>

<p><strong>f(x)=x³</strong></p>

<p>First derivative:</p>

<p><strong>f'(x)=3x²</strong></p>

<p>Second derivative:</p>

<p><strong>f''(x)=6x</strong></p>

<ul>

<li>When x > 0, f''(x) > 0, so the graph is concave up.</li>

<li>When x < 0, f''(x) < 0, so the graph is concave down.</li>

</ul>

<hr>

<h2>Relationship to the First Derivative</h2>

<ul>

<li>If the first derivative is increasing, the graph is concave up.</li>

<li>If the first derivative is decreasing, the graph is concave down.</li>

</ul>

<hr>

<h2>Real-World Example</h2>

<p>A car that is speeding up has increasing velocity.</p>

<p>The graph of its position is often concave up because the rate of change is increasing.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the first derivative instead of the second derivative.</li>

<li>Confusing increasing/decreasing with concavity.</li>

<li>Thinking every graph changes concavity.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>If f''(x) > 0, the graph is concave up.</li>

<li>If f''(x) < 0, the graph is concave down.</li>

<li>The second derivative measures how the slope changes.</li>

</ul>

`,

        questions: [

            {
                q: "If f''(x) > 0, the graph is?",
                options: [
                    "Concave up",
                    "Concave down",
                    "Linear"
                ],
                answer: "Concave up",
                explanation: "A positive second derivative means the graph bends upward."
            },

            {
                q: "If f''(x) < 0, the graph is?",
                options: [
                    "Concave down",
                    "Concave up",
                    "Constant"
                ],
                answer: "Concave down",
                explanation: "A negative second derivative means the graph bends downward."
            },

            {
                q: "Concavity is determined by the?",
                options: [
                    "Second derivative",
                    "First derivative",
                    "Original function only"
                ],
                answer: "Second derivative",
                explanation: "The second derivative determines whether the graph is concave up or down."
            },

            {
                q: "A concave up graph looks like?",
                options: [
                    "A bowl opening upward",
                    "A bowl opening downward",
                    "A straight line"
                ],
                answer: "A bowl opening upward",
                explanation: "This is the standard visual description of concave up."
            },

            {
                q: "The second derivative describes?",
                options: [
                    "How the slope changes",
                    "The y-intercept",
                    "The domain"
                ],
                answer: "How the slope changes",
                explanation: "It measures whether the first derivative is increasing or decreasing."
            },

            {
                q: "Increasing and decreasing are determined by the ________, while concavity is determined by the ________.",
                options: [
                    "First derivative; second derivative",
                    "Second derivative; first derivative",
                    "Original function; derivative"
                ],
                answer: "First derivative; second derivative",
                explanation: "The first derivative determines increasing/decreasing, while the second derivative determines concavity."
            }

        ]

    }
    ,

    "calculus1-points-of-inflection": {
        title: "Points of Inflection",
        subtitle: "Learn how to identify where a graph changes concavity.",

        body: `

<h2>What is a Point of Inflection?</h2>

<p>A <strong>point of inflection</strong> is a point where a function changes concavity.</p>

<p>The graph changes from:</p>

<ul>

<li>Concave up to concave down, or</li>

<li>Concave down to concave up.</li>

</ul>

<hr>

<h2>Finding Possible Inflection Points</h2>

<p>Possible inflection points occur where:</p>

<ul>

<li><strong>f''(x)=0</strong></li>

<li>or the second derivative does not exist.</li>

</ul>

<p>However, these values are only <strong>candidates</strong>. You must verify that the concavity actually changes.</p>

<hr>

<h2>Second Derivative Sign Test</h2>

<table border="1" cellpadding="6">

<tr>
<th>Before</th>
<th>After</th>
<th>Result</th>
</tr>

<tr>
<td>Positive</td>
<td>Negative</td>
<td>Inflection Point</td>
</tr>

<tr>
<td>Negative</td>
<td>Positive</td>
<td>Inflection Point</td>
</tr>

<tr>
<td>Positive</td>
<td>Positive</td>
<td>No Inflection Point</td>
</tr>

<tr>
<td>Negative</td>
<td>Negative</td>
<td>No Inflection Point</td>
</tr>

</table>

<hr>

<h2>Example</h2>

<p><strong>f(x)=x³</strong></p>

<p>First derivative:</p>

<p><strong>f'(x)=3x²</strong></p>

<p>Second derivative:</p>

<p><strong>f''(x)=6x</strong></p>

<p>Set the second derivative equal to zero:</p>

<p><strong>6x=0</strong></p>

<p><strong>x=0</strong></p>

<p>Test values:</p>

<ul>

<li>x=-1 → f''(x)&lt;0 (Concave Down)</li>

<li>x=1 → f''(x)&gt;0 (Concave Up)</li>

</ul>

<p>Since the concavity changes, <strong>(0,0)</strong> is a point of inflection.</p>

<hr>

<h2>Important Note</h2>

<p>If the second derivative equals zero but the concavity does not change, then there is <strong>no point of inflection</strong>.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Assuming every solution to f''(x)=0 is an inflection point.</li>

<li>Forgetting to test intervals.</li>

<li>Using the first derivative instead of the second derivative.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Find where f''(x)=0 or is undefined.</li>

<li>Test the sign of the second derivative on both sides.</li>

<li>A point of inflection exists only if the concavity changes.</li>

</ul>

`,

        questions: [

            {
                q: "A point of inflection occurs when?",
                options: [
                    "The graph changes concavity",
                    "The derivative equals zero",
                    "The graph crosses the x-axis"
                ],
                answer: "The graph changes concavity",
                explanation: "A point of inflection is defined by a change in concavity."
            },

            {
                q: "Possible inflection points occur where?",
                options: [
                    "f''(x)=0 or is undefined",
                    "f'(x)=0 only",
                    "f(x)=0"
                ],
                answer: "f''(x)=0 or is undefined",
                explanation: "These are candidate points that must be tested."
            },

            {
                q: "If the second derivative changes from positive to negative, then?",
                options: [
                    "There is a point of inflection",
                    "There is a local maximum",
                    "There is a local minimum"
                ],
                answer: "There is a point of inflection",
                explanation: "The concavity changes from up to down."
            },

            {
                q: "If the second derivative stays positive on both sides, then?",
                options: [
                    "There is no point of inflection",
                    "There is always a point of inflection",
                    "There is a local maximum"
                ],
                answer: "There is no point of inflection",
                explanation: "Concavity did not change."
            },

            {
                q: "Which derivative determines concavity?",
                options: [
                    "The second derivative",
                    "The first derivative",
                    "The original function"
                ],
                answer: "The second derivative",
                explanation: "The second derivative determines whether a graph is concave up or down."
            },

            {
                q: "To confirm a point of inflection, you must?",
                options: [
                    "Check that the concavity changes",
                    "Only solve f''(x)=0",
                    "Find the y-intercept"
                ],
                answer: "Check that the concavity changes",
                explanation: "A sign change in the second derivative confirms an inflection point."
            }

        ]

    }
    ,

    "calculus1-second-derivative-test": {
        title: "Second Derivative Test",
        subtitle: "Learn how to classify critical points using the second derivative.",

        body: `

<h2>What is the Second Derivative Test?</h2>

<p>The <strong>Second Derivative Test</strong> is a shortcut for determining whether a critical point is a local maximum or a local minimum.</p>

<p>Instead of checking the sign of the first derivative on either side of a critical point, we evaluate the second derivative.</p>

<hr>

<h2>Step 1</h2>

<p>Find the first derivative.</p>

<p>Set:</p>

<p><strong>f'(x)=0</strong></p>

<p>to locate all critical points.</p>

<hr>

<h2>Step 2</h2>

<p>Find the second derivative:</p>

<p><strong>f''(x)</strong></p>

<p>Evaluate it at each critical point.</p>

<hr>

<h2>How to Interpret the Results</h2>

<table border="1" cellpadding="6">

<tr>
<th>Second Derivative</th>
<th>Conclusion</th>
</tr>

<tr>
<td>f''(x) > 0</td>
<td>Local Minimum</td>
</tr>

<tr>
<td>f''(x) < 0</td>
<td>Local Maximum</td>
</tr>

<tr>
<td>f''(x)=0</td>
<td>Test Inconclusive</td>
</tr>

</table>

<hr>

<h2>Example</h2>

<p><strong>f(x)=x³−3x</strong></p>

<p>First derivative:</p>

<p><strong>f'(x)=3x²−3</strong></p>

<p>Critical points:</p>

<p><strong>x=-1 and x=1</strong></p>

<p>Second derivative:</p>

<p><strong>f''(x)=6x</strong></p>

<ul>

<li>f''(-1)=-6 &lt; 0 → Local Maximum</li>

<li>f''(1)=6 &gt; 0 → Local Minimum</li>

</ul>

<hr>

<h2>When the Test Fails</h2>

<p>If:</p>

<p><strong>f''(x)=0</strong></p>

<p>the Second Derivative Test cannot determine what happens.</p>

<p>You must instead use the <strong>First Derivative Test</strong> or another method.</p>

<hr>

<h2>Advantages</h2>

<ul>

<li>Usually faster than the First Derivative Test.</li>

<li>Requires only one evaluation of the second derivative.</li>

<li>Very useful for optimization problems.</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Applying the test before finding critical points.</li>

<li>Assuming f''(x)=0 means there is an inflection point.</li>

<li>Using the second derivative without first solving f'(x)=0.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Find critical points using the first derivative.</li>

<li>Evaluate the second derivative at each critical point.</li>

<li>Positive → Local Minimum.</li>

<li>Negative → Local Maximum.</li>

<li>Zero → Test is inconclusive.</li>

</ul>

`,

        questions: [

            {
                q: "The Second Derivative Test is used to determine?",
                options: [
                    "Whether a critical point is a local maximum or minimum",
                    "The slope of the tangent line",
                    "The equation of the curve"
                ],
                answer: "Whether a critical point is a local maximum or minimum",
                explanation: "The Second Derivative Test classifies critical points."
            },

            {
                q: "Before using the Second Derivative Test, you must first?",
                options: [
                    "Find the critical points using the first derivative",
                    "Find the y-intercept",
                    "Graph the function"
                ],
                answer: "Find the critical points using the first derivative",
                explanation: "The Second Derivative Test is only applied at critical points."
            },

            {
                q: "If f''(x) > 0 at a critical point, the function has a?",
                options: [
                    "Local minimum",
                    "Local maximum",
                    "Point of inflection"
                ],
                answer: "Local minimum",
                explanation: "A positive second derivative means the graph is concave up."
            },

            {
                q: "If f''(x) < 0 at a critical point, the function has a?",
                options: [
                    "Local maximum",
                    "Local minimum",
                    "Absolute minimum"
                ],
                answer: "Local maximum",
                explanation: "A negative second derivative means the graph is concave down."
            },

            {
                q: "If f''(x)=0, then?",
                options: [
                    "The test is inconclusive",
                    "There is a local minimum",
                    "There is always an inflection point"
                ],
                answer: "The test is inconclusive",
                explanation: "Another method, such as the First Derivative Test, is needed."
            },

            {
                q: "Why is the Second Derivative Test often preferred?",
                options: [
                    "It is usually faster than the First Derivative Test",
                    "It always works",
                    "It eliminates the need to find critical points"
                ],
                answer: "It is usually faster than the First Derivative Test",
                explanation: "When applicable, it classifies critical points with less work."
            }

        ]

    }
    ,

    "calculus1-curve-sketching": {
        title: "Curve Sketching",
        subtitle: "Learn how derivatives help sketch accurate graphs of functions.",

        body: `

<h2>Why Sketch Curves?</h2>

<p>Calculus allows us to sketch graphs without plotting dozens of individual points.</p>

<p>By studying derivatives, we can understand a function's overall behavior.</p>

<hr>

<h2>Information Needed</h2>

<p>To sketch a graph, determine:</p>

<ul>

<li>Domain</li>

<li>x-intercepts</li>

<li>y-intercept</li>

<li>Critical points</li>

<li>Increasing intervals</li>

<li>Decreasing intervals</li>

<li>Local maximums</li>

<li>Local minimums</li>

<li>Concavity</li>

<li>Points of inflection</li>

<li>End behavior</li>

</ul>

<hr>

<h2>General Procedure</h2>

<ol>

<li>Find the domain.</li>

<li>Find intercepts.</li>

<li>Compute the first derivative.</li>

<li>Locate critical points.</li>

<li>Determine increasing and decreasing intervals.</li>

<li>Compute the second derivative.</li>

<li>Determine concavity.</li>

<li>Locate inflection points.</li>

<li>Combine all information to sketch the graph.</li>

</ol>

<hr>

<h2>Example</h2>

<p><strong>f(x)=x³−3x</strong></p>

<p>First derivative:</p>

<p><strong>f'(x)=3x²−3</strong></p>

<p>Critical points:</p>

<p><strong>x=-1, x=1</strong></p>

<p>Second derivative:</p>

<p><strong>f''(x)=6x</strong></p>

<p>Inflection point:</p>

<p><strong>x=0</strong></p>

<p>The graph:</p>

<ul>

<li>Increases on (-∞,-1)</li>

<li>Decreases on (-1,1)</li>

<li>Increases on (1,∞)</li>

<li>Is concave down for x&lt;0</li>

<li>Is concave up for x&gt;0</li>

</ul>

<hr>

<h2>Reading Graphs</h2>

<p>Even if you are given only a graph, derivatives allow you to identify:</p>

<ul>

<li>Maximums</li>

<li>Minimums</li>

<li>Intervals of increase</li>

<li>Intervals of decrease</li>

<li>Concavity</li>

<li>Inflection points</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Ignoring concavity.</li>

<li>Forgetting to test intervals.</li>

<li>Confusing local and absolute extrema.</li>

<li>Sketching without finding critical points.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Use the first derivative to study slopes.</li>

<li>Use the second derivative to study concavity.</li>

<li>Combine all information to produce an accurate graph.</li>

</ul>

`,

        questions: [

            {
                q: "The first derivative is primarily used to determine?",
                options: [
                    "Increasing and decreasing intervals",
                    "Domain",
                    "Intercepts"
                ],
                answer: "Increasing and decreasing intervals",
                explanation: "The sign of the first derivative determines whether a function is increasing or decreasing."
            },

            {
                q: "The second derivative is primarily used to determine?",
                options: [
                    "Concavity",
                    "Domain",
                    "Intercepts"
                ],
                answer: "Concavity",
                explanation: "The second derivative tells whether the graph is concave up or concave down."
            },

            {
                q: "Critical points are found using?",
                options: [
                    "The first derivative",
                    "The second derivative",
                    "The original function only"
                ],
                answer: "The first derivative",
                explanation: "Critical points occur where the first derivative is zero or undefined."
            },

            {
                q: "Points of inflection are determined using?",
                options: [
                    "The second derivative",
                    "The first derivative only",
                    "The y-intercept"
                ],
                answer: "The second derivative",
                explanation: "A change in the sign of the second derivative indicates an inflection point."
            },

            {
                q: "Before sketching a graph, you should identify?",
                options: [
                    "Critical points and concavity",
                    "Only the intercepts",
                    "Only the domain"
                ],
                answer: "Critical points and concavity",
                explanation: "These are essential features for producing an accurate sketch."
            },

            {
                q: "Curve sketching combines information from?",
                options: [
                    "The function, first derivative, and second derivative",
                    "Only the original function",
                    "Only the first derivative"
                ],
                answer: "The function, first derivative, and second derivative",
                explanation: "All three provide important information about the graph."
            }

        ]

    }
    ,

    "calculus1-optimization": {
        title: "Optimization",
        subtitle: "Learn how derivatives are used to maximize or minimize real-world quantities.",

        body: `

<h2>What is Optimization?</h2>

<p><strong>Optimization</strong> is the process of finding the largest or smallest possible value of a quantity while satisfying given conditions.</p>

<p>Calculus allows us to determine these values using derivatives.</p>

<hr>

<h2>Common Optimization Problems</h2>

<ul>

<li>Maximum profit</li>

<li>Minimum cost</li>

<li>Maximum area</li>

<li>Minimum surface area</li>

<li>Maximum volume</li>

<li>Shortest distance</li>

<li>Fastest time</li>

</ul>

<hr>

<h2>General Strategy</h2>

<ol>

<li>Read the problem carefully.</li>

<li>Draw a diagram if helpful.</li>

<li>Identify the quantity to maximize or minimize.</li>

<li>Write an equation for that quantity.</li>

<li>Rewrite the equation using only one variable.</li>

<li>Differentiate the function.</li>

<li>Find critical points by solving f'(x)=0.</li>

<li>Use the First or Second Derivative Test.</li>

<li>Answer the original question with correct units.</li>

</ol>

<hr>

<h2>Example</h2>

<p>A farmer has 100 meters of fencing to build a rectangular pen.</p>

<p>What dimensions maximize the area?</p>

<p>Perimeter:</p>

<p><strong>2L + 2W = 100</strong></p>

<p>Solve for one variable:</p>

<p><strong>W = 50 − L</strong></p>

<p>Area:</p>

<p><strong>A = L(50 − L)</strong></p>

<p><strong>A = 50L − L²</strong></p>

<p>Differentiate:</p>

<p><strong>A' = 50 − 2L</strong></p>

<p>Set equal to zero:</p>

<p><strong>50 − 2L = 0</strong></p>

<p><strong>L = 25</strong></p>

<p>Then:</p>

<p><strong>W = 25</strong></p>

<p>The maximum area occurs when the rectangle is actually a square.</p>

<hr>

<h2>Why Critical Points Matter</h2>

<p>Maximums and minimums occur at critical points or endpoints.</p>

<p>Always verify that the critical point produces the desired maximum or minimum.</p>

<hr>

<h2>Real-World Applications</h2>

<ul>

<li>Business and economics</li>

<li>Engineering design</li>

<li>Architecture</li>

<li>Manufacturing</li>

<li>Physics</li>

<li>Medicine</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Optimizing the wrong equation.</li>

<li>Forgetting to rewrite everything using one variable.</li>

<li>Not answering the original question.</li>

<li>Ignoring units.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Create an equation for the quantity being optimized.</li>

<li>Rewrite it using one variable.</li>

<li>Differentiate.</li>

<li>Find critical points.</li>

<li>Verify the maximum or minimum.</li>

</ul>

`,

        questions: [

            {
                q: "Optimization problems are used to find?",
                options: [
                    "Maximums and minimums",
                    "Only derivatives",
                    "Only limits"
                ],
                answer: "Maximums and minimums",
                explanation: "Optimization finds the largest or smallest possible value of a quantity."
            },

            {
                q: "Before differentiating an optimization function, you should?",
                options: [
                    "Rewrite it using one variable",
                    "Graph it immediately",
                    "Find the integral"
                ],
                answer: "Rewrite it using one variable",
                explanation: "Optimization requires a function of a single variable."
            },

            {
                q: "Critical points are found by solving?",
                options: [
                    "f'(x)=0",
                    "f(x)=0",
                    "f''(x)=0"
                ],
                answer: "f'(x)=0",
                explanation: "Critical points occur where the first derivative is zero or undefined."
            },

            {
                q: "Optimization problems often involve?",
                options: [
                    "Area, volume, profit, and cost",
                    "Triangle congruence",
                    "Polynomial long division"
                ],
                answer: "Area, volume, profit, and cost",
                explanation: "These are common real-world optimization applications."
            },

            {
                q: "After finding a critical point, you should?",
                options: [
                    "Verify that it gives the required maximum or minimum",
                    "Immediately stop",
                    "Integrate the function"
                ],
                answer: "Verify that it gives the required maximum or minimum",
                explanation: "Not every critical point is the desired solution."
            },

            {
                q: "A common mistake in optimization is?",
                options: [
                    "Using more than one variable in the final equation",
                    "Finding the derivative",
                    "Using the Chain Rule"
                ],
                answer: "Using more than one variable in the final equation",
                explanation: "The function being optimized must be written in terms of one variable."
            }

        ]

    }
    ,

    "calculus1-related-rates": {
        title: "Related Rates",
        subtitle: "Learn how to relate the rates of change of two or more variables.",

        body: `

<h2>What are Related Rates?</h2>

<p><strong>Related rates</strong> problems involve two or more quantities that change over time and are connected by an equation.</p>

<p>As one quantity changes, the others change as well.</p>

<hr>

<h2>Examples of Related Rates</h2>

<ul>

<li>Inflating balloons</li>

<li>Expanding circles</li>

<li>Rising water in a tank</li>

<li>Sliding ladders</li>

<li>Moving shadows</li>

<li>Growing spheres</li>

</ul>

<hr>

<h2>The General Strategy</h2>

<ol>

<li>Draw a diagram.</li>

<li>Assign variables.</li>

<li>Write an equation relating the variables.</li>

<li>Differentiate both sides with respect to time.</li>

<li>Substitute the known values.</li>

<li>Solve for the unknown rate.</li>

<li>Include units in your answer.</li>

</ol>

<hr>

<h2>Important Idea</h2>

<p>Every changing variable depends on time.</p>

<p>When differentiating with respect to time, use the Chain Rule.</p>

<p>For example:</p>

<p><strong>d/dt(x²)=2x(dx/dt)</strong></p>

<hr>

<h2>Example</h2>

<p>A circle's radius increases at:</p>

<p><strong>dr/dt = 3 cm/s</strong></p>

<p>Find how fast the area changes when:</p>

<p><strong>r = 5 cm</strong></p>

<p>Area formula:</p>

<p><strong>A = πr²</strong></p>

<p>Differentiate:</p>

<p><strong>dA/dt = 2πr(dr/dt)</strong></p>

<p>Substitute the values:</p>

<p><strong>dA/dt = 2π(5)(3)</strong></p>

<p><strong>dA/dt = 30π cm²/s</strong></p>

<hr>

<h2>Common Formulas Used</h2>

<ul>

<li>Circle Area: A = πr²</li>

<li>Circle Circumference: C = 2πr</li>

<li>Sphere Volume: V = (4/3)πr³</li>

<li>Cylinder Volume: V = πr²h</li>

<li>Pythagorean Theorem: x²+y²=z²</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to differentiate with respect to time.</li>

<li>Substituting values too early.</li>

<li>Ignoring the Chain Rule.</li>

<li>Leaving out units.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Write an equation relating the variables.</li>

<li>Differentiate with respect to time.</li>

<li>Substitute known values only after differentiating.</li>

<li>Solve for the unknown rate.</li>

</ul>

`,

        questions: [

            {
                q: "Related rates problems involve?",
                options: [
                    "Quantities changing with time",
                    "Only derivatives of polynomials",
                    "Only limits"
                ],
                answer: "Quantities changing with time",
                explanation: "Related rates study how multiple changing quantities are connected."
            },

            {
                q: "In related rates, differentiation is usually performed with respect to?",
                options: [
                    "Time",
                    "x",
                    "y"
                ],
                answer: "Time",
                explanation: "Rates are measured with respect to time."
            },

            {
                q: "When differentiating x² with respect to time, the result is?",
                options: [
                    "2x(dx/dt)",
                    "2x",
                    "x²"
                ],
                answer: "2x(dx/dt)",
                explanation: "Apply the Chain Rule because x depends on time."
            },

            {
                q: "In the circle example, if r=5 and dr/dt=3, then dA/dt equals?",
                options: [
                    "30π",
                    "15π",
                    "6π"
                ],
                answer: "30π",
                explanation: "Use dA/dt = 2πr(dr/dt)."
            },

            {
                q: "When should you substitute numerical values into a related rates problem?",
                options: [
                    "After differentiating",
                    "Before differentiating",
                    "Before writing the equation"
                ],
                answer: "After differentiating",
                explanation: "Substituting too early often produces incorrect results."
            },

            {
                q: "A common mistake in related rates is?",
                options: [
                    "Forgetting the Chain Rule",
                    "Using the Power Rule",
                    "Finding the derivative"
                ],
                answer: "Forgetting the Chain Rule",
                explanation: "Every changing variable is a function of time."

            }

        ]

    }
    ,

    "calculus1-linear-approximation": {
        title: "Linear Approximation",
        subtitle: "Learn how tangent lines can be used to estimate function values.",

        body: `

<h2>What is Linear Approximation?</h2>

<p><strong>Linear approximation</strong> uses the tangent line at a point to estimate nearby values of a function.</p>

<p>Since a tangent line closely follows the curve near the point of tangency, it provides an excellent approximation.</p>

<hr>

<h2>The Linear Approximation Formula</h2>

<p>If the function is differentiable at x=a, then:</p>

<p><strong>L(x)=f(a)+f'(a)(x−a)</strong></p>

<p>where:</p>

<ul>

<li>f(a) is the function value.</li>

<li>f'(a) is the slope of the tangent line.</li>

<li>L(x) is the approximation.</li>

</ul>

<hr>

<h2>When Should You Use It?</h2>

<p>Linear approximation works best when x is very close to a known value.</p>

<p>The farther away you move from the point of tangency, the less accurate the approximation becomes.</p>

<hr>

<h2>Example</h2>

<p>Estimate:</p>

<p><strong>√4.1</strong></p>

<p>Let:</p>

<p><strong>f(x)=√x</strong></p>

<p>Choose:</p>

<p><strong>a=4</strong></p>

<p>Compute:</p>

<p><strong>f(4)=2</strong></p>

<p><strong>f'(x)=1/(2√x)</strong></p>

<p><strong>f'(4)=1/4</strong></p>

<p>Apply the formula:</p>

<p><strong>L(x)=2+(1/4)(4.1−4)</strong></p>

<p><strong>L(4.1)=2.025</strong></p>

<p>The actual value is very close to this estimate.</p>

<hr>

<h2>Differentials</h2>

<p>Differentials provide another way to estimate small changes.</p>

<p>If:</p>

<p><strong>dy=f'(x)dx</strong></p>

<p>then:</p>

<ul>

<li>dx is a small change in x.</li>

<li>dy approximates the resulting change in y.</li>

</ul>

<hr>

<h2>Applications</h2>

<ul>

<li>Estimating square roots</li>

<li>Approximating cube roots</li>

<li>Error estimation</li>

<li>Engineering measurements</li>

<li>Scientific calculations</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Choosing a point far from the desired value.</li>

<li>Using the wrong derivative.</li>

<li>Confusing the approximation with the exact answer.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Linear approximation uses the tangent line.</li>

<li>The approximation is most accurate near the point of tangency.</li>

<li>Differentials estimate small changes in a function.</li>

</ul>

`,

        questions: [

            {
                q: "Linear approximation uses the?",
                options: [
                    "Tangent line",
                    "Secant line",
                    "Normal line"
                ],
                answer: "Tangent line",
                explanation: "The tangent line provides the best local linear approximation."
            },

            {
                q: "The linear approximation formula is?",
                options: [
                    "L(x)=f(a)+f'(a)(x−a)",
                    "L(x)=mx+b",
                    "f(x)=ax²+bx+c"
                ],
                answer: "L(x)=f(a)+f'(a)(x−a)",
                explanation: "This is the standard linear approximation formula."
            },

            {
                q: "Linear approximation is most accurate when?",
                options: [
                    "x is close to a",
                    "x is very large",
                    "x is very small"
                ],
                answer: "x is close to a",
                explanation: "Accuracy decreases as you move farther from the point of tangency."
            },

            {
                q: "In differentials, dy approximately equals?",
                options: [
                    "f'(x)dx",
                    "f(x)dx",
                    "xdy"
                ],
                answer: "f'(x)dx",
                explanation: "This is the differential approximation formula."
            },

            {
                q: "A common use of linear approximation is?",
                options: [
                    "Estimating square roots",
                    "Factoring polynomials",
                    "Solving triangles"
                ],
                answer: "Estimating square roots",
                explanation: "Linear approximation is often used to estimate values that are difficult to compute exactly."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Using a point too far from the desired value",
                    "Applying the Power Rule",
                    "Finding the derivative"
                ],
                answer: "Using a point too far from the desired value",
                explanation: "The tangent line only approximates the curve well near the point of tangency."
            }

        ]

    }
    ,

    "calculus1-newtons-method": {
        title: "Newton's Method",
        subtitle: "Learn how tangent lines can approximate solutions to equations.",

        body: `

<h2>What is Newton's Method?</h2>

<p><strong>Newton's Method</strong> is a numerical technique for approximating solutions (roots) of equations.</p>

<p>Instead of solving an equation exactly, Newton's Method repeatedly improves an estimate using tangent lines.</p>

<hr>

<h2>When is Newton's Method Used?</h2>

<p>Some equations are difficult or impossible to solve exactly.</p>

<p>Examples include:</p>

<ul>

<li>x = cos(x)</li>

<li>x³ − x − 1 = 0</li>

<li>e<sup>x</sup> = 5x</li>

</ul>

<p>Newton's Method provides an efficient approximation.</p>

<hr>

<h2>The Formula</h2>

<p>If xₙ is the current estimate, then the next estimate is:</p>

<p><strong>xₙ₊₁ = xₙ − f(xₙ) / f'(xₙ)</strong></p>

<p>Each iteration usually gets closer to the actual solution.</p>

<hr>

<h2>Example</h2>

<p>Solve:</p>

<p><strong>x² − 2 = 0</strong></p>

<p>Choose an initial guess:</p>

<p><strong>x₀ = 1.5</strong></p>

<p>Function:</p>

<p><strong>f(x)=x²−2</strong></p>

<p>Derivative:</p>

<p><strong>f'(x)=2x</strong></p>

<p>Apply Newton's Method:</p>

<p><strong>x₁ = 1.5 − (1.5²−2)/(2·1.5)</strong></p>

<p><strong>x₁ ≈ 1.4167</strong></p>

<p>Repeating the process gives:</p>

<p><strong>x ≈ 1.4142</strong></p>

<p>This is an excellent approximation of √2.</p>

<hr>

<h2>Advantages</h2>

<ul>

<li>Very fast convergence when the initial guess is close.</li>

<li>Works for many equations that cannot be solved algebraically.</li>

<li>Widely used in engineering, physics, finance, and computer science.</li>

</ul>

<hr>

<h2>Limitations</h2>

<ul>

<li>A poor initial guess may not converge.</li>

<li>The derivative cannot be zero.</li>

<li>Some functions require many iterations.</li>

</ul>

<hr>

<h2>Applications</h2>

<ul>

<li>Engineering design</li>

<li>Computer graphics</li>

<li>Machine learning</li>

<li>Physics simulations</li>

<li>Financial modeling</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the wrong derivative.</li>

<li>Choosing a poor starting value.</li>

<li>Stopping after only one iteration when greater accuracy is needed.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Newton's Method uses tangent lines to approximate roots.</li>

<li>Each iteration improves the estimate.</li>

<li>The method is fast when the initial guess is close to the actual solution.</li>

</ul>

`,

        questions: [

            {
                q: "Newton's Method is primarily used to?",
                options: [
                    "Approximate solutions to equations",
                    "Find exact integrals",
                    "Compute limits"
                ],
                answer: "Approximate solutions to equations",
                explanation: "Newton's Method is a numerical root-finding algorithm."
            },

            {
                q: "Newton's Method uses?",
                options: [
                    "Tangent lines",
                    "Normal lines",
                    "Secant lines only"
                ],
                answer: "Tangent lines",
                explanation: "Each tangent line provides the next approximation."
            },

            {
                q: "What information is required to apply Newton's Method?",
                options: [
                    "The function and its derivative",
                    "Only the function",
                    "Only the derivative"
                ],
                answer: "The function and its derivative",
                explanation: "The iteration formula requires both f(x) and f'(x)."
            },

            {
                q: "Choosing a good initial guess will generally?",
                options: [
                    "Improve convergence",
                    "Prevent differentiation",
                    "Eliminate the derivative"
                ],
                answer: "Improve convergence",
                explanation: "A starting value near the actual root usually leads to rapid convergence."
            },

            {
                q: "A limitation of Newton's Method is?",
                options: [
                    "The derivative cannot be zero",
                    "The function must be linear",
                    "It only works for polynomials"
                ],
                answer: "The derivative cannot be zero",
                explanation: "Division by zero makes the iteration impossible."
            },

            {
                q: "Newton's Method is an example of?",
                options: [
                    "A numerical approximation technique",
                    "An exact algebraic method",
                    "A geometry theorem"
                ],
                answer: "A numerical approximation technique",
                explanation: "It approximates solutions through repeated iterations."
            }

        ]

    }
    ,

    "calculus1-unit-3-review": {
        title: "Unit 3 Review",
        subtitle: "Review all applications of derivatives from Unit 3.",

        body: `

<h2>Unit 3 Review</h2>

<p>This review summarizes every major concept covered in Unit 3.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Tangent Lines</li>

<li>Normal Lines</li>

<li>Increasing and Decreasing Functions</li>

<li>Local Maximums and Minimums</li>

<li>Concavity and the Second Derivative</li>

<li>Points of Inflection</li>

<li>Second Derivative Test</li>

<li>Curve Sketching</li>

<li>Optimization</li>

<li>Related Rates</li>

<li>Linear Approximation (Differentials)</li>

<li>Newton's Method</li>

</ul>

<hr>

<h2>Important Ideas</h2>

<ul>

<li>The derivative gives the slope of the tangent line.</li>

<li>The normal line is perpendicular to the tangent line.</li>

<li>The first derivative determines increasing and decreasing intervals.</li>

<li>The second derivative determines concavity.</li>

<li>Critical points occur where f'(x)=0 or is undefined.</li>

<li>Inflection points occur where concavity changes.</li>

<li>Optimization problems use derivatives to maximize or minimize quantities.</li>

<li>Related rates connect variables that change with time.</li>

<li>Linear approximation estimates nearby function values using tangent lines.</li>

<li>Newton's Method approximates roots numerically.</li>

</ul>

<hr>

<h2>Key Tests</h2>

<ul>

<li>First Derivative Test</li>

<li>Second Derivative Test</li>

<li>Second Derivative Sign Test for Concavity</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the original function instead of its derivative.</li>

<li>Forgetting to test intervals.</li>

<li>Confusing local and absolute extrema.</li>

<li>Forgetting the Chain Rule in related rates.</li>

<li>Substituting values before differentiating in related rates.</li>

<li>Using linear approximation far from the point of tangency.</li>

<li>Using a poor initial guess in Newton's Method.</li>

</ul>

<hr>

<h2>Ready?</h2>

<p>If you can analyze graphs, classify extrema, solve optimization and related rates problems, estimate values with linear approximation, and apply Newton's Method, you are ready for the Unit 3 Test.</p>

`,

        questions: [

            {
                q: "The slope of a tangent line is given by?",
                options: [
                    "The derivative",
                    "The second derivative",
                    "The integral"
                ],
                answer: "The derivative",
                explanation: "The derivative gives the slope of the tangent line."
            },

            {
                q: "The first derivative determines?",
                options: [
                    "Increasing and decreasing intervals",
                    "Concavity",
                    "Area under the curve"
                ],
                answer: "Increasing and decreasing intervals",
                explanation: "The sign of the first derivative determines whether a function is increasing or decreasing."
            },

            {
                q: "The second derivative determines?",
                options: [
                    "Concavity",
                    "Domain",
                    "Intercepts"
                ],
                answer: "Concavity",
                explanation: "The second derivative tells whether the graph is concave up or down."
            },

            {
                q: "Optimization problems are used to find?",
                options: [
                    "Maximums and minimums",
                    "Only derivatives",
                    "Only limits"
                ],
                answer: "Maximums and minimums",
                explanation: "Optimization uses derivatives to maximize or minimize quantities."
            },

            {
                q: "Related rates problems involve variables changing with respect to?",
                options: [
                    "Time",
                    "x only",
                    "Distance only"
                ],
                answer: "Time",
                explanation: "Related rates describe quantities that change over time."
            },

            {
                q: "Newton's Method is used to?",
                options: [
                    "Approximate solutions to equations",
                    "Find exact derivatives",
                    "Evaluate limits"
                ],
                answer: "Approximate solutions to equations",
                explanation: "Newton's Method uses tangent lines to approximate roots."
            }

        ]

    }
    ,

    "calculus1-unit-3-test": {
        title: "Unit 3 Test",
        subtitle: "Test your understanding of applications of derivatives.",

        body: `

<h2>Unit 3 Test</h2>

<p>This assessment covers every topic from Unit 3.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Tangent Lines</li>

<li>Normal Lines</li>

<li>Increasing and Decreasing Functions</li>

<li>Local Maximums and Minimums</li>

<li>Concavity and the Second Derivative</li>

<li>Points of Inflection</li>

<li>Second Derivative Test</li>

<li>Curve Sketching</li>

<li>Optimization</li>

<li>Related Rates</li>

<li>Linear Approximation (Differentials)</li>

<li>Newton's Method</li>

</ul>

<hr>

<h2>Instructions</h2>

<p>Complete this assessment without using notes. A strong score means you are ready to continue studying integral calculus.</p>

`,

        questions: [

            {
                q: "The derivative represents the slope of the?",
                options: [
                    "Tangent line",
                    "Normal line",
                    "Secant line"
                ],
                answer: "Tangent line",
                explanation: "The derivative gives the slope of the tangent line."
            },

            {
                q: "The normal line is always?",
                options: [
                    "Perpendicular to the tangent line",
                    "Parallel to the tangent line",
                    "Horizontal"
                ],
                answer: "Perpendicular to the tangent line",
                explanation: "Normal lines are perpendicular to tangent lines."
            },

            {
                q: "If f'(x)>0, the function is?",
                options: [
                    "Increasing",
                    "Decreasing",
                    "Concave up"
                ],
                answer: "Increasing",
                explanation: "A positive first derivative means the function is increasing."
            },

            {
                q: "If f'(x)<0, the function is?",
                options: [
                    "Decreasing",
                    "Increasing",
                    "Concave down"
                ],
                answer: "Decreasing",
                explanation: "A negative first derivative means the function is decreasing."
            },

            {
                q: "A critical point occurs where?",
                options: [
                    "f'(x)=0 or does not exist",
                    "f''(x)=0 only",
                    "f(x)=0"
                ],
                answer: "f'(x)=0 or does not exist",
                explanation: "Critical points occur where the first derivative is zero or undefined."
            },

            {
                q: "If f''(x)>0 at a critical point, the point is a?",
                options: [
                    "Local minimum",
                    "Local maximum",
                    "Point of inflection"
                ],
                answer: "Local minimum",
                explanation: "A positive second derivative indicates the graph is concave up."
            },

            {
                q: "If f''(x)<0 at a critical point, the point is a?",
                options: [
                    "Local maximum",
                    "Local minimum",
                    "Absolute minimum"
                ],
                answer: "Local maximum",
                explanation: "A negative second derivative indicates the graph is concave down."
            },

            {
                q: "A point of inflection occurs when?",
                options: [
                    "The graph changes concavity",
                    "The derivative equals zero",
                    "The graph crosses the x-axis"
                ],
                answer: "The graph changes concavity",
                explanation: "Inflection points occur when concavity changes."
            },

            {
                q: "Optimization problems are used to find?",
                options: [
                    "Maximums and minimums",
                    "Only derivatives",
                    "Only limits"
                ],
                answer: "Maximums and minimums",
                explanation: "Optimization finds the largest or smallest possible value."
            },

            {
                q: "Related rates problems involve variables changing with respect to?",
                options: [
                    "Time",
                    "x",
                    "Distance"
                ],
                answer: "Time",
                explanation: "Related rates measure how variables change over time."
            },

            {
                q: "In related rates, values should usually be substituted?",
                options: [
                    "After differentiating",
                    "Before differentiating",
                    "Before writing the equation"
                ],
                answer: "After differentiating",
                explanation: "Differentiate first, then substitute known values."
            },

            {
                q: "Linear approximation uses the?",
                options: [
                    "Tangent line",
                    "Normal line",
                    "Secant line"
                ],
                answer: "Tangent line",
                explanation: "The tangent line provides a local linear approximation."
            },

            {
                q: "Linear approximation is most accurate when?",
                options: [
                    "x is close to the point of tangency",
                    "x is very large",
                    "x is near zero"
                ],
                answer: "x is close to the point of tangency",
                explanation: "Accuracy decreases as you move farther from the tangent point."
            },

            {
                q: "Newton's Method is used to?",
                options: [
                    "Approximate roots of equations",
                    "Find exact integrals",
                    "Compute limits"
                ],
                answer: "Approximate roots of equations",
                explanation: "Newton's Method is a numerical root-finding technique."
            },

            {
                q: "Newton's Method requires?",
                options: [
                    "The function and its derivative",
                    "Only the function",
                    "Only the derivative"
                ],
                answer: "The function and its derivative",
                explanation: "The iteration formula requires both f(x) and f'(x)."
            },

            {
                q: "The Second Derivative Test is used to classify?",
                options: [
                    "Critical points",
                    "Domains",
                    "Intercepts"
                ],
                answer: "Critical points",
                explanation: "It determines whether critical points are local maximums or local minimums."
            },

            {
                q: "Curve sketching combines information from?",
                options: [
                    "The function, first derivative, and second derivative",
                    "Only the first derivative",
                    "Only the original function"
                ],
                answer: "The function, first derivative, and second derivative",
                explanation: "All three provide information needed for an accurate sketch."
            },

            {
                q: "A common optimization mistake is?",
                options: [
                    "Leaving more than one variable in the objective function",
                    "Finding the derivative",
                    "Using the Chain Rule"
                ],
                answer: "Leaving more than one variable in the objective function",
                explanation: "The objective function should be written using only one variable."
            },

            {
                q: "A common related rates mistake is?",
                options: [
                    "Substituting values before differentiating",
                    "Using the Power Rule",
                    "Finding critical points"
                ],
                answer: "Substituting values before differentiating",
                explanation: "Differentiate first, then substitute the known values."
            },

            {
                q: "Completing Unit 3 prepares you to study?",
                options: [
                    "Integral Calculus",
                    "Geometry",
                    "Statistics"
                ],
                answer: "Integral Calculus",
                explanation: "The next major unit introduces antiderivatives and definite integrals."
            }

        ]

    }
    ,

    "calculus1-introduction-to-antiderivatives": {
        title: "Introduction to Antiderivatives",
        subtitle: "Learn how integration reverses differentiation.",

        body: `

<h2>What is an Antiderivative?</h2>

<p>An <strong>antiderivative</strong> is a function whose derivative is another given function.</p>

<p>In other words, integration is the opposite of differentiation.</p>

<hr>

<h2>Differentiation vs. Integration</h2>

<table border="1" cellpadding="6">

<tr>
<th>Differentiation</th>
<th>Integration</th>
</tr>

<tr>
<td>Finds the slope</td>
<td>Finds the original function</td>
</tr>

<tr>
<td>Derivative</td>
<td>Antiderivative</td>
</tr>

<tr>
<td>Rate of change</td>
<td>Accumulation</td>
</tr>

</table>

<hr>

<h2>Examples</h2>

<p>If:</p>

<p><strong>f(x)=x²</strong></p>

<p>then:</p>

<p><strong>f'(x)=2x</strong></p>

<p>Working backwards:</p>

<p>The antiderivative of <strong>2x</strong> is:</p>

<p><strong>x²</strong></p>

<hr>

<h2>Another Example</h2>

<p>The derivative of:</p>

<p><strong>x³</strong></p>

<p>is:</p>

<p><strong>3x²</strong></p>

<p>Therefore, an antiderivative of:</p>

<p><strong>3x²</strong></p>

<p>is:</p>

<p><strong>x³</strong></p>

<hr>

<h2>Why There Are Many Answers</h2>

<p>The derivative of every constant is zero.</p>

<p>That means:</p>

<ul>

<li>x²</li>

<li>x²+5</li>

<li>x²−8</li>

<li>x²+100</li>

</ul>

<p>all have the same derivative.</p>

<hr>

<h2>The Constant of Integration</h2>

<p>To account for every possible constant, we write:</p>

<p><strong>+ C</strong></p>

<p>This is called the <strong>constant of integration</strong>.</p>

<p>Every indefinite integral must include +C.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Recovering position from velocity</li>

<li>Recovering velocity from acceleration</li>

<li>Finding original functions</li>

<li>Modeling accumulated change</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting +C.</li>

<li>Thinking there is only one antiderivative.</li>

<li>Confusing differentiation with integration.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Integration reverses differentiation.</li>

<li>An antiderivative is an original function.</li>

<li>Always include the constant of integration (+C).</li>

</ul>

`,

        questions: [

            {
                q: "Integration is the ________ of differentiation.",
                options: [
                    "Inverse",
                    "Square",
                    "Derivative"
                ],
                answer: "Inverse",
                explanation: "Integration reverses differentiation."
            },

            {
                q: "An antiderivative of 2x is?",
                options: [
                    "x²",
                    "2x²",
                    "x"
                ],
                answer: "x²",
                explanation: "The derivative of x² is 2x."
            },

            {
                q: "Why do indefinite integrals include +C?",
                options: [
                    "Because constants disappear during differentiation",
                    "Because every answer must be positive",
                    "Because derivatives increase by one"
                ],
                answer: "Because constants disappear during differentiation",
                explanation: "Any constant has a derivative of zero."
            },

            {
                q: "The derivative of x³ is?",
                options: [
                    "3x²",
                    "x²",
                    "3x³"
                ],
                answer: "3x²",
                explanation: "Apply the Power Rule."
            },

            {
                q: "Which of the following has the derivative 2x?",
                options: [
                    "x²+7",
                    "x³",
                    "2x²"
                ],
                answer: "x²+7",
                explanation: "The derivative of x²+7 is 2x."
            },

            {
                q: "A common mistake in integration is?",
                options: [
                    "Forgetting +C",
                    "Using the Power Rule",
                    "Finding the derivative"
                ],
                answer: "Forgetting +C",
                explanation: "Every indefinite integral should include the constant of integration."
            }

        ]

    }
    ,

    "calculus1-indefinite-integrals": {
        title: "Indefinite Integrals",
        subtitle: "Learn the notation and meaning of indefinite integrals.",

        body: `

<h2>What is an Indefinite Integral?</h2>

<p>An <strong>indefinite integral</strong> represents the family of all antiderivatives of a function.</p>

<p>Instead of finding a slope, integration finds the original function.</p>

<hr>

<h2>The Integral Symbol</h2>

<p>The symbol for an indefinite integral is:</p>

<p><strong>∫</strong></p>

<p>It is read as:</p>

<p><strong>"The integral of..."</strong></p>

<p>For example:</p>

<p><strong>∫f(x) dx</strong></p>

<p>is read as:</p>

<p><strong>"The integral of f(x) with respect to x."</strong></p>

<hr>

<h2>What Does dx Mean?</h2>

<p>The <strong>dx</strong> tells us that we are integrating with respect to the variable x.</p>

<p>Later in calculus, you may also see:</p>

<ul>

<li>dy</li>

<li>dt</li>

<li>du</li>

</ul>

<p>depending on the variable being used.</p>

<hr>

<h2>Examples</h2>

<p><strong>∫2x dx = x² + C</strong></p>

<p><strong>∫3x² dx = x³ + C</strong></p>

<p><strong>∫5 dx = 5x + C</strong></p>

<hr>

<h2>Checking Your Answer</h2>

<p>You can always verify an indefinite integral by differentiating your answer.</p>

<p>Example:</p>

<p><strong>∫4x³ dx = x⁴ + C</strong></p>

<p>Differentiate:</p>

<p><strong>d/dx(x⁴+C)=4x³</strong></p>

<p>The original function is recovered.</p>

<hr>

<h2>Important Vocabulary</h2>

<ul>

<li>Integrand → the function being integrated.</li>

<li>Integral → the entire expression.</li>

<li>Antiderivative → the result.</li>

<li>Constant of Integration → +C.</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting the constant of integration.</li>

<li>Leaving off dx.</li>

<li>Thinking the integral always has one unique answer.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>An indefinite integral represents all antiderivatives.</li>

<li>The symbol ∫ means "integral."</li>

<li>dx indicates the variable of integration.</li>

<li>Always include +C.</li>

</ul>

`,

        questions: [

            {
                q: "The symbol ∫ represents?",
                options: [
                    "An integral",
                    "A derivative",
                    "A limit"
                ],
                answer: "An integral",
                explanation: "The symbol ∫ denotes integration."
            },

            {
                q: "The dx in ∫f(x) dx tells us?",
                options: [
                    "The variable of integration",
                    "The derivative",
                    "The domain"
                ],
                answer: "The variable of integration",
                explanation: "dx indicates we are integrating with respect to x."
            },

            {
                q: "An indefinite integral represents?",
                options: [
                    "All antiderivatives",
                    "Only one function",
                    "The derivative"
                ],
                answer: "All antiderivatives",
                explanation: "There are infinitely many antiderivatives because of the constant of integration."
            },

            {
                q: "∫2x dx equals?",
                options: [
                    "x² + C",
                    "2x² + C",
                    "x + C"
                ],
                answer: "x² + C",
                explanation: "Differentiate x²+C to verify the result."
            },

            {
                q: "The function being integrated is called the?",
                options: [
                    "Integrand",
                    "Derivative",
                    "Domain"
                ],
                answer: "Integrand",
                explanation: "The integrand is the function inside the integral."
            },

            {
                q: "A correct indefinite integral should always include?",
                options: [
                    "+C",
                    "An endpoint",
                    "A denominator"
                ],
                answer: "+C",
                explanation: "The constant of integration accounts for all possible antiderivatives."
            }

        ]

    }
    ,

    "calculus1-basic-integration-rules": {
        title: "Basic Integration Rules",
        subtitle: "Learn the fundamental rules used to evaluate indefinite integrals.",

        body: `

<h2>Why Do We Need Integration Rules?</h2>

<p>Just as differentiation has rules, integration also follows a set of standard rules.</p>

<p>Most integrals can be solved by applying these basic rules.</p>

<hr>

<h2>The Reverse Power Rule</h2>

<p>The most important integration rule is the <strong>Reverse Power Rule</strong>.</p>

<p>If <strong>n ≠ -1</strong>, then:</p>

<p><strong>∫xⁿ dx = xⁿ⁺¹/(n+1) + C</strong></p>

<p>Notice that this is the opposite of the Power Rule for derivatives.</p>

<hr>

<h2>Examples</h2>

<p><strong>∫x² dx = x³/3 + C</strong></p>

<p><strong>∫x⁵ dx = x⁶/6 + C</strong></p>

<p><strong>∫√x dx = ∫x^(1/2) dx = (2/3)x^(3/2)+C</strong></p>

<hr>

<h2>Constant Rule</h2>

<p>The integral of a constant is:</p>

<p><strong>∫a dx = ax + C</strong></p>

<p>Example:</p>

<p><strong>∫8 dx = 8x + C</strong></p>

<hr>

<h2>Constant Multiple Rule</h2>

<p>Constants can be factored outside the integral.</p>

<p><strong>∫cf(x) dx = c∫f(x) dx</strong></p>

<p>Example:</p>

<p><strong>∫5x³ dx = 5∫x³ dx = (5/4)x⁴ + C</strong></p>

<hr>

<h2>Sum and Difference Rules</h2>

<p>You may integrate each term separately.</p>

<p><strong>∫[f(x)+g(x)]dx = ∫f(x)dx + ∫g(x)dx</strong></p>

<p>Example:</p>

<p><strong>∫(x²+4x−7)dx</strong></p>

<p>equals</p>

<p><strong>x³/3 + 2x² − 7x + C</strong></p>

<hr>

<h2>Important Exception</h2>

<p>The Reverse Power Rule does <strong>not</strong> work when:</p>

<p><strong>n = -1</strong></p>

<p>That special case becomes:</p>

<p><strong>∫1/x dx = ln|x| + C</strong></p>

<p>This will be studied later.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to divide by the new exponent.</li>

<li>Forgetting +C.</li>

<li>Applying the Reverse Power Rule when n=-1.</li>

<li>Forgetting to increase the exponent first.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Add one to the exponent.</li>

<li>Divide by the new exponent.</li>

<li>Always include +C.</li>

<li>Remember that x⁻¹ is a special case.</li>

</ul>

`,

        questions: [

            {
                q: "The Reverse Power Rule says to first?",
                options: [
                    "Add one to the exponent",
                    "Subtract one from the exponent",
                    "Multiply by the exponent"
                ],
                answer: "Add one to the exponent",
                explanation: "The exponent increases by one before dividing."
            },

            {
                q: "After increasing the exponent, you should?",
                options: [
                    "Divide by the new exponent",
                    "Multiply by the old exponent",
                    "Subtract the exponent"
                ],
                answer: "Divide by the new exponent",
                explanation: "This completes the Reverse Power Rule."
            },

            {
                q: "∫x⁴ dx equals?",
                options: [
                    "x⁵/5 + C",
                    "5x⁴ + C",
                    "x⁴/5 + C"
                ],
                answer: "x⁵/5 + C",
                explanation: "Increase the exponent to 5 and divide by 5."
            },

            {
                q: "∫7 dx equals?",
                options: [
                    "7x + C",
                    "7 + C",
                    "x⁷ + C"
                ],
                answer: "7x + C",
                explanation: "The integral of a constant is the constant multiplied by x."
            },

            {
                q: "Which exponent is the exception to the Reverse Power Rule?",
                options: [
                    "-1",
                    "0",
                    "1"
                ],
                answer: "-1",
                explanation: "When n = -1, the integral is ln|x| + C."
            },

            {
                q: "A common mistake when evaluating indefinite integrals is?",
                options: [
                    "Forgetting +C",
                    "Finding the derivative",
                    "Using the Chain Rule"
                ],
                answer: "Forgetting +C",
                explanation: "Every indefinite integral should include the constant of integration."
            }

        ]

    }
    ,

    "calculus1-u-substitution": {
        title: "u-Substitution",
        subtitle: "Learn how to reverse the Chain Rule when evaluating integrals.",

        body: `

<h2>What is u-Substitution?</h2>

<p><strong>u-Substitution</strong> is an integration technique used when an integral contains a composite function.</p>

<p>It is essentially the <strong>reverse of the Chain Rule</strong> from differentiation.</p>

<hr>

<h2>When Should You Use It?</h2>

<p>Use u-substitution when:</p>

<ul>

<li>You see one function inside another.</li>

<li>The derivative of the inside function also appears in the integral.</li>

</ul>

<hr>

<h2>The General Process</h2>

<ol>

<li>Choose the inside function and let it equal <strong>u</strong>.</li>

<li>Differentiate to find <strong>du</strong>.</li>

<li>Rewrite the entire integral using u.</li>

<li>Integrate with respect to u.</li>

<li>Substitute the original expression back.</li>

</ol>

<hr>

<h2>Example 1</h2>

<p>Evaluate:</p>

<p><strong>∫2x(x²+3)⁵ dx</strong></p>

<p>Choose:</p>

<p><strong>u=x²+3</strong></p>

<p>Then:</p>

<p><strong>du=2x dx</strong></p>

<p>The integral becomes:</p>

<p><strong>∫u⁵ du</strong></p>

<p>Integrate:</p>

<p><strong>u⁶/6 + C</strong></p>

<p>Replace u:</p>

<p><strong>(x²+3)⁶/6 + C</strong></p>

<hr>

<h2>Example 2</h2>

<p>Evaluate:</p>

<p><strong>∫3(3x+1)² dx</strong></p>

<p>Choose:</p>

<p><strong>u=3x+1</strong></p>

<p>Then:</p>

<p><strong>du=3 dx</strong></p>

<p>The integral becomes:</p>

<p><strong>∫u² du</strong></p>

<p>Answer:</p>

<p><strong>u³/3 + C</strong></p>

<p>Substitute back:</p>

<p><strong>(3x+1)³/3 + C</strong></p>

<hr>

<h2>Why It Works</h2>

<p>The substitution simplifies a complicated integral into one that uses the basic integration rules.</p>

<p>After solving the simpler integral, replace u with the original expression.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Choosing the wrong expression for u.</li>

<li>Forgetting to replace u at the end.</li>

<li>Not converting the entire integral into u.</li>

<li>Forgetting the constant of integration.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>u-Substitution reverses the Chain Rule.</li>

<li>Choose the inside function for u.</li>

<li>Rewrite the integral completely in terms of u.</li>

<li>Integrate.</li>

<li>Substitute the original expression back.</li>

</ul>

`,

        questions: [

            {
                q: "u-Substitution reverses which differentiation rule?",
                options: [
                    "Chain Rule",
                    "Product Rule",
                    "Quotient Rule"
                ],
                answer: "Chain Rule",
                explanation: "u-Substitution is the reverse process of the Chain Rule."
            },

            {
                q: "When choosing u, you should usually select?",
                options: [
                    "The inside function",
                    "The outside function",
                    "The constant"
                ],
                answer: "The inside function",
                explanation: "The inside function is typically the best choice."
            },

            {
                q: "After integrating with respect to u, what must you do?",
                options: [
                    "Substitute the original expression back",
                    "Differentiate the answer",
                    "Multiply by u"
                ],
                answer: "Substitute the original expression back",
                explanation: "The final answer should be written using the original variable."
            },

            {
                q: "In ∫2x(x²+3)⁵ dx, the best choice for u is?",
                options: [
                    "x²+3",
                    "2x",
                    "(x²+3)⁵"
                ],
                answer: "x²+3",
                explanation: "Its derivative, 2x, also appears in the integral."
            },

            {
                q: "A common mistake in u-substitution is?",
                options: [
                    "Forgetting to substitute back",
                    "Using the Power Rule",
                    "Finding the derivative"
                ],
                answer: "Forgetting to substitute back",
                explanation: "The final answer should be expressed in terms of the original variable."
            },

            {
                q: "Which statement about u-substitution is true?",
                options: [
                    "It simplifies complicated integrals into easier ones",
                    "It only works for logarithms",
                    "It replaces differentiation"
                ],
                answer: "It simplifies complicated integrals into easier ones",
                explanation: "Substitution transforms the integral into a simpler form."

            }

        ]

    }
    ,

    "calculus1-area-under-a-curve": {
        title: "Area Under a Curve",
        subtitle: "Learn how integration measures accumulated area beneath a graph.",

        body: `

<h2>What Does an Integral Represent?</h2>

<p>One of the most important interpretations of an integral is that it measures the <strong>area under a curve</strong>.</p>

<p>If a function stays above the x-axis, the definite integral gives the exact area between the curve and the x-axis.</p>

<hr>

<h2>Positive Area</h2>

<p>If the graph remains above the x-axis, every piece of area is positive.</p>

<p>The total area equals the value of the definite integral.</p>

<hr>

<h2>Negative Area</h2>

<p>If part of the graph lies below the x-axis, that portion contributes negative area.</p>

<p>The definite integral measures <strong>signed area</strong>, not always geometric area.</p>

<hr>

<h2>Example</h2>

<p>Suppose a function forms a region above the x-axis between x = 1 and x = 4.</p>

<p>The definite integral measures the total area enclosed by:</p>

<ul>

<li>The curve</li>

<li>The x-axis</li>

<li>The vertical lines x = 1 and x = 4</li>

</ul>

<hr>

<h2>Area vs Signed Area</h2>

<table border="1" cellpadding="6">

<tr>
<th>Situation</th>
<th>Integral Result</th>
</tr>

<tr>
<td>Above x-axis</td>
<td>Positive</td>
</tr>

<tr>
<td>Below x-axis</td>
<td>Negative</td>
</tr>

<tr>
<td>Crosses x-axis</td>
<td>Positive and negative areas combine</td>
</tr>

</table>

<hr>

<h2>Real-World Meaning</h2>

<p>Area under a curve represents accumulated change.</p>

<p>Examples include:</p>

<ul>

<li>Total distance from velocity</li>

<li>Total water collected over time</li>

<li>Total profit over a period</li>

<li>Total electrical charge</li>

</ul>

<hr>

<h2>Visualization</h2>

<p>Imagine slicing the region beneath the curve into many thin rectangles.</p>

<p>As the rectangles become thinner and thinner, their total area approaches the exact area under the curve.</p>

<p>This idea leads directly to <strong>Riemann Sums</strong>, the next topic.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Thinking an integral always represents positive area.</li>

<li>Confusing geometric area with signed area.</li>

<li>Ignoring portions of the graph below the x-axis.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Definite integrals measure accumulated area.</li>

<li>Area above the x-axis is positive.</li>

<li>Area below the x-axis is negative.</li>

<li>Riemann sums approximate this area using rectangles.</li>

</ul>

`,

        questions: [

            {
                q: "A definite integral can represent?",
                options: [
                    "Area under a curve",
                    "The slope of a tangent line",
                    "A derivative"
                ],
                answer: "Area under a curve",
                explanation: "One of the primary interpretations of a definite integral is accumulated area."
            },

            {
                q: "If a graph is entirely above the x-axis, the definite integral is?",
                options: [
                    "Positive",
                    "Negative",
                    "Zero"
                ],
                answer: "Positive",
                explanation: "Area above the x-axis contributes positively."
            },

            {
                q: "If part of the graph lies below the x-axis, the integral measures?",
                options: [
                    "Signed area",
                    "Only positive area",
                    "Only geometric area"
                ],
                answer: "Signed area",
                explanation: "Regions below the x-axis contribute negative values."
            },

            {
                q: "Area under a velocity curve represents?",
                options: [
                    "Distance or displacement",
                    "Slope",
                    "Acceleration only"
                ],
                answer: "Distance or displacement",
                explanation: "Integrating velocity accumulates motion over time."
            },

            {
                q: "The idea of approximating area with rectangles leads to?",
                options: [
                    "Riemann Sums",
                    "Chain Rule",
                    "Newton's Method"
                ],
                answer: "Riemann Sums",
                explanation: "Riemann sums approximate the area beneath a curve using rectangles."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Assuming all area is positive",
                    "Forgetting the Power Rule",
                    "Using the Product Rule"
                ],
                answer: "Assuming all area is positive",
                explanation: "Definite integrals measure signed area, so regions below the x-axis contribute negatively."
            }

        ]

    }
    ,

    "calculus1-riemann-sums": {
        title: "Riemann Sums",
        subtitle: "Learn how rectangles approximate the area under a curve.",

        body: `

<h2>What are Riemann Sums?</h2>

<p>A <strong>Riemann Sum</strong> approximates the area under a curve by dividing the interval into many small rectangles.</p>

<p>The total area is estimated by adding the area of every rectangle.</p>

<hr>

<h2>The Basic Idea</h2>

<p>Suppose a function is defined on an interval.</p>

<p>Instead of finding the exact area immediately, we divide the interval into many equal pieces.</p>

<p>Each piece forms a rectangle.</p>

<p>The sum of the rectangle areas approximates the total area.</p>

<hr>

<h2>The Width of Each Rectangle</h2>

<p>The width of every rectangle is written as:</p>

<p><strong>Δx = (b − a)/n</strong></p>

<ul>

<li>a = left endpoint</li>

<li>b = right endpoint</li>

<li>n = number of rectangles</li>

</ul>

<p>As n increases, Δx becomes smaller.</p>

<hr>

<h2>Choosing the Height</h2>

<p>The rectangle's height can be chosen using:</p>

<ul>

<li>Left endpoints</li>

<li>Right endpoints</li>

<li>Midpoints</li>

</ul>

<p>Each method produces a slightly different approximation.</p>

<hr>

<h2>Example</h2>

<p>Approximate the area under a curve on the interval [0,4] using four rectangles.</p>

<p>The interval length is:</p>

<p><strong>4−0 = 4</strong></p>

<p>The rectangle width is:</p>

<p><strong>Δx = 4/4 = 1</strong></p>

<p>Each rectangle has width 1.</p>

<p>The heights are determined from the function values.</p>

<p>Add the areas of all four rectangles to obtain the approximation.</p>

<hr>

<h2>More Rectangles = Better Approximation</h2>

<p>As the number of rectangles increases:</p>

<ul>

<li>The rectangles become thinner.</li>

<li>The approximation becomes more accurate.</li>

<li>The error becomes smaller.</li>

</ul>

<p>In the limit, the Riemann Sum becomes the definite integral.</p>

<hr>

<h2>Left vs Right vs Midpoint</h2>

<table border="1" cellpadding="6">

<tr>
<th>Method</th>
<th>Rectangle Height</th>
</tr>

<tr>
<td>Left Sum</td>
<td>Left endpoint</td>
</tr>

<tr>
<td>Right Sum</td>
<td>Right endpoint</td>
</tr>

<tr>
<td>Midpoint Sum</td>
<td>Midpoint</td>
</tr>

</table>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the wrong rectangle width.</li>

<li>Choosing incorrect evaluation points.</li>

<li>Forgetting to multiply height by width.</li>

<li>Assuming every approximation is exact.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Riemann Sums approximate area.</li>

<li>Rectangles become thinner as n increases.</li>

<li>More rectangles produce better approximations.</li>

<li>The definite integral is the limit of a Riemann Sum.</li>

</ul>

`,

        questions: [

            {
                q: "A Riemann Sum approximates?",
                options: [
                    "The area under a curve",
                    "The derivative",
                    "The slope of a tangent line"
                ],
                answer: "The area under a curve",
                explanation: "Riemann Sums estimate the area beneath a graph."
            },

            {
                q: "The width of each rectangle is represented by?",
                options: [
                    "Δx",
                    "dy",
                    "f(x)"
                ],
                answer: "Δx",
                explanation: "Δx represents the width of each subinterval."
            },

            {
                q: "As the number of rectangles increases, the approximation becomes?",
                options: [
                    "More accurate",
                    "Less accurate",
                    "Unchanged"
                ],
                answer: "More accurate",
                explanation: "Smaller rectangles provide a better approximation."
            },

            {
                q: "Which is NOT a common Riemann Sum method?",
                options: [
                    "Average Endpoint Rule",
                    "Left Endpoint Rule",
                    "Right Endpoint Rule"
                ],
                answer: "Average Endpoint Rule",
                explanation: "The standard methods are Left, Right, and Midpoint."
            },

            {
                q: "A midpoint Riemann Sum uses?",
                options: [
                    "The midpoint of each interval",
                    "The left endpoint",
                    "The right endpoint"
                ],
                answer: "The midpoint of each interval",
                explanation: "Each rectangle's height is determined from the midpoint."
            },

            {
                q: "The definite integral is best described as?",
                options: [
                    "The limit of a Riemann Sum",
                    "A derivative",
                    "A tangent line"
                ],
                answer: "The limit of a Riemann Sum",
                explanation: "As the number of rectangles approaches infinity, the Riemann Sum becomes the definite integral."
            }

        ]

    }
    ,

    "calculus1-definite-integrals": {
        title: "Definite Integrals",
        subtitle: "Learn how definite integrals measure exact accumulated change over an interval.",

        body: `

<h2>What is a Definite Integral?</h2>

<p>A <strong>definite integral</strong> measures the accumulated value of a function over a specific interval.</p>

<p>Unlike an indefinite integral, a definite integral produces a <strong>single numerical answer</strong>.</p>

<hr>

<h2>Notation</h2>

<p>A definite integral is written as:</p>

<p><strong>∫<sub>a</sub><sup>b</sup> f(x) dx</strong></p>

<ul>

<li><strong>a</strong> = lower limit</li>

<li><strong>b</strong> = upper limit</li>

<li><strong>f(x)</strong> = integrand</li>

<li><strong>dx</strong> = variable of integration</li>

</ul>

<hr>

<h2>Geometric Meaning</h2>

<p>If the graph stays above the x-axis, the definite integral equals the exact area under the curve between x=a and x=b.</p>

<p>If portions of the graph lie below the x-axis, the integral represents <strong>signed area</strong>.</p>

<hr>

<h2>Evaluating a Definite Integral</h2>

<p>The Fundamental Theorem of Calculus tells us to:</p>

<ol>

<li>Find an antiderivative F(x).</li>

<li>Evaluate F(b).</li>

<li>Evaluate F(a).</li>

<li>Compute:</li>

</ol>

<p><strong>F(b) − F(a)</strong></p>

<hr>

<h2>Example</h2>

<p>Evaluate:</p>

<p><strong>∫<sub>0</sub><sup>2</sup> 2x dx</strong></p>

<p>An antiderivative is:</p>

<p><strong>x²</strong></p>

<p>Evaluate:</p>

<p><strong>F(2)=4</strong></p>

<p><strong>F(0)=0</strong></p>

<p>Therefore:</p>

<p><strong>4−0=4</strong></p>

<hr>

<h2>Units</h2>

<p>If x has units of seconds and f(x) has units of meters per second, then the definite integral has units of meters.</p>

<p>Definite integrals often represent accumulated quantities.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Total distance traveled</li>

<li>Total revenue</li>

<li>Total accumulated rainfall</li>

<li>Total electrical charge</li>

<li>Area under curves</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Reversing the order of subtraction.</li>

<li>Adding +C to a definite integral.</li>

<li>Forgetting to evaluate both limits.</li>

<li>Ignoring negative area.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Definite integrals evaluate accumulated change.</li>

<li>They produce one numerical value.</li>

<li>Evaluate the antiderivative at both limits.</li>

<li>Subtract lower from upper.</li>

</ul>

`,

        questions: [

            {
                q: "A definite integral produces?",
                options: [
                    "A single numerical value",
                    "A family of functions",
                    "A derivative"
                ],
                answer: "A single numerical value",
                explanation: "Unlike an indefinite integral, a definite integral evaluates to one number."
            },

            {
                q: "The lower limit of integration is?",
                options: [
                    "a",
                    "b",
                    "dx"
                ],
                answer: "a",
                explanation: "The lower limit is represented by a."
            },

            {
                q: "To evaluate a definite integral, compute?",
                options: [
                    "F(b)-F(a)",
                    "F(a)-F(b)",
                    "F(a)+F(b)"
                ],
                answer: "F(b)-F(a)",
                explanation: "Evaluate the antiderivative at the upper limit and subtract its value at the lower limit."
            },

            {
                q: "Should a definite integral include +C?",
                options: [
                    "No",
                    "Yes",
                    "Only sometimes"
                ],
                answer: "No",
                explanation: "The constant of integration cancels when evaluating both limits."
            },

            {
                q: "If the graph is below the x-axis, the definite integral contributes?",
                options: [
                    "Negative signed area",
                    "Positive area",
                    "Zero"
                ],
                answer: "Negative signed area",
                explanation: "Regions below the x-axis contribute negatively."
            },

            {
                q: "A definite integral is commonly used to calculate?",
                options: [
                    "Accumulated quantities",
                    "Only derivatives",
                    "Only limits"
                ],
                answer: "Accumulated quantities",
                explanation: "Definite integrals model accumulated change over an interval."
            }

        ]

    }
    ,

    "calculus1-properties-of-definite-integrals": {
        title: "Properties of Definite Integrals",
        subtitle: "Learn the fundamental properties that simplify definite integrals.",

        body: `

<h2>Why Learn the Properties?</h2>

<p>Definite integrals follow several important rules that make calculations easier.</p>

<p>Instead of evaluating every integral from scratch, these properties allow us to simplify many problems.</p>

<hr>

<h2>Property 1: Same Limits</h2>

<p>If the upper and lower limits are the same, then:</p>

<p><strong>∫<sub>a</sub><sup>a</sup> f(x) dx = 0</strong></p>

<p>No interval means no accumulated area.</p>

<hr>

<h2>Property 2: Reversing the Limits</h2>

<p>If the limits are reversed, the sign changes.</p>

<p><strong>∫<sub>a</sub><sup>b</sup> f(x) dx = −∫<sub>b</sub><sup>a</sup> f(x) dx</strong></p>

<hr>

<h2>Property 3: Constant Multiple Rule</h2>

<p>A constant may be factored outside the integral.</p>

<p><strong>∫<sub>a</sub><sup>b</sup> cf(x) dx = c∫<sub>a</sub><sup>b</sup> f(x) dx</strong></p>

<hr>

<h2>Property 4: Sum Rule</h2>

<p>The integral of a sum equals the sum of the integrals.</p>

<p><strong>∫(f(x)+g(x))dx = ∫f(x)dx + ∫g(x)dx</strong></p>

<p>The same property applies to differences.</p>

<hr>

<h2>Property 5: Additivity of Intervals</h2>

<p>If c lies between a and b, then:</p>

<p><strong>∫<sub>a</sub><sup>b</sup> f(x) dx = ∫<sub>a</sub><sup>c</sup> f(x) dx + ∫<sub>c</sub><sup>b</sup> f(x) dx</strong></p>

<p>This allows large intervals to be split into smaller pieces.</p>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<p><strong>∫<sub>0</sub><sup>5</sup> f(x) dx = 12</strong></p>

<p>Then:</p>

<p><strong>∫<sub>5</sub><sup>0</sup> f(x) dx = -12</strong></p>

<p>Simply reversing the limits changes only the sign.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Simplifying difficult integrals</li>

<li>Breaking intervals into pieces</li>

<li>Comparing accumulated quantities</li>

<li>Preparing for the Fundamental Theorem of Calculus</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to change the sign when reversing limits.</li>

<li>Thinking equal limits produce one instead of zero.</li>

<li>Not factoring constants outside the integral.</li>

<li>Adding intervals incorrectly.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Equal limits produce zero.</li>

<li>Reversing limits changes the sign.</li>

<li>Constants factor outside the integral.</li>

<li>Integrals may be split across intervals.</li>

<li>These properties simplify many calculations.</li>

</ul>

`,

        questions: [

            {
                q: "If the upper and lower limits are the same, the definite integral equals?",
                options: [
                    "0",
                    "1",
                    "The function value"
                ],
                answer: "0",
                explanation: "There is no interval over which to accumulate area."
            },

            {
                q: "Reversing the limits of integration causes the integral to?",
                options: [
                    "Change sign",
                    "Double",
                    "Become zero"
                ],
                answer: "Change sign",
                explanation: "Reversing the limits multiplies the integral by -1."
            },

            {
                q: "A constant inside a definite integral may be?",
                options: [
                    "Factored outside",
                    "Removed completely",
                    "Squared"
                ],
                answer: "Factored outside",
                explanation: "The Constant Multiple Rule applies to definite integrals."
            },

            {
                q: "The Additivity Property allows you to?",
                options: [
                    "Split an interval into smaller intervals",
                    "Differentiate the integral",
                    "Reverse the Power Rule"
                ],
                answer: "Split an interval into smaller intervals",
                explanation: "The total integral equals the sum of the pieces."
            },

            {
                q: "If ∫₀⁵ f(x)dx = 10, then ∫₅⁰ f(x)dx equals?",
                options: [
                    "-10",
                    "10",
                    "0"
                ],
                answer: "-10",
                explanation: "Reversing the limits changes only the sign."
            },

            {
                q: "These properties are most useful because they?",
                options: [
                    "Simplify definite integral calculations",
                    "Replace derivatives",
                    "Eliminate antiderivatives"
                ],
                answer: "Simplify definite integral calculations",
                explanation: "They make many definite integrals easier to evaluate."
            }

        ]

    }
    ,

    "calculus1-fundamental-theorem-of-calculus-part-1": {
        title: "Fundamental Theorem of Calculus (Part 1)",
        subtitle: "Learn how differentiation and integration are connected.",

        body: `

<h2>What is the Fundamental Theorem of Calculus?</h2>

<p>The <strong>Fundamental Theorem of Calculus (FTC)</strong> connects the two major ideas of calculus:</p>

<ul>

<li>Differentiation</li>

<li>Integration</li>

</ul>

<p>It shows that differentiation and integration are inverse operations.</p>

<hr>

<h2>The Theorem</h2>

<p>Suppose:</p>

<p><strong>F(x)=∫<sub>a</sub><sup>x</sup> f(t) dt</strong></p>

<p>where:</p>

<ul>

<li>f is continuous.</li>

<li>a is a constant.</li>

<li>x is the variable upper limit.</li>

</ul>

<p>Then:</p>

<p><strong>F'(x)=f(x)</strong></p>

<hr>

<h2>What Does This Mean?</h2>

<p>If you build a function by accumulating area under a curve, then differentiate that function, you recover the original function.</p>

<p>In short:</p>

<p><strong>Differentiation undoes integration.</strong></p>

<hr>

<h2>Example</h2>

<p>Let:</p>

<p><strong>F(x)=∫<sub>0</sub><sup>x</sup> (t²+1) dt</strong></p>

<p>Without evaluating the integral:</p>

<p><strong>F'(x)=x²+1</strong></p>

<p>The derivative is simply the original integrand with x replacing t.</p>

<hr>

<h2>Why Use t Instead of x?</h2>

<p>The variable inside the integral is called a <strong>dummy variable</strong>.</p>

<p>It can be written as:</p>

<ul>

<li>t</li>

<li>u</li>

<li>s</li>

<li>or almost any other variable.</li>

</ul>

<p>Only the upper limit x remains after differentiation.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Accumulated distance</li>

<li>Accumulated profit</li>

<li>Population growth</li>

<li>Fluid flow</li>

<li>Electrical charge</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Trying to evaluate the integral first.</li>

<li>Differentiating the dummy variable.</li>

<li>Confusing the upper limit with the dummy variable.</li>

<li>Thinking FTC Part 1 evaluates definite integrals.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>FTC Part 1 connects differentiation and integration.</li>

<li>The derivative of an accumulated area function is the original integrand.</li>

<li>The dummy variable disappears after differentiation.</li>

<li>This theorem is one of the foundations of calculus.</li>

</ul>

`,

        questions: [

            {
                q: "The Fundamental Theorem of Calculus connects?",
                options: [
                    "Differentiation and integration",
                    "Geometry and algebra",
                    "Functions and matrices"
                ],
                answer: "Differentiation and integration",
                explanation: "The theorem shows these two operations are inverses."
            },

            {
                q: "If F(x)=∫₀ˣ f(t)dt, then F'(x) equals?",
                options: [
                    "f(x)",
                    "F(x)",
                    "t"
                ],
                answer: "f(x)",
                explanation: "FTC Part 1 states that the derivative of the accumulated area function is the original integrand."
            },

            {
                q: "The variable inside the integral (such as t) is called?",
                options: [
                    "A dummy variable",
                    "A dependent variable",
                    "A constant"
                ],
                answer: "A dummy variable",
                explanation: "The integration variable is temporary and disappears after differentiation."
            },

            {
                q: "In FTC Part 1, do you evaluate the integral first?",
                options: [
                    "No",
                    "Yes",
                    "Only sometimes"
                ],
                answer: "No",
                explanation: "Differentiate the accumulated area function directly."
            },

            {
                q: "FTC Part 1 shows that differentiation ______ integration.",
                options: [
                    "Undoes",
                    "Doubles",
                    "Approximates"
                ],
                answer: "Undoes",
                explanation: "Differentiation and integration are inverse operations."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Trying to evaluate the integral before differentiating",
                    "Forgetting the Chain Rule",
                    "Using the Product Rule"
                ],
                answer: "Trying to evaluate the integral before differentiating",
                explanation: "FTC Part 1 allows direct differentiation of the accumulated area function."
            }

        ]

    }
    ,

    "calculus1-fundamental-theorem-of-calculus-part-2": {
        title: "Fundamental Theorem of Calculus (Part 2)",
        subtitle: "Learn how to evaluate definite integrals using antiderivatives.",

        body: `

<h2>What is the Fundamental Theorem of Calculus (Part 2)?</h2>

<p>The <strong>Fundamental Theorem of Calculus (Part 2)</strong> provides a simple method for evaluating definite integrals.</p>

<p>Instead of approximating area with rectangles, we use an antiderivative.</p>

<hr>

<h2>The Formula</h2>

<p>If <strong>F(x)</strong> is an antiderivative of <strong>f(x)</strong>, then:</p>

<p><strong>∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a)</strong></p>

<p>This means we evaluate the antiderivative at the upper limit and subtract its value at the lower limit.</p>

<hr>

<h2>Step-by-Step Process</h2>

<ol>

<li>Find an antiderivative F(x).</li>

<li>Substitute the upper limit b.</li>

<li>Substitute the lower limit a.</li>

<li>Compute F(b) − F(a).</li>

</ol>

<hr>

<h2>Example 1</h2>

<p>Evaluate:</p>

<p><strong>∫<sub>1</sub><sup>3</sup> 2x dx</strong></p>

<p>Antiderivative:</p>

<p><strong>F(x)=x²</strong></p>

<p>Evaluate:</p>

<p><strong>F(3)=9</strong></p>

<p><strong>F(1)=1</strong></p>

<p>Answer:</p>

<p><strong>9−1=8</strong></p>

<hr>

<h2>Example 2</h2>

<p>Evaluate:</p>

<p><strong>∫<sub>0</sub><sup>2</sup> (3x²+1) dx</strong></p>

<p>Antiderivative:</p>

<p><strong>x³+x</strong></p>

<p>Evaluate:</p>

<p><strong>(8+2)−(0+0)=10</strong></p>

<hr>

<h2>Why Doesn't +C Appear?</h2>

<p>For definite integrals, the constant of integration cancels:</p>

<p><strong>(F(b)+C)−(F(a)+C)=F(b)−F(a)</strong></p>

<p>Therefore, <strong>+C is never included</strong> when evaluating a definite integral.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Finding exact areas</li>

<li>Total distance traveled</li>

<li>Accumulated profit</li>

<li>Population growth</li>

<li>Fluid flow</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Reversing the subtraction order.</li>

<li>Including +C.</li>

<li>Evaluating the original function instead of its antiderivative.</li>

<li>Making arithmetic errors when substituting the limits.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Find an antiderivative.</li>

<li>Evaluate the upper limit.</li>

<li>Evaluate the lower limit.</li>

<li>Subtract: F(b) − F(a).</li>

<li>Do not include +C.</li>

</ul>

`,

        questions: [

            {
                q: "FTC Part 2 is used to?",
                options: [
                    "Evaluate definite integrals",
                    "Find derivatives",
                    "Approximate limits"
                ],
                answer: "Evaluate definite integrals",
                explanation: "FTC Part 2 provides the standard method for evaluating definite integrals."
            },

            {
                q: "The correct evaluation formula is?",
                options: [
                    "F(b)-F(a)",
                    "F(a)-F(b)",
                    "F(a)+F(b)"
                ],
                answer: "F(b)-F(a)",
                explanation: "Evaluate the antiderivative at the upper limit, then subtract its value at the lower limit."
            },

            {
                q: "To evaluate a definite integral, you first find?",
                options: [
                    "An antiderivative",
                    "A derivative",
                    "A tangent line"
                ],
                answer: "An antiderivative",
                explanation: "FTC Part 2 requires an antiderivative of the integrand."
            },

            {
                q: "Should +C be included in a definite integral?",
                options: [
                    "No",
                    "Yes",
                    "Only if the limits are positive"
                ],
                answer: "No",
                explanation: "The constant of integration cancels when evaluating both limits."
            },

            {
                q: "Which is a common mistake?",
                options: [
                    "Evaluating the original function instead of its antiderivative",
                    "Using the Reverse Power Rule",
                    "Finding an antiderivative"
                ],
                answer: "Evaluating the original function instead of its antiderivative",
                explanation: "Always evaluate the antiderivative, not the original function."
            },

            {
                q: "FTC Part 2 replaces which earlier approximation method?",
                options: [
                    "Riemann Sums",
                    "Chain Rule",
                    "Product Rule"
                ],
                answer: "Riemann Sums",
                explanation: "Instead of approximating area with rectangles, FTC Part 2 computes the exact value using antiderivatives."
            }

        ]

    }
    ,

    "calculus1-average-value-of-a-function": {
        title: "Average Value of a Function",
        subtitle: "Learn how definite integrals are used to find the average value of a function.",

        body: `

<h2>What is the Average Value of a Function?</h2>

<p>The <strong>average value of a function</strong> over an interval represents the average height of the graph between two x-values.</p>

<p>Unlike averaging a list of numbers, calculus uses a definite integral to average infinitely many values.</p>

<hr>

<h2>The Formula</h2>

<p>If a function is continuous on the interval <strong>[a,b]</strong>, then its average value is:</p>

<p><strong>Average = (1 / (b − a)) ∫<sub>a</sub><sup>b</sup> f(x) dx</strong></p>

<p>The definite integral finds the total accumulated value, and dividing by the interval length gives the average.</p>

<hr>

<h2>Step-by-Step Process</h2>

<ol>

<li>Evaluate the definite integral.</li>

<li>Compute the interval length: <strong>b − a</strong>.</li>

<li>Divide the integral by the interval length.</li>

</ol>

<hr>

<h2>Example</h2>

<p>Find the average value of:</p>

<p><strong>f(x)=x²</strong></p>

<p>on the interval <strong>[0,2]</strong>.</p>

<p>Evaluate the integral:</p>

<p><strong>∫<sub>0</sub><sup>2</sup> x² dx</strong></p>

<p>Antiderivative:</p>

<p><strong>x³/3</strong></p>

<p>Evaluate:</p>

<p><strong>(8/3)−0 = 8/3</strong></p>

<p>Interval length:</p>

<p><strong>2−0 = 2</strong></p>

<p>Average value:</p>

<p><strong>(1/2)(8/3)=4/3</strong></p>

<hr>

<h2>Geometric Interpretation</h2>

<p>The average value represents the height of a rectangle that has:</p>

<ul>

<li>The same width as the interval.</li>

<li>The same area as the region under the curve.</li>

</ul>

<hr>

<h2>Applications</h2>

<ul>

<li>Average speed</li>

<li>Average temperature</li>

<li>Average population</li>

<li>Average revenue</li>

<li>Average concentration</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to divide by <strong>b−a</strong>.</li>

<li>Using the original function instead of the definite integral.</li>

<li>Adding +C to the definite integral.</li>

<li>Computing the interval length incorrectly.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Find the definite integral.</li>

<li>Divide by the interval length.</li>

<li>The result is the average value of the function.</li>

</ul>

`,

        questions: [

            {
                q: "The average value of a function is found using?",
                options: [
                    "A definite integral",
                    "A derivative",
                    "A limit"
                ],
                answer: "A definite integral",
                explanation: "The average value formula is based on a definite integral."
            },

            {
                q: "After evaluating the definite integral, you divide by?",
                options: [
                    "b−a",
                    "a+b",
                    "b+a²"
                ],
                answer: "b−a",
                explanation: "The interval length is the denominator of the average value formula."
            },

            {
                q: "The average value of a function represents?",
                options: [
                    "The average height of the graph",
                    "The slope of the tangent line",
                    "The maximum value"
                ],
                answer: "The average height of the graph",
                explanation: "It is the average height over the interval."
            },

            {
                q: "A common mistake when finding the average value is?",
                options: [
                    "Forgetting to divide by b−a",
                    "Forgetting the Chain Rule",
                    "Using Newton's Method"
                ],
                answer: "Forgetting to divide by b−a",
                explanation: "The interval length must always be included."
            },

            {
                q: "The average value formula requires?",
                options: [
                    "A continuous function on an interval",
                    "Only a derivative",
                    "Only a graph"
                ],
                answer: "A continuous function on an interval",
                explanation: "The standard theorem assumes continuity on the interval."
            },

            {
                q: "One application of the average value of a function is?",
                options: [
                    "Average speed",
                    "Triangle congruence",
                    "Polynomial factoring"
                ],
                answer: "Average speed",
                explanation: "Average speed is a common application of the average value theorem for integrals."
            }

        ]

    }
    ,

    "calculus1-applications-of-definite-integrals": {
        title: "Applications of Definite Integrals",
        subtitle: "Learn how definite integrals are used to solve real-world problems involving accumulation.",

        body: `

<h2>Why Are Definite Integrals Useful?</h2>

<p>Definite integrals measure <strong>accumulated change</strong>.</p>

<p>Whenever a quantity changes continuously over an interval, a definite integral can often determine the total accumulated amount.</p>

<hr>

<h2>Common Applications</h2>

<ul>

<li>Total distance traveled</li>

<li>Total displacement</li>

<li>Area under a curve</li>

<li>Area between two curves</li>

<li>Total profit</li>

<li>Total revenue</li>

<li>Total population growth</li>

<li>Total electrical charge</li>

<li>Total fluid flow</li>

</ul>

<hr>

<h2>Example 1: Distance</h2>

<p>If:</p>

<p><strong>v(t)</strong> represents velocity, then:</p>

<p><strong>∫v(t)dt</strong></p>

<p>represents displacement.</p>

<p>If velocity remains positive throughout the interval, then the integral also represents the total distance traveled.</p>

<hr>

<h2>Example 2: Revenue</h2>

<p>If:</p>

<p><strong>R'(t)</strong></p>

<p>represents the rate of revenue earned, then:</p>

<p><strong>∫R'(t)dt</strong></p>

<p>gives the total revenue accumulated during the interval.</p>

<hr>

<h2>Example 3: Population Growth</h2>

<p>If:</p>

<p><strong>P'(t)</strong></p>

<p>represents the rate at which a population changes, then:</p>

<p><strong>∫P'(t)dt</strong></p>

<p>gives the total population change over time.</p>

<hr>

<h2>Example 4: Area Between Curves</h2>

<p>If one function lies above another, then:</p>

<p><strong>Area = ∫(Top Function − Bottom Function) dx</strong></p>

<p>This computes the exact area enclosed between the two graphs.</p>

<hr>

<h2>Why Integration Works</h2>

<p>Every small change contributes to the total accumulated quantity.</p>

<p>The definite integral adds together infinitely many tiny contributions to produce one exact answer.</p>

<hr>

<h2>Real-World Uses</h2>

<ul>

<li>Engineering</li>

<li>Economics</li>

<li>Medicine</li>

<li>Physics</li>

<li>Computer science</li>

<li>Environmental science</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Confusing displacement with total distance.</li>

<li>Using the wrong interval.</li>

<li>Subtracting curves in the wrong order.</li>

<li>Ignoring units.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Definite integrals measure accumulated quantities.</li>

<li>They solve many real-world problems.</li>

<li>Area, distance, revenue, and population are common applications.</li>

<li>Integration combines infinitely many small changes into one exact value.</li>

</ul>

`,

        questions: [

            {
                q: "A definite integral primarily measures?",
                options: [
                    "Accumulated change",
                    "The slope of a tangent line",
                    "A derivative"
                ],
                answer: "Accumulated change",
                explanation: "Definite integrals add together small changes over an interval."
            },

            {
                q: "If velocity is always positive, integrating velocity gives?",
                options: [
                    "Total distance traveled",
                    "Acceleration",
                    "The derivative"
                ],
                answer: "Total distance traveled",
                explanation: "When velocity never becomes negative, displacement equals total distance."
            },

            {
                q: "The area between two curves is found by integrating?",
                options: [
                    "Top function minus bottom function",
                    "Bottom function minus top function",
                    "The derivative of both functions"
                ],
                answer: "Top function minus bottom function",
                explanation: "Subtract the lower function from the upper function."
            },

            {
                q: "If R'(t) represents the rate of revenue, then integrating R'(t) gives?",
                options: [
                    "Total revenue",
                    "Average revenue",
                    "Revenue per second"
                ],
                answer: "Total revenue",
                explanation: "Integration accumulates the rate into the total amount."
            },

            {
                q: "One common application of definite integrals is?",
                options: [
                    "Population growth",
                    "Triangle congruence",
                    "Factoring quadratics"
                ],
                answer: "Population growth",
                explanation: "Integrals model accumulated population change over time."
            },

            {
                q: "A common mistake when finding the area between curves is?",
                options: [
                    "Subtracting the functions in the wrong order",
                    "Forgetting the Power Rule",
                    "Using Newton's Method"
                ],
                answer: "Subtracting the functions in the wrong order",
                explanation: "Always subtract the lower function from the upper function."

            }

        ]

    }
    ,

    "calculus1-unit-4-review": {
        title: "Unit 4 Review",
        subtitle: "Review all integration concepts from Unit 4.",

        body: `

<h2>Unit 4 Review</h2>

<p>This review summarizes every major concept covered in Unit 4.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Introduction to Antiderivatives</li>

<li>Indefinite Integrals</li>

<li>Basic Integration Rules</li>

<li>u-Substitution</li>

<li>Area Under a Curve</li>

<li>Riemann Sums</li>

<li>Definite Integrals</li>

<li>Properties of Definite Integrals</li>

<li>Fundamental Theorem of Calculus (Part 1)</li>

<li>Fundamental Theorem of Calculus (Part 2)</li>

<li>Average Value of a Function</li>

<li>Applications of Definite Integrals</li>

</ul>

<hr>

<h2>Key Ideas</h2>

<ul>

<li>Integration reverses differentiation.</li>

<li>An antiderivative is an original function.</li>

<li>Indefinite integrals always include the constant of integration (+C).</li>

<li>The Reverse Power Rule is the most common integration rule.</li>

<li>u-Substitution reverses the Chain Rule.</li>

<li>Definite integrals measure accumulated change.</li>

<li>Riemann Sums approximate area using rectangles.</li>

<li>The Fundamental Theorem of Calculus connects differentiation and integration.</li>

<li>Average value uses a definite integral divided by the interval length.</li>

<li>Definite integrals solve many real-world accumulation problems.</li>

</ul>

<hr>

<h2>Important Formulas</h2>

<ul>

<li>∫xⁿ dx = xⁿ⁺¹/(n+1) + C &nbsp;&nbsp;(n ≠ -1)</li>

<li>∫1/x dx = ln|x| + C</li>

<li>∫ₐᵇ f(x)dx = F(b) − F(a)</li>

<li>Average Value = (1/(b−a)) ∫ₐᵇ f(x)dx</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting +C on indefinite integrals.</li>

<li>Using the Reverse Power Rule when n = -1.</li>

<li>Reversing F(b) − F(a).</li>

<li>Adding +C to definite integrals.</li>

<li>Forgetting to divide by b−a when finding average value.</li>

<li>Choosing the wrong expression for u during substitution.</li>

<li>Subtracting curves in the wrong order.</li>

</ul>

<hr>

<h2>Ready?</h2>

<p>If you understand antiderivatives, integration rules, definite integrals, the Fundamental Theorem of Calculus, average value, and applications of integration, you are ready for the Unit 4 Test.</p>

`,

        questions: [

            {
                q: "Integration is the inverse of?",
                options: [
                    "Differentiation",
                    "Multiplication",
                    "Factoring"
                ],
                answer: "Differentiation",
                explanation: "Integration reverses differentiation."
            },

            {
                q: "Indefinite integrals always include?",
                options: [
                    "+C",
                    "The interval length",
                    "The derivative"
                ],
                answer: "+C",
                explanation: "The constant of integration accounts for all possible antiderivatives."
            },

            {
                q: "u-Substitution reverses which rule?",
                options: [
                    "Chain Rule",
                    "Product Rule",
                    "Quotient Rule"
                ],
                answer: "Chain Rule",
                explanation: "u-Substitution is the reverse of the Chain Rule."
            },

            {
                q: "The Fundamental Theorem of Calculus Part 2 evaluates?",
                options: [
                    "Definite integrals",
                    "Limits",
                    "Derivatives"
                ],
                answer: "Definite integrals",
                explanation: "FTC Part 2 evaluates definite integrals using antiderivatives."
            },

            {
                q: "Average value is found by dividing the definite integral by?",
                options: [
                    "b−a",
                    "a+b",
                    "b"
                ],
                answer: "b−a",
                explanation: "The interval length is the denominator."
            },

            {
                q: "Riemann Sums approximate?",
                options: [
                    "Area under a curve",
                    "Tangent slopes",
                    "Limits"
                ],
                answer: "Area under a curve",
                explanation: "Riemann Sums approximate the area beneath a graph."
            }

        ]

    }
    ,

    "calculus1-unit-4-test": {
        title: "Unit 4 Test",
        subtitle: "Test your understanding of integration and the Fundamental Theorem of Calculus.",

        body: `

<h2>Unit 4 Test</h2>

<p>This assessment covers every topic from Unit 4.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Introduction to Antiderivatives</li>

<li>Indefinite Integrals</li>

<li>Basic Integration Rules</li>

<li>u-Substitution</li>

<li>Area Under a Curve</li>

<li>Riemann Sums</li>

<li>Definite Integrals</li>

<li>Properties of Definite Integrals</li>

<li>Fundamental Theorem of Calculus (Part 1)</li>

<li>Fundamental Theorem of Calculus (Part 2)</li>

<li>Average Value of a Function</li>

<li>Applications of Definite Integrals</li>

</ul>

<hr>

<h2>Instructions</h2>

<p>Complete this assessment without using notes. A strong score indicates you are ready for Calculus II.</p>

`,

        questions: [

            {
                q: "Integration is the inverse of?",
                options: [
                    "Differentiation",
                    "Factoring",
                    "Multiplication"
                ],
                answer: "Differentiation",
                explanation: "Integration reverses differentiation."
            },

            {
                q: "Every indefinite integral should include?",
                options: [
                    "+C",
                    "The interval length",
                    "The derivative"
                ],
                answer: "+C",
                explanation: "The constant of integration accounts for all possible antiderivatives."
            },

            {
                q: "Which rule is used to integrate x⁵?",
                options: [
                    "Reverse Power Rule",
                    "Product Rule",
                    "Quotient Rule"
                ],
                answer: "Reverse Power Rule",
                explanation: "Increase the exponent by one and divide by the new exponent."
            },

            {
                q: "u-Substitution reverses which differentiation rule?",
                options: [
                    "Chain Rule",
                    "Power Rule",
                    "Quotient Rule"
                ],
                answer: "Chain Rule",
                explanation: "u-Substitution is the reverse of the Chain Rule."
            },

            {
                q: "Riemann Sums approximate?",
                options: [
                    "Area under a curve",
                    "Derivatives",
                    "Tangent lines"
                ],
                answer: "Area under a curve",
                explanation: "Riemann Sums approximate the area beneath a graph."
            },

            {
                q: "A definite integral evaluates to?",
                options: [
                    "A single numerical value",
                    "A family of functions",
                    "A derivative"
                ],
                answer: "A single numerical value",
                explanation: "Definite integrals produce one numerical answer."
            },

            {
                q: "The Fundamental Theorem of Calculus Part 1 states that differentiation ______ integration.",
                options: [
                    "Undoes",
                    "Doubles",
                    "Approximates"
                ],
                answer: "Undoes",
                explanation: "FTC Part 1 shows differentiation and integration are inverse operations."
            },

            {
                q: "The Fundamental Theorem of Calculus Part 2 evaluates?",
                options: [
                    "Definite integrals",
                    "Derivatives",
                    "Limits"
                ],
                answer: "Definite integrals",
                explanation: "FTC Part 2 evaluates definite integrals using antiderivatives."
            },

            {
                q: "The correct evaluation of a definite integral is?",
                options: [
                    "F(b)-F(a)",
                    "F(a)-F(b)",
                    "F(a)+F(b)"
                ],
                answer: "F(b)-F(a)",
                explanation: "Evaluate the antiderivative at the upper limit and subtract its value at the lower limit."
            },

            {
                q: "Should +C be included when evaluating a definite integral?",
                options: [
                    "No",
                    "Yes",
                    "Only sometimes"
                ],
                answer: "No",
                explanation: "The constant of integration cancels."
            },

            {
                q: "The average value of a function is found by dividing the definite integral by?",
                options: [
                    "b-a",
                    "a+b",
                    "b"
                ],
                answer: "b-a",
                explanation: "Divide by the length of the interval."
            },

            {
                q: "Area between two curves is found using?",
                options: [
                    "Top function minus bottom function",
                    "Bottom function minus top function",
                    "The derivative"
                ],
                answer: "Top function minus bottom function",
                explanation: "Subtract the lower function from the upper function."
            },

            {
                q: "If velocity remains positive, integrating velocity gives?",
                options: [
                    "Total distance traveled",
                    "Acceleration",
                    "Speed"
                ],
                answer: "Total distance traveled",
                explanation: "Positive velocity means displacement equals total distance."
            },

            {
                q: "If the limits of integration are reversed, the integral?",
                options: [
                    "Changes sign",
                    "Becomes zero",
                    "Doubles"
                ],
                answer: "Changes sign",
                explanation: "Reversing the limits multiplies the integral by -1."
            },

            {
                q: "If the upper and lower limits are equal, the definite integral equals?",
                options: [
                    "0",
                    "1",
                    "The function value"
                ],
                answer: "0",
                explanation: "There is no interval over which to accumulate area."
            },

            {
                q: "The width of each rectangle in a Riemann Sum is represented by?",
                options: [
                    "Δx",
                    "dx",
                    "x"
                ],
                answer: "Δx",
                explanation: "Δx represents the width of each subinterval."
            },

            {
                q: "A common mistake when evaluating definite integrals is?",
                options: [
                    "Reversing F(b)-F(a)",
                    "Forgetting the Chain Rule",
                    "Using the Product Rule"
                ],
                answer: "Reversing F(b)-F(a)",
                explanation: "Always evaluate the upper limit first, then subtract the lower limit."
            },

            {
                q: "A common mistake with u-Substitution is?",
                options: [
                    "Forgetting to substitute back",
                    "Using the Power Rule",
                    "Finding the derivative"
                ],
                answer: "Forgetting to substitute back",
                explanation: "The final answer should be written using the original variable."
            },

            {
                q: "One major application of definite integrals is?",
                options: [
                    "Accumulated change",
                    "Factoring polynomials",
                    "Triangle congruence"
                ],
                answer: "Accumulated change",
                explanation: "Definite integrals measure accumulated quantities such as distance, revenue, and area."
            },

            {
                q: "Completing Unit 4 prepares you for?",
                options: [
                    "Calculus II",
                    "Geometry",
                    "Pre-Algebra"
                ],
                answer: "Calculus II",
                explanation: "Calculus II expands on integration techniques, sequences and series, and differential equations."
            }

        ]

    }






};