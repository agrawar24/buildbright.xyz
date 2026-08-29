const calculus4Lessons = {

    "calculus4-unit1-lesson1": {
        title: "Introduction to Differential Equations",
        subtitle: "Learn what differential equations are, how they are classified, and how solutions are verified.",

        body: `

<h2>What Is a Differential Equation?</h2>

<p>A <strong>differential equation</strong> is an equation that contains an unknown function and one or more of its derivatives.</p>

<p>Differential equations describe how quantities change. They are used to model motion, population growth, cooling, electrical circuits, chemical reactions, fluid flow, and many other real-world processes.</p>

<p>For example:</p>

<p><strong>dy/dx = 3x²</strong></p>

<p>This equation tells us that the derivative of the unkown function y is equal to 3x².</p>

<p>Because:</p>

<p><strong>d(x³)/dx = 3x²</strong></p>

<p>one solution is:</p>

<p><strong>y = x³</strong></p>

<p>However, this is not the only solution. Since the derivative of any constant is zero, the complete family of solutions is:</p>

<p><strong>y = x³ + C</strong></p>

<p>where C is an arbitrary constant.</p>

<hr>

<h2>Ordinary and Partial Differential Equations</h2>

<p>Differential equations are divided into two major categories.</p>

<h3>Ordinary Differential Equations</h3>

<p>An <strong>ordinary differential equation</strong>, or ODE, contains derivatives with respect to only one independent variable.</p>

<p>Examples:</p>

<p><strong>dy/dx = 4x</strong></p>

<p><strong>y'' + 5y' + 6y = 0</strong></p>

<p>In both equations, y is considered a function of one variable, usually x or t.</p>

<h3>Partial Differential Equations</h3>

<p>A <strong>partial differential equation</strong>, or PDE, contains partial derivatives with respect to two or more independent variables.</p>

<p>Example:</p>

<p><strong>∂u/∂t = k ∂²u/∂x²</strong></p>

<p>This is the one-dimensional heat equation. The function u depends on both position x and time t.</p>

<hr>

<h2>Order of a Differential Equation</h2>

<p>The <strong>order</strong> of a differential equation is the order of the highest derivative appearing in the equation.</p>

<h3>First-Order Example</h3>

<p><strong>dy/dx + 2y = x</strong></p>

<p>The highest derivative is the first derivative, so this is a first-order differential equation.</p>

<h3>Second-Order Example</h3>

<p><strong>y'' - 4y = 0</strong></p>

<p>The highest derivative is the second derivative, so this is a second-order differential equation.</p>

<h3>Third-Order Example</h3>

<p><strong>y''' + y' = sin(x)</strong></p>

<p>The highest derivative is the third derivative, so this is a third-order differential equation.</p>

<hr>

<h2>Linear Differential Equations</h2>

<p>A differential equation is <strong>linear</strong> when the unknown function and its derivatives:</p>

<ul>
<li>Appear only to the first power</li>
<li>Are not multiplied by one another</li>
<li>Are not inside nonlinear functions such as sine, cosine, exponential, or logarithmic functions</li>
</ul>

<p>Example of a linear equation:</p>

<p><strong>y'' + 3y' - 4y = x</strong></p>

<p>This equation is linear because y, y', and y'' all appear to the first power and are not multiplied together.</p>

<h3>Nonlinear Examples</h3>

<p><strong>y' = y²</strong></p>

<p>This is nonlinear because y is squared.</p>

<p><strong>yy' = x</strong></p>

<p>This is nonlinear because y and y' are multiplied together.</p>

<p><strong>y' + sin(y) = 0</strong></p>

<p>This is nonlinear because y appears inside the sine function.</p>

<hr>

<h2>General and Particular Solutions</h2>

<h3>General Solution</h3>

<p>A <strong>general solution</strong> contains one or more arbitrary constants.</p>

<p>For example, consider:</p>

<p><strong>dy/dx = 2x</strong></p>

<p>Integrating gives:</p>

<p><strong>y = x² + C</strong></p>

<p>This is the general solution because C may be any constant.</p>

<h3>Particular Solution</h3>

<p>A <strong>particular solution</strong> is obtained when additional information is used to determine the value of the arbitrary constant.</p>

<p>Suppose:</p>

<p><strong>dy/dx = 2x</strong></p>

<p>and:</p>

<p><strong>y(1) = 5</strong></p>

<p>Start with the general solution:</p>

<p><strong>y = x² + C</strong></p>

<p>Use the condition y(1) = 5:</p>

<p><strong>5 = 1² + C</strong></p>

<p><strong>C = 4</strong></p>

<p>Therefore, the particular solution is:</p>

<p><strong>y = x² + 4</strong></p>

<hr>

<h2>Initial Conditions</h2>

<p>An <strong>initial condition</strong> gives the value of a function or one of its derivatives at a specific input value.</p>

<p>Examples:</p>

<p><strong>y(0) = 3</strong></p>

<p><strong>y'(0) = -2</strong></p>

<p>A differential equation together with one or more initial conditions is called an <strong>initial value problem</strong>.</p>

<p>For example:</p>

<p><strong>dy/dx = 3x², &nbsp; y(0) = 4</strong></p>

<p>Integrating gives:</p>

<p><strong>y = x³ + C</strong></p>

<p>Applying y(0) = 4:</p>

<p><strong>4 = 0³ + C</strong></p>

<p><strong>C = 4</strong></p>

<p>Therefore:</p>

<p><strong>y = x³ + 4</strong></p>

<hr>

<h2>Verifying a Solution</h2>

<p>To verify that a function is a solution of a differential equation:</p>

<ol>
<li>Find the required derivatives.</li>
<li>Substitute the function and its derivatives into the equation.</li>
<li>Check whether the resulting statement is true.</li>
</ol>

<h3>Example 1</h3>

<p>Determine whether:</p>

<p><strong>y = e²ˣ</strong></p>

<p>is a solution of:</p>

<p><strong>y' = 2y</strong></p>

<p>Differentiate:</p>

<p><strong>y' = 2e²ˣ</strong></p>

<p>Substitute into the equation:</p>

<p><strong>2e²ˣ = 2(e²ˣ)</strong></p>

<p>The equation is true, so y = e²ˣ is a solution.</p>

<h3>Example 2</h3>

<p>Determine whether:</p>

<p><strong>y = sin(x)</strong></p>

<p>is a solution of:</p>

<p><strong>y'' + y = 0</strong></p>

<p>Differentiate twice:</p>

<p><strong>y' = cos(x)</strong></p>

<p><strong>y'' = -sin(x)</strong></p>

<p>Substitute:</p>

<p><strong>-sin(x) + sin(x) = 0</strong></p>

<p>The equation is true, so y = sin(x) is a solution.</p>

<hr>

<h2>Explicit and Implicit Solutions</h2>

<h3>Explicit Solution</h3>

<p>An explicit solution is written with the dependent variable isolated.</p>

<p>Example:</p>

<p><strong>y = x² + 3</strong></p>

<h3>Implicit Solution</h3>

<p>An implicit solution relates the variables without necessarily solving directly for the dependent variable.</p>

<p>Example:</p>

<p><strong>x² + y² = 25</strong></p>

<p>Differentiating implicitly gives:</p>

<p><strong>2x + 2y(dy/dx) = 0</strong></p>

<p>Therefore:</p>

<p><strong>dy/dx = -x/y</strong></p>

<p>Thus, the equation x² + y² = 25 is an implicit solution of the differential equation:</p>

<p><strong>dy/dx = -x/y</strong></p>

<hr>

<h2>Families of Solutions</h2>

<p>A differential equation often has infinitely many solutions.</p>

<p>For example:</p>

<p><strong>dy/dx = y</strong></p>

<p>has the general solution:</p>

<p><strong>y = Ceˣ</strong></p>

<p>Different choices of C produce different solution curves:</p>

<ul>
<li>C = 1 gives y = eˣ</li>
<li>C = 2 gives y = 2eˣ</li>
<li>C = -1 gives y = -eˣ</li>
<li>C = 0 gives y = 0</li>
</ul>

<p>All of these functions satisfy the same differential equation.</p>

<hr>

<h2>Modeling with Differential Equations</h2>

<p>Differential equations are useful because many real-world laws describe rates of change.</p>

<h3>Population Growth</h3>

<p>A simple population model is:</p>

<p><strong>dP/dt = kP</strong></p>

<p>This says that the rate of population growth is proportional to the current population.</p>

<h3>Newton's Law of Cooling</h3>

<p>A cooling model is:</p>

<p><strong>dT/dt = -k(T - Tₛ)</strong></p>

<p>Here, T is the temperature of an object and Tₛ is the surrounding temperature.</p>

<h3>Motion</h3>

<p>Since acceleration is the second derivative of position, Newton's second law can be written as:</p>

<p><strong>m(d²x/dt²) = F</strong></p>

<p>This is a second-order differential equation describing the motion of an object.</p>

<hr>

<h2>Lesson Summary</h2>

<ul>
<li>A differential equation contains an unknown function and its derivatives.</li>
<li>An ODE uses derivatives with respect to one independent variable.</li>
<li>A PDE uses partial derivatives with respect to multiple independent variables.</li>
<li>The order is determined by the highest derivative.</li>
<li>Linear equations contain the dependent variable and its derivatives only to the first power.</li>
<li>A general solution contains arbitrary constants.</li>
<li>A particular solution satisfies given initial or boundary conditions.</li>
<li>A proposed solution is verified by substitution.</li>
<li>Differential equations model quantities that change over time or space.</li>
</ul>

`,

        questions: [

            {
                q: "What is a differential equation?",
                options: [
                    "An equation containing an unknown function and one or more derivatives",
                    "An equation containing only constants",
                    "An equation that can never be solved",
                    "An equation containing only integrals"
                ],
                answer: "An equation containing an unknown function and one or more derivatives",
                explanation: "A differential equation relates an unknown function to one or more of its derivatives."
            },

            {
                q: "What is the order of y''' + 2y' - y = 0?",
                options: [
                    "Third order",
                    "Second order",
                    "First order",
                    "Fourth order"
                ],
                answer: "Third order",
                explanation: "The highest derivative present is y''', which is the third derivative."
            },

            {
                q: "Which equation is an ordinary differential equation?",
                options: [
                    "dy/dx = x + y",
                    "∂u/∂t = ∂²u/∂x²",
                    "∂z/∂x + ∂z/∂y = 0",
                    "∂²u/∂x² + ∂²u/∂y² = 0"
                ],
                answer: "dy/dx = x + y",
                explanation: "An ordinary differential equation contains derivatives with respect to only one independent variable."
            },

            {
                q: "Which differential equation is nonlinear?",
                options: [
                    "y' = y²",
                    "y' + 3y = x",
                    "y'' - 4y = 0",
                    "2y' + y = sin(x)"
                ],
                answer: "y' = y²",
                explanation: "The equation is nonlinear because the dependent variable y is raised to the second power."
            },

            {
                q: "What is the general solution of dy/dx = 4x³?",
                options: [
                    "y = x⁴ + C",
                    "y = 4x⁴ + C",
                    "y = 12x² + C",
                    "y = x³ + C"
                ],
                answer: "y = x⁴ + C",
                explanation: "Integrating 4x³ gives x⁴, and an arbitrary constant C must be included."
            },

            {
                q: "Which statement describes a particular solution?",
                options: [
                    "A solution in which the arbitrary constants have been determined",
                    "A solution containing every possible constant",
                    "A differential equation with no derivatives",
                    "A solution that cannot be checked"
                ],
                answer: "A solution in which the arbitrary constants have been determined",
                explanation: "Initial or boundary conditions determine the constants and produce a particular solution."
            },

            {
                q: "Is y = e³ˣ a solution of y' = 3y?",
                options: [
                    "Yes, because y' = 3e³ˣ",
                    "No, because y' = e³ˣ",
                    "No, because y' = 3x",
                    "Yes, because y' = eˣ"
                ],
                answer: "Yes, because y' = 3e³ˣ",
                explanation: "Differentiating y = e³ˣ gives y' = 3e³ˣ, which equals 3y."
            },

            {
                q: "Which of the following is an initial condition?",
                options: [
                    "y(0) = 5",
                    "y' + y = x",
                    "y = Ceˣ",
                    "dy/dx"
                ],
                answer: "y(0) = 5",
                explanation: "An initial condition specifies the value of a function or derivative at a particular input."
            },

            {
                q: "What is the particular solution of dy/dx = 2x if y(0) = 3?",
                options: [
                    "y = x² + 3",
                    "y = 2x² + 3",
                    "y = x²",
                    "y = 2x + 3"
                ],
                answer: "y = x² + 3",
                explanation: "Integrating gives y = x² + C. Applying y(0) = 3 gives C = 3."
            },

            {
                q: "Which real-world model states that a growth rate is proportional to the current population?",
                options: [
                    "dP/dt = kP",
                    "dP/dt = k",
                    "P = kt²",
                    "d²P/dt² = 0"
                ],
                answer: "dP/dt = kP",
                explanation: "The equation dP/dt = kP models exponential population growth or decay."
            }

        ]
    }
    ,

    "calculus4-unit1-lesson2": {
        title: "Slope Fields",
        subtitle: "Visualize differential equations without solving them.",

        body: `

<h2>What Is a Slope Field?</h2>

<p>Many differential equations cannot be solved immediately. Fortunately, we can still understand their behavior using a <strong>slope field</strong>, also called a <strong>direction field</strong>.</p>

<p>A slope field is a graph made of many small line segments. Each segment represents the slope of a solution curve at that point.</p>

<p>Instead of graphing one solution, a slope field shows the behavior of every possible solution.</p>

<hr>

<h2>The Basic Idea</h2>

<p>Suppose we have the differential equation:</p>

<p><strong>dy/dx = x + y</strong></p>

<p>For every point (x, y), we can compute a slope.</p>

<p>Example:</p>

<table>
<tr><th>Point</th><th>Slope</th></tr>
<tr><td>(0,0)</td><td>0</td></tr>
<tr><td>(1,0)</td><td>1</td></tr>
<tr><td>(0,1)</td><td>1</td></tr>
<tr><td>(1,1)</td><td>2</td></tr>
<tr><td>(-1,1)</td><td>0</td></tr>
</table>

<p>At each point we draw a tiny line segment having that slope.</p>

<hr>

<h2>Reading a Slope Field</h2>

<p>Every tiny segment tells you how a solution curve should travel through that point.</p>

<ul>
<li>Positive slope → curve rises</li>
<li>Negative slope → curve falls</li>
<li>Zero slope → horizontal tangent</li>
<li>Large positive slope → steep upward</li>
<li>Large negative slope → steep downward</li>
</ul>

<hr>

<h2>Example 1</h2>

<p>Consider:</p>

<p><strong>dy/dx = y</strong></p>

<p>If y = 3:</p>

<p><strong>dy/dx = 3</strong></p>

<p>If y = 0:</p>

<p><strong>dy/dx = 0</strong></p>

<p>If y = -2:</p>

<p><strong>dy/dx = -2</strong></p>

<p>Notice that the slope depends only on y.</p>

<p>Every horizontal row of the slope field has identical line segments.</p>

<hr>

<h2>Example 2</h2>

<p>Consider:</p>

<p><strong>dy/dx = x</strong></p>

<p>If x = -2:</p>

<p>All slopes equal -2.</p>

<p>If x = 0:</p>

<p>All slopes equal 0.</p>

<p>If x = 3:</p>

<p>All slopes equal 3.</p>

<p>Here the slopes depend only on x, so each vertical column has identical line segments.</p>

<hr>

<h2>Example 3</h2>

<p>Consider:</p>

<p><strong>dy/dx = x - y</strong></p>

<p>The slope now depends on both x and y.</p>

<p>Every point has its own slope.</p>

<p>This produces a much richer slope field because the direction changes throughout the plane.</p>

<hr>

<h2>Sketching Solution Curves</h2>

<p>Once a slope field has been drawn, a solution curve can be sketched by following the tiny line segments.</p>

<p>The curve should:</p>

<ul>
<li>Remain tangent to every segment it crosses.</li>
<li>Never suddenly change direction.</li>
<li>Follow the indicated slopes continuously.</li>
</ul>

<hr>

<h2>Initial Value Problems</h2>

<p>Suppose we have:</p>

<p><strong>dy/dx = x - y</strong></p>

<p>with the initial condition:</p>

<p><strong>y(0)=1</strong></p>

<p>The initial condition tells us exactly where to begin.</p>

<p>Starting at (0,1), we simply follow the line segments.</p>

<p>This traces the unique solution satisfying the initial condition.</p>

<hr>

<h2>Equilibrium Solutions</h2>

<p>An <strong>equilibrium solution</strong> is a constant solution where the slope is always zero.</p>

<p>Example:</p>

<p><strong>dy/dx = y - 4</strong></p>

<p>If y = 4:</p>

<p><strong>dy/dx = 0</strong></p>

<p>Therefore:</p>

<p><strong>y = 4</strong></p>

<p>is an equilibrium solution.</p>

<p>Once a solution reaches y = 4, it remains there forever.</p>

<hr>

<h2>Autonomous Differential Equations</h2>

<p>An equation whose derivative depends only on y is called an <strong>autonomous differential equation</strong>.</p>

<p>Example:</p>

<p><strong>dy/dx = y(3-y)</strong></p>

<p>The equilibrium solutions satisfy:</p>

<p><strong>y(3-y)=0</strong></p>

<p>Therefore:</p>

<ul>
<li>y = 0</li>
<li>y = 3</li>
</ul>

<p>These appear as horizontal solution curves.</p>

<hr>

<h2>Stable and Unstable Equilibria</h2>

<p>Some equilibrium solutions attract nearby solutions.</p>

<p>These are called <strong>stable equilibria</strong>.</p>

<p>Others repel nearby solutions.</p>

<p>These are called <strong>unstable equilibria</strong>.</p>

<p>Studying the slope field helps identify these behaviors even before solving the equation.</p>

<hr>

<h2>Applications</h2>

<p>Slope fields help scientists and engineers:</p>

<ul>
<li>Predict motion</li>
<li>Study population growth</li>
<li>Analyze chemical reactions</li>
<li>Understand electrical circuits</li>
<li>Investigate climate models</li>
</ul>

<p>Even when an exact solution is impossible, a slope field reveals the overall behavior of the system.</p>

<hr>

<h2>Lesson Summary</h2>

<ul>
<li>A slope field represents the slope of a solution at many points.</li>
<li>Each small line segment shows the direction of the solution curve.</li>
<li>Solution curves remain tangent to the slope field.</li>
<li>Initial conditions identify one specific solution.</li>
<li>Equilibrium solutions occur where dy/dx = 0.</li>
<li>Slope fields help analyze differential equations even without solving them.</li>
</ul>

`,

        questions: [

            {
                q: "What does a slope field represent?",
                options: [
                    "The slope of solution curves at many points",
                    "Only one solution curve",
                    "The graph of a function",
                    "An integral"
                ],
                answer: "The slope of solution curves at many points",
                explanation: "A slope field shows the direction a solution would travel at many points."
            },

            {
                q: "Another name for a slope field is:",
                options: [
                    "Direction field",
                    "Vector field",
                    "Gradient map",
                    "Contour map"
                ],
                answer: "Direction field",
                explanation: "Slope field and direction field mean the same thing."
            },

            {
                q: "If dy/dx = y, what is the slope when y = 0?",
                options: [
                    "0",
                    "1",
                    "-1",
                    "Undefined"
                ],
                answer: "0",
                explanation: "Substitute y = 0 into the differential equation."
            },

            {
                q: "If dy/dx = x, what is the slope at x = 2?",
                options: [
                    "2",
                    "0",
                    "-2",
                    "1"
                ],
                answer: "2",
                explanation: "The slope equals the x-coordinate."
            },

            {
                q: "A solution curve should always:",
                options: [
                    "Remain tangent to the slope field",
                    "Cross every line segment",
                    "Be horizontal",
                    "Be vertical"
                ],
                answer: "Remain tangent to the slope field",
                explanation: "Solution curves follow the direction indicated by the slope field."
            },

            {
                q: "An equilibrium solution occurs when:",
                options: [
                    "dy/dx = 0",
                    "dy/dx = 1",
                    "y = x",
                    "x = 0"
                ],
                answer: "dy/dx = 0",
                explanation: "Equilibrium solutions have zero slope everywhere."
            },

            {
                q: "Which equation is autonomous?",
                options: [
                    "dy/dx = y² - 1",
                    "dy/dx = x + y",
                    "dy/dx = x²",
                    "dy/dx = x - y"
                ],
                answer: "dy/dx = y² - 1",
                explanation: "Autonomous equations depend only on the dependent variable."
            },

            {
                q: "Stable equilibrium solutions:",
                options: [
                    "Attract nearby solutions",
                    "Repel nearby solutions",
                    "Always increase",
                    "Always decrease"
                ],
                answer: "Attract nearby solutions",
                explanation: "Nearby solution curves move toward a stable equilibrium."
            },

            {
                q: "Slope fields are especially useful because:",
                options: [
                    "They show behavior even when exact solutions are difficult",
                    "They always provide exact formulas",
                    "They eliminate derivatives",
                    "They solve every equation algebraically"
                ],
                answer: "They show behavior even when exact solutions are difficult",
                explanation: "Slope fields provide qualitative information about solutions."
            },

            {
                q: "An initial condition determines:",
                options: [
                    "Which solution curve to follow",
                    "The order of the equation",
                    "Whether the equation is linear",
                    "The derivative formula"
                ],
                answer: "Which solution curve to follow",
                explanation: "The initial condition selects one unique solution from the family of possible solutions."
            }

        ]
    }

    ,

    "calculus4-unit1-lesson3": {
        title: "Separation of Variables",
        subtitle: "Solve first-order differential equations by separating the variables and integrating.",

        body: `

<h2>What Is Separation of Variables?</h2>

<p><strong>Separation of variables</strong> is a method for solving certain first-order differential equations.</p>

<p>The method works when the equation can be written in the form:</p>

<p><strong>dy/dx = g(x)h(y)</strong></p>

<p>The goal is to move all expressions involving y to one side and all expressions involving x to the other side.</p>

<p>After separating the variables, integrate both sides.</p>

<hr>

<h2>The Basic Procedure</h2>

<p>Suppose:</p>

<p><strong>dy/dx = g(x)h(y)</strong></p>

<p>Divide by h(y), assuming h(y) ≠ 0:</p>

<p><strong>1/h(y) dy/dx = g(x)</strong></p>

<p>Then write:</p>

<p><strong>1/h(y) dy = g(x) dx</strong></p>

<p>Now integrate both sides:</p>

<p><strong>∫ 1/h(y) dy = ∫ g(x) dx</strong></p>

<p>After integrating, solve for y when possible.</p>

<hr>

<h2>Example 1: A Simple Separable Equation</h2>

<p>Solve:</p>

<p><strong>dy/dx = 2xy</strong></p>

<p>Separate the variables:</p>

<p><strong>1/y dy = 2x dx</strong></p>

<p>Integrate:</p>

<p><strong>∫ 1/y dy = ∫ 2x dx</strong></p>

<p><strong>ln|y| = x² + C</strong></p>

<p>Exponentiate both sides:</p>

<p><strong>|y| = e^(x² + C)</strong></p>

<p>Since e^C is another positive constant, we may write:</p>

<p><strong>y = Ce^(x²)</strong></p>

<p>This is the general solution.</p>

<hr>

<h2>Why the Constant Changes Form</h2>

<p>Starting from:</p>

<p><strong>ln|y| = x² + C</strong></p>

<p>Exponentiating gives:</p>

<p><strong>|y| = e^C e^(x²)</strong></p>

<p>The quantity e^C is itself a constant. By allowing the new constant to be positive or negative, we write:</p>

<p><strong>y = Ce^(x²)</strong></p>

<p>This is standard practice when solving separable differential equations.</p>

<hr>

<h2>Example 2: Power Functions</h2>

<p>Solve:</p>

<p><strong>dy/dx = x/y</strong></p>

<p>Separate:</p>

<p><strong>y dy = x dx</strong></p>

<p>Integrate:</p>

<p><strong>∫ y dy = ∫ x dx</strong></p>

<p><strong>y²/2 = x²/2 + C</strong></p>

<p>Multiply by 2:</p>

<p><strong>y² = x² + C</strong></p>

<p>Solving explicitly for y gives:</p>

<p><strong>y = ±√(x² + C)</strong></p>

<p>The implicit form y² = x² + C is often more convenient.</p>

<hr>

<h2>Example 3: Initial Value Problem</h2>

<p>Solve:</p>

<p><strong>dy/dx = 3x²y</strong></p>

<p>with:</p>

<p><strong>y(0) = 4</strong></p>

<p>Separate:</p>

<p><strong>1/y dy = 3x² dx</strong></p>

<p>Integrate:</p>

<p><strong>ln|y| = x³ + C</strong></p>

<p>Exponentiate:</p>

<p><strong>y = Ce^(x³)</strong></p>

<p>Apply y(0) = 4:</p>

<p><strong>4 = Ce⁰</strong></p>

<p><strong>C = 4</strong></p>

<p>Therefore:</p>

<p><strong>y = 4e^(x³)</strong></p>

<hr>

<h2>Example 4: A Logistic-Type Equation</h2>

<p>Solve:</p>

<p><strong>dy/dx = y(1-y)</strong></p>

<p>Separate:</p>

<p><strong>1/[y(1-y)] dy = dx</strong></p>

<p>Use partial fractions:</p>

<p><strong>1/[y(1-y)] = 1/y + 1/(1-y)</strong></p>

<p>Integrate:</p>

<p><strong>∫ 1/y dy + ∫ 1/(1-y) dy = ∫ dx</strong></p>

<p><strong>ln|y| - ln|1-y| = x + C</strong></p>

<p>Combine logarithms:</p>

<p><strong>ln|y/(1-y)| = x + C</strong></p>

<p>Exponentiate:</p>

<p><strong>y/(1-y) = Ce^x</strong></p>

<p>Solve for y:</p>

<p><strong>y = Ce^x(1-y)</strong></p>

<p><strong>y + Ce^x y = Ce^x</strong></p>

<p><strong>y(1 + Ce^x) = Ce^x</strong></p>

<p><strong>y = Ce^x/(1 + Ce^x)</strong></p>

<p>This may also be written as:</p>

<p><strong>y = 1/(1 + Ae^(-x))</strong></p>

<hr>

<h2>Constant Equilibrium Solutions</h2>

<p>When dividing by a function of y, be careful not to lose constant solutions.</p>

<p>For:</p>

<p><strong>dy/dx = y(1-y)</strong></p>

<p>the right side is zero when:</p>

<p><strong>y = 0</strong></p>

<p>or:</p>

<p><strong>y = 1</strong></p>

<p>Therefore, both y = 0 and y = 1 are equilibrium solutions.</p>

<p>These solutions can be lost if we divide by y(1-y) without checking first.</p>

<hr>

<h2>Example 5: Exponential Decay</h2>

<p>Solve:</p>

<p><strong>dP/dt = -kP</strong></p>

<p>where k is a positive constant.</p>

<p>Separate:</p>

<p><strong>1/P dP = -k dt</strong></p>

<p>Integrate:</p>

<p><strong>ln|P| = -kt + C</strong></p>

<p>Exponentiate:</p>

<p><strong>P = Ce^(-kt)</strong></p>

<p>If P(0) = P₀, then:</p>

<p><strong>P₀ = C</strong></p>

<p>Therefore:</p>

<p><strong>P(t) = P₀e^(-kt)</strong></p>

<p>This model is used for radioactive decay, cooling approximations, medication concentration, and other decay processes.</p>

<hr>

<h2>Example 6: Growth Proportional to the Current Amount</h2>

<p>Solve:</p>

<p><strong>dP/dt = kP</strong></p>

<p>Separate:</p>

<p><strong>1/P dP = k dt</strong></p>

<p>Integrate:</p>

<p><strong>ln|P| = kt + C</strong></p>

<p>Exponentiate:</p>

<p><strong>P = Ce^(kt)</strong></p>

<p>If P(0) = P₀, then:</p>

<p><strong>P(t) = P₀e^(kt)</strong></p>

<p>When k > 0, this represents exponential growth.</p>

<hr>

<h2>Example 7: Trigonometric Separation</h2>

<p>Solve:</p>

<p><strong>dy/dx = x cos(y)</strong></p>

<p>Separate:</p>

<p><strong>sec(y) dy = x dx</strong></p>

<p>Integrate:</p>

<p><strong>∫ sec(y) dy = ∫ x dx</strong></p>

<p><strong>ln|sec(y) + tan(y)| = x²/2 + C</strong></p>

<p>This implicit equation represents the general solution.</p>

<p>Not every solution must be solved explicitly for y.</p>

<hr>

<h2>Recognizing Separable Equations</h2>

<p>An equation is separable if it can be rewritten so that all y-terms appear with dy and all x-terms appear with dx.</p>

<h3>Separable</h3>

<p><strong>dy/dx = x²y³</strong></p>

<p>This becomes:</p>

<p><strong>y⁻³ dy = x² dx</strong></p>

<h3>Separable</h3>

<p><strong>dy/dx = (x+1)/(y-2)</strong></p>

<p>This becomes:</p>

<p><strong>(y-2)dy = (x+1)dx</strong></p>

<h3>Not Immediately Separable</h3>

<p><strong>dy/dx = x + y</strong></p>

<p>The x- and y-terms are added together, so they cannot be separated by simple algebra.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Forgetting the constant of integration</li>
<li>Dividing by an expression that may equal zero</li>
<li>Forgetting absolute values in logarithms</li>
<li>Applying the initial condition too early</li>
<li>Separating variables incorrectly</li>
<li>Assuming every first-order equation is separable</li>
</ul>

<hr>

<h2>Checking a Solution</h2>

<p>Suppose the proposed solution is:</p>

<p><strong>y = Ce^(x²)</strong></p>

<p>for the differential equation:</p>

<p><strong>dy/dx = 2xy</strong></p>

<p>Differentiate:</p>

<p><strong>dy/dx = 2xCe^(x²)</strong></p>

<p>Since:</p>

<p><strong>y = Ce^(x²)</strong></p>

<p>we have:</p>

<p><strong>dy/dx = 2xy</strong></p>

<p>The solution is verified.</p>

<hr>

<h2>Lesson Summary</h2>

<ul>
<li>Separation of variables works when an equation can be written as dy/dx = g(x)h(y).</li>
<li>Move all y-expressions with dy and all x-expressions with dx.</li>
<li>Integrate both sides.</li>
<li>Use an initial condition to determine the arbitrary constant.</li>
<li>Check for equilibrium solutions before dividing by expressions involving y.</li>
<li>Implicit solutions are acceptable when solving explicitly is difficult.</li>
<li>Always verify a solution by substitution when possible.</li>
</ul>

`,

        questions: [

            {
                q: "Which form is suitable for separation of variables?",
                options: [
                    "dy/dx = g(x)h(y)",
                    "dy/dx = x + y",
                    "y'' + y = 0",
                    "dy/dx + y = x"
                ],
                answer: "dy/dx = g(x)h(y)",
                explanation: "A separable equation can be written as a product of a function of x and a function of y."
            },

            {
                q: "How should dy/dx = 2xy be separated?",
                options: [
                    "1/y dy = 2x dx",
                    "y dy = 2x dx",
                    "1/x dy = 2y dx",
                    "dy = 2x dx"
                ],
                answer: "1/y dy = 2x dx",
                explanation: "Divide by y and multiply by dx to place y with dy and x with dx."
            },

            {
                q: "What is the general solution of dy/dx = 2xy?",
                options: [
                    "y = Ce^(x²)",
                    "y = Cx²",
                    "y = e^(2x)",
                    "y = x² + C"
                ],
                answer: "y = Ce^(x²)",
                explanation: "Integrating gives ln|y| = x² + C, so y = Ce^(x²)."
            },

            {
                q: "What is the general solution of dy/dx = x/y?",
                options: [
                    "y² = x² + C",
                    "y = x + C",
                    "y² = 2x + C",
                    "y = x² + C"
                ],
                answer: "y² = x² + C",
                explanation: "Separating gives y dy = x dx, and integrating gives y²/2 = x²/2 + C."
            },

            {
                q: "Solve dy/dx = 3x²y with y(0)=4.",
                options: [
                    "y = 4e^(x³)",
                    "y = 4x³",
                    "y = e^(3x²)",
                    "y = x³ + 4"
                ],
                answer: "y = 4e^(x³)",
                explanation: "The general solution is y = Ce^(x³), and y(0)=4 gives C=4."
            },

            {
                q: "What must be checked before dividing by y(1-y)?",
                options: [
                    "Whether y=0 or y=1 gives equilibrium solutions",
                    "Whether x=0",
                    "Whether the equation is second order",
                    "Whether the derivative is positive"
                ],
                answer: "Whether y=0 or y=1 gives equilibrium solutions",
                explanation: "Dividing by y(1-y) may remove solutions for which that factor is zero."
            },

            {
                q: "Which equation represents exponential decay?",
                options: [
                    "dP/dt = -kP with k>0",
                    "dP/dt = kP with k>0",
                    "dP/dt = k",
                    "d²P/dt² = 0"
                ],
                answer: "dP/dt = -kP with k>0",
                explanation: "The negative proportionality constant causes the quantity to decrease exponentially."
            },

            {
                q: "If dP/dt = kP and P(0)=P₀, what is P(t)?",
                options: [
                    "P(t)=P₀e^(kt)",
                    "P(t)=kt+P₀",
                    "P(t)=P₀e^(-kt)",
                    "P(t)=P₀t^k"
                ],
                answer: "P(t)=P₀e^(kt)",
                explanation: "Separating and integrating gives the exponential growth model."
            },

            {
                q: "Which equation is not immediately separable?",
                options: [
                    "dy/dx = x + y",
                    "dy/dx = x²y",
                    "dy/dx = x/y",
                    "dy/dx = (x+1)/(y-2)"
                ],
                answer: "dy/dx = x + y",
                explanation: "The x and y terms are added rather than multiplied in separable form."
            },

            {
                q: "Why are absolute values used when integrating 1/y?",
                options: [
                    "Because ∫1/y dy = ln|y| + C",
                    "Because y must always be positive",
                    "Because logarithms cannot contain constants",
                    "Because derivatives are always absolute"
                ],
                answer: "Because ∫1/y dy = ln|y| + C",
                explanation: "The derivative of ln|y| is 1/y for every nonzero y."
            }

        ]
    }
    ,

    "calculus4-unit1-lesson4": {
        title: "Linear First-Order Equations",
        subtitle: "Solve first-order linear differential equations using integrating factors.",

        body: `

<h2>Introduction</h2>

<p>Not every first-order differential equation can be solved by separating variables. Fortunately, an important class of equations called <strong>linear first-order differential equations</strong> can be solved using a systematic method known as the <strong>integrating factor method</strong>.</p>

<p>This method is one of the most useful techniques in differential equations because it applies to many physical models involving growth, decay, mixing problems, electrical circuits, and Newton's Law of Cooling.</p>

<hr>

<h2>Standard Form</h2>

<p>A first-order linear differential equation is written in the standard form:</p>

<p><strong>dy/dx + P(x)y = Q(x)</strong></p>

<p>where:</p>

<ul>
<li>P(x) is a function of x.</li>
<li>Q(x) is another function of x.</li>
</ul>

<p>The important feature is that the dependent variable y and its derivative both appear only to the first power.</p>

<hr>

<h2>Examples of Linear Equations</h2>

<p>The following are linear differential equations:</p>

<p><strong>dy/dx + 3y = x</strong></p>

<p><strong>dy/dx - 5xy = sin(x)</strong></p>

<p><strong>dy/dx + (2/x)y = x²</strong></p>

<p>Each equation fits the standard form:</p>

<p><strong>dy/dx + P(x)y = Q(x)</strong></p>

<hr>

<h2>Examples of Nonlinear Equations</h2>

<p>The following equations are <strong>not</strong> linear:</p>

<p><strong>dy/dx = y²</strong></p>

<p>because y is squared.</p>

<p><strong>yy' = x</strong></p>

<p>because y multiplies its derivative.</p>

<p><strong>dy/dx + sin(y) = 0</strong></p>

<p>because y appears inside a nonlinear function.</p>

<hr>

<h2>The Integrating Factor</h2>

<p>The key idea is to multiply every term of the equation by a carefully chosen function called the <strong>integrating factor</strong>.</p>

<p>The integrating factor is defined as:</p>

<p><strong>μ(x)=e^(∫P(x)dx)</strong></p>

<p>Multiplying the equation by μ(x) transforms the left side into the derivative of a product.</p>

<p>This makes the equation easy to integrate.</p>

<hr>

<h2>Why the Method Works</h2>

<p>Recall the Product Rule:</p>

<p><strong>d/dx[μ(x)y]=μ(x)dy/dx+μ'(x)y</strong></p>

<p>Since:</p>

<p><strong>μ'(x)=P(x)μ(x)</strong></p>

<p>the left side becomes exactly:</p>

<p><strong>d/dx[μ(x)y]</strong></p>

<p>This is why the integrating factor is chosen the way it is.</p>

<hr>

<h2>General Solution Procedure</h2>

<ol>
<li>Write the equation in standard form.</li>
<li>Identify P(x).</li>
<li>Compute the integrating factor μ(x).</li>
<li>Multiply every term by μ(x).</li>
<li>Rewrite the left side as one derivative.</li>
<li>Integrate both sides.</li>
<li>Solve for y.</li>
</ol>

<hr>

<h2>Example 1</h2>

<p>Solve:</p>

<p><strong>dy/dx + y = x</strong></p>

<p>Step 1:</p>

<p>P(x)=1</p>

<p>Step 2:</p>

<p>Compute the integrating factor.</p>

<p><strong>μ(x)=e^(∫1dx)=e^x</strong></p>

<p>Multiply the equation by e<sup>x</sup>.</p>

<p><strong>e^x dy/dx + e^xy = xe^x</strong></p>

<p>The left side becomes:</p>

<p><strong>d/dx(e^xy)</strong></p>

<p>Therefore:</p>

<p><strong>d/dx(e^xy)=xe^x</strong></p>

<p>Now integrate both sides.</p>

<p><strong>e^xy=∫xe^xdx+C</strong></p>

<p>The remaining integral will be evaluated using integration by parts.</p>

<hr>

<h2>Evaluating ∫xe^x dx</h2>

<p>Choose:</p>

<p><strong>u=x</strong></p>

<p><strong>dv=e^xdx</strong></p>

<p>Then:</p>

<p><strong>du=dx</strong></p>

<p><strong>v=e^x</strong></p>

<p>Applying integration by parts gives:</p>

<p><strong>∫xe^xdx=xe^x−e^x+C</strong></p>

<p>Substitute into the previous equation:</p>

<p><strong>e^xy=xe^x−e^x+C</strong></p>

<p>Divide every term by e<sup>x</sup>.</p>

<p><strong>y=x−1+Ce^(−x)</strong></p>

<p>This is the general solution.</p>

<hr>

<h2>Checking the Solution</h2>

<p>Differentiate:</p>

<p><strong>y=x−1+Ce^(−x)</strong></p>

<p>Then:</p>

<p><strong>dy/dx=1−Ce^(−x)</strong></p>

<p>Now substitute into the original equation.</p>

<p>The left side becomes:</p>

<p><strong>(1−Ce^(−x))+(x−1+Ce^(−x))</strong></p>

<p>Everything except x cancels.</p>

<p>The result is simply:</p>

<p><strong>x</strong></p>

<p>Therefore the solution satisfies the differential equation.

<hr>

<h2>Example 2</h2>

<p>Solve:</p>

<p><strong>dy/dx+2y=0</strong></p>

<p>Here:</p>

<p><strong>P(x)=2</strong></p>

<p>The integrating factor is:</p>

<p><strong>μ(x)=e^(2x)</strong></p>

<p>Multiply both sides:</p>

<p><strong>e^(2x)dy/dx+2e^(2x)y=0</strong></p>

<p>The left side becomes:</p>

<p><strong>d/dx(e^(2x)y)=0</strong></p>

<p>Integrate:</p>

<p><strong>e^(2x)y=C</strong></p>

<p>Therefore:</p>

<p><strong>y=Ce^(−2x)</strong></p>

<hr>

<h2>Observation</h2>

<p>Notice that this solution is identical to what we would obtain using separation of variables.</p>

<p>This demonstrates that some differential equations can be solved by more than one method.</p>

<hr>
<h2>Example 3</h2>

<p>Solve the initial value problem:</p>

<p><strong>dy/dx + y = 2</strong></p>

<p>with:</p>

<p><strong>y(0)=5</strong></p>

<p>The equation is already in standard form.</p>

<p>Here:</p>

<p><strong>P(x)=1</strong></p>

<p>Therefore, the integrating factor is:</p>

<p><strong>μ(x)=e^(∫1dx)=e^x</strong></p>

<p>Multiply every term by e<sup>x</sup>:</p>

<p><strong>e^x dy/dx + e^x y = 2e^x</strong></p>

<p>The left side becomes:</p>

<p><strong>d/dx(e^x y)=2e^x</strong></p>

<p>Integrate both sides:</p>

<p><strong>e^x y = 2e^x + C</strong></p>

<p>Divide by e<sup>x</sup>:</p>

<p><strong>y = 2 + Ce<sup>-x</sup></strong></p>

<p>Use the initial condition:</p>

<p><strong>5 = 2 + C</strong></p>

<p><strong>C = 3</strong></p>

<p>Therefore:</p>

<p><strong>y = 2 + 3e<sup>-x</sup></strong></p>

<hr>

<h2>Example 4</h2>

<p>Solve:</p>

<p><strong>dy/dx + (2/x)y = x</strong></p>

<p>where x > 0.</p>

<p>Here:</p>

<p><strong>P(x)=2/x</strong></p>

<p>The integrating factor is:</p>

<p><strong>μ(x)=e^(∫2/x dx)=e^(2lnx)</strong></p>

<p>Using logarithm properties:</p>

<p><strong>μ(x)=x²</strong></p>

<p>Multiply every term by x²:</p>

<p><strong>x² dy/dx + 2xy = x³</strong></p>

<p>The left side becomes:</p>

<p><strong>d/dx(x²y)</strong></p>

<p>Therefore:</p>

<p><strong>d/dx(x²y)=x³</strong></p>

<p>Integrate:</p>

<p><strong>x²y=x⁴/4+C</strong></p>

<p>Solve for y:</p>

<p><strong>y=x²/4+C/x²</strong></p>

<hr>

<h2>Example 5</h2>

<p>Solve:</p>

<p><strong>dy/dx-3y=e^(3x)</strong></p>

<p>First identify:</p>

<p><strong>P(x)=-3</strong></p>

<p>The integrating factor becomes:</p>

<p><strong>μ(x)=e^(-3x)</strong></p>

<p>Multiply every term:</p>

<p><strong>e^(-3x)dy/dx-3e^(-3x)y=1</strong></p>

<p>The left side is:</p>

<p><strong>d/dx(e^(-3x)y)</strong></p>

<p>Integrate:</p>

<p><strong>e^(-3x)y=x+C</strong></p>

<p>Therefore:</p>

<p><strong>y=(x+C)e^(3x)</strong></p>

<hr>

<h2>Applications of Linear Differential Equations</h2>

<p>Linear first-order differential equations appear throughout science and engineering.</p>

<h3>Newton's Law of Cooling</h3>

<p>An object cools according to:</p>

<p><strong>dT/dt+kT=kT<sub>s</sub></strong></p>

<p>where:</p>

<ul>
<li>T is the object's temperature.</li>
<li>T<sub>s</sub> is the surrounding temperature.</li>
<li>k is a positive constant.</li>
</ul>

<p>This equation is linear and solved using an integrating factor.</p>

<h3>Electrical Circuits</h3>

<p>An RC circuit satisfies:</p>

<p><strong>dq/dt+(1/RC)q=E(t)/R</strong></p>

<p>where:</p>

<ul>
<li>q is electric charge.</li>
<li>R is resistance.</li>
<li>C is capacitance.</li>
<li>E(t) is the applied voltage.</li>
</ul>

<p>This equation is also linear.</p>

<h3>Mixing Problems</h3>

<p>When salt enters and leaves a tank, the amount of salt often satisfies:</p>

<p><strong>dA/dt+P(t)A=Q(t)</strong></p>

<p>which is another first-order linear equation.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Not writing the equation in standard form first.</li>
<li>Using the wrong integrating factor.</li>
<li>Forgetting to multiply every term by the integrating factor.</li>
<li>Forgetting that the left side becomes one derivative.</li>
<li>Making algebra mistakes after integrating.</li>
<li>Applying the initial condition before solving for y.</li>
</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>
<li>A first-order linear equation has the form <strong>dy/dx + P(x)y = Q(x)</strong>.</li>
<li>The integrating factor is <strong>μ(x)=e^(∫P(x)dx)</strong>.</li>
<li>Multiplying by the integrating factor converts the left side into the derivative of a product.</li>
<li>After integrating, solve for y and apply any initial conditions.</li>
<li>Linear differential equations model cooling, electrical circuits, mixing problems, and many other physical systems.</li>
</ul>

`,
        questions: [

            {
                q: "What is the standard form of a first-order linear differential equation?",
                options: [
                    "dy/dx + P(x)y = Q(x)",
                    "dy/dx = P(x)Q(x)",
                    "y'' + P(x)y = Q(x)",
                    "dy/dx = y²"
                ],
                answer: "dy/dx + P(x)y = Q(x)",
                explanation: "Every first-order linear equation can be written in the form dy/dx + P(x)y = Q(x)."
            },

            {
                q: "What is the integrating factor for dy/dx + 4y = x?",
                options: [
                    "e^(4x)",
                    "e^(x)",
                    "4e^(x)",
                    "x⁴"
                ],
                answer: "e^(4x)",
                explanation: "The integrating factor is μ(x)=e^(∫4dx)=e^(4x)."
            },

            {
                q: "The purpose of multiplying by the integrating factor is to:",
                options: [
                    "Turn the left side into the derivative of a product",
                    "Remove the derivative",
                    "Separate the variables",
                    "Eliminate the constant of integration"
                ],
                answer: "Turn the left side into the derivative of a product",
                explanation: "The integrating factor converts the left-hand side into d/dx[μ(x)y]."
            },

            {
                q: "Which equation is linear?",
                options: [
                    "dy/dx + 5y = x²",
                    "dy/dx = y²",
                    "yy' = x",
                    "dy/dx + sin(y) = 0"
                ],
                answer: "dy/dx + 5y = x²",
                explanation: "The dependent variable and its derivative appear only to the first power."
            },

            {
                q: "What is the integrating factor for dy/dx + (2/x)y = x?",
                options: [
                    "x²",
                    "2x",
                    "1/x²",
                    "e^(x²)"
                ],
                answer: "x²",
                explanation: "μ(x)=e^(∫2/x dx)=e^(2lnx)=x²."
            },

            {
                q: "Which method is commonly used to solve first-order linear differential equations?",
                options: [
                    "Integrating factor",
                    "Quadratic formula",
                    "Long division",
                    "Synthetic division"
                ],
                answer: "Integrating factor",
                explanation: "The integrating factor is the standard solution method."
            },

            {
                q: "After multiplying by the integrating factor, what is the next step?",
                options: [
                    "Integrate both sides",
                    "Differentiate both sides",
                    "Separate variables",
                    "Square both sides"
                ],
                answer: "Integrate both sides",
                explanation: "Once the left side becomes a product derivative, integrate both sides."
            },

            {
                q: "Newton's Law of Cooling is modeled by which type of differential equation?",
                options: [
                    "First-order linear",
                    "Second-order nonlinear",
                    "Separable only",
                    "Partial differential equation"
                ],
                answer: "First-order linear",
                explanation: "Newton's Law of Cooling is a classic application of first-order linear equations."
            },

            {
                q: "One common mistake when using integrating factors is:",
                options: [
                    "Forgetting to multiply every term by the integrating factor",
                    "Differentiating too many times",
                    "Using logarithms",
                    "Writing the equation in standard form"
                ],
                answer: "Forgetting to multiply every term by the integrating factor",
                explanation: "Every term in the differential equation must be multiplied by μ(x)."
            },

            {
                q: "The solution of dy/dx + 2y = 0 is:",
                options: [
                    "y = Ce^(-2x)",
                    "y = Ce^(2x)",
                    "y = 2x + C",
                    "y = Cx²"
                ],
                answer: "y = Ce^(-2x)",
                explanation: "Using the integrating factor e^(2x) gives the solution y = Ce^(-2x)."
            }

        ]
    }
    ,

    "calculus4-unit1-lesson5": {
        title: "Exact Equations",
        subtitle: "Solve differential equations by recognizing exact differentials and finding potential functions.",

        body: `

<h2>Introduction</h2>

<p>Some first-order differential equations cannot be solved by separation of variables or by using an integrating factor. Another important family of equations, called <strong>exact differential equations</strong>, can be solved by recognizing that they represent the differential of another function.</p>

<p>Instead of solving directly for y, we find a function whose total differential matches the given equation.</p>

<hr>

<h2>General Form</h2>

<p>An exact differential equation is written as:</p>

<p><strong>M(x,y)dx + N(x,y)dy = 0</strong></p>

<p>where M(x,y) and N(x,y) are functions of both x and y.</p>

<p>The goal is to determine whether there exists a function F(x,y) such that:</p>

<p><strong>dF = Mdx + Ndy</strong></p>

<p>If such a function exists, then the solution is simply:</p>

<p><strong>F(x,y)=C</strong></p>

<hr>

<h2>Total Differentials</h2>

<p>Suppose:</p>

<p><strong>F(x,y)=x²+y²</strong></p>

<p>The partial derivatives are:</p>

<p><strong>∂F/∂x=2x</strong></p>

<p><strong>∂F/∂y=2y</strong></p>

<p>The total differential is:</p>

<p><strong>dF=2xdx+2ydy</strong></p>

<p>Notice that this already has the form:</p>

<p><strong>Mdx+Ndy</strong></p>

<p>Therefore:</p>

<p><strong>2xdx+2ydy=0</strong></p>

<p>is an exact differential equation whose solution is:</p>

<p><strong>x²+y²=C</strong></p>

<hr>

<h2>How to Test Whether an Equation Is Exact</h2>

<p>Given:</p>

<p><strong>M(x,y)dx+N(x,y)dy=0</strong></p>

<p>Compute:</p>

<p><strong>∂M/∂y</strong></p>

<p>and</p>

<p><strong>∂N/∂x</strong></p>

<p>If:</p>

<p><strong>∂M/∂y = ∂N/∂x</strong></p>

<p>throughout the region of interest, then the equation is exact.</p>

<p>If they are not equal, the equation is not exact (unless an integrating factor exists, which is studied later).</p>

<hr>

<h2>Example 1</h2>

<p>Determine whether the following equation is exact:</p>

<p><strong>(2x+y)dx+(x+4y)dy=0</strong></p>

<p>Identify:</p>

<p><strong>M=2x+y</strong></p>

<p><strong>N=x+4y</strong></p>

<p>Compute the partial derivatives:</p>

<p><strong>∂M/∂y=1</strong></p>

<p><strong>∂N/∂x=1</strong></p>

<p>Since they are equal, the equation is exact.</p>

<hr>

<h2>Finding the Potential Function</h2>

<p>After verifying exactness, we must determine F(x,y).</p>

<p>Since:</p>

<p><strong>∂F/∂x=M</strong></p>

<p>integrate M with respect to x.</p>

<p>For the previous example:</p>

<p><strong>M=2x+y</strong></p>

<p>Integrating with respect to x gives:</p>

<p><strong>F=x²+xy+g(y)</strong></p>

<p>Notice that g(y) is an unknown function of y because it behaves like a constant during integration with respect to x.</p>

<hr>

<h2>Finding g(y)</h2>

<p>Differentiate F with respect to y:</p>

<p><strong>∂F/∂y=x+g'(y)</strong></p>

<p>This must equal N:</p>

<p><strong>x+4y</strong></p>

<p>Therefore:</p>

<p><strong>g'(y)=4y</strong></p>

<p>Integrating gives:</p>

<p><strong>g(y)=2y²</strong></p>

<p>Substitute back:</p>

<p><strong>F=x²+xy+2y²</strong></p>

<p>Therefore, the solution is:</p>

<p><strong>x²+xy+2y²=C</strong></p>

<hr>

<h2>Example 2</h2>

<p>Solve:</p>

<p><strong>(3x²+2y)dx+(2x+6y²)dy=0</strong></p>

<p>First identify:</p>

<p><strong>M=3x²+2y</strong></p>

<p><strong>N=2x+6y²</strong></p>

<p>Compute:</p>

<p><strong>∂M/∂y=2</strong></p>

<p><strong>∂N/∂x=2</strong></p>

<p>The equation is exact.</p>

<hr>

<h2>Finding F(x,y)</h2>

<p>Integrate M with respect to x:</p>

<p><strong>F=x³+2xy+g(y)</strong></p>

<p>Differentiate with respect to y:</p>

<p><strong>∂F/∂y=2x+g'(y)</strong></p>

<p>Set equal to N:</p>

<p><strong>2x+6y²</strong></p>

<p>Therefore:</p>

<p><strong>g'(y)=6y²</strong></p>

<p>Integrate:</p>

<p><strong>g(y)=2y³</strong></p>

<p>Thus:</p>

<p><strong>F=x³+2xy+2y³</strong></p>

<p>Therefore:</p>

<p><strong>x³+2xy+2y³=C</strong></p>

<hr>
<h2>Example 3</h2>

<p>Determine whether the following equation is exact:</p>

<p><strong>(y²+2x)dx+(2xy+1)dy=0</strong></p>

<p>Identify:</p>

<p><strong>M=y²+2x</strong></p>

<p><strong>N=2xy+1</strong></p>

<p>Compute the partial derivatives:</p>

<p><strong>∂M/∂y=2y</strong></p>

<p><strong>∂N/∂x=2y</strong></p>

<p>Since these are equal, the equation is exact.</p>

<p>Integrate M with respect to x:</p>

<p><strong>F=xy²+x²+g(y)</strong></p>

<p>Differentiate with respect to y:</p>

<p><strong>∂F/∂y=2xy+g'(y)</strong></p>

<p>Set equal to N:</p>

<p><strong>2xy+1</strong></p>

<p>Therefore:</p>

<p><strong>g'(y)=1</strong></p>

<p>Integrate:</p>

<p><strong>g(y)=y</strong></p>

<p>The solution is:</p>

<p><strong>xy²+x²+y=C</strong></p>

<hr>

<h2>Example 4: A Non-Exact Equation</h2>

<p>Consider:</p>

<p><strong>(2xy)dx+(x²+y)dy=0</strong></p>

<p>Compute:</p>

<p><strong>∂M/∂y=2x</strong></p>

<p><strong>∂N/∂x=2x</strong></p>

<p>This equation is exact.</p>

<p>Now compare it with:</p>

<p><strong>(2xy)dx+(x²+2y)dy=0</strong></p>

<p>Again compute:</p>

<p><strong>∂M/∂y=2x</strong></p>

<p><strong>∂N/∂x=2x</strong></p>

<p>This equation is also exact.</p>

<p>Finally consider:</p>

<p><strong>(2xy+y)dx+(x²+3y²)dy=0</strong></p>

<p>Now:</p>

<p><strong>∂M/∂y=2x+1</strong></p>

<p><strong>∂N/∂x=2x</strong></p>

<p>Since these are not equal, this equation is <strong>not exact</strong>.</p>

<hr>

<h2>Geometric Interpretation</h2>

<p>An exact differential equation comes from a single function F(x,y).</p>

<p>The solution curves are simply the level curves:</p>

<p><strong>F(x,y)=C</strong></p>

<p>These are sometimes called <strong>implicit solution curves</strong>.</p>

<p>Instead of solving explicitly for y, we describe every solution using one equation involving both variables.</p>

<hr>

<h2>Why Exact Equations Matter</h2>

<p>Exact equations arise naturally in many areas of mathematics and science.</p>

<ul>
<li>Thermodynamics</li>
<li>Fluid mechanics</li>
<li>Electrostatics</li>
<li>Conservative force fields</li>
<li>Potential energy calculations</li>
<li>Optimization problems</li>
</ul>

<p>In physics, conservative forces often come from a potential function, making exact equations especially important.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Forgetting to test for exactness before solving.</li>
<li>Computing partial derivatives incorrectly.</li>
<li>Forgetting the unknown function g(y) after integrating with respect to x.</li>
<li>Using a constant instead of a function when integrating partially.</li>
<li>Forgetting to compare ∂F/∂y with N(x,y).</li>
<li>Trying to solve explicitly for y when the implicit form is sufficient.</li>
</ul>

<hr>

<h2>Summary of the Procedure</h2>

<ol>
<li>Write the equation as Mdx + Ndy = 0.</li>
<li>Compute ∂M/∂y.</li>
<li>Compute ∂N/∂x.</li>
<li>If they are equal, the equation is exact.</li>
<li>Integrate M with respect to x.</li>
<li>Add an unknown function g(y).</li>
<li>Differentiate with respect to y.</li>
<li>Determine g(y).</li>
<li>Write the solution as F(x,y)=C.</li>
</ol>

<hr>

<h2>Lesson Summary</h2>

<ul>
<li>An exact differential equation has the form M(x,y)dx + N(x,y)dy = 0.</li>
<li>An equation is exact when ∂M/∂y = ∂N/∂x.</li>
<li>Solutions are found by constructing a potential function F(x,y).</li>
<li>The final answer is usually written implicitly as F(x,y)=C.</li>
<li>Exact equations frequently appear in physics, engineering, and applied mathematics.</li>
</ul>

`,
        questions: [

            {
                q: "An exact differential equation has the form:",
                options: [
                    "M(x,y)dx + N(x,y)dy = 0",
                    "dy/dx = M(x,y)",
                    "y'' + y = 0",
                    "dy/dx + P(x)y = Q(x)"
                ],
                answer: "M(x,y)dx + N(x,y)dy = 0",
                explanation: "Exact equations are written in the differential form Mdx + Ndy = 0."
            },

            {
                q: "Which condition determines whether an equation is exact?",
                options: [
                    "∂M/∂y = ∂N/∂x",
                    "M = N",
                    "dy/dx = 0",
                    "∂M/∂x = ∂N/∂y"
                ],
                answer: "∂M/∂y = ∂N/∂x",
                explanation: "An equation is exact when the mixed partial derivatives are equal."
            },

            {
                q: "After verifying that an equation is exact, the next step is to:",
                options: [
                    "Integrate M with respect to x",
                    "Separate the variables",
                    "Find an integrating factor",
                    "Differentiate N"
                ],
                answer: "Integrate M with respect to x",
                explanation: "This begins the process of constructing the potential function F(x,y)."
            },

            {
                q: "When integrating M(x,y) with respect to x, what must be added?",
                options: [
                    "An unknown function g(y)",
                    "An arbitrary constant only",
                    "An unknown function h(x)",
                    "Nothing"
                ],
                answer: "An unknown function g(y)",
                explanation: "Since y is treated as a constant during integration, the constant of integration may actually be any function of y."
            },

            {
                q: "The final solution of an exact equation is usually written as:",
                options: [
                    "F(x,y)=C",
                    "y=f(x)",
                    "dy/dx=f(x)",
                    "x=f(y)"
                ],
                answer: "F(x,y)=C",
                explanation: "Most exact equations naturally produce implicit solutions."
            },

            {
                q: "For the equation (2x+y)dx + (x+4y)dy = 0, what are ∂M/∂y and ∂N/∂x?",
                options: [
                    "1 and 1",
                    "2 and 4",
                    "0 and 1",
                    "2x and 4y"
                ],
                answer: "1 and 1",
                explanation: "Both partial derivatives equal 1, so the equation is exact."
            },

            {
                q: "If ∂M/∂y ≠ ∂N/∂x, then the equation is:",
                options: [
                    "Not exact",
                    "Always separable",
                    "Linear",
                    "Second order"
                ],
                answer: "Not exact",
                explanation: "Unequal mixed partial derivatives mean the equation is not exact."
            },

            {
                q: "Why do we differentiate F(x,y) with respect to y after integrating M?",
                options: [
                    "To determine the unknown function g(y)",
                    "To eliminate x",
                    "To separate variables",
                    "To compute the integrating factor"
                ],
                answer: "To determine the unknown function g(y)",
                explanation: "Comparing ∂F/∂y with N(x,y) allows us to solve for g(y)."
            },

            {
                q: "Exact differential equations commonly appear in:",
                options: [
                    "Physics and engineering",
                    "Grammar",
                    "Accounting only",
                    "Computer graphics only"
                ],
                answer: "Physics and engineering",
                explanation: "Exact equations frequently model conservative systems, thermodynamics, and fluid mechanics."
            },

            {
                q: "What is a common mistake when solving exact equations?",
                options: [
                    "Forgetting to include g(y) after integrating M with respect to x",
                    "Using too many derivatives",
                    "Applying the quadratic formula",
                    "Using logarithms"
                ],
                answer: "Forgetting to include g(y) after integrating M with respect to x",
                explanation: "The missing function g(y) is necessary because integration is performed with respect to x only."
            }

        ]
    }
    ,

    "calculus4-unit1-lesson6": {
        title: "Applications of First-Order Differential Equations",
        subtitle: "Apply first-order differential equations to model population growth, cooling, mixing, and real-world systems.",

        body: `

<h2>Introduction</h2>

<p>Differential equations are powerful because they model how quantities change over time or space. Scientists, engineers, economists, and biologists use first-order differential equations to describe real-world systems.</p>

<p>In this lesson, we will study several common applications, including population growth, radioactive decay, Newton's Law of Cooling, and mixing problems.</p>

<hr>

<h2>Mathematical Modeling</h2>

<p>A mathematical model is an equation that describes a real-world process.</p>

<p>The model should:</p>

<ul>
<li>Describe how a quantity changes.</li>
<li>Be based on known physical laws.</li>
<li>Predict future behavior.</li>
</ul>

<p>Many models begin by writing a differential equation that represents a rate of change.</p>

<hr>

<h2>Population Growth</h2>

<p>Suppose a population grows at a rate proportional to its current size.</p>

<p>This assumption leads to the differential equation:</p>

<p><strong>dP/dt = kP</strong></p>

<p>where:</p>

<ul>
<li>P(t) is the population.</li>
<li>k is the growth constant.</li>
</ul>

<p>Since this equation is separable:</p>

<p><strong>dP/P = k dt</strong></p>

<p>Integrating both sides gives:</p>

<p><strong>ln|P| = kt + C</strong></p>

<p>Therefore:</p>

<p><strong>P(t)=P₀e^(kt)</strong></p>

<p>If k is positive, the population grows exponentially.</p>

<p>If k is negative, the population decreases exponentially.</p>

<hr>

<h2>Example 1</h2>

<p>A bacterial culture starts with 500 bacteria and doubles every 4 hours.</p>

<p>The exponential growth model is:</p>

<p><strong>P(t)=500e^(kt)</strong></p>

<p>Since the population doubles after 4 hours:</p>

<p><strong>1000=500e^(4k)</strong></p>

<p>Divide by 500:</p>

<p><strong>2=e^(4k)</strong></p>

<p>Take the natural logarithm:</p>

<p><strong>ln2=4k</strong></p>

<p>Therefore:</p>

<p><strong>k=(ln2)/4</strong></p>

<p>The complete model becomes:</p>

<p><strong>P(t)=500e^((ln2/4)t)</strong></p>

<hr>

<h2>Radioactive Decay</h2>

<p>Many unstable elements decay at a rate proportional to the amount remaining.</p>

<p>The differential equation is:</p>

<p><strong>dN/dt=-kN</strong></p>

<p>whose solution is:</p>

<p><strong>N(t)=N₀e^(-kt)</strong></p>

<p>Here:</p>

<ul>
<li>N₀ is the initial amount.</li>
<li>k is the decay constant.</li>
</ul>

<hr>

<h2>Example 2</h2>

<p>A radioactive sample begins with 80 grams.</p>

<p>Its decay constant is k=0.03.</p>

<p>The model becomes:</p>

<p><strong>N(t)=80e^(-0.03t)</strong></p>

<p>After 20 time units:</p>

<p><strong>N(20)=80e^(-0.6)</strong></p>

<p>Approximately:</p>

<p><strong>43.9 grams remain.</strong></p>

<hr>

<h2>Half-Life</h2>

<p>The half-life of a substance is the time required for half of the original amount to remain.</p>

<p>Beginning with:</p>

<p><strong>N=N₀e^(-kt)</strong></p>

<p>Set:</p>

<p><strong>N=N₀/2</strong></p>

<p>Then:</p>

<p><strong>1/2=e^(-kt)</strong></p>

<p>Taking natural logarithms gives:</p>

<p><strong>t=(ln2)/k</strong></p>

<p>This important formula is used throughout chemistry, physics, archaeology, and medicine.</p>

<hr>

<h2>Newton's Law of Cooling</h2>

<p>An object's temperature changes at a rate proportional to the difference between its temperature and the surrounding temperature.</p>

<p>The differential equation is:</p>

<p><strong>dT/dt=-k(T-Tₛ)</strong></p>

<p>where:</p>

<ul>
<li>T is the object's temperature.</li>
<li>Tₛ is the surrounding temperature.</li>
<li>k is a positive constant.</li>
</ul>

<p>This equation can be solved by separation of variables or by using an integrating factor.</p>

<hr>
<h2>Example 3</h2>

<p>A cup of coffee is initially 90°C.</p>

<p>The room temperature is 20°C.</p>

<p>The cooling constant is k = 0.08.</p>

<p>The differential equation is:</p>

<p><strong>dT/dt = -0.08(T - 20)</strong></p>

<p>The general solution is:</p>

<p><strong>T(t) = 20 + Ce<sup>-0.08t</sup></strong></p>

<p>Use the initial condition:</p>

<p><strong>T(0)=90</strong></p>

<p>Then:</p>

<p><strong>90 = 20 + C</strong></p>

<p><strong>C = 70</strong></p>

<p>Therefore:</p>

<p><strong>T(t)=20+70e<sup>-0.08t</sup></strong></p>

<p>As time increases, the exponential term approaches zero, so the coffee approaches room temperature.</p>

<hr>

<h2>Mixing Problems</h2>

<p>Mixing problems involve liquids entering and leaving a tank while a substance, such as salt or sugar, dissolves in the liquid.</p>

<p>The amount of dissolved substance changes because material flows in and out.</p>

<p>The general model is:</p>

<p><strong>dA/dt = Rate In − Rate Out</strong></p>

<p>where A(t) is the amount of dissolved substance.</p>

<hr>

<h2>Example 4</h2>

<p>A tank initially contains 100 liters of pure water.</p>

<p>Salt water enters at 3 liters per minute.</p>

<p>The incoming concentration is 2 grams per liter.</p>

<p>The mixture leaves at the same rate.</p>

<p>The amount of salt entering each minute is:</p>

<p><strong>Rate In = 3 × 2 = 6 g/min</strong></p>

<p>If A grams of salt are currently in the tank, then the concentration inside the tank is:</p>

<p><strong>A/100 g/L</strong></p>

<p>The outgoing salt rate is:</p>

<p><strong>Rate Out = 3(A/100)</strong></p>

<p>Therefore:</p>

<p><strong>dA/dt = 6 − 3A/100</strong></p>

<p>This is a first-order linear differential equation.</p>

<hr>

<h2>Logistic Population Growth</h2>

<p>Unlimited exponential growth is unrealistic because food, space, and resources are limited.</p>

<p>A more realistic model is the <strong>logistic equation</strong>:</p>

<p><strong>dP/dt = kP(1 − P/K)</strong></p>

<p>where:</p>

<ul>
<li>P is the population.</li>
<li>k is the growth constant.</li>
<li>K is the carrying capacity.</li>
</ul>

<p>When P is much smaller than K, growth is nearly exponential.</p>

<p>As P approaches K, the growth rate decreases.</p>

<p>Eventually the population levels off at the carrying capacity.</p>

<hr>

<h2>Example 5</h2>

<p>A lake can support a maximum of 10,000 fish.</p>

<p>Initially there are only 500 fish.</p>

<p>Because the population is far below the carrying capacity, the fish population initially grows rapidly.</p>

<p>As the lake becomes crowded, competition for food increases.</p>

<p>The growth rate gradually slows until the population approaches 10,000 fish.</p>

<p>This behavior is predicted by the logistic differential equation.</p>

<hr>

<h2>Other Applications</h2>

<p>First-order differential equations are used in many areas of science and engineering.</p>

<ul>
<li>Charging and discharging electrical circuits</li>
<li>Chemical reaction rates</li>
<li>Drug concentration in the bloodstream</li>
<li>Financial growth models</li>
<li>Spread of infectious diseases</li>
<li>Heat transfer</li>
<li>Groundwater flow</li>
<li>Environmental pollution models</li>
</ul>

<p>Although the physical situations differ, they all involve describing how a quantity changes over time.</p>

<hr>

<h2>Choosing the Correct Method</h2>

<p>Different first-order differential equations require different solution methods.</p>

<table>
<tr><th>Equation Type</th><th>Method</th></tr>
<tr><td>Separable</td><td>Separate variables and integrate</td></tr>
<tr><td>Linear</td><td>Integrating factor</td></tr>
<tr><td>Exact</td><td>Potential function</td></tr>
<tr><td>Population Growth</td><td>Separation of variables</td></tr>
<tr><td>Cooling Problems</td><td>Separation or integrating factor</td></tr>
<tr><td>Mixing Problems</td><td>Linear differential equations</td></tr>
</table>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Using exponential growth when a logistic model is required.</li>
<li>Using the wrong sign in decay problems.</li>
<li>Confusing the surrounding temperature with the object's temperature.</li>
<li>Forgetting that Rate Out depends on the current concentration inside the tank.</li>
<li>Ignoring the initial conditions.</li>
<li>Choosing the wrong solution method.</li>
</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>
<li>Population growth is modeled by dP/dt = kP.</li>
<li>Radioactive decay is modeled by dN/dt = −kN.</li>
<li>Newton's Law of Cooling models temperature change toward the surrounding temperature.</li>
<li>Mixing problems are modeled using Rate In − Rate Out.</li>
<li>The logistic equation models growth with a carrying capacity.</li>
<li>Many real-world systems can be modeled using first-order differential equations.</li>
</ul>

`,
        questions: [

            {
                q: "Which differential equation models exponential population growth?",
                options: [
                    "dP/dt = kP",
                    "dP/dt = -kP",
                    "dP/dt = k(P-K)",
                    "d²P/dt² = kP"
                ],
                answer: "dP/dt = kP",
                explanation: "When the growth rate is proportional to the current population, the model is dP/dt = kP."
            },

            {
                q: "Which equation models radioactive decay?",
                options: [
                    "dN/dt = -kN",
                    "dN/dt = kN",
                    "dN/dt = N²",
                    "d²N/dt² = -kN"
                ],
                answer: "dN/dt = -kN",
                explanation: "Radioactive decay decreases at a rate proportional to the amount remaining."
            },

            {
                q: "The solution to dP/dt = kP is:",
                options: [
                    "P(t)=P₀e^(kt)",
                    "P(t)=kt+P₀",
                    "P(t)=P₀+kt²",
                    "P(t)=P₀e^(-kt)"
                ],
                answer: "P(t)=P₀e^(kt)",
                explanation: "The exponential growth model is P(t)=P₀e^(kt)."
            },

            {
                q: "Newton's Law of Cooling states that the rate of temperature change is proportional to:",
                options: [
                    "The difference between the object's temperature and the surrounding temperature",
                    "The object's temperature only",
                    "The surrounding temperature only",
                    "Time"
                ],
                answer: "The difference between the object's temperature and the surrounding temperature",
                explanation: "The temperature changes according to the difference T − Tₛ."
            },

            {
                q: "What happens to an object according to Newton's Law of Cooling as time becomes very large?",
                options: [
                    "Its temperature approaches the surrounding temperature",
                    "Its temperature becomes zero",
                    "Its temperature continues increasing forever",
                    "Its temperature becomes negative infinity"
                ],
                answer: "Its temperature approaches the surrounding temperature",
                explanation: "The exponential term approaches zero, leaving the surrounding temperature."
            },

            {
                q: "The general model for mixing problems is:",
                options: [
                    "Rate In − Rate Out",
                    "Rate In + Rate Out",
                    "Rate In × Rate Out",
                    "Rate Out − Rate In"
                ],
                answer: "Rate In − Rate Out",
                explanation: "The amount of dissolved substance changes by the amount entering minus the amount leaving."
            },

            {
                q: "Which differential equation models logistic population growth?",
                options: [
                    "dP/dt = kP(1 − P/K)",
                    "dP/dt = kP",
                    "dP/dt = -kP",
                    "dP/dt = P²"
                ],
                answer: "dP/dt = kP(1 − P/K)",
                explanation: "The logistic equation accounts for a carrying capacity K."
            },

            {
                q: "In the logistic model, K represents:",
                options: [
                    "The carrying capacity",
                    "The decay constant",
                    "The initial population",
                    "The growth rate"
                ],
                answer: "The carrying capacity",
                explanation: "The carrying capacity is the maximum sustainable population."
            },

            {
                q: "In a mixing problem, the Rate Out depends on:",
                options: [
                    "The current concentration inside the tank",
                    "Only the incoming concentration",
                    "Only the initial amount",
                    "The outside temperature"
                ],
                answer: "The current concentration inside the tank",
                explanation: "The exiting solution has the same concentration as the mixture inside the tank."
            },

            {
                q: "Which of the following is a common mistake when modeling first-order differential equations?",
                options: [
                    "Using exponential growth when a logistic model is needed",
                    "Finding the derivative",
                    "Writing the initial condition",
                    "Checking units"
                ],
                answer: "Using exponential growth when a logistic model is needed",
                explanation: "When resources are limited, the logistic model is more appropriate than unrestricted exponential growth."
            }

        ]
    }
    ,

    "calculus4-unit1-review": {
        title: "Unit 1 Review",
        subtitle: "Review the key concepts, formulas, and solution methods from Unit 1.",

        body: `

<h2>Unit Overview</h2>

<p>In Unit 1, you learned the fundamental concepts of first-order differential equations. You studied what differential equations are, how to visualize solutions using slope fields, and several methods for solving first-order equations.</p>

<p>The topics covered in this unit form the foundation for the remainder of Differential Equations.</p>

<hr>

<h2>Lesson 1: Introduction to Differential Equations</h2>

<p>A differential equation is an equation containing an unknown function and one or more of its derivatives.</p>

<p>Examples:</p>

<p><strong>dy/dx = 3x²</strong></p>

<p><strong>y'' + 4y = 0</strong></p>

<p>Important ideas:</p>

<ul>

<li>Ordinary Differential Equations (ODEs)</li>

<li>Partial Differential Equations (PDEs)</li>

<li>Order of a differential equation</li>

<li>Linear vs. nonlinear equations</li>

<li>General and particular solutions</li>

<li>Initial value problems</li>

</ul>

<hr>

<h2>Lesson 2: Slope Fields</h2>

<p>A slope field is a collection of short line segments representing the slope of every possible solution at many points.</p>

<p>Remember:</p>

<ul>

<li>Positive slope → increasing solution</li>

<li>Negative slope → decreasing solution</li>

<li>Zero slope → horizontal tangent</li>

<li>Solution curves remain tangent to the slope field.</li>

</ul>

<p>Initial conditions determine which solution curve is followed.</p>

<hr>

<h2>Lesson 3: Separation of Variables</h2>

<p>A differential equation is separable if it can be written as:</p>

<p><strong>dy/dx = g(x)h(y)</strong></p>

<p>Procedure:</p>

<ol>

<li>Separate x and y.</li>

<li>Integrate both sides.</li>

<li>Add the constant of integration.</li>

<li>Apply initial conditions if given.</li>

</ol>

<p>Always check for equilibrium solutions before dividing by expressions containing y.</p>

<hr>

<h2>Lesson 4: Linear First-Order Equations</h2>

<p>The standard form is:</p>

<p><strong>dy/dx + P(x)y = Q(x)</strong></p>

<p>The integrating factor is:</p>

<p><strong>μ(x)=e^(∫P(x)dx)</strong></p>

<p>Procedure:</p>

<ol>

<li>Write the equation in standard form.</li>

<li>Find the integrating factor.</li>

<li>Multiply every term by μ(x).</li>

<li>Rewrite the left side as a product derivative.</li>

<li>Integrate.</li>

<li>Solve for y.</li>

</ol>

<hr>

<h2>Lesson 5: Exact Equations</h2>

<p>Write the equation as:</p>

<p><strong>Mdx + Ndy = 0</strong></p>

<p>Check:</p>

<p><strong>∂M/∂y = ∂N/∂x</strong></p>

<p>If true, integrate M with respect to x.</p>

<p>Add an unknown function g(y).</p>

<p>Differentiate and compare with N.</p>

<p>The solution is written:</p>

<p><strong>F(x,y)=C</strong></p>

<hr>
<h2>Lesson 6: Applications of First-Order Differential Equations</h2>

<p>Many real-world situations can be modeled using first-order differential equations.</p>

<p>The most common applications include:</p>

<ul>

<li>Population growth</li>

<li>Radioactive decay</li>

<li>Newton's Law of Cooling</li>

<li>Mixing problems</li>

<li>Logistic population growth</li>

</ul>

<p>Each application begins by writing a differential equation that describes how the quantity changes over time.</p>

<hr>

<h2>Important Formulas</h2>

<table>

<tr>
<th>Topic</th>
<th>Formula</th>
</tr>

<tr>
<td>Exponential Growth</td>
<td>P(t)=P₀e<sup>kt</sup></td>
</tr>

<tr>
<td>Radioactive Decay</td>
<td>N(t)=N₀e<sup>-kt</sup></td>
</tr>

<tr>
<td>Half-Life</td>
<td>t=(ln2)/k</td>
</tr>

<tr>
<td>Newton's Cooling</td>
<td>dT/dt=-k(T-Tₛ)</td>
</tr>

<tr>
<td>Linear Equation</td>
<td>dy/dx+P(x)y=Q(x)</td>
</tr>

<tr>
<td>Integrating Factor</td>
<td>μ(x)=e<sup>∫P(x)dx</sup></td>
</tr>

<tr>
<td>Exact Equation Test</td>
<td>∂M/∂y = ∂N/∂x</td>
</tr>

<tr>
<td>Logistic Growth</td>
<td>dP/dt=kP(1−P/K)</td>
</tr>

</table>

<hr>

<h2>Choosing the Correct Solution Method</h2>

<table>

<tr>
<th>If the Equation Looks Like...</th>
<th>Use...</th>
</tr>

<tr>
<td>dy/dx = g(x)h(y)</td>
<td>Separation of Variables</td>
</tr>

<tr>
<td>dy/dx + P(x)y = Q(x)</td>
<td>Integrating Factor</td>
</tr>

<tr>
<td>Mdx + Ndy = 0</td>
<td>Exact Equation Method</td>
</tr>

<tr>
<td>dP/dt = kP</td>
<td>Exponential Growth Model</td>
</tr>

<tr>
<td>dN/dt = -kN</td>
<td>Decay Model</td>
</tr>

<tr>
<td>dT/dt = -k(T-Tₛ)</td>
<td>Newton's Law of Cooling</td>
</tr>

<tr>
<td>dA/dt = Rate In − Rate Out</td>
<td>Mixing Model</td>
</tr>

</table>

<hr>

<h2>Worked Review Example 1</h2>

<p>Solve:</p>

<p><strong>dy/dx = xy</strong></p>

<p><strong>Step 1:</strong> Separate variables.</p>

<p>dy/y = x dx</p>

<p><strong>Step 2:</strong> Integrate.</p>

<p>ln|y| = x²/2 + C</p>

<p><strong>Step 3:</strong> Solve for y.</p>

<p><strong>y = Ce<sup>x²/2</sup></strong></p>

<hr>

<h2>Worked Review Example 2</h2>

<p>Solve:</p>

<p><strong>dy/dx + 2y = 6</strong></p>

<p>Here, P(x)=2.</p>

<p>The integrating factor is:</p>

<p><strong>μ=e<sup>2x</sup></strong></p>

<p>Multiply the equation by the integrating factor, rewrite the left side as a product derivative, integrate both sides, and solve for y.</p>

<p>This is the standard procedure for every first-order linear equation.</p>

<hr>

<h2>Worked Review Example 3</h2>

<p>Determine whether the equation</p>

<p><strong>(2xy+3)dx + (x²+4y)dy = 0</strong></p>

<p>is exact.</p>

<p>Let</p>

<p>M=2xy+3</p>

<p>N=x²+4y</p>

<p>Compute the partial derivatives:</p>

<p>∂M/∂y = 2x</p>

<p>∂N/∂x = 2x</p>

<p>Since they are equal, the equation is exact.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Not checking whether variables can actually be separated.</li>

<li>Forgetting the constant of integration.</li>

<li>Using an integrating factor before writing the equation in standard form.</li>

<li>Forgetting to test whether an equation is exact.</li>

<li>Ignoring the initial condition when finding a particular solution.</li>

<li>Using the wrong sign in exponential decay.</li>

<li>Confusing carrying capacity with the initial population in logistic growth.</li>

<li>Forgetting that Rate Out depends on the current concentration in mixing problems.</li>

</ul>

<hr>

<h2>Unit Summary</h2>

<p>After completing Unit 1, you should be able to:</p>

<ul>

<li>Recognize different types of first-order differential equations.</li>

<li>Interpret slope fields and solution curves.</li>

<li>Solve separable differential equations.</li>

<li>Solve linear first-order equations using integrating factors.</li>

<li>Solve exact differential equations.</li>

<li>Model population growth, decay, cooling, and mixing problems.</li>

<li>Select the correct solution technique for a given differential equation.</li>

</ul>

`,
        questions: [

            {
                q: "What is the order of the differential equation y'' + 3y' + y = 0?",
                options: [
                    "First",
                    "Second",
                    "Third",
                    "Zero"
                ],
                answer: "Second",
                explanation: "The order is determined by the highest derivative, which is y''."
            },

            {
                q: "A slope field shows:",
                options: [
                    "The slope of solution curves at many points",
                    "Only the exact solution",
                    "Only the x-intercepts",
                    "The area under the curve"
                ],
                answer: "The slope of solution curves at many points",
                explanation: "Slope fields graphically display the slope of the solution at each point in the plane."
            },

            {
                q: "Which type of differential equation can be solved by separating variables?",
                options: [
                    "dy/dx = g(x)h(y)",
                    "dy/dx + P(x)y = Q(x)",
                    "Mdx + Ndy = 0",
                    "d²y/dx² + y = 0"
                ],
                answer: "dy/dx = g(x)h(y)",
                explanation: "A separable equation can be written as the product of a function of x and a function of y."
            },

            {
                q: "The integrating factor for dy/dx + P(x)y = Q(x) is:",
                options: [
                    "e^(∫P(x)dx)",
                    "e^(∫Q(x)dx)",
                    "∫P(x)dx",
                    "1/P(x)"
                ],
                answer: "e^(∫P(x)dx)",
                explanation: "The integrating factor transforms the left side into the derivative of a product."
            },

            {
                q: "An equation Mdx + Ndy = 0 is exact when:",
                options: [
                    "∂M/∂y = ∂N/∂x",
                    "M = N",
                    "∂M/∂x = ∂N/∂y",
                    "M + N = 0"
                ],
                answer: "∂M/∂y = ∂N/∂x",
                explanation: "This equality is the test for exactness."
            },

            {
                q: "Which model describes unrestricted population growth?",
                options: [
                    "dP/dt = kP",
                    "dP/dt = -kP",
                    "dP/dt = kP(1-P/K)",
                    "dP/dt = P²"
                ],
                answer: "dP/dt = kP",
                explanation: "Exponential growth assumes unlimited resources."
            },

            {
                q: "The half-life of a radioactive substance is:",
                options: [
                    "(ln2)/k",
                    "k/ln2",
                    "2k",
                    "1/k²"
                ],
                answer: "(ln2)/k",
                explanation: "This follows directly from the exponential decay model."
            },

            {
                q: "Newton's Law of Cooling states that an object's temperature eventually:",
                options: [
                    "Approaches the surrounding temperature",
                    "Becomes zero",
                    "Increases forever",
                    "Oscillates indefinitely"
                ],
                answer: "Approaches the surrounding temperature",
                explanation: "As time increases, the object's temperature approaches the ambient temperature."
            },

            {
                q: "Which expression represents the basic model for mixing problems?",
                options: [
                    "Rate In − Rate Out",
                    "Rate In + Rate Out",
                    "Rate Out − Rate In",
                    "Rate In × Rate Out"
                ],
                answer: "Rate In − Rate Out",
                explanation: "The amount of substance changes by what enters minus what leaves."
            },

            {
                q: "Which first-order model includes a carrying capacity?",
                options: [
                    "Logistic growth",
                    "Exponential growth",
                    "Radioactive decay",
                    "Newton's Law of Cooling"
                ],
                answer: "Logistic growth",
                explanation: "The logistic equation contains the carrying capacity K and limits long-term growth."
            }

        ]
    }
    ,

    "calculus4-unit1-test": {
        title: "Unit 1 Test",
        subtitle: "Test your understanding of all concepts covered in Unit 1.",

        body: `

<h2>Unit 1 Test</h2>

<p>This test covers all material from Unit 1.</p>

<p>Topics include:</p>

<ul>

<li>Introduction to Differential Equations</li>

<li>Slope Fields</li>

<li>Separation of Variables</li>

<li>Linear First-Order Equations</li>

<li>Exact Equations</li>

<li>Applications of First-Order Differential Equations</li>

</ul>

<p>Select the best answer for each question before checking your score.</p>

<hr>

`,

        questions: [

            {
                q: "1. A differential equation is an equation that contains:",
                options: [
                    "An unknown function and its derivatives",
                    "Only numbers",
                    "Only algebraic expressions",
                    "Only integrals"
                ],
                answer: "An unknown function and its derivatives",
                explanation: "Differential equations relate an unknown function to one or more of its derivatives."
            },

            {
                q: "2. The order of a differential equation is determined by:",
                options: [
                    "The highest derivative present",
                    "The degree of the polynomial",
                    "The number of variables",
                    "The number of constants"
                ],
                answer: "The highest derivative present",
                explanation: "The order equals the highest-order derivative appearing in the equation."
            },

            {
                q: "3. A slope field represents:",
                options: [
                    "The slope of solution curves at many points",
                    "Only the exact solution",
                    "The graph of y=x",
                    "The derivative of a polynomial"
                ],
                answer: "The slope of solution curves at many points",
                explanation: "Each line segment shows the slope of the solution passing through that point."
            },

            {
                q: "4. Horizontal line segments in a slope field indicate:",
                options: [
                    "Zero slope",
                    "Infinite slope",
                    "Negative slope",
                    "Undefined solutions"
                ],
                answer: "Zero slope",
                explanation: "A horizontal tangent has slope equal to zero."
            },

            {
                q: "5. Which equation is separable?",
                options: [
                    "dy/dx = x(y+1)",
                    "dy/dx + y = x",
                    "y'' + y = 0",
                    "x + y = 5"
                ],
                answer: "dy/dx = x(y+1)",
                explanation: "Variables can be separated into y-dependent and x-dependent factors."
            },

            {
                q: "6. After separating variables, the next step is:",
                options: [
                    "Integrate both sides",
                    "Differentiate again",
                    "Multiply by an integrating factor",
                    "Take the Laplace transform"
                ],
                answer: "Integrate both sides",
                explanation: "Once variables are separated, integrate each side with respect to its variable."
            },

            {
                q: "7. The standard form of a first-order linear differential equation is:",
                options: [
                    "dy/dx + P(x)y = Q(x)",
                    "dy/dx = g(x)h(y)",
                    "Mdx + Ndy = 0",
                    "y'' + y = 0"
                ],
                answer: "dy/dx + P(x)y = Q(x)",
                explanation: "This is the required form before applying the integrating factor method."
            },

            {
                q: "8. The integrating factor is:",
                options: [
                    "e^(∫P(x)dx)",
                    "P(x)",
                    "Q(x)",
                    "1/P(x)"
                ],
                answer: "e^(∫P(x)dx)",
                explanation: "The integrating factor converts the left side into the derivative of a product."
            },

            {
                q: "9. Exact equations are written as:",
                options: [
                    "Mdx + Ndy = 0",
                    "dy/dx = f(x)",
                    "y'' + y = 0",
                    "dy = dx"
                ],
                answer: "Mdx + Ndy = 0",
                explanation: "Exact equations are expressed using functions M(x,y) and N(x,y)."
            },

            {
                q: "10. An equation is exact when:",
                options: [
                    "∂M/∂y = ∂N/∂x",
                    "M=N",
                    "∂M/∂x=∂N/∂y",
                    "M+N=0"
                ],
                answer: "∂M/∂y = ∂N/∂x",
                explanation: "Matching mixed partial derivatives confirms exactness."
            },

            {
                q: "11. The differential equation dP/dt = kP models:",
                options: [
                    "Exponential population growth",
                    "Radioactive decay",
                    "Newton's Law of Cooling",
                    "A mixing problem"
                ],
                answer: "Exponential population growth",
                explanation: "When the growth rate is proportional to the current population, the model is dP/dt = kP."
            },

            {
                q: "12. Radioactive decay is modeled by:",
                options: [
                    "dN/dt = -kN",
                    "dN/dt = kN",
                    "dN/dt = N²",
                    "d²N/dt² = -kN"
                ],
                answer: "dN/dt = -kN",
                explanation: "The negative sign indicates the quantity decreases over time."
            },

            {
                q: "13. The half-life of a radioactive substance is:",
                options: [
                    "(ln2)/k",
                    "k/(ln2)",
                    "2k",
                    "1/k²"
                ],
                answer: "(ln2)/k",
                explanation: "Setting N = N₀/2 in the decay equation gives t = (ln2)/k."
            },

            {
                q: "14. Newton's Law of Cooling states that the rate of temperature change is proportional to:",
                options: [
                    "The difference between the object's temperature and the surrounding temperature",
                    "The object's temperature only",
                    "The surrounding temperature only",
                    "Time squared"
                ],
                answer: "The difference between the object's temperature and the surrounding temperature",
                explanation: "Cooling depends on the temperature difference between the object and its surroundings."
            },

            {
                q: "15. In a mixing problem, the amount of dissolved substance changes according to:",
                options: [
                    "Rate In − Rate Out",
                    "Rate In + Rate Out",
                    "Rate Out − Rate In",
                    "Rate In × Rate Out"
                ],
                answer: "Rate In − Rate Out",
                explanation: "The amount in the tank changes by what enters minus what leaves."
            },

            {
                q: "16. Which equation models logistic population growth?",
                options: [
                    "dP/dt = kP(1 − P/K)",
                    "dP/dt = kP",
                    "dP/dt = -kP",
                    "dP/dt = P²"
                ],
                answer: "dP/dt = kP(1 − P/K)",
                explanation: "The logistic equation includes a carrying capacity K that limits growth."
            },

            {
                q: "17. In the logistic equation, K represents:",
                options: [
                    "The carrying capacity",
                    "The decay constant",
                    "The initial population",
                    "The integrating factor"
                ],
                answer: "The carrying capacity",
                explanation: "The carrying capacity is the maximum sustainable population."
            },

            {
                q: "18. Which solution method should be used for dy/dx + P(x)y = Q(x)?",
                options: [
                    "Integrating factor",
                    "Separation of variables",
                    "Exact equations",
                    "Slope fields only"
                ],
                answer: "Integrating factor",
                explanation: "Linear first-order equations are solved using an integrating factor."
            },

            {
                q: "19. Before solving an exact equation, you should first:",
                options: [
                    "Verify that ∂M/∂y = ∂N/∂x",
                    "Separate variables",
                    "Find an integrating factor",
                    "Differentiate both sides"
                ],
                answer: "Verify that ∂M/∂y = ∂N/∂x",
                explanation: "You must confirm the equation is exact before applying the exact equation method."
            },

            {
                q: "20. A common mistake when solving separable differential equations is:",
                options: [
                    "Forgetting the constant of integration",
                    "Differentiating both sides",
                    "Finding the derivative",
                    "Checking the initial condition"
                ],
                answer: "Forgetting the constant of integration",
                explanation: "After integrating, always include the constant of integration before applying any initial conditions."
            },
            {
                q: "21. In a slope field, a positive slope indicates that the solution is:",
                options: [
                    "Increasing",
                    "Decreasing",
                    "Constant",
                    "Undefined"
                ],
                answer: "Increasing",
                explanation: "A positive derivative means the solution curve is increasing at that point."
            },

            {
                q: "22. Which of the following differential equations is separable?",
                options: [
                    "dy/dx = x²y",
                    "dy/dx + y = x",
                    "y'' + y = 0",
                    "dy/dx = x + y"
                ],
                answer: "dy/dx = x²y",
                explanation: "The equation can be rewritten as dy/y = x² dx, allowing the variables to be separated."
            },

            {
                q: "23. Which quantity determines the amount of salt leaving a tank in a mixing problem?",
                options: [
                    "The current concentration inside the tank",
                    "The initial concentration only",
                    "The incoming concentration only",
                    "The temperature of the solution"
                ],
                answer: "The current concentration inside the tank",
                explanation: "The outgoing solution has the same concentration as the well-mixed solution inside the tank."
            },

            {
                q: "24. What happens to the solution of the logistic equation as the population approaches the carrying capacity?",
                options: [
                    "The growth rate approaches zero",
                    "The population grows exponentially forever",
                    "The population immediately becomes zero",
                    "The growth rate becomes infinite"
                ],
                answer: "The growth rate approaches zero",
                explanation: "As P approaches K, the factor (1 − P/K) approaches zero, causing the growth rate to slow."
            },

            {
                q: "25. Which statement best summarizes Unit 1?",
                options: [
                    "Different first-order differential equations require different solution methods depending on their form.",
                    "Every differential equation can be solved using separation of variables.",
                    "All first-order differential equations are exact.",
                    "Slope fields always provide exact algebraic solutions."
                ],
                answer: "Different first-order differential equations require different solution methods depending on their form.",
                explanation: "Recognizing the type of differential equation is the first step toward selecting the correct solution method."
            }

        ]
    }
    ,

    "calculus4-unit2-lesson1": {
        title: "Introduction to Second-Order Differential Equations",
        subtitle: "Learn what second-order differential equations are, where they arise, and how they differ from first-order equations.",

        body: `

<h2>Introduction</h2>

<p>In Unit 1, we studied first-order differential equations, which involve only the first derivative of an unknown function.</p>

<p>In this unit, we move to <strong>second-order differential equations</strong>, which involve the second derivative. These equations model many important physical systems, including springs, pendulums, vibrating strings, electrical circuits, and planetary motion.</p>

<p>Many engineering and physics problems naturally produce second-order differential equations because acceleration is the second derivative of position.</p>

<hr>

<h2>What is a Second-Order Differential Equation?</h2>

<p>A second-order differential equation contains the second derivative of an unknown function.</p>

<p>General form:</p>

<p><strong>F(x, y, y', y'') = 0</strong></p>

<p>The highest derivative appearing is the second derivative, so the equation is said to be second order.</p>

<hr>

<h2>Examples</h2>

<p><strong>Example 1</strong></p>

<p>y'' + 4y = 0</p>

<p>This is a second-order differential equation because the highest derivative is y''.</p>

<br>

<p><strong>Example 2</strong></p>

<p>y'' − 5y' + 6y = 0</p>

<p>This equation contains the function, its first derivative, and its second derivative.</p>

<br>

<p><strong>Example 3</strong></p>

<p>x²y'' + xy' − y = x</p>

<p>This is also second order because the highest derivative is still y''.</p>

<hr>

<h2>Order of a Differential Equation</h2>

<p>The order of a differential equation is determined by the highest derivative that appears.</p>

<table>

<tr>
<th>Equation</th>
<th>Order</th>
</tr>

<tr>
<td>dy/dx = x²</td>
<td>First</td>
</tr>

<tr>
<td>y'' + y = 0</td>
<td>Second</td>
</tr>

<tr>
<td>y''' + y = 0</td>
<td>Third</td>
</tr>

<tr>
<td>y⁽⁴⁾ − y = 0</td>
<td>Fourth</td>
</tr>

</table>

<hr>

<h2>Linear vs. Nonlinear Second-Order Equations</h2>

<p>A second-order differential equation is <strong>linear</strong> if the unknown function and its derivatives appear only to the first power and are not multiplied together.</p>

<p>Example:</p>

<p><strong>y'' + 3y' + 2y = 0</strong></p>

<p>This equation is linear.</p>

<br>

<p>Example:</p>

<p><strong>y'' + y² = 0</strong></p>

<p>This equation is nonlinear because y is squared.</p>

<br>

<p>Example:</p>

<p><strong>yy'' + y = 0</strong></p>

<p>This equation is nonlinear because y multiplies y''.</p>

<hr>

<h2>Homogeneous and Nonhomogeneous Equations</h2>

<p>A linear second-order differential equation is called <strong>homogeneous</strong> if the right side equals zero.</p>

<p><strong>y'' + 5y' + 6y = 0</strong></p>

<p>If the right side is not zero, the equation is <strong>nonhomogeneous</strong>.</p>

<p><strong>y'' + 5y' + 6y = x²</strong></p>

<p>Homogeneous equations are studied first because they provide the foundation for solving more complicated equations.</p>

<hr>

<h2>Standard Form</h2>

<p>The standard form of a linear second-order differential equation is:</p>

<p><strong>a(x)y'' + b(x)y' + c(x)y = g(x)</strong></p>

<p>where:</p>

<ul>

<li>a(x), b(x), and c(x) are known functions.</li>

<li>g(x) is the forcing function.</li>

</ul>

<p>If g(x)=0, the equation is homogeneous.</p>

<hr>

<h2>Constant-Coefficient Equations</h2>

<p>One of the most important classes of second-order equations has constant coefficients.</p>

<p>The general form is:</p>

<p><strong>ay'' + by' + cy = 0</strong></p>

<p>where a, b, and c are constants.</p>

<p>These equations can often be solved using the characteristic equation, which will be introduced in the next lessons.</p>

<hr>
<h2>Initial Conditions</h2>

<p>A differential equation usually has infinitely many solutions.</p>

<p>To determine one unique solution, additional information is required.</p>

<p>For second-order differential equations, two initial conditions are typically needed.</p>

<p>These conditions usually specify:</p>

<ul>

<li>The initial position (or function value)</li>

<li>The initial velocity (or first derivative)</li>

</ul>

<p>Example:</p>

<p><strong>y(0)=2</strong></p>

<p><strong>y'(0)=−3</strong></p>

<p>These conditions allow us to determine the unknown constants that appear in the general solution.</p>

<hr>

<h2>Why Two Initial Conditions?</h2>

<p>When solving second-order differential equations, the general solution normally contains two arbitrary constants.</p>

<p>For example:</p>

<p><strong>y=C₁e<sup>x</sup>+C₂e<sup>-x</sup></strong></p>

<p>Since there are two unknown constants, two independent conditions are needed to determine them.</p>

<hr>

<h2>Physical Interpretation</h2>

<p>Many second-order differential equations describe motion.</p>

<p>Recall from calculus:</p>

<ul>

<li>Position: <strong>y</strong></li>

<li>Velocity: <strong>y'</strong></li>

<li>Acceleration: <strong>y''</strong></li>

</ul>

<p>Because Newton's Second Law relates force to acceleration, many mechanics problems naturally involve second-order differential equations.</p>

<hr>

<h2>Applications</h2>

<p>Second-order differential equations appear in numerous scientific and engineering fields.</p>

<ul>

<li>Spring-mass systems</li>

<li>Pendulum motion</li>

<li>Mechanical vibrations</li>

<li>Electrical RLC circuits</li>

<li>Structural engineering</li>

<li>Earthquake modeling</li>

<li>Control systems</li>

<li>Robotics</li>

<li>Aerospace engineering</li>

<li>Wave motion</li>

</ul>

<hr>

<h2>Worked Example 1</h2>

<p>Determine whether the following equation is first-order or second-order.</p>

<p><strong>y'' + 5y = 0</strong></p>

<p><strong>Solution</strong></p>

<p>The highest derivative present is <strong>y''</strong>.</p>

<p>Therefore, the equation is a <strong>second-order differential equation</strong>.</p>

<hr>

<h2>Worked Example 2</h2>

<p>Determine whether the following equation is linear.</p>

<p><strong>y'' + 4y' − 7y = x</strong></p>

<p><strong>Solution</strong></p>

<p>The function y, its first derivative, and its second derivative all appear only to the first power.</p>

<p>None of the terms are multiplied together.</p>

<p>Therefore, the equation is <strong>linear</strong>.</p>

<hr>

<h2>Worked Example 3</h2>

<p>Determine whether the following equation is homogeneous.</p>

<p><strong>y'' + 2y' + y = 0</strong></p>

<p><strong>Solution</strong></p>

<p>The right-hand side equals zero.</p>

<p>Therefore, the equation is <strong>homogeneous</strong>.</p>

<hr>

<h2>Worked Example 4</h2>

<p>Determine whether the following equation is homogeneous.</p>

<p><strong>y'' + 2y' + y = sin(x)</strong></p>

<p><strong>Solution</strong></p>

<p>The right-hand side is not zero.</p>

<p>Therefore, the equation is <strong>nonhomogeneous</strong>.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Confusing the order of an equation with the highest exponent instead of the highest derivative.</li>

<li>Assuming every second-order equation is linear.</li>

<li>Forgetting that nonlinear terms include products such as yy'' or powers such as y².</li>

<li>Confusing homogeneous differential equations with homogeneous linear algebra systems.</li>

<li>Using only one initial condition when two are required.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>A second-order differential equation contains the second derivative.</li>

<li>The order is determined by the highest derivative.</li>

<li>Linear equations contain only first powers of the function and its derivatives.</li>

<li>Homogeneous equations have a zero right-hand side.</li>

<li>Constant-coefficient equations are among the most important second-order equations.</li>

<li>Two initial conditions determine the constants in the general solution.</li>

<li>Second-order differential equations model many physical systems involving acceleration.</li>

</ul>

`,
        questions: [

            {
                q: "Which derivative makes a differential equation second-order?",
                options: [
                    "The second derivative",
                    "The first derivative",
                    "The third derivative",
                    "The fourth derivative"
                ],
                answer: "The second derivative",
                explanation: "A differential equation is second-order if its highest derivative is the second derivative."
            },

            {
                q: "Which of the following is a second-order differential equation?",
                options: [
                    "y'' + 4y = 0",
                    "dy/dx = x²",
                    "y = x²",
                    "x + y = 5"
                ],
                answer: "y'' + 4y = 0",
                explanation: "The equation contains the second derivative y'', making it second-order."
            },

            {
                q: "Which equation is linear?",
                options: [
                    "y'' + 3y' + 2y = x",
                    "y'' + y² = 0",
                    "yy'' + y = 0",
                    "(y')² + y = 0"
                ],
                answer: "y'' + 3y' + 2y = x",
                explanation: "The function and its derivatives appear only to the first power and are not multiplied together."
            },

            {
                q: "A homogeneous second-order differential equation has:",
                options: [
                    "A right-hand side equal to zero",
                    "No derivatives",
                    "Only first derivatives",
                    "Constant solutions only"
                ],
                answer: "A right-hand side equal to zero",
                explanation: "Homogeneous linear differential equations have zero on the right-hand side."
            },

            {
                q: "The standard form of a linear second-order differential equation is:",
                options: [
                    "a(x)y'' + b(x)y' + c(x)y = g(x)",
                    "dy/dx = g(x)h(y)",
                    "Mdx + Ndy = 0",
                    "y'' = y²"
                ],
                answer: "a(x)y'' + b(x)y' + c(x)y = g(x)",
                explanation: "This is the general standard form for linear second-order differential equations."
            },

            {
                q: "Why are two initial conditions usually required for a second-order differential equation?",
                options: [
                    "Because the general solution contains two arbitrary constants",
                    "Because every equation has two variables",
                    "Because there are always two derivatives",
                    "Because every solution is quadratic"
                ],
                answer: "Because the general solution contains two arbitrary constants",
                explanation: "Two independent initial conditions determine the two arbitrary constants in the general solution."
            },

            {
                q: "Which physical quantity is represented by the second derivative of position?",
                options: [
                    "Acceleration",
                    "Velocity",
                    "Distance",
                    "Force"
                ],
                answer: "Acceleration",
                explanation: "The second derivative of position with respect to time is acceleration."
            },

            {
                q: "Which of the following is NOT typically modeled using second-order differential equations?",
                options: [
                    "Mechanical vibrations",
                    "Spring-mass systems",
                    "Pendulum motion",
                    "Simple arithmetic"
                ],
                answer: "Simple arithmetic",
                explanation: "Second-order differential equations model changing physical systems, not basic arithmetic."
            },

            {
                q: "Which equation is nonlinear?",
                options: [
                    "y'' + y² = 0",
                    "y'' + 2y' + y = 0",
                    "y'' - 5y' + 6y = 0",
                    "2y'' + y = x"
                ],
                answer: "y'' + y² = 0",
                explanation: "The y² term makes the equation nonlinear."
            },

            {
                q: "What is the highest derivative in the equation y''' + 2y'' - y = 0?",
                options: [
                    "Third derivative",
                    "Second derivative",
                    "First derivative",
                    "Zeroth derivative"
                ],
                answer: "Third derivative",
                explanation: "The highest derivative present is y''', so the equation is third-order."
            }

        ]
    }

    ,

    "calculus4-unit2-lesson2": {
        title: "Homogeneous Linear Second-Order Differential Equations",
        subtitle: "Learn how to recognize and solve homogeneous linear second-order differential equations with constant coefficients.",

        body: `

<h2>Introduction</h2>

<p>In the previous lesson, we introduced second-order differential equations and learned how to classify them.</p>

<p>In this lesson, we begin solving one of the most important classes of second-order equations:</p>

<p><strong>Homogeneous linear differential equations with constant coefficients.</strong></p>

<p>These equations appear throughout engineering, physics, economics, electrical circuits, vibration analysis, and many other scientific fields.</p>

<hr>

<h2>General Form</h2>

<p>A homogeneous linear second-order differential equation with constant coefficients has the form:</p>

<p><strong>ay'' + by' + cy = 0</strong></p>

<p>where:</p>

<ul>

<li>a ≠ 0</li>

<li>a, b, and c are constants.</li>

<li>The right-hand side equals zero.</li>

</ul>

<p>Because the right side is zero, the equation is called <strong>homogeneous</strong>.</p>

<hr>

<h2>Examples</h2>

<p><strong>Example 1</strong></p>

<p>y'' + 5y' + 6y = 0</p>

<p>This is homogeneous, linear, second-order, and has constant coefficients.</p>

<br>

<p><strong>Example 2</strong></p>

<p>3y'' − 7y' + 2y = 0</p>

<p>This is also homogeneous with constant coefficients.</p>

<br>

<p><strong>Example 3</strong></p>

<p>y'' + xy' + y = 0</p>

<p>This equation is <strong>not</strong> a constant-coefficient equation because the coefficient of y' depends on x.</p>

<hr>

<h2>The Solution Strategy</h2>

<p>Instead of solving these equations by separation of variables or integrating factors, we use a new technique based on exponential functions.</p>

<p>We begin by assuming the solution has the form:</p>

<p><strong>y = e<sup>rx</sup></strong></p>

<p>where r is an unknown constant.</p>

<p>This assumption works because exponential functions have derivatives that are proportional to themselves.</p>

<hr>

<h2>Finding the Derivatives</h2>

<p>If</p>

<p><strong>y = e<sup>rx</sup></strong></p>

<p>then</p>

<p><strong>y' = re<sup>rx</sup></strong></p>

<p>and</p>

<p><strong>y'' = r²e<sup>rx</sup></strong></p>

<p>Notice that every derivative still contains the same exponential function.</p>

<hr>

<h2>Substituting into the Differential Equation</h2>

<p>Substitute the assumed solution into:</p>

<p><strong>ay'' + by' + cy = 0</strong></p>

<p>This gives:</p>

<p><strong>a(r²e<sup>rx</sup>) + b(re<sup>rx</sup>) + ce<sup>rx</sup> = 0</strong></p>

<p>Factor out the common exponential term:</p>

<p><strong>e<sup>rx</sup>(ar² + br + c)=0</strong></p>

<p>Since the exponential function is never zero, the remaining factor must equal zero.</p>

<hr>

<h2>The Characteristic Equation</h2>

<p>The equation</p>

<p><strong>ar² + br + c = 0</strong></p>

<p>is called the <strong>characteristic equation</strong>.</p>

<p>Instead of solving the differential equation directly, we solve this quadratic equation for r.</p>

<p>The nature of the roots determines the form of the solution.</p>

<hr>
<h2>Solving the Characteristic Equation</h2>

<p>Once the characteristic equation has been formed, solve it just as you would any quadratic equation.</p>

<p>The roots of the characteristic equation determine the form of the solution.</p>

<p>There are three possible cases:</p>

<ol>

<li>Two distinct real roots</li>

<li>One repeated real root</li>

<li>Two complex conjugate roots</li>

</ol>

<p>This lesson focuses on the first case: <strong>distinct real roots</strong>.</p>

<hr>

<h2>Distinct Real Roots</h2>

<p>Suppose the characteristic equation has two different real solutions:</p>

<p><strong>r₁ ≠ r₂</strong></p>

<p>Then the general solution of the differential equation is:</p>

<p><strong>y = C₁e<sup>r₁x</sup> + C₂e<sup>r₂x</sup></strong></p>

<p>where C₁ and C₂ are arbitrary constants determined by the initial conditions.</p>

<hr>

<h2>Worked Example 1</h2>

<p>Solve:</p>

<p><strong>y'' − 5y' + 6y = 0</strong></p>

<p><strong>Step 1:</strong> Form the characteristic equation.</p>

<p><strong>r² − 5r + 6 = 0</strong></p>

<p><strong>Step 2:</strong> Factor.</p>

<p><strong>(r − 2)(r − 3) = 0</strong></p>

<p>Therefore:</p>

<p><strong>r₁ = 2</strong></p>

<p><strong>r₂ = 3</strong></p>

<p><strong>Step 3:</strong> Write the general solution.</p>

<p><strong>y = C₁e<sup>2x</sup> + C₂e<sup>3x</sup></strong></p>

<hr>

<h2>Worked Example 2</h2>

<p>Solve:</p>

<p><strong>2y'' − 7y' + 3y = 0</strong></p>

<p><strong>Characteristic equation:</strong></p>

<p><strong>2r² − 7r + 3 = 0</strong></p>

<p>Factor:</p>

<p><strong>(2r − 1)(r − 3)=0</strong></p>

<p>The roots are:</p>

<p><strong>r₁ = 1/2</strong></p>

<p><strong>r₂ = 3</strong></p>

<p>The general solution is:</p>

<p><strong>y = C₁e<sup>x/2</sup> + C₂e<sup>3x</sup></strong></p>

<hr>

<h2>Using Initial Conditions</h2>

<p>After finding the general solution, use the initial conditions to determine the constants.</p>

<p>Example:</p>

<p><strong>y(0)=4</strong></p>

<p><strong>y'(0)=1</strong></p>

<p>Substitute x = 0 into both the solution and its derivative.</p>

<p>This produces two equations with two unknown constants, C₁ and C₂.</p>

<p>Solving that system gives the particular solution.</p>

<hr>

<h2>Why the Exponential Method Works</h2>

<p>Exponential functions are ideal because every derivative of an exponential function is another exponential function.</p>

<p>For example:</p>

<p><strong>d/dx(e<sup>rx</sup>) = re<sup>rx</sup></strong></p>

<p><strong>d²/dx²(e<sup>rx</sup>) = r²e<sup>rx</sup></strong></p>

<p>This allows the differential equation to be converted into an algebraic equation involving only the constant r.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the wrong signs when forming the characteristic equation.</li>

<li>Making algebra errors while factoring the quadratic.</li>

<li>Using the repeated-root solution when the roots are actually distinct.</li>

<li>Forgetting to include both arbitrary constants.</li>

<li>Not applying the initial conditions after finding the general solution.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>Homogeneous linear equations with constant coefficients are solved using exponential trial solutions.</li>

<li>The assumed solution is y = e<sup>rx</sup>.</li>

<li>Substituting into the differential equation produces the characteristic equation.</li>

<li>Distinct real roots produce two independent exponential solutions.</li>

<li>The general solution is y = C₁e<sup>r₁x</sup> + C₂e<sup>r₂x</sup>.</li>

<li>Initial conditions determine the constants C₁ and C₂.</li>

</ul>

`,
        questions: [

            {
                q: "Which differential equation is a homogeneous linear second-order equation with constant coefficients?",
                options: [
                    "y'' + 5y' + 6y = 0",
                    "y'' + xy' + y = 0",
                    "y'' + y² = 0",
                    "yy'' + y = 0"
                ],
                answer: "y'' + 5y' + 6y = 0",
                explanation: "Its coefficients are constants, it is linear, and the right-hand side equals zero."
            },

            {
                q: "What trial solution is assumed when solving homogeneous linear second-order equations with constant coefficients?",
                options: [
                    "y = e^(rx)",
                    "y = x²",
                    "y = ln(x)",
                    "y = sin(x)"
                ],
                answer: "y = e^(rx)",
                explanation: "The exponential trial solution converts the differential equation into an algebraic equation."
            },

            {
                q: "Substituting y = e^(rx) into a homogeneous linear differential equation produces the:",
                options: [
                    "Characteristic equation",
                    "Slope field",
                    "Taylor series",
                    "Integrating factor"
                ],
                answer: "Characteristic equation",
                explanation: "Substituting the exponential trial solution results in the characteristic equation ar² + br + c = 0."
            },

            {
                q: "What is the characteristic equation for y'' − 5y' + 6y = 0?",
                options: [
                    "r² − 5r + 6 = 0",
                    "r² + 5r + 6 = 0",
                    "r² − 6r + 5 = 0",
                    "r² + 6 = 0"
                ],
                answer: "r² − 5r + 6 = 0",
                explanation: "Replace y'' with r², y' with r, and y with 1."
            },

            {
                q: "If the characteristic equation has two distinct real roots r₁ and r₂, the general solution is:",
                options: [
                    "y = C₁e^(r₁x) + C₂e^(r₂x)",
                    "y = C₁e^(rx)",
                    "y = C₁cos(x) + C₂sin(x)",
                    "y = C₁xe^(rx) + C₂"
                ],
                answer: "y = C₁e^(r₁x) + C₂e^(r₂x)",
                explanation: "Distinct real roots produce two independent exponential solutions."
            },

            {
                q: "The characteristic equation for 2y'' − 7y' + 3y = 0 is:",
                options: [
                    "2r² − 7r + 3 = 0",
                    "2r² + 7r + 3 = 0",
                    "r² − 7r + 6 = 0",
                    "2r² − 3r + 7 = 0"
                ],
                answer: "2r² − 7r + 3 = 0",
                explanation: "Replace y'' with r², y' with r, and y with 1."
            },

            {
                q: "After finding the general solution, what is the next step if initial conditions are provided?",
                options: [
                    "Solve for the constants",
                    "Differentiate again",
                    "Separate variables",
                    "Find an integrating factor"
                ],
                answer: "Solve for the constants",
                explanation: "The initial conditions determine the values of the arbitrary constants."
            },

            {
                q: "Why is the exponential function used as the trial solution?",
                options: [
                    "Its derivatives remain proportional to itself",
                    "It is always positive",
                    "It has no derivative",
                    "It is periodic"
                ],
                answer: "Its derivatives remain proportional to itself",
                explanation: "Each derivative of e^(rx) is simply multiplied by a constant, making substitution straightforward."
            },

            {
                q: "How many arbitrary constants appear in the general solution of a second-order homogeneous differential equation with distinct real roots?",
                options: [
                    "Two",
                    "One",
                    "Three",
                    "Four"
                ],
                answer: "Two",
                explanation: "A second-order differential equation requires two arbitrary constants in its general solution."
            },

            {
                q: "Which of the following is a common mistake when solving homogeneous linear equations?",
                options: [
                    "Making algebra errors while solving the characteristic equation",
                    "Finding the second derivative",
                    "Writing the differential equation in standard form",
                    "Checking the roots"
                ],
                answer: "Making algebra errors while solving the characteristic equation",
                explanation: "Factoring or solving the characteristic equation incorrectly leads to an incorrect general solution."
            }

        ]
    },

    "calculus4-unit2-lesson3": {
        title: "Characteristic Equations",
        subtitle: "Learn how to solve characteristic equations and determine the appropriate form of the solution for homogeneous second-order differential equations.",

        body: `

<h2>Introduction</h2>

<p>In the previous lesson, we learned that homogeneous linear second-order differential equations with constant coefficients can be solved by assuming a solution of the form <strong>y = e<sup>rx</sup></strong>.</p>

<p>Substituting this trial solution into the differential equation produces the <strong>characteristic equation</strong>.</p>

<p>In this lesson, we will learn how to solve characteristic equations and understand how the roots determine the form of the solution.</p>

<hr>

<h2>The Characteristic Equation</h2>

<p>For the differential equation</p>

<p><strong>ay'' + by' + cy = 0</strong></p>

<p>the characteristic equation is</p>

<p><strong>ar² + br + c = 0</strong></p>

<p>This quadratic equation is solved using the same algebraic techniques used for any quadratic equation.</p>

<hr>

<h2>Methods for Solving</h2>

<p>The characteristic equation can be solved by:</p>

<ul>

<li>Factoring</li>

<li>The quadratic formula</li>

<li>Completing the square (less common)</li>

</ul>

<p>The method depends on whether the quadratic factors easily.</p>

<hr>

<h2>Factoring Example</h2>

<p>Solve the differential equation</p>

<p><strong>y'' − 7y' + 12y = 0</strong></p>

<p>The characteristic equation is</p>

<p><strong>r² − 7r + 12 = 0</strong></p>

<p>Factor:</p>

<p><strong>(r − 3)(r − 4)=0</strong></p>

<p>The roots are</p>

<p><strong>r₁ = 3</strong></p>

<p><strong>r₂ = 4</strong></p>

<p>The general solution is</p>

<p><strong>y = C₁e<sup>3x</sup> + C₂e<sup>4x</sup></strong></p>

<hr>

<h2>Using the Quadratic Formula</h2>

<p>If the quadratic does not factor easily, use</p>

<p><strong>r = (-b ± √(b² − 4ac))/(2a)</strong></p>

<p>This formula works for every quadratic equation.</p>

<hr>

<h2>Worked Example</h2>

<p>Solve</p>

<p><strong>2y'' + y' − 6y = 0</strong></p>

<p>The characteristic equation is</p>

<p><strong>2r² + r − 6 = 0</strong></p>

<p>Apply the quadratic formula:</p>

<p><strong>r = (-1 ± √(1 + 48))/4</strong></p>

<p><strong>r = (-1 ± 7)/4</strong></p>

<p>The roots are</p>

<p><strong>r₁ = 3/2</strong></p>

<p><strong>r₂ = -2</strong></p>

<p>The solution becomes</p>

<p><strong>y = C₁e<sup>(3/2)x</sup> + C₂e<sup>-2x</sup></strong></p>

<hr>

<h2>The Discriminant</h2>

<p>The expression</p>

<p><strong>b² − 4ac</strong></p>

<p>is called the <strong>discriminant</strong>.</p>

<p>The discriminant tells us what type of roots the characteristic equation has.</p>

<table>

<tr>
<th>Discriminant</th>
<th>Root Type</th>
</tr>

<tr>
<td>b² − 4ac > 0</td>
<td>Two distinct real roots</td>
</tr>

<tr>
<td>b² − 4ac = 0</td>
<td>One repeated real root</td>
</tr>

<tr>
<td>b² − 4ac < 0</td>
<td>Two complex conjugate roots</td>
</tr>

</table>

<p>Each type of root produces a different form of the solution.</p>

<hr>
<h2>Interpreting the Discriminant</h2>

<p>After computing the discriminant</p>

<p><strong>D = b² − 4ac</strong></p>

<p>the next step is to determine which type of roots the characteristic equation has.</p>

<p>The discriminant completely determines the form of the solution.</p>

<ul>

<li><strong>D > 0</strong> → two distinct real roots</li>

<li><strong>D = 0</strong> → one repeated real root</li>

<li><strong>D < 0</strong> → two complex conjugate roots</li>

</ul>

<p>In future lessons we will study repeated roots and complex roots in detail.</p>

<hr>

<h2>Worked Example 1</h2>

<p>Determine the type of roots for:</p>

<p><strong>r² − 8r + 12 = 0</strong></p>

<p><strong>Solution</strong></p>

<p>Here:</p>

<p>a = 1</p>

<p>b = -8</p>

<p>c = 12</p>

<p>The discriminant is</p>

<p><strong>D = (-8)² − 4(1)(12)</strong></p>

<p><strong>D = 64 − 48 = 16</strong></p>

<p>Since D > 0, the equation has <strong>two distinct real roots</strong>.</p>

<hr>

<h2>Worked Example 2</h2>

<p>Determine the type of roots for:</p>

<p><strong>r² − 6r + 9 = 0</strong></p>

<p><strong>Solution</strong></p>

<p>D = (-6)² − 4(1)(9)</p>

<p>D = 36 − 36</p>

<p>D = 0</p>

<p>The characteristic equation has one <strong>repeated real root</strong>.</p>

<hr>

<h2>Worked Example 3</h2>

<p>Determine the type of roots for:</p>

<p><strong>r² + 4r + 13 = 0</strong></p>

<p><strong>Solution</strong></p>

<p>D = 4² − 4(1)(13)</p>

<p>D = 16 − 52</p>

<p>D = -36</p>

<p>Since D is negative, the equation has <strong>two complex conjugate roots</strong>.</p>

<hr>

<h2>Choosing the Correct Solution Form</h2>

<table>

<tr>
<th>Root Type</th>
<th>General Solution</th>
</tr>

<tr>
<td>Two distinct real roots</td>
<td>y = C₁e<sup>r₁x</sup> + C₂e<sup>r₂x</sup></td>
</tr>

<tr>
<td>Repeated real root</td>
<td>y = (C₁ + C₂x)e<sup>rx</sup></td>
</tr>

<tr>
<td>Complex roots α ± βi</td>
<td>y = e<sup>αx</sup>(C₁cos βx + C₂sin βx)</td>
</tr>

</table>

<p>Memorizing these three solution forms will make solving second-order differential equations much easier.</p>

<hr>

<h2>Strategy for Solving Constant-Coefficient Equations</h2>

<ol>

<li>Write the characteristic equation.</li>

<li>Solve the quadratic equation.</li>

<li>Compute the discriminant if necessary.</li>

<li>Identify the type of roots.</li>

<li>Write the correct general solution.</li>

<li>Apply any initial conditions to determine the constants.</li>

</ol>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the wrong signs when writing the characteristic equation.</li>

<li>Making arithmetic errors when calculating the discriminant.</li>

<li>Applying the wrong solution formula for the type of roots.</li>

<li>Forgetting that repeated roots require the additional factor x.</li>

<li>Ignoring the exponential factor when the roots are complex.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>The characteristic equation is a quadratic equation in r.</li>

<li>It can be solved by factoring or by using the quadratic formula.</li>

<li>The discriminant determines the type of roots.</li>

<li>Different types of roots produce different forms of the general solution.</li>

<li>The solution form should always match the type of roots found from the characteristic equation.</li>

</ul>

`,
        questions: [

            {
                q: "Which equation is called the characteristic equation for ay'' + by' + cy = 0?",
                options: [
                    "ar² + br + c = 0",
                    "ay² + by + c = 0",
                    "ax² + bx + c = 0",
                    "a + b + c = 0"
                ],
                answer: "ar² + br + c = 0",
                explanation: "Replacing y'' with r², y' with r, and y with 1 produces the characteristic equation."
            },

            {
                q: "Which method can always be used to solve a characteristic equation?",
                options: [
                    "The quadratic formula",
                    "Separation of variables",
                    "Integration by parts",
                    "Slope fields"
                ],
                answer: "The quadratic formula",
                explanation: "Although factoring is sometimes easier, the quadratic formula always works for quadratic equations."
            },

            {
                q: "What is the discriminant of the quadratic equation ar² + br + c = 0?",
                options: [
                    "b² − 4ac",
                    "a² − 4bc",
                    "b² + 4ac",
                    "2a + b"
                ],
                answer: "b² − 4ac",
                explanation: "The discriminant determines the type of roots of the characteristic equation."
            },

            {
                q: "If the discriminant is positive, the characteristic equation has:",
                options: [
                    "Two distinct real roots",
                    "One repeated root",
                    "Two complex roots only",
                    "No real or complex roots"
                ],
                answer: "Two distinct real roots",
                explanation: "A positive discriminant indicates two different real solutions."
            },

            {
                q: "If the discriminant equals zero, the characteristic equation has:",
                options: [
                    "One repeated real root",
                    "Two distinct real roots",
                    "Two complex roots",
                    "No roots"
                ],
                answer: "One repeated real root",
                explanation: "A discriminant of zero means both roots are equal."
            },

            {
                q: "If the discriminant is negative, the characteristic equation has:",
                options: [
                    "Two complex conjugate roots",
                    "Two repeated roots",
                    "One real root",
                    "No solutions"
                ],
                answer: "Two complex conjugate roots",
                explanation: "A negative discriminant produces a pair of complex conjugate roots."
            },

            {
                q: "The characteristic equation for y'' + 6y' + 9y = 0 is:",
                options: [
                    "r² + 6r + 9 = 0",
                    "r² − 6r + 9 = 0",
                    "r² + 9 = 0",
                    "r² + 6 = 0"
                ],
                answer: "r² + 6r + 9 = 0",
                explanation: "Replace y'' with r², y' with r, and y with 1."
            },

            {
                q: "What is the discriminant of r² − 6r + 9 = 0?",
                options: [
                    "0",
                    "36",
                    "-36",
                    "9"
                ],
                answer: "0",
                explanation: "The discriminant is (-6)² − 4(1)(9) = 36 − 36 = 0."
            },

            {
                q: "Before writing the general solution, you should first:",
                options: [
                    "Determine the type of roots",
                    "Differentiate the equation",
                    "Separate the variables",
                    "Find an integrating factor"
                ],
                answer: "Determine the type of roots",
                explanation: "The form of the general solution depends entirely on the type of roots."
            },

            {
                q: "Which is a common mistake when solving characteristic equations?",
                options: [
                    "Using the wrong solution formula for the type of roots",
                    "Replacing y'' with r²",
                    "Using the quadratic formula",
                    "Checking the discriminant"
                ],
                answer: "Using the wrong solution formula for the type of roots",
                explanation: "Always match the solution formula to the type of roots found from the characteristic equation."
            }

        ]
    }

    ,

    "calculus4-unit2-lesson4": {
        title: "Repeated Roots",
        subtitle: "Learn how to solve homogeneous second-order differential equations when the characteristic equation has a repeated real root.",

        body: `

<h2>Introduction</h2>

<p>In the previous lesson, we learned that the roots of the characteristic equation determine the form of the solution to a homogeneous linear differential equation.</p>

<p>One possible situation occurs when the characteristic equation has a <strong>repeated real root</strong>.</p>

<p>In this lesson, we will learn how to recognize repeated roots, why the usual solution no longer works, and how to construct the correct general solution.</p>

<hr>

<h2>Review of the Characteristic Equation</h2>

<p>Consider the differential equation</p>

<p><strong>ay'' + by' + cy = 0</strong></p>

<p>Its characteristic equation is</p>

<p><strong>ar² + br + c = 0</strong></p>

<p>If the discriminant satisfies</p>

<p><strong>b² − 4ac = 0</strong></p>

<p>then the quadratic has one repeated real root.</p>

<hr>

<h2>Example of a Repeated Root</h2>

<p>Solve the characteristic equation</p>

<p><strong>r² − 6r + 9 = 0</strong></p>

<p>Factor:</p>

<p><strong>(r − 3)² = 0</strong></p>

<p>Therefore</p>

<p><strong>r = 3</strong></p>

<p>Since both roots are identical, we say the equation has a <strong>repeated root</strong>.</p>

<hr>

<h2>Why the Usual Solution Does Not Work</h2>

<p>When there are two distinct roots, the general solution is</p>

<p><strong>y = C₁e<sup>r₁x</sup> + C₂e<sup>r₂x</sup></strong></p>

<p>If the roots are equal, this becomes</p>

<p><strong>y = C₁e<sup>rx</sup> + C₂e<sup>rx</sup></strong></p>

<p>Both terms are identical.</p>

<p>This simplifies to</p>

<p><strong>y = Ce<sup>rx</sup></strong></p>

<p>Only one independent solution remains, but a second-order differential equation requires two independent solutions.</p>

<p>Therefore, we must find another solution that is linearly independent.</p>

<hr>

<h2>The Correct General Solution</h2>

<p>When the characteristic equation has a repeated root <strong>r</strong>, the general solution is</p>

<p><strong>y = (C₁ + C₂x)e<sup>rx</sup></strong></p>

<p>The extra factor of <strong>x</strong> creates a second independent solution.</p>

<p>This ensures that the general solution contains two arbitrary constants, as required for every second-order differential equation.</p>

<hr>

<h2>Worked Example 1</h2>

<p>Solve</p>

<p><strong>y'' − 6y' + 9y = 0</strong></p>

<p><strong>Step 1:</strong> Form the characteristic equation.</p>

<p><strong>r² − 6r + 9 = 0</strong></p>

<p><strong>Step 2:</strong> Factor.</p>

<p><strong>(r − 3)² = 0</strong></p>

<p>The repeated root is</p>

<p><strong>r = 3</strong></p>

<p><strong>Step 3:</strong> Write the general solution.</p>

<p><strong>y = (C₁ + C₂x)e<sup>3x</sup></strong></p>

<hr>

<h2>Worked Example 2</h2>

<p>Solve</p>

<p><strong>4y'' + 4y' + y = 0</strong></p>

<p>The characteristic equation is</p>

<p><strong>4r² + 4r + 1 = 0</strong></p>

<p>Factor:</p>

<p><strong>(2r + 1)² = 0</strong></p>

<p>The repeated root is</p>

<p><strong>r = -1/2</strong></p>

<p>The general solution is</p>

<p><strong>y = (C₁ + C₂x)e<sup>-x/2</sup></strong></p>

<hr>
<h2>Applying Initial Conditions</h2>

<p>After finding the general solution, use the given initial conditions to determine the constants C₁ and C₂.</p>

<p>Suppose the solution is</p>

<p><strong>y = (C₁ + C₂x)e<sup>rx</sup></strong></p>

<p>If initial conditions such as</p>

<p><strong>y(0)=5</strong></p>

<p><strong>y'(0)=2</strong></p>

<p>are given, substitute x = 0 into both the solution and its derivative.</p>

<p>This produces two equations that can be solved for C₁ and C₂.</p>

<hr>

<h2>Finding the Derivative</h2>

<p>To apply initial conditions, differentiate the solution using the Product Rule.</p>

<p>If</p>

<p><strong>y = (C₁ + C₂x)e<sup>rx</sup></strong></p>

<p>then</p>

<p><strong>y' = C₂e<sup>rx</sup> + (C₁ + C₂x)re<sup>rx</sup></strong></p>

<p>This expression can be factored as</p>

<p><strong>y' = e<sup>rx</sup>[C₂ + r(C₁ + C₂x)]</strong></p>

<p>This form is usually the easiest to evaluate using the initial conditions.</p>

<hr>

<h2>Worked Example 3</h2>

<p>Solve</p>

<p><strong>y'' − 4y' + 4y = 0</strong></p>

<p>with</p>

<p><strong>y(0)=3</strong></p>

<p><strong>y'(0)=5</strong></p>

<p><strong>Step 1:</strong> Form the characteristic equation.</p>

<p><strong>r² − 4r + 4 = 0</strong></p>

<p><strong>(r − 2)² = 0</strong></p>

<p>The repeated root is</p>

<p><strong>r = 2</strong></p>

<p>The general solution is</p>

<p><strong>y = (C₁ + C₂x)e<sup>2x</sup></strong></p>

<p>Using y(0)=3 gives</p>

<p><strong>C₁ = 3</strong></p>

<p>Differentiate:</p>

<p><strong>y' = e<sup>2x</sup>[C₂ + 2(C₁ + C₂x)]</strong></p>

<p>Substitute x = 0:</p>

<p><strong>5 = C₂ + 2(3)</strong></p>

<p><strong>C₂ = -1</strong></p>

<p>The particular solution is</p>

<p><strong>y = (3 − x)e<sup>2x</sup></strong></p>

<hr>

<h2>Why Does the Extra x Work?</h2>

<p>The functions</p>

<p><strong>e<sup>rx</sup></strong></p>

<p>and</p>

<p><strong>xe<sup>rx</sup></strong></p>

<p>are linearly independent.</p>

<p>Because they are independent, they provide two distinct solutions that span the complete solution space of the differential equation.</p>

<p>This guarantees that every solution can be written using suitable values of C₁ and C₂.</p>

<hr>

<h2>Recognizing Repeated Roots Quickly</h2>

<p>You can often recognize repeated roots before solving completely.</p>

<p>If the characteristic equation factors into a perfect square, such as</p>

<p><strong>(r − a)² = 0</strong></p>

<p>or</p>

<p><strong>(2r + 5)² = 0</strong></p>

<p>then the solution automatically has the form</p>

<p><strong>y = (C₁ + C₂x)e<sup>rx</sup></strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the distinct-root solution instead of the repeated-root solution.</li>

<li>Forgetting the factor of <strong>x</strong> in the second solution.</li>

<li>Making errors when differentiating with the Product Rule.</li>

<li>Applying the initial conditions before finding the derivative correctly.</li>

<li>Using only one arbitrary constant instead of two.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>A repeated root occurs when the discriminant equals zero.</li>

<li>The characteristic equation has one repeated real root.</li>

<li>The correct general solution is <strong>y = (C₁ + C₂x)e<sup>rx</sup></strong>.</li>

<li>The extra factor of x provides a second linearly independent solution.</li>

<li>Two initial conditions determine the constants C₁ and C₂.</li>

<li>Repeated-root problems are solved using the same overall process as distinct-root problems, with only the solution form changing.</li>

</ul>

`,
        questions: [

            {
                q: "Which condition indicates that a characteristic equation has a repeated root?",
                options: [
                    "The discriminant equals zero",
                    "The discriminant is positive",
                    "The discriminant is negative",
                    "The coefficients are all positive"
                ],
                answer: "The discriminant equals zero",
                explanation: "A repeated real root occurs when the discriminant b² − 4ac equals zero."
            },

            {
                q: "If the characteristic equation has a repeated root r, the general solution is:",
                options: [
                    "y = (C₁ + C₂x)e^(rx)",
                    "y = C₁e^(r₁x) + C₂e^(r₂x)",
                    "y = C₁cos(rx) + C₂sin(rx)",
                    "y = C₁e^(rx)"
                ],
                answer: "y = (C₁ + C₂x)e^(rx)",
                explanation: "The extra factor of x provides the second linearly independent solution."
            },

            {
                q: "The characteristic equation for y'' − 6y' + 9y = 0 is:",
                options: [
                    "r² − 6r + 9 = 0",
                    "r² + 6r + 9 = 0",
                    "r² − 9r + 6 = 0",
                    "r² + 9 = 0"
                ],
                answer: "r² − 6r + 9 = 0",
                explanation: "Replace y'' with r², y' with r, and y with 1."
            },

            {
                q: "What is the repeated root of r² − 6r + 9 = 0?",
                options: [
                    "3",
                    "-3",
                    "6",
                    "9"
                ],
                answer: "3",
                explanation: "Factoring gives (r − 3)² = 0, so the repeated root is r = 3."
            },

            {
                q: "Why can't the distinct-root solution be used for repeated roots?",
                options: [
                    "Both exponential terms become identical",
                    "The equation is nonlinear",
                    "There are no arbitrary constants",
                    "The exponential function is undefined"
                ],
                answer: "Both exponential terms become identical",
                explanation: "When r₁ = r₂, both exponential solutions are the same, leaving only one independent solution."
            },

            {
                q: "What mathematical operation is required to differentiate (C₁ + C₂x)e^(rx)?",
                options: [
                    "The Product Rule",
                    "The Quotient Rule",
                    "Implicit Differentiation",
                    "Integration by Parts"
                ],
                answer: "The Product Rule",
                explanation: "The solution is the product of two functions, so the Product Rule must be used."
            },

            {
                q: "Which function provides the second linearly independent solution for repeated roots?",
                options: [
                    "xe^(rx)",
                    "e^(2rx)",
                    "cos(rx)",
                    "ln(x)"
                ],
                answer: "xe^(rx)",
                explanation: "Multiplying by x creates a second independent solution."
            },

            {
                q: "The characteristic equation 4r² + 4r + 1 = 0 has the repeated root:",
                options: [
                    "-1/2",
                    "1/2",
                    "-1",
                    "1"
                ],
                answer: "-1/2",
                explanation: "Factoring gives (2r + 1)² = 0, so r = -1/2."
            },

            {
                q: "How many arbitrary constants appear in the general solution for repeated roots?",
                options: [
                    "Two",
                    "One",
                    "Three",
                    "Four"
                ],
                answer: "Two",
                explanation: "Every second-order differential equation has a general solution containing two arbitrary constants."
            },

            {
                q: "Which of the following is a common mistake when solving repeated-root problems?",
                options: [
                    "Forgetting the factor of x in the second solution",
                    "Using the characteristic equation",
                    "Finding the discriminant",
                    "Applying initial conditions"
                ],
                answer: "Forgetting the factor of x in the second solution",
                explanation: "Without the factor of x, the two solutions are not linearly independent."

            }

        ]
    }

    ,

    "calculus4-unit2-lesson5": {
        title: "Complex Roots",
        subtitle: "Learn how to solve homogeneous second-order differential equations when the characteristic equation has complex roots.",

        body: `

<h2>Introduction</h2>

<p>So far, we have solved second-order differential equations whose characteristic equations produced distinct real roots or repeated real roots.</p>

<p>The final possibility occurs when the characteristic equation has <strong>complex conjugate roots</strong>.</p>

<p>Although the roots contain imaginary numbers, the solutions to most real-world problems remain entirely real by using Euler's Formula.</p>

<p>Complex roots arise naturally in vibration problems, oscillations, alternating current circuits, wave motion, and many mechanical systems.</p>

<hr>

<h2>When Do Complex Roots Occur?</h2>

<p>Consider the characteristic equation</p>

<p><strong>ar² + br + c = 0</strong></p>

<p>Compute the discriminant:</p>

<p><strong>D = b² − 4ac</strong></p>

<p>If</p>

<p><strong>D &lt; 0</strong></p>

<p>the quadratic has two complex conjugate roots.</p>

<p>The roots have the form</p>

<p><strong>r = α ± βi</strong></p>

<p>where:</p>

<ul>

<li>α is the real part.</li>

<li>β is the imaginary coefficient.</li>

<li>i = √(-1).</li>

</ul>

<hr>

<h2>Example 1</h2>

<p>Solve the characteristic equation</p>

<p><strong>r² + 4r + 13 = 0</strong></p>

<p>Using the quadratic formula:</p>

<p><strong>r = (-4 ± √(16 − 52))/2</strong></p>

<p><strong>r = (-4 ± √(-36))/2</strong></p>

<p><strong>r = (-4 ± 6i)/2</strong></p>

<p>Therefore:</p>

<p><strong>r = -2 ± 3i</strong></p>

<hr>

<h2>Euler's Formula</h2>

<p>The key to converting complex exponential solutions into real-valued functions is Euler's Formula.</p>

<p><strong>e<sup>iθ</sup> = cos(θ) + i sin(θ)</strong></p>

<p>This remarkable identity connects exponential functions with trigonometric functions.</p>

<p>Using Euler's Formula allows us to rewrite complex solutions as combinations of sine and cosine functions.</p>

<hr>

<h2>General Solution for Complex Roots</h2>

<p>If the characteristic roots are</p>

<p><strong>r = α ± βi</strong></p>

<p>then the general solution of the differential equation is</p>

<p><strong>y = e<sup>αx</sup>(C₁cos(βx) + C₂sin(βx))</strong></p>

<p>This solution is entirely real, even though the characteristic roots are complex.</p>

<hr>

<h2>Worked Example 2</h2>

<p>Solve</p>

<p><strong>y'' + 4y' + 13y = 0</strong></p>

<p><strong>Step 1:</strong> Form the characteristic equation.</p>

<p><strong>r² + 4r + 13 = 0</strong></p>

<p><strong>Step 2:</strong> Solve using the quadratic formula.</p>

<p>The roots are</p>

<p><strong>r = -2 ± 3i</strong></p>

<p><strong>Step 3:</strong> Write the solution.</p>

<p><strong>y = e<sup>-2x</sup>(C₁cos(3x) + C₂sin(3x))</strong></p>

<hr>

<h2>Understanding the Solution</h2>

<p>The exponential term</p>

<p><strong>e<sup>αx</sup></strong></p>

<p>controls whether the oscillations grow or decay.</p>

<ul>

<li>If α &lt; 0, the oscillations decay over time.</li>

<li>If α = 0, the oscillations continue with constant amplitude.</li>

<li>If α &gt; 0, the oscillations grow over time.</li>

</ul>

<p>The sine and cosine terms produce the oscillatory behavior.</p>

<hr>
<h2>Damped Oscillations</h2>

<p>Many real-world systems lose energy because of friction or air resistance.</p>

<p>These systems are called <strong>damped oscillators</strong>.</p>

<p>The exponential factor</p>

<p><strong>e<sup>αx</sup></strong></p>

<p>controls how quickly the oscillations decrease.</p>

<p>If α is negative, the amplitude becomes smaller as time increases.</p>

<p>Eventually the oscillations become nearly zero.</p>

<p>This behavior occurs in:</p>

<ul>

<li>Vehicle suspension systems</li>

<li>Swinging pendulums</li>

<li>Earthquake-resistant buildings</li>

<li>Mechanical springs</li>

<li>Electrical circuits</li>

</ul>

<hr>

<h2>Worked Example 3</h2>

<p>Solve</p>

<p><strong>y'' + 2y' + 5y = 0</strong></p>

<p><strong>Step 1:</strong> Form the characteristic equation.</p>

<p><strong>r² + 2r + 5 = 0</strong></p>

<p><strong>Step 2:</strong> Compute the discriminant.</p>

<p><strong>D = 2² − 4(1)(5)</strong></p>

<p><strong>D = 4 − 20 = -16</strong></p>

<p>The roots are</p>

<p><strong>r = -1 ± 2i</strong></p>

<p><strong>Step 3:</strong> Write the general solution.</p>

<p><strong>y = e<sup>-x</sup>(C₁cos(2x) + C₂sin(2x))</strong></p>

<p>The exponential term causes the oscillations to gradually decay.</p>

<hr>

<h2>Worked Example 4</h2>

<p>Solve</p>

<p><strong>y'' + 9y = 0</strong></p>

<p>The characteristic equation is</p>

<p><strong>r² + 9 = 0</strong></p>

<p>The roots are</p>

<p><strong>r = ±3i</strong></p>

<p>Since α = 0 and β = 3, the solution is</p>

<p><strong>y = C₁cos(3x) + C₂sin(3x)</strong></p>

<p>Notice that there is no exponential factor because the real part of the roots is zero.</p>

<hr>

<h2>Applying Initial Conditions</h2>

<p>After finding the general solution, substitute the initial conditions to determine the constants.</p>

<p>Example:</p>

<p><strong>y(0)=4</strong></p>

<p><strong>y'(0)=1</strong></p>

<p>Differentiate the general solution carefully using the Product Rule and the derivatives of sine and cosine.</p>

<p>Substitute x = 0 into both equations to solve for C₁ and C₂.</p>

<hr>

<h2>Recognizing Complex Root Problems</h2>

<p>Whenever the discriminant is negative, the characteristic equation has complex conjugate roots.</p>

<p>Immediately write the solution in the form</p>

<p><strong>y = e<sup>αx</sup>(C₁cos(βx) + C₂sin(βx))</strong></p>

<p>where α is the real part and β is the coefficient of the imaginary part.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to compute the discriminant before solving.</li>

<li>Using the repeated-root formula instead of the complex-root formula.</li>

<li>Confusing the real part α with the imaginary coefficient β.</li>

<li>Leaving the answer in complex exponential form instead of converting to sine and cosine.</li>

<li>Making sign errors when applying the quadratic formula.</li>

<li>Differentiating the exponential, sine, or cosine terms incorrectly when applying initial conditions.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>Complex roots occur when the discriminant is negative.</li>

<li>The characteristic roots have the form α ± βi.</li>

<li>Euler's Formula converts complex exponential solutions into real-valued sine and cosine functions.</li>

<li>The general solution is <strong>y = e<sup>αx</sup>(C₁cos(βx) + C₂sin(βx))</strong>.</li>

<li>The exponential factor determines whether oscillations grow, decay, or remain constant.</li>

<li>Complex-root solutions are widely used to model vibrations, waves, and electrical circuits.</li>

</ul>

`,
        questions: [

            {
                q: "When does a characteristic equation have complex roots?",
                options: [
                    "When the discriminant is negative",
                    "When the discriminant is zero",
                    "When the discriminant is positive",
                    "When the coefficients are equal"
                ],
                answer: "When the discriminant is negative",
                explanation: "A quadratic equation has complex conjugate roots whenever b² − 4ac < 0."
            },

            {
                q: "If the characteristic roots are α ± βi, the general solution is:",
                options: [
                    "y = e^(αx)(C₁cos(βx) + C₂sin(βx))",
                    "y = (C₁ + C₂x)e^(αx)",
                    "y = C₁e^(αx) + C₂e^(βx)",
                    "y = C₁cos(αx) + C₂sin(αx)"
                ],
                answer: "y = e^(αx)(C₁cos(βx) + C₂sin(βx))",
                explanation: "This is the standard solution for homogeneous second-order differential equations with complex conjugate roots."
            },

            {
                q: "The characteristic equation r² + 4r + 13 = 0 has roots:",
                options: [
                    "-2 ± 3i",
                    "2 ± 3i",
                    "-4 ± i",
                    "3 ± 2i"
                ],
                answer: "-2 ± 3i",
                explanation: "Applying the quadratic formula gives the roots -2 ± 3i."
            },

            {
                q: "Which mathematical identity converts complex exponential functions into trigonometric functions?",
                options: [
                    "Euler's Formula",
                    "Taylor's Theorem",
                    "The Binomial Theorem",
                    "L'Hôpital's Rule"
                ],
                answer: "Euler's Formula",
                explanation: "Euler's Formula states that e^(iθ) = cos(θ) + i sin(θ)."
            },

            {
                q: "In the solution y = e^(αx)(C₁cos(βx) + C₂sin(βx)), what determines whether the oscillations grow or decay?",
                options: [
                    "The real part α",
                    "The imaginary coefficient β",
                    "The constant C₁",
                    "The constant C₂"
                ],
                answer: "The real part α",
                explanation: "The exponential factor e^(αx) determines whether the oscillations grow, decay, or remain constant."
            },

            {
                q: "If α = 0, the solution behaves as:",
                options: [
                    "Constant-amplitude oscillations",
                    "Rapid exponential growth",
                    "Exponential decay",
                    "A straight line"
                ],
                answer: "Constant-amplitude oscillations",
                explanation: "When α = 0, the exponential factor equals 1, leaving pure sine and cosine oscillations."
            },

            {
                q: "The solution of y'' + 9y = 0 is:",
                options: [
                    "y = C₁cos(3x) + C₂sin(3x)",
                    "y = (C₁ + C₂x)e^(3x)",
                    "y = C₁e^(3x) + C₂e^(-3x)",
                    "y = e^(3x)(C₁cos(x) + C₂sin(x))"
                ],
                answer: "y = C₁cos(3x) + C₂sin(3x)",
                explanation: "The characteristic roots are ±3i, so α = 0 and β = 3."
            },

            {
                q: "Which function represents a damped oscillation?",
                options: [
                    "e^(-x)(C₁cos(2x) + C₂sin(2x))",
                    "C₁cos(2x) + C₂sin(2x)",
                    "(C₁ + C₂x)e^(2x)",
                    "C₁e^(2x) + C₂e^(-2x)"
                ],
                answer: "e^(-x)(C₁cos(2x) + C₂sin(2x))",
                explanation: "The negative exponential factor causes the oscillations to decrease in amplitude over time."
            },

            {
                q: "Which quantity represents the oscillation frequency in the solution?",
                options: [
                    "β",
                    "α",
                    "C₁",
                    "C₂"
                ],
                answer: "β",
                explanation: "The coefficient β appears inside the sine and cosine functions and determines the oscillation frequency."
            },

            {
                q: "Which is a common mistake when solving differential equations with complex roots?",
                options: [
                    "Leaving the solution in complex exponential form instead of converting to sine and cosine",
                    "Finding the characteristic equation",
                    "Using the quadratic formula",
                    "Substituting the initial conditions"
                ],
                answer: "Leaving the solution in complex exponential form instead of converting to sine and cosine",
                explanation: "For equations with real coefficients, solutions are normally expressed using real-valued sine and cosine functions."
            }

        ]
    }

    ,

    "calculus4-unit2-lesson6": {
        title: "Applications of Second-Order Differential Equations",
        subtitle: "Apply second-order differential equations to model physical systems including springs, oscillations, electrical circuits, and engineering problems.",

        body: `

<h2>Introduction</h2>

<p>Second-order differential equations are among the most important equations in science and engineering.</p>

<p>They describe systems whose behavior depends not only on their current state but also on how quickly that state is changing.</p>

<p>Many natural phenomena—including vibrating springs, swinging pendulums, electrical circuits, and structural vibrations—are modeled using second-order differential equations.</p>

<p>In this lesson, we will examine several important real-world applications and understand how the mathematical solutions relate to physical behavior.</p>

<hr>

<h2>Spring-Mass Systems</h2>

<p>One of the most common applications is a spring attached to a mass.</p>

<p>When the mass is displaced and released, it oscillates back and forth.</p>

<p>According to Hooke's Law, the restoring force exerted by the spring is proportional to the displacement.</p>

<p><strong>F = -kx</strong></p>

<p>where</p>

<ul>

<li><strong>F</strong> is the restoring force.</li>

<li><strong>k</strong> is the spring constant.</li>

<li><strong>x</strong> is the displacement from equilibrium.</li>

</ul>

<p>Using Newton's Second Law, we obtain</p>

<p><strong>m d²x/dt² + kx = 0</strong></p>

<p>This is a homogeneous second-order differential equation.</p>

<hr>

<h2>Simple Harmonic Motion</h2>

<p>When no friction or external forces are present, the motion is called <strong>simple harmonic motion</strong>.</p>

<p>The solution has the form</p>

<p><strong>x(t)=C₁cos(ωt)+C₂sin(ωt)</strong></p>

<p>where</p>

<p><strong>ω = √(k/m)</strong></p>

<p>The object continues oscillating forever with constant amplitude.</p>

<hr>

<h2>Damped Motion</h2>

<p>Real systems experience friction or air resistance.</p>

<p>A damping force is often proportional to velocity.</p>

<p>The resulting differential equation becomes</p>

<p><strong>m d²x/dt² + c dx/dt + kx = 0</strong></p>

<p>where</p>

<ul>

<li><strong>m</strong> is the mass.</li>

<li><strong>c</strong> is the damping coefficient.</li>

<li><strong>k</strong> is the spring constant.</li>

</ul>

<p>The value of the damping coefficient determines whether the motion is underdamped, critically damped, or overdamped.</p>

<hr>

<h2>Underdamped Motion</h2>

<p>If damping is relatively small, the object continues to oscillate while gradually losing energy.</p>

<p>The amplitude decreases exponentially over time.</p>

<p>This behavior corresponds to complex characteristic roots with a negative real part.</p>

<p>Examples include:</p>

<ul>

<li>Vehicle suspension systems</li>

<li>Mechanical springs</li>

<li>Musical instrument strings</li>

<li>Earthquake vibration absorbers</li>

</ul>

<hr>

<h2>Critically Damped Motion</h2>

<p>A critically damped system returns to equilibrium as quickly as possible without oscillating.</p>

<p>This case corresponds to a repeated characteristic root.</p>

<p>Examples include:</p>

<ul>

<li>Automatic door closers</li>

<li>Hydraulic controls</li>

<li>Precision measuring instruments</li>

</ul>

<hr>
<h2>Overdamped Motion</h2>

<p>If the damping force is very large, the system becomes <strong>overdamped</strong>.</p>

<p>An overdamped system does not oscillate. Instead, it slowly returns to its equilibrium position.</p>

<p>This situation occurs when the characteristic equation has two distinct negative real roots.</p>

<p>The solution is the sum of two exponential functions.</p>

<p>Examples include:</p>

<ul>

<li>Heavy industrial shock absorbers</li>

<li>Large hydraulic machinery</li>

<li>Certain vibration isolation systems</li>

</ul>

<hr>

<h2>Electrical Circuits</h2>

<p>Second-order differential equations also describe many electrical circuits.</p>

<p>A series RLC circuit contains:</p>

<ul>

<li>A resistor (R)</li>

<li>An inductor (L)</li>

<li>A capacitor (C)</li>

</ul>

<p>The current or charge in the circuit satisfies</p>

<p><strong>LQ'' + RQ' + (1/C)Q = 0</strong></p>

<p>where Q represents the electric charge.</p>

<p>Depending on the circuit parameters, the solution may have:</p>

<ul>

<li>Distinct real roots</li>

<li>A repeated root</li>

<li>Complex conjugate roots</li>

</ul>

<p>The mathematical analysis is identical to the methods learned throughout this unit.</p>

<hr>

<h2>Structural Vibrations</h2>

<p>Engineers use second-order differential equations to study how buildings, bridges, towers, and other structures respond to forces.</p>

<p>These equations help determine:</p>

<ul>

<li>Natural frequencies</li>

<li>Resonance conditions</li>

<li>Maximum vibration amplitudes</li>

<li>Structural stability</li>

</ul>

<p>Understanding these properties helps engineers design safer structures that can withstand wind, earthquakes, and other dynamic loads.</p>

<hr>

<h2>Worked Example</h2>

<p>A spring with no damping satisfies the equation</p>

<p><strong>x'' + 16x = 0</strong></p>

<p><strong>Step 1:</strong> Form the characteristic equation.</p>

<p><strong>r² + 16 = 0</strong></p>

<p><strong>Step 2:</strong> Solve for the roots.</p>

<p><strong>r = ±4i</strong></p>

<p><strong>Step 3:</strong> Write the general solution.</p>

<p><strong>x(t) = C₁cos(4t) + C₂sin(4t)</strong></p>

<p>This describes simple harmonic motion with constant amplitude.</p>

<hr>

<h2>Engineering Interpretation</h2>

<p>The form of the characteristic roots provides valuable information about the physical system.</p>

<table>

<tr>
<th>Characteristic Roots</th>
<th>Physical Behavior</th>
</tr>

<tr>
<td>Two distinct real roots</td>
<td>Non-oscillatory response</td>
</tr>

<tr>
<td>Repeated real root</td>
<td>Critical damping</td>
</tr>

<tr>
<td>Complex conjugate roots</td>
<td>Oscillatory motion</td>
</tr>

</table>

<p>By examining the roots alone, engineers can predict how a system will behave before solving for the constants.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Assuming every second-order equation represents oscillatory motion.</li>

<li>Confusing underdamped, critically damped, and overdamped systems.</li>

<li>Ignoring the physical meaning of the characteristic roots.</li>

<li>Using the wrong solution form for the type of roots obtained.</li>

<li>Forgetting that damping affects the amplitude of oscillations.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>Second-order differential equations model many physical systems.</li>

<li>Spring-mass systems describe mechanical vibrations.</li>

<li>Damping changes how oscillations behave over time.</li>

<li>Electrical RLC circuits are modeled using second-order differential equations.</li>

<li>Structural engineers use these equations to study vibration and stability.</li>

<li>The characteristic roots determine the qualitative behavior of the system.</li>

<li>These models are fundamental in engineering, physics, and applied mathematics.</li>

</ul>

`,
        questions: [

            {
                q: "Which physical system is most commonly modeled using a second-order differential equation?",
                options: [
                    "A spring-mass system",
                    "Simple interest",
                    "Population growth with constant rate",
                    "A linear programming problem"
                ],
                answer: "A spring-mass system",
                explanation: "Spring-mass systems are one of the classic applications of second-order differential equations."
            },

            {
                q: "Hooke's Law states that the restoring force is:",
                options: [
                    "Proportional to the displacement",
                    "Proportional to the velocity",
                    "Constant regardless of displacement",
                    "Equal to the object's mass"
                ],
                answer: "Proportional to the displacement",
                explanation: "Hooke's Law is F = -kx, meaning the restoring force is proportional to the displacement from equilibrium."
            },

            {
                q: "Simple harmonic motion occurs when:",
                options: [
                    "There is no damping",
                    "The damping is very large",
                    "The spring constant is zero",
                    "The mass is zero"
                ],
                answer: "There is no damping",
                explanation: "Without damping, the system oscillates indefinitely with constant amplitude."
            },

            {
                q: "Which differential equation models a damped spring-mass system?",
                options: [
                    "m d²x/dt² + c dx/dt + kx = 0",
                    "m dx/dt + kx = 0",
                    "x' + x = 0",
                    "x'' = k"
                ],
                answer: "m d²x/dt² + c dx/dt + kx = 0",
                explanation: "The damping coefficient c introduces resistance proportional to velocity."
            },

            {
                q: "A critically damped system is characterized by:",
                options: [
                    "A repeated real root",
                    "Complex conjugate roots",
                    "Two positive real roots",
                    "No characteristic equation"
                ],
                answer: "A repeated real root",
                explanation: "Critical damping corresponds to a repeated characteristic root and returns to equilibrium without oscillating."
            },

            {
                q: "An underdamped system has:",
                options: [
                    "Oscillations with decreasing amplitude",
                    "No oscillations",
                    "Constant amplitude oscillations",
                    "Infinite amplitude"
                ],
                answer: "Oscillations with decreasing amplitude",
                explanation: "Underdamped systems continue oscillating while the amplitude gradually decreases because of damping."
            },

            {
                q: "Which electrical circuit is commonly modeled by a second-order differential equation?",
                options: [
                    "An RLC circuit",
                    "A single resistor",
                    "A battery alone",
                    "A diode only"
                ],
                answer: "An RLC circuit",
                explanation: "RLC circuits contain a resistor, inductor, and capacitor, leading to second-order differential equations."
            },

            {
                q: "If the characteristic equation has complex conjugate roots, the physical system usually exhibits:",
                options: [
                    "Oscillatory motion",
                    "Constant velocity",
                    "Linear growth",
                    "No motion"
                ],
                answer: "Oscillatory motion",
                explanation: "Complex conjugate roots produce sine and cosine terms, resulting in oscillations."
            },

            {
                q: "Engineers use second-order differential equations to analyze:",
                options: [
                    "Structural vibrations",
                    "Only financial investments",
                    "Only chemical formulas",
                    "Only probability experiments"
                ],
                answer: "Structural vibrations",
                explanation: "Engineers study the vibration and stability of bridges, buildings, towers, and other structures using second-order differential equations."
            },

            {
                q: "Which statement best summarizes the importance of characteristic roots?",
                options: [
                    "They determine the qualitative behavior of the system.",
                    "They determine only the initial conditions.",
                    "They eliminate the need for differential equations.",
                    "They always produce exponential growth."
                ],
                answer: "They determine the qualitative behavior of the system.",
                explanation: "The type of characteristic roots tells us whether the system oscillates, decays, grows, or returns to equilibrium without oscillation."
            }

        ]
    }
    ,

    "calculus4-unit2-review": {
        title: "Unit 2 Review",
        subtitle: "Review the major concepts of second-order homogeneous differential equations before taking the Unit 2 Test.",

        body: `

<h2>Unit Overview</h2>

<p>In this unit, you learned how to solve homogeneous second-order differential equations by analyzing the roots of the characteristic equation.</p>

<p>Although every problem begins by forming the characteristic equation, the type of roots determines the form of the solution.</p>

<p>Understanding the relationship between the characteristic roots and the solution is the most important objective of this unit.</p>

<hr>

<h2>1. Second-Order Differential Equations</h2>

<p>A second-order differential equation contains a second derivative.</p>

<p>The standard homogeneous linear equation is</p>

<p><strong>ay'' + by' + cy = 0</strong></p>

<p>where a, b, and c are constants.</p>

<p>Every solution begins by constructing the characteristic equation.</p>

<hr>

<h2>2. Characteristic Equation</h2>

<p>Replace</p>

<ul>

<li>y'' with r²</li>

<li>y' with r</li>

<li>y with 1</li>

</ul>

<p>to obtain</p>

<p><strong>ar² + br + c = 0</strong></p>

<p>The roots of this quadratic determine the form of the general solution.</p>

<hr>

<h2>3. Distinct Real Roots</h2>

<p>If the characteristic equation has two different real roots</p>

<p><strong>r₁ and r₂</strong></p>

<p>then the general solution is</p>

<p><strong>y = C₁e^(r₁x) + C₂e^(r₂x)</strong></p>

<hr>

<h2>4. Repeated Roots</h2>

<p>If the discriminant equals zero, the characteristic equation has one repeated real root.</p>

<p>The correct solution becomes</p>

<p><strong>y = (C₁ + C₂x)e^(rx)</strong></p>

<p>The factor of x produces the second linearly independent solution.</p>

<hr>

<h2>5. Complex Roots</h2>

<p>If the discriminant is negative, the roots have the form</p>

<p><strong>α ± βi</strong></p>

<p>The solution is</p>

<p><strong>y = e^(αx)(C₁cos(βx) + C₂sin(βx))</strong></p>

<p>Euler's Formula explains why complex roots produce real-valued sine and cosine functions.</p>

<hr>

<h2>6. Physical Applications</h2>

<p>Second-order differential equations model many important systems, including:</p>

<ul>

<li>Spring-mass systems</li>

<li>Mechanical vibrations</li>

<li>Damped oscillations</li>

<li>Electrical RLC circuits</li>

<li>Structural engineering</li>

<li>Earthquake-resistant designs</li>

</ul>

<hr>

<h2>Key Ideas to Remember</h2>

<ul>

<li>Every problem begins with the characteristic equation.</li>

<li>The discriminant determines the type of roots.</li>

<li>Distinct roots produce two exponential solutions.</li>

<li>Repeated roots require multiplying the second solution by x.</li>

<li>Complex roots produce exponential, sine, and cosine functions.</li>

<li>The characteristic roots determine the physical behavior of many engineering systems.</li>

</ul>

<hr>

<h2>Review Complete</h2>

<p>You are now ready to test your understanding of Unit 2.</p>

`,
        questions: [

            {
                q: "What is the standard form of a homogeneous second-order linear differential equation?",
                options: [
                    "ay'' + by' + cy = 0",
                    "y' + ay = 0",
                    "y'' = ay",
                    "ax + by + c = 0"
                ],
                answer: "ay'' + by' + cy = 0",
                explanation: "A homogeneous second-order linear differential equation with constant coefficients has the form ay'' + by' + cy = 0."
            },

            {
                q: "What equation is formed first when solving a homogeneous second-order differential equation?",
                options: [
                    "The characteristic equation",
                    "The quadratic formula",
                    "Euler's Formula",
                    "The product rule"
                ],
                answer: "The characteristic equation",
                explanation: "Every problem begins by forming the characteristic equation."
            },

            {
                q: "If the characteristic equation has two distinct real roots r₁ and r₂, what is the general solution?",
                options: [
                    "y = C₁e^(r₁x) + C₂e^(r₂x)",
                    "y = (C₁ + C₂x)e^(rx)",
                    "y = e^(αx)(C₁cos(βx) + C₂sin(βx))",
                    "y = C₁ + C₂x"
                ],
                answer: "y = C₁e^(r₁x) + C₂e^(r₂x)",
                explanation: "Distinct real roots produce two independent exponential solutions."
            },

            {
                q: "A repeated root occurs when:",
                options: [
                    "The discriminant equals zero",
                    "The discriminant is positive",
                    "The discriminant is negative",
                    "The equation has no roots"
                ],
                answer: "The discriminant equals zero",
                explanation: "When b² − 4ac = 0, the characteristic equation has one repeated real root."
            },

            {
                q: "What is the correct general solution for a repeated root r?",
                options: [
                    "y = (C₁ + C₂x)e^(rx)",
                    "y = C₁e^(rx)",
                    "y = C₁cos(rx) + C₂sin(rx)",
                    "y = C₁e^(2rx) + C₂"
                ],
                answer: "y = (C₁ + C₂x)e^(rx)",
                explanation: "The factor of x creates the second linearly independent solution."
            },

            {
                q: "Complex characteristic roots occur when:",
                options: [
                    "The discriminant is negative",
                    "The discriminant is zero",
                    "The discriminant is positive",
                    "The coefficients are equal"
                ],
                answer: "The discriminant is negative",
                explanation: "A negative discriminant produces complex conjugate roots."
            },

            {
                q: "If the characteristic roots are α ± βi, the general solution is:",
                options: [
                    "y = e^(αx)(C₁cos(βx) + C₂sin(βx))",
                    "y = (C₁ + C₂x)e^(αx)",
                    "y = C₁e^(αx) + C₂e^(βx)",
                    "y = C₁cos(αx) + C₂sin(αx)"
                ],
                answer: "y = e^(αx)(C₁cos(βx) + C₂sin(βx))",
                explanation: "Complex conjugate roots always produce exponential, sine, and cosine functions."
            },

            {
                q: "Which real-world system is commonly modeled using second-order differential equations?",
                options: [
                    "Spring-mass systems",
                    "Simple interest calculations",
                    "Basic arithmetic",
                    "Linear programming"
                ],
                answer: "Spring-mass systems",
                explanation: "Spring-mass systems are one of the most common applications of second-order differential equations."
            },

            {
                q: "Which mathematical identity allows complex exponential solutions to be written using sine and cosine?",
                options: [
                    "Euler's Formula",
                    "The Quadratic Formula",
                    "The Chain Rule",
                    "The Mean Value Theorem"
                ],
                answer: "Euler's Formula",
                explanation: "Euler's Formula converts complex exponentials into trigonometric functions."
            },

            {
                q: "What determines the form of the general solution to a homogeneous second-order differential equation?",
                options: [
                    "The characteristic roots",
                    "The value of C₁",
                    "The initial conditions only",
                    "The order of integration"
                ],
                answer: "The characteristic roots",
                explanation: "The characteristic roots determine whether the solution uses exponentials, repeated-root solutions, or sine and cosine functions."
            }

        ]
    }
    ,

    "calculus4-unit2-test": {
        title: "Unit 2 Test",
        subtitle: "Test your understanding of second-order homogeneous differential equations, characteristic equations, repeated roots, complex roots, and their applications.",

        questions: [

            {
                q: "Which equation is formed first when solving a homogeneous second-order differential equation?",
                options: [
                    "The characteristic equation",
                    "Euler's Formula",
                    "The product rule",
                    "The quadratic approximation"
                ],
                answer: "The characteristic equation",
                explanation: "Every homogeneous second-order differential equation is solved by first forming its characteristic equation."
            },

            {
                q: "The characteristic equation for ay'' + by' + cy = 0 is:",
                options: [
                    "ar² + br + c = 0",
                    "ay² + by + c = 0",
                    "a² + b² + c² = 0",
                    "r² + y² = 0"
                ],
                answer: "ar² + br + c = 0",
                explanation: "Replace y'' with r², y' with r, and y with 1."
            },

            {
                q: "If the characteristic equation has two distinct real roots, the general solution contains:",
                options: [
                    "Two exponential terms",
                    "One exponential term",
                    "Only sine functions",
                    "Only cosine functions"
                ],
                answer: "Two exponential terms",
                explanation: "Distinct real roots produce two independent exponential solutions."
            },

            {
                q: "The discriminant of the characteristic equation determines:",
                options: [
                    "The type of roots",
                    "The order of the equation",
                    "The initial conditions",
                    "The number of derivatives"
                ],
                answer: "The type of roots",
                explanation: "The discriminant tells whether the roots are distinct, repeated, or complex."
            },

            {
                q: "A repeated root occurs when:",
                options: [
                    "b² − 4ac = 0",
                    "b² − 4ac > 0",
                    "b² − 4ac < 0",
                    "a = 0"
                ],
                answer: "b² − 4ac = 0",
                explanation: "A zero discriminant produces one repeated real root."
            },

            {
                q: "The general solution for a repeated root r is:",
                options: [
                    "y = (C₁ + C₂x)e^(rx)",
                    "y = C₁e^(rx)",
                    "y = C₁cos(rx)+C₂sin(rx)",
                    "y = C₁x+C₂"
                ],
                answer: "y = (C₁ + C₂x)e^(rx)",
                explanation: "The factor of x provides the second linearly independent solution."
            },

            {
                q: "Why is the factor x included for repeated roots?",
                options: [
                    "To create a second linearly independent solution",
                    "To simplify differentiation",
                    "To eliminate exponential terms",
                    "To satisfy Euler's Formula"
                ],
                answer: "To create a second linearly independent solution",
                explanation: "A second-order equation requires two independent solutions."
            },

            {
                q: "Complex roots occur whenever:",
                options: [
                    "The discriminant is negative",
                    "The discriminant is zero",
                    "The discriminant is positive",
                    "The coefficients are equal"
                ],
                answer: "The discriminant is negative",
                explanation: "Negative discriminants produce complex conjugate roots."
            },

            {
                q: "Complex roots always occur in:",
                options: [
                    "Conjugate pairs",
                    "Groups of three",
                    "Single values",
                    "Positive pairs only"
                ],
                answer: "Conjugate pairs",
                explanation: "Quadratic equations with real coefficients always produce complex conjugate pairs."
            },

            {
                q: "If the roots are α ± βi, the solution contains:",
                options: [
                    "An exponential multiplied by sine and cosine",
                    "Only exponentials",
                    "Only logarithms",
                    "Only polynomials"
                ],
                answer: "An exponential multiplied by sine and cosine",
                explanation: "Complex roots produce y = e^(αx)(C₁cos(βx)+C₂sin(βx))."
            },

            {
                q: "Which mathematical identity converts complex exponentials into trigonometric functions?",
                options: [
                    "Euler's Formula",
                    "The Binomial Theorem",
                    "L'Hôpital's Rule",
                    "Taylor's Inequality"
                ],
                answer: "Euler's Formula",
                explanation: "Euler's Formula connects exponential and trigonometric functions."
            },

            {
                q: "In the solution e^(αx)(C₁cos(βx)+C₂sin(βx)), α controls:",
                options: [
                    "Growth or decay",
                    "Oscillation frequency",
                    "The initial conditions",
                    "The spring constant"
                ],
                answer: "Growth or decay",
                explanation: "The exponential factor determines whether the solution grows or decays."
            },

            {
                q: "In the same solution, β determines:",
                options: [
                    "The oscillation frequency",
                    "The damping coefficient",
                    "The initial displacement",
                    "The number of roots"
                ],
                answer: "The oscillation frequency",
                explanation: "β appears inside the sine and cosine functions."
            },

            {
                q: "If α = 0, the solution represents:",
                options: [
                    "Constant-amplitude oscillations",
                    "Exponential decay",
                    "Exponential growth",
                    "No oscillation"
                ],
                answer: "Constant-amplitude oscillations",
                explanation: "Without an exponential factor, only sine and cosine remain."
            },

            {
                q: "Hooke's Law is written as:",
                options: [
                    "F = -kx",
                    "F = ma",
                    "F = kv",
                    "F = mg"
                ],
                answer: "F = -kx",
                explanation: "The restoring force is proportional to displacement."
            },

            {
                q: "Simple harmonic motion occurs when:",
                options: [
                    "No damping is present",
                    "The damping is very large",
                    "The spring constant is zero",
                    "The mass is infinite"
                ],
                answer: "No damping is present",
                explanation: "Without damping, oscillations continue indefinitely."
            },

            {
                q: "Which system is underdamped?",
                options: [
                    "Oscillates with decreasing amplitude",
                    "Returns without oscillating",
                    "Never moves",
                    "Moves with constant velocity"
                ],
                answer: "Oscillates with decreasing amplitude",
                explanation: "Underdamped systems continue oscillating while gradually losing energy."
            },

            {
                q: "A critically damped system corresponds to:",
                options: [
                    "A repeated characteristic root",
                    "Complex roots",
                    "Distinct positive roots",
                    "No roots"
                ],
                answer: "A repeated characteristic root",
                explanation: "Critical damping corresponds to repeated roots."
            },

            {
                q: "An overdamped system has:",
                options: [
                    "Two distinct real roots",
                    "Repeated roots",
                    "Purely imaginary roots",
                    "No characteristic equation"
                ],
                answer: "Two distinct real roots",
                explanation: "Overdamped systems return slowly without oscillating."
            },

            {
                q: "Which electrical circuit is modeled by a second-order differential equation?",
                options: [
                    "An RLC circuit",
                    "A resistor alone",
                    "A battery alone",
                    "A switch"
                ],
                answer: "An RLC circuit",
                explanation: "RLC circuits naturally produce second-order differential equations."
            },

            {
                q: "Second-order differential equations are commonly used to study:",
                options: [
                    "Structural vibrations",
                    "Alphabetical sorting",
                    "Simple percentages",
                    "Word processing"
                ],
                answer: "Structural vibrations",
                explanation: "Engineers analyze buildings, bridges, and towers using these equations."
            },

            {
                q: "Which solution corresponds to characteristic roots ±4i?",
                options: [
                    "C₁cos(4x)+C₂sin(4x)",
                    "(C₁+C₂x)e^(4x)",
                    "C₁e^(4x)+C₂e^(-4x)",
                    "C₁+C₂x"
                ],
                answer: "C₁cos(4x)+C₂sin(4x)",
                explanation: "Purely imaginary roots produce sine and cosine solutions."
            },

            {
                q: "Initial conditions are used to determine:",
                options: [
                    "The constants C₁ and C₂",
                    "The characteristic equation",
                    "The discriminant",
                    "The order of the equation"
                ],
                answer: "The constants C₁ and C₂",
                explanation: "Once the general solution is found, initial conditions determine the arbitrary constants."
            },

            {
                q: "The most important step after writing the differential equation is to:",
                options: [
                    "Form the characteristic equation",
                    "Integrate immediately",
                    "Use separation of variables",
                    "Apply Euler's Formula"
                ],
                answer: "Form the characteristic equation",
                explanation: "The characteristic equation determines the entire solution process."
            },

            {
                q: "The form of the general solution is determined primarily by:",
                options: [
                    "The characteristic roots",
                    "The values of C₁ and C₂",
                    "The initial conditions",
                    "The independent variable"
                ],
                answer: "The characteristic roots",
                explanation: "Distinct, repeated, and complex roots each produce a different form of the general solution."
            }

        ]
    }
    ,

    "calculus4-unit3-lesson1": {
        title: "Introduction to Laplace Transforms",
        subtitle: "Learn what Laplace Transforms are, why they are useful, and how they simplify the solution of differential equations.",

        body: `

<h2>Introduction</h2>

<p>In the previous unit, we solved differential equations by finding characteristic equations and determining the appropriate form of the solution.</p>

<p>Although those techniques work well for many homogeneous differential equations, they become much more difficult when equations contain forcing functions, discontinuous inputs, or impulse functions.</p>

<p>The <strong>Laplace Transform</strong> provides a powerful alternative method for solving these problems.</p>

<p>Rather than solving a differential equation directly, the Laplace Transform converts it into an algebraic equation, which is usually much easier to solve.</p>

<p>After solving the algebraic equation, we use the <strong>Inverse Laplace Transform</strong> to convert the answer back into the original function.</p>

<hr>

<h2>What Is a Laplace Transform?</h2>

<p>A Laplace Transform converts a function of time into a function of a new variable called <strong>s</strong>.</p>

<p>If the original function is written as</p>

<p><strong>f(t)</strong></p>

<p>its Laplace Transform is written as</p>

<p><strong>F(s)</strong></p>

<p>The notation is</p>

<p><strong>L{f(t)} = F(s)</strong></p>

<p>The variable <strong>t</strong> usually represents time, while <strong>s</strong> is called the complex frequency variable.</p>

<hr>

<h2>The Definition of the Laplace Transform</h2>

<p>The Laplace Transform of a function is defined by the improper integral</p>

<p><strong>L{f(t)} = ∫₀^∞ e<sup>-st</sup>f(t) dt</strong></p>

<p>Although this definition appears complicated, we rarely evaluate this integral directly.</p>

<p>Instead, engineers, scientists, and mathematicians use tables of common Laplace Transforms.</p>

<hr>

<h2>Why Are Laplace Transforms Useful?</h2>

<p>Laplace Transforms provide several important advantages.</p>

<ul>

<li>They convert differential equations into algebraic equations.</li>

<li>Initial conditions can be included immediately.</li>

<li>Many difficult differential equations become much easier to solve.</li>

<li>They are especially useful for discontinuous functions and impulse functions.</li>

<li>They are widely used in engineering, physics, economics, and control systems.</li>

</ul>

<hr>

<h2>The Basic Idea</h2>

<p>The overall process follows four steps.</p>

<ol>

<li>Start with a differential equation.</li>

<li>Take the Laplace Transform of both sides.</li>

<li>Solve the resulting algebraic equation.</li>

<li>Apply the Inverse Laplace Transform to obtain the original solution.</li>

</ol>

<p>This procedure often avoids lengthy differentiation and integration.</p>

<hr>

<h2>Functions That Have Laplace Transforms</h2>

<p>Many commonly encountered functions possess Laplace Transforms.</p>

<p>Examples include:</p>

<ul>

<li>Constants</li>

<li>Polynomials</li>

<li>Exponential functions</li>

<li>Sine functions</li>

<li>Cosine functions</li>

<li>Hyperbolic functions</li>

</ul>

<p>Throughout this unit, we will learn the transforms of each of these functions.</p>

<hr>

<h2>Notation</h2>

<p>Several notations are commonly used.</p>

<table>

<tr>
<th>Original Function</th>
<th>Laplace Transform</th>
</tr>

<tr>
<td>f(t)</td>
<td>F(s)</td>
</tr>

<tr>
<td>L{f(t)}</td>
<td>F(s)</td>
</tr>

<tr>
<td>L⁻¹{F(s)}</td>
<td>f(t)</td>
</tr>

</table>

<p>The symbol <strong>L⁻¹</strong> denotes the Inverse Laplace Transform.</p>

<hr>
<h2>Worked Example 1</h2>

<p>Suppose we wish to find the Laplace Transform of the constant function</p>

<p><strong>f(t) = 1</strong></p>

<p>Rather than evaluating the defining integral, we use a standard Laplace Transform table.</p>

<p>The result is</p>

<p><strong>L{1} = 1/s</strong></p>

<p>This is one of the most frequently used transforms and will appear throughout this unit.</p>

<hr>

<h2>Worked Example 2</h2>

<p>Consider the function</p>

<p><strong>f(t) = e<sup>3t</sup></strong></p>

<p>Using the standard transform table, we obtain</p>

<p><strong>L{e<sup>3t</sup>} = 1/(s − 3)</strong></p>

<p>Notice that the exponential becomes a simple rational expression involving s.</p>

<hr>

<h2>Worked Example 3</h2>

<p>Find the Laplace Transform of</p>

<p><strong>f(t) = sin(5t)</strong></p>

<p>Using the standard transform table,</p>

<p><strong>L{sin(5t)} = 5/(s² + 25)</strong></p>

<p>Many trigonometric functions have similarly simple Laplace Transforms.</p>

<hr>

<h2>A Preview of Solving Differential Equations</h2>

<p>Suppose we have the differential equation</p>

<p><strong>y' + 2y = 0</strong></p>

<p>Instead of solving this equation directly, we take the Laplace Transform of both sides.</p>

<p>The derivative becomes an algebraic expression involving <strong>s</strong>, allowing us to solve for the transformed function.</p>

<p>Finally, we apply the Inverse Laplace Transform to recover the original solution.</p>

<p>This method becomes especially valuable for more complicated differential equations.</p>

<hr>

<h2>Applications of Laplace Transforms</h2>

<p>Laplace Transforms are used in many fields of science and engineering.</p>

<ul>

<li>Electrical circuit analysis</li>

<li>Mechanical vibration systems</li>

<li>Automatic control systems</li>

<li>Signal processing</li>

<li>Robotics</li>

<li>Aerospace engineering</li>

<li>Economics and finance</li>

<li>Population modeling</li>

</ul>

<p>Because they simplify differential equations, Laplace Transforms are an essential mathematical tool in engineering.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Confusing the original function <strong>f(t)</strong> with its transform <strong>F(s)</strong>.</li>

<li>Thinking that every Laplace Transform must be computed using the defining integral.</li>

<li>Forgetting that most transforms are obtained from standard transform tables.</li>

<li>Mixing the variables <strong>t</strong> and <strong>s</strong>.</li>

<li>Confusing the Laplace Transform with the Inverse Laplace Transform.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>The Laplace Transform converts functions of time into functions of the variable <strong>s</strong>.</li>

<li>It transforms differential equations into algebraic equations.</li>

<li>The notation <strong>L{f(t)} = F(s)</strong> represents the Laplace Transform.</li>

<li>The Inverse Laplace Transform converts the solution back into the original function.</li>

<li>Most transforms are found using standard transform tables instead of evaluating the defining integral.</li>

<li>Laplace Transforms are widely used in engineering, physics, economics, and many other scientific disciplines.</li>

</ul>

`,
        questions: [

            {
                q: "What is the primary purpose of the Laplace Transform?",
                options: [
                    "To convert differential equations into algebraic equations",
                    "To eliminate constants",
                    "To find derivatives",
                    "To solve quadratic equations"
                ],
                answer: "To convert differential equations into algebraic equations",
                explanation: "The Laplace Transform simplifies many differential equations by converting them into algebraic equations."
            },

            {
                q: "If the original function is written as f(t), its Laplace Transform is usually written as:",
                options: [
                    "F(s)",
                    "f(s)",
                    "G(t)",
                    "L(t)"
                ],
                answer: "F(s)",
                explanation: "The standard notation is L{f(t)} = F(s)."
            },

            {
                q: "Which variable is typically used in the original function before applying the Laplace Transform?",
                options: [
                    "t",
                    "s",
                    "x",
                    "r"
                ],
                answer: "t",
                explanation: "The original function is usually expressed as a function of time, t."
            },

            {
                q: "Which variable is used after taking the Laplace Transform?",
                options: [
                    "s",
                    "t",
                    "x",
                    "y"
                ],
                answer: "s",
                explanation: "The transformed function is expressed in terms of the variable s."
            },

            {
                q: "The notation L⁻¹ represents:",
                options: [
                    "The Inverse Laplace Transform",
                    "The derivative",
                    "The definite integral",
                    "The characteristic equation"
                ],
                answer: "The Inverse Laplace Transform",
                explanation: "The Inverse Laplace Transform converts a transformed function back into the original function."
            },

            {
                q: "Most Laplace Transforms are found by:",
                options: [
                    "Using standard transform tables",
                    "Evaluating the defining integral every time",
                    "Using numerical methods",
                    "Factoring polynomials"
                ],
                answer: "Using standard transform tables",
                explanation: "Although the transform is defined by an improper integral, standard transform tables are almost always used."
            },

            {
                q: "What is the Laplace Transform of the constant function 1?",
                options: [
                    "1/s",
                    "s",
                    "0",
                    "1/(s + 1)"
                ],
                answer: "1/s",
                explanation: "One of the most common Laplace Transform formulas is L{1} = 1/s."
            },

            {
                q: "Which of the following is a common application of Laplace Transforms?",
                options: [
                    "Electrical circuit analysis",
                    "Sorting data alphabetically",
                    "Calculating averages",
                    "Finding the area of a rectangle"
                ],
                answer: "Electrical circuit analysis",
                explanation: "Laplace Transforms are widely used in electrical engineering for analyzing RLC circuits and other dynamic systems."
            },

            {
                q: "What generally happens after solving the algebraic equation in the s-domain?",
                options: [
                    "Apply the Inverse Laplace Transform",
                    "Differentiate again",
                    "Take another Laplace Transform",
                    "Factor the characteristic equation"
                ],
                answer: "Apply the Inverse Laplace Transform",
                explanation: "After solving for F(s), the Inverse Laplace Transform is used to recover the original function f(t)."
            },

            {
                q: "Which statement best describes the Laplace Transform?",
                options: [
                    "It converts time-domain functions into functions of s to simplify solving differential equations.",
                    "It replaces every derivative with an integral.",
                    "It only works for polynomial functions.",
                    "It eliminates the need for algebra."
                ],
                answer: "It converts time-domain functions into functions of s to simplify solving differential equations.",
                explanation: "The Laplace Transform changes differential equations into algebraic equations, making many problems much easier to solve."
            }

        ]
    }
    ,

    "calculus4-unit3-lesson2": {
        title: "Basic Laplace Transform Formulas",
        subtitle: "Learn the most common Laplace Transform formulas and how to use transform tables to solve problems efficiently.",

        body: `

<h2>Introduction</h2>

<p>In the previous lesson, we introduced the Laplace Transform and learned that it converts differential equations into algebraic equations.</p>

<p>Although every Laplace Transform is defined by an improper integral, mathematicians and engineers rarely evaluate these integrals directly.</p>

<p>Instead, they use a table of standard Laplace Transforms.</p>

<p>Learning these formulas is similar to memorizing derivative and integral formulas in calculus.</p>

<p>Once these basic transforms are familiar, solving differential equations becomes much faster.</p>

<hr>

<h2>The Most Common Laplace Transforms</h2>

<p>The following transforms appear repeatedly throughout mathematics, engineering, and physics.</p>

<table>

<tr>
<th>Function</th>
<th>Laplace Transform</th>
</tr>

<tr>
<td>1</td>
<td>1/s</td>
</tr>

<tr>
<td>t</td>
<td>1/s²</td>
</tr>

<tr>
<td>t²</td>
<td>2/s³</td>
</tr>

<tr>
<td>t³</td>
<td>6/s⁴</td>
</tr>

<tr>
<td>e<sup>at</sup></td>
<td>1/(s − a)</td>
</tr>

<tr>
<td>sin(at)</td>
<td>a/(s² + a²)</td>
</tr>

<tr>
<td>cos(at)</td>
<td>s/(s² + a²)</td>
</tr>

</table>

<p>These formulas form the foundation for nearly every Laplace Transform problem.</p>

<hr>

<h2>Recognizing Patterns</h2>

<p>Rather than memorizing every formula individually, notice the patterns.</p>

<p>For powers of t:</p>

<ul>

<li>1 transforms to 1/s.</li>

<li>t transforms to 1/s².</li>

<li>t² transforms to 2/s³.</li>

<li>t³ transforms to 6/s⁴.</li>

</ul>

<p>The numerator contains the factorial of the exponent, while the denominator contains the next higher power of s.</p>

<hr>

<h2>Transform of Constants</h2>

<p>The simplest Laplace Transform is</p>

<p><strong>L{1} = 1/s</strong></p>

<p>If the function is multiplied by a constant, simply multiply the transform by that same constant.</p>

<p>For example,</p>

<p><strong>L{7} = 7/s</strong></p>

<p>This property follows directly from the linearity of the Laplace Transform.</p>

<hr>

<h2>Transform of Powers of t</h2>

<p>For any nonnegative integer n,</p>

<p><strong>L{tⁿ} = n!/s^(n+1)</strong></p>

<p>Examples include:</p>

<ul>

<li><strong>L{t} = 1/s²</strong></li>

<li><strong>L{t²} = 2/s³</strong></li>

<li><strong>L{t³} = 6/s⁴</strong></li>

<li><strong>L{t⁴} = 24/s⁵</strong></li>

</ul>

<p>This formula is one of the most important Laplace Transform identities.</p>

<hr>

<h2>Transform of Exponential Functions</h2>

<p>Exponential functions are extremely common in applications.</p>

<p>The standard formula is</p>

<p><strong>L{e<sup>at</sup>} = 1/(s − a)</strong></p>

<p>Notice that the constant a appears as a subtraction in the denominator.</p>

<p>This pattern is easy to recognize and will be used frequently throughout this course.</p>

<hr>

<h2>Transform of Sine and Cosine</h2>

<p>Trigonometric functions also have simple Laplace Transforms.</p>

<p><strong>L{sin(at)} = a/(s² + a²)</strong></p>

<p><strong>L{cos(at)} = s/(s² + a²)</strong></p>

<p>These formulas are especially important when solving vibration and oscillation problems.</p>

<hr>
<h2>Worked Example 1</h2>

<p>Find the Laplace Transform of</p>

<p><strong>f(t) = 5</strong></p>

<p>Using the constant rule,</p>

<p><strong>L{1} = 1/s</strong></p>

<p>Multiply by the constant:</p>

<p><strong>L{5} = 5/s</strong></p>

<hr>

<h2>Worked Example 2</h2>

<p>Find the Laplace Transform of</p>

<p><strong>f(t) = t²</strong></p>

<p>Using the power formula</p>

<p><strong>L{tⁿ} = n!/s^(n+1)</strong></p>

<p>Since n = 2,</p>

<p><strong>2! = 2</strong></p>

<p>Therefore</p>

<p><strong>L{t²} = 2/s³</strong></p>

<hr>

<h2>Worked Example 3</h2>

<p>Find the Laplace Transform of</p>

<p><strong>f(t) = e<sup>4t</sup></strong></p>

<p>Using the exponential formula</p>

<p><strong>L{e<sup>at</sup>} = 1/(s − a)</strong></p>

<p>Since a = 4,</p>

<p><strong>L{e<sup>4t</sup>} = 1/(s − 4)</strong></p>

<hr>

<h2>Worked Example 4</h2>

<p>Find the Laplace Transform of</p>

<p><strong>f(t) = sin(6t)</strong></p>

<p>Using</p>

<p><strong>L{sin(at)} = a/(s² + a²)</strong></p>

<p>Since a = 6,</p>

<p><strong>L{sin(6t)} = 6/(s² + 36)</strong></p>

<hr>

<h2>Worked Example 5</h2>

<p>Find the Laplace Transform of</p>

<p><strong>f(t) = cos(5t)</strong></p>

<p>Using</p>

<p><strong>L{cos(at)} = s/(s² + a²)</strong></p>

<p>Since a = 5,</p>

<p><strong>L{cos(5t)} = s/(s² + 25)</strong></p>

<hr>

<h2>Using a Laplace Transform Table</h2>

<p>When solving problems, you should first identify the type of function before looking up its transform.</p>

<p>Ask yourself questions such as:</p>

<ul>

<li>Is the function a constant?</li>

<li>Is it a power of t?</li>

<li>Is it an exponential function?</li>

<li>Is it a sine or cosine function?</li>

</ul>

<p>Once the function type is recognized, simply apply the corresponding formula from the transform table.</p>

<p>With practice, many of these formulas become easy to remember.</p>

<hr>

<h2>The Linearity Property</h2>

<p>One of the most useful properties of the Laplace Transform is <strong>linearity</strong>.</p>

<p>If</p>

<p><strong>f(t) = ag(t) + bh(t)</strong></p>

<p>then</p>

<p><strong>L{ag(t) + bh(t)} = aL{g(t)} + bL{h(t)}</strong></p>

<p>This means we can transform each term separately and then combine the results.</p>

<p>This property greatly simplifies more complicated problems.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the wrong transform formula for the given function.</li>

<li>Forgetting to square the constant inside the denominator of sine and cosine transforms.</li>

<li>Confusing the exponential formula with the trigonometric formulas.</li>

<li>Forgetting the factorial when transforming powers of t.</li>

<li>Ignoring the linearity property when transforming sums of functions.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>Most Laplace Transforms are obtained from standard transform tables.</li>

<li>Constants, powers of t, exponential functions, sine functions, and cosine functions all have simple transform formulas.</li>

<li>The power formula uses factorial notation.</li>

<li>The exponential transform always has the form 1/(s − a).</li>

<li>Sine and cosine transforms have denominators of the form s² + a².</li>

<li>The linearity property allows each term of a sum to be transformed separately.</li>

<li>Recognizing function types is the key to using Laplace Transform tables efficiently.</li>

</ul>

`,
        questions: [

            {
                q: "Why do engineers and mathematicians usually use Laplace Transform tables?",
                options: [
                    "Because they avoid evaluating the defining integral each time",
                    "Because the integral cannot be evaluated",
                    "Because Laplace Transforms only work with tables",
                    "Because the tables replace algebra"
                ],
                answer: "Because they avoid evaluating the defining integral each time",
                explanation: "Most Laplace Transforms are obtained from standard transform tables rather than evaluating the defining integral."
            },

            {
                q: "What is the Laplace Transform of the constant function 1?",
                options: [
                    "1/s",
                    "s",
                    "1/(s + 1)",
                    "0"
                ],
                answer: "1/s",
                explanation: "One of the fundamental Laplace Transform formulas is L{1} = 1/s."
            },

            {
                q: "What is the Laplace Transform of t?",
                options: [
                    "1/s²",
                    "1/s",
                    "2/s²",
                    "2/s³"
                ],
                answer: "1/s²",
                explanation: "Using L{tⁿ} = n!/s^(n+1) with n = 1 gives L{t} = 1/s²."
            },

            {
                q: "What is the Laplace Transform of t³?",
                options: [
                    "6/s⁴",
                    "3/s⁴",
                    "6/s³",
                    "24/s⁵"
                ],
                answer: "6/s⁴",
                explanation: "Since 3! = 6, L{t³} = 6/s⁴."
            },

            {
                q: "What is the Laplace Transform of e^(4t)?",
                options: [
                    "1/(s − 4)",
                    "1/(s + 4)",
                    "4/(s − 4)",
                    "s/(s − 4)"
                ],
                answer: "1/(s − 4)",
                explanation: "Using L{e^(at)} = 1/(s − a), substitute a = 4."
            },

            {
                q: "What is the Laplace Transform of sin(6t)?",
                options: [
                    "6/(s² + 36)",
                    "s/(s² + 36)",
                    "1/(s − 6)",
                    "36/(s² + 6)"
                ],
                answer: "6/(s² + 36)",
                explanation: "Using L{sin(at)} = a/(s² + a²), substitute a = 6."
            },

            {
                q: "What is the Laplace Transform of cos(5t)?",
                options: [
                    "s/(s² + 25)",
                    "5/(s² + 25)",
                    "1/(s − 5)",
                    "25/(s² + 5)"
                ],
                answer: "s/(s² + 25)",
                explanation: "Using L{cos(at)} = s/(s² + a²), substitute a = 5."
            },

            {
                q: "Which property allows the Laplace Transform of a sum to be found by transforming each term separately?",
                options: [
                    "Linearity",
                    "Continuity",
                    "Periodicity",
                    "Symmetry"
                ],
                answer: "Linearity",
                explanation: "The linearity property states that L{ag(t) + bh(t)} = aL{g(t)} + bL{h(t)}."
            },

            {
                q: "Before selecting a Laplace Transform formula, what should you do first?",
                options: [
                    "Identify the type of function",
                    "Differentiate the function",
                    "Integrate the function",
                    "Find the characteristic equation"
                ],
                answer: "Identify the type of function",
                explanation: "Recognizing whether the function is a constant, polynomial, exponential, sine, or cosine makes it easy to choose the correct transform."
            },

            {
                q: "Which statement best summarizes this lesson?",
                options: [
                    "Recognizing common functions and using standard transform formulas is the key to computing Laplace Transforms efficiently.",
                    "Every Laplace Transform must be evaluated from its defining integral.",
                    "Laplace Transforms only apply to trigonometric functions.",
                    "Only exponential functions have Laplace Transforms."
                ],
                answer: "Recognizing common functions and using standard transform formulas is the key to computing Laplace Transforms efficiently.",
                explanation: "Most Laplace Transform problems are solved by recognizing the function type and applying the appropriate standard formula."
            }

        ]
    }
    ,

    "calculus4-unit3-lesson3": {
        title: "Properties of Laplace Transforms",
        subtitle: "Learn the fundamental properties of Laplace Transforms that simplify solving differential equations and computing transforms of more complicated functions.",

        body: `

<h2>Introduction</h2>

<p>In the previous lesson, we learned several common Laplace Transform formulas.</p>

<p>While these formulas allow us to transform many simple functions, real-world problems often involve more complicated expressions.</p>

<p>Fortunately, Laplace Transforms satisfy several important mathematical properties that allow complex transforms to be found from simpler ones.</p>

<p>Rather than evaluating difficult integrals, we can apply these properties to obtain new transforms quickly and efficiently.</p>

<p>These properties are essential tools throughout engineering, physics, and applied mathematics.</p>

<hr>

<h2>Linearity Property</h2>

<p>The most frequently used property is <strong>linearity</strong>.</p>

<p>If</p>

<p><strong>f(t)=ag(t)+bh(t)</strong></p>

<p>then</p>

<p><strong>L{ag(t)+bh(t)}=aL{g(t)}+bL{h(t)}</strong></p>

<p>where <strong>a</strong> and <strong>b</strong> are constants.</p>

<p>This means each term can be transformed separately before combining the results.</p>

<hr>

<h2>Example 1</h2>

<p>Find the Laplace Transform of</p>

<p><strong>3t + 5</strong></p>

<p>Using linearity,</p>

<p><strong>L{3t+5}=3L{t}+5L{1}</strong></p>

<p>Substitute the known transforms.</p>

<p><strong>L{t}=1/s²</strong></p>

<p><strong>L{1}=1/s</strong></p>

<p>Therefore</p>

<p><strong>L{3t+5}=3/s²+5/s</strong></p>

<hr>

<h2>First Shifting Property</h2>

<p>Another important property involves exponential functions.</p>

<p>If</p>

<p><strong>L{f(t)}=F(s)</strong></p>

<p>then</p>

<p><strong>L{e<sup>at</sup>f(t)}=F(s−a)</strong></p>

<p>This property is called the <strong>First Shifting Property</strong>, or the <strong>Frequency Shifting Property</strong>.</p>

<p>Rather than computing a new transform from scratch, we simply replace every occurrence of <strong>s</strong> with <strong>s−a</strong>.</p>

<hr>

<h2>Example 2</h2>

<p>Suppose</p>

<p><strong>L{sin(2t)}=2/(s²+4)</strong></p>

<p>Find</p>

<p><strong>L{e<sup>3t</sup>sin(2t)}</strong></p>

<p>Replace every occurrence of <strong>s</strong> with <strong>s−3</strong>.</p>

<p>The result is</p>

<p><strong>2/((s−3)²+4)</strong></p>

<p>No integration is required.</p>

<hr>

<h2>Transform of t·f(t)</h2>

<p>Another useful property relates multiplication by <strong>t</strong> to differentiation in the s-domain.</p>

<p>If</p>

<p><strong>L{f(t)}=F(s)</strong></p>

<p>then</p>

<p><strong>L{tf(t)}=−dF(s)/ds</strong></p>

<p>This property allows us to generate new transforms by differentiating previously known transforms.</p>

<hr>

<h2>Example 3</h2>

<p>Suppose</p>

<p><strong>L{1}=1/s</strong></p>

<p>Then</p>

<p><strong>L{t}=−d/ds(1/s)</strong></p>

<p>Differentiate:</p>

<p><strong>−(−1/s²)=1/s²</strong></p>

<p>This agrees with the transform table learned in the previous lesson.</p>

<hr>
<h2>Higher Powers of t</h2>

<p>The differentiation property can be applied repeatedly to find the Laplace Transforms of higher powers of <strong>t</strong>.</p>

<p>If</p>

<p><strong>L{f(t)} = F(s)</strong></p>

<p>then</p>

<p><strong>L{t²f(t)} = d²F(s)/ds²</strong></p>

<p>More generally,</p>

<p><strong>L{tⁿf(t)} = (-1)ⁿ dⁿF(s)/dsⁿ</strong></p>

<p>This property provides an efficient way to generate transforms without evaluating complicated integrals.</p>

<hr>

<h2>Example 4</h2>

<p>Suppose</p>

<p><strong>L{e<sup>2t</sup>} = 1/(s − 2)</strong></p>

<p>Find</p>

<p><strong>L{te<sup>2t</sup>}</strong></p>

<p>Differentiate the transformed function with respect to <strong>s</strong>.</p>

<p><strong>d/ds [1/(s − 2)] = -1/(s − 2)²</strong></p>

<p>Apply the property:</p>

<p><strong>L{te<sup>2t</sup>} = -[-1/(s − 2)²]</strong></p>

<p><strong>L{te<sup>2t</sup>} = 1/(s − 2)²</strong></p>

<hr>

<h2>Differentiation in the Time Domain</h2>

<p>One of the most powerful Laplace Transform properties involves derivatives.</p>

<p>If</p>

<p><strong>L{f(t)} = F(s)</strong></p>

<p>then</p>

<p><strong>L{f'(t)} = sF(s) − f(0)</strong></p>

<p>This formula automatically incorporates the initial value of the function.</p>

<p>It is the key reason Laplace Transforms are so useful for solving initial value problems.</p>

<hr>

<h2>Example 5</h2>

<p>Suppose</p>

<p><strong>L{f(t)} = F(s)</strong></p>

<p>and</p>

<p><strong>f(0) = 4</strong></p>

<p>Then</p>

<p><strong>L{f'(t)} = sF(s) − 4</strong></p>

<p>Notice that the initial condition appears automatically in the transformed equation.</p>

<hr>

<h2>Why These Properties Matter</h2>

<p>Without these properties, many Laplace Transform problems would require evaluating difficult improper integrals.</p>

<p>Instead, we can:</p>

<ul>

<li>Break complicated functions into simpler parts.</li>

<li>Shift transforms using exponential functions.</li>

<li>Generate new transforms by differentiation.</li>

<li>Transform derivatives while automatically including initial conditions.</li>

</ul>

<p>These shortcuts make Laplace Transforms one of the most efficient methods for solving differential equations.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting that the First Shifting Property replaces every occurrence of <strong>s</strong> with <strong>s − a</strong>.</li>

<li>Missing the negative sign in the formula <strong>L{tf(t)} = -dF(s)/ds</strong>.</li>

<li>Applying the shifting property to the original function instead of its transform.</li>

<li>Forgetting to include the initial value when transforming derivatives.</li>

<li>Differentiating the transformed function incorrectly with respect to <strong>s</strong>.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>The linearity property allows each term of a sum to be transformed separately.</li>

<li>The First Shifting Property states that <strong>L{e<sup>at</sup>f(t)} = F(s − a)</strong>.</li>

<li>Multiplying a function by <strong>t</strong> corresponds to differentiating its transform with respect to <strong>s</strong>.</li>

<li>Higher powers of <strong>t</strong> correspond to higher-order derivatives of the transform.</li>

<li>The transform of a derivative automatically includes the initial value of the function.</li>

<li>These properties greatly simplify solving differential equations using Laplace Transforms.</li>

</ul>

`,
        questions: [

            {
                q: "What does the linearity property of the Laplace Transform allow you to do?",
                options: [
                    "Transform each term separately and then combine the results",
                    "Differentiate every function before transforming it",
                    "Transform only exponential functions",
                    "Convert algebraic equations into differential equations"
                ],
                answer: "Transform each term separately and then combine the results",
                explanation: "The linearity property states that L{af(t) + bg(t)} = aL{f(t)} + bL{g(t)}."
            },

            {
                q: "Using the linearity property, the Laplace Transform of 3t + 5 is:",
                options: [
                    "3/s² + 5/s",
                    "3/s + 5/s²",
                    "8/s²",
                    "3/(s − 5)"
                ],
                answer: "3/s² + 5/s",
                explanation: "Transform each term separately: L{3t} = 3/s² and L{5} = 5/s."
            },

            {
                q: "The First Shifting Property states that if L{f(t)} = F(s), then L{e^(at)f(t)} equals:",
                options: [
                    "F(s − a)",
                    "F(s + a)",
                    "e^(as)F(s)",
                    "aF(s)"
                ],
                answer: "F(s − a)",
                explanation: "The First Shifting Property replaces every occurrence of s with s − a."
            },

            {
                q: "When using the First Shifting Property, what is replaced?",
                options: [
                    "Every occurrence of s is replaced with s − a",
                    "Every occurrence of t is replaced with t − a",
                    "Every occurrence of s is replaced with s²",
                    "The function is differentiated first"
                ],
                answer: "Every occurrence of s is replaced with s − a",
                explanation: "Only the variable s in the transformed function is replaced."
            },

            {
                q: "If L{f(t)} = F(s), then L{tf(t)} is:",
                options: [
                    "-dF(s)/ds",
                    "dF(s)/ds",
                    "sF(s)",
                    "F(s)/s"
                ],
                answer: "-dF(s)/ds",
                explanation: "Multiplication by t in the time domain corresponds to the negative derivative with respect to s."
            },

            {
                q: "The formula L{tⁿf(t)} involves:",
                options: [
                    "The nth derivative of F(s)",
                    "The nth integral of F(s)",
                    "The square of F(s)",
                    "The derivative of f(t)"
                ],
                answer: "The nth derivative of F(s)",
                explanation: "L{tⁿf(t)} = (-1)ⁿ dⁿF(s)/dsⁿ."
            },

            {
                q: "If L{f(t)} = F(s), then the Laplace Transform of f'(t) is:",
                options: [
                    "sF(s) − f(0)",
                    "F(s)/s",
                    "s²F(s)",
                    "F(s) + f(0)"
                ],
                answer: "sF(s) − f(0)",
                explanation: "The Laplace Transform of a first derivative automatically includes the initial value."
            },

            {
                q: "Why is the derivative property especially useful for solving differential equations?",
                options: [
                    "It automatically incorporates initial conditions",
                    "It removes all constants",
                    "It eliminates algebra",
                    "It avoids using transform tables"
                ],
                answer: "It automatically incorporates initial conditions",
                explanation: "The derivative property includes the initial value directly in the transformed equation."
            },

            {
                q: "Which is a common mistake when applying the First Shifting Property?",
                options: [
                    "Forgetting to replace every occurrence of s with s − a",
                    "Using the linearity property",
                    "Differentiating the transformed function",
                    "Using transform tables"
                ],
                answer: "Forgetting to replace every occurrence of s with s − a",
                explanation: "Every occurrence of s must be replaced consistently throughout the transformed function."
            },

            {
                q: "Which statement best summarizes the purpose of Laplace Transform properties?",
                options: [
                    "They simplify difficult transforms and make solving differential equations more efficient.",
                    "They eliminate the need for algebra.",
                    "They replace all transform tables.",
                    "They only apply to exponential functions."
                ],
                answer: "They simplify difficult transforms and make solving differential equations more efficient.",
                explanation: "Properties such as linearity, shifting, and differentiation allow complicated transforms to be computed from simpler ones."
            }

        ]
    }


    ,

    "calculus4-unit3-lesson4": {
        title: "Inverse Laplace Transforms",
        subtitle: "Learn how to convert functions from the s-domain back into the time domain using Inverse Laplace Transforms.",

        body: `

<h2>Introduction</h2>

<p>So far, we have learned how to transform functions from the time domain into the s-domain using the Laplace Transform.</p>

<p>After solving an algebraic equation in the s-domain, we must convert the answer back into the original function of time.</p>

<p>This process is called the <strong>Inverse Laplace Transform</strong>.</p>

<p>The Inverse Laplace Transform reverses everything accomplished by the Laplace Transform.</p>

<p>Just as differentiation and integration are inverse operations, the Laplace Transform and Inverse Laplace Transform are inverse operations.</p>

<hr>

<h2>Notation</h2>

<p>If</p>

<p><strong>L{f(t)} = F(s)</strong></p>

<p>then</p>

<p><strong>L⁻¹{F(s)} = f(t)</strong></p>

<p>The symbol <strong>L⁻¹</strong> means "take the Inverse Laplace Transform."</p>

<p>Rather than producing a function of <strong>s</strong>, the result is once again a function of <strong>t</strong>.</p>

<hr>

<h2>How the Inverse Laplace Transform Works</h2>

<p>The basic idea is simple.</p>

<ol>

<li>Start with a function of <strong>s</strong>.</li>

<li>Recognize its form.</li>

<li>Locate the matching formula in an Inverse Laplace Transform table.</li>

<li>Write the corresponding function of <strong>t</strong>.</li>

</ol>

<p>Most inverse transforms are found by recognizing standard patterns rather than evaluating complicated integrals.</p>

<hr>

<h2>Common Inverse Laplace Transform Table</h2>

<table>

<tr>
<th>Function in s</th>
<th>Inverse Laplace Transform</th>
</tr>

<tr>
<td>1/s</td>
<td>1</td>
</tr>

<tr>
<td>1/s²</td>
<td>t</td>
</tr>

<tr>
<td>2/s³</td>
<td>t²</td>
</tr>

<tr>
<td>6/s⁴</td>
<td>t³</td>
</tr>

<tr>
<td>1/(s − a)</td>
<td>e<sup>at</sup></td>
</tr>

<tr>
<td>a/(s² + a²)</td>
<td>sin(at)</td>
</tr>

<tr>
<td>s/(s² + a²)</td>
<td>cos(at)</td>
</tr>

</table>

<p>Notice that this table is simply the reverse of the Laplace Transform table learned in the previous lesson.</p>

<hr>

<h2>Worked Example 1</h2>

<p>Find</p>

<p><strong>L⁻¹{1/s}</strong></p>

<p>Looking at the transform table,</p>

<p><strong>L{1} = 1/s</strong></p>

<p>Therefore</p>

<p><strong>L⁻¹{1/s} = 1</strong></p>

<hr>

<h2>Worked Example 2</h2>

<p>Find</p>

<p><strong>L⁻¹{1/(s − 5)}</strong></p>

<p>Recognize the exponential pattern.</p>

<p>Since</p>

<p><strong>L{e<sup>5t</sup>} = 1/(s − 5)</strong></p>

<p>the inverse transform is</p>

<p><strong>e<sup>5t</sup></strong></p>

<hr>

<h2>Worked Example 3</h2>

<p>Find</p>

<p><strong>L⁻¹{4/(s² + 16)}</strong></p>

<p>Compare with the standard formula</p>

<p><strong>a/(s² + a²)</strong></p>

<p>Here, <strong>a = 4</strong>.</p>

<p>Therefore</p>

<p><strong>L⁻¹{4/(s² + 16)} = sin(4t)</strong></p>

<hr>
<h2>Worked Example 4</h2>

<p>Find</p>

<p><strong>L⁻¹{s/(s² + 25)}</strong></p>

<p>Compare the expression with the standard cosine transform.</p>

<p>Since</p>

<p><strong>L{cos(5t)} = s/(s² + 25)</strong></p>

<p>the inverse transform is</p>

<p><strong>cos(5t)</strong></p>

<hr>

<h2>Worked Example 5</h2>

<p>Find</p>

<p><strong>L⁻¹{6/s⁴}</strong></p>

<p>Recall that</p>

<p><strong>L{t³} = 6/s⁴</strong></p>

<p>Therefore</p>

<p><strong>L⁻¹{6/s⁴} = t³</strong></p>

<hr>

<h2>Using Linearity with Inverse Laplace Transforms</h2>

<p>The Inverse Laplace Transform satisfies the same linearity property as the Laplace Transform.</p>

<p>If</p>

<p><strong>F(s) = aG(s) + bH(s)</strong></p>

<p>then</p>

<p><strong>L⁻¹{F(s)} = aL⁻¹{G(s)} + bL⁻¹{H(s)}</strong></p>

<p>This means we can find the inverse transform of each term separately and then combine the results.</p>

<hr>

<h2>Worked Example 6</h2>

<p>Find</p>

<p><strong>L⁻¹{3/s + 2/(s − 4)}</strong></p>

<p>Apply linearity.</p>

<p><strong>L⁻¹{3/s} = 3</strong></p>

<p><strong>L⁻¹{2/(s − 4)} = 2e<sup>4t</sup></strong></p>

<p>Therefore</p>

<p><strong>L⁻¹{3/s + 2/(s − 4)} = 3 + 2e<sup>4t</sup></strong></p>

<hr>

<h2>Recognizing Standard Forms</h2>

<p>When computing an inverse transform, begin by identifying the form of the expression.</p>

<p>Ask questions such as:</p>

<ul>

<li>Does it match a constant?</li>

<li>Is it a power of s?</li>

<li>Does it resemble an exponential transform?</li>

<li>Does it match a sine or cosine transform?</li>

</ul>

<p>Recognizing these patterns makes inverse transforms much faster and more accurate.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Confusing the Laplace Transform with the Inverse Laplace Transform.</li>

<li>Matching an expression to the wrong formula in the transform table.</li>

<li>Forgetting to use linearity when multiple terms are present.</li>

<li>Mixing the variables <strong>s</strong> and <strong>t</strong>.</li>

<li>Ignoring constant coefficients when taking inverse transforms.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>The Inverse Laplace Transform converts functions from the s-domain back into the time domain.</li>

<li>Most inverse transforms are found by recognizing standard forms in a transform table.</li>

<li>The notation <strong>L⁻¹{F(s)} = f(t)</strong> represents the Inverse Laplace Transform.</li>

<li>Linearity allows inverse transforms to be applied to each term separately.</li>

<li>Recognizing patterns is the fastest way to compute inverse transforms.</li>

<li>Inverse Laplace Transforms complete the process of solving differential equations using Laplace methods.</li>

</ul>

`,
        questions: [

            {
                q: "What is the purpose of the Inverse Laplace Transform?",
                options: [
                    "To convert a function from the s-domain back to the time domain",
                    "To differentiate a function",
                    "To integrate a function",
                    "To solve quadratic equations"
                ],
                answer: "To convert a function from the s-domain back to the time domain",
                explanation: "The Inverse Laplace Transform converts a transformed function F(s) back into its original function f(t)."
            },

            {
                q: "If L{f(t)} = F(s), then L⁻¹{F(s)} equals:",
                options: [
                    "f(t)",
                    "F(t)",
                    "s",
                    "0"
                ],
                answer: "f(t)",
                explanation: "The Inverse Laplace Transform reverses the Laplace Transform."
            },

            {
                q: "What is L⁻¹{1/s}?",
                options: [
                    "1",
                    "t",
                    "e^t",
                    "0"
                ],
                answer: "1",
                explanation: "Since L{1} = 1/s, the inverse transform is L⁻¹{1/s} = 1."
            },

            {
                q: "What is L⁻¹{1/(s − 5)}?",
                options: [
                    "e^(5t)",
                    "5e^t",
                    "t⁵",
                    "e^(-5t)"
                ],
                answer: "e^(5t)",
                explanation: "Using the exponential transform table, L{e^(at)} = 1/(s − a)."
            },

            {
                q: "What is L⁻¹{4/(s² + 16)}?",
                options: [
                    "sin(4t)",
                    "cos(4t)",
                    "4cos(t)",
                    "e^(4t)"
                ],
                answer: "sin(4t)",
                explanation: "The expression matches the standard sine transform with a = 4."
            },

            {
                q: "What is L⁻¹{s/(s² + 25)}?",
                options: [
                    "cos(5t)",
                    "sin(5t)",
                    "5cos(t)",
                    "e^(5t)"
                ],
                answer: "cos(5t)",
                explanation: "The expression matches the standard cosine transform where a = 5."
            },

            {
                q: "What is L⁻¹{6/s⁴}?",
                options: [
                    "t³",
                    "3t²",
                    "6t",
                    "t⁴"
                ],
                answer: "t³",
                explanation: "Since L{t³} = 6/s⁴, the inverse transform is t³."
            },

            {
                q: "Which property allows the inverse transform of a sum to be found by transforming each term separately?",
                options: [
                    "Linearity",
                    "Continuity",
                    "Differentiation",
                    "Integration"
                ],
                answer: "Linearity",
                explanation: "The Inverse Laplace Transform satisfies the same linearity property as the Laplace Transform."
            },

            {
                q: "When computing an Inverse Laplace Transform, what should you do first?",
                options: [
                    "Recognize the form of the expression",
                    "Differentiate the expression",
                    "Integrate the expression",
                    "Find the characteristic equation"
                ],
                answer: "Recognize the form of the expression",
                explanation: "Identifying the standard form makes it possible to match the expression to a transform table."
            },

            {
                q: "Which statement best summarizes the Inverse Laplace Transform?",
                options: [
                    "It converts functions in the s-domain back into functions of time using standard transform tables.",
                    "It converts algebraic equations into derivatives.",
                    "It only works for exponential functions.",
                    "It eliminates the need for Laplace Transforms."
                ],
                answer: "It converts functions in the s-domain back into functions of time using standard transform tables.",
                explanation: "The Inverse Laplace Transform completes the solution process by returning from the s-domain to the time domain."
            }

        ]
    }

    ,

    "calculus4-unit3-lesson5": {
        title: "Solving Differential Equations Using Laplace Transforms",
        subtitle: "Apply Laplace Transforms to solve initial value problems involving first- and second-order differential equations.",

        body: `

<h2>Introduction</h2>

<p>One of the greatest advantages of Laplace Transforms is their ability to solve differential equations.</p>

<p>Instead of solving differential equations directly, we transform them into algebraic equations.</p>

<p>Algebraic equations are usually much easier to solve.</p>

<p>After solving the equation in the <strong>s-domain</strong>, we use the Inverse Laplace Transform to recover the solution in the <strong>time domain</strong>.</p>

<p>This process is especially useful when initial conditions are known.</p>

<hr>

<h2>The General Procedure</h2>

<p>Solving a differential equation using Laplace Transforms usually follows the same sequence of steps.</p>

<ol>

<li>Take the Laplace Transform of every term in the differential equation.</li>

<li>Replace derivatives using the Laplace derivative formulas.</li>

<li>Substitute the initial conditions.</li>

<li>Solve the resulting algebraic equation for <strong>F(s)</strong>.</li>

<li>Apply the Inverse Laplace Transform to obtain <strong>f(t)</strong>.</li>

</ol>

<p>Each step systematically converts a calculus problem into an algebra problem.</p>

<hr>

<h2>Derivative Transform Formulas</h2>

<p>The following formulas are used repeatedly.</p>

<p><strong>L{f'(t)} = sF(s) − f(0)</strong></p>

<p><strong>L{f''(t)} = s²F(s) − sf(0) − f'(0)</strong></p>

<p>Notice that each derivative introduces the required initial conditions automatically.</p>

<hr>

<h2>Example 1</h2>

<p>Solve</p>

<p><strong>y' + y = 0</strong></p>

<p>with</p>

<p><strong>y(0)=2</strong></p>

<hr>

<h2>Step 1: Take the Laplace Transform</h2>

<p>Apply the Laplace Transform to each side.</p>

<p><strong>L{y'} + L{y} = 0</strong></p>

<p>Replace each transform.</p>

<p><strong>(sY(s) − 2) + Y(s) = 0</strong></p>

<hr>

<h2>Step 2: Solve for Y(s)</h2>

<p>Combine like terms.</p>

<p><strong>(s + 1)Y(s) = 2</strong></p>

<p>Therefore</p>

<p><strong>Y(s)=2/(s+1)</strong></p>

<hr>

<h2>Step 3: Take the Inverse Laplace Transform</h2>

<p>Recognize the standard exponential form.</p>

<p><strong>L⁻¹{2/(s+1)}=2e<sup>−t</sup></strong></p>

<p>Therefore, the solution is</p>

<p><strong>y(t)=2e<sup>−t</sup></strong></p>

<hr>

<h2>Why This Method Works</h2>

<p>The differential equation contained a derivative.</p>

<p>After applying the Laplace Transform, the derivative became an algebraic expression involving <strong>s</strong>.</p>

<p>Instead of solving a differential equation directly, we solved a simple algebra equation.</p>

<p>This is the major advantage of Laplace Transform methods.</p>

<hr>
<h2>Example 2: A Second-Order Differential Equation</h2>

<p>Solve</p>

<p><strong>y'' + y = 0</strong></p>

<p>with the initial conditions</p>

<p><strong>y(0)=0</strong></p>

<p><strong>y'(0)=1</strong></p>

<hr>

<h2>Step 1: Apply the Laplace Transform</h2>

<p>Transform each term of the differential equation.</p>

<p><strong>L{y''} + L{y} = 0</strong></p>

<p>Use the second-derivative formula.</p>

<p><strong>(s²Y(s) − sy(0) − y'(0)) + Y(s) = 0</strong></p>

<p>Substitute the initial conditions.</p>

<p><strong>(s²Y(s) − 1) + Y(s) = 0</strong></p>

<hr>

<h2>Step 2: Solve for Y(s)</h2>

<p>Combine like terms.</p>

<p><strong>(s² + 1)Y(s) = 1</strong></p>

<p>Divide both sides by <strong>s² + 1</strong>.</p>

<p><strong>Y(s) = 1/(s² + 1)</strong></p>

<hr>

<h2>Step 3: Find the Inverse Laplace Transform</h2>

<p>Recognize the standard transform.</p>

<p><strong>L{sin(t)} = 1/(s² + 1)</strong></p>

<p>Therefore</p>

<p><strong>y(t) = sin(t)</strong></p>

<hr>

<h2>Checking the Solution</h2>

<p>Always verify your answer whenever possible.</p>

<p>Differentiate the solution and substitute it back into the original differential equation.</p>

<p>Also check that the initial conditions are satisfied.</p>

<p>For the previous example:</p>

<ul>

<li><strong>y(0) = sin(0) = 0</strong></li>

<li><strong>y'(t) = cos(t)</strong></li>

<li><strong>y'(0) = cos(0) = 1</strong></li>

</ul>

<p>Both initial conditions are satisfied, confirming that the solution is correct.</p>

<hr>

<h2>Applications</h2>

<p>Laplace Transform methods are widely used because they simplify many real-world problems.</p>

<p>Common applications include:</p>

<ul>

<li>Electrical circuit analysis involving resistors, inductors, and capacitors.</li>

<li>Mechanical systems with springs and dampers.</li>

<li>Control systems used in robotics and automation.</li>

<li>Signal processing and communications.</li>

<li>Vibration analysis in engineering.</li>

</ul>

<p>In each case, the governing equations are differential equations that become much easier to solve after applying Laplace Transforms.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to include the initial conditions when transforming derivatives.</li>

<li>Using the wrong derivative transform formula.</li>

<li>Making algebra errors while solving for <strong>Y(s)</strong>.</li>

<li>Choosing the wrong Inverse Laplace Transform from the transform table.</li>

<li>Failing to verify the final solution satisfies the original differential equation and initial conditions.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>Laplace Transforms convert differential equations into algebraic equations.</li>

<li>Derivative transform formulas automatically include initial conditions.</li>

<li>After solving for <strong>Y(s)</strong>, the Inverse Laplace Transform returns the solution in the time domain.</li>

<li>This method is especially useful for solving initial value problems.</li>

<li>Laplace Transform techniques are widely used throughout science and engineering.</li>

</ul>

`,
        questions: [

            {
                q: "What is the primary advantage of using Laplace Transforms to solve differential equations?",
                options: [
                    "They convert differential equations into algebraic equations.",
                    "They eliminate all initial conditions.",
                    "They avoid using derivatives.",
                    "They only work for first-order equations."
                ],
                answer: "They convert differential equations into algebraic equations.",
                explanation: "The Laplace Transform changes differential equations into algebraic equations, which are generally much easier to solve."
            },

            {
                q: "What is the first step when solving a differential equation using Laplace Transforms?",
                options: [
                    "Take the Laplace Transform of every term.",
                    "Take the Inverse Laplace Transform.",
                    "Differentiate both sides again.",
                    "Factor the equation."
                ],
                answer: "Take the Laplace Transform of every term.",
                explanation: "The solution process begins by transforming every term into the s-domain."
            },

            {
                q: "After applying the Laplace Transform to a differential equation, what should be done next?",
                options: [
                    "Substitute the derivative formulas and initial conditions.",
                    "Immediately apply the Inverse Laplace Transform.",
                    "Differentiate with respect to s.",
                    "Integrate both sides."
                ],
                answer: "Substitute the derivative formulas and initial conditions.",
                explanation: "The derivative transform formulas automatically include the initial conditions."
            },

            {
                q: "The Laplace Transform of y'(t) is:",
                options: [
                    "sY(s) − y(0)",
                    "s²Y(s)",
                    "Y(s)/s",
                    "Y(s) + y(0)"
                ],
                answer: "sY(s) − y(0)",
                explanation: "This is the standard Laplace Transform formula for the first derivative."
            },

            {
                q: "The Laplace Transform of y''(t) is:",
                options: [
                    "s²Y(s) − sy(0) − y'(0)",
                    "sY(s) − y(0)",
                    "s²Y(s)",
                    "Y(s)/(s²)"
                ],
                answer: "s²Y(s) − sy(0) − y'(0)",
                explanation: "The transform of the second derivative includes both initial conditions."
            },

            {
                q: "After solving for Y(s), what is the next step?",
                options: [
                    "Apply the Inverse Laplace Transform.",
                    "Differentiate Y(s).",
                    "Integrate Y(s).",
                    "Multiply by s."
                ],
                answer: "Apply the Inverse Laplace Transform.",
                explanation: "The Inverse Laplace Transform converts the solution back into the time domain."
            },

            {
                q: "Why are initial conditions important in Laplace Transform methods?",
                options: [
                    "They become part of the transformed algebraic equation.",
                    "They are ignored after transformation.",
                    "They are only used after taking the inverse transform.",
                    "They determine whether a transform exists."
                ],
                answer: "They become part of the transformed algebraic equation.",
                explanation: "The derivative transform formulas automatically include the initial conditions."
            },

            {
                q: "Which of the following is a common application of Laplace Transforms?",
                options: [
                    "Electrical circuit analysis",
                    "Balancing chemical equations",
                    "Finding prime numbers",
                    "Sorting data"
                ],
                answer: "Electrical circuit analysis",
                explanation: "Laplace Transforms are widely used to analyze electrical circuits and many other engineering systems."
            },

            {
                q: "After obtaining the final solution, what should always be done?",
                options: [
                    "Verify that the solution satisfies the differential equation and the initial conditions.",
                    "Differentiate the equation again.",
                    "Apply another Laplace Transform.",
                    "Ignore the initial conditions."
                ],
                answer: "Verify that the solution satisfies the differential equation and the initial conditions.",
                explanation: "Checking the solution helps ensure that no algebra or transform errors were made."
            },

            {
                q: "Which statement best summarizes the Laplace Transform method for solving differential equations?",
                options: [
                    "Transform the equation, solve for Y(s), then apply the Inverse Laplace Transform.",
                    "Differentiate repeatedly until the equation disappears.",
                    "Always solve by separation of variables first.",
                    "Take the Inverse Laplace Transform before solving the equation."
                ],
                answer: "Transform the equation, solve for Y(s), then apply the Inverse Laplace Transform.",
                explanation: "This is the standard sequence used to solve initial value problems with Laplace Transforms."
            }

        ]
    }

    ,

    "calculus4-unit3-lesson6": {
        title: "Applications of Laplace Transforms",
        subtitle: "Explore how Laplace Transforms are used to solve practical engineering, physics, and control system problems.",

        body: `

<h2>Introduction</h2>

<p>Laplace Transforms are more than just a mathematical technique—they are one of the most important tools used in engineering and applied science.</p>

<p>Many real-world systems are described by differential equations. Rather than solving these equations directly, engineers often use Laplace Transforms to simplify the problem.</p>

<p>After transforming the equations into the <strong>s-domain</strong>, solving becomes an algebra problem instead of a calculus problem.</p>

<p>This approach saves time and allows complex systems to be analyzed efficiently.</p>

<hr>

<h2>Electrical Circuits</h2>

<p>One of the earliest applications of Laplace Transforms was in electrical engineering.</p>

<p>Electrical circuits containing resistors, inductors, and capacitors are described by differential equations.</p>

<p>Examples include:</p>

<ul>

<li>RC (Resistor-Capacitor) circuits</li>

<li>RL (Resistor-Inductor) circuits</li>

<li>RLC (Resistor-Inductor-Capacitor) circuits</li>

</ul>

<p>Laplace Transforms make it possible to determine voltages and currents as functions of time.</p>

<hr>

<h2>Example: RC Circuit</h2>

<p>Suppose an RC circuit is modeled by</p>

<p><strong>RC(dV/dt)+V=E</strong></p>

<p>where:</p>

<ul>

<li><strong>V(t)</strong> is the capacitor voltage.</li>

<li><strong>E</strong> is the input voltage.</li>

<li><strong>R</strong> is the resistance.</li>

<li><strong>C</strong> is the capacitance.</li>

</ul>

<p>Applying the Laplace Transform converts the differential equation into an algebraic equation involving <strong>V(s)</strong>.</p>

<p>After solving for <strong>V(s)</strong>, the Inverse Laplace Transform gives the voltage as a function of time.</p>

<hr>

<h2>Mechanical Systems</h2>

<p>Mechanical systems involving springs, masses, and dampers are also modeled using differential equations.</p>

<p>Examples include:</p>

<ul>

<li>Vehicle suspension systems</li>

<li>Elevators</li>

<li>Industrial machinery</li>

<li>Building vibration analysis</li>

</ul>

<p>Laplace Transforms simplify the analysis of these systems by converting their governing equations into algebraic equations.</p>

<hr>

<h2>Spring-Mass-Damper System</h2>

<p>A common model is</p>

<p><strong>m x'' + c x' + k x = F(t)</strong></p>

<p>where:</p>

<ul>

<li><strong>m</strong> is the mass.</li>

<li><strong>c</strong> is the damping coefficient.</li>

<li><strong>k</strong> is the spring constant.</li>

<li><strong>F(t)</strong> is the applied force.</li>

<li><strong>x(t)</strong> is the displacement.</li>

</ul>

<p>Applying the Laplace Transform converts this second-order differential equation into an algebraic equation that is much easier to solve.</p>

<hr>

<h2>Control Systems</h2>

<p>Modern control systems rely heavily on Laplace Transforms.</p>

<p>Examples include:</p>

<ul>

<li>Aircraft autopilots</li>

<li>Industrial automation</li>

<li>Robotic arms</li>

<li>Manufacturing equipment</li>

<li>Temperature control systems</li>

</ul>

<p>Engineers analyze the behavior and stability of these systems using transfer functions expressed in the s-domain.</p>

<hr>
<h2>Signal Processing</h2>

<p>Laplace Transforms are widely used in signal processing.</p>

<p>A signal may represent sound, radio waves, electrical measurements, or sensor readings.</p>

<p>Many signals change continuously over time and can be modeled using differential equations.</p>

<p>Laplace Transforms help engineers analyze how systems respond to different input signals.</p>

<p>For example, they can determine how an audio amplifier responds to music or how a communication system processes transmitted signals.</p>

<hr>

<h2>Population and Biological Models</h2>

<p>Differential equations also appear in biology and environmental science.</p>

<p>Examples include:</p>

<ul>

<li>Population growth and decline.</li>

<li>Spread of infectious diseases.</li>

<li>Drug concentration in the bloodstream.</li>

<li>Predator-prey interactions.</li>

</ul>

<p>When these models include initial conditions, Laplace Transform methods can be used to determine how the system changes over time.</p>

<hr>

<h2>Advantages of Laplace Transforms</h2>

<p>Laplace Transforms offer several important advantages over directly solving differential equations.</p>

<ul>

<li>They convert differential equations into algebraic equations.</li>

<li>Initial conditions are incorporated automatically.</li>

<li>Complex forcing functions can often be handled more easily.</li>

<li>Many engineering systems can be analyzed using a common set of techniques.</li>

<li>Standard transform tables reduce lengthy calculations.</li>

</ul>

<p>These advantages explain why Laplace Transforms remain an essential topic in engineering mathematics.</p>

<hr>

<h2>Worked Application Example</h2>

<p>An engineer models the motion of a spring using a differential equation.</p>

<p>After applying the Laplace Transform and substituting the initial conditions, the engineer obtains</p>

<p><strong>X(s)=1/(s²+9)</strong></p>

<p>Using the Inverse Laplace Transform table,</p>

<p><strong>L⁻¹{1/(s²+9)}=(1/3)sin(3t)</strong></p>

<p>The displacement of the spring is therefore</p>

<p><strong>x(t)=(1/3)sin(3t)</strong></p>

<p>This illustrates how a physical system can be analyzed by transforming the governing differential equation into an algebraic equation and then returning to the time domain.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting that Laplace Transforms require appropriate initial conditions for initial value problems.</li>

<li>Choosing the wrong transform from the transform table.</li>

<li>Making algebra errors while solving for the transformed function.</li>

<li>Applying the Inverse Laplace Transform incorrectly.</li>

<li>Failing to interpret the final solution in the context of the physical problem.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>Laplace Transforms have many practical engineering and scientific applications.</li>

<li>Electrical circuits, mechanical systems, and control systems are commonly analyzed using Laplace methods.</li>

<li>Signal processing and biological models also benefit from Laplace Transform techniques.</li>

<li>Transform methods simplify difficult differential equations into manageable algebraic equations.</li>

<li>After solving in the s-domain, the Inverse Laplace Transform produces the final solution in the time domain.</li>

<li>Laplace Transforms are among the most powerful mathematical tools used in engineering and applied science.</li>

</ul>

`,
        questions: [

            {
                q: "Why are Laplace Transforms widely used in engineering?",
                options: [
                    "They convert differential equations into algebraic equations.",
                    "They eliminate the need for mathematics.",
                    "They only work with simple equations.",
                    "They replace numerical methods."
                ],
                answer: "They convert differential equations into algebraic equations.",
                explanation: "Laplace Transforms simplify many engineering problems by converting differential equations into algebraic equations."
            },

            {
                q: "Which type of electrical circuit is commonly analyzed using Laplace Transforms?",
                options: [
                    "RLC circuits",
                    "Digital logic gates",
                    "Binary adders",
                    "Microprocessors"
                ],
                answer: "RLC circuits",
                explanation: "RC, RL, and RLC circuits are classic applications of Laplace Transforms."
            },

            {
                q: "In the equation RC(dV/dt) + V = E, what does V(t) represent?",
                options: [
                    "The capacitor voltage",
                    "The resistance",
                    "The current",
                    "The power"
                ],
                answer: "The capacitor voltage",
                explanation: "V(t) represents the voltage across the capacitor as a function of time."
            },

            {
                q: "A spring-mass-damper system is commonly modeled by which differential equation?",
                options: [
                    "mx'' + cx' + kx = F(t)",
                    "x + y = z",
                    "y' = ky",
                    "F = ma²"
                ],
                answer: "mx'' + cx' + kx = F(t)",
                explanation: "This second-order differential equation models many mechanical vibration systems."
            },

            {
                q: "Which field makes extensive use of Laplace Transforms to analyze system stability?",
                options: [
                    "Control systems",
                    "Graphic design",
                    "Accounting",
                    "Architecture"
                ],
                answer: "Control systems",
                explanation: "Control engineers use Laplace Transforms and transfer functions to study system behavior and stability."
            },

            {
                q: "Which of the following is an application of Laplace Transforms in signal processing?",
                options: [
                    "Analyzing how systems respond to input signals",
                    "Compressing image files",
                    "Drawing engineering diagrams",
                    "Sorting databases"
                ],
                answer: "Analyzing how systems respond to input signals",
                explanation: "Laplace Transforms help determine how electrical and communication systems respond to signals."
            },

            {
                q: "Which biological application can involve Laplace Transforms?",
                options: [
                    "Modeling drug concentration in the bloodstream",
                    "Drawing DNA structures",
                    "Counting chromosomes",
                    "Classifying plants"
                ],
                answer: "Modeling drug concentration in the bloodstream",
                explanation: "Drug concentration over time is often modeled using differential equations that can be solved with Laplace Transforms."
            },

            {
                q: "One major advantage of Laplace Transforms is that they:",
                options: [
                    "Automatically incorporate initial conditions",
                    "Eliminate algebra",
                    "Always produce polynomial solutions",
                    "Require no transform tables"
                ],
                answer: "Automatically incorporate initial conditions",
                explanation: "The Laplace Transform formulas for derivatives naturally include initial conditions."
            },

            {
                q: "After solving for X(s) or Y(s), what is the next step?",
                options: [
                    "Apply the Inverse Laplace Transform",
                    "Differentiate with respect to s",
                    "Apply another Laplace Transform",
                    "Integrate both sides"
                ],
                answer: "Apply the Inverse Laplace Transform",
                explanation: "The Inverse Laplace Transform converts the solution back into the time domain."
            },

            {
                q: "Which statement best summarizes the importance of Laplace Transforms?",
                options: [
                    "They provide an efficient method for solving many real-world differential equation problems.",
                    "They replace calculus completely.",
                    "They only apply to electrical engineering.",
                    "They are only useful for first-order equations."
                ],
                answer: "They provide an efficient method for solving many real-world differential equation problems.",
                explanation: "Laplace Transforms are widely used across engineering, physics, biology, and applied mathematics because they simplify the solution of differential equations."
            }

        ]
    }

    ,

    "calculus4-unit3-review": {
        title: "Unit 3 Review: Laplace Transforms",
        subtitle: "Review the major concepts, formulas, and applications of Laplace Transforms before taking the Unit 3 Test.",

        body: `

<h2>Unit Overview</h2>

<p>In this unit, you learned how Laplace Transforms convert differential equations into algebraic equations, making many engineering and scientific problems much easier to solve.</p>

<p>You also learned how to compute Laplace Transforms, apply their properties, find Inverse Laplace Transforms, solve initial value problems, and recognize practical applications.</p>

<hr>

<h2>Key Concepts to Remember</h2>

<h3>1. Laplace Transform Definition</h3>

<p>The Laplace Transform converts a function of time into a function of <strong>s</strong>.</p>

<p><strong>L{f(t)} = F(s)</strong></p>

<p>This transformation changes differential equations into algebraic equations.</p>

<hr>

<h3>2. Common Laplace Transforms</h3>

<table>

<tr>
<th>Function</th>
<th>Laplace Transform</th>
</tr>

<tr>
<td>1</td>
<td>1/s</td>
</tr>

<tr>
<td>t</td>
<td>1/s²</td>
</tr>

<tr>
<td>t²</td>
<td>2/s³</td>
</tr>

<tr>
<td>e<sup>at</sup></td>
<td>1/(s−a)</td>
</tr>

<tr>
<td>sin(at)</td>
<td>a/(s²+a²)</td>
</tr>

<tr>
<td>cos(at)</td>
<td>s/(s²+a²)</td>
</tr>

</table>

<hr>

<h3>3. Important Properties</h3>

<ul>

<li>Linearity</li>

<li>First Shifting Property</li>

<li>Transform of tf(t)</li>

<li>Transform of higher powers of t</li>

<li>Derivative Transform Formulas</li>

</ul>

<p>These properties allow complicated transforms to be computed from simpler ones.</p>

<hr>

<h3>4. Inverse Laplace Transform</h3>

<p>The Inverse Laplace Transform converts a function in the <strong>s-domain</strong> back into the time domain.</p>

<p><strong>L⁻¹{F(s)} = f(t)</strong></p>

<p>Most inverse transforms are found by matching expressions with standard transform tables.</p>

<hr>

<h3>5. Solving Differential Equations</h3>

<p>The standard procedure is:</p>

<ol>

<li>Take the Laplace Transform.</li>

<li>Replace derivatives using transform formulas.</li>

<li>Substitute initial conditions.</li>

<li>Solve for the transformed function.</li>

<li>Apply the Inverse Laplace Transform.</li>

</ol>

<hr>

<h3>6. Applications</h3>

<p>Laplace Transforms are used in:</p>

<ul>

<li>Electrical circuits</li>

<li>Mechanical systems</li>

<li>Control systems</li>

<li>Signal processing</li>

<li>Population models</li>

<li>Biological systems</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the wrong transform formula.</li>

<li>Forgetting initial conditions.</li>

<li>Making algebra mistakes while solving for F(s).</li>

<li>Using the wrong Inverse Laplace Transform.</li>

<li>Confusing the variables s and t.</li>

<li>Forgetting to verify the final solution.</li>

</ul>

<hr>

<h2>Unit Summary</h2>

<p>Laplace Transforms provide one of the most powerful techniques for solving differential equations with initial conditions.</p>

<p>By transforming problems into the s-domain, solving algebraically, and returning to the time domain, engineers and scientists can efficiently analyze many practical systems.</p>

`,
        questions: [

            {
                q: "What is the primary purpose of the Laplace Transform?",
                options: [
                    "Convert differential equations into algebraic equations",
                    "Differentiate exponential functions",
                    "Integrate trigonometric functions",
                    "Solve quadratic equations"
                ],
                answer: "Convert differential equations into algebraic equations",
                explanation: "The Laplace Transform converts differential equations into algebraic equations that are easier to solve."
            },

            {
                q: "The Laplace Transform converts functions from which domain?",
                options: [
                    "The time domain",
                    "The frequency domain",
                    "The complex plane",
                    "The Cartesian plane"
                ],
                answer: "The time domain",
                explanation: "Functions of time are transformed into functions of the variable s."
            },

            {
                q: "What is the Laplace Transform of 1?",
                options: [
                    "1/s",
                    "1/s²",
                    "s",
                    "e^s"
                ],
                answer: "1/s",
                explanation: "This is one of the fundamental Laplace Transform formulas."
            },

            {
                q: "What is the Laplace Transform of e^(at)?",
                options: [
                    "1/(s−a)",
                    "1/(s+a)",
                    "a/(s²+a²)",
                    "s/(s²+a²)"
                ],
                answer: "1/(s−a)",
                explanation: "This is the standard exponential transform."
            },

            {
                q: "Which property allows transforms of sums to be computed term by term?",
                options: [
                    "Linearity",
                    "Chain Rule",
                    "Integration by Parts",
                    "Product Rule"
                ],
                answer: "Linearity",
                explanation: "The linearity property states that the transform of a linear combination equals the same combination of the individual transforms."
            },

            {
                q: "What operation converts F(s) back into f(t)?",
                options: [
                    "Inverse Laplace Transform",
                    "Differentiation",
                    "Integration",
                    "Partial Fractions"
                ],
                answer: "Inverse Laplace Transform",
                explanation: "The Inverse Laplace Transform returns the solution to the time domain."
            },

            {
                q: "Why are initial conditions important when using Laplace Transforms?",
                options: [
                    "They become part of the transformed equation.",
                    "They are ignored.",
                    "They determine whether the transform exists.",
                    "They are only used after solving."
                ],
                answer: "They become part of the transformed equation.",
                explanation: "Derivative transform formulas automatically include the initial conditions."
            },

            {
                q: "Which field commonly uses Laplace Transforms?",
                options: [
                    "Control systems",
                    "Creative writing",
                    "Graphic illustration",
                    "Photography"
                ],
                answer: "Control systems",
                explanation: "Control engineering relies heavily on Laplace Transforms and transfer functions."
            },

            {
                q: "After solving for F(s), what is the next step?",
                options: [
                    "Take the Inverse Laplace Transform",
                    "Differentiate F(s)",
                    "Take another Laplace Transform",
                    "Multiply by s"
                ],
                answer: "Take the Inverse Laplace Transform",
                explanation: "This returns the solution to the original time domain."
            },

            {
                q: "Which statement best summarizes Unit 3?",
                options: [
                    "Laplace Transforms simplify solving differential equations by converting them into algebraic equations.",
                    "Laplace Transforms eliminate the need for calculus.",
                    "Laplace Transforms only work for exponential functions.",
                    "Laplace Transforms replace differential equations completely."
                ],
                answer: "Laplace Transforms simplify solving differential equations by converting them into algebraic equations.",
                explanation: "This is the central idea of the entire unit."
            }

        ]
    }

    ,

    "calculus4-unit3-test": {
        title: "Unit 3 Test: Laplace Transforms",
        subtitle: "Test your understanding of Laplace Transforms, their properties, inverse transforms, differential equations, and applications.",

        questions: [

            {
                q: "What is the primary purpose of the Laplace Transform?",
                options: [
                    "Convert differential equations into algebraic equations",
                    "Differentiate exponential functions",
                    "Integrate polynomial functions",
                    "Factor algebraic equations"
                ],
                answer: "Convert differential equations into algebraic equations",
                explanation: "The Laplace Transform simplifies solving differential equations by converting them into algebraic equations."
            },

            {
                q: "The Laplace Transform converts functions from the _____ domain to the _____ domain.",
                options: [
                    "time, s",
                    "s, time",
                    "frequency, time",
                    "complex, Cartesian"
                ],
                answer: "time, s",
                explanation: "Functions of time are transformed into functions of the variable s."
            },

            {
                q: "What is the Laplace Transform of 1?",
                options: [
                    "1/s",
                    "1/s²",
                    "s",
                    "0"
                ],
                answer: "1/s",
                explanation: "This is one of the fundamental Laplace Transform formulas."
            },

            {
                q: "What is the Laplace Transform of t?",
                options: [
                    "1/s²",
                    "1/s",
                    "2/s³",
                    "s²"
                ],
                answer: "1/s²",
                explanation: "L{t} = 1/s²."
            },

            {
                q: "The Laplace Transform of e^(at) is:",
                options: [
                    "1/(s−a)",
                    "1/(s+a)",
                    "a/(s²+a²)",
                    "s/(s²+a²)"
                ],
                answer: "1/(s−a)",
                explanation: "This is the standard exponential transform."
            },

            {
                q: "The Laplace Transform of sin(at) is:",
                options: [
                    "a/(s²+a²)",
                    "s/(s²+a²)",
                    "1/(s−a)",
                    "a/s²"
                ],
                answer: "a/(s²+a²)",
                explanation: "This is the standard sine transform."
            },

            {
                q: "The Laplace Transform of cos(at) is:",
                options: [
                    "s/(s²+a²)",
                    "a/(s²+a²)",
                    "1/(s−a)",
                    "1/s²"
                ],
                answer: "s/(s²+a²)",
                explanation: "This is the standard cosine transform."
            },

            {
                q: "Which property allows transforms of sums to be found term by term?",
                options: [
                    "Linearity",
                    "Chain Rule",
                    "Product Rule",
                    "Power Rule"
                ],
                answer: "Linearity",
                explanation: "The linearity property applies the transform to each term separately."
            },

            {
                q: "The First Shifting Property replaces s with:",
                options: [
                    "s−a",
                    "s+a",
                    "as",
                    "s²"
                ],
                answer: "s−a",
                explanation: "Every occurrence of s is replaced with s−a."
            },

            {
                q: "If L{f(t)} = F(s), then L{tf(t)} equals:",
                options: [
                    "-dF(s)/ds",
                    "dF(s)/ds",
                    "sF(s)",
                    "F(s)/s"
                ],
                answer: "-dF(s)/ds",
                explanation: "Multiplication by t corresponds to differentiating the transform with a negative sign."
            },

            {
                q: "The Inverse Laplace Transform converts:",
                options: [
                    "Functions in the s-domain back into functions of time",
                    "Time into frequency",
                    "Algebra into geometry",
                    "Integrals into derivatives"
                ],
                answer: "Functions in the s-domain back into functions of time",
                explanation: "The Inverse Laplace Transform reverses the Laplace Transform."
            },

            {
                q: "What is L⁻¹{1/s}?",
                options: [
                    "1",
                    "t",
                    "e^t",
                    "0"
                ],
                answer: "1",
                explanation: "Since L{1}=1/s, the inverse is 1."
            },

            {
                q: "What is L⁻¹{1/(s−3)}?",
                options: [
                    "e^(3t)",
                    "3e^t",
                    "t³",
                    "e^(-3t)"
                ],
                answer: "e^(3t)",
                explanation: "This follows directly from the exponential transform."
            },

            {
                q: "What is L⁻¹{s/(s²+9)}?",
                options: [
                    "cos(3t)",
                    "sin(3t)",
                    "e^(3t)",
                    "3sin(t)"
                ],
                answer: "cos(3t)",
                explanation: "This matches the standard cosine transform with a=3."
            },

            {
                q: "What is L⁻¹{3/(s²+9)}?",
                options: [
                    "sin(3t)",
                    "cos(3t)",
                    "3cos(t)",
                    "e^(3t)"
                ],
                answer: "sin(3t)",
                explanation: "This matches the standard sine transform."
            },

            {
                q: "The Laplace Transform of y'(t) is:",
                options: [
                    "sY(s)-y(0)",
                    "s²Y(s)",
                    "Y(s)/s",
                    "Y(s)+y(0)"
                ],
                answer: "sY(s)-y(0)",
                explanation: "This is the standard first-derivative transform."
            },

            {
                q: "The Laplace Transform of y''(t) is:",
                options: [
                    "s²Y(s)-sy(0)-y'(0)",
                    "sY(s)-y(0)",
                    "Y(s)",
                    "s²Y(s)"
                ],
                answer: "s²Y(s)-sy(0)-y'(0)",
                explanation: "The second derivative includes both initial conditions."
            },

            {
                q: "After solving for Y(s), the next step is to:",
                options: [
                    "Apply the Inverse Laplace Transform",
                    "Differentiate Y(s)",
                    "Take another Laplace Transform",
                    "Integrate Y(s)"
                ],
                answer: "Apply the Inverse Laplace Transform",
                explanation: "This converts the solution back into the time domain."
            },

            {
                q: "Which engineering field heavily relies on Laplace Transforms?",
                options: [
                    "Control systems",
                    "Civil drafting",
                    "Architecture",
                    "Accounting"
                ],
                answer: "Control systems",
                explanation: "Transfer functions and system stability are analyzed using Laplace Transforms."
            },

            {
                q: "Which electrical circuits are commonly analyzed using Laplace Transforms?",
                options: [
                    "RC, RL, and RLC circuits",
                    "Logic gate circuits only",
                    "Digital processors only",
                    "Computer memory circuits only"
                ],
                answer: "RC, RL, and RLC circuits",
                explanation: "These circuits are modeled by differential equations."
            },

            {
                q: "Laplace Transforms are useful for analyzing:",
                options: [
                    "Mechanical spring-mass-damper systems",
                    "Painting techniques",
                    "Financial bookkeeping",
                    "Weather maps only"
                ],
                answer: "Mechanical spring-mass-damper systems",
                explanation: "Mechanical vibrations are classic Laplace Transform applications."
            },

            {
                q: "One advantage of Laplace Transforms is that they:",
                options: [
                    "Automatically incorporate initial conditions",
                    "Eliminate algebra",
                    "Require no formulas",
                    "Always produce polynomial solutions"
                ],
                answer: "Automatically incorporate initial conditions",
                explanation: "Derivative transforms naturally include initial values."
            },

            {
                q: "Which is a common mistake when solving Laplace Transform problems?",
                options: [
                    "Using the wrong transform formula",
                    "Writing the differential equation first",
                    "Checking the answer",
                    "Using initial conditions"
                ],
                answer: "Using the wrong transform formula",
                explanation: "Selecting the wrong transform table entry is a common source of errors."
            },

            {
                q: "Why should the final solution be verified?",
                options: [
                    "To ensure it satisfies both the differential equation and the initial conditions",
                    "To eliminate constants",
                    "To simplify the algebra",
                    "To remove derivatives"
                ],
                answer: "To ensure it satisfies both the differential equation and the initial conditions",
                explanation: "Verification confirms that no algebra or transform errors were made."
            },

            {
                q: "Which statement best summarizes Unit 3?",
                options: [
                    "Laplace Transforms provide an efficient method for solving differential equations with initial conditions.",
                    "Laplace Transforms replace calculus completely.",
                    "Laplace Transforms only work for exponential functions.",
                    "Laplace Transforms are only used in electrical engineering."
                ],
                answer: "Laplace Transforms provide an efficient method for solving differential equations with initial conditions.",
                explanation: "This is the central idea of the entire unit."
            }

        ]
    }
    ,

    "calculus4-unit4-lesson1": {
        title: "Introduction to Systems of Differential Equations",
        subtitle: "Learn what systems of differential equations are, why they are important, and how they model multiple interacting variables.",

        body: `

<h2>Introduction</h2>

<p>Up to this point, we have studied differential equations involving a single unknown function.</p>

<p>Many real-world problems, however, involve several quantities that change together over time.</p>

<p>When two or more unknown functions depend on one another, we use a <strong>system of differential equations</strong>.</p>

<p>Instead of solving one differential equation, we solve several equations simultaneously.</p>

<p>The solution must satisfy every equation in the system.</p>

<hr>

<h2>What Is a System of Differential Equations?</h2>

<p>A system of differential equations consists of two or more differential equations involving two or more unknown functions.</p>

<p>For example, suppose two variables, <strong>x(t)</strong> and <strong>y(t)</strong>, influence each other.</p>

<p>A simple system might be</p>

<p><strong>x'(t)=3x−2y</strong></p>

<p><strong>y'(t)=x+y</strong></p>

<p>Notice that the rate of change of each variable depends on both variables.</p>

<p>This interaction makes systems much more interesting than single differential equations.</p>

<hr>

<h2>Independent and Dependent Variables</h2>

<p>As before, the independent variable is usually <strong>t</strong>, representing time.</p>

<p>The dependent variables are the unknown functions whose values change over time.</p>

<p>Examples include:</p>

<ul>

<li>x(t) and y(t)</li>

<li>Population of two species</li>

<li>Position and velocity of an object</li>

<li>Current and voltage in an electrical circuit</li>

</ul>

<p>Each dependent variable is connected to the others through the system of equations.</p>

<hr>

<h2>Why Do We Study Systems?</h2>

<p>Many physical systems involve multiple quantities interacting with one another.</p>

<p>Examples include:</p>

<ul>

<li>Predator-prey population models</li>

<li>Mechanical systems with multiple moving parts</li>

<li>Electrical circuits with several currents</li>

<li>Chemical reactions involving several substances</li>

<li>Economic models with interacting markets</li>

</ul>

<p>A single differential equation cannot adequately describe these situations.</p>

<hr>

<h2>Example 1</h2>

<p>A small ecosystem contains rabbits and foxes.</p>

<p>The rabbit population depends on its own growth and on predation by foxes.</p>

<p>The fox population depends on the availability of rabbits for food.</p>

<p>This interaction naturally leads to a system of differential equations because each population affects the other.</p>

<p>Neither equation can be solved independently without considering the other variable.</p>

<hr>

<h2>Coupled Equations</h2>

<p>Systems of differential equations are often called <strong>coupled systems</strong>.</p>

<p>This means the equations are linked together.</p>

<p>Changing one variable changes the behavior of another.</p>

<p>Because of this coupling, solving the entire system is necessary to understand how the variables evolve over time.</p>

<hr>

<h2>Linear Systems</h2>

<p>One important class of systems is the <strong>linear system</strong>.</p>

<p>A first-order linear system typically has the form</p>

<p><strong>x'=ax+by</strong></p>

<p><strong>y'=cx+dy</strong></p>

<p>where <strong>a</strong>, <strong>b</strong>, <strong>c</strong>, and <strong>d</strong> are constants.</p>

<p>These systems are especially important because they can often be solved using matrices and eigenvalues.</p>

<hr>
<h2>Graphical Interpretation</h2>

<p>Although systems of differential equations are often solved algebraically, graphs provide valuable insight into how solutions behave.</p>

<p>Each solution describes how all dependent variables change together over time.</p>

<p>Instead of looking at a single curve, we often study the motion of a point whose coordinates are determined by the dependent variables.</p>

<p>For a system involving <strong>x(t)</strong> and <strong>y(t)</strong>, every solution traces a path through the <strong>xy-plane</strong>.</p>

<p>This path is called a <strong>trajectory</strong> or <strong>solution curve</strong>.</p>

<hr>

<h2>Phase Plane</h2>

<p>The <strong>phase plane</strong> is a graph whose horizontal axis represents one dependent variable and whose vertical axis represents another.</p>

<p>Unlike ordinary graphs, the phase plane does not show time directly.</p>

<p>Instead, it shows how the variables relate to one another as time passes.</p>

<p>Each point represents the current state of the system.</p>

<p>As time changes, the point moves along its trajectory.</p>

<hr>

<h2>Example 2</h2>

<p>Suppose a moving object has:</p>

<p><strong>x(t)</strong> = position</p>

<p><strong>y(t)</strong> = velocity</p>

<p>Instead of graphing position and velocity separately against time, we can plot velocity versus position.</p>

<p>The resulting curve provides valuable information about the object's motion.</p>

<p>This type of graph is commonly used in mechanics and engineering.</p>

<hr>

<h2>Initial Conditions</h2>

<p>Just as a single differential equation requires an initial condition, a system requires initial values for every dependent variable.</p>

<p>For example, we might know</p>

<p><strong>x(0)=2</strong></p>

<p><strong>y(0)=−1</strong></p>

<p>These values specify the starting point of the solution in the phase plane.</p>

<p>Different initial conditions generally produce different solution curves.</p>

<hr>

<h2>Behavior of Solutions</h2>

<p>Systems of differential equations can exhibit a wide variety of behaviors.</p>

<p>Depending on the equations and initial conditions, solutions may:</p>

<ul>

<li>Approach an equilibrium point.</li>

<li>Move away from an equilibrium point.</li>

<li>Oscillate repeatedly.</li>

<li>Spiral inward or outward.</li>

<li>Grow or decay without bound.</li>

</ul>

<p>Understanding these behaviors is one of the primary goals of studying systems of differential equations.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Treating each equation as completely independent.</li>

<li>Forgetting that each variable can depend on all the others.</li>

<li>Ignoring the initial conditions for one or more variables.</li>

<li>Confusing the independent variable with the dependent variables.</li>

<li>Assuming every system has only one solution behavior.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>A system of differential equations contains two or more related differential equations.</li>

<li>The dependent variables influence one another through coupled equations.</li>

<li>Many scientific and engineering problems naturally lead to systems rather than single equations.</li>

<li>The phase plane provides a graphical way to study solution behavior.</li>

<li>Initial conditions determine the starting point of the solution.</li>

<li>Systems can exhibit many different types of long-term behavior, including equilibrium, oscillation, and growth.</li>

</ul>

`,
        questions: [

            {
                q: "What is a system of differential equations?",
                options: [
                    "Two or more differential equations involving multiple unknown functions",
                    "A single equation with two constants",
                    "An algebraic equation",
                    "A system of linear equations without derivatives"
                ],
                answer: "Two or more differential equations involving multiple unknown functions",
                explanation: "A system consists of multiple differential equations whose unknown functions are related."
            },

            {
                q: "In most systems studied in this course, the independent variable is:",
                options: [
                    "t",
                    "x",
                    "y",
                    "s"
                ],
                answer: "t",
                explanation: "Time, represented by t, is usually the independent variable."
            },

            {
                q: "Why are systems of differential equations called coupled systems?",
                options: [
                    "The equations depend on one another.",
                    "They contain only one variable.",
                    "They have no derivatives.",
                    "They always have identical solutions."
                ],
                answer: "The equations depend on one another.",
                explanation: "The variables interact, so the equations are linked or coupled."
            },

            {
                q: "Which of the following is a common application of systems of differential equations?",
                options: [
                    "Predator-prey population models",
                    "Sorting a list of numbers",
                    "Finding prime numbers",
                    "Drawing geometric figures"
                ],
                answer: "Predator-prey population models",
                explanation: "Predator-prey interactions are a classic application of coupled differential equations."
            },

            {
                q: "What is a phase plane?",
                options: [
                    "A graph showing the relationship between dependent variables",
                    "A graph of time versus distance",
                    "A table of derivatives",
                    "A coordinate system for matrices"
                ],
                answer: "A graph showing the relationship between dependent variables",
                explanation: "A phase plane shows how dependent variables change relative to one another."
            },

            {
                q: "A path traced by a solution in the phase plane is called a:",
                options: [
                    "Trajectory",
                    "Polynomial",
                    "Derivative",
                    "Matrix"
                ],
                answer: "Trajectory",
                explanation: "The solution path in the phase plane is called a trajectory or solution curve."
            },

            {
                q: "What determines the starting point of a solution curve?",
                options: [
                    "The initial conditions",
                    "The coefficients only",
                    "The variable s",
                    "The transform table"
                ],
                answer: "The initial conditions",
                explanation: "Initial values determine where the solution begins."
            },

            {
                q: "Which behavior can occur in systems of differential equations?",
                options: [
                    "Oscillation",
                    "Only constant motion",
                    "Only straight-line motion",
                    "Only exponential growth"
                ],
                answer: "Oscillation",
                explanation: "Many systems exhibit oscillatory behavior depending on their equations."
            },

            {
                q: "Which is a common mistake when studying systems?",
                options: [
                    "Treating each equation as independent",
                    "Using initial conditions",
                    "Studying trajectories",
                    "Identifying dependent variables"
                ],
                answer: "Treating each equation as independent",
                explanation: "Because the variables are coupled, the equations must be considered together."
            },

            {
                q: "What is the primary goal of studying systems of differential equations?",
                options: [
                    "To understand how multiple interacting variables change over time",
                    "To eliminate derivatives",
                    "To avoid using algebra",
                    "To replace matrices"
                ],
                answer: "To understand how multiple interacting variables change over time",
                explanation: "Systems model interacting quantities whose behavior evolves together over time."
            }

        ]
    }
    ,

    "calculus4-unit4-lesson2": {
        title: "Matrix Representation of Systems of Differential Equations",
        subtitle: "Learn how systems of differential equations can be written in matrix form, making them easier to analyze and solve.",

        body: `

<h2>Introduction</h2>

<p>Many systems of differential equations contain several equations with several unknown functions.</p>

<p>Writing every equation separately quickly becomes cumbersome, especially for larger systems.</p>

<p>Fortunately, matrices provide a compact and organized way to represent these systems.</p>

<p>Matrix notation simplifies calculations and forms the foundation for solving systems using eigenvalues and eigenvectors.</p>

<hr>

<h2>A Two-Equation System</h2>

<p>Consider the system</p>

<p><strong>x'(t)=3x+2y</strong></p>

<p><strong>y'(t)=x+4y</strong></p>

<p>Instead of writing two separate equations, we can combine them into a single matrix equation.</p>

<hr>

<h2>Column Vectors</h2>

<p>The unknown functions are grouped into a <strong>column vector</strong>.</p>

<p><strong>X(t)=</strong></p>

<p><strong>[ x(t) ]</strong></p>

<p><strong>[ y(t) ]</strong></p>

<p>The derivative is written similarly.</p>

<p><strong>X'(t)=</strong></p>

<p><strong>[ x'(t) ]</strong></p>

<p><strong>[ y'(t) ]</strong></p>

<p>This notation allows us to treat several unknown functions as one mathematical object.</p>

<hr>

<h2>The Coefficient Matrix</h2>

<p>The coefficients of the variables are placed into a square matrix.</p>

<p>For the previous system, the coefficient matrix is</p>

<p><strong>A =</strong></p>

<p><strong>[ 3   2 ]</strong></p>

<p><strong>[ 1   4 ]</strong></p>

<p>Each row corresponds to one equation.</p>

<p>Each column corresponds to one variable.</p>

<hr>

<h2>Writing the Matrix Equation</h2>

<p>The entire system can now be written as</p>

<p><strong>X'(t)=AX(t)</strong></p>

<p>This single equation represents both differential equations simultaneously.</p>

<p>Although the notation is shorter, it contains exactly the same information as the original system.</p>

<hr>

<h2>Verifying the Matrix Form</h2>

<p>Multiply the matrix by the column vector.</p>

<p><strong>AX(t)=</strong></p>

<p><strong>[ 3   2 ] [ x ]</strong></p>

<p><strong>[ 1   4 ] [ y ]</strong></p>

<p>Performing the multiplication gives</p>

<p><strong>[3x+2y]</strong></p>

<p><strong>[x+4y]</strong></p>

<p>These expressions are exactly the right-hand sides of the original differential equations.</p>

<hr>

<h2>Why Matrix Form Is Useful</h2>

<p>Matrix notation provides several advantages.</p>

<ul>

<li>It makes large systems easier to write.</li>

<li>It organizes coefficients clearly.</li>

<li>It prepares systems for matrix operations.</li>

<li>It allows powerful linear algebra techniques to be applied.</li>

<li>It forms the basis for eigenvalue methods used in later lessons.</li>

</ul>

<hr>
<h2>Larger Systems</h2>

<p>Although we have focused on systems with two equations, matrix notation works equally well for larger systems.</p>

<p>For example, a system with three unknown functions can be written as</p>

<p><strong>X(t)=</strong></p>

<p><strong>[ x(t) ]</strong></p>

<p><strong>[ y(t) ]</strong></p>

<p><strong>[ z(t) ]</strong></p>

<p>The corresponding coefficient matrix would be a <strong>3 × 3</strong> matrix.</p>

<p>In general, a system with <strong>n</strong> unknown functions is represented by an <strong>n × n</strong> coefficient matrix.</p>

<hr>

<h2>Identity Matrix</h2>

<p>An important matrix in linear algebra is the <strong>identity matrix</strong>.</p>

<p>For a 2 × 2 system, the identity matrix is</p>

<p><strong>I =</strong></p>

<p><strong>[ 1   0 ]</strong></p>

<p><strong>[ 0   1 ]</strong></p>

<p>Multiplying any compatible matrix or vector by the identity matrix leaves it unchanged.</p>

<p>The identity matrix plays a role similar to the number 1 in ordinary multiplication.</p>

<hr>

<h2>Matrix Dimensions</h2>

<p>When multiplying matrices, their dimensions must be compatible.</p>

<p>For the equation</p>

<p><strong>X'(t)=AX(t)</strong></p>

<p>the dimensions are:</p>

<ul>

<li><strong>A</strong> is an <strong>n × n</strong> matrix.</li>

<li><strong>X(t)</strong> is an <strong>n × 1</strong> column vector.</li>

<li><strong>X'(t)</strong> is also an <strong>n × 1</strong> column vector.</li>

</ul>

<p>This ensures that the matrix multiplication is mathematically valid.</p>

<hr>

<h2>Example 2</h2>

<p>Consider the system</p>

<p><strong>x' = 5x − y</strong></p>

<p><strong>y' = 2x + 3y</strong></p>

<p>The coefficient matrix is</p>

<p><strong>A =</strong></p>

<p><strong>[ 5  -1 ]</strong></p>

<p><strong>[ 2   3 ]</strong></p>

<p>The matrix equation becomes</p>

<p><strong>X'(t)=AX(t)</strong></p>

<p>where</p>

<p><strong>X(t)=</strong></p>

<p><strong>[ x ]</strong></p>

<p><strong>[ y ]</strong></p>

<hr>

<h2>Preparing for Eigenvalue Methods</h2>

<p>Writing a system in matrix form is not simply a shortcut.</p>

<p>It prepares us to use powerful tools from linear algebra.</p>

<p>In the next lessons, we will compute <strong>eigenvalues</strong> and <strong>eigenvectors</strong> of the coefficient matrix.</p>

<p>These quantities allow us to determine the general solution of many systems of differential equations.</p>

<p>Without matrix notation, these methods would be difficult to apply.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Placing coefficients in the wrong row or column of the coefficient matrix.</li>

<li>Mixing the order of the variables in the column vector.</li>

<li>Using matrices with incompatible dimensions.</li>

<li>Confusing the coefficient matrix with the solution vector.</li>

<li>Forgetting that the matrix equation represents all of the original differential equations simultaneously.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>Matrix notation provides a compact way to write systems of differential equations.</li>

<li>The unknown functions are grouped into a column vector.</li>

<li>The coefficients are organized into a square coefficient matrix.</li>

<li>The system can be written as <strong>X'(t)=AX(t)</strong>.</li>

<li>Matrix notation prepares systems for solution using eigenvalues and eigenvectors.</li>

<li>Understanding matrix dimensions is essential for valid matrix multiplication.</li>

</ul>

`,
        questions: [

            {
                q: "Why is matrix notation useful for systems of differential equations?",
                options: [
                    "It provides a compact representation and simplifies analysis.",
                    "It eliminates derivatives.",
                    "It replaces differential equations with algebraic formulas only.",
                    "It guarantees every system has a unique solution."
                ],
                answer: "It provides a compact representation and simplifies analysis.",
                explanation: "Matrix notation organizes systems efficiently and prepares them for linear algebra techniques."
            },

            {
                q: "In the equation X'(t)=AX(t), what does X(t) represent?",
                options: [
                    "A column vector of the unknown functions",
                    "The coefficient matrix",
                    "The identity matrix",
                    "A constant vector"
                ],
                answer: "A column vector of the unknown functions",
                explanation: "X(t) contains all of the dependent variables in a single column vector."
            },

            {
                q: "What does the matrix A represent?",
                options: [
                    "The coefficient matrix",
                    "The solution vector",
                    "The identity matrix",
                    "The inverse matrix"
                ],
                answer: "The coefficient matrix",
                explanation: "Matrix A contains the coefficients from the system of differential equations."
            },

            {
                q: "For a system with three unknown functions, the coefficient matrix is typically:",
                options: [
                    "3 × 3",
                    "2 × 2",
                    "3 × 1",
                    "1 × 3"
                ],
                answer: "3 × 3",
                explanation: "A system with n unknown functions has an n × n coefficient matrix."
            },

            {
                q: "What is the identity matrix used for?",
                options: [
                    "It leaves compatible matrices and vectors unchanged when multiplied.",
                    "It changes every coefficient to 1.",
                    "It computes eigenvalues.",
                    "It converts matrices into vectors."
                ],
                answer: "It leaves compatible matrices and vectors unchanged when multiplied.",
                explanation: "The identity matrix behaves like the number 1 in matrix multiplication."
            },

            {
                q: "What must be true before two matrices can be multiplied?",
                options: [
                    "Their dimensions must be compatible.",
                    "They must be square.",
                    "They must be identical.",
                    "They must contain only positive numbers."
                ],
                answer: "Their dimensions must be compatible.",
                explanation: "Matrix multiplication is only defined when the inner dimensions match."
            },

            {
                q: "What does X'(t) represent?",
                options: [
                    "The derivative of the solution vector",
                    "The inverse of X(t)",
                    "The coefficient matrix",
                    "The transpose of X(t)"
                ],
                answer: "The derivative of the solution vector",
                explanation: "X'(t) contains the derivatives of all the dependent variables."
            },

            {
                q: "Which future topic relies heavily on writing systems in matrix form?",
                options: [
                    "Eigenvalues and eigenvectors",
                    "Partial fractions",
                    "Taylor series",
                    "Laplace inversion"
                ],
                answer: "Eigenvalues and eigenvectors",
                explanation: "Eigenvalue methods are applied directly to the coefficient matrix."
            },

            {
                q: "Which is a common mistake when writing systems in matrix form?",
                options: [
                    "Placing coefficients in the wrong row or column",
                    "Using a column vector",
                    "Grouping variables together",
                    "Writing X'(t)=AX(t)"
                ],
                answer: "Placing coefficients in the wrong row or column",
                explanation: "Incorrect placement changes the system being represented."
            },

            {
                q: "Which equation represents a linear system in matrix form?",
                options: [
                    "X'(t)=AX(t)",
                    "X(t)=A+X",
                    "AX=X+A",
                    "A=X²"
                ],
                answer: "X'(t)=AX(t)",
                explanation: "This is the standard matrix representation of a first-order linear system."
            }

        ]
    }
    ,

    "calculus4-unit4-lesson3": {
        title: "Eigenvalues and Eigenvectors",
        subtitle: "Learn what eigenvalues and eigenvectors are and why they are essential for solving systems of differential equations.",

        body: `

<h2>Introduction</h2>

<p>In the previous lesson, we learned how to write systems of differential equations in matrix form.</p>

<p>The next step is learning how to solve these systems efficiently.</p>

<p>The key mathematical tools are <strong>eigenvalues</strong> and <strong>eigenvectors</strong>.</p>

<p>Although these concepts come from linear algebra, they have powerful applications in differential equations, physics, engineering, computer graphics, economics, and data science.</p>

<p>In this lesson, we introduce the basic ideas before using them to solve systems in the next lesson.</p>

<hr>

<h2>What Is an Eigenvector?</h2>

<p>Normally, when a matrix multiplies a vector, both the length and the direction of the vector change.</p>

<p>An <strong>eigenvector</strong> is special because its direction does not change after multiplication.</p>

<p>Only its length changes.</p>

<p>If <strong>A</strong> is a matrix and <strong>v</strong> is an eigenvector, then</p>

<p><strong>Av = λv</strong></p>

<p>where <strong>λ</strong> (lambda) is called the <strong>eigenvalue</strong>.</p>

<hr>

<h2>What Is an Eigenvalue?</h2>

<p>The eigenvalue tells us how much the eigenvector is stretched or compressed.</p>

<ul>

<li>If λ &gt; 1, the vector becomes longer.</li>

<li>If 0 &lt; λ &lt; 1, the vector becomes shorter.</li>

<li>If λ &lt; 0, the vector reverses direction while being scaled.</li>

<li>If λ = 1, the vector keeps the same length.</li>

</ul>

<p>The eigenvalue determines the scaling factor applied to its corresponding eigenvector.</p>

<hr>

<h2>The Eigenvalue Equation</h2>

<p>The defining equation is</p>

<p><strong>Av = λv</strong></p>

<p>where</p>

<ul>

<li><strong>A</strong> is the coefficient matrix.</li>

<li><strong>v</strong> is an eigenvector.</li>

<li><strong>λ</strong> is the corresponding eigenvalue.</li>

</ul>

<p>Every eigenvalue has at least one associated eigenvector.</p>

<hr>

<h2>Example 1</h2>

<p>Consider the matrix</p>

<p><strong>A =</strong></p>

<p><strong>[ 2   0 ]</strong></p>

<p><strong>[ 0   3 ]</strong></p>

<p>Multiply the vector</p>

<p><strong>v =</strong></p>

<p><strong>[1]</strong></p>

<p><strong>[0]</strong></p>

<p>The result is</p>

<p><strong>Av =</strong></p>

<p><strong>[2]</strong></p>

<p><strong>[0]</strong></p>

<p>This equals</p>

<p><strong>2v</strong></p>

<p>Therefore, <strong>v</strong> is an eigenvector with eigenvalue <strong>2</strong>.</p>

<hr>

<h2>Another Eigenvector</h2>

<p>Now consider</p>

<p><strong>v =</strong></p>

<p><strong>[0]</strong></p>

<p><strong>[1]</strong></p>

<p>Multiplying gives</p>

<p><strong>Av =</strong></p>

<p><strong>[0]</strong></p>

<p><strong>[3]</strong></p>

<p>This equals</p>

<p><strong>3v</strong></p>

<p>Therefore, this vector is also an eigenvector, but its eigenvalue is <strong>3</strong>.</p>

<hr>

<h2>Why Eigenvalues Matter</h2>

<p>Eigenvalues describe how a system changes over time.</p>

<p>For systems of differential equations, they determine whether solutions grow, decay, or oscillate.</p>

<p>Eigenvectors determine the directions along which these behaviors occur.</p>

<p>Together, they provide the foundation for solving many systems of differential equations.</p>

<hr>
<h2>Finding Eigenvalues</h2>

<p>To solve most systems of differential equations, we must first find the eigenvalues of the coefficient matrix.</p>

<p>Eigenvalues are found by solving the <strong>characteristic equation</strong>.</p>

<p>For a square matrix <strong>A</strong>, the characteristic equation is</p>

<p><strong>det(A − λI) = 0</strong></p>

<p>Here:</p>

<ul>

<li><strong>det</strong> represents the determinant.</li>

<li><strong>I</strong> is the identity matrix.</li>

<li><strong>λ</strong> is the unknown eigenvalue.</li>

</ul>

<p>Solving this equation gives all of the eigenvalues of the matrix.</p>

<hr>

<h2>Example 2</h2>

<p>Suppose</p>

<p><strong>A =</strong></p>

<p><strong>[ 4   0 ]</strong></p>

<p><strong>[ 0   7 ]</strong></p>

<p>Compute</p>

<p><strong>det(A − λI)</strong></p>

<p>This becomes</p>

<p><strong>(4 − λ)(7 − λ)=0</strong></p>

<p>Therefore the eigenvalues are</p>

<p><strong>λ₁ = 4</strong></p>

<p><strong>λ₂ = 7</strong></p>

<hr>

<h2>Finding Eigenvectors</h2>

<p>Once an eigenvalue has been found, the corresponding eigenvector is obtained by solving</p>

<p><strong>(A − λI)v = 0</strong></p>

<p>This equation is called the <strong>eigenvector equation</strong>.</p>

<p>Its solutions give all eigenvectors associated with the chosen eigenvalue.</p>

<hr>

<h2>Example 3</h2>

<p>Suppose the matrix is</p>

<p><strong>A =</strong></p>

<p><strong>[ 2   0 ]</strong></p>

<p><strong>[ 0   5 ]</strong></p>

<p>We already know one eigenvalue is</p>

<p><strong>λ = 2</strong></p>

<p>Substitute this into</p>

<p><strong>(A − λI)v = 0</strong></p>

<p>The resulting equations show that any nonzero multiple of</p>

<p><strong>[1]</strong></p>

<p><strong>[0]</strong></p>

<p>is an eigenvector corresponding to λ = 2.</p>

<hr>

<h2>Relationship Between Eigenvalues and Differential Equations</h2>

<p>When solving systems of differential equations, eigenvalues determine how solutions behave over time.</p>

<ul>

<li>Positive eigenvalues often produce growing solutions.</li>

<li>Negative eigenvalues often produce decaying solutions.</li>

<li>Complex eigenvalues frequently produce oscillating solutions.</li>

</ul>

<p>The corresponding eigenvectors determine the directions in which these behaviors occur.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Confusing eigenvalues with eigenvectors.</li>

<li>Forgetting to subtract <strong>λI</strong> before computing the determinant.</li>

<li>Making arithmetic mistakes while computing the determinant.</li>

<li>Using the wrong eigenvalue when solving for an eigenvector.</li>

<li>Forgetting that eigenvectors cannot be the zero vector.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>An eigenvector changes only in magnitude when multiplied by a matrix.</li>

<li>The amount of stretching or shrinking is determined by the corresponding eigenvalue.</li>

<li>Eigenvalues are found by solving the characteristic equation <strong>det(A − λI)=0</strong>.</li>

<li>Eigenvectors are found by solving <strong>(A − λI)v=0</strong>.</li>

<li>Eigenvalues and eigenvectors are essential tools for solving systems of differential equations.</li>

<li>They also provide insight into the long-term behavior of many physical systems.</li>

</ul>

`,
        questions: [

            {
                q: "What is an eigenvector?",
                options: [
                    "A vector whose direction remains unchanged when multiplied by a matrix",
                    "A vector with length equal to 1",
                    "A row of a matrix",
                    "A constant matrix"
                ],
                answer: "A vector whose direction remains unchanged when multiplied by a matrix",
                explanation: "An eigenvector changes only by a scaling factor when multiplied by a matrix."
            },

            {
                q: "What does an eigenvalue represent?",
                options: [
                    "The scaling factor applied to an eigenvector",
                    "The determinant of a matrix",
                    "The number of rows in a matrix",
                    "The inverse of a matrix"
                ],
                answer: "The scaling factor applied to an eigenvector",
                explanation: "An eigenvalue tells how much its corresponding eigenvector is stretched or compressed."
            },

            {
                q: "Which equation defines an eigenvector and eigenvalue?",
                options: [
                    "Av = λv",
                    "A + v = λ",
                    "Av = v + λ",
                    "A² = λ"
                ],
                answer: "Av = λv",
                explanation: "This is the defining equation for eigenvalues and eigenvectors."
            },

            {
                q: "How are eigenvalues found?",
                options: [
                    "By solving det(A − λI) = 0",
                    "By multiplying matrices together",
                    "By differentiating the matrix",
                    "By integrating the determinant"
                ],
                answer: "By solving det(A − λI) = 0",
                explanation: "The characteristic equation determines the eigenvalues."
            },

            {
                q: "What does the symbol I represent in the characteristic equation?",
                options: [
                    "The identity matrix",
                    "The inverse matrix",
                    "An imaginary number",
                    "An integration operator"
                ],
                answer: "The identity matrix",
                explanation: "I is the identity matrix of the same size as A."
            },

            {
                q: "After finding an eigenvalue, how is its corresponding eigenvector found?",
                options: [
                    "By solving (A − λI)v = 0",
                    "By computing another determinant",
                    "By multiplying A by itself",
                    "By differentiating λ"
                ],
                answer: "By solving (A − λI)v = 0",
                explanation: "This equation produces the eigenvectors associated with a particular eigenvalue."
            },

            {
                q: "What type of solution behavior is commonly associated with negative eigenvalues?",
                options: [
                    "Decay",
                    "Growth",
                    "Oscillation only",
                    "Constant solutions only"
                ],
                answer: "Decay",
                explanation: "Negative eigenvalues often produce solutions that decrease over time."
            },

            {
                q: "Which type of eigenvalues often produces oscillating solutions?",
                options: [
                    "Complex eigenvalues",
                    "Positive eigenvalues",
                    "Zero eigenvalues",
                    "Repeated real eigenvalues"
                ],
                answer: "Complex eigenvalues",
                explanation: "Complex eigenvalues frequently lead to oscillatory behavior."
            },

            {
                q: "Which of the following is NOT an eigenvector?",
                options: [
                    "The zero vector",
                    "Any nonzero vector satisfying Av = λv",
                    "A scalar multiple of an eigenvector",
                    "A vector associated with an eigenvalue"
                ],
                answer: "The zero vector",
                explanation: "By definition, eigenvectors must be nonzero vectors."
            },

            {
                q: "Why are eigenvalues and eigenvectors important in systems of differential equations?",
                options: [
                    "They help determine the solutions and their long-term behavior.",
                    "They eliminate the need for matrices.",
                    "They replace differential equations.",
                    "They guarantee every solution is periodic."
                ],
                answer: "They help determine the solutions and their long-term behavior.",
                explanation: "Eigenvalues and eigenvectors are the primary tools used to solve many linear systems of differential equations."
            }

        ]
    }
    ,

    "calculus4-unit4-lesson4": {
        title: "Solving Linear Systems Using Eigenvalues and Eigenvectors",
        subtitle: "Use eigenvalues and eigenvectors to find the general and particular solutions of systems of differential equations.",

        body: `

<h2>Introduction</h2>

<p>In the previous lesson, we learned how to find the eigenvalues and eigenvectors of a matrix.</p>

<p>Now we will use those results to solve systems of differential equations.</p>

<p>The solution process combines ideas from differential equations and linear algebra.</p>

<p>Although the calculations may seem lengthy at first, the procedure follows the same sequence every time.</p>

<hr>

<h2>The Matrix System</h2>

<p>Consider the system written in matrix form:</p>

<p><strong>X'(t)=AX(t)</strong></p>

<p>where</p>

<p><strong>A</strong> is the coefficient matrix and</p>

<p><strong>X(t)</strong> is the vector of unknown functions.</p>

<p>Our goal is to determine the vector function <strong>X(t)</strong>.</p>

<hr>

<h2>The General Idea</h2>

<p>If the matrix <strong>A</strong> has distinct eigenvalues, each eigenvalue produces one independent solution.</p>

<p>Each solution has the form</p>

<p><strong>X(t)=ve<sup>λt</sup></strong></p>

<p>where</p>

<ul>

<li><strong>λ</strong> is an eigenvalue.</li>

<li><strong>v</strong> is the corresponding eigenvector.</li>

</ul>

<p>The complete solution is obtained by combining all of these independent solutions.</p>

<hr>

<h2>General Solution</h2>

<p>Suppose the matrix has two distinct eigenvalues:</p>

<p><strong>λ₁</strong> with eigenvector <strong>v₁</strong></p>

<p><strong>λ₂</strong> with eigenvector <strong>v₂</strong></p>

<p>The general solution is</p>

<p><strong>X(t)=C₁v₁e<sup>λ₁t</sup>+C₂v₂e<sup>λ₂t</sup></strong></p>

<p>where <strong>C₁</strong> and <strong>C₂</strong> are arbitrary constants.</p>

<hr>

<h2>Example 1</h2>

<p>Suppose the coefficient matrix has</p>

<p><strong>λ₁=2</strong></p>

<p>with eigenvector</p>

<p><strong>v₁=[1,0]<sup>T</sup></strong></p>

<p>and</p>

<p><strong>λ₂=−1</strong></p>

<p>with eigenvector</p>

<p><strong>v₂=[0,1]<sup>T</sup></strong></p>

<p>The general solution is</p>

<p><strong>X(t)=C₁[1,0]<sup>T</sup>e<sup>2t</sup>+C₂[0,1]<sup>T</sup>e<sup>−t</sup></strong></p>

<p>This vector solution satisfies the entire system of differential equations.</p>

<hr>

<h2>Understanding the Solution</h2>

<p>Notice that each eigenvalue contributes its own exponential function.</p>

<p>Positive eigenvalues produce growing exponential terms.</p>

<p>Negative eigenvalues produce decaying exponential terms.</p>

<p>The eigenvectors determine the direction in which each exponential acts.</p>

<hr>

<h2>Why This Works</h2>

<p>The special form</p>

<p><strong>ve<sup>λt</sup></strong></p>

<p>is chosen because differentiating the exponential simply reproduces the exponential.</p>

<p>This property allows the differential equation to reduce to the eigenvalue equation</p>

<p><strong>Av=λv</strong>.</p>

<p>This connection explains why eigenvalues and eigenvectors naturally solve linear systems.</p>

<hr>
<h2>Using Initial Conditions</h2>

<p>The general solution contains one constant for each independent solution.</p>

<p>To determine these constants, we use the <strong>initial conditions</strong>.</p>

<p>An initial condition specifies the value of the solution vector at a particular time, usually <strong>t = 0</strong>.</p>

<p>For example, suppose we know</p>

<p><strong>X(0)=</strong></p>

<p><strong>[4]</strong></p>

<p><strong>[2]</strong></p>

<p>Substituting <strong>t = 0</strong> into the general solution produces a system of algebraic equations that can be solved for the unknown constants.</p>

<hr>

<h2>Example 2</h2>

<p>Suppose the general solution is</p>

<p><strong>X(t)=C₁[1,0]<sup>T</sup>e<sup>2t</sup>+C₂[0,1]<sup>T</sup>e<sup>−t</sup></strong></p>

<p>and the initial condition is</p>

<p><strong>X(0)=</strong></p>

<p><strong>[5]</strong></p>

<p><strong>[3]</strong></p>

<p>Since</p>

<p><strong>e⁰=1</strong></p>

<p>the solution at <strong>t = 0</strong> becomes</p>

<p><strong>X(0)=C₁[1,0]<sup>T</sup>+C₂[0,1]<sup>T</sup></strong></p>

<p>Matching components gives</p>

<p><strong>C₁=5</strong></p>

<p><strong>C₂=3</strong></p>

<p>Therefore, the particular solution is</p>

<p><strong>X(t)=5[1,0]<sup>T</sup>e<sup>2t</sup>+3[0,1]<sup>T</sup>e<sup>−t</sup></strong></p>

<hr>

<h2>Interpreting the Solution</h2>

<p>Each exponential term contributes independently to the overall behavior of the system.</p>

<p>If one exponential grows much faster than the others, it eventually dominates the solution.</p>

<p>Likewise, rapidly decaying exponentials eventually become negligible.</p>

<p>This makes eigenvalues extremely useful for predicting the long-term behavior of physical systems.</p>

<hr>

<h2>Applications</h2>

<p>Solutions obtained using eigenvalues and eigenvectors appear throughout science and engineering.</p>

<ul>

<li>Population models with interacting species</li>

<li>Electrical circuits containing multiple components</li>

<li>Mechanical systems with several connected masses</li>

<li>Chemical reaction networks</li>

<li>Economic growth models</li>

<li>Control systems used in robotics and aerospace engineering</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the wrong eigenvector with an eigenvalue.</li>

<li>Forgetting the exponential factor <strong>e<sup>λt</sup></strong>.</li>

<li>Adding the independent solutions incorrectly.</li>

<li>Making algebra mistakes when solving for the constants.</li>

<li>Not checking that the number of independent solutions matches the size of the system.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>Each eigenvalue and eigenvector pair produces one independent solution.</li>

<li>Each independent solution has the form <strong>ve<sup>λt</sup></strong>.</li>

<li>The general solution is the sum of all independent solutions.</li>

<li>Initial conditions determine the arbitrary constants.</li>

<li>Eigenvalues determine growth, decay, or oscillation of the solution.</li>

<li>Eigenvector methods provide one of the most powerful techniques for solving linear systems of differential equations.</li>

</ul>

`,
        questions: [

            {
                q: "What is the standard form of an independent solution obtained from an eigenvalue?",
                options: [
                    "ve^(λt)",
                    "λve",
                    "v + λt",
                    "Aλv"
                ],
                answer: "ve^(λt)",
                explanation: "Each eigenvalue-eigenvector pair produces a solution of the form ve^(λt)."
            },

            {
                q: "How is the general solution formed?",
                options: [
                    "By adding all independent solutions together",
                    "By multiplying all eigenvectors together",
                    "By averaging the eigenvalues",
                    "By computing the determinant"
                ],
                answer: "By adding all independent solutions together",
                explanation: "The general solution is the linear combination of all independent solutions."
            },

            {
                q: "What determines the constants C₁ and C₂?",
                options: [
                    "Initial conditions",
                    "The determinant",
                    "The trace of the matrix",
                    "The identity matrix"
                ],
                answer: "Initial conditions",
                explanation: "Initial conditions allow the arbitrary constants to be determined."
            },

            {
                q: "Why is the exponential function used in the solution?",
                options: [
                    "Its derivative is proportional to itself.",
                    "It is always positive.",
                    "It makes matrices square.",
                    "It eliminates eigenvectors."
                ],
                answer: "Its derivative is proportional to itself.",
                explanation: "This property allows the differential equation to reduce to the eigenvalue equation."
            },

            {
                q: "What usually happens when an eigenvalue is positive?",
                options: [
                    "The corresponding solution grows exponentially.",
                    "The solution immediately becomes zero.",
                    "The solution oscillates forever.",
                    "The solution is constant."
                ],
                answer: "The corresponding solution grows exponentially.",
                explanation: "Positive eigenvalues generally produce exponential growth."
            },

            {
                q: "What usually happens when an eigenvalue is negative?",
                options: [
                    "The corresponding solution decays exponentially.",
                    "The solution grows without bound.",
                    "The matrix becomes singular.",
                    "The eigenvector disappears."
                ],
                answer: "The corresponding solution decays exponentially.",
                explanation: "Negative eigenvalues produce exponential decay."
            },

            {
                q: "Which mathematical object determines the direction of each solution component?",
                options: [
                    "The eigenvector",
                    "The determinant",
                    "The identity matrix",
                    "The trace"
                ],
                answer: "The eigenvector",
                explanation: "Eigenvectors determine the directions associated with the exponential solutions."
            },

            {
                q: "If one exponential grows much faster than the others, what happens over time?",
                options: [
                    "It dominates the solution.",
                    "It disappears.",
                    "It becomes periodic.",
                    "It equals zero."
                ],
                answer: "It dominates the solution.",
                explanation: "The fastest-growing exponential eventually becomes the largest contribution."
            },

            {
                q: "Which of the following is NOT a common application of systems of differential equations?",
                options: [
                    "Sorting words alphabetically",
                    "Population models",
                    "Electrical circuits",
                    "Mechanical vibrations"
                ],
                answer: "Sorting words alphabetically",
                explanation: "The other choices are common applications of systems of differential equations."
            },

            {
                q: "Why are eigenvalue methods important?",
                options: [
                    "They provide a systematic way to solve many linear systems.",
                    "They eliminate all matrix calculations.",
                    "They only apply to algebra problems.",
                    "They replace differential equations with geometry."
                ],
                answer: "They provide a systematic way to solve many linear systems.",
                explanation: "Eigenvalue methods are one of the fundamental techniques for solving linear systems of differential equations."
            }

        ]
    }
    ,

    "calculus4-unit4-lesson5": {
        title: "Phase Plane Analysis",
        subtitle: "Learn how to visualize systems of differential equations by studying trajectories, equilibrium points, and the behavior of solutions in the phase plane.",

        body: `

<h2>Introduction</h2>

<p>So far, we have solved systems of differential equations using algebraic techniques such as eigenvalues and eigenvectors.</p>

<p>Another powerful way to understand a system is by looking at its <strong>geometry</strong>.</p>

<p>Instead of focusing only on formulas, we can study how solutions move over time by plotting them in a <strong>phase plane</strong>.</p>

<p>Phase plane analysis helps us understand the long-term behavior of a system without necessarily finding an explicit solution.</p>

<hr>

<h2>What Is a Phase Plane?</h2>

<p>A phase plane is a graph whose axes represent the dependent variables of a system.</p>

<p>For a system involving two variables, the horizontal axis usually represents <strong>x</strong> and the vertical axis represents <strong>y</strong>.</p>

<p>Each point in the plane represents one possible state of the system.</p>

<p>As time changes, the point moves through the phase plane, creating a curve called a <strong>trajectory</strong>.</p>

<hr>

<h2>State of the System</h2>

<p>Suppose the solution at a particular time is</p>

<p><strong>X(t)=</strong></p>

<p><strong>[x(t)]</strong></p>

<p><strong>[y(t)]</strong></p>

<p>The ordered pair</p>

<p><strong>(x(t), y(t))</strong></p>

<p>identifies the current position of the system in the phase plane.</p>

<p>As the solution changes, this point traces out the trajectory.</p>

<hr>

<h2>Trajectories</h2>

<p>A <strong>trajectory</strong> is the path followed by the solution in the phase plane.</p>

<p>Different initial conditions produce different trajectories.</p>

<p>Even though the trajectories may begin at different locations, they often display similar long-term behavior.</p>

<p>Studying these paths provides valuable insight into the dynamics of the system.</p>

<hr>

<h2>Equilibrium Points</h2>

<p>An <strong>equilibrium point</strong> is a point where the system does not change.</p>

<p>Mathematically, this means</p>

<p><strong>X'(t)=0</strong></p>

<p>At an equilibrium point, all derivatives are zero, so the solution remains fixed forever.</p>

<p>Equilibrium points are also called <strong>critical points</strong> or <strong>steady-state solutions</strong>.</p>

<hr>

<h2>Finding Equilibrium Points</h2>

<p>To find equilibrium points, set every differential equation equal to zero.</p>

<p>For example, consider</p>

<p><strong>x' = x − y</strong></p>

<p><strong>y' = 2x − 2y</strong></p>

<p>Setting both derivatives equal to zero gives</p>

<p><strong>x − y = 0</strong></p>

<p><strong>2x − 2y = 0</strong></p>

<p>Solving these equations shows that every point satisfying <strong>x = y</strong> is an equilibrium solution.</p>

<hr>

<h2>Direction Fields</h2>

<p>At every point in the phase plane, the differential equations determine a direction of motion.</p>

<p>Drawing many small arrows creates a <strong>direction field</strong> (also called a vector field).</p>

<p>The arrows indicate the direction in which the solution moves at each location.</p>

<p>Trajectories follow these arrows throughout the phase plane.</p>

<hr>

<h2>Example</h2>

<p>Suppose the arrows in a direction field all point toward the origin.</p>

<p>No matter where a trajectory begins, it gradually moves closer to the origin.</p>

<p>This suggests that the origin is a <strong>stable equilibrium point</strong>.</p>

<p>Phase plane diagrams allow us to recognize this behavior immediately without solving the system algebraically.</p>

<hr>
<h2>Stable and Unstable Equilibrium Points</h2>

<p>Not all equilibrium points behave the same way.</p>

<p>Some attract nearby solutions, while others repel them.</p>

<p>These behaviors help classify the long-term dynamics of a system.</p>

<h3>Stable Equilibrium</h3>

<p>A <strong>stable equilibrium</strong> attracts nearby trajectories.</p>

<p>If the system is slightly disturbed, the solution eventually returns toward the equilibrium point.</p>

<p>This behavior is common when the eigenvalues are negative.</p>

<h3>Unstable Equilibrium</h3>

<p>An <strong>unstable equilibrium</strong> repels nearby trajectories.</p>

<p>Even a very small disturbance causes the solution to move away from the equilibrium point.</p>

<p>This often occurs when one or more eigenvalues are positive.</p>

<hr>

<h2>Saddle Points</h2>

<p>A <strong>saddle point</strong> has both attracting and repelling directions.</p>

<p>Some trajectories move toward the equilibrium, while others move away.</p>

<p>This behavior occurs when the eigenvalues have opposite signs.</p>

<p>Saddle points are always unstable because at least some nearby solutions move away from the equilibrium.</p>

<hr>

<h2>Nodes</h2>

<p>A <strong>node</strong> occurs when both eigenvalues are real and have the same sign.</p>

<ul>

<li>If both eigenvalues are negative, the node is <strong>stable</strong>.</li>

<li>If both eigenvalues are positive, the node is <strong>unstable</strong>.</li>

</ul>

<p>Trajectories move directly toward or away from the equilibrium without spiraling.</p>

<hr>

<h2>Spiral Points</h2>

<p>When the eigenvalues are complex numbers, trajectories often spiral around the equilibrium point.</p>

<ul>

<li>If the real part of the eigenvalues is negative, the spiral moves inward.</li>

<li>If the real part is positive, the spiral moves outward.</li>

</ul>

<p>These patterns frequently appear in physical systems involving oscillations with damping or growth.</p>

<hr>

<h2>Centers</h2>

<p>If the eigenvalues are purely imaginary, trajectories form closed curves around the equilibrium point.</p>

<p>These closed curves are called <strong>centers</strong>.</p>

<p>The solution neither moves toward nor away from the equilibrium.</p>

<p>Instead, it continues oscillating indefinitely.</p>

<hr>

<h2>Interpreting a Phase Portrait</h2>

<p>A <strong>phase portrait</strong> is a collection of trajectories showing many possible solutions of a system.</p>

<p>Instead of displaying a single solution, it illustrates how the system behaves for many different initial conditions.</p>

<p>By examining the overall pattern, we can determine whether solutions tend to grow, decay, spiral, or remain periodic.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Assuming every equilibrium point is stable.</li>

<li>Confusing a trajectory with a direction field.</li>

<li>Forgetting that different initial conditions produce different trajectories.</li>

<li>Ignoring the signs of the eigenvalues when classifying equilibrium points.</li>

<li>Thinking that all spirals are stable; outward spirals are unstable.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>The phase plane graphically represents the behavior of a two-variable system.</li>

<li>Each solution traces a trajectory through the phase plane.</li>

<li>Equilibrium points occur where all derivatives are zero.</li>

<li>Stable equilibria attract nearby trajectories, while unstable equilibria repel them.</li>

<li>Saddle points have both attracting and repelling directions.</li>

<li>Nodes, spirals, and centers are classified using the eigenvalues of the coefficient matrix.</li>

<li>Phase portraits provide a visual understanding of the long-term behavior of differential equation systems.</li>

</ul>

`,
        questions: [

            {
                q: "What does a phase plane represent?",
                options: [
                    "A graph showing the behavior of a system using its dependent variables",
                    "A graph of time versus distance",
                    "A three-dimensional surface",
                    "A graph of eigenvalues only"
                ],
                answer: "A graph showing the behavior of a system using its dependent variables",
                explanation: "The phase plane uses the dependent variables as its axes to visualize system behavior."
            },

            {
                q: "What is a trajectory?",
                options: [
                    "The path followed by a solution in the phase plane",
                    "A row of a matrix",
                    "An eigenvector",
                    "A determinant"
                ],
                answer: "The path followed by a solution in the phase plane",
                explanation: "A trajectory shows how the system evolves over time from a particular initial condition."
            },

            {
                q: "What defines an equilibrium point?",
                options: [
                    "All derivatives are equal to zero.",
                    "All variables equal zero.",
                    "All eigenvalues are positive.",
                    "The determinant is zero."
                ],
                answer: "All derivatives are equal to zero.",
                explanation: "At an equilibrium point, the system does not change because every derivative is zero."
            },

            {
                q: "What happens near a stable equilibrium?",
                options: [
                    "Nearby trajectories move toward the equilibrium.",
                    "Nearby trajectories always move away.",
                    "Solutions immediately become zero.",
                    "Trajectories become straight lines."
                ],
                answer: "Nearby trajectories move toward the equilibrium.",
                explanation: "Stable equilibria attract nearby solutions."
            },

            {
                q: "Which type of equilibrium has both attracting and repelling directions?",
                options: [
                    "Saddle point",
                    "Center",
                    "Stable node",
                    "Spiral sink"
                ],
                answer: "Saddle point",
                explanation: "Saddle points attract trajectories in some directions and repel them in others."
            },

            {
                q: "When do trajectories usually spiral?",
                options: [
                    "When the eigenvalues are complex",
                    "When both eigenvalues are zero",
                    "When the determinant is one",
                    "When the matrix is diagonal"
                ],
                answer: "When the eigenvalues are complex",
                explanation: "Complex eigenvalues commonly produce spiral trajectories."
            },

            {
                q: "What is a center in phase plane analysis?",
                options: [
                    "An equilibrium with closed trajectories around it",
                    "An unstable node",
                    "A saddle point",
                    "A point where trajectories end immediately"
                ],
                answer: "An equilibrium with closed trajectories around it",
                explanation: "Centers occur when solutions repeatedly orbit the equilibrium point."
            },

            {
                q: "What does a phase portrait display?",
                options: [
                    "Many trajectories corresponding to different initial conditions",
                    "Only one solution curve",
                    "Only the eigenvalues",
                    "Only equilibrium points"
                ],
                answer: "Many trajectories corresponding to different initial conditions",
                explanation: "A phase portrait illustrates the overall behavior of the system for many starting points."
            },

            {
                q: "Which type of node occurs when both eigenvalues are negative?",
                options: [
                    "Stable node",
                    "Unstable node",
                    "Saddle point",
                    "Center"
                ],
                answer: "Stable node",
                explanation: "Negative real eigenvalues produce a stable node with trajectories moving toward the equilibrium."
            },

            {
                q: "Why is phase plane analysis useful?",
                options: [
                    "It provides a visual understanding of how systems behave over time.",
                    "It eliminates the need for matrices.",
                    "It replaces eigenvalues completely.",
                    "It guarantees exact algebraic solutions."
                ],
                answer: "It provides a visual understanding of how systems behave over time.",
                explanation: "Phase plane analysis helps us understand qualitative behavior even when finding explicit solutions is difficult."
            }

        ]
    }
    ,

    "calculus4-unit4-lesson6": {
        title: "Applications of Systems of Differential Equations",
        subtitle: "Apply systems of differential equations to model and analyze real-world problems in science, engineering, biology, economics, and other fields.",

        body: `

<h2>Introduction</h2>

<p>Systems of differential equations are used to model situations involving two or more quantities that change together over time.</p>

<p>Instead of studying each quantity separately, a system captures how they influence one another.</p>

<p>Many important scientific and engineering problems can only be described accurately using systems of equations.</p>

<p>In this lesson, we examine several common applications and see how mathematical models help explain real-world behavior.</p>

<hr>

<h2>Population Models</h2>

<p>Many biological systems involve multiple interacting populations.</p>

<p>For example, one species may compete with another for food or habitat.</p>

<p>Each population affects the growth rate of the other, leading naturally to a system of differential equations.</p>

<p>Scientists use these models to predict long-term population changes and evaluate conservation strategies.</p>

<hr>

<h2>Predator-Prey Models</h2>

<p>One of the most famous systems of differential equations is the predator-prey model.</p>

<p>In this model, one population represents predators while the other represents prey.</p>

<p>As the prey population increases, predators have more food available and their population grows.</p>

<p>As the predator population grows, more prey are consumed, causing the prey population to decrease.</p>

<p>This interaction often produces repeating cycles over time.</p>

<hr>

<h2>Mechanical Vibrations</h2>

<p>Mechanical systems containing multiple masses and springs are often modeled using systems of differential equations.</p>

<p>Each mass influences the motion of the others through connecting springs or dampers.</p>

<p>Engineers use these models when designing buildings, bridges, vehicles, and machinery.</p>

<p>Understanding these interactions helps prevent excessive vibrations and structural failures.</p>

<hr>

<h2>Electrical Circuits</h2>

<p>Electrical circuits containing multiple resistors, capacitors, and inductors are naturally described by systems of differential equations.</p>

<p>The voltage and current in one part of the circuit affect other components.</p>

<p>Engineers analyze these systems to design reliable communication devices, computers, and power systems.</p>

<hr>

<h2>Economic Models</h2>

<p>Economists frequently study variables that influence one another.</p>

<p>Examples include production, investment, inflation, employment, and consumer spending.</p>

<p>Systems of differential equations help describe how these quantities evolve together over time.</p>

<p>Such models assist economists in forecasting future economic trends.</p>

<hr>

<h2>Disease Spread</h2>

<p>Many epidemiological models divide a population into different groups, such as susceptible, infected, and recovered individuals.</p>

<p>The rate at which people move between these groups depends on the current size of each group.</p>

<p>These interactions form systems of differential equations.</p>

<p>Public health officials use these models to study outbreaks and evaluate intervention strategies.</p>

<hr>
<h2>Chemical Reaction Systems</h2>

<p>Chemical reactions often involve several substances that interact simultaneously.</p>

<p>As one chemical is consumed, another is produced.</p>

<p>The rate of change of each substance depends on the concentrations of the others.</p>

<p>Systems of differential equations allow chemists to predict reaction rates, equilibrium conditions, and product concentrations.</p>

<hr>

<h2>Control Systems</h2>

<p>Modern engineering relies heavily on control systems.</p>

<p>Examples include autopilot systems, robotic arms, industrial automation, and cruise control in automobiles.</p>

<p>These systems continuously monitor their current state and adjust their behavior to achieve a desired outcome.</p>

<p>Systems of differential equations describe how the variables change in response to feedback.</p>

<hr>

<h2>Environmental Models</h2>

<p>Environmental scientists use systems of differential equations to study ecosystems, pollution, and climate.</p>

<p>Examples include tracking pollutants in rivers, modeling atmospheric gases, and predicting changes in wildlife populations.</p>

<p>Because many environmental variables influence one another, systems of equations provide a more realistic model than a single equation.</p>

<hr>

<h2>Interpreting Mathematical Models</h2>

<p>After solving a system of differential equations, the mathematical solution must be interpreted within the context of the problem.</p>

<p>For example, a population model may predict that one species eventually disappears while another stabilizes.</p>

<p>An electrical model may show that voltages settle to steady values after an initial disturbance.</p>

<p>The equations provide numerical results, but the interpretation explains what those results mean in the real world.</p>

<hr>

<h2>Advantages of Mathematical Models</h2>

<ul>

<li>They help predict future behavior.</li>

<li>They allow scientists to test ideas without performing expensive experiments.</li>

<li>They improve engineering design before physical construction begins.</li>

<li>They help researchers compare different scenarios efficiently.</li>

<li>They reveal relationships that may not be obvious from observations alone.</li>

</ul>

<hr>

<h2>Limitations of Mathematical Models</h2>

<p>Every mathematical model is an approximation of reality.</p>

<p>Some important factors may be ignored to keep the model manageable.</p>

<p>Inaccurate measurements or unrealistic assumptions can reduce the accuracy of predictions.</p>

<p>As a result, models should always be compared with real-world observations whenever possible.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Assuming a mathematical model perfectly represents reality.</li>

<li>Ignoring the assumptions used to develop the model.</li>

<li>Misinterpreting the meaning of the solution.</li>

<li>Applying a model outside the conditions for which it was developed.</li>

<li>Believing that numerical accuracy guarantees physical accuracy.</li>

</ul>

<hr>

<h2>Lesson Summary</h2>

<ul>

<li>Systems of differential equations model multiple interacting quantities.</li>

<li>Applications include biology, engineering, economics, chemistry, epidemiology, and environmental science.</li>

<li>Solutions help predict future behavior and improve decision-making.</li>

<li>Mathematical models simplify complex real-world systems while capturing their essential behavior.</li>

<li>Every model has assumptions and limitations that must be understood when interpreting results.</li>

<li>Systems of differential equations are among the most important mathematical tools used in science and engineering.</li>

</ul>

`,
        questions: [

            {
                q: "Why are systems of differential equations useful in real-world modeling?",
                options: [
                    "They describe multiple interacting quantities that change over time.",
                    "They eliminate the need for data collection.",
                    "They only apply to mathematics.",
                    "They always produce exact predictions."
                ],
                answer: "They describe multiple interacting quantities that change over time.",
                explanation: "Many real-world systems involve variables that influence one another, making systems of differential equations appropriate models."
            },

            {
                q: "Which application commonly uses predator-prey models?",
                options: [
                    "Population biology",
                    "Accounting",
                    "Geometry",
                    "Cryptography"
                ],
                answer: "Population biology",
                explanation: "Predator-prey models describe interacting biological populations."
            },

            {
                q: "Mechanical vibration models are commonly used when designing:",
                options: [
                    "Buildings, bridges, and vehicles",
                    "Recipe books",
                    "Language dictionaries",
                    "Painting techniques"
                ],
                answer: "Buildings, bridges, and vehicles",
                explanation: "Engineers analyze vibrations to improve safety and performance."
            },

            {
                q: "Electrical circuits containing multiple components are commonly modeled using:",
                options: [
                    "Systems of differential equations",
                    "Only linear equations",
                    "Quadratic equations only",
                    "Probability distributions"
                ],
                answer: "Systems of differential equations",
                explanation: "Voltages and currents influence one another, naturally forming systems of equations."
            },

            {
                q: "Disease-spread models often divide the population into:",
                options: [
                    "Susceptible, infected, and recovered groups",
                    "Only adults and children",
                    "Cities and countries",
                    "Workers and employers"
                ],
                answer: "Susceptible, infected, and recovered groups",
                explanation: "Many epidemiological models use these interacting population groups."
            },

            {
                q: "Why are mathematical models valuable in engineering?",
                options: [
                    "They allow systems to be analyzed before they are physically built.",
                    "They remove the need for testing.",
                    "They guarantee perfect designs.",
                    "They eliminate manufacturing costs."
                ],
                answer: "They allow systems to be analyzed before they are physically built.",
                explanation: "Engineers use models to predict performance and improve designs."
            },

            {
                q: "Which statement about mathematical models is true?",
                options: [
                    "They are approximations of real-world systems.",
                    "They are always perfectly accurate.",
                    "They never require assumptions.",
                    "They replace experimental observations."
                ],
                answer: "They are approximations of real-world systems.",
                explanation: "Every model simplifies reality by making assumptions."
            },

            {
                q: "Which is an advantage of mathematical models?",
                options: [
                    "They help predict future behavior.",
                    "They eliminate uncertainty completely.",
                    "They always produce exact answers.",
                    "They never require validation."
                ],
                answer: "They help predict future behavior.",
                explanation: "Models allow scientists and engineers to forecast system behavior under different conditions."
            },

            {
                q: "Which is a limitation of mathematical models?",
                options: [
                    "They depend on assumptions and may not perfectly match reality.",
                    "They cannot solve differential equations.",
                    "They only apply to physics.",
                    "They never use experimental data."
                ],
                answer: "They depend on assumptions and may not perfectly match reality.",
                explanation: "The accuracy of a model depends on its assumptions and the quality of available data."
            },

            {
                q: "What should always accompany the mathematical solution of a real-world problem?",
                options: [
                    "An interpretation of what the solution means in context",
                    "A second derivative",
                    "A determinant calculation",
                    "An inverse matrix"
                ],
                answer: "An interpretation of what the solution means in context",
                explanation: "The mathematics provides numerical results, while interpretation explains their practical meaning."
            }

        ]
    }

























};