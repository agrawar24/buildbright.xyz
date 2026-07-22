




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




};