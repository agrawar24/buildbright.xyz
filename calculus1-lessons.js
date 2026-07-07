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






};