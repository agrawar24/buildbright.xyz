const calculus2Lessons = {

    "calculus2-review-of-integration": {
        title: "Review of Integration",
        subtitle: "Review the essential integration concepts from Calculus I.",

        body: `

<h2>Why Review Integration?</h2>

<p>Calculus II builds directly on the integration techniques learned in Calculus I.</p>

<p>Before studying advanced methods, it is important to review the basic ideas.</p>

<hr>

<h2>Topics to Review</h2>

<ul>
<li>Antiderivatives</li>
<li>Indefinite Integrals</li>
<li>Definite Integrals</li>
<li>Reverse Power Rule</li>
<li>u-Substitution</li>
<li>Fundamental Theorem of Calculus</li>
</ul>

<hr>

<h2>Basic Integration Rules</h2>

<p><strong>∫xⁿ dx = xⁿ⁺¹/(n+1)+C</strong> for n ≠ -1</p>
<p><strong>∫1/x dx = ln|x|+C</strong></p>
<p><strong>∫a dx = ax+C</strong></p>

<hr>

<h2>Definite Integrals</h2>

<p>If F is an antiderivative of f, then:</p>

<p><strong>∫ₐᵇ f(x)dx = F(b)-F(a)</strong></p>

<hr>

<h2>u-Substitution Review</h2>

<p>Choose the inside function as u, find du, rewrite the integral, integrate, and substitute back.</p>

<hr>

<h2>Summary</h2>

<ul>
<li>Integration reverses differentiation.</li>
<li>Use the Reverse Power Rule whenever possible.</li>
<li>Use u-substitution for composite functions.</li>
<li>Definite integrals compute accumulated quantities.</li>
</ul>

`,

        questions: [

            {
                q: "Calculus II builds primarily on which Calculus I topic?",
                options: ["Integration", "Limits", "Optimization"],
                answer: "Integration",
                explanation: "Most of Calculus II extends integration techniques."
            },

            {
                q: "The Reverse Power Rule applies when?",
                options: ["n ≠ -1", "n = -1", "n = 0 only"],
                answer: "n ≠ -1",
                explanation: "The exponent -1 is the logarithmic exception."
            },

            {
                q: "u-Substitution reverses which differentiation rule?",
                options: ["Chain Rule", "Product Rule", "Quotient Rule"],
                answer: "Chain Rule",
                explanation: "u-Substitution reverses the Chain Rule."
            },

            {
                q: "The Fundamental Theorem of Calculus Part 2 evaluates?",
                options: ["Definite integrals", "Limits", "Derivatives"],
                answer: "Definite integrals",
                explanation: "FTC Part 2 evaluates definite integrals using antiderivatives."
            },

            {
                q: "Every indefinite integral should include?",
                options: ["+C", "dx²", "The interval length"],
                answer: "+C",
                explanation: "The constant of integration accounts for all possible antiderivatives."
            }

        ]

    }
    ,

    "calculus2-integration-by-parts": {
        title: "Integration by Parts",
        subtitle: "Learn how to integrate products of functions.",

        body: `

<h2>What is Integration by Parts?</h2>

<p><strong>Integration by Parts</strong> is an integration technique used when an integral contains a product of two functions.</p>

<p>It is based on reversing the Product Rule from differentiation.</p>

<hr>

<h2>The Formula</h2>

<p><strong>∫u dv = uv − ∫v du</strong></p>

<hr>

<h2>When Should You Use It?</h2>

<p>Use integration by parts when the integral contains products such as:</p>

<ul>
<li>x e<sup>x</sup></li>
<li>x sin(x)</li>
<li>x ln(x)</li>
<li>polynomial × trig function</li>
<li>polynomial × exponential function</li>
</ul>

<hr>

<h2>Choosing u</h2>

<p>A common strategy is called <strong>LIATE</strong>:</p>

<ul>
<li>L — Logarithmic</li>
<li>I — Inverse Trigonometric</li>
<li>A — Algebraic</li>
<li>T — Trigonometric</li>
<li>E — Exponential</li>
</ul>

<p>The function that appears earlier in LIATE is usually chosen as <strong>u</strong>.</p>

<hr>

<h2>Example</h2>

<p>Evaluate:</p>

<p><strong>∫x e<sup>x</sup> dx</strong></p>

<p>Choose:</p>

<ul>
<li><strong>u = x</strong></li>
<li><strong>dv = e<sup>x</sup> dx</strong></li>
</ul>

<p>Then:</p>

<ul>
<li><strong>du = dx</strong></li>
<li><strong>v = e<sup>x</sup></strong></li>
</ul>

<p>Apply the formula:</p>

<p><strong>∫x e<sup>x</sup> dx = x e<sup>x</sup> − ∫e<sup>x</sup> dx</strong></p>

<p>Final answer:</p>

<p><strong>x e<sup>x</sup> − e<sup>x</sup> + C</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Choosing u poorly.</li>
<li>Forgetting the minus sign.</li>
<li>Forgetting to integrate dv to get v.</li>
<li>Forgetting +C.</li>
</ul>

<hr>

<h2>Summary</h2>

<ul>
<li>Integration by Parts reverses the Product Rule.</li>
<li>Use the formula ∫u dv = uv − ∫v du.</li>
<li>Choose u carefully using LIATE.</li>
<li>Always include +C for indefinite integrals.</li>
</ul>

`,

        questions: [

            {
                q: "Integration by Parts reverses which differentiation rule?",
                options: ["Product Rule", "Chain Rule", "Quotient Rule"],
                answer: "Product Rule",
                explanation: "Integration by Parts comes from reversing the Product Rule."
            },

            {
                q: "The Integration by Parts formula is?",
                options: ["∫u dv = uv − ∫v du", "∫u dv = u + v", "∫u dv = uv"],
                answer: "∫u dv = uv − ∫v du",
                explanation: "This is the standard Integration by Parts formula."
            },

            {
                q: "Integration by Parts is useful for integrals involving?",
                options: ["Products of functions", "Only constants", "Only limits"],
                answer: "Products of functions",
                explanation: "It is commonly used when two different function types are multiplied."
            },

            {
                q: "In ∫x eˣ dx, a good choice for u is?",
                options: ["x", "eˣ", "dx"],
                answer: "x",
                explanation: "Using LIATE, algebraic x is usually chosen as u over exponential eˣ."
            },

            {
                q: "A common mistake in Integration by Parts is?",
                options: ["Forgetting the minus sign", "Using +C", "Finding v"],
                answer: "Forgetting the minus sign",
                explanation: "The formula contains uv minus the remaining integral."
            }

        ]

    }
    ,

    "calculus2-trigonometric-integrals": {
        title: "Trigonometric Integrals",
        subtitle: "Learn techniques for integrating powers and products of trigonometric functions.",

        body: `

<h2>What are Trigonometric Integrals?</h2>

<p><strong>Trigonometric integrals</strong> involve expressions containing powers or products of trigonometric functions.</p>

<p>Many of these integrals require trigonometric identities before they can be evaluated.</p>

<hr>

<h2>Common Identities</h2>

<p><strong>sin²(x)+cos²(x)=1</strong></p>

<p><strong>1+tan²(x)=sec²(x)</strong></p>

<p><strong>1+cot²(x)=csc²(x)</strong></p>

<hr>

<h2>Odd Powers of Sine</h2>

<p>If the power of sine is odd:</p>

<p>Save one sine factor.</p>

<p>Convert the remaining sine terms using:</p>

<p><strong>sin²(x)=1−cos²(x)</strong></p>

<p>Then substitute:</p>

<p><strong>u=cos(x)</strong></p>

<hr>

<h2>Odd Powers of Cosine</h2>

<p>If the power of cosine is odd:</p>

<p>Save one cosine factor.</p>

<p>Convert the remaining cosine terms using:</p>

<p><strong>cos²(x)=1−sin²(x)</strong></p>

<p>Then substitute:</p>

<p><strong>u=sin(x)</strong></p>

<hr>

<h2>Even Powers</h2>

<p>If both powers are even, use the half-angle identities.</p>

<p>Examples include:</p>

<ul>

<li><strong>sin²(x)=½(1−cos2x)</strong></li>

<li><strong>cos²(x)=½(1+cos2x)</strong></li>

</ul>

<hr>

<h2>Example</h2>

<p>Evaluate:</p>

<p><strong>∫sin³(x) dx</strong></p>

<p>Rewrite:</p>

<p><strong>sin³(x)=sin(x)(1−cos²(x))</strong></p>

<p>Let:</p>

<p><strong>u=cos(x)</strong></p>

<p>Then:</p>

<p><strong>du=−sin(x)dx</strong></p>

<p>The integral becomes a polynomial in u.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the wrong identity.</li>

<li>Choosing the wrong substitution.</li>

<li>Forgetting the negative sign when differentiating cosine.</li>

<li>Not simplifying before integrating.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Use identities before integrating.</li>

<li>Odd powers often require saving one factor.</li>

<li>Even powers often require half-angle identities.</li>

<li>u-Substitution usually finishes the problem.</li>

</ul>

`,

        questions: [

            {
                q: "Trigonometric integrals often require?",
                options: [
                    "Trigonometric identities",
                    "Limits",
                    "Matrix multiplication"
                ],
                answer: "Trigonometric identities",
                explanation: "Most trigonometric integrals must first be rewritten using identities."
            },

            {
                q: "If the power of sine is odd, you should?",
                options: [
                    "Save one sine factor",
                    "Differentiate first",
                    "Use partial fractions"
                ],
                answer: "Save one sine factor",
                explanation: "This allows the remaining terms to be rewritten using sin²(x)=1−cos²(x)."
            },

            {
                q: "If the power of cosine is odd, a common substitution is?",
                options: [
                    "u = sin(x)",
                    "u = cos(x)",
                    "u = tan(x)"
                ],
                answer: "u = sin(x)",
                explanation: "Saving one cosine factor leaves the remaining terms in terms of sin(x)."
            },

            {
                q: "When both sine and cosine powers are even, you typically use?",
                options: [
                    "Half-angle identities",
                    "Product Rule",
                    "Integration by Parts"
                ],
                answer: "Half-angle identities",
                explanation: "Half-angle identities simplify even powers of sine and cosine."
            },

            {
                q: "Which identity is always true?",
                options: [
                    "sin²(x)+cos²(x)=1",
                    "sin(x)+cos(x)=1",
                    "tan(x)=sin(x)"
                ],
                answer: "sin²(x)+cos²(x)=1",
                explanation: "This is the fundamental Pythagorean identity."
            },

            {
                q: "A common mistake in trigonometric integrals is?",
                options: [
                    "Using the wrong identity",
                    "Forgetting +C",
                    "Applying Newton's Method"
                ],
                answer: "Using the wrong identity",
                explanation: "Choosing the correct identity is essential for simplifying the integral."
            }

        ]

    }
    ,

    "calculus2-trigonometric-substitution": {
        title: "Trigonometric Substitution",
        subtitle: "Learn how trigonometric substitutions simplify integrals involving square roots.",

        body: `

<h2>What is Trigonometric Substitution?</h2>

<p><strong>Trigonometric substitution</strong> is an integration technique used for integrals containing square roots of quadratic expressions.</p>

<p>The idea is to replace a variable with a trigonometric function so that a trigonometric identity simplifies the square root.</p>

<hr>

<h2>When Should You Use It?</h2>

<p>Trigonometric substitution is commonly used for integrals containing:</p>

<ul>

<li><strong>√(a² − x²)</strong></li>

<li><strong>√(a² + x²)</strong></li>

<li><strong>√(x² − a²)</strong></li>

</ul>

<hr>

<h2>Common Substitutions</h2>

<table border="1" cellpadding="6">

<tr>
<th>Expression</th>
<th>Substitution</th>
</tr>

<tr>
<td>√(a² − x²)</td>
<td>x = a sin(θ)</td>
</tr>

<tr>
<td>√(a² + x²)</td>
<td>x = a tan(θ)</td>
</tr>

<tr>
<td>√(x² − a²)</td>
<td>x = a sec(θ)</td>
</tr>

</table>

<hr>

<h2>Why Does It Work?</h2>

<p>These substitutions use the Pythagorean identities:</p>

<ul>

<li>sin²θ + cos²θ = 1</li>

<li>1 + tan²θ = sec²θ</li>

</ul>

<p>After substitution, the square root simplifies dramatically.</p>

<hr>

<h2>Example</h2>

<p>Evaluate:</p>

<p><strong>∫ dx / √(25 − x²)</strong></p>

<p>Choose:</p>

<p><strong>x = 5 sinθ</strong></p>

<p>Then:</p>

<p><strong>dx = 5 cosθ dθ</strong></p>

<p>The square root becomes:</p>

<p><strong>√(25−25sin²θ)=5cosθ</strong></p>

<p>The integral simplifies to:</p>

<p><strong>∫ dθ</strong></p>

<p>Integrate and convert back to x.</p>

<hr>

<h2>Drawing the Reference Triangle</h2>

<p>After integrating with respect to θ, draw a right triangle to convert the trigonometric expressions back into x.</p>

<p>This step is essential for expressing the final answer in the original variable.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Arc length</li>

<li>Surface area</li>

<li>Physics</li>

<li>Engineering</li>

<li>Advanced geometry</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Choosing the wrong substitution.</li>

<li>Forgetting to replace dx.</li>

<li>Not drawing the reference triangle.</li>

<li>Leaving the final answer in terms of θ.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Recognize the form of the square root.</li>

<li>Choose the correct substitution.</li>

<li>Simplify using trigonometric identities.</li>

<li>Integrate.</li>

<li>Convert the answer back to x.</li>

</ul>

`,

        questions: [

            {
                q: "Trigonometric substitution is primarily used for integrals containing?",
                options: [
                    "Square roots of quadratic expressions",
                    "Only polynomials",
                    "Only logarithms"
                ],
                answer: "Square roots of quadratic expressions",
                explanation: "Trigonometric substitution simplifies square roots involving quadratic expressions."
            },

            {
                q: "For √(a²−x²), the standard substitution is?",
                options: [
                    "x = a sinθ",
                    "x = a tanθ",
                    "x = a secθ"
                ],
                answer: "x = a sinθ",
                explanation: "Using x=a sinθ allows the identity sin²θ+cos²θ=1 to simplify the square root."
            },

            {
                q: "For √(a²+x²), the standard substitution is?",
                options: [
                    "x = a tanθ",
                    "x = a sinθ",
                    "x = a secθ"
                ],
                answer: "x = a tanθ",
                explanation: "Using x=a tanθ simplifies expressions involving a²+x²."
            },

            {
                q: "For √(x²−a²), the standard substitution is?",
                options: [
                    "x = a secθ",
                    "x = a sinθ",
                    "x = a tanθ"
                ],
                answer: "x = a secθ",
                explanation: "Using x=a secθ simplifies expressions involving x²−a²."
            },

            {
                q: "After integrating with respect to θ, you should?",
                options: [
                    "Convert the answer back to x",
                    "Leave the answer in θ",
                    "Differentiate again"
                ],
                answer: "Convert the answer back to x",
                explanation: "The final answer should always be expressed using the original variable."
            },

            {
                q: "A common mistake in trigonometric substitution is?",
                options: [
                    "Leaving the final answer in terms of θ",
                    "Forgetting +C",
                    "Using the Power Rule"
                ],
                answer: "Leaving the final answer in terms of θ",
                explanation: "Always convert back to the original variable before giving the final answer."
            }

        ]

    }
    ,

    "calculus2-partial-fraction-decomposition": {
        title: "Partial Fraction Decomposition",
        subtitle: "Learn how to rewrite rational functions into simpler fractions before integrating.",

        body: `

<h2>What is Partial Fraction Decomposition?</h2>

<p><strong>Partial Fraction Decomposition</strong> is an algebraic technique used to break a complicated rational function into simpler fractions.</p>

<p>Once the fraction is decomposed, each piece can usually be integrated using basic integration rules.</p>

<hr>

<h2>When Can You Use It?</h2>

<p>Partial fractions can be used when:</p>

<ul>

<li>The numerator's degree is less than the denominator's degree.</li>

<li>The denominator can be factored.</li>

</ul>

<p>If the numerator's degree is greater than or equal to the denominator's degree, perform <strong>polynomial long division</strong> first.</p>

<hr>

<h2>Types of Factors</h2>

<p>There are several common denominator types.</p>

<ul>

<li>Distinct linear factors</li>

<li>Repeated linear factors</li>

<li>Irreducible quadratic factors</li>

</ul>

<hr>

<h2>Distinct Linear Factors</h2>

<p>Example:</p>

<p><strong>1 / [(x−1)(x+2)]</strong></p>

<p>Write:</p>

<p><strong>A/(x−1) + B/(x+2)</strong></p>

<p>Solve for A and B.</p>

<hr>

<h2>Repeated Linear Factors</h2>

<p>Example:</p>

<p><strong>1 / (x−1)³</strong></p>

<p>Write:</p>

<p><strong>A/(x−1) + B/(x−1)² + C/(x−1)³</strong></p>

<hr>

<h2>Irreducible Quadratic Factors</h2>

<p>Example:</p>

<p><strong>1 / [(x²+1)(x−2)]</strong></p>

<p>Write:</p>

<p><strong>(Ax+B)/(x²+1) + C/(x−2)</strong></p>

<hr>

<h2>Example</h2>

<p>Evaluate:</p>

<p><strong>∫ (3x+5)/(x²+x−2) dx</strong></p>

<p>Factor the denominator:</p>

<p><strong>(x+2)(x−1)</strong></p>

<p>Write:</p>

<p><strong>A/(x+2) + B/(x−1)</strong></p>

<p>Solve for A and B.</p>

<p>Then integrate each fraction separately.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Engineering</li>

<li>Physics</li>

<li>Differential equations</li>

<li>Electrical circuits</li>

<li>Control systems</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to factor the denominator first.</li>

<li>Using partial fractions before performing long division.</li>

<li>Writing the wrong decomposition.</li>

<li>Making algebra mistakes when solving for constants.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Factor the denominator completely.</li>

<li>Use the correct decomposition form.</li>

<li>Solve for the unknown constants.</li>

<li>Integrate each fraction separately.</li>

</ul>

`,

        questions: [

            {
                q: "Partial Fraction Decomposition is used for?",
                options: [
                    "Rational functions",
                    "Polynomial derivatives",
                    "Limits"
                ],
                answer: "Rational functions",
                explanation: "Partial fractions simplify rational functions before integration."
            },

            {
                q: "Before using partial fractions, you should first?",
                options: [
                    "Factor the denominator",
                    "Differentiate",
                    "Find the derivative"
                ],
                answer: "Factor the denominator",
                explanation: "The denominator must be completely factored first."
            },

            {
                q: "If the numerator's degree is greater than or equal to the denominator's degree, you should first?",
                options: [
                    "Perform polynomial long division",
                    "Use u-substitution",
                    "Use Integration by Parts"
                ],
                answer: "Perform polynomial long division",
                explanation: "Long division is required before decomposition."
            },

            {
                q: "A denominator with distinct linear factors decomposes into?",
                options: [
                    "Separate fractions for each factor",
                    "One large fraction",
                    "A trigonometric substitution"
                ],
                answer: "Separate fractions for each factor",
                explanation: "Each distinct linear factor receives its own fraction."
            },

            {
                q: "After finding the constants A, B, and C, you should?",
                options: [
                    "Integrate each fraction separately",
                    "Differentiate each fraction",
                    "Multiply everything together"
                ],
                answer: "Integrate each fraction separately",
                explanation: "Each simpler fraction can now be integrated individually."
            },

            {
                q: "A common mistake in partial fractions is?",
                options: [
                    "Forgetting to factor the denominator",
                    "Forgetting +C",
                    "Using the Chain Rule"
                ],
                answer: "Forgetting to factor the denominator",
                explanation: "Factoring the denominator is the first step in every partial fraction decomposition."
            }

        ]

    }
    ,

    "calculus2-improper-integrals": {
        title: "Improper Integrals",
        subtitle: "Learn how to evaluate integrals with infinite limits or discontinuities.",

        body: `

<h2>What is an Improper Integral?</h2>

<p>An <strong>improper integral</strong> is a definite integral that cannot be evaluated directly because:</p>

<ul>

<li>One or both limits are infinite.</li>

<li>The integrand becomes infinite at some point in the interval.</li>

</ul>

<p>Instead of evaluating the integral directly, we rewrite it using limits.</p>

<hr>

<h2>Type 1: Infinite Limits of Integration</h2>

<p>Examples include:</p>

<ul>

<li>∫₁^∞ f(x) dx</li>

<li>∫₋∞⁵ f(x) dx</li>

<li>∫₋∞^∞ f(x) dx</li>

</ul>

<p>Replace infinity with a variable, then take a limit.</p>

<p>Example:</p>

<p><strong>∫₁^∞ f(x) dx = lim(b→∞) ∫₁ᵇ f(x) dx</strong></p>

<hr>

<h2>Type 2: Infinite Discontinuities</h2>

<p>If the function becomes undefined or approaches infinity inside the interval, split the integral at that point.</p>

<p>Example:</p>

<p><strong>∫₀¹ 1/√x dx</strong></p>

<p>Rewrite as:</p>

<p><strong>lim(a→0⁺) ∫ₐ¹ 1/√x dx</strong></p>

<hr>

<h2>Convergent vs. Divergent</h2>

<p>If the limit exists and is finite, the improper integral <strong>converges</strong>.</p>

<p>If the limit does not exist or becomes infinite, the improper integral <strong>diverges</strong>.</p>

<hr>

<h2>Example</h2>

<p>Evaluate:</p>

<p><strong>∫₁^∞ 1/x² dx</strong></p>

<p>Rewrite:</p>

<p><strong>lim(b→∞) ∫₁ᵇ x⁻² dx</strong></p>

<p>Antiderivative:</p>

<p><strong>−1/x</strong></p>

<p>Evaluate:</p>

<p><strong>lim(b→∞)(−1/b + 1)</strong></p>

<p>Answer:</p>

<p><strong>1</strong></p>

<p>This improper integral converges.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Probability distributions</li>

<li>Physics</li>

<li>Engineering</li>

<li>Infinite processes</li>

<li>Signal processing</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Treating ∞ as an actual number.</li>

<li>Forgetting to use limits.</li>

<li>Not splitting the integral at discontinuities.</li>

<li>Confusing convergence with divergence.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Improper integrals involve infinity or discontinuities.</li>

<li>Rewrite them using limits.</li>

<li>If the limit exists, the integral converges.</li>

<li>If the limit fails to exist, the integral diverges.</li>

</ul>

`,

        questions: [

            {
                q: "An improper integral has?",
                options: [
                    "Infinite limits or discontinuities",
                    "Only polynomials",
                    "No limits"
                ],
                answer: "Infinite limits or discontinuities",
                explanation: "Improper integrals occur when a definite integral has an infinite interval or an infinite discontinuity."
            },

            {
                q: "Infinity should be treated as?",
                options: [
                    "A limit, not a number",
                    "A real number",
                    "Zero"
                ],
                answer: "A limit, not a number",
                explanation: "Infinity is not a number and must be handled using limits."
            },

            {
                q: "If an improper integral has an infinite upper limit, you should?",
                options: [
                    "Replace it with a variable and take a limit",
                    "Substitute infinity directly",
                    "Ignore the upper limit"
                ],
                answer: "Replace it with a variable and take a limit",
                explanation: "Rewrite the integral using a finite variable and then evaluate the limit."
            },

            {
                q: "An improper integral converges when?",
                options: [
                    "The limit exists and is finite",
                    "The answer is zero",
                    "The interval is finite"
                ],
                answer: "The limit exists and is finite",
                explanation: "A finite limit means the improper integral converges."
            },

            {
                q: "If a function has a discontinuity inside the interval, you should?",
                options: [
                    "Split the integral at the discontinuity",
                    "Ignore the discontinuity",
                    "Use Integration by Parts"
                ],
                answer: "Split the integral at the discontinuity",
                explanation: "Each piece is evaluated separately using limits."
            },

            {
                q: "A common mistake when evaluating improper integrals is?",
                options: [
                    "Treating infinity like an ordinary number",
                    "Forgetting +C",
                    "Using the Product Rule"
                ],
                answer: "Treating infinity like an ordinary number",
                explanation: "Infinity represents an unbounded process and must be handled with limits."
            }

        ]

    }
    ,

    "calculus2-numerical-integration": {
        title: "Numerical Integration",
        subtitle: "Learn how to approximate definite integrals using numerical methods.",

        body: `

<h2>What is Numerical Integration?</h2>

<p><strong>Numerical integration</strong> is the process of approximating the value of a definite integral.</p>

<p>It is useful when the antiderivative is difficult or impossible to find exactly.</p>

<hr>

<h2>Why Use Numerical Integration?</h2>

<p>Some functions cannot be integrated using elementary techniques.</p>

<p>Instead of finding an exact answer, we approximate the integral using geometric methods.</p>

<hr>

<h2>The Midpoint Rule</h2>

<p>The <strong>Midpoint Rule</strong> approximates the area under a curve using rectangles whose heights are determined by the midpoint of each interval.</p>

<p>It often provides better accuracy than using left or right endpoints.</p>

<hr>

<h2>The Trapezoidal Rule</h2>

<p>The <strong>Trapezoidal Rule</strong> approximates the region using trapezoids instead of rectangles.</p>

<p>This generally improves the approximation because it follows the curve more closely.</p>

<hr>

<h2>Simpson's Rule</h2>

<p><strong>Simpson's Rule</strong> approximates the curve using parabolic arcs.</p>

<p>It is usually the most accurate of the three methods when the function is smooth.</p>

<p>Simpson's Rule requires an <strong>even number of subintervals</strong>.</p>

<hr>

<h2>Increasing Accuracy</h2>

<p>All three methods become more accurate as the number of subintervals increases.</p>

<p>Using more subintervals means each approximation follows the curve more closely.</p>

<hr>

<h2>When Are These Methods Used?</h2>

<ul>

<li>Computer calculations</li>

<li>Scientific simulations</li>

<li>Engineering applications</li>

<li>Physics</li>

<li>Data analysis</li>

</ul>

<hr>

<h2>Comparing the Methods</h2>

<table border="1" cellpadding="6">

<tr>
<th>Method</th>
<th>Shape Used</th>
<th>Typical Accuracy</th>
</tr>

<tr>
<td>Midpoint Rule</td>
<td>Rectangles</td>
<td>Good</td>
</tr>

<tr>
<td>Trapezoidal Rule</td>
<td>Trapezoids</td>
<td>Better</td>
</tr>

<tr>
<td>Simpson's Rule</td>
<td>Parabolas</td>
<td>Best (usually)</td>
</tr>

</table>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using too few subintervals.</li>

<li>Forgetting Simpson's Rule requires an even number of subintervals.</li>

<li>Confusing approximation with an exact answer.</li>

<li>Using the wrong interval width.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Numerical integration approximates definite integrals.</li>

<li>Midpoint Rule uses rectangles.</li>

<li>Trapezoidal Rule uses trapezoids.</li>

<li>Simpson's Rule uses parabolas.</li>

<li>More subintervals generally improve accuracy.</li>

</ul>

`,

        questions: [

            {
                q: "Numerical integration is used to?",
                options: [
                    "Approximate definite integrals",
                    "Find derivatives",
                    "Solve limits"
                ],
                answer: "Approximate definite integrals",
                explanation: "Numerical integration estimates the value of definite integrals."
            },

            {
                q: "The Midpoint Rule uses?",
                options: [
                    "Rectangles",
                    "Triangles",
                    "Circles"
                ],
                answer: "Rectangles",
                explanation: "The Midpoint Rule uses rectangles with heights determined by the midpoint."
            },

            {
                q: "The Trapezoidal Rule uses?",
                options: [
                    "Trapezoids",
                    "Rectangles",
                    "Parabolas"
                ],
                answer: "Trapezoids",
                explanation: "Each subinterval is approximated using a trapezoid."
            },

            {
                q: "Simpson's Rule approximates the curve using?",
                options: [
                    "Parabolas",
                    "Straight lines",
                    "Rectangles"
                ],
                answer: "Parabolas",
                explanation: "Simpson's Rule fits quadratic curves over each pair of subintervals."
            },

            {
                q: "Simpson's Rule requires?",
                options: [
                    "An even number of subintervals",
                    "An odd number of subintervals",
                    "Only one subinterval"
                ],
                answer: "An even number of subintervals",
                explanation: "This is a required condition for Simpson's Rule."
            },

            {
                q: "Increasing the number of subintervals usually?",
                options: [
                    "Improves the approximation",
                    "Makes the approximation worse",
                    "Has no effect"
                ],
                answer: "Improves the approximation",
                explanation: "More subintervals allow the approximation to better follow the curve."
            }

        ]

    }
    ,

    "calculus2-arc-length": {
        title: "Arc Length",
        subtitle: "Learn how integration is used to calculate the exact length of a curve.",

        body: `

<h2>What is Arc Length?</h2>

<p><strong>Arc length</strong> is the distance measured along a curve between two points.</p>

<p>Unlike the straight-line distance between two points, arc length follows the shape of the curve.</p>

<hr>

<h2>Why Can't We Use the Distance Formula?</h2>

<p>The Distance Formula only works for straight line segments.</p>

<p>Curved paths require infinitely many tiny line segments whose lengths are added together.</p>

<p>This accumulation is exactly what integration does.</p>

<hr>

<h2>The Arc Length Formula</h2>

<p>If a function is written as <strong>y = f(x)</strong>, then the arc length from <strong>x = a</strong> to <strong>x = b</strong> is:</p>

<p><strong>L = ∫ₐᵇ √(1 + [f'(x)]²) dx</strong></p>

<p>The derivative measures how rapidly the curve changes, while the integral adds the lengths of infinitely many tiny segments.</p>

<hr>

<h2>Steps for Finding Arc Length</h2>

<ol>

<li>Differentiate the function.</li>

<li>Square the derivative.</li>

<li>Add 1.</li>

<li>Take the square root.</li>

<li>Evaluate the definite integral.</li>

</ol>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<p><strong>y = x²</strong></p>

<p>on the interval <strong>[0,1]</strong>.</p>

<p>First compute:</p>

<p><strong>y' = 2x</strong></p>

<p>Then substitute into the formula:</p>

<p><strong>L = ∫₀¹ √(1 + 4x²) dx</strong></p>

<p>This integral cannot be solved using basic integration rules and requires more advanced techniques or numerical methods.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Road construction</li>

<li>Bridge design</li>

<li>Roller coaster engineering</li>

<li>Robot motion planning</li>

<li>Computer graphics</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Forgetting to square the derivative.</li>

<li>Forgetting the +1 inside the square root.</li>

<li>Using the original function instead of its derivative.</li>

<li>Mixing arc length with area formulas.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Arc length measures distance along a curve.</li>

<li>The derivative appears inside the formula.</li>

<li>Integration adds infinitely many tiny line segments.</li>

<li>Some arc length integrals require advanced techniques or numerical approximation.</li>

</ul>

`,

        questions: [

            {
                q: "Arc length measures?",
                options: [
                    "The distance along a curve",
                    "The area under a curve",
                    "The slope of a tangent line"
                ],
                answer: "The distance along a curve",
                explanation: "Arc length measures the length of the curved path between two points."
            },

            {
                q: "The arc length formula contains which derivative?",
                options: [
                    "f'(x)",
                    "f''(x)",
                    "f(x)"
                ],
                answer: "f'(x)",
                explanation: "The first derivative describes how rapidly the curve changes."
            },

            {
                q: "Before taking the square root, you should?",
                options: [
                    "Add 1 to the square of the derivative",
                    "Subtract the derivative",
                    "Integrate first"
                ],
                answer: "Add 1 to the square of the derivative",
                explanation: "The formula is √(1 + [f'(x)]²)."
            },

            {
                q: "Why do we use integration for arc length?",
                options: [
                    "To add infinitely many tiny line segments",
                    "To find derivatives",
                    "To simplify polynomials"
                ],
                answer: "To add infinitely many tiny line segments",
                explanation: "Integration accumulates the lengths of tiny segments along the curve."
            },

            {
                q: "Some arc length integrals require?",
                options: [
                    "Advanced integration techniques or numerical methods",
                    "Only the Power Rule",
                    "No calculus"
                ],
                answer: "Advanced integration techniques or numerical methods",
                explanation: "Many arc length integrals cannot be evaluated using basic integration rules."
            },

            {
                q: "A common mistake when finding arc length is?",
                options: [
                    "Forgetting to square the derivative",
                    "Forgetting +C",
                    "Using the Product Rule"
                ],
                answer: "Forgetting to square the derivative",
                explanation: "The derivative must always be squared inside the square root."
            }

        ]

    }
    ,

    "calculus2-surface-area-of-revolution": {
        title: "Surface Area of Revolution",
        subtitle: "Learn how integration calculates the surface area of solids formed by rotating curves.",

        body: `

<h2>What is a Surface of Revolution?</h2>

<p>A <strong>surface of revolution</strong> is formed when a curve is rotated around an axis.</p>

<p>Instead of creating a flat region, the rotation creates a three-dimensional surface.</p>

<hr>

<h2>Examples</h2>

<ul>

<li>A vase</li>

<li>A drinking glass</li>

<li>A satellite dish</li>

<li>A rocket nose cone</li>

<li>A light bulb</li>

</ul>

<hr>

<h2>Surface Area Formula (Rotation About the x-axis)</h2>

<p>If <strong>y = f(x)</strong>, then the surface area from <strong>x=a</strong> to <strong>x=b</strong> is:</p>

<p><strong>S = 2π ∫ₐᵇ y √(1 + [y']²) dx</strong></p>

<p>The factor <strong>2πy</strong> represents the circumference of each circular strip.</p>

<p>The square root term represents the tiny arc length element.</p>

<hr>

<h2>Surface Area Formula (Rotation About the y-axis)</h2>

<p>If the curve rotates around the y-axis, the formula becomes:</p>

<p><strong>S = 2π ∫ₐᵇ x √(1 + [y']²) dx</strong></p>

<hr>

<h2>Steps</h2>

<ol>

<li>Differentiate the function.</li>

<li>Square the derivative.</li>

<li>Add 1.</li>

<li>Take the square root.</li>

<li>Multiply by the radius.</li>

<li>Evaluate the definite integral.</li>

</ol>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<p><strong>y=x²</strong></p>

<p>is rotated about the x-axis on the interval <strong>[0,1]</strong>.</p>

<p>First compute:</p>

<p><strong>y'=2x</strong></p>

<p>Then substitute into the formula:</p>

<p><strong>S=2π∫₀¹ x²√(1+4x²)dx</strong></p>

<p>This integral typically requires advanced integration techniques or numerical methods.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Engineering design</li>

<li>Manufacturing</li>

<li>Architecture</li>

<li>Computer graphics</li>

<li>Industrial design</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the arc length formula instead of the surface area formula.</li>

<li>Using the wrong radius.</li>

<li>Forgetting the factor of 2π.</li>

<li>Forgetting to square the derivative.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Surface area is found by rotating a curve.</li>

<li>The formulas depend on the axis of rotation.</li>

<li>The radius determines whether x or y appears in the formula.</li>

<li>Many surface area integrals require advanced integration techniques.</li>

</ul>

`,

        questions: [

            {
                q: "A surface of revolution is formed by?",
                options: [
                    "Rotating a curve around an axis",
                    "Reflecting a graph",
                    "Finding a derivative"
                ],
                answer: "Rotating a curve around an axis",
                explanation: "Rotating a curve creates a three-dimensional surface."
            },

            {
                q: "When rotating about the x-axis, the radius is?",
                options: [
                    "y",
                    "x",
                    "y'"
                ],
                answer: "y",
                explanation: "The distance from the x-axis to the curve is the radius."
            },

            {
                q: "When rotating about the y-axis, the radius is?",
                options: [
                    "x",
                    "y",
                    "π"
                ],
                answer: "x",
                explanation: "The distance from the y-axis to the curve is the radius."
            },

            {
                q: "The surface area formula always includes?",
                options: [
                    "2π",
                    "π²",
                    "4π"
                ],
                answer: "2π",
                explanation: "Each thin strip forms a circular band with circumference 2πr."
            },

            {
                q: "The square root term comes from?",
                options: [
                    "The arc length formula",
                    "The Product Rule",
                    "The Chain Rule"
                ],
                answer: "The arc length formula",
                explanation: "Surface area uses the differential arc length element."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Forgetting the factor of 2π",
                    "Forgetting +C",
                    "Using u-substitution first"
                ],
                answer: "Forgetting the factor of 2π",
                explanation: "The circumference factor 2π is an essential part of the formula."
            }

        ]

    }
    ,

    "calculus2-unit-1-review": {
        title: "Unit 1 Review",
        subtitle: "Review all advanced integration techniques from Unit 1.",

        body: `

<h2>Unit 1 Review</h2>

<p>This review summarizes every major concept covered in Unit 1.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Review of Integration</li>

<li>Integration by Parts</li>

<li>Trigonometric Integrals</li>

<li>Trigonometric Substitution</li>

<li>Partial Fraction Decomposition</li>

<li>Improper Integrals</li>

<li>Numerical Integration</li>

<li>Arc Length</li>

<li>Surface Area of Revolution</li>

</ul>

<hr>

<h2>Key Ideas</h2>

<ul>

<li>Integration reverses differentiation.</li>

<li>Integration by Parts reverses the Product Rule.</li>

<li>Trigonometric identities simplify many integrals.</li>

<li>Trigonometric substitution simplifies square roots involving quadratic expressions.</li>

<li>Partial fractions rewrite rational functions into simpler fractions.</li>

<li>Improper integrals are evaluated using limits.</li>

<li>Numerical methods approximate difficult definite integrals.</li>

<li>Arc length measures the distance along a curve.</li>

<li>Surface area formulas combine arc length with the radius of rotation.</li>

</ul>

<hr>

<h2>Important Formulas</h2>

<ul>

<li>∫u dv = uv − ∫v du</li>

<li>sin²(x)+cos²(x)=1</li>

<li>1+tan²(x)=sec²(x)</li>

<li>Arc Length: L = ∫ₐᵇ √(1+[f'(x)]²) dx</li>

<li>Surface Area (x-axis): S = 2π∫ₐᵇ y√(1+[y']²) dx</li>

<li>Surface Area (y-axis): S = 2π∫ₐᵇ x√(1+[y']²) dx</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Choosing the wrong function for Integration by Parts.</li>

<li>Using the wrong trigonometric identity.</li>

<li>Selecting the wrong trigonometric substitution.</li>

<li>Forgetting polynomial long division before partial fractions.</li>

<li>Treating infinity as an ordinary number.</li>

<li>Using too few subintervals for numerical integration.</li>

<li>Confusing arc length with surface area.</li>

<li>Using the wrong radius in surface area formulas.</li>

</ul>

<hr>

<h2>Ready?</h2>

<p>If you understand each integration technique, numerical methods, arc length, and surface area, you are ready for the Unit 1 Test.</p>

`,

        questions: [

            {
                q: "Integration by Parts reverses which rule?",
                options: [
                    "Product Rule",
                    "Chain Rule",
                    "Quotient Rule"
                ],
                answer: "Product Rule",
                explanation: "Integration by Parts is derived from the Product Rule."
            },

            {
                q: "Trigonometric substitution is primarily used for?",
                options: [
                    "Square roots involving quadratic expressions",
                    "Linear equations",
                    "Factoring polynomials"
                ],
                answer: "Square roots involving quadratic expressions",
                explanation: "It simplifies radicals using trigonometric identities."
            },

            {
                q: "Partial Fraction Decomposition is applied to?",
                options: [
                    "Rational functions",
                    "Exponential functions",
                    "Absolute value functions"
                ],
                answer: "Rational functions",
                explanation: "It rewrites rational functions into simpler fractions."
            },

            {
                q: "Improper integrals are evaluated using?",
                options: [
                    "Limits",
                    "Factoring",
                    "Long division"
                ],
                answer: "Limits",
                explanation: "Limits handle infinite intervals and discontinuities."
            },

            {
                q: "Numerical integration is used to?",
                options: [
                    "Approximate definite integrals",
                    "Find derivatives",
                    "Solve systems of equations"
                ],
                answer: "Approximate definite integrals",
                explanation: "It estimates the value of definite integrals."
            },

            {
                q: "Arc length measures?",
                options: [
                    "The distance along a curve",
                    "The area under a curve",
                    "The slope of a tangent line"
                ],
                answer: "The distance along a curve",
                explanation: "Arc length is the length of the curved path."
            }

        ]

    }
    ,

    "calculus2-unit-1-test": {
        title: "Unit 1 Test",
        subtitle: "Test your understanding of advanced integration techniques.",

        body: `

<h2>Unit 1 Test</h2>

<p>This assessment covers every topic from Unit 1.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Review of Integration</li>

<li>Integration by Parts</li>

<li>Trigonometric Integrals</li>

<li>Trigonometric Substitution</li>

<li>Partial Fraction Decomposition</li>

<li>Improper Integrals</li>

<li>Numerical Integration</li>

<li>Arc Length</li>

<li>Surface Area of Revolution</li>

</ul>

<hr>

<h2>Instructions</h2>

<p>Complete this assessment without using notes. A strong score indicates you are ready to continue with Applications of Integration.</p>

`,

        questions: [

            {
                q: "Integration by Parts is based on reversing which differentiation rule?",
                options: [
                    "Product Rule",
                    "Chain Rule",
                    "Power Rule"
                ],
                answer: "Product Rule",
                explanation: "Integration by Parts is derived directly from the Product Rule."
            },

            {
                q: "The LIATE guideline helps you choose?",
                options: [
                    "The function to use as u",
                    "The interval of integration",
                    "The derivative"
                ],
                answer: "The function to use as u",
                explanation: "LIATE is a common strategy for selecting u in Integration by Parts."
            },

            {
                q: "Trigonometric integrals often require?",
                options: [
                    "Trigonometric identities",
                    "Polynomial long division",
                    "Partial fractions"
                ],
                answer: "Trigonometric identities",
                explanation: "Most trigonometric integrals are simplified using identities before integrating."
            },

            {
                q: "For √(a²−x²), the standard substitution is?",
                options: [
                    "x = a sinθ",
                    "x = a tanθ",
                    "x = a secθ"
                ],
                answer: "x = a sinθ",
                explanation: "This substitution simplifies the radical using sin²θ + cos²θ = 1."
            },

            {
                q: "Partial Fraction Decomposition is used for?",
                options: [
                    "Rational functions",
                    "Exponential functions",
                    "Logarithmic functions"
                ],
                answer: "Rational functions",
                explanation: "It rewrites rational functions into simpler fractions that are easier to integrate."
            },

            {
                q: "Before using partial fractions, you should first?",
                options: [
                    "Factor the denominator",
                    "Differentiate",
                    "Use Simpson's Rule"
                ],
                answer: "Factor the denominator",
                explanation: "The denominator must be factored completely before decomposing."
            },

            {
                q: "Improper integrals are evaluated using?",
                options: [
                    "Limits",
                    "Derivatives",
                    "Matrix operations"
                ],
                answer: "Limits",
                explanation: "Limits handle infinite intervals and discontinuities."
            },

            {
                q: "If an improper integral has an infinite upper limit, you should?",
                options: [
                    "Replace infinity with a variable and take a limit",
                    "Treat infinity as a number",
                    "Ignore the upper limit"
                ],
                answer: "Replace infinity with a variable and take a limit",
                explanation: "Infinity is not a number and must be handled using limits."
            },

            {
                q: "Which numerical integration method requires an even number of subintervals?",
                options: [
                    "Simpson's Rule",
                    "Midpoint Rule",
                    "Trapezoidal Rule"
                ],
                answer: "Simpson's Rule",
                explanation: "Simpson's Rule requires an even number of subintervals."
            },

            {
                q: "Which numerical integration method generally provides the greatest accuracy for smooth functions?",
                options: [
                    "Simpson's Rule",
                    "Midpoint Rule",
                    "Left Endpoint Rule"
                ],
                answer: "Simpson's Rule",
                explanation: "Simpson's Rule usually provides the most accurate approximation for smooth functions."
            },

            {
                q: "Arc length measures?",
                options: [
                    "The distance along a curve",
                    "The area under a curve",
                    "The slope of the tangent line"
                ],
                answer: "The distance along a curve",
                explanation: "Arc length is the length of the curved path between two points."
            },

            {
                q: "The arc length formula contains?",
                options: [
                    "√(1+[f'(x)]²)",
                    "√(f(x))",
                    "1/f(x)"
                ],
                answer: "√(1+[f'(x)]²)",
                explanation: "The derivative appears inside the square root in the arc length formula."
            },

            {
                q: "When rotating a curve about the x-axis, the radius is?",
                options: [
                    "y",
                    "x",
                    "y'"
                ],
                answer: "y",
                explanation: "The radius is the distance from the x-axis to the curve."
            },

            {
                q: "Surface area formulas always include which constant?",
                options: [
                    "2π",
                    "π²",
                    "4π"
                ],
                answer: "2π",
                explanation: "The circumference of each circular strip is 2πr."
            },

            {
                q: "A common mistake in surface area problems is?",
                options: [
                    "Using the wrong radius",
                    "Forgetting +C",
                    "Using long division"
                ],
                answer: "Using the wrong radius",
                explanation: "The radius depends on the axis of rotation."

            },

            {
                q: "A common mistake when evaluating improper integrals is?",
                options: [
                    "Treating infinity like an ordinary number",
                    "Using the Power Rule",
                    "Forgetting to differentiate"
                ],
                answer: "Treating infinity like an ordinary number",
                explanation: "Infinity must always be handled using limits."
            },

            {
                q: "Partial Fraction Decomposition may require polynomial long division when?",
                options: [
                    "The numerator's degree is greater than or equal to the denominator's degree",
                    "The denominator has linear factors",
                    "The function contains trigonometric terms"
                ],
                answer: "The numerator's degree is greater than or equal to the denominator's degree",
                explanation: "Long division must be performed before decomposition when the rational function is improper."
            },

            {
                q: "Increasing the number of subintervals in numerical integration generally?",
                options: [
                    "Improves the approximation",
                    "Makes the approximation worse",
                    "Has no effect"
                ],
                answer: "Improves the approximation",
                explanation: "Smaller subintervals allow the approximation to follow the curve more closely."
            },

            {
                q: "The primary purpose of Unit 1 was to?",
                options: [
                    "Learn advanced integration techniques",
                    "Study derivatives",
                    "Review limits"
                ],
                answer: "Learn advanced integration techniques",
                explanation: "Unit 1 expands integration far beyond the basic techniques learned in Calculus I."
            }

        ]

    }
    ,

    "calculus2-volumes-by-cross-sections": {
        title: "Volumes by Cross Sections",
        subtitle: "Learn how integration calculates the volume of solids using cross-sectional areas.",

        body: `

<h2>What are Cross Sections?</h2>

<p>A <strong>cross section</strong> is the shape formed when a solid is sliced by a plane.</p>

<p>If we know the area of every slice, we can add all of them together using integration to find the total volume.</p>

<hr>

<h2>The Basic Idea</h2>

<p>Imagine cutting a loaf of bread into many thin slices.</p>

<p>Each slice has a small volume.</p>

<p>Adding the volumes of infinitely many thin slices gives the exact volume of the entire solid.</p>

<hr>

<h2>The Volume Formula</h2>

<p>If <strong>A(x)</strong> represents the area of each cross section, then:</p>

<p><strong>V = ∫ₐᵇ A(x) dx</strong></p>

<p>The function A(x) changes depending on the shape of the cross section.</p>

<hr>

<h2>Common Cross Sections</h2>

<ul>

<li>Squares</li>

<li>Rectangles</li>

<li>Semicircles</li>

<li>Equilateral triangles</li>

<li>Isosceles right triangles</li>

</ul>

<hr>

<h2>Example</h2>

<p>Suppose every cross section perpendicular to the x-axis is a square.</p>

<p>If each square has side length:</p>

<p><strong>s(x)=x</strong></p>

<p>Then the area of one slice is:</p>

<p><strong>A(x)=x²</strong></p>

<p>The volume from x=0 to x=2 becomes:</p>

<p><strong>V=∫₀² x² dx</strong></p>

<p>Evaluate the integral to obtain the exact volume.</p>

<hr>

<h2>Why Integration Works</h2>

<p>Each slice has a tiny thickness of <strong>dx</strong>.</p>

<p>Multiplying the cross-sectional area by the tiny thickness gives a tiny volume.</p>

<p>The definite integral adds all these tiny volumes together.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Mechanical engineering</li>

<li>Architecture</li>

<li>Medical imaging</li>

<li>Manufacturing</li>

<li>3D printing</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the wrong cross-sectional area formula.</li>

<li>Using the side length instead of the area.</li>

<li>Integrating over the wrong interval.</li>

<li>Confusing area with volume.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Volume equals the sum of infinitely many thin slices.</li>

<li>The area of each slice is represented by A(x).</li>

<li>The volume formula is V = ∫ₐᵇ A(x) dx.</li>

<li>The cross-sectional shape determines the area formula.</li>

</ul>

`,

        questions: [

            {
                q: "A cross section is?",
                options: [
                    "A slice through a solid",
                    "A tangent line",
                    "A derivative"
                ],
                answer: "A slice through a solid",
                explanation: "A cross section is the shape produced by slicing a solid."
            },

            {
                q: "The volume formula for cross sections is?",
                options: [
                    "V = ∫ₐᵇ A(x) dx",
                    "V = πr²h",
                    "V = lwh"
                ],
                answer: "V = ∫ₐᵇ A(x) dx",
                explanation: "The volume is found by integrating the cross-sectional area."
            },

            {
                q: "A(x) represents?",
                options: [
                    "The area of each cross section",
                    "The derivative",
                    "The radius"
                ],
                answer: "The area of each cross section",
                explanation: "Each cross section has an area A(x)."
            },

            {
                q: "If each cross section is a square with side length x, its area is?",
                options: [
                    "x²",
                    "2x",
                    "x"
                ],
                answer: "x²",
                explanation: "The area of a square is side²."
            },

            {
                q: "Integration works because it?",
                options: [
                    "Adds infinitely many tiny volumes",
                    "Finds derivatives",
                    "Factors polynomials"
                ],
                answer: "Adds infinitely many tiny volumes",
                explanation: "Each thin slice contributes a tiny volume to the total."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Using the side length instead of the area",
                    "Forgetting +C",
                    "Using the Product Rule"
                ],
                answer: "Using the side length instead of the area",
                explanation: "The integral requires the cross-sectional area, not just a length."
            }

        ]

    }
    ,

    "calculus2-disk-method": {
        title: "Disk Method",
        subtitle: "Learn how to find volumes of solids formed by rotating regions around an axis.",

        body: `

<h2>What is the Disk Method?</h2>

<p>The <strong>Disk Method</strong> is used to find the volume of a solid formed when a region is rotated around an axis.</p>

<p>Each cross section of the solid is a <strong>solid disk</strong>.</p>

<hr>

<h2>When Should You Use It?</h2>

<p>Use the Disk Method when:</p>

<ul>

<li>The solid is formed by rotating a region.</li>

<li>There is <strong>no hole</strong> in the middle.</li>

<li>Each cross section is a solid circle.</li>

</ul>

<hr>

<h2>Volume Formula</h2>

<p>When rotating about the x-axis:</p>

<p><strong>V = π∫ₐᵇ [f(x)]² dx</strong></p>

<p>The radius of each disk is simply the distance from the axis of rotation to the curve.</p>

<hr>

<h2>Why Does the Formula Work?</h2>

<p>The area of one disk is:</p>

<p><strong>A = πr²</strong></p>

<p>Each disk has a tiny thickness of <strong>dx</strong>.</p>

<p>Adding the volumes of infinitely many disks gives the total volume.</p>

<hr>

<h2>Example</h2>

<p>Rotate:</p>

<p><strong>y = x</strong></p>

<p>about the x-axis on the interval <strong>[0,2]</strong>.</p>

<p>The radius is:</p>

<p><strong>r = x</strong></p>

<p>The volume becomes:</p>

<p><strong>V = π∫₀² x² dx</strong></p>

<p>Evaluate the integral to obtain the exact volume.</p>

<hr>

<h2>Rotation About the y-axis</h2>

<p>If rotating around the y-axis, integrate with respect to y whenever appropriate.</p>

<p>The same idea applies—the radius is always measured from the axis of rotation.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Manufacturing</li>

<li>Engineering</li>

<li>Medicine</li>

<li>Architecture</li>

<li>Industrial design</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the diameter instead of the radius.</li>

<li>Forgetting to square the radius.</li>

<li>Forgetting the factor of π.</li>

<li>Using the Disk Method when the solid has a hole.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>The Disk Method finds volumes of solids of revolution.</li>

<li>Each cross section is a solid disk.</li>

<li>The area of each disk is πr².</li>

<li>The radius must always be squared.</li>

<li>Use the Washer Method instead if there is a hole.</li>

</ul>

`,

        questions: [

            {
                q: "The Disk Method is used to find?",
                options: [
                    "The volume of a solid of revolution",
                    "The surface area of a solid",
                    "The area under a curve"
                ],
                answer: "The volume of a solid of revolution",
                explanation: "The Disk Method computes volumes formed by rotating a region around an axis."
            },

            {
                q: "The Disk Method is appropriate when?",
                options: [
                    "There is no hole in the solid",
                    "There is a hole in the solid",
                    "The function is discontinuous"
                ],
                answer: "There is no hole in the solid",
                explanation: "Solid cross sections are complete disks with no inner radius."
            },

            {
                q: "The area of each disk is?",
                options: [
                    "πr²",
                    "2πr",
                    "πd"
                ],
                answer: "πr²",
                explanation: "Each cross section is a circle whose area is πr²."
            },

            {
                q: "In the Disk Method, the radius is?",
                options: [
                    "The distance from the axis of rotation to the curve",
                    "The diameter of the solid",
                    "The width of the interval"
                ],
                answer: "The distance from the axis of rotation to the curve",
                explanation: "The radius is always measured from the axis of rotation."
            },

            {
                q: "A common mistake when using the Disk Method is?",
                options: [
                    "Forgetting to square the radius",
                    "Forgetting +C",
                    "Using the Product Rule"
                ],
                answer: "Forgetting to square the radius",
                explanation: "The area formula for a circle requires the radius to be squared."
            },

            {
                q: "If the solid has a hole in the middle, you should use?",
                options: [
                    "The Washer Method",
                    "The Disk Method",
                    "The Midpoint Rule"
                ],
                answer: "The Washer Method",
                explanation: "The Washer Method accounts for both an outer radius and an inner radius."
            }

        ]

    }
    ,

    "calculus2-washer-method": {
        title: "Washer Method",
        subtitle: "Learn how to find the volume of solids of revolution with hollow centers.",

        body: `

<h2>What is the Washer Method?</h2>

<p>The <strong>Washer Method</strong> is used when rotating a region around an axis creates a solid with a <strong>hole in the middle</strong>.</p>

<p>Each cross section looks like a washer, which is a disk with its center removed.</p>

<hr>

<h2>When Should You Use It?</h2>

<p>Use the Washer Method when:</p>

<ul>

<li>The solid is formed by rotating a region around an axis.</li>

<li>There is an inner radius and an outer radius.</li>

<li>The cross sections are hollow circles.</li>

</ul>

<hr>

<h2>The Volume Formula</h2>

<p>When rotating about the x-axis:</p>

<p><strong>V = π∫ₐᵇ [R(x)² − r(x)²] dx</strong></p>

<p>where:</p>

<ul>

<li><strong>R(x)</strong> = outer radius</li>

<li><strong>r(x)</strong> = inner radius</li>

</ul>

<hr>

<h2>Why Does the Formula Work?</h2>

<p>The area of one washer is found by subtracting the area of the inner circle from the outer circle.</p>

<p><strong>Area = πR² − πr² = π(R² − r²)</strong></p>

<p>Integration adds the volumes of infinitely many washers.</p>

<hr>

<h2>Example</h2>

<p>Rotate the region between:</p>

<p><strong>y = x</strong></p>

<p>and</p>

<p><strong>y = x²</strong></p>

<p>about the x-axis on the interval <strong>[0,1]</strong>.</p>

<p>Outer radius:</p>

<p><strong>R(x)=x</strong></p>

<p>Inner radius:</p>

<p><strong>r(x)=x²</strong></p>

<p>The volume is:</p>

<p><strong>V = π∫₀¹ (x² − x⁴) dx</strong></p>

<hr>

<h2>Choosing the Radii</h2>

<p>Always measure both radii from the axis of rotation.</p>

<p>The outer radius is the farther curve.</p>

<p>The inner radius is the closer curve.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Pipes</li>

<li>Mechanical parts</li>

<li>Turbines</li>

<li>Bearings</li>

<li>Industrial design</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Reversing the inner and outer radii.</li>

<li>Forgetting to square the radii.</li>

<li>Forgetting π.</li>

<li>Using the Disk Method when there is a hole.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>The Washer Method is used for hollow solids.</li>

<li>Subtract the inner area from the outer area.</li>

<li>The formula is π(R² − r²).</li>

<li>Always identify the outer and inner radii correctly.</li>

</ul>

`,

        questions: [

            {
                q: "The Washer Method is used when?",
                options: [
                    "The solid has a hole in the middle",
                    "The solid has no hole",
                    "The graph is discontinuous"
                ],
                answer: "The solid has a hole in the middle",
                explanation: "Washers model hollow solids formed by rotation."
            },

            {
                q: "The Washer Method formula is?",
                options: [
                    "π∫(R²−r²)dx",
                    "π∫Rdx",
                    "2π∫Rdx"
                ],
                answer: "π∫(R²−r²)dx",
                explanation: "Subtract the squared inner radius from the squared outer radius."
            },

            {
                q: "R(x) represents?",
                options: [
                    "The outer radius",
                    "The inner radius",
                    "The diameter"
                ],
                answer: "The outer radius",
                explanation: "R(x) is the distance from the axis of rotation to the outer curve."
            },

            {
                q: "The inner radius is?",
                options: [
                    "The distance from the axis to the inner curve",
                    "The diameter of the hole",
                    "The width of the interval"
                ],
                answer: "The distance from the axis to the inner curve",
                explanation: "The inner radius is measured from the axis of rotation."
            },

            {
                q: "A common mistake when using the Washer Method is?",
                options: [
                    "Reversing the inner and outer radii",
                    "Forgetting +C",
                    "Using Integration by Parts"
                ],
                answer: "Reversing the inner and outer radii",
                explanation: "Always subtract the inner radius squared from the outer radius squared."
            },

            {
                q: "If there is no hole in the solid, you should usually use?",
                options: [
                    "The Disk Method",
                    "The Washer Method",
                    "The Shell Method"
                ],
                answer: "The Disk Method",
                explanation: "The Disk Method is appropriate when each cross section is a solid disk."
            }

        ]

    }
    ,

    "calculus2-shell-method": {
        title: "Shell Method",
        subtitle: "Learn how to find volumes of solids of revolution using cylindrical shells.",

        body: `

<h2>What is the Shell Method?</h2>

<p>The <strong>Shell Method</strong> finds the volume of a solid of revolution by adding the volumes of many thin cylindrical shells.</p>

<p>Instead of slicing the solid into disks or washers, the Shell Method wraps thin rectangles around the axis of rotation.</p>

<hr>

<h2>When Should You Use It?</h2>

<p>The Shell Method is useful when:</p>

<ul>

<li>The Disk or Washer Method would require solving for the inverse function.</li>

<li>Vertical slices naturally produce cylindrical shells.</li>

<li>The radius and height are easy to identify.</li>

</ul>

<hr>

<h2>The Formula</h2>

<p>When rotating around the y-axis:</p>

<p><strong>V = 2π∫ₐᵇ (radius)(height) dx</strong></p>

<p>More specifically:</p>

<p><strong>V = 2π∫ₐᵇ x·f(x) dx</strong></p>

<p>where:</p>

<ul>

<li><strong>x</strong> is the radius.</li>

<li><strong>f(x)</strong> is the height.</li>

</ul>

<hr>

<h2>Why Does the Formula Work?</h2>

<p>Each shell has:</p>

<ul>

<li>Circumference = <strong>2πr</strong></li>

<li>Height = <strong>h</strong></li>

<li>Thickness = <strong>dx</strong></li>

</ul>

<p>The volume of one shell is:</p>

<p><strong>(Circumference)(Height)(Thickness)</strong></p>

<p><strong>= 2πrh dx</strong></p>

<p>Integration adds the volumes of infinitely many shells.</p>

<hr>

<h2>Example</h2>

<p>Rotate:</p>

<p><strong>y = x²</strong></p>

<p>about the y-axis on the interval <strong>[0,2]</strong>.</p>

<p>Radius:</p>

<p><strong>r = x</strong></p>

<p>Height:</p>

<p><strong>h = x²</strong></p>

<p>The volume becomes:</p>

<p><strong>V = 2π∫₀² x(x²) dx</strong></p>

<p><strong>= 2π∫₀² x³ dx</strong></p>

<hr>

<h2>Choosing Radius and Height</h2>

<p>The radius is always measured from the axis of rotation to the shell.</p>

<p>The height is the vertical distance between the top and bottom curves.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Mechanical engineering</li>

<li>Industrial design</li>

<li>Manufacturing</li>

<li>Architecture</li>

<li>Physics</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Confusing the radius with the height.</li>

<li>Using π instead of 2π.</li>

<li>Using the Disk Method when the Shell Method is simpler.</li>

<li>Measuring the radius from the wrong axis.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>The Shell Method uses cylindrical shells.</li>

<li>Volume = 2π(radius)(height).</li>

<li>The radius is measured from the axis of rotation.</li>

<li>The height is the distance between the curves.</li>

<li>The Shell Method often avoids finding inverse functions.</li>

</ul>

`,

        questions: [

            {
                q: "The Shell Method uses which geometric object?",
                options: [
                    "Cylindrical shells",
                    "Solid disks",
                    "Hollow washers"
                ],
                answer: "Cylindrical shells",
                explanation: "The Shell Method builds the solid from thin cylindrical shells."
            },

            {
                q: "The Shell Method formula begins with?",
                options: [
                    "2π",
                    "π",
                    "4π"
                ],
                answer: "2π",
                explanation: "Each shell has circumference 2πr."
            },

            {
                q: "In the Shell Method, the radius is?",
                options: [
                    "The distance from the axis of rotation",
                    "The height of the curve",
                    "The width of the interval"
                ],
                answer: "The distance from the axis of rotation",
                explanation: "The radius is always measured from the axis of rotation to the shell."
            },

            {
                q: "The height of a shell is?",
                options: [
                    "The distance between the top and bottom curves",
                    "The radius of the shell",
                    "The circumference"
                ],
                answer: "The distance between the top and bottom curves",
                explanation: "The shell's height is determined by the vertical distance between the curves."
            },

            {
                q: "The Shell Method is especially useful because it?",
                options: [
                    "Can avoid finding inverse functions",
                    "Eliminates integration",
                    "Only works with circles"
                ],
                answer: "Can avoid finding inverse functions",
                explanation: "The Shell Method is often easier than the Disk or Washer Method when inverse functions would otherwise be required."
            },

            {
                q: "A common mistake when using the Shell Method is?",
                options: [
                    "Confusing the radius and the height",
                    "Forgetting +C",
                    "Using the Power Rule"
                ],
                answer: "Confusing the radius and the height",
                explanation: "Correctly identifying the radius and height is essential for setting up the integral."
            }

        ]

    }
    ,

    "calculus2-work": {
        title: "Work",
        subtitle: "Learn how definite integrals calculate work done by a variable force.",

        body: `

<h2>What is Work?</h2>

<p>In physics, <strong>work</strong> measures the amount of energy transferred when a force moves an object.</p>

<p>If the force remains constant, work is easy to calculate.</p>

<p>If the force changes continuously, integration is required.</p>

<hr>

<h2>Constant Force</h2>

<p>When the force is constant, the formula is:</p>

<p><strong>Work = Force × Distance</strong></p>

<p>or</p>

<p><strong>W = Fd</strong></p>

<hr>

<h2>Variable Force</h2>

<p>When the force varies with position, the work is found using:</p>

<p><strong>W = ∫ₐᵇ F(x) dx</strong></p>

<p>where:</p>

<ul>

<li><strong>F(x)</strong> is the force.</li>

<li><strong>a</strong> and <strong>b</strong> define the interval over which the object moves.</li>

</ul>

<hr>

<h2>Why Does Integration Work?</h2>

<p>Imagine dividing the motion into many tiny pieces.</p>

<p>Over each tiny distance, the force is nearly constant.</p>

<p>Adding the work done over all the tiny pieces gives the total work.</p>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<p><strong>F(x)=3x²</strong></p>

<p>moves an object from <strong>x=0</strong> to <strong>x=2</strong>.</p>

<p>The work is:</p>

<p><strong>W = ∫₀² 3x² dx</strong></p>

<p>The antiderivative is:</p>

<p><strong>x³</strong></p>

<p>Evaluate:</p>

<p><strong>2³−0³ = 8</strong></p>

<p>The total work is <strong>8 units</strong>.</p>

<hr>

<h2>Hooke's Law</h2>

<p>One important application is stretching or compressing springs.</p>

<p>Hooke's Law states:</p>

<p><strong>F(x)=kx</strong></p>

<p>where:</p>

<ul>

<li><strong>k</strong> is the spring constant.</li>

<li><strong>x</strong> is the displacement.</li>

</ul>

<p>The work required to stretch the spring is found by integrating the force.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Stretching springs</li>

<li>Lifting objects</li>

<li>Pumping liquids</li>

<li>Mechanical engineering</li>

<li>Physics</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using W = Fd when the force is not constant.</li>

<li>Using incorrect limits of integration.</li>

<li>Confusing force with work.</li>

<li>Forgetting to integrate the force function.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Constant force uses W = Fd.</li>

<li>Variable force requires integration.</li>

<li>The work formula is W = ∫ₐᵇ F(x) dx.</li>

<li>Hooke's Law is a common application.</li>

</ul>

`,

        questions: [

            {
                q: "When the force is constant, work is calculated using?",
                options: [
                    "W = Fd",
                    "W = F + d",
                    "W = F/d"
                ],
                answer: "W = Fd",
                explanation: "For constant force, work equals force multiplied by distance."
            },

            {
                q: "When the force varies with position, work is found using?",
                options: [
                    "A definite integral",
                    "A derivative",
                    "The Chain Rule"
                ],
                answer: "A definite integral",
                explanation: "Variable force requires integration."
            },

            {
                q: "The formula for work with a variable force is?",
                options: [
                    "W = ∫ₐᵇ F(x) dx",
                    "W = Fd",
                    "W = πr²"
                ],
                answer: "W = ∫ₐᵇ F(x) dx",
                explanation: "The definite integral accumulates the work done by the varying force."
            },

            {
                q: "Hooke's Law is written as?",
                options: [
                    "F(x)=kx",
                    "F(x)=x²",
                    "F(x)=k+x"
                ],
                answer: "F(x)=kx",
                explanation: "Hooke's Law states that force is proportional to displacement."
            },

            {
                q: "Stretching a spring is a common application of?",
                options: [
                    "Work integrals",
                    "Disk Method",
                    "Partial Fractions"
                ],
                answer: "Work integrals",
                explanation: "Calculating the work required to stretch a spring is a classic integration application."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Using W = Fd when the force changes",
                    "Forgetting +C",
                    "Using Simpson's Rule"
                ],
                answer: "Using W = Fd when the force changes",
                explanation: "The simple formula only works when the force remains constant."
            }

        ]

    }
    ,

    "calculus2-fluid-force": {
        title: "Fluid Force",
        subtitle: "Learn how integration calculates the force exerted by fluids on submerged objects.",

        body: `

<h2>What is Fluid Force?</h2>

<p><strong>Fluid force</strong> is the force that a liquid exerts on a submerged surface.</p>

<p>Unlike pressure in air, fluid pressure increases as depth increases.</p>

<p>Because the pressure changes continuously, integration is required to calculate the total force.</p>

<hr>

<h2>Pressure in a Fluid</h2>

<p>The pressure at a given depth is:</p>

<p><strong>Pressure = Density × Gravity × Depth</strong></p>

<p>or</p>

<p><strong>P = ρgh</strong></p>

<p>where:</p>

<ul>

<li><strong>ρ</strong> = density of the fluid</li>

<li><strong>g</strong> = acceleration due to gravity</li>

<li><strong>h</strong> = depth below the surface</li>

</ul>

<hr>

<h2>Why Integration is Needed</h2>

<p>The pressure is different at every depth.</p>

<p>Each thin strip of the submerged surface experiences a different force.</p>

<p>Integration adds the forces acting on all of these tiny strips.</p>

<hr>

<h2>The General Formula</h2>

<p>The force on a thin strip is:</p>

<p><strong>dF = Pressure × Area</strong></p>

<p>Since pressure changes with depth:</p>

<p><strong>dF = ρgh · dA</strong></p>

<p>The total force is found by integrating:</p>

<p><strong>F = ∫ dF</strong></p>

<hr>

<h2>Example</h2>

<p>A vertical rectangular plate is submerged in water.</p>

<p>The pressure near the bottom is greater than the pressure near the top.</p>

<p>Each horizontal strip experiences a different force.</p>

<p>Adding the forces on all strips gives the total fluid force.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Dam design</li>

<li>Swimming pools</li>

<li>Submarines</li>

<li>Ships</li>

<li>Water tanks</li>

<li>Hydroelectric engineering</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using a constant pressure instead of variable pressure.</li>

<li>Using the wrong depth measurement.</li>

<li>Forgetting that pressure increases with depth.</li>

<li>Using the total area instead of thin strips.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Pressure increases with depth.</li>

<li>Pressure is given by P = ρgh.</li>

<li>Different depths produce different forces.</li>

<li>Integration adds the force on every small strip.</li>

</ul>

`,

        questions: [

            {
                q: "Fluid pressure increases as?",
                options: [
                    "Depth increases",
                    "Height increases",
                    "Temperature increases"
                ],
                answer: "Depth increases",
                explanation: "Pressure in a fluid becomes greater as depth increases."
            },

            {
                q: "The pressure formula is?",
                options: [
                    "P = ρgh",
                    "P = Fd",
                    "P = ma"
                ],
                answer: "P = ρgh",
                explanation: "Fluid pressure equals density × gravity × depth."
            },

            {
                q: "Why is integration required for fluid force?",
                options: [
                    "Pressure changes continuously with depth",
                    "The fluid has constant pressure",
                    "The object is moving"
                ],
                answer: "Pressure changes continuously with depth",
                explanation: "Different depths experience different pressures."
            },

            {
                q: "A thin strip experiences?",
                options: [
                    "A small force",
                    "The total force",
                    "No force"
                ],
                answer: "A small force",
                explanation: "Each strip contributes a small amount to the total force."
            },

            {
                q: "One common application of fluid force is?",
                options: [
                    "Dam design",
                    "Factoring polynomials",
                    "Triangle congruence"
                ],
                answer: "Dam design",
                explanation: "Engineers calculate fluid forces when designing dams."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Using constant pressure instead of variable pressure",
                    "Forgetting +C",
                    "Using Integration by Parts"
                ],
                answer: "Using constant pressure instead of variable pressure",
                explanation: "Pressure changes with depth and must be modeled as a variable."
            }

        ]

    }
    ,

    "calculus2-moments-and-center-of-mass": {
        title: "Moments and Center of Mass",
        subtitle: "Learn how integration finds the balance point of an object.",

        body: `

<h2>What is the Center of Mass?</h2>

<p>The <strong>center of mass</strong> is the point where an object's mass can be considered to be concentrated.</p>

<p>If an object were balanced perfectly, it would balance at its center of mass.</p>

<hr>

<h2>What is a Moment?</h2>

<p>A <strong>moment</strong> measures how strongly a force or mass tends to rotate an object about a point.</p>

<p>The farther the mass is from the reference point, the greater its moment.</p>

<hr>

<h2>Moment Formula</h2>

<p>For a collection of masses:</p>

<p><strong>Moment = Mass × Distance</strong></p>

<p>In calculus, the mass is distributed continuously, so integration is required.</p>

<hr>

<h2>Center of Mass Formula</h2>

<p>If an object has total mass <strong>M</strong>, then its center of mass is:</p>

<p><strong>x̄ = (1/M) ∫ x dm</strong></p>

<p>where:</p>

<ul>

<li><strong>M</strong> = total mass</li>

<li><strong>dm</strong> = a tiny piece of mass</li>

</ul>

<p>Integration adds the contributions of all the tiny pieces of mass.</p>

<hr>

<h2>Uniform Density</h2>

<p>If the object has constant density, the calculations simplify because each small piece has the same density.</p>

<p>Many introductory problems assume uniform density.</p>

<hr>

<h2>Example</h2>

<p>Consider a thin rod lying along the x-axis.</p>

<p>If the density is constant, integration determines the rod's balance point.</p>

<p>If the density varies, heavier regions pull the center of mass toward them.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Bridge construction</li>

<li>Aircraft design</li>

<li>Mechanical engineering</li>

<li>Robotics</li>

<li>Structural engineering</li>

<li>Physics</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Confusing mass with density.</li>

<li>Using total length instead of total mass.</li>

<li>Ignoring variable density.</li>

<li>Using the wrong limits of integration.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>The center of mass is the balance point of an object.</li>

<li>Moments measure rotational influence.</li>

<li>Integration combines infinitely many tiny pieces of mass.</li>

<li>Variable density changes the location of the center of mass.</li>

</ul>

`,

        questions: [

            {
                q: "The center of mass is?",
                options: [
                    "The balance point of an object",
                    "The highest point of an object",
                    "The object's total weight"
                ],
                answer: "The balance point of an object",
                explanation: "The center of mass is where an object balances."
            },

            {
                q: "A moment measures?",
                options: [
                    "The tendency of mass to rotate about a point",
                    "The total area",
                    "The derivative of a function"
                ],
                answer: "The tendency of mass to rotate about a point",
                explanation: "A moment measures rotational influence."
            },

            {
                q: "Integration is required because?",
                options: [
                    "Mass is distributed continuously",
                    "The object is moving",
                    "The object is circular"
                ],
                answer: "Mass is distributed continuously",
                explanation: "Integration adds together infinitely many tiny pieces of mass."
            },

            {
                q: "If density is constant, the calculations are?",
                options: [
                    "Simpler",
                    "Impossible",
                    "Unchanged"
                ],
                answer: "Simpler",
                explanation: "Uniform density makes the formulas easier to apply."
            },

            {
                q: "Which field commonly uses center of mass calculations?",
                options: [
                    "Mechanical engineering",
                    "Grammar",
                    "Accounting"
                ],
                answer: "Mechanical engineering",
                explanation: "Engineers frequently calculate centers of mass when designing structures and machines."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Confusing mass with density",
                    "Forgetting +C",
                    "Using Simpson's Rule"
                ],
                answer: "Confusing mass with density",
                explanation: "Density describes how mass is distributed, while mass is the total amount of matter."
            }

        ]

    }
    ,

    "calculus2-probability-density-functions": {
        title: "Probability Density Functions",
        subtitle: "Learn how integration is used to calculate probabilities for continuous random variables.",

        body: `

<h2>What is a Probability Density Function?</h2>

<p>A <strong>Probability Density Function (PDF)</strong> describes how probabilities are distributed across the possible values of a continuous random variable.</p>

<p>Unlike discrete probabilities, the probability of any single value is zero.</p>

<p>Instead, probabilities are found over intervals using definite integrals.</p>

<hr>

<h2>Properties of a PDF</h2>

<ul>

<li>The function is always nonnegative.</li>

<li>The total area under the curve equals 1.</li>

<li>Probabilities are represented by areas under the curve.</li>

</ul>

<hr>

<h2>Total Probability</h2>

<p>Every valid probability density function satisfies:</p>

<p><strong>∫₋∞^∞ f(x) dx = 1</strong></p>

<p>This means the total probability is always 100%.</p>

<hr>

<h2>Finding Probabilities</h2>

<p>The probability that x lies between a and b is:</p>

<p><strong>P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx</strong></p>

<p>The definite integral represents the area under the density curve between the two values.</p>

<hr>

<h2>Expected Value</h2>

<p>The expected value (mean) of a continuous random variable is:</p>

<p><strong>E(X)=∫₋∞^∞ x·f(x) dx</strong></p>

<p>This represents the long-run average value of the random variable.</p>

<hr>

<h2>Example</h2>

<p>Suppose a probability density function is defined on the interval [0,1].</p>

<p>To find the probability that X lies between 0.2 and 0.6, integrate the density function from 0.2 to 0.6.</p>

<p>The resulting area is the probability.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Statistics</li>

<li>Machine Learning</li>

<li>Artificial Intelligence</li>

<li>Finance</li>

<li>Engineering</li>

<li>Risk Analysis</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Thinking f(x) itself is a probability.</li>

<li>Forgetting the total area must equal 1.</li>

<li>Using function values instead of integrating over an interval.</li>

<li>Confusing discrete and continuous probability distributions.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>PDFs describe continuous probability distributions.</li>

<li>Probabilities are areas under the density curve.</li>

<li>The total area under every PDF equals 1.</li>

<li>Expected values are computed using integration.</li>

</ul>

`,

        questions: [

            {
                q: "A Probability Density Function describes?",
                options: [
                    "How probability is distributed over continuous values",
                    "The derivative of a function",
                    "The slope of a graph"
                ],
                answer: "How probability is distributed over continuous values",
                explanation: "A PDF describes the distribution of a continuous random variable."
            },

            {
                q: "The total area under every probability density function equals?",
                options: [
                    "1",
                    "0",
                    "100"
                ],
                answer: "1",
                explanation: "The total probability of all possible outcomes must equal 1."
            },

            {
                q: "The probability that X lies between a and b is found by?",
                options: [
                    "Integrating the PDF from a to b",
                    "Evaluating the PDF at one point",
                    "Taking the derivative"
                ],
                answer: "Integrating the PDF from a to b",
                explanation: "Probabilities for continuous variables are areas under the density curve."
            },

            {
                q: "For a continuous random variable, the probability of one exact value is?",
                options: [
                    "0",
                    "1",
                    "Equal to the function value"
                ],
                answer: "0",
                explanation: "Single points have zero probability in continuous distributions."
            },

            {
                q: "The expected value of a continuous random variable represents?",
                options: [
                    "The long-run average value",
                    "The maximum value",
                    "The derivative"
                ],
                answer: "The long-run average value",
                explanation: "The expected value is the mean of the probability distribution."
            },

            {
                q: "A common mistake when working with PDFs is?",
                options: [
                    "Thinking the function value itself is a probability",
                    "Forgetting +C",
                    "Using the Product Rule"
                ],
                answer: "Thinking the function value itself is a probability",
                explanation: "Probabilities are found by integrating over intervals, not by reading a single function value."
            }

        ]

    }
    ,

    "calculus2-unit-2-review": {
        title: "Unit 2 Review",
        subtitle: "Review all applications of integration covered in Unit 2.",

        body: `

<h2>Unit 2 Review</h2>

<p>This review summarizes every major application of integration covered in Unit 2.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Volumes by Cross Sections</li>

<li>Disk Method</li>

<li>Washer Method</li>

<li>Shell Method</li>

<li>Work</li>

<li>Fluid Force</li>

<li>Moments and Center of Mass</li>

<li>Probability Density Functions</li>

</ul>

<hr>

<h2>Key Ideas</h2>

<ul>

<li>Integration can calculate three-dimensional volumes.</li>

<li>Different solids require different volume methods.</li>

<li>The Disk Method is used when there is no hole.</li>

<li>The Washer Method is used when there is a hollow center.</li>

<li>The Shell Method uses cylindrical shells.</li>

<li>Variable forces require definite integrals to calculate work.</li>

<li>Fluid pressure increases with depth.</li>

<li>Integration finds the balance point of objects.</li>

<li>Probability for continuous variables is found using definite integrals.</li>

</ul>

<hr>

<h2>Important Formulas</h2>

<ul>

<li>Cross Sections: <strong>V = ∫ₐᵇ A(x) dx</strong></li>

<li>Disk Method: <strong>V = π∫ₐᵇ [f(x)]² dx</strong></li>

<li>Washer Method: <strong>V = π∫ₐᵇ [R(x)² − r(x)²] dx</strong></li>

<li>Shell Method: <strong>V = 2π∫ₐᵇ (radius)(height) dx</strong></li>

<li>Work: <strong>W = ∫ₐᵇ F(x) dx</strong></li>

<li>Fluid Pressure: <strong>P = ρgh</strong></li>

<li>Probability: <strong>P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx</strong></li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the wrong volume method.</li>

<li>Confusing radius and height in the Shell Method.</li>

<li>Reversing inner and outer radii in the Washer Method.</li>

<li>Using constant force when the force changes.</li>

<li>Using constant pressure in fluid force problems.</li>

<li>Confusing density with mass.</li>

<li>Thinking the value of a PDF is itself a probability.</li>

</ul>

<hr>

<h2>Ready?</h2>

<p>If you understand all of these applications of integration, you are ready for the Unit 2 Test.</p>

`,

        questions: [

            {
                q: "Which method is used when the solid has no hole?",
                options: [
                    "Disk Method",
                    "Washer Method",
                    "Shell Method"
                ],
                answer: "Disk Method",
                explanation: "The Disk Method uses solid circular cross sections."
            },

            {
                q: "Which method is used when the solid has a hollow center?",
                options: [
                    "Washer Method",
                    "Disk Method",
                    "Midpoint Rule"
                ],
                answer: "Washer Method",
                explanation: "The Washer Method subtracts the inner radius from the outer radius."
            },

            {
                q: "The Shell Method uses?",
                options: [
                    "Cylindrical shells",
                    "Solid disks",
                    "Rectangular prisms"
                ],
                answer: "Cylindrical shells",
                explanation: "The solid is built from thin cylindrical shells."
            },

            {
                q: "Variable force problems require?",
                options: [
                    "Integration",
                    "Differentiation",
                    "Factoring"
                ],
                answer: "Integration",
                explanation: "Variable force changes continuously, so definite integrals are needed."
            },

            {
                q: "Fluid pressure changes with?",
                options: [
                    "Depth",
                    "Temperature",
                    "Mass"
                ],
                answer: "Depth",
                explanation: "Pressure increases as depth increases."
            },

            {
                q: "Continuous probabilities are found by?",
                options: [
                    "Integrating the probability density function",
                    "Evaluating one point",
                    "Finding the derivative"
                ],
                answer: "Integrating the probability density function",
                explanation: "Probabilities are areas under the density curve."
            }

        ]

    }
    ,

    "calculus2-unit-2-test": {
        title: "Unit 2 Test",
        subtitle: "Test your understanding of the applications of integration.",

        body: `

<h2>Unit 2 Test</h2>

<p>This assessment covers every topic from Unit 2.</p>

<hr>

<h2>Topics Covered</h2>

<ul>

<li>Volumes by Cross Sections</li>

<li>Disk Method</li>

<li>Washer Method</li>

<li>Shell Method</li>

<li>Work</li>

<li>Fluid Force</li>

<li>Moments and Center of Mass</li>

<li>Probability Density Functions</li>

</ul>

<hr>

<h2>Instructions</h2>

<p>Complete this assessment without using notes. A strong score indicates you are ready to continue to Parametric and Polar Calculus.</p>

`,

        questions: [

            {
                q: "The volume using cross sections is found with?",
                options: [
                    "V = ∫ A(x) dx",
                    "V = πr²h",
                    "V = lwh"
                ],
                answer: "V = ∫ A(x) dx",
                explanation: "The volume equals the integral of the cross-sectional area."
            },

            {
                q: "Which method is used when the solid has no hole?",
                options: [
                    "Disk Method",
                    "Washer Method",
                    "Shell Method"
                ],
                answer: "Disk Method",
                explanation: "The Disk Method is used when each cross section is a solid disk."
            },

            {
                q: "Which method is used when the solid has a hollow center?",
                options: [
                    "Washer Method",
                    "Disk Method",
                    "Midpoint Rule"
                ],
                answer: "Washer Method",
                explanation: "The Washer Method subtracts the inner radius from the outer radius."
            },

            {
                q: "The Shell Method uses?",
                options: [
                    "Cylindrical shells",
                    "Solid disks",
                    "Rectangular slices"
                ],
                answer: "Cylindrical shells",
                explanation: "Volumes are formed from thin cylindrical shells."
            },

            {
                q: "The Shell Method formula begins with?",
                options: [
                    "2π",
                    "π",
                    "4π"
                ],
                answer: "2π",
                explanation: "Each shell has circumference 2πr."
            },

            {
                q: "Variable force problems require?",
                options: [
                    "Definite integrals",
                    "Derivatives",
                    "Limits only"
                ],
                answer: "Definite integrals",
                explanation: "Variable forces must be accumulated using integration."
            },

            {
                q: "Hooke's Law is written as?",
                options: [
                    "F(x)=kx",
                    "F(x)=k+x",
                    "F(x)=x²"
                ],
                answer: "F(x)=kx",
                explanation: "Hooke's Law states that force is proportional to displacement."
            },

            {
                q: "Fluid pressure increases as?",
                options: [
                    "Depth increases",
                    "Temperature increases",
                    "Volume increases"
                ],
                answer: "Depth increases",
                explanation: "Pressure in a fluid increases with depth."
            },

            {
                q: "The pressure formula is?",
                options: [
                    "P = ρgh",
                    "P = Fd",
                    "P = ma"
                ],
                answer: "P = ρgh",
                explanation: "Pressure equals density × gravity × depth."
            },

            {
                q: "The center of mass is?",
                options: [
                    "The balance point of an object",
                    "The highest point",
                    "The total weight"
                ],
                answer: "The balance point of an object",
                explanation: "The center of mass is where an object balances."
            },

            {
                q: "A moment measures?",
                options: [
                    "The tendency to rotate about a point",
                    "The total volume",
                    "The derivative"
                ],
                answer: "The tendency to rotate about a point",
                explanation: "Moments measure rotational influence."
            },

            {
                q: "The total area under every probability density function equals?",
                options: [
                    "1",
                    "0",
                    "100"
                ],
                answer: "1",
                explanation: "Every valid probability density function has total probability equal to 1."
            },

            {
                q: "The probability that X lies between a and b is found by?",
                options: [
                    "Integrating the PDF from a to b",
                    "Evaluating the PDF at one point",
                    "Finding its derivative"
                ],
                answer: "Integrating the PDF from a to b",
                explanation: "Probabilities for continuous random variables are areas under the density curve."
            },

            {
                q: "For a continuous random variable, the probability of one exact value is?",
                options: [
                    "0",
                    "1",
                    "The function value"
                ],
                answer: "0",
                explanation: "Single values have zero probability in continuous distributions."
            },

            {
                q: "A common mistake when using the Washer Method is?",
                options: [
                    "Reversing the inner and outer radii",
                    "Forgetting +C",
                    "Using Integration by Parts"
                ],
                answer: "Reversing the inner and outer radii",
                explanation: "Always subtract the inner radius squared from the outer radius squared."
            },

            {
                q: "A common mistake in Shell Method problems is?",
                options: [
                    "Confusing the radius and the height",
                    "Forgetting +C",
                    "Using the Product Rule"
                ],
                answer: "Confusing the radius and the height",
                explanation: "The radius is measured from the axis, while the height is the distance between the curves."
            },

            {
                q: "Why is integration used in fluid force problems?",
                options: [
                    "Pressure changes continuously with depth",
                    "The water is moving",
                    "The object is circular"
                ],
                answer: "Pressure changes continuously with depth",
                explanation: "Each depth has a different pressure, so the forces must be accumulated."
            },

            {
                q: "Cross-sectional volume problems require knowing?",
                options: [
                    "The area of each slice",
                    "The perimeter",
                    "The circumference"
                ],
                answer: "The area of each slice",
                explanation: "The volume is found by integrating the area of each cross section."
            },

            {
                q: "The primary goal of Unit 2 was to?",
                options: [
                    "Apply integration to solve real-world problems",
                    "Study derivatives",
                    "Review limits"
                ],
                answer: "Apply integration to solve real-world problems",
                explanation: "Unit 2 focused on practical applications of definite integrals."

            }

        ]

    }
    ,

    "calculus2-parametric-equations": {
        title: "Parametric Equations",
        subtitle: "Learn how to represent curves using a parameter instead of expressing y directly as a function of x.",

        body: `

<h2>What are Parametric Equations?</h2>

<p><strong>Parametric equations</strong> describe both x and y using a third variable called a <strong>parameter</strong>.</p>

<p>The parameter is usually represented by the letter <strong>t</strong>, which often represents time.</p>

<hr>

<h2>General Form</h2>

<p>A parametric curve is written as:</p>

<p><strong>x = f(t)</strong></p>

<p><strong>y = g(t)</strong></p>

<p>As the value of t changes, the point (x, y) moves along the curve.</p>

<hr>

<h2>Why Use Parametric Equations?</h2>

<p>Some curves cannot easily be written as y = f(x).</p>

<p>Parametric equations make it possible to describe:</p>

<ul>

<li>Projectile motion</li>

<li>Planetary orbits</li>

<li>Roller coaster tracks</li>

<li>Robot motion</li>

<li>Circular motion</li>

</ul>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<p><strong>x=t</strong></p>

<p><strong>y=t²</strong></p>

<p>If:</p>

<ul>

<li>t = 0 → (0,0)</li>

<li>t = 1 → (1,1)</li>

<li>t = 2 → (2,4)</li>

<li>t = 3 → (3,9)</li>

</ul>

<p>These points lie on the parabola:</p>

<p><strong>y=x²</strong></p>

<hr>

<h2>Eliminating the Parameter</h2>

<p>Sometimes the parameter can be removed.</p>

<p>Example:</p>

<p><strong>x=t</strong></p>

<p><strong>y=t²</strong></p>

<p>Since:</p>

<p><strong>t=x</strong></p>

<p>Substitute into y:</p>

<p><strong>y=x²</strong></p>

<p>This is called eliminating the parameter.</p>

<hr>

<h2>Direction of Motion</h2>

<p>One advantage of parametric equations is that they describe the direction in which a point moves.</p>

<p>As t increases, the point follows the curve in a specific direction.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Physics</li>

<li>Engineering</li>

<li>Animation</li>

<li>Computer graphics</li>

<li>Space science</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Confusing the parameter with x or y.</li>

<li>Forgetting that two equations describe one curve.</li>

<li>Ignoring the direction of motion.</li>

<li>Making algebra mistakes when eliminating the parameter.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Parametric equations describe curves using a parameter.</li>

<li>Both x and y depend on t.</li>

<li>The parameter can sometimes be eliminated.</li>

<li>Parametric equations describe both shape and motion.</li>

</ul>

`,

        questions: [

            {
                q: "A parametric equation describes x and y using?",
                options: [
                    "A parameter",
                    "A derivative",
                    "A constant"
                ],
                answer: "A parameter",
                explanation: "Both x and y are written as functions of a parameter, usually t."
            },

            {
                q: "The parameter is most commonly represented by?",
                options: [
                    "t",
                    "x",
                    "y"
                ],
                answer: "t",
                explanation: "The variable t is commonly used as the parameter."
            },

            {
                q: "One advantage of parametric equations is that they show?",
                options: [
                    "The direction of motion",
                    "The area under a curve",
                    "The slope only"
                ],
                answer: "The direction of motion",
                explanation: "As t changes, the point moves along the curve in a specific direction."
            },

            {
                q: "Removing the parameter is called?",
                options: [
                    "Eliminating the parameter",
                    "Factoring",
                    "Differentiating"
                ],
                answer: "Eliminating the parameter",
                explanation: "Eliminating the parameter produces an equation relating x and y directly."
            },

            {
                q: "Parametric equations are useful for modeling?",
                options: [
                    "Projectile motion",
                    "Factoring polynomials",
                    "Triangle congruence"
                ],
                answer: "Projectile motion",
                explanation: "Many motion problems are naturally modeled using parametric equations."
            },

            {
                q: "A common mistake is?",
                options: [
                    "Confusing the parameter with x or y",
                    "Forgetting +C",
                    "Using Integration by Parts"
                ],
                answer: "Confusing the parameter with x or y",
                explanation: "The parameter is a separate variable that determines both x and y."
            }

        ]

    }
    ,

    "calculus2-derivatives-of-parametric-curves": {
        title: "Derivatives of Parametric Curves",
        subtitle: "Learn how to find the slope of curves defined by parametric equations.",

        body: `

<h2>Why Do We Need a New Derivative Formula?</h2>

<p>For ordinary functions, we compute the derivative directly as <strong>dy/dx</strong>.</p>

<p>With parametric equations, both x and y depend on a parameter t.</p>

<p>To find the slope of the curve, we compare how y changes with respect to t and how x changes with respect to t.</p>

<hr>

<h2>The Formula</h2>

<p>If:</p>

<p><strong>x = f(t)</strong></p>

<p><strong>y = g(t)</strong></p>

<p>then:</p>

<p><strong>dy/dx = (dy/dt) ÷ (dx/dt)</strong></p>

<p>or equivalently:</p>

<p><strong>dy/dx = (dy/dt)/(dx/dt)</strong></p>

<hr>

<h2>How the Formula Works</h2>

<p>First differentiate x with respect to t.</p>

<p>Next differentiate y with respect to t.</p>

<p>Finally divide the two derivatives.</p>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<p><strong>x = t²</strong></p>

<p><strong>y = t³</strong></p>

<p>Differentiate:</p>

<p><strong>dx/dt = 2t</strong></p>

<p><strong>dy/dt = 3t²</strong></p>

<p>Therefore:</p>

<p><strong>dy/dx = (3t²)/(2t)</strong></p>

<p>which simplifies to:</p>

<p><strong>dy/dx = 3t/2</strong></p>

<hr>

<h2>Horizontal Tangent Lines</h2>

<p>A horizontal tangent occurs when:</p>

<p><strong>dy/dt = 0</strong></p>

<p>while</p>

<p><strong>dx/dt ≠ 0</strong>.</p>

<hr>

<h2>Vertical Tangent Lines</h2>

<p>A vertical tangent occurs when:</p>

<p><strong>dx/dt = 0</strong></p>

<p>while</p>

<p><strong>dy/dt ≠ 0</strong>.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Projectile motion</li>

<li>Robot navigation</li>

<li>Animation</li>

<li>Satellite motion</li>

<li>Computer graphics</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Differentiating with respect to x instead of t.</li>

<li>Forgetting to divide by dx/dt.</li>

<li>Mixing up the numerator and denominator.</li>

<li>Ignoring points where dx/dt equals zero.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Differentiate both equations with respect to t.</li>

<li>Use dy/dx = (dy/dt)/(dx/dt).</li>

<li>Horizontal tangents occur when dy/dt = 0.</li>

<li>Vertical tangents occur when dx/dt = 0.</li>

</ul>

`,

        questions: [

            {
                q: "The derivative of a parametric curve is found using?",
                options: [
                    "(dy/dt)/(dx/dt)",
                    "(dx/dt)/(dy/dt)",
                    "dy × dx"
                ],
                answer: "(dy/dt)/(dx/dt)",
                explanation: "Differentiate both equations with respect to t and divide."
            },

            {
                q: "Before finding dy/dx, you should first?",
                options: [
                    "Differentiate both x and y with respect to t",
                    "Eliminate the parameter",
                    "Integrate both equations"
                ],
                answer: "Differentiate both x and y with respect to t",
                explanation: "The parametric derivative formula uses derivatives with respect to t."
            },

            {
                q: "A horizontal tangent occurs when?",
                options: [
                    "dy/dt = 0 and dx/dt ≠ 0",
                    "dx/dt = 0 and dy/dt ≠ 0",
                    "Both derivatives equal zero"
                ],
                answer: "dy/dt = 0 and dx/dt ≠ 0",
                explanation: "The slope becomes zero when the numerator is zero."
            },

            {
                q: "A vertical tangent occurs when?",
                options: [
                    "dx/dt = 0 and dy/dt ≠ 0",
                    "dy/dt = 0",
                    "Both derivatives equal one"
                ],
                answer: "dx/dt = 0 and dy/dt ≠ 0",
                explanation: "The slope becomes undefined when the denominator is zero."
            },

            {
                q: "If x=t² and y=t³, then dx/dt equals?",
                options: [
                    "2t",
                    "3t²",
                    "t²"
                ],
                answer: "2t",
                explanation: "The derivative of t² with respect to t is 2t."
            },

            {
                q: "A common mistake when differentiating parametric curves is?",
                options: [
                    "Forgetting to divide by dx/dt",
                    "Forgetting +C",
                    "Using Integration by Parts"
                ],
                answer: "Forgetting to divide by dx/dt",
                explanation: "Both derivatives must be computed and then divided."

            }

        ]

    }
    ,

    "calculus2-arc-length-parametric": {
        title: "Arc Length of Parametric Curves",
        subtitle: "Learn how to calculate the length of curves defined by parametric equations.",

        body: `

<h2>What is Arc Length for Parametric Curves?</h2>

<p>Just as in Calculus I, we can calculate the exact length of a curve using integration.</p>

<p>However, when a curve is defined parametrically, both x and y depend on the parameter <strong>t</strong>.</p>

<p>This requires a different arc length formula.</p>

<hr>

<h2>The Formula</h2>

<p>If:</p>

<p><strong>x = f(t)</strong></p>

<p><strong>y = g(t)</strong></p>

<p>for <strong>a ≤ t ≤ b</strong>, then the arc length is:</p>

<p><strong>L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt</strong></p>

<hr>

<h2>Why Does This Formula Work?</h2>

<p>Over a very small change in the parameter t, the curve can be approximated by a tiny straight-line segment.</p>

<p>The Pythagorean Theorem gives the length of each tiny segment.</p>

<p>Integration adds the lengths of infinitely many tiny segments to produce the total arc length.</p>

<hr>

<h2>Steps</h2>

<ol>

<li>Differentiate x with respect to t.</li>

<li>Differentiate y with respect to t.</li>

<li>Square both derivatives.</li>

<li>Add them together.</li>

<li>Take the square root.</li>

<li>Evaluate the definite integral.</li>

</ol>

<hr>

<h2>Example</h2>

<p>Suppose:</p>

<p><strong>x = t</strong></p>

<p><strong>y = t²</strong></p>

<p>for <strong>0 ≤ t ≤ 1</strong>.</p>

<p>Differentiate:</p>

<p><strong>dx/dt = 1</strong></p>

<p><strong>dy/dt = 2t</strong></p>

<p>Substitute into the formula:</p>

<p><strong>L = ∫₀¹ √(1 + 4t²) dt</strong></p>

<p>This integral gives the exact length of the parametric curve.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Robot motion planning</li>

<li>Aircraft flight paths</li>

<li>Roller coaster design</li>

<li>Computer animation</li>

<li>GPS navigation</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Using the Cartesian arc length formula instead of the parametric formula.</li>

<li>Forgetting to differentiate both x and y.</li>

<li>Forgetting to square both derivatives.</li>

<li>Using x instead of t as the variable of integration.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Parametric curves require a different arc length formula.</li>

<li>Differentiate both x and y with respect to t.</li>

<li>Square the derivatives, add them, and take the square root.</li>

<li>Integrate with respect to t to find the total arc length.</li>

</ul>

`,

        questions: [

            {
                q: "The arc length formula for parametric curves uses?",
                options: [
                    "√[(dx/dt)² + (dy/dt)²]",
                    "√(1 + [dy/dx]²)",
                    "πr²"
                ],
                answer: "√[(dx/dt)² + (dy/dt)²]",
                explanation: "Parametric curves require derivatives of both x and y with respect to t."
            },

            {
                q: "Before applying the formula, you should first?",
                options: [
                    "Differentiate both x and y with respect to t",
                    "Eliminate the parameter",
                    "Integrate both equations"
                ],
                answer: "Differentiate both x and y with respect to t",
                explanation: "The derivatives dx/dt and dy/dt are needed in the formula."
            },

            {
                q: "The variable of integration is?",
                options: [
                    "t",
                    "x",
                    "y"
                ],
                answer: "t",
                explanation: "Since the curve is defined parametrically, the integral is taken with respect to t."
            },

            {
                q: "The formula is based on which geometric theorem?",
                options: [
                    "The Pythagorean Theorem",
                    "The Fundamental Theorem of Calculus",
                    "The Mean Value Theorem"
                ],
                answer: "The Pythagorean Theorem",
                explanation: "Each tiny segment is treated as the hypotenuse of a right triangle."
            },

            {
                q: "A common mistake when finding parametric arc length is?",
                options: [
                    "Forgetting to differentiate both x and y",
                    "Forgetting +C",
                    "Using the Product Rule"
                ],
                answer: "Forgetting to differentiate both x and y",
                explanation: "Both derivatives are required in the formula."
            },

            {
                q: "Parametric arc length is commonly used in?",
                options: [
                    "Robot motion planning",
                    "Factoring polynomials",
                    "Triangle congruence"
                ],
                answer: "Robot motion planning",
                explanation: "Parametric curves are commonly used to model paths in robotics and engineering."
            }

        ]

    }
    ,

    "calculus2-polar-coordinates": {
        title: "Polar Coordinates",
        subtitle: "Learn how to locate points using distance and angle instead of x and y.",

        body: `

<h2>What are Polar Coordinates?</h2>

<p>The <strong>polar coordinate system</strong> represents points using a <strong>distance</strong> from the origin and an <strong>angle</strong> measured from the positive x-axis.</p>

<p>Instead of writing points as <strong>(x,y)</strong>, polar coordinates are written as:</p>

<p><strong>(r, θ)</strong></p>

<hr>

<h2>The Two Coordinates</h2>

<ul>

<li><strong>r</strong> = distance from the origin</li>

<li><strong>θ</strong> = angle measured from the positive x-axis</li>

</ul>

<p>For example:</p>

<p><strong>(4, 60°)</strong></p>

<p>means move 4 units from the origin in the direction of a 60° angle.</p>

<hr>

<h2>Converting Polar to Cartesian</h2>

<p>The conversion formulas are:</p>

<p><strong>x = r cos(θ)</strong></p>

<p><strong>y = r sin(θ)</strong></p>

<hr>

<h2>Converting Cartesian to Polar</h2>

<p>The reverse formulas are:</p>

<p><strong>r = √(x² + y²)</strong></p>

<p><strong>θ = tan⁻¹(y/x)</strong></p>

<p>Always choose the correct quadrant when determining θ.</p>

<hr>

<h2>Example</h2>

<p>Convert:</p>

<p><strong>(r, θ) = (5, 53.1°)</strong></p>

<p>Compute:</p>

<p><strong>x = 5 cos(53.1°) ≈ 3</strong></p>

<p><strong>y = 5 sin(53.1°) ≈ 4</strong></p>

<p>The Cartesian coordinates are approximately:</p>

<p><strong>(3,4)</strong></p>

<hr>

<h2>Negative Radius</h2>

<p>A negative value of <strong>r</strong> means move in the direction opposite the angle.</p>

<p>For example:</p>

<p><strong>(−3, 45°)</strong></p>

<p>represents the same point as:</p>

<p><strong>(3, 225°)</strong></p>

<hr>

<h2>Applications</h2>

<ul>

<li>Navigation</li>

<li>Radar systems</li>

<li>Astronomy</li>

<li>Circular motion</li>

<li>Electrical engineering</li>

<li>Computer graphics</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Mixing up x and r.</li>

<li>Using the wrong quadrant for θ.</li>

<li>Forgetting that negative r reverses direction.</li>

<li>Using degrees when radians are expected.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Polar coordinates use distance and angle.</li>

<li>x = r cos(θ).</li>

<li>y = r sin(θ).</li>

<li>r = √(x²+y²).</li>

<li>θ depends on the correct quadrant.</li>

</ul>

`,

        questions: [

            {
                q: "A polar coordinate is written as?",
                options: [
                    "(r, θ)",
                    "(x, y)",
                    "(θ, x)"
                ],
                answer: "(r, θ)",
                explanation: "Polar coordinates use distance and angle."
            },

            {
                q: "The value r represents?",
                options: [
                    "The distance from the origin",
                    "The angle",
                    "The slope"
                ],
                answer: "The distance from the origin",
                explanation: "r measures how far the point is from the origin."
            },

            {
                q: "The value θ represents?",
                options: [
                    "The angle from the positive x-axis",
                    "The y-coordinate",
                    "The radius of a circle"
                ],
                answer: "The angle from the positive x-axis",
                explanation: "θ is measured from the positive x-axis."
            },

            {
                q: "Which formula converts polar to Cartesian coordinates?",
                options: [
                    "x = r cos(θ)",
                    "x = r + θ",
                    "x = r²"
                ],
                answer: "x = r cos(θ)",
                explanation: "Multiply the radius by the cosine of the angle."
            },

            {
                q: "If r is negative, then?",
                options: [
                    "The point lies in the opposite direction",
                    "The point is invalid",
                    "The angle becomes zero"
                ],
                answer: "The point lies in the opposite direction",
                explanation: "A negative radius moves the point opposite the given angle."
            },

            {
                q: "A common mistake when converting to polar coordinates is?",
                options: [
                    "Choosing the wrong quadrant for θ",
                    "Forgetting +C",
                    "Using Integration by Parts"
                ],
                answer: "Choosing the wrong quadrant for θ",
                explanation: "The inverse tangent function alone does not always determine the correct quadrant."
            }

        ]

    }


};