




const calculus3Lessons = {

    "calculus3-three-dimensional-coordinate-system": {
        title: "The Three-Dimensional Coordinate System",
        subtitle: "Learn how points, distances, and geometric objects are represented in three-dimensional space.",

        body: `

<h2>What Is Three-Dimensional Space?</h2>

<p>In two-dimensional geometry, points are located using an x-coordinate and a y-coordinate.</p>

<p>A point in the plane is written as:</p>

<p><strong>(x, y)</strong></p>

<p>In three-dimensional space, we add a third coordinate called the z-coordinate.</p>

<p>A point in space is written as:</p>

<p><strong>(x, y, z)</strong></p>

<p>The three coordinates describe the position of a point relative to three perpendicular coordinate axes.</p>

<hr>

<h2>The Coordinate Axes</h2>

<p>The three-dimensional coordinate system contains three axes:</p>

<ul>
<li><strong>x-axis</strong></li>
<li><strong>y-axis</strong></li>
<li><strong>z-axis</strong></li>
</ul>

<p>These axes intersect at a common point called the origin.</p>

<p>The origin is written as:</p>

<p><strong>(0, 0, 0)</strong></p>

<p>The three axes are mutually perpendicular.</p>

<hr>

<h2>The Coordinate Planes</h2>

<p>The coordinate axes form three coordinate planes.</p>

<ul>
<li>The <strong>xy-plane</strong> is defined by <strong>z = 0</strong>.</li>
<li>The <strong>xz-plane</strong> is defined by <strong>y = 0</strong>.</li>
<li>The <strong>yz-plane</strong> is defined by <strong>x = 0</strong>.</li>
</ul>

<p>Each coordinate plane divides space into separate regions.</p>

<hr>

<h2>Octants</h2>

<p>The three coordinate planes divide three-dimensional space into eight regions called <strong>octants</strong>.</p>

<p>This is similar to how the x-axis and y-axis divide the coordinate plane into four quadrants.</p>

<p>The first octant usually contains points for which:</p>

<p><strong>x &gt; 0, y &gt; 0, and z &gt; 0</strong></p>

<p>The remaining octants are determined by different combinations of positive and negative coordinates.</p>

<hr>

<h2>Plotting a Point in Space</h2>

<p>Consider the point:</p>

<p><strong>P(2, 3, 4)</strong></p>

<p>This means:</p>

<ul>
<li>Move 2 units in the positive x-direction.</li>
<li>Move 3 units in the positive y-direction.</li>
<li>Move 4 units in the positive z-direction.</li>
</ul>

<p>The point is located in the first octant because all three coordinates are positive.</p>

<hr>

<h2>Understanding Coordinate Signs</h2>

<p>The signs of the coordinates indicate the direction of movement along each axis.</p>

<p>For example:</p>

<p><strong>A(-2, 3, -4)</strong></p>

<ul>
<li>The x-coordinate is negative.</li>
<li>The y-coordinate is positive.</li>
<li>The z-coordinate is negative.</li>
</ul>

<p>Therefore, the point lies in the region where x and z are negative while y is positive.</p>

<hr>

<h2>Distance Between Two Points</h2>

<p>The distance formula in three dimensions extends the distance formula from two dimensions.</p>

<p>For two points:</p>

<p><strong>P₁(x₁, y₁, z₁)</strong></p>

<p>and:</p>

<p><strong>P₂(x₂, y₂, z₂)</strong></p>

<p>the distance between them is:</p>

<p><strong>d = √[(x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²]</strong></p>

<p>This formula comes from applying the Pythagorean Theorem in three dimensions.</p>

<hr>

<h2>Distance Example</h2>

<p>Find the distance between:</p>

<p><strong>P(1, 2, 3)</strong></p>

<p>and:</p>

<p><strong>Q(4, 6, 3)</strong></p>

<p>Use the distance formula:</p>

<p><strong>d = √[(4-1)²+(6-2)²+(3-3)²]</strong></p>

<p>Simplify:</p>

<p><strong>d = √[3²+4²+0²]</strong></p>

<p><strong>d = √[9+16]</strong></p>

<p><strong>d = √25</strong></p>

<p><strong>d = 5</strong></p>

<p>The distance between the two points is 5 units.</p>

<hr>

<h2>The Midpoint Formula</h2>

<p>The midpoint of a line segment in three-dimensional space is found by averaging the corresponding coordinates.</p>

<p>For:</p>

<p><strong>P₁(x₁, y₁, z₁)</strong></p>

<p>and:</p>

<p><strong>P₂(x₂, y₂, z₂)</strong></p>

<p>the midpoint is:</p>

<p><strong>M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)</strong></p>

<hr>

<h2>Midpoint Example</h2>

<p>Find the midpoint between:</p>

<p><strong>P(2, 4, 6)</strong></p>

<p>and:</p>

<p><strong>Q(8, 10, 12)</strong></p>

<p>Average the corresponding coordinates:</p>

<p><strong>M = ((2+8)/2, (4+10)/2, (6+12)/2)</strong></p>

<p><strong>M = (5, 7, 9)</strong></p>

<hr>

<h2>Equations of Planes Parallel to Coordinate Planes</h2>

<p>Simple equations can describe planes in three-dimensional space.</p>

<ul>
<li><strong>x = a</strong> describes a plane parallel to the yz-plane.</li>
<li><strong>y = b</strong> describes a plane parallel to the xz-plane.</li>
<li><strong>z = c</strong> describes a plane parallel to the xy-plane.</li>
</ul>

<p>For example:</p>

<p><strong>z = 4</strong></p>

<p>describes a horizontal plane containing every point whose z-coordinate is 4.</p>

<hr>

<h2>Equations of Spheres</h2>

<p>A sphere is the set of all points located a fixed distance from a center point.</p>

<p>A sphere with center:</p>

<p><strong>(h, k, l)</strong></p>

<p>and radius:</p>

<p><strong>r</strong></p>

<p>has the equation:</p>

<p><strong>(x-h)²+(y-k)²+(z-l)²=r²</strong></p>

<hr>

<h2>Sphere Example</h2>

<p>Consider the equation:</p>

<p><strong>(x-2)²+(y+1)²+(z-3)²=25</strong></p>

<p>Compare it to the standard sphere equation.</p>

<p>The center is:</p>

<p><strong>(2, -1, 3)</strong></p>

<p>The radius is:</p>

<p><strong>r = √25 = 5</strong></p>

<hr>

<h2>Sphere Centered at the Origin</h2>

<p>If the center of a sphere is the origin, then:</p>

<p><strong>h = 0, k = 0, and l = 0</strong></p>

<p>The equation becomes:</p>

<p><strong>x²+y²+z²=r²</strong></p>

<p>For example:</p>

<p><strong>x²+y²+z²=16</strong></p>

<p>describes a sphere centered at the origin with radius 4.</p>

<hr>

<h2>Real-World Applications</h2>

<p>Three-dimensional coordinates are used in many fields.</p>

<ul>
<li>Engineering</li>
<li>Architecture</li>
<li>Computer graphics</li>
<li>Video game design</li>
<li>Physics</li>
<li>Astronomy</li>
<li>Robotics</li>
<li>Global positioning systems</li>
</ul>

<p>Whenever an object's position must be described in space, three-dimensional coordinates are useful.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Forgetting to include the z-coordinate.</li>
<li>Using the two-dimensional distance formula instead of the three-dimensional formula.</li>
<li>Forgetting to square the difference in the z-coordinates.</li>
<li>Incorrectly identifying the center of a sphere because of the signs inside the parentheses.</li>
<li>Confusing coordinate planes with coordinate axes.</li>
</ul>

<hr>

<h2>Summary</h2>

<ul>
<li>A point in three-dimensional space is written as (x, y, z).</li>
<li>The x-axis, y-axis, and z-axis intersect at the origin.</li>
<li>The coordinate planes divide space into eight octants.</li>
<li>The three-dimensional distance formula includes differences in x, y, and z.</li>
<li>The midpoint is found by averaging corresponding coordinates.</li>
<li>A sphere is the set of points located a fixed distance from its center.</li>
</ul>

`,

        questions: [

            {
                q: "A point in three-dimensional space is written in which form?",
                options: [
                    "(x, y, z)",
                    "(x, y)",
                    "(r, θ)",
                    "(x, z)"
                ],
                answer: "(x, y, z)",
                explanation: "Three-dimensional points require x-, y-, and z-coordinates."
            },

            {
                q: "What are the coordinates of the origin in three-dimensional space?",
                options: [
                    "(0, 0, 0)",
                    "(1, 1, 1)",
                    "(0, 0)",
                    "(1, 0, 0)"
                ],
                answer: "(0, 0, 0)",
                explanation: "The origin is where all three coordinate axes intersect."
            },

            {
                q: "Which equation represents the xy-plane?",
                options: [
                    "z = 0",
                    "x = 0",
                    "y = 0",
                    "x + y = 0"
                ],
                answer: "z = 0",
                explanation: "Every point in the xy-plane has a z-coordinate equal to zero."
            },

            {
                q: "Which equation represents the yz-plane?",
                options: [
                    "x = 0",
                    "y = 0",
                    "z = 0",
                    "y + z = 0"
                ],
                answer: "x = 0",
                explanation: "Every point in the yz-plane has an x-coordinate equal to zero."
            },

            {
                q: "How many octants are formed by the three coordinate planes?",
                options: [
                    "8",
                    "4",
                    "6",
                    "3"
                ],
                answer: "8",
                explanation: "The three coordinate planes divide space into eight regions called octants."
            },

            {
                q: "Which point lies in the first octant?",
                options: [
                    "(2, 3, 4)",
                    "(-2, 3, 4)",
                    "(2, -3, 4)",
                    "(2, 3, -4)"
                ],
                answer: "(2, 3, 4)",
                explanation: "In the first octant, the x-, y-, and z-coordinates are all positive."
            },

            {
                q: "What is the distance between (1, 2, 3) and (4, 6, 3)?",
                options: [
                    "5",
                    "7",
                    "4",
                    "3"
                ],
                answer: "5",
                explanation: "The distance is √[(4-1)²+(6-2)²+(3-3)²]=√25=5."
            },

            {
                q: "What is the midpoint between (2, 4, 6) and (8, 10, 12)?",
                options: [
                    "(5, 7, 9)",
                    "(10, 14, 18)",
                    "(3, 5, 6)",
                    "(6, 8, 10)"
                ],
                answer: "(5, 7, 9)",
                explanation: "Average the corresponding coordinates to obtain (5, 7, 9)."
            },

            {
                q: "The equation z = 4 represents which geometric object?",
                options: [
                    "A plane parallel to the xy-plane",
                    "A plane parallel to the yz-plane",
                    "A sphere",
                    "A line parallel to the z-axis"
                ],
                answer: "A plane parallel to the xy-plane",
                explanation: "Every point on the plane has a constant z-coordinate of 4."
            },

            {
                q: "What is the center of the sphere (x-2)²+(y+1)²+(z-3)²=25?",
                options: [
                    "(2, -1, 3)",
                    "(-2, 1, -3)",
                    "(2, 1, 3)",
                    "(-2, -1, -3)"
                ],
                answer: "(2, -1, 3)",
                explanation: "The standard form is (x-h)²+(y-k)²+(z-l)²=r², so the center is (2, -1, 3)."
            },

            {
                q: "What is the radius of the sphere (x-2)²+(y+1)²+(z-3)²=25?",
                options: [
                    "5",
                    "25",
                    "10",
                    "√5"
                ],
                answer: "5",
                explanation: "Since r²=25, the radius is r=5."
            },

            {
                q: "Which equation describes a sphere centered at the origin with radius 4?",
                options: [
                    "x²+y²+z²=16",
                    "x²+y²+z²=4",
                    "x+y+z=16",
                    "(x-4)²+(y-4)²+(z-4)²=16"
                ],
                answer: "x²+y²+z²=16",
                explanation: "A sphere centered at the origin has equation x²+y²+z²=r², and 4²=16."
            }

        ]

    }
    ,

    "calculus3-three-dimensional-coordinate-system-quiz": {
        title: "The Three-Dimensional Coordinate System Quiz",
        subtitle: "Test your understanding of points, distances, midpoints, coordinate planes, and spheres in three-dimensional space.",

        body: `

<h2>Quiz Instructions</h2>

<p>Select the best answer for each question.</p>

<ul>
<li>Identify coordinate axes and coordinate planes.</li>
<li>Interpret points in three-dimensional space.</li>
<li>Calculate distances and midpoints.</li>
<li>Recognize equations of planes.</li>
<li>Identify the center and radius of a sphere.</li>
</ul>

`,

        questions: [

            {
                q: "Which coordinate is added when moving from two-dimensional space to three-dimensional space?",
                options: [
                    "The z-coordinate",
                    "The x-coordinate",
                    "The y-coordinate",
                    "The r-coordinate"
                ],
                answer: "The z-coordinate",
                explanation: "Three-dimensional space adds the z-coordinate to the usual x- and y-coordinates."
            },

            {
                q: "Which coordinate plane is described by y = 0?",
                options: [
                    "The xz-plane",
                    "The xy-plane",
                    "The yz-plane",
                    "The xyz-plane"
                ],
                answer: "The xz-plane",
                explanation: "Every point in the xz-plane has a y-coordinate equal to zero."
            },

            {
                q: "Which coordinate plane is described by x = 0?",
                options: [
                    "The yz-plane",
                    "The xy-plane",
                    "The xz-plane",
                    "The x-axis"
                ],
                answer: "The yz-plane",
                explanation: "Every point in the yz-plane has an x-coordinate equal to zero."
            },

            {
                q: "In which octant is the point (3, 2, 5)?",
                options: [
                    "The first octant",
                    "A region where x is negative",
                    "A region where y is negative",
                    "A region where z is negative"
                ],
                answer: "The first octant",
                explanation: "All three coordinates are positive, so the point lies in the first octant."
            },

            {
                q: "What is the distance between (0, 0, 0) and (2, 3, 6)?",
                options: [
                    "7",
                    "11",
                    "√41",
                    "5"
                ],
                answer: "7",
                explanation: "The distance is √(2²+3²+6²)=√49=7."
            },

            {
                q: "What is the midpoint between (-2, 4, 6) and (4, 8, 10)?",
                options: [
                    "(1, 6, 8)",
                    "(2, 12, 16)",
                    "(-1, 2, 3)",
                    "(3, 4, 5)"
                ],
                answer: "(1, 6, 8)",
                explanation: "Average each pair of coordinates: ((-2+4)/2, (4+8)/2, (6+10)/2)=(1,6,8)."
            },

            {
                q: "Which equation represents a plane parallel to the yz-plane?",
                options: [
                    "x = 5",
                    "y = 5",
                    "z = 5",
                    "x + y + z = 5"
                ],
                answer: "x = 5",
                explanation: "A plane with a constant x-coordinate is parallel to the yz-plane."
            },

            {
                q: "Which equation represents a plane parallel to the xz-plane?",
                options: [
                    "y = -2",
                    "x = -2",
                    "z = -2",
                    "x + z = -2"
                ],
                answer: "y = -2",
                explanation: "A plane with a constant y-coordinate is parallel to the xz-plane."
            },

            {
                q: "What is the center of the sphere (x+3)²+(y-4)²+(z+2)²=36?",
                options: [
                    "(-3, 4, -2)",
                    "(3, -4, 2)",
                    "(-3, -4, -2)",
                    "(3, 4, 2)"
                ],
                answer: "(-3, 4, -2)",
                explanation: "Rewrite each term using (x-h), (y-k), and (z-l). The center is (-3,4,-2)."
            },

            {
                q: "What is the radius of the sphere (x+3)²+(y-4)²+(z+2)²=36?",
                options: [
                    "6",
                    "36",
                    "18",
                    "3"
                ],
                answer: "6",
                explanation: "Since r²=36, the radius is r=6."
            },

            {
                q: "Which equation describes a sphere centered at (1, 2, 3) with radius 5?",
                options: [
                    "(x-1)²+(y-2)²+(z-3)²=25",
                    "(x+1)²+(y+2)²+(z+3)²=25",
                    "(x-1)²+(y-2)²+(z-3)²=5",
                    "x²+y²+z²=25"
                ],
                answer: "(x-1)²+(y-2)²+(z-3)²=25",
                explanation: "Use the standard form (x-h)²+(y-k)²+(z-l)²=r² with center (1,2,3) and r²=25."
            },

            {
                q: "Which statement about the three-dimensional distance formula is true?",
                options: [
                    "It includes the squared differences of the x-, y-, and z-coordinates.",
                    "It uses only the x- and y-coordinates.",
                    "It adds the coordinates without squaring them.",
                    "It can only be used when one point is the origin."
                ],
                answer: "It includes the squared differences of the x-, y-, and z-coordinates.",
                explanation: "The three-dimensional distance formula extends the two-dimensional formula by including the z-coordinate difference."
            }

        ]

    },

    "calculus3-vectors": {

        title: "Vectors",

        subtitle: "Learn how vectors represent magnitude and direction, and how to perform basic vector operations.",

        body: `

<h2>What Is a Vector?</h2>

<p>A <strong>vector</strong> is a quantity that has both <strong>magnitude</strong> (length) and <strong>direction</strong>.</p>

<p>Unlike a scalar, which has only magnitude, a vector tells us both <em>how much</em> and <em>which direction</em>.</p>

<p>Examples of vector quantities include:</p>

<ul>
<li>Velocity</li>
<li>Force</li>
<li>Acceleration</li>
<li>Displacement</li>
</ul>

<p>Examples of scalar quantities include:</p>

<ul>
<li>Mass</li>
<li>Temperature</li>
<li>Time</li>
<li>Distance</li>
</ul>

<hr>

<h2>Representing a Vector</h2>

<p>A vector in two dimensions is commonly written as:</p>

<p><strong>&lt;a, b&gt;</strong></p>

<p>or</p>

<p><strong>ai + bj</strong></p>

<p>where:</p>

<ul>
<li><strong>i</strong> is the unit vector in the x-direction.</li>
<li><strong>j</strong> is the unit vector in the y-direction.</li>
</ul>

<p>In three dimensions, we include the z-component:</p>

<p><strong>&lt;a, b, c&gt;</strong></p>

<p>or</p>

<p><strong>ai + bj + ck</strong></p>

<p>where <strong>k</strong> is the unit vector in the z-direction.</p>

<hr>

<h2>Component Form</h2>

<p>If a vector begins at</p>

<p><strong>P(x₁,y₁,z₁)</strong></p>

<p>and ends at</p>

<p><strong>Q(x₂,y₂,z₂)</strong></p>

<p>then its component form is:</p>

<p><strong>&lt;x₂−x₁, y₂−y₁, z₂−z₁&gt;</strong></p>

<hr>

<h2>Example</h2>

<p>Find the vector from</p>

<p><strong>P(1,2,3)</strong></p>

<p>to</p>

<p><strong>Q(5,7,9)</strong></p>

<p>Subtract corresponding coordinates.</p>

<p><strong>&lt;5−1, 7−2, 9−3&gt;</strong></p>

<p><strong>= &lt;4,5,6&gt;</strong></p>

<hr>

<h2>Magnitude of a Vector</h2>

<p>The magnitude (or length) of a vector tells us how long the vector is.</p>

<p>For</p>

<p><strong>v = &lt;a,b,c&gt;</strong></p>

<p>the magnitude is</p>

<p><strong>|v| = √(a²+b²+c²)</strong></p>

<hr>

<h2>Example</h2>

<p>Find the magnitude of</p>

<p><strong>&lt;2,3,6&gt;</strong></p>

<p><strong>|v| = √(2²+3²+6²)</strong></p>

<p><strong>= √49</strong></p>

<p><strong>= 7</strong></p>

<hr>

<h2>Adding Vectors</h2>

<p>Add corresponding components.</p>

<p>If</p>

<p><strong>u=&lt;2,4,1&gt;</strong></p>

<p>and</p>

<p><strong>v=&lt;5,−2,3&gt;</strong></p>

<p>then</p>

<p><strong>u+v=&lt;7,2,4&gt;</strong></p>

<hr>

<h2>Subtracting Vectors</h2>

<p>Subtract corresponding components.</p>

<p><strong>u−v=&lt;−3,6,−2&gt;</strong></p>

<hr>

<h2>Scalar Multiplication</h2>

<p>Multiply every component by the scalar.</p>

<p>Example:</p>

<p><strong>3&lt;2,−1,4&gt;</strong></p>

<p><strong>= &lt;6,−3,12&gt;</strong></p>

<hr>

<h2>Unit Vectors</h2>

<p>A <strong>unit vector</strong> has magnitude 1.</p>

<p>The standard unit vectors are:</p>

<ul>
<li><strong>i=&lt;1,0,0&gt;</strong></li>
<li><strong>j=&lt;0,1,0&gt;</strong></li>
<li><strong>k=&lt;0,0,1&gt;</strong></li>
</ul>

<hr>

<h2>Finding a Unit Vector</h2>

<p>Divide every component by the vector's magnitude.</p>

<p>If</p>

<p><strong>v=&lt;3,4,0&gt;</strong></p>

<p>then</p>

<p><strong>|v|=5</strong></p>

<p>The unit vector is</p>

<p><strong>&lt;3/5,4/5,0&gt;</strong></p>

<hr>

<h2>Applications of Vectors</h2>

<ul>
<li>Navigation</li>
<li>Flight paths</li>
<li>Physics</li>
<li>Engineering</li>
<li>Computer graphics</li>
<li>Robotics</li>
<li>Video games</li>
</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Adding vectors by adding magnitudes instead of components.</li>
<li>Subtracting coordinates in the wrong order.</li>
<li>Forgetting to square every component when finding magnitude.</li>
<li>Confusing vectors with points.</li>
<li>Forgetting that vectors have direction.</li>
</ul>

<hr>

<h2>Summary</h2>

<ul>
<li>Vectors have both magnitude and direction.</li>
<li>Vectors may be written using components or unit vectors.</li>
<li>Magnitude is found using the distance formula.</li>
<li>Vector addition and subtraction are performed component-wise.</li>
<li>Scalar multiplication changes the vector's magnitude.</li>
<li>A unit vector has length 1.</li>
</ul>

`,

        questions: [

            {
                q: "Which statement best describes a vector?",
                options: [
                    "A quantity with both magnitude and direction",
                    "A quantity with magnitude only",
                    "A quantity with direction only",
                    "A point in space"
                ],
                answer: "A quantity with both magnitude and direction",
                explanation: "A vector has both magnitude (length) and direction."
            },

            {
                q: "Which of the following is a scalar quantity?",
                options: [
                    "Temperature",
                    "Velocity",
                    "Force",
                    "Acceleration"
                ],
                answer: "Temperature",
                explanation: "Temperature has magnitude only, making it a scalar."
            },

            {
                q: "Which of the following is a vector quantity?",
                options: [
                    "Displacement",
                    "Mass",
                    "Time",
                    "Volume"
                ],
                answer: "Displacement",
                explanation: "Displacement has both magnitude and direction."
            },

            {
                q: "Find the vector from P(1,2,3) to Q(5,7,9).",
                options: [
                    "<4,5,6>",
                    "<5,7,9>",
                    "<-4,-5,-6>",
                    "<6,9,12>"
                ],
                answer: "<4,5,6>",
                explanation: "Subtract corresponding coordinates: <5−1, 7−2, 9−3>."
            },

            {
                q: "Find the magnitude of <2,3,6>.",
                options: [
                    "7",
                    "11",
                    "49",
                    "√13"
                ],
                answer: "7",
                explanation: "√(2²+3²+6²)=√49=7."
            },

            {
                q: "If u=<2,4,1> and v=<5,-2,3>, find u+v.",
                options: [
                    "<7,2,4>",
                    "<3,6,-2>",
                    "<7,6,4>",
                    "<-3,2,-2>"
                ],
                answer: "<7,2,4>",
                explanation: "Add corresponding components."
            },

            {
                q: "If u=<2,4,1> and v=<5,-2,3>, find u−v.",
                options: [
                    "<-3,6,-2>",
                    "<7,2,4>",
                    "<3,-6,2>",
                    "<-7,-2,-4>"
                ],
                answer: "<-3,6,-2>",
                explanation: "Subtract corresponding components."
            },

            {
                q: "Compute 3<2,-1,4>.",
                options: [
                    "<6,-3,12>",
                    "<5,-2,12>",
                    "<6,-1,12>",
                    "<2,-3,4>"
                ],
                answer: "<6,-3,12>",
                explanation: "Multiply each component by 3."
            },

            {
                q: "Which vector is the standard unit vector in the positive y-direction?",
                options: [
                    "j=<0,1,0>",
                    "i=<1,0,0>",
                    "k=<0,0,1>",
                    "<1,1,0>"
                ],
                answer: "j=<0,1,0>",
                explanation: "The unit vector j points in the positive y-direction."
            },

            {
                q: "Find the unit vector in the direction of <3,4,0>.",
                options: [
                    "<3/5,4/5,0>",
                    "<3,4,0>",
                    "<5/3,5/4,0>",
                    "<1,1,0>"
                ],
                answer: "<3/5,4/5,0>",
                explanation: "Divide each component by the magnitude, which is 5."
            },

            {
                q: "What happens to the direction of a vector when multiplied by -1?",
                options: [
                    "Its direction is reversed.",
                    "Its magnitude becomes zero.",
                    "Its direction stays the same.",
                    "Its magnitude doubles."
                ],
                answer: "Its direction is reversed.",
                explanation: "Multiplying by -1 reverses the direction while keeping the same magnitude."
            },

            {
                q: "Which operation is performed component-by-component?",
                options: [
                    "Vector addition",
                    "Finding magnitude",
                    "Finding a unit vector",
                    "Calculating direction angles"
                ],
                answer: "Vector addition",
                explanation: "Vector addition is performed by adding the corresponding components."
            }

        ]



    },

    "calculus3-vectors-quiz": {

        title: "Vectors Quiz",

        subtitle: "Test your understanding of vector notation, components, magnitude, operations, and unit vectors.",

        body: `

<h2>Quiz Instructions</h2>

<p>Select the best answer for each question.</p>

<ul>
<li>Identify vector and scalar quantities.</li>
<li>Find vectors between two points.</li>
<li>Calculate vector magnitudes.</li>
<li>Add, subtract, and multiply vectors by scalars.</li>
<li>Find unit vectors.</li>
</ul>

`,

        questions: [

            {
                q: "Which statement best describes a vector?",
                options: [
                    "A quantity with both magnitude and direction",
                    "A quantity with magnitude only",
                    "A point with no direction",
                    "A number that must be positive"
                ],
                answer: "A quantity with both magnitude and direction",
                explanation: "A vector contains both a magnitude, or length, and a direction."
            },

            {
                q: "Which of the following is a vector quantity?",
                options: [
                    "Velocity",
                    "Temperature",
                    "Mass",
                    "Time"
                ],
                answer: "Velocity",
                explanation: "Velocity has both magnitude and direction, so it is a vector quantity."
            },

            {
                q: "Which of the following is a scalar quantity?",
                options: [
                    "Temperature",
                    "Force",
                    "Acceleration",
                    "Displacement"
                ],
                answer: "Temperature",
                explanation: "Temperature has magnitude but no direction, so it is a scalar quantity."
            },

            {
                q: "What is the component form of the vector from P(1, 2, 3) to Q(5, 7, 9)?",
                options: [
                    "<4, 5, 6>",
                    "<6, 9, 12>",
                    "<-4, -5, -6>",
                    "<5, 7, 9>"
                ],
                answer: "<4, 5, 6>",
                explanation: "Subtract the coordinates of P from the corresponding coordinates of Q: <5-1, 7-2, 9-3>=<4,5,6>."
            },

            {
                q: "What is the component form of the vector from A(4, -1, 2) to B(1, 3, 8)?",
                options: [
                    "<-3, 4, 6>",
                    "<3, -4, -6>",
                    "<5, 2, 10>",
                    "<-5, -2, -10>"
                ],
                answer: "<-3, 4, 6>",
                explanation: "Subtract the coordinates of A from B: <1-4, 3-(-1), 8-2>=<-3,4,6>."
            },

            {
                q: "What is the magnitude of the vector <2, 3, 6>?",
                options: [
                    "7",
                    "11",
                    "√13",
                    "49"
                ],
                answer: "7",
                explanation: "The magnitude is √(2²+3²+6²)=√49=7."
            },

            {
                q: "What is the magnitude of the vector <3, 4, 0>?",
                options: [
                    "5",
                    "7",
                    "25",
                    "√7"
                ],
                answer: "5",
                explanation: "The magnitude is √(3²+4²+0²)=√25=5."
            },

            {
                q: "If u=<2, 4, 1> and v=<5, -2, 3>, what is u+v?",
                options: [
                    "<7, 2, 4>",
                    "<3, 6, -2>",
                    "<10, -8, 3>",
                    "<7, 6, 4>"
                ],
                answer: "<7, 2, 4>",
                explanation: "Add corresponding components: <2+5, 4+(-2), 1+3>=<7,2,4>."
            },

            {
                q: "If u=<2, 4, 1> and v=<5, -2, 3>, what is u-v?",
                options: [
                    "<-3, 6, -2>",
                    "<3, -6, 2>",
                    "<7, 2, 4>",
                    "<-3, 2, -2>"
                ],
                answer: "<-3, 6, -2>",
                explanation: "Subtract corresponding components: <2-5, 4-(-2), 1-3>=<-3,6,-2>."
            },

            {
                q: "What is 3<2, -1, 4>?",
                options: [
                    "<6, -3, 12>",
                    "<5, 2, 7>",
                    "<6, -1, 12>",
                    "<2, -3, 4>"
                ],
                answer: "<6, -3, 12>",
                explanation: "Multiply every component by 3: <3(2), 3(-1), 3(4)>=<6,-3,12>."
            },

            {
                q: "Which vector is the standard unit vector in the positive z-direction?",
                options: [
                    "k=<0, 0, 1>",
                    "i=<1, 0, 0>",
                    "j=<0, 1, 0>",
                    "k=<1, 1, 1>"
                ],
                answer: "k=<0, 0, 1>",
                explanation: "The standard unit vector k points in the positive z-direction."
            },

            {
                q: "Which vector is the standard unit vector in the positive x-direction?",
                options: [
                    "i=<1, 0, 0>",
                    "j=<0, 1, 0>",
                    "k=<0, 0, 1>",
                    "i=<1, 1, 0>"
                ],
                answer: "i=<1, 0, 0>",
                explanation: "The standard unit vector i points in the positive x-direction."
            },

            {
                q: "What is the unit vector in the direction of <3, 4, 0>?",
                options: [
                    "<3/5, 4/5, 0>",
                    "<3, 4, 0>",
                    "<5/3, 5/4, 0>",
                    "<1/3, 1/4, 0>"
                ],
                answer: "<3/5, 4/5, 0>",
                explanation: "The magnitude is 5, so divide each component by 5."
            },

            {
                q: "What is the unit vector in the direction of <0, 6, 8>?",
                options: [
                    "<0, 3/5, 4/5>",
                    "<0, 6, 8>",
                    "<0, 6/14, 8/14>",
                    "<0, 4/5, 3/5>"
                ],
                answer: "<0, 3/5, 4/5>",
                explanation: "The magnitude is √(0²+6²+8²)=10, so the unit vector is <0,6/10,8/10>=<0,3/5,4/5>."
            },

            {
                q: "If v=<2, -3, 4>, what is -v?",
                options: [
                    "<-2, 3, -4>",
                    "<2, 3, 4>",
                    "<-2, -3, -4>",
                    "<2, -3, -4>"
                ],
                answer: "<-2, 3, -4>",
                explanation: "Multiply every component of v by -1."
            }

        ]

    },
    "calculus3-dot-product-quiz": {

        title: "The Dot Product Quiz",

        subtitle: "Test your understanding of dot products, angles between vectors, orthogonal vectors, and vector projections.",

        body: `

<h2>Quiz Instructions</h2>

<p>Select the best answer for each question.</p>

<ul>
<li>Compute dot products.</li>
<li>Recognize properties of the dot product.</li>
<li>Determine whether vectors are orthogonal.</li>
<li>Use the dot product to find angles.</li>
<li>Interpret vector projections.</li>
</ul>

`,

        questions: [

            {
                q: "The result of the dot product of two vectors is:",
                options: [
                    "A scalar",
                    "A vector",
                    "A matrix",
                    "A plane"
                ],
                answer: "A scalar",
                explanation: "The dot product always produces a scalar (real number)."
            },

            {
                q: "Find <2,3,4> · <5,1,-2>.",
                options: [
                    "5",
                    "13",
                    "21",
                    "-5"
                ],
                answer: "5",
                explanation: "(2)(5)+(3)(1)+(4)(-2)=10+3-8=5."
            },

            {
                q: "Find <1,2> · <3,4>.",
                options: [
                    "11",
                    "10",
                    "14",
                    "7"
                ],
                answer: "11",
                explanation: "(1)(3)+(2)(4)=3+8=11."
            },

            {
                q: "Find <-2,5,1> · <4,-1,3>.",
                options: [
                    "-10",
                    "10",
                    "-6",
                    "6"
                ],
                answer: "-10",
                explanation: "(-2)(4)+(5)(-1)+(1)(3)=-8-5+3=-10."
            },

            {
                q: "If u·v = 0 and neither vector is the zero vector, then the vectors are:",
                options: [
                    "Orthogonal",
                    "Parallel",
                    "Equal",
                    "Opposite"
                ],
                answer: "Orthogonal",
                explanation: "A zero dot product indicates perpendicular (orthogonal) vectors."
            },

            {
                q: "Which property of the dot product is always true?",
                options: [
                    "u·v = v·u",
                    "u·v = -(v·u)",
                    "u·v = u×v",
                    "u·v = |u|+|v|"
                ],
                answer: "u·v = v·u",
                explanation: "The dot product is commutative."
            },

            {
                q: "What is <1,0,0> · <0,1,0>?",
                options: [
                    "0",
                    "1",
                    "-1",
                    "2"
                ],
                answer: "0",
                explanation: "(1)(0)+(0)(1)+(0)(0)=0."
            },

            {
                q: "If two vectors are perpendicular, what is the angle between them?",
                options: [
                    "90°",
                    "45°",
                    "60°",
                    "180°"
                ],
                answer: "90°",
                explanation: "Perpendicular vectors form a right angle."
            },

            {
                q: "The formula u·u is equal to:",
                options: [
                    "|u|²",
                    "|u|",
                    "2|u|",
                    "0"
                ],
                answer: "|u|²",
                explanation: "The dot product of a vector with itself equals the square of its magnitude."
            },

            {
                q: "Which formula is used to find the angle between two vectors?",
                options: [
                    "cosθ=(u·v)/(|u||v|)",
                    "sinθ=(u·v)/(|u||v|)",
                    "tanθ=(u·v)/(|u||v|)",
                    "|u+v|"
                ],
                answer: "cosθ=(u·v)/(|u||v|)",
                explanation: "Rearranging the geometric definition of the dot product gives this formula."
            },

            {
                q: "If u·v is positive, the angle between the vectors is:",
                options: [
                    "Less than 90°",
                    "Exactly 90°",
                    "Greater than 90°",
                    "Exactly 180°"
                ],
                answer: "Less than 90°",
                explanation: "A positive cosine corresponds to an acute angle."
            },

            {
                q: "If u·v is negative, the angle between the vectors is:",
                options: [
                    "Greater than 90°",
                    "Exactly 90°",
                    "Less than 90°",
                    "Exactly 0°"
                ],
                answer: "Greater than 90°",
                explanation: "A negative cosine corresponds to an obtuse angle."
            },

            {
                q: "Which operation uses the dot product?",
                options: [
                    "Vector projection",
                    "Cross product",
                    "Midpoint formula",
                    "Determinant"
                ],
                answer: "Vector projection",
                explanation: "Projection formulas are based on the dot product."
            },

            {
                q: "Which field commonly uses dot products to calculate lighting effects?",
                options: [
                    "Computer graphics",
                    "Accounting",
                    "Biology",
                    "History"
                ],
                answer: "Computer graphics",
                explanation: "Lighting and shading calculations rely heavily on dot products."
            },

            {
                q: "To compute a dot product, you:",
                options: [
                    "Multiply corresponding components and add the results.",
                    "Multiply the magnitudes only.",
                    "Add the vectors first.",
                    "Take the determinant."
                ],
                answer: "Multiply corresponding components and add the results.",
                explanation: "This is the definition of the dot product."
            }

        ]

    },
    "calculus3-cross-product": {

        title: "The Cross Product",

        subtitle: "Learn how to compute the cross product of two vectors and use it to find perpendicular vectors and areas.",

        body: `

<h2>What Is the Cross Product?</h2>

<p>The <strong>cross product</strong>, also called the <strong>vector product</strong>, combines two vectors in three-dimensional space to produce a <strong>new vector</strong>.</p>

<p>Unlike the dot product, which produces a scalar, the cross product always produces another vector.</p>

<hr>

<h2>Notation</h2>

<p>If</p>

<p><strong>u = &lt;a,b,c&gt;</strong></p>

<p>and</p>

<p><strong>v = &lt;d,e,f&gt;</strong></p>

<p>then the cross product is written as</p>

<p><strong>u × v</strong></p>

<hr>

<h2>The Cross Product Formula</h2>

<p>The cross product is computed using the determinant:</p>

<p>

<strong>

| i&nbsp;&nbsp;j&nbsp;&nbsp;k |<br>

| a&nbsp;&nbsp;b&nbsp;&nbsp;c |<br>

| d&nbsp;&nbsp;e&nbsp;&nbsp;f |

</strong>

</p>

<p>Expanding the determinant gives:</p>

<p><strong>u × v = &lt;bf-ce, cd-af, ae-bd&gt;</strong></p>

<hr>

<h2>Example 1</h2>

<p>Find</p>

<p><strong>&lt;1,2,3&gt; × &lt;4,5,6&gt;</strong></p>

<p>Compute each component:</p>

<p><strong>&lt;(2)(6)-(3)(5), (3)(4)-(1)(6), (1)(5)-(2)(4)&gt;</strong></p>

<p><strong>= &lt;-3,6,-3&gt;</strong></p>

<hr>

<h2>Direction of the Cross Product</h2>

<p>The vector produced by the cross product is perpendicular to both original vectors.</p>

<p>The direction is determined using the <strong>Right-Hand Rule</strong>.</p>

<ul>

<li>Point your fingers in the direction of the first vector.</li>

<li>Rotate toward the second vector.</li>

<li>Your thumb points in the direction of the cross product.</li>

</ul>

<hr>

<h2>Properties of the Cross Product</h2>

<ul>

<li><strong>u × v = -(v × u)</strong></li>

<li><strong>u × u = 0</strong></li>

<li><strong>u × 0 = 0</strong></li>

<li>The cross product is not commutative.</li>

</ul>

<hr>

<h2>Parallel Vectors</h2>

<p>If two vectors are parallel, then</p>

<p><strong>u × v = 0</strong></p>

<p>because the angle between them is either 0° or 180°.</p>

<hr>

<h2>Perpendicular Vector</h2>

<p>The cross product always produces a vector that is perpendicular to both original vectors.</p>

<p>This makes the cross product useful for finding normal vectors to planes.</p>

<hr>

<h2>Magnitude of the Cross Product</h2>

<p>The magnitude is</p>

<p><strong>|u × v| = |u||v| sinθ</strong></p>

<p>where θ is the angle between the vectors.</p>

<hr>

<h2>Area of a Parallelogram</h2>

<p>The area of the parallelogram formed by two vectors is</p>

<p><strong>|u × v|</strong></p>

<hr>

<h2>Example 2</h2>

<p>If</p>

<p><strong>|u × v| = 12</strong></p>

<p>then the parallelogram formed by the vectors has area</p>

<p><strong>12 square units.</strong></p>

<hr>

<h2>Area of a Triangle</h2>

<p>The area of the triangle formed by two vectors is</p>

<p><strong>½|u × v|</strong></p>

<hr>

<h2>Example 3</h2>

<p>If</p>

<p><strong>|u × v| = 18</strong></p>

<p>then the triangle has area</p>

<p><strong>9 square units.</strong></p>

<hr>

<h2>Applications</h2>

<ul>

<li>Finding normal vectors to planes</li>

<li>Computer graphics</li>

<li>Engineering</li>

<li>Robotics</li>

<li>Physics</li>

<li>3D modeling</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Confusing the cross product with the dot product.</li>

<li>Using the formula in two dimensions.</li>

<li>Expanding the determinant incorrectly.</li>

<li>Forgetting that order matters.</li>

<li>Forgetting the negative sign in the j-component during determinant expansion.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>The cross product produces a vector.</li>

<li>The resulting vector is perpendicular to both original vectors.</li>

<li>The Right-Hand Rule determines direction.</li>

<li>Parallel vectors have a cross product of zero.</li>

<li>The magnitude of the cross product gives the area of a parallelogram.</li>

<li>Half the magnitude gives the area of the corresponding triangle.</li>

</ul>

`,

        questions: [

            {
                q: "The cross product of two vectors produces:",
                options: [
                    "A vector",
                    "A scalar",
                    "A matrix",
                    "A point"
                ],
                answer: "A vector",
                explanation: "The cross product always produces another vector."
            },

            {
                q: "The cross product is also known as the:",
                options: [
                    "Vector product",
                    "Scalar product",
                    "Triple product",
                    "Unit product"
                ],
                answer: "Vector product",
                explanation: "The cross product is commonly called the vector product."
            },

            {
                q: "The vector produced by the cross product is:",
                options: [
                    "Perpendicular to both original vectors",
                    "Parallel to both vectors",
                    "Equal to one of the vectors",
                    "Always a unit vector"
                ],
                answer: "Perpendicular to both original vectors",
                explanation: "The cross product creates a vector normal to both input vectors."
            },

            {
                q: "Which rule determines the direction of a cross product?",
                options: [
                    "Right-Hand Rule",
                    "Left-Hand Rule",
                    "Pythagorean Rule",
                    "Triangle Rule"
                ],
                answer: "Right-Hand Rule",
                explanation: "The Right-Hand Rule determines the direction of u × v."
            },

            {
                q: "If two vectors are parallel, then u × v equals:",
                options: [
                    "0",
                    "1",
                    "|u||v|",
                    "Undefined"
                ],
                answer: "0",
                explanation: "Parallel vectors have no perpendicular component."
            },

            {
                q: "Which property is true?",
                options: [
                    "u × v = -(v × u)",
                    "u × v = v × u",
                    "u × v = u · v",
                    "u × v = u + v"
                ],
                answer: "u × v = -(v × u)",
                explanation: "Changing the order reverses the direction."
            },

            {
                q: "The magnitude |u × v| represents:",
                options: [
                    "The area of a parallelogram",
                    "The length of u",
                    "The angle between vectors",
                    "The dot product"
                ],
                answer: "The area of a parallelogram",
                explanation: "Its magnitude equals the parallelogram's area."
            },

            {
                q: "The area of a triangle formed by two vectors equals:",
                options: [
                    "½|u × v|",
                    "|u × v|",
                    "|u · v|",
                    "2|u × v|"
                ],
                answer: "½|u × v|",
                explanation: "A triangle occupies half the area of the parallelogram."
            },

            {
                q: "What is u × u?",
                options: [
                    "0",
                    "1",
                    "u",
                    "|u|"
                ],
                answer: "0",
                explanation: "Any vector crossed with itself is the zero vector."
            },

            {
                q: "Which operation is NOT commutative?",
                options: [
                    "Cross product",
                    "Dot product",
                    "Addition",
                    "Scalar multiplication"
                ],
                answer: "Cross product",
                explanation: "In general, u × v ≠ v × u."
            },

            {
                q: "Which field frequently uses cross products to compute surface normals?",
                options: [
                    "Computer graphics",
                    "Accounting",
                    "Literature",
                    "Music"
                ],
                answer: "Computer graphics",
                explanation: "Surface normals are essential for lighting calculations."
            },

            {
                q: "The cross product is defined for:",
                options: [
                    "Three-dimensional vectors",
                    "One-dimensional vectors",
                    "Scalars only",
                    "Matrices only"
                ],
                answer: "Three-dimensional vectors",
                explanation: "In Calculus III, the standard cross product is defined for vectors in ℝ³."
            }

        ]

    },
    "calculus3-cross-product-quiz": {

        title: "The Cross Product Quiz",

        subtitle: "Test your understanding of cross products, perpendicular vectors, the Right-Hand Rule, and geometric applications.",

        body: `

<h2>Quiz Instructions</h2>

<p>Select the best answer for each question.</p>

<ul>
<li>Compute cross products.</li>
<li>Identify vectors perpendicular to two given vectors.</li>
<li>Apply properties of the cross product.</li>
<li>Recognize parallel vectors.</li>
<li>Calculate areas of parallelograms and triangles.</li>
</ul>

`,

        questions: [

            {
                q: "The cross product of two vectors produces:",
                options: [
                    "A vector",
                    "A scalar",
                    "A matrix",
                    "An angle"
                ],
                answer: "A vector",
                explanation: "The cross product produces a vector perpendicular to both original vectors."
            },

            {
                q: "The cross product is also called the:",
                options: [
                    "Vector product",
                    "Scalar product",
                    "Inner product",
                    "Magnitude product"
                ],
                answer: "Vector product",
                explanation: "The cross product is called the vector product because its result is a vector."
            },

            {
                q: "Find <1,2,3> × <4,5,6>.",
                options: [
                    "<-3,6,-3>",
                    "<3,-6,3>",
                    "<4,10,18>",
                    "<32,32,32>"
                ],
                answer: "<-3,6,-3>",
                explanation: "Using <bf-ce, cd-af, ae-bd> gives <12-15, 12-6, 5-8>=<-3,6,-3>."
            },

            {
                q: "Find <1,0,0> × <0,1,0>.",
                options: [
                    "<0,0,1>",
                    "<0,0,-1>",
                    "<1,1,0>",
                    "<0,0,0>"
                ],
                answer: "<0,0,1>",
                explanation: "The standard unit vectors satisfy i × j = k."
            },

            {
                q: "Find <0,1,0> × <1,0,0>.",
                options: [
                    "<0,0,-1>",
                    "<0,0,1>",
                    "<1,1,0>",
                    "<0,0,0>"
                ],
                answer: "<0,0,-1>",
                explanation: "Reversing the order reverses the direction, so j × i = -k."
            },

            {
                q: "Which statement about the cross product is true?",
                options: [
                    "u × v = -(v × u)",
                    "u × v = v × u",
                    "u × v = u · v",
                    "u × v is always positive"
                ],
                answer: "u × v = -(v × u)",
                explanation: "The cross product is anti-commutative, so reversing the order changes the sign."
            },

            {
                q: "What is u × u for any vector u?",
                options: [
                    "The zero vector",
                    "The vector u",
                    "A unit vector",
                    "|u|²"
                ],
                answer: "The zero vector",
                explanation: "The angle between a vector and itself is 0°, and sin(0°)=0."
            },

            {
                q: "If u and v are nonzero parallel vectors, then u × v is:",
                options: [
                    "The zero vector",
                    "A unit vector",
                    "Equal to u",
                    "Equal to v"
                ],
                answer: "The zero vector",
                explanation: "Parallel vectors have an angle of 0° or 180°, so the sine of the angle is zero."
            },

            {
                q: "The direction of u × v is determined by the:",
                options: [
                    "Right-Hand Rule",
                    "Distance Formula",
                    "Chain Rule",
                    "Midpoint Formula"
                ],
                answer: "Right-Hand Rule",
                explanation: "The Right-Hand Rule determines which of the two perpendicular directions is correct."
            },

            {
                q: "The vector u × v is perpendicular to:",
                options: [
                    "Both u and v",
                    "Only u",
                    "Only v",
                    "Neither u nor v"
                ],
                answer: "Both u and v",
                explanation: "The cross product is normal, or perpendicular, to both original vectors."
            },

            {
                q: "Which formula gives the magnitude of the cross product?",
                options: [
                    "|u × v| = |u||v|sinθ",
                    "|u × v| = |u||v|cosθ",
                    "|u × v| = |u|+|v|",
                    "|u × v| = |u|-|v|"
                ],
                answer: "|u × v| = |u||v|sinθ",
                explanation: "The magnitude of the cross product depends on the sine of the angle between the vectors."
            },

            {
                q: "If |u × v| = 20, what is the area of the parallelogram formed by u and v?",
                options: [
                    "20 square units",
                    "10 square units",
                    "40 square units",
                    "400 square units"
                ],
                answer: "20 square units",
                explanation: "The magnitude of the cross product equals the area of the parallelogram."
            },

            {
                q: "If |u × v| = 20, what is the area of the triangle formed by u and v?",
                options: [
                    "10 square units",
                    "20 square units",
                    "40 square units",
                    "5 square units"
                ],
                answer: "10 square units",
                explanation: "The triangle has half the area of the parallelogram, so its area is ½(20)=10."
            },

            {
                q: "Find <2,0,0> × <0,3,0>.",
                options: [
                    "<0,0,6>",
                    "<0,0,-6>",
                    "<6,0,0>",
                    "<0,6,0>"
                ],
                answer: "<0,0,6>",
                explanation: "Using the cross product formula gives <0,0,(2)(3)>=<0,0,6>."
            },

            {
                q: "Which is a common application of the cross product?",
                options: [
                    "Finding a normal vector to a plane",
                    "Finding the midpoint of a line segment",
                    "Finding the average of two numbers",
                    "Finding the derivative of a constant"
                ],
                answer: "Finding a normal vector to a plane",
                explanation: "The cross product produces a vector perpendicular to two direction vectors in a plane."
            }

        ]

    },

    "calculus3-lines-in-space": {

        title: "Lines in Space",

        subtitle: "Learn how to represent, graph, and analyze lines in three-dimensional space using vector, parametric, and symmetric equations.",

        body: `

<h2>Introduction</h2>

<p>In Calculus III, lines extend into three-dimensional space. Instead of describing a line using only x and y coordinates, we now use x, y, and z coordinates.</p>

<p>A line in space is determined by:</p>

<ul>
<li>A point on the line.</li>
<li>A direction vector.</li>
</ul>

<hr>

<h2>Direction Vector</h2>

<p>A direction vector tells us the direction in which the line travels.</p>

<p>If</p>

<p><strong>v = &lt;a,b,c&gt;</strong></p>

<p>then every point on the line is obtained by moving some multiple of this vector from a known point.</p>

<hr>

<h2>Vector Equation of a Line</h2>

<p>If the line passes through the point</p>

<p><strong>P(x₀,y₀,z₀)</strong></p>

<p>with direction vector</p>

<p><strong>&lt;a,b,c&gt;</strong></p>

<p>then the vector equation is</p>

<p><strong>r(t)=&lt;x₀,y₀,z₀&gt;+t&lt;a,b,c&gt;</strong></p>

<p>where t is any real number.</p>

<hr>

<h2>Example 1</h2>

<p>A line passes through (1,2,3) with direction vector &lt;2,-1,4&gt;.</p>

<p>The vector equation is</p>

<p><strong>r(t)=&lt;1,2,3&gt;+t&lt;2,-1,4&gt;</strong></p>

<hr>

<h2>Parametric Equations</h2>

<p>The vector equation can be written as three separate equations.</p>

<p><strong>x=x₀+at</strong></p>

<p><strong>y=y₀+bt</strong></p>

<p><strong>z=z₀+ct</strong></p>

<hr>

<h2>Example 2</h2>

<p>For the previous example:</p>

<p><strong>x=1+2t</strong></p>

<p><strong>y=2−t</strong></p>

<p><strong>z=3+4t</strong></p>

<hr>

<h2>Symmetric Equations</h2>

<p>If none of the direction vector components are zero, eliminate the parameter t.</p>

<p><strong>(x−x₀)/a=(y−y₀)/b=(z−z₀)/c</strong></p>

<hr>

<h2>Example 3</h2>

<p>The symmetric equations of the previous line are</p>

<p><strong>(x−1)/2=(y−2)/−1=(z−3)/4</strong></p>

<hr>

<h2>Finding a Direction Vector</h2>

<p>If two points are known, subtract the coordinates.</p>

<p>If</p>

<p><strong>P₁(x₁,y₁,z₁)</strong></p>

<p>and</p>

<p><strong>P₂(x₂,y₂,z₂)</strong></p>

<p>then</p>

<p><strong>Direction Vector=&lt;x₂−x₁,y₂−y₁,z₂−z₁&gt;</strong></p>

<hr>

<h2>Example 4</h2>

<p>Points:</p>

<p>(2,1,4)</p>

<p>(5,3,10)</p>

<p>Direction vector:</p>

<p><strong>&lt;3,2,6&gt;</strong></p>

<hr>

<h2>Parallel Lines</h2>

<p>Two lines are parallel if their direction vectors are scalar multiples of one another.</p>

<hr>

<h2>Intersecting Lines</h2>

<p>Lines intersect if there is a common point satisfying both equations.</p>

<p>This usually requires solving a system of equations.</p>

<hr>

<h2>Skew Lines</h2>

<p>Two lines in three-dimensional space can be neither parallel nor intersecting.</p>

<p>These are called <strong>skew lines</strong>.</p>

<p>Skew lines lie in different planes.</p>

<hr>

<h2>Applications</h2>

<ul>
<li>Modeling flight paths</li>
<li>Computer graphics</li>
<li>Engineering design</li>
<li>Navigation</li>
<li>Physics</li>
</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Using the wrong direction vector.</li>
<li>Forgetting that t is the same in all three parametric equations.</li>
<li>Incorrectly eliminating the parameter.</li>
<li>Assuming all non-intersecting lines are parallel.</li>
<li>Ignoring skew lines.</li>
</ul>

<hr>

<h2>Summary</h2>

<ul>
<li>A line is determined by a point and a direction vector.</li>
<li>Lines can be written in vector, parametric, or symmetric form.</li>
<li>Direction vectors can be found using two points.</li>
<li>Parallel lines have proportional direction vectors.</li>
<li>Skew lines are unique to three dimensions.</li>
</ul>

`,

        questions: [

            {
                q: "A line in space is determined by:",
                options: [
                    "A point and a direction vector",
                    "Two slopes",
                    "A normal vector only",
                    "A radius"
                ],
                answer: "A point and a direction vector",
                explanation: "A point locates the line, while a direction vector determines its orientation."
            },

            {
                q: "The parameter used in line equations is commonly:",
                options: [
                    "t",
                    "x",
                    "θ",
                    "r"
                ],
                answer: "t",
                explanation: "Most parametric equations use t as the parameter."
            },

            {
                q: "The vector equation of a line contains:",
                options: [
                    "A point and a direction vector",
                    "Only two points",
                    "Only one variable",
                    "Only slopes"
                ],
                answer: "A point and a direction vector",
                explanation: "The vector equation is built from a point and direction vector."
            },

            {
                q: "Parametric equations describe:",
                options: [
                    "x, y, and z separately",
                    "Only x",
                    "Only y",
                    "Only z"
                ],
                answer: "x, y, and z separately",
                explanation: "Each coordinate is expressed as a function of the parameter."
            },

            {
                q: "A direction vector between two points is found by:",
                options: [
                    "Subtracting coordinates",
                    "Adding coordinates",
                    "Multiplying coordinates",
                    "Finding the midpoint"
                ],
                answer: "Subtracting coordinates",
                explanation: "Subtract the coordinates of the first point from the second."
            },

            {
                q: "Parallel lines have direction vectors that are:",
                options: [
                    "Scalar multiples",
                    "Perpendicular",
                    "Equal to zero",
                    "Unit vectors"
                ],
                answer: "Scalar multiples",
                explanation: "Parallel direction vectors differ only by a constant multiple."
            },

            {
                q: "Skew lines:",
                options: [
                    "Do not intersect and are not parallel",
                    "Always intersect",
                    "Are always parallel",
                    "Exist only in two dimensions"
                ],
                answer: "Do not intersect and are not parallel",
                explanation: "Skew lines lie in different planes."
            },

            {
                q: "The symmetric form is obtained by:",
                options: [
                    "Eliminating the parameter",
                    "Adding the coordinates",
                    "Finding the midpoint",
                    "Computing a cross product"
                ],
                answer: "Eliminating the parameter",
                explanation: "The parameter is removed to obtain the symmetric equations."
            },

            {
                q: "Which coordinate system is used in this lesson?",
                options: [
                    "Three-dimensional",
                    "Polar only",
                    "Two-dimensional only",
                    "Complex"
                ],
                answer: "Three-dimensional",
                explanation: "Lines in space use x, y, and z coordinates."
            },

            {
                q: "Flight paths are commonly modeled using:",
                options: [
                    "Lines in space",
                    "Circles only",
                    "Parabolas only",
                    "Matrices only"
                ],
                answer: "Lines in space",
                explanation: "Three-dimensional lines are commonly used to model motion."
            },

            {
                q: "A direction vector tells:",
                options: [
                    "The direction of the line",
                    "The midpoint",
                    "The length of the line",
                    "The slope in only one dimension"
                ],
                answer: "The direction of the line",
                explanation: "The vector determines how the line extends through space."
            },

            {
                q: "Which form writes x, y, and z as functions of t?",
                options: [
                    "Parametric equations",
                    "Symmetric equations",
                    "Slope-intercept form",
                    "Standard form"
                ],
                answer: "Parametric equations",
                explanation: "Parametric equations express each coordinate in terms of the parameter t."
            }

        ]

    },
    "calculus3-lines-in-space-quiz": {

        title: "Lines in Space Quiz",

        subtitle: "Test your understanding of vector, parametric, and symmetric equations of lines in three-dimensional space.",

        body: `

<h2>Quiz Instructions</h2>

<p>Select the best answer for each question.</p>

<ul>
<li>Identify vector, parametric, and symmetric equations.</li>
<li>Find direction vectors.</li>
<li>Determine whether lines are parallel, intersecting, or skew.</li>
<li>Interpret equations of lines in space.</li>
</ul>

`,

        questions: [

            {
                q: "A line in three-dimensional space is determined by:",
                options: [
                    "A point and a direction vector",
                    "Two slopes",
                    "A normal vector",
                    "A radius"
                ],
                answer: "A point and a direction vector",
                explanation: "Every line in space requires a point and a direction vector."
            },

            {
                q: "The vector equation of a line has the form:",
                options: [
                    "r(t)=r₀+t·v",
                    "y=mx+b",
                    "Ax+By+C=0",
                    "x²+y²+z²=r²"
                ],
                answer: "r(t)=r₀+t·v",
                explanation: "The vector equation consists of an initial position vector plus a scalar multiple of a direction vector."
            },

            {
                q: "The parameter in parametric equations is usually:",
                options: [
                    "t",
                    "θ",
                    "λ",
                    "x"
                ],
                answer: "t",
                explanation: "The variable t is commonly used as the parameter."
            },

            {
                q: "Which equations express x, y, and z separately as functions of t?",
                options: [
                    "Parametric equations",
                    "Symmetric equations",
                    "Vector equations",
                    "Polar equations"
                ],
                answer: "Parametric equations",
                explanation: "Parametric equations describe each coordinate individually."
            },

            {
                q: "A direction vector between P₁(1,2,3) and P₂(4,6,8) is:",
                options: [
                    "<3,4,5>",
                    "<5,8,11>",
                    "<-3,-4,-5>",
                    "<4,6,8>"
                ],
                answer: "<3,4,5>",
                explanation: "Subtract corresponding coordinates: (4−1, 6−2, 8−3)."
            },

            {
                q: "Parallel lines have direction vectors that are:",
                options: [
                    "Scalar multiples of each other",
                    "Perpendicular",
                    "Equal to zero",
                    "Identical points"
                ],
                answer: "Scalar multiples of each other",
                explanation: "Scalar multiples indicate the same direction."
            },

            {
                q: "Which statement about skew lines is true?",
                options: [
                    "They do not intersect and are not parallel.",
                    "They always intersect.",
                    "They are always parallel.",
                    "They exist only in two dimensions."
                ],
                answer: "They do not intersect and are not parallel.",
                explanation: "Skew lines are unique to three-dimensional space."
            },

            {
                q: "To obtain the symmetric equations of a line, you:",
                options: [
                    "Eliminate the parameter.",
                    "Differentiate each equation.",
                    "Integrate each equation.",
                    "Find the midpoint."
                ],
                answer: "Eliminate the parameter.",
                explanation: "Removing the parameter produces the symmetric form."
            },

            {
                q: "Which of the following is a direction vector for the line x=2+3t, y=1−t, z=4+5t?",
                options: [
                    "<3,-1,5>",
                    "<2,1,4>",
                    "<3,1,5>",
                    "<5,-1,3>"
                ],
                answer: "<3,-1,5>",
                explanation: "The coefficients of t form the direction vector."
            },

            {
                q: "If two lines intersect, they:",
                options: [
                    "Share a common point",
                    "Have identical direction vectors",
                    "Must be parallel",
                    "Always have the same parametric equations"
                ],
                answer: "Share a common point",
                explanation: "Intersecting lines have at least one point in common."
            },

            {
                q: "A vector equation can easily be converted into:",
                options: [
                    "Parametric equations",
                    "Polar coordinates",
                    "Slope-intercept form",
                    "Quadratic form"
                ],
                answer: "Parametric equations",
                explanation: "Separate the vector equation into x, y, and z components."
            },

            {
                q: "The point (1,2,3) lies on the line x=1+2t, y=2−t, z=3+4t when:",
                options: [
                    "t=0",
                    "t=1",
                    "t=2",
                    "t=-1"
                ],
                answer: "t=0",
                explanation: "Substituting t=0 gives the initial point (1,2,3)."
            },

            {
                q: "Which equation is written in symmetric form?",
                options: [
                    "(x−1)/2=(y−3)/4=(z+2)/5",
                    "x=1+2t",
                    "r=<1,2,3>+t<2,4,5>",
                    "x²+y²+z²=9"
                ],
                answer: "(x−1)/2=(y−3)/4=(z+2)/5",
                explanation: "Symmetric equations eliminate the parameter t."
            },

            {
                q: "Which of the following is NOT required to define a line in space?",
                options: [
                    "A normal vector",
                    "A point",
                    "A direction vector",
                    "A parameter"
                ],
                answer: "A normal vector",
                explanation: "A normal vector defines a plane, not a line."
            },

            {
                q: "Lines in space are commonly used to model:",
                options: [
                    "Flight paths and motion",
                    "Circle areas",
                    "Polynomial roots",
                    "Matrix multiplication"
                ],
                answer: "Flight paths and motion",
                explanation: "Three-dimensional lines are widely used to model paths and trajectories."
            }

        ]

    },

    "calculus3-planes": {

        title: "Planes in Space",

        subtitle: "Learn how to write equations of planes, identify normal vectors, and analyze relationships between planes and lines.",

        body: `

<h2>Introduction</h2>

<p>A plane is a flat two-dimensional surface that extends infinitely in three-dimensional space.</p>

<p>A plane can be determined by:</p>

<ul>
<li>A point on the plane.</li>
<li>A normal vector perpendicular to the plane.</li>
</ul>

<hr>

<h2>Normal Vector</h2>

<p>A <strong>normal vector</strong> is a vector perpendicular to the plane.</p>

<p>If</p>

<p><strong>n = &lt;a,b,c&gt;</strong></p>

<p>is normal to a plane, then the numbers a, b, and c become the coefficients in the plane equation.</p>

<hr>

<h2>Point-Normal Form</h2>

<p>Suppose a plane passes through the point</p>

<p><strong>P₀(x₀,y₀,z₀)</strong></p>

<p>and has normal vector</p>

<p><strong>n = &lt;a,b,c&gt;</strong>.</p>

<p>The point-normal form of the plane is</p>

<p><strong>a(x−x₀)+b(y−y₀)+c(z−z₀)=0</strong></p>

<hr>

<h2>Example 1</h2>

<p>Find the equation of the plane passing through</p>

<p><strong>(1,2,3)</strong></p>

<p>with normal vector</p>

<p><strong>&lt;2,−1,4&gt;</strong>.</p>

<p>Substitute the point and normal vector into the point-normal form:</p>

<p><strong>2(x−1)−(y−2)+4(z−3)=0</strong></p>

<p>Expand:</p>

<p><strong>2x−2−y+2+4z−12=0</strong></p>

<p>Simplify:</p>

<p><strong>2x−y+4z=12</strong></p>

<hr>

<h2>Standard Form of a Plane</h2>

<p>The standard form of a plane is</p>

<p><strong>ax+by+cz=d</strong></p>

<p>The vector</p>

<p><strong>&lt;a,b,c&gt;</strong></p>

<p>is normal to the plane.</p>

<hr>

<h2>Identifying a Normal Vector</h2>

<p>For the plane</p>

<p><strong>3x−2y+5z=10</strong></p>

<p>a normal vector is</p>

<p><strong>&lt;3,−2,5&gt;</strong>.</p>

<p>Any nonzero scalar multiple of this vector is also normal to the plane.</p>

<hr>

<h2>Finding a Plane Through Three Points</h2>

<p>Three noncollinear points determine a plane.</p>

<p>Suppose the plane passes through points P, Q, and R.</p>

<p>First, form two vectors in the plane:</p>

<p><strong>PQ = Q−P</strong></p>

<p><strong>PR = R−P</strong></p>

<p>Then compute their cross product:</p>

<p><strong>n = PQ × PR</strong></p>

<p>The resulting vector is perpendicular to both vectors and is therefore normal to the plane.</p>

<hr>

<h2>Example 2</h2>

<p>Find a normal vector to the plane through</p>

<p><strong>P(1,0,0), Q(0,1,0), and R(0,0,1)</strong>.</p>

<p>Form two vectors:</p>

<p><strong>PQ = &lt;−1,1,0&gt;</strong></p>

<p><strong>PR = &lt;−1,0,1&gt;</strong></p>

<p>Compute the cross product:</p>

<p><strong>PQ × PR = &lt;1,1,1&gt;</strong></p>

<p>Therefore, a normal vector is</p>

<p><strong>&lt;1,1,1&gt;</strong>.</p>

<p>Using the point P(1,0,0), the plane equation is</p>

<p><strong>(x−1)+y+z=0</strong></p>

<p>or</p>

<p><strong>x+y+z=1</strong>.</p>

<hr>

<h2>Parallel Planes</h2>

<p>Two planes are parallel if their normal vectors are scalar multiples of one another.</p>

<p>For example:</p>

<p><strong>2x−y+3z=4</strong></p>

<p><strong>4x−2y+6z=10</strong></p>

<p>The normal vectors are</p>

<p><strong>&lt;2,−1,3&gt;</strong></p>

<p>and</p>

<p><strong>&lt;4,−2,6&gt;</strong>.</p>

<p>Since the second vector is twice the first, the planes are parallel.</p>

<hr>

<h2>Identical Planes</h2>

<p>Parallel planes may actually represent the same plane.</p>

<p>If every term in one equation is the same scalar multiple of every term in the other equation, the planes are identical.</p>

<p>For example:</p>

<p><strong>x+2y−z=3</strong></p>

<p><strong>2x+4y−2z=6</strong></p>

<p>These equations describe the same plane.</p>

<hr>

<h2>Perpendicular Planes</h2>

<p>Two planes are perpendicular if their normal vectors are perpendicular.</p>

<p>This means their dot product is zero.</p>

<p>If</p>

<p><strong>n₁ · n₂ = 0</strong></p>

<p>then the planes are perpendicular.</p>

<hr>

<h2>Example 3</h2>

<p>Determine whether the planes are perpendicular:</p>

<p><strong>x+2y−z=4</strong></p>

<p><strong>2x−y=3</strong></p>

<p>The normal vectors are</p>

<p><strong>n₁=&lt;1,2,−1&gt;</strong></p>

<p><strong>n₂=&lt;2,−1,0&gt;</strong></p>

<p>Compute the dot product:</p>

<p><strong>n₁ · n₂ = (1)(2)+(2)(−1)+(−1)(0)=0</strong></p>

<p>Therefore, the planes are perpendicular.</p>

<hr>

<h2>Angle Between Two Planes</h2>

<p>The angle between two planes is the acute angle between their normal vectors.</p>

<p>The formula is</p>

<p><strong>cosθ = |n₁ · n₂| / (|n₁||n₂|)</strong></p>

<p>The absolute value is used to obtain the acute angle between the planes.</p>

<hr>

<h2>Line and Plane Relationships</h2>

<p>A line with direction vector v can interact with a plane having normal vector n in several ways.</p>

<ul>
<li>If <strong>v · n = 0</strong>, the line is parallel to the plane.</li>
<li>If v is a scalar multiple of n, the line is perpendicular to the plane.</li>
<li>Otherwise, the line intersects the plane at one point.</li>
</ul>

<hr>

<h2>Finding the Intersection of a Line and a Plane</h2>

<p>To find where a line intersects a plane:</p>

<ol>
<li>Write the line in parametric form.</li>
<li>Substitute x, y, and z into the plane equation.</li>
<li>Solve for the parameter t.</li>
<li>Substitute t back into the line equations.</li>
</ol>

<hr>

<h2>Example 4</h2>

<p>Find the intersection of the line</p>

<p><strong>x=1+t</strong></p>

<p><strong>y=2−t</strong></p>

<p><strong>z=3+2t</strong></p>

<p>with the plane</p>

<p><strong>x+y+z=9</strong>.</p>

<p>Substitute the parametric equations:</p>

<p><strong>(1+t)+(2−t)+(3+2t)=9</strong></p>

<p><strong>6+2t=9</strong></p>

<p><strong>t=3/2</strong></p>

<p>Substitute t=3/2 into the line:</p>

<p><strong>x=5/2</strong></p>

<p><strong>y=1/2</strong></p>

<p><strong>z=6</strong></p>

<p>The intersection point is</p>

<p><strong>(5/2,1/2,6)</strong>.</p>

<hr>

<h2>Distance from a Point to a Plane</h2>

<p>The distance from the point</p>

<p><strong>P(x₁,y₁,z₁)</strong></p>

<p>to the plane</p>

<p><strong>ax+by+cz=d</strong></p>

<p>is</p>

<p><strong>D = |ax₁+by₁+cz₁−d| / √(a²+b²+c²)</strong></p>

<hr>

<h2>Example 5</h2>

<p>Find the distance from the point</p>

<p><strong>(1,2,3)</strong></p>

<p>to the plane</p>

<p><strong>2x−y+2z=5</strong>.</p>

<p>Substitute into the distance formula:</p>

<p><strong>D = |2(1)−2+2(3)−5| / √(2²+(−1)²+2²)</strong></p>

<p><strong>D = |1| / 3</strong></p>

<p><strong>D = 1/3</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Confusing a direction vector with a normal vector.</li>
<li>Using a point that is not on the plane.</li>
<li>Incorrectly computing the cross product when using three points.</li>
<li>Assuming proportional normal vectors always represent the same plane.</li>
<li>Forgetting the absolute value in the distance formula.</li>
<li>Using the angle between direction vectors instead of normal vectors.</li>
</ul>

<hr>

<h2>Applications</h2>

<ul>
<li>Computer graphics and surface modeling</li>
<li>Architecture and engineering</li>
<li>Physics and mechanics</li>
<li>Navigation and flight planning</li>
<li>Three-dimensional geometry</li>
</ul>

<hr>

<h2>Summary</h2>

<ul>
<li>A plane is determined by a point and a normal vector.</li>
<li>The standard equation is ax+by+cz=d.</li>
<li>The coefficients form a normal vector.</li>
<li>Three noncollinear points determine a plane.</li>
<li>Parallel planes have proportional normal vectors.</li>
<li>Perpendicular planes have orthogonal normal vectors.</li>
<li>A line-plane intersection can be found by substitution.</li>
<li>The point-to-plane distance formula uses the plane's normal vector.</li>
</ul>

`,

        questions: [

            {
                q: "A plane in three-dimensional space can be determined by:",
                options: [
                    "A point and a normal vector",
                    "A point and a radius",
                    "Two parallel vectors only",
                    "A slope and a y-intercept"
                ],
                answer: "A point and a normal vector",
                explanation: "A point locates the plane, and a normal vector determines its orientation."
            },

            {
                q: "What is a normal vector to the plane 3x−2y+5z=7?",
                options: [
                    "<3,-2,5>",
                    "<3,2,5>",
                    "<7,0,0>",
                    "<1,1,1>"
                ],
                answer: "<3,-2,5>",
                explanation: "The coefficients of x, y, and z form a normal vector to the plane."
            },

            {
                q: "Which equation is the point-normal form of a plane?",
                options: [
                    "a(x−x₀)+b(y−y₀)+c(z−z₀)=0",
                    "r(t)=r₀+tv",
                    "y=mx+b",
                    "x²+y²+z²=r²"
                ],
                answer: "a(x−x₀)+b(y−y₀)+c(z−z₀)=0",
                explanation: "This form uses a point on the plane and the components of a normal vector."
            },

            {
                q: "Find the equation of the plane through (1,2,3) with normal vector <2,-1,4>.",
                options: [
                    "2x−y+4z=12",
                    "2x+y+4z=12",
                    "x−2y+3z=4",
                    "2x−y+4z=0"
                ],
                answer: "2x−y+4z=12",
                explanation: "Substituting into 2(x−1)−(y−2)+4(z−3)=0 gives 2x−y+4z=12."
            },

            {
                q: "How can a normal vector be found from three noncollinear points on a plane?",
                options: [
                    "Take the cross product of two vectors in the plane",
                    "Take the dot product of two vectors in the plane",
                    "Add the three position vectors",
                    "Find the midpoint of two points"
                ],
                answer: "Take the cross product of two vectors in the plane",
                explanation: "The cross product of two nonparallel vectors in the plane is perpendicular to the plane."
            },

            {
                q: "Two planes are parallel when their normal vectors are:",
                options: [
                    "Scalar multiples",
                    "Perpendicular",
                    "Zero vectors",
                    "Different lengths"
                ],
                answer: "Scalar multiples",
                explanation: "Proportional normal vectors point in the same or opposite direction, so the planes are parallel."
            },

            {
                q: "Two planes are perpendicular when:",
                options: [
                    "Their normal vectors have a dot product of zero",
                    "Their normal vectors are scalar multiples",
                    "Their equations have the same constant",
                    "Their normal vectors have equal magnitudes"
                ],
                answer: "Their normal vectors have a dot product of zero",
                explanation: "A zero dot product means the normal vectors, and therefore the planes, are perpendicular."
            },

            {
                q: "Which pair of planes represents the same plane?",
                options: [
                    "x+2y−z=3 and 2x+4y−2z=6",
                    "x+y+z=1 and x+y+z=2",
                    "x−y=0 and x+y=0",
                    "x=1 and y=1"
                ],
                answer: "x+2y−z=3 and 2x+4y−2z=6",
                explanation: "Every term in the second equation is twice the corresponding term in the first."
            },

            {
                q: "If a line has direction vector v and a plane has normal vector n, the line is parallel to the plane when:",
                options: [
                    "v · n = 0",
                    "v × n = 0",
                    "v = n",
                    "|v| = |n|"
                ],
                answer: "v · n = 0",
                explanation: "A direction vector parallel to the plane must be perpendicular to the plane's normal vector."
            },

            {
                q: "What is the first step in finding the intersection of a parametric line and a plane?",
                options: [
                    "Substitute the line equations into the plane equation",
                    "Take the cross product of the line and plane",
                    "Find the midpoint of the line",
                    "Differentiate the plane equation"
                ],
                answer: "Substitute the line equations into the plane equation",
                explanation: "Substitution creates an equation in the parameter that can be solved."
            },

            {
                q: "Which formula gives the distance from (x₁,y₁,z₁) to ax+by+cz=d?",
                options: [
                    "|ax₁+by₁+cz₁−d| / √(a²+b²+c²)",
                    "|x₁+y₁+z₁| / d",
                    "√(x₁²+y₁²+z₁²)",
                    "|ax₁+by₁+cz₁|"
                ],
                answer: "|ax₁+by₁+cz₁−d| / √(a²+b²+c²)",
                explanation: "The numerator measures the signed displacement, and the denominator normalizes by the length of the normal vector."
            },

            {
                q: "What is the acute angle between two planes determined from?",
                options: [
                    "The angle between their normal vectors",
                    "The angle between their constant terms",
                    "The angle between their intercepts",
                    "The angle between two arbitrary points"
                ],
                answer: "The angle between their normal vectors",
                explanation: "The angle between two planes is defined using the acute angle between their normal vectors."
            }

        ]

    },
    "calculus3-planes-quiz": {

        title: "Planes in Space Quiz",

        subtitle: "Test your understanding of equations of planes, normal vectors, and relationships between planes and lines.",

        body: `

<h2>Quiz Instructions</h2>

<p>Select the best answer for each question.</p>

<ul>
<li>Identify equations of planes.</li>
<li>Use normal vectors.</li>
<li>Determine relationships between planes.</li>
<li>Find equations of planes.</li>
<li>Solve line-plane intersection problems.</li>
</ul>

`,

        questions: [

            {
                q: "A plane is determined by:",
                options: [
                    "A point and a normal vector",
                    "Two slopes",
                    "A radius",
                    "A midpoint"
                ],
                answer: "A point and a normal vector",
                explanation: "A point fixes the location while the normal vector determines the orientation."
            },

            {
                q: "The standard equation of a plane is:",
                options: [
                    "ax + by + cz = d",
                    "y = mx + b",
                    "Ax² + By² = C",
                    "x² + y² + z² = r²"
                ],
                answer: "ax + by + cz = d",
                explanation: "This is the standard form of a plane in three-dimensional space."
            },

            {
                q: "The coefficients of x, y, and z in the plane equation represent:",
                options: [
                    "A normal vector",
                    "A direction vector",
                    "A tangent vector",
                    "A unit vector"
                ],
                answer: "A normal vector",
                explanation: "The coefficients form a vector perpendicular to the plane."
            },

            {
                q: "What is a normal vector to the plane 4x - y + 2z = 9?",
                options: [
                    "<4,-1,2>",
                    "<4,1,2>",
                    "<9,0,0>",
                    "<2,-1,4>"
                ],
                answer: "<4,-1,2>",
                explanation: "The coefficients of x, y, and z form a normal vector."
            },

            {
                q: "The point-normal equation of a plane is:",
                options: [
                    "a(x−x₀)+b(y−y₀)+c(z−z₀)=0",
                    "r=r₀+t·v",
                    "x=x₀+at",
                    "y=mx+b"
                ],
                answer: "a(x−x₀)+b(y−y₀)+c(z−z₀)=0",
                explanation: "This equation uses a point on the plane and a normal vector."
            },

            {
                q: "Three noncollinear points determine:",
                options: [
                    "Exactly one plane",
                    "Exactly two planes",
                    "Infinitely many planes",
                    "No plane"
                ],
                answer: "Exactly one plane",
                explanation: "Three noncollinear points uniquely determine a plane."
            },

            {
                q: "To find a normal vector from three points, you compute the:",
                options: [
                    "Cross product of two vectors in the plane",
                    "Dot product",
                    "Magnitude",
                    "Average"
                ],
                answer: "Cross product of two vectors in the plane",
                explanation: "The cross product produces a vector perpendicular to the plane."
            },

            {
                q: "Two planes are parallel if their normal vectors are:",
                options: [
                    "Scalar multiples",
                    "Perpendicular",
                    "Equal in length",
                    "Zero vectors"
                ],
                answer: "Scalar multiples",
                explanation: "Parallel planes have proportional normal vectors."
            },

            {
                q: "Two planes are perpendicular if:",
                options: [
                    "Their normal vectors have a dot product of zero",
                    "Their normal vectors are equal",
                    "Their constants are equal",
                    "Their equations are identical"
                ],
                answer: "Their normal vectors have a dot product of zero",
                explanation: "Perpendicular normal vectors correspond to perpendicular planes."
            },

            {
                q: "Which pair represents the same plane?",
                options: [
                    "x+y+z=2 and 2x+2y+2z=4",
                    "x+y+z=2 and x+y+z=3",
                    "x−y=1 and x+y=1",
                    "x=2 and y=2"
                ],
                answer: "x+y+z=2 and 2x+2y+2z=4",
                explanation: "The second equation is simply twice the first."
            },

            {
                q: "A line is parallel to a plane when:",
                options: [
                    "Its direction vector is perpendicular to the plane's normal vector",
                    "Its direction vector equals the normal vector",
                    "Its direction vector is zero",
                    "It always intersects the plane"
                ],
                answer: "Its direction vector is perpendicular to the plane's normal vector",
                explanation: "If v·n=0, the line runs parallel to the plane."
            },

            {
                q: "A line is perpendicular to a plane when:",
                options: [
                    "Its direction vector is parallel to the normal vector",
                    "Its direction vector is perpendicular to the normal vector",
                    "It has no parameter",
                    "It lies entirely inside the plane"
                ],
                answer: "Its direction vector is parallel to the normal vector",
                explanation: "A line perpendicular to a plane travels in the direction of the plane's normal vector."
            },

            {
                q: "To find where a line intersects a plane, you first:",
                options: [
                    "Substitute the parametric equations into the plane equation",
                    "Take a cross product",
                    "Take a derivative",
                    "Find the midpoint"
                ],
                answer: "Substitute the parametric equations into the plane equation",
                explanation: "This allows you to solve for the parameter."
            },

            {
                q: "The distance from a point to a plane is always:",
                options: [
                    "Nonnegative",
                    "Negative",
                    "Zero",
                    "Imaginary"
                ],
                answer: "Nonnegative",
                explanation: "The distance formula uses an absolute value, so the result cannot be negative."
            },

            {
                q: "The angle between two planes is measured using:",
                options: [
                    "Their normal vectors",
                    "Their intercepts",
                    "Their constant terms",
                    "Their direction vectors"
                ],
                answer: "Their normal vectors",
                explanation: "The angle between planes is defined as the acute angle between their normal vectors."
            }

        ]

    },
    "calculus3-cylinders-and-quadric-surfaces": {

        title: "Cylinders and Quadric Surfaces",

        subtitle: "Learn how to identify, graph, and interpret cylinders and the major quadric surfaces in three-dimensional space.",

        body: `

<h2>Introduction</h2>

<p>Many surfaces in three-dimensional space are formed by equations involving x, y, and z.</p>

<p>Two important categories are:</p>

<ul>
<li><strong>Cylinders</strong></li>
<li><strong>Quadric surfaces</strong></li>
</ul>

<p>These surfaces extend familiar two-dimensional curves into three dimensions.</p>

<hr>

<h2>Cylinders</h2>

<p>A cylinder is a surface formed when a two-dimensional curve is extended parallel to one of the coordinate axes.</p>

<p>If one variable is missing from an equation, the graph often represents a cylinder.</p>

<hr>

<h2>Example 1: Circular Cylinder</h2>

<p>Consider</p>

<p><strong>x²+y²=9</strong></p>

<p>This equation does not contain z.</p>

<p>For every value of z, the cross-section in the xy-plane is the circle</p>

<p><strong>x²+y²=9</strong></p>

<p>Therefore, the graph is a circular cylinder of radius 3 extending parallel to the z-axis.</p>

<hr>

<h2>Example 2: Parabolic Cylinder</h2>

<p>Consider</p>

<p><strong>y=x²</strong></p>

<p>The variable z is missing.</p>

<p>The parabola y=x² is extended parallel to the z-axis, producing a parabolic cylinder.</p>

<hr>

<h2>Direction of a Cylinder</h2>

<p>The missing variable determines the direction in which the cylinder extends.</p>

<ul>
<li>If x is missing, the cylinder extends parallel to the x-axis.</li>
<li>If y is missing, the cylinder extends parallel to the y-axis.</li>
<li>If z is missing, the cylinder extends parallel to the z-axis.</li>
</ul>

<hr>

<h2>Traces of a Surface</h2>

<p>A <strong>trace</strong> is the curve formed by intersecting a surface with a plane.</p>

<p>Common traces are found by setting one variable equal to a constant.</p>

<ul>
<li>Set x=k to find traces parallel to the yz-plane.</li>
<li>Set y=k to find traces parallel to the xz-plane.</li>
<li>Set z=k to find traces parallel to the xy-plane.</li>
</ul>

<p>Traces help us understand and sketch three-dimensional surfaces.</p>

<hr>

<h2>Quadric Surfaces</h2>

<p>A quadric surface is the three-dimensional version of a conic section.</p>

<p>Its equation contains second-degree terms in x, y, and z.</p>

<p>The general form is</p>

<p><strong>Ax²+By²+Cz²+Dxy+Exz+Fyz+Gx+Hy+Iz+J=0</strong></p>

<p>In this lesson, we focus on quadric surfaces whose equations are aligned with the coordinate axes.</p>

<hr>

<h2>Sphere</h2>

<p>The standard equation of a sphere centered at the origin is</p>

<p><strong>x²+y²+z²=r²</strong></p>

<p>A sphere centered at</p>

<p><strong>(h,k,l)</strong></p>

<p>has equation</p>

<p><strong>(x−h)²+(y−k)²+(z−l)²=r²</strong></p>

<hr>

<h2>Example 3</h2>

<p>Identify the center and radius of</p>

<p><strong>(x−2)²+(y+1)²+(z−4)²=25</strong></p>

<p>The center is</p>

<p><strong>(2,−1,4)</strong></p>

<p>and the radius is</p>

<p><strong>5</strong>.</p>

<hr>

<h2>Ellipsoid</h2>

<p>The standard equation of an ellipsoid is</p>

<p><strong>x²/a²+y²/b²+z²/c²=1</strong></p>

<p>An ellipsoid is a stretched or compressed sphere.</p>

<p>Its intercepts are:</p>

<ul>
<li>x-intercepts at ±a</li>
<li>y-intercepts at ±b</li>
<li>z-intercepts at ±c</li>
</ul>

<hr>

<h2>Example 4</h2>

<p>Consider</p>

<p><strong>x²/4+y²/9+z²/16=1</strong></p>

<p>The semi-axis lengths are</p>

<p><strong>2, 3, and 4</strong>.</p>

<p>The longest axis lies along the z-axis.</p>

<hr>

<h2>Elliptic Paraboloid</h2>

<p>The standard form of an elliptic paraboloid opening along the z-axis is</p>

<p><strong>z=x²/a²+y²/b²</strong></p>

<p>Horizontal traces are ellipses.</p>

<p>Vertical traces are parabolas.</p>

<p>If the equation has a negative sign in front of the squared terms, the surface opens in the opposite direction.</p>

<hr>

<h2>Example 5</h2>

<p>Consider</p>

<p><strong>z=x²+4y²</strong></p>

<p>This is an elliptic paraboloid with vertex at the origin.</p>

<p>It opens upward along the positive z-axis.</p>

<hr>

<h2>Hyperbolic Paraboloid</h2>

<p>The standard form is</p>

<p><strong>z=x²/a²−y²/b²</strong></p>

<p>This surface is often called a <strong>saddle surface</strong>.</p>

<p>Its traces include parabolas opening in opposite directions.</p>

<hr>

<h2>Example 6</h2>

<p>Consider</p>

<p><strong>z=x²−y²</strong></p>

<p>When y=0:</p>

<p><strong>z=x²</strong></p>

<p>When x=0:</p>

<p><strong>z=−y²</strong></p>

<p>One trace opens upward and the other opens downward, producing the saddle shape.</p>

<hr>

<h2>Elliptic Cone</h2>

<p>The standard form of an elliptic cone is</p>

<p><strong>z²/c²=x²/a²+y²/b²</strong></p>

<p>An elliptic cone has two parts that meet at a vertex.</p>

<p>It extends in both directions along its axis.</p>

<hr>

<h2>Example 7</h2>

<p>Consider</p>

<p><strong>z²=x²+y²</strong></p>

<p>This is a circular cone with vertex at the origin.</p>

<p>It opens in both the positive and negative z-directions.</p>

<hr>

<h2>Hyperboloid of One Sheet</h2>

<p>The standard form is</p>

<p><strong>x²/a²+y²/b²−z²/c²=1</strong></p>

<p>A hyperboloid of one sheet is connected.</p>

<p>The variable with the negative squared term identifies the axis of the surface.</p>

<p>Horizontal traces are ellipses, while some vertical traces are hyperbolas.</p>

<hr>

<h2>Example 8</h2>

<p>Consider</p>

<p><strong>x²+y²−z²=1</strong></p>

<p>This is a hyperboloid of one sheet centered at the origin.</p>

<p>Its axis is the z-axis because z² has the negative coefficient.</p>

<hr>

<h2>Hyperboloid of Two Sheets</h2>

<p>The standard form is</p>

<p><strong>z²/c²−x²/a²−y²/b²=1</strong></p>

<p>A hyperboloid of two sheets consists of two disconnected pieces.</p>

<p>The variable with the positive squared term identifies the axis.</p>

<hr>

<h2>Example 9</h2>

<p>Consider</p>

<p><strong>z²−x²−y²=1</strong></p>

<p>This is a hyperboloid of two sheets.</p>

<p>The two sheets open along the positive and negative z-directions.</p>

<hr>

<h2>Recognizing Quadric Surfaces</h2>

<p>Use the signs and the number of squared variables to identify the surface.</p>

<ul>
<li>All positive squared terms equal 1: ellipsoid.</li>
<li>Two positive and one negative squared term equal 1: hyperboloid of one sheet.</li>
<li>One positive and two negative squared terms equal 1: hyperboloid of two sheets.</li>
<li>One variable not squared and two squared terms with the same sign: elliptic paraboloid.</li>
<li>One variable not squared and squared terms with opposite signs: hyperbolic paraboloid.</li>
<li>Squared terms on both sides with no constant term: cone.</li>
</ul>

<hr>

<h2>Translations</h2>

<p>Quadric surfaces may be shifted away from the origin.</p>

<p>Expressions such as</p>

<p><strong>(x−h)²</strong></p>

<p><strong>(y−k)²</strong></p>

<p><strong>(z−l)²</strong></p>

<p>indicate that the center or vertex has been translated to</p>

<p><strong>(h,k,l)</strong>.</p>

<hr>

<h2>Example 10</h2>

<p>Consider</p>

<p><strong>(z−3)=(x−1)²+(y+2)²</strong></p>

<p>This is an elliptic paraboloid with vertex</p>

<p><strong>(1,−2,3)</strong></p>

<p>opening upward.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Failing to notice a missing variable in a cylinder equation.</li>
<li>Confusing a hyperboloid of one sheet with a hyperboloid of two sheets.</li>
<li>Ignoring which squared term has the negative sign.</li>
<li>Misreading translated centers and vertices.</li>
<li>Assuming every second-degree surface is a sphere.</li>
<li>Sketching a surface without examining its traces.</li>
</ul>

<hr>

<h2>Applications</h2>

<ul>
<li>Architecture and structural design</li>
<li>Satellite dishes and reflectors</li>
<li>Computer graphics and three-dimensional modeling</li>
<li>Engineering surfaces</li>
<li>Optics and acoustics</li>
<li>Physics and astronomy</li>
</ul>

<hr>

<h2>Summary</h2>

<ul>
<li>A missing variable often indicates a cylinder.</li>
<li>The missing variable determines the cylinder's direction.</li>
<li>Traces are used to analyze three-dimensional surfaces.</li>
<li>Quadric surfaces are three-dimensional analogs of conic sections.</li>
<li>Ellipsoids have all positive squared terms.</li>
<li>Hyperboloids contain both positive and negative squared terms.</li>
<li>Paraboloids have one variable that is not squared.</li>
<li>An elliptic cone has two parts meeting at a vertex.</li>
<li>Translations move the center or vertex away from the origin.</li>
</ul>

`,

        questions: [

            {
                q: "What does a missing variable usually indicate in a surface equation?",
                options: [
                    "A cylinder",
                    "A sphere",
                    "A point",
                    "A plane"
                ],
                answer: "A cylinder",
                explanation: "When one variable is missing, the two-dimensional curve extends parallel to that variable's axis."
            },

            {
                q: "The surface x²+y²=16 extends parallel to which axis?",
                options: [
                    "The z-axis",
                    "The x-axis",
                    "The y-axis",
                    "No axis"
                ],
                answer: "The z-axis",
                explanation: "The variable z is missing, so the circular cylinder extends parallel to the z-axis."
            },

            {
                q: "What type of surface is y=x²?",
                options: [
                    "A parabolic cylinder",
                    "An elliptic paraboloid",
                    "A sphere",
                    "A cone"
                ],
                answer: "A parabolic cylinder",
                explanation: "Since z is missing, the parabola y=x² extends parallel to the z-axis."
            },

            {
                q: "What is a trace of a surface?",
                options: [
                    "The curve formed by intersecting the surface with a plane",
                    "The distance from the surface to the origin",
                    "The volume enclosed by the surface",
                    "The normal vector to the surface"
                ],
                answer: "The curve formed by intersecting the surface with a plane",
                explanation: "Traces are cross-sections obtained by setting one variable equal to a constant."
            },

            {
                q: "Which equation represents an ellipsoid?",
                options: [
                    "x²/4+y²/9+z²/16=1",
                    "x²+y²−z²=1",
                    "z=x²−y²",
                    "z²=x²+y²"
                ],
                answer: "x²/4+y²/9+z²/16=1",
                explanation: "An ellipsoid has three positive squared terms whose normalized sum equals 1."
            },

            {
                q: "What type of surface is z=x²+y²?",
                options: [
                    "An elliptic paraboloid",
                    "A hyperbolic paraboloid",
                    "A hyperboloid of one sheet",
                    "A cylinder"
                ],
                answer: "An elliptic paraboloid",
                explanation: "The squared terms have the same sign, and z is not squared."
            },

            {
                q: "What type of surface is z=x²−y²?",
                options: [
                    "A hyperbolic paraboloid",
                    "An elliptic paraboloid",
                    "An ellipsoid",
                    "A sphere"
                ],
                answer: "A hyperbolic paraboloid",
                explanation: "The squared terms have opposite signs, producing a saddle-shaped surface."
            },

            {
                q: "Which equation represents an elliptic cone?",
                options: [
                    "z²=x²+y²",
                    "z=x²+y²",
                    "x²+y²+z²=1",
                    "x²+y²−z²=1"
                ],
                answer: "z²=x²+y²",
                explanation: "A cone has squared terms on both sides and no nonzero constant term."
            },

            {
                q: "Which surface is connected and contains two positive squared terms and one negative squared term?",
                options: [
                    "A hyperboloid of one sheet",
                    "A hyperboloid of two sheets",
                    "An ellipsoid",
                    "A parabolic cylinder"
                ],
                answer: "A hyperboloid of one sheet",
                explanation: "Two positive terms and one negative term equal to 1 describe a connected hyperboloid of one sheet."
            },

            {
                q: "Which surface consists of two disconnected pieces?",
                options: [
                    "A hyperboloid of two sheets",
                    "A hyperboloid of one sheet",
                    "An elliptic paraboloid",
                    "A cylinder"
                ],
                answer: "A hyperboloid of two sheets",
                explanation: "A hyperboloid of two sheets has two separate components."
            },

            {
                q: "What is the vertex of z−4=(x−2)²+(y+1)²?",
                options: [
                    "(2,-1,4)",
                    "(-2,1,-4)",
                    "(2,1,4)",
                    "(4,2,-1)"
                ],
                answer: "(2,-1,4)",
                explanation: "The translated form shows h=2, k=-1, and l=4."
            },

            {
                q: "For x²+y²−z²=1, which axis is the axis of the hyperboloid?",
                options: [
                    "The z-axis",
                    "The x-axis",
                    "The y-axis",
                    "The line x=y"
                ],
                answer: "The z-axis",
                explanation: "For a hyperboloid of one sheet, the variable with the negative squared term identifies the axis."
            }

        ]

    },

    "calculus3-cylinders-and-quadric-surfaces-quiz": {

        title: "Cylinders and Quadric Surfaces Quiz",

        subtitle: "Test your understanding of cylinders, traces, and the major quadric surfaces encountered in Calculus III.",

        body: `

<h2>Quiz Instructions</h2>

<p>Select the best answer for each question.</p>

<ul>
<li>Identify cylinders and quadric surfaces.</li>
<li>Recognize graphs from their equations.</li>
<li>Interpret traces.</li>
<li>Determine centers, vertices, and axes.</li>
<li>Distinguish between similar-looking surfaces.</li>
</ul>

`,

        questions: [

            {
                q: "If one variable is missing from a surface equation, the graph is usually:",
                options: [
                    "A cylinder",
                    "A sphere",
                    "A plane",
                    "A cone"
                ],
                answer: "A cylinder",
                explanation: "A missing variable means the curve extends infinitely parallel to that axis."
            },

            {
                q: "The equation x² + y² = 25 represents:",
                options: [
                    "A circular cylinder",
                    "A sphere",
                    "A cone",
                    "A plane"
                ],
                answer: "A circular cylinder",
                explanation: "Since z is missing, the circle extends along the z-axis."
            },

            {
                q: "The surface y = x² is a:",
                options: [
                    "Parabolic cylinder",
                    "Sphere",
                    "Cone",
                    "Hyperboloid"
                ],
                answer: "Parabolic cylinder",
                explanation: "The parabola extends parallel to the missing z-axis."
            },

            {
                q: "If x is missing from an equation, the cylinder extends parallel to the:",
                options: [
                    "x-axis",
                    "y-axis",
                    "z-axis",
                    "Origin"
                ],
                answer: "x-axis",
                explanation: "The missing variable determines the direction of the cylinder."
            },

            {
                q: "A trace of a surface is:",
                options: [
                    "The curve formed by intersecting the surface with a plane",
                    "The slope of the surface",
                    "The distance from the origin",
                    "A tangent vector"
                ],
                answer: "The curve formed by intersecting the surface with a plane",
                explanation: "Traces are cross-sections used to understand the shape of a surface."
            },

            {
                q: "Which equation represents a sphere centered at the origin?",
                options: [
                    "x² + y² + z² = r²",
                    "x² + y² = r²",
                    "z = x² + y²",
                    "z² = x² + y²"
                ],
                answer: "x² + y² + z² = r²",
                explanation: "All three squared variables sum to the square of the radius."
            },

            {
                q: "The center of (x−3)² + (y+2)² + (z−1)² = 16 is:",
                options: [
                    "(3,-2,1)",
                    "(-3,2,-1)",
                    "(3,2,1)",
                    "(4,4,4)"
                ],
                answer: "(3,-2,1)",
                explanation: "Read the translations directly from the equation."
            },

            {
                q: "The radius of (x−3)² + (y+2)² + (z−1)² = 16 is:",
                options: [
                    "4",
                    "8",
                    "16",
                    "2"
                ],
                answer: "4",
                explanation: "The radius is the square root of 16."
            },

            {
                q: "Which surface is a stretched sphere?",
                options: [
                    "Ellipsoid",
                    "Cone",
                    "Cylinder",
                    "Plane"
                ],
                answer: "Ellipsoid",
                explanation: "An ellipsoid has different semi-axis lengths."
            },

            {
                q: "The equation z = x² + y² represents:",
                options: [
                    "An elliptic paraboloid",
                    "A hyperbolic paraboloid",
                    "A cone",
                    "A sphere"
                ],
                answer: "An elliptic paraboloid",
                explanation: "Both squared terms are positive."
            },

            {
                q: "The equation z = x² − y² represents:",
                options: [
                    "A hyperbolic paraboloid",
                    "An ellipsoid",
                    "A cone",
                    "A cylinder"
                ],
                answer: "A hyperbolic paraboloid",
                explanation: "Opposite signs produce the saddle surface."
            },

            {
                q: "Which surface is commonly called the saddle surface?",
                options: [
                    "Hyperbolic paraboloid",
                    "Elliptic paraboloid",
                    "Sphere",
                    "Cone"
                ],
                answer: "Hyperbolic paraboloid",
                explanation: "Its shape resembles a horse saddle."
            },

            {
                q: "Which equation represents a cone?",
                options: [
                    "z² = x² + y²",
                    "z = x² + y²",
                    "x² + y² + z² = 1",
                    "x² + y² = 1"
                ],
                answer: "z² = x² + y²",
                explanation: "A cone has squared variables on both sides."
            },

            {
                q: "Which surface has one connected piece?",
                options: [
                    "Hyperboloid of one sheet",
                    "Hyperboloid of two sheets",
                    "Two parallel planes",
                    "Cylinder"
                ],
                answer: "Hyperboloid of one sheet",
                explanation: "A hyperboloid of one sheet forms one continuous surface."
            },

            {
                q: "Which surface consists of two disconnected pieces?",
                options: [
                    "Hyperboloid of two sheets",
                    "Hyperboloid of one sheet",
                    "Sphere",
                    "Elliptic paraboloid"
                ],
                answer: "Hyperboloid of two sheets",
                explanation: "It contains two separate sheets."
            }

        ]

    },
    "calculus3-unit1-review": {

        title: "Unit 1 Review: Vectors and Geometry",

        subtitle: "Review the major concepts from Unit 1 before taking the unit test.",

        body: `

<h2>Unit Overview</h2>

<p>In this unit, you learned the foundations of three-dimensional geometry. These ideas form the basis for everything that follows in Calculus III, including vector-valued functions, partial derivatives, and multiple integrals.</p>

<hr>

<h2>Lesson 1: Three-Dimensional Coordinate System</h2>

<ul>
<li>Locate points using x-, y-, and z-coordinates.</li>
<li>Identify the coordinate planes.</li>
<li>Compute the distance between two points.</li>
<li>Find the midpoint of a line segment.</li>
<li>Visualize objects in three dimensions.</li>
</ul>

<hr>

<h2>Lesson 2: Vectors</h2>

<ul>
<li>Represent vectors geometrically and algebraically.</li>
<li>Compute vector magnitude.</li>
<li>Find unit vectors.</li>
<li>Add and subtract vectors.</li>
<li>Multiply vectors by scalars.</li>
<li>Express vectors using i, j, and k notation.</li>
</ul>

<hr>

<h2>Lesson 3: Dot Product</h2>

<ul>
<li>Compute the dot product.</li>
<li>Determine angles between vectors.</li>
<li>Recognize orthogonal vectors.</li>
<li>Use projections.</li>
<li>Interpret positive, negative, and zero dot products.</li>
</ul>

<hr>

<h2>Lesson 4: Cross Product</h2>

<ul>
<li>Compute cross products.</li>
<li>Apply the Right-Hand Rule.</li>
<li>Find vectors perpendicular to two given vectors.</li>
<li>Compute areas of parallelograms and triangles.</li>
<li>Recognize properties of the cross product.</li>
</ul>

<hr>

<h2>Lesson 5: Lines in Space</h2>

<ul>
<li>Write vector equations.</li>
<li>Write parametric equations.</li>
<li>Write symmetric equations.</li>
<li>Determine direction vectors.</li>
<li>Recognize parallel, intersecting, and skew lines.</li>
</ul>

<hr>

<h2>Lesson 6: Planes</h2>

<ul>
<li>Write equations of planes.</li>
<li>Identify normal vectors.</li>
<li>Find planes through three points.</li>
<li>Determine parallel and perpendicular planes.</li>
<li>Find intersections between lines and planes.</li>
<li>Compute point-to-plane distance.</li>
</ul>

<hr>

<h2>Lesson 7: Cylinders and Quadric Surfaces</h2>

<ul>
<li>Recognize cylinders.</li>
<li>Interpret traces.</li>
<li>Identify spheres.</li>
<li>Identify ellipsoids.</li>
<li>Recognize elliptic and hyperbolic paraboloids.</li>
<li>Recognize cones.</li>
<li>Differentiate hyperboloids of one and two sheets.</li>
</ul>

<hr>

<h2>Important Formulas</h2>

<ul>

<li><strong>Distance Formula</strong></li>

<p>d = √[(x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²]</p>

<li><strong>Midpoint Formula</strong></li>

<p>M=((x₁+x₂)/2,(y₁+y₂)/2,(z₁+z₂)/2)</p>

<li><strong>Magnitude</strong></li>

<p>|v| = √(a²+b²+c²)</p>

<li><strong>Unit Vector</strong></li>

<p>u = v / |v|</p>

<li><strong>Dot Product</strong></li>

<p>u·v = a₁a₂+b₁b₂+c₁c₂</p>

<li><strong>Cross Product</strong></li>

<p>u×v = &lt;bf−ce, cd−af, ae−bd&gt;</p>

<li><strong>Plane Equation</strong></li>

<p>a(x−x₀)+b(y−y₀)+c(z−z₀)=0</p>

<li><strong>Distance from a Point to a Plane</strong></li>

<p>D=|ax₁+by₁+cz₁−d| / √(a²+b²+c²)</p>

</ul>

<hr>

<h2>Study Tips</h2>

<ul>

<li>Know the difference between direction vectors and normal vectors.</li>

<li>Remember that the dot product gives a scalar, while the cross product gives a vector.</li>

<li>Practice identifying quadric surfaces directly from their equations.</li>

<li>Review vector, parametric, and symmetric equations of lines.</li>

<li>Be able to determine whether lines or planes are parallel or perpendicular.</li>

<li>Practice sketching cylinders and quadric surfaces using traces.</li>

</ul>

<hr>

<h2>Unit Checklist</h2>

<p>Before taking the unit test, make sure you can:</p>

<ul>

<li>✓ Plot points in three dimensions.</li>

<li>✓ Compute vector operations.</li>

<li>✓ Use dot and cross products correctly.</li>

<li>✓ Write equations of lines and planes.</li>

<li>✓ Analyze relationships among lines and planes.</li>

<li>✓ Identify all major quadric surfaces.</li>

<li>✓ Solve geometry problems involving vectors.</li>

</ul>

`,

        questions: [

            {
                q: "The dot product produces:",
                options: [
                    "A scalar",
                    "A vector",
                    "A matrix",
                    "A plane"
                ],
                answer: "A scalar",
                explanation: "The dot product always produces a scalar quantity."
            },

            {
                q: "The cross product produces:",
                options: [
                    "A vector",
                    "A scalar",
                    "A point",
                    "A plane"
                ],
                answer: "A vector",
                explanation: "The cross product produces a vector perpendicular to both original vectors."
            },

            {
                q: "The coefficients of a plane equation form the:",
                options: [
                    "Normal vector",
                    "Direction vector",
                    "Unit vector",
                    "Position vector"
                ],
                answer: "Normal vector",
                explanation: "The coefficients of x, y, and z define a normal vector."
            },

            {
                q: "A missing variable in a surface equation usually indicates:",
                options: [
                    "A cylinder",
                    "A sphere",
                    "A cone",
                    "A plane"
                ],
                answer: "A cylinder",
                explanation: "The curve extends infinitely in the direction of the missing variable."
            },

            {
                q: "Skew lines:",
                options: [
                    "Do not intersect and are not parallel",
                    "Always intersect",
                    "Are always parallel",
                    "Are identical"
                ],
                answer: "Do not intersect and are not parallel",
                explanation: "Skew lines exist only in three-dimensional space."
            },

            {
                q: "The saddle surface is called the:",
                options: [
                    "Hyperbolic paraboloid",
                    "Ellipsoid",
                    "Cone",
                    "Sphere"
                ],
                answer: "Hyperbolic paraboloid",
                explanation: "The hyperbolic paraboloid has opposite curvatures."
            }

        ]

    },
    "calculus3-unit1-test": {

        title: "Unit 1 Test: Vectors and Geometry",

        subtitle: "Assess your understanding of vectors, lines, planes, and quadric surfaces.",

        body: `

<h2>Unit 1 Test</h2>

<p>This test covers all material from Unit 1.</p>

<ul>
<li>Three-Dimensional Coordinate System</li>
<li>Vectors</li>
<li>Dot Product</li>
<li>Cross Product</li>
<li>Lines in Space</li>
<li>Planes</li>
<li>Cylinders and Quadric Surfaces</li>
</ul>

<p>Select the best answer for each question.</p>

`,

        questions: [

            {
                q: "How many coordinates are required to locate a point in three-dimensional space?",
                options: [
                    "3",
                    "2",
                    "1",
                    "4"
                ],
                answer: "3",
                explanation: "Points in three-dimensional space require x, y, and z coordinates."
            },

            {
                q: "The magnitude of <3,4,12> is:",
                options: [
                    "13",
                    "12",
                    "15",
                    "25"
                ],
                answer: "13",
                explanation: "√(3²+4²+12²)=√169=13."
            },

            {
                q: "A unit vector has magnitude:",
                options: [
                    "1",
                    "0",
                    "2",
                    "Depends on the vector"
                ],
                answer: "1",
                explanation: "By definition, every unit vector has length 1."
            },

            {
                q: "The dot product of perpendicular vectors equals:",
                options: [
                    "0",
                    "1",
                    "-1",
                    "Undefined"
                ],
                answer: "0",
                explanation: "Orthogonal vectors have a dot product of zero."
            },

            {
                q: "The cross product of two vectors is always:",
                options: [
                    "Perpendicular to both vectors",
                    "Parallel to both vectors",
                    "A scalar",
                    "Undefined"
                ],
                answer: "Perpendicular to both vectors",
                explanation: "The cross product produces a vector normal to both original vectors."
            },

            {
                q: "Which operation produces a scalar?",
                options: [
                    "Dot product",
                    "Cross product",
                    "Vector addition",
                    "Vector subtraction"
                ],
                answer: "Dot product",
                explanation: "The dot product produces a scalar quantity."
            },

            {
                q: "Parallel vectors have a cross product equal to:",
                options: [
                    "0",
                    "1",
                    "|u||v|",
                    "-1"
                ],
                answer: "0",
                explanation: "The sine of 0° or 180° is zero."
            },

            {
                q: "The vector equation of a line requires:",
                options: [
                    "A point and a direction vector",
                    "Two slopes",
                    "A normal vector",
                    "A radius"
                ],
                answer: "A point and a direction vector",
                explanation: "These uniquely determine a line."
            },

            {
                q: "Skew lines are:",
                options: [
                    "Neither parallel nor intersecting",
                    "Always parallel",
                    "Always intersecting",
                    "Always perpendicular"
                ],
                answer: "Neither parallel nor intersecting",
                explanation: "Skew lines lie in different planes."
            },

            {
                q: "The coefficients of a plane equation form its:",
                options: [
                    "Normal vector",
                    "Direction vector",
                    "Unit vector",
                    "Position vector"
                ],
                answer: "Normal vector",
                explanation: "The coefficients of x, y, and z define the normal vector."
            },

            {
                q: "Two planes are parallel if their normal vectors are:",
                options: [
                    "Scalar multiples",
                    "Perpendicular",
                    "Equal in length",
                    "Zero vectors"
                ],
                answer: "Scalar multiples",
                explanation: "Parallel planes have proportional normal vectors."
            },

            {
                q: "If one variable is missing from a surface equation, the graph is usually:",
                options: [
                    "A cylinder",
                    "A sphere",
                    "A cone",
                    "A plane"
                ],
                answer: "A cylinder",
                explanation: "The graph extends indefinitely in the direction of the missing variable."
            },

            {
                q: "The equation x²+y²+z²=16 represents:",
                options: [
                    "A sphere",
                    "A cylinder",
                    "A cone",
                    "A paraboloid"
                ],
                answer: "A sphere",
                explanation: "All three squared variables sum to the square of the radius."
            },

            {
                q: "The center of (x−2)²+(y+1)²+(z−3)²=25 is:",
                options: [
                    "(2,-1,3)",
                    "(-2,1,-3)",
                    "(2,1,3)",
                    "(5,5,5)"
                ],
                answer: "(2,-1,3)",
                explanation: "The center is found directly from the translated equation."
            },

            {
                q: "The radius of the sphere (x−2)²+(y+1)²+(z−3)²=25 is:",
                options: [
                    "5",
                    "25",
                    "10",
                    "2"
                ],
                answer: "5",
                explanation: "The radius is the square root of 25."
            },

            {
                q: "The surface z=x²+y² is a:",
                options: [
                    "Elliptic paraboloid",
                    "Hyperbolic paraboloid",
                    "Cone",
                    "Cylinder"
                ],
                answer: "Elliptic paraboloid",
                explanation: "Both squared terms are positive, producing an upward-opening bowl."
            },

            {
                q: "The surface z=x²−y² is called a:",
                options: [
                    "Hyperbolic paraboloid",
                    "Ellipsoid",
                    "Cone",
                    "Sphere"
                ],
                answer: "Hyperbolic paraboloid",
                explanation: "The opposite signs create the classic saddle shape."
            },

            {
                q: "Which surface consists of two disconnected pieces?",
                options: [
                    "Hyperboloid of two sheets",
                    "Hyperboloid of one sheet",
                    "Ellipsoid",
                    "Cylinder"
                ],
                answer: "Hyperboloid of two sheets",
                explanation: "A hyperboloid of two sheets has two separate branches."
            },

            {
                q: "Which surface is connected and resembles a cooling tower?",
                options: [
                    "Hyperboloid of one sheet",
                    "Hyperboloid of two sheets",
                    "Cone",
                    "Sphere"
                ],
                answer: "Hyperboloid of one sheet",
                explanation: "A hyperboloid of one sheet is one continuous surface."
            },

            {
                q: "The angle between two planes is determined using:",
                options: [
                    "Their normal vectors",
                    "Their intercepts",
                    "Their direction vectors",
                    "Their centers"
                ],
                answer: "Their normal vectors",
                explanation: "The angle between planes is the angle between their normal vectors."
            },

            {
                q: "A line is parallel to a plane when:",
                options: [
                    "Its direction vector is perpendicular to the plane's normal vector",
                    "Its direction vector equals the normal vector",
                    "Its direction vector is zero",
                    "It always intersects the plane"
                ],
                answer: "Its direction vector is perpendicular to the plane's normal vector",
                explanation: "If the direction vector is orthogonal to the plane's normal vector, the line is parallel to the plane."
            },

            {
                q: "Which operation is commonly used to find a normal vector to a plane determined by three points?",
                options: [
                    "Cross product",
                    "Dot product",
                    "Vector addition",
                    "Scalar multiplication"
                ],
                answer: "Cross product",
                explanation: "The cross product of two vectors lying in the plane produces a vector perpendicular to the plane."
            },

            {
                q: "The Right-Hand Rule is used when computing the:",
                options: [
                    "Cross product",
                    "Dot product",
                    "Magnitude",
                    "Distance formula"
                ],
                answer: "Cross product",
                explanation: "The Right-Hand Rule determines the direction of the cross product."
            },

            {
                q: "The equation z²=x²+y² represents a:",
                options: [
                    "Cone",
                    "Sphere",
                    "Cylinder",
                    "Elliptic paraboloid"
                ],
                answer: "Cone",
                explanation: "Squared terms appear on both sides with no constant, forming a double cone."
            },

            {
                q: "Completing Unit 1 prepares you primarily for:",
                options: [
                    "Vector-valued functions and multivariable calculus",
                    "Differential equations",
                    "Complex analysis",
                    "Abstract algebra"
                ],
                answer: "Vector-valued functions and multivariable calculus",
                explanation: "Unit 1 establishes the geometric foundation needed for the remainder of Calculus III."
            }

        ]

    },


    "calculus3-vector-valued-functions": {

        title: "Vector-Valued Functions",

        subtitle: "Learn how functions can describe curves and motion in two-dimensional and three-dimensional space.",

        body: `

<h2>Unit 2: Vector-Valued Functions and Motion in Space</h2>

<p>In earlier courses, most functions produced a single number as an output.</p>

<p>For example:</p>

<p><strong>f(t) = t²</strong></p>

<p>For every value of <strong>t</strong>, the function produces one number.</p>

<p>A <strong>vector-valued function</strong> produces a vector instead of a single number.</p>

<hr>

<h2>General Form</h2>

<p>A vector-valued function in three-dimensional space is commonly written as:</p>

<p><strong>r(t) = ⟨x(t), y(t), z(t)⟩</strong></p>

<p>The functions <strong>x(t)</strong>, <strong>y(t)</strong>, and <strong>z(t)</strong> are called the component functions.</p>

<ul>
<li><strong>x(t)</strong> gives the x-coordinate.</li>
<li><strong>y(t)</strong> gives the y-coordinate.</li>
<li><strong>z(t)</strong> gives the z-coordinate.</li>
</ul>

<p>As the parameter <strong>t</strong> changes, the point moves through space and traces a curve.</p>

<hr>

<h2>Position Vector</h2>

<p>A vector-valued function can describe the position of a moving object.</p>

<p>The function:</p>

<p><strong>r(t) = ⟨x(t), y(t), z(t)⟩</strong></p>

<p>is called the object's <strong>position vector</strong>.</p>

<p>The parameter <strong>t</strong> often represents time.</p>

<p>For each value of time, the position vector gives the object's location.</p>

<hr>

<h2>Evaluating a Vector-Valued Function</h2>

<p>Evaluate each component separately.</p>

<p>Consider:</p>

<p><strong>r(t) = ⟨t, t², 2t + 1⟩</strong></p>

<p>To find <strong>r(2)</strong>, substitute <strong>t = 2</strong> into every component.</p>

<p><strong>r(2) = ⟨2, 2², 2(2) + 1⟩</strong></p>

<p><strong>r(2) = ⟨2, 4, 5⟩</strong></p>

<p>At <strong>t = 2</strong>, the object is located at the point <strong>(2, 4, 5)</strong>.</p>

<hr>

<h2>Example 1</h2>

<p>Let:</p>

<p><strong>r(t) = ⟨3t, 1 − t, t²⟩</strong></p>

<p>Find <strong>r(3)</strong>.</p>

<p>Substitute <strong>t = 3</strong> into each component.</p>

<p><strong>r(3) = ⟨3(3), 1 − 3, 3²⟩</strong></p>

<p><strong>r(3) = ⟨9, −2, 9⟩</strong></p>

<hr>

<h2>Curves in Space</h2>

<p>A vector-valued function describes a curve by giving the coordinates of every point on the curve.</p>

<p>For example:</p>

<p><strong>r(t) = ⟨cos(t), sin(t), t⟩</strong></p>

<p>The x-coordinate and y-coordinate move around a circle because:</p>

<p><strong>x = cos(t)</strong></p>

<p><strong>y = sin(t)</strong></p>

<p>Therefore:</p>

<p><strong>x² + y² = 1</strong></p>

<p>At the same time, the z-coordinate increases because:</p>

<p><strong>z = t</strong></p>

<p>The resulting curve is a spiral called a <strong>helix</strong>.</p>

<hr>

<h2>Eliminating the Parameter</h2>

<p>Sometimes we can remove the parameter and find a Cartesian equation for the curve.</p>

<p>Consider:</p>

<p><strong>r(t) = ⟨t, t²⟩</strong></p>

<p>This means:</p>

<p><strong>x = t</strong></p>

<p><strong>y = t²</strong></p>

<p>Because <strong>x = t</strong>, substitute <strong>x</strong> for <strong>t</strong>.</p>

<p><strong>y = x²</strong></p>

<p>The vector-valued function traces the parabola <strong>y = x²</strong>.</p>

<hr>

<h2>Example 2</h2>

<p>Consider:</p>

<p><strong>r(t) = ⟨2t, 4t²⟩</strong></p>

<p>Write the component equations.</p>

<p><strong>x = 2t</strong></p>

<p><strong>y = 4t²</strong></p>

<p>Solve the first equation for <strong>t</strong>.</p>

<p><strong>t = x/2</strong></p>

<p>Substitute into the equation for y.</p>

<p><strong>y = 4(x/2)²</strong></p>

<p><strong>y = x²</strong></p>

<p>This function also traces the parabola <strong>y = x²</strong>.</p>

<hr>

<h2>Orientation of a Curve</h2>

<p>The <strong>orientation</strong> of a curve describes the direction in which the curve is traced as the parameter increases.</p>

<p>Consider:</p>

<p><strong>r(t) = ⟨t, t²⟩</strong></p>

<p>As <strong>t</strong> increases:</p>

<ul>
<li>The x-coordinate increases.</li>
<li>The point moves from left to right along the parabola.</li>
</ul>

<p>Changing the parameterization can change the direction in which the same curve is traced.</p>

<hr>

<h2>Domains of Vector-Valued Functions</h2>

<p>The domain of a vector-valued function consists of all values of <strong>t</strong> for which every component is defined.</p>

<p>Consider:</p>

<p><strong>r(t) = ⟨√t, 1/(t − 2), ln(t)⟩</strong></p>

<p>Each component places a restriction on t.</p>

<ul>
<li><strong>√t</strong> requires <strong>t ≥ 0</strong>.</li>
<li><strong>1/(t − 2)</strong> requires <strong>t ≠ 2</strong>.</li>
<li><strong>ln(t)</strong> requires <strong>t &gt; 0</strong>.</li>
</ul>

<p>The combined domain is:</p>

<p><strong>t &gt; 0, t ≠ 2</strong></p>

<hr>

<h2>Limits of Vector-Valued Functions</h2>

<p>The limit of a vector-valued function is found by taking the limit of each component.</p>

<p>If:</p>

<p><strong>r(t) = ⟨x(t), y(t), z(t)⟩</strong></p>

<p>then:</p>

<p><strong>lim r(t) = ⟨lim x(t), lim y(t), lim z(t)⟩</strong></p>

<p>provided that each component limit exists.</p>

<hr>

<h2>Example 3</h2>

<p>Find:</p>

<p><strong>lim as t → 2 of ⟨t², 3t − 1, t³⟩</strong></p>

<p>Evaluate each component.</p>

<p><strong>lim t² = 4</strong></p>

<p><strong>lim (3t − 1) = 5</strong></p>

<p><strong>lim t³ = 8</strong></p>

<p>Therefore:</p>

<p><strong>lim r(t) = ⟨4, 5, 8⟩</strong></p>

<hr>

<h2>Continuity</h2>

<p>A vector-valued function is continuous at <strong>t = a</strong> when every component function is continuous at <strong>t = a</strong>.</p>

<p>Equivalently:</p>

<p><strong>lim as t → a of r(t) = r(a)</strong></p>

<p>Polynomial, sine, cosine, and exponential component functions are continuous everywhere in their domains.</p>

<hr>

<h2>Important Ideas</h2>

<ul>
<li>A vector-valued function produces a vector.</li>
<li>The component functions determine the coordinates of a moving point.</li>
<li>The position vector describes an object's location.</li>
<li>A vector-valued function traces a curve as the parameter changes.</li>
<li>The parameter can sometimes be eliminated to find a Cartesian equation.</li>
<li>The domain must satisfy the restrictions of every component.</li>
<li>Limits and continuity are evaluated component by component.</li>
</ul>

<hr>

<h2>Practice Questions</h2>

<p>Select the best answer for each question.</p>

`,

        questions: [

            {
                q: "What does a vector-valued function produce as its output?",
                options: [
                    "A vector",
                    "Only a scalar",
                    "Only an angle",
                    "A matrix"
                ],
                answer: "A vector",
                explanation: "A vector-valued function produces a vector containing two or more component functions."
            },

            {
                q: "Which is the standard form of a vector-valued function in three-dimensional space?",
                options: [
                    "r(t) = ⟨x(t), y(t), z(t)⟩",
                    "r(t) = x + y + z",
                    "r(t) = xyz",
                    "r(t) = x/y"
                ],
                answer: "r(t) = ⟨x(t), y(t), z(t)⟩",
                explanation: "A three-dimensional vector-valued function has x, y, and z component functions."
            },

            {
                q: "If r(t) = ⟨t, t², 2t + 1⟩, what is r(2)?",
                options: [
                    "⟨2, 4, 5⟩",
                    "⟨2, 2, 3⟩",
                    "⟨4, 4, 5⟩",
                    "⟨2, 4, 3⟩"
                ],
                answer: "⟨2, 4, 5⟩",
                explanation: "Substituting t = 2 gives ⟨2, 2², 2(2)+1⟩ = ⟨2,4,5⟩."
            },

            {
                q: "What does the parameter t commonly represent in a position function?",
                options: [
                    "Time",
                    "Mass",
                    "Temperature",
                    "Area"
                ],
                answer: "Time",
                explanation: "In motion problems, t usually represents time."
            },

            {
                q: "The function r(t) = ⟨cos(t), sin(t), t⟩ traces which type of curve?",
                options: [
                    "A helix",
                    "A straight line",
                    "A parabola",
                    "A sphere"
                ],
                answer: "A helix",
                explanation: "The x- and y-components trace a circle while the z-component increases."
            },

            {
                q: "Eliminating the parameter from x = t and y = t² gives:",
                options: [
                    "y = x²",
                    "x = y²",
                    "y = 2x",
                    "x² + y² = 1"
                ],
                answer: "y = x²",
                explanation: "Because x = t, substitute x for t in y = t²."
            },

            {
                q: "What does the orientation of a curve describe?",
                options: [
                    "The direction in which the curve is traced",
                    "The length of the curve",
                    "The area under the curve",
                    "The number of coordinates"
                ],
                answer: "The direction in which the curve is traced",
                explanation: "Orientation indicates the direction of motion as the parameter increases."
            },

            {
                q: "How is the domain of a vector-valued function determined?",
                options: [
                    "By finding values allowed by every component",
                    "By using only the first component",
                    "By using only positive values",
                    "Every vector-valued function has all real numbers as its domain"
                ],
                answer: "By finding values allowed by every component",
                explanation: "The domain is the intersection of the domains of all component functions."
            },

            {
                q: "How is the limit of a vector-valued function evaluated?",
                options: [
                    "Component by component",
                    "By multiplying all components",
                    "By ignoring the z-component",
                    "By finding only the magnitude"
                ],
                answer: "Component by component",
                explanation: "Take the limit of each component function separately."
            },

            {
                q: "A vector-valued function is continuous when:",
                options: [
                    "Every component function is continuous",
                    "At least one component is continuous",
                    "Its magnitude is always 1",
                    "Its components are all equal"
                ],
                answer: "Every component function is continuous",
                explanation: "Continuity of a vector-valued function requires continuity of all its components."
            }

        ]

    }
    ,

    "calculus3-vector-derivatives": {

        title: "Derivatives and Integrals of Vector-Valued Functions",

        subtitle: "Differentiate and integrate vector-valued functions component by component.",

        body: `

<h2>Derivatives of Vector-Valued Functions</h2>

<p>Just as ordinary functions have derivatives, vector-valued functions also have derivatives.</p>

<p>If</p>

<p><strong>r(t)=⟨x(t),y(t),z(t)⟩</strong></p>

<p>then the derivative is found by differentiating each component separately.</p>

<p><strong>r'(t)=⟨x'(t),y'(t),z'(t)⟩</strong></p>

<hr>

<h2>Example 1</h2>

<p>Find the derivative of</p>

<p><strong>r(t)=⟨t²,3t,sin(t)⟩</strong></p>

<p>Differentiate each component.</p>

<ul>
<li>d/dt(t²)=2t</li>
<li>d/dt(3t)=3</li>
<li>d/dt(sin(t))=cos(t)</li>
</ul>

<p>Therefore</p>

<p><strong>r'(t)=⟨2t,3,cos(t)⟩</strong></p>

<hr>

<h2>Second Derivative</h2>

<p>The second derivative is simply the derivative of the first derivative.</p>

<p><strong>r''(t)=⟨x''(t),y''(t),z''(t)⟩</strong></p>

<p>In physics, this often represents acceleration.</p>

<hr>

<h2>Example 2</h2>

<p>If</p>

<p><strong>r(t)=⟨t²,3t,sin(t)⟩</strong></p>

<p>then</p>

<p><strong>r''(t)=⟨2,0,-sin(t)⟩</strong></p>

<hr>

<h2>Integrals of Vector-Valued Functions</h2>

<p>Integration also occurs one component at a time.</p>

<p>If</p>

<p><strong>r(t)=⟨f(t),g(t),h(t)⟩</strong></p>

<p>then</p>

<p><strong>∫r(t)dt=⟨∫f(t)dt,∫g(t)dt,∫h(t)dt⟩+C</strong></p>

<p>The constant of integration becomes a constant vector.</p>

<hr>

<h2>Example 3</h2>

<p>Evaluate</p>

<p><strong>∫⟨2t,3,cos(t)⟩dt</strong></p>

<p>Integrate each component.</p>

<ul>
<li>∫2tdt=t²</li>
<li>∫3dt=3t</li>
<li>∫cos(t)dt=sin(t)</li>
</ul>

<p>The answer is</p>

<p><strong>⟨t²,3t,sin(t)⟩+C</strong></p>

<hr>

<h2>Velocity</h2>

<p>If a vector-valued function represents position, then its derivative represents velocity.</p>

<p><strong>v(t)=r'(t)</strong></p>

<p>Velocity tells both the speed and direction of motion.</p>

<hr>

<h2>Acceleration</h2>

<p>The derivative of velocity is acceleration.</p>

<p><strong>a(t)=v'(t)=r''(t)</strong></p>

<p>Acceleration describes how velocity changes over time.</p>

<hr>

<h2>Example 4</h2>

<p>Suppose</p>

<p><strong>r(t)=⟨t²,4t,t³⟩</strong></p>

<p>Find the velocity.</p>

<p><strong>v(t)=⟨2t,4,3t²⟩</strong></p>

<p>Find the acceleration.</p>

<p><strong>a(t)=⟨2,0,6t⟩</strong></p>

<hr>

<h2>Important Ideas</h2>

<ul>
<li>Differentiate each component separately.</li>
<li>Integrate each component separately.</li>
<li>The derivative of position is velocity.</li>
<li>The derivative of velocity is acceleration.</li>
<li>The constant of integration is a constant vector.</li>
</ul>

<hr>

<h2>Practice Questions</h2>

`,

        questions: [

            {
                q: "How do you differentiate a vector-valued function?",
                options: [
                    "Differentiate each component separately",
                    "Differentiate only the x-component",
                    "Take the magnitude first",
                    "Differentiate the vector as one quantity"
                ],
                answer: "Differentiate each component separately",
                explanation: "Each component function is differentiated independently."
            },

            {
                q: "If r(t)=⟨t²,3t,sin(t)⟩, what is r'(t)?",
                options: [
                    "⟨2t,3,cos(t)⟩",
                    "⟨t,3,sin(t)⟩",
                    "⟨2,3,-sin(t)⟩",
                    "⟨2t,3,sin(t)⟩"
                ],
                answer: "⟨2t,3,cos(t)⟩",
                explanation: "Differentiate each component separately."
            },

            {
                q: "The derivative of a position vector represents:",
                options: [
                    "Velocity",
                    "Acceleration",
                    "Distance",
                    "Curvature"
                ],
                answer: "Velocity",
                explanation: "The first derivative of position is velocity."
            },

            {
                q: "The derivative of velocity is:",
                options: [
                    "Acceleration",
                    "Speed",
                    "Position",
                    "Distance"
                ],
                answer: "Acceleration",
                explanation: "Acceleration is the rate of change of velocity."
            },

            {
                q: "How are vector-valued functions integrated?",
                options: [
                    "Component by component",
                    "Using matrices",
                    "Only the first component",
                    "Using dot products"
                ],
                answer: "Component by component",
                explanation: "Each component is integrated independently."
            },

            {
                q: "The constant of integration for a vector-valued function is:",
                options: [
                    "A constant vector",
                    "Always zero",
                    "A scalar only",
                    "Not needed"
                ],
                answer: "A constant vector",
                explanation: "Each component contributes its own constant."
            },

            {
                q: "If v(t)=⟨2t,4,3t²⟩, then a(t) equals:",
                options: [
                    "⟨2,0,6t⟩",
                    "⟨2t,4,6t⟩",
                    "⟨0,4,6⟩",
                    "⟨2,4,3t⟩"
                ],
                answer: "⟨2,0,6t⟩",
                explanation: "Differentiate every component."
            },

            {
                q: "If position is constant, velocity is:",
                options: [
                    "Zero",
                    "Increasing",
                    "Undefined",
                    "Always positive"
                ],
                answer: "Zero",
                explanation: "A constant position has zero derivative."
            },

            {
                q: "The second derivative of position represents:",
                options: [
                    "Acceleration",
                    "Speed",
                    "Distance",
                    "Curvature"
                ],
                answer: "Acceleration",
                explanation: "The second derivative measures how velocity changes."
            },

            {
                q: "Which operation is performed independently on every component?",
                options: [
                    "Differentiation and integration",
                    "Matrix multiplication",
                    "Cross products",
                    "Determinants"
                ],
                answer: "Differentiation and integration",
                explanation: "Both operations are carried out component by component."
            }

        ]

    }
    ,

    "calculus3-velocity-speed-acceleration": {

        title: "Velocity, Speed, and Acceleration",

        subtitle: "Use vector-valued functions to describe position, velocity, speed, and acceleration in space.",

        body: `

<h2>Position and Motion</h2>

<p>A vector-valued function can describe the position of a moving object.</p>

<p>The position function is written as:</p>

<p><strong>r(t)=⟨x(t),y(t),z(t)⟩</strong></p>

<p>The parameter <strong>t</strong> usually represents time.</p>

<p>At each time, the vector <strong>r(t)</strong> gives the location of the object.</p>

<hr>

<h2>Velocity</h2>

<p>Velocity is the derivative of the position function.</p>

<p><strong>v(t)=r'(t)</strong></p>

<p>If:</p>

<p><strong>r(t)=⟨x(t),y(t),z(t)⟩</strong></p>

<p>then:</p>

<p><strong>v(t)=⟨x'(t),y'(t),z'(t)⟩</strong></p>

<p>Velocity describes both the direction and rate of motion.</p>

<hr>

<h2>Example 1</h2>

<p>Suppose:</p>

<p><strong>r(t)=⟨t²,3t,t³⟩</strong></p>

<p>Find the velocity.</p>

<p>Differentiate each component.</p>

<p><strong>v(t)=⟨2t,3,3t²⟩</strong></p>

<p>At <strong>t=2</strong>:</p>

<p><strong>v(2)=⟨4,3,12⟩</strong></p>

<hr>

<h2>Speed</h2>

<p>Speed is the magnitude of the velocity vector.</p>

<p><strong>Speed=|v(t)|</strong></p>

<p>If:</p>

<p><strong>v(t)=⟨a,b,c⟩</strong></p>

<p>then:</p>

<p><strong>|v(t)|=√(a²+b²+c²)</strong></p>

<p>Velocity is a vector, but speed is a scalar.</p>

<hr>

<h2>Example 2</h2>

<p>Suppose:</p>

<p><strong>v(t)=⟨3,4,0⟩</strong></p>

<p>Then the speed is:</p>

<p><strong>|v(t)|=√(3²+4²+0²)</strong></p>

<p><strong>|v(t)|=√25</strong></p>

<p><strong>|v(t)|=5</strong></p>

<hr>

<h2>Acceleration</h2>

<p>Acceleration is the derivative of velocity.</p>

<p><strong>a(t)=v'(t)</strong></p>

<p>Because velocity is the derivative of position:</p>

<p><strong>a(t)=r''(t)</strong></p>

<p>Acceleration describes how the velocity vector changes over time.</p>

<hr>

<h2>Example 3</h2>

<p>Suppose:</p>

<p><strong>r(t)=⟨t²,3t,t³⟩</strong></p>

<p>The velocity is:</p>

<p><strong>v(t)=⟨2t,3,3t²⟩</strong></p>

<p>Differentiate again to find acceleration.</p>

<p><strong>a(t)=⟨2,0,6t⟩</strong></p>

<p>At <strong>t=2</strong>:</p>

<p><strong>a(2)=⟨2,0,12⟩</strong></p>

<hr>

<h2>Constant Velocity</h2>

<p>An object has constant velocity when its velocity vector does not change.</p>

<p>For example:</p>

<p><strong>r(t)=⟨2t+1,-3t,5t-4⟩</strong></p>

<p>The velocity is:</p>

<p><strong>v(t)=⟨2,-3,5⟩</strong></p>

<p>The acceleration is:</p>

<p><strong>a(t)=⟨0,0,0⟩</strong></p>

<p>Constant velocity always produces zero acceleration.</p>

<hr>

<h2>Finding Position from Velocity</h2>

<p>If velocity is known, position can be found by integration.</p>

<p><strong>r(t)=∫v(t)dt</strong></p>

<p>An initial position is usually needed to determine the constant vector.</p>

<hr>

<h2>Example 4</h2>

<p>Suppose:</p>

<p><strong>v(t)=⟨2t,3,4t³⟩</strong></p>

<p>and:</p>

<p><strong>r(0)=⟨1,-2,5⟩</strong></p>

<p>Integrate each velocity component.</p>

<p><strong>r(t)=⟨t²+C₁,3t+C₂,t⁴+C₃⟩</strong></p>

<p>Use the initial position.</p>

<p>At <strong>t=0</strong>:</p>

<p><strong>r(0)=⟨C₁,C₂,C₃⟩</strong></p>

<p>Therefore:</p>

<p><strong>C₁=1</strong></p>

<p><strong>C₂=-2</strong></p>

<p><strong>C₃=5</strong></p>

<p>The position function is:</p>

<p><strong>r(t)=⟨t²+1,3t-2,t⁴+5⟩</strong></p>

<hr>

<h2>Finding Velocity from Acceleration</h2>

<p>If acceleration is known, integrate to find velocity.</p>

<p><strong>v(t)=∫a(t)dt</strong></p>

<p>An initial velocity is needed to determine the constant vector.</p>

<hr>

<h2>Example 5</h2>

<p>Suppose:</p>

<p><strong>a(t)=⟨6t,2,-4⟩</strong></p>

<p>and:</p>

<p><strong>v(0)=⟨1,3,2⟩</strong></p>

<p>Integrate each acceleration component.</p>

<p><strong>v(t)=⟨3t²+C₁,2t+C₂,-4t+C₃⟩</strong></p>

<p>Use <strong>v(0)=⟨1,3,2⟩</strong>.</p>

<p><strong>C₁=1</strong></p>

<p><strong>C₂=3</strong></p>

<p><strong>C₃=2</strong></p>

<p>Therefore:</p>

<p><strong>v(t)=⟨3t²+1,2t+3,-4t+2⟩</strong></p>

<hr>

<h2>Projectile Motion</h2>

<p>Projectile motion is an important application of vector-valued functions.</p>

<p>Near Earth's surface, gravity produces a constant downward acceleration.</p>

<p>Using the z-axis as the vertical direction:</p>

<p><strong>a(t)=⟨0,0,-g⟩</strong></p>

<p>where <strong>g</strong> is the acceleration due to gravity.</p>

<p>Integrating gives the velocity:</p>

<p><strong>v(t)=⟨v₀x,v₀y,v₀z-gt⟩</strong></p>

<p>Integrating again gives the position:</p>

<p><strong>r(t)=⟨x₀+v₀x t,y₀+v₀y t,z₀+v₀z t-(1/2)gt²⟩</strong></p>

<hr>

<h2>Example 6</h2>

<p>An object has position:</p>

<p><strong>r(t)=⟨4t,3t,20t-4.9t²⟩</strong></p>

<p>Find its velocity.</p>

<p><strong>v(t)=⟨4,3,20-9.8t⟩</strong></p>

<p>Find its acceleration.</p>

<p><strong>a(t)=⟨0,0,-9.8⟩</strong></p>

<p>The negative z-component shows that gravity acts downward.</p>

<hr>

<h2>When Is an Object at Rest?</h2>

<p>An object is at rest when its velocity vector is the zero vector.</p>

<p><strong>v(t)=⟨0,0,0⟩</strong></p>

<p>Every velocity component must equal zero at the same time.</p>

<hr>

<h2>Example 7</h2>

<p>Suppose:</p>

<p><strong>v(t)=⟨t-2,2t-4,3t-6⟩</strong></p>

<p>Set every component equal to zero.</p>

<p><strong>t-2=0</strong></p>

<p><strong>2t-4=0</strong></p>

<p><strong>3t-6=0</strong></p>

<p>Each equation gives:</p>

<p><strong>t=2</strong></p>

<p>The object is at rest at <strong>t=2</strong>.</p>

<hr>

<h2>Important Ideas</h2>

<ul>
<li>Position gives the location of an object.</li>
<li>Velocity is the derivative of position.</li>
<li>Speed is the magnitude of velocity.</li>
<li>Acceleration is the derivative of velocity.</li>
<li>Position can be found by integrating velocity.</li>
<li>Velocity can be found by integrating acceleration.</li>
<li>Initial conditions determine constants of integration.</li>
<li>An object is at rest when its velocity is the zero vector.</li>
</ul>

<hr>

<h2>Practice Questions</h2>

<p>Select the best answer for each question.</p>

`,

        questions: [

            {
                q: "What is the relationship between position and velocity?",
                options: [
                    "Velocity is the derivative of position",
                    "Position is the derivative of velocity",
                    "Velocity is the magnitude of position",
                    "Position and velocity are always equal"
                ],
                answer: "Velocity is the derivative of position",
                explanation: "The velocity function is v(t)=r'(t)."
            },

            {
                q: "What is speed?",
                options: [
                    "The magnitude of velocity",
                    "The derivative of acceleration",
                    "The position vector",
                    "The direction of motion only"
                ],
                answer: "The magnitude of velocity",
                explanation: "Speed is the scalar magnitude |v(t)|."
            },

            {
                q: "If v(t)=⟨3,4,0⟩, what is the speed?",
                options: [
                    "5",
                    "7",
                    "12",
                    "25"
                ],
                answer: "5",
                explanation: "The speed is √(3²+4²+0²)=5."
            },

            {
                q: "Acceleration is equal to:",
                options: [
                    "v'(t)",
                    "r(t)",
                    "|r(t)|",
                    "∫r(t)dt"
                ],
                answer: "v'(t)",
                explanation: "Acceleration is the derivative of velocity."
            },

            {
                q: "If r(t)=⟨t²,3t,t³⟩, what is a(t)?",
                options: [
                    "⟨2,0,6t⟩",
                    "⟨2t,3,3t²⟩",
                    "⟨t,3,t²⟩",
                    "⟨2,3,6⟩"
                ],
                answer: "⟨2,0,6t⟩",
                explanation: "Differentiate the position function twice."
            },

            {
                q: "What is the acceleration of an object moving with constant velocity?",
                options: [
                    "The zero vector",
                    "A constant nonzero vector",
                    "Undefined",
                    "Equal to its position"
                ],
                answer: "The zero vector",
                explanation: "The derivative of a constant velocity vector is zero."
            },

            {
                q: "How can position be found from velocity?",
                options: [
                    "Integrate velocity",
                    "Differentiate velocity",
                    "Find the magnitude of velocity",
                    "Divide velocity by time"
                ],
                answer: "Integrate velocity",
                explanation: "Position is an antiderivative of velocity."
            },

            {
                q: "Why are initial conditions needed when integrating velocity or acceleration?",
                options: [
                    "To determine the constant vector",
                    "To calculate a dot product",
                    "To remove the parameter",
                    "To find the domain"
                ],
                answer: "To determine the constant vector",
                explanation: "Integration introduces constants that are determined using initial conditions."
            },

            {
                q: "When is an object at rest?",
                options: [
                    "When its velocity is the zero vector",
                    "When its acceleration is positive",
                    "When its position is zero",
                    "When its speed is increasing"
                ],
                answer: "When its velocity is the zero vector",
                explanation: "An object is at rest only when every velocity component is zero."
            },

            {
                q: "In projectile motion, the acceleration caused by gravity points:",
                options: [
                    "Downward",
                    "Upward",
                    "Horizontally",
                    "In the direction of velocity"
                ],
                answer: "Downward",
                explanation: "Gravity produces a constant downward acceleration."
            }

        ]

    }
    ,

    "calculus3-arc-length": {

        title: "Arc Length and Unit Tangent Vectors",

        subtitle: "Measure the distance traveled along a space curve and determine the direction of motion.",

        body: `

<h2>Arc Length</h2>

<p>When an object moves along a curve, the total distance traveled is called the <strong>arc length</strong>.</p>

<p>Unlike the straight-line distance between two points, arc length follows the path of the curve.</p>

<hr>

<h2>The Arc Length Formula</h2>

<p>If the position function is</p>

<p><strong>r(t)=⟨x(t),y(t),z(t)⟩</strong></p>

<p>for <strong>a ≤ t ≤ b</strong>, then the arc length is</p>

<p><strong>s=∫<sub>a</sub><sup>b</sup>|r'(t)|dt</strong></p>

<p>This means:</p>

<ol>
<li>Differentiate the position function.</li>
<li>Find the magnitude of the velocity vector.</li>
<li>Integrate over the interval.</li>
</ol>

<hr>

<h2>Example 1</h2>

<p>Let</p>

<p><strong>r(t)=⟨3t,4t,0⟩</strong></p>

<p>for <strong>0≤t≤2</strong>.</p>

<p>Differentiate.</p>

<p><strong>r'(t)=⟨3,4,0⟩</strong></p>

<p>Find the magnitude.</p>

<p><strong>|r'(t)|=√(3²+4²)=5</strong></p>

<p>Integrate.</p>

<p><strong>s=∫₀²5dt=10</strong></p>

<p>The object travels 10 units.</p>

<hr>

<h2>Speed Revisited</h2>

<p>The magnitude of the velocity vector is called the <strong>speed</strong>.</p>

<p><strong>Speed=|v(t)|</strong></p>

<p>The arc length formula simply adds all of the tiny distances traveled.</p>

<hr>

<h2>Example 2</h2>

<p>Suppose</p>

<p><strong>v(t)=⟨2t,2,0⟩</strong></p>

<p>Find the speed.</p>

<p><strong>|v(t)|=√((2t)²+2²)</strong></p>

<p><strong>=√(4t²+4)</strong></p>

<hr>

<h2>Arc Length Function</h2>

<p>Instead of measuring the entire curve, we may measure the distance from a starting point to a variable time.</p>

<p>This is called the <strong>arc length function</strong>.</p>

<p><strong>s(t)=∫<sub>a</sub><sup>t</sup>|r'(u)|du</strong></p>

<p>Notice that a different variable, usually <strong>u</strong>, is used inside the integral.</p>

<hr>

<h2>Unit Tangent Vector</h2>

<p>The velocity vector points in the direction of motion.</p>

<p>To obtain a direction vector of length 1, divide the velocity vector by its magnitude.</p>

<p><strong>T(t)=v(t)/|v(t)|</strong></p>

<p>This is called the <strong>unit tangent vector</strong>.</p>

<hr>

<h2>Example 3</h2>

<p>Suppose</p>

<p><strong>v(t)=⟨3,4,0⟩</strong></p>

<p>The speed is</p>

<p><strong>|v(t)|=5</strong></p>

<p>Therefore</p>

<p><strong>T(t)=⟨3/5,4/5,0⟩</strong></p>

<p>This vector has length 1 and points in the direction of motion.</p>

<hr>

<h2>Why Use a Unit Tangent Vector?</h2>

<p>The velocity vector contains both speed and direction.</p>

<p>The unit tangent vector removes the speed and keeps only the direction.</p>

<p>This makes it useful when studying the geometry of curves.</p>

<hr>

<h2>Example 4</h2>

<p>Suppose</p>

<p><strong>v(t)=⟨6,8,0⟩</strong></p>

<p>The speed is</p>

<p><strong>10</strong></p>

<p>The unit tangent vector is</p>

<p><strong>T(t)=⟨3/5,4/5,0⟩</strong></p>

<p>Notice that both vectors point in exactly the same direction.</p>

<hr>

<h2>Important Ideas</h2>

<ul>

<li>Arc length measures the actual distance traveled along a curve.</li>

<li>Arc length is found by integrating the speed.</li>

<li>The speed is the magnitude of the velocity vector.</li>

<li>The unit tangent vector has magnitude 1.</li>

<li>The unit tangent vector describes only the direction of motion.</li>

</ul>

<hr>

<h2>Practice Questions</h2>

`,

        questions: [

            {
                q: "What does arc length measure?",
                options: [
                    "The distance traveled along a curve",
                    "The straight-line distance",
                    "The acceleration",
                    "The area under the curve"
                ],
                answer: "The distance traveled along a curve",
                explanation: "Arc length follows the actual path of the curve."
            },

            {
                q: "What quantity is integrated to find arc length?",
                options: [
                    "The speed",
                    "The position",
                    "The acceleration",
                    "The unit tangent vector"
                ],
                answer: "The speed",
                explanation: "Arc length is the integral of the magnitude of velocity."
            },

            {
                q: "The speed of an object equals:",
                options: [
                    "|v(t)|",
                    "|r(t)|",
                    "|a(t)|",
                    "T(t)"
                ],
                answer: "|v(t)|",
                explanation: "Speed is the magnitude of the velocity vector."
            },

            {
                q: "What is the purpose of the unit tangent vector?",
                options: [
                    "To describe the direction of motion",
                    "To measure acceleration",
                    "To calculate distance",
                    "To find curvature"
                ],
                answer: "To describe the direction of motion",
                explanation: "It removes the speed and leaves only direction."
            },

            {
                q: "A unit tangent vector always has magnitude:",
                options: [
                    "1",
                    "0",
                    "2",
                    "Depends on the curve"
                ],
                answer: "1",
                explanation: "Every unit vector has magnitude 1."
            },

            {
                q: "If v=⟨3,4,0⟩, the unit tangent vector is:",
                options: [
                    "⟨3/5,4/5,0⟩",
                    "⟨5,5,0⟩",
                    "⟨4/3,5/4,0⟩",
                    "⟨3,4,0⟩"
                ],
                answer: "⟨3/5,4/5,0⟩",
                explanation: "Divide each component by the magnitude 5."
            },

            {
                q: "What is the magnitude of the vector ⟨6,8,0⟩?",
                options: [
                    "10",
                    "14",
                    "8",
                    "6"
                ],
                answer: "10",
                explanation: "√(6²+8²)=10."
            },

            {
                q: "Velocity contains:",
                options: [
                    "Speed and direction",
                    "Only speed",
                    "Only direction",
                    "Only acceleration"
                ],
                answer: "Speed and direction",
                explanation: "Velocity is a vector quantity."
            },

            {
                q: "The arc length formula requires first computing:",
                options: [
                    "The derivative of the position function",
                    "The second derivative",
                    "The dot product",
                    "The cross product"
                ],
                answer: "The derivative of the position function",
                explanation: "Differentiate first to obtain the velocity vector."
            },

            {
                q: "The unit tangent vector is obtained by:",
                options: [
                    "Dividing velocity by its magnitude",
                    "Adding acceleration",
                    "Integrating velocity",
                    "Taking the cross product"
                ],
                answer: "Dividing velocity by its magnitude",
                explanation: "Normalize the velocity vector to produce a unit vector."
            }

        ]

    }
    ,

    "calculus3-curvature-normal-vectors": {

        title: "Curvature and Unit Normal Vectors",

        subtitle: "Measure how sharply a curve bends and identify the direction in which the path is turning.",

        body: `

<h2>What Is Curvature?</h2>

<p>Curvature measures how quickly a curve changes direction.</p>

<p>A straight line has zero curvature because its direction does not change.</p>

<p>A curve that bends sharply has greater curvature than a curve that bends gently.</p>

<hr>

<h2>The Unit Tangent Vector</h2>

<p>The unit tangent vector describes the direction of motion along a curve.</p>

<p><strong>T(t)=r'(t)/|r'(t)|</strong></p>

<p>Because <strong>T(t)</strong> has magnitude 1, it contains direction but not speed.</p>

<hr>

<h2>Curvature Formula</h2>

<p>Curvature is represented by the Greek letter <strong>κ</strong>, pronounced “kappa.”</p>

<p>One common formula is:</p>

<p><strong>κ(t)=|T'(t)|/|r'(t)|</strong></p>

<p>This formula compares how quickly the direction changes with how quickly the object moves along the curve.</p>

<hr>

<h2>Alternative Curvature Formula</h2>

<p>For many three-dimensional curves, curvature can also be found using:</p>

<p><strong>κ(t)=|r'(t)×r''(t)|/|r'(t)|³</strong></p>

<p>This formula uses the cross product of the velocity and acceleration vectors.</p>

<hr>

<h2>Example 1: A Straight Line</h2>

<p>Consider:</p>

<p><strong>r(t)=⟨2t,3t,4t⟩</strong></p>

<p>Then:</p>

<p><strong>r'(t)=⟨2,3,4⟩</strong></p>

<p><strong>r''(t)=⟨0,0,0⟩</strong></p>

<p>Because the acceleration vector is zero, the direction does not change.</p>

<p>Therefore:</p>

<p><strong>κ(t)=0</strong></p>

<p>A straight line has zero curvature.</p>

<hr>

<h2>Example 2: A Circle</h2>

<p>Consider the circle:</p>

<p><strong>r(t)=⟨R cos(t),R sin(t),0⟩</strong></p>

<p>Its radius is <strong>R</strong>.</p>

<p>For a circle, the curvature is constant:</p>

<p><strong>κ=1/R</strong></p>

<p>A smaller circle has greater curvature because it bends more sharply.</p>

<p>A larger circle has smaller curvature because it bends more gently.</p>

<hr>

<h2>Radius of Curvature</h2>

<p>The reciprocal of curvature is called the <strong>radius of curvature</strong>.</p>

<p><strong>ρ=1/κ</strong></p>

<p>For a circle, the radius of curvature is simply the radius of the circle.</p>

<hr>

<h2>The Unit Normal Vector</h2>

<p>The unit normal vector points in the direction in which the curve is turning.</p>

<p>It is written as:</p>

<p><strong>N(t)=T'(t)/|T'(t)|</strong></p>

<p>The vector <strong>N(t)</strong> is perpendicular to the unit tangent vector.</p>

<hr>

<h2>Tangent and Normal Directions</h2>

<p>The unit tangent vector points along the path.</p>

<p>The unit normal vector points toward the inside of the turn.</p>

<ul>
<li><strong>T(t)</strong> describes forward direction.</li>
<li><strong>N(t)</strong> describes turning direction.</li>
</ul>

<hr>

<h2>Example 3</h2>

<p>Suppose:</p>

<p><strong>T(t)=⟨cos(t),sin(t),0⟩</strong></p>

<p>Differentiate:</p>

<p><strong>T'(t)=⟨-sin(t),cos(t),0⟩</strong></p>

<p>The magnitude of <strong>T'(t)</strong> is:</p>

<p><strong>|T'(t)|=1</strong></p>

<p>Therefore:</p>

<p><strong>N(t)=⟨-sin(t),cos(t),0⟩</strong></p>

<hr>

<h2>Acceleration Components</h2>

<p>Acceleration can be separated into two perpendicular components.</p>

<p><strong>a(t)=a<sub>T</sub>T(t)+a<sub>N</sub>N(t)</strong></p>

<p>The tangential component changes speed.</p>

<p>The normal component changes direction.</p>

<hr>

<h2>Tangential Acceleration</h2>

<p>The tangential component is:</p>

<p><strong>a<sub>T</sub>=d|v|/dt</strong></p>

<p>It measures how quickly the speed changes.</p>

<p>If <strong>a<sub>T</sub></strong> is positive, the object speeds up.</p>

<p>If <strong>a<sub>T</sub></strong> is negative, the object slows down.</p>

<hr>

<h2>Normal Acceleration</h2>

<p>The normal component is:</p>

<p><strong>a<sub>N</sub>=κ|v|²</strong></p>

<p>It measures how strongly the object turns.</p>

<p>A larger speed or greater curvature produces greater normal acceleration.</p>

<hr>

<h2>Another Formula for Normal Acceleration</h2>

<p>Because <strong>κ=1/ρ</strong>, normal acceleration can also be written as:</p>

<p><strong>a<sub>N</sub>=|v|²/ρ</strong></p>

<p>This is especially useful for circular motion.</p>

<hr>

<h2>Example 4</h2>

<p>An object moves with speed 6 along a curve with curvature 1/3.</p>

<p>Find the normal acceleration.</p>

<p><strong>a<sub>N</sub>=κ|v|²</strong></p>

<p><strong>a<sub>N</sub>=(1/3)(6²)</strong></p>

<p><strong>a<sub>N</sub>=12</strong></p>

<hr>

<h2>Finding Tangential Acceleration Using Dot Products</h2>

<p>Tangential acceleration can also be found using:</p>

<p><strong>a<sub>T</sub>=(v·a)/|v|</strong></p>

<p>This formula measures how much of acceleration points in the direction of motion.</p>

<hr>

<h2>Finding Normal Acceleration</h2>

<p>Once the total acceleration and tangential acceleration are known:</p>

<p><strong>|a|²=a<sub>T</sub>²+a<sub>N</sub>²</strong></p>

<p>Therefore:</p>

<p><strong>a<sub>N</sub>=√(|a|²-a<sub>T</sub>²)</strong></p>

<hr>

<h2>Example 5</h2>

<p>Suppose:</p>

<p><strong>v=⟨3,4,0⟩</strong></p>

<p>and:</p>

<p><strong>a=⟨2,1,0⟩</strong></p>

<p>First find the speed:</p>

<p><strong>|v|=5</strong></p>

<p>Find the dot product:</p>

<p><strong>v·a=3(2)+4(1)=10</strong></p>

<p>Then:</p>

<p><strong>a<sub>T</sub>=10/5=2</strong></p>

<p>The magnitude of acceleration is:</p>

<p><strong>|a|=√(2²+1²)=√5</strong></p>

<p>Now find the normal component:</p>

<p><strong>a<sub>N</sub>=√(5-4)=1</strong></p>

<hr>

<h2>Geometric Meaning</h2>

<p>Curvature and normal vectors help describe the geometry of motion.</p>

<p>Two objects may travel at the same speed but have different accelerations if one path bends more sharply.</p>

<p>An object moving around a circle at constant speed still accelerates because its direction is continually changing.</p>

<hr>

<h2>Important Ideas</h2>

<ul>
<li>Curvature measures how sharply a curve bends.</li>
<li>A straight line has zero curvature.</li>
<li>A circle of radius R has curvature 1/R.</li>
<li>The unit normal vector points in the direction of turning.</li>
<li>The tangent and normal vectors are perpendicular.</li>
<li>Tangential acceleration changes speed.</li>
<li>Normal acceleration changes direction.</li>
<li>Acceleration can be written as a combination of tangent and normal components.</li>
</ul>

<hr>

<h2>Practice Questions</h2>

<p>Select the best answer for each question.</p>

`,

        questions: [

            {
                q: "What does curvature measure?",
                options: [
                    "How sharply a curve bends",
                    "The total distance traveled",
                    "The position of an object",
                    "The area under a curve"
                ],
                answer: "How sharply a curve bends",
                explanation: "Curvature measures how quickly the direction of a curve changes."
            },

            {
                q: "What is the curvature of a straight line?",
                options: [
                    "0",
                    "1",
                    "Undefined",
                    "Infinity"
                ],
                answer: "0",
                explanation: "The direction of a straight line does not change."
            },

            {
                q: "What is the curvature of a circle with radius R?",
                options: [
                    "1/R",
                    "R",
                    "R²",
                    "2πR"
                ],
                answer: "1/R",
                explanation: "The curvature of a circle is the reciprocal of its radius."
            },

            {
                q: "A smaller circle has:",
                options: [
                    "Greater curvature",
                    "Smaller curvature",
                    "Zero curvature",
                    "The same curvature as every circle"
                ],
                answer: "Greater curvature",
                explanation: "Since κ=1/R, decreasing the radius increases curvature."
            },

            {
                q: "What direction does the unit normal vector point?",
                options: [
                    "Toward the direction in which the curve is turning",
                    "Directly backward",
                    "Always upward",
                    "Along the position vector"
                ],
                answer: "Toward the direction in which the curve is turning",
                explanation: "The unit normal vector points toward the inside of the turn."
            },

            {
                q: "The unit tangent vector and unit normal vector are:",
                options: [
                    "Perpendicular",
                    "Parallel",
                    "Equal",
                    "Opposite in every case"
                ],
                answer: "Perpendicular",
                explanation: "The tangent and normal directions form a right angle."
            },

            {
                q: "Which acceleration component changes speed?",
                options: [
                    "Tangential acceleration",
                    "Normal acceleration",
                    "Position acceleration",
                    "Curvature acceleration"
                ],
                answer: "Tangential acceleration",
                explanation: "Tangential acceleration measures the rate of change of speed."
            },

            {
                q: "Which acceleration component changes direction?",
                options: [
                    "Normal acceleration",
                    "Tangential acceleration",
                    "Scalar acceleration",
                    "Constant acceleration"
                ],
                answer: "Normal acceleration",
                explanation: "Normal acceleration points toward the direction of turning."
            },

            {
                q: "If speed is 6 and curvature is 1/3, what is normal acceleration?",
                options: [
                    "12",
                    "2",
                    "18",
                    "36"
                ],
                answer: "12",
                explanation: "Use aN=κ|v|²=(1/3)(36)=12."
            },

            {
                q: "An object moving at constant speed around a circle:",
                options: [
                    "Still has acceleration because its direction changes",
                    "Has zero acceleration",
                    "Has zero velocity",
                    "Moves in a straight line"
                ],
                answer: "Still has acceleration because its direction changes",
                explanation: "Circular motion has normal acceleration even when speed is constant."
            }

        ]

    }
    ,

    "calculus3-motion-space": {

        title: "Motion in Space Applications",

        subtitle: "Apply vector-valued functions to analyze motion in three-dimensional space.",

        body: `

<h2>Motion in Three Dimensions</h2>

<p>Vector-valued functions allow us to describe the motion of airplanes, satellites, rockets, drones, and moving particles.</p>

<p>The position of an object at time <strong>t</strong> is given by:</p>

<p><strong>r(t)=⟨x(t),y(t),z(t)⟩</strong></p>

<p>Each coordinate changes with time, allowing the object to move freely through space.</p>

<hr>

<h2>Position</h2>

<p>The position vector tells us exactly where the object is located.</p>

<p>For example:</p>

<p><strong>r(t)=⟨2t,3t,t²⟩</strong></p>

<p>At <strong>t=2</strong>:</p>

<p><strong>r(2)=⟨4,6,4⟩</strong></p>

<p>The object is located at the point (4,6,4).</p>

<hr>

<h2>Velocity</h2>

<p>The velocity vector describes how fast the position is changing.</p>

<p><strong>v(t)=r'(t)</strong></p>

<p>Differentiate each component separately.</p>

<p>For the previous example:</p>

<p><strong>v(t)=⟨2,3,2t⟩</strong></p>

<p>At <strong>t=2</strong>:</p>

<p><strong>v(2)=⟨2,3,4⟩</strong></p>

<hr>

<h2>Acceleration</h2>

<p>Acceleration measures how quickly the velocity changes.</p>

<p><strong>a(t)=v'(t)=r''(t)</strong></p>

<p>For the same motion:</p>

<p><strong>a(t)=⟨0,0,2⟩</strong></p>

<p>The acceleration always points upward in the positive z-direction.</p>

<hr>

<h2>Example 1</h2>

<p>A particle moves according to</p>

<p><strong>r(t)=⟨t²,4t,5−t²⟩</strong></p>

<p>Find the position, velocity, and acceleration when <strong>t=3</strong>.</p>

<p><strong>Position:</strong></p>

<p>r(3)=⟨9,12,-4⟩</p>

<p><strong>Velocity:</strong></p>

<p>v(t)=⟨2t,4,-2⟩</p>

<p>v(3)=⟨6,4,-2⟩</p>

<p><strong>Acceleration:</strong></p>

<p>a(t)=⟨2,0,0⟩</p>

<hr>

<h2>Finding Speed</h2>

<p>Speed is the magnitude of the velocity vector.</p>

<p><strong>Speed=|v(t)|</strong></p>

<p>For Example 1:</p>

<p><strong>|v(3)|=√(6²+4²+(-2)²)</strong></p>

<p><strong>=√56</strong></p>

<p><strong>≈7.48 units per second</strong></p>

<hr>

<h2>Example 2</h2>

<p>An airplane follows the path</p>

<p><strong>r(t)=⟨250t,180t,12t⟩</strong></p>

<p>The coordinates represent miles.</p>

<p>Find its velocity.</p>

<p><strong>v(t)=⟨250,180,12⟩</strong></p>

<p>The airplane moves with constant velocity.</p>

<p>Since the velocity never changes,</p>

<p><strong>a(t)=⟨0,0,0⟩</strong></p>

<hr>

<h2>Changing Direction</h2>

<p>An object can travel at constant speed while continually changing direction.</p>

<p>In this situation, the acceleration is not zero because the direction of motion changes.</p>

<p>This occurs whenever an object travels along a curved path.</p>

<hr>

<h2>Circular Motion</h2>

<p>Suppose an object moves around a circle.</p>

<p><strong>r(t)=⟨5cos(t),5sin(t),0⟩</strong></p>

<p>The velocity is</p>

<p><strong>v(t)=⟨−5sin(t),5cos(t),0⟩</strong></p>

<p>The acceleration is</p>

<p><strong>a(t)=⟨−5cos(t),−5sin(t),0⟩</strong></p>

<p>The acceleration always points toward the center of the circle.</p>

<hr>

<h2>Centripetal Acceleration</h2>

<p>The inward acceleration that keeps an object moving in a circle is called <strong>centripetal acceleration</strong>.</p>

<p>Its magnitude is</p>

<p><strong>a=v²/r</strong></p>

<p>where</p>

<ul>

<li>v = speed</li>

<li>r = radius</li>

</ul>

<p>The faster the object moves, the greater the required centripetal acceleration.</p>

<hr>

<h2>Example 3</h2>

<p>A race car travels around a circular track of radius 100 meters at a speed of 20 meters per second.</p>

<p>Find its centripetal acceleration.</p>

<p><strong>a=v²/r</strong></p>

<p><strong>a=20²/100</strong></p>

<p><strong>a=400/100=4 m/s²</strong></p>

<hr>

<h2>Projectile Motion</h2>

<p>Ignoring air resistance, projectiles move with constant downward acceleration due to gravity.</p>

<p>The acceleration vector is</p>

<p><strong>a(t)=⟨0,0,-9.8⟩</strong></p>

<p>Integrating produces the velocity function.</p>

<p>Integrating again produces the position function.</p>

<hr>

<h2>Example 4</h2>

<p>A ball is thrown upward.</p>

<p>The position function is</p>

<p><strong>r(t)=⟨15t,8t,2+20t−4.9t²⟩</strong></p>

<p>Find its velocity.</p>

<p><strong>v(t)=⟨15,8,20−9.8t⟩</strong></p>

<p>The ball rises while the third component is positive.</p>

<p>It reaches its highest point when the vertical velocity becomes zero.</p>

<hr>

<h2>Maximum Height</h2>

<p>The highest point occurs when the vertical component of velocity equals zero.</p>

<p>Set</p>

<p><strong>20−9.8t=0</strong></p>

<p>Solve for t.</p>

<p><strong>t≈2.04 seconds</strong></p>

<p>Substitute this value into the position function to find the maximum height.</p>

<hr>

<h2>Applications</h2>

<ul>

<li>Rocket trajectories</li>

<li>Satellite motion</li>

<li>Aircraft navigation</li>

<li>Drone flight paths</li>

<li>Planetary motion</li>

<li>Roller coaster design</li>

<li>Computer animation</li>

<li>Robotics</li>

</ul>

<hr>

<h2>Practice Questions</h2>

`,

        questions: [

            {
                q: "What does a position vector describe?",
                options: [
                    "The location of an object",
                    "Its acceleration",
                    "Its speed",
                    "Its mass"
                ],
                answer: "The location of an object",
                explanation: "The position vector gives the object's location in space."
            },

            {
                q: "The derivative of the position vector is the:",
                options: [
                    "Velocity vector",
                    "Acceleration vector",
                    "Speed",
                    "Force"
                ],
                answer: "Velocity vector",
                explanation: "Velocity is the derivative of position."
            },

            {
                q: "The derivative of velocity is the:",
                options: [
                    "Acceleration vector",
                    "Position vector",
                    "Speed",
                    "Distance"
                ],
                answer: "Acceleration vector",
                explanation: "Acceleration is the rate of change of velocity."
            },

            {
                q: "Speed is equal to:",
                options: [
                    "The magnitude of the velocity vector",
                    "The magnitude of the position vector",
                    "The derivative of speed",
                    "The magnitude of acceleration"
                ],
                answer: "The magnitude of the velocity vector",
                explanation: "Speed is the length of the velocity vector."
            },

            {
                q: "If an airplane has constant velocity, its acceleration is:",
                options: [
                    "Zero",
                    "Constant but nonzero",
                    "Increasing",
                    "Undefined"
                ],
                answer: "Zero",
                explanation: "If velocity never changes, its derivative is zero."
            },

            {
                q: "In circular motion, the acceleration points:",
                options: [
                    "Toward the center of the circle",
                    "Away from the center",
                    "Along the tangent",
                    "Straight upward"
                ],
                answer: "Toward the center of the circle",
                explanation: "Centripetal acceleration always points toward the center."
            },

            {
                q: "The formula for centripetal acceleration is:",
                options: [
                    "v²/r",
                    "r²/v",
                    "rv",
                    "2πr"
                ],
                answer: "v²/r",
                explanation: "Centripetal acceleration depends on the square of speed divided by the radius."
            },

            {
                q: "Ignoring air resistance, projectile motion has acceleration:",
                options: [
                    "⟨0,0,-9.8⟩",
                    "⟨9.8,0,0⟩",
                    "⟨0,9.8,0⟩",
                    "⟨0,0,0⟩"
                ],
                answer: "⟨0,0,-9.8⟩",
                explanation: "Gravity provides a constant downward acceleration."
            },

            {
                q: "A projectile reaches its highest point when:",
                options: [
                    "Its vertical velocity is zero",
                    "Its horizontal velocity is zero",
                    "Its acceleration is zero",
                    "Its speed is zero"
                ],
                answer: "Its vertical velocity is zero",
                explanation: "At the highest point, the vertical component of velocity changes from positive to negative."
            },

            {
                q: "Which of the following is a real-world application of vector-valued functions?",
                options: [
                    "Satellite motion",
                    "Robot navigation",
                    "Aircraft flight paths",
                    "All of the above"
                ],
                answer: "All of the above",
                explanation: "Vector-valued functions are used extensively to model motion in engineering, physics, robotics, and aerospace."
            }

        ]

    }
    ,

    "calculus3-unit2-review": {

        title: "Unit 2 Review",

        subtitle: "Review vector-valued functions and motion in space before taking the unit test.",

        body: `

<h2>Unit Overview</h2>

<p>In this unit, you learned how vector-valued functions describe motion through three-dimensional space. You explored how to compute velocity, acceleration, speed, arc length, curvature, and how these ideas are applied to real-world motion.</p>

<hr>

<h2>Lesson 1 Review — Vector-Valued Functions</h2>

<h3>Key Ideas</h3>

<ul>

<li>A vector-valued function has multiple component functions.</li>

<li>r(t)=⟨x(t),y(t),z(t)⟩</li>

<li>The parameter is usually time.</li>

<li>Evaluating r(t) gives the object's position.</li>

<li>The graph of a vector-valued function is called a space curve.</li>

</ul>

<h3>Quick Example</h3>

<p>If</p>

<p><strong>r(t)=⟨t²,3t,5⟩</strong></p>

<p>find r(2).</p>

<p><strong>Answer:</strong></p>

<p>⟨4,6,5⟩</p>

<hr>

<h2>Lesson 2 Review — Derivatives and Integrals</h2>

<h3>Remember</h3>

<ul>

<li>Differentiate each component separately.</li>

<li>Integrate each component separately.</li>

<li>The derivative of position is velocity.</li>

<li>The second derivative is acceleration.</li>

</ul>

<h3>Quick Example</h3>

<p>r(t)=⟨t²,4t,sin(t)⟩</p>

<p>Velocity:</p>

<p><strong>v(t)=⟨2t,4,cos(t)⟩</strong></p>

<p>Acceleration:</p>

<p><strong>a(t)=⟨2,0,-sin(t)⟩</strong></p>

<hr>

<h2>Lesson 3 Review — Velocity, Speed, and Acceleration</h2>

<h3>Important Formulas</h3>

<ul>

<li>v(t)=r'(t)</li>

<li>a(t)=v'(t)=r''(t)</li>

<li>Speed=|v(t)|</li>

</ul>

<h3>Example</h3>

<p>v(t)=⟨3,4,0⟩</p>

<p>Speed:</p>

<p><strong>√(3²+4²)=5</strong></p>

<hr>

<h2>Lesson 4 Review — Arc Length</h2>

<h3>Arc Length Formula</h3>

<p><strong>s=∫|r'(t)|dt</strong></p>

<p>The magnitude of the velocity vector is integrated over the interval.</p>

<h3>Unit Tangent Vector</h3>

<p><strong>T=v/|v|</strong></p>

<p>The unit tangent vector has length 1 and points in the direction of motion.</p>

<hr>

<h2>Lesson 5 Review — Curvature</h2>

<h3>Key Ideas</h3>

<ul>

<li>Curvature measures how sharply a curve bends.</li>

<li>A straight line has curvature 0.</li>

<li>A circle of radius R has curvature 1/R.</li>

<li>The unit normal vector points toward the direction of turning.</li>

</ul>

<h3>Important Relationships</h3>

<ul>

<li>Tangent acceleration changes speed.</li>

<li>Normal acceleration changes direction.</li>

<li>a=aT+aN</li>

</ul>

<hr>

<h2>Lesson 6 Review — Motion in Space</h2>

<ul>

<li>Position describes location.</li>

<li>Velocity describes motion.</li>

<li>Acceleration describes changes in velocity.</li>

<li>Projectile motion uses constant downward acceleration.</li>

<li>Circular motion has centripetal acceleration.</li>

<li>Real-world applications include satellites, aircraft, rockets, and robotics.</li>

</ul>

<hr>

<h2>Important Formulas to Know</h2>

<table>

<tr><th>Concept</th><th>Formula</th></tr>

<tr><td>Velocity</td><td>v=r'</td></tr>

<tr><td>Acceleration</td><td>a=r''</td></tr>

<tr><td>Speed</td><td>|v|</td></tr>

<tr><td>Arc Length</td><td>∫|r'|dt</td></tr>

<tr><td>Unit Tangent</td><td>T=v/|v|</td></tr>

<tr><td>Curvature</td><td>κ=|T'|/|r'|</td></tr>

<tr><td>Radius of Curvature</td><td>ρ=1/κ</td></tr>

<tr><td>Normal Acceleration</td><td>aN=κv²</td></tr>

<tr><td>Centripetal Acceleration</td><td>v²/r</td></tr>

</table>

<hr>

<h2>Mixed Review Questions</h2>

`,

        questions: [

            {
                q: "A vector-valued function describes:",
                options: [
                    "Motion in space",
                    "Only straight lines",
                    "Only circles",
                    "Only scalar functions"
                ],
                answer: "Motion in space",
                explanation: "Vector-valued functions describe positions in two or three dimensions."
            },

            {
                q: "The derivative of the position vector is:",
                options: [
                    "Velocity",
                    "Acceleration",
                    "Speed",
                    "Distance"
                ],
                answer: "Velocity",
                explanation: "Velocity is the first derivative of position."
            },

            {
                q: "The derivative of velocity is:",
                options: [
                    "Acceleration",
                    "Speed",
                    "Position",
                    "Distance"
                ],
                answer: "Acceleration",
                explanation: "Acceleration measures how velocity changes."
            },

            {
                q: "Speed equals:",
                options: [
                    "The magnitude of velocity",
                    "The derivative of acceleration",
                    "The magnitude of position",
                    "The unit tangent vector"
                ],
                answer: "The magnitude of velocity",
                explanation: "Speed is |v|."
            },

            {
                q: "A unit tangent vector has magnitude:",
                options: [
                    "1",
                    "0",
                    "2",
                    "It depends on velocity"
                ],
                answer: "1",
                explanation: "Every unit vector has length one."
            },

            {
                q: "Arc length measures:",
                options: [
                    "The distance traveled along a curve",
                    "The straight-line distance",
                    "The acceleration",
                    "The radius"
                ],
                answer: "The distance traveled along a curve",
                explanation: "Arc length follows the path of the curve."
            },

            {
                q: "The unit normal vector points:",
                options: [
                    "Toward the direction of turning",
                    "Backward",
                    "Along the position vector",
                    "Straight upward"
                ],
                answer: "Toward the direction of turning",
                explanation: "It indicates how the curve is changing direction."
            },

            {
                q: "A straight line has curvature:",
                options: [
                    "0",
                    "1",
                    "Undefined",
                    "Infinite"
                ],
                answer: "0",
                explanation: "Straight lines never change direction."
            },

            {
                q: "The curvature of a circle with radius R is:",
                options: [
                    "1/R",
                    "R",
                    "R²",
                    "2πR"
                ],
                answer: "1/R",
                explanation: "Curvature is the reciprocal of the radius."
            },

            {
                q: "Projectile motion experiences constant acceleration due to:",
                options: [
                    "Gravity",
                    "Velocity",
                    "Wind",
                    "Position"
                ],
                answer: "Gravity",
                explanation: "Ignoring air resistance, gravity provides constant downward acceleration."
            },
            {
                q: "An object moving with constant velocity has acceleration:",
                options: [
                    "0",
                    "1",
                    "Equal to its speed",
                    "Undefined"
                ],
                answer: "0",
                explanation: "If velocity does not change, its derivative is zero."
            },

            {
                q: "Velocity is found by:",
                options: [
                    "Differentiating the position function",
                    "Integrating acceleration twice",
                    "Finding the magnitude of position",
                    "Taking the dot product"
                ],
                answer: "Differentiating the position function",
                explanation: "Velocity is the first derivative of position."
            },

            {
                q: "Acceleration is found by:",
                options: [
                    "Differentiating velocity",
                    "Integrating velocity",
                    "Taking the magnitude of velocity",
                    "Finding arc length"
                ],
                answer: "Differentiating velocity",
                explanation: "Acceleration is the derivative of velocity."
            },

            {
                q: "Speed is always:",
                options: [
                    "A scalar",
                    "A vector",
                    "A matrix",
                    "A point"
                ],
                answer: "A scalar",
                explanation: "Speed has magnitude only and no direction."
            },

            {
                q: "The unit tangent vector describes:",
                options: [
                    "The direction of motion",
                    "The speed of motion",
                    "The position of the object",
                    "The acceleration"
                ],
                answer: "The direction of motion",
                explanation: "The unit tangent vector removes the speed and keeps only the direction."
            },

            {
                q: "Which quantity measures how sharply a curve bends?",
                options: [
                    "Curvature",
                    "Velocity",
                    "Speed",
                    "Arc length"
                ],
                answer: "Curvature",
                explanation: "Curvature measures the rate of change of direction."
            },

            {
                q: "Normal acceleration changes:",
                options: [
                    "The direction of motion",
                    "The speed only",
                    "The position only",
                    "The mass"
                ],
                answer: "The direction of motion",
                explanation: "Normal acceleration points toward the inside of the curve."
            },

            {
                q: "Tangential acceleration changes:",
                options: [
                    "The speed",
                    "The position",
                    "The radius",
                    "The curvature"
                ],
                answer: "The speed",
                explanation: "Tangential acceleration changes how fast the object moves."
            },

            {
                q: "An object moving in a perfect circle at constant speed has:",
                options: [
                    "Acceleration but no tangential acceleration",
                    "No acceleration",
                    "Only tangential acceleration",
                    "Zero velocity"
                ],
                answer: "Acceleration but no tangential acceleration",
                explanation: "Its direction changes continuously, producing normal (centripetal) acceleration."
            },

            {
                q: "Which formula gives centripetal acceleration?",
                options: [
                    "v²/r",
                    "r²/v",
                    "v/r²",
                    "2πr"
                ],
                answer: "v²/r",
                explanation: "Centripetal acceleration equals the square of the speed divided by the radius."
            },

            {
                q: "The magnitude of the velocity vector is called:",
                options: [
                    "Speed",
                    "Acceleration",
                    "Curvature",
                    "Radius"
                ],
                answer: "Speed",
                explanation: "Speed is the length of the velocity vector."
            },

            {
                q: "The graph of a vector-valued function is called a:",
                options: [
                    "Space curve",
                    "Line segment",
                    "Plane",
                    "Matrix"
                ],
                answer: "Space curve",
                explanation: "A vector-valued function traces out a curve in two or three dimensions."
            },

            {
                q: "If position is constant, velocity is:",
                options: [
                    "Zero",
                    "Positive",
                    "Negative",
                    "Undefined"
                ],
                answer: "Zero",
                explanation: "The derivative of a constant is zero."
            },

            {
                q: "Which quantity is integrated to compute arc length?",
                options: [
                    "Speed",
                    "Acceleration",
                    "Position",
                    "Curvature"
                ],
                answer: "Speed",
                explanation: "Arc length is the integral of the magnitude of the velocity vector."
            },

            {
                q: "The unit normal vector is always:",
                options: [
                    "Perpendicular to the unit tangent vector",
                    "Parallel to the velocity vector",
                    "Equal to the position vector",
                    "Parallel to acceleration"
                ],
                answer: "Perpendicular to the unit tangent vector",
                explanation: "The tangent and normal vectors form an orthogonal pair."
            },

            {
                q: "The acceleration of projectile motion (ignoring air resistance) always points:",
                options: [
                    "Downward",
                    "Upward",
                    "In the direction of travel",
                    "Horizontally"
                ],
                answer: "Downward",
                explanation: "Gravity acts downward throughout the motion."
            },

            {
                q: "Which of the following is NOT a vector quantity?",
                options: [
                    "Speed",
                    "Velocity",
                    "Acceleration",
                    "Position"
                ],
                answer: "Speed",
                explanation: "Speed is a scalar, while the others are vectors."
            },

            {
                q: "If the curvature of a curve increases, the curve becomes:",
                options: [
                    "Sharper",
                    "Straighter",
                    "Longer",
                    "Slower"
                ],
                answer: "Sharper",
                explanation: "Greater curvature means the curve bends more tightly."
            },

            {
                q: "Which field commonly uses vector-valued functions?",
                options: [
                    "Robotics",
                    "Satellite navigation",
                    "Computer graphics",
                    "All of the above"
                ],
                answer: "All of the above",
                explanation: "Vector-valued functions are fundamental in many areas of science and engineering."
            },

            {
                q: "After completing this review, you should be prepared to:",
                options: [
                    "Take the Unit 2 Test",
                    "Begin Algebra I",
                    "Skip Calculus III",
                    "Study Differential Equations"
                ],
                answer: "Take the Unit 2 Test",
                explanation: "This review covers all major topics from Unit 2."
            }

        ]

    }
    ,

    "calculus3-unit2-test": {

        title: "Unit 2 Test",

        subtitle: "Test your understanding of Vector-Valued Functions and Motion in Space.",

        body: `

<h2>Unit 2 Test</h2>

<p>This test covers everything from Unit 2.</p>

<p>Topics include:</p>

<ul>

<li>Vector-valued functions</li>

<li>Derivatives and integrals</li>

<li>Velocity</li>

<li>Speed</li>

<li>Acceleration</li>

<li>Arc length</li>

<li>Unit tangent vectors</li>

<li>Curvature</li>

<li>Unit normal vectors</li>

<li>Motion in space</li>

</ul>

<p>Select the best answer for each question.</p>

`,

        questions: [

            {
                q: "Which of the following is a vector-valued function?",
                options: [
                    "r(t)=⟨t²,3t,sin(t)⟩",
                    "f(x)=x²",
                    "g(x)=sin(x)",
                    "h(x)=5x+2"
                ],
                answer: "r(t)=⟨t²,3t,sin(t)⟩",
                explanation: "A vector-valued function has multiple component functions."
            },

            {
                q: "If r(t)=⟨t²,4t,3⟩, then r(2) equals:",
                options: [
                    "⟨4,8,3⟩",
                    "⟨2,8,6⟩",
                    "⟨8,4,3⟩",
                    "⟨4,4,3⟩"
                ],
                answer: "⟨4,8,3⟩",
                explanation: "Evaluate each component separately."
            },

            {
                q: "The derivative of the position vector is called:",
                options: [
                    "Velocity",
                    "Acceleration",
                    "Speed",
                    "Curvature"
                ],
                answer: "Velocity",
                explanation: "Velocity is the first derivative of position."
            },

            {
                q: "The second derivative of position is:",
                options: [
                    "Acceleration",
                    "Speed",
                    "Distance",
                    "Curvature"
                ],
                answer: "Acceleration",
                explanation: "Acceleration is the second derivative of the position vector."
            },

            {
                q: "Differentiating a vector-valued function means:",
                options: [
                    "Differentiate each component separately",
                    "Differentiate only the x-component",
                    "Take the magnitude first",
                    "Differentiate the vector as a whole"
                ],
                answer: "Differentiate each component separately",
                explanation: "Each component function is differentiated independently."
            },

            {
                q: "Integrating a vector-valued function means:",
                options: [
                    "Integrate each component separately",
                    "Take the cross product",
                    "Take the dot product",
                    "Integrate only one component"
                ],
                answer: "Integrate each component separately",
                explanation: "Each component is integrated individually."
            },

            {
                q: "If v(t)=⟨3,4,0⟩, the speed is:",
                options: [
                    "5",
                    "7",
                    "25",
                    "1"
                ],
                answer: "5",
                explanation: "Speed is the magnitude of the velocity vector."
            },

            {
                q: "Speed is:",
                options: [
                    "A scalar",
                    "A vector",
                    "A matrix",
                    "A point"
                ],
                answer: "A scalar",
                explanation: "Speed has magnitude but no direction."
            },

            {
                q: "The graph of a vector-valued function is called a:",
                options: [
                    "Space curve",
                    "Plane",
                    "Matrix",
                    "Surface"
                ],
                answer: "Space curve",
                explanation: "The graph traced by a vector-valued function is called a space curve."
            },

            {
                q: "If position remains constant, velocity is:",
                options: [
                    "Zero",
                    "Positive",
                    "Negative",
                    "Undefined"
                ],
                answer: "Zero",
                explanation: "The derivative of a constant is zero."
            },
            {
                q: "The magnitude of the velocity vector is called:",
                options: [
                    "Speed",
                    "Acceleration",
                    "Curvature",
                    "Arc length"
                ],
                answer: "Speed",
                explanation: "Speed is the length (magnitude) of the velocity vector."
            },

            {
                q: "Arc length measures:",
                options: [
                    "The distance traveled along a curve",
                    "The straight-line distance",
                    "The acceleration",
                    "The displacement only"
                ],
                answer: "The distance traveled along a curve",
                explanation: "Arc length follows the actual path of the curve."
            },

            {
                q: "The unit tangent vector has magnitude:",
                options: [
                    "1",
                    "0",
                    "2",
                    "It depends on the curve"
                ],
                answer: "1",
                explanation: "A unit vector always has length 1."
            },

            {
                q: "The unit tangent vector describes:",
                options: [
                    "The direction of motion",
                    "The speed of motion",
                    "The acceleration",
                    "The position"
                ],
                answer: "The direction of motion",
                explanation: "The unit tangent vector points in the direction the object is moving."
            },

            {
                q: "Curvature measures:",
                options: [
                    "How sharply a curve bends",
                    "The total distance traveled",
                    "The object's speed",
                    "The object's mass"
                ],
                answer: "How sharply a curve bends",
                explanation: "Curvature describes how rapidly a curve changes direction."
            },

            {
                q: "The curvature of a straight line is:",
                options: [
                    "0",
                    "1",
                    "Undefined",
                    "Infinite"
                ],
                answer: "0",
                explanation: "A straight line never changes direction."
            },

            {
                q: "The curvature of a circle with radius R is:",
                options: [
                    "1/R",
                    "R",
                    "R²",
                    "2πR"
                ],
                answer: "1/R",
                explanation: "Curvature is the reciprocal of the radius."
            },

            {
                q: "The unit normal vector points:",
                options: [
                    "In the direction the curve is turning",
                    "Backward along the curve",
                    "Straight upward",
                    "Toward the origin"
                ],
                answer: "In the direction the curve is turning",
                explanation: "The unit normal vector indicates the direction of the curve's bend."
            },

            {
                q: "Tangential acceleration changes:",
                options: [
                    "The speed",
                    "The direction only",
                    "The position only",
                    "The curvature"
                ],
                answer: "The speed",
                explanation: "Tangential acceleration increases or decreases the object's speed."
            },

            {
                q: "Normal acceleration changes:",
                options: [
                    "The direction of motion",
                    "The mass",
                    "The position only",
                    "The speed only"
                ],
                answer: "The direction of motion",
                explanation: "Normal acceleration changes the direction of the velocity vector."
            },
            {
                q: "Ignoring air resistance, the acceleration of a projectile is:",
                options: [
                    "⟨0,0,-9.8⟩",
                    "⟨9.8,0,0⟩",
                    "⟨0,9.8,0⟩",
                    "⟨0,0,0⟩"
                ],
                answer: "⟨0,0,-9.8⟩",
                explanation: "Gravity produces a constant downward acceleration."
            },

            {
                q: "An object moving in a circle at constant speed has:",
                options: [
                    "Normal acceleration but zero tangential acceleration",
                    "No acceleration",
                    "Only tangential acceleration",
                    "Zero velocity"
                ],
                answer: "Normal acceleration but zero tangential acceleration",
                explanation: "Its speed stays constant, but its direction changes continuously."
            },

            {
                q: "The formula for centripetal acceleration is:",
                options: [
                    "v²/r",
                    "r²/v",
                    "2πr",
                    "rv"
                ],
                answer: "v²/r",
                explanation: "Centripetal acceleration equals the square of the speed divided by the radius."
            },

            {
                q: "Which of the following is a real-world application of vector-valued functions?",
                options: [
                    "Satellite motion",
                    "Robot navigation",
                    "Aircraft flight paths",
                    "All of the above"
                ],
                answer: "All of the above",
                explanation: "Vector-valued functions are widely used in engineering, physics, robotics, aerospace, and computer graphics."
            },

            {
                q: "Which statement best summarizes Unit 2?",
                options: [
                    "Vector-valued functions describe motion in space using position, velocity, acceleration, and curvature.",
                    "Calculus III studies only single-variable functions.",
                    "Curvature measures the area under a curve.",
                    "Velocity and speed are always the same quantity."
                ],
                answer: "Vector-valued functions describe motion in space using position, velocity, acceleration, and curvature.",
                explanation: "This unit introduced the mathematics used to model and analyze motion in two and three dimensions."
            }

        ]

    },
    "calculus3-unit3-lesson1": {

        title: "Functions of Several Variables",

        subtitle: "Learn how functions can depend on two or more independent variables.",

        body: `

<h2>Functions of Several Variables</h2>

<p>In Calculus I and II, you studied functions with a single independent variable, such as <strong>f(x)</strong>. In many real-world situations, however, a quantity depends on two, three, or even more variables. These are called <strong>functions of several variables</strong> and form the foundation of multivariable calculus.</p>

<h3>What is a Function of Several Variables?</h3>

<p>A function of several variables assigns one output value to every valid combination of two or more input variables.</p>

<p>Examples include:</p>

<ul>
<li>Temperature at different locations on Earth</li>
<li>Air pressure depending on latitude, longitude, and altitude</li>
<li>The volume of a box depending on its length, width, and height</li>
<li>The profit of a business depending on price and advertising budget</li>
</ul>

<p>Examples of multivariable functions include:</p>

<ul>
<li>f(x,y)=x²+y²</li>
<li>f(x,y)=xy+3x−2y</li>
<li>f(x,y,z)=x²+y²+z²</li>
<li>f(x,y,z)=xyz</li>
</ul>

<p>The variables x, y, and z are called the <strong>independent variables</strong>. The value of the function is the <strong>dependent variable</strong>.</p>

<h3>Evaluating Functions</h3>

<p>Evaluating a multivariable function works the same way as evaluating a single-variable function. Simply substitute the given values into the formula.</p>

<p><strong>Example 1</strong></p>

<p>If</p>

<p>f(x,y)=x²+y²</p>

<p>find f(2,3).</p>

<p>Substitute the values:</p>

<p>2²+3²=4+9=13</p>

<p>Therefore,</p>

<p><strong>f(2,3)=13</strong></p>

<p><strong>Example 2</strong></p>

<p>If</p>

<p>g(x,y,z)=xyz</p>

<p>find g(2,3,4).</p>

<p>Multiply the three variables:</p>

<p>2×3×4=24</p>

<p>Therefore,</p>

<p><strong>g(2,3,4)=24</strong></p>

<h3>Domain of a Function</h3>

<p>The <strong>domain</strong> of a multivariable function is the set of every input for which the function is defined.</p>

<p>Some functions have no restrictions.</p>

<p>Example:</p>

<p>f(x,y)=x²+y²</p>

<p>Every pair (x,y) works, so the domain is all real numbers.</p>

<p>Other functions have restrictions.</p>

<p>Example:</p>

<p>f(x,y)=√(x−y)</p>

<p>The quantity inside the square root must be nonnegative.</p>

<p>Therefore,</p>

<p>x−y≥0</p>

<p>or</p>

<p>x≥y</p>

<p>This inequality describes the domain.</p>

<h3>Functions of Three Variables</h3>

<p>Many physical problems involve three independent variables.</p>

<p>For example, pressure inside the atmosphere depends on:</p>

<ul>
<li>x-coordinate</li>
<li>y-coordinate</li>
<li>z-coordinate</li>
</ul>

<p>A common example is</p>

<p>f(x,y,z)=x²+y²+z²</p>

<p>This function assigns a number to every point in three-dimensional space.</p>

<h3>Graphs of Functions</h3>

<p>A function of two variables produces a surface instead of a curve.</p>

<p>For example,</p>

<p>z=x²+y²</p>

<p>forms a bowl-shaped surface called a <strong>paraboloid</strong>.</p>

<p>Unlike single-variable calculus, where graphs are curves in the xy-plane, multivariable calculus studies surfaces in three-dimensional space.</p>

<h3>Level Curves</h3>

<p>Instead of graphing the entire surface, we often examine <strong>level curves</strong>.</p>

<p>A level curve is obtained by setting the function equal to a constant.</p>

<p>Example:</p>

<p>x²+y²=4</p>

<p>This represents a circle of radius 2.</p>

<p>Different constants produce different level curves that help visualize the surface.</p>

<h3>Applications</h3>

<p>Functions of several variables appear throughout science and engineering.</p>

<ul>
<li>Weather forecasting</li>
<li>Economics</li>
<li>Machine learning</li>
<li>Engineering design</li>
<li>Computer graphics</li>
<li>Fluid dynamics</li>
<li>Physics</li>
<li>Medical imaging</li>
</ul>

<p>Nearly every modern scientific field uses multivariable functions to model real-world systems.</p>

`,
        questions: [

            {
                q: "A function of several variables has:",
                options: [
                    "Two or more independent variables",
                    "Exactly one independent variable",
                    "No variables",
                    "Only dependent variables"
                ],
                answer: "Two or more independent variables",
                explanation: "Functions of several variables depend on two or more independent variables."
            },

            {
                q: "Which of the following is a function of two variables?",
                options: [
                    "f(x,y)=x²+y²",
                    "f(x)=x²",
                    "g(t)=sin(t)",
                    "h(x)=5x+2"
                ],
                answer: "f(x,y)=x²+y²",
                explanation: "The function depends on both x and y."
            },

            {
                q: "Evaluate f(x,y)=x²+y² at (2,3).",
                options: [
                    "13",
                    "12",
                    "9",
                    "25"
                ],
                answer: "13",
                explanation: "2²+3²=4+9=13."
            },

            {
                q: "Evaluate g(x,y,z)=xyz at (2,3,4).",
                options: [
                    "24",
                    "12",
                    "18",
                    "9"
                ],
                answer: "24",
                explanation: "Multiply the three variables: 2×3×4=24."
            },

            {
                q: "The domain of a multivariable function is:",
                options: [
                    "The set of all allowable input values",
                    "The set of all output values",
                    "The graph of the function",
                    "The derivative of the function"
                ],
                answer: "The set of all allowable input values",
                explanation: "The domain contains every input where the function is defined."
            },

            {
                q: "Which function has no domain restrictions?",
                options: [
                    "f(x,y)=x²+y²",
                    "f(x,y)=√(x−y)",
                    "f(x,y)=1/(x−y)",
                    "f(x,y)=ln(x−y)"
                ],
                answer: "f(x,y)=x²+y²",
                explanation: "Squares are defined for every real number."
            },

            {
                q: "For f(x,y)=√(x−y), which condition must be true?",
                options: [
                    "x≥y",
                    "x≤y",
                    "x=y²",
                    "x+y≥0"
                ],
                answer: "x≥y",
                explanation: "The expression inside a square root must be greater than or equal to zero."
            },

            {
                q: "The graph of a function of two variables is generally a:",
                options: [
                    "Surface",
                    "Line",
                    "Circle",
                    "Vector"
                ],
                answer: "Surface",
                explanation: "Functions of two variables typically produce surfaces in three-dimensional space."
            },

            {
                q: "A level curve is obtained by:",
                options: [
                    "Setting the function equal to a constant",
                    "Taking the derivative",
                    "Finding the domain",
                    "Integrating the function"
                ],
                answer: "Setting the function equal to a constant",
                explanation: "Level curves are created by fixing the function value."
            },

            {
                q: "Which field commonly uses functions of several variables?",
                options: [
                    "Weather forecasting",
                    "Engineering",
                    "Machine learning",
                    "All of the above"
                ],
                answer: "All of the above",
                explanation: "Functions of several variables are fundamental in science, engineering, economics, and many other fields."
            }

        ]

    },
    "calculus3-unit3-lesson2": {

        title: "Limits and Continuity",

        subtitle: "Learn how limits and continuity extend to functions of several variables.",

        body: `

<h2>Limits and Continuity</h2>

<p>In Calculus I, limits described how a function behaved as the input approached a particular value from the left and right. In multivariable calculus, the same idea applies, but now a point can be approached from <strong>infinitely many directions</strong> instead of just two.</p>

<p>This makes limits of functions of several variables much more interesting—and sometimes much more difficult—to evaluate.</p>

<h3>Limits of Functions of Two Variables</h3>

<p>Suppose we have a function</p>

<p>f(x,y)</p>

<p>We write</p>

<p>lim<sub>(x,y)→(a,b)</sub> f(x,y)=L</p>

<p>if the function values become closer and closer to L as the point (x,y) approaches (a,b) from every possible direction.</p>

<p>Unlike single-variable calculus, approaching from only one or two directions is not enough. Since there are infinitely many paths to a point, the limit must be the same along every path.</p>

<h3>Example 1</h3>

<p>Consider</p>

<p>f(x,y)=x+y</p>

<p>Find the limit as (x,y) approaches (2,3).</p>

<p>Because this is a polynomial, we simply substitute the values.</p>

<p>2+3=5</p>

<p>Therefore,</p>

<p><strong>lim<sub>(x,y)→(2,3)</sub>(x+y)=5</strong></p>

<h3>Direct Substitution</h3>

<p>Whenever a multivariable function is continuous, limits are evaluated by direct substitution.</p>

<p>This works for:</p>

<ul>

<li>Polynomials</li>

<li>Exponential functions</li>

<li>Trigonometric functions</li>

<li>Most rational functions where the denominator is not zero</li>

</ul>

<h3>Different Paths</h3>

<p>To determine whether a limit exists, mathematicians often compare the function along different paths.</p>

<p>If two different paths produce different answers, the limit does not exist.</p>

<p>Example:</p>

<p>Approach a point along</p>

<ul>

<li>the x-axis</li>

<li>the y-axis</li>

<li>the line y=x</li>

<li>the parabola y=x²</li>

</ul>

<p>If the answers differ, the limit cannot exist.</p>

<h3>Example 2</h3>

<p>Suppose a function approaches 3 along the x-axis but approaches 5 along the line y=x.</p>

<p>Since different paths produce different values, the limit does not exist.</p>

<h3>When Limits Do Not Exist</h3>

<p>A multivariable limit fails to exist if:</p>

<ul>

<li>Different paths give different answers.</li>

<li>The function grows without bound.</li>

<li>The function oscillates without approaching one value.</li>

</ul>

<h3>Continuity</h3>

<p>A function is <strong>continuous</strong> at a point if:</p>

<ol>

<li>The function exists at that point.</li>

<li>The limit exists.</li>

<li>The limit equals the function value.</li>

</ol>

<p>This definition is exactly the same as in single-variable calculus.</p>

<h3>Continuous Functions</h3>

<p>Many familiar functions are continuous wherever they are defined.</p>

<ul>

<li>Polynomials</li>

<li>Exponential functions</li>

<li>Trigonometric functions</li>

<li>Logarithmic functions (on their domains)</li>

<li>Square root functions (on their domains)</li>

</ul>

<h3>Applications</h3>

<p>Limits and continuity are essential because they allow us to define derivatives, gradients, tangent planes, optimization methods, and multiple integrals later in Calculus III.</p>

<p>Without continuity, many of the techniques developed throughout multivariable calculus would not work.</p>

`,
        questions: [

            {
                q: "A multivariable limit exists only if:",
                options: [
                    "The function approaches the same value along every path",
                    "The function is a polynomial",
                    "The point is the origin",
                    "The function is continuous everywhere"
                ],
                answer: "The function approaches the same value along every path",
                explanation: "Unlike single-variable limits, multivariable limits must agree along every possible path."
            },

            {
                q: "In multivariable calculus, a point can be approached from:",
                options: [
                    "Infinitely many directions",
                    "Only two directions",
                    "Only four directions",
                    "Exactly one direction"
                ],
                answer: "Infinitely many directions",
                explanation: "There are infinitely many possible paths leading to a point in two or more dimensions."
            },

            {
                q: "Evaluate lim(x,y)→(2,3) (x+y).",
                options: [
                    "5",
                    "6",
                    "1",
                    "Does not exist"
                ],
                answer: "5",
                explanation: "Since x+y is a polynomial, substitute directly: 2+3=5."
            },

            {
                q: "Direct substitution works whenever:",
                options: [
                    "The function is continuous at the point",
                    "The variables are positive",
                    "x=y",
                    "The denominator equals zero"
                ],
                answer: "The function is continuous at the point",
                explanation: "Continuous functions allow limits to be evaluated by direct substitution."
            },

            {
                q: "If two different paths give different limit values, then:",
                options: [
                    "The limit does not exist",
                    "The limit equals zero",
                    "The function is continuous",
                    "The limit equals the average of the two values"
                ],
                answer: "The limit does not exist",
                explanation: "A multivariable limit must have the same value along every possible path."
            },

            {
                q: "Which of the following is commonly used to test whether a limit exists?",
                options: [
                    "Approaching along different paths",
                    "Finding the derivative first",
                    "Integrating the function",
                    "Using the quadratic formula"
                ],
                answer: "Approaching along different paths",
                explanation: "Comparing different paths is a common way to determine whether a multivariable limit exists."
            },

            {
                q: "A function is continuous at a point if:",
                options: [
                    "The limit exists, the function exists, and both are equal",
                    "The derivative equals zero",
                    "The function is positive",
                    "The graph passes through the origin"
                ],
                answer: "The limit exists, the function exists, and both are equal",
                explanation: "These are the three requirements for continuity."
            },

            {
                q: "Which of the following functions is continuous everywhere?",
                options: [
                    "f(x,y)=x²+y²",
                    "f(x,y)=1/(x−y)",
                    "f(x,y)=√(x−y)",
                    "f(x,y)=ln(x−y)"
                ],
                answer: "f(x,y)=x²+y²",
                explanation: "Polynomials are continuous for all real values."
            },

            {
                q: "A rational function is continuous wherever:",
                options: [
                    "Its denominator is not zero",
                    "The numerator is zero",
                    "x=y",
                    "The variables are positive"
                ],
                answer: "Its denominator is not zero",
                explanation: "Division by zero is undefined, so rational functions are continuous only where the denominator is nonzero."
            },

            {
                q: "Why are limits and continuity important in Calculus III?",
                options: [
                    "They provide the foundation for derivatives, tangent planes, gradients, and optimization",
                    "They eliminate the need for derivatives",
                    "They are only used for graphing",
                    "They apply only to geometry"
                ],
                answer: "They provide the foundation for derivatives, tangent planes, gradients, and optimization",
                explanation: "Much of multivariable calculus relies on the concepts of limits and continuity."
            }

        ]

    },

    "calculus3-unit3-lesson3": {

        title: "Partial Derivatives",

        subtitle: "Learn how to differentiate functions of several variables one variable at a time.",

        body: `

<h2>Partial Derivatives</h2>

<p>In Calculus I, every function depended on a single variable, so taking a derivative was straightforward. In multivariable calculus, functions often depend on two or more variables. A <strong>partial derivative</strong> measures how a function changes with respect to one variable while keeping all other variables constant.</p>

<h3>What is a Partial Derivative?</h3>

<p>Suppose we have the function</p>

<p>f(x,y)=x²+3xy+y²</p>

<p>To find the partial derivative with respect to x, we treat y as a constant.</p>

<p>The notation is</p>

<p>∂f/∂x or f<sub>x</sub></p>

<p>Differentiate each term:</p>

<ul>

<li>The derivative of x² is 2x.</li>

<li>The derivative of 3xy is 3y because y is treated as a constant.</li>

<li>The derivative of y² is 0 because it is constant with respect to x.</li>

</ul>

<p>Therefore,</p>

<p><strong>∂f/∂x = 2x + 3y</strong></p>

<h3>Partial Derivative with Respect to y</h3>

<p>Now differentiate the same function with respect to y.</p>

<p>This time x is treated as a constant.</p>

<ul>

<li>The derivative of x² is 0.</li>

<li>The derivative of 3xy is 3x.</li>

<li>The derivative of y² is 2y.</li>

</ul>

<p>Therefore,</p>

<p><strong>∂f/∂y = 3x + 2y</strong></p>

<h3>Example</h3>

<p>Find both partial derivatives of</p>

<p>f(x,y)=4x³−2xy+5y²</p>

<p>With respect to x:</p>

<p>∂f/∂x = 12x²−2y</p>

<p>With respect to y:</p>

<p>∂f/∂y = −2x+10y</p>

<h3>Higher-Order Partial Derivatives</h3>

<p>Just as ordinary derivatives can be differentiated again, partial derivatives can also be differentiated multiple times.</p>

<p>For example,</p>

<p>f(x,y)=x²+3xy+y²</p>

<p>First partial derivative:</p>

<p>∂f/∂x = 2x+3y</p>

<p>Differentiate again with respect to x:</p>

<p><strong>∂²f/∂x² = 2</strong></p>

<p>This is called a <strong>second-order partial derivative</strong>.</p>

<h3>Mixed Partial Derivatives</h3>

<p>You can also differentiate with respect to different variables.</p>

<p>For example:</p>

<p>First differentiate with respect to x:</p>

<p>∂f/∂x = 2x+3y</p>

<p>Then differentiate that result with respect to y:</p>

<p><strong>∂²f/∂y∂x = 3</strong></p>

<p>Or reverse the order:</p>

<p>First differentiate with respect to y:</p>

<p>∂f/∂y = 3x+2y</p>

<p>Then differentiate with respect to x:</p>

<p><strong>∂²f/∂x∂y = 3</strong></p>

<p>Notice both mixed partial derivatives are equal.</p>

<h3>Clairaut's Theorem</h3>

<p>For most functions encountered in calculus, the mixed partial derivatives are equal.</p>

<p>That is,</p>

<p>∂²f/∂x∂y = ∂²f/∂y∂x</p>

<p>This important result is known as <strong>Clairaut's Theorem</strong> (also called Schwarz's Theorem).</p>

<p>The theorem applies whenever the second-order partial derivatives are continuous.</p>

<h3>Physical Interpretation</h3>

<p>Partial derivatives describe how a quantity changes when only one variable changes.</p>

<p>Examples include:</p>

<ul>

<li>Temperature changing with east-west movement while north-south position remains fixed.</li>

<li>Profit changing as production increases while advertising stays constant.</li>

<li>Pressure changing with altitude while latitude and longitude remain fixed.</li>

</ul>

<p>Because many real-world systems depend on multiple variables, partial derivatives are fundamental tools in engineering, economics, physics, biology, computer science, and machine learning.</p>

`,
        questions: [

            {
                q: "A partial derivative measures how a function changes with respect to:",
                options: [
                    "One variable while keeping the others constant",
                    "All variables changing together",
                    "The output only",
                    "The graph only"
                ],
                answer: "One variable while keeping the others constant",
                explanation: "When taking a partial derivative, one variable changes while all remaining variables are treated as constants."
            },

            {
                q: "When finding ∂f/∂x, the variable y is treated as:",
                options: [
                    "A constant",
                    "Another derivative",
                    "Zero",
                    "A function of x"
                ],
                answer: "A constant",
                explanation: "To compute ∂f/∂x, every variable except x is considered constant."
            },

            {
                q: "If f(x,y)=x²+3xy+y², what is ∂f/∂x?",
                options: [
                    "2x+3y",
                    "3x+2y",
                    "2x+y²",
                    "x²+3y"
                ],
                answer: "2x+3y",
                explanation: "Differentiate each term with respect to x while treating y as a constant."
            },

            {
                q: "If f(x,y)=x²+3xy+y², what is ∂f/∂y?",
                options: [
                    "3x+2y",
                    "2x+3y",
                    "2y",
                    "3y"
                ],
                answer: "3x+2y",
                explanation: "Treat x as a constant and differentiate each term with respect to y."
            },

            {
                q: "Find ∂f/∂x if f(x,y)=4x³−2xy+5y².",
                options: [
                    "12x²−2y",
                    "12x²+10y",
                    "4x²−2y",
                    "12x²−2x"
                ],
                answer: "12x²−2y",
                explanation: "Differentiate each term with respect to x while treating y as a constant."
            },

            {
                q: "Find ∂f/∂y if f(x,y)=4x³−2xy+5y².",
                options: [
                    "−2x+10y",
                    "12x²−2y",
                    "10y",
                    "−2y+10x"
                ],
                answer: "−2x+10y",
                explanation: "Treat x as a constant while differentiating with respect to y."
            },

            {
                q: "A second-order partial derivative is obtained by:",
                options: [
                    "Taking a partial derivative twice",
                    "Integrating twice",
                    "Finding two functions",
                    "Setting the derivative equal to zero"
                ],
                answer: "Taking a partial derivative twice",
                explanation: "Higher-order partial derivatives are found by differentiating a partial derivative again."
            },

            {
                q: "A mixed partial derivative is found by:",
                options: [
                    "Differentiating with respect to different variables",
                    "Adding two partial derivatives",
                    "Multiplying two derivatives",
                    "Integrating the function"
                ],
                answer: "Differentiating with respect to different variables",
                explanation: "Mixed partial derivatives involve differentiating with respect to one variable and then another."
            },

            {
                q: "According to Clairaut's Theorem, if the second-order partial derivatives are continuous, then:",
                options: [
                    "∂²f/∂x∂y = ∂²f/∂y∂x",
                    "∂f/∂x = ∂f/∂y",
                    "Every derivative equals zero",
                    "The function is constant"
                ],
                answer: "∂²f/∂x∂y = ∂²f/∂y∂x",
                explanation: "Clairaut's Theorem states that the mixed partial derivatives are equal when they are continuous."
            },

            {
                q: "Partial derivatives are commonly used in:",
                options: [
                    "Engineering, physics, economics, and machine learning",
                    "Only geometry",
                    "Only algebra",
                    "Only statistics"
                ],
                answer: "Engineering, physics, economics, and machine learning",
                explanation: "Partial derivatives are fundamental tools in many scientific and engineering disciplines."
            }

        ]

    },
    "calculus3-unit3-lesson4": {

        title: "The Chain Rule and Directional Derivatives",

        subtitle: "Learn how to differentiate composite multivariable functions and measure rates of change in any direction.",

        body: `

<h2>The Chain Rule and Directional Derivatives</h2>

<p>In Calculus I, the <strong>Chain Rule</strong> allowed us to differentiate composite functions. In multivariable calculus, the Chain Rule becomes more powerful because variables often depend on several other variables.</p>

<p>For example, temperature may depend on a location (x,y), while the location itself depends on time. The multivariable Chain Rule connects all of these rates of change.</p>

<h3>The Multivariable Chain Rule</h3>

<p>Suppose</p>

<p>z=f(x,y)</p>

<p>where both x and y depend on t.</p>

<p>That is,</p>

<p>x=x(t)</p>

<p>y=y(t)</p>

<p>The derivative of z with respect to t is found by adding the contributions from both variables.</p>

<p>The Chain Rule tells us that the total rate of change equals the sum of the partial derivative with respect to x multiplied by dx/dt and the partial derivative with respect to y multiplied by dy/dt.</p>

<h3>Example 1</h3>

<p>Suppose</p>

<p>z=x²+y²</p>

<p>where</p>

<p>x=t</p>

<p>y=t²</p>

<p>First compute the partial derivatives.</p>

<ul>

<li>∂z/∂x = 2x</li>

<li>∂z/∂y = 2y</li>

</ul>

<p>Now compute</p>

<ul>

<li>dx/dt = 1</li>

<li>dy/dt = 2t</li>

</ul>

<p>Substituting these values into the Chain Rule gives the rate of change of z with respect to time.</p>

<h3>Directional Derivatives</h3>

<p>A partial derivative measures the rate of change along one coordinate direction, such as the x-axis or y-axis.</p>

<p>Sometimes we want the rate of change in an arbitrary direction.</p>

<p>This is called the <strong>directional derivative</strong>.</p>

<p>The direction must be specified using a <strong>unit vector</strong>.</p>

<h3>Unit Vectors</h3>

<p>A unit vector has magnitude 1.</p>

<p>For example,</p>

<ul>

<li>⟨1,0⟩ points along the positive x-axis.</li>

<li>⟨0,1⟩ points along the positive y-axis.</li>

<li>⟨1/√2,1/√2⟩ points halfway between the x-axis and y-axis.</li>

</ul>

<p>Using unit vectors allows directional derivatives to measure change per unit distance.</p>

<h3>The Gradient Vector</h3>

<p>The gradient vector combines all first-order partial derivatives into a single vector.</p>

<p>For a function of two variables, the gradient is</p>

<p>∇f = ⟨fx, fy⟩</p>

<p>The gradient points in the direction of greatest increase of the function.</p>

<p>It also plays an important role in computing directional derivatives.</p>

<h3>Computing a Directional Derivative</h3>

<p>The directional derivative is found by taking the dot product of the gradient vector with a unit direction vector.</p>

<p>This gives the rate of change of the function as you move in the chosen direction.</p>

<h3>Example 2</h3>

<p>Suppose</p>

<p>f(x,y)=x²+y²</p>

<p>At the point (1,2), the gradient vector is</p>

<p>⟨2,4⟩</p>

<p>If we move along the positive x-axis, represented by the unit vector ⟨1,0⟩, the directional derivative equals the dot product:</p>

<p>⟨2,4⟩·⟨1,0⟩ = 2</p>

<p>This means the function is increasing at a rate of 2 units per unit distance in that direction.</p>

<h3>Applications</h3>

<p>The Chain Rule and directional derivatives have many practical applications.</p>

<ul>

<li>Heat transfer</li>

<li>Weather prediction</li>

<li>Fluid flow</li>

<li>Machine learning</li>

<li>Optimization</li>

<li>Economics</li>

<li>Robotics</li>

<li>Engineering design</li>

</ul>

<p>These concepts help scientists and engineers understand how quantities change when several variables are changing simultaneously and how functions behave in any direction through space.</p>

`,
        questions: [

            {
                q: "The multivariable Chain Rule is used when:",
                options: [
                    "Variables depend on other variables",
                    "The function has only one variable",
                    "The derivative equals zero",
                    "The function is constant"
                ],
                answer: "Variables depend on other variables",
                explanation: "The multivariable Chain Rule computes the rate of change when variables are functions of other variables."
            },

            {
                q: "If z=f(x,y) and both x and y depend on t, then dz/dt depends on:",
                options: [
                    "The contributions from both x and y",
                    "Only x",
                    "Only y",
                    "Neither x nor y"
                ],
                answer: "The contributions from both x and y",
                explanation: "Both variables affect the overall rate of change of z with respect to t."
            },

            {
                q: "A directional derivative measures:",
                options: [
                    "The rate of change in a specified direction",
                    "The area under a curve",
                    "The average value of a function",
                    "The slope of a tangent line only"
                ],
                answer: "The rate of change in a specified direction",
                explanation: "Directional derivatives extend partial derivatives to any direction."
            },

            {
                q: "A partial derivative measures change along:",
                options: [
                    "One coordinate direction",
                    "Every direction simultaneously",
                    "A curved path",
                    "No direction"
                ],
                answer: "One coordinate direction",
                explanation: "Partial derivatives measure change while varying only one variable."
            },

            {
                q: "A direction used in a directional derivative should be represented by:",
                options: [
                    "A unit vector",
                    "Any vector",
                    "A matrix",
                    "A scalar"
                ],
                answer: "A unit vector",
                explanation: "Using a unit vector ensures the rate of change is measured per unit distance."
            },

            {
                q: "A unit vector has magnitude:",
                options: [
                    "1",
                    "0",
                    "2",
                    "It depends on the function"
                ],
                answer: "1",
                explanation: "By definition, every unit vector has length 1."
            },

            {
                q: "The gradient vector of f(x,y) consists of:",
                options: [
                    "The first-order partial derivatives",
                    "The second-order partial derivatives",
                    "The function values",
                    "The unit tangent vector"
                ],
                answer: "The first-order partial derivatives",
                explanation: "The gradient is formed using all first-order partial derivatives."
            },

            {
                q: "The gradient vector points in the direction of:",
                options: [
                    "The greatest increase of the function",
                    "The greatest decrease of the function",
                    "Zero change",
                    "The origin"
                ],
                answer: "The greatest increase of the function",
                explanation: "The gradient always points toward the direction of maximum increase."
            },

            {
                q: "A directional derivative is computed using:",
                options: [
                    "The dot product of the gradient and a unit vector",
                    "The cross product of two vectors",
                    "The determinant of a matrix",
                    "The second derivative"
                ],
                answer: "The dot product of the gradient and a unit vector",
                explanation: "The directional derivative equals the gradient dotted with a unit direction vector."
            },

            {
                q: "The Chain Rule and directional derivatives are commonly applied in:",
                options: [
                    "Engineering, robotics, weather prediction, and machine learning",
                    "Only geometry",
                    "Only algebra",
                    "Only statistics"
                ],
                answer: "Engineering, robotics, weather prediction, and machine learning",
                explanation: "These concepts are widely used to model changing systems involving multiple variables."
            }

        ]

    },
    "calculus3-unit3-lesson5": {

        title: "Gradient Vectors, Tangent Planes, and Linear Approximations",

        subtitle: "Learn how gradients describe the direction of greatest increase and how tangent planes approximate surfaces.",

        body: `

<h2>Gradient Vectors, Tangent Planes, and Linear Approximations</h2>

<p>One of the most important ideas in multivariable calculus is the <strong>gradient vector</strong>. It combines the partial derivatives of a function into a single vector that describes how the function changes at a point.</p>

<p>The gradient is useful because it tells us:</p>

<ul>

<li>The direction in which a function increases the fastest.</li>

<li>How steeply the function increases.</li>

<li>How to construct tangent planes.</li>

<li>How to approximate complicated functions near a point.</li>

</ul>

<h3>The Gradient Vector</h3>

<p>For a function of two variables</p>

<p>f(x,y)</p>

<p>the gradient is written as</p>

<p>∇f</p>

<p>It is formed by placing the first-order partial derivatives into a vector.</p>

<p>For example, if</p>

<p>f(x,y)=x²+y²</p>

<p>then</p>

<ul>

<li>fx=2x</li>

<li>fy=2y</li>

</ul>

<p>Therefore,</p>

<p>∇f=⟨2x,2y⟩</p>

<p>At the point (1,2),</p>

<p>∇f(1,2)=⟨2,4⟩</p>

<h3>Meaning of the Gradient</h3>

<p>The gradient vector always points in the direction of the greatest increase of the function.</p>

<p>Its magnitude tells us how rapidly the function increases in that direction.</p>

<p>If you travel in the opposite direction of the gradient, the function decreases as quickly as possible.</p>

<h3>Tangent Planes</h3>

<p>In single-variable calculus, every smooth curve has a tangent line.</p>

<p>In multivariable calculus, smooth surfaces have <strong>tangent planes</strong>.</p>

<p>A tangent plane touches the surface at one point and provides the best flat approximation to the surface nearby.</p>

<p>The partial derivatives determine the slope of the tangent plane in both the x-direction and the y-direction.</p>

<h3>Example</h3>

<p>Suppose</p>

<p>z=x²+y²</p>

<p>At the point (1,2),</p>

<ul>

<li>fx=2</li>

<li>fy=4</li>

</ul>

<p>These slopes determine the orientation of the tangent plane at that point.</p>

<h3>Normal Vectors</h3>

<p>A vector that is perpendicular to a tangent plane is called a <strong>normal vector</strong>.</p>

<p>Normal vectors are useful for describing surfaces, computing angles between surfaces, and solving optimization problems.</p>

<p>Every tangent plane has infinitely many tangent directions but only one normal direction (up to opposite orientation).</p>

<h3>Linear Approximation</h3>

<p>Complicated functions are often difficult to evaluate exactly.</p>

<p>Near a known point, however, a smooth surface behaves almost like its tangent plane.</p>

<p>This idea is called a <strong>linear approximation</strong>.</p>

<p>Linear approximations allow us to estimate function values quickly without performing lengthy calculations.</p>

<h3>Differentials</h3>

<p>Differentials provide another way to estimate small changes in a function.</p>

<p>If x and y change by very small amounts, the differential estimates how much the function changes.</p>

<p>Differentials are widely used in science and engineering to estimate measurement errors and uncertainty.</p>

<h3>Applications</h3>

<p>Gradient vectors, tangent planes, and linear approximations appear throughout mathematics and science.</p>

<ul>

<li>Computer graphics and 3D modeling</li>

<li>Machine learning optimization</li>

<li>Engineering design</li>

<li>Economics</li>

<li>Physics</li>

<li>Medical imaging</li>

<li>Robotics</li>

<li>Navigation systems</li>

</ul>

<p>These concepts make it possible to understand complicated surfaces and efficiently approximate functions in many practical situations.</p>

`,
        questions: [

            {
                q: "The gradient vector is composed of:",
                options: [
                    "The first-order partial derivatives",
                    "The second-order partial derivatives",
                    "The function values",
                    "The directional derivatives"
                ],
                answer: "The first-order partial derivatives",
                explanation: "The gradient vector contains all first-order partial derivatives of the function."
            },

            {
                q: "The gradient vector points in the direction of:",
                options: [
                    "The greatest increase of the function",
                    "The greatest decrease of the function",
                    "Zero change",
                    "The origin"
                ],
                answer: "The greatest increase of the function",
                explanation: "The gradient always points in the direction where the function increases most rapidly."
            },

            {
                q: "For f(x,y)=x²+y², the gradient is:",
                options: [
                    "⟨2x,2y⟩",
                    "⟨x,y⟩",
                    "⟨2,2⟩",
                    "⟨x²,y²⟩"
                ],
                answer: "⟨2x,2y⟩",
                explanation: "The partial derivatives are fx=2x and fy=2y."
            },

            {
                q: "Evaluate the gradient of f(x,y)=x²+y² at the point (1,2).",
                options: [
                    "⟨2,4⟩",
                    "⟨1,2⟩",
                    "⟨4,8⟩",
                    "⟨3,3⟩"
                ],
                answer: "⟨2,4⟩",
                explanation: "Substitute x=1 and y=2 into ⟨2x,2y⟩."
            },

            {
                q: "A tangent plane is the:",
                options: [
                    "Best flat approximation to a surface near a point",
                    "Curve touching a surface",
                    "Highest point on a surface",
                    "Average value of the function"
                ],
                answer: "Best flat approximation to a surface near a point",
                explanation: "A tangent plane closely approximates a smooth surface near the point of tangency."
            },

            {
                q: "The slopes that determine the orientation of a tangent plane come from:",
                options: [
                    "The partial derivatives",
                    "The second derivatives only",
                    "The function values",
                    "The domain"
                ],
                answer: "The partial derivatives",
                explanation: "The partial derivatives describe the slopes in the coordinate directions."
            },

            {
                q: "A normal vector is:",
                options: [
                    "A vector perpendicular to the tangent plane",
                    "A vector tangent to the surface",
                    "A unit vector only",
                    "A vector parallel to the gradient"
                ],
                answer: "A vector perpendicular to the tangent plane",
                explanation: "A normal vector is perpendicular to the tangent plane. For graphs of functions, the gradient helps determine this normal direction."
            },

            {
                q: "A linear approximation uses the:",
                options: [
                    "Tangent plane to estimate nearby function values",
                    "Second derivative only",
                    "Gradient magnitude only",
                    "Domain of the function"
                ],
                answer: "Tangent plane to estimate nearby function values",
                explanation: "Linear approximations replace a complicated surface with its tangent plane near a known point."
            },

            {
                q: "Differentials are commonly used to:",
                options: [
                    "Estimate small changes and measurement errors",
                    "Find exact solutions only",
                    "Compute definite integrals",
                    "Find vector magnitudes"
                ],
                answer: "Estimate small changes and measurement errors",
                explanation: "Differentials provide useful approximations for small changes in variables."
            },

            {
                q: "Gradient vectors, tangent planes, and linear approximations are widely used in:",
                options: [
                    "Computer graphics, engineering, machine learning, and physics",
                    "Only algebra",
                    "Only geometry",
                    "Only statistics"
                ],
                answer: "Computer graphics, engineering, machine learning, and physics",
                explanation: "These concepts have numerous applications in science, engineering, optimization, graphics, and many other technical fields."
            }

        ]

    },
    "calculus3-unit3-lesson6": {

        title: "Optimization and Applications",

        subtitle: "Learn how to find maximum and minimum values of multivariable functions and apply them to real-world problems.",

        body: `

<h2>Optimization and Applications</h2>

<p>One of the most important applications of multivariable calculus is <strong>optimization</strong>. Optimization involves finding the largest or smallest value of a function while considering one or more variables.</p>

<p>Businesses maximize profits, engineers minimize costs, scientists optimize experiments, and machine learning algorithms optimize prediction accuracy. Calculus provides the mathematical tools to solve these problems.</p>

<h3>Critical Points</h3>

<p>A <strong>critical point</strong> of a function occurs where all first-order partial derivatives are zero or where one or more partial derivatives do not exist.</p>

<p>For a function f(x,y), a critical point satisfies:</p>

<ul>

<li>fx = 0</li>

<li>fy = 0</li>

</ul>

<p>Critical points are candidates for local maximums, local minimums, or saddle points.</p>

<h3>Local Maximum</h3>

<p>A <strong>local maximum</strong> is a point where the function has a greater value than all nearby points.</p>

<p>Imagine standing on the top of a hill. Every nearby direction leads downward.</p>

<h3>Local Minimum</h3>

<p>A <strong>local minimum</strong> is a point where the function has a smaller value than all nearby points.</p>

<p>Imagine standing at the bottom of a bowl. Every nearby direction leads upward.</p>

<h3>Saddle Points</h3>

<p>Some critical points are neither maximums nor minimums.</p>

<p>These are called <strong>saddle points</strong>.</p>

<p>A saddle point curves upward in one direction and downward in another, similar to the shape of a horse saddle.</p>

<p>For example, the function</p>

<p>z = x² − y²</p>

<p>has a saddle point at the origin.</p>

<h3>The Second Derivative Test</h3>

<p>After finding a critical point, we often use the <strong>Second Derivative Test</strong> to classify it.</p>

<p>The test uses the second-order partial derivatives of the function to determine whether the point is a local maximum, local minimum, or saddle point.</p>

<p>If the test is inconclusive, other techniques may be required.</p>

<h3>Constrained Optimization</h3>

<p>Sometimes optimization problems include restrictions called <strong>constraints</strong>.</p>

<p>Examples include:</p>

<ul>

<li>A fixed budget</li>

<li>A limited amount of material</li>

<li>A required production capacity</li>

<li>A specified surface area</li>

</ul>

<p>More advanced constrained optimization uses a technique called <strong>Lagrange Multipliers</strong>, which will be studied later in Calculus III.</p>

<h3>Real-World Applications</h3>

<p>Optimization appears throughout science, engineering, economics, and technology.</p>

<ul>

<li>Maximizing company profits</li>

<li>Minimizing manufacturing costs</li>

<li>Designing efficient aircraft and automobiles</li>

<li>Optimizing machine learning models</li>

<li>Finding the shortest or fastest routes</li>

<li>Reducing energy consumption</li>

<li>Medical treatment planning</li>

<li>Resource allocation</li>

</ul>

<h3>Summary</h3>

<p>Optimization combines many ideas learned throughout this unit, including partial derivatives, gradients, and tangent planes. By identifying critical points and analyzing the behavior of a function nearby, we can solve practical problems involving maximums and minimums in many different fields.</p>

`,
        questions: [

            {
                q: "The primary goal of optimization is to:",
                options: [
                    "Find the maximum or minimum value of a function",
                    "Find the derivative only",
                    "Compute definite integrals",
                    "Draw the graph"
                ],
                answer: "Find the maximum or minimum value of a function",
                explanation: "Optimization is the process of finding the largest or smallest values of a function."
            },

            {
                q: "A critical point occurs when:",
                options: [
                    "All first-order partial derivatives are zero or do not exist",
                    "The function equals zero",
                    "All second-order partial derivatives are zero",
                    "The gradient has magnitude one"
                ],
                answer: "All first-order partial derivatives are zero or do not exist",
                explanation: "Critical points occur where the first-order partial derivatives are zero or undefined."
            },

            {
                q: "To find the critical points of f(x,y), you solve:",
                options: [
                    "fx=0 and fy=0",
                    "f=0",
                    "fxx=0 only",
                    "∇f=1"
                ],
                answer: "fx=0 and fy=0",
                explanation: "Critical points are found by setting the first-order partial derivatives equal to zero."
            },

            {
                q: "A local maximum is a point where:",
                options: [
                    "The function has a greater value than all nearby points",
                    "The function has a smaller value than all nearby points",
                    "The function equals zero",
                    "The derivative does not exist"
                ],
                answer: "The function has a greater value than all nearby points",
                explanation: "A local maximum is higher than every nearby point."
            },

            {
                q: "A local minimum is a point where:",
                options: [
                    "The function has a smaller value than all nearby points",
                    "The function has a greater value than all nearby points",
                    "The function is undefined",
                    "The gradient is zero everywhere"
                ],
                answer: "The function has a smaller value than all nearby points",
                explanation: "A local minimum is lower than every nearby point."
            },

            {
                q: "A saddle point is:",
                options: [
                    "A critical point that is neither a maximum nor a minimum",
                    "A point where the function is undefined",
                    "The highest point on a surface",
                    "The lowest point on a surface"
                ],
                answer: "A critical point that is neither a maximum nor a minimum",
                explanation: "A saddle point increases in some directions and decreases in others."
            },

            {
                q: "The function z=x²−y² has a:",
                options: [
                    "Saddle point at the origin",
                    "Local maximum at the origin",
                    "Local minimum at the origin",
                    "Vertical asymptote"
                ],
                answer: "Saddle point at the origin",
                explanation: "The surface curves upward in one direction and downward in the other."
            },

            {
                q: "The Second Derivative Test is used to:",
                options: [
                    "Classify critical points",
                    "Find the domain",
                    "Compute definite integrals",
                    "Evaluate limits"
                ],
                answer: "Classify critical points",
                explanation: "The Second Derivative Test helps determine whether a critical point is a maximum, minimum, or saddle point."
            },

            {
                q: "Optimization problems with restrictions are called:",
                options: [
                    "Constrained optimization problems",
                    "Linear approximation problems",
                    "Directional derivative problems",
                    "Continuity problems"
                ],
                answer: "Constrained optimization problems",
                explanation: "Constraints limit the possible solutions to an optimization problem."
            },

            {
                q: "Which of the following is a common real-world application of optimization?",
                options: [
                    "Maximizing profits and minimizing costs",
                    "Finding the alphabetically first variable",
                    "Counting the number of derivatives",
                    "Drawing level curves only"
                ],
                answer: "Maximizing profits and minimizing costs",
                explanation: "Optimization is widely used in business, engineering, science, economics, and machine learning to improve outcomes."
            }

        ]

    },
    "calculus3-unit3-review": {

        title: "Unit 3 Review",

        subtitle: "Review Functions of Several Variables and Partial Derivatives before taking the Unit 3 Test.",

        body: `

<h2>Unit 3 Review</h2>

<p>This review summarizes the major concepts from Unit 3. Before taking the unit test, make sure you understand each topic and can solve problems involving multivariable functions, partial derivatives, gradients, tangent planes, and optimization.</p>

<h2>Lesson 1 Review: Functions of Several Variables</h2>

<ul>

<li>Functions may depend on two or more independent variables.</li>

<li>The domain consists of every allowable input.</li>

<li>The graph of a function of two variables is usually a surface.</li>

<li>Level curves are obtained by setting the function equal to a constant.</li>

<li>Functions of several variables appear throughout science, engineering, economics, and computer graphics.</li>

</ul>

<h2>Lesson 2 Review: Limits and Continuity</h2>

<ul>

<li>Limits must approach the same value from every possible path.</li>

<li>Different paths producing different values mean the limit does not exist.</li>

<li>Continuous functions allow direct substitution.</li>

<li>Continuity is essential for defining derivatives and optimization.</li>

</ul>

<h2>Lesson 3 Review: Partial Derivatives</h2>

<ul>

<li>Differentiate with respect to one variable while treating the others as constants.</li>

<li>Higher-order partial derivatives are obtained by differentiating again.</li>

<li>Mixed partial derivatives differentiate with respect to different variables.</li>

<li>Clairaut's Theorem states that mixed partial derivatives are equal when the required continuity conditions are satisfied.</li>

</ul>

<h2>Lesson 4 Review: The Chain Rule and Directional Derivatives</h2>

<ul>

<li>The multivariable Chain Rule computes rates of change when variables depend on other variables.</li>

<li>Directional derivatives measure the rate of change in any specified direction.</li>

<li>Directional derivatives require a unit direction vector.</li>

<li>The gradient vector is used to compute directional derivatives.</li>

</ul>

<h2>Lesson 5 Review: Gradient Vectors, Tangent Planes, and Linear Approximations</h2>

<ul>

<li>The gradient points in the direction of greatest increase.</li>

<li>Tangent planes approximate surfaces near a point.</li>

<li>Normal vectors are perpendicular to tangent planes.</li>

<li>Linear approximations estimate nearby function values.</li>

<li>Differentials estimate small changes and measurement errors.</li>

</ul>

<h2>Lesson 6 Review: Optimization and Applications</h2>

<ul>

<li>Critical points occur where first-order partial derivatives are zero or undefined.</li>

<li>Critical points may be local maxima, local minima, or saddle points.</li>

<li>The Second Derivative Test helps classify critical points.</li>

<li>Optimization is widely used in engineering, economics, robotics, logistics, and machine learning.</li>

</ul>

<h2>Important Concepts to Remember</h2>

<ul>

<li>Functions of several variables</li>

<li>Domains</li>

<li>Level curves</li>

<li>Limits and continuity</li>

<li>Partial derivatives</li>

<li>Higher-order derivatives</li>

<li>Mixed partial derivatives</li>

<li>Clairaut's Theorem</li>

<li>Chain Rule</li>

<li>Directional derivatives</li>

<li>Gradient vectors</li>

<li>Tangent planes</li>

<li>Normal vectors</li>

<li>Linear approximations</li>

<li>Differentials</li>

<li>Critical points</li>

<li>Local maxima</li>

<li>Local minima</li>

<li>Saddle points</li>

<li>Optimization</li>

</ul>

<h2>Mixed Review Questions</h2>

`,

        questions: [

            {
                q: "A function of several variables has:",
                options: [
                    "Two or more independent variables",
                    "Only one independent variable",
                    "No variables",
                    "Only dependent variables"
                ],
                answer: "Two or more independent variables",
                explanation: "Multivariable functions depend on two or more independent variables."
            },

            {
                q: "The graph of a function of two variables is generally a:",
                options: [
                    "Surface",
                    "Line",
                    "Circle",
                    "Vector"
                ],
                answer: "Surface",
                explanation: "Functions of two variables typically produce surfaces in three-dimensional space."
            },

            {
                q: "A level curve is obtained by:",
                options: [
                    "Setting the function equal to a constant",
                    "Taking a derivative",
                    "Finding the domain",
                    "Finding the gradient"
                ],
                answer: "Setting the function equal to a constant",
                explanation: "Level curves represent points where the function has a constant value."
            },

            {
                q: "A multivariable limit exists only if:",
                options: [
                    "All paths approach the same value",
                    "Only the x-axis gives the same value",
                    "The function is a polynomial",
                    "The derivative exists"
                ],
                answer: "All paths approach the same value",
                explanation: "Every possible path must produce the same limiting value."
            },

            {
                q: "A function is continuous if:",
                options: [
                    "The limit exists, the function exists, and they are equal",
                    "The derivative equals zero",
                    "The graph passes through the origin",
                    "It has no critical points"
                ],
                answer: "The limit exists, the function exists, and they are equal",
                explanation: "These are the three conditions for continuity."
            },

            {
                q: "When finding ∂f/∂x, the variable y is treated as:",
                options: [
                    "A constant",
                    "Zero",
                    "A derivative",
                    "A function of x"
                ],
                answer: "A constant",
                explanation: "Only x changes while y remains fixed."
            },

            {
                q: "Mixed partial derivatives differentiate with respect to:",
                options: [
                    "Different variables",
                    "The same variable twice",
                    "No variables",
                    "Only x"
                ],
                answer: "Different variables",
                explanation: "Mixed partial derivatives involve two different variables."
            },

            {
                q: "Clairaut's Theorem states that:",
                options: [
                    "Mixed partial derivatives are equal when continuous",
                    "Every derivative equals zero",
                    "Every function is continuous",
                    "The gradient always equals zero"
                ],
                answer: "Mixed partial derivatives are equal when continuous",
                explanation: "This theorem applies when the required continuity conditions are satisfied."
            },

            {
                q: "The gradient vector points in the direction of:",
                options: [
                    "Greatest increase",
                    "Greatest decrease",
                    "No change",
                    "The origin"
                ],
                answer: "Greatest increase",
                explanation: "The gradient points toward the direction of maximum increase."
            },

            {
                q: "Critical points are candidates for:",
                options: [
                    "Local maxima, local minima, and saddle points",
                    "Only local maxima",
                    "Only saddle points",
                    "Only local minima"
                ],
                answer: "Local maxima, local minima, and saddle points",
                explanation: "Every critical point must be classified before determining its behavior."
            },
            {
                q: "The multivariable Chain Rule is used when:",
                options: [
                    "Variables depend on other variables",
                    "The function has one variable only",
                    "The derivative is zero",
                    "The function is constant"
                ],
                answer: "Variables depend on other variables",
                explanation: "The Chain Rule relates the rates of change when variables themselves depend on other variables."
            },

            {
                q: "A directional derivative measures:",
                options: [
                    "The rate of change in a specified direction",
                    "The average value of a function",
                    "The total area under a surface",
                    "The domain of a function"
                ],
                answer: "The rate of change in a specified direction",
                explanation: "Directional derivatives measure how rapidly a function changes in any chosen direction."
            },

            {
                q: "A directional derivative is computed using:",
                options: [
                    "The dot product of the gradient and a unit vector",
                    "The cross product of two vectors",
                    "The determinant of a matrix",
                    "The Hessian matrix"
                ],
                answer: "The dot product of the gradient and a unit vector",
                explanation: "The directional derivative equals the gradient dotted with the chosen unit direction vector."
            },

            {
                q: "The gradient vector consists of:",
                options: [
                    "All first-order partial derivatives",
                    "All second-order partial derivatives",
                    "Only the x-derivative",
                    "The function values"
                ],
                answer: "All first-order partial derivatives",
                explanation: "The gradient combines the first-order partial derivatives into a single vector."
            },

            {
                q: "A tangent plane provides:",
                options: [
                    "A flat approximation of a surface near a point",
                    "The exact graph of the function",
                    "A level curve",
                    "The domain of the function"
                ],
                answer: "A flat approximation of a surface near a point",
                explanation: "Near the point of tangency, the tangent plane closely approximates the surface."
            },

            {
                q: "A normal vector is:",
                options: [
                    "Perpendicular to the tangent plane",
                    "Parallel to every tangent direction",
                    "The same as the position vector",
                    "Always a unit vector"
                ],
                answer: "Perpendicular to the tangent plane",
                explanation: "Normal vectors are perpendicular to the tangent plane and help describe the orientation of the surface."
            },

            {
                q: "Linear approximations are most accurate:",
                options: [
                    "Near the point of tangency",
                    "Far from the point of tangency",
                    "Only at the origin",
                    "Only when the function is linear"
                ],
                answer: "Near the point of tangency",
                explanation: "The tangent plane is a good approximation only near the point where it touches the surface."
            },

            {
                q: "A critical point occurs when:",
                options: [
                    "All first-order partial derivatives are zero or undefined",
                    "The function equals zero",
                    "The gradient has magnitude one",
                    "The second derivatives are zero"
                ],
                answer: "All first-order partial derivatives are zero or undefined",
                explanation: "Critical points are found where the first-order partial derivatives vanish or fail to exist."
            },

            {
                q: "The Second Derivative Test is used to:",
                options: [
                    "Classify critical points",
                    "Find the domain",
                    "Compute gradients",
                    "Evaluate limits"
                ],
                answer: "Classify critical points",
                explanation: "The test determines whether a critical point is a local maximum, local minimum, or saddle point."
            },

            {
                q: "Which statement best summarizes Unit 3?",
                options: [
                    "Multivariable calculus extends single-variable calculus to functions with multiple inputs and uses derivatives to analyze and optimize them.",
                    "Every multivariable function has only one variable.",
                    "Partial derivatives eliminate the need for limits.",
                    "Optimization never uses derivatives."
                ],
                answer: "Multivariable calculus extends single-variable calculus to functions with multiple inputs and uses derivatives to analyze and optimize them.",
                explanation: "Unit 3 introduces functions of several variables, their derivatives, gradients, tangent planes, and optimization techniques."
            }

        ]

    },
    "calculus3-unit3-test": {

        title: "Unit 3 Test",

        subtitle: "Test your understanding of Functions of Several Variables, Partial Derivatives, Gradients, and Optimization.",

        body: `

<h2>Unit 3 Test</h2>

<p>This assessment covers everything learned in Unit 3.</p>

<p>The test includes questions from:</p>

<ul>

<li>Functions of Several Variables</li>

<li>Limits and Continuity</li>

<li>Partial Derivatives</li>

<li>The Chain Rule</li>

<li>Directional Derivatives</li>

<li>Gradient Vectors</li>

<li>Tangent Planes</li>

<li>Linear Approximations</li>

<li>Optimization</li>

</ul>

<p>Select the best answer for each question before checking your results.</p>

`,

        questions: [

            {
                q: "A function of several variables has:",
                options: [
                    "Two or more independent variables",
                    "Exactly one independent variable",
                    "No independent variables",
                    "Only dependent variables"
                ],
                answer: "Two or more independent variables",
                explanation: "Multivariable functions depend on two or more independent variables."
            },

            {
                q: "The graph of a function of two variables is generally a:",
                options: [
                    "Surface",
                    "Line",
                    "Circle",
                    "Plane"
                ],
                answer: "Surface",
                explanation: "Functions of two variables are typically represented as surfaces in three-dimensional space."
            },

            {
                q: "The domain of a multivariable function is:",
                options: [
                    "The set of all allowable input values",
                    "The range of the function",
                    "The graph of the function",
                    "The derivative"
                ],
                answer: "The set of all allowable input values",
                explanation: "The domain consists of every input where the function is defined."
            },

            {
                q: "A level curve is found by:",
                options: [
                    "Setting the function equal to a constant",
                    "Taking a derivative",
                    "Finding the gradient",
                    "Finding the domain"
                ],
                answer: "Setting the function equal to a constant",
                explanation: "Level curves represent locations where the function has a constant value."
            },

            {
                q: "A multivariable limit exists only if:",
                options: [
                    "Every path approaches the same value",
                    "Only one path approaches a value",
                    "The function is continuous",
                    "The derivative exists"
                ],
                answer: "Every path approaches the same value",
                explanation: "Different paths giving different values mean the limit does not exist."
            },

            {
                q: "A function is continuous at a point when:",
                options: [
                    "The limit exists, the function exists, and they are equal",
                    "The derivative equals zero",
                    "The graph passes through the origin",
                    "The function has no critical points"
                ],
                answer: "The limit exists, the function exists, and they are equal",
                explanation: "These are the three requirements for continuity."
            },

            {
                q: "When computing ∂f/∂x, the variable y is treated as:",
                options: [
                    "A constant",
                    "Zero",
                    "A derivative",
                    "A function of x"
                ],
                answer: "A constant",
                explanation: "Only x changes while all other variables remain fixed."
            },

            {
                q: "Higher-order partial derivatives are obtained by:",
                options: [
                    "Differentiating more than once",
                    "Integrating the function",
                    "Finding the domain",
                    "Computing limits"
                ],
                answer: "Differentiating more than once",
                explanation: "Second-order and higher-order partial derivatives come from repeated differentiation."
            },

            {
                q: "Mixed partial derivatives involve:",
                options: [
                    "Different variables",
                    "The same variable twice",
                    "No variables",
                    "Only x"
                ],
                answer: "Different variables",
                explanation: "Mixed partial derivatives differentiate with respect to different variables."
            },

            {
                q: "Clairaut's Theorem states that:",
                options: [
                    "Mixed partial derivatives are equal under appropriate continuity conditions",
                    "Every derivative equals zero",
                    "Every function is continuous",
                    "Every limit exists"
                ],
                answer: "Mixed partial derivatives are equal under appropriate continuity conditions",
                explanation: "If the required continuity conditions are satisfied, the mixed partial derivatives are equal."
            },

            {
                q: "The multivariable Chain Rule is used when:",
                options: [
                    "Variables depend on other variables",
                    "The function is linear",
                    "The derivative is zero",
                    "The function is constant"
                ],
                answer: "Variables depend on other variables",
                explanation: "The Chain Rule relates rates of change through intermediate variables."
            },

            {
                q: "A directional derivative measures:",
                options: [
                    "The rate of change in a chosen direction",
                    "The average value of a function",
                    "The maximum value of a function",
                    "The area under a surface"
                ],
                answer: "The rate of change in a chosen direction",
                explanation: "Directional derivatives generalize partial derivatives to any direction."
            },

            {
                q: "Directional derivatives require:",
                options: [
                    "A unit vector",
                    "A matrix",
                    "A scalar",
                    "A second derivative"
                ],
                answer: "A unit vector",
                explanation: "The direction vector is normalized so the rate of change is measured per unit distance."
            },
            {
                q: "The gradient vector is composed of:",
                options: [
                    "The first-order partial derivatives",
                    "The second-order partial derivatives",
                    "The function values",
                    "The directional derivatives"
                ],
                answer: "The first-order partial derivatives",
                explanation: "The gradient combines all first-order partial derivatives into a single vector."
            },

            {
                q: "The gradient points in the direction of:",
                options: [
                    "The greatest increase of the function",
                    "The greatest decrease of the function",
                    "Zero change",
                    "The origin"
                ],
                answer: "The greatest increase of the function",
                explanation: "The gradient always points toward the direction where the function increases most rapidly."
            },

            {
                q: "For f(x,y)=x²+y², the gradient is:",
                options: [
                    "⟨2x,2y⟩",
                    "⟨x,y⟩",
                    "⟨2,2⟩",
                    "⟨x²,y²⟩"
                ],
                answer: "⟨2x,2y⟩",
                explanation: "The partial derivatives are fx=2x and fy=2y."
            },

            {
                q: "A tangent plane is:",
                options: [
                    "The best flat approximation to a surface near a point",
                    "A curve that touches a surface",
                    "A level curve",
                    "A normal vector"
                ],
                answer: "The best flat approximation to a surface near a point",
                explanation: "A tangent plane closely approximates a smooth surface near the point of tangency."
            },

            {
                q: "A vector perpendicular to a tangent plane is called:",
                options: [
                    "A normal vector",
                    "A tangent vector",
                    "A position vector",
                    "A direction vector"
                ],
                answer: "A normal vector",
                explanation: "Normal vectors are perpendicular to tangent planes and describe the orientation of the surface."
            },

            {
                q: "Linear approximations are most accurate:",
                options: [
                    "Near the point of tangency",
                    "Far from the point of tangency",
                    "Only at the origin",
                    "For every point equally"
                ],
                answer: "Near the point of tangency",
                explanation: "The tangent plane provides the best local approximation to a surface."
            },

            {
                q: "A critical point occurs where:",
                options: [
                    "All first-order partial derivatives are zero or undefined",
                    "The function equals zero",
                    "The gradient has magnitude one",
                    "All second-order partial derivatives equal zero"
                ],
                answer: "All first-order partial derivatives are zero or undefined",
                explanation: "Critical points occur where the first-order partial derivatives vanish or do not exist."
            },

            {
                q: "A saddle point is:",
                options: [
                    "A critical point that is neither a local maximum nor a local minimum",
                    "The highest point on a surface",
                    "The lowest point on a surface",
                    "A point where the function is undefined"
                ],
                answer: "A critical point that is neither a local maximum nor a local minimum",
                explanation: "Saddle points increase in some directions and decrease in others."
            },

            {
                q: "The Second Derivative Test is primarily used to:",
                options: [
                    "Classify critical points",
                    "Find the domain",
                    "Evaluate limits",
                    "Calculate directional derivatives"
                ],
                answer: "Classify critical points",
                explanation: "It helps determine whether a critical point is a local maximum, local minimum, or saddle point."
            },

            {
                q: "Optimization problems with restrictions are known as:",
                options: [
                    "Constrained optimization problems",
                    "Directional derivative problems",
                    "Partial differentiation problems",
                    "Continuity problems"
                ],
                answer: "Constrained optimization problems",
                explanation: "Constraints limit the possible solutions of an optimization problem."
            },

            {
                q: "Which technique is commonly used later in Calculus III to solve constrained optimization problems?",
                options: [
                    "Lagrange Multipliers",
                    "Integration by Parts",
                    "Partial Fractions",
                    "Euler's Method"
                ],
                answer: "Lagrange Multipliers",
                explanation: "Lagrange Multipliers provide a systematic method for optimizing functions subject to constraints."
            },

            {
                q: "Which statement best summarizes Unit 3?",
                options: [
                    "Multivariable calculus extends calculus to functions with multiple variables, allowing us to analyze surfaces, compute rates of change, and solve optimization problems.",
                    "Every multivariable function has exactly one variable.",
                    "Partial derivatives replace all other calculus concepts.",
                    "Optimization can only be performed on single-variable functions."
                ],
                answer: "Multivariable calculus extends calculus to functions with multiple variables, allowing us to analyze surfaces, compute rates of change, and solve optimization problems.",
                explanation: "Unit 3 introduced functions of several variables, limits, continuity, partial derivatives, gradients, tangent planes, and optimization."

            }

        ]

    },
    "calculus3-unit4-lesson1": {

        title: "Double Integrals over Rectangular Regions",

        subtitle: "Learn how double integrals extend single-variable integration to calculate area, volume, and total accumulation over rectangular regions.",

        body: `

<h2>Double Integrals over Rectangular Regions</h2>

<p>In single-variable calculus, a definite integral calculates the accumulated quantity along an interval. In multivariable calculus, a <strong>double integral</strong> extends this idea to functions of two variables, allowing us to measure quantities over entire regions in the plane.</p>

<p>Double integrals are used to calculate:</p>

<ul>

<li>Volumes under surfaces</li>

<li>Areas of regions</li>

<li>Total mass of thin plates</li>

<li>Average values of functions</li>

<li>Probability distributions</li>

<li>Electric charge and heat distributions</li>

</ul>

<h3>From Single to Double Integrals</h3>

<p>A single integral adds infinitely many small line segments together.</p>

<p>A double integral adds infinitely many tiny rectangles together.</p>

<p>Instead of moving along a line, we now integrate over a two-dimensional region.</p>

<h3>Rectangular Regions</h3>

<p>The simplest regions are rectangles.</p>

<p>A rectangular region is bounded by constant values of x and y.</p>

<p>For example, suppose:</p>

<ul>

<li>a ≤ x ≤ b</li>

<li>c ≤ y ≤ d</li>

</ul>

<p>Every point inside these boundaries belongs to the region of integration.</p>

<h3>The Double Integral</h3>

<p>The notation for a double integral is:</p>

<p>∬R f(x,y) dA</p>

<p>Here:</p>

<ul>

<li>R is the region of integration.</li>

<li>f(x,y) is the function being accumulated.</li>

<li>dA represents an infinitesimally small area element.</li>

</ul>

<h3>Iterated Integrals</h3>

<p>Most double integrals are evaluated as <strong>iterated integrals</strong>, meaning we integrate one variable at a time.</p>

<p>For rectangular regions, we may integrate:</p>

<ul>

<li>With respect to x first, then y.</li>

<li>With respect to y first, then x.</li>

</ul>

<p>If the limits are constant, either order produces the same result.</p>

<h3>Example</h3>

<p>Suppose we wish to evaluate:</p>

<p>f(x,y)=x+y</p>

<p>over the rectangle</p>

<ul>

<li>0 ≤ x ≤ 2</li>

<li>0 ≤ y ≤ 3</li>

</ul>

<p>We integrate one variable while treating the other as a constant, then evaluate the remaining integral.</p>

<p>The result represents the total accumulation of the function over the rectangular region.</p>

<h3>Area as a Double Integral</h3>

<p>If the function equals 1 everywhere, the double integral simply computes the area of the region.</p>

<p>This is the multivariable equivalent of summing tiny pieces of area.</p>

<h3>Volume Under a Surface</h3>

<p>If the function is positive, the double integral computes the volume between the surface and the xy-plane.</p>

<p>Higher function values contribute more volume, while lower values contribute less.</p>

<h3>Applications</h3>

<p>Double integrals are widely used in many disciplines.</p>

<ul>

<li>Finding the volume of irregular solids</li>

<li>Computing the mass of thin plates with varying density</li>

<li>Calculating probability over two-dimensional regions</li>

<li>Determining average temperatures across a surface</li>

<li>Modeling rainfall across geographic regions</li>

<li>Engineering stress analysis</li>

<li>Computer graphics</li>

<li>Fluid flow analysis</li>

</ul>

<p>Double integrals provide one of the most important tools in multivariable calculus because they allow us to measure accumulated quantities over entire regions instead of along a single line.</p>

`,
        questions: [

            {
                q: "A double integral is used to measure:",
                options: [
                    "Accumulation over a two-dimensional region",
                    "Only the slope of a curve",
                    "The derivative of a function",
                    "The length of a line segment"
                ],
                answer: "Accumulation over a two-dimensional region",
                explanation: "A double integral extends integration to functions of two variables and measures accumulated quantities over an area."
            },

            {
                q: "A rectangular region is bounded by:",
                options: [
                    "Constant values of x and y",
                    "Curved boundaries only",
                    "Three variables",
                    "Polar coordinates"
                ],
                answer: "Constant values of x and y",
                explanation: "Rectangular regions have constant lower and upper bounds for both x and y."
            },

            {
                q: "In the notation ∬R f(x,y) dA, the symbol R represents:",
                options: [
                    "The region of integration",
                    "The range of the function",
                    "The result of the integral",
                    "The radius of a circle"
                ],
                answer: "The region of integration",
                explanation: "R specifies the area over which the function is integrated."
            },

            {
                q: "The symbol dA represents:",
                options: [
                    "An infinitesimally small area element",
                    "A derivative",
                    "A direction vector",
                    "A distance measurement"
                ],
                answer: "An infinitesimally small area element",
                explanation: "The notation dA represents a tiny piece of area used in the summation process."
            },

            {
                q: "A double integral evaluated as two single integrals is called:",
                options: [
                    "An iterated integral",
                    "A partial derivative",
                    "A line integral",
                    "A surface integral"
                ],
                answer: "An iterated integral",
                explanation: "Iterated integrals evaluate one variable at a time."
            },

            {
                q: "For a rectangular region with constant limits, the order of integration:",
                options: [
                    "Can be reversed without changing the answer",
                    "Must always be x then y",
                    "Must always be y then x",
                    "Cannot be changed"
                ],
                answer: "Can be reversed without changing the answer",
                explanation: "For rectangular regions with constant limits, either order of integration gives the same result."
            },

            {
                q: "If f(x,y)=1 everywhere on a region, the double integral computes the:",
                options: [
                    "Area of the region",
                    "Volume of a sphere",
                    "Slope of the surface",
                    "Gradient vector"
                ],
                answer: "Area of the region",
                explanation: "Integrating the constant function 1 over a region gives its area."
            },

            {
                q: "If f(x,y) is positive over a region, the double integral represents the:",
                options: [
                    "Volume under the surface",
                    "Length of a curve",
                    "Direction of maximum increase",
                    "Perimeter of the region"
                ],
                answer: "Volume under the surface",
                explanation: "A positive function produces the volume between the surface and the xy-plane."
            },

            {
                q: "When evaluating the inner integral of an iterated integral, the other variable is treated as:",
                options: [
                    "A constant",
                    "Zero",
                    "A function of time",
                    "A gradient"
                ],
                answer: "A constant",
                explanation: "The variable not being integrated is treated as a constant during that step."
            },

            {
                q: "Which of the following is a common application of double integrals?",
                options: [
                    "Finding the mass of a thin plate with varying density",
                    "Finding the roots of a quadratic equation",
                    "Computing the slope of a tangent line",
                    "Solving a system of linear equations"
                ],
                answer: "Finding the mass of a thin plate with varying density",
                explanation: "Double integrals are commonly used to compute mass, volume, probability, heat distribution, and other accumulated quantities over regions."
            }

        ]

    },

    "calculus3-unit4-lesson2": {

        title: "Double Integrals over General Regions",

        subtitle: "Learn how to evaluate double integrals over non-rectangular regions using variable limits of integration.",

        body: `

<h2>Double Integrals over General Regions</h2>

<p>Not every region in the plane is a rectangle. Many practical problems involve curved boundaries such as circles, parabolas, triangles, or irregular shapes. To integrate over these regions, we use <strong>variable limits of integration</strong>.</p>

<p>General regions allow double integrals to model much more realistic situations in science, engineering, economics, and physics.</p>

<h3>General Regions</h3>

<p>A general region is one whose boundaries are described by equations rather than constant values.</p>

<p>For example, a region may be bounded by:</p>

<ul>

<li>A parabola</li>

<li>A line</li>

<li>A circle</li>

<li>Another curve</li>

</ul>

<p>Unlike rectangular regions, the limits of one variable depend on the value of the other variable.</p>

<h3>Type I Regions</h3>

<p>A <strong>Type I region</strong> is described by vertical slices.</p>

<p>The x-values remain between two constants.</p>

<p>For each x-value, the y-values vary between two functions.</p>

<p>The limits have the general form:</p>

<ul>

<li>a ≤ x ≤ b</li>

<li>g₁(x) ≤ y ≤ g₂(x)</li>

</ul>

<p>We integrate with respect to y first, followed by x.</p>

<h3>Type II Regions</h3>

<p>A <strong>Type II region</strong> is described by horizontal slices.</p>

<p>The y-values remain between two constants.</p>

<p>For each y-value, the x-values vary between two functions.</p>

<p>The limits have the general form:</p>

<ul>

<li>c ≤ y ≤ d</li>

<li>h₁(y) ≤ x ≤ h₂(y)</li>

</ul>

<p>We integrate with respect to x first, followed by y.</p>

<h3>Choosing the Order of Integration</h3>

<p>Many regions can be described using either vertical or horizontal slices.</p>

<p>Choosing the easier order of integration often simplifies the calculations considerably.</p>

<p>Sometimes one order requires complicated limits while the other produces simple expressions.</p>

<h3>Example</h3>

<p>Suppose the region is bounded by:</p>

<ul>

<li>y = x²</li>

<li>y = 4</li>

</ul>

<p>Using vertical slices:</p>

<ul>

<li>x ranges from -2 to 2.</li>

<li>For each x, y ranges from x² to 4.</li>

</ul>

<p>This produces a Type I integral.</p>

<h3>Sketching the Region</h3>

<p>Before evaluating a double integral over a general region, it is helpful to sketch the boundaries.</p>

<p>A sketch helps identify:</p>

<ul>

<li>The shape of the region</li>

<li>The correct limits</li>

<li>The easiest order of integration</li>

</ul>

<p>Drawing a picture can prevent mistakes when determining the limits.</p>

<h3>Applications</h3>

<p>General regions appear naturally in many applications.</p>

<ul>

<li>Calculating the area of irregular regions</li>

<li>Computing the volume under curved surfaces</li>

<li>Finding the mass of objects with curved boundaries</li>

<li>Modeling lakes, forests, and geographic regions</li>

<li>Engineering design involving curved components</li>

<li>Fluid flow through irregular channels</li>

<li>Heat transfer across non-rectangular plates</li>

</ul>

<p>Learning to integrate over general regions prepares us for even more powerful coordinate systems, such as polar coordinates, which will be introduced in the next lesson.</p>

`,
        questions: [

            {
                q: "A general region differs from a rectangular region because:",
                options: [
                    "Its boundaries may be curves or functions",
                    "It always has four straight sides",
                    "It only contains rectangles",
                    "It cannot be integrated"
                ],
                answer: "Its boundaries may be curves or functions",
                explanation: "General regions often have curved boundaries, requiring variable limits of integration."
            },

            {
                q: "The limits of integration for a general region are often:",
                options: [
                    "Functions of another variable",
                    "Always constants",
                    "Always equal",
                    "Undefined"
                ],
                answer: "Functions of another variable",
                explanation: "Unlike rectangular regions, one set of limits typically depends on the other variable."
            },

            {
                q: "A Type I region is described using:",
                options: [
                    "Vertical slices",
                    "Horizontal slices",
                    "Circular slices",
                    "Diagonal slices"
                ],
                answer: "Vertical slices",
                explanation: "Type I regions are divided into vertical slices where y varies between functions of x."
            },

            {
                q: "For a Type I region, the x-values usually vary:",
                options: [
                    "Between two constants",
                    "Between two functions of y",
                    "From negative infinity to positive infinity",
                    "Along a circle"
                ],
                answer: "Between two constants",
                explanation: "In a Type I region, x is bounded by constants while y varies between functions."
            },

            {
                q: "For a Type I region, the y-values vary:",
                options: [
                    "Between two functions of x",
                    "Between two constants",
                    "Between two circles",
                    "Only above the x-axis"
                ],
                answer: "Between two functions of x",
                explanation: "Each vertical slice begins and ends at functions of x."
            },

            {
                q: "A Type II region is described using:",
                options: [
                    "Horizontal slices",
                    "Vertical slices",
                    "Polar coordinates",
                    "Three-dimensional slices"
                ],
                answer: "Horizontal slices",
                explanation: "Type II regions are divided into horizontal slices where x varies between functions of y."
            },

            {
                q: "For a Type II region, the y-values usually vary:",
                options: [
                    "Between two constants",
                    "Between two functions of x",
                    "From negative infinity to positive infinity",
                    "Along a parabola"
                ],
                answer: "Between two constants",
                explanation: "In a Type II region, y is bounded by constants while x varies between functions."
            },

            {
                q: "Before setting up a double integral over a general region, it is usually helpful to:",
                options: [
                    "Sketch the region",
                    "Take the derivative",
                    "Convert to polar coordinates immediately",
                    "Compute the gradient"
                ],
                answer: "Sketch the region",
                explanation: "A sketch helps identify the boundaries, limits, and easiest order of integration."
            },

            {
                q: "Changing the order of integration may:",
                options: [
                    "Simplify the calculation",
                    "Always change the answer",
                    "Make the region rectangular",
                    "Eliminate one variable"
                ],
                answer: "Simplify the calculation",
                explanation: "Choosing the most convenient order of integration often makes the limits much easier to determine."
            },

            {
                q: "Double integrals over general regions are commonly used to:",
                options: [
                    "Calculate quantities over regions with curved boundaries",
                    "Find the roots of quadratic equations",
                    "Compute vector magnitudes",
                    "Differentiate implicit functions"
                ],
                answer: "Calculate quantities over regions with curved boundaries",
                explanation: "General regions allow us to model realistic shapes found in engineering, science, economics, and physics."
            }

        ]

    },
    "calculus3-unit4-lesson3": {

        title: "Double Integrals in Polar Coordinates",

        subtitle: "Learn how polar coordinates simplify double integrals over circular and radially symmetric regions.",

        body: `

<h2>Double Integrals in Polar Coordinates</h2>

<p>Some regions are difficult to describe using rectangular coordinates. Circles, sectors, and other curved regions often require complicated limits when using x and y. In these situations, <strong>polar coordinates</strong> provide a much simpler way to evaluate double integrals.</p>

<p>Instead of locating a point by its horizontal and vertical distances, polar coordinates describe a point using:</p>

<ul>

<li>The distance from the origin (r)</li>

<li>The angle measured from the positive x-axis (θ)</li>

</ul>

<h3>Converting Between Coordinate Systems</h3>

<p>The relationships between rectangular and polar coordinates are:</p>

<ul>

<li>x = r cos θ</li>

<li>y = r sin θ</li>

<li>r² = x² + y²</li>

<li>tan θ = y/x (when defined)</li>

</ul>

<p>These formulas allow us to convert functions and regions between coordinate systems.</p>

<h3>Why Use Polar Coordinates?</h3>

<p>Polar coordinates greatly simplify problems involving:</p>

<ul>

<li>Circles</li>

<li>Disks</li>

<li>Annuli (rings)</li>

<li>Sectors</li>

<li>Radially symmetric regions</li>

</ul>

<p>For example, the circle</p>

<p>x² + y² ≤ 9</p>

<p>becomes simply</p>

<p>0 ≤ r ≤ 3</p>

<p>0 ≤ θ ≤ 2π</p>

<p>These limits are much easier to work with.</p>

<h3>The Area Element in Polar Coordinates</h3>

<p>When changing from rectangular coordinates to polar coordinates, the small area element changes.</p>

<p>Instead of dA = dx dy, we use:</p>

<p>dA = r dr dθ</p>

<p>The extra factor of <strong>r</strong> accounts for the fact that the area of each small polar sector increases as the distance from the origin increases.</p>

<p>It is very important not to forget this factor when evaluating double integrals in polar coordinates.</p>

<h3>Evaluating Double Integrals</h3>

<p>To evaluate a double integral using polar coordinates:</p>

<ol>

<li>Sketch the region.</li>

<li>Determine the limits for r and θ.</li>

<li>Rewrite the function using polar coordinates.</li>

<li>Replace dA with r dr dθ.</li>

<li>Evaluate the iterated integral.</li>

</ol>

<h3>Example</h3>

<p>Suppose we want to integrate over the disk:</p>

<p>x² + y² ≤ 4</p>

<p>In polar coordinates, this becomes:</p>

<ul>

<li>0 ≤ r ≤ 2</li>

<li>0 ≤ θ ≤ 2π</li>

</ul>

<p>The circular region becomes much easier to describe than it would using rectangular coordinates.</p>

<h3>Applications</h3>

<p>Polar coordinates are used whenever circular symmetry appears.</p>

<ul>

<li>Calculating areas of circles and sectors</li>

<li>Finding volumes beneath circular surfaces</li>

<li>Modeling planetary motion</li>

<li>Electromagnetic fields</li>

<li>Fluid flow around pipes</li>

<li>Heat distribution in circular plates</li>

<li>Engineering design</li>

<li>Computer graphics</li>

</ul>

<p>Polar coordinates are one of the most powerful coordinate systems in multivariable calculus because they transform many difficult integrals into much simpler ones.</p>

`,
        questions: [

            {
                q: "Polar coordinates describe a point using:",
                options: [
                    "A distance and an angle",
                    "Two horizontal distances",
                    "Two vertical distances",
                    "A slope and an intercept"
                ],
                answer: "A distance and an angle",
                explanation: "A point in polar coordinates is identified by its distance from the origin (r) and its angle (θ)."
            },

            {
                q: "In polar coordinates, the variable r represents:",
                options: [
                    "The distance from the origin",
                    "The angle from the x-axis",
                    "The radius of every circle",
                    "The area of the region"
                ],
                answer: "The distance from the origin",
                explanation: "The variable r measures how far a point is from the origin."
            },

            {
                q: "The variable θ represents:",
                options: [
                    "The angle measured from the positive x-axis",
                    "The slope of a line",
                    "The distance from the origin",
                    "The circumference of a circle"
                ],
                answer: "The angle measured from the positive x-axis",
                explanation: "The angle θ is measured counterclockwise from the positive x-axis."
            },

            {
                q: "Which equation converts polar coordinates to rectangular coordinates?",
                options: [
                    "x = r cos θ",
                    "x = r²",
                    "x = θ cos r",
                    "x = r tan θ"
                ],
                answer: "x = r cos θ",
                explanation: "The rectangular x-coordinate is given by x = r cos θ."
            },

            {
                q: "Which equation converts polar coordinates to rectangular coordinates?",
                options: [
                    "y = r sin θ",
                    "y = r cos θ",
                    "y = θ sin r",
                    "y = r²"
                ],
                answer: "y = r sin θ",
                explanation: "The rectangular y-coordinate is given by y = r sin θ."
            },

            {
                q: "The relationship between rectangular and polar coordinates is:",
                options: [
                    "r² = x² + y²",
                    "r = x + y",
                    "r = x² − y²",
                    "r = xy"
                ],
                answer: "r² = x² + y²",
                explanation: "The Pythagorean Theorem gives the relationship between r, x, and y."
            },

            {
                q: "When changing to polar coordinates, the area element dA becomes:",
                options: [
                    "r dr dθ",
                    "dr dθ",
                    "dx dy",
                    "r² dr dθ"
                ],
                answer: "r dr dθ",
                explanation: "The extra factor of r accounts for the increasing area of polar sectors as the distance from the origin increases."
            },

            {
                q: "Why is the extra factor of r included in the polar area element?",
                options: [
                    "To account for the changing size of area elements farther from the origin",
                    "To simplify differentiation",
                    "To eliminate the angle θ",
                    "To convert the function into a derivative"
                ],
                answer: "To account for the changing size of area elements farther from the origin",
                explanation: "As r increases, the same change in angle covers a larger arc length, so the area element grows proportionally."
            },

            {
                q: "Polar coordinates are especially useful for regions shaped like:",
                options: [
                    "Circles and sectors",
                    "Rectangles only",
                    "Squares only",
                    "Triangles only"
                ],
                answer: "Circles and sectors",
                explanation: "Circular and radially symmetric regions are much easier to describe using polar coordinates."
            },

            {
                q: "Which of the following is a common application of double integrals in polar coordinates?",
                options: [
                    "Finding the volume under a circular surface",
                    "Finding the roots of a quadratic equation",
                    "Computing the slope of a tangent line",
                    "Solving systems of linear equations"
                ],
                answer: "Finding the volume under a circular surface",
                explanation: "Polar coordinates simplify many problems involving circular regions, such as computing areas, volumes, and physical quantities."
            }

        ]

    },
    "calculus3-unit4-lesson4": {

        title: "Triple Integrals",

        subtitle: "Learn how triple integrals extend double integrals to three-dimensional regions and calculate volume, mass, and other accumulated quantities.",

        body: `

<h2>Triple Integrals</h2>

<p>Just as double integrals extend single-variable integration to two-dimensional regions, <strong>triple integrals</strong> extend integration into three-dimensional space.</p>

<p>Instead of adding tiny line segments or tiny rectangles, triple integrals add together infinitely many tiny boxes that fill a three-dimensional solid.</p>

<p>Triple integrals are used to compute:</p>

<ul>

<li>Volumes of three-dimensional solids</li>

<li>Mass of objects with varying density</li>

<li>Total electric charge</li>

<li>Total heat energy</li>

<li>Probability in three dimensions</li>

<li>Average values over solid regions</li>

</ul>

<h3>Three-Dimensional Regions</h3>

<p>A triple integral is evaluated over a solid region, usually denoted by the letter <strong>E</strong>.</p>

<p>The region may be bounded by planes, cylinders, spheres, cones, or other surfaces.</p>

<p>Each point inside the solid has three coordinates:</p>

<ul>

<li>x</li>

<li>y</li>

<li>z</li>

</ul>

<h3>The Triple Integral</h3>

<p>The notation for a triple integral is:</p>

<p>∭<sub>E</sub> f(x,y,z) dV</p>

<p>Here:</p>

<ul>

<li>E represents the three-dimensional region.</li>

<li>f(x,y,z) is the function being accumulated.</li>

<li>dV represents an infinitesimally small volume element.</li>

</ul>

<h3>Iterated Triple Integrals</h3>

<p>Triple integrals are usually evaluated one variable at a time.</p>

<p>For example, we may integrate in the order:</p>

<ul>

<li>z first</li>

<li>then y</li>

<li>finally x</li>

</ul>

<p>Other orders are also possible, depending on which produces the simplest limits of integration.</p>

<h3>Example Region</h3>

<p>Suppose a solid box is bounded by:</p>

<ul>

<li>0 ≤ x ≤ 2</li>

<li>0 ≤ y ≤ 3</li>

<li>0 ≤ z ≤ 4</li>

</ul>

<p>This is the three-dimensional equivalent of a rectangular region.</p>

<p>The limits are all constant, making the integral straightforward to evaluate.</p>

<h3>Volume Using Triple Integrals</h3>

<p>If the function equals 1 throughout the solid, the triple integral simply computes the volume of the region.</p>

<p>This is similar to using a double integral of 1 to compute area.</p>

<h3>Mass Using Triple Integrals</h3>

<p>If the density varies throughout the object, we integrate the density function over the entire solid.</p>

<p>This allows us to calculate the total mass even when different parts of the object have different densities.</p>

<h3>Changing the Order of Integration</h3>

<p>As with double integrals, the order of integration may often be changed.</p>

<p>Choosing the easiest order can greatly simplify the computation, especially for irregular solids.</p>

<h3>Applications</h3>

<p>Triple integrals are widely used throughout science and engineering.</p>

<ul>

<li>Finding the volume of complex solids</li>

<li>Computing mass with variable density</li>

<li>Modeling groundwater flow</li>

<li>Calculating heat distribution inside materials</li>

<li>Electromagnetic field analysis</li>

<li>Fluid mechanics</li>

<li>Structural engineering</li>

<li>Medical imaging</li>

</ul>

<p>Triple integrals allow mathematicians, engineers, and scientists to analyze quantities distributed throughout three-dimensional space, making them one of the most powerful tools in multivariable calculus.</p>

`,
        questions: [

            {
                q: "A triple integral is used to measure accumulation over:",
                options: [
                    "A three-dimensional region",
                    "A two-dimensional region",
                    "A line segment",
                    "A single point"
                ],
                answer: "A three-dimensional region",
                explanation: "Triple integrals extend integration to three-dimensional solids."
            },

            {
                q: "A triple integral adds together infinitely many tiny:",
                options: [
                    "Boxes",
                    "Rectangles",
                    "Line segments",
                    "Circles"
                ],
                answer: "Boxes",
                explanation: "Triple integrals approximate a solid by summing tiny rectangular boxes (volume elements)."
            },

            {
                q: "The region of integration for a triple integral is commonly denoted by:",
                options: [
                    "E",
                    "R",
                    "C",
                    "S"
                ],
                answer: "E",
                explanation: "The symbol E is commonly used to represent a three-dimensional solid region."
            },

            {
                q: "In the notation ∭E f(x,y,z) dV, the symbol dV represents:",
                options: [
                    "An infinitesimally small volume element",
                    "A derivative",
                    "A direction vector",
                    "A surface area element"
                ],
                answer: "An infinitesimally small volume element",
                explanation: "The notation dV represents a tiny volume element used to build the entire solid."
            },

            {
                q: "A point in three-dimensional space is described by the coordinates:",
                options: [
                    "(x, y, z)",
                    "(x, y)",
                    "(r, θ)",
                    "(x)"
                ],
                answer: "(x, y, z)",
                explanation: "Three-dimensional space requires three coordinates: x, y, and z."
            },

            {
                q: "If f(x,y,z)=1 throughout a solid region, the triple integral computes the:",
                options: [
                    "Volume of the region",
                    "Surface area of the region",
                    "Average value of the function",
                    "Gradient of the function"
                ],
                answer: "Volume of the region",
                explanation: "Integrating the constant function 1 over a solid gives its volume."
            },

            {
                q: "If f(x,y,z) represents density, the triple integral computes the:",
                options: [
                    "Mass of the solid",
                    "Surface area of the solid",
                    "Length of the boundary",
                    "Maximum density"
                ],
                answer: "Mass of the solid",
                explanation: "Integrating the density function over a solid gives its total mass."
            },

            {
                q: "When evaluating a triple integral, the variables are usually integrated:",
                options: [
                    "One at a time",
                    "All simultaneously",
                    "In alphabetical order only",
                    "Using only polar coordinates"
                ],
                answer: "One at a time",
                explanation: "Triple integrals are evaluated as iterated integrals, integrating one variable at a time."
            },

            {
                q: "Changing the order of integration may:",
                options: [
                    "Simplify the computation",
                    "Always change the answer",
                    "Make the region two-dimensional",
                    "Eliminate one variable"
                ],
                answer: "Simplify the computation",
                explanation: "Choosing a different order of integration can make determining the limits and evaluating the integral much easier."
            },

            {
                q: "Which of the following is a common application of triple integrals?",
                options: [
                    "Finding the mass of a three-dimensional object with varying density",
                    "Finding the roots of a quadratic equation",
                    "Calculating the slope of a tangent line",
                    "Factoring polynomials"
                ],
                answer: "Finding the mass of a three-dimensional object with varying density",
                explanation: "Triple integrals are widely used to calculate mass, volume, heat, charge, and other accumulated quantities throughout three-dimensional regions."
            }

        ]

    },

    "calculus3-unit4-lesson5": {

        title: "Change of Variables and Jacobians",

        subtitle: "Learn how coordinate transformations and Jacobians simplify multiple integrals over complex regions.",

        body: `

<h2>Change of Variables and Jacobians</h2>

<p>Some multiple integrals are difficult to evaluate because of complicated functions or irregular regions. One powerful technique for simplifying these problems is the <strong>change of variables</strong>. By introducing a new coordinate system, an integral can often become much easier to evaluate.</p>

<p>Changing variables is similar to translating a problem into a language that is easier to understand. The shape of the region may become simpler, and the function itself may be easier to integrate.</p>

<h3>Why Change Variables?</h3>

<p>Many regions have boundaries that are difficult to describe using the original variables.</p>

<p>For example:</p>

<ul>

<li>Ellipses</li>

<li>Rotated regions</li>

<li>Skewed coordinate systems</li>

<li>Curved boundaries</li>

</ul>

<p>Introducing new variables often transforms these complicated regions into simple rectangles or circles.</p>

<h3>Coordinate Transformations</h3>

<p>A coordinate transformation replaces the original variables with new variables.</p>

<p>For example, instead of working with x and y, we might define:</p>

<ul>

<li>x = x(u,v)</li>

<li>y = y(u,v)</li>

</ul>

<p>The variables u and v describe the same points using a different coordinate system.</p>

<h3>The Jacobian</h3>

<p>When changing variables, the small area element also changes size.</p>

<p>To account for this change, we multiply by a quantity called the <strong>Jacobian determinant</strong>.</p>

<p>The Jacobian measures how areas or volumes are stretched or compressed by the transformation.</p>

<p>Without the Jacobian, the integral would produce an incorrect result because the sizes of the small regions would no longer match the new coordinate system.</p>

<h3>The Jacobian Matrix</h3>

<p>For two variables, the Jacobian is computed from the matrix of first-order partial derivatives.</p>

<p>The determinant of this matrix gives the scaling factor used in the integral.</p>

<p>The absolute value of the Jacobian determinant is used because area and volume are always nonnegative.</p>

<h3>Example</h3>

<p>Suppose a transformation converts an ellipse into a unit circle.</p>

<p>Instead of integrating over the complicated ellipse, we integrate over the much simpler circular region.</p>

<p>The Jacobian automatically adjusts for the stretching caused by the transformation.</p>

<h3>Relationship to Polar Coordinates</h3>

<p>Polar coordinates are actually one of the most common examples of a change of variables.</p>

<p>In polar coordinates, the Jacobian contributes the extra factor of <strong>r</strong> in the area element:</p>

<p>dA = r dr dθ</p>

<p>This factor is simply the Jacobian determinant for the polar coordinate transformation.</p>

<h3>Applications</h3>

<p>Change of variables and Jacobians are widely used in mathematics, science, and engineering.</p>

<ul>

<li>Evaluating difficult multiple integrals</li>

<li>Probability and statistics</li>

<li>Fluid dynamics</li>

<li>Electromagnetic field analysis</li>

<li>Mechanical engineering</li>

<li>Computer graphics</li>

<li>Economics</li>

<li>Machine learning</li>

</ul>

<p>Coordinate transformations allow complicated regions and functions to become much simpler, while the Jacobian guarantees that the resulting integral still measures the correct area, volume, mass, or other accumulated quantity.</p>

`,
        questions: [

            {
                q: "The primary purpose of a change of variables is to:",
                options: [
                    "Simplify an integral by using a new coordinate system",
                    "Increase the number of variables",
                    "Eliminate all derivatives",
                    "Convert an integral into a derivative"
                ],
                answer: "Simplify an integral by using a new coordinate system",
                explanation: "Changing variables often transforms a difficult integral into one that is much easier to evaluate."
            },

            {
                q: "A coordinate transformation:",
                options: [
                    "Replaces the original variables with new variables",
                    "Removes variables from the function",
                    "Always changes the value of the integral",
                    "Converts an integral into a limit"
                ],
                answer: "Replaces the original variables with new variables",
                explanation: "A coordinate transformation expresses the same points using a different set of variables."
            },

            {
                q: "The Jacobian determinant accounts for:",
                options: [
                    "How areas or volumes are stretched or compressed",
                    "The derivative of a single-variable function",
                    "The slope of a tangent line",
                    "The value of the function"
                ],
                answer: "How areas or volumes are stretched or compressed",
                explanation: "The Jacobian measures how a transformation changes the size of small area or volume elements."
            },

            {
                q: "When changing variables in a multiple integral, the Jacobian is used to:",
                options: [
                    "Adjust the area or volume element",
                    "Find the gradient vector",
                    "Compute partial derivatives",
                    "Determine the domain"
                ],
                answer: "Adjust the area or volume element",
                explanation: "The Jacobian ensures the transformed integral correctly represents the original area or volume."
            },

            {
                q: "The Jacobian is computed from:",
                options: [
                    "A matrix of first-order partial derivatives",
                    "A matrix of second-order partial derivatives",
                    "The gradient vector only",
                    "The Hessian matrix"
                ],
                answer: "A matrix of first-order partial derivatives",
                explanation: "The Jacobian matrix consists of first-order partial derivatives of the transformation."
            },

            {
                q: "Why is the absolute value of the Jacobian determinant used?",
                options: [
                    "Because area and volume are always nonnegative",
                    "To simplify differentiation",
                    "To eliminate negative coordinates",
                    "To avoid partial derivatives"
                ],
                answer: "Because area and volume are always nonnegative",
                explanation: "The absolute value ensures the scaling factor represents a positive area or volume."
            },

            {
                q: "Polar coordinates are an example of:",
                options: [
                    "A change of variables",
                    "A partial derivative",
                    "A directional derivative",
                    "A line integral"
                ],
                answer: "A change of variables",
                explanation: "Polar coordinates transform rectangular coordinates into a new coordinate system."
            },

            {
                q: "In polar coordinates, the extra factor in the area element is:",
                options: [
                    "r",
                    "θ",
                    "r²",
                    "1/r"
                ],
                answer: "r",
                explanation: "The factor r is the Jacobian determinant for the transformation from rectangular to polar coordinates."
            },

            {
                q: "Changing variables is especially helpful for regions that are:",
                options: [
                    "Complicated, curved, or irregular",
                    "Always rectangular",
                    "One-dimensional",
                    "Already simple to integrate"
                ],
                answer: "Complicated, curved, or irregular",
                explanation: "Coordinate transformations often turn complicated regions into much simpler ones."
            },

            {
                q: "Which of the following is a common application of change of variables and Jacobians?",
                options: [
                    "Evaluating difficult multiple integrals over complex regions",
                    "Factoring polynomials",
                    "Finding roots of quadratic equations",
                    "Calculating simple arithmetic"
                ],
                answer: "Evaluating difficult multiple integrals over complex regions",
                explanation: "Change of variables is widely used to simplify multiple integrals in mathematics, engineering, physics, probability, and many other fields."
            }

        ]

    },

    "calculus3-unit4-lesson6": {

        title: "Applications of Multiple Integrals",

        subtitle: "Learn how multiple integrals are used to calculate mass, center of mass, average value, moments of inertia, probability, and other real-world quantities.",

        body: `

<h2>Applications of Multiple Integrals</h2>

<p>Multiple integrals are far more than mathematical exercises—they are powerful tools used to solve real-world problems involving quantities distributed over regions and throughout three-dimensional space.</p>

<p>By integrating a function over an area or volume, we can determine total amounts, averages, centers of mass, probabilities, and many other physical quantities.</p>

<h3>Mass of a Lamina</h3>

<p>A <strong>lamina</strong> is a thin, flat object such as a sheet of metal or a plate.</p>

<p>If every point has the same density, the mass is simply the density multiplied by the area.</p>

<p>However, many objects have varying density.</p>

<p>When density changes from point to point, a double integral computes the total mass by adding the contributions from every small piece of the region.</p>

<h3>Mass of a Solid</h3>

<p>Triple integrals extend this idea into three dimensions.</p>

<p>If the density varies throughout a solid object, a triple integral computes the total mass by summing the density throughout the entire volume.</p>

<p>This is commonly used when designing aircraft, automobiles, bridges, and manufactured components.</p>

<h3>Center of Mass</h3>

<p>The <strong>center of mass</strong> is the balancing point of an object.</p>

<p>If the object were supported exactly at its center of mass, it would balance perfectly.</p>

<p>Multiple integrals allow us to locate the center of mass even when the density is not uniform.</p>

<p>This concept is essential in engineering, robotics, architecture, and biomechanics.</p>

<h3>Average Value of a Function</h3>

<p>Just as a single integral can determine the average value of a function over an interval, multiple integrals compute the average value over an entire region.</p>

<p>This is useful when analyzing quantities such as:</p>

<ul>

<li>Average temperature across a surface</li>

<li>Average rainfall over a geographic area</li>

<li>Average population density</li>

<li>Average pollution levels</li>

</ul>

<h3>Moments of Inertia</h3>

<p>The <strong>moment of inertia</strong> measures how mass is distributed relative to an axis of rotation.</p>

<p>Objects with more mass located farther from the axis require more torque to rotate.</p>

<p>Engineers use multiple integrals to calculate moments of inertia when designing:</p>

<ul>

<li>Vehicle wheels</li>

<li>Flywheels</li>

<li>Mechanical gears</li>

<li>Robotic arms</li>

<li>Wind turbines</li>

</ul>

<h3>Probability</h3>

<p>Multiple integrals are also used in probability and statistics.</p>

<p>If a probability density function describes two or three random variables, integrating over a region determines the probability that the variables fall within that region.</p>

<p>This idea is widely used in finance, economics, artificial intelligence, and data science.</p>

<h3>Engineering and Scientific Applications</h3>

<p>Multiple integrals appear throughout modern science and engineering.</p>

<ul>

<li>Fluid flow through pipes and rivers</li>

<li>Heat transfer within materials</li>

<li>Electromagnetic field analysis</li>

<li>Structural engineering</li>

<li>Medical imaging</li>

<li>Climate modeling</li>

<li>Computer graphics</li>

<li>Machine learning</li>

</ul>

<h3>Summary</h3>

<p>Multiple integrals provide one of the most versatile tools in mathematics. They allow us to measure accumulated quantities over areas and volumes, making it possible to solve complex real-world problems involving mass, balance, motion, energy, probability, and many other phenomena.</p>

`,
        questions: [

            {
                q: "Multiple integrals are primarily used to calculate:",
                options: [
                    "Accumulated quantities over areas and volumes",
                    "Only derivatives",
                    "Only limits",
                    "Only slopes of curves"
                ],
                answer: "Accumulated quantities over areas and volumes",
                explanation: "Multiple integrals measure accumulated quantities across two-dimensional regions and three-dimensional solids."
            },

            {
                q: "A lamina is:",
                options: [
                    "A thin, flat object",
                    "A three-dimensional sphere",
                    "A curved surface only",
                    "A line segment"
                ],
                answer: "A thin, flat object",
                explanation: "A lamina is a thin plate or sheet that is treated as having negligible thickness."
            },

            {
                q: "If the density of a lamina varies from point to point, its mass is found using:",
                options: [
                    "A double integral",
                    "A single derivative",
                    "A line integral",
                    "A partial derivative"
                ],
                answer: "A double integral",
                explanation: "A double integral sums the varying density over the entire two-dimensional region."
            },

            {
                q: "If the density varies throughout a three-dimensional solid, its mass is found using:",
                options: [
                    "A triple integral",
                    "A double integral",
                    "A directional derivative",
                    "A gradient"
                ],
                answer: "A triple integral",
                explanation: "Triple integrals accumulate density throughout the entire volume of a solid."
            },

            {
                q: "The center of mass is:",
                options: [
                    "The balancing point of an object",
                    "The highest point of an object",
                    "The geometric center only",
                    "The point of maximum density"
                ],
                answer: "The balancing point of an object",
                explanation: "The center of mass is the point where an object balances, taking its mass distribution into account."
            },

            {
                q: "The average value of a function over a region can be computed using:",
                options: [
                    "A multiple integral",
                    "A limit",
                    "A partial derivative",
                    "A tangent plane"
                ],
                answer: "A multiple integral",
                explanation: "Multiple integrals are used to compute average values over areas and volumes."
            },

            {
                q: "The moment of inertia measures:",
                options: [
                    "How mass is distributed relative to an axis of rotation",
                    "The average density of an object",
                    "The maximum height of a surface",
                    "The slope of a tangent plane"
                ],
                answer: "How mass is distributed relative to an axis of rotation",
                explanation: "The moment of inertia describes how difficult it is to rotate an object about an axis."
            },

            {
                q: "Multiple integrals are used in probability to determine:",
                options: [
                    "The probability that variables lie within a region",
                    "The derivative of a probability function",
                    "The slope of a distribution",
                    "The maximum value of a random variable"
                ],
                answer: "The probability that variables lie within a region",
                explanation: "Integrating a probability density function over a region gives the probability of falling within that region."
            },

            {
                q: "Which field commonly uses multiple integrals?",
                options: [
                    "Engineering, physics, data science, and medical imaging",
                    "Only algebra",
                    "Only geometry",
                    "Only accounting"
                ],
                answer: "Engineering, physics, data science, and medical imaging",
                explanation: "Multiple integrals have broad applications across science, engineering, technology, and medicine."
            },

            {
                q: "Which statement best summarizes the applications of multiple integrals?",
                options: [
                    "They calculate quantities such as mass, volume, center of mass, average value, probability, and moments of inertia over regions and solids.",
                    "They are only used to compute areas of rectangles.",
                    "They replace all derivatives in calculus.",
                    "They are only useful in theoretical mathematics."
                ],
                answer: "They calculate quantities such as mass, volume, center of mass, average value, probability, and moments of inertia over regions and solids.",
                explanation: "Multiple integrals are powerful tools for solving a wide variety of real-world problems involving accumulated quantities."
            }

        ]

    },

    "calculus3-unit4-review": {

        title: "Unit 4 Review",

        subtitle: "Review Multiple Integrals before taking the Unit 4 Test.",

        body: `

<h2>Unit 4 Review</h2>

<p>This review summarizes the major ideas from Unit 4. Multiple integrals extend integration from one dimension to two and three dimensions, allowing us to calculate accumulated quantities over regions and solids.</p>

<h2>Lesson 1 Review: Double Integrals over Rectangular Regions</h2>

<ul>

<li>Double integrals measure accumulation over two-dimensional regions.</li>

<li>Rectangular regions have constant limits for both variables.</li>

<li>Double integrals are evaluated as iterated integrals.</li>

<li>If the function equals 1, the integral computes the area of the region.</li>

<li>If the function is positive, the integral computes the volume beneath the surface.</li>

</ul>

<h2>Lesson 2 Review: Double Integrals over General Regions</h2>

<ul>

<li>General regions often have curved boundaries.</li>

<li>Variable limits describe the region of integration.</li>

<li>Type I regions use vertical slices.</li>

<li>Type II regions use horizontal slices.</li>

<li>Sketching the region helps determine the correct limits.</li>

</ul>

<h2>Lesson 3 Review: Double Integrals in Polar Coordinates</h2>

<ul>

<li>Polar coordinates simplify circular and radially symmetric regions.</li>

<li>x = r cos θ</li>

<li>y = r sin θ</li>

<li>r² = x² + y²</li>

<li>The area element becomes dA = r dr dθ.</li>

<li>The factor r is the Jacobian for the polar transformation.</li>

</ul>

<h2>Lesson 4 Review: Triple Integrals</h2>

<ul>

<li>Triple integrals measure accumulation over three-dimensional solids.</li>

<li>The region is usually denoted by E.</li>

<li>The volume element is dV.</li>

<li>If the function equals 1, the triple integral computes volume.</li>

<li>If the function represents density, the integral computes mass.</li>

</ul>

<h2>Lesson 5 Review: Change of Variables and Jacobians</h2>

<ul>

<li>Coordinate transformations simplify difficult integrals.</li>

<li>The Jacobian accounts for stretching or compression.</li>

<li>The Jacobian is computed from first-order partial derivatives.</li>

<li>The absolute value of the Jacobian determinant is used.</li>

<li>Polar coordinates are one example of a change of variables.</li>

</ul>

<h2>Lesson 6 Review: Applications of Multiple Integrals</h2>

<ul>

<li>Multiple integrals calculate mass and center of mass.</li>

<li>They compute average values over regions.</li>

<li>They determine moments of inertia.</li>

<li>They compute probabilities over regions.</li>

<li>They have important applications in science and engineering.</li>

</ul>

<h2>Important Concepts to Remember</h2>

<ul>

<li>Double integrals</li>

<li>Rectangular regions</li>

<li>General regions</li>

<li>Type I regions</li>

<li>Type II regions</li>

<li>Iterated integrals</li>

<li>Polar coordinates</li>

<li>Coordinate transformations</li>

<li>Jacobians</li>

<li>Triple integrals</li>

<li>Volume</li>

<li>Mass</li>

<li>Center of mass</li>

<li>Average value</li>

<li>Moments of inertia</li>

<li>Probability density</li>

</ul>

<h2>Mixed Review Questions</h2>

`,

        questions: [

            {
                q: "A double integral measures accumulation over:",
                options: [
                    "A two-dimensional region",
                    "A one-dimensional interval",
                    "A three-dimensional solid",
                    "A single point"
                ],
                answer: "A two-dimensional region",
                explanation: "Double integrals accumulate quantities across an entire area."
            },

            {
                q: "A rectangular region has:",
                options: [
                    "Constant limits of integration",
                    "Curved boundaries only",
                    "Variable limits only",
                    "No boundaries"
                ],
                answer: "Constant limits of integration",
                explanation: "Rectangular regions have constant lower and upper bounds."
            },

            {
                q: "A double integral of f(x,y)=1 computes the:",
                options: [
                    "Area of the region",
                    "Volume of a sphere",
                    "Surface area",
                    "Gradient"
                ],
                answer: "Area of the region",
                explanation: "Integrating the constant function 1 over a region gives its area."
            },

            {
                q: "General regions usually have:",
                options: [
                    "Variable limits of integration",
                    "Constant limits only",
                    "No limits",
                    "Only circular boundaries"
                ],
                answer: "Variable limits of integration",
                explanation: "General regions often require one set of limits to depend on another variable."
            },

            {
                q: "Type I regions are described using:",
                options: [
                    "Vertical slices",
                    "Horizontal slices",
                    "Polar slices",
                    "Three-dimensional slices"
                ],
                answer: "Vertical slices",
                explanation: "Type I regions use vertical slices where y varies between functions of x."
            },

            {
                q: "Type II regions are described using:",
                options: [
                    "Horizontal slices",
                    "Vertical slices",
                    "Circular slices",
                    "Diagonal slices"
                ],
                answer: "Horizontal slices",
                explanation: "Type II regions use horizontal slices where x varies between functions of y."
            },

            {
                q: "Polar coordinates describe a point using:",
                options: [
                    "A distance and an angle",
                    "Two distances",
                    "Two angles",
                    "Three coordinates"
                ],
                answer: "A distance and an angle",
                explanation: "Polar coordinates use r and θ to locate points."
            },

            {
                q: "The polar area element is:",
                options: [
                    "r dr dθ",
                    "dr dθ",
                    "dx dy",
                    "r² dr dθ"
                ],
                answer: "r dr dθ",
                explanation: "The Jacobian contributes the factor r."
            },

            {
                q: "A triple integral measures accumulation over:",
                options: [
                    "A three-dimensional region",
                    "A line",
                    "A plane only",
                    "A circle"
                ],
                answer: "A three-dimensional region",
                explanation: "Triple integrals extend integration into three-dimensional space."
            },

            {
                q: "If f(x,y,z)=1, a triple integral computes:",
                options: [
                    "The volume of the solid",
                    "The surface area",
                    "The density",
                    "The gradient"
                ],
                answer: "The volume of the solid",
                explanation: "Integrating the constant function 1 over a solid gives its volume."
            },
            {
                q: "The symbol dV represents:",
                options: [
                    "An infinitesimally small volume element",
                    "A derivative",
                    "A direction vector",
                    "A surface area element"
                ],
                answer: "An infinitesimally small volume element",
                explanation: "The notation dV represents a tiny piece of volume used in a triple integral."
            },

            {
                q: "The Jacobian determinant accounts for:",
                options: [
                    "The stretching or compression of area or volume",
                    "The slope of a tangent line",
                    "The value of the function",
                    "The derivative of the function"
                ],
                answer: "The stretching or compression of area or volume",
                explanation: "The Jacobian adjusts the area or volume element after a change of variables."
            },

            {
                q: "The Jacobian is computed from:",
                options: [
                    "A matrix of first-order partial derivatives",
                    "A matrix of second-order partial derivatives",
                    "The gradient vector",
                    "The Hessian matrix"
                ],
                answer: "A matrix of first-order partial derivatives",
                explanation: "The Jacobian matrix contains the first-order partial derivatives of the coordinate transformation."
            },

            {
                q: "When changing variables, we use the absolute value of the Jacobian because:",
                options: [
                    "Area and volume must remain nonnegative",
                    "It makes differentiation easier",
                    "It removes negative coordinates",
                    "It eliminates one variable"
                ],
                answer: "Area and volume must remain nonnegative",
                explanation: "The absolute value ensures the scaling factor correctly represents positive area or volume."
            },

            {
                q: "Polar coordinates are an example of:",
                options: [
                    "A change of variables",
                    "A line integral",
                    "A directional derivative",
                    "A partial derivative"
                ],
                answer: "A change of variables",
                explanation: "Polar coordinates transform rectangular coordinates into a new coordinate system."
            },

            {
                q: "The center of mass is:",
                options: [
                    "The balancing point of an object",
                    "The highest point of an object",
                    "The geometric center only",
                    "The point of greatest density"
                ],
                answer: "The balancing point of an object",
                explanation: "The center of mass accounts for how mass is distributed throughout an object."
            },

            {
                q: "The moment of inertia measures:",
                options: [
                    "How mass is distributed relative to an axis of rotation",
                    "The average density of an object",
                    "The total surface area",
                    "The probability of an event"
                ],
                answer: "How mass is distributed relative to an axis of rotation",
                explanation: "The moment of inertia describes an object's resistance to rotational motion."
            },

            {
                q: "Multiple integrals can be used to compute:",
                options: [
                    "The average value of a function over a region",
                    "Only derivatives",
                    "Only limits",
                    "Only tangent planes"
                ],
                answer: "The average value of a function over a region",
                explanation: "Multiple integrals allow us to calculate average values over two- and three-dimensional regions."
            },

            {
                q: "In probability, integrating a probability density function over a region gives:",
                options: [
                    "The probability that the variables lie within that region",
                    "The derivative of the probability",
                    "The average density",
                    "The maximum probability"
                ],
                answer: "The probability that the variables lie within that region",
                explanation: "The integral of a probability density function over a region equals the probability of the variables falling within that region."
            },

            {
                q: "Which coordinate system is often the best choice for circular regions?",
                options: [
                    "Polar coordinates",
                    "Rectangular coordinates",
                    "Spherical coordinates only",
                    "Cylindrical coordinates only"
                ],
                answer: "Polar coordinates",
                explanation: "Polar coordinates greatly simplify integrals over circles, disks, sectors, and other radially symmetric regions."
            },

            {
                q: "Which statement about multiple integrals is TRUE?",
                options: [
                    "They can be used to calculate area, volume, mass, probability, and many other accumulated quantities.",
                    "They are only used to calculate area.",
                    "They can only be evaluated over rectangular regions.",
                    "They always require polar coordinates."
                ],
                answer: "They can be used to calculate area, volume, mass, probability, and many other accumulated quantities.",
                explanation: "Multiple integrals are versatile tools used across mathematics, science, engineering, economics, and data science."
            },

            {
                q: "Sketching the region before setting up an integral helps determine:",
                options: [
                    "The correct limits of integration",
                    "The derivative of the function",
                    "The gradient vector",
                    "The Jacobian matrix"
                ],
                answer: "The correct limits of integration",
                explanation: "A sketch makes it much easier to identify boundaries and choose the appropriate order of integration."
            },

            {
                q: "Changing the order of integration is useful because it:",
                options: [
                    "May simplify the computation",
                    "Always changes the answer",
                    "Removes one variable",
                    "Eliminates the Jacobian"
                ],
                answer: "May simplify the computation",
                explanation: "Choosing a different order often makes the limits easier to describe and the integral easier to evaluate."
            },

            {
                q: "The extra factor r in the polar area element comes from:",
                options: [
                    "The Jacobian of the polar coordinate transformation",
                    "The derivative of θ",
                    "The radius of the circle only",
                    "The gradient vector"
                ],
                answer: "The Jacobian of the polar coordinate transformation",
                explanation: "The Jacobian determinant for polar coordinates is r, producing the area element r dr dθ."
            },

            {
                q: "Which statement best summarizes Unit 4?",
                options: [
                    "Multiple integrals extend integration to regions and solids, allowing us to compute quantities such as area, volume, mass, probability, center of mass, and moments of inertia.",
                    "They are only useful for finding areas of rectangles.",
                    "They replace derivatives in multivariable calculus.",
                    "They apply only to theoretical mathematics."
                ],
                answer: "Multiple integrals extend integration to regions and solids, allowing us to compute quantities such as area, volume, mass, probability, center of mass, and moments of inertia.",
                explanation: "Unit 4 introduced double and triple integrals, coordinate transformations, Jacobians, and many practical applications of multiple integration."
            }

        ]

    },

    "calculus3-unit4-test": {

        title: "Unit 4 Test",

        subtitle: "Test your understanding of Multiple Integrals, Coordinate Transformations, and Applications.",

        body: `

<h2>Unit 4 Test</h2>

<p>This assessment covers everything learned in Unit 4.</p>

<p>The test includes questions from:</p>

<ul>

<li>Double Integrals over Rectangular Regions</li>

<li>Double Integrals over General Regions</li>

<li>Double Integrals in Polar Coordinates</li>

<li>Triple Integrals</li>

<li>Change of Variables and Jacobians</li>

<li>Applications of Multiple Integrals</li>

</ul>

<p>Select the best answer for each question before checking your results.</p>

`,

        questions: [

            {
                q: "A double integral measures accumulation over:",
                options: [
                    "A two-dimensional region",
                    "A line segment",
                    "A three-dimensional solid",
                    "A single point"
                ],
                answer: "A two-dimensional region",
                explanation: "Double integrals extend integration over areas."
            },

            {
                q: "A rectangular region has:",
                options: [
                    "Constant limits of integration",
                    "Curved boundaries",
                    "Variable limits only",
                    "No boundaries"
                ],
                answer: "Constant limits of integration",
                explanation: "Rectangular regions are bounded by constant values of x and y."
            },

            {
                q: "The notation ∬R f(x,y) dA represents:",
                options: [
                    "A double integral over a region",
                    "A triple integral",
                    "A line integral",
                    "A partial derivative"
                ],
                answer: "A double integral over a region",
                explanation: "The symbol ∬ denotes integration over a two-dimensional region."
            },

            {
                q: "If f(x,y)=1 everywhere on a region, the double integral computes:",
                options: [
                    "The area of the region",
                    "The volume of a solid",
                    "The gradient",
                    "The average value"
                ],
                answer: "The area of the region",
                explanation: "Integrating the constant function 1 over a region gives its area."
            },

            {
                q: "General regions usually require:",
                options: [
                    "Variable limits of integration",
                    "Constant limits only",
                    "No limits",
                    "Polar coordinates only"
                ],
                answer: "Variable limits of integration",
                explanation: "Curved boundaries are described using limits that depend on another variable."
            },

            {
                q: "Type I regions are described using:",
                options: [
                    "Vertical slices",
                    "Horizontal slices",
                    "Circular slices",
                    "Diagonal slices"
                ],
                answer: "Vertical slices",
                explanation: "Type I regions use vertical slices where y varies between functions of x."
            },

            {
                q: "Type II regions are described using:",
                options: [
                    "Horizontal slices",
                    "Vertical slices",
                    "Polar slices",
                    "Spherical slices"
                ],
                answer: "Horizontal slices",
                explanation: "Type II regions use horizontal slices where x varies between functions of y."
            },

            {
                q: "Before setting up a double integral over a general region, it is usually best to:",
                options: [
                    "Sketch the region",
                    "Compute the derivative",
                    "Find the gradient",
                    "Change variables immediately"
                ],
                answer: "Sketch the region",
                explanation: "A sketch helps determine the boundaries and correct limits of integration."
            },

            {
                q: "Polar coordinates describe a point using:",
                options: [
                    "A distance and an angle",
                    "Two distances",
                    "Three coordinates",
                    "A slope and an intercept"
                ],
                answer: "A distance and an angle",
                explanation: "Polar coordinates use r and θ."
            },

            {
                q: "Which equation relates rectangular and polar coordinates?",
                options: [
                    "r²=x²+y²",
                    "r=x+y",
                    "r=x²−y²",
                    "r=xy"
                ],
                answer: "r²=x²+y²",
                explanation: "The Pythagorean Theorem gives the relationship between rectangular and polar coordinates."
            },

            {
                q: "When converting to polar coordinates, dA becomes:",
                options: [
                    "r dr dθ",
                    "dr dθ",
                    "dx dy",
                    "r² dr dθ"
                ],
                answer: "r dr dθ",
                explanation: "The extra factor r is the Jacobian determinant."
            },

            {
                q: "The extra factor r appears because:",
                options: [
                    "The area element changes size",
                    "The derivative changes",
                    "The function becomes linear",
                    "The limits become constant"
                ],
                answer: "The area element changes size",
                explanation: "The Jacobian accounts for stretching of the coordinate system."
            },

            {
                q: "A triple integral measures accumulation over:",
                options: [
                    "A three-dimensional solid",
                    "A two-dimensional region",
                    "A curve",
                    "A point"
                ],
                answer: "A three-dimensional solid",
                explanation: "Triple integrals extend integration into three dimensions."
            },
            {
                q: "The symbol E usually represents:",
                options: [
                    "A three-dimensional region of integration",
                    "A two-dimensional region",
                    "The error in an approximation",
                    "The expected value"
                ],
                answer: "A three-dimensional region of integration",
                explanation: "The letter E commonly denotes the solid region over which a triple integral is evaluated."
            },

            {
                q: "The symbol dV represents:",
                options: [
                    "An infinitesimally small volume element",
                    "A derivative",
                    "A direction vector",
                    "A surface area element"
                ],
                answer: "An infinitesimally small volume element",
                explanation: "The notation dV represents a tiny piece of volume used to build the entire solid."
            },

            {
                q: "If f(x,y,z)=1 throughout a solid, the triple integral computes:",
                options: [
                    "The volume of the solid",
                    "The mass of the solid",
                    "The surface area",
                    "The density"
                ],
                answer: "The volume of the solid",
                explanation: "Integrating the constant function 1 over a three-dimensional region gives its volume."
            },

            {
                q: "If f(x,y,z) represents density, a triple integral computes the:",
                options: [
                    "Mass of the solid",
                    "Surface area of the solid",
                    "Average density",
                    "Center of mass"
                ],
                answer: "Mass of the solid",
                explanation: "Integrating a density function over a solid gives the total mass."
            },

            {
                q: "The primary purpose of a change of variables is to:",
                options: [
                    "Simplify the integral by using a different coordinate system",
                    "Increase the number of variables",
                    "Remove the need for integration",
                    "Convert every integral into polar coordinates"
                ],
                answer: "Simplify the integral by using a different coordinate system",
                explanation: "Changing variables often transforms a difficult region or function into a much simpler one."
            },

            {
                q: "The Jacobian determinant measures:",
                options: [
                    "How area or volume changes under a transformation",
                    "The slope of a tangent plane",
                    "The value of a function",
                    "The direction of maximum increase"
                ],
                answer: "How area or volume changes under a transformation",
                explanation: "The Jacobian accounts for stretching or compression caused by a coordinate transformation."
            },

            {
                q: "The Jacobian is computed from:",
                options: [
                    "A matrix of first-order partial derivatives",
                    "A matrix of second-order partial derivatives",
                    "The Hessian matrix",
                    "A matrix of function values"
                ],
                answer: "A matrix of first-order partial derivatives",
                explanation: "The Jacobian matrix consists of first-order partial derivatives of the transformation."
            },

            {
                q: "Which quantity is multiplied into a multiple integral after changing variables?",
                options: [
                    "The absolute value of the Jacobian determinant",
                    "The gradient",
                    "The Laplacian",
                    "The directional derivative"
                ],
                answer: "The absolute value of the Jacobian determinant",
                explanation: "The absolute value of the Jacobian correctly scales the area or volume element."
            },

            {
                q: "Multiple integrals are commonly used to compute:",
                options: [
                    "Center of mass",
                    "Roots of quadratic equations",
                    "Polynomial factors",
                    "Complex roots only"
                ],
                answer: "Center of mass",
                explanation: "One important application of multiple integrals is locating the balancing point of an object."
            },

            {
                q: "The moment of inertia describes:",
                options: [
                    "How mass is distributed relative to an axis of rotation",
                    "The average temperature of an object",
                    "The slope of a surface",
                    "The probability of an event"
                ],
                answer: "How mass is distributed relative to an axis of rotation",
                explanation: "Moment of inertia measures an object's resistance to rotational motion."
            },

            {
                q: "Multiple integrals can be used to compute probabilities by integrating:",
                options: [
                    "A probability density function over a region",
                    "A derivative over an interval",
                    "A tangent plane",
                    "A gradient field"
                ],
                answer: "A probability density function over a region",
                explanation: "The integral of a probability density function over a region equals the probability of the variables lying in that region."
            },

            {
                q: "Which statement best summarizes Unit 4?",
                options: [
                    "Multiple integrals extend integration to areas and volumes, allowing us to compute quantities such as area, volume, mass, probability, center of mass, and moments of inertia.",
                    "They are only used to calculate the area of rectangles.",
                    "They replace derivatives in multivariable calculus.",
                    "They apply only to theoretical mathematics."
                ],
                answer: "Multiple integrals extend integration to areas and volumes, allowing us to compute quantities such as area, volume, mass, probability, center of mass, and moments of inertia.",
                explanation: "Unit 4 introduced double integrals, triple integrals, coordinate transformations, Jacobians, and their many practical applications."
            }

        ]

    },

    "calculus3-unit5-lesson1": {

        title: "Vector Fields",

        subtitle: "Learn how vector fields assign vectors to every point in space and model physical phenomena such as fluid flow, gravity, and electric fields.",

        body: `

<h2>Introduction</h2>

<p>In previous units, we studied scalar-valued functions, where each point was assigned a single number. For example, the temperature at every location in a room can be represented by a scalar function. In many scientific and engineering applications, however, each point is associated with both a magnitude and a direction. These are described by <strong>vector fields</strong>.</p>

<p>Vector fields are fundamental to physics, engineering, computer graphics, meteorology, robotics, machine learning, and many other disciplines. They describe wind patterns, ocean currents, electric and magnetic fields, gravitational forces, fluid flow, and even the direction of optimization algorithms.</p>

<h2>What Is a Vector Field?</h2>

<p>A vector field assigns a vector to every point in a region.</p>

<p>In two dimensions, a vector field has the form</p>

<p><strong>F(x, y) = P(x, y)i + Q(x, y)j</strong></p>

<p>where:</p>

<ul>

<li>P(x, y) is the x-component.</li>

<li>Q(x, y) is the y-component.</li>

<li>i and j are the standard unit vectors.</li>

</ul>

<p>Every point (x, y) has its own vector.</p>

<h2>Three-Dimensional Vector Fields</h2>

<p>In three dimensions, vector fields are written as</p>

<p><strong>F(x, y, z) = P(x, y, z)i + Q(x, y, z)j + R(x, y, z)k</strong></p>

<p>where:</p>

<ul>

<li>P is the x-component.</li>

<li>Q is the y-component.</li>

<li>R is the z-component.</li>

<li>k is the unit vector in the z-direction.</li>

</ul>

<p>Each point in space is assigned a three-dimensional vector.</p>

<h2>Visualizing Vector Fields</h2>

<p>Vector fields are commonly represented by drawing small arrows throughout a region.</p>

<ul>

<li>The direction of each arrow represents the direction of the vector.</li>

<li>The length of each arrow represents its magnitude.</li>

<li>Longer arrows indicate stronger fields.</li>

<li>Shorter arrows indicate weaker fields.</li>

</ul>

<p>Although infinitely many vectors exist, diagrams show only a representative sample.</p>

<h2>Magnitude of a Vector Field</h2>

<p>For a two-dimensional field</p>

<p><strong>F(x,y)=⟨P,Q⟩</strong></p>

<p>the magnitude is</p>

<p><strong>|F| = √(P² + Q²)</strong></p>

<p>For three dimensions,</p>

<p><strong>|F| = √(P² + Q² + R²)</strong></p>

<p>The magnitude measures the strength of the field at a point.</p>

<h2>Example 1</h2>

<p>Consider</p>

<p><strong>F(x,y)=⟨x,y⟩</strong></p>

<p>At several points:</p>

<ul>

<li>F(1,0)=⟨1,0⟩</li>

<li>F(0,2)=⟨0,2⟩</li>

<li>F(-2,1)=⟨-2,1⟩</li>

</ul>

<p>The vectors point directly away from the origin, and their lengths increase as the distance from the origin increases.</p>

<h2>Example 2</h2>

<p>Consider</p>

<p><strong>F(x,y)=⟨-y,x⟩</strong></p>

<p>The vectors rotate around the origin.</p>

<ul>

<li>At (1,0), the vector points upward.</li>

<li>At (0,1), the vector points left.</li>

<li>At (-1,0), the vector points downward.</li>

<li>At (0,-1), the vector points right.</li>

</ul>

<p>This field models circular motion around the origin.</p>

<h2>Conservative and Non-Conservative Fields</h2>

<p>Some vector fields represent the gradient of a scalar function. These are called <strong>conservative vector fields</strong>.</p>

<p>Conservative fields have important properties:</p>

<ul>

<li>Path-independent line integrals.</li>

<li>Potential functions exist.</li>

<li>Mechanical energy is conserved in many physical systems.</li>

</ul>

<p>Other vector fields are non-conservative and often describe rotational behavior such as vortices or circulating fluids.</p>

<h2>Applications</h2>

<p>Vector fields appear throughout mathematics and science.</p>

<ul>

<li>Wind speed and direction.</li>

<li>Ocean currents.</li>

<li>Electric fields.</li>

<li>Magnetic fields.</li>

<li>Gravitational fields.</li>

<li>Fluid dynamics.</li>

<li>Robot navigation.</li>

<li>Computer graphics.</li>

<li>Machine learning optimization.</li>

</ul>

<h2>Key Takeaways</h2>

<ul>

<li>A vector field assigns a vector to every point.</li>

<li>Vectors have both magnitude and direction.</li>

<li>Arrow plots visualize vector fields.</li>

<li>The magnitude measures field strength.</li>

<li>Some vector fields are conservative.</li>

<li>Vector fields model many real-world phenomena.</li>

</ul>

`,

        questions: [{
            q: "A vector field assigns:",
            options: [
                "A vector to every point in a region",
                "A single number to every point",
                "A curve to every point",
                "A surface to every point"
            ],
            answer: "A vector to every point in a region",
            explanation: "Unlike scalar fields, vector fields assign both a magnitude and a direction to every point in a region."
        },

        {
            q: "Which of the following is the standard form of a two-dimensional vector field?",
            options: [
                "F(x,y)=P(x,y)i+Q(x,y)j",
                "F(x,y)=P(x,y)+Q(x,y)",
                "F(x,y)=P(x,y)k",
                "F(x,y)=P(x,y)i"
            ],
            answer: "F(x,y)=P(x,y)i+Q(x,y)j",
            explanation: "A two-dimensional vector field has x- and y-components represented by the unit vectors i and j."
        },

        {
            q: "In a three-dimensional vector field, which unit vector represents the z-direction?",
            options: [
                "k",
                "i",
                "j",
                "r"
            ],
            answer: "k",
            explanation: "The standard basis vectors are i for the x-axis, j for the y-axis, and k for the z-axis."
        },

        {
            q: "On a vector field diagram, the direction of each arrow represents:",
            options: [
                "The direction of the vector",
                "The magnitude of the vector only",
                "The coordinates of the point",
                "The derivative of the field"
            ],
            answer: "The direction of the vector",
            explanation: "Each arrow points in the direction of the vector assigned to that location."
        },

        {
            q: "The length of an arrow in a vector field represents its:",
            options: [
                "Magnitude",
                "Angle only",
                "Position",
                "Curvature"
            ],
            answer: "Magnitude",
            explanation: "Longer arrows indicate larger magnitudes, while shorter arrows indicate weaker fields."
        },

        {
            q: "The magnitude of the two-dimensional vector field F(x,y)=⟨P,Q⟩ is:",
            options: [
                "√(P²+Q²)",
                "P²+Q²",
                "√(P+Q)",
                "P+Q"
            ],
            answer: "√(P²+Q²)",
            explanation: "The magnitude of a two-dimensional vector is found using the Pythagorean Theorem."
        },

        {
            q: "The vector field F(x,y)=⟨x,y⟩ has vectors that:",
            options: [
                "Point directly away from the origin",
                "Point toward the origin",
                "Rotate around the origin",
                "Always point upward"
            ],
            answer: "Point directly away from the origin",
            explanation: "Each vector points from the origin toward its corresponding point, creating a radial field."
        },

        {
            q: "The vector field F(x,y)=⟨-y,x⟩ primarily models:",
            options: [
                "Circular motion around the origin",
                "Motion directly away from the origin",
                "Motion toward the origin",
                "Motion along the x-axis only"
            ],
            answer: "Circular motion around the origin",
            explanation: "This vector field produces vectors tangent to circles centered at the origin, indicating rotational motion."
        },

        {
            q: "A conservative vector field is one that:",
            options: [
                "Can be written as the gradient of a scalar function",
                "Always has zero magnitude",
                "Contains only constant vectors",
                "Exists only in three dimensions"
            ],
            answer: "Can be written as the gradient of a scalar function",
            explanation: "Conservative vector fields are gradients of potential functions and have path-independent line integrals."
        },

        {
            q: "Which of the following is a common real-world application of vector fields?",
            options: [
                "Modeling wind speed and direction",
                "Factoring quadratic polynomials",
                "Solving linear equations only",
                "Finding the roots of a polynomial"
            ],
            answer: "Modeling wind speed and direction",
            explanation: "Vector fields naturally represent quantities that have both magnitude and direction, such as wind, fluid flow, gravity, and electric fields."
        }

        ]

    },
    "calculus3-unit5-lesson2": {

        title: "Line Integrals",

        subtitle: "Learn how to integrate scalar and vector fields along curves and understand applications such as work, mass, and fluid flow.",

        body: `

<h2>Introduction</h2>

<p>In single-variable calculus, integrals are computed over intervals on the real line. In multivariable calculus, we often need to integrate along curved paths instead of straight intervals. These integrals are called <strong>line integrals</strong>.</p>

<p>A line integral accumulates quantities as we move along a curve. Depending on what is being integrated, a line integral can calculate mass, work, circulation, or other physical quantities.</p>

<p>There are two primary types of line integrals:</p>

<ul>

<li>Line integrals of scalar fields.</li>

<li>Line integrals of vector fields.</li>

</ul>

<h2>Curves in Space</h2>

<p>Before computing a line integral, we describe the curve using a parameter.</p>

<p>A curve is commonly written as</p>

<p><strong>r(t)=⟨x(t),y(t),z(t)⟩</strong></p>

<p>where t varies over an interval</p>

<p><strong>a ≤ t ≤ b</strong></p>

<p>As t changes, the point moves along the curve.</p>

<h2>Differential Arc Length</h2>

<p>The small distance traveled along the curve is called the differential arc length.</p>

<p>It is written as</p>

<p><strong>ds = |r'(t)| dt</strong></p>

<p>where |r'(t)| is the speed along the curve.</p>

<p>This converts integration with respect to distance into integration with respect to the parameter.</p>

<h2>Line Integrals of Scalar Fields</h2>

<p>If a scalar function f(x,y,z) is defined along a curve C, the line integral is</p>

<p><strong>∫<sub>C</sub> f ds</strong></p>

<p>After parameterizing the curve, this becomes</p>

<p><strong>∫<sub>a</sub><sup>b</sup> f(r(t)) |r'(t)| dt</strong></p>

<p>This integral accumulates scalar quantities along the curve.</p>

<h2>Applications of Scalar Line Integrals</h2>

<ul>

<li>Mass of a thin wire with varying density.</li>

<li>Total heat along a path.</li>

<li>Charge distributed along a wire.</li>

<li>Average values along curves.</li>

</ul>

<h2>Example: Mass of a Wire</h2>

<p>Suppose a wire follows a curve C and has density ρ(x,y).</p>

<p>The total mass is</p>

<p><strong>Mass = ∫<sub>C</sub> ρ ds</strong></p>

<p>The density is accumulated along the entire length of the wire.</p>

<h2>Line Integrals of Vector Fields</h2>

<p>Suppose a vector field is</p>

<p><strong>F(x,y,z)=⟨P,Q,R⟩</strong></p>

<p>The line integral is written as</p>

<p><strong>∫<sub>C</sub> F · dr</strong></p>

<p>where</p>

<p><strong>dr = r'(t) dt</strong></p>

<p>After parameterization, the integral becomes</p>

<p><strong>∫<sub>a</sub><sup>b</sup> F(r(t)) · r'(t) dt</strong></p>

<h2>Physical Meaning: Work</h2>

<p>One of the most important applications of vector line integrals is computing work.</p>

<p>If a force field acts on an object moving along a curve, the work performed is</p>

<p><strong>Work = ∫<sub>C</sub> F · dr</strong></p>

<p>The dot product measures how much of the force acts in the direction of motion.</p>

<ul>

<li>If the force points with the motion, work is positive.</li>

<li>If the force opposes the motion, work is negative.</li>

<li>If the force is perpendicular to the motion, no work is done.</li>

</ul>

<h2>Example</h2>

<p>A constant force field</p>

<p><strong>F=⟨2,3⟩</strong></p>

<p>acts on an object moving in the direction</p>

<p><strong>dr=⟨1,0⟩</strong></p>

<p>The work contribution is</p>

<p><strong>F·dr=2</strong></p>

<p>Only the component of the force parallel to the motion contributes to the work.</p>

<h2>Orientation Matters</h2>

<p>Reversing the direction of a curve changes the sign of a vector line integral.</p>

<ul>

<li>Following the curve forward gives one value.</li>

<li>Traversing the same curve backward gives the negative of that value.</li>

</ul>

<p>Scalar line integrals are not affected by orientation because distance is always positive.</p>

<h2>Applications</h2>

<ul>

<li>Mechanical work.</li>

<li>Fluid flow.</li>

<li>Electric fields.</li>

<li>Magnetic fields.</li>

<li>Mass of wires.</li>

<li>Charge distributions.</li>

<li>Circulation of fluids.</li>

<li>Engineering design.</li>

</ul>

<h2>Key Takeaways</h2>

<ul>

<li>Line integrals accumulate quantities along curves.</li>

<li>Curves are parameterized using r(t).</li>

<li>Scalar line integrals use ds.</li>

<li>Vector line integrals use dr.</li>

<li>Work is computed using ∫C F·dr.</li>

<li>The orientation of a curve affects vector line integrals.</li>

<li>Line integrals have many applications in physics and engineering.</li>

</ul>

`,

        questions: [







            {
                q: "A line integral accumulates quantities along a:",
                options: [
                    "Curve",
                    "Plane",
                    "Volume",
                    "Single point"
                ],
                answer: "Curve",
                explanation: "Unlike ordinary integrals that accumulate over intervals, line integrals accumulate quantities as we move along a curve."
            },

            {
                q: "A curve in space is commonly parameterized as:",
                options: [
                    "r(t)=⟨x(t),y(t),z(t)⟩",
                    "r=x+y+z",
                    "F(x,y)=P+Q",
                    "r=x²+y²"
                ],
                answer: "r(t)=⟨x(t),y(t),z(t)⟩",
                explanation: "A parameterization expresses each coordinate as a function of the parameter t."
            },

            {
                q: "The differential arc length is given by:",
                options: [
                    "ds=|r'(t)|dt",
                    "ds=r(t)dt",
                    "ds=F(r(t))dt",
                    "ds=dr/dt"
                ],
                answer: "ds=|r'(t)|dt",
                explanation: "The magnitude of the velocity vector gives the rate at which arc length changes with respect to the parameter."
            },

            {
                q: "A scalar line integral is written as:",
                options: [
                    "∫C f ds",
                    "∫C F·dr",
                    "∬R f dA",
                    "∭E f dV"
                ],
                answer: "∫C f ds",
                explanation: "Scalar line integrals accumulate scalar quantities along the length of a curve."
            },

            {
                q: "A vector line integral is written as:",
                options: [
                    "∫C F·dr",
                    "∫C f ds",
                    "∬R F dA",
                    "∭E F dV"
                ],
                answer: "∫C F·dr",
                explanation: "Vector line integrals compute the accumulation of a vector field along a curve using the dot product."
            },

            {
                q: "Which quantity is commonly computed using a vector line integral?",
                options: [
                    "Work",
                    "Area",
                    "Volume",
                    "Partial derivative"
                ],
                answer: "Work",
                explanation: "The work done by a force field along a path is computed using the line integral ∫C F·dr."
            },

            {
                q: "The dot product in a vector line integral measures:",
                options: [
                    "How much of the force acts in the direction of motion",
                    "The length of the curve",
                    "The curvature of the path",
                    "The density of the field"
                ],
                answer: "How much of the force acts in the direction of motion",
                explanation: "Only the component of the force parallel to the direction of motion contributes to the work."
            },

            {
                q: "If a force is perpendicular to the direction of motion, the work done is:",
                options: [
                    "Zero",
                    "Positive",
                    "Negative",
                    "Maximum"
                ],
                answer: "Zero",
                explanation: "The dot product of perpendicular vectors is zero, so no work is performed."
            },

            {
                q: "Reversing the orientation of a curve changes a vector line integral by:",
                options: [
                    "Changing its sign",
                    "Doubling its value",
                    "Making it zero",
                    "Leaving it unchanged"
                ],
                answer: "Changing its sign",
                explanation: "Traversing the curve in the opposite direction reverses the direction of dr, producing the negative of the original integral."
            },

            {
                q: "Which of the following is an application of scalar line integrals?",
                options: [
                    "Finding the mass of a wire with varying density",
                    "Finding the volume of a sphere",
                    "Computing a partial derivative",
                    "Finding the gradient of a function"
                ],
                answer: "Finding the mass of a wire with varying density",
                explanation: "A scalar line integral accumulates density along a wire to compute its total mass."
            }

        ]

    },

    "calculus3-unit5-lesson3": {

        title: "Fundamental Theorem for Line Integrals",

        subtitle: "Learn how conservative vector fields and potential functions make many line integrals easy to evaluate.",

        body: `

<h2>Introduction</h2>

<p>Computing a line integral directly often requires parameterizing a curve and evaluating an integral. Fortunately, many vector fields have a special property that makes this unnecessary. If a vector field is <strong>conservative</strong>, the value of the line integral depends only on the starting and ending points—not on the path taken.</p>

<p>This powerful result is called the <strong>Fundamental Theorem for Line Integrals</strong>. It is one of the most important theorems in vector calculus because it greatly simplifies many calculations.</p>

<h2>Conservative Vector Fields</h2>

<p>A vector field is conservative if it can be written as the gradient of a scalar function.</p>

<p>That is, if there exists a scalar function f such that</p>

<p><strong>F = ∇f</strong></p>

<p>then F is called a conservative vector field.</p>

<p>The scalar function f is called the <strong>potential function</strong>.</p>

<h2>The Gradient</h2>

<p>For a function f(x,y), the gradient is</p>

<p><strong>∇f = ⟨∂f/∂x, ∂f/∂y⟩</strong></p>

<p>For three variables,</p>

<p><strong>∇f = ⟨∂f/∂x, ∂f/∂y, ∂f/∂z⟩</strong></p>

<p>The gradient points in the direction of the greatest increase of the scalar function.</p>

<h2>The Fundamental Theorem</h2>

<p>If F is a conservative vector field with potential function f, then</p>

<p><strong>∫<sub>C</sub> F · dr = f(B) − f(A)</strong></p>

<p>where:</p>

<ul>

<li>A is the starting point.</li>

<li>B is the ending point.</li>

<li>C is any path connecting them.</li>

</ul>

<p>Notice that the path itself never appears in the final calculation.</p>

<h2>Path Independence</h2>

<p>For conservative vector fields, every path between the same two points produces exactly the same line integral.</p>

<ul>

<li>Straight lines.</li>

<li>Curved paths.</li>

<li>Piecewise smooth curves.</li>

</ul>

<p>All give the same answer as long as the endpoints are identical.</p>

<h2>Example</h2>

<p>Suppose</p>

<p><strong>f(x,y)=x²+y²</strong></p>

<p>Then</p>

<p><strong>∇f=⟨2x,2y⟩</strong></p>

<p>Therefore</p>

<p><strong>F=⟨2x,2y⟩</strong></p>

<p>To compute the work from (1,1) to (3,2):</p>

<ul>

<li>f(3,2)=3²+2²=13</li>

<li>f(1,1)=1²+1²=2</li>

</ul>

<p>The line integral equals</p>

<p><strong>13−2=11</strong></p>

<p>No parameterization of the curve is necessary.</p>

<h2>Closed Curves</h2>

<p>A closed curve starts and ends at the same point.</p>

<p>Since the starting and ending points are identical,</p>

<p><strong>f(B)−f(A)=0</strong></p>

<p>Therefore, for every conservative vector field,</p>

<p><strong>∮ F·dr = 0</strong></p>

<p>This is an important test for conservative fields.</p>

<h2>Finding a Potential Function</h2>

<p>To determine whether a vector field is conservative, we often try to find its potential function.</p>

<p>The general process is:</p>

<ol>

<li>Integrate the x-component with respect to x.</li>

<li>Differentiate the result with respect to y.</li>

<li>Compare it with the y-component.</li>

<li>Determine any missing functions or constants.</li>

<li>Verify that the gradient reproduces the original vector field.</li>

</ol>

<h2>Testing for Conservativeness</h2>

<p>For a two-dimensional vector field</p>

<p><strong>F=⟨P,Q⟩</strong></p>

<p>defined on a simply connected region, a common test is</p>

<p><strong>∂P/∂y = ∂Q/∂x</strong></p>

<p>If these mixed partial derivatives are equal everywhere in the region, the field is conservative.</p>

<p>This test is sufficient only when the region has no holes.</p>

<h2>Applications</h2>

<ul>

<li>Mechanical work.</li>

<li>Gravitational fields.</li>

<li>Electric potential.</li>

<li>Energy conservation.</li>

<li>Fluid mechanics.</li>

<li>Optimization.</li>

</ul>

<h2>Key Takeaways</h2>

<ul>

<li>A conservative vector field is the gradient of a scalar function.</li>

<li>The scalar function is called the potential function.</li>

<li>The Fundamental Theorem for Line Integrals replaces an integral with the difference of potential values.</li>

<li>Conservative fields have path-independent line integrals.</li>

<li>The line integral around any closed curve in a conservative field equals zero.</li>

<li>Mixed partial derivatives help test whether a vector field is conservative.</li>

</ul>

`,

        questions: [{
            q: "A conservative vector field can be written as:",
            options: [
                "The gradient of a scalar function",
                "The curl of a scalar function",
                "A constant vector only",
                "A line integral"
            ],
            answer: "The gradient of a scalar function",
            explanation: "A vector field is conservative if it can be expressed as the gradient of a scalar-valued potential function."
        },

        {
            q: "The scalar function whose gradient equals a conservative vector field is called the:",
            options: [
                "Potential function",
                "Directional function",
                "Jacobian",
                "Vector potential"
            ],
            answer: "Potential function",
            explanation: "The potential function generates the conservative vector field through its gradient."
        },

        {
            q: "The Fundamental Theorem for Line Integrals states that:",
            options: [
                "The line integral equals the difference in the potential function evaluated at the endpoints",
                "Every line integral equals zero",
                "The value depends only on the length of the curve",
                "Every vector field is conservative"
            ],
            answer: "The line integral equals the difference in the potential function evaluated at the endpoints",
            explanation: "For a conservative vector field, ∫C F·dr = f(B) − f(A), where f is the potential function."
        },

        {
            q: "For a conservative vector field, the value of a line integral depends only on:",
            options: [
                "The starting and ending points",
                "The exact path taken",
                "The length of the curve",
                "The speed of travel"
            ],
            answer: "The starting and ending points",
            explanation: "This property is known as path independence."
        },

        {
            q: "The gradient of a scalar function points in the direction of:",
            options: [
                "The greatest increase of the function",
                "The greatest decrease of the function",
                "Constant function value",
                "Zero change"
            ],
            answer: "The greatest increase of the function",
            explanation: "The gradient vector always points in the direction of the steepest ascent."
        },

        {
            q: "If a conservative vector field is integrated around a closed curve, the result is:",
            options: [
                "0",
                "1",
                "The area enclosed",
                "The length of the curve"
            ],
            answer: "0",
            explanation: "Since the starting and ending points are the same, the potential difference is zero."
        },

        {
            q: "A closed curve is one that:",
            options: [
                "Starts and ends at the same point",
                "Is always circular",
                "Has no endpoints",
                "Contains only straight lines"
            ],
            answer: "Starts and ends at the same point",
            explanation: "A closed curve returns to its starting point."
        },

        {
            q: "For a two-dimensional vector field F=⟨P,Q⟩ defined on a simply connected region, which condition indicates the field is conservative?",
            options: [
                "∂P/∂y = ∂Q/∂x",
                "∂P/∂x = ∂Q/∂y",
                "P = Q",
                "∂P/∂x = ∂P/∂y"
            ],
            answer: "∂P/∂y = ∂Q/∂x",
            explanation: "Equality of these mixed partial derivatives is a common test for conservativeness on simply connected regions."
        },

        {
            q: "Which of the following is NOT required when using the Fundamental Theorem for Line Integrals on a conservative field?",
            options: [
                "Parameterizing the curve",
                "Knowing the endpoints",
                "Finding the potential function",
                "Evaluating the potential at the endpoints"
            ],
            answer: "Parameterizing the curve",
            explanation: "Once a potential function is known, only the endpoints are needed to evaluate the line integral."
        },

        {
            q: "One important application of conservative vector fields is:",
            options: [
                "Modeling energy-conserving systems such as gravitational and electric fields",
                "Finding the roots of quadratic equations",
                "Computing matrix inverses",
                "Constructing Taylor polynomials"
            ],
            answer: "Modeling energy-conserving systems such as gravitational and electric fields",
            explanation: "Many physical force fields, including gravitational and electrostatic fields, are conservative and can be analyzed using potential functions."
        }

        ]

    },

    "calculus3-unit5-lesson4": {

        title: "Green's Theorem",

        subtitle: "Learn how Green's Theorem connects line integrals around closed curves with double integrals over the enclosed region.",

        body: `

<h2>Introduction</h2>

<p>One of the most beautiful results in vector calculus is <strong>Green's Theorem</strong>. It transforms a line integral around a closed curve into a double integral over the region enclosed by that curve.</p>

<p>Instead of evaluating a potentially difficult line integral, Green's Theorem often allows us to compute an equivalent double integral that is much easier.</p>

<p>This theorem provides the foundation for more advanced results such as Stokes' Theorem and the Divergence Theorem.</p>

<h2>Closed Curves</h2>

<p>Green's Theorem applies only to <strong>simple closed curves</strong>.</p>

<p>A simple closed curve:</p>

<ul>

<li>Starts and ends at the same point.</li>

<li>Does not intersect itself.</li>

<li>Encloses a region in the plane.</li>

</ul>

<p>The enclosed region is usually denoted by <strong>R</strong>.</p>

<h2>Positive Orientation</h2>

<p>The boundary curve must be traversed in the positive (counterclockwise) direction.</p>

<p>As you move along the curve:</p>

<ul>

<li>The enclosed region always remains on your left.</li>

<li>This orientation is called positive orientation.</li>

</ul>

<p>Traversing the curve clockwise changes the sign of the integral.</p>

<h2>Statement of Green's Theorem</h2>

<p>Suppose</p>

<p><strong>F=⟨P,Q⟩</strong></p>

<p>is a vector field whose components have continuous first partial derivatives.</p>

<p>Then</p>

<p><strong>∮<sub>C</sub> P dx + Q dy = ∬<sub>R</sub> (∂Q/∂x − ∂P/∂y) dA</strong></p>

<p>where:</p>

<ul>

<li>C is the positively oriented boundary.</li>

<li>R is the enclosed region.</li>

</ul>

<h2>Meaning of the Theorem</h2>

<p>The left side measures the circulation of the vector field around the boundary.</p>

<p>The right side measures the total rotation, or <strong>curl</strong>, throughout the interior of the region.</p>

<p>Green's Theorem says these two quantities are exactly equal.</p>

<h2>Circulation</h2>

<p>Circulation measures how strongly a vector field moves around a closed path.</p>

<ul>

<li>Positive circulation indicates counterclockwise rotation.</li>

<li>Negative circulation indicates clockwise rotation.</li>

<li>Zero circulation indicates little or no net rotation.</li>

</ul>

<h2>Example</h2>

<p>Consider</p>

<p><strong>F=⟨−y,x⟩</strong></p>

<p>Then</p>

<ul>

<li>∂Q/∂x = 1</li>

<li>∂P/∂y = −1</li>

</ul>

<p>Therefore</p>

<p><strong>∂Q/∂x − ∂P/∂y = 2</strong></p>

<p>If R is the unit disk, Green's Theorem becomes</p>

<p><strong>∮ F·dr = ∬ 2 dA</strong></p>

<p>Since the area of the unit disk is π, the circulation equals</p>

<p><strong>2π</strong></p>

<p>Notice that evaluating the double integral is much simpler than directly computing the line integral.</p>

<h2>Conditions for Green's Theorem</h2>

<ul>

<li>The curve must be closed.</li>

<li>The curve must not cross itself.</li>

<li>The vector field must have continuous first partial derivatives.</li>

<li>The enclosed region should not contain holes unless additional boundaries are included.</li>

</ul>

<h2>Flux Form of Green's Theorem</h2>

<p>Green's Theorem also has a flux form.</p>

<p>It relates the outward flow across a boundary to the divergence inside the region.</p>

<p>This version serves as the two-dimensional precursor to the Divergence Theorem.</p>

<h2>Applications</h2>

<ul>

<li>Fluid circulation.</li>

<li>Electromagnetic fields.</li>

<li>Aerodynamics.</li>

<li>Robot motion planning.</li>

<li>Computer graphics.</li>

<li>Mechanical engineering.</li>

<li>Weather and ocean current modeling.</li>

</ul>

<h2>Key Takeaways</h2>

<ul>

<li>Green's Theorem converts a line integral into a double integral.</li>

<li>It applies to positively oriented simple closed curves.</li>

<li>The theorem relates circulation around a boundary to rotation inside the region.</li>

<li>Counterclockwise orientation is positive.</li>

<li>Clockwise orientation changes the sign.</li>

<li>Green's Theorem often makes difficult line integrals much easier to evaluate.</li>

</ul>

`,

        questions: [{
            q: "Green's Theorem converts:",
            options: [
                "A line integral around a closed curve into a double integral over the enclosed region",
                "A double integral into a triple integral",
                "A line integral into a surface integral",
                "A partial derivative into a line integral"
            ],
            answer: "A line integral around a closed curve into a double integral over the enclosed region",
            explanation: "Green's Theorem relates circulation around a closed curve to a double integral over the region enclosed by the curve."
        },

        {
            q: "Green's Theorem applies to:",
            options: [
                "Simple closed curves",
                "Any open curve",
                "Only straight line segments",
                "Only circles"
            ],
            answer: "Simple closed curves",
            explanation: "The boundary must be a simple closed curve that encloses a region in the plane."
        },

        {
            q: "A positively oriented curve is traversed:",
            options: [
                "Counterclockwise",
                "Clockwise",
                "From right to left",
                "From top to bottom"
            ],
            answer: "Counterclockwise",
            explanation: "Positive orientation means the enclosed region remains on your left as you travel around the boundary."
        },

        {
            q: "If a closed curve is traversed clockwise instead of counterclockwise, the value of the line integral:",
            options: [
                "Changes sign",
                "Remains unchanged",
                "Becomes zero",
                "Doubles"
            ],
            answer: "Changes sign",
            explanation: "Reversing the orientation of the boundary reverses the sign of the line integral."
        },

        {
            q: "The left side of Green's Theorem measures:",
            options: [
                "The circulation around the boundary",
                "The area of the region",
                "The volume enclosed",
                "The gradient of the field"
            ],
            answer: "The circulation around the boundary",
            explanation: "The line integral around the closed curve measures the field's circulation."
        },

        {
            q: "The quantity ∂Q/∂x − ∂P/∂y represents the field's:",
            options: [
                "Rotation (scalar curl)",
                "Gradient",
                "Divergence",
                "Potential"
            ],
            answer: "Rotation (scalar curl)",
            explanation: "This expression measures the tendency of the vector field to rotate in two dimensions."
        },

        {
            q: "For Green's Theorem to apply, the vector field should have:",
            options: [
                "Continuous first partial derivatives",
                "Continuous second partial derivatives only",
                "Constant components",
                "Zero curl everywhere"
            ],
            answer: "Continuous first partial derivatives",
            explanation: "Continuous first partial derivatives are one of the standard conditions required for Green's Theorem."
        },

        {
            q: "One advantage of Green's Theorem is that it often:",
            options: [
                "Replaces a difficult line integral with an easier double integral",
                "Eliminates the need for integration entirely",
                "Converts every problem into polar coordinates",
                "Computes derivatives automatically"
            ],
            answer: "Replaces a difficult line integral with an easier double integral",
            explanation: "Many line integrals are significantly easier to evaluate after converting them into double integrals."
        },

        {
            q: "The flux form of Green's Theorem relates the outward flow across a boundary to the:",
            options: [
                "Divergence inside the region",
                "Gradient inside the region",
                "Potential function",
                "Arc length of the boundary"
            ],
            answer: "Divergence inside the region",
            explanation: "The flux form connects the outward flux across the boundary with the divergence over the enclosed region."
        },

        {
            q: "Which of the following is a common application of Green's Theorem?",
            options: [
                "Analyzing fluid circulation around closed boundaries",
                "Factoring polynomials",
                "Finding eigenvalues of matrices",
                "Computing Taylor series"
            ],
            answer: "Analyzing fluid circulation around closed boundaries",
            explanation: "Green's Theorem is widely used in fluid dynamics, electromagnetism, engineering, and other fields involving circulation and flux."
        }

        ]

    },

    "calculus3-unit5-lesson5": {

        title: "Surface Integrals",

        subtitle: "Learn how to integrate scalar and vector fields over surfaces and compute quantities such as surface area and flux.",

        body: `

<h2>Introduction</h2>

<p>Double integrals accumulate quantities over flat regions, while triple integrals accumulate quantities throughout volumes. Sometimes, however, we are interested in quantities distributed across a <strong>surface</strong>. Surface integrals extend integration to curved two-dimensional surfaces embedded in three-dimensional space.</p>

<p>Surface integrals are used to compute surface area, mass distributed over a surface, electric flux, fluid flow through a surface, heat transfer, and many other important physical quantities.</p>

<h2>What Is a Surface?</h2>

<p>A surface is a two-dimensional object that exists in three-dimensional space.</p>

<p>Examples include:</p>

<ul>

<li>The surface of a sphere.</li>

<li>The side of a cylinder.</li>

<li>A paraboloid.</li>

<li>A plane.</li>

<li>A curved sheet of metal.</li>

</ul>

<p>Unlike a solid, a surface has negligible thickness.</p>

<h2>Parameterizing a Surface</h2>

<p>Just as curves are parameterized by one variable, surfaces are parameterized by two variables.</p>

<p>A surface is commonly written as</p>

<p><strong>r(u,v)=⟨x(u,v),y(u,v),z(u,v)⟩</strong></p>

<p>where (u,v) varies over a region D in the parameter plane.</p>

<p>Each pair (u,v) corresponds to one point on the surface.</p>

<h2>Tangent Vectors</h2>

<p>The partial derivatives of the parameterization produce two tangent vectors:</p>

<ul>

<li>r<sub>u</sub> = ∂r/∂u</li>

<li>r<sub>v</sub> = ∂r/∂v</li>

</ul>

<p>These vectors lie tangent to the surface and describe how the surface changes in each parameter direction.</p>

<h2>Surface Element</h2>

<p>The surface element is</p>

<p><strong>dS = |r<sub>u</sub> × r<sub>v</sub>| du dv</strong></p>

<p>The cross product produces a vector perpendicular to the surface.</p>

<p>Its magnitude equals the area of a tiny parallelogram on the surface.</p>

<h2>Surface Integrals of Scalar Fields</h2>

<p>If a scalar function f(x,y,z) is defined on a surface S, then the surface integral is</p>

<p><strong>∬<sub>S</sub> f dS</strong></p>

<p>After parameterization, it becomes</p>

<p><strong>∬<sub>D</sub> f(r(u,v)) |r<sub>u</sub> × r<sub>v</sub>| du dv</strong></p>

<p>This accumulates scalar quantities over the surface.</p>

<h2>Applications of Scalar Surface Integrals</h2>

<ul>

<li>Surface area.</li>

<li>Mass of a thin shell.</li>

<li>Heat distributed over a surface.</li>

<li>Charge on a conducting surface.</li>

</ul>

<h2>Surface Integrals of Vector Fields</h2>

<p>If F is a vector field, the surface integral computes the <strong>flux</strong> through the surface.</p>

<p>The integral is written as</p>

<p><strong>∬<sub>S</sub> F · n dS</strong></p>

<p>where n is a unit normal vector to the surface.</p>

<p>The dot product measures how much of the field passes through the surface.</p>

<h2>Understanding Flux</h2>

<p>Flux measures the amount of a vector field flowing through a surface.</p>

<ul>

<li>Positive flux means the field points generally in the direction of the normal vector.</li>

<li>Negative flux means the field points opposite the normal vector.</li>

<li>Zero flux means the field is tangent to the surface.</li>

</ul>

<h2>Example</h2>

<p>Imagine wind blowing through an open window.</p>

<ul>

<li>If the wind blows directly through the window, the flux is large.</li>

<li>If the wind blows parallel to the window, almost no air passes through it.</li>

<li>The angle between the field and the surface determines the flux.</li>

</ul>

<h2>Orientation of a Surface</h2>

<p>Every surface has two possible normal directions.</p>

<ul>

<li>An upward normal.</li>

<li>A downward normal.</li>

</ul>

<p>Changing the orientation reverses the sign of a vector surface integral.</p>

<p>For closed surfaces, the outward-pointing normal is the standard orientation.</p>

<h2>Applications</h2>

<ul>

<li>Fluid flow through membranes.</li>

<li>Electromagnetic fields.</li>

<li>Heat transfer.</li>

<li>Solar radiation.</li>

<li>Aerodynamics.</li>

<li>Engineering design.</li>

<li>Computer graphics.</li>

<li>Medical imaging.</li>

</ul>

<h2>Key Takeaways</h2>

<ul>

<li>Surface integrals extend integration to curved surfaces.</li>

<li>Surfaces are parameterized using two variables.</li>

<li>The cross product of tangent vectors determines the surface element.</li>

<li>Scalar surface integrals accumulate quantities distributed over a surface.</li>

<li>Vector surface integrals compute flux.</li>

<li>Surface orientation affects the sign of vector surface integrals.</li>

<li>Surface integrals have many applications in science and engineering.</li>

</ul>

`,

        questions: [{
            q: "Surface integrals are used to integrate over:",
            options: [
                "Curved surfaces",
                "Only straight lines",
                "Only volumes",
                "Only rectangular regions"
            ],
            answer: "Curved surfaces",
            explanation: "Surface integrals extend integration to two-dimensional surfaces embedded in three-dimensional space."
        },

        {
            q: "A surface is commonly parameterized using:",
            options: [
                "Two variables",
                "One variable",
                "Three variables",
                "No variables"
            ],
            answer: "Two variables",
            explanation: "A surface is described by two parameters, usually denoted by u and v."
        },

        {
            q: "A parameterized surface is commonly written as:",
            options: [
                "r(u,v)=⟨x(u,v),y(u,v),z(u,v)⟩",
                "r(t)=⟨x(t),y(t),z(t)⟩",
                "F(x,y)=⟨P,Q⟩",
                "z=f(x)"
            ],
            answer: "r(u,v)=⟨x(u,v),y(u,v),z(u,v)⟩",
            explanation: "Each pair (u,v) corresponds to a point on the surface."
        },

        {
            q: "The vectors rᵤ and rᵥ are:",
            options: [
                "Tangent vectors to the surface",
                "Normal vectors to the surface",
                "Gradient vectors",
                "Velocity vectors"
            ],
            answer: "Tangent vectors to the surface",
            explanation: "The partial derivatives with respect to u and v lie tangent to the surface."
        },

        {
            q: "The surface element dS is computed using:",
            options: [
                "|rᵤ × rᵥ| du dv",
                "|rᵤ + rᵥ| du dv",
                "|rᵤ · rᵥ| du dv",
                "r(u,v) du dv"
            ],
            answer: "|rᵤ × rᵥ| du dv",
            explanation: "The magnitude of the cross product gives the area of a small parallelogram on the surface."
        },

        {
            q: "A scalar surface integral is written as:",
            options: [
                "∬S f dS",
                "∬R f dA",
                "∭E f dV",
                "∫C f ds"
            ],
            answer: "∬S f dS",
            explanation: "Scalar surface integrals accumulate scalar quantities distributed over a surface."
        },

        {
            q: "A vector surface integral primarily computes:",
            options: [
                "Flux through a surface",
                "Surface area only",
                "Arc length",
                "Volume"
            ],
            answer: "Flux through a surface",
            explanation: "Vector surface integrals measure the flow of a vector field through a surface."
        },

        {
            q: "If a vector field is tangent to a surface everywhere, the flux is:",
            options: [
                "Zero",
                "Maximum",
                "Positive",
                "Negative"
            ],
            answer: "Zero",
            explanation: "Only the component of the field perpendicular to the surface contributes to the flux."
        },

        {
            q: "For a closed surface, the standard orientation uses the:",
            options: [
                "Outward-pointing normal vector",
                "Inward-pointing normal vector",
                "Upward tangent vector",
                "Direction of greatest curvature"
            ],
            answer: "Outward-pointing normal vector",
            explanation: "Closed surfaces are conventionally oriented using outward-pointing normal vectors."
        },

        {
            q: "Which of the following is a common application of surface integrals?",
            options: [
                "Calculating fluid flow through a surface",
                "Factoring polynomials",
                "Finding roots of equations",
                "Computing Taylor series"
            ],
            answer: "Calculating fluid flow through a surface",
            explanation: "Surface integrals are widely used to compute flux in fluid dynamics, electromagnetism, and engineering."
        }

        ]

    },




    "calculus3-unit5-lesson6": {

        title: "Stokes' Theorem and the Divergence Theorem",

        subtitle: "Learn how Stokes' Theorem and the Divergence Theorem connect line integrals, surface integrals, and volume integrals into a unified framework.",

        body: `

<h2>Introduction</h2>

<p>Green's Theorem showed that a line integral around a closed curve can be converted into a double integral over the enclosed region. Two even more powerful results extend this idea to three dimensions:</p>

<ul>

<li><strong>Stokes' Theorem</strong></li>

<li><strong>The Divergence Theorem</strong></li>

</ul>

<p>Together, these theorems form the foundation of vector calculus by connecting integrals over boundaries with integrals over the regions they enclose.</p>

<h2>Review of the Big Picture</h2>

<p>The major integral theorems of vector calculus are closely related.</p>

<ul>

<li>The Fundamental Theorem of Calculus connects derivatives and ordinary integrals.</li>

<li>Green's Theorem connects line integrals and double integrals.</li>

<li>Stokes' Theorem connects line integrals and surface integrals.</li>

<li>The Divergence Theorem connects surface integrals and triple integrals.</li>

</ul>

<p>Each theorem transforms an integral over a boundary into an integral over the enclosed region.</p>

<h2>Stokes' Theorem</h2>

<p>Suppose S is an oriented surface whose boundary curve is C.</p>

<p>Stokes' Theorem states</p>

<p><strong>∮<sub>C</sub> F · dr = ∬<sub>S</sub> (∇ × F) · n dS</strong></p>

<p>where:</p>

<ul>

<li>C is the positively oriented boundary curve.</li>

<li>S is the surface bounded by C.</li>

<li>∇ × F is the curl of the vector field.</li>

<li>n is the unit normal vector.</li>

</ul>

<h2>Meaning of Stokes' Theorem</h2>

<p>The left side measures the circulation around the boundary.</p>

<p>The right side measures the total rotation (curl) across the entire surface.</p>

<p>Stokes' Theorem states that these two quantities are equal.</p>

<h2>The Curl</h2>

<p>The curl measures the tendency of a vector field to rotate.</p>

<ul>

<li>Large curl indicates strong local rotation.</li>

<li>Zero curl indicates little or no local rotation.</li>

<li>Curl plays an important role in fluid mechanics and electromagnetism.</li>

</ul>

<h2>Orientation for Stokes' Theorem</h2>

<p>The surface and boundary must have compatible orientations.</p>

<p>The correct orientation is determined using the <strong>right-hand rule</strong>.</p>

<ul>

<li>Point the thumb of your right hand along the chosen normal vector.</li>

<li>Your fingers curl in the positive direction around the boundary.</li>

</ul>

<h2>Divergence Theorem</h2>

<p>The Divergence Theorem applies to closed surfaces.</p>

<p>Suppose S is a closed surface enclosing a solid E.</p>

<p>The theorem states</p>

<p><strong>∯<sub>S</sub> F · n dS = ∭<sub>E</sub> (∇ · F) dV</strong></p>

<p>where:</p>

<ul>

<li>S is the closed surface.</li>

<li>E is the enclosed solid.</li>

<li>∇ · F is the divergence.</li>

</ul>

<h2>Meaning of the Divergence Theorem</h2>

<p>The left side measures the total outward flux through the surface.</p>

<p>The right side measures the total divergence throughout the volume.</p>

<p>The theorem states that the total outward flow through the boundary equals the total amount of flow generated inside the solid.</p>

<h2>The Divergence</h2>

<p>Divergence measures how much a vector field spreads outward from a point.</p>

<ul>

<li>Positive divergence indicates a source.</li>

<li>Negative divergence indicates a sink.</li>

<li>Zero divergence indicates no net expansion or contraction.</li>

</ul>

<h2>Example</h2>

<p>Imagine air filling a balloon.</p>

<ul>

<li>If air is produced inside the balloon, positive divergence occurs.</li>

<li>The total air leaving the balloon's surface equals the total air generated inside.</li>

<li>This is exactly what the Divergence Theorem describes.</li>

</ul>

<h2>Comparing the Major Theorems</h2>

<table>

<tr>
<th>Theorem</th>
<th>Boundary Integral</th>
<th>Interior Integral</th>
</tr>

<tr>
<td>Green's Theorem</td>
<td>Line Integral</td>
<td>Double Integral</td>
</tr>

<tr>
<td>Stokes' Theorem</td>
<td>Line Integral</td>
<td>Surface Integral</td>
</tr>

<tr>
<td>Divergence Theorem</td>
<td>Surface Integral</td>
<td>Triple Integral</td>
</tr>

</table>

<p>Each theorem transforms an integral over a boundary into one over the enclosed region.</p>

<h2>Applications</h2>

<ul>

<li>Fluid dynamics.</li>

<li>Electromagnetic theory.</li>

<li>Heat transfer.</li>

<li>Aerodynamics.</li>

<li>Weather prediction.</li>

<li>Computer simulation.</li>

<li>Engineering.</li>

<li>Physics.</li>

</ul>

<h2>Key Takeaways</h2>

<ul>

<li>Stokes' Theorem relates circulation around a boundary to the curl over a surface.</li>

<li>The Divergence Theorem relates outward flux through a closed surface to divergence inside a volume.</li>

<li>Curl measures rotation.</li>

<li>Divergence measures sources and sinks.</li>

<li>The right-hand rule determines orientation in Stokes' Theorem.</li>

<li>These theorems unify many concepts from multivariable calculus.</li>

</ul>

`,

        questions: [{
            q: "Stokes' Theorem relates:",
            options: [
                "A line integral around a closed curve to a surface integral of the curl",
                "A surface integral to a triple integral",
                "A double integral to a line integral",
                "A line integral to a volume integral"
            ],
            answer: "A line integral around a closed curve to a surface integral of the curl",
            explanation: "Stokes' Theorem states that the circulation around a boundary curve equals the surface integral of the curl over the enclosed surface."
        },

        {
            q: "The curl of a vector field measures:",
            options: [
                "The tendency of the field to rotate",
                "The outward flow from a point",
                "The length of a curve",
                "The area of a surface"
            ],
            answer: "The tendency of the field to rotate",
            explanation: "Curl measures the local rotational behavior of a vector field."
        },

        {
            q: "The orientation used in Stokes' Theorem is determined by the:",
            options: [
                "Right-hand rule",
                "Left-hand rule",
                "Pythagorean Theorem",
                "Chain rule"
            ],
            answer: "Right-hand rule",
            explanation: "The right-hand rule ensures the surface normal and boundary orientation are compatible."
        },

        {
            q: "In the right-hand rule, your thumb points in the direction of the:",
            options: [
                "Surface normal vector",
                "Boundary curve",
                "Gradient vector",
                "Velocity vector"
            ],
            answer: "Surface normal vector",
            explanation: "Your thumb indicates the positive normal direction, while your fingers curl in the positive boundary orientation."
        },

        {
            q: "The Divergence Theorem applies to:",
            options: [
                "Closed surfaces enclosing a volume",
                "Open curves",
                "Any plane region",
                "Straight line segments"
            ],
            answer: "Closed surfaces enclosing a volume",
            explanation: "The theorem relates the outward flux through a closed surface to the divergence throughout the enclosed volume."
        },

        {
            q: "The Divergence Theorem relates a surface integral to a:",
            options: [
                "Triple integral",
                "Double integral",
                "Line integral",
                "Derivative"
            ],
            answer: "Triple integral",
            explanation: "It converts the flux through a closed surface into a triple integral over the enclosed solid."
        },

        {
            q: "The divergence of a vector field measures:",
            options: [
                "How much the field spreads outward from a point",
                "The tendency of the field to rotate",
                "The length of a curve",
                "The curvature of a surface"
            ],
            answer: "How much the field spreads outward from a point",
            explanation: "Divergence measures the net outward flow from a small region surrounding a point."
        },

        {
            q: "A point with positive divergence behaves like a:",
            options: [
                "Source",
                "Sink",
                "Vortex",
                "Boundary"
            ],
            answer: "Source",
            explanation: "Positive divergence indicates that more field leaves the point than enters it, making it behave like a source."
        },

        {
            q: "A point with negative divergence behaves like a:",
            options: [
                "Sink",
                "Source",
                "Maximum",
                "Saddle point"
            ],
            answer: "Sink",
            explanation: "Negative divergence indicates that more field enters the point than leaves it."
        },

        {
            q: "Which theorem relates outward flux through a closed surface to divergence inside a volume?",
            options: [
                "The Divergence Theorem",
                "Green's Theorem",
                "Stokes' Theorem",
                "The Fundamental Theorem for Line Integrals"
            ],
            answer: "The Divergence Theorem",
            explanation: "The Divergence Theorem equates the outward flux across a closed surface with the triple integral of the divergence over the enclosed volume."
        }

        ]

    },

    "calculus3-unit5-review": {

        title: "Unit 5 Review",

        subtitle: "Review Vector Calculus before taking the Unit 5 Test.",

        body: `

<h2>Unit 5 Review</h2>

<p>This review summarizes the major concepts from Unit 5. Vector calculus extends multivariable calculus to vector fields and provides powerful theorems that connect line, surface, and volume integrals.</p>

<h2>Lesson 1 Review: Vector Fields</h2>

<ul>

<li>A vector field assigns a vector to every point in a region.</li>

<li>Two-dimensional vector fields have x- and y-components.</li>

<li>Three-dimensional vector fields also include a z-component.</li>

<li>The magnitude measures the strength of the field.</li>

<li>Arrow plots visualize both direction and magnitude.</li>

<li>Vector fields model wind, gravity, electricity, magnetism, and fluid flow.</li>

</ul>

<h2>Lesson 2 Review: Line Integrals</h2>

<ul>

<li>Line integrals accumulate quantities along curves.</li>

<li>Curves are parameterized using r(t).</li>

<li>Scalar line integrals use ds.</li>

<li>Vector line integrals use dr.</li>

<li>Work is computed using ∫C F·dr.</li>

<li>The orientation of the curve affects vector line integrals.</li>

</ul>

<h2>Lesson 3 Review: Fundamental Theorem for Line Integrals</h2>

<ul>

<li>Conservative vector fields are gradients of potential functions.</li>

<li>Line integrals in conservative fields are path independent.</li>

<li>The value depends only on the endpoints.</li>

<li>Closed-path integrals equal zero.</li>

<li>Potential functions simplify many calculations.</li>

</ul>

<h2>Lesson 4 Review: Green's Theorem</h2>

<ul>

<li>Green's Theorem converts a line integral into a double integral.</li>

<li>The boundary must be a positively oriented simple closed curve.</li>

<li>It relates circulation around a boundary to rotation within the enclosed region.</li>

<li>Counterclockwise orientation is positive.</li>

</ul>

<h2>Lesson 5 Review: Surface Integrals</h2>

<ul>

<li>Surface integrals accumulate quantities over surfaces.</li>

<li>Surfaces are parameterized using two variables.</li>

<li>The cross product of tangent vectors determines the surface element.</li>

<li>Vector surface integrals compute flux.</li>

<li>Surface orientation determines the sign of flux.</li>

</ul>

<h2>Lesson 6 Review: Stokes' Theorem and the Divergence Theorem</h2>

<ul>

<li>Stokes' Theorem relates circulation around a boundary to curl over a surface.</li>

<li>The right-hand rule determines the correct orientation.</li>

<li>The Divergence Theorem relates outward flux through a closed surface to divergence inside a volume.</li>

<li>Curl measures rotation.</li>

<li>Divergence measures sources and sinks.</li>

</ul>

<h2>Important Concepts to Remember</h2>

<ul>

<li>Vector fields</li>

<li>Magnitude</li>

<li>Line integrals</li>

<li>Scalar fields</li>

<li>Vector fields</li>

<li>Work</li>

<li>Conservative fields</li>

<li>Potential functions</li>

<li>Path independence</li>

<li>Green's Theorem</li>

<li>Surface integrals</li>

<li>Flux</li>

<li>Curl</li>

<li>Divergence</li>

<li>Stokes' Theorem</li>

<li>Divergence Theorem</li>

<li>Right-hand rule</li>

</ul>

<h2>Mixed Review Questions</h2>

`,

        questions: [

            {
                q: "A vector field assigns:",
                options: [
                    "A vector to every point in a region",
                    "A scalar to every point",
                    "A curve to every point",
                    "A surface to every point"
                ],
                answer: "A vector to every point in a region",
                explanation: "A vector field assigns both a magnitude and direction to every point."
            },

            {
                q: "The magnitude of a vector field represents:",
                options: [
                    "The strength of the field",
                    "The curvature of the field",
                    "The area enclosed",
                    "The potential function"
                ],
                answer: "The strength of the field",
                explanation: "The magnitude tells us how large the vector is at a particular point."
            },

            {
                q: "A line integral accumulates quantities along:",
                options: [
                    "A curve",
                    "A volume",
                    "A plane",
                    "A single point"
                ],
                answer: "A curve",
                explanation: "Line integrals sum quantities as we move along a path."
            },

            {
                q: "The work done by a force field is computed using:",
                options: [
                    "∫C F·dr",
                    "∬R f dA",
                    "∭E f dV",
                    "∫ f(x) dx"
                ],
                answer: "∫C F·dr",
                explanation: "A vector line integral computes the work performed by a force field."
            },

            {
                q: "A conservative vector field is:",
                options: [
                    "The gradient of a scalar function",
                    "A constant vector",
                    "A vector with zero magnitude",
                    "A tangent vector"
                ],
                answer: "The gradient of a scalar function",
                explanation: "Conservative vector fields can be expressed as gradients of potential functions."
            },

            {
                q: "For a conservative vector field, the value of a line integral depends only on:",
                options: [
                    "The endpoints",
                    "The exact path",
                    "The speed of travel",
                    "The length of the path"
                ],
                answer: "The endpoints",
                explanation: "This property is known as path independence."
            },

            {
                q: "Green's Theorem converts a line integral into a:",
                options: [
                    "Double integral",
                    "Triple integral",
                    "Surface integral",
                    "Derivative"
                ],
                answer: "Double integral",
                explanation: "Green's Theorem relates circulation around a closed curve to a double integral over the enclosed region."
            },

            {
                q: "Surface integrals are evaluated over:",
                options: [
                    "Surfaces",
                    "Curves",
                    "Volumes",
                    "Intervals"
                ],
                answer: "Surfaces",
                explanation: "Surface integrals accumulate quantities across two-dimensional surfaces in three-dimensional space."
            },

            {
                q: "A vector surface integral computes:",
                options: [
                    "Flux",
                    "Area only",
                    "Mass only",
                    "Arc length"
                ],
                answer: "Flux",
                explanation: "Flux measures the amount of a vector field passing through a surface."
            },

            {
                q: "Stokes' Theorem relates a line integral to:",
                options: [
                    "A surface integral of the curl",
                    "A triple integral",
                    "A double integral",
                    "A derivative"
                ],
                answer: "A surface integral of the curl",
                explanation: "Stokes' Theorem equates circulation around a boundary with the surface integral of the curl."
            },
            {
                q: "The Divergence Theorem relates:",
                options: [
                    "A surface integral to a triple integral",
                    "A line integral to a double integral",
                    "A double integral to a line integral",
                    "A derivative to an integral"
                ],
                answer: "A surface integral to a triple integral",
                explanation: "The Divergence Theorem converts the outward flux through a closed surface into a triple integral over the enclosed volume."
            },

            {
                q: "The curl of a vector field measures:",
                options: [
                    "The tendency of the field to rotate",
                    "The outward flow from a point",
                    "The length of a vector",
                    "The area of a surface"
                ],
                answer: "The tendency of the field to rotate",
                explanation: "Curl measures the local rotational behavior of a vector field."
            },

            {
                q: "The divergence of a vector field measures:",
                options: [
                    "How much the field spreads outward from a point",
                    "The rotation of the field",
                    "The slope of the field",
                    "The speed of the field"
                ],
                answer: "How much the field spreads outward from a point",
                explanation: "Positive divergence indicates a source, while negative divergence indicates a sink."
            },

            {
                q: "The right-hand rule is primarily used with:",
                options: [
                    "Stokes' Theorem",
                    "Green's Theorem",
                    "The Fundamental Theorem of Calculus",
                    "Taylor's Theorem"
                ],
                answer: "Stokes' Theorem",
                explanation: "The right-hand rule determines the compatible orientation between a surface normal and its boundary curve."
            },

            {
                q: "A line integral around a closed curve in a conservative vector field is:",
                options: [
                    "Zero",
                    "Positive",
                    "Negative",
                    "Equal to the area enclosed"
                ],
                answer: "Zero",
                explanation: "Since the starting and ending points are the same, the potential difference is zero."
            },

            {
                q: "Green's Theorem requires the boundary curve to be:",
                options: [
                    "A positively oriented simple closed curve",
                    "An open curve",
                    "A straight line",
                    "A three-dimensional curve"
                ],
                answer: "A positively oriented simple closed curve",
                explanation: "The theorem applies to simple closed curves traversed counterclockwise."
            },

            {
                q: "The cross product rᵤ × rᵥ is used to compute:",
                options: [
                    "The surface element",
                    "The gradient",
                    "The divergence",
                    "The parameterization"
                ],
                answer: "The surface element",
                explanation: "Its magnitude gives the area of a small parallelogram on the surface."
            },

            {
                q: "Flux measures:",
                options: [
                    "The amount of a vector field passing through a surface",
                    "The distance along a curve",
                    "The curvature of a path",
                    "The average value of a function"
                ],
                answer: "The amount of a vector field passing through a surface",
                explanation: "Flux quantifies how much of a vector field passes through a surface."
            },

            {
                q: "Which theorem extends Green's Theorem to surfaces in three dimensions?",
                options: [
                    "Stokes' Theorem",
                    "The Divergence Theorem",
                    "The Chain Rule",
                    "The Mean Value Theorem"
                ],
                answer: "Stokes' Theorem",
                explanation: "Stokes' Theorem generalizes Green's Theorem by relating circulation around a boundary curve to the curl over a surface."
            },

            {
                q: "Which theorem relates outward flux through a closed surface to divergence inside a volume?",
                options: [
                    "The Divergence Theorem",
                    "Green's Theorem",
                    "Stokes' Theorem",
                    "The Fundamental Theorem for Line Integrals"
                ],
                answer: "The Divergence Theorem",
                explanation: "The Divergence Theorem equates the total outward flux through a closed surface with the triple integral of the divergence over the enclosed volume."
            },

            {
                q: "Which statement about conservative vector fields is TRUE?",
                options: [
                    "They have path-independent line integrals.",
                    "They always have positive divergence.",
                    "They always have nonzero curl.",
                    "They can only exist in two dimensions."
                ],
                answer: "They have path-independent line integrals.",
                explanation: "For conservative vector fields, the value of a line integral depends only on the endpoints of the path."
            },

            {
                q: "Which quantity is associated with Stokes' Theorem?",
                options: [
                    "Curl",
                    "Divergence",
                    "Gradient",
                    "Jacobian"
                ],
                answer: "Curl",
                explanation: "Stokes' Theorem relates circulation around a boundary to the surface integral of the curl."
            },

            {
                q: "Which quantity is associated with the Divergence Theorem?",
                options: [
                    "Divergence",
                    "Curl",
                    "Gradient",
                    "Potential"
                ],
                answer: "Divergence",
                explanation: "The Divergence Theorem relates outward flux to the divergence within the enclosed volume."
            },

            {
                q: "A positive divergence indicates that a point behaves like a:",
                options: [
                    "Source",
                    "Sink",
                    "Vortex",
                    "Boundary"
                ],
                answer: "Source",
                explanation: "Positive divergence means there is net outward flow from the point."
            },

            {
                q: "Which statement best summarizes Unit 5?",
                options: [
                    "Vector calculus studies vector fields and uses line, surface, and volume integrals together with Green's, Stokes', and the Divergence Theorem to analyze circulation, flux, and flow.",
                    "Vector calculus only studies derivatives of scalar functions.",
                    "Vector calculus is limited to two-dimensional geometry.",
                    "Vector calculus is only used in theoretical mathematics."
                ],
                answer: "Vector calculus studies vector fields and uses line, surface, and volume integrals together with Green's, Stokes', and the Divergence Theorem to analyze circulation, flux, and flow.",
                explanation: "Unit 5 introduced vector fields, line and surface integrals, conservative fields, Green's Theorem, Stokes' Theorem, and the Divergence Theorem, which together form the core of vector calculus."
            }

        ]

    },





    "calculus3-unit5-test": {

        title: "Unit 5 Test",

        subtitle: "Test your understanding of Vector Calculus, Line Integrals, Surface Integrals, and the Major Integral Theorems.",

        body: `

<h2>Unit 5 Test</h2>

<p>This assessment covers everything learned in Unit 5.</p>

<p>The test includes questions from:</p>

<ul>

<li>Vector Fields</li>

<li>Line Integrals</li>

<li>Fundamental Theorem for Line Integrals</li>

<li>Green's Theorem</li>

<li>Surface Integrals</li>

<li>Stokes' Theorem and the Divergence Theorem</li>

</ul>

<p>Select the best answer for each question before checking your results.</p>

`,

        questions: [

            {
                q: "A vector field assigns:",
                options: [
                    "A vector to every point in a region",
                    "A scalar to every point",
                    "A curve to every point",
                    "A surface to every point"
                ],
                answer: "A vector to every point in a region",
                explanation: "A vector field assigns both magnitude and direction to every point in a region."
            },

            {
                q: "The magnitude of a vector field represents its:",
                options: [
                    "Strength",
                    "Direction only",
                    "Curvature",
                    "Potential"
                ],
                answer: "Strength",
                explanation: "The magnitude measures how large or strong the vector is at a given point."
            },

            {
                q: "The standard form of a two-dimensional vector field is:",
                options: [
                    "F(x,y)=P(x,y)i+Q(x,y)j",
                    "F(x,y)=P(x,y)+Q(x,y)",
                    "F(x,y)=P(x,y)k",
                    "F(x,y)=x+y"
                ],
                answer: "F(x,y)=P(x,y)i+Q(x,y)j",
                explanation: "A two-dimensional vector field has x- and y-components represented by i and j."
            },

            {
                q: "A line integral accumulates quantities along:",
                options: [
                    "A curve",
                    "A surface",
                    "A volume",
                    "A point"
                ],
                answer: "A curve",
                explanation: "Line integrals sum quantities as we move along a path."
            },

            {
                q: "A scalar line integral is written as:",
                options: [
                    "∫C f ds",
                    "∫C F·dr",
                    "∬R f dA",
                    "∭E f dV"
                ],
                answer: "∫C f ds",
                explanation: "Scalar line integrals accumulate scalar quantities along a curve."
            },

            {
                q: "A vector line integral is commonly used to compute:",
                options: [
                    "Work",
                    "Area",
                    "Volume",
                    "Surface area"
                ],
                answer: "Work",
                explanation: "The work done by a force field along a path is computed using a vector line integral."
            },

            {
                q: "If a force is perpendicular to the direction of motion, the work done is:",
                options: [
                    "Zero",
                    "Maximum",
                    "Positive",
                    "Negative"
                ],
                answer: "Zero",
                explanation: "Perpendicular vectors have a dot product of zero, so no work is performed."
            },

            {
                q: "A conservative vector field is:",
                options: [
                    "The gradient of a scalar function",
                    "A constant vector",
                    "A unit vector",
                    "A tangent vector"
                ],
                answer: "The gradient of a scalar function",
                explanation: "Every conservative vector field is the gradient of a potential function."
            },

            {
                q: "The scalar function associated with a conservative vector field is called the:",
                options: [
                    "Potential function",
                    "Jacobian",
                    "Divergence",
                    "Curl"
                ],
                answer: "Potential function",
                explanation: "The gradient of the potential function equals the conservative vector field."
            },

            {
                q: "For a conservative vector field, a line integral depends only on:",
                options: [
                    "The endpoints",
                    "The exact path",
                    "The speed of travel",
                    "The curve length"
                ],
                answer: "The endpoints",
                explanation: "Conservative vector fields have path-independent line integrals."
            },

            {
                q: "A line integral around a closed curve in a conservative field equals:",
                options: [
                    "Zero",
                    "One",
                    "The area enclosed",
                    "The length of the curve"
                ],
                answer: "Zero",
                explanation: "The starting and ending points coincide, so the potential difference is zero."
            },

            {
                q: "Green's Theorem converts a line integral into a:",
                options: [
                    "Double integral",
                    "Triple integral",
                    "Surface integral",
                    "Derivative"
                ],
                answer: "Double integral",
                explanation: "Green's Theorem relates circulation around a closed curve to a double integral over the enclosed region."
            },

            {
                q: "Green's Theorem requires the boundary to be:",
                options: [
                    "A positively oriented simple closed curve",
                    "An open curve",
                    "A straight line",
                    "A three-dimensional path"
                ],
                answer: "A positively oriented simple closed curve",
                explanation: "The curve must be simple, closed, and traversed counterclockwise."
            },
            {
                q: "Surface integrals are evaluated over:",
                options: [
                    "Surfaces",
                    "Curves",
                    "Volumes",
                    "Intervals"
                ],
                answer: "Surfaces",
                explanation: "Surface integrals accumulate scalar or vector quantities over two-dimensional surfaces embedded in three-dimensional space."
            },

            {
                q: "A surface is commonly parameterized using:",
                options: [
                    "Two variables",
                    "One variable",
                    "Three variables",
                    "No variables"
                ],
                answer: "Two variables",
                explanation: "A parameterized surface is described by two parameters, usually denoted by u and v."
            },

            {
                q: "The surface element dS is computed using:",
                options: [
                    "|rᵤ × rᵥ| du dv",
                    "|rᵤ + rᵥ| du dv",
                    "|rᵤ · rᵥ| du dv",
                    "|r| du dv"
                ],
                answer: "|rᵤ × rᵥ| du dv",
                explanation: "The magnitude of the cross product of the tangent vectors gives the area of a small surface element."
            },

            {
                q: "A vector surface integral primarily computes:",
                options: [
                    "Flux",
                    "Surface area",
                    "Arc length",
                    "Volume"
                ],
                answer: "Flux",
                explanation: "Vector surface integrals measure how much of a vector field passes through a surface."
            },

            {
                q: "Stokes' Theorem relates a line integral to:",
                options: [
                    "A surface integral of the curl",
                    "A triple integral",
                    "A double integral",
                    "A derivative"
                ],
                answer: "A surface integral of the curl",
                explanation: "Stokes' Theorem states that the circulation around a closed curve equals the surface integral of the curl over the enclosed surface."
            },

            {
                q: "The right-hand rule is used to determine:",
                options: [
                    "The compatible orientation of a surface and its boundary",
                    "The magnitude of a vector",
                    "The gradient of a function",
                    "The divergence of a field"
                ],
                answer: "The compatible orientation of a surface and its boundary",
                explanation: "The right-hand rule ensures that the surface normal vector and boundary curve have consistent orientations."
            },

            {
                q: "The Divergence Theorem relates:",
                options: [
                    "A surface integral to a triple integral",
                    "A line integral to a double integral",
                    "A double integral to a line integral",
                    "A derivative to an integral"
                ],
                answer: "A surface integral to a triple integral",
                explanation: "The Divergence Theorem converts the outward flux through a closed surface into a triple integral over the enclosed volume."
            },

            {
                q: "The divergence of a vector field measures:",
                options: [
                    "How much the field spreads outward from a point",
                    "The tendency of the field to rotate",
                    "The length of a vector",
                    "The curvature of a surface"
                ],
                answer: "How much the field spreads outward from a point",
                explanation: "Divergence measures the net outward flow from a point. Positive divergence indicates a source, while negative divergence indicates a sink."
            },

            {
                q: "A point with positive divergence behaves like a:",
                options: [
                    "Source",
                    "Sink",
                    "Vortex",
                    "Boundary"
                ],
                answer: "Source",
                explanation: "Positive divergence means more of the vector field leaves the point than enters it."
            },

            {
                q: "A point with negative divergence behaves like a:",
                options: [
                    "Sink",
                    "Source",
                    "Maximum",
                    "Saddle point"
                ],
                answer: "Sink",
                explanation: "Negative divergence means more of the vector field enters the point than leaves it."
            },

            {
                q: "Which theorem generalizes Green's Theorem to surfaces in three dimensions?",
                options: [
                    "Stokes' Theorem",
                    "The Divergence Theorem",
                    "The Fundamental Theorem for Line Integrals",
                    "The Chain Rule"
                ],
                answer: "Stokes' Theorem",
                explanation: "Stokes' Theorem extends Green's Theorem by relating circulation around a boundary curve to the curl over a surface."
            },

            {
                q: "Which statement best summarizes Unit 5?",
                options: [
                    "Vector calculus studies vector fields and uses line, surface, and volume integrals together with Green's, Stokes', and the Divergence Theorem to analyze circulation, flux, and flow.",
                    "Vector calculus only studies derivatives of scalar functions.",
                    "Vector calculus is limited to two-dimensional geometry.",
                    "Vector calculus only applies to theoretical mathematics."
                ],
                answer: "Vector calculus studies vector fields and uses line, surface, and volume integrals together with Green's, Stokes', and the Divergence Theorem to analyze circulation, flux, and flow.",
                explanation: "Unit 5 combined vector fields, line integrals, surface integrals, conservative fields, Green's Theorem, Stokes' Theorem, and the Divergence Theorem into a unified framework for analyzing vector-valued phenomena."
            }

        ]

    },





};