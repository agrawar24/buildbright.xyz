const geometryLessons = {

    "points-lines-and-planes": {
        title: "Points, Lines, and Planes",
        subtitle: "Learn the basic building blocks of geometry.",
        body: `
        <p>Geometry starts with three basic ideas: points, lines, and planes.</p>

        <h2>Key Ideas</h2>
        <p>A <strong>point</strong> shows an exact location.</p>
        <p>A <strong>line</strong> extends forever in both directions.</p>
        <p>A <strong>plane</strong> is a flat surface that extends forever.</p>

        <h2>Examples</h2>
        <p>A dot can represent a point.</p>
        <p>The edge of a ruler can represent part of a line.</p>
        <p>A tabletop can represent part of a plane.</p>

        <h2>Common Mistake</h2>
        <p>A line segment is not the same as a line. A segment has 2 endpoints. A line goes forever.</p>
    `,
        questions: [
            { q: "A point represents?", options: ["Exact location", "Flat surface", "Angle"], answer: "Exact location", explanation: "A point marks one exact location." },
            { q: "A line extends?", options: ["Forever in both directions", "Only one direction", "Only between two endpoints"], answer: "Forever in both directions", explanation: "A line has no endpoints." },
            { q: "A plane is?", options: ["Flat surface", "Single dot", "Curved line"], answer: "Flat surface", explanation: "A plane is a flat surface that extends forever." },
            { q: "A line segment has?", options: ["Two endpoints", "No endpoints", "One endpoint"], answer: "Two endpoints", explanation: "A segment is part of a line with two endpoints." },
            { q: "A ray has?", options: ["One endpoint", "Two endpoints", "No endpoints"], answer: "One endpoint", explanation: "A ray starts at one endpoint and continues forever." },

            { q: "Which has no size?", options: ["Point", "Line segment", "Plane"], answer: "Point", explanation: "A point has location but no size." },
            { q: "Which is named with one capital letter?", options: ["Point", "Plane", "Line"], answer: "Point", explanation: "Points are usually named A, B, C, etc." },
            { q: "Two points determine a?", options: ["Line", "Plane always", "Circle always"], answer: "Line", explanation: "Exactly one line passes through two points." },
            { q: "Three non-collinear points determine a?", options: ["Plane", "Ray", "Segment only"], answer: "Plane", explanation: "Three non-collinear points determine one plane." },
            { q: "Collinear points lie on the same?", options: ["Line", "Circle", "Angle"], answer: "Line", explanation: "Collinear means on the same line." },

            { q: "Coplanar points lie on the same?", options: ["Plane", "Ray", "Circle"], answer: "Plane", explanation: "Coplanar means on the same plane." },
            { q: "A tabletop can represent a?", options: ["Plane", "Point", "Ray"], answer: "Plane", explanation: "A tabletop is flat like part of a plane." },
            { q: "A dot can represent a?", options: ["Point", "Line", "Plane"], answer: "Point", explanation: "A dot is a model of a point." },
            { q: "A ruler edge can represent part of a?", options: ["Line", "Circle", "Plane"], answer: "Line", explanation: "The edge is straight like a line segment." },
            { q: "A line segment is finite?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "A segment has endpoints." },

            { q: "A line is infinite?", options: ["Yes", "No", "Only sometimes"], answer: "Yes", explanation: "A line extends forever." },
            { q: "A ray goes forever in?", options: ["One direction", "Two directions", "No direction"], answer: "One direction", explanation: "A ray starts at one endpoint and continues." },
            { q: "Geometry begins with?", options: ["Undefined terms", "Only formulas", "Only graphs"], answer: "Undefined terms", explanation: "Point, line, and plane are basic undefined terms." },
            { q: "Lines, rays, and segments are made of?", options: ["Points", "Angles only", "Circles"], answer: "Points", explanation: "Geometric figures are made of points." },
            { q: "A plane extends?", options: ["Forever", "Only one inch", "Only between two points"], answer: "Forever", explanation: "A plane extends infinitely in all directions." }
        ]
    },



    "line-segments": {
        title: "Line Segments",
        subtitle: "Understand finite parts of lines with two endpoints.",
        body: `
        <p>A <strong>line segment</strong> is part of a line.</p>

        <p>Unlike a line, a segment does not go forever.</p>

        <h2>Key Ideas</h2>

        <p>A line segment has <strong>two endpoints</strong>.</p>
        <p>The length of a segment can be measured.</p>
        <p>Segments are usually named by their endpoints, like AB.</p>

        <h2>Example</h2>

        <p>If point A and point B are connected, the segment is called AB.</p>

        <h2>Common Mistake</h2>

        <p>A line goes forever, but a line segment stops at two endpoints.</p>
    `,
        questions: [
            { q: "A line segment has?", options: ["Two endpoints", "No endpoints", "One endpoint"], answer: "Two endpoints", explanation: "A segment begins and ends at two points." },
            { q: "A segment is part of a?", options: ["Line", "Circle", "Plane only"], answer: "Line", explanation: "A segment is a finite part of a line." },
            { q: "A line segment goes forever?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "A segment has endpoints, so it is finite." },
            { q: "A line goes forever?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "A line extends forever in both directions." },
            { q: "A segment can be measured?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Segments have finite length." },

            { q: "Segment AB is named by?", options: ["Endpoints", "Area", "Angle size"], answer: "Endpoints", explanation: "Segments are named using their endpoints." },
            { q: "If a segment connects A and B, it is called?", options: ["AB", "ABC", "Line only"], answer: "AB", explanation: "The segment is named by endpoints A and B." },
            { q: "A segment has finite length?", options: ["Yes", "No", "Only sometimes"], answer: "Yes", explanation: "Finite means it has a measurable length." },
            { q: "A segment has how many endpoints?", options: ["2", "1", "0"], answer: "2", explanation: "Every segment has two endpoints." },
            { q: "A line has how many endpoints?", options: ["0", "1", "2"], answer: "0", explanation: "A line goes forever both ways." },

            { q: "A ray has how many endpoints?", options: ["1", "2", "0"], answer: "1", explanation: "A ray starts at one endpoint and goes forever." },
            { q: "Which can be measured exactly?", options: ["Segment", "Line", "Plane"], answer: "Segment", explanation: "A segment has a fixed length." },
            { q: "A segment is usually drawn with?", options: ["Two endpoints", "No endpoints", "Only arrows"], answer: "Two endpoints", explanation: "Endpoints show where it starts and stops." },
            { q: "A road between two cities can model a?", options: ["Line segment", "Full line", "Plane"], answer: "Line segment", explanation: "It has a start and end point." },
            { q: "A pencil can model a?", options: ["Line segment", "Infinite line", "Circle"], answer: "Line segment", explanation: "A pencil has two ends." },

            { q: "A line segment is one-dimensional?", options: ["Yes", "No", "It is 3D"], answer: "Yes", explanation: "It has length but no width." },
            { q: "Two points can determine a?", options: ["Segment", "Circle only", "Solid"], answer: "Segment", explanation: "Connecting two points forms a segment." },
            { q: "The endpoints of segment CD are?", options: ["C and D", "A and B", "C only"], answer: "C and D", explanation: "Segment CD uses endpoints C and D." },
            { q: "A segment is different from a line because?", options: ["It has endpoints", "It is curved", "It has area"], answer: "It has endpoints", explanation: "Endpoints make the segment finite." },
            { q: "Line segments are studied in?", options: ["Geometry", "Grammar", "History"], answer: "Geometry", explanation: "Segments are a basic geometry object." }
        ]
    },


    "rays": {
        title: "Rays",
        subtitle: "Understand parts of lines that start at one point and continue forever.",
        body: `
        <p>A <strong>ray</strong> is part of a line.</p>

        <p>A ray has one endpoint and continues forever in one direction.</p>

        <h2>Key Ideas</h2>

        <p>A ray starts at an endpoint.</p>
        <p>Then it extends infinitely in one direction.</p>
        <p>Rays are used to form angles.</p>

        <h2>Example</h2>

        <p>A flashlight beam can model a ray because it starts at one place and travels outward.</p>

        <h2>Common Mistake</h2>

        <p>A ray is not the same as a line segment. A segment stops at two endpoints, but a ray keeps going forever in one direction.</p>
    `,
        questions: [
            { q: "A ray has how many endpoints?", options: ["1", "2", "0"], answer: "1", explanation: "A ray starts at one endpoint." },
            { q: "A ray continues forever in?", options: ["One direction", "Two directions", "No direction"], answer: "One direction", explanation: "A ray extends infinitely in one direction." },
            { q: "A line continues forever in?", options: ["Two directions", "One direction", "No direction"], answer: "Two directions", explanation: "A line extends both ways forever." },
            { q: "A line segment has?", options: ["Two endpoints", "One endpoint", "No endpoints"], answer: "Two endpoints", explanation: "A segment starts and stops." },
            { q: "A ray is part of a?", options: ["Line", "Circle", "Solid"], answer: "Line", explanation: "A ray is a part of a line." },

            { q: "Which object best models a ray?", options: ["Flashlight beam", "Closed box", "Circle"], answer: "Flashlight beam", explanation: "A flashlight beam starts at one point and moves outward." },
            { q: "Rays are used to form?", options: ["Angles", "Volumes", "Circles only"], answer: "Angles", explanation: "An angle is formed by two rays sharing an endpoint." },
            { q: "The endpoint of an angle is called the?", options: ["Vertex", "Radius", "Diameter"], answer: "Vertex", explanation: "The shared endpoint is called the vertex." },
            { q: "A ray can be measured completely?", options: ["No", "Yes", "Always"], answer: "No", explanation: "A ray goes forever, so its full length cannot be measured." },
            { q: "A segment can be measured completely?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "A segment has finite length." },

            { q: "A ray has finite length?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "It extends forever in one direction." },
            { q: "A ray starts at?", options: ["An endpoint", "Two endpoints", "No point"], answer: "An endpoint", explanation: "A ray begins at one endpoint." },
            { q: "A ray is usually drawn with?", options: ["One endpoint and one arrow", "Two endpoints", "No arrows"], answer: "One endpoint and one arrow", explanation: "The arrow shows it continues forever." },
            { q: "A line is usually drawn with?", options: ["Arrows on both ends", "One endpoint", "No direction"], answer: "Arrows on both ends", explanation: "Both arrows show it continues forever both ways." },
            { q: "A segment is usually drawn with?", options: ["Two endpoints", "One arrow", "Two arrows"], answer: "Two endpoints", explanation: "The endpoints show where it stops." },

            { q: "A ray is different from a segment because?", options: ["It goes forever in one direction", "It is curved", "It has area"], answer: "It goes forever in one direction", explanation: "A ray does not stop after its endpoint." },
            { q: "A ray is different from a line because?", options: ["It has one endpoint", "It has no endpoint", "It has two endpoints"], answer: "It has one endpoint", explanation: "A full line has no endpoints." },
            { q: "Two rays with the same endpoint can form a?", options: ["Angle", "Cube", "Sphere"], answer: "Angle", explanation: "Angles are formed by two rays." },
            { q: "Ray AB starts at?", options: ["A", "B", "Both A and B"], answer: "A", explanation: "The first letter names the endpoint." },
            { q: "Rays are studied in?", options: ["Geometry", "Statistics", "Grammar"], answer: "Geometry", explanation: "Rays are a basic geometry concept." }
        ]
    },

    "distance": {
        title: "Distance",
        subtitle: "Learn how to measure the length between two points.",
        body: `
            <p><strong>Distance</strong> is the length between two points.</p>
            <p>Distance is always positive.</p>

        <h2>On a Number Line</h2>
        <p>Distance = |Endpoint 2 − Endpoint 1|</p>

        <h2>Example</h2>
        <p>Distance between −4 and 8:</p>
        <p>|8 − (−4)| = 12</p>
    `,
        questions: [
            { q: "Distance measures?", options: ["How far apart two points are", "Area", "Volume"], answer: "How far apart two points are", explanation: "Distance is the length between two points." },
            { q: "Distance is always?", options: ["Positive", "Negative", "Zero only"], answer: "Positive", explanation: "Distance cannot be negative." },
            { q: "Distance between 2 and 9?", options: ["7", "11", "5"], answer: "7", explanation: "|9−2|=7." },
            { q: "Distance between -3 and 5?", options: ["8", "2", "-8"], answer: "8", explanation: "|5-(-3)|=8." },
            { q: "Distance between -6 and -1?", options: ["5", "7", "-5"], answer: "5", explanation: "|-1-(-6)|=5." }
        ]
    },



    "midpoint": {
        title: "Midpoint",
        subtitle: "Learn how to find the exact middle of a line segment.",
        body: `
        <p>A <strong>midpoint</strong> is the exact middle of a line segment.</p>

        <h2>What is a Midpoint?</h2>

        <p>A midpoint divides a line segment into <strong>two equal parts</strong>.</p>

        <p>If M is the midpoint of AB, then:</p>

        <p><strong>AM = MB</strong></p>

        <h2>Midpoint Formula (Number Line)</h2>

        <p><strong>Midpoint = (Endpoint₁ + Endpoint₂) ÷ 2</strong></p>

        <h2>Worked Example 1</h2>

        <p>Find the midpoint between 4 and 10.</p>

        <p>(4 + 10) ÷ 2 = 7</p>

        <h2>Worked Example 2</h2>

        <p>Find the midpoint between −6 and 8.</p>

        <p>(−6 + 8) ÷ 2 = 1</p>

        <h2>Real World Example</h2>

        <p>If two cities are connected by a road, the midpoint is exactly halfway between them.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Do not subtract the numbers.</li>
            <li>Always average the endpoints.</li>
            <li>The midpoint is always exactly halfway.</li>
        </ul>

        <h2>Summary</h2>

        <p>A midpoint divides a segment into two congruent parts.</p>
    `,
        questions: [

            { q: "A midpoint is?", options: ["The middle of a segment", "The end of a segment", "A ray"], answer: "The middle of a segment", explanation: "A midpoint is exactly halfway between the endpoints." },

            { q: "A midpoint divides a segment into?", options: ["Two equal parts", "Three equal parts", "Four equal parts"], answer: "Two equal parts", explanation: "A midpoint creates two congruent segments." },

            { q: "Midpoint between 2 and 8?", options: ["5", "4", "6"], answer: "5", explanation: "(2+8)/2 = 5." },

            { q: "Midpoint between 6 and 10?", options: ["8", "7", "9"], answer: "8", explanation: "(6+10)/2 = 8." },

            { q: "Midpoint between −2 and 4?", options: ["1", "2", "3"], answer: "1", explanation: "(-2+4)/2 = 1." },

            { q: "Midpoint between −8 and 2?", options: ["-3", "-2", "-1"], answer: "-3", explanation: "(-8+2)/2 = -3." },

            { q: "If M is the midpoint of AB, then?", options: ["AM = MB", "AM > MB", "AM < MB"], answer: "AM = MB", explanation: "The midpoint divides the segment equally." },

            { q: "The midpoint formula uses?", options: ["Average", "Difference", "Product"], answer: "Average", explanation: "Add the endpoints and divide by 2." },

            { q: "Midpoint between 12 and 18?", options: ["15", "14", "16"], answer: "15", explanation: "(12+18)/2 = 15." },

            { q: "Midpoint between 0 and 20?", options: ["10", "5", "20"], answer: "10", explanation: "Halfway between 0 and 20 is 10." },

            { q: "Midpoint between −10 and 10?", options: ["0", "10", "-10"], answer: "0", explanation: "The average is 0." },

            { q: "The midpoint always lies?", options: ["Halfway between endpoints", "Outside the segment", "On another line"], answer: "Halfway between endpoints", explanation: "A midpoint is exactly in the middle." },

            { q: "A midpoint creates?", options: ["Congruent segments", "Parallel lines", "Angles"], answer: "Congruent segments", explanation: "The two segments have equal length." },

            { q: "The midpoint of the same point is?", options: ["That point", "Undefined", "Zero"], answer: "That point", explanation: "A point is its own midpoint." },

            { q: "To find a midpoint you?", options: ["Average the endpoints", "Subtract the endpoints", "Multiply the endpoints"], answer: "Average the endpoints", explanation: "Always use the average." },

            { q: "A midpoint is useful in?", options: ["Geometry and Coordinate Geometry", "Grammar", "Chemistry"], answer: "Geometry and Coordinate Geometry", explanation: "Midpoints appear throughout geometry." },

            { q: "A midpoint changes the length of a segment?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "It only identifies the halfway point." },

            { q: "Every segment has?", options: ["Exactly one midpoint", "Two midpoints", "No midpoint"], answer: "Exactly one midpoint", explanation: "Each finite segment has one unique midpoint." },

            { q: "Midpoints are commonly used in?", options: ["Proofs", "Geometry", "Both"], answer: "Both", explanation: "Midpoints appear frequently in geometric proofs." },

            { q: "The midpoint is one of geometry's most important?", options: ["Definitions", "Circles", "Polygons"], answer: "Definitions", explanation: "Many theorems rely on the definition of midpoint." }

        ]
    },



    "segment-addition-postulate": {
        title: "Segment Addition Postulate",
        subtitle: "Learn how to find missing lengths on a line segment.",
        body: `
        <p>The <strong>Segment Addition Postulate</strong> states that if point B lies between points A and C, then:</p>

        <h2>Formula</h2>

        <p style="font-size:28px;"><strong>AB + BC = AC</strong></p>

        <p>The two smaller segments add together to equal the entire segment.</p>

        <h2>When Can You Use It?</h2>

        <ul>
            <li>The three points must be collinear.</li>
            <li>The middle point must lie between the two endpoints.</li>
        </ul>

        <h2>Worked Example 1</h2>

        <p>AB = 5</p>
        <p>BC = 8</p>

        <p>Find AC.</p>

        <p><strong>AC = 5 + 8 = 13</strong></p>

        <h2>Worked Example 2</h2>

        <p>AC = 24</p>
        <p>AB = 9</p>

        <p>Find BC.</p>

        <p><strong>BC = 24 − 9 = 15</strong></p>

        <h2>Real World Example</h2>

        <p>If you travel from Town A to Town B and then from Town B to Town C, your total distance traveled equals the sum of both parts.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Only use the formula if B is between A and C.</li>
            <li>Don't add all three segments together.</li>
            <li>The longest segment is always the entire segment (AC).</li>
        </ul>

        <h2>Summary</h2>

        <p>The Segment Addition Postulate helps you solve for unknown segment lengths using addition and subtraction.</p>
    `,
        questions: [

            { q: "The Segment Addition Postulate states?", options: ["AB + BC = AC", "AB = BC", "AB × BC = AC"], answer: "AB + BC = AC", explanation: "The whole segment equals the sum of its parts." },

            { q: "If AB = 4 and BC = 9, AC = ?", options: ["13", "5", "36"], answer: "13", explanation: "4 + 9 = 13." },

            { q: "If AB = 12 and BC = 8, AC = ?", options: ["20", "4", "96"], answer: "20", explanation: "12 + 8 = 20." },

            { q: "If AC = 18 and AB = 7, BC = ?", options: ["11", "25", "10"], answer: "11", explanation: "18 − 7 = 11." },

            { q: "If AC = 25 and BC = 9, AB = ?", options: ["16", "34", "14"], answer: "16", explanation: "25 − 9 = 16." },

            { q: "Which segment is the largest?", options: ["AC", "AB", "BC"], answer: "AC", explanation: "The entire segment is always the longest." },

            { q: "Point B must be?", options: ["Between A and C", "Outside the segment", "Anywhere"], answer: "Between A and C", explanation: "Otherwise the postulate cannot be used." },

            { q: "The Segment Addition Postulate uses?", options: ["Addition and subtraction", "Multiplication", "Division"], answer: "Addition and subtraction", explanation: "Addition finds the whole, subtraction finds a missing part." },

            { q: "If AB = 6 and BC = 14, AC = ?", options: ["20", "8", "84"], answer: "20", explanation: "6 + 14 = 20." },

            { q: "If AC = 30 and AB = 18, BC = ?", options: ["12", "48", "14"], answer: "12", explanation: "30 − 18 = 12." },

            { q: "If AB = 9 and BC = 9, AC = ?", options: ["18", "9", "81"], answer: "18", explanation: "9 + 9 = 18." },

            { q: "If AC = 50 and BC = 20, AB = ?", options: ["30", "70", "10"], answer: "30", explanation: "50 − 20 = 30." },

            { q: "The Segment Addition Postulate applies to?", options: ["Collinear points", "Circles", "Triangles only"], answer: "Collinear points", explanation: "The points must lie on the same line." },

            { q: "The entire segment equals?", options: ["The sum of the parts", "The difference of the parts", "The product of the parts"], answer: "The sum of the parts", explanation: "That's the definition of the postulate." },

            { q: "Can AC ever be shorter than AB?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "The whole segment is always longer than or equal to any part." },

            { q: "The Segment Addition Postulate helps find?", options: ["Missing segment lengths", "Area", "Volume"], answer: "Missing segment lengths", explanation: "It is used to solve for unknown lengths." },

            { q: "If AB = 10 and AC = 25, BC = ?", options: ["15", "35", "10"], answer: "15", explanation: "25 − 10 = 15." },

            { q: "Which operation finds the entire segment?", options: ["Addition", "Subtraction", "Division"], answer: "Addition", explanation: "Add the smaller segments." },

            { q: "Which operation finds a missing part?", options: ["Subtraction", "Addition", "Multiplication"], answer: "Subtraction", explanation: "Subtract the known part from the whole." },

            { q: "The Segment Addition Postulate is one of Geometry's?", options: ["Basic postulates", "Circle theorems", "Trigonometric identities"], answer: "Basic postulates", explanation: "It is one of the foundational ideas in geometry." }

        ]
    },



    "unit1-review": {
        title: "Unit 1 Review",
        subtitle: "Review everything you've learned in Geometry Unit 1.",
        body: `
        <h2>Congratulations!</h2>

        <p>You have completed the first unit of Geometry.</p>

        <h2>Lessons Covered</h2>

        <ol>
            <li>Points, Lines & Planes</li>
            <li>Line Segments</li>
            <li>Rays</li>
            <li>Distance</li>
            <li>Midpoint</li>
            <li>Segment Addition Postulate</li>
        </ol>

        <h2>Key Vocabulary</h2>

        <table>
            <tr><th>Word</th><th>Definition</th></tr>
            <tr><td>Point</td><td>An exact location with no size.</td></tr>
            <tr><td>Line</td><td>Extends forever in both directions.</td></tr>
            <tr><td>Plane</td><td>A flat surface extending forever.</td></tr>
            <tr><td>Segment</td><td>Part of a line with two endpoints.</td></tr>
            <tr><td>Ray</td><td>Part of a line with one endpoint.</td></tr>
            <tr><td>Endpoint</td><td>The end of a segment or ray.</td></tr>
            <tr><td>Midpoint</td><td>The exact middle of a segment.</td></tr>
            <tr><td>Distance</td><td>The length between two points.</td></tr>
            <tr><td>Collinear</td><td>Points on the same line.</td></tr>
        </table>

        <h2>Important Facts</h2>

        <ul>
            <li>A line has no endpoints.</li>
            <li>A ray has one endpoint.</li>
            <li>A segment has two endpoints.</li>
            <li>Distance is always positive.</li>
            <li>A midpoint divides a segment into two equal parts.</li>
            <li>Segment Addition Postulate: AB + BC = AC.</li>
        </ul>

        <h2>Before the Test...</h2>

        <p>If you understand every concept above, you're ready for the Unit 1 Test.</p>

        <p>The next page contains a 40-question assessment covering everything in Unit 1.</p>
    `,
        questions: [

            {
                q: "Are you ready to begin the Unit 1 Test?",
                options: [
                    "Yes!",
                    "I want to review one more time."
                ],
                answer: "Yes!",
                explanation: "Great! Let's see how much you've learned."
            }

        ]
    },



    "unit1-test": {
        title: "Unit 1 Test",
        subtitle: "Geometry Foundations Assessment",
        body: `
        <h2>Unit 1 Assessment</h2>
        <p>This assessment covers every lesson from Unit 1.</p>

        <h3>Topics Covered</h3>
        <ul>
            <li>Points, Lines & Planes</li>
            <li>Line Segments</li>
            <li>Rays</li>
            <li>Distance</li>
            <li>Midpoint</li>
            <li>Segment Addition Postulate</li>
        </ul>

        <h3>Questions</h3>
        <p>40 Questions</p>

        <h3>Passing Score</h3>
        <p>80%</p>
    `,
        questions: [
            { q: "A point has?", options: ["No size", "Length", "Width"], answer: "No size", explanation: "A point represents only a location." },
            { q: "A line extends?", options: ["Forever in both directions", "Forever in one direction", "Between two endpoints"], answer: "Forever in both directions", explanation: "A line never ends." },
            { q: "A segment has?", options: ["Two endpoints", "One endpoint", "No endpoints"], answer: "Two endpoints", explanation: "Segments begin and end." },
            { q: "A ray has?", options: ["One endpoint", "Two endpoints", "No endpoints"], answer: "One endpoint", explanation: "A ray starts at one point." },
            { q: "Distance measures?", options: ["Length between points", "Area", "Volume"], answer: "Length between points", explanation: "Distance measures how far apart two points are." },

            { q: "Distance can be negative?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Distance is always zero or positive." },
            { q: "A midpoint divides a segment into?", options: ["Two equal parts", "Three equal parts", "Four equal parts"], answer: "Two equal parts", explanation: "That's the definition of midpoint." },
            { q: "Which formula is correct?", options: ["AB + BC = AC", "AB = AC + BC", "AB × BC = AC"], answer: "AB + BC = AC", explanation: "This is the Segment Addition Postulate." },
            { q: "A plane is?", options: ["A flat surface", "A curved surface", "A line"], answer: "A flat surface", explanation: "Planes are flat and extend forever." },
            { q: "Geometry is mainly the study of?", options: ["Shapes and space", "Music", "Weather"], answer: "Shapes and space", explanation: "Geometry studies shapes, sizes and positions." },

            { q: "Distance between 5 and 15?", options: ["10", "20", "5"], answer: "10", explanation: "|15 − 5| = 10." },
            { q: "Distance between -3 and 7?", options: ["10", "4", "-10"], answer: "10", explanation: "|7 − (-3)| = 10." },
            { q: "Midpoint between 2 and 10?", options: ["6", "8", "4"], answer: "6", explanation: "(2 + 10) ÷ 2 = 6." },
            { q: "Midpoint between -4 and 8?", options: ["2", "4", "0"], answer: "2", explanation: "(-4 + 8) ÷ 2 = 2." },
            { q: "If AB = 8 and BC = 6, AC = ?", options: ["14", "2", "48"], answer: "14", explanation: "AB + BC = AC, so 8 + 6 = 14." },

            { q: "If AC = 20 and AB = 9, BC = ?", options: ["11", "29", "10"], answer: "11", explanation: "BC = AC − AB = 20 − 9 = 11." },
            { q: "Which figure has finite length?", options: ["Line segment", "Line", "Plane"], answer: "Line segment", explanation: "A segment has two endpoints." },
            { q: "Which figure has one endpoint?", options: ["Ray", "Line", "Segment"], answer: "Ray", explanation: "A ray has one endpoint." },
            { q: "Which figure has no endpoints?", options: ["Line", "Ray", "Segment"], answer: "Line", explanation: "A line extends forever both ways." },
            { q: "The endpoint shared by two rays is called?", options: ["Vertex", "Radius", "Diameter"], answer: "Vertex", explanation: "The shared endpoint of an angle is the vertex." },

            { q: "Ray AB starts at?", options: ["A", "B", "Both"], answer: "A", explanation: "The first letter names the endpoint." },
            { q: "Segment CD has endpoints?", options: ["C and D", "C only", "D only"], answer: "C and D", explanation: "Segments are named by endpoints." },
            { q: "Distance between -12 and 8?", options: ["20", "4", "16"], answer: "20", explanation: "|8 − (-12)| = 20." },
            { q: "Midpoint between -12 and 12?", options: ["0", "12", "-12"], answer: "0", explanation: "(-12 + 12) ÷ 2 = 0." },
            { q: "If AB = 15 and AC = 40, BC = ?", options: ["25", "55", "20"], answer: "25", explanation: "BC = AC − AB = 40 − 15 = 25." },

            { q: "If AC = 50 and BC = 18, AB = ?", options: ["32", "68", "28"], answer: "32", explanation: "AB = AC − BC = 50 − 18 = 32." },
            { q: "The whole segment equals?", options: ["Sum of its parts", "Difference of its parts", "Product of its parts"], answer: "Sum of its parts", explanation: "This is the Segment Addition Postulate." },
            { q: "A midpoint creates?", options: ["Congruent segments", "Parallel lines", "Circles"], answer: "Congruent segments", explanation: "A midpoint divides a segment into equal parts." },
            { q: "Which object best models a ray?", options: ["Flashlight beam", "Pencil", "Book cover"], answer: "Flashlight beam", explanation: "It starts at one point and continues outward." },
            { q: "Which object best models a segment?", options: ["Pencil", "Sun ray", "Infinite path"], answer: "Pencil", explanation: "A pencil has two ends." },

            { q: "Which statement is true?", options: ["A line cannot be measured completely", "A segment goes forever", "A ray has two endpoints"], answer: "A line cannot be measured completely", explanation: "A line is infinite." },
            { q: "A plane extends?", options: ["Forever in all directions", "Only between endpoints", "Only upward"], answer: "Forever in all directions", explanation: "A plane is infinite and flat." },
            { q: "Segment Addition requires points to be?", options: ["Collinear", "Circular", "Parallel"], answer: "Collinear", explanation: "The points must lie on the same line." },
            { q: "If B is between A and C, then?", options: ["AB + BC = AC", "AB + AC = BC", "AC + BC = AB"], answer: "AB + BC = AC", explanation: "That is the Segment Addition Postulate." },
            { q: "Distance between identical points is?", options: ["0", "1", "Undefined"], answer: "0", explanation: "A point is zero units from itself." },

            { q: "Midpoint formula uses?", options: ["Average", "Difference", "Product"], answer: "Average", explanation: "Add the endpoints and divide by 2." },
            { q: "Which one is NOT measurable completely?", options: ["Line", "Segment", "Distance"], answer: "Line", explanation: "A line continues forever." },
            { q: "A segment is different from a line because?", options: ["It has endpoints", "It is curved", "It has area"], answer: "It has endpoints", explanation: "Endpoints make it finite." },
            { q: "The largest segment in AB + BC = AC is?", options: ["AC", "AB", "BC"], answer: "AC", explanation: "AC is the whole segment." },
            { q: "Completing this test means you finished?", options: ["Geometry Unit 1", "All Geometry", "Algebra 1"], answer: "Geometry Unit 1", explanation: "This test completes Unit 1 Foundations." }
        ]
    },


    "measuring-angles": {
        title: "Measuring Angles",
        subtitle: "Learn what angles are and how they are measured.",
        body: `
        <h2>What is an Angle?</h2>

        <p>An <strong>angle</strong> is formed when two rays share a common endpoint.</p>

        <p>The common endpoint is called the <strong>vertex</strong>.</p>

        <h2>Parts of an Angle</h2>

        <ul>
            <li>Two rays</li>
            <li>One vertex</li>
        </ul>

        <h2>How are Angles Measured?</h2>

        <p>Angles are measured in <strong>degrees (°)</strong>.</p>

        <p>A full circle measures <strong>360°</strong>.</p>

        <h2>Examples</h2>

        <ul>
            <li>45°</li>
            <li>90°</li>
            <li>135°</li>
            <li>180°</li>
        </ul>

        <h2>Using a Protractor</h2>

        <p>A protractor is the tool used to measure angles.</p>

        <h2>Real World Example</h2>

        <p>Clock hands, scissors, doors, and road intersections all create angles.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Measure from the correct zero on the protractor.</li>
            <li>Don't confuse the vertex with the rays.</li>
        </ul>

        <h2>Summary</h2>

        <p>Angles measure the amount of rotation between two rays.</p>
    `,
        questions: [

            { q: "An angle is formed by?", options: ["Two rays", "Two lines", "Two circles"], answer: "Two rays", explanation: "Angles are formed by two rays with a common endpoint." },

            { q: "The common endpoint is called?", options: ["Vertex", "Center", "Radius"], answer: "Vertex", explanation: "The shared endpoint is the vertex." },

            { q: "Angles are measured in?", options: ["Degrees", "Meters", "Square units"], answer: "Degrees", explanation: "Angles are measured in degrees." },

            { q: "The symbol for degrees is?", options: ["°", "%", "#"], answer: "°", explanation: "The degree symbol represents angle measure." },

            { q: "A full circle measures?", options: ["360°", "180°", "90°"], answer: "360°", explanation: "A complete rotation is 360 degrees." },

            { q: "A protractor measures?", options: ["Angles", "Distance", "Area"], answer: "Angles", explanation: "A protractor measures angles." },

            { q: "The rays of an angle share a?", options: ["Vertex", "Diameter", "Radius"], answer: "Vertex", explanation: "The rays meet at the vertex." },

            { q: "45° is an example of?", options: ["An angle", "A line", "A plane"], answer: "An angle", explanation: "45° measures an angle." },

            { q: "180° represents?", options: ["A straight angle", "A right angle", "An acute angle"], answer: "A straight angle", explanation: "A straight angle measures 180°." },

            { q: "90° represents?", options: ["A right angle", "An obtuse angle", "A straight angle"], answer: "A right angle", explanation: "A right angle is exactly 90°." },

            { q: "Angles measure?", options: ["Rotation", "Distance", "Area"], answer: "Rotation", explanation: "Angles measure the amount of turn." },

            { q: "Clock hands form?", options: ["Angles", "Circles only", "Segments only"], answer: "Angles", explanation: "The hands create an angle." },

            { q: "A door opening creates?", options: ["An angle", "A sphere", "A polygon"], answer: "An angle", explanation: "Opening a door forms an angle." },

            { q: "The rays of an angle extend?", options: ["Forever", "To the vertex only", "Nowhere"], answer: "Forever", explanation: "Rays extend infinitely in one direction." },

            { q: "Angles belong to?", options: ["Geometry", "History", "Economics"], answer: "Geometry", explanation: "Angles are a basic geometry concept." },

            { q: "A protractor is shaped like a?", options: ["Half circle", "Cube", "Triangle"], answer: "Half circle", explanation: "Most classroom protractors are semicircular." },

            { q: "The vertex is?", options: ["Where the rays meet", "The longest side", "The angle measure"], answer: "Where the rays meet", explanation: "The rays share one endpoint." },

            { q: "Can angles be greater than 180°?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Angles can be reflex angles up to 360°." },

            { q: "Angles are measured using?", options: ["Degrees", "Inches", "Liters"], answer: "Degrees", explanation: "Degrees are the standard unit." },

            { q: "Measuring angles is an important skill in?", options: ["Geometry", "Grammar", "Biology"], answer: "Geometry", explanation: "Geometry frequently involves angle measurement." }

        ]
    },



    "types-of-angles": {
        title: "Types of Angles",
        subtitle: "Classify angles by their measurements.",
        body: `
        <p>Angles can be grouped by how many degrees they measure.</p>

        <h2>Main Angle Types</h2>

        <p><strong>Acute Angle</strong>: less than 90°</p>
        <p><strong>Right Angle</strong>: exactly 90°</p>
        <p><strong>Obtuse Angle</strong>: greater than 90° but less than 180°</p>
        <p><strong>Straight Angle</strong>: exactly 180°</p>
        <p><strong>Reflex Angle</strong>: greater than 180° but less than 360°</p>

        <h2>Examples</h2>

        <p>35° is acute.</p>
        <p>90° is right.</p>
        <p>120° is obtuse.</p>
        <p>180° is straight.</p>
        <p>270° is reflex.</p>

        <h2>Common Mistake</h2>

        <p>An obtuse angle is less than 180°. If it is greater than 180°, it is reflex.</p>
    `,
        questions: [
            { q: "An acute angle is?", options: ["Less than 90°", "Exactly 90°", "More than 180°"], answer: "Less than 90°", explanation: "Acute angles are smaller than right angles." },
            { q: "A right angle is?", options: ["90°", "180°", "360°"], answer: "90°", explanation: "A right angle is exactly 90°." },
            { q: "An obtuse angle is?", options: ["Between 90° and 180°", "Less than 90°", "Exactly 180°"], answer: "Between 90° and 180°", explanation: "Obtuse angles are greater than 90° but less than 180°." },
            { q: "A straight angle is?", options: ["180°", "90°", "270°"], answer: "180°", explanation: "A straight angle forms a line." },
            { q: "A reflex angle is?", options: ["Greater than 180° but less than 360°", "Less than 90°", "Exactly 90°"], answer: "Greater than 180° but less than 360°", explanation: "Reflex angles are larger than straight angles." },

            { q: "45° is?", options: ["Acute", "Right", "Obtuse"], answer: "Acute", explanation: "45° is less than 90°." },
            { q: "90° is?", options: ["Right", "Acute", "Straight"], answer: "Right", explanation: "90° is a right angle." },
            { q: "120° is?", options: ["Obtuse", "Acute", "Reflex"], answer: "Obtuse", explanation: "120° is between 90° and 180°." },
            { q: "180° is?", options: ["Straight", "Right", "Acute"], answer: "Straight", explanation: "180° forms a straight line." },
            { q: "270° is?", options: ["Reflex", "Obtuse", "Right"], answer: "Reflex", explanation: "270° is greater than 180°." },

            { q: "Which angle is acute?", options: ["30°", "100°", "180°"], answer: "30°", explanation: "30° is less than 90°." },
            { q: "Which angle is obtuse?", options: ["135°", "45°", "90°"], answer: "135°", explanation: "135° is between 90° and 180°." },
            { q: "Which angle is straight?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Straight angles measure 180°." },
            { q: "Which angle is reflex?", options: ["250°", "120°", "60°"], answer: "250°", explanation: "250° is greater than 180°." },
            { q: "An angle of 89° is?", options: ["Acute", "Right", "Obtuse"], answer: "Acute", explanation: "89° is still less than 90°." },

            { q: "An angle of 91° is?", options: ["Obtuse", "Right", "Acute"], answer: "Obtuse", explanation: "91° is just greater than 90°." },
            { q: "An angle of exactly 90° is not?", options: ["Acute", "Right", "An angle"], answer: "Acute", explanation: "Acute means less than 90°, not equal to 90°." },
            { q: "An angle of exactly 180° is not?", options: ["Obtuse", "Straight", "An angle"], answer: "Obtuse", explanation: "Obtuse angles are less than 180°." },
            { q: "A full turn is?", options: ["360°", "180°", "90°"], answer: "360°", explanation: "One full rotation is 360°." },
            { q: "Classifying angles helps with?", options: ["Geometry problems", "Only spelling", "Only reading"], answer: "Geometry problems", explanation: "Angle type helps solve many geometry problems." }
        ]
    }
    ,

    "complementary-angles": {
        title: "Complementary Angles",
        subtitle: "Learn how two angles can add up to exactly 90°.",
        body: `
        <h2>What are Complementary Angles?</h2>

        <p>Two angles are <strong>complementary</strong> if their measures add up to exactly <strong>90°</strong>.</p>

        <h2>Formula</h2>

        <p style="font-size:28px;"><strong>Angle 1 + Angle 2 = 90°</strong></p>

        <h2>Examples</h2>

        <ul>
            <li>20° + 70° = 90°</li>
            <li>35° + 55° = 90°</li>
            <li>45° + 45° = 90°</li>
        </ul>

        <h2>Finding a Missing Angle</h2>

        <p>If one angle measures 28°, the other angle is:</p>

        <p><strong>90° − 28° = 62°</strong></p>

        <h2>Real World Example</h2>

        <p>Many corners in construction and architecture use complementary angles to create right angles.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Complementary means 90°, not 180°.</li>
            <li>The angles do not have to touch each other.</li>
            <li>Always check that the total equals exactly 90°.</li>
        </ul>

        <h2>Summary</h2>

        <p>Complementary angles are two angles whose measures add to exactly 90°.</p>
    `,
        questions: [

            { q: "Complementary angles add to?", options: ["90°", "180°", "360°"], answer: "90°", explanation: "Complementary angles always total 90°." },

            { q: "20° and 70° are?", options: ["Complementary", "Supplementary", "Vertical"], answer: "Complementary", explanation: "20 + 70 = 90." },

            { q: "40° and 50° are?", options: ["Complementary", "Supplementary", "Neither"], answer: "Complementary", explanation: "40 + 50 = 90." },

            { q: "60° and 30° are?", options: ["Complementary", "Supplementary", "Straight"], answer: "Complementary", explanation: "60 + 30 = 90." },

            { q: "45° and 45° are?", options: ["Complementary", "Supplementary", "Vertical"], answer: "Complementary", explanation: "45 + 45 = 90." },

            { q: "If one angle is 25°, the complementary angle is?", options: ["65°", "155°", "75°"], answer: "65°", explanation: "90 − 25 = 65." },

            { q: "If one angle is 18°, the other is?", options: ["72°", "162°", "82°"], answer: "72°", explanation: "90 − 18 = 72." },

            { q: "If one angle is 52°, the other is?", options: ["38°", "128°", "42°"], answer: "38°", explanation: "90 − 52 = 38." },

            { q: "Complementary angles must equal exactly?", options: ["90°", "89°", "91°"], answer: "90°", explanation: "Exactly 90 degrees." },

            { q: "Do complementary angles have to be next to each other?", options: ["No", "Yes", "Always"], answer: "No", explanation: "They only need to sum to 90°." },

            { q: "10° and 80° are?", options: ["Complementary", "Supplementary", "Neither"], answer: "Complementary", explanation: "10 + 80 = 90." },

            { q: "15° and 75° are?", options: ["Complementary", "Supplementary", "Vertical"], answer: "Complementary", explanation: "15 + 75 = 90." },

            { q: "30° and 40° are?", options: ["Neither", "Complementary", "Supplementary"], answer: "Neither", explanation: "30 + 40 = 70." },

            { q: "80° and 20° are?", options: ["Neither", "Complementary", "Supplementary"], answer: "Neither", explanation: "80 + 20 = 100." },

            { q: "90° and 0° are?", options: ["Complementary", "Supplementary", "Neither"], answer: "Complementary", explanation: "90 + 0 = 90." },

            { q: "The word 'complementary' means?", options: ["Adds to 90°", "Adds to 180°", "Equal angles"], answer: "Adds to 90°", explanation: "That's the definition." },

            { q: "Which operation finds a missing complementary angle?", options: ["Subtraction", "Addition", "Multiplication"], answer: "Subtraction", explanation: "Subtract from 90°." },

            { q: "Complementary angles are commonly associated with?", options: ["Right angles", "Straight angles", "Circles"], answer: "Right angles", explanation: "A right angle measures 90°." },

            { q: "If two angles total 90°, they are?", options: ["Complementary", "Supplementary", "Adjacent"], answer: "Complementary", explanation: "That's the definition." },

            { q: "Complementary angles are studied in?", options: ["Geometry", "Biology", "Chemistry"], answer: "Geometry", explanation: "They are an important geometry concept." }

        ]
    },



    "supplementary-angles": {
        title: "Supplementary Angles",
        subtitle: "Learn how two angles can add up to exactly 180°.",
        body: `
        <h2>What are Supplementary Angles?</h2>

        <p>Two angles are <strong>supplementary</strong> if their measures add up to exactly <strong>180°</strong>.</p>

        <h2>Formula</h2>

        <p style="font-size:28px;"><strong>Angle 1 + Angle 2 = 180°</strong></p>

        <h2>Examples</h2>

        <ul>
            <li>100° + 80° = 180°</li>
            <li>120° + 60° = 180°</li>
            <li>90° + 90° = 180°</li>
        </ul>

        <h2>Finding a Missing Angle</h2>

        <p>If one angle measures 47°, the other angle is:</p>

        <p><strong>180° − 47° = 133°</strong></p>

        <h2>Real World Example</h2>

        <p>A straight road forms a straight angle measuring 180°.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Supplementary means 180°, not 90°.</li>
            <li>The two angles do not have to be adjacent.</li>
            <li>Always verify the total equals exactly 180°.</li>
        </ul>

        <h2>Summary</h2>

        <p>Supplementary angles are two angles whose measures add to exactly 180°.</p>
    `,
        questions: [

            { q: "Supplementary angles add to?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "By definition, supplementary angles total 180°." },

            { q: "100° and 80° are?", options: ["Supplementary", "Complementary", "Vertical"], answer: "Supplementary", explanation: "100 + 80 = 180." },

            { q: "120° and 60° are?", options: ["Supplementary", "Complementary", "Neither"], answer: "Supplementary", explanation: "120 + 60 = 180." },

            { q: "90° and 90° are?", options: ["Supplementary", "Complementary", "Vertical"], answer: "Supplementary", explanation: "90 + 90 = 180." },

            { q: "150° and 30° are?", options: ["Supplementary", "Complementary", "Neither"], answer: "Supplementary", explanation: "150 + 30 = 180." },

            { q: "If one angle is 45°, the supplementary angle is?", options: ["135°", "55°", "90°"], answer: "135°", explanation: "180 − 45 = 135." },

            { q: "If one angle is 70°, the other is?", options: ["110°", "20°", "100°"], answer: "110°", explanation: "180 − 70 = 110." },

            { q: "If one angle is 125°, the other is?", options: ["55°", "65°", "45°"], answer: "55°", explanation: "180 − 125 = 55." },

            { q: "Supplementary angles total exactly?", options: ["180°", "179°", "181°"], answer: "180°", explanation: "Exactly 180°." },

            { q: "Do supplementary angles have to touch?", options: ["No", "Yes", "Always"], answer: "No", explanation: "They only need to total 180°." },

            { q: "60° and 120° are?", options: ["Supplementary", "Complementary", "Neither"], answer: "Supplementary", explanation: "60 + 120 = 180." },

            { q: "30° and 150° are?", options: ["Supplementary", "Complementary", "Vertical"], answer: "Supplementary", explanation: "30 + 150 = 180." },

            { q: "40° and 100° are?", options: ["Neither", "Supplementary", "Complementary"], answer: "Neither", explanation: "40 + 100 = 140." },

            { q: "80° and 90° are?", options: ["Neither", "Supplementary", "Complementary"], answer: "Neither", explanation: "80 + 90 = 170." },

            { q: "180° and 0° are?", options: ["Supplementary", "Complementary", "Neither"], answer: "Supplementary", explanation: "180 + 0 = 180." },

            { q: "The word 'supplementary' means?", options: ["Adds to 180°", "Adds to 90°", "Equal angles"], answer: "Adds to 180°", explanation: "That's the definition." },

            { q: "Which operation finds a missing supplementary angle?", options: ["Subtraction", "Addition", "Multiplication"], answer: "Subtraction", explanation: "Subtract from 180°." },

            { q: "Supplementary angles are commonly associated with?", options: ["Straight angles", "Right angles", "Circles"], answer: "Straight angles", explanation: "A straight angle measures 180°." },

            { q: "If two angles total 180°, they are?", options: ["Supplementary", "Complementary", "Adjacent"], answer: "Supplementary", explanation: "That's the definition." },

            { q: "Supplementary angles are studied in?", options: ["Geometry", "Biology", "Economics"], answer: "Geometry", explanation: "They are a core geometry concept." }

        ]
    }


    ,

    "vertical-angles": {
        title: "Vertical Angles",
        subtitle: "Learn why opposite angles formed by intersecting lines are always equal.",
        body: `
        <h2>What are Vertical Angles?</h2>

        <p><strong>Vertical angles</strong> are the opposite angles formed when two lines intersect.</p>

        <h2>Important Rule</h2>

        <p style="font-size:28px;"><strong>Vertical Angles are Congruent</strong></p>

        <p>This means they always have exactly the same measure.</p>

        <h2>Example</h2>

        <p>If one angle measures 65°, then the opposite (vertical) angle also measures 65°.</p>

        <h2>Another Example</h2>

        <p>If one angle measures 120°, the opposite angle also measures 120°.</p>

        <h2>Real World Example</h2>

        <p>Road intersections often create pairs of vertical angles.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Vertical angles are opposite each other.</li>
            <li>Angles that touch each other are NOT vertical angles.</li>
            <li>Vertical angles are always congruent.</li>
        </ul>

        <h2>Summary</h2>

        <p>Whenever two lines intersect, opposite angles are always equal.</p>
    `,
        questions: [

            { q: "Vertical angles are?", options: ["Opposite angles", "Adjacent angles", "Complementary angles"], answer: "Opposite angles", explanation: "Vertical angles are opposite one another." },

            { q: "Vertical angles are always?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "Vertical angles always have equal measure." },

            { q: "If one vertical angle is 45°, the opposite angle is?", options: ["45°", "135°", "90°"], answer: "45°", explanation: "Vertical angles are congruent." },

            { q: "If one vertical angle is 120°, the opposite angle is?", options: ["120°", "60°", "180°"], answer: "120°", explanation: "Opposite angles are equal." },

            { q: "Vertical angles are formed by?", options: ["Intersecting lines", "Parallel lines", "Circles"], answer: "Intersecting lines", explanation: "They are created when two lines cross." },

            { q: "Do vertical angles share a side?", options: ["No", "Yes", "Always"], answer: "No", explanation: "They are opposite each other." },

            { q: "Adjacent angles are?", options: ["Next to each other", "Opposite each other", "Equal"], answer: "Next to each other", explanation: "Adjacent angles share a side." },

            { q: "Vertical angles share a?", options: ["Vertex", "Side", "Diameter"], answer: "Vertex", explanation: "They share only the same vertex." },

            { q: "If one angle is 80°, its vertical angle is?", options: ["80°", "100°", "160°"], answer: "80°", explanation: "Vertical angles are congruent." },

            { q: "The theorem states vertical angles are?", options: ["Congruent", "Always 90°", "Always 180°"], answer: "Congruent", explanation: "This is the Vertical Angles Theorem." },

            { q: "If two lines intersect, how many angles are formed?", options: ["4", "2", "6"], answer: "4", explanation: "Two intersecting lines create four angles." },

            { q: "How many pairs of vertical angles are formed?", options: ["2", "1", "4"], answer: "2", explanation: "There are two opposite pairs." },

            { q: "If one angle measures 150°, the opposite angle measures?", options: ["150°", "30°", "180°"], answer: "150°", explanation: "Opposite angles are equal." },

            { q: "Vertical angles are useful in?", options: ["Proofs", "Only algebra", "Statistics"], answer: "Proofs", explanation: "They are frequently used in geometric proofs." },

            { q: "The word congruent means?", options: ["Equal measure", "Parallel", "Adjacent"], answer: "Equal measure", explanation: "Congruent angles have equal measures." },

            { q: "Road intersections create?", options: ["Vertical angles", "Circles", "Polygons"], answer: "Vertical angles", explanation: "Intersecting roads create vertical angles." },

            { q: "Angles opposite each other are?", options: ["Vertical angles", "Linear pairs", "Complementary"], answer: "Vertical angles", explanation: "Opposite angles are vertical angles." },

            { q: "Vertical angles belong to?", options: ["Geometry", "Chemistry", "Economics"], answer: "Geometry", explanation: "This is a geometry theorem." },

            { q: "Vertical angles have the same?", options: ["Measure", "Area", "Length"], answer: "Measure", explanation: "Congruent means equal measure." },

            { q: "The Vertical Angles Theorem says?", options: ["Opposite angles are congruent", "Adjacent angles are congruent", "All angles are 90°"], answer: "Opposite angles are congruent", explanation: "This is one of the fundamental geometry theorems." }

        ]
    }
    ,



    "linear-pairs": {
        title: "Linear Pairs",
        subtitle: "Learn how adjacent angles can form a straight line.",
        body: `
        <h2>What is a Linear Pair?</h2>

        <p>A <strong>linear pair</strong> consists of two <strong>adjacent angles</strong> whose non-common sides form a straight line.</p>

        <h2>Important Rule</h2>

        <p style="font-size:28px;"><strong>Linear Pair = 180°</strong></p>

        <p>This means the two angles are always supplementary.</p>

        <h2>Example 1</h2>

        <p>If one angle measures 70°, the other angle measures:</p>

        <p><strong>180° − 70° = 110°</strong></p>

        <h2>Example 2</h2>

        <p>If one angle measures 125°, the other angle measures:</p>

        <p><strong>180° − 125° = 55°</strong></p>

        <h2>Real World Example</h2>

        <p>When a door opens, the door and the wall create a linear pair.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Linear pairs MUST be adjacent.</li>
            <li>Vertical angles are opposite—not a linear pair.</li>
            <li>Every linear pair is supplementary.</li>
        </ul>

        <h2>Summary</h2>

        <p>A linear pair is made of two adjacent angles that always total 180°.</p>
    `,
        questions: [

            { q: "A linear pair consists of?", options: ["Two adjacent angles", "Two opposite angles", "Two circles"], answer: "Two adjacent angles", explanation: "Linear pairs share one common side." },

            { q: "Linear pairs always total?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "They are supplementary." },

            { q: "Linear pairs are always?", options: ["Supplementary", "Complementary", "Vertical"], answer: "Supplementary", explanation: "Their measures always add to 180°." },

            { q: "If one angle is 70°, the other is?", options: ["110°", "20°", "90°"], answer: "110°", explanation: "180−70=110." },

            { q: "If one angle is 125°, the other is?", options: ["55°", "65°", "45°"], answer: "55°", explanation: "180−125=55." },

            { q: "Do linear pairs share a side?", options: ["Yes", "No", "Sometimes"], answer: "Yes", explanation: "Adjacent angles always share one side." },

            { q: "Do vertical angles share a side?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Vertical angles are opposite." },

            { q: "Linear pairs form a?", options: ["Straight line", "Triangle", "Circle"], answer: "Straight line", explanation: "Their outer sides form a straight line." },

            { q: "If one angle is 90°, the other is?", options: ["90°", "45°", "180°"], answer: "90°", explanation: "90+90=180." },

            { q: "If one angle is 35°, the other is?", options: ["145°", "55°", "155°"], answer: "145°", explanation: "180−35=145." },

            { q: "Which theorem applies?", options: ["Linear Pair Theorem", "Pythagorean Theorem", "Triangle Sum Theorem"], answer: "Linear Pair Theorem", explanation: "Linear pairs are supplementary." },

            { q: "Linear pairs must be?", options: ["Adjacent", "Opposite", "Parallel"], answer: "Adjacent", explanation: "They share a common side." },

            { q: "Adjacent angles are?", options: ["Next to each other", "Opposite", "Always equal"], answer: "Next to each other", explanation: "Adjacent means sharing a side and a vertex." },

            { q: "A straight angle measures?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Linear pairs form a straight angle." },

            { q: "If angles total 180° and share a side, they form?", options: ["A linear pair", "Vertical angles", "Complementary angles"], answer: "A linear pair", explanation: "That's the definition." },

            { q: "Linear pairs are studied in?", options: ["Geometry", "History", "Physics"], answer: "Geometry", explanation: "This is a geometry relationship." },

            { q: "If one angle is 150°, the other is?", options: ["30°", "60°", "40°"], answer: "30°", explanation: "180−150=30." },

            { q: "The sum of a linear pair is always?", options: ["180°", "90°", "270°"], answer: "180°", explanation: "Always supplementary." },

            { q: "Every linear pair is?", options: ["Supplementary", "Complementary", "Vertical"], answer: "Supplementary", explanation: "This is always true." },

            { q: "Linear pairs are important because they help solve?", options: ["Missing angle problems", "Area problems", "Volume problems"], answer: "Missing angle problems", explanation: "They are commonly used to find unknown angle measures." }

        ]
    }

    ,

    "angle-addition-postulate": {
        title: "Angle Addition Postulate",
        subtitle: "Learn how to find missing angle measures when one angle is divided into smaller angles.",
        body: `
        <h2>What is the Angle Addition Postulate?</h2>

        <p>If point B lies inside ∠AOC, then:</p>

        <h2>Formula</h2>

        <p style="font-size:28px;"><strong>m∠AOB + m∠BOC = m∠AOC</strong></p>

        <p>The measure of the whole angle equals the sum of its parts.</p>

        <h2>Example 1</h2>

        <p>If ∠AOB = 40° and ∠BOC = 30°, then:</p>

        <p><strong>∠AOC = 70°</strong></p>

        <h2>Example 2</h2>

        <p>If ∠AOC = 125° and ∠AOB = 55°, then:</p>

        <p><strong>∠BOC = 70°</strong></p>

        <h2>Real World Example</h2>

        <p>A pizza slice divided into smaller slices demonstrates angle addition.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>The smaller angle must lie inside the larger angle.</li>
            <li>Add the parts to get the whole.</li>
            <li>Subtract from the whole to find a missing part.</li>
        </ul>

        <h2>Summary</h2>

        <p>The Angle Addition Postulate allows us to solve for unknown angle measures.</p>
    `,
        questions: [

            { q: "The Angle Addition Postulate states?", options: ["Part + Part = Whole", "Whole + Whole = Part", "Part × Part = Whole"], answer: "Part + Part = Whole", explanation: "The whole angle equals the sum of its parts." },

            { q: "40° + 30° = ?", options: ["70°", "60°", "80°"], answer: "70°", explanation: "40 + 30 = 70." },

            { q: "If the whole angle is 120° and one part is 50°, the other part is?", options: ["70°", "60°", "50°"], answer: "70°", explanation: "120 − 50 = 70." },

            { q: "The Angle Addition Postulate works with?", options: ["Adjacent angles", "Vertical angles only", "Circles"], answer: "Adjacent angles", explanation: "The smaller angles must combine to form the larger angle." },

            { q: "Which operation finds the whole angle?", options: ["Addition", "Subtraction", "Division"], answer: "Addition", explanation: "Add the smaller angles." },

            { q: "Which operation finds a missing part?", options: ["Subtraction", "Addition", "Multiplication"], answer: "Subtraction", explanation: "Subtract from the whole." },

            { q: "25° + 65° = ?", options: ["90°", "80°", "100°"], answer: "90°", explanation: "25 + 65 = 90." },

            { q: "70° + 80° = ?", options: ["150°", "140°", "160°"], answer: "150°", explanation: "70 + 80 = 150." },

            { q: "If one angle is 35° and the whole is 90°, the missing angle is?", options: ["55°", "45°", "65°"], answer: "55°", explanation: "90 − 35 = 55." },

            { q: "The Angle Addition Postulate is used to?", options: ["Find missing angle measures", "Find area", "Find perimeter"], answer: "Find missing angle measures", explanation: "It helps solve angle problems." },

            { q: "Angles being added must share a?", options: ["Vertex", "Radius", "Diameter"], answer: "Vertex", explanation: "They must be adjacent." },

            { q: "The whole angle equals?", options: ["The sum of its parts", "The difference of its parts", "Twice its parts"], answer: "The sum of its parts", explanation: "That's the postulate." },

            { q: "The postulate is useful in?", options: ["Geometry proofs", "Only Algebra", "Statistics"], answer: "Geometry proofs", explanation: "It is commonly used in proofs." },

            { q: "A pizza slice can demonstrate?", options: ["Angle addition", "Volume", "Slope"], answer: "Angle addition", explanation: "Slices combine to form the whole angle." },

            { q: "If two angles measure 40° and 60°, together they measure?", options: ["100°", "90°", "80°"], answer: "100°", explanation: "40 + 60 = 100." },

            { q: "The Angle Addition Postulate belongs to?", options: ["Geometry", "History", "Physics"], answer: "Geometry", explanation: "It is a basic geometry postulate." },

            { q: "Which statement is true?", options: ["Whole = Sum of Parts", "Whole = Difference of Parts", "Whole = Product of Parts"], answer: "Whole = Sum of Parts", explanation: "Always true for adjacent angles." },

            { q: "Adjacent angles share?", options: ["A common side", "No sides", "Opposite sides"], answer: "A common side", explanation: "Adjacent angles share a side." },

            { q: "A missing angle is usually found by?", options: ["Subtraction", "Addition", "Division"], answer: "Subtraction", explanation: "Subtract the known part from the whole." },

            { q: "The Angle Addition Postulate helps solve?", options: ["Unknown angles", "Area problems", "Volume problems"], answer: "Unknown angles", explanation: "It is one of the most useful angle postulates." }

        ]
    }
    ,

    "angle-relationships": {
        title: "Angle Relationships",
        subtitle: "Learn how different types of angles are related to one another.",
        body: `
        <h2>Angle Relationships</h2>

        <p>Geometry contains several important angle relationships.</p>

        <h2>Complementary Angles</h2>

        <p>Two angles whose measures add to <strong>90°</strong>.</p>

        <h2>Supplementary Angles</h2>

        <p>Two angles whose measures add to <strong>180°</strong>.</p>

        <h2>Vertical Angles</h2>

        <p>Opposite angles formed by intersecting lines.</p>

        <p>Vertical angles are always congruent.</p>

        <h2>Linear Pairs</h2>

        <p>Adjacent angles that form a straight line.</p>

        <p>Linear pairs are always supplementary.</p>

        <h2>Summary Table</h2>

        <table>
            <tr>
                <th>Relationship</th>
                <th>Rule</th>
            </tr>
            <tr>
                <td>Complementary</td>
                <td>Sum = 90°</td>
            </tr>
            <tr>
                <td>Supplementary</td>
                <td>Sum = 180°</td>
            </tr>
            <tr>
                <td>Vertical</td>
                <td>Congruent</td>
            </tr>
            <tr>
                <td>Linear Pair</td>
                <td>Adjacent + Sum = 180°</td>
            </tr>
        </table>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Vertical angles are opposite, not adjacent.</li>
            <li>Linear pairs are adjacent.</li>
            <li>Complementary means 90°.</li>
            <li>Supplementary means 180°.</li>
        </ul>
    `,
        questions: [

            { q: "Complementary angles add to?", options: ["90°", "180°", "360°"], answer: "90°", explanation: "Definition of complementary angles." },

            { q: "Supplementary angles add to?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Definition of supplementary angles." },

            { q: "Vertical angles are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "Vertical angles always have equal measure." },

            { q: "Linear pairs are?", options: ["Supplementary", "Complementary", "Vertical"], answer: "Supplementary", explanation: "Linear pairs always total 180°." },

            { q: "Vertical angles are?", options: ["Opposite", "Adjacent", "Parallel"], answer: "Opposite", explanation: "Vertical angles are opposite each other." },

            { q: "Linear pairs are?", options: ["Adjacent", "Opposite", "Separate"], answer: "Adjacent", explanation: "They share a common side." },

            { q: "45° and 45° are?", options: ["Complementary", "Supplementary", "Neither"], answer: "Complementary", explanation: "45+45=90." },

            { q: "120° and 60° are?", options: ["Supplementary", "Complementary", "Vertical"], answer: "Supplementary", explanation: "120+60=180." },

            { q: "Which relationship uses intersecting lines?", options: ["Vertical angles", "Complementary angles", "Linear equations"], answer: "Vertical angles", explanation: "Vertical angles come from intersecting lines." },

            { q: "Which relationship forms a straight line?", options: ["Linear Pair", "Vertical Angles", "Complementary"], answer: "Linear Pair", explanation: "Linear pairs form a straight angle." },

            { q: "30° and 60° are?", options: ["Complementary", "Supplementary", "Vertical"], answer: "Complementary", explanation: "30+60=90." },

            { q: "70° and 110° are?", options: ["Supplementary", "Complementary", "Vertical"], answer: "Supplementary", explanation: "70+110=180." },

            { q: "Vertical angles always have equal?", options: ["Measure", "Area", "Length"], answer: "Measure", explanation: "Congruent means equal measure." },

            { q: "Complementary angles are associated with?", options: ["Right angles", "Straight angles", "Circles"], answer: "Right angles", explanation: "90° is a right angle." },

            { q: "Supplementary angles are associated with?", options: ["Straight angles", "Right angles", "Triangles"], answer: "Straight angles", explanation: "180° is a straight angle." },

            { q: "Which relationship always shares one side?", options: ["Linear Pair", "Vertical Angles", "Complementary"], answer: "Linear Pair", explanation: "Linear pairs are adjacent." },

            { q: "Which relationship never shares a side?", options: ["Vertical Angles", "Linear Pair", "Adjacent Angles"], answer: "Vertical Angles", explanation: "Vertical angles are opposite." },

            { q: "Geometry uses angle relationships to find?", options: ["Unknown angles", "Unknown colors", "Unknown weights"], answer: "Unknown angles", explanation: "These relationships help solve angle problems." },

            { q: "Angle relationships are important in?", options: ["Geometry proofs", "History essays", "Economics"], answer: "Geometry proofs", explanation: "They are used frequently in proofs." },

            { q: "Understanding angle relationships helps solve?", options: ["Many geometry problems", "Only algebra", "Only graphing"], answer: "Many geometry problems", explanation: "They are fundamental to geometry." }

        ]
    }

    ,

    "real-world-angle-problems": {
        title: "Real-World Angle Problems",
        subtitle: "Use angle relationships to solve real-life problems.",
        body: `
        <h2>Why Angle Problems Matter</h2>

        <p>Angles appear in construction, roads, sports, clocks, architecture, art, and engineering.</p>

        <h2>Common Real-World Angle Situations</h2>

        <ul>
            <li>Clock hands form angles.</li>
            <li>Road intersections form vertical angles and linear pairs.</li>
            <li>Doors opening create angles.</li>
            <li>Roof designs use complementary and supplementary angles.</li>
            <li>Scissors create changing angles.</li>
        </ul>

        <h2>Example 1</h2>

        <p>A door opens to 65°. How many more degrees until it forms a right angle?</p>

        <p><strong>90° − 65° = 25°</strong></p>

        <h2>Example 2</h2>

        <p>Two angles form a straight line. One angle is 115°. Find the other angle.</p>

        <p><strong>180° − 115° = 65°</strong></p>

        <h2>Example 3</h2>

        <p>Two roads intersect. One angle is 72°. The opposite angle is also <strong>72°</strong> because vertical angles are congruent.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Use 90° for complementary angle situations.</li>
            <li>Use 180° for supplementary angles and linear pairs.</li>
            <li>Use equal measures for vertical angles.</li>
        </ul>

        <h2>Summary</h2>

        <p>Real-world angle problems become easier when you identify the angle relationship first.</p>
    `,
        questions: [
            { q: "A door opens to 60°. How many more degrees until 90°?", options: ["30°", "60°", "120°"], answer: "30°", explanation: "90 − 60 = 30." },
            { q: "Two angles form a straight line. One is 110°. The other is?", options: ["70°", "80°", "90°"], answer: "70°", explanation: "180 − 110 = 70." },
            { q: "Two roads intersect. One angle is 50°. The opposite angle is?", options: ["50°", "130°", "90°"], answer: "50°", explanation: "Vertical angles are congruent." },
            { q: "Clock hands form?", options: ["Angles", "Volumes", "Circles only"], answer: "Angles", explanation: "The hands create angle measures." },
            { q: "A right angle measures?", options: ["90°", "180°", "360°"], answer: "90°", explanation: "Right angles measure exactly 90°." },

            { q: "A straight angle measures?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "A straight angle forms a line." },
            { q: "If two angles add to 90°, they are?", options: ["Complementary", "Supplementary", "Vertical"], answer: "Complementary", explanation: "Complementary angles total 90°." },
            { q: "If two angles add to 180°, they are?", options: ["Supplementary", "Complementary", "Vertical"], answer: "Supplementary", explanation: "Supplementary angles total 180°." },
            { q: "Opposite angles formed by intersecting lines are?", options: ["Vertical angles", "Linear pairs", "Complementary"], answer: "Vertical angles", explanation: "Vertical angles are opposite." },
            { q: "Adjacent angles that form a straight line are?", options: ["Linear pair", "Vertical angles", "Reflex angles"], answer: "Linear pair", explanation: "Linear pairs are adjacent and supplementary." },

            { q: "A ladder against a wall often forms?", options: ["Angles", "No angles", "Only circles"], answer: "Angles", explanation: "The ladder, wall, and ground create angles." },
            { q: "A road intersection can show?", options: ["Vertical angles", "Only volume", "Only area"], answer: "Vertical angles", explanation: "Intersecting roads create vertical angle pairs." },
            { q: "If one angle in a linear pair is 40°, the other is?", options: ["140°", "50°", "40°"], answer: "140°", explanation: "180 − 40 = 140." },
            { q: "If one complementary angle is 32°, the other is?", options: ["58°", "148°", "68°"], answer: "58°", explanation: "90 − 32 = 58." },
            { q: "If one supplementary angle is 75°, the other is?", options: ["105°", "15°", "75°"], answer: "105°", explanation: "180 − 75 = 105." },

            { q: "Real-world angle problems usually start by identifying?", options: ["The angle relationship", "The color", "The weight"], answer: "The angle relationship", explanation: "Knowing the relationship tells you what rule to use." },
            { q: "Construction uses angles for?", options: ["Accurate design", "Cooking only", "Grammar"], answer: "Accurate design", explanation: "Builders use angles constantly." },
            { q: "Scissors create?", options: ["Changing angles", "No angles", "Only triangles"], answer: "Changing angles", explanation: "The blades open and close, changing the angle." },
            { q: "Architecture uses angles in?", options: ["Roofs and structures", "Only spelling", "Only temperature"], answer: "Roofs and structures", explanation: "Angles help shape buildings." },
            { q: "Angle relationships help solve?", options: ["Missing angle problems", "Only volume problems", "Only money problems"], answer: "Missing angle problems", explanation: "Angle rules let you find unknown measures." }
        ]
    },

    "unit2-review": {
        title: "Unit 2 Review",
        subtitle: "Review angle concepts and angle relationships.",
        body: `
        <h2>Unit 2 Review</h2>

        <p>You have completed the Angle Relationships unit.</p>

        <h2>Lessons Covered</h2>

        <ol>
            <li>Measuring Angles</li>
            <li>Types of Angles</li>
            <li>Complementary Angles</li>
            <li>Supplementary Angles</li>
            <li>Vertical Angles</li>
            <li>Linear Pairs</li>
            <li>Angle Addition Postulate</li>
            <li>Angle Relationships</li>
            <li>Real-World Angle Problems</li>
        </ol>

        <h2>Key Rules</h2>

        <ul>
            <li>Acute angles are less than 90°.</li>
            <li>Right angles equal 90°.</li>
            <li>Obtuse angles are greater than 90° and less than 180°.</li>
            <li>Straight angles equal 180°.</li>
            <li>Complementary angles add to 90°.</li>
            <li>Supplementary angles add to 180°.</li>
            <li>Vertical angles are congruent.</li>
            <li>Linear pairs are supplementary.</li>
            <li>Angle Addition means part + part = whole.</li>
        </ul>

        <h2>Ready for the Test?</h2>

        <p>The next page is the Unit 2 Test.</p>
    `,
        questions: [
            {
                q: "Are you ready for the Unit 2 Test?",
                options: ["Yes!", "I want to review again."],
                answer: "Yes!",
                explanation: "Great. Unit 2 Test is next."
            }
        ]
    },

    "unit2-test": {
        title: "Unit 2 Test",
        subtitle: "Angles and Angle Relationships Assessment",
        body: `
        <h2>Unit 2 Assessment</h2>

        <p>This test covers all angle lessons from Unit 2.</p>

        <h3>Topics Covered</h3>

        <ul>
            <li>Measuring Angles</li>
            <li>Types of Angles</li>
            <li>Complementary Angles</li>
            <li>Supplementary Angles</li>
            <li>Vertical Angles</li>
            <li>Linear Pairs</li>
            <li>Angle Addition Postulate</li>
            <li>Real-World Angle Problems</li>
        </ul>

        <h3>Questions</h3>
        <p>40 Questions</p>

        <h3>Passing Score</h3>
        <p>80%</p>
    `,
        questions: [
            { q: "An angle is formed by?", options: ["Two rays", "Two circles", "Two planes"], answer: "Two rays", explanation: "Angles are formed by two rays sharing an endpoint." },
            { q: "The common endpoint of an angle is called?", options: ["Vertex", "Radius", "Diameter"], answer: "Vertex", explanation: "The vertex is where the rays meet." },
            { q: "Angles are measured in?", options: ["Degrees", "Meters", "Liters"], answer: "Degrees", explanation: "Angles are measured in degrees." },
            { q: "A right angle measures?", options: ["90°", "180°", "360°"], answer: "90°", explanation: "A right angle is exactly 90°." },
            { q: "A straight angle measures?", options: ["180°", "90°", "45°"], answer: "180°", explanation: "A straight angle forms a line." },

            { q: "An acute angle is?", options: ["Less than 90°", "Exactly 90°", "More than 180°"], answer: "Less than 90°", explanation: "Acute angles are smaller than 90°." },
            { q: "An obtuse angle is?", options: ["Between 90° and 180°", "Less than 90°", "Exactly 90°"], answer: "Between 90° and 180°", explanation: "Obtuse angles are greater than 90° but less than 180°." },
            { q: "A reflex angle is?", options: ["Greater than 180° but less than 360°", "Less than 90°", "Exactly 180°"], answer: "Greater than 180° but less than 360°", explanation: "Reflex angles are larger than straight angles." },
            { q: "Complementary angles add to?", options: ["90°", "180°", "360°"], answer: "90°", explanation: "Complementary angles total 90°." },
            { q: "Supplementary angles add to?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Supplementary angles total 180°." },

            { q: "If one complementary angle is 25°, the other is?", options: ["65°", "155°", "75°"], answer: "65°", explanation: "90 − 25 = 65." },
            { q: "If one complementary angle is 40°, the other is?", options: ["50°", "140°", "60°"], answer: "50°", explanation: "90 − 40 = 50." },
            { q: "If one supplementary angle is 70°, the other is?", options: ["110°", "20°", "90°"], answer: "110°", explanation: "180 − 70 = 110." },
            { q: "If one supplementary angle is 125°, the other is?", options: ["55°", "65°", "45°"], answer: "55°", explanation: "180 − 125 = 55." },
            { q: "Vertical angles are always?", options: ["Congruent", "Complementary", "Supplementary"], answer: "Congruent", explanation: "Vertical angles always have equal measures." },

            { q: "Vertical angles are formed by?", options: ["Intersecting lines", "Parallel lines only", "Circles"], answer: "Intersecting lines", explanation: "Two intersecting lines create vertical angles." },
            { q: "If one vertical angle is 80°, the opposite angle is?", options: ["80°", "100°", "180°"], answer: "80°", explanation: "Vertical angles are congruent." },
            { q: "A linear pair always totals?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Linear pairs are supplementary." },
            { q: "Linear pairs must be?", options: ["Adjacent", "Opposite", "Separate"], answer: "Adjacent", explanation: "Linear pairs share a side." },
            { q: "If one angle in a linear pair is 35°, the other is?", options: ["145°", "55°", "155°"], answer: "145°", explanation: "180 − 35 = 145." },

            { q: "The Angle Addition Postulate means?", options: ["Part + Part = Whole", "Whole + Whole = Part", "Part × Part = Whole"], answer: "Part + Part = Whole", explanation: "The whole angle equals the sum of its parts." },
            { q: "If two adjacent angles are 30° and 45°, the whole angle is?", options: ["75°", "15°", "90°"], answer: "75°", explanation: "30 + 45 = 75." },
            { q: "If the whole angle is 120° and one part is 50°, the missing part is?", options: ["70°", "60°", "80°"], answer: "70°", explanation: "120 − 50 = 70." },
            { q: "45° and 45° are?", options: ["Complementary", "Supplementary", "Neither"], answer: "Complementary", explanation: "45 + 45 = 90." },
            { q: "60° and 120° are?", options: ["Supplementary", "Complementary", "Neither"], answer: "Supplementary", explanation: "60 + 120 = 180." },

            { q: "30° and 60° are?", options: ["Complementary", "Supplementary", "Vertical"], answer: "Complementary", explanation: "30 + 60 = 90." },
            { q: "100° and 80° are?", options: ["Supplementary", "Complementary", "Neither"], answer: "Supplementary", explanation: "100 + 80 = 180." },
            { q: "Two opposite angles formed by intersecting lines are?", options: ["Vertical angles", "Linear pairs", "Complementary angles"], answer: "Vertical angles", explanation: "Vertical angles are opposite." },
            { q: "Two adjacent angles forming a straight line are?", options: ["Linear pair", "Vertical angles", "Reflex angles"], answer: "Linear pair", explanation: "A linear pair forms a straight angle." },
            { q: "A full rotation measures?", options: ["360°", "180°", "90°"], answer: "360°", explanation: "One full turn is 360°." },

            { q: "A protractor is used to measure?", options: ["Angles", "Area", "Volume"], answer: "Angles", explanation: "A protractor measures angle size." },
            { q: "Clock hands can form?", options: ["Angles", "Only lines", "Only planes"], answer: "Angles", explanation: "The two hands create an angle." },
            { q: "A road intersection can create?", options: ["Vertical angles", "Only volume", "Only triangles"], answer: "Vertical angles", explanation: "Intersecting roads create vertical angles." },
            { q: "A door opening creates?", options: ["An angle", "A circle", "A prism"], answer: "An angle", explanation: "The door and wall create an angle." },
            { q: "If a door opens 60°, how much more to reach 90°?", options: ["30°", "120°", "60°"], answer: "30°", explanation: "90 − 60 = 30." },

            { q: "If two angles total 90°, they are?", options: ["Complementary", "Supplementary", "Vertical"], answer: "Complementary", explanation: "Complementary means total 90°." },
            { q: "If two angles total 180°, they are?", options: ["Supplementary", "Complementary", "Vertical"], answer: "Supplementary", explanation: "Supplementary means total 180°." },
            { q: "If one vertical angle is 135°, its opposite angle is?", options: ["135°", "45°", "180°"], answer: "135°", explanation: "Vertical angles are equal." },
            { q: "If one angle in a linear pair is 150°, the other is?", options: ["30°", "60°", "90°"], answer: "30°", explanation: "180 − 150 = 30." },
            { q: "Completing this test means you finished?", options: ["Geometry Unit 2", "All Geometry", "Algebra 1"], answer: "Geometry Unit 2", explanation: "This test completes the Angles unit." }
        ]
    }

    ,

    "parallel-lines": {
        title: "Parallel Lines",
        subtitle: "Learn what parallel lines are and how to identify them.",
        body: `
        <h2>What are Parallel Lines?</h2>
        <p><strong>Parallel lines</strong> are two lines in the same plane that never intersect.</p>

        <h2>Key Ideas</h2>
        <ul>
            <li>Parallel lines never cross.</li>
            <li>They stay the same distance apart.</li>
            <li>They extend forever in both directions.</li>
            <li>They must be in the same plane.</li>
        </ul>

        <h2>Symbol</h2>
        <p><strong>∥</strong> means parallel.</p>
        <p>Example: Line AB ∥ Line CD</p>

        <h2>Real World Examples</h2>
        <ul>
            <li>Railroad tracks</li>
            <li>Notebook paper lines</li>
            <li>Highway lanes</li>
            <li>Opposite sides of a rectangle</li>
        </ul>

        <h2>Common Mistake</h2>
        <p>Lines that look close together are not automatically parallel. Parallel lines must never intersect.</p>
    `,
        questions: [
            { q: "Parallel lines?", options: ["Never intersect", "Always intersect", "Form circles"], answer: "Never intersect", explanation: "Parallel lines never meet." },
            { q: "Parallel lines stay?", options: ["Same distance apart", "Closer together", "Farther apart"], answer: "Same distance apart", explanation: "Their distance remains constant." },
            { q: "The parallel symbol is?", options: ["∥", "⊥", "="], answer: "∥", explanation: "The symbol ∥ means parallel." },
            { q: "Railroad tracks are an example of?", options: ["Parallel lines", "Perpendicular lines", "Curved lines"], answer: "Parallel lines", explanation: "Railroad tracks run side by side and do not meet." },
            { q: "Notebook paper lines are usually?", options: ["Parallel", "Perpendicular", "Intersecting"], answer: "Parallel", explanation: "They stay evenly spaced." },

            { q: "Parallel lines lie in the same?", options: ["Plane", "Circle", "Sphere"], answer: "Plane", explanation: "Parallel lines are coplanar." },
            { q: "Parallel lines extend?", options: ["Forever", "Only 10 units", "Only between endpoints"], answer: "Forever", explanation: "Lines extend infinitely." },
            { q: "Can parallel lines cross?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Parallel lines never intersect." },
            { q: "Opposite sides of a rectangle are?", options: ["Parallel", "Perpendicular", "Neither"], answer: "Parallel", explanation: "Opposite sides of rectangles are parallel." },
            { q: "Highway lanes are usually?", options: ["Parallel", "Perpendicular", "Vertical"], answer: "Parallel", explanation: "Lanes usually stay the same distance apart." },

            { q: "Parallel lines have how many intersection points?", options: ["0", "1", "2"], answer: "0", explanation: "They never meet." },
            { q: "If two lines intersect, they are?", options: ["Not parallel", "Parallel", "Always equal"], answer: "Not parallel", explanation: "Parallel lines cannot intersect." },
            { q: "Parallel lines must be?", options: ["Coplanar", "Curved", "Different lengths"], answer: "Coplanar", explanation: "They must be in the same plane." },
            { q: "Which is NOT usually parallel?", options: ["Clock hands", "Railroad tracks", "Notebook lines"], answer: "Clock hands", explanation: "Clock hands meet at the center." },
            { q: "Parallel lines are important in?", options: ["Geometry", "Grammar", "Music"], answer: "Geometry", explanation: "Parallel lines are a major geometry concept." },

            { q: "Two horizontal lines are usually?", options: ["Parallel", "Perpendicular", "Intersecting"], answer: "Parallel", explanation: "They run in the same direction." },
            { q: "Two vertical lines are usually?", options: ["Parallel", "Perpendicular", "Intersecting"], answer: "Parallel", explanation: "They run in the same direction." },
            { q: "Parallel lines have equal?", options: ["Spacing", "Length always", "Color"], answer: "Spacing", explanation: "They remain the same distance apart." },
            { q: "Parallel lines are drawn as?", options: ["Straight lines", "Curved lines", "Circles"], answer: "Straight lines", explanation: "Lines are straight." },
            { q: "The idea of parallel lines helps with?", options: ["Geometry proofs and diagrams", "Only cooking", "Only spelling"], answer: "Geometry proofs and diagrams", explanation: "Parallel lines appear in many geometry problems." }
        ]
    },

    "perpendicular-lines": {
        title: "Perpendicular Lines",
        subtitle: "Learn what perpendicular lines are and how they form right angles.",
        body: `
        <h2>What are Perpendicular Lines?</h2>
        <p><strong>Perpendicular lines</strong> are lines that intersect to form a right angle.</p>

        <h2>Key Rule</h2>
        <p>Perpendicular lines meet at <strong>90°</strong>.</p>

        <h2>Symbol</h2>
        <p><strong>⊥</strong> means perpendicular.</p>
        <p>Example: Line AB ⊥ Line CD</p>

        <h2>Real World Examples</h2>
        <ul>
            <li>The corner of a square</li>
            <li>The corner of a door frame</li>
            <li>Horizontal and vertical grid lines</li>
            <li>The intersection of some streets</li>
        </ul>

        <h2>Common Mistake</h2>
        <p>Intersecting lines are not always perpendicular. They must form a 90° angle.</p>
    `,
        questions: [
            { q: "Perpendicular lines intersect at?", options: ["90°", "180°", "45°"], answer: "90°", explanation: "Perpendicular lines form right angles." },
            { q: "The perpendicular symbol is?", options: ["⊥", "∥", "="], answer: "⊥", explanation: "The symbol ⊥ means perpendicular." },
            { q: "A right angle measures?", options: ["90°", "180°", "360°"], answer: "90°", explanation: "A right angle is exactly 90°." },
            { q: "The corner of a square shows?", options: ["Perpendicular lines", "Parallel lines only", "No angles"], answer: "Perpendicular lines", explanation: "Square corners are right angles." },
            { q: "Perpendicular lines must?", options: ["Intersect", "Never intersect", "Be curved"], answer: "Intersect", explanation: "They cross to form right angles." },

            { q: "If two lines meet at 90°, they are?", options: ["Perpendicular", "Parallel", "Skew"], answer: "Perpendicular", explanation: "That is the definition." },
            { q: "All intersecting lines are perpendicular?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Only lines that meet at 90° are perpendicular." },
            { q: "Perpendicular lines form how many right angles?", options: ["4", "1", "2"], answer: "4", explanation: "Two perpendicular lines create four right angles." },
            { q: "Horizontal and vertical lines are usually?", options: ["Perpendicular", "Parallel", "Same line"], answer: "Perpendicular", explanation: "They meet at right angles." },
            { q: "A small square mark in a diagram means?", options: ["Right angle", "Acute angle", "Parallel lines"], answer: "Right angle", explanation: "A small square marks 90°." },

            { q: "Perpendicular lines are important in?", options: ["Geometry", "Biology", "Reading"], answer: "Geometry", explanation: "They are used often in diagrams and proofs." },
            { q: "A door frame corner is usually?", options: ["Perpendicular", "Parallel", "Curved"], answer: "Perpendicular", explanation: "Door corners form right angles." },
            { q: "If lines intersect at 60°, are they perpendicular?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Perpendicular requires exactly 90°." },
            { q: "If lines intersect at 90°, are they perpendicular?", options: ["Yes", "No", "Sometimes"], answer: "Yes", explanation: "That is exactly perpendicular." },
            { q: "Perpendicular lines create?", options: ["Right angles", "Only obtuse angles", "No angles"], answer: "Right angles", explanation: "They create four 90° angles." },

            { q: "Which pair is perpendicular?", options: ["Floor and wall", "Railroad tracks", "Notebook lines"], answer: "Floor and wall", explanation: "A wall and floor usually meet at 90°." },
            { q: "Perpendicular means?", options: ["At right angles", "Never touching", "Same direction"], answer: "At right angles", explanation: "Perpendicular lines meet at 90°." },
            { q: "Can perpendicular lines be parallel?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Parallel lines never intersect, but perpendicular lines do." },
            { q: "A plus sign shows?", options: ["Perpendicular lines", "Parallel lines", "A circle"], answer: "Perpendicular lines", explanation: "The vertical and horizontal parts meet at 90°." },
            { q: "Perpendicular lines help identify?", options: ["Right angles", "Volume", "Mass"], answer: "Right angles", explanation: "They are used to locate 90° angles." }
        ]
    },

    "transversals": {
        title: "Transversals",
        subtitle: "Learn how one line can cross two or more lines.",
        body: `
        <h2>What is a Transversal?</h2>
        <p>A <strong>transversal</strong> is a line that intersects two or more lines.</p>

        <h2>Why Transversals Matter</h2>
        <p>When a transversal crosses parallel lines, it creates special angle relationships.</p>

        <h2>Angles Created by a Transversal</h2>
        <ul>
            <li>Corresponding angles</li>
            <li>Alternate interior angles</li>
            <li>Alternate exterior angles</li>
            <li>Same-side interior angles</li>
        </ul>

        <h2>Real World Example</h2>
        <p>A road crossing two railroad tracks can act like a transversal.</p>

        <h2>Common Mistake</h2>
        <p>The transversal is the line that crosses the other lines. It is not one of the parallel lines.</p>
    `,
        questions: [
            { q: "A transversal is a line that?", options: ["Intersects two or more lines", "Never intersects", "Forms a circle"], answer: "Intersects two or more lines", explanation: "A transversal crosses other lines." },
            { q: "A transversal can cross?", options: ["Parallel lines", "Only circles", "Only triangles"], answer: "Parallel lines", explanation: "Transversals often cross parallel lines." },
            { q: "When a transversal crosses two lines, it creates?", options: ["Angles", "Volumes", "Curves only"], answer: "Angles", explanation: "Several angle relationships are formed." },
            { q: "The transversal is the line that?", options: ["Crosses the other lines", "Never touches", "Is always horizontal"], answer: "Crosses the other lines", explanation: "That is its role." },
            { q: "A road crossing railroad tracks can model?", options: ["A transversal", "A circle", "A prism"], answer: "A transversal", explanation: "It crosses two lines." },

            { q: "Transversals are important because they create?", options: ["Angle relationships", "Only area", "Only volume"], answer: "Angle relationships", explanation: "They create corresponding, alternate, and same-side angles." },
            { q: "A transversal must intersect at least?", options: ["Two lines", "One point only", "Zero lines"], answer: "Two lines", explanation: "A transversal crosses two or more lines." },
            { q: "A transversal belongs to?", options: ["Geometry", "Chemistry", "History"], answer: "Geometry", explanation: "It is a line relationship in geometry." },
            { q: "If a line crosses two parallel lines, it is called?", options: ["Transversal", "Radius", "Chord"], answer: "Transversal", explanation: "That crossing line is the transversal." },
            { q: "Transversals help solve?", options: ["Angle problems", "Only spelling problems", "Only money problems"], answer: "Angle problems", explanation: "They create special angle pairs." },

            { q: "Which angle pair can be formed by a transversal?", options: ["Corresponding angles", "Volumes", "Radii"], answer: "Corresponding angles", explanation: "Corresponding angles are created by transversals." },
            { q: "Alternate interior angles are formed by?", options: ["A transversal", "A circle", "A solid"], answer: "A transversal", explanation: "They appear when a transversal crosses lines." },
            { q: "Alternate exterior angles are formed by?", options: ["A transversal", "A triangle only", "A sphere"], answer: "A transversal", explanation: "They are another angle relationship from transversals." },
            { q: "Same-side interior angles are formed by?", options: ["A transversal", "A rectangle only", "A ray only"], answer: "A transversal", explanation: "They are formed when lines are cut by a transversal." },
            { q: "The crossed lines may be?", options: ["Parallel", "Only curved", "Only circles"], answer: "Parallel", explanation: "Transversals often cross parallel lines." },

            { q: "If two parallel lines are crossed, how many angle regions are formed?", options: ["8", "4", "2"], answer: "8", explanation: "A transversal crossing two lines creates eight angles." },
            { q: "Transversal diagrams usually show?", options: ["Two lines and one crossing line", "Only one point", "Only a circle"], answer: "Two lines and one crossing line", explanation: "That is the common setup." },
            { q: "The transversal is always perpendicular?", options: ["No", "Yes", "Always"], answer: "No", explanation: "It can cross at many different angles." },
            { q: "The transversal is always parallel?", options: ["No", "Yes", "Always"], answer: "No", explanation: "It intersects the lines it crosses." },
            { q: "Transversals prepare students for?", options: ["Parallel line angle rules", "Only volume", "Only probability"], answer: "Parallel line angle rules", explanation: "They are the foundation for the next lessons." }
        ]
    },

    "corresponding-angles": {
        title: "Corresponding Angles",
        subtitle: "Learn how matching angles are formed by a transversal.",
        body: `
        <h2>What are Corresponding Angles?</h2>
        <p><strong>Corresponding angles</strong> are angles that are in the same relative position when a transversal crosses two lines.</p>

        <h2>Key Rule</h2>
        <p>If the two lines are parallel, then corresponding angles are congruent.</p>

        <h2>Example</h2>
        <p>If one corresponding angle is 75°, then its matching corresponding angle is also 75° when the lines are parallel.</p>

        <h2>How to Identify Them</h2>
        <ul>
            <li>Look for angles in the same corner position.</li>
            <li>One angle is at the first intersection.</li>
            <li>The other is at the second intersection.</li>
        </ul>

        <h2>Common Mistake</h2>
        <p>Corresponding angles are not opposite at the same intersection. They are at different intersections.</p>
    `,
        questions: [
            { q: "Corresponding angles are in the same?", options: ["Relative position", "Circle", "Triangle"], answer: "Relative position", explanation: "They match positions at different intersections." },
            { q: "Corresponding angles are formed by?", options: ["A transversal", "A sphere", "A polygon only"], answer: "A transversal", explanation: "A transversal crossing lines forms them." },
            { q: "If lines are parallel, corresponding angles are?", options: ["Congruent", "Supplementary", "Always 90°"], answer: "Congruent", explanation: "Corresponding angles are equal when lines are parallel." },
            { q: "If one corresponding angle is 70°, the matching angle is?", options: ["70°", "110°", "90°"], answer: "70°", explanation: "They are congruent when the lines are parallel." },
            { q: "Corresponding angles are found at?", options: ["Different intersections", "Only one intersection", "The center of a circle"], answer: "Different intersections", explanation: "They occur where the transversal crosses each line." },

            { q: "Corresponding means?", options: ["Matching", "Opposite", "Curved"], answer: "Matching", explanation: "Corresponding angles match positions." },
            { q: "If one corresponding angle is 105°, the other is?", options: ["105°", "75°", "180°"], answer: "105°", explanation: "They are equal when the lines are parallel." },
            { q: "Corresponding angles help prove lines are?", options: ["Parallel", "Curved", "Circular"], answer: "Parallel", explanation: "Congruent corresponding angles can show parallel lines." },
            { q: "The transversal creates how many angles with two lines?", options: ["8", "2", "4"], answer: "8", explanation: "There are eight total angle regions." },
            { q: "Corresponding angles are always equal?", options: ["Only when lines are parallel", "Always no matter what", "Never"], answer: "Only when lines are parallel", explanation: "The equality depends on parallel lines." },

            { q: "Same relative position means?", options: ["Same corner location", "Same color", "Same length"], answer: "Same corner location", explanation: "They occupy matching positions." },
            { q: "Corresponding angles are used in?", options: ["Geometry proofs", "Only chemistry", "Only music"], answer: "Geometry proofs", explanation: "They are important in parallel line proofs." },
            { q: "If lines are not parallel, corresponding angles may be?", options: ["Not equal", "Always equal", "Always 90°"], answer: "Not equal", explanation: "The congruence rule requires parallel lines." },
            { q: "A pair of corresponding angles uses how many intersections?", options: ["2", "1", "0"], answer: "2", explanation: "One angle comes from each intersection." },
            { q: "Corresponding angles are created when a transversal crosses?", options: ["Two lines", "One point", "A sphere"], answer: "Two lines", explanation: "The transversal crosses two lines." },

            { q: "Which phrase best describes corresponding angles?", options: ["Same position", "Opposite position", "Inside only"], answer: "Same position", explanation: "They are in matching positions." },
            { q: "If corresponding angles are congruent, the lines may be?", options: ["Parallel", "Curved", "Circles"], answer: "Parallel", explanation: "This is a converse relationship." },
            { q: "Corresponding angles can appear on?", options: ["Parallel line diagrams", "Only solids", "Only graphs"], answer: "Parallel line diagrams", explanation: "They are common in transversal diagrams." },
            { q: "The matching angle to 130° is?", options: ["130°", "50°", "90°"], answer: "130°", explanation: "Corresponding angles are congruent when lines are parallel." },
            { q: "Corresponding angle relationships belong to?", options: ["Geometry", "Grammar", "Biology"], answer: "Geometry", explanation: "They are a key geometry topic." }
        ]
    }
    ,

    "alternate-interior-angles": {
        title: "Alternate Interior Angles",
        subtitle: "Learn why alternate interior angles are congruent when parallel lines are cut by a transversal.",
        body: `
        <h2>What are Alternate Interior Angles?</h2>

        <p><strong>Alternate interior angles</strong> are located between two parallel lines and on opposite sides of a transversal.</p>

        <h2>Important Rule</h2>

        <p><strong>If two parallel lines are cut by a transversal, alternate interior angles are congruent.</strong></p>

        <h2>How to Recognize Them</h2>

        <ul>
            <li>They are between the two parallel lines.</li>
            <li>They are on opposite sides of the transversal.</li>
            <li>They are equal in measure.</li>
        </ul>

        <h2>Example 1</h2>

        <p>If one alternate interior angle measures <strong>65°</strong>, the other also measures <strong>65°</strong>.</p>

        <h2>Example 2</h2>

        <p>If one alternate interior angle measures <strong>120°</strong>, the matching angle is also <strong>120°</strong>.</p>

        <h2>Real World Example</h2>

        <p>Imagine two parallel roads crossed by another road. The matching interior angles are alternate interior angles.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Alternate interior angles are inside the parallel lines.</li>
            <li>They are on opposite sides of the transversal.</li>
            <li>Do not confuse them with corresponding angles.</li>
        </ul>

        <h2>Summary</h2>

        <p>Alternate interior angles are always congruent when the lines are parallel.</p>
    `,
        questions: [

            { q: "Alternate interior angles are located?", options: ["Inside the parallel lines", "Outside the parallel lines", "On a circle"], answer: "Inside the parallel lines", explanation: "Interior means between the parallel lines." },

            { q: "Alternate interior angles are on?", options: ["Opposite sides of the transversal", "The same side", "No side"], answer: "Opposite sides of the transversal", explanation: "Alternate means opposite sides." },

            { q: "If lines are parallel, alternate interior angles are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "They always have equal measures." },

            { q: "If one alternate interior angle is 50°, the other is?", options: ["50°", "130°", "90°"], answer: "50°", explanation: "Congruent angles have equal measures." },

            { q: "If one alternate interior angle is 115°, the other is?", options: ["115°", "65°", "180°"], answer: "115°", explanation: "Alternate interior angles are congruent." },

            { q: "Alternate interior angles require?", options: ["Parallel lines", "Perpendicular lines", "Only circles"], answer: "Parallel lines", explanation: "The theorem requires parallel lines." },

            { q: "The transversal crosses?", options: ["Two lines", "One point", "A circle"], answer: "Two lines", explanation: "A transversal intersects two or more lines." },

            { q: "Alternate interior angles are useful in?", options: ["Geometry proofs", "Biology", "Economics"], answer: "Geometry proofs", explanation: "They are commonly used in proofs." },

            { q: "Interior means?", options: ["Between the lines", "Outside the lines", "Above the lines"], answer: "Between the lines", explanation: "Interior means inside the region between the lines." },

            { q: "Alternate means?", options: ["Opposite sides", "Same side", "Equal length"], answer: "Opposite sides", explanation: "Alternate angles lie on opposite sides of the transversal." },

            { q: "If one angle is 72°, the alternate interior angle is?", options: ["72°", "108°", "90°"], answer: "72°", explanation: "Congruent angles are equal." },

            { q: "Alternate interior angles are formed by?", options: ["A transversal", "A circle", "A polygon"], answer: "A transversal", explanation: "The transversal creates these angle pairs." },

            { q: "They help prove lines are?", options: ["Parallel", "Curved", "Perpendicular"], answer: "Parallel", explanation: "The converse theorem also exists." },

            { q: "The angles are always?", options: ["Equal", "180°", "90°"], answer: "Equal", explanation: "Congruent means equal measure." },

            { q: "Geometry uses alternate interior angles to solve?", options: ["Unknown angles", "Only area", "Only perimeter"], answer: "Unknown angles", explanation: "They help find missing angle measures." },

            { q: "If one angle measures 130°, the alternate interior angle measures?", options: ["130°", "50°", "180°"], answer: "130°", explanation: "Congruent." },

            { q: "Alternate interior angles belong to?", options: ["Parallel line geometry", "Probability", "Statistics"], answer: "Parallel line geometry", explanation: "They are a major parallel line theorem." },

            { q: "The theorem works only when the lines are?", options: ["Parallel", "Curved", "Skew"], answer: "Parallel", explanation: "Parallel lines are required." },

            { q: "Alternate interior angles are?", options: ["Inside and opposite", "Outside and opposite", "Inside and same side"], answer: "Inside and opposite", explanation: "This is their definition." },

            { q: "They are one of the most important?", options: ["Angle relationships", "Circle formulas", "Area formulas"], answer: "Angle relationships", explanation: "They appear throughout geometry." }

        ]
    },

    "alternate-exterior-angles": {
        title: "Alternate Exterior Angles",
        subtitle: "Learn why alternate exterior angles are congruent.",
        body: `
        <h2>What are Alternate Exterior Angles?</h2>

        <p>Alternate exterior angles lie <strong>outside</strong> the two parallel lines and on <strong>opposite sides</strong> of the transversal.</p>

        <h2>Important Rule</h2>

        <p><strong>If two parallel lines are cut by a transversal, alternate exterior angles are congruent.</strong></p>

        <h2>Examples</h2>

        <p>If one angle measures 48°, the alternate exterior angle also measures 48°.</p>

        <p>If one angle measures 132°, the alternate exterior angle also measures 132°.</p>

        <h2>Real World Example</h2>

        <p>A road crossing two parallel fences creates alternate exterior angles.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Exterior means outside the parallel lines.</li>
            <li>Alternate means opposite sides of the transversal.</li>
            <li>Do not confuse exterior with interior angles.</li>
        </ul>

        <h2>Summary</h2>

        <p>Alternate exterior angles are congruent whenever the lines are parallel.</p>
    `,
        questions: [

            { q: "Exterior angles are located?", options: ["Outside the parallel lines", "Between the parallel lines", "Inside a triangle"], answer: "Outside the parallel lines", explanation: "Exterior means outside." },

            { q: "Alternate exterior angles are on?", options: ["Opposite sides of the transversal", "Same side", "No side"], answer: "Opposite sides of the transversal", explanation: "Alternate means opposite sides." },

            { q: "If lines are parallel, alternate exterior angles are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "They have equal measures." },

            { q: "If one angle is 55°, the alternate exterior angle is?", options: ["55°", "125°", "90°"], answer: "55°", explanation: "They are congruent." },

            { q: "If one angle is 140°, the alternate exterior angle is?", options: ["140°", "40°", "180°"], answer: "140°", explanation: "Congruent." },

            { q: "Exterior means?", options: ["Outside", "Inside", "Between"], answer: "Outside", explanation: "Exterior is outside the parallel lines." },

            { q: "Alternate means?", options: ["Opposite sides", "Same side", "Adjacent"], answer: "Opposite sides", explanation: "Alternate angles lie opposite each other." },

            { q: "Alternate exterior angles require?", options: ["Parallel lines", "Only circles", "Only triangles"], answer: "Parallel lines", explanation: "The theorem requires parallel lines." },

            { q: "The transversal?", options: ["Crosses both lines", "Never touches", "Is parallel"], answer: "Crosses both lines", explanation: "A transversal intersects the lines." },

            { q: "Alternate exterior angles are useful in?", options: ["Geometry proofs", "Biology", "Economics"], answer: "Geometry proofs", explanation: "A common geometry theorem." },

            { q: "If one angle is 88°, the alternate exterior angle is?", options: ["88°", "92°", "180°"], answer: "88°", explanation: "Congruent." },

            { q: "They are located?", options: ["Outside and opposite", "Inside and opposite", "Inside and same side"], answer: "Outside and opposite", explanation: "That's their definition." },

            { q: "Congruent means?", options: ["Equal measure", "Equal length", "Parallel"], answer: "Equal measure", explanation: "Congruent angles have equal measures." },

            { q: "Alternate exterior angles belong to?", options: ["Parallel line geometry", "Probability", "Statistics"], answer: "Parallel line geometry", explanation: "They are a major theorem." },

            { q: "The theorem works only when?", options: ["The lines are parallel", "The lines intersect", "The lines are curved"], answer: "The lines are parallel", explanation: "Parallel lines are required." },

            { q: "If one angle is 103°, the other is?", options: ["103°", "77°", "180°"], answer: "103°", explanation: "Congruent." },

            { q: "They help solve?", options: ["Unknown angles", "Only area", "Only perimeter"], answer: "Unknown angles", explanation: "Very common in geometry." },

            { q: "Exterior angles are?", options: ["Outside the lines", "Inside the lines", "Between the lines"], answer: "Outside the lines", explanation: "Exterior means outside." },

            { q: "Alternate exterior angles are?", options: ["Equal", "Always 180°", "Always 90°"], answer: "Equal", explanation: "Congruent." },

            { q: "Alternate exterior angles are one of the key?", options: ["Parallel line theorems", "Circle theorems", "Volume formulas"], answer: "Parallel line theorems", explanation: "A foundational geometry theorem." }

        ]
    }
    ,

    "same-side-interior-angles": {
        title: "Same-Side Interior Angles",
        subtitle: "Learn why same-side interior angles are supplementary.",
        body: `
        <h2>What are Same-Side Interior Angles?</h2>

        <p>Same-side interior angles are located <strong>between</strong> two parallel lines and on the <strong>same side</strong> of the transversal.</p>

        <h2>Important Rule</h2>

        <p style="font-size:28px;"><strong>Their measures always add to 180°.</strong></p>

        <h2>Examples</h2>

        <p>70° + 110° = 180°</p>

        <p>45° + 135° = 180°</p>

        <h2>Finding a Missing Angle</h2>

        <p>If one angle measures 82°, the other angle is:</p>

        <p><strong>180° − 82° = 98°</strong></p>

        <h2>Real World Example</h2>

        <p>Think of two parallel roads crossed by another road. The interior angles on the same side always total 180°.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Interior means between the parallel lines.</li>
            <li>Same-side means both angles are on the same side of the transversal.</li>
            <li>They are supplementary, NOT congruent.</li>
        </ul>

        <h2>Summary</h2>

        <p>Same-side interior angles always add to 180° when the lines are parallel.</p>
    `,
        questions: [

            { q: "Same-side interior angles are located?", options: ["Between the parallel lines", "Outside the parallel lines", "On a circle"], answer: "Between the parallel lines", explanation: "Interior means between the lines." },

            { q: "Same-side interior angles are?", options: ["Supplementary", "Congruent", "Complementary"], answer: "Supplementary", explanation: "They always total 180°." },

            { q: "If one angle is 60°, the other is?", options: ["120°", "60°", "30°"], answer: "120°", explanation: "180−60=120." },

            { q: "If one angle is 95°, the other is?", options: ["85°", "95°", "75°"], answer: "85°", explanation: "180−95=85." },

            { q: "The total is always?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Same-side interior angles are supplementary." },

            { q: "Interior means?", options: ["Between the lines", "Outside the lines", "Above the lines"], answer: "Between the lines", explanation: "Interior means inside." },

            { q: "Same-side means?", options: ["Same side of the transversal", "Opposite sides", "No side"], answer: "Same side of the transversal", explanation: "They are on the same side." },

            { q: "If one angle is 140°, the other is?", options: ["40°", "140°", "50°"], answer: "40°", explanation: "180−140=40." },

            { q: "These angles require?", options: ["Parallel lines", "Only circles", "Only polygons"], answer: "Parallel lines", explanation: "The theorem requires parallel lines." },

            { q: "The transversal?", options: ["Crosses both lines", "Never crosses", "Is curved"], answer: "Crosses both lines", explanation: "A transversal intersects the lines." },

            { q: "70° and 110° are?", options: ["Same-side interior angles", "Vertical angles", "Complementary"], answer: "Same-side interior angles", explanation: "They total 180°." },

            { q: "45° and 135° are?", options: ["Supplementary", "Complementary", "Congruent"], answer: "Supplementary", explanation: "45+135=180." },

            { q: "If one angle is 88°, the other is?", options: ["92°", "88°", "102°"], answer: "92°", explanation: "180−88=92." },

            { q: "These angles are used in?", options: ["Geometry proofs", "Biology", "Economics"], answer: "Geometry proofs", explanation: "Common theorem." },

            { q: "Congruent means?", options: ["Equal", "Supplementary", "Adjacent"], answer: "Equal", explanation: "Congruent means equal measure." },

            { q: "Supplementary means?", options: ["Adds to 180°", "Adds to 90°", "Equal"], answer: "Adds to 180°", explanation: "Definition." },

            { q: "Same-side interior angles are?", options: ["Not congruent in general", "Always congruent", "Always acute"], answer: "Not congruent in general", explanation: "They are supplementary." },

            { q: "Geometry uses these angles to?", options: ["Solve missing angles", "Find area", "Find volume"], answer: "Solve missing angles", explanation: "Very common application." },

            { q: "The theorem belongs to?", options: ["Parallel line geometry", "Statistics", "Algebra"], answer: "Parallel line geometry", explanation: "It is a parallel line theorem." },

            { q: "Same-side interior angles are one of the major?", options: ["Angle relationships", "Circle formulas", "Volume formulas"], answer: "Angle relationships", explanation: "Fundamental geometry." }

        ]
    },

    "same-side-exterior-angles": {
        title: "Same-Side Exterior Angles",
        subtitle: "Learn about exterior angles on the same side of a transversal.",
        body: `
        <h2>What are Same-Side Exterior Angles?</h2>

        <p>Same-side exterior angles are located <strong>outside</strong> the parallel lines and on the <strong>same side</strong> of the transversal.</p>

        <h2>Important Rule</h2>

        <p>When two parallel lines are cut by a transversal, same-side exterior angles are <strong>supplementary</strong>.</p>

        <h2>Examples</h2>

        <p>40° + 140° = 180°</p>

        <p>100° + 80° = 180°</p>

        <h2>Finding a Missing Angle</h2>

        <p>If one angle measures 66°, the other angle is:</p>

        <p><strong>180° − 66° = 114°</strong></p>

        <h2>Real World Example</h2>

        <p>Telephone poles connected by overhead wires often illustrate same-side exterior angles when viewed with a crossing road.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Exterior means outside the parallel lines.</li>
            <li>Same-side means both angles are on the same side of the transversal.</li>
            <li>These angles are supplementary.</li>
        </ul>

        <h2>Summary</h2>

        <p>Same-side exterior angles always add to 180° when the lines are parallel.</p>
    `,
        questions: [

            { q: "Same-side exterior angles are located?", options: ["Outside the parallel lines", "Between the lines", "Inside triangles"], answer: "Outside the parallel lines", explanation: "Exterior means outside." },

            { q: "Same-side exterior angles are?", options: ["Supplementary", "Congruent", "Vertical"], answer: "Supplementary", explanation: "They total 180°." },

            { q: "If one angle is 50°, the other is?", options: ["130°", "50°", "40°"], answer: "130°", explanation: "180−50=130." },

            { q: "If one angle is 120°, the other is?", options: ["60°", "120°", "30°"], answer: "60°", explanation: "180−120=60." },

            { q: "Their total is?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Always supplementary." },

            { q: "Exterior means?", options: ["Outside", "Inside", "Middle"], answer: "Outside", explanation: "Exterior is outside the parallel lines." },

            { q: "Same-side means?", options: ["Same side of the transversal", "Opposite sides", "No side"], answer: "Same side of the transversal", explanation: "Definition." },

            { q: "If one angle is 84°, the other is?", options: ["96°", "84°", "106°"], answer: "96°", explanation: "180−84=96." },

            { q: "These angles require?", options: ["Parallel lines", "Only circles", "Only triangles"], answer: "Parallel lines", explanation: "Parallel lines are required." },

            { q: "The transversal?", options: ["Crosses the two lines", "Never touches", "Is parallel"], answer: "Crosses the two lines", explanation: "Definition of transversal." },

            { q: "40° and 140° are?", options: ["Supplementary", "Complementary", "Congruent"], answer: "Supplementary", explanation: "40+140=180." },

            { q: "100° and 80° are?", options: ["Supplementary", "Complementary", "Vertical"], answer: "Supplementary", explanation: "100+80=180." },

            { q: "If one angle is 73°, the other is?", options: ["107°", "73°", "97°"], answer: "107°", explanation: "180−73=107." },

            { q: "These angles are useful in?", options: ["Geometry proofs", "Biology", "Economics"], answer: "Geometry proofs", explanation: "Frequently used in proofs." },

            { q: "Supplementary means?", options: ["Adds to 180°", "Adds to 90°", "Equal"], answer: "Adds to 180°", explanation: "Definition." },

            { q: "Same-side exterior angles belong to?", options: ["Parallel line geometry", "Statistics", "Calculus"], answer: "Parallel line geometry", explanation: "Major theorem." },

            { q: "Geometry uses these angles to?", options: ["Find missing angles", "Find volume", "Find area"], answer: "Find missing angles", explanation: "Common application." },

            { q: "Exterior angles are?", options: ["Outside the lines", "Between the lines", "Inside triangles"], answer: "Outside the lines", explanation: "Exterior means outside." },

            { q: "If one angle is 150°, the other is?", options: ["30°", "150°", "60°"], answer: "30°", explanation: "180−150=30." },

            { q: "These angle relationships are important because they help?", options: ["Solve geometry problems", "Cook food", "Write essays"], answer: "Solve geometry problems", explanation: "They are used throughout geometry." }

        ]
    }

    ,

    "parallel-line-applications": {
        title: "Parallel Line Applications",
        subtitle: "Use everything you've learned about parallel lines to solve real-world problems.",
        body: `
        <h2>Why Parallel Lines Matter</h2>

        <p>Parallel lines are used every day in engineering, construction, architecture, transportation, and design.</p>

        <h2>Common Applications</h2>

        <ul>
            <li>Roadways</li>
            <li>Railroad tracks</li>
            <li>Bridges</li>
            <li>Buildings</li>
            <li>Floor tiles</li>
            <li>Blueprints</li>
        </ul>

        <h2>Example 1</h2>

        <p>A road crosses two parallel streets.</p>

        <p>If one corresponding angle measures 72°, find the other corresponding angle.</p>

        <p><strong>Answer: 72°</strong></p>

        <h2>Example 2</h2>

        <p>One same-side interior angle measures 118°.</p>

        <p>Find the other angle.</p>

        <p><strong>180° − 118° = 62°</strong></p>

        <h2>Summary</h2>

        <p>Understanding parallel line relationships allows engineers and architects to design accurate structures.</p>
    `,
        questions: [

            { q: "Railroad tracks model?", options: ["Parallel lines", "Perpendicular lines", "Circles"], answer: "Parallel lines", explanation: "Tracks never meet." },

            { q: "Roads crossing parallel roads create?", options: ["Transversals", "Circles", "Triangles"], answer: "Transversals", explanation: "The crossing road is the transversal." },

            { q: "Corresponding angles are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "When lines are parallel." },

            { q: "Same-side interior angles are?", options: ["Supplementary", "Congruent", "Vertical"], answer: "Supplementary", explanation: "They total 180°." },

            { q: "Alternate interior angles are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "Always equal for parallel lines." },

            { q: "Alternate exterior angles are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "Always equal." },

            { q: "A blueprint often contains?", options: ["Parallel lines", "Only circles", "Only curves"], answer: "Parallel lines", explanation: "Buildings use many parallel walls." },

            { q: "Parallel lines help engineers?", options: ["Design structures", "Cook food", "Write stories"], answer: "Design structures", explanation: "Parallel lines are essential in engineering." },

            { q: "Buildings contain many?", options: ["Parallel and perpendicular lines", "Only circles", "Only triangles"], answer: "Parallel and perpendicular lines", explanation: "Both are everywhere in construction." },

            { q: "Applications of parallel lines belong to?", options: ["Geometry", "Biology", "Music"], answer: "Geometry", explanation: "A practical geometry topic." },

            { q: "If one corresponding angle is 84°, the other is?", options: ["84°", "96°", "180°"], answer: "84°", explanation: "Congruent." },

            { q: "If one same-side interior angle is 70°, the other is?", options: ["110°", "70°", "90°"], answer: "110°", explanation: "Supplementary." },

            { q: "Parallel lines are used in?", options: ["Architecture", "Engineering", "Both"], answer: "Both", explanation: "Both rely heavily on parallel lines." },

            { q: "Geometry helps solve?", options: ["Real-world design problems", "Only homework", "Only graphs"], answer: "Real-world design problems", explanation: "Geometry has many applications." },

            { q: "The study of parallel lines prepares students for?", options: ["More advanced geometry", "Cooking", "History"], answer: "More advanced geometry", explanation: "Parallel lines appear throughout geometry." },

            { q: "Floor tiles often use?", options: ["Parallel lines", "Curves only", "Circles"], answer: "Parallel lines", explanation: "Tiles are arranged using parallel lines." },

            { q: "Bridges use?", options: ["Parallel beams", "Only circles", "Only curves"], answer: "Parallel beams", explanation: "Many bridges rely on parallel supports." },

            { q: "Architecture uses?", options: ["Parallel lines", "No geometry", "Only algebra"], answer: "Parallel lines", explanation: "Geometry is everywhere in buildings." },

            { q: "Parallel line applications are?", options: ["Practical", "Impossible", "Rare"], answer: "Practical", explanation: "Used every day." },

            { q: "Geometry is useful because?", options: ["It describes the real world", "It has no applications", "It is only theory"], answer: "It describes the real world", explanation: "Geometry models real objects." }

        ]
    },

    "parallel-line-proofs": {
        title: "Parallel Line Proofs",
        subtitle: "Use angle relationships to prove lines are parallel.",
        body: `

        <h2>Introduction</h2>

        <p>Geometry proofs often use angle relationships to prove two lines are parallel.</p>

        <h2>Important Converses</h2>

        <ul>

        <li>If corresponding angles are congruent → lines are parallel.</li>

        <li>If alternate interior angles are congruent → lines are parallel.</li>

        <li>If alternate exterior angles are congruent → lines are parallel.</li>

        <li>If same-side interior angles are supplementary → lines are parallel.</li>

        </ul>

        <h2>Example</h2>

        <p>If two corresponding angles both measure 63°, then the two lines are parallel.</p>

        <h2>Summary</h2>

        <p>Proofs work backwards from known angle relationships to conclude that lines are parallel.</p>

    `,
        questions: [

            { q: "Geometry proofs use?", options: ["Logic", "Guessing", "Luck"], answer: "Logic", explanation: "Proofs are logical arguments." },

            { q: "Congruent corresponding angles prove?", options: ["Parallel lines", "Perpendicular lines", "Circles"], answer: "Parallel lines", explanation: "Converse of the Corresponding Angles Theorem." },

            { q: "Congruent alternate interior angles prove?", options: ["Parallel lines", "Nothing", "Triangles"], answer: "Parallel lines", explanation: "Converse theorem." },

            { q: "Congruent alternate exterior angles prove?", options: ["Parallel lines", "Perpendicular lines", "Squares"], answer: "Parallel lines", explanation: "Converse theorem." },

            { q: "Supplementary same-side interior angles prove?", options: ["Parallel lines", "Curved lines", "Nothing"], answer: "Parallel lines", explanation: "Converse theorem." },

            { q: "Geometry proofs rely on?", options: ["Facts and theorems", "Opinions", "Random numbers"], answer: "Facts and theorems", explanation: "Proofs use established rules." },

            { q: "Parallel line proofs belong to?", options: ["Geometry", "Biology", "Chemistry"], answer: "Geometry", explanation: "Major topic." },

            { q: "Corresponding angles are used to?", options: ["Prove parallel lines", "Find area only", "Find volume"], answer: "Prove parallel lines", explanation: "Very common." },

            { q: "Alternate interior angles can?", options: ["Prove parallel lines", "Only find perimeter", "Only graph"], answer: "Prove parallel lines", explanation: "Converse theorem." },

            { q: "Proofs require?", options: ["Reasoning", "Memorization only", "Guessing"], answer: "Reasoning", explanation: "Logical reasoning is essential." },

            { q: "Geometry proofs are?", options: ["Logical arguments", "Stories", "Opinions"], answer: "Logical arguments", explanation: "Definition." },

            { q: "A theorem is?", options: ["A proven mathematical statement", "A guess", "An opinion"], answer: "A proven mathematical statement", explanation: "Definition." },

            { q: "The converse works?", options: ["Backward", "Forward only", "Never"], answer: "Backward", explanation: "Converse reverses the original statement." },

            { q: "Proofs are one of geometry's?", options: ["Most important skills", "Least important skills", "Optional topics"], answer: "Most important skills", explanation: "Proofs are central to geometry." },

            { q: "Parallel line proofs prepare students for?", options: ["Triangle proofs", "Nothing", "Only algebra"], answer: "Triangle proofs", explanation: "Next major unit." },

            { q: "A proof explains?", options: ["Why something is true", "Only the answer", "Only the diagram"], answer: "Why something is true", explanation: "Proofs justify statements." },

            { q: "Proofs always follow?", options: ["Logical steps", "Random steps", "No steps"], answer: "Logical steps", explanation: "Proofs are organized logically." },

            { q: "The converse of a theorem?", options: ["Reverses the statement", "Changes numbers", "Deletes angles"], answer: "Reverses the statement", explanation: "Definition." },

            { q: "Geometry proofs strengthen?", options: ["Logical thinking", "Running speed", "Memory only"], answer: "Logical thinking", explanation: "Proofs develop reasoning." },

            { q: "Parallel line proofs conclude?", options: ["Lines are parallel", "Lines are circles", "Nothing"], answer: "Lines are parallel", explanation: "Final conclusion." }

        ]
    }
    ,

    "unit3-review": {
        title: "Unit 3 Review",
        subtitle: "Review everything you learned about parallel lines and transversals.",
        body: `
        <h2>Congratulations!</h2>

        <p>You have completed Unit 3.</p>

        <h2>Lessons Covered</h2>

        <ol>
            <li>Parallel Lines</li>
            <li>Perpendicular Lines</li>
            <li>Transversals</li>
            <li>Corresponding Angles</li>
            <li>Alternate Interior Angles</li>
            <li>Alternate Exterior Angles</li>
            <li>Same-Side Interior Angles</li>
            <li>Same-Side Exterior Angles</li>
            <li>Parallel Line Applications</li>
            <li>Parallel Line Proofs</li>
        </ol>

        <h2>Remember These Rules</h2>

        <table>
            <tr>
                <th>Relationship</th>
                <th>Rule</th>
            </tr>

            <tr>
                <td>Corresponding</td>
                <td>Congruent</td>
            </tr>

            <tr>
                <td>Alternate Interior</td>
                <td>Congruent</td>
            </tr>

            <tr>
                <td>Alternate Exterior</td>
                <td>Congruent</td>
            </tr>

            <tr>
                <td>Same-Side Interior</td>
                <td>Supplementary (180°)</td>
            </tr>

            <tr>
                <td>Same-Side Exterior</td>
                <td>Supplementary (180°)</td>
            </tr>

        </table>

        <h2>Ready?</h2>

        <p>The next page is your Unit 3 Test.</p>
    `,
        questions: [
            {
                q: "Are you ready to begin the Unit 3 Test?",
                options: [
                    "Yes!",
                    "I want to review again."
                ],
                answer: "Yes!",
                explanation: "Great! Let's test your understanding."
            }
        ]
    }

    ,

    "unit3-test": {
        title: "Unit 3 Test",
        subtitle: "Parallel Lines & Transversals Assessment",

        body: `

        <h2>Unit 3 Test</h2>

        <p>This assessment covers every lesson from Unit 3.</p>

        <h3>Topics</h3>

        <ul>

            <li>Parallel Lines</li>

            <li>Perpendicular Lines</li>

            <li>Transversals</li>

            <li>Corresponding Angles</li>

            <li>Alternate Interior Angles</li>

            <li>Alternate Exterior Angles</li>

            <li>Same-Side Interior Angles</li>

            <li>Same-Side Exterior Angles</li>

            <li>Applications</li>

            <li>Proofs</li>

        </ul>

        <p><strong>40 Questions</strong></p>

    `,

        questions: [

            { q: "Parallel lines?", options: ["Never intersect", "Always intersect", "Sometimes intersect"], answer: "Never intersect", explanation: "Definition of parallel lines." },
            { q: "Perpendicular lines meet at?", options: ["90°", "180°", "45°"], answer: "90°", explanation: "Perpendicular lines form right angles." },
            { q: "A transversal?", options: ["Crosses two or more lines", "Never crosses", "Is always parallel"], answer: "Crosses two or more lines", explanation: "Definition." },
            { q: "Corresponding angles are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "When lines are parallel." },
            { q: "Alternate interior angles are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "Parallel line theorem." },

            { q: "Alternate exterior angles are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "Parallel line theorem." },
            { q: "Same-side interior angles?", options: ["Supplementary", "Congruent", "Vertical"], answer: "Supplementary", explanation: "They total 180°." },
            { q: "Same-side exterior angles?", options: ["Supplementary", "Congruent", "Complementary"], answer: "Supplementary", explanation: "They total 180°." },
            { q: "Symbol for parallel?", options: ["∥", "⊥", "="], answer: "∥", explanation: "Standard notation." },
            { q: "Symbol for perpendicular?", options: ["⊥", "∥", "+"], answer: "⊥", explanation: "Standard notation." },

            { q: "If one corresponding angle is 70°?", options: ["70°", "110°", "90°"], answer: "70°", explanation: "Congruent." },
            { q: "If one alternate interior angle is 120°?", options: ["120°", "60°", "180°"], answer: "120°", explanation: "Congruent." },
            { q: "If one same-side interior angle is 75°?", options: ["105°", "75°", "95°"], answer: "105°", explanation: "180−75." },
            { q: "If one same-side exterior angle is 40°?", options: ["140°", "40°", "90°"], answer: "140°", explanation: "Supplementary." },
            { q: "Railroad tracks model?", options: ["Parallel lines", "Perpendicular lines", "Circles"], answer: "Parallel lines", explanation: "Real-world example." },

            { q: "Road crossing two streets is?", options: ["Transversal", "Radius", "Chord"], answer: "Transversal", explanation: "Definition." },
            { q: "Parallel lines stay?", options: ["Equal distance apart", "Changing distance", "Touching"], answer: "Equal distance apart", explanation: "Definition." },
            { q: "Perpendicular lines create?", options: ["Four right angles", "One angle", "No angles"], answer: "Four right angles", explanation: "Two lines create four angles." },
            { q: "Geometry proofs rely on?", options: ["Logic", "Guessing", "Luck"], answer: "Logic", explanation: "Proofs use reasoning." },
            { q: "Congruent means?", options: ["Equal measure", "Equal length", "Parallel"], answer: "Equal measure", explanation: "Definition." },

            { q: "Supplementary means?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Definition." },
            { q: "Interior means?", options: ["Between the lines", "Outside", "Above"], answer: "Between the lines", explanation: "Definition." },
            { q: "Exterior means?", options: ["Outside the lines", "Inside", "Middle"], answer: "Outside the lines", explanation: "Definition." },
            { q: "Alternate means?", options: ["Opposite sides", "Same side", "Adjacent"], answer: "Opposite sides", explanation: "Definition." },
            { q: "Corresponding means?", options: ["Same position", "Opposite", "Adjacent"], answer: "Same position", explanation: "Definition." },

            { q: "A theorem is?", options: ["A proven statement", "A guess", "An opinion"], answer: "A proven statement", explanation: "Definition." },
            { q: "The converse?", options: ["Reverses a statement", "Deletes a statement", "Adds numbers"], answer: "Reverses a statement", explanation: "Definition." },
            { q: "Blueprints use?", options: ["Parallel lines", "Only circles", "Only curves"], answer: "Parallel lines", explanation: "Construction." },
            { q: "Floor tiles often use?", options: ["Parallel lines", "Random lines", "Circles"], answer: "Parallel lines", explanation: "Real-world." },
            { q: "Architecture depends on?", options: ["Geometry", "Biology", "Grammar"], answer: "Geometry", explanation: "Geometry is essential." },

            { q: "If corresponding angles are congruent?", options: ["Lines are parallel", "Lines are perpendicular", "Nothing"], answer: "Lines are parallel", explanation: "Converse theorem." },
            { q: "If alternate interior angles are congruent?", options: ["Lines are parallel", "Lines intersect", "Nothing"], answer: "Lines are parallel", explanation: "Converse theorem." },
            { q: "If same-side interior angles total 180°?", options: ["Lines are parallel", "Lines are perpendicular", "Nothing"], answer: "Lines are parallel", explanation: "Converse theorem." },
            { q: "Parallel line theorems belong to?", options: ["Geometry", "Statistics", "Economics"], answer: "Geometry", explanation: "Major geometry topic." },
            { q: "A proof explains?", options: ["Why something is true", "Only the answer", "Only numbers"], answer: "Why something is true", explanation: "Definition." },

            { q: "Geometry develops?", options: ["Logical thinking", "Running speed", "Cooking skills"], answer: "Logical thinking", explanation: "Reasoning skills." },
            { q: "Parallel lines appear in?", options: ["Engineering", "Architecture", "Both"], answer: "Both", explanation: "Real-world use." },
            { q: "The crossing line is called?", options: ["Transversal", "Segment", "Ray"], answer: "Transversal", explanation: "Definition." },
            { q: "The biggest idea of Unit 3?", options: ["Angle relationships with parallel lines", "Circle formulas", "Area"], answer: "Angle relationships with parallel lines", explanation: "Core concept." },
            { q: "Completing this test means?", options: ["Unit 3 Complete", "Geometry Complete", "Math Complete"], answer: "Unit 3 Complete", explanation: "Congratulations!" }
        ]
    }
    ,

    "what-is-a-triangle": {
        title: "What is a Triangle?",
        subtitle: "Learn what makes a triangle and explore its basic properties.",
        body: `

<h2>Introduction</h2>

<p>A <strong>triangle</strong> is one of the most important shapes in geometry.</p>

<p>A triangle is a closed polygon with exactly <strong>three sides</strong>, <strong>three vertices</strong>, and <strong>three angles</strong>.</p>

<hr>

<h2>Vocabulary</h2>

<ul>
<li><strong>Side</strong> – one of the three line segments.</li>

<li><strong>Vertex</strong> – a corner where two sides meet.</li>

<li><strong>Angle</strong> – formed by two sides meeting at a vertex.</li>

<li><strong>Polygon</strong> – a closed figure made of straight line segments.</li>

</ul>

<hr>

<h2>Properties of Every Triangle</h2>

<ul>

<li>3 sides</li>

<li>3 angles</li>

<li>3 vertices</li>

<li>Closed figure</li>

<li>Straight sides only</li>

</ul>

<hr>

<h2>Example 1</h2>

<p>The figure below has three sides and is closed.</p>

<p><strong>It is a triangle.</strong></p>

<hr>

<h2>Example 2</h2>

<p>A figure with four sides is <strong>NOT</strong> a triangle.</p>

<hr>

<h2>Example 3</h2>

<p>An open figure is <strong>NOT</strong> a triangle because it is not closed.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Triangles must have exactly three sides.</li>

<li>Triangles must be closed.</li>

<li>Curved sides do not make a triangle.</li>

<li>All sides must be straight.</li>

</ul>

<hr>

<h2>Real World Examples</h2>

<ul>

<li>Roof trusses</li>

<li>Yield traffic signs</li>

<li>Bridge supports</li>

<li>Pizza slices</li>

<li>Mountain peaks</li>

<li>Tripods</li>

</ul>

<hr>

<h2>Summary</h2>

<p>A triangle is a closed figure with exactly three straight sides, three vertices, and three angles.</p>

`,
        questions: [

            { q: "A triangle has how many sides?", options: ["3", "4", "5"], answer: "3", explanation: "Triangles always have three sides." },

            { q: "A triangle has how many angles?", options: ["3", "4", "5"], answer: "3", explanation: "Triangles have three angles." },

            { q: "A triangle has how many vertices?", options: ["3", "2", "4"], answer: "3", explanation: "Three corners." },

            { q: "A triangle is a?", options: ["Polygon", "Circle", "Curve"], answer: "Polygon", explanation: "Triangles are polygons." },

            { q: "Triangles are made of?", options: ["Straight line segments", "Curved lines", "Arcs"], answer: "Straight line segments", explanation: "Triangles use straight sides." },

            { q: "A triangle must be?", options: ["Closed", "Open", "Curved"], answer: "Closed", explanation: "Open figures are not triangles." },

            { q: "A four-sided figure is?", options: ["Not a triangle", "Always a triangle", "Sometimes a triangle"], answer: "Not a triangle", explanation: "Triangles have exactly three sides." },

            { q: "The point where two sides meet is called?", options: ["Vertex", "Radius", "Center"], answer: "Vertex", explanation: "Definition." },

            { q: "The space between two sides is an?", options: ["Angle", "Side", "Edge"], answer: "Angle", explanation: "Definition." },

            { q: "A triangle has?", options: ["Exactly three sides", "At least four sides", "Two sides"], answer: "Exactly three sides", explanation: "Definition." },

            { q: "Can a triangle have curved sides?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Sides must be straight." },

            { q: "Can a triangle be open?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "It must be closed." },

            { q: "Pizza slices are often shaped like?", options: ["Triangles", "Circles", "Squares"], answer: "Triangles", explanation: "Real-world example." },

            { q: "Bridge supports often use?", options: ["Triangles", "Circles", "Hexagons"], answer: "Triangles", explanation: "Triangles are very strong." },

            { q: "A yield sign is shaped like a?", options: ["Triangle", "Circle", "Rectangle"], answer: "Triangle", explanation: "Road sign example." },

            { q: "Triangles belong to?", options: ["Geometry", "Chemistry", "History"], answer: "Geometry", explanation: "Geometry studies shapes." },

            { q: "Every triangle has?", options: ["Three angles", "Four angles", "One angle"], answer: "Three angles", explanation: "Definition." },

            { q: "Every triangle has?", options: ["Three vertices", "Five vertices", "Two vertices"], answer: "Three vertices", explanation: "Definition." },

            { q: "Triangles are important because they are?", options: ["Strong structures", "Weak structures", "Curved shapes"], answer: "Strong structures", explanation: "Engineers use triangles for strength." },

            { q: "Understanding triangles prepares you for?", options: ["Nearly all of geometry", "Only algebra", "Only statistics"], answer: "Nearly all of geometry", explanation: "Triangles are one of the most important geometric figures." }

        ]
    },


    "parts-of-a-triangle": {
        title: "Parts of a Triangle",
        subtitle: "Learn the important parts that make up every triangle.",
        body: `

<h2>Introduction</h2>

<p>Every triangle has several important parts. Knowing these parts helps you understand future topics like congruence, similarity, area, and proofs.</p>

<hr>

<h2>Vocabulary</h2>

<ul>
    <li><strong>Side</strong> – one of the three straight line segments of a triangle.</li>
    <li><strong>Vertex</strong> – a corner where two sides meet.</li>
    <li><strong>Angle</strong> – the opening formed where two sides meet.</li>
    <li><strong>Interior Angle</strong> – an angle inside the triangle.</li>
    <li><strong>Exterior Angle</strong> – an angle formed outside the triangle by extending one side.</li>
    <li><strong>Base</strong> – a side chosen as the bottom or reference side.</li>
    <li><strong>Height</strong> – the perpendicular distance from a vertex to the opposite side.</li>
</ul>

<hr>

<h2>Key Idea</h2>

<p>A triangle always has:</p>

<ul>
    <li>3 sides</li>
    <li>3 vertices</li>
    <li>3 interior angles</li>
</ul>

<hr>

<h2>Example</h2>

<p>In triangle ABC:</p>

<ul>
    <li>The vertices are A, B, and C.</li>
    <li>The sides are AB, BC, and AC.</li>
    <li>The angles are ∠A, ∠B, and ∠C.</li>
</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>
    <li>Do not confuse a side with a vertex.</li>
    <li>Do not confuse the base with the height.</li>
    <li>The height must be perpendicular to the base.</li>
    <li>A triangle has three interior angles, not four.</li>
</ul>

<hr>

<h2>Real World Example</h2>

<p>A roof frame has triangle sides, vertices, and angles. Builders must understand all parts to construct strong structures.</p>

<hr>

<h2>Summary</h2>

<p>The main parts of a triangle are sides, vertices, angles, base, and height.</p>

`,
        questions: [

            { q: "A triangle has how many sides?", options: ["3", "4", "5"], answer: "3", explanation: "Every triangle has exactly three sides." },
            { q: "A triangle has how many vertices?", options: ["3", "2", "4"], answer: "3", explanation: "A vertex is a corner, and triangles have three corners." },
            { q: "A triangle has how many interior angles?", options: ["3", "4", "2"], answer: "3", explanation: "A triangle has three interior angles." },
            { q: "A side of a triangle is?", options: ["A straight segment", "A curved line", "A point"], answer: "A straight segment", explanation: "Triangle sides are straight line segments." },
            { q: "A vertex is?", options: ["A corner", "A side", "An area"], answer: "A corner", explanation: "A vertex is where two sides meet." },

            { q: "An angle is formed when?", options: ["Two sides meet", "Two circles meet", "A line bends"], answer: "Two sides meet", explanation: "Angles are formed at vertices." },
            { q: "In triangle ABC, the vertices are?", options: ["A, B, and C", "AB, BC, and AC", "Only A"], answer: "A, B, and C", explanation: "Vertices are named by capital letters." },
            { q: "In triangle ABC, the sides are?", options: ["AB, BC, and AC", "A, B, and C", "∠A only"], answer: "AB, BC, and AC", explanation: "Sides are named by their endpoints." },
            { q: "In triangle ABC, the angles are?", options: ["∠A, ∠B, and ∠C", "AB, BC, AC", "Only side AB"], answer: "∠A, ∠B, and ∠C", explanation: "Angles are named by their vertices." },
            { q: "The base of a triangle is?", options: ["A chosen reference side", "Always the longest side", "Always vertical"], answer: "A chosen reference side", explanation: "Any side can be chosen as the base." },

            { q: "The height of a triangle must be?", options: ["Perpendicular to the base", "Parallel to the base", "Curved"], answer: "Perpendicular to the base", explanation: "Height is always perpendicular distance." },
            { q: "Can any side be chosen as the base?", options: ["Yes", "No", "Only the bottom side"], answer: "Yes", explanation: "Any side can act as the base depending on the problem." },
            { q: "An exterior angle is formed by?", options: ["Extending one side", "Adding a circle", "Removing a vertex"], answer: "Extending one side", explanation: "Exterior angles are outside the triangle." },
            { q: "Interior angles are located?", options: ["Inside the triangle", "Outside the triangle", "On a circle"], answer: "Inside the triangle", explanation: "Interior means inside." },
            { q: "The height is used to find?", options: ["Area", "Only perimeter", "Only angle names"], answer: "Area", explanation: "Triangle area uses base and height." },

            { q: "A triangle's sides meet at?", options: ["Vertices", "Centers", "Radii"], answer: "Vertices", explanation: "Sides meet at vertices." },
            { q: "The plural of vertex is?", options: ["Vertices", "Vertexes only", "Vertice"], answer: "Vertices", explanation: "Vertices is the standard math plural." },
            { q: "A triangle has how many bases?", options: ["Any side can be a base", "Only one forever", "None"], answer: "Any side can be a base", explanation: "The base depends on how the triangle is used." },
            { q: "Which is NOT a triangle part?", options: ["Diameter", "Side", "Vertex"], answer: "Diameter", explanation: "Diameter belongs to circles, not triangles." },
            { q: "Understanding triangle parts helps with?", options: ["Future geometry topics", "Only spelling", "Only music"], answer: "Future geometry topics", explanation: "These terms are used throughout geometry." }

        ]
    }

    ,

    "classifying-triangles-by-sides": {
        title: "Classifying Triangles by Sides",
        subtitle: "Learn how to classify triangles based on the lengths of their sides.",
        body: `

<h2>Introduction</h2>

<p>Not all triangles are the same. One way to classify triangles is by comparing the lengths of their sides.</p>

<hr>

<h2>Vocabulary</h2>

<ul>
    <li><strong>Classify</strong> – to group objects based on their properties.</li>
    <li><strong>Congruent</strong> – equal in length or measure.</li>
</ul>

<hr>

<h2>The Three Types of Triangles by Sides</h2>

<h3>1. Equilateral Triangle</h3>

<ul>
<li>3 congruent sides</li>
<li>3 congruent angles</li>
<li>Every angle measures 60°</li>
</ul>

<hr>

<h3>2. Isosceles Triangle</h3>

<ul>
<li>Exactly 2 congruent sides</li>
<li>Exactly 2 congruent angles</li>
</ul>

<hr>

<h3>3. Scalene Triangle</h3>

<ul>
<li>No congruent sides</li>
<li>No congruent angles</li>
</ul>

<hr>

<h2>How to Identify Them</h2>

<table>

<tr>
<th>Triangle</th>
<th>Sides</th>
</tr>

<tr>
<td>Equilateral</td>
<td>3 Equal</td>
</tr>

<tr>
<td>Isosceles</td>
<td>2 Equal</td>
</tr>

<tr>
<td>Scalene</td>
<td>No Equal Sides</td>
</tr>

</table>

<hr>

<h2>Example 1</h2>

<p>Side lengths: 5, 5, 5</p>

<p><strong>Equilateral Triangle</strong></p>

<hr>

<h2>Example 2</h2>

<p>Side lengths: 8, 8, 11</p>

<p><strong>Isosceles Triangle</strong></p>

<hr>

<h2>Example 3</h2>

<p>Side lengths: 4, 6, 9</p>

<p><strong>Scalene Triangle</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Isosceles does NOT have three equal sides.</li>

<li>Scalene has NO equal sides.</li>

<li>Equilateral always has three equal sides.</li>

<li>Do not classify by angles in this lesson—only by side lengths.</li>

</ul>

<hr>

<h2>Real World Examples</h2>

<ul>

<li>Yield signs are equilateral triangles.</li>

<li>Roof supports often use isosceles triangles.</li>

<li>Bridge designs frequently contain scalene triangles.</li>

</ul>

<hr>

<h2>Summary</h2>

<ul>

<li>Equilateral → 3 equal sides</li>

<li>Isosceles → 2 equal sides</li>

<li>Scalene → 0 equal sides</li>

</ul>

`,
        questions: [

            { q: "An equilateral triangle has?", options: ["3 equal sides", "2 equal sides", "No equal sides"], answer: "3 equal sides", explanation: "Equilateral triangles have three congruent sides." },

            { q: "An isosceles triangle has?", options: ["2 equal sides", "3 equal sides", "No equal sides"], answer: "2 equal sides", explanation: "Isosceles triangles have exactly two congruent sides." },

            { q: "A scalene triangle has?", options: ["No equal sides", "2 equal sides", "3 equal sides"], answer: "No equal sides", explanation: "Scalene triangles have no congruent sides." },

            { q: "Which triangle has three 60° angles?", options: ["Equilateral", "Isosceles", "Scalene"], answer: "Equilateral", explanation: "Every equilateral triangle has three 60° angles." },

            { q: "Which triangle has exactly two equal sides?", options: ["Isosceles", "Scalene", "Equilateral"], answer: "Isosceles", explanation: "Definition of an isosceles triangle." },

            { q: "Which triangle has no equal angles?", options: ["Scalene", "Equilateral", "Isosceles"], answer: "Scalene", explanation: "Scalene triangles have no congruent angles." },

            { q: "Sides 5,5,5 form what triangle?", options: ["Equilateral", "Isosceles", "Scalene"], answer: "Equilateral", explanation: "All three sides are equal." },

            { q: "Sides 7,7,10 form what triangle?", options: ["Isosceles", "Equilateral", "Scalene"], answer: "Isosceles", explanation: "Two sides are equal." },

            { q: "Sides 3,4,5 form what triangle?", options: ["Scalene", "Equilateral", "Isosceles"], answer: "Scalene", explanation: "No sides are equal." },

            { q: "A yield sign is usually what type?", options: ["Equilateral", "Scalene", "Isosceles"], answer: "Equilateral", explanation: "Yield signs are equilateral triangles." },

            { q: "Congruent sides are?", options: ["Equal in length", "Parallel", "Perpendicular"], answer: "Equal in length", explanation: "Congruent means equal." },

            { q: "A triangle with sides 9,9,9 is?", options: ["Equilateral", "Scalene", "Isosceles"], answer: "Equilateral", explanation: "All sides are equal." },

            { q: "A triangle with sides 8,8,5 is?", options: ["Isosceles", "Scalene", "Equilateral"], answer: "Isosceles", explanation: "Two equal sides." },

            { q: "A triangle with sides 6,8,11 is?", options: ["Scalene", "Isosceles", "Equilateral"], answer: "Scalene", explanation: "No equal sides." },

            { q: "Which type always has three equal angles?", options: ["Equilateral", "Scalene", "Isosceles"], answer: "Equilateral", explanation: "Every angle measures 60°." },

            { q: "Which triangle has three congruent sides?", options: ["Equilateral", "Isosceles", "Scalene"], answer: "Equilateral", explanation: "Definition." },

            { q: "Which triangle has exactly two congruent angles?", options: ["Isosceles", "Equilateral", "Scalene"], answer: "Isosceles", explanation: "Equal sides create equal opposite angles." },

            { q: "Scalene triangles have?", options: ["No congruent sides", "Two congruent sides", "Three congruent sides"], answer: "No congruent sides", explanation: "Definition." },

            { q: "Triangles can be classified by?", options: ["Their side lengths", "Their color", "Their area only"], answer: "Their side lengths", explanation: "This lesson classifies by side lengths." },

            { q: "Understanding triangle classifications helps with?", options: ["Congruence and future geometry", "Only algebra", "Only statistics"], answer: "Congruence and future geometry", explanation: "Triangle classification is used throughout geometry." }

        ]
    }

    ,

    "classifying-triangles-by-angles": {
        title: "Classifying Triangles by Angles",
        subtitle: "Learn how to classify triangles based on the measures of their angles.",
        body: `

<h2>Introduction</h2>

<p>Triangles can also be classified by looking at their <strong>angles</strong>. Every triangle belongs to exactly one of three categories based on its angles.</p>

<hr>

<h2>Vocabulary</h2>

<ul>

<li><strong>Acute Angle</strong> – Less than 90°</li>

<li><strong>Right Angle</strong> – Exactly 90°</li>

<li><strong>Obtuse Angle</strong> – Greater than 90° but less than 180°</li>

</ul>

<hr>

<h2>The Three Types of Triangles by Angles</h2>

<h3>1. Acute Triangle</h3>

<ul>

<li>All three angles are less than 90°.</li>

<li>No right or obtuse angles.</li>

</ul>

<hr>

<h3>2. Right Triangle</h3>

<ul>

<li>Contains exactly one 90° angle.</li>

<li>The other two angles are acute.</li>

</ul>

<hr>

<h3>3. Obtuse Triangle</h3>

<ul>

<li>Contains exactly one angle greater than 90°.</li>

<li>The remaining two angles are acute.</li>

</ul>

<hr>

<h2>Examples</h2>

<p><strong>Example 1</strong></p>

<p>50°, 60°, 70°</p>

<p><strong>Acute Triangle</strong></p>

<hr>

<p><strong>Example 2</strong></p>

<p>90°, 35°, 55°</p>

<p><strong>Right Triangle</strong></p>

<hr>

<p><strong>Example 3</strong></p>

<p>110°, 40°, 30°</p>

<p><strong>Obtuse Triangle</strong></p>

<hr>

<h2>Important Facts</h2>

<ul>

<li>A triangle can have only ONE right angle.</li>

<li>A triangle can have only ONE obtuse angle.</li>

<li>A triangle cannot have two right angles.</li>

<li>A triangle cannot have two obtuse angles.</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Do not confuse acute triangles with acute angles.</li>

<li>If ONE angle is 90°, the triangle is a right triangle.</li>

<li>If ONE angle is greater than 90°, the triangle is obtuse.</li>

<li>All three angles must be less than 90° for an acute triangle.</li>

</ul>

<hr>

<h2>Real World Examples</h2>

<ul>

<li>Roof supports often form acute triangles.</li>

<li>Ladders against walls form right triangles.</li>

<li>Bridge supports sometimes use obtuse triangles.</li>

</ul>

<hr>

<h2>Summary</h2>

<table>

<tr>

<th>Triangle</th>

<th>Angle Rule</th>

</tr>

<tr>

<td>Acute</td>

<td>All angles less than 90°</td>

</tr>

<tr>

<td>Right</td>

<td>One angle equals 90°</td>

</tr>

<tr>

<td>Obtuse</td>

<td>One angle greater than 90°</td>

</tr>

</table>

`,
        questions: [

            { q: "An acute triangle has?", options: ["All angles less than 90°", "One 90° angle", "One angle greater than 90°"], answer: "All angles less than 90°", explanation: "Definition of an acute triangle." },

            { q: "A right triangle has?", options: ["One 90° angle", "Two 90° angles", "No right angles"], answer: "One 90° angle", explanation: "A right triangle contains exactly one right angle." },

            { q: "An obtuse triangle has?", options: ["One angle greater than 90°", "Three obtuse angles", "Two obtuse angles"], answer: "One angle greater than 90°", explanation: "Definition of an obtuse triangle." },

            { q: "50°,60°,70° forms what triangle?", options: ["Acute", "Right", "Obtuse"], answer: "Acute", explanation: "All angles are less than 90°." },

            { q: "90°,45°,45° forms what triangle?", options: ["Right", "Acute", "Obtuse"], answer: "Right", explanation: "Contains one right angle." },

            { q: "100°,40°,40° forms what triangle?", options: ["Obtuse", "Acute", "Right"], answer: "Obtuse", explanation: "Contains one obtuse angle." },

            { q: "Can a triangle have two right angles?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "That would exceed 180°." },

            { q: "Can a triangle have two obtuse angles?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Their sum would exceed 180°." },

            { q: "The remaining angles in a right triangle are?", options: ["Acute", "Obtuse", "Right"], answer: "Acute", explanation: "The remaining two angles must total 90°." },

            { q: "Every triangle is classified by?", options: ["Its angles", "Its color", "Its perimeter"], answer: "Its angles", explanation: "One method of classification uses angle measures." },

            { q: "An acute angle measures?", options: ["Less than 90°", "Exactly 90°", "More than 90°"], answer: "Less than 90°", explanation: "Definition." },

            { q: "A right angle measures?", options: ["90°", "180°", "45°"], answer: "90°", explanation: "Definition." },

            { q: "An obtuse angle measures?", options: ["Greater than 90°", "Less than 90°", "Exactly 90°"], answer: "Greater than 90°", explanation: "Definition." },

            { q: "All three angles less than 90° means?", options: ["Acute triangle", "Right triangle", "Obtuse triangle"], answer: "Acute triangle", explanation: "Definition." },

            { q: "Exactly one 90° angle means?", options: ["Right triangle", "Acute triangle", "Obtuse triangle"], answer: "Right triangle", explanation: "Definition." },

            { q: "Exactly one angle over 90° means?", options: ["Obtuse triangle", "Right triangle", "Acute triangle"], answer: "Obtuse triangle", explanation: "Definition." },

            { q: "A ladder leaning on a wall usually forms?", options: ["Right triangle", "Acute triangle", "Obtuse triangle"], answer: "Right triangle", explanation: "The wall and ground are perpendicular." },

            { q: "Triangles can be classified by?", options: ["Sides and angles", "Only sides", "Only area"], answer: "Sides and angles", explanation: "Both methods are common." },

            { q: "Acute triangles have how many acute angles?", options: ["3", "2", "1"], answer: "3", explanation: "All three are acute." },

            { q: "Understanding triangle classifications prepares you for?", options: ["Congruence, similarity, and trigonometry", "Only algebra", "Only statistics"], answer: "Congruence, similarity, and trigonometry", explanation: "Triangle classification is used throughout geometry." }

        ]
    }

    ,




    "triangle-sum-theorem": {
        title: "Triangle Sum Theorem",
        subtitle: "Learn why the interior angles of every triangle always add up to 180°.",
        body: `

<h2>Introduction</h2>

<p>The <strong>Triangle Sum Theorem</strong> is one of the most important rules in geometry.</p>

<p><strong>The three interior angles of every triangle always add up to 180°.</strong></p>

<hr>

<h2>The Rule</h2>

<div style="text-align:center;font-size:30px;font-weight:bold;margin:20px 0;">
Angle A + Angle B + Angle C = 180°
</div>

<hr>

<h2>Examples</h2>

<h3>Example 1</h3>

<p>Triangle angles:</p>

<ul>
<li>60°</li>
<li>70°</li>
<li>?</li>
</ul>

<p>60 + 70 = 130</p>

<p>180 − 130 = <strong>50°</strong></p>

<hr>

<h3>Example 2</h3>

<p>Triangle angles:</p>

<ul>
<li>45°</li>
<li>45°</li>
<li>?</li>
</ul>

<p>45 + 45 = 90</p>

<p>180 − 90 = <strong>90°</strong></p>

<hr>

<h3>Example 3</h3>

<p>Triangle angles:</p>

<ul>
<li>30°</li>
<li>80°</li>
<li>?</li>
</ul>

<p>30 + 80 = 110</p>

<p>180 − 110 = <strong>70°</strong></p>

<hr>

<h2>How to Solve Missing Angles</h2>

<ol>

<li>Add the known angles.</li>

<li>Subtract that sum from 180°.</li>

<li>The result is the missing angle.</li>

</ol>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Adding to 360° instead of 180°.</li>

<li>Subtracting incorrectly.</li>

<li>Using exterior angles instead of interior angles.</li>

</ul>

<hr>

<h2>Real World Example</h2>

<p>Architects and engineers use the Triangle Sum Theorem when designing roofs, bridges, and buildings.</p>

<hr>

<h2>Summary</h2>

<p>Every triangle has interior angles that total exactly <strong>180°</strong>.</p>

`,
        questions: [

            { q: "The interior angles of every triangle add up to?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Triangle Sum Theorem." },

            { q: "60° + 70° + ?", options: ["50°", "60°", "40°"], answer: "50°", explanation: "180−130=50." },

            { q: "45° + 45° + ?", options: ["90°", "45°", "60°"], answer: "90°", explanation: "180−90=90." },

            { q: "30° + 80° + ?", options: ["70°", "80°", "60°"], answer: "70°", explanation: "180−110=70." },

            { q: "90° + 40° + ?", options: ["50°", "40°", "90°"], answer: "50°", explanation: "180−130=50." },

            { q: "100° + 30° + ?", options: ["50°", "80°", "30°"], answer: "50°", explanation: "180−130=50." },

            { q: "20° + 40° + ?", options: ["120°", "100°", "80°"], answer: "120°", explanation: "180−60=120." },

            { q: "55° + 65° + ?", options: ["60°", "70°", "50°"], answer: "60°", explanation: "180−120=60." },

            { q: "110° + 30° + ?", options: ["40°", "50°", "60°"], answer: "40°", explanation: "180−140=40." },

            { q: "75° + 35° + ?", options: ["70°", "80°", "90°"], answer: "70°", explanation: "180−110=70." },

            { q: "The Triangle Sum Theorem applies to?", options: ["Every triangle", "Only right triangles", "Only equilateral triangles"], answer: "Every triangle", explanation: "It is true for every triangle." },

            { q: "The first step is?", options: ["Add known angles", "Subtract first", "Multiply"], answer: "Add known angles", explanation: "Always add the known angles first." },

            { q: "The second step is?", options: ["Subtract from 180°", "Multiply by 2", "Divide"], answer: "Subtract from 180°", explanation: "Find the missing angle." },

            { q: "Can a triangle have angles totaling 200°?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Triangles always total 180°." },

            { q: "Can a triangle have angles totaling 180°?", options: ["Yes", "No", "Sometimes"], answer: "Yes", explanation: "Always." },

            { q: "The Triangle Sum Theorem is used to?", options: ["Find missing angles", "Find volume", "Find circumference"], answer: "Find missing angles", explanation: "Its main purpose." },

            { q: "Engineers use this theorem when designing?", options: ["Buildings", "Bridges", "Both"], answer: "Both", explanation: "Geometry is used in construction." },

            { q: "Interior angles are?", options: ["Inside the triangle", "Outside the triangle", "On a circle"], answer: "Inside the triangle", explanation: "Interior means inside." },

            { q: "If all three angles are known, they should total?", options: ["180°", "360°", "90°"], answer: "180°", explanation: "Always." },

            { q: "The Triangle Sum Theorem is one of the most important rules in?", options: ["Geometry", "Biology", "Chemistry"], answer: "Geometry", explanation: "It is used throughout geometry." }

        ]
    }
    ,

    "finding-missing-triangle-angles": {
        title: "Finding Missing Triangle Angles",
        subtitle: "Use the Triangle Sum Theorem to solve for unknown angles.",
        body: `

<h2>Introduction</h2>

<p>Now that you know the Triangle Sum Theorem, you can solve for missing angles in any triangle.</p>

<p>Remember:</p>

<div style="text-align:center;font-size:30px;font-weight:bold;margin:20px 0;">
A + B + C = 180°
</div>

<hr>

<h2>Step-by-Step Process</h2>

<ol>

<li>Add the known angles.</li>

<li>Subtract the total from 180°.</li>

<li>The answer is the missing angle.</li>

</ol>

<hr>

<h2>Example 1</h2>

<p>Angles:</p>

<ul>
<li>40°</li>
<li>65°</li>
<li>x</li>
</ul>

<p>40 + 65 = 105</p>

<p>180 − 105 = <strong>75°</strong></p>

<hr>

<h2>Example 2</h2>

<p>Angles:</p>

<ul>
<li>55°</li>
<li>75°</li>
<li>x</li>
</ul>

<p>55 + 75 = 130</p>

<p>180 − 130 = <strong>50°</strong></p>

<hr>

<h2>Example 3</h2>

<p>Angles:</p>

<ul>
<li>90°</li>
<li>38°</li>
<li>x</li>
</ul>

<p>90 + 38 = 128</p>

<p>180 − 128 = <strong>52°</strong></p>

<hr>

<h2>Algebra Example</h2>

<p>One angle is x.</p>

<p>The other two are 60° and 80°.</p>

<p>x + 60 + 80 = 180</p>

<p>x + 140 = 180</p>

<p>x = <strong>40°</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Adding incorrectly.</li>

<li>Subtracting from 360° instead of 180°.</li>

<li>Forgetting to include all three interior angles.</li>

<li>Mixing up interior and exterior angles.</li>

</ul>

<hr>

<h2>Real World Example</h2>

<p>Surveyors use triangle angles when measuring land and planning roads.</p>

<hr>

<h2>Summary</h2>

<p>Every missing interior angle can be found by subtracting the known angles from 180°.</p>

`,
        questions: [

            { q: "40° + 65° + ?", options: ["75°", "85°", "65°"], answer: "75°", explanation: "180−105=75." },

            { q: "55° + 75° + ?", options: ["50°", "60°", "40°"], answer: "50°", explanation: "180−130=50." },

            { q: "90° + 38° + ?", options: ["52°", "42°", "62°"], answer: "52°", explanation: "180−128=52." },

            { q: "70° + 60° + ?", options: ["50°", "60°", "40°"], answer: "50°", explanation: "180−130=50." },

            { q: "35° + 45° + ?", options: ["100°", "90°", "80°"], answer: "100°", explanation: "180−80=100." },

            { q: "110° + 20° + ?", options: ["50°", "60°", "40°"], answer: "50°", explanation: "180−130=50." },

            { q: "80° + 20° + ?", options: ["80°", "70°", "90°"], answer: "80°", explanation: "180−100=80." },

            { q: "25° + 95° + ?", options: ["60°", "70°", "50°"], answer: "60°", explanation: "180−120=60." },

            { q: "45° + 65° + ?", options: ["70°", "80°", "60°"], answer: "70°", explanation: "180−110=70." },

            { q: "60° + 60° + ?", options: ["60°", "50°", "70°"], answer: "60°", explanation: "Equilateral triangle." },

            { q: "The first step is?", options: ["Add known angles", "Subtract first", "Multiply"], answer: "Add known angles", explanation: "Always add first." },

            { q: "The second step is?", options: ["Subtract from 180°", "Divide", "Multiply"], answer: "Subtract from 180°", explanation: "Use the Triangle Sum Theorem." },

            { q: "Every triangle totals?", options: ["180°", "360°", "90°"], answer: "180°", explanation: "Always." },

            { q: "Missing angles use?", options: ["Triangle Sum Theorem", "Pythagorean Theorem", "Slope Formula"], answer: "Triangle Sum Theorem", explanation: "Correct theorem." },

            { q: "Interior angles are?", options: ["Inside the triangle", "Outside", "Curved"], answer: "Inside the triangle", explanation: "Definition." },

            { q: "If two angles total 100°, the third is?", options: ["80°", "90°", "70°"], answer: "80°", explanation: "180−100=80." },

            { q: "If two angles total 145°, the third is?", options: ["35°", "45°", "25°"], answer: "35°", explanation: "180−145=35." },

            { q: "Surveyors use triangles because?", options: ["They provide accurate measurements", "They are decorative", "They are random"], answer: "They provide accurate measurements", explanation: "Triangles are fundamental in surveying." },

            { q: "Finding missing angles is used throughout?", options: ["Geometry", "Chemistry", "History"], answer: "Geometry", explanation: "A core geometry skill." },

            { q: "Mastering this lesson prepares you for?", options: ["Triangle proofs and congruence", "Only algebra", "Only statistics"], answer: "Triangle proofs and congruence", explanation: "This is foundational for later topics." }

        ]
    }
    ,

    "triangle-inequality-theorem": {
        title: "Triangle Inequality Theorem",
        subtitle: "Determine whether three side lengths can form a triangle.",
        body: `

<h2>Introduction</h2>

<p>Not every set of three side lengths can make a triangle.</p>

<p>The <strong>Triangle Inequality Theorem</strong> tells us whether a triangle is possible.</p>

<hr>

<h2>The Rule</h2>

<p>The sum of any two sides must be <strong>greater</strong> than the third side.</p>

<ul>
<li>a + b > c</li>
<li>a + c > b</li>
<li>b + c > a</li>
</ul>

<hr>

<h2>Example 1</h2>

<p>Sides: 3, 4, 5</p>

<p>3 + 4 = 7 > 5 ✅</p>

<p>3 + 5 = 8 > 4 ✅</p>

<p>4 + 5 = 9 > 3 ✅</p>

<p><strong>A triangle CAN be formed.</strong></p>

<hr>

<h2>Example 2</h2>

<p>Sides: 2, 3, 6</p>

<p>2 + 3 = 5</p>

<p>5 is NOT greater than 6 ❌</p>

<p><strong>A triangle CANNOT be formed.</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Greater than (>) does NOT include equal to (=).</li>
<li>You must check all three inequalities.</li>
<li>Do not assume three numbers always make a triangle.</li>
</ul>

<hr>

<h2>Real World Example</h2>

<p>Engineers use this theorem when designing bridges and roof supports to ensure structures can actually be built.</p>

<hr>

<h2>Summary</h2>

<p>If the sum of any two sides is greater than the third side, a triangle can be formed.</p>

`,
        questions: [

            { q: "The Triangle Inequality Theorem is used to?", options: ["Determine if a triangle can exist", "Find area", "Find perimeter"], answer: "Determine if a triangle can exist", explanation: "It tells whether three side lengths can form a triangle." },

            { q: "Can sides 3,4,5 form a triangle?", options: ["Yes", "No", "Not enough information"], answer: "Yes", explanation: "All three inequalities are true." },

            { q: "Can sides 2,3,6 form a triangle?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "2+3 is not greater than 6." },

            { q: "The sum of any two sides must be?", options: ["Greater than the third side", "Equal to the third side", "Less than the third side"], answer: "Greater than the third side", explanation: "This is the theorem." },

            { q: "Sides 5,5,8 form a triangle?", options: ["Yes", "No", "Impossible to know"], answer: "Yes", explanation: "5+5=10>8." },

            { q: "Sides 1,2,4 form a triangle?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "1+2=3 is not greater than 4." },

            { q: "Sides 7,8,10 form a triangle?", options: ["Yes", "No", "Cannot determine"], answer: "Yes", explanation: "All inequalities are satisfied." },

            { q: "Sides 4,4,9 form a triangle?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "4+4=8<9." },

            { q: "The inequality symbol used is?", options: [">", "<", "="], answer: ">", explanation: "The sum must be greater than the third side." },

            { q: "Do you check one inequality or all three?", options: ["All three", "Only one", "Only two"], answer: "All three", explanation: "Every inequality must be true." },

            { q: "The Triangle Inequality Theorem involves?", options: ["Side lengths", "Angles only", "Area"], answer: "Side lengths", explanation: "It compares side lengths." },

            { q: "Can sides 6,8,12 form a triangle?", options: ["Yes", "No", "Maybe"], answer: "Yes", explanation: "6+8=14>12." },

            { q: "Can sides 5,7,13 form a triangle?", options: ["No", "Yes", "Maybe"], answer: "No", explanation: "5+7=12<13." },

            { q: "The theorem is important because?", options: ["Not every three lengths make a triangle", "Every three lengths work", "Only right triangles matter"], answer: "Not every three lengths make a triangle", explanation: "The theorem checks validity." },

            { q: "Engineers use this theorem when designing?", options: ["Structures", "Recipes", "Music"], answer: "Structures", explanation: "Geometry is essential in construction." },

            { q: "Sides 10,10,15 form a triangle?", options: ["Yes", "No", "Impossible"], answer: "Yes", explanation: "10+10=20>15." },

            { q: "Sides 4,5,10 form a triangle?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "4+5=9<10." },

            { q: "The Triangle Inequality Theorem belongs to?", options: ["Geometry", "Chemistry", "Biology"], answer: "Geometry", explanation: "It is a core geometry theorem." },

            { q: "This theorem is used before studying?", options: ["Congruent triangles", "Fractions", "Statistics"], answer: "Congruent triangles", explanation: "You first need to know if a triangle exists." },

            { q: "Mastering this theorem prepares you for?", options: ["Triangle congruence and proofs", "Only algebra", "Only probability"], answer: "Triangle congruence and proofs", explanation: "It is a foundation for later triangle topics." }

        ]
    }

    ,

    "congruent-triangles": {
        title: "Congruent Triangles",
        subtitle: "Learn when two triangles are exactly the same shape and size.",
        body: `

<h2>Introduction</h2>

<p>Two triangles are <strong>congruent</strong> if they have exactly the same size and shape.</p>

<p>Even if one triangle is rotated, reflected, or translated, it can still be congruent to another triangle.</p>

<hr>

<h2>Vocabulary</h2>

<ul>

<li><strong>Congruent</strong> – Same shape and same size.</li>

<li><strong>Corresponding Parts</strong> – Matching sides and matching angles.</li>

<li><strong>CPCTC</strong> – Corresponding Parts of Congruent Triangles are Congruent.</li>

</ul>

<hr>

<h2>Ways to Prove Triangles are Congruent</h2>

<table>

<tr>

<th>Method</th>

<th>Meaning</th>

</tr>

<tr>

<td>SSS</td>

<td>Three matching sides</td>

</tr>

<tr>

<td>SAS</td>

<td>Two sides and the included angle</td>

</tr>

<tr>

<td>ASA</td>

<td>Two angles and the included side</td>

</tr>

<tr>

<td>AAS</td>

<td>Two angles and a non-included side</td>

</tr>

<tr>

<td>HL</td>

<td>Hypotenuse and one leg of right triangles</td>

</tr>

</table>

<hr>

<h2>Examples</h2>

<h3>Example 1</h3>

<p>If all three sides match, the triangles are congruent by <strong>SSS</strong>.</p>

<hr>

<h3>Example 2</h3>

<p>If two sides and the included angle match, the triangles are congruent by <strong>SAS</strong>.</p>

<hr>

<h3>Example 3</h3>

<p>If two angles and one side match, use <strong>ASA</strong> or <strong>AAS</strong>.</p>

<hr>

<h3>Example 4</h3>

<p>If two right triangles have equal hypotenuses and one matching leg, use <strong>HL</strong>.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>SSA is NOT a congruence theorem.</li>

<li>HL only works for right triangles.</li>

<li>Corresponding parts must actually match.</li>

</ul>

<hr>

<h2>Real World Example</h2>

<p>Engineers use congruent triangles to build bridges, buildings, and roof trusses with identical support sections.</p>

<hr>

<h2>Summary</h2>

<ul>

<li>SSS</li>

<li>SAS</li>

<li>ASA</li>

<li>AAS</li>

<li>HL (Right Triangles)</li>

</ul>

`,
        questions: [

            { q: "Congruent triangles have?", options: ["Same size and shape", "Same area only", "Same perimeter only"], answer: "Same size and shape", explanation: "Definition of congruent triangles." },

            { q: "SSS stands for?", options: ["Side-Side-Side", "Side-Side-Angle", "Side-Angle-Side"], answer: "Side-Side-Side", explanation: "Three matching sides." },

            { q: "SAS stands for?", options: ["Side-Angle-Side", "Side-Side-Side", "Angle-Side-Angle"], answer: "Side-Angle-Side", explanation: "Two sides and the included angle." },

            { q: "ASA stands for?", options: ["Angle-Side-Angle", "Angle-Angle-Side", "Side-Angle-Side"], answer: "Angle-Side-Angle", explanation: "Definition." },

            { q: "AAS stands for?", options: ["Angle-Angle-Side", "Angle-Side-Angle", "Side-Side-Side"], answer: "Angle-Angle-Side", explanation: "Definition." },

            { q: "HL works only for?", options: ["Right triangles", "All triangles", "Obtuse triangles"], answer: "Right triangles", explanation: "HL is a right triangle theorem." },

            { q: "HL stands for?", options: ["Hypotenuse-Leg", "Height-Length", "Half-Line"], answer: "Hypotenuse-Leg", explanation: "Definition." },

            { q: "SSA is?", options: ["Not a congruence theorem", "A congruence theorem", "Always works"], answer: "Not a congruence theorem", explanation: "SSA does not guarantee congruence." },

            { q: "CPCTC means?", options: ["Corresponding Parts of Congruent Triangles are Congruent", "Common Parts Create Triangle Congruence", "Corresponding Points"], answer: "Corresponding Parts of Congruent Triangles are Congruent", explanation: "A fundamental theorem." },

            { q: "Congruent triangles have equal?", options: ["Corresponding sides and angles", "Area only", "Perimeter only"], answer: "Corresponding sides and angles", explanation: "Definition." },

            { q: "Three equal sides prove?", options: ["SSS", "SAS", "ASA"], answer: "SSS", explanation: "Three matching sides." },

            { q: "Two sides and included angle prove?", options: ["SAS", "SSA", "AAS"], answer: "SAS", explanation: "Definition." },

            { q: "Two angles and included side prove?", options: ["ASA", "SAS", "HL"], answer: "ASA", explanation: "Definition." },

            { q: "Two angles and non-included side prove?", options: ["AAS", "ASA", "SSS"], answer: "AAS", explanation: "Definition." },

            { q: "Hypotenuse plus one leg prove?", options: ["HL", "SSA", "AAA"], answer: "HL", explanation: "Right triangles only." },

            { q: "Congruent triangles are used in?", options: ["Construction", "Engineering", "Both"], answer: "Both", explanation: "Real-world applications." },

            { q: "If triangles are congruent, matching angles are?", options: ["Equal", "Random", "Supplementary"], answer: "Equal", explanation: "CPCTC." },

            { q: "If triangles are congruent, matching sides are?", options: ["Equal", "Parallel", "Perpendicular"], answer: "Equal", explanation: "CPCTC." },

            { q: "Congruence is a major topic in?", options: ["Geometry", "Statistics", "Chemistry"], answer: "Geometry", explanation: "Core Geometry concept." },

            { q: "Learning congruent triangles prepares students for?", options: ["Geometry proofs", "Only Algebra", "Only Calculus"], answer: "Geometry proofs", explanation: "Congruence is essential for proofs." }

        ]
    }

    ,

    "similar-triangles": {
        title: "Similar Triangles",
        subtitle: "Learn how triangles can have the same shape but different sizes.",
        body: `

<h2>Introduction</h2>

<p>Two triangles are <strong>similar</strong> if they have the same shape but not necessarily the same size.</p>

<p>Their corresponding angles are equal, and their corresponding sides are proportional.</p>

<hr>

<h2>Vocabulary</h2>

<ul>

<li><strong>Similar</strong> – Same shape, possibly different sizes.</li>

<li><strong>Proportional</strong> – Having the same ratio.</li>

<li><strong>Scale Factor</strong> – The number used to enlarge or reduce a figure.</li>

</ul>

<hr>

<h2>Properties of Similar Triangles</h2>

<ul>

<li>Matching angles are congruent.</li>

<li>Matching sides are proportional.</li>

<li>The triangles have the same shape.</li>

</ul>

<hr>

<h2>Ways to Prove Similarity</h2>

<table>

<tr>

<th>Method</th>

<th>Description</th>

</tr>

<tr>

<td>AA</td>

<td>Two matching angles</td>

</tr>

<tr>

<td>SAS</td>

<td>Two proportional sides and included angle</td>

</tr>

<tr>

<td>SSS</td>

<td>Three proportional sides</td>

</tr>

</table>

<hr>

<h2>Example 1</h2>

<p>Two triangles have angles of 40°, 60°, and 80°.</p>

<p><strong>They are similar by AA.</strong></p>

<hr>

<h2>Example 2</h2>

<p>Triangle A has sides 3, 4, 5.</p>

<p>Triangle B has sides 6, 8, 10.</p>

<p>Each side is doubled, so the triangles are similar.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Similar does NOT mean congruent.</li>

<li>Similar triangles may be different sizes.</li>

<li>The side lengths must have the same ratio.</li>

</ul>

<hr>

<h2>Real World Example</h2>

<p>Architects use scale drawings, which are based on similar figures.</p>

<hr>

<h2>Summary</h2>

<ul>

<li>Same shape</li>

<li>Equal corresponding angles</li>

<li>Proportional corresponding sides</li>

</ul>

`,
        questions: [

            { q: "Similar triangles have?", options: ["Same shape", "Same size", "Same perimeter"], answer: "Same shape", explanation: "Similar triangles always have the same shape." },

            { q: "Similar triangles always have?", options: ["Equal corresponding angles", "Equal side lengths", "Equal areas"], answer: "Equal corresponding angles", explanation: "Matching angles are congruent." },

            { q: "Corresponding sides of similar triangles are?", options: ["Proportional", "Equal", "Perpendicular"], answer: "Proportional", explanation: "They have the same ratio." },

            { q: "Congruent triangles are?", options: ["Same size and shape", "Same shape only", "Different shapes"], answer: "Same size and shape", explanation: "Congruent is stronger than similar." },

            { q: "AA stands for?", options: ["Angle-Angle", "Angle-Area", "Area-Angle"], answer: "Angle-Angle", explanation: "Two equal angles prove similarity." },

            { q: "Scale factor is?", options: ["The enlargement or reduction ratio", "The perimeter", "The area"], answer: "The enlargement or reduction ratio", explanation: "Definition." },

            { q: "Sides 3-4-5 and 6-8-10 are?", options: ["Similar", "Congruent", "Neither"], answer: "Similar", explanation: "Each side is multiplied by 2." },

            { q: "Similar triangles have equal?", options: ["Angles", "Side lengths", "Areas"], answer: "Angles", explanation: "Matching angles are congruent." },

            { q: "Matching sides are?", options: ["Proportional", "Equal", "Random"], answer: "Proportional", explanation: "Definition." },

            { q: "Architects use?", options: ["Scale drawings", "Only circles", "Random sketches"], answer: "Scale drawings", explanation: "Scale drawings use similarity." },

            { q: "Maps are examples of?", options: ["Similarity", "Congruence", "Probability"], answer: "Similarity", explanation: "Maps are scaled versions of reality." },

            { q: "A scale factor of 3 means?", options: ["Every side triples", "Every angle triples", "The shape changes"], answer: "Every side triples", explanation: "Lengths multiply by 3." },

            { q: "A scale factor of 1 means?", options: ["Congruent figures", "Different shapes", "Impossible"], answer: "Congruent figures", explanation: "No size change." },

            { q: "AA is one way to prove?", options: ["Similarity", "Congruence", "Parallel lines"], answer: "Similarity", explanation: "AA Similarity Theorem." },

            { q: "SSS Similarity requires?", options: ["Proportional sides", "Equal sides", "Equal angles"], answer: "Proportional sides", explanation: "The sides must have the same ratio." },

            { q: "SAS Similarity requires?", options: ["Two proportional sides and included angle", "Three equal sides", "Two equal angles"], answer: "Two proportional sides and included angle", explanation: "Definition." },

            { q: "Can similar triangles be different sizes?", options: ["Yes", "No", "Sometimes"], answer: "Yes", explanation: "That's the idea of similarity." },

            { q: "Can similar triangles have different shapes?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "They always have the same shape." },

            { q: "Similarity is important for?", options: ["Maps and blueprints", "Cooking", "Music"], answer: "Maps and blueprints", explanation: "Real-world scaling." },

            { q: "Learning similar triangles prepares students for?", options: ["Trigonometry", "Only algebra", "Only statistics"], answer: "Trigonometry", explanation: "Similarity is fundamental in trigonometry." }

        ]
    }
    ,

    "special-right-triangles": {
        title: "Special Right Triangles",
        subtitle: "Learn the two most common right triangles and their side relationships.",
        body: `

<h2>Introduction</h2>

<p>Some right triangles appear so often that mathematicians gave them special names.</p>

<p>Knowing these triangles allows you to solve problems quickly without always using the Pythagorean Theorem.</p>

<hr>

<h2>45°-45°-90° Triangle</h2>

<ul>

<li>Two equal angles (45° each)</li>

<li>Two equal legs</li>

<li>Hypotenuse = Leg × √2</li>

</ul>

<hr>

<h2>30°-60°-90° Triangle</h2>

<ul>

<li>Shortest side is opposite 30°</li>

<li>Longest side (hypotenuse) = Short side × 2</li>

<li>Long leg = Short side × √3</li>

</ul>

<hr>

<h2>Example 1</h2>

<p>A 45°-45°-90° triangle has legs of 8.</p>

<p>Hypotenuse = 8√2</p>

<hr>

<h2>Example 2</h2>

<p>A 30°-60°-90° triangle has a short leg of 5.</p>

<p>Hypotenuse = 10</p>

<p>Long leg = 5√3</p>

<hr>

<h2>When Should You Use These?</h2>

<ul>

<li>Finding missing side lengths.</li>

<li>Preparing for trigonometry.</li>

<li>Engineering and construction.</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Don't confuse the two special triangles.</li>

<li>The hypotenuse is always the longest side.</li>

<li>Only right triangles use these relationships.</li>

</ul>

<hr>

<h2>Real World Example</h2>

<p>Roof framing and ramps often use these special right triangles because they provide predictable side lengths.</p>

<hr>

<h2>Summary</h2>

<table>

<tr>

<th>Triangle</th>

<th>Side Ratio</th>

</tr>

<tr>

<td>45-45-90</td>

<td>1 : 1 : √2</td>

</tr>

<tr>

<td>30-60-90</td>

<td>1 : √3 : 2</td>

</tr>

</table>

`,
        questions: [

            { q: "A 45°-45°-90° triangle has?", options: ["Two equal legs", "Three equal sides", "No equal sides"], answer: "Two equal legs", explanation: "Its legs are congruent." },

            { q: "The hypotenuse of a 45°-45°-90° triangle equals?", options: ["Leg × √2", "Leg × 2", "Leg × √3"], answer: "Leg × √2", explanation: "Standard ratio." },

            { q: "The side ratio of a 45°-45°-90° triangle is?", options: ["1:1:√2", "1:√3:2", "3:4:5"], answer: "1:1:√2", explanation: "Memorize this ratio." },

            { q: "The side ratio of a 30°-60°-90° triangle is?", options: ["1:√3:2", "1:1:√2", "2:2:3"], answer: "1:√3:2", explanation: "Standard ratio." },

            { q: "In a 30°-60°-90° triangle, the hypotenuse equals?", options: ["Twice the short leg", "√2 times the leg", "Three times the leg"], answer: "Twice the short leg", explanation: "Hypotenuse = 2 × short leg." },

            { q: "If the short leg is 6, the hypotenuse is?", options: ["12", "6√2", "6√3"], answer: "12", explanation: "Multiply by 2." },

            { q: "If the short leg is 4, the long leg is?", options: ["4√3", "8", "4√2"], answer: "4√3", explanation: "Long leg = short leg × √3." },

            { q: "If the legs of a 45°-45°-90° triangle are 10, the hypotenuse is?", options: ["10√2", "20", "10√3"], answer: "10√2", explanation: "Multiply by √2." },

            { q: "These relationships apply only to?", options: ["Right triangles", "All triangles", "Obtuse triangles"], answer: "Right triangles", explanation: "Only right triangles." },

            { q: "The longest side of a right triangle is the?", options: ["Hypotenuse", "Leg", "Base"], answer: "Hypotenuse", explanation: "Definition." },

            { q: "45°-45°-90° triangles are also?", options: ["Isosceles right triangles", "Scalene triangles", "Equilateral triangles"], answer: "Isosceles right triangles", explanation: "The legs are equal." },

            { q: "30°-60°-90° triangles contain?", options: ["One right angle", "No right angle", "Two right angles"], answer: "One right angle", explanation: "They are right triangles." },

            { q: "These triangles help avoid repeatedly using?", options: ["The Pythagorean Theorem", "The Distance Formula", "The Midpoint Formula"], answer: "The Pythagorean Theorem", explanation: "Their ratios are already known." },

            { q: "The ratio 1:1:√2 belongs to?", options: ["45°-45°-90°", "30°-60°-90°", "Scalene"], answer: "45°-45°-90°", explanation: "Standard ratio." },

            { q: "The ratio 1:√3:2 belongs to?", options: ["30°-60°-90°", "45°-45°-90°", "Equilateral"], answer: "30°-60°-90°", explanation: "Standard ratio." },

            { q: "Engineers use these triangles because?", options: ["Their side lengths follow fixed ratios", "They are random", "They are decorative"], answer: "Their side lengths follow fixed ratios", explanation: "Predictable measurements are useful." },

            { q: "Roof framing commonly uses?", options: ["Special right triangles", "Circles", "Parabolas"], answer: "Special right triangles", explanation: "Common construction application." },

            { q: "Special right triangles are important before studying?", options: ["Trigonometry", "Statistics", "Calculus"], answer: "Trigonometry", explanation: "They provide a foundation." },

            { q: "The hypotenuse is opposite the?", options: ["Right angle", "30° angle", "60° angle"], answer: "Right angle", explanation: "Definition." },

            { q: "Learning special right triangles prepares students for?", options: ["Trigonometry and Calculus", "Only Algebra", "Only Geometry proofs"], answer: "Trigonometry and Calculus", explanation: "These ratios are used throughout higher mathematics." }

        ]
    }
    ,

    "triangle-centers": {
        title: "Triangle Centers",
        subtitle: "Learn the four important centers of a triangle and what they do.",
        body: `

<h2>Introduction</h2>

<p>Triangles have four special points called <strong>triangle centers</strong>. Each center is created using different line segments and has its own unique purpose.</p>

<hr>

<h2>The Four Triangle Centers</h2>

<table>

<tr>

<th>Center</th>

<th>Created By</th>

<th>Purpose</th>

</tr>

<tr>

<td>Centroid</td>

<td>Medians</td>

<td>Balance Point</td>

</tr>

<tr>

<td>Incenter</td>

<td>Angle Bisectors</td>

<td>Center of Inscribed Circle</td>

</tr>

<tr>

<td>Circumcenter</td>

<td>Perpendicular Bisectors</td>

<td>Center of Circumscribed Circle</td>

</tr>

<tr>

<td>Orthocenter</td>

<td>Altitudes</td>

<td>Intersection of Altitudes</td>

</tr>

</table>

<hr>

<h2>Centroid</h2>

<p>The centroid is where the three medians meet.</p>

<p>It is the balancing point of a triangle.</p>

<hr>

<h2>Incenter</h2>

<p>The incenter is where the three angle bisectors meet.</p>

<p>It is always inside the triangle.</p>

<hr>

<h2>Circumcenter</h2>

<p>The circumcenter is formed by the perpendicular bisectors.</p>

<p>It is the center of the circle passing through all three vertices.</p>

<hr>

<h2>Orthocenter</h2>

<p>The orthocenter is formed where the three altitudes intersect.</p>

<p>Depending on the triangle, it may be inside, outside, or on the triangle.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Do not confuse medians with angle bisectors.</li>

<li>The centroid is NOT the same as the circumcenter.</li>

<li>Only the incenter is always inside every triangle.</li>

</ul>

<hr>

<h2>Real World Example</h2>

<p>Engineers use centroids when balancing objects and designing stable structures.</p>

<hr>

<h2>Summary</h2>

<table>

<tr>

<th>Center</th>

<th>Remember</th>

</tr>

<tr>

<td>Centroid</td>

<td>Balance</td>

</tr>

<tr>

<td>Incenter</td>

<td>Inside Circle</td>

</tr>

<tr>

<td>Circumcenter</td>

<td>Outside Circle</td>

</tr>

<tr>

<td>Orthocenter</td>

<td>Altitudes</td>

</tr>

</table>

`,
        questions: [

            { q: "The centroid is formed by?", options: ["Medians", "Altitudes", "Angle Bisectors"], answer: "Medians", explanation: "The centroid is where the medians intersect." },

            { q: "The centroid is the triangle's?", options: ["Balance point", "Largest angle", "Longest side"], answer: "Balance point", explanation: "It is the center of mass." },

            { q: "The incenter is formed by?", options: ["Angle bisectors", "Medians", "Perpendicular bisectors"], answer: "Angle bisectors", explanation: "Definition." },

            { q: "The incenter is the center of the?", options: ["Inscribed circle", "Circumscribed circle", "Triangle"], answer: "Inscribed circle", explanation: "Definition." },

            { q: "The circumcenter is formed by?", options: ["Perpendicular bisectors", "Medians", "Altitudes"], answer: "Perpendicular bisectors", explanation: "Definition." },

            { q: "The circumcenter is the center of the?", options: ["Circumscribed circle", "Inscribed circle", "Triangle"], answer: "Circumscribed circle", explanation: "Definition." },

            { q: "The orthocenter is formed by?", options: ["Altitudes", "Medians", "Angle bisectors"], answer: "Altitudes", explanation: "Definition." },

            { q: "Which center is always inside every triangle?", options: ["Incenter", "Orthocenter", "Circumcenter"], answer: "Incenter", explanation: "The incenter is always inside." },

            { q: "The centroid is used for?", options: ["Balancing", "Area", "Slope"], answer: "Balancing", explanation: "It is the balance point." },

            { q: "A median connects?", options: ["A vertex to the midpoint of the opposite side", "Two vertices", "Two midpoints"], answer: "A vertex to the midpoint of the opposite side", explanation: "Definition." },

            { q: "An altitude is?", options: ["Perpendicular to the opposite side", "Parallel to the opposite side", "A median"], answer: "Perpendicular to the opposite side", explanation: "Definition." },

            { q: "An angle bisector?", options: ["Cuts an angle into two equal angles", "Cuts a side in half", "Creates a right angle"], answer: "Cuts an angle into two equal angles", explanation: "Definition." },

            { q: "Perpendicular bisectors are?", options: ["Perpendicular and pass through the midpoint", "Always medians", "Always altitudes"], answer: "Perpendicular and pass through the midpoint", explanation: "Definition." },

            { q: "Which center is associated with medians?", options: ["Centroid", "Orthocenter", "Circumcenter"], answer: "Centroid", explanation: "Definition." },

            { q: "Which center is associated with altitudes?", options: ["Orthocenter", "Centroid", "Incenter"], answer: "Orthocenter", explanation: "Definition." },

            { q: "Which center is associated with angle bisectors?", options: ["Incenter", "Centroid", "Orthocenter"], answer: "Incenter", explanation: "Definition." },

            { q: "Which center is associated with perpendicular bisectors?", options: ["Circumcenter", "Centroid", "Orthocenter"], answer: "Circumcenter", explanation: "Definition." },

            { q: "Triangle centers are important in?", options: ["Engineering and design", "Cooking", "Music"], answer: "Engineering and design", explanation: "Used in construction and structural analysis." },

            { q: "How many major triangle centers are there?", options: ["Four", "Three", "Five"], answer: "Four", explanation: "Centroid, Incenter, Circumcenter, Orthocenter." },

            { q: "Understanding triangle centers prepares students for?", options: ["Higher Geometry", "Only Algebra", "Only Statistics"], answer: "Higher Geometry", explanation: "Triangle centers appear in advanced geometry." }

        ]
    }
    ,

    "unit4-review": {
        title: "Unit 4 Review",
        subtitle: "Review everything you've learned about triangles before taking the Unit Test.",
        body: `

<h2>Congratulations!</h2>

<p>You have completed the Triangle Unit.</p>

<hr>

<h2>Lessons Covered</h2>

<ol>

<li>What is a Triangle?</li>

<li>Parts of a Triangle</li>

<li>Classifying by Sides</li>

<li>Classifying by Angles</li>

<li>Triangle Sum Theorem</li>

<li>Finding Missing Angles</li>

<li>Triangle Inequality Theorem</li>

<li>Congruent Triangles</li>

<li>Similar Triangles</li>

<li>Special Right Triangles</li>

<li>Triangle Centers</li>

</ol>

<hr>

<h2>Key Ideas to Remember</h2>

<ul>

<li>Every triangle has three sides, three angles, and three vertices.</li>

<li>The interior angles always add to 180°.</li>

<li>The sum of any two side lengths must be greater than the third side.</li>

<li>Congruent triangles have the same size and shape.</li>

<li>Similar triangles have the same shape but may have different sizes.</li>

<li>45-45-90 ratio = 1 : 1 : √2</li>

<li>30-60-90 ratio = 1 : √3 : 2</li>

<li>There are four triangle centers:
    <ul>
        <li>Centroid</li>
        <li>Incenter</li>
        <li>Circumcenter</li>
        <li>Orthocenter</li>
    </ul>
</li>

</ul>

<hr>

<h2>Ready?</h2>

<p>The next lesson is your Unit 4 Test.</p>

`,
        questions: [

            {
                q: "Are you ready for the Unit 4 Test?",
                options: [
                    "Yes!",
                    "I want to study more."
                ],
                answer: "Yes!",
                explanation: "Good luck! You've learned the core concepts of triangles."
            }

        ]

    },

    "unit4-test": {
        title: "Unit 4 Test",
        subtitle: "Triangles Assessment",

        body: `

<h2>Unit 4 Test</h2>

<p>This assessment covers every lesson in the Triangle Unit.</p>

<h3>Topics Covered</h3>

<ul>

<li>Triangle Basics</li>

<li>Parts of a Triangle</li>

<li>Classifying by Sides</li>

<li>Classifying by Angles</li>

<li>Triangle Sum Theorem</li>

<li>Finding Missing Angles</li>

<li>Triangle Inequality</li>

<li>Congruent Triangles</li>

<li>Similar Triangles</li>

<li>Special Right Triangles</li>

<li>Triangle Centers</li>

</ul>

<p><strong>40 Questions</strong></p>

`,
        questions: [

            { q: "A triangle has how many sides?", options: ["3", "4", "5"], answer: "3", explanation: "Every triangle has exactly three sides." },
            { q: "A triangle has how many angles?", options: ["3", "4", "5"], answer: "3", explanation: "Triangles always have three angles." },
            { q: "The interior angles of a triangle always total?", options: ["180°", "360°", "90°"], answer: "180°", explanation: "Triangle Sum Theorem." },
            { q: "A triangle with sides 5,5,5 is?", options: ["Equilateral", "Isosceles", "Scalene"], answer: "Equilateral", explanation: "All three sides are equal." },
            { q: "A triangle with sides 7,7,10 is?", options: ["Isosceles", "Scalene", "Equilateral"], answer: "Isosceles", explanation: "Exactly two equal sides." },

            { q: "A triangle with sides 4,6,9 is?", options: ["Scalene", "Equilateral", "Isosceles"], answer: "Scalene", explanation: "No equal sides." },
            { q: "An acute triangle has?", options: ["All angles less than 90°", "One right angle", "One obtuse angle"], answer: "All angles less than 90°", explanation: "Definition." },
            { q: "A right triangle has?", options: ["One 90° angle", "Two 90° angles", "Three 90° angles"], answer: "One 90° angle", explanation: "Definition." },
            { q: "An obtuse triangle has?", options: ["One angle greater than 90°", "Two obtuse angles", "Three obtuse angles"], answer: "One angle greater than 90°", explanation: "Definition." },
            { q: "60° + 50° + ?", options: ["70°", "60°", "80°"], answer: "70°", explanation: "180−110=70." },

            { q: "40° + 80° + ?", options: ["60°", "50°", "70°"], answer: "60°", explanation: "180−120=60." },
            { q: "Can sides 3,4,5 form a triangle?", options: ["Yes", "No", "Maybe"], answer: "Yes", explanation: "Triangle Inequality is satisfied." },
            { q: "Can sides 2,3,6 form a triangle?", options: ["No", "Yes", "Maybe"], answer: "No", explanation: "2+3 is not greater than 6." },
            { q: "Congruent triangles have?", options: ["Same size and shape", "Same shape only", "Same perimeter"], answer: "Same size and shape", explanation: "Definition." },
            { q: "Similar triangles have?", options: ["Same shape", "Same size", "Equal perimeter"], answer: "Same shape", explanation: "Definition." },

            { q: "SSS proves?", options: ["Congruence", "Similarity only", "Nothing"], answer: "Congruence", explanation: "Three equal sides." },
            { q: "SAS proves?", options: ["Congruence", "Parallel lines", "Probability"], answer: "Congruence", explanation: "Two sides and included angle." },
            { q: "HL works only with?", options: ["Right triangles", "Scalene triangles", "Obtuse triangles"], answer: "Right triangles", explanation: "Hypotenuse-Leg theorem." },
            { q: "AA proves?", options: ["Similarity", "Congruence", "Parallel lines"], answer: "Similarity", explanation: "Angle-Angle Similarity." },
            { q: "Scale drawings use?", options: ["Similar triangles", "Congruent triangles", "Circles"], answer: "Similar triangles", explanation: "Scale drawings preserve shape." },

            { q: "45-45-90 ratio?", options: ["1:1:√2", "1:√3:2", "3:4:5"], answer: "1:1:√2", explanation: "Standard ratio." },
            { q: "30-60-90 ratio?", options: ["1:√3:2", "1:1:√2", "2:3:4"], answer: "1:√3:2", explanation: "Standard ratio." },
            { q: "If the short leg is 5, the hypotenuse is?", options: ["10", "5√2", "5√3"], answer: "10", explanation: "Twice the short leg." },
            { q: "If the legs are 8 and 8, the hypotenuse is?", options: ["8√2", "16", "8√3"], answer: "8√2", explanation: "45-45-90 triangle." },
            { q: "The longest side of a right triangle is?", options: ["Hypotenuse", "Leg", "Base"], answer: "Hypotenuse", explanation: "Definition." },

            { q: "The centroid is formed by?", options: ["Medians", "Altitudes", "Angle bisectors"], answer: "Medians", explanation: "Definition." },
            { q: "The incenter is formed by?", options: ["Angle bisectors", "Medians", "Altitudes"], answer: "Angle bisectors", explanation: "Definition." },
            { q: "The circumcenter is formed by?", options: ["Perpendicular bisectors", "Medians", "Altitudes"], answer: "Perpendicular bisectors", explanation: "Definition." },
            { q: "The orthocenter is formed by?", options: ["Altitudes", "Medians", "Angle bisectors"], answer: "Altitudes", explanation: "Definition." },
            { q: "Which center is the balance point?", options: ["Centroid", "Orthocenter", "Incenter"], answer: "Centroid", explanation: "Definition." },

            { q: "Which center is always inside the triangle?", options: ["Incenter", "Circumcenter", "Orthocenter"], answer: "Incenter", explanation: "Definition." },
            { q: "Triangles are important in?", options: ["Engineering", "Architecture", "Both"], answer: "Both", explanation: "Real-world applications." },
            { q: "The Triangle Sum Theorem is used to?", options: ["Find missing angles", "Find area", "Find perimeter"], answer: "Find missing angles", explanation: "Core application." },
            { q: "The Triangle Inequality Theorem uses?", options: ["Side lengths", "Angles", "Area"], answer: "Side lengths", explanation: "It checks if a triangle can exist." },
            { q: "Corresponding sides of similar triangles are?", options: ["Proportional", "Equal", "Perpendicular"], answer: "Proportional", explanation: "Definition." },

            { q: "Congruent triangles have corresponding angles that are?", options: ["Equal", "Supplementary", "Complementary"], answer: "Equal", explanation: "CPCTC." },
            { q: "Special right triangles help avoid repeatedly using?", options: ["The Pythagorean Theorem", "The Distance Formula", "Slope Formula"], answer: "The Pythagorean Theorem", explanation: "Known side ratios." },
            { q: "Every triangle has?", options: ["Three vertices", "Four vertices", "Five vertices"], answer: "Three vertices", explanation: "Definition." },
            { q: "Every triangle is a?", options: ["Polygon", "Circle", "Quadrilateral"], answer: "Polygon", explanation: "Definition." },
            { q: "Completing this test means?", options: ["You finished Unit 4", "You finished Geometry", "You finished all Math"], answer: "You finished Unit 4", explanation: "Congratulations!" }

        ]

    }
    ,

    "what-is-a-quadrilateral": {
        title: "What is a Quadrilateral?",
        subtitle: "Learn about four-sided polygons and their basic properties.",
        body: `

<h2>Introduction</h2>

<p>A <strong>quadrilateral</strong> is a polygon with exactly four sides.</p>

<p>Quadrilaterals are one of the most common shapes in mathematics and everyday life.</p>

<hr>

<h2>Vocabulary</h2>

<ul>

<li><strong>Quadrilateral</strong> – A four-sided polygon.</li>

<li><strong>Vertex</strong> – A corner of the polygon.</li>

<li><strong>Diagonal</strong> – A segment connecting two non-adjacent vertices.</li>

</ul>

<hr>

<h2>Properties</h2>

<ul>

<li>4 sides</li>

<li>4 vertices</li>

<li>4 interior angles</li>

<li>2 diagonals</li>

</ul>

<hr>

<h2>Interior Angle Sum</h2>

<p>The sum of the interior angles of every quadrilateral is:</p>

<div style="text-align:center;font-size:30px;font-weight:bold;">
360°
</div>

<hr>

<h2>Examples</h2>

<ul>

<li>Square</li>

<li>Rectangle</li>

<li>Rhombus</li>

<li>Parallelogram</li>

<li>Trapezoid</li>

<li>Kite</li>

</ul>

<hr>

<h2>Real World Examples</h2>

<ul>

<li>Windows</li>

<li>Doors</li>

<li>TV Screens</li>

<li>Books</li>

<li>Tables</li>

</ul>

<hr>

<h2>Summary</h2>

<p>A quadrilateral is any polygon with four sides and four angles whose interior angles total 360°.</p>

`,
        questions: [

            { q: "A quadrilateral has how many sides?", options: ["4", "3", "5"], answer: "4", explanation: "Definition." },

            { q: "A quadrilateral has how many vertices?", options: ["4", "3", "5"], answer: "4", explanation: "Each side meets at a vertex." },

            { q: "The interior angles total?", options: ["360°", "180°", "720°"], answer: "360°", explanation: "All quadrilaterals total 360°." },

            { q: "A quadrilateral has how many diagonals?", options: ["2", "1", "4"], answer: "2", explanation: "Two diagonals connect opposite vertices." },

            { q: "A square is a?", options: ["Quadrilateral", "Triangle", "Circle"], answer: "Quadrilateral", explanation: "Squares have four sides." },

            { q: "A rectangle is a?", options: ["Quadrilateral", "Triangle", "Pentagon"], answer: "Quadrilateral", explanation: "Definition." },

            { q: "A rhombus is a?", options: ["Quadrilateral", "Circle", "Hexagon"], answer: "Quadrilateral", explanation: "Definition." },

            { q: "A trapezoid has?", options: ["4 sides", "3 sides", "5 sides"], answer: "4 sides", explanation: "Definition." },

            { q: "A kite is?", options: ["A quadrilateral", "A triangle", "A circle"], answer: "A quadrilateral", explanation: "Definition." },

            { q: "Quadrilaterals belong to?", options: ["Polygons", "Circles", "Curves"], answer: "Polygons", explanation: "Definition." },

            { q: "A diagonal connects?", options: ["Opposite vertices", "Adjacent vertices", "Midpoints"], answer: "Opposite vertices", explanation: "Definition." },

            { q: "The word quadrilateral means?", options: ["Four sides", "Four circles", "Four angles only"], answer: "Four sides", explanation: "'Quad' means four." },

            { q: "Windows are often shaped like?", options: ["Rectangles", "Circles", "Triangles"], answer: "Rectangles", explanation: "Common real-world example." },

            { q: "Doors are usually?", options: ["Rectangles", "Triangles", "Circles"], answer: "Rectangles", explanation: "Common example." },

            { q: "Books are usually?", options: ["Rectangles", "Triangles", "Hexagons"], answer: "Rectangles", explanation: "Common shape." },

            { q: "The interior angle sum is useful for?", options: ["Finding missing angles", "Finding area only", "Finding volume"], answer: "Finding missing angles", explanation: "A major application." },

            { q: "Every quadrilateral has?", options: ["Four angles", "Three angles", "Five angles"], answer: "Four angles", explanation: "Definition." },

            { q: "Every quadrilateral is a?", options: ["Polygon", "Circle", "Ellipse"], answer: "Polygon", explanation: "Definition." },

            { q: "Quadrilaterals appear in?", options: ["Architecture", "Engineering", "Both"], answer: "Both", explanation: "Very common in design." },

            { q: "This lesson prepares students for?", options: ["Properties of special quadrilaterals", "Only Algebra", "Only Calculus"], answer: "Properties of special quadrilaterals", explanation: "The following lessons build on this foundation." }

        ]
    }

    ,

    "parallelograms": {
        title: "Parallelograms",
        subtitle: "Learn the core properties of parallelograms.",
        body: `

<h2>Introduction</h2>

<p>A <strong>parallelogram</strong> is a quadrilateral with two pairs of opposite sides parallel.</p>

<hr>

<h2>Key Properties</h2>

<ul>
<li>Opposite sides are parallel.</li>
<li>Opposite sides are congruent.</li>
<li>Opposite angles are congruent.</li>
<li>Consecutive angles are supplementary.</li>
<li>Diagonals bisect each other.</li>
</ul>

<hr>

<h2>Example</h2>

<p>If one angle of a parallelogram is 70°, the angle next to it is:</p>

<p><strong>180° − 70° = 110°</strong></p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Do not assume all parallelograms have right angles.</li>
<li>Rectangles are parallelograms, but not all parallelograms are rectangles.</li>
<li>Opposite angles are equal, not necessarily adjacent angles.</li>
</ul>

<hr>

<h2>Summary</h2>

<p>A parallelogram has two pairs of parallel sides and many useful angle and diagonal properties.</p>

`,
        questions: [

            { q: "A parallelogram has how many pairs of parallel sides?", options: ["2", "1", "0"], answer: "2", explanation: "A parallelogram has two pairs of opposite parallel sides." },
            { q: "Opposite sides of a parallelogram are?", options: ["Congruent", "Always different", "Curved"], answer: "Congruent", explanation: "Opposite sides are equal in length." },
            { q: "Opposite angles of a parallelogram are?", options: ["Congruent", "Supplementary", "Always 90°"], answer: "Congruent", explanation: "Opposite angles are equal." },
            { q: "Consecutive angles in a parallelogram are?", options: ["Supplementary", "Congruent", "Complementary"], answer: "Supplementary", explanation: "They add to 180°." },
            { q: "Diagonals of a parallelogram?", options: ["Bisect each other", "Are always equal", "Never intersect"], answer: "Bisect each other", explanation: "Each diagonal cuts the other in half." },

            { q: "If one angle is 70°, the adjacent angle is?", options: ["110°", "70°", "90°"], answer: "110°", explanation: "Consecutive angles are supplementary." },
            { q: "If one angle is 120°, the opposite angle is?", options: ["120°", "60°", "90°"], answer: "120°", explanation: "Opposite angles are congruent." },
            { q: "A rectangle is always a?", options: ["Parallelogram", "Trapezoid only", "Kite only"], answer: "Parallelogram", explanation: "Rectangles have two pairs of parallel sides." },
            { q: "Every parallelogram is a rectangle?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Parallelograms do not need right angles." },
            { q: "A parallelogram is a type of?", options: ["Quadrilateral", "Triangle", "Circle"], answer: "Quadrilateral", explanation: "It has four sides." },

            { q: "Opposite sides are?", options: ["Parallel", "Perpendicular", "Curved"], answer: "Parallel", explanation: "That is the defining property." },
            { q: "If adjacent angles are 80° and x, x equals?", options: ["100°", "80°", "90°"], answer: "100°", explanation: "180−80=100." },
            { q: "If one angle is 95°, the opposite angle is?", options: ["95°", "85°", "180°"], answer: "95°", explanation: "Opposite angles are congruent." },
            { q: "Parallelograms appear in?", options: ["Architecture", "Engineering", "Both"], answer: "Both", explanation: "They are common in structures and design." },
            { q: "A parallelogram must have?", options: ["Four sides", "Three sides", "Five sides"], answer: "Four sides", explanation: "It is a quadrilateral." },

            { q: "The word 'parallel' means?", options: ["Never intersecting", "Always touching", "Curved"], answer: "Never intersecting", explanation: "Parallel lines never cross." },
            { q: "The diagonals of a parallelogram cut each other?", options: ["In half", "Into thirds", "Not at all"], answer: "In half", explanation: "They bisect each other." },
            { q: "Which is a parallelogram?", options: ["Rectangle", "Circle", "Triangle"], answer: "Rectangle", explanation: "A rectangle has opposite sides parallel." },
            { q: "Parallelogram properties help solve?", options: ["Missing angles and sides", "Only volume", "Only probability"], answer: "Missing angles and sides", explanation: "The properties are useful for solving geometry problems." },
            { q: "Parallelograms are studied in?", options: ["Geometry", "Chemistry", "History"], answer: "Geometry", explanation: "They are a core geometry topic." }

        ]
    },

    "rectangles": {
        title: "Rectangles",
        subtitle: "Learn the properties of rectangles and how they relate to parallelograms.",
        body: `

<h2>Introduction</h2>

<p>A <strong>rectangle</strong> is a parallelogram with four right angles.</p>

<hr>

<h2>Key Properties</h2>

<ul>
<li>Four sides</li>
<li>Four right angles</li>
<li>Opposite sides are parallel</li>
<li>Opposite sides are congruent</li>
<li>Diagonals are congruent</li>
<li>Diagonals bisect each other</li>
</ul>

<hr>

<h2>Important Idea</h2>

<p>Every rectangle is a parallelogram, but not every parallelogram is a rectangle.</p>

<hr>

<h2>Example</h2>

<p>If a quadrilateral has four right angles, it is a rectangle.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Do not assume all parallelograms are rectangles.</li>
<li>Rectangles do not need all four sides equal.</li>
<li>A square is a special rectangle.</li>
</ul>

<hr>

<h2>Summary</h2>

<p>A rectangle is a special parallelogram with four right angles.</p>

`,
        questions: [

            { q: "A rectangle has how many right angles?", options: ["4", "2", "0"], answer: "4", explanation: "Every rectangle has four 90° angles." },
            { q: "A rectangle is a type of?", options: ["Parallelogram", "Triangle", "Circle"], answer: "Parallelogram", explanation: "It has two pairs of opposite parallel sides." },
            { q: "Opposite sides of a rectangle are?", options: ["Congruent", "Always different", "Curved"], answer: "Congruent", explanation: "Opposite sides are equal." },
            { q: "Opposite sides of a rectangle are also?", options: ["Parallel", "Perpendicular", "Random"], answer: "Parallel", explanation: "Rectangles are parallelograms." },
            { q: "Diagonals of a rectangle are?", options: ["Congruent", "Always perpendicular", "Never equal"], answer: "Congruent", explanation: "Rectangle diagonals have equal length." },

            { q: "Every rectangle is a parallelogram?", options: ["Yes", "No", "Sometimes"], answer: "Yes", explanation: "It has two pairs of parallel sides." },
            { q: "Every parallelogram is a rectangle?", options: ["No", "Yes", "Always"], answer: "No", explanation: "A parallelogram may not have right angles." },
            { q: "Every square is a rectangle?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "A square has four right angles." },
            { q: "Every rectangle is a square?", options: ["No", "Yes", "Always"], answer: "No", explanation: "A rectangle does not require all sides equal." },
            { q: "A rectangle has how many sides?", options: ["4", "3", "5"], answer: "4", explanation: "It is a quadrilateral." },

            { q: "A TV screen is often shaped like a?", options: ["Rectangle", "Triangle", "Circle"], answer: "Rectangle", explanation: "Common real-world example." },
            { q: "A door is usually a?", options: ["Rectangle", "Pentagon", "Circle"], answer: "Rectangle", explanation: "Common real-world example." },
            { q: "A rectangle's angles total?", options: ["360°", "180°", "90°"], answer: "360°", explanation: "All quadrilaterals total 360°." },
            { q: "Each rectangle angle measures?", options: ["90°", "60°", "120°"], answer: "90°", explanation: "Four right angles." },
            { q: "Rectangle diagonals bisect each other?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Rectangles are parallelograms." },

            { q: "Rectangle diagonals are equal in?", options: ["Length", "Color", "Slope always"], answer: "Length", explanation: "They are congruent." },
            { q: "Which shape is always a rectangle?", options: ["Square", "Rhombus", "Trapezoid"], answer: "Square", explanation: "Squares have four right angles." },
            { q: "Which property makes a rectangle special?", options: ["Four right angles", "One curved side", "Three sides"], answer: "Four right angles", explanation: "That separates it from general parallelograms." },
            { q: "Rectangles are used in?", options: ["Architecture", "Screens", "Both"], answer: "Both", explanation: "Rectangles are common in design." },
            { q: "Rectangles are studied in?", options: ["Geometry", "Biology", "History"], answer: "Geometry", explanation: "They are core quadrilaterals." }

        ]
    }
    ,

    "rhombuses": {
        title: "Rhombuses",
        subtitle: "Learn the properties of rhombuses and how they differ from rectangles.",
        body: `

<h2>Introduction</h2>

<p>A <strong>rhombus</strong> is a parallelogram with four congruent sides.</p>

<hr>

<h2>Key Properties</h2>

<ul>

<li>Four congruent sides</li>

<li>Opposite sides are parallel</li>

<li>Opposite angles are congruent</li>

<li>Diagonals bisect each other</li>

<li>Diagonals are perpendicular</li>

<li>Diagonals bisect opposite angles</li>

</ul>

<hr>

<h2>Important Idea</h2>

<p>Every rhombus is a parallelogram.</p>

<p>Not every parallelogram is a rhombus.</p>

<hr>

<h2>Example</h2>

<p>If all four sides are equal, the figure is a rhombus.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>A rhombus does not need four right angles.</li>

<li>Squares are rhombuses, but most rhombuses are not squares.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>A rhombus is a parallelogram with four equal sides.</p>

`,
        questions: [

            { q: "A rhombus has?", options: ["Four equal sides", "Four right angles", "Only two equal sides"], answer: "Four equal sides", explanation: "Definition." },

            { q: "A rhombus is a?", options: ["Parallelogram", "Triangle", "Circle"], answer: "Parallelogram", explanation: "Definition." },

            { q: "Opposite angles of a rhombus are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "Parallelogram property." },

            { q: "Rhombus diagonals are?", options: ["Perpendicular", "Always equal", "Parallel"], answer: "Perpendicular", explanation: "Unique rhombus property." },

            { q: "Rhombus diagonals also?", options: ["Bisect each other", "Never meet", "Are parallel"], answer: "Bisect each other", explanation: "Parallelogram property." },

            { q: "A square is always a?", options: ["Rhombus", "Trapezoid", "Kite"], answer: "Rhombus", explanation: "Squares have four equal sides." },

            { q: "Every rhombus is a square?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Right angles are not required." },

            { q: "Opposite sides are?", options: ["Parallel", "Perpendicular", "Curved"], answer: "Parallel", explanation: "Definition." },

            { q: "A rhombus has how many sides?", options: ["4", "3", "5"], answer: "4", explanation: "Quadrilateral." },

            { q: "The defining property is?", options: ["Four equal sides", "Four right angles", "Equal diagonals"], answer: "Four equal sides", explanation: "Definition." },

            { q: "Rhombuses belong to?", options: ["Geometry", "Chemistry", "History"], answer: "Geometry", explanation: "Core topic." },

            { q: "Rhombus diagonals bisect?", options: ["Opposite angles", "Opposite sides", "Nothing"], answer: "Opposite angles", explanation: "Definition." },

            { q: "Four congruent sides means?", options: ["Rhombus", "Rectangle", "Trapezoid"], answer: "Rhombus", explanation: "Definition." },

            { q: "Every rhombus has?", options: ["Opposite parallel sides", "Three sides", "One diagonal"], answer: "Opposite parallel sides", explanation: "Definition." },

            { q: "Rhombuses are used in?", options: ["Design", "Art", "Both"], answer: "Both", explanation: "Many patterns use rhombuses." },

            { q: "Rhombus angles total?", options: ["360°", "180°", "720°"], answer: "360°", explanation: "Quadrilateral." },

            { q: "Rhombus diagonals intersect?", options: ["At right angles", "Never", "Always at 45°"], answer: "At right angles", explanation: "Perpendicular diagonals." },

            { q: "A diamond playing card resembles a?", options: ["Rhombus", "Circle", "Triangle"], answer: "Rhombus", explanation: "Common example." },

            { q: "Rhombus properties help find?", options: ["Angles and side lengths", "Volume", "Probability"], answer: "Angles and side lengths", explanation: "Geometry applications." },

            { q: "Rhombuses are examples of?", options: ["Quadrilaterals", "Pentagons", "Circles"], answer: "Quadrilaterals", explanation: "Definition." }

        ]
    },

    "squares": {
        title: "Squares",
        subtitle: "Learn why squares combine the properties of rectangles and rhombuses.",
        body: `

<h2>Introduction</h2>

<p>A <strong>square</strong> is one of the most special quadrilaterals because it has the properties of both rectangles and rhombuses.</p>

<hr>

<h2>Properties</h2>

<ul>

<li>Four equal sides</li>

<li>Four right angles</li>

<li>Opposite sides parallel</li>

<li>Diagonals are congruent</li>

<li>Diagonals bisect each other</li>

<li>Diagonals are perpendicular</li>

<li>Diagonals bisect opposite angles</li>

</ul>

<hr>

<h2>Important Facts</h2>

<ul>

<li>Every square is a rectangle.</li>

<li>Every square is a rhombus.</li>

<li>Every square is a parallelogram.</li>

</ul>

<hr>

<h2>Example</h2>

<p>A chessboard square has four equal sides and four right angles.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Every square is a rectangle.</li>

<li>Not every rectangle is a square.</li>

<li>Every square is also a rhombus.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>The square is the most specialized quadrilateral because it combines multiple properties.</p>

`,
        questions: [

            { q: "A square has?", options: ["Four equal sides", "Two equal sides", "No equal sides"], answer: "Four equal sides", explanation: "Definition." },

            { q: "A square has?", options: ["Four right angles", "Two right angles", "One right angle"], answer: "Four right angles", explanation: "Definition." },

            { q: "Every square is a?", options: ["Rectangle", "Circle", "Triangle"], answer: "Rectangle", explanation: "Squares have four right angles." },

            { q: "Every square is also a?", options: ["Rhombus", "Pentagon", "Kite"], answer: "Rhombus", explanation: "Squares have four equal sides." },

            { q: "Every square is a?", options: ["Parallelogram", "Circle", "Triangle"], answer: "Parallelogram", explanation: "Opposite sides are parallel." },

            { q: "Every rectangle is a square?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Rectangles don't require equal sides." },

            { q: "Every rhombus is a square?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Rhombuses don't require right angles." },

            { q: "Square diagonals are?", options: ["Congruent", "Different lengths", "Parallel"], answer: "Congruent", explanation: "Rectangle property." },

            { q: "Square diagonals are also?", options: ["Perpendicular", "Never intersect", "Curved"], answer: "Perpendicular", explanation: "Rhombus property." },

            { q: "Square diagonals bisect?", options: ["Each other", "Nothing", "Only one side"], answer: "Each other", explanation: "Parallelogram property." },

            { q: "A square has how many sides?", options: ["4", "3", "5"], answer: "4", explanation: "Definition." },

            { q: "A square's interior angles total?", options: ["360°", "180°", "90°"], answer: "360°", explanation: "Quadrilateral." },

            { q: "A chessboard contains?", options: ["Squares", "Circles", "Triangles"], answer: "Squares", explanation: "Common example." },

            { q: "Square properties come from?", options: ["Rectangles and rhombuses", "Triangles only", "Circles"], answer: "Rectangles and rhombuses", explanation: "It combines both." },

            { q: "The most specialized quadrilateral is?", options: ["Square", "Rectangle", "Trapezoid"], answer: "Square", explanation: "It has the most properties." },

            { q: "A square belongs to?", options: ["Geometry", "History", "Chemistry"], answer: "Geometry", explanation: "Core topic." },

            { q: "Square diagonals bisect opposite?", options: ["Angles", "Sides only", "Nothing"], answer: "Angles", explanation: "Rhombus property." },

            { q: "A square is used in?", options: ["Architecture", "Engineering", "Both"], answer: "Both", explanation: "Common real-world shape." },

            { q: "Every square has parallel?", options: ["Opposite sides", "Adjacent sides", "Diagonals"], answer: "Opposite sides", explanation: "Parallelogram property." },

            { q: "Squares are?", options: ["Quadrilaterals", "Triangles", "Pentagons"], answer: "Quadrilaterals", explanation: "Definition." }

        ]
    }
    ,

    "trapezoids-and-kites": {
        title: "Trapezoids and Kites",
        subtitle: "Learn the properties of trapezoids and kites.",
        body: `

<h2>Introduction</h2>

<p>Not every quadrilateral has two pairs of parallel sides. Two important special quadrilaterals are <strong>trapezoids</strong> and <strong>kites</strong>.</p>

<hr>

<h2>Trapezoid</h2>

<p>A trapezoid has <strong>exactly one pair of parallel sides.</strong></p>

<ul>

<li>One pair of parallel sides</li>

<li>Two non-parallel sides</li>

<li>The parallel sides are called <strong>bases</strong></li>

<li>The non-parallel sides are called <strong>legs</strong></li>

</ul>

<hr>

<h2>Isosceles Trapezoid</h2>

<ul>

<li>Legs are congruent</li>

<li>Base angles are congruent</li>

<li>Diagonals are congruent</li>

</ul>

<hr>

<h2>Kite</h2>

<p>A kite has <strong>two pairs of adjacent congruent sides.</strong></p>

<ul>

<li>Two pairs of adjacent equal sides</li>

<li>One pair of opposite angles congruent</li>

<li>Diagonals are perpendicular</li>

<li>One diagonal bisects the other</li>

</ul>

<hr>

<h2>Examples</h2>

<p>A traditional flying kite is shaped like a mathematical kite.</p>

<p>Many roof designs use trapezoids.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>A trapezoid has only one pair of parallel sides.</li>

<li>A kite does not require any parallel sides.</li>

<li>Do not confuse adjacent sides with opposite sides.</li>

</ul>

<hr>

<h2>Summary</h2>

<table>

<tr>

<th>Shape</th>

<th>Main Property</th>

</tr>

<tr>

<td>Trapezoid</td>

<td>One pair of parallel sides</td>

</tr>

<tr>

<td>Kite</td>

<td>Two pairs of adjacent congruent sides</td>

</tr>

</table>

`,
        questions: [

            { q: "A trapezoid has?", options: ["One pair of parallel sides", "Two pairs of parallel sides", "No parallel sides"], answer: "One pair of parallel sides", explanation: "Definition." },

            { q: "The parallel sides of a trapezoid are called?", options: ["Bases", "Legs", "Diagonals"], answer: "Bases", explanation: "Definition." },

            { q: "The non-parallel sides are called?", options: ["Legs", "Bases", "Edges"], answer: "Legs", explanation: "Definition." },

            { q: "An isosceles trapezoid has?", options: ["Congruent legs", "Four equal sides", "Four right angles"], answer: "Congruent legs", explanation: "Definition." },

            { q: "An isosceles trapezoid has congruent?", options: ["Base angles", "All angles", "Opposite sides"], answer: "Base angles", explanation: "Definition." },

            { q: "A kite has?", options: ["Two pairs of adjacent congruent sides", "Four equal sides", "Two parallel sides"], answer: "Two pairs of adjacent congruent sides", explanation: "Definition." },

            { q: "A kite's diagonals are?", options: ["Perpendicular", "Parallel", "Congruent"], answer: "Perpendicular", explanation: "Definition." },

            { q: "A kite is named after?", options: ["The flying toy", "A bird", "A square"], answer: "The flying toy", explanation: "Its shape resembles the toy." },

            { q: "A trapezoid is a?", options: ["Quadrilateral", "Triangle", "Circle"], answer: "Quadrilateral", explanation: "Definition." },

            { q: "A kite is a?", options: ["Quadrilateral", "Pentagon", "Hexagon"], answer: "Quadrilateral", explanation: "Definition." },

            { q: "A trapezoid has how many sides?", options: ["4", "3", "5"], answer: "4", explanation: "Quadrilateral." },

            { q: "A kite has how many sides?", options: ["4", "3", "5"], answer: "4", explanation: "Quadrilateral." },

            { q: "The diagonals of a kite intersect at?", options: ["90°", "45°", "180°"], answer: "90°", explanation: "They are perpendicular." },

            { q: "An isosceles trapezoid has congruent?", options: ["Diagonals", "Legs only", "Bases"], answer: "Diagonals", explanation: "Special property." },

            { q: "Flying kites are examples of?", options: ["Kites", "Rhombuses", "Rectangles"], answer: "Kites", explanation: "Common example." },

            { q: "Roofs sometimes use?", options: ["Trapezoids", "Only circles", "Only triangles"], answer: "Trapezoids", explanation: "Common application." },

            { q: "A trapezoid belongs to?", options: ["Geometry", "Chemistry", "Biology"], answer: "Geometry", explanation: "Core Geometry topic." },

            { q: "A kite belongs to?", options: ["Geometry", "History", "Physics"], answer: "Geometry", explanation: "Core Geometry topic." },

            { q: "Kites require?", options: ["Adjacent equal sides", "Opposite equal sides only", "Parallel diagonals"], answer: "Adjacent equal sides", explanation: "Definition." },

            { q: "Understanding these shapes prepares you for?", options: ["Area and coordinate geometry", "Only algebra", "Only probability"], answer: "Area and coordinate geometry", explanation: "These shapes are used throughout geometry." }

        ]
    },

    "quadrilateral-properties": {
        title: "Properties of Quadrilaterals",
        subtitle: "Compare the properties of all major quadrilaterals.",
        body: `

<h2>Introduction</h2>

<p>Now that you've learned each quadrilateral individually, it's time to compare them.</p>

<hr>

<h2>Comparison Table</h2>

<table border="1" cellpadding="8">

<tr>

<th>Shape</th>

<th>Parallel Sides</th>

<th>Equal Sides</th>

<th>Right Angles</th>

</tr>

<tr>

<td>Parallelogram</td>

<td>2 pairs</td>

<td>Opposite</td>

<td>No</td>

</tr>

<tr>

<td>Rectangle</td>

<td>2 pairs</td>

<td>Opposite</td>

<td>Yes</td>

</tr>

<tr>

<td>Rhombus</td>

<td>2 pairs</td>

<td>All</td>

<td>No</td>

</tr>

<tr>

<td>Square</td>

<td>2 pairs</td>

<td>All</td>

<td>Yes</td>

</tr>

<tr>

<td>Trapezoid</td>

<td>1 pair</td>

<td>Usually none</td>

<td>No</td>

</tr>

<tr>

<td>Kite</td>

<td>None required</td>

<td>Adjacent</td>

<td>No</td>

</tr>

</table>

<hr>

<h2>Remember</h2>

<ul>

<li>Every square is a rectangle.</li>

<li>Every square is a rhombus.</li>

<li>Every rectangle is a parallelogram.</li>

<li>Every rhombus is a parallelogram.</li>

<li>Not every parallelogram is a rectangle.</li>

<li>Not every rectangle is a square.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Knowing how these quadrilaterals are related helps solve many geometry problems.</p>

`,
        questions: [

            { q: "Which quadrilateral has four right angles AND four equal sides?", options: ["Square", "Rectangle", "Rhombus"], answer: "Square", explanation: "Definition." },

            { q: "Every square is a?", options: ["Rectangle and Rhombus", "Only Rectangle", "Only Rhombus"], answer: "Rectangle and Rhombus", explanation: "It satisfies both definitions." },

            { q: "Every rectangle is a?", options: ["Parallelogram", "Square", "Kite"], answer: "Parallelogram", explanation: "Definition." },

            { q: "Every rhombus is a?", options: ["Parallelogram", "Rectangle", "Trapezoid"], answer: "Parallelogram", explanation: "Definition." },

            { q: "Not every rectangle is a?", options: ["Square", "Parallelogram", "Quadrilateral"], answer: "Square", explanation: "Equal sides are not required." },

            { q: "Not every parallelogram is a?", options: ["Rectangle", "Quadrilateral", "Polygon"], answer: "Rectangle", explanation: "Right angles are not required." },

            { q: "A square has how many pairs of parallel sides?", options: ["2", "1", "0"], answer: "2", explanation: "Opposite sides are parallel." },

            { q: "Which shape has only one pair of parallel sides?", options: ["Trapezoid", "Rectangle", "Rhombus"], answer: "Trapezoid", explanation: "Definition." },

            { q: "Which shape has adjacent congruent sides?", options: ["Kite", "Rectangle", "Trapezoid"], answer: "Kite", explanation: "Definition." },

            { q: "All quadrilaterals have interior angles totaling?", options: ["360°", "180°", "720°"], answer: "360°", explanation: "Core property." }

        ]

    }
    ,

    "unit5-review": {
        title: "Unit 5 Review",
        subtitle: "Review everything you've learned about quadrilaterals.",

        body: `

<h2>Congratulations!</h2>

<p>You have completed Unit 5.</p>

<hr>

<h2>Lessons Covered</h2>

<ol>

<li>What is a Quadrilateral?</li>

<li>Parallelograms</li>

<li>Rectangles</li>

<li>Rhombuses</li>

<li>Squares</li>

<li>Trapezoids & Kites</li>

<li>Properties of Quadrilaterals</li>

</ol>

<hr>

<h2>Remember These Important Facts</h2>

<table>

<tr>
<th>Shape</th>
<th>Key Property</th>
</tr>

<tr>
<td>Parallelogram</td>
<td>Two pairs of parallel sides</td>
</tr>

<tr>
<td>Rectangle</td>
<td>Four right angles</td>
</tr>

<tr>
<td>Rhombus</td>
<td>Four equal sides</td>
</tr>

<tr>
<td>Square</td>
<td>Four equal sides and four right angles</td>
</tr>

<tr>
<td>Trapezoid</td>
<td>One pair of parallel sides</td>
</tr>

<tr>
<td>Kite</td>
<td>Two pairs of adjacent congruent sides</td>
</tr>

</table>

<hr>

<h2>Ready?</h2>

<p>The next page is your Unit 5 Test.</p>

`,

        questions: [

            {
                q: "Are you ready for the Unit 5 Test?",
                options: [
                    "Yes!",
                    "I want to review again."
                ],
                answer: "Yes!",
                explanation: "Good luck!"
            }

        ]

    },

    "unit5-test": {

        title: "Unit 5 Test",

        subtitle: "Quadrilaterals Assessment",

        body: `

<h2>Unit 5 Test</h2>

<p>This assessment covers every lesson from Unit 5.</p>

<h3>Topics</h3>

<ul>

<li>Quadrilaterals</li>

<li>Parallelograms</li>

<li>Rectangles</li>

<li>Rhombuses</li>

<li>Squares</li>

<li>Trapezoids</li>

<li>Kites</li>

</ul>

<p><strong>40 Questions</strong></p>

`,

        questions: [

            { q: "A quadrilateral has?", options: ["4 sides", "3 sides", "5 sides"], answer: "4 sides", explanation: "Definition." },
            { q: "Interior angles of a quadrilateral total?", options: ["360°", "180°", "720°"], answer: "360°", explanation: "Core property." },
            { q: "A parallelogram has?", options: ["2 pairs of parallel sides", "1 pair", "No parallel sides"], answer: "2 pairs of parallel sides", explanation: "Definition." },
            { q: "Opposite angles of a parallelogram are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "Property." },
            { q: "Adjacent angles in a parallelogram are?", options: ["Supplementary", "Congruent", "Equal"], answer: "Supplementary", explanation: "180° total." },

            { q: "A rectangle has?", options: ["4 right angles", "4 equal sides", "No parallel sides"], answer: "4 right angles", explanation: "Definition." },
            { q: "Rectangle diagonals are?", options: ["Congruent", "Perpendicular only", "Parallel"], answer: "Congruent", explanation: "Property." },
            { q: "A rhombus has?", options: ["4 equal sides", "4 right angles", "2 equal sides"], answer: "4 equal sides", explanation: "Definition." },
            { q: "Rhombus diagonals are?", options: ["Perpendicular", "Always congruent", "Parallel"], answer: "Perpendicular", explanation: "Property." },
            { q: "A square is both a?", options: ["Rectangle and Rhombus", "Rectangle only", "Rhombus only"], answer: "Rectangle and Rhombus", explanation: "Definition." },

            { q: "Every square is a parallelogram?", options: ["Yes", "No", "Sometimes"], answer: "Yes", explanation: "Definition." },
            { q: "Every rectangle is a square?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Equal sides aren't required." },
            { q: "Every rhombus is a square?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Right angles aren't required." },
            { q: "A trapezoid has?", options: ["1 pair of parallel sides", "2 pairs", "No parallel sides"], answer: "1 pair of parallel sides", explanation: "Definition." },
            { q: "The parallel sides of a trapezoid are called?", options: ["Bases", "Legs", "Edges"], answer: "Bases", explanation: "Definition." },

            { q: "A kite has?", options: ["Adjacent congruent sides", "Four right angles", "Parallel diagonals"], answer: "Adjacent congruent sides", explanation: "Definition." },
            { q: "Kite diagonals are?", options: ["Perpendicular", "Congruent", "Parallel"], answer: "Perpendicular", explanation: "Property." },
            { q: "A square has?", options: ["4 equal sides and 4 right angles", "Only right angles", "Only equal sides"], answer: "4 equal sides and 4 right angles", explanation: "Definition." },
            { q: "A rectangle is a?", options: ["Parallelogram", "Triangle", "Circle"], answer: "Parallelogram", explanation: "Definition." },
            { q: "A rhombus is a?", options: ["Parallelogram", "Trapezoid", "Kite"], answer: "Parallelogram", explanation: "Definition." },

            { q: "Opposite sides of a rectangle are?", options: ["Parallel", "Perpendicular", "Curved"], answer: "Parallel", explanation: "Property." },
            { q: "Opposite sides of a rhombus are?", options: ["Parallel", "Perpendicular", "Curved"], answer: "Parallel", explanation: "Property." },
            { q: "Parallelogram diagonals?", options: ["Bisect each other", "Never intersect", "Are equal"], answer: "Bisect each other", explanation: "Property." },
            { q: "Rectangle diagonals also?", options: ["Bisect each other", "Never intersect", "Perpendicular"], answer: "Bisect each other", explanation: "Property." },
            { q: "Square diagonals are?", options: ["Congruent and perpendicular", "Only congruent", "Only perpendicular"], answer: "Congruent and perpendicular", explanation: "Property." },

            { q: "Quadrilaterals belong to?", options: ["Polygons", "Circles", "Curves"], answer: "Polygons", explanation: "Definition." },
            { q: "Every quadrilateral has?", options: ["4 vertices", "3 vertices", "5 vertices"], answer: "4 vertices", explanation: "Definition." },
            { q: "Every quadrilateral has?", options: ["2 diagonals", "1 diagonal", "4 diagonals"], answer: "2 diagonals", explanation: "Property." },
            { q: "Doors are usually?", options: ["Rectangles", "Triangles", "Circles"], answer: "Rectangles", explanation: "Real-world example." },
            { q: "TV screens are usually?", options: ["Rectangles", "Pentagons", "Hexagons"], answer: "Rectangles", explanation: "Real-world example." },

            { q: "Flying kites resemble?", options: ["Kites", "Rhombuses", "Squares"], answer: "Kites", explanation: "Common example." },
            { q: "A square has how many right angles?", options: ["4", "2", "1"], answer: "4", explanation: "Definition." },
            { q: "A rhombus must have?", options: ["Equal sides", "Right angles", "Equal diagonals"], answer: "Equal sides", explanation: "Definition." },
            { q: "A rectangle must have?", options: ["Right angles", "Equal sides", "Perpendicular diagonals"], answer: "Right angles", explanation: "Definition." },
            { q: "Which shape has one pair of parallel sides?", options: ["Trapezoid", "Square", "Rectangle"], answer: "Trapezoid", explanation: "Definition." },

            { q: "Which shape has adjacent equal sides?", options: ["Kite", "Rectangle", "Parallelogram"], answer: "Kite", explanation: "Definition." },
            { q: "Geometry studies?", options: ["Shapes", "Chemistry", "Biology"], answer: "Shapes", explanation: "Definition." },
            { q: "The most specialized quadrilateral is?", options: ["Square", "Rectangle", "Trapezoid"], answer: "Square", explanation: "It has the most properties." },
            { q: "Understanding quadrilaterals prepares students for?", options: ["Area, proofs and coordinate geometry", "Only algebra", "Only probability"], answer: "Area, proofs and coordinate geometry", explanation: "These ideas are used throughout Geometry." },
            { q: "Completing this test means?", options: ["Unit 5 Complete", "Geometry Complete", "Math Complete"], answer: "Unit 5 Complete", explanation: "Congratulations!" }

        ]

    }


    ,

    "what-is-a-circle": {

        title: "What is a Circle?",

        subtitle: "Learn the basic definition and properties of circles.",

        body: `

<h2>Introduction</h2>

<p>A <strong>circle</strong> is a set of all points that are the same distance from a fixed point called the center.</p>

<hr>

<h2>Vocabulary</h2>

<ul>

<li><strong>Center</strong> – The middle of the circle.</li>

<li><strong>Radius</strong> – Distance from the center to the circle.</li>

<li><strong>Diameter</strong> – Distance across the circle through the center.</li>

<li><strong>Circumference</strong> – Distance around the circle.</li>

</ul>

<hr>

<h2>Important Facts</h2>

<ul>

<li>Every radius is the same length.</li>

<li>The diameter is twice the radius.</li>

<li>The radius is half the diameter.</li>

</ul>

<hr>

<h2>Real World Examples</h2>

<ul>

<li>Coins</li>

<li>Clock faces</li>

<li>Pizza</li>

<li>Wheels</li>

<li>Ferris wheels</li>

</ul>

<hr>

<h2>Summary</h2>

<p>A circle is made of all points equally distant from its center.</p>

`,

        questions: [

            { q: "A circle is centered around a?", options: ["Center", "Vertex", "Angle"], answer: "Center", explanation: "Definition." },
            { q: "The distance from center to circle is?", options: ["Radius", "Diameter", "Arc"], answer: "Radius", explanation: "Definition." },
            { q: "Distance across through the center?", options: ["Diameter", "Radius", "Chord"], answer: "Diameter", explanation: "Definition." },
            { q: "Distance around a circle?", options: ["Circumference", "Area", "Arc"], answer: "Circumference", explanation: "Definition." },
            { q: "Diameter equals?", options: ["2 × Radius", "Radius ÷2", "Radius²"], answer: "2 × Radius", explanation: "Definition." },
            { q: "Radius equals?", options: ["Diameter ÷2", "Diameter ×2", "Diameter²"], answer: "Diameter ÷2", explanation: "Definition." },
            { q: "All radii are?", options: ["Equal", "Different", "Parallel"], answer: "Equal", explanation: "Definition." },
            { q: "Pizza is an example of?", options: ["Circle", "Triangle", "Square"], answer: "Circle", explanation: "Real world." },
            { q: "Coins are usually?", options: ["Circles", "Squares", "Triangles"], answer: "Circles", explanation: "Real world." },
            { q: "Circle belongs to?", options: ["Geometry", "Chemistry", "History"], answer: "Geometry", explanation: "Definition." }

        ]

    },

    "parts-of-a-circle": {

        title: "Parts of a Circle",

        subtitle: "Learn the important parts of every circle.",

        body: `

<h2>Vocabulary</h2>

<ul>

<li>Center</li>

<li>Radius</li>

<li>Diameter</li>

<li>Chord</li>

<li>Arc</li>

<li>Sector</li>

<li>Tangent</li>

<li>Secant</li>

</ul>

<hr>

<h2>Definitions</h2>

<p><strong>Chord</strong> – Segment connecting two points on a circle.</p>

<p><strong>Arc</strong> – Part of the circle.</p>

<p><strong>Sector</strong> – Region enclosed by two radii and an arc.</p>

<p><strong>Tangent</strong> – Touches the circle once.</p>

<p><strong>Secant</strong> – Passes through the circle twice.</p>

<hr>

<h2>Summary</h2>

<p>These terms will appear throughout geometry.</p>

`,

        questions: [

            { q: "A chord connects?", options: ["Two points on a circle", "Center to edge", "Two centers"], answer: "Two points on a circle", explanation: "Definition." },
            { q: "An arc is?", options: ["Part of a circle", "Diameter", "Radius"], answer: "Part of a circle", explanation: "Definition." },
            { q: "A tangent touches?", options: ["One point", "Two points", "Three points"], answer: "One point", explanation: "Definition." },
            { q: "A secant intersects?", options: ["Two points", "One point", "Zero points"], answer: "Two points", explanation: "Definition." },
            { q: "A sector is formed by?", options: ["Two radii and an arc", "Two diameters", "Two tangents"], answer: "Two radii and an arc", explanation: "Definition." },
            { q: "Largest chord?", options: ["Diameter", "Radius", "Arc"], answer: "Diameter", explanation: "Definition." },
            { q: "A diameter is also a?", options: ["Chord", "Arc", "Sector"], answer: "Chord", explanation: "Every diameter is a chord." },
            { q: "Radius starts from?", options: ["Center", "Circumference", "Arc"], answer: "Center", explanation: "Definition." },
            { q: "Tangent is?", options: ["Perpendicular to radius", "Parallel to radius", "Equal to diameter"], answer: "Perpendicular to radius", explanation: "Key property." },
            { q: "These terms belong to?", options: ["Geometry", "Physics", "Biology"], answer: "Geometry", explanation: "Definition." }

        ]

    },

    "circumference": {

        title: "Circumference",

        subtitle: "Learn how to calculate the distance around a circle.",

        body: `

<h2>Formula</h2>

<p><strong>C = πd</strong></p>

<p>or</p>

<p><strong>C = 2πr</strong></p>

<hr>

<h2>Examples</h2>

<p>Radius = 5</p>

<p>C = 2π(5)</p>

<p>C = 10π</p>

<hr>

<p>Diameter = 12</p>

<p>C = 12π</p>

<hr>

<h2>Remember</h2>

<ul>

<li>Use radius OR diameter.</li>

<li>π ≈ 3.14</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Circumference is the distance around a circle.</p>

`,

        questions: [

            { q: "Circumference formula?", options: ["2πr", "πr²", "bh"], answer: "2πr", explanation: "Definition." },
            { q: "Another circumference formula?", options: ["πd", "πr²", "2bh"], answer: "πd", explanation: "Definition." },
            { q: "Radius=5, circumference?", options: ["10π", "25π", "5π"], answer: "10π", explanation: "2πr." },
            { q: "Diameter=8, circumference?", options: ["8π", "16π", "4π"], answer: "8π", explanation: "πd." },
            { q: "Circumference measures?", options: ["Distance around", "Area", "Radius"], answer: "Distance around", explanation: "Definition." },
            { q: "π is about?", options: ["3.14", "2.14", "4.13"], answer: "3.14", explanation: "Approximation." },
            { q: "Diameter=20, circumference?", options: ["20π", "10π", "40π"], answer: "20π", explanation: "πd." },
            { q: "Radius=9, circumference?", options: ["18π", "9π", "81π"], answer: "18π", explanation: "2πr." },
            { q: "Circumference belongs to?", options: ["Circles", "Triangles", "Squares"], answer: "Circles", explanation: "Definition." },
            { q: "Formula uses?", options: ["Radius or Diameter", "Only Area", "Only Angles"], answer: "Radius or Diameter", explanation: "Either formula works." }

        ]

    }
    ,

    "area-of-circles": {
        title: "Area of Circles",
        subtitle: "Learn how to calculate the space inside a circle.",
        body: `

<h2>Introduction</h2>

<p>The <strong>area</strong> of a circle measures the amount of space inside the circle.</p>

<hr>

<h2>Formula</h2>

<p style="font-size:28px;"><strong>A = πr²</strong></p>

<p><strong>r</strong> means radius.</p>

<hr>

<h2>Example 1</h2>

<p>Radius = 4</p>

<p>A = π(4²)</p>

<p>A = 16π</p>

<hr>

<h2>Example 2</h2>

<p>Radius = 7</p>

<p>A = π(7²)</p>

<p>A = 49π</p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Do not use diameter in the area formula.</li>
<li>Always square the radius.</li>
<li>Area uses square units.</li>
</ul>

<hr>

<h2>Summary</h2>

<p>The area of a circle is found by multiplying π by the radius squared.</p>

`,
        questions: [
            { q: "Area of a circle measures?", options: ["Space inside", "Distance around", "Diameter"], answer: "Space inside", explanation: "Area measures the inside of a figure." },
            { q: "Circle area formula?", options: ["πr²", "2πr", "πd"], answer: "πr²", explanation: "The area formula is A=πr²." },
            { q: "If radius is 4, area is?", options: ["16π", "8π", "4π"], answer: "16π", explanation: "4²=16." },
            { q: "If radius is 7, area is?", options: ["49π", "14π", "7π"], answer: "49π", explanation: "7²=49." },
            { q: "Area uses?", options: ["Square units", "Linear units", "Degrees"], answer: "Square units", explanation: "Area is measured in units squared." },
            { q: "If radius is 10, area is?", options: ["100π", "20π", "10π"], answer: "100π", explanation: "10²=100." },
            { q: "If diameter is 12, radius is?", options: ["6", "12", "24"], answer: "6", explanation: "Radius is half the diameter." },
            { q: "If diameter is 12, area is?", options: ["36π", "12π", "144π"], answer: "36π", explanation: "Radius is 6, so area is 36π." },
            { q: "Do you square the radius?", options: ["Yes", "No", "Sometimes"], answer: "Yes", explanation: "The formula uses r²." },
            { q: "Area belongs to?", options: ["Geometry", "Grammar", "Biology"], answer: "Geometry", explanation: "Area is a geometry concept." }
        ]
    },

    "arcs-and-chords-core": {
        title: "Arcs and Chords",
        subtitle: "Learn the basic relationship between arcs and chords.",
        body: `

<h2>Introduction</h2>

<p>An <strong>arc</strong> is part of the circle's curved edge.</p>

<p>A <strong>chord</strong> is a segment that connects two points on the circle.</p>

<hr>

<h2>Types of Arcs</h2>

<ul>
<li><strong>Minor Arc</strong> – Less than 180°</li>
<li><strong>Major Arc</strong> – Greater than 180°</li>
<li><strong>Semicircle</strong> – Exactly 180°</li>
</ul>

<hr>

<h2>Important Facts</h2>

<ul>
<li>The diameter is the longest chord.</li>
<li>Equal chords create equal arcs.</li>
<li>Larger chords create larger arcs.</li>
</ul>

<hr>

<h2>Example</h2>

<p>If a central angle is 80°, the intercepted minor arc is also 80°.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Arcs are curved.</li>
<li>Chords are straight.</li>
<li>Do not confuse a chord with a radius.</li>
</ul>

<hr>

<h2>Summary</h2>

<p>Arcs are curved parts of circles. Chords are straight segments inside circles.</p>

`,
        questions: [
            { q: "An arc is?", options: ["Part of a circle", "A straight line", "A radius"], answer: "Part of a circle", explanation: "An arc is curved." },
            { q: "A chord connects?", options: ["Two points on a circle", "Center to circle", "Two centers"], answer: "Two points on a circle", explanation: "Definition of chord." },
            { q: "The longest chord is?", options: ["Diameter", "Radius", "Arc"], answer: "Diameter", explanation: "The diameter is the longest chord." },
            { q: "A minor arc is?", options: ["Less than 180°", "Exactly 180°", "More than 180°"], answer: "Less than 180°", explanation: "Definition." },
            { q: "A major arc is?", options: ["More than 180°", "Less than 180°", "Exactly 90°"], answer: "More than 180°", explanation: "Definition." },
            { q: "A semicircle is?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Half a circle is 180°." },
            { q: "Equal chords create?", options: ["Equal arcs", "Different arcs", "Tangents"], answer: "Equal arcs", explanation: "Equal chords intercept equal arcs." },
            { q: "Arcs are?", options: ["Curved", "Straight", "Flat"], answer: "Curved", explanation: "Arcs follow the circle." },
            { q: "Chords are?", options: ["Straight", "Curved", "Circular"], answer: "Straight", explanation: "Chords are line segments." },
            { q: "Arcs and chords belong to?", options: ["Circles", "Triangles", "Quadrilaterals"], answer: "Circles", explanation: "They are circle parts." }
        ]
    },

    "central-and-inscribed-angles": {
        title: "Central and Inscribed Angles",
        subtitle: "Understand two important angle types inside circles.",
        body: `

<h2>Central Angles</h2>

<p>A <strong>central angle</strong> has its vertex at the center of the circle.</p>

<p>The measure of a central angle equals the measure of its intercepted arc.</p>

<hr>

<h2>Inscribed Angles</h2>

<p>An <strong>inscribed angle</strong> has its vertex on the circle.</p>

<p>The measure of an inscribed angle is half the measure of its intercepted arc.</p>

<hr>

<h2>Example 1</h2>

<p>If a central angle intercepts a 100° arc, the central angle is 100°.</p>

<hr>

<h2>Example 2</h2>

<p>If an inscribed angle intercepts a 100° arc, the inscribed angle is 50°.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>
<li>Central angle = arc.</li>
<li>Inscribed angle = half the arc.</li>
<li>Do not mix the two rules.</li>
</ul>

`,
        questions: [
            { q: "A central angle has vertex at?", options: ["Center", "Circle edge", "Outside"], answer: "Center", explanation: "Definition." },
            { q: "An inscribed angle has vertex?", options: ["On the circle", "At center", "Outside only"], answer: "On the circle", explanation: "Definition." },
            { q: "Central angle equals?", options: ["Intercepted arc", "Half the arc", "Double the arc"], answer: "Intercepted arc", explanation: "Central angle measure equals arc measure." },
            { q: "Inscribed angle equals?", options: ["Half the arc", "The arc", "Double the arc"], answer: "Half the arc", explanation: "Inscribed angle is half its intercepted arc." },
            { q: "If central angle intercepts 80° arc, angle is?", options: ["80°", "40°", "160°"], answer: "80°", explanation: "Central equals arc." },
            { q: "If inscribed angle intercepts 80° arc, angle is?", options: ["40°", "80°", "160°"], answer: "40°", explanation: "Inscribed is half." },
            { q: "If inscribed angle is 30°, intercepted arc is?", options: ["60°", "30°", "15°"], answer: "60°", explanation: "Arc is twice the inscribed angle." },
            { q: "If central angle is 120°, arc is?", options: ["120°", "60°", "240°"], answer: "120°", explanation: "Central angle equals arc." },
            { q: "Circle angle rules help solve?", options: ["Missing angle problems", "Volume only", "Slope only"], answer: "Missing angle problems", explanation: "These rules find unknown measures." },
            { q: "These angles belong to?", options: ["Circle geometry", "Triangle geometry", "Algebra"], answer: "Circle geometry", explanation: "They are circle concepts." }
        ]
    }

    ,

    "tangents": {

        title: "Tangents",

        subtitle: "Learn the properties of tangent lines and circles.",

        body: `

<h2>Introduction</h2>

<p>A <strong>tangent</strong> is a line that touches a circle at exactly one point.</p>

<hr>

<h2>Key Properties</h2>

<ul>

<li>A tangent touches the circle once.</li>

<li>A tangent is perpendicular to the radius at the point of tangency.</li>

<li>Tangent segments from the same external point are congruent.</li>

</ul>

<hr>

<h2>Example</h2>

<p>If the radius meets a tangent, they form a <strong>90° angle.</strong></p>

<hr>

<h2>Real World Examples</h2>

<ul>

<li>Car tires touching the road</li>

<li>Pool balls touching</li>

<li>Gear wheels</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Tangents touch circles once and form right angles with the radius.</p>

`,

        questions: [

            { q: "A tangent touches a circle at?", options: ["One point", "Two points", "Three points"], answer: "One point", explanation: "Definition." },
            { q: "A tangent is perpendicular to the?", options: ["Radius", "Diameter", "Arc"], answer: "Radius", explanation: "Key property." },
            { q: "Radius and tangent form?", options: ["90°", "45°", "180°"], answer: "90°", explanation: "Always." },
            { q: "Two tangent segments from one external point are?", options: ["Congruent", "Parallel", "Different"], answer: "Congruent", explanation: "Property." },
            { q: "A tangent belongs to?", options: ["Circle Geometry", "Triangle Geometry", "Algebra"], answer: "Circle Geometry", explanation: "Definition." },
            { q: "A tangent intersects a circle?", options: ["Once", "Twice", "Never"], answer: "Once", explanation: "Definition." },
            { q: "A secant intersects?", options: ["Twice", "Once", "Never"], answer: "Twice", explanation: "Definition." },
            { q: "Car tires touching the road model?", options: ["Tangents", "Secants", "Chords"], answer: "Tangents", explanation: "Real-world example." },
            { q: "Pool balls touching each other show?", options: ["Tangency", "Diameter", "Radius"], answer: "Tangency", explanation: "Touching at one point." },
            { q: "Tangents are important in?", options: ["Engineering", "Architecture", "Both"], answer: "Both", explanation: "Used in design and manufacturing." }

        ]

    },

    "unit6-review": {

        title: "Unit 6 Review",

        subtitle: "Review everything about circles.",

        body: `

<h2>Congratulations!</h2>

<p>You have completed Unit 6.</p>

<hr>

<h2>Lessons Covered</h2>

<ol>

<li>What is a Circle?</li>

<li>Parts of a Circle</li>

<li>Circumference</li>

<li>Area of Circles</li>

<li>Arcs & Chords</li>

<li>Central & Inscribed Angles</li>

<li>Tangents</li>

</ol>

<hr>

<h2>Important Formulas</h2>

<ul>

<li>C = πd</li>

<li>C = 2πr</li>

<li>A = πr²</li>

</ul>

<hr>

<h2>Remember</h2>

<ul>

<li>Diameter = 2 × Radius</li>

<li>Radius = Diameter ÷ 2</li>

<li>Central Angle = Arc</li>

<li>Inscribed Angle = Half the Arc</li>

<li>Tangent ⟂ Radius</li>

</ul>

<hr>

<p>The next page is your Unit 6 Test.</p>

`,

        questions: [

            {
                q: "Ready for the Unit 6 Test?",
                options: [
                    "Yes!",
                    "I want to review again."
                ],
                answer: "Yes!",
                explanation: "Good luck!"
            }

        ]

    },

    "unit6-test": {

        title: "Unit 6 Test",

        subtitle: "Circles Assessment",

        body: `

<h2>Unit 6 Test</h2>

<p>This assessment covers every lesson from Unit 6.</p>

<p><strong>40 Questions</strong></p>

`,

        questions: [

            { q: "A circle is defined by?", options: ["Points equally distant from the center", "Four sides", "Three angles"], answer: "Points equally distant from the center", explanation: "Definition." },
            { q: "Distance from center to circle?", options: ["Radius", "Diameter", "Chord"], answer: "Radius", explanation: "Definition." },
            { q: "Distance across the center?", options: ["Diameter", "Radius", "Arc"], answer: "Diameter", explanation: "Definition." },
            { q: "Distance around a circle?", options: ["Circumference", "Area", "Sector"], answer: "Circumference", explanation: "Definition." },
            { q: "Diameter equals?", options: ["2r", "r²", "πr"], answer: "2r", explanation: "Definition." },

            { q: "Radius equals?", options: ["d÷2", "2d", "πd"], answer: "d÷2", explanation: "Definition." },
            { q: "Circumference formula?", options: ["2πr", "πr²", "bh"], answer: "2πr", explanation: "Definition." },
            { q: "Area formula?", options: ["πr²", "πd", "2πr"], answer: "πr²", explanation: "Definition." },
            { q: "Radius=6. Area?", options: ["36π", "12π", "6π"], answer: "36π", explanation: "6²=36." },
            { q: "Radius=5. Circumference?", options: ["10π", "25π", "5π"], answer: "10π", explanation: "2πr." },

            { q: "Largest chord?", options: ["Diameter", "Radius", "Arc"], answer: "Diameter", explanation: "Definition." },
            { q: "Minor arc?", options: ["<180°", "180°", ">180°"], answer: "<180°", explanation: "Definition." },
            { q: "Major arc?", options: [">180°", "180°", "<180°"], answer: ">180°", explanation: "Definition." },
            { q: "Semicircle measures?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Definition." },
            { q: "Equal chords create?", options: ["Equal arcs", "Different arcs", "Tangents"], answer: "Equal arcs", explanation: "Property." },

            { q: "Central angle equals?", options: ["Intercepted arc", "Half the arc", "Twice the arc"], answer: "Intercepted arc", explanation: "Definition." },
            { q: "Inscribed angle equals?", options: ["Half the arc", "The arc", "Twice the arc"], answer: "Half the arc", explanation: "Definition." },
            { q: "Central angle of 80° intercepts?", options: ["80° arc", "40° arc", "160° arc"], answer: "80° arc", explanation: "Definition." },
            { q: "Inscribed angle intercepting 80° arc?", options: ["40°", "80°", "160°"], answer: "40°", explanation: "Definition." },
            { q: "Inscribed angle of 35° intercepts?", options: ["70° arc", "35° arc", "140° arc"], answer: "70° arc", explanation: "Definition." },

            { q: "A tangent touches?", options: ["One point", "Two points", "Three points"], answer: "One point", explanation: "Definition." },
            { q: "A secant intersects?", options: ["Two points", "One point", "No points"], answer: "Two points", explanation: "Definition." },
            { q: "Tangent and radius form?", options: ["90°", "45°", "180°"], answer: "90°", explanation: "Definition." },
            { q: "Two tangent segments from one point are?", options: ["Congruent", "Parallel", "Perpendicular"], answer: "Congruent", explanation: "Property." },
            { q: "A diameter is also a?", options: ["Chord", "Arc", "Sector"], answer: "Chord", explanation: "Definition." },

            { q: "A sector is?", options: ["Region between two radii and an arc", "A diameter", "A tangent"], answer: "Region between two radii and an arc", explanation: "Definition." },
            { q: "An arc is?", options: ["Curved", "Straight", "Parallel"], answer: "Curved", explanation: "Definition." },
            { q: "A chord is?", options: ["Straight", "Curved", "Circular"], answer: "Straight", explanation: "Definition." },
            { q: "π is about?", options: ["3.14", "2.14", "4.13"], answer: "3.14", explanation: "Approximation." },
            { q: "A wheel is an example of?", options: ["Circle", "Triangle", "Rectangle"], answer: "Circle", explanation: "Real-world example." },

            { q: "Clock faces are?", options: ["Circles", "Squares", "Triangles"], answer: "Circles", explanation: "Real-world example." },
            { q: "Pizza is usually?", options: ["Circular", "Square", "Pentagonal"], answer: "Circular", explanation: "Real-world example." },
            { q: "Area uses?", options: ["Square units", "Linear units", "Degrees"], answer: "Square units", explanation: "Definition." },
            { q: "Circumference uses?", options: ["Linear units", "Square units", "Cubic units"], answer: "Linear units", explanation: "Definition." },
            { q: "Circle formulas belong to?", options: ["Geometry", "History", "Chemistry"], answer: "Geometry", explanation: "Core topic." },

            { q: "Circle geometry prepares students for?", options: ["Trigonometry", "Cooking", "History"], answer: "Trigonometry", explanation: "Circle concepts are fundamental." },
            { q: "The center is?", options: ["Middle of the circle", "Edge", "Arc"], answer: "Middle of the circle", explanation: "Definition." },
            { q: "Radius is always?", options: ["Half the diameter", "Twice the diameter", "Equal to circumference"], answer: "Half the diameter", explanation: "Definition." },
            { q: "Every diameter passes through the?", options: ["Center", "Arc", "Chord"], answer: "Center", explanation: "Definition." },
            { q: "Completing this test means?", options: ["Unit 6 Complete", "Geometry Complete", "Math Complete"], answer: "Unit 6 Complete", explanation: "Congratulations!" }

        ]

    }
    ,

    "distance-formula": {

        title: "Distance Formula",

        subtitle: "Learn how to find the distance between two points on the coordinate plane.",

        body: `

<h2>Introduction</h2>

<p>The <strong>Distance Formula</strong> calculates the straight-line distance between two points.</p>

<hr>

<h2>Formula</h2>

<p style="font-size:30px;"><strong>d = √((x₂−x₁)² + (y₂−y₁)²)</strong></p>

<hr>

<h2>Example 1</h2>

<p>Find the distance between (2,3) and (6,6).</p>

<p>x difference = 4</p>

<p>y difference = 3</p>

<p>d = √(4²+3²)</p>

<p>d = √25</p>

<p>d = 5</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Subtract coordinates correctly.</li>

<li>Square BOTH differences.</li>

<li>Take the square root last.</li>

</ul>

<hr>

<h2>Real World Example</h2>

<p>GPS systems and maps use distance calculations to determine the shortest path between locations.</p>

<hr>

<h2>Summary</h2>

<p>The Distance Formula finds the shortest distance between two points on a coordinate plane.</p>

`,

        questions: [

            { q: "The Distance Formula finds?", options: ["Distance between two points", "Area", "Slope"], answer: "Distance between two points", explanation: "Definition." },
            { q: "Distance Formula uses?", options: ["Coordinates", "Angles", "Radius"], answer: "Coordinates", explanation: "It uses x and y values." },
            { q: "Distance between (0,0) and (3,4)?", options: ["5", "7", "4"], answer: "5", explanation: "Classic 3-4-5 triangle." },
            { q: "First step?", options: ["Subtract coordinates", "Multiply coordinates", "Average coordinates"], answer: "Subtract coordinates", explanation: "Find the differences." },
            { q: "After subtracting?", options: ["Square each difference", "Multiply them", "Take square root"], answer: "Square each difference", explanation: "Square first." },
            { q: "Last step?", options: ["Take the square root", "Subtract", "Multiply"], answer: "Take the square root", explanation: "Final step." },
            { q: "Distance can ever be negative?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Distance is always nonnegative." },
            { q: "Distance Formula belongs to?", options: ["Coordinate Geometry", "Probability", "Statistics"], answer: "Coordinate Geometry", explanation: "Definition." },
            { q: "Maps use the idea of?", options: ["Distance", "Probability", "Fractions"], answer: "Distance", explanation: "Real-world application." },
            { q: "The Distance Formula comes from?", options: ["Pythagorean Theorem", "Area Formula", "Circumference"], answer: "Pythagorean Theorem", explanation: "It is derived from the Pythagorean Theorem." }

        ]

    },

    "midpoint-formula": {

        title: "Midpoint Formula",

        subtitle: "Find the point exactly halfway between two points.",

        body: `

<h2>Introduction</h2>

<p>The midpoint is the point exactly halfway between two endpoints.</p>

<hr>

<h2>Formula</h2>

<p style="font-size:28px;"><strong>((x₁+x₂)/2 , (y₁+y₂)/2)</strong></p>

<hr>

<h2>Example</h2>

<p>Endpoints:</p>

<p>(2,4)</p>

<p>(8,10)</p>

<p>Midpoint:</p>

<p>(5,7)</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Add first, then divide by 2.</li>

<li>Do x values separately from y values.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>The midpoint is halfway between two endpoints.</p>

`,

        questions: [

            { q: "The midpoint is?", options: ["Halfway between two points", "Distance", "Slope"], answer: "Halfway between two points", explanation: "Definition." },
            { q: "Midpoint of (0,0) and (4,6)?", options: ["(2,3)", "(4,6)", "(1,3)"], answer: "(2,3)", explanation: "Average the coordinates." },
            { q: "Midpoint Formula averages?", options: ["x's and y's", "Only x", "Only y"], answer: "x's and y's", explanation: "Average each coordinate separately." },
            { q: "Midpoint belongs to?", options: ["Coordinate Geometry", "Statistics", "Probability"], answer: "Coordinate Geometry", explanation: "Definition." },
            { q: "First step?", options: ["Add coordinates", "Subtract coordinates", "Square coordinates"], answer: "Add coordinates", explanation: "Then divide by 2." },
            { q: "Second step?", options: ["Divide by 2", "Multiply by 2", "Square"], answer: "Divide by 2", explanation: "Average the coordinates." },
            { q: "The midpoint is always?", options: ["Between endpoints", "Outside endpoints", "Random"], answer: "Between endpoints", explanation: "Definition." },
            { q: "Road planners often use?", options: ["Midpoints", "Circles", "Probability"], answer: "Midpoints", explanation: "Real-world use." },
            { q: "Midpoint Formula uses?", options: ["Coordinates", "Angles", "Radius"], answer: "Coordinates", explanation: "Definition." },
            { q: "Midpoint problems appear in?", options: ["Geometry", "Biology", "History"], answer: "Geometry", explanation: "Core topic." }

        ]

    },

    "slope": {

        title: "Slope",

        subtitle: "Measure the steepness of a line.",

        body: `

<h2>Introduction</h2>

<p>Slope tells us how steep a line is.</p>

<hr>

<h2>Formula</h2>

<p style="font-size:30px;"><strong>m=(y₂−y₁)/(x₂−x₁)</strong></p>

<hr>

<h2>Types of Slope</h2>

<ul>

<li>Positive</li>

<li>Negative</li>

<li>Zero</li>

<li>Undefined</li>

</ul>

<hr>

<h2>Example</h2>

<p>(2,3) and (6,7)</p>

<p>Rise = 4</p>

<p>Run = 4</p>

<p>Slope = 1</p>

<hr>

<h2>Remember</h2>

<ul>

<li>Rise over Run</li>

<li>Horizontal lines → slope 0</li>

<li>Vertical lines → undefined slope</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Slope measures how quickly a line rises or falls.</p>

`,

        questions: [

            { q: "Slope measures?", options: ["Steepness", "Area", "Distance"], answer: "Steepness", explanation: "Definition." },
            { q: "Slope formula?", options: ["Rise/Run", "Area/Base", "πr²"], answer: "Rise/Run", explanation: "Definition." },
            { q: "Horizontal line slope?", options: ["0", "Undefined", "1"], answer: "0", explanation: "Definition." },
            { q: "Vertical line slope?", options: ["Undefined", "0", "1"], answer: "Undefined", explanation: "Definition." },
            { q: "Positive slope means?", options: ["Line rises left to right", "Line falls left to right", "Horizontal"], answer: "Line rises left to right", explanation: "Definition." },
            { q: "Negative slope means?", options: ["Line falls left to right", "Line rises", "Horizontal"], answer: "Line falls left to right", explanation: "Definition." },
            { q: "Slope Formula uses?", options: ["Coordinates", "Angles", "Radius"], answer: "Coordinates", explanation: "Definition." },
            { q: "Slope belongs to?", options: ["Coordinate Geometry", "Probability", "Chemistry"], answer: "Coordinate Geometry", explanation: "Definition." },
            { q: "Rise over?", options: ["Run", "Area", "Radius"], answer: "Run", explanation: "Definition." },
            { q: "Engineers use slope when designing?", options: ["Roads", "Music", "Recipes"], answer: "Roads", explanation: "Road grades are based on slope." }

        ]

    }
    ,

    "equation-of-a-line": {

        title: "Equation of a Line",

        subtitle: "Learn how to write the equation of a line using slope-intercept form.",

        body: `

<h2>Introduction</h2>

<p>An equation of a line describes every point on that line.</p>

<hr>

<h2>Slope-Intercept Form</h2>

<p style="font-size:30px;"><strong>y = mx + b</strong></p>

<ul>

<li><strong>m</strong> = slope</li>

<li><strong>b</strong> = y-intercept</li>

</ul>

<hr>

<h2>Example</h2>

<p>y = 2x + 3</p>

<ul>

<li>Slope = 2</li>

<li>Y-intercept = 3</li>

</ul>

<hr>

<h2>Special Cases</h2>

<ul>

<li>Horizontal Line → y = constant</li>

<li>Vertical Line → x = constant</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Don't confuse the slope with the y-intercept.</li>

<li>Vertical lines cannot be written as y = mx + b.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>The equation y = mx + b is the most common way to represent a line.</p>

`,

        questions: [

            { q: "Slope-intercept form is?", options: ["y = mx + b", "A = πr²", "2πr"], answer: "y = mx + b", explanation: "Definition." },
            { q: "m represents?", options: ["Slope", "Midpoint", "Radius"], answer: "Slope", explanation: "Definition." },
            { q: "b represents?", options: ["Y-intercept", "Slope", "Distance"], answer: "Y-intercept", explanation: "Definition." },
            { q: "The y-intercept is where the line crosses?", options: ["The y-axis", "The x-axis", "The origin only"], answer: "The y-axis", explanation: "Definition." },
            { q: "Horizontal lines are written as?", options: ["y = constant", "x = constant", "y = mx + b always"], answer: "y = constant", explanation: "Definition." },
            { q: "Vertical lines are written as?", options: ["x = constant", "y = constant", "y = mx + b"], answer: "x = constant", explanation: "Definition." },
            { q: "If y = 4x + 2, the slope is?", options: ["4", "2", "6"], answer: "4", explanation: "m = 4." },
            { q: "If y = 4x + 2, the y-intercept is?", options: ["2", "4", "6"], answer: "2", explanation: "b = 2." },
            { q: "Slope-intercept form belongs to?", options: ["Coordinate Geometry", "Probability", "Statistics"], answer: "Coordinate Geometry", explanation: "Definition." },
            { q: "Equations of lines describe?", options: ["Every point on a line", "Only one point", "Only slopes"], answer: "Every point on a line", explanation: "Definition." }

        ]

    },

    "coordinate-geometry-applications": {

        title: "Coordinate Geometry Applications",

        subtitle: "Use slope, distance, midpoint, and line equations together to solve problems.",

        body: `

<h2>Introduction</h2>

<p>Coordinate Geometry combines several concepts to solve real-world problems.</p>

<hr>

<h2>Skills You'll Use</h2>

<ul>

<li>Distance Formula</li>

<li>Midpoint Formula</li>

<li>Slope Formula</li>

<li>Equation of a Line</li>

</ul>

<hr>

<h2>Example 1</h2>

<p>Find the midpoint between two cities on a map.</p>

<hr>

<h2>Example 2</h2>

<p>Find the distance between two GPS coordinates.</p>

<hr>

<h2>Example 3</h2>

<p>Determine whether two roads are parallel by comparing slopes.</p>

<hr>

<h2>Real World Applications</h2>

<ul>

<li>GPS Navigation</li>

<li>Engineering</li>

<li>Architecture</li>

<li>Computer Graphics</li>

<li>Video Games</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Coordinate Geometry allows us to solve practical problems using graphs and formulas.</p>

`,

        questions: [

            { q: "Coordinate Geometry combines?", options: ["Distance, midpoint, slope and equations", "Only circles", "Only triangles"], answer: "Distance, midpoint, slope and equations", explanation: "These are the core tools." },
            { q: "GPS commonly uses?", options: ["Distance Formula", "Area Formula", "Circle Area"], answer: "Distance Formula", explanation: "Distance between coordinates." },
            { q: "Road design often uses?", options: ["Slope", "Probability", "Fractions"], answer: "Slope", explanation: "Road grades depend on slope." },
            { q: "Midpoint is useful for?", options: ["Finding halfway points", "Finding area", "Finding volume"], answer: "Finding halfway points", explanation: "Definition." },
            { q: "Parallel lines have?", options: ["Equal slopes", "Opposite slopes", "No slopes"], answer: "Equal slopes", explanation: "Parallel lines share the same slope." },
            { q: "Perpendicular lines have?", options: ["Negative reciprocal slopes", "Equal slopes", "Zero slopes"], answer: "Negative reciprocal slopes", explanation: "Key property." },
            { q: "Coordinate Geometry is used in?", options: ["Engineering", "Architecture", "Both"], answer: "Both", explanation: "Real-world application." },
            { q: "Computer graphics rely on?", options: ["Coordinates", "Only circles", "Only angles"], answer: "Coordinates", explanation: "Everything is positioned with coordinates." },
            { q: "Video games use coordinate systems to?", options: ["Position objects", "Cook food", "Play music"], answer: "Position objects", explanation: "Objects are placed using coordinates." },
            { q: "Coordinate Geometry belongs to?", options: ["Geometry", "History", "Biology"], answer: "Geometry", explanation: "Core topic." }

        ]

    },

    "unit7-review": {

        title: "Unit 7 Review",

        subtitle: "Review Coordinate Geometry before taking the Unit Test.",

        body: `

<h2>Lessons Covered</h2>

<ol>

<li>Distance Formula</li>

<li>Midpoint Formula</li>

<li>Slope</li>

<li>Equation of a Line</li>

<li>Coordinate Geometry Applications</li>

</ol>

<hr>

<h2>Important Formulas</h2>

<ul>

<li>d = √((x₂-x₁)² + (y₂-y₁)²)</li>

<li>((x₁+x₂)/2 , (y₁+y₂)/2)</li>

<li>m = (y₂-y₁)/(x₂-x₁)</li>

<li>y = mx + b</li>

</ul>

<hr>

<p>The next page is your Unit 7 Test.</p>

`,

        questions: [

            {
                q: "Ready for the Unit 7 Test?",
                options: [
                    "Yes!",
                    "I want to review again."
                ],
                answer: "Yes!",
                explanation: "Good luck!"
            }

        ]

    }
    ,

    "unit7-test": {

        title: "Unit 7 Test",

        subtitle: "Coordinate Geometry Assessment",

        body: `

<h2>Unit 7 Test</h2>

<p>This assessment covers every lesson from Coordinate Geometry.</p>

<ul>

<li>Distance Formula</li>

<li>Midpoint Formula</li>

<li>Slope</li>

<li>Equation of a Line</li>

<li>Coordinate Geometry Applications</li>

</ul>

<p><strong>40 Questions</strong></p>

`,

        questions: [

            { q: "The Distance Formula finds?", options: ["Distance between two points", "Area", "Slope"], answer: "Distance between two points", explanation: "Definition." },
            { q: "Distance between (0,0) and (3,4)?", options: ["5", "7", "4"], answer: "5", explanation: "3-4-5 triangle." },
            { q: "The Midpoint Formula finds?", options: ["Halfway point", "Distance", "Slope"], answer: "Halfway point", explanation: "Definition." },
            { q: "Midpoint of (2,4) and (6,8)?", options: ["(4,6)", "(3,5)", "(5,7)"], answer: "(4,6)", explanation: "Average the coordinates." },
            { q: "Slope measures?", options: ["Steepness", "Area", "Volume"], answer: "Steepness", explanation: "Definition." },

            { q: "Slope Formula is?", options: ["Rise/Run", "Area/Base", "πr²"], answer: "Rise/Run", explanation: "Definition." },
            { q: "Horizontal lines have slope?", options: ["0", "Undefined", "1"], answer: "0", explanation: "Definition." },
            { q: "Vertical lines have slope?", options: ["Undefined", "0", "1"], answer: "Undefined", explanation: "Definition." },
            { q: "Positive slope means?", options: ["Rises left to right", "Falls left to right", "Horizontal"], answer: "Rises left to right", explanation: "Definition." },
            { q: "Negative slope means?", options: ["Falls left to right", "Rises left to right", "Vertical"], answer: "Falls left to right", explanation: "Definition." },

            { q: "Slope-intercept form?", options: ["y=mx+b", "πr²", "2πr"], answer: "y=mx+b", explanation: "Definition." },
            { q: "m represents?", options: ["Slope", "Y-intercept", "Distance"], answer: "Slope", explanation: "Definition." },
            { q: "b represents?", options: ["Y-intercept", "Slope", "Midpoint"], answer: "Y-intercept", explanation: "Definition." },
            { q: "If y=5x+2, slope=?", options: ["5", "2", "7"], answer: "5", explanation: "m=5." },
            { q: "If y=5x+2, y-intercept=?", options: ["2", "5", "7"], answer: "2", explanation: "b=2." },

            { q: "Parallel lines have?", options: ["Equal slopes", "Opposite slopes", "Undefined slopes"], answer: "Equal slopes", explanation: "Property." },
            { q: "Perpendicular lines have?", options: ["Negative reciprocal slopes", "Equal slopes", "Slope 0"], answer: "Negative reciprocal slopes", explanation: "Property." },
            { q: "Distance Formula comes from?", options: ["Pythagorean Theorem", "Circle Formula", "Area Formula"], answer: "Pythagorean Theorem", explanation: "Definition." },
            { q: "Coordinate Geometry uses?", options: ["Coordinates", "Angles only", "Circles only"], answer: "Coordinates", explanation: "Definition." },
            { q: "GPS uses?", options: ["Coordinates", "Probability", "Statistics"], answer: "Coordinates", explanation: "Real-world application." },

            { q: "Maps often use?", options: ["Distance Formula", "Area Formula", "Circle Area"], answer: "Distance Formula", explanation: "Navigation." },
            { q: "Road engineers often use?", options: ["Slope", "Probability", "Fractions"], answer: "Slope", explanation: "Road grade." },
            { q: "Computer graphics rely on?", options: ["Coordinate Geometry", "Chemistry", "Biology"], answer: "Coordinate Geometry", explanation: "Everything is placed using coordinates." },
            { q: "Video games position objects using?", options: ["Coordinates", "Fractions", "Chemistry"], answer: "Coordinates", explanation: "Definition." },
            { q: "The midpoint always lies?", options: ["Between endpoints", "Outside the segment", "Randomly"], answer: "Between endpoints", explanation: "Definition." },

            { q: "Distance can ever be negative?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Distance is never negative." },
            { q: "Slope of an increasing line?", options: ["Positive", "Negative", "Zero"], answer: "Positive", explanation: "Definition." },
            { q: "Slope of a decreasing line?", options: ["Negative", "Positive", "Undefined"], answer: "Negative", explanation: "Definition." },
            { q: "Equation y=3 means?", options: ["Horizontal line", "Vertical line", "Diagonal line"], answer: "Horizontal line", explanation: "y is constant." },
            { q: "Equation x=3 means?", options: ["Vertical line", "Horizontal line", "Diagonal line"], answer: "Vertical line", explanation: "x is constant." },

            { q: "Midpoint Formula averages?", options: ["Coordinates", "Slopes", "Distances"], answer: "Coordinates", explanation: "Definition." },
            { q: "Distance Formula uses?", options: ["Square root", "Cube root", "Logarithms"], answer: "Square root", explanation: "Definition." },
            { q: "Coordinate Geometry is important in?", options: ["Engineering", "Architecture", "Both"], answer: "Both", explanation: "Many applications." },
            { q: "Parallel streets have?", options: ["Equal slopes", "Negative slopes", "Zero slopes"], answer: "Equal slopes", explanation: "Property." },
            { q: "A vertical road has?", options: ["Undefined slope", "Zero slope", "Slope 1"], answer: "Undefined slope", explanation: "Definition." },

            { q: "A flat road has?", options: ["Slope 0", "Undefined slope", "Slope 5"], answer: "Slope 0", explanation: "Definition." },
            { q: "Coordinate Geometry is part of?", options: ["Geometry", "Biology", "History"], answer: "Geometry", explanation: "Definition." },
            { q: "Slope is often called?", options: ["Rise over Run", "Run over Rise", "Area"], answer: "Rise over Run", explanation: "Definition." },
            { q: "Distance Formula requires?", options: ["Two points", "One point", "Three points"], answer: "Two points", explanation: "Definition." },
            { q: "Midpoint Formula requires?", options: ["Two endpoints", "One endpoint", "A radius"], answer: "Two endpoints", explanation: "Definition." },

            { q: "The Coordinate Plane has?", options: ["x-axis and y-axis", "Only x-axis", "Only y-axis"], answer: "x-axis and y-axis", explanation: "Definition." },
            { q: "Coordinate Geometry prepares students for?", options: ["Analytic Geometry and Algebra 2", "Only Statistics", "Only Biology"], answer: "Analytic Geometry and Algebra 2", explanation: "These concepts are foundational for higher math." },
            { q: "Completing this test means?", options: ["Unit 7 Complete", "Geometry Complete", "Math Complete"], answer: "Unit 7 Complete", explanation: "Congratulations on finishing Unit 7!" }

        ]

    }
    ,

    "translations": {

        title: "Translations",

        subtitle: "Learn how figures slide across the coordinate plane.",

        body: `

<h2>Introduction</h2>

<p>A <strong>translation</strong> slides a figure without changing its size or shape.</p>

<hr>

<h2>Properties</h2>

<ul>

<li>Slides only</li>

<li>No turning</li>

<li>No flipping</li>

<li>Size stays the same</li>

<li>Shape stays the same</li>

<li>Orientation stays the same</li>

</ul>

<hr>

<h2>Coordinate Rule</h2>

<p>(x,y) → (x+a,y+b)</p>

<p>a = horizontal movement</p>

<p>b = vertical movement</p>

<hr>

<h2>Example</h2>

<p>(2,3)</p>

<p>Move right 5 and up 2</p>

<p>New point:</p>

<p>(7,5)</p>

<hr>

<h2>Real World Example</h2>

<p>Dragging an icon across a computer screen is a translation.</p>

<hr>

<h2>Summary</h2>

<p>A translation slides a figure without changing its appearance.</p>

`,

        questions: [

            { q: "A translation is a?", options: ["Slide", "Flip", "Turn"], answer: "Slide", explanation: "Definition." },
            { q: "A translation changes?", options: ["Position", "Size", "Shape"], answer: "Position", explanation: "Only location changes." },
            { q: "Shape changes?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Translations preserve shape." },
            { q: "Size changes?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Translations preserve size." },
            { q: "Orientation changes?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "The figure faces the same direction." },
            { q: "Moving 4 units right changes?", options: ["x-coordinate", "y-coordinate", "Both equally"], answer: "x-coordinate", explanation: "Horizontal movement affects x." },
            { q: "Moving up changes?", options: ["y-coordinate", "x-coordinate", "Both"], answer: "y-coordinate", explanation: "Vertical movement affects y." },
            { q: "Dragging an app icon is?", options: ["Translation", "Rotation", "Reflection"], answer: "Translation", explanation: "Real-world example." },
            { q: "Translations preserve?", options: ["Congruence", "Area only", "Angles only"], answer: "Congruence", explanation: "The image remains congruent." },
            { q: "Translations belong to?", options: ["Transformations", "Statistics", "Probability"], answer: "Transformations", explanation: "Core Geometry topic." }

        ]

    },

    "reflections": {

        title: "Reflections",

        subtitle: "Learn how figures flip across a line.",

        body: `

<h2>Introduction</h2>

<p>A <strong>reflection</strong> flips a figure across a line called the line of reflection.</p>

<hr>

<h2>Properties</h2>

<ul>

<li>Flip</li>

<li>Mirror image</li>

<li>Same size</li>

<li>Same shape</li>

<li>Orientation reverses</li>

</ul>

<hr>

<h2>Examples</h2>

<p>Reflection over the x-axis:</p>

<p>(x,y) → (x,-y)</p>

<hr>

<p>Reflection over the y-axis:</p>

<p>(x,y) → (-x,y)</p>

<hr>

<h2>Real World Example</h2>

<p>Your reflection in a mirror.</p>

<hr>

<h2>Summary</h2>

<p>A reflection flips a figure across a line.</p>

`,

        questions: [

            { q: "A reflection is a?", options: ["Flip", "Slide", "Turn"], answer: "Flip", explanation: "Definition." },
            { q: "Reflections create?", options: ["Mirror images", "Bigger figures", "Smaller figures"], answer: "Mirror images", explanation: "Definition." },
            { q: "Reflection changes size?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Size stays the same." },
            { q: "Reflection changes shape?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Shape stays the same." },
            { q: "Reflection across x-axis changes?", options: ["Sign of y", "Sign of x", "Both"], answer: "Sign of y", explanation: "Definition." },
            { q: "Reflection across y-axis changes?", options: ["Sign of x", "Sign of y", "Both"], answer: "Sign of x", explanation: "Definition." },
            { q: "Mirror image is?", options: ["Reflection", "Rotation", "Translation"], answer: "Reflection", explanation: "Definition." },
            { q: "Reflections preserve?", options: ["Congruence", "Area only", "Perimeter only"], answer: "Congruence", explanation: "Image remains congruent." },
            { q: "A reflection belongs to?", options: ["Transformations", "Circles", "Probability"], answer: "Transformations", explanation: "Definition." },
            { q: "Reflections reverse?", options: ["Orientation", "Size", "Area"], answer: "Orientation", explanation: "The figure is flipped." }

        ]

    },

    "rotations": {

        title: "Rotations",

        subtitle: "Learn how figures turn around a fixed point.",

        body: `

<h2>Introduction</h2>

<p>A <strong>rotation</strong> turns a figure around a fixed point.</p>

<hr>

<h2>Properties</h2>

<ul>

<li>Turns</li>

<li>Size stays the same</li>

<li>Shape stays the same</li>

<li>Usually rotates around the origin</li>

</ul>

<hr>

<h2>Common Rotations</h2>

<ul>

<li>90°</li>

<li>180°</li>

<li>270°</li>

</ul>

<hr>

<h2>Coordinate Rules</h2>

<p>90° CCW:</p>

<p>(x,y) → (-y,x)</p>

<hr>

<p>180°:</p>

<p>(x,y) → (-x,-y)</p>

<hr>

<p>270° CCW:</p>

<p>(x,y) → (y,-x)</p>

<hr>

<h2>Summary</h2>

<p>A rotation turns a figure while preserving size and shape.</p>

`,

        questions: [

            { q: "A rotation is a?", options: ["Turn", "Flip", "Slide"], answer: "Turn", explanation: "Definition." },
            { q: "Rotations preserve?", options: ["Size and shape", "Area only", "Angles only"], answer: "Size and shape", explanation: "Congruence is preserved." },
            { q: "Most rotations occur around?", options: ["Origin", "Midpoint", "Slope"], answer: "Origin", explanation: "Usually in coordinate geometry." },
            { q: "90° CCW rule?", options: ["(-y,x)", "(y,x)", "(-x,y)"], answer: "(-y,x)", explanation: "Standard rule." },
            { q: "180° rule?", options: ["(-x,-y)", "(x,-y)", "(-x,y)"], answer: "(-x,-y)", explanation: "Standard rule." },
            { q: "270° CCW rule?", options: ["(y,-x)", "(-y,x)", "(-x,-y)"], answer: "(y,-x)", explanation: "Standard rule." },
            { q: "Rotation changes size?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Definition." },
            { q: "Rotation changes shape?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Definition." },
            { q: "Turning a steering wheel demonstrates?", options: ["Rotation", "Reflection", "Translation"], answer: "Rotation", explanation: "Real-world example." },
            { q: "Rotations belong to?", options: ["Transformations", "Statistics", "Probability"], answer: "Transformations", explanation: "Core Geometry topic." }

        ]

    }
    ,

    "dilations": {

        title: "Dilations",

        subtitle: "Learn how figures can grow or shrink while keeping the same shape.",

        body: `

<h2>Introduction</h2>

<p>A <strong>dilation</strong> changes the size of a figure without changing its shape.</p>

<hr>

<h2>Key Vocabulary</h2>

<ul>

<li><strong>Scale Factor</strong> – The number used to enlarge or reduce a figure.</li>

<li><strong>Center of Dilation</strong> – The fixed point from which the figure is enlarged or reduced.</li>

</ul>

<hr>

<h2>Properties</h2>

<ul>

<li>Shape stays the same.</li>

<li>Angles stay the same.</li>

<li>Side lengths change proportionally.</li>

<li>Figures remain similar.</li>

</ul>

<hr>

<h2>Scale Factors</h2>

<ul>

<li>Scale Factor > 1 → Enlargement</li>

<li>Scale Factor = 1 → No Change</li>

<li>0 < Scale Factor < 1 → Reduction</li>

</ul>

<hr>

<h2>Example</h2>

<p>If every side of a triangle is multiplied by 2, the image is twice as large.</p>

<p>The triangles are similar but not congruent.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Dilations change size but not shape.</li>

<li>Angles remain unchanged.</li>

<li>Side lengths change by the scale factor.</li>

</ul>

<hr>

<h2>Real World Example</h2>

<p>Maps and blueprints use dilations to represent large objects on smaller paper.</p>

<hr>

<h2>Summary</h2>

<p>Dilations enlarge or reduce figures while preserving their shape.</p>

`,

        questions: [

            { q: "A dilation changes?", options: ["Size", "Shape", "Angles"], answer: "Size", explanation: "Only the size changes." },
            { q: "A dilation preserves?", options: ["Shape", "Size", "Perimeter"], answer: "Shape", explanation: "Shape stays the same." },
            { q: "Figures after dilation are?", options: ["Similar", "Congruent", "Parallel"], answer: "Similar", explanation: "Dilations create similar figures." },
            { q: "Scale factor greater than 1 means?", options: ["Enlargement", "Reduction", "Reflection"], answer: "Enlargement", explanation: "The figure becomes larger." },
            { q: "Scale factor between 0 and 1 means?", options: ["Reduction", "Enlargement", "Rotation"], answer: "Reduction", explanation: "The figure becomes smaller." },
            { q: "Scale factor of 1 means?", options: ["No change", "Double size", "Half size"], answer: "No change", explanation: "The figure stays the same size." },
            { q: "Angles after dilation?", options: ["Remain equal", "Double", "Become smaller"], answer: "Remain equal", explanation: "Angle measures do not change." },
            { q: "Side lengths?", options: ["Change proportionally", "Never change", "Become random"], answer: "Change proportionally", explanation: "Each side is multiplied by the scale factor." },
            { q: "Maps use?", options: ["Dilations", "Rotations", "Reflections"], answer: "Dilations", explanation: "Maps are scaled drawings." },
            { q: "Dilations belong to?", options: ["Transformations", "Statistics", "Probability"], answer: "Transformations", explanation: "Definition." }

        ]

    },

    "symmetry": {

        title: "Symmetry",

        subtitle: "Learn about line symmetry and rotational symmetry.",

        body: `

<h2>Introduction</h2>

<p>A figure has <strong>symmetry</strong> if it can be divided or rotated so that it matches itself.</p>

<hr>

<h2>Line Symmetry</h2>

<p>A figure has line symmetry if it can be folded into two matching halves.</p>

<hr>

<h2>Rotational Symmetry</h2>

<p>A figure has rotational symmetry if it looks the same after being rotated less than 360°.</p>

<hr>

<h2>Examples</h2>

<ul>

<li>Square → 4 lines of symmetry and rotational symmetry.</li>

<li>Rectangle → 2 lines of symmetry.</li>

<li>Circle → Infinite lines of symmetry.</li>

</ul>

<hr>

<h2>Real World Examples</h2>

<ul>

<li>Butterflies</li>

<li>Snowflakes</li>

<li>Company logos</li>

<li>Flowers</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Symmetry helps us recognize balanced and repeating designs.</p>

`,

        questions: [

            { q: "Symmetry means?", options: ["A figure matches itself", "The figure grows", "The figure shrinks"], answer: "A figure matches itself", explanation: "Definition." },
            { q: "Line symmetry uses?", options: ["A fold line", "A translation", "A dilation"], answer: "A fold line", explanation: "Definition." },
            { q: "Rotational symmetry involves?", options: ["Turning", "Sliding", "Flipping"], answer: "Turning", explanation: "Definition." },
            { q: "A square has how many lines of symmetry?", options: ["4", "2", "1"], answer: "4", explanation: "Definition." },
            { q: "A rectangle has?", options: ["2 lines of symmetry", "4 lines", "No symmetry"], answer: "2 lines of symmetry", explanation: "Definition." },
            { q: "A circle has?", options: ["Infinite lines of symmetry", "4 lines", "2 lines"], answer: "Infinite lines of symmetry", explanation: "Definition." },
            { q: "Butterflies demonstrate?", options: ["Symmetry", "Slope", "Probability"], answer: "Symmetry", explanation: "Real-world example." },
            { q: "Snowflakes often show?", options: ["Symmetry", "Translation", "Reflection only"], answer: "Symmetry", explanation: "Real-world example." },
            { q: "Company logos often use?", options: ["Symmetry", "Area", "Volume"], answer: "Symmetry", explanation: "Balanced designs are visually appealing." },
            { q: "Symmetry belongs to?", options: ["Geometry", "Biology", "History"], answer: "Geometry", explanation: "Core Geometry topic." }

        ]

    },

    "unit8-review": {

        title: "Unit 8 Review",

        subtitle: "Review Transformations before taking the Unit Test.",

        body: `

<h2>Lessons Covered</h2>

<ol>

<li>Translations</li>

<li>Reflections</li>

<li>Rotations</li>

<li>Dilations</li>

<li>Symmetry</li>

</ol>

<hr>

<h2>Remember</h2>

<ul>

<li>Translation = Slide</li>

<li>Reflection = Flip</li>

<li>Rotation = Turn</li>

<li>Dilation = Resize</li>

<li>Symmetry = Balance</li>

</ul>

<hr>

<p>The next page is your Unit 8 Test.</p>

`,

        questions: [

            {
                q: "Ready for the Unit 8 Test?",
                options: [
                    "Yes!",
                    "I want to review again."
                ],
                answer: "Yes!",
                explanation: "Good luck!"
            }

        ]

    }
    ,

    "unit8-test": {

        title: "Unit 8 Test",

        subtitle: "Transformations Assessment",

        body: `

<h2>Unit 8 Test</h2>

<p>This assessment covers every lesson in the Transformations Unit.</p>

<ul>

<li>Translations</li>

<li>Reflections</li>

<li>Rotations</li>

<li>Dilations</li>

<li>Symmetry</li>

</ul>

<p><strong>40 Questions</strong></p>

`,

        questions: [

            { q: "A translation is a?", options: ["Slide", "Flip", "Turn"], answer: "Slide", explanation: "Definition." },
            { q: "A reflection is a?", options: ["Flip", "Slide", "Resize"], answer: "Flip", explanation: "Definition." },
            { q: "A rotation is a?", options: ["Turn", "Flip", "Slide"], answer: "Turn", explanation: "Definition." },
            { q: "A dilation changes?", options: ["Size", "Shape", "Angles"], answer: "Size", explanation: "Definition." },
            { q: "A translation changes?", options: ["Position", "Shape", "Size"], answer: "Position", explanation: "Only the location changes." },

            { q: "A reflection creates a?", options: ["Mirror image", "Larger figure", "Smaller figure"], answer: "Mirror image", explanation: "Definition." },
            { q: "Rotations usually occur around the?", options: ["Origin", "Midpoint", "Radius"], answer: "Origin", explanation: "Most coordinate rotations use the origin." },
            { q: "A dilation with scale factor 3 is?", options: ["An enlargement", "A reduction", "A reflection"], answer: "An enlargement", explanation: "Scale factor greater than 1 enlarges the figure." },
            { q: "A dilation with scale factor 0.5 is?", options: ["A reduction", "An enlargement", "A rotation"], answer: "A reduction", explanation: "Scale factor between 0 and 1 reduces the figure." },
            { q: "A scale factor of 1 means?", options: ["No change", "Double size", "Half size"], answer: "No change", explanation: "The image stays the same size." },

            { q: "Translations preserve?", options: ["Size and shape", "Only area", "Only perimeter"], answer: "Size and shape", explanation: "Translations create congruent figures." },
            { q: "Reflections preserve?", options: ["Congruence", "Similarity only", "Area only"], answer: "Congruence", explanation: "Reflections preserve size and shape." },
            { q: "Rotations preserve?", options: ["Congruence", "Similarity only", "Area only"], answer: "Congruence", explanation: "Rotations preserve size and shape." },
            { q: "Dilations preserve?", options: ["Similarity", "Congruence", "Perimeter"], answer: "Similarity", explanation: "Dilations preserve shape but not necessarily size." },
            { q: "After a dilation, angles are?", options: ["Equal", "Larger", "Smaller"], answer: "Equal", explanation: "Angle measures remain unchanged." },

            { q: "Reflection across the x-axis changes?", options: ["The sign of y", "The sign of x", "Both signs"], answer: "The sign of y", explanation: "(x,y) → (x,-y)." },
            { q: "Reflection across the y-axis changes?", options: ["The sign of x", "The sign of y", "Both signs"], answer: "The sign of x", explanation: "(x,y) → (-x,y)." },
            { q: "90° counterclockwise rotation rule?", options: ["(-y,x)", "(y,-x)", "(-x,-y)"], answer: "(-y,x)", explanation: "Standard rule." },
            { q: "180° rotation rule?", options: ["(-x,-y)", "(-y,x)", "(y,-x)"], answer: "(-x,-y)", explanation: "Standard rule." },
            { q: "270° counterclockwise rotation rule?", options: ["(y,-x)", "(-y,x)", "(-x,-y)"], answer: "(y,-x)", explanation: "Standard rule." },

            { q: "A square has how many lines of symmetry?", options: ["4", "2", "1"], answer: "4", explanation: "Definition." },
            { q: "A rectangle has how many lines of symmetry?", options: ["2", "4", "0"], answer: "2", explanation: "Definition." },
            { q: "A circle has?", options: ["Infinite lines of symmetry", "4 lines", "2 lines"], answer: "Infinite lines of symmetry", explanation: "Definition." },
            { q: "A butterfly demonstrates?", options: ["Symmetry", "Slope", "Volume"], answer: "Symmetry", explanation: "Real-world example." },
            { q: "Snowflakes commonly have?", options: ["Symmetry", "Translation", "Slope"], answer: "Symmetry", explanation: "Real-world example." },

            { q: "Maps commonly use?", options: ["Dilations", "Reflections", "Rotations"], answer: "Dilations", explanation: "Maps are scale drawings." },
            { q: "Dragging a desktop icon is?", options: ["Translation", "Reflection", "Rotation"], answer: "Translation", explanation: "It slides across the screen." },
            { q: "Turning a steering wheel is?", options: ["Rotation", "Reflection", "Translation"], answer: "Rotation", explanation: "Real-world example." },
            { q: "Looking into a mirror demonstrates?", options: ["Reflection", "Rotation", "Translation"], answer: "Reflection", explanation: "Mirror images are reflections." },
            { q: "Scale drawings preserve?", options: ["Shape", "Size", "Perimeter"], answer: "Shape", explanation: "Dilations preserve shape." },

            { q: "Transformations belong to?", options: ["Geometry", "Biology", "History"], answer: "Geometry", explanation: "Core geometry topic." },
            { q: "Congruent transformations include?", options: ["Translation, Reflection, Rotation", "Dilations only", "Area only"], answer: "Translation, Reflection, Rotation", explanation: "These preserve size and shape." },
            { q: "Which transformation changes size?", options: ["Dilation", "Translation", "Reflection"], answer: "Dilation", explanation: "Only dilations change size." },
            { q: "Company logos often use?", options: ["Symmetry", "Slope", "Volume"], answer: "Symmetry", explanation: "Balanced designs are visually appealing." },
            { q: "A figure after translation is?", options: ["Congruent", "Similar only", "Larger"], answer: "Congruent", explanation: "The figure's size and shape do not change." },

            { q: "A figure after reflection is?", options: ["Congruent", "Similar only", "Reduced"], answer: "Congruent", explanation: "Reflections preserve size and shape." },
            { q: "A figure after rotation is?", options: ["Congruent", "Similar only", "Enlarged"], answer: "Congruent", explanation: "Rotations preserve size and shape." },
            { q: "A figure after dilation is?", options: ["Similar", "Congruent", "Perpendicular"], answer: "Similar", explanation: "Shape stays the same, size may change." },
            { q: "Transformations are important in?", options: ["Computer graphics and engineering", "Cooking", "Music"], answer: "Computer graphics and engineering", explanation: "Transformations are widely used in design and graphics." },
            { q: "Completing this test means?", options: ["Unit 8 Complete", "Geometry Complete", "Math Complete"], answer: "Unit 8 Complete", explanation: "Congratulations on finishing Unit 8!" }

        ]

    }
    ,

    "area-of-polygons": {

        title: "Area of Polygons",

        subtitle: "Learn how to calculate the area of common polygons.",

        body: `

<h2>Introduction</h2>

<p><strong>Area</strong> measures the amount of space inside a two-dimensional figure.</p>

<hr>

<h2>Rectangle</h2>

<p><strong>A = l × w</strong></p>

<hr>

<h2>Square</h2>

<p><strong>A = s²</strong></p>

<hr>

<h2>Triangle</h2>

<p><strong>A = ½bh</strong></p>

<hr>

<h2>Parallelogram</h2>

<p><strong>A = bh</strong></p>

<hr>

<h2>Trapezoid</h2>

<p><strong>A = ½(b₁+b₂)h</strong></p>

<hr>

<h2>Circle</h2>

<p><strong>A = πr²</strong></p>

<hr>

<h2>Examples</h2>

<p>Rectangle:</p>

<p>Length = 8</p>

<p>Width = 5</p>

<p>Area = 40 square units.</p>

<hr>

<p>Triangle:</p>

<p>Base = 10</p>

<p>Height = 6</p>

<p>Area = 30 square units.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Use height, not slanted side.</li>

<li>Don't forget ½ for triangles.</li>

<li>Area always uses square units.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Different polygons have different area formulas, but every area measures the space inside the figure.</p>

`,

        questions: [

            { q: "Area measures?", options: ["Space inside", "Distance around", "Height"], answer: "Space inside", explanation: "Definition." },
            { q: "Rectangle area?", options: ["lw", "bh", "πr²"], answer: "lw", explanation: "Length × Width." },
            { q: "Square area?", options: ["s²", "2s", "4s"], answer: "s²", explanation: "Definition." },
            { q: "Triangle area?", options: ["½bh", "bh", "lw"], answer: "½bh", explanation: "Definition." },
            { q: "Parallelogram area?", options: ["bh", "½bh", "lw"], answer: "bh", explanation: "Definition." },
            { q: "Circle area?", options: ["πr²", "2πr", "πd"], answer: "πr²", explanation: "Definition." },
            { q: "Trapezoid area?", options: ["½(b₁+b₂)h", "bh", "πr²"], answer: "½(b₁+b₂)h", explanation: "Definition." },
            { q: "Area uses?", options: ["Square units", "Linear units", "Degrees"], answer: "Square units", explanation: "Definition." },
            { q: "Area formulas belong to?", options: ["Geometry", "History", "Biology"], answer: "Geometry", explanation: "Definition." },
            { q: "Area is useful for?", options: ["Finding space", "Finding slope", "Finding probability"], answer: "Finding space", explanation: "Definition." }

        ]

    },

    "surface-area": {

        title: "Surface Area",

        subtitle: "Find the total area covering a three-dimensional object.",

        body: `

<h2>Introduction</h2>

<p><strong>Surface Area</strong> is the total area of every outside face of a solid.</p>

<hr>

<h2>Examples</h2>

<ul>

<li>Cube</li>

<li>Rectangular Prism</li>

<li>Cylinder</li>

<li>Sphere</li>

</ul>

<hr>

<h2>Cube Formula</h2>

<p><strong>SA = 6s²</strong></p>

<hr>

<h2>Rectangular Prism</h2>

<p><strong>SA = 2(lw + lh + wh)</strong></p>

<hr>

<h2>Remember</h2>

<ul>

<li>Add every outside face.</li>

<li>Surface Area uses square units.</li>

</ul>

<hr>

<h2>Real World Example</h2>

<p>Calculating how much paint is needed to cover a room.</p>

<hr>

<h2>Summary</h2>

<p>Surface area measures the outside covering of a 3D object.</p>

`,

        questions: [

            { q: "Surface area measures?", options: ["Outside of a solid", "Inside of a solid", "Height"], answer: "Outside of a solid", explanation: "Definition." },
            { q: "Surface area uses?", options: ["Square units", "Cubic units", "Linear units"], answer: "Square units", explanation: "Definition." },
            { q: "Cube surface area?", options: ["6s²", "s³", "4s"], answer: "6s²", explanation: "Definition." },
            { q: "Painting a room uses?", options: ["Surface area", "Volume", "Perimeter"], answer: "Surface area", explanation: "Real-world application." },
            { q: "Surface area belongs to?", options: ["Geometry", "Chemistry", "History"], answer: "Geometry", explanation: "Definition." },
            { q: "A cube has?", options: ["6 faces", "8 faces", "4 faces"], answer: "6 faces", explanation: "Definition." },
            { q: "Surface area adds?", options: ["All outside faces", "Only top and bottom", "Only sides"], answer: "All outside faces", explanation: "Definition." },
            { q: "Wrapping a gift requires?", options: ["Surface area", "Volume", "Slope"], answer: "Surface area", explanation: "Wrapping covers the outside." },
            { q: "Surface area is measured in?", options: ["Square units", "Cubic units", "Degrees"], answer: "Square units", explanation: "Definition." },
            { q: "Surface area is important for?", options: ["Packaging", "Probability", "Statistics"], answer: "Packaging", explanation: "Real-world application." }

        ]

    },

    "volume": {

        title: "Volume",

        subtitle: "Learn how to measure the amount of space inside a solid.",

        body: `

<h2>Introduction</h2>

<p><strong>Volume</strong> measures the amount of space inside a three-dimensional object.</p>

<hr>

<h2>Common Formulas</h2>

<p>Rectangular Prism:</p>

<p><strong>V = lwh</strong></p>

<hr>

<p>Cube:</p>

<p><strong>V = s³</strong></p>

<hr>

<p>Cylinder:</p>

<p><strong>V = πr²h</strong></p>

<hr>

<h2>Examples</h2>

<p>Cube with side 4:</p>

<p>Volume = 64 cubic units.</p>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Volume uses cubic units.</li>

<li>Do not confuse surface area with volume.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Volume measures the inside space of three-dimensional objects.</p>

`,

        questions: [

            { q: "Volume measures?", options: ["Space inside a solid", "Outside of a solid", "Distance"], answer: "Space inside a solid", explanation: "Definition." },
            { q: "Volume uses?", options: ["Cubic units", "Square units", "Degrees"], answer: "Cubic units", explanation: "Definition." },
            { q: "Cube volume?", options: ["s³", "6s²", "s²"], answer: "s³", explanation: "Definition." },
            { q: "Rectangular prism volume?", options: ["lwh", "lw", "bh"], answer: "lwh", explanation: "Definition." },
            { q: "Cylinder volume?", options: ["πr²h", "2πr", "πr²"], answer: "πr²h", explanation: "Definition." },
            { q: "Filling a swimming pool measures?", options: ["Volume", "Surface Area", "Perimeter"], answer: "Volume", explanation: "Inside space." },
            { q: "Volume belongs to?", options: ["Geometry", "History", "Biology"], answer: "Geometry", explanation: "Definition." },
            { q: "Volume of a cube with side 5?", options: ["125", "25", "30"], answer: "125", explanation: "5³=125." },
            { q: "Surface area and volume are?", options: ["Different concepts", "The same", "Always equal"], answer: "Different concepts", explanation: "One measures outside, one inside." },
            { q: "Volume is important for?", options: ["Containers", "Probability", "Angles"], answer: "Containers", explanation: "Capacity depends on volume." }

        ]

    }
    ,

    "composite-figures": {

        title: "Composite Figures",

        subtitle: "Find the area of figures made from multiple shapes.",

        body: `

<h2>Introduction</h2>

<p>A <strong>composite figure</strong> is made by combining two or more simple shapes.</p>

<hr>

<h2>Strategy</h2>

<ol>

<li>Break the figure into simple shapes.</li>

<li>Find each area separately.</li>

<li>Add or subtract the areas.</li>

</ol>

<hr>

<h2>Example</h2>

<p>A playground consists of:</p>

<ul>

<li>Rectangle = 60 m²</li>

<li>Semicircle = 25 m²</li>

</ul>

<p>Total Area = 85 m²</p>

<hr>

<h2>Real World Examples</h2>

<ul>

<li>Buildings</li>

<li>Swimming pools</li>

<li>Parks</li>

<li>Land plots</li>

</ul>

<hr>

<h2>Common Mistakes</h2>

<ul>

<li>Don't forget missing pieces.</li>

<li>Use correct formulas.</li>

<li>Keep units consistent.</li>

</ul>

<hr>

<h2>Summary</h2>

<p>Composite figures are solved by breaking them into easier shapes.</p>

`,

        questions: [

            { q: "Composite figures are made of?", options: ["Multiple shapes", "Only circles", "Only triangles"], answer: "Multiple shapes", explanation: "Definition." },
            { q: "First step?", options: ["Break into simple shapes", "Find perimeter", "Guess"], answer: "Break into simple shapes", explanation: "Strategy." },
            { q: "Areas are then?", options: ["Added or subtracted", "Multiplied", "Ignored"], answer: "Added or subtracted", explanation: "Strategy." },
            { q: "Composite figures use?", options: ["Area formulas", "Probability", "Statistics"], answer: "Area formulas", explanation: "Definition." },
            { q: "Buildings often have?", options: ["Composite shapes", "Only rectangles", "Only circles"], answer: "Composite shapes", explanation: "Real-world example." },
            { q: "Swimming pools are often?", options: ["Composite figures", "Triangles only", "Circles only"], answer: "Composite figures", explanation: "Real-world example." },
            { q: "Composite figures belong to?", options: ["Geometry", "History", "Chemistry"], answer: "Geometry", explanation: "Definition." },
            { q: "Units remain?", options: ["Square units", "Degrees", "Linear only"], answer: "Square units", explanation: "Area units." },
            { q: "Area calculations require?", options: ["Correct formulas", "Guessing", "Probability"], answer: "Correct formulas", explanation: "Definition." },
            { q: "Composite figures prepare students for?", options: ["Real-world geometry", "Chemistry", "Programming"], answer: "Real-world geometry", explanation: "Applications." }

        ]

    },

    "unit9-review": {

        title: "Unit 9 Review",

        subtitle: "Review Area, Surface Area, and Volume.",

        body: `

<h2>Lessons Covered</h2>

<ol>

<li>Area of Polygons</li>

<li>Surface Area</li>

<li>Volume</li>

<li>Composite Figures</li>

</ol>

<hr>

<h2>Important Formulas</h2>

<ul>

<li>Rectangle: A = lw</li>

<li>Triangle: A = ½bh</li>

<li>Circle: A = πr²</li>

<li>Cube SA = 6s²</li>

<li>Cube V = s³</li>

<li>Rectangular Prism V = lwh</li>

<li>Cylinder V = πr²h</li>

</ul>

<hr>

<h2>Remember</h2>

<ul>

<li>Area → square units</li>

<li>Surface Area → square units</li>

<li>Volume → cubic units</li>

</ul>

<hr>

<p>The next page is your Unit 9 Test.</p>

`,

        questions: [

            {
                q: "Ready for the Unit 9 Test?",
                options: [
                    "Yes!",
                    "I need another review."
                ],
                answer: "Yes!",
                explanation: "Good luck!"
            }

        ]

    },

    "unit9-test": {

        title: "Unit 9 Test",

        subtitle: "Area, Surface Area & Volume Assessment",

        body: `

<h2>Unit 9 Test</h2>

<p>This assessment covers all lessons from Unit 9.</p>

<p><strong>40 Questions</strong></p>

`,

        questions: [

            { q: "Area measures?", options: ["Space inside", "Outside", "Height"], answer: "Space inside", explanation: "Definition." },
            { q: "Rectangle area?", options: ["lw", "bh", "πr²"], answer: "lw", explanation: "Formula." },
            { q: "Triangle area?", options: ["½bh", "bh", "lw"], answer: "½bh", explanation: "Formula." },
            { q: "Circle area?", options: ["πr²", "2πr", "πd"], answer: "πr²", explanation: "Formula." },
            { q: "Parallelogram area?", options: ["bh", "½bh", "lw"], answer: "bh", explanation: "Formula." },

            { q: "Surface area measures?", options: ["Outside of a solid", "Inside", "Distance"], answer: "Outside of a solid", explanation: "Definition." },
            { q: "Volume measures?", options: ["Inside of a solid", "Outside", "Slope"], answer: "Inside of a solid", explanation: "Definition." },
            { q: "Surface area uses?", options: ["Square units", "Cubic units", "Linear units"], answer: "Square units", explanation: "Definition." },
            { q: "Volume uses?", options: ["Cubic units", "Square units", "Degrees"], answer: "Cubic units", explanation: "Definition." },
            { q: "Cube surface area?", options: ["6s²", "s³", "4s"], answer: "6s²", explanation: "Formula." },

            { q: "Cube volume?", options: ["s³", "6s²", "s²"], answer: "s³", explanation: "Formula." },
            { q: "Rectangular prism volume?", options: ["lwh", "lw", "bh"], answer: "lwh", explanation: "Formula." },
            { q: "Cylinder volume?", options: ["πr²h", "πr²", "2πr"], answer: "πr²h", explanation: "Formula." },
            { q: "Composite figures are solved by?", options: ["Breaking into smaller shapes", "Guessing", "Using slope"], answer: "Breaking into smaller shapes", explanation: "Strategy." },
            { q: "Composite figure areas are?", options: ["Added or subtracted", "Multiplied", "Ignored"], answer: "Added or subtracted", explanation: "Strategy." },

            { q: "Paint required depends on?", options: ["Surface area", "Volume", "Slope"], answer: "Surface area", explanation: "You paint the outside." },
            { q: "Filling a fish tank depends on?", options: ["Volume", "Area", "Perimeter"], answer: "Volume", explanation: "Capacity." },
            { q: "Area always uses?", options: ["Square units", "Cubic units", "Linear units"], answer: "Square units", explanation: "Definition." },
            { q: "Volume always uses?", options: ["Cubic units", "Square units", "Linear units"], answer: "Cubic units", explanation: "Definition." },
            { q: "Geometry studies?", options: ["Shapes and space", "History", "Music"], answer: "Shapes and space", explanation: "Definition." },

            { q: "A blueprint is an example of?", options: ["Scale drawing", "Probability", "Statistics"], answer: "Scale drawing", explanation: "Real-world application." },
            { q: "Land surveys use?", options: ["Area", "Music", "Biology"], answer: "Area", explanation: "Real-world application." },
            { q: "Packaging uses?", options: ["Surface area", "Probability", "Fractions"], answer: "Surface area", explanation: "Real-world application." },
            { q: "Storage containers use?", options: ["Volume", "Angles", "Slope"], answer: "Volume", explanation: "Capacity." },
            { q: "Composite figures appear in?", options: ["Architecture", "History", "Chemistry"], answer: "Architecture", explanation: "Real-world application." },

            { q: "The Geometry formulas belong to?", options: ["Geometry", "Biology", "Economics"], answer: "Geometry", explanation: "Definition." },
            { q: "The last instructional unit is?", options: ["Unit 9", "Unit 7", "Unit 5"], answer: "Unit 9", explanation: "Correct." },
            { q: "Area formulas prepare students for?", options: ["Higher math", "Cooking", "Music"], answer: "Higher math", explanation: "Foundation." },
            { q: "Surface area is useful for?", options: ["Wrapping objects", "Finding slopes", "Finding averages"], answer: "Wrapping objects", explanation: "Real-world use." },
            { q: "Volume is useful for?", options: ["Finding capacity", "Finding perimeter", "Finding probability"], answer: "Finding capacity", explanation: "Definition." },

            { q: "Completing this test means?", options: ["Unit 9 Complete", "Geometry Complete", "Algebra Complete"], answer: "Unit 9 Complete", explanation: "Congratulations!" }

        ]

    }
    ,

    "geometry-final-review": {

        title: "Geometry Final Review",

        subtitle: "Review every major concept from the Geometry course.",

        body: `

<h2>🎉 Congratulations!</h2>

<p>You have completed all Geometry units.</p>

<hr>

<h2>Unit 1</h2>

<ul>
<li>Points</li>
<li>Lines</li>
<li>Planes</li>
<li>Segments</li>
<li>Rays</li>
</ul>

<hr>

<h2>Unit 2</h2>

<ul>
<li>Angle Types</li>
<li>Complementary Angles</li>
<li>Supplementary Angles</li>
<li>Vertical Angles</li>
<li>Angle Relationships</li>
</ul>

<hr>

<h2>Unit 3</h2>

<ul>
<li>Parallel Lines</li>
<li>Transversals</li>
<li>Corresponding Angles</li>
<li>Alternate Interior Angles</li>
<li>Alternate Exterior Angles</li>
</ul>

<hr>

<h2>Unit 4</h2>

<ul>
<li>Triangle Classification</li>
<li>Triangle Angle Sum</li>
<li>Pythagorean Theorem</li>
<li>Congruent Triangles</li>
<li>Similar Triangles</li>
</ul>

<hr>

<h2>Unit 5</h2>

<ul>
<li>Quadrilaterals</li>
<li>Parallelograms</li>
<li>Rectangles</li>
<li>Rhombuses</li>
<li>Squares</li>
<li>Trapezoids</li>
<li>Kites</li>
</ul>

<hr>

<h2>Unit 6</h2>

<ul>
<li>Circles</li>
<li>Radius</li>
<li>Diameter</li>
<li>Circumference</li>
<li>Area</li>
<li>Arcs</li>
<li>Tangents</li>
</ul>

<hr>

<h2>Unit 7</h2>

<ul>
<li>Distance Formula</li>
<li>Midpoint Formula</li>
<li>Slope</li>
<li>Equations of Lines</li>
</ul>

<hr>

<h2>Unit 8</h2>

<ul>
<li>Translations</li>
<li>Reflections</li>
<li>Rotations</li>
<li>Dilations</li>
<li>Symmetry</li>
</ul>

<hr>

<h2>Unit 9</h2>

<ul>
<li>Area</li>
<li>Surface Area</li>
<li>Volume</li>
<li>Composite Figures</li>
</ul>

<hr>

<h2>Important Formulas</h2>

<ul>

<li>Distance Formula</li>

<li>Midpoint Formula</li>

<li>Slope Formula</li>

<li>y = mx + b</li>

<li>Pythagorean Theorem</li>

<li>C = 2πr</li>

<li>A = πr²</li>

<li>Rectangle Area = lw</li>

<li>Triangle Area = ½bh</li>

<li>Cube Surface Area = 6s²</li>

<li>Cube Volume = s³</li>

<li>Cylinder Volume = πr²h</li>

</ul>

<hr>

<h2>Ready?</h2>

<p>The next page is the comprehensive Geometry Final Exam.</p>

`,

        questions: [

            {
                q: "Ready to take the Geometry Final Exam?",
                options: [
                    "Absolutely!",
                    "I need another review."
                ],
                answer: "Absolutely!",
                explanation: "Good luck on the final!"
            }

        ]

    }
    ,

    "geometry-final-exam": {

        title: "Geometry Final Exam",

        subtitle: "Comprehensive Assessment (Questions 1–25 of 100)",

        body: `

<h2>Geometry Final Exam</h2>

<p>This comprehensive final covers every major Geometry topic.</p>

<p><strong>Questions 1–25 of 100</strong></p>

<p>Good luck!</p>

`,

        questions: [

            { q: "How many sides does a quadrilateral have?", options: ["4", "3", "5"], answer: "4", explanation: "Quadrilaterals have four sides." },

            { q: "How many degrees are in a triangle?", options: ["180°", "360°", "90°"], answer: "180°", explanation: "Triangle Angle Sum Theorem." },

            { q: "Vertical angles are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "Vertical angles are always equal." },

            { q: "Complementary angles total?", options: ["90°", "180°", "360°"], answer: "90°", explanation: "Definition." },

            { q: "Supplementary angles total?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Definition." },

            { q: "Parallel lines never?", options: ["Intersect", "Slope", "Continue"], answer: "Intersect", explanation: "Definition." },

            { q: "Corresponding angles are congruent when lines are?", options: ["Parallel", "Perpendicular", "Vertical"], answer: "Parallel", explanation: "Parallel Line Theorem." },

            { q: "Alternate interior angles are?", options: ["Congruent", "Supplementary", "Complementary"], answer: "Congruent", explanation: "Parallel Line Theorem." },

            { q: "The Pythagorean Theorem is?", options: ["a²+b²=c²", "a+b=c", "2πr"], answer: "a²+b²=c²", explanation: "Definition." },

            { q: "The longest side of a right triangle is?", options: ["Hypotenuse", "Leg", "Median"], answer: "Hypotenuse", explanation: "Definition." },

            { q: "Every square is a?", options: ["Rectangle", "Trapezoid", "Kite"], answer: "Rectangle", explanation: "Squares satisfy the definition of rectangles." },

            { q: "Every rectangle is a?", options: ["Parallelogram", "Square", "Rhombus"], answer: "Parallelogram", explanation: "Opposite sides are parallel." },

            { q: "A rhombus has?", options: ["Four congruent sides", "Four right angles", "One pair of parallel sides"], answer: "Four congruent sides", explanation: "Definition." },

            { q: "A trapezoid has?", options: ["One pair of parallel sides", "Two pairs", "No parallel sides"], answer: "One pair of parallel sides", explanation: "Definition." },

            { q: "A kite has?", options: ["Two pairs of adjacent congruent sides", "Four equal sides", "Four right angles"], answer: "Two pairs of adjacent congruent sides", explanation: "Definition." },

            { q: "Circumference formula?", options: ["2πr", "πr²", "bh"], answer: "2πr", explanation: "Definition." },

            { q: "Circle area formula?", options: ["πr²", "2πr", "πd"], answer: "πr²", explanation: "Definition." },

            { q: "A tangent touches a circle at?", options: ["One point", "Two points", "Three points"], answer: "One point", explanation: "Definition." },

            { q: "Distance Formula comes from?", options: ["Pythagorean Theorem", "Circle Formula", "Slope Formula"], answer: "Pythagorean Theorem", explanation: "It is derived from the theorem." },

            { q: "Midpoint Formula finds?", options: ["Halfway point", "Distance", "Slope"], answer: "Halfway point", explanation: "Definition." },

            { q: "Slope equals?", options: ["Rise/Run", "Run/Rise", "Area/Base"], answer: "Rise/Run", explanation: "Definition." },

            { q: "Horizontal lines have slope?", options: ["0", "Undefined", "1"], answer: "0", explanation: "Definition." },

            { q: "Vertical lines have slope?", options: ["Undefined", "0", "1"], answer: "Undefined", explanation: "Definition." },

            { q: "Slope-intercept form is?", options: ["y=mx+b", "A=πr²", "2πr"], answer: "y=mx+b", explanation: "Definition." },

            { q: "A translation is a?", options: ["Slide", "Flip", "Turn"], answer: "Slide", explanation: "Definition." },

            { q: "A reflection is a?", options: ["Flip", "Slide", "Turn"], answer: "Flip", explanation: "A reflection flips a figure across a line." },

            { q: "A rotation is a?", options: ["Turn", "Flip", "Slide"], answer: "Turn", explanation: "A rotation turns a figure around a point." },

            { q: "A dilation changes?", options: ["Size", "Shape", "Angles"], answer: "Size", explanation: "Dilations change size but preserve shape." },

            { q: "Scale factor greater than 1 means?", options: ["Enlargement", "Reduction", "Reflection"], answer: "Enlargement", explanation: "The image becomes larger." },

            { q: "Scale factor between 0 and 1 means?", options: ["Reduction", "Enlargement", "Translation"], answer: "Reduction", explanation: "The image becomes smaller." },

            { q: "A square has how many lines of symmetry?", options: ["4", "2", "1"], answer: "4", explanation: "A square has four lines of symmetry." },

            { q: "A rectangle has how many lines of symmetry?", options: ["2", "4", "1"], answer: "2", explanation: "A rectangle has two lines of symmetry." },

            { q: "A circle has?", options: ["Infinite lines of symmetry", "4 lines", "2 lines"], answer: "Infinite lines of symmetry", explanation: "Every diameter is a line of symmetry." },

            { q: "Area of a rectangle?", options: ["lw", "bh", "πr²"], answer: "lw", explanation: "Multiply length by width." },

            { q: "Area of a triangle?", options: ["½bh", "bh", "lw"], answer: "½bh", explanation: "Triangle area formula." },

            { q: "Area of a parallelogram?", options: ["bh", "½bh", "lw"], answer: "bh", explanation: "Base times height." },

            { q: "Area of a trapezoid?", options: ["½(b₁+b₂)h", "bh", "πr²"], answer: "½(b₁+b₂)h", explanation: "Average of bases times height." },

            { q: "Surface area measures?", options: ["Outside of a solid", "Inside of a solid", "Distance"], answer: "Outside of a solid", explanation: "Surface area covers the exterior." },

            { q: "Volume measures?", options: ["Space inside a solid", "Outside area", "Height"], answer: "Space inside a solid", explanation: "Volume measures capacity." },

            { q: "Cube surface area?", options: ["6s²", "s³", "4s"], answer: "6s²", explanation: "Six congruent square faces." },

            { q: "Cube volume?", options: ["s³", "6s²", "s²"], answer: "s³", explanation: "Side cubed." },

            { q: "Rectangular prism volume?", options: ["lwh", "lw", "bh"], answer: "lwh", explanation: "Length × Width × Height." },

            { q: "Cylinder volume?", options: ["πr²h", "2πr", "πr²"], answer: "πr²h", explanation: "Area of base × height." },

            { q: "Composite figures are solved by?", options: ["Breaking into simpler shapes", "Guessing", "Using slope"], answer: "Breaking into simpler shapes", explanation: "Solve each simple shape separately." },

            { q: "A chord connects?", options: ["Two points on a circle", "The center to the circle", "Two centers"], answer: "Two points on a circle", explanation: "Definition of a chord." },

            { q: "The diameter is?", options: ["The longest chord", "Half a radius", "An arc"], answer: "The longest chord", explanation: "Every diameter is also a chord." },

            { q: "Central angle equals?", options: ["Its intercepted arc", "Half its arc", "Twice its arc"], answer: "Its intercepted arc", explanation: "Central angle measure equals intercepted arc measure." },

            { q: "Inscribed angle equals?", options: ["Half its intercepted arc", "Its intercepted arc", "Twice its intercepted arc"], answer: "Half its intercepted arc", explanation: "Inscribed Angle Theorem." },

            { q: "Parallel lines have?", options: ["Equal slopes", "Negative reciprocal slopes", "Undefined slopes"], answer: "Equal slopes", explanation: "Parallel lines have the same slope." },

            { q: "Perpendicular lines have?", options: ["Negative reciprocal slopes", "Equal slopes", "Zero slopes"], answer: "Negative reciprocal slopes", explanation: "Their slopes are negative reciprocals." },

            { q: "A point has?", options: ["No size", "Length", "Area"], answer: "No size", explanation: "A point represents only a location." },

            { q: "A line extends?", options: ["Forever in both directions", "Only one direction", "Between two endpoints"], answer: "Forever in both directions", explanation: "A line has no endpoints." },

            { q: "A ray has?", options: ["One endpoint", "Two endpoints", "No endpoints"], answer: "One endpoint", explanation: "A ray starts at one endpoint and extends forever." },

            { q: "A segment has?", options: ["Two endpoints", "One endpoint", "No endpoints"], answer: "Two endpoints", explanation: "A segment has a beginning and an end." },

            { q: "A midpoint divides a segment into?", options: ["Two equal parts", "Three equal parts", "Unequal parts"], answer: "Two equal parts", explanation: "A midpoint is exactly halfway." },

            { q: "Segment Addition says?", options: ["AB + BC = AC", "AB × BC = AC", "AB - BC = AC"], answer: "AB + BC = AC", explanation: "The whole segment equals the sum of its parts." },

            { q: "A linear pair totals?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Linear pairs are supplementary." },

            { q: "An acute angle is?", options: ["Less than 90°", "Exactly 90°", "Greater than 90°"], answer: "Less than 90°", explanation: "Acute angles are smaller than right angles." },

            { q: "An obtuse angle is?", options: ["Greater than 90° but less than 180°", "Less than 90°", "Exactly 180°"], answer: "Greater than 90° but less than 180°", explanation: "That is the definition of obtuse." },

            { q: "A right angle measures?", options: ["90°", "180°", "360°"], answer: "90°", explanation: "A right angle is exactly 90 degrees." },

            { q: "Same-side interior angles are?", options: ["Supplementary", "Congruent", "Complementary"], answer: "Supplementary", explanation: "They add to 180° when lines are parallel." },

            { q: "Same-side exterior angles are?", options: ["Supplementary", "Congruent", "Vertical"], answer: "Supplementary", explanation: "They also add to 180°." },

            { q: "Triangle Inequality says?", options: ["Two sides must sum greater than the third", "All sides must be equal", "Angles must be equal"], answer: "Two sides must sum greater than the third", explanation: "This determines whether a triangle can exist." },

            { q: "Can sides 4,5,10 form a triangle?", options: ["No", "Yes", "Always"], answer: "No", explanation: "4 + 5 = 9, which is not greater than 10." },

            { q: "Can sides 6,8,10 form a triangle?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "All side sums are greater than the third side." },

            { q: "A 45-45-90 triangle has side ratio?", options: ["1:1:√2", "1:√3:2", "3:4:5"], answer: "1:1:√2", explanation: "That is the special right triangle ratio." },

            { q: "A 30-60-90 triangle has side ratio?", options: ["1:√3:2", "1:1:√2", "5:12:13"], answer: "1:√3:2", explanation: "That is the standard ratio." },

            { q: "The centroid is made by?", options: ["Medians", "Altitudes", "Tangents"], answer: "Medians", explanation: "The centroid is where medians meet." },

            { q: "The orthocenter is made by?", options: ["Altitudes", "Medians", "Angle bisectors"], answer: "Altitudes", explanation: "The orthocenter is where altitudes meet." },

            { q: "The incenter is made by?", options: ["Angle bisectors", "Medians", "Perpendicular bisectors"], answer: "Angle bisectors", explanation: "The incenter is where angle bisectors meet." },

            { q: "The circumcenter is made by?", options: ["Perpendicular bisectors", "Altitudes", "Medians"], answer: "Perpendicular bisectors", explanation: "The circumcenter is where perpendicular bisectors meet." },

            { q: "A diameter is how many radii?", options: ["2", "1", "4"], answer: "2", explanation: "Diameter = 2 × radius." },

            { q: "If radius is 7, diameter is?", options: ["14", "7", "21"], answer: "14", explanation: "2 × 7 = 14." },

            { q: "If diameter is 18, radius is?", options: ["9", "18", "36"], answer: "9", explanation: "18 ÷ 2 = 9." },

            { q: "Completing Questions 51–75 means?", options: ["You are 75% through the final", "Geometry is complete", "Unit 1 is complete"], answer: "You are 75% through the final", explanation: "Only Questions 76–100 remain." },



            { q: "A polygon is?", options: ["A closed figure with straight sides", "A circle", "A curved figure"], answer: "A closed figure with straight sides", explanation: "Definition of a polygon." },

            { q: "A regular polygon has?", options: ["Equal sides and equal angles", "Only equal sides", "Only equal angles"], answer: "Equal sides and equal angles", explanation: "Definition." },

            { q: "The sum of the interior angles of a quadrilateral is?", options: ["360°", "180°", "540°"], answer: "360°", explanation: "All quadrilaterals have 360° of interior angles." },

            { q: "The exterior angles of any polygon always sum to?", options: ["360°", "180°", "540°"], answer: "360°", explanation: "This is true for every polygon." },

            { q: "Congruent figures have the same?", options: ["Size and shape", "Area only", "Perimeter only"], answer: "Size and shape", explanation: "Definition of congruent figures." },

            { q: "Similar figures have the same?", options: ["Shape", "Size", "Perimeter"], answer: "Shape", explanation: "Similar figures may have different sizes." },

            { q: "A scale drawing uses?", options: ["Proportions", "Random measurements", "Angles only"], answer: "Proportions", explanation: "Scale drawings preserve proportions." },

            { q: "Blueprints are examples of?", options: ["Scale drawings", "Reflections", "Translations"], answer: "Scale drawings", explanation: "Architects use scale drawings." },

            { q: "Which transformation preserves congruence?", options: ["Translation", "Dilation", "Scaling"], answer: "Translation", explanation: "Translations preserve both size and shape." },

            { q: "Which transformation changes size?", options: ["Dilation", "Rotation", "Reflection"], answer: "Dilation", explanation: "Only dilations change size." },

            { q: "Which transformation flips a figure?", options: ["Reflection", "Translation", "Rotation"], answer: "Reflection", explanation: "Definition." },

            { q: "Which transformation turns a figure?", options: ["Rotation", "Reflection", "Translation"], answer: "Rotation", explanation: "Definition." },

            { q: "Which transformation slides a figure?", options: ["Translation", "Rotation", "Reflection"], answer: "Translation", explanation: "Definition." },

            { q: "The coordinate plane has?", options: ["An x-axis and a y-axis", "Only an x-axis", "Only a y-axis"], answer: "An x-axis and a y-axis", explanation: "Definition." },

            { q: "The origin is located at?", options: ["(0,0)", "(1,1)", "(0,1)"], answer: "(0,0)", explanation: "Definition." },

            { q: "Distance is measured in?", options: ["Linear units", "Square units", "Cubic units"], answer: "Linear units", explanation: "Distance is one-dimensional." },

            { q: "Area is measured in?", options: ["Square units", "Linear units", "Cubic units"], answer: "Square units", explanation: "Area is two-dimensional." },

            { q: "Volume is measured in?", options: ["Cubic units", "Square units", "Linear units"], answer: "Cubic units", explanation: "Volume is three-dimensional." },

            { q: "Which branch of mathematics studies shapes, space, and measurement?", options: ["Geometry", "Algebra", "Statistics"], answer: "Geometry", explanation: "Definition." },

            { q: "Geometry is useful in?", options: ["Engineering, architecture, graphics, and design", "Only mathematics", "Only construction"], answer: "Engineering, architecture, graphics, and design", explanation: "Geometry has many real-world applications." },

            { q: "Which statement is true?", options: ["All squares are rectangles", "All rectangles are squares", "All trapezoids are squares"], answer: "All squares are rectangles", explanation: "Squares satisfy all properties of rectangles." },

            { q: "Which statement is true?", options: ["All squares are rhombuses", "All rhombuses are squares", "All rectangles are rhombuses"], answer: "All squares are rhombuses", explanation: "Squares have four congruent sides." },

            { q: "What is the primary goal of Geometry?", options: ["Understand shapes, space, and their relationships", "Solve chemical equations", "Study historical events"], answer: "Understand shapes, space, and their relationships", explanation: "This summarizes the entire course." },

            { q: "Congratulations! You have completed?", options: ["The Geometry Course", "Unit 1", "Only the Final Exam"], answer: "The Geometry Course", explanation: "Outstanding work! You have finished the complete Geometry curriculum." },

        ]
    },















































































    "angles": {
        title: "Angles",
        subtitle: "Understand angle types and measurements.",
        body: `
        <p>An angle is formed by two rays that share an endpoint.</p>

        <h2>Key Ideas</h2>
        <p>The shared endpoint is called the <strong>vertex</strong>.</p>
        <p>Angles are measured in degrees.</p>

        <h2>Angle Types</h2>
        <p><strong>Acute</strong>: less than 90°</p>
        <p><strong>Right</strong>: exactly 90°</p>
        <p><strong>Obtuse</strong>: greater than 90° but less than 180°</p>
        <p><strong>Straight</strong>: exactly 180°</p>

        <h2>Common Mistake</h2>
        <p>Do not call every wide angle obtuse. If it is exactly 180°, it is a straight angle.</p>
    `,
        questions: [
            { q: "An angle is formed by?", options: ["Two rays", "Two circles", "Two planes"], answer: "Two rays", explanation: "Angles are formed by two rays sharing an endpoint." },
            { q: "The shared endpoint is called?", options: ["Vertex", "Segment", "Plane"], answer: "Vertex", explanation: "The vertex is the common endpoint." },
            { q: "An acute angle is?", options: ["Less than 90°", "Exactly 90°", "More than 180°"], answer: "Less than 90°", explanation: "Acute angles are smaller than 90°." },
            { q: "A right angle is?", options: ["90°", "180°", "45°"], answer: "90°", explanation: "A right angle measures exactly 90°." },
            { q: "An obtuse angle is?", options: ["Between 90° and 180°", "Less than 90°", "Exactly 90°"], answer: "Between 90° and 180°", explanation: "Obtuse angles are greater than 90° but less than 180°." },

            { q: "A straight angle measures?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "A straight angle forms a straight line." },
            { q: "A full rotation is?", options: ["360°", "180°", "90°"], answer: "360°", explanation: "One full turn is 360°." },
            { q: "45° is what type of angle?", options: ["Acute", "Right", "Obtuse"], answer: "Acute", explanation: "45° is less than 90°." },
            { q: "90° is what type of angle?", options: ["Right", "Acute", "Straight"], answer: "Right", explanation: "90° is a right angle." },
            { q: "120° is what type of angle?", options: ["Obtuse", "Acute", "Right"], answer: "Obtuse", explanation: "120° is between 90° and 180°." },

            { q: "Two angles that add to 90° are?", options: ["Complementary", "Supplementary", "Vertical"], answer: "Complementary", explanation: "Complementary angles sum to 90°." },
            { q: "Two angles that add to 180° are?", options: ["Supplementary", "Complementary", "Adjacent"], answer: "Supplementary", explanation: "Supplementary angles sum to 180°." },
            { q: "If one complementary angle is 30°, the other is?", options: ["60°", "90°", "150°"], answer: "60°", explanation: "90 - 30 = 60." },
            { q: "If one supplementary angle is 70°, the other is?", options: ["110°", "20°", "70°"], answer: "110°", explanation: "180 - 70 = 110." },
            { q: "Vertical angles are?", options: ["Equal", "Always 90°", "Always 180°"], answer: "Equal", explanation: "Vertical angles are congruent." },

            { q: "Adjacent angles share?", options: ["A side and vertex", "Only a circle", "No point"], answer: "A side and vertex", explanation: "Adjacent angles are next to each other." },
            { q: "Angles are measured in?", options: ["Degrees", "Feet", "Liters"], answer: "Degrees", explanation: "Angles are commonly measured in degrees." },
            { q: "The symbol for degrees is?", options: ["°", "%", "$"], answer: "°", explanation: "The degree symbol is °." },
            { q: "180° forms a?", options: ["Line", "Square", "Circle"], answer: "Line", explanation: "A straight angle forms a line." },
            { q: "Angles are important in?", options: ["Geometry", "Only statistics", "Only grammar"], answer: "Geometry", explanation: "Angles are a core geometry concept." }
        ]
    },

    "parallel-and-perpendicular-lines": {
        title: "Parallel and Perpendicular Lines",
        subtitle: "Compare lines by direction and intersection.",
        body: `
        <p>Lines can be compared by whether they intersect and what angle they form.</p>

        <h2>Key Ideas</h2>
        <p><strong>Parallel lines</strong> never intersect.</p>
        <p><strong>Perpendicular lines</strong> intersect at a right angle.</p>

        <h2>Examples</h2>
        <p>Railroad tracks are a real-world example of parallel lines.</p>
        <p>The corner of a square shows perpendicular lines.</p>

        <h2>Common Mistake</h2>
        <p>Lines that look close together are not automatically parallel. Parallel lines must never intersect.</p>
    `,
        questions: [
            { q: "Parallel lines?", options: ["Never intersect", "Always intersect", "Form circles"], answer: "Never intersect", explanation: "Parallel lines stay the same distance apart." },
            { q: "Perpendicular lines intersect at?", options: ["90°", "180°", "45°"], answer: "90°", explanation: "Perpendicular lines form right angles." },
            { q: "Parallel lines have the same?", options: ["Direction", "Endpoint", "Length always"], answer: "Direction", explanation: "They run in the same direction." },
            { q: "Perpendicular lines form?", options: ["Right angles", "Only acute angles", "Only obtuse angles"], answer: "Right angles", explanation: "Right angles measure 90°." },
            { q: "Railroad tracks are an example of?", options: ["Parallel lines", "Perpendicular lines", "Curved lines"], answer: "Parallel lines", explanation: "Tracks run side by side without meeting." },

            { q: "The corner of a square shows?", options: ["Perpendicular lines", "Parallel lines only", "No angle"], answer: "Perpendicular lines", explanation: "Square corners are right angles." },
            { q: "Parallel lines can be marked with?", options: ["Arrow marks", "Dots only", "Circles only"], answer: "Arrow marks", explanation: "Arrow markings often show parallel lines." },
            { q: "Perpendicular lines are often marked with?", options: ["Small square", "Arrow", "Curved mark"], answer: "Small square", explanation: "A small square marks a right angle." },
            { q: "If two lines intersect at 90°, they are?", options: ["Perpendicular", "Parallel", "Skew"], answer: "Perpendicular", explanation: "That is the definition." },
            { q: "If two lines never meet, they are?", options: ["Parallel", "Perpendicular", "Adjacent"], answer: "Parallel", explanation: "Parallel lines never intersect." },

            { q: "Parallel lines stay?", options: ["Same distance apart", "Closer together", "Farther apart"], answer: "Same distance apart", explanation: "They remain equally spaced." },
            { q: "Perpendicular means?", options: ["At right angles", "Never touching", "Same direction"], answer: "At right angles", explanation: "Perpendicular lines meet at 90°." },
            { q: "Horizontal and vertical lines are usually?", options: ["Perpendicular", "Parallel", "Same line"], answer: "Perpendicular", explanation: "They meet at right angles." },
            { q: "Two horizontal lines are usually?", options: ["Parallel", "Perpendicular", "Intersecting"], answer: "Parallel", explanation: "They go in the same direction." },
            { q: "Two vertical lines are usually?", options: ["Parallel", "Perpendicular", "Intersecting"], answer: "Parallel", explanation: "They go in the same direction." },

            { q: "Parallel lines have how many intersection points?", options: ["0", "1", "2"], answer: "0", explanation: "They never meet." },
            { q: "Perpendicular lines have how many intersection points?", options: ["1", "0", "Many"], answer: "1", explanation: "Two lines meet at one point." },
            { q: "A right angle measures?", options: ["90°", "180°", "360°"], answer: "90°", explanation: "Right angle definition." },
            { q: "Parallel and perpendicular lines are important in?", options: ["Geometry", "Only reading", "Only history"], answer: "Geometry", explanation: "They are used constantly in geometry." },
            { q: "Street grids often contain?", options: ["Parallel and perpendicular lines", "Only circles", "Only triangles"], answer: "Parallel and perpendicular lines", explanation: "Many streets form grid patterns." }
        ]
    },


    "triangles": {
        title: "Triangles",
        subtitle: "Learn the basic properties of triangles.",
        body: `
        <p>A triangle is a polygon with three sides and three angles.</p>

        <h2>Key Ideas</h2>
        <p>Every triangle has three sides.</p>
        <p>Every triangle has three angles.</p>
        <p>The inside angles of every triangle add to 180°.</p>

        <h2>Types by sides</h2>
        <p><strong>Equilateral</strong>: three equal sides.</p>
        <p><strong>Isosceles</strong>: at least two equal sides.</p>
        <p><strong>Scalene</strong>: no equal sides.</p>

        <h2>Types by angles</h2>
        <p><strong>Acute</strong>: all angles are less than 90°.</p>
        <p><strong>Right</strong>: one angle is 90°.</p>
        <p><strong>Obtuse</strong>: one angle is greater than 90°.</p>
    `,
        questions: [
            { q: "A triangle has how many sides?", options: ["3", "4", "5"], answer: "3", explanation: "A triangle has exactly three sides." },
            { q: "A triangle has how many angles?", options: ["3", "4", "2"], answer: "3", explanation: "A triangle has exactly three angles." },
            { q: "Triangle angles add to?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "The interior angles of a triangle always add to 180°." },
            { q: "A triangle is a type of?", options: ["Polygon", "Circle", "Line"], answer: "Polygon", explanation: "A polygon is a closed figure made of straight sides." },
            { q: "If two angles are 50° and 60°, the third angle is?", options: ["70°", "80°", "90°"], answer: "70°", explanation: "180 - 50 - 60 = 70." },

            { q: "An equilateral triangle has?", options: ["3 equal sides", "2 equal sides", "No equal sides"], answer: "3 equal sides", explanation: "Equilateral means all sides are equal." },
            { q: "An isosceles triangle has?", options: ["At least 2 equal sides", "No equal sides", "4 equal sides"], answer: "At least 2 equal sides", explanation: "Isosceles triangles have at least two equal sides." },
            { q: "A scalene triangle has?", options: ["No equal sides", "3 equal sides", "2 equal sides"], answer: "No equal sides", explanation: "Scalene means all sides are different." },
            { q: "A right triangle has?", options: ["One 90° angle", "Three 90° angles", "No angles"], answer: "One 90° angle", explanation: "A right triangle has exactly one right angle." },
            { q: "An acute triangle has?", options: ["All angles less than 90°", "One angle over 90°", "One 180° angle"], answer: "All angles less than 90°", explanation: "Acute triangles have three acute angles." },

            { q: "An obtuse triangle has?", options: ["One angle greater than 90°", "All angles 90°", "No angles"], answer: "One angle greater than 90°", explanation: "An obtuse triangle has one obtuse angle." },
            { q: "Can a triangle have two right angles?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Two right angles would already total 180°, leaving no third angle." },
            { q: "Can a triangle have two obtuse angles?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Two obtuse angles would total more than 180°." },
            { q: "If two triangle angles are 45° and 45°, the third is?", options: ["90°", "45°", "100°"], answer: "90°", explanation: "180 - 45 - 45 = 90." },
            { q: "If two triangle angles are 30° and 60°, the third is?", options: ["90°", "60°", "30°"], answer: "90°", explanation: "180 - 30 - 60 = 90." },

            { q: "Triangles can be classified by?", options: ["Sides and angles", "Only color", "Only area"], answer: "Sides and angles", explanation: "Triangles are commonly classified both ways." },
            { q: "The longest side is opposite the?", options: ["Largest angle", "Smallest angle", "Middle angle"], answer: "Largest angle", explanation: "Longer sides are across from larger angles." },
            { q: "The shortest side is opposite the?", options: ["Smallest angle", "Largest angle", "Right angle always"], answer: "Smallest angle", explanation: "Shorter sides are across from smaller angles." },
            { q: "A 3-sided polygon is called?", options: ["Triangle", "Square", "Pentagon"], answer: "Triangle", explanation: "A triangle has exactly three sides." },
            { q: "Triangle angle sum is important in?", options: ["Geometry", "Grammar", "History"], answer: "Geometry", explanation: "It is one of the core rules of geometry." }
        ]
    },

    "triangle-congruence": {
        title: "Triangle Congruence",
        subtitle: "Learn when two triangles are exactly the same size and shape.",
        body: `
        <p>Congruent triangles have the same size and the same shape.</p>

        <h2>Key Ideas</h2>
        <p>Corresponding sides are equal.</p>
        <p>Corresponding angles are equal.</p>

        <h2>Congruence Rules</h2>
        <p><strong>SSS</strong>: Side-Side-Side</p>
        <p><strong>SAS</strong>: Side-Angle-Side</p>
        <p><strong>ASA</strong>: Angle-Side-Angle</p>
        <p><strong>AAS</strong>: Angle-Angle-Side</p>
        <p><strong>HL</strong>: Hypotenuse-Leg for right triangles</p>

        <h2>Common Mistake</h2>
        <p>AAA does not prove congruence. It only proves similarity.</p>
    `,
        questions: [
            { q: "Congruent triangles have?", options: ["Same size and shape", "Same color", "Same location only"], answer: "Same size and shape", explanation: "Congruent means equal in both size and shape." },
            { q: "SSS stands for?", options: ["Side-Side-Side", "Side-Side-Slope", "Same-Same-Same"], answer: "Side-Side-Side", explanation: "SSS uses three corresponding sides." },
            { q: "SAS stands for?", options: ["Side-Angle-Side", "Side-Area-Side", "Same-Angle-Same"], answer: "Side-Angle-Side", explanation: "SAS uses two sides and the included angle." },
            { q: "ASA stands for?", options: ["Angle-Side-Angle", "Area-Side-Area", "Angle-Slope-Angle"], answer: "Angle-Side-Angle", explanation: "ASA uses two angles and the included side." },
            { q: "AAS stands for?", options: ["Angle-Angle-Side", "Area-Area-Side", "Angle-Angle-Slope"], answer: "Angle-Angle-Side", explanation: "AAS uses two angles and a non-included side." },

            { q: "HL is used for?", options: ["Right triangles", "All triangles", "Only circles"], answer: "Right triangles", explanation: "HL applies only to right triangles." },
            { q: "HL stands for?", options: ["Hypotenuse-Leg", "Height-Line", "Half-Length"], answer: "Hypotenuse-Leg", explanation: "HL uses the hypotenuse and one leg of a right triangle." },
            { q: "Corresponding sides of congruent triangles are?", options: ["Equal", "Different", "Always doubled"], answer: "Equal", explanation: "Matching sides are equal." },
            { q: "Corresponding angles of congruent triangles are?", options: ["Equal", "Different", "Always 90°"], answer: "Equal", explanation: "Matching angles are equal." },
            { q: "Congruent triangles can be moved by?", options: ["Translations, rotations, reflections", "Only stretching", "Only shrinking"], answer: "Translations, rotations, reflections", explanation: "Rigid motions preserve size and shape." },

            { q: "Does AAA prove congruence?", options: ["No", "Yes", "Always"], answer: "No", explanation: "AAA proves similarity, not congruence." },
            { q: "Does SSS prove congruence?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Three equal corresponding sides prove congruence." },
            { q: "Does SAS prove congruence?", options: ["Yes", "No", "Only for right triangles"], answer: "Yes", explanation: "Two sides and the included angle prove congruence." },
            { q: "Does ASA prove congruence?", options: ["Yes", "No", "Only for circles"], answer: "Yes", explanation: "Two angles and the included side prove congruence." },
            { q: "Does AAS prove congruence?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Two angles and a non-included side prove congruence." },

            { q: "Congruence means figures are?", options: ["Exactly equal", "Only similar", "Always larger"], answer: "Exactly equal", explanation: "Congruent figures match exactly." },
            { q: "If two triangles are congruent, their areas are?", options: ["Equal", "Different", "Always zero"], answer: "Equal", explanation: "Same size means same area." },
            { q: "If two triangles are congruent, their perimeters are?", options: ["Equal", "Different", "Always 180"], answer: "Equal", explanation: "Same side lengths give same perimeter." },
            { q: "Triangle congruence is used in?", options: ["Proofs", "Only statistics", "Only probability"], answer: "Proofs", explanation: "Congruence is a major proof tool." },
            { q: "Congruent triangles must have matching?", options: ["Sides and angles", "Only colors", "Only labels"], answer: "Sides and angles", explanation: "Both corresponding sides and angles match." }
        ]
    },

    "triangle-similarity": {
        title: "Triangle Similarity",
        subtitle: "Learn when triangles have the same shape but different sizes.",
        body: `
        <p>Similar triangles have the same shape, but they do not need to have the same size.</p>

        <h2>Key Ideas</h2>
        <p>Corresponding angles are equal.</p>
        <p>Corresponding sides are proportional.</p>

        <h2>Similarity Rules</h2>
        <p><strong>AA</strong>: Angle-Angle</p>
        <p><strong>SAS</strong>: Side-Angle-Side similarity</p>
        <p><strong>SSS</strong>: Side-Side-Side similarity</p>

        <h2>Example</h2>
        <p>A map and the real land it represents are similar because the map is a scaled version.</p>
    `,
        questions: [
            { q: "Similar triangles have the same?", options: ["Shape", "Size always", "Area always"], answer: "Shape", explanation: "Similarity means same shape." },
            { q: "Corresponding angles in similar triangles are?", options: ["Equal", "Different", "Random"], answer: "Equal", explanation: "Matching angles are congruent." },
            { q: "Corresponding sides in similar triangles are?", options: ["Proportional", "Equal always", "Random"], answer: "Proportional", explanation: "Side lengths share a common ratio." },
            { q: "AA stands for?", options: ["Angle-Angle", "Area-Angle", "Angle-Area"], answer: "Angle-Angle", explanation: "AA is a common triangle similarity rule." },
            { q: "AAA proves?", options: ["Similarity", "Congruence", "Nothing"], answer: "Similarity", explanation: "Equal angles prove same shape, not necessarily same size." },

            { q: "Can similar triangles have different sizes?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Similar triangles can be scaled copies." },
            { q: "Congruent triangles are also?", options: ["Similar", "Never similar", "Opposite"], answer: "Similar", explanation: "Congruent triangles are a special case of similar triangles." },
            { q: "Scale factor compares?", options: ["Corresponding sides", "Angles", "Colors"], answer: "Corresponding sides", explanation: "Scale factor is based on matching side lengths." },
            { q: "If scale factor is 2, side 4 becomes?", options: ["8", "6", "2"], answer: "8", explanation: "4 × 2 = 8." },
            { q: "If scale factor is 1, figures are?", options: ["Congruent", "Different", "Impossible"], answer: "Congruent", explanation: "Scale factor 1 keeps the same size." },

            { q: "Similar figures always have equal?", options: ["Angles", "Areas", "Perimeters"], answer: "Angles", explanation: "Angles stay equal in similar figures." },
            { q: "Areas of similar figures are?", options: ["Usually different", "Always equal", "Always zero"], answer: "Usually different", explanation: "Area changes when size changes." },
            { q: "Perimeters of similar figures?", options: ["Scale proportionally", "Stay equal", "Become zero"], answer: "Scale proportionally", explanation: "Perimeters change with the scale factor." },
            { q: "SSS similarity uses?", options: ["Three proportional sides", "Three equal sides only", "Three angles only"], answer: "Three proportional sides", explanation: "Proportional sides can prove similarity." },
            { q: "SAS similarity uses?", options: ["Two proportional sides and included angle", "Only two sides", "Only area"], answer: "Two proportional sides and included angle", explanation: "That is the SAS similarity rule." },

            { q: "A blueprint is an example of?", options: ["Similarity", "Congruence", "Probability"], answer: "Similarity", explanation: "Blueprints are scaled copies." },
            { q: "Maps use?", options: ["Similarity", "Congruence", "Statistics"], answer: "Similarity", explanation: "Maps are scaled drawings." },
            { q: "Enlargements preserve?", options: ["Shape", "Size", "Area"], answer: "Shape", explanation: "The figure gets larger but keeps the same shape." },
            { q: "Reductions preserve?", options: ["Angles", "Side lengths exactly", "Area exactly"], answer: "Angles", explanation: "Angles remain equal in reductions." },
            { q: "Triangle similarity is useful for?", options: ["Indirect measurement", "Cooking", "Grammar"], answer: "Indirect measurement", explanation: "Similarity can help measure heights and distances indirectly." }
        ]
    },


    "right-triangles": {
        title: "Right Triangles",
        subtitle: "Understand the special triangle that forms the foundation of trigonometry.",
        body: `
        <p>A <strong>right triangle</strong> is a triangle that contains exactly one right angle (90°).</p>

        <h2>Key Vocabulary</h2>

        <p><strong>Hypotenuse</strong> – The side opposite the right angle. It is always the longest side.</p>

        <p><strong>Legs</strong> – The two sides that form the right angle.</p>

        <h2>Properties</h2>

        <ul>
            <li>One angle is always 90°.</li>
            <li>The other two angles must add to 90°.</li>
            <li>The hypotenuse is always the longest side.</li>
            <li>Right triangles are used in construction, engineering, navigation, and physics.</li>
        </ul>

        <h2>Worked Example</h2>

        <p>If one acute angle is 35°, the other acute angle is:</p>

        <p>180° − 90° − 35° = <strong>55°</strong></p>

        <h2>Common Mistake</h2>

        <p>Many students think the longest side is always the base. This is false. The longest side is always the hypotenuse, regardless of how the triangle is rotated.</p>

        <h2>Summary</h2>

        <p>Every right triangle contains one right angle, two legs, and one hypotenuse.</p>
    `,
        questions: [

            { q: "A right triangle contains how many right angles?", options: ["1", "2", "3"], answer: "1", explanation: "A right triangle has exactly one 90° angle." },

            { q: "A right angle measures?", options: ["90°", "180°", "45°"], answer: "90°", explanation: "A right angle is exactly 90 degrees." },

            { q: "The side opposite the right angle is called the?", options: ["Hypotenuse", "Leg", "Median"], answer: "Hypotenuse", explanation: "The hypotenuse is opposite the right angle." },

            { q: "The hypotenuse is always the?", options: ["Longest side", "Shortest side", "Vertical side"], answer: "Longest side", explanation: "The hypotenuse is always the longest side." },

            { q: "The two shorter sides are called?", options: ["Legs", "Bases", "Edges"], answer: "Legs", explanation: "The sides forming the right angle are called legs." },

            { q: "The two acute angles in a right triangle always total?", options: ["90°", "180°", "45°"], answer: "90°", explanation: "The triangle totals 180°, so the remaining two angles total 90°." },

            { q: "If one acute angle is 20°, the other is?", options: ["70°", "160°", "90°"], answer: "70°", explanation: "90−20=70." },

            { q: "If one acute angle is 65°, the other is?", options: ["25°", "35°", "45°"], answer: "25°", explanation: "90−65=25." },

            { q: "Which side is never a leg?", options: ["Hypotenuse", "Shortest side", "Vertical side"], answer: "Hypotenuse", explanation: "The hypotenuse is its own special side." },

            { q: "A ladder leaning against a wall forms what kind of triangle?", options: ["Right triangle", "Equilateral", "Obtuse"], answer: "Right triangle", explanation: "The wall and ground form a 90° angle." },

            { q: "A right triangle can also be isosceles?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "A 45-45-90 triangle is isosceles." },

            { q: "Can a right triangle also be equilateral?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Equilateral triangles have three 60° angles." },

            { q: "A 30-60-90 triangle is?", options: ["Right triangle", "Obtuse triangle", "Acute triangle"], answer: "Right triangle", explanation: "It contains one 90° angle." },

            { q: "A 45-45-90 triangle is?", options: ["Right triangle", "Obtuse triangle", "Scalene"], answer: "Right triangle", explanation: "It contains one right angle." },

            { q: "The hypotenuse touches the right angle?", options: ["No", "Yes", "Always"], answer: "No", explanation: "It is opposite the right angle." },

            { q: "Which statement is true?", options: ["The hypotenuse is opposite the right angle", "The hypotenuse forms the right angle", "The hypotenuse is always horizontal"], answer: "The hypotenuse is opposite the right angle", explanation: "That is the definition." },

            { q: "Can the hypotenuse ever be shorter than a leg?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "It is always the longest side." },

            { q: "Right triangles are the basis of?", options: ["Trigonometry", "Statistics", "Calculus only"], answer: "Trigonometry", explanation: "Trigonometry begins with right triangles." },

            { q: "Right triangles are useful in?", options: ["Construction and engineering", "Only chemistry", "Only biology"], answer: "Construction and engineering", explanation: "They are used extensively in real life." },

            { q: "Every right triangle has?", options: ["One right angle", "Two right angles", "Three right angles"], answer: "One right angle", explanation: "That is what defines a right triangle." }

        ]
    },


    "pythagorean-theorem": {
        title: "Pythagorean Theorem",
        subtitle: "Use the most famous theorem in geometry to find missing side lengths.",
        body: `
        <p>The <strong>Pythagorean Theorem</strong> applies only to right triangles.</p>

        <h2>The Formula</h2>

        <p style="font-size:26px;"><strong>a² + b² = c²</strong></p>

        <p><strong>a</strong> and <strong>b</strong> are the legs.</p>

        <p><strong>c</strong> is always the hypotenuse.</p>

        <h2>Worked Example 1</h2>

        <p>If a = 3 and b = 4</p>

        <p>3² + 4² = c²</p>

        <p>9 + 16 = 25</p>

        <p>c = 5</p>

        <h2>Worked Example 2</h2>

        <p>If the hypotenuse is 13 and one leg is 5</p>

        <p>5² + b² = 13²</p>

        <p>25 + b² = 169</p>

        <p>b² = 144</p>

        <p>b = 12</p>

        <h2>Common Pythagorean Triples</h2>

        <ul>
            <li>3-4-5</li>
            <li>5-12-13</li>
            <li>8-15-17</li>
            <li>7-24-25</li>
        </ul>

        <h2>Common Mistakes</h2>

        <p>Never use the theorem unless the triangle is a right triangle.</p>

        <p>The hypotenuse must always be labeled as c.</p>
    `,
        questions: [

            { q: "The Pythagorean Theorem only works for?", options: ["Right triangles", "All triangles", "Circles"], answer: "Right triangles", explanation: "The theorem requires one 90° angle." },

            { q: "The formula is?", options: ["a²+b²=c²", "A=bh", "C=πd"], answer: "a²+b²=c²", explanation: "This is the Pythagorean Theorem." },

            { q: "Which side is c?", options: ["Hypotenuse", "Shortest side", "Vertical side"], answer: "Hypotenuse", explanation: "c is always the hypotenuse." },

            { q: "If a=3 and b=4, c=?", options: ["5", "6", "7"], answer: "5", explanation: "9+16=25 so c=5." },

            { q: "If a=5 and b=12, c=?", options: ["13", "17", "15"], answer: "13", explanation: "25+144=169." },

            { q: "If c=13 and a=5, b=?", options: ["12", "8", "10"], answer: "12", explanation: "169−25=144." },

            { q: "The hypotenuse is opposite the?", options: ["Right angle", "Smallest angle", "Largest leg"], answer: "Right angle", explanation: "Definition of hypotenuse." },

            { q: "The theorem finds?", options: ["Missing side lengths", "Angles only", "Area"], answer: "Missing side lengths", explanation: "It calculates unknown sides." },

            { q: "6² equals?", options: ["36", "12", "18"], answer: "36", explanation: "6×6=36." },

            { q: "9² equals?", options: ["81", "18", "72"], answer: "81", explanation: "9×9=81." },

            { q: "√81 equals?", options: ["9", "8", "7"], answer: "9", explanation: "9×9=81." },

            { q: "√169 equals?", options: ["13", "12", "14"], answer: "13", explanation: "13×13=169." },

            { q: "3-4-5 is called a?", options: ["Pythagorean Triple", "Quadrilateral", "Polygon"], answer: "Pythagorean Triple", explanation: "It satisfies the theorem." },

            { q: "5-12-13 is?", options: ["Pythagorean Triple", "Not a right triangle", "Circle"], answer: "Pythagorean Triple", explanation: "25+144=169." },

            { q: "8-15-17 is?", options: ["Pythagorean Triple", "Obtuse triangle", "Acute triangle"], answer: "Pythagorean Triple", explanation: "64+225=289." },

            { q: "Can you use the theorem on any triangle?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Only right triangles." },

            { q: "The theorem is useful in?", options: ["Construction", "Navigation", "Both"], answer: "Both", explanation: "It has many real-world applications." },

            { q: "If c²=100 then c=?", options: ["10", "20", "50"], answer: "10", explanation: "√100=10." },

            { q: "The largest side is always?", options: ["Hypotenuse", "Leg", "Base"], answer: "Hypotenuse", explanation: "The hypotenuse is longest." },

            { q: "The Pythagorean Theorem is one of the most important ideas in?", options: ["Geometry", "Grammar", "Economics"], answer: "Geometry", explanation: "It is one of the foundational theorems in mathematics." }

        ]
    },


    "polygons": {
        title: "Polygons",
        subtitle: "Learn how to classify polygons by the number of their sides and angles.",
        body: `
        <p>A <strong>polygon</strong> is a closed figure made entirely of straight line segments.</p>

        <h2>Requirements</h2>

        <ul>
            <li>Closed shape</li>
            <li>Straight sides only</li>
            <li>Sides meet only at endpoints</li>
        </ul>

        <h2>Common Polygons</h2>

        <table>
            <tr><th>Sides</th><th>Name</th></tr>
            <tr><td>3</td><td>Triangle</td></tr>
            <tr><td>4</td><td>Quadrilateral</td></tr>
            <tr><td>5</td><td>Pentagon</td></tr>
            <tr><td>6</td><td>Hexagon</td></tr>
            <tr><td>7</td><td>Heptagon</td></tr>
            <tr><td>8</td><td>Octagon</td></tr>
            <tr><td>9</td><td>Nonagon</td></tr>
            <tr><td>10</td><td>Decagon</td></tr>
        </table>

        <h2>Regular Polygon</h2>

        <p>A regular polygon has:</p>

        <ul>
            <li>All sides equal</li>
            <li>All angles equal</li>
        </ul>

        <h2>Irregular Polygon</h2>

        <p>An irregular polygon does not have all sides and angles equal.</p>

        <h2>Examples</h2>

        <p>A stop sign is a regular octagon.</p>

        <p>A rectangle is an irregular quadrilateral unless it is also a square.</p>

        <h2>Common Mistake</h2>

        <p>Circles are NOT polygons because polygons must have straight sides.</p>
    `,
        questions: [

            { q: "A polygon must have?", options: ["Straight sides", "Curved sides", "Only one side"], answer: "Straight sides", explanation: "Polygons are made only from straight line segments." },

            { q: "A polygon must be?", options: ["Closed", "Open", "Curved"], answer: "Closed", explanation: "All polygons are closed figures." },

            { q: "A triangle has?", options: ["3 sides", "4 sides", "5 sides"], answer: "3 sides", explanation: "Triangles have three sides." },

            { q: "A quadrilateral has?", options: ["4 sides", "5 sides", "6 sides"], answer: "4 sides", explanation: "Quadrilateral means four sides." },

            { q: "A pentagon has?", options: ["5 sides", "6 sides", "7 sides"], answer: "5 sides", explanation: "Pentagon means five sides." },

            { q: "A hexagon has?", options: ["6 sides", "7 sides", "8 sides"], answer: "6 sides", explanation: "Hexagon means six sides." },

            { q: "An octagon has?", options: ["8 sides", "7 sides", "9 sides"], answer: "8 sides", explanation: "Octagon means eight sides." },

            { q: "A decagon has?", options: ["10 sides", "9 sides", "12 sides"], answer: "10 sides", explanation: "Decagon means ten sides." },

            { q: "A regular polygon has?", options: ["Equal sides and equal angles", "Only equal sides", "Only equal angles"], answer: "Equal sides and equal angles", explanation: "Regular polygons have both." },

            { q: "An irregular polygon?", options: ["Does not have all equal sides and angles", "Has equal sides", "Is always a triangle"], answer: "Does not have all equal sides and angles", explanation: "Irregular polygons lack complete symmetry." },

            { q: "A stop sign is a?", options: ["Regular octagon", "Hexagon", "Pentagon"], answer: "Regular octagon", explanation: "Stop signs have eight equal sides." },

            { q: "A circle is a polygon?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Circles have curved boundaries." },

            { q: "A polygon can have curved sides?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Only straight segments." },

            { q: "Which is NOT a polygon?", options: ["Circle", "Triangle", "Rectangle"], answer: "Circle", explanation: "Circles are not polygons." },

            { q: "The sides of a polygon meet at?", options: ["Vertices", "Centers", "Diameters"], answer: "Vertices", explanation: "The corners are called vertices." },

            { q: "The plural of vertex is?", options: ["Vertices", "Vertexes only", "Vertex"], answer: "Vertices", explanation: "Vertices is the standard mathematical plural." },

            { q: "An 8-sided polygon is?", options: ["Octagon", "Hexagon", "Pentagon"], answer: "Octagon", explanation: "Octa means eight." },

            { q: "A 6-sided polygon is?", options: ["Hexagon", "Heptagon", "Octagon"], answer: "Hexagon", explanation: "Hexa means six." },

            { q: "A 5-sided polygon is?", options: ["Pentagon", "Hexagon", "Quadrilateral"], answer: "Pentagon", explanation: "Penta means five." },

            { q: "Polygons are studied in?", options: ["Geometry", "Statistics", "Grammar"], answer: "Geometry", explanation: "Polygons are one of the main topics in geometry." }

        ]
    }
    ,

    "quadrilaterals": {
        title: "Quadrilaterals",
        subtitle: "Study four-sided polygons and their special properties.",
        body: `
        <p>A <strong>quadrilateral</strong> is any polygon with four sides.</p>

        <h2>Key Facts</h2>

        <ul>
            <li>Four sides</li>
            <li>Four vertices</li>
            <li>Interior angles always total <strong>360°</strong></li>
        </ul>

        <h2>Common Types</h2>

        <p><strong>Square</strong> — Four equal sides and four right angles.</p>

        <p><strong>Rectangle</strong> — Opposite sides equal and four right angles.</p>

        <p><strong>Rhombus</strong> — Four equal sides.</p>

        <p><strong>Parallelogram</strong> — Opposite sides are parallel.</p>

        <p><strong>Trapezoid</strong> — One pair of parallel sides.</p>

        <p><strong>Kite</strong> — Two pairs of adjacent equal sides.</p>

        <h2>Example</h2>

        <p>Every square is also a rectangle and a rhombus.</p>

        <h2>Common Mistake</h2>

        <p>Not every rectangle is a square because rectangles do not require all four sides to be equal.</p>
    `,
        questions: [

            { q: "A quadrilateral has?", options: ["4 sides", "5 sides", "6 sides"], answer: "4 sides", explanation: "Quad means four." },

            { q: "Interior angles of a quadrilateral total?", options: ["360°", "180°", "270°"], answer: "360°", explanation: "All quadrilaterals total 360°." },

            { q: "A square has?", options: ["4 equal sides and 4 right angles", "Only equal sides", "Only right angles"], answer: "4 equal sides and 4 right angles", explanation: "Squares satisfy both conditions." },

            { q: "A rectangle has?", options: ["4 right angles", "4 equal sides only", "No parallel sides"], answer: "4 right angles", explanation: "Rectangles always have four right angles." },

            { q: "A rhombus has?", options: ["4 equal sides", "4 right angles", "Only 2 equal sides"], answer: "4 equal sides", explanation: "Rhombuses require equal sides." },

            { q: "A parallelogram has?", options: ["Opposite sides parallel", "Only one pair parallel", "No parallel sides"], answer: "Opposite sides parallel", explanation: "Both pairs are parallel." },

            { q: "A trapezoid has?", options: ["One pair of parallel sides", "Two pairs of parallel sides", "No parallel sides"], answer: "One pair of parallel sides", explanation: "That's the defining property." },

            { q: "A kite has?", options: ["Two pairs of adjacent equal sides", "Four equal sides", "Four right angles"], answer: "Two pairs of adjacent equal sides", explanation: "Adjacent means next to each other." },

            { q: "Every square is also a?", options: ["Rectangle", "Triangle", "Pentagon"], answer: "Rectangle", explanation: "Squares satisfy the rectangle definition." },

            { q: "Every square is also a?", options: ["Rhombus", "Circle", "Trapezoid"], answer: "Rhombus", explanation: "Squares have four equal sides." },

            { q: "Every rectangle is a square?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Squares require all four sides equal." },

            { q: "Every square is a parallelogram?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Opposite sides are parallel." },

            { q: "Opposite sides of a rectangle are?", options: ["Equal", "Different", "Curved"], answer: "Equal", explanation: "Opposite sides have equal length." },

            { q: "Which shape has four equal sides but not necessarily four right angles?", options: ["Rhombus", "Rectangle", "Trapezoid"], answer: "Rhombus", explanation: "Rhombuses don't require right angles." },

            { q: "A square has how many right angles?", options: ["4", "2", "1"], answer: "4", explanation: "All four angles are 90°." },

            { q: "Parallel sides never?", options: ["Intersect", "Form angles", "Exist"], answer: "Intersect", explanation: "Parallel lines never meet." },

            { q: "Which shape has exactly one pair of parallel sides?", options: ["Trapezoid", "Rectangle", "Square"], answer: "Trapezoid", explanation: "That's the defining feature." },

            { q: "Quad means?", options: ["Four", "Five", "Six"], answer: "Four", explanation: "Quad means four." },

            { q: "Quadrilaterals are?", options: ["Polygons", "Circles", "Curves"], answer: "Polygons", explanation: "They are four-sided polygons." },

            { q: "Quadrilaterals are studied in?", options: ["Geometry", "Chemistry", "History"], answer: "Geometry", explanation: "They are one of the main geometry topics." }

        ]
    }
    ,

    "circles": {
        title: "Circles",
        subtitle: "Learn the parts of a circle and the relationships between them.",
        body: `
        <p>A <strong>circle</strong> is the set of all points that are the same distance from a fixed point called the center.</p>

        <h2>Important Vocabulary</h2>

        <p><strong>Center</strong> – The middle point of the circle.</p>

        <p><strong>Radius</strong> – A segment from the center to the circle.</p>

        <p><strong>Diameter</strong> – A segment passing through the center connecting two points on the circle.</p>

        <p><strong>Circumference</strong> – The distance around the circle.</p>

        <p><strong>Chord</strong> – A segment connecting two points on the circle.</p>

        <p><strong>Tangent</strong> – A line touching the circle at exactly one point.</p>

        <p><strong>Secant</strong> – A line cutting through the circle at two points.</p>

        <h2>Key Relationships</h2>

        <p>Diameter = 2 × Radius</p>

        <p>Radius = Diameter ÷ 2</p>

        <h2>Example</h2>

        <p>If the radius is 6 cm, the diameter is 12 cm.</p>

        <h2>Common Mistake</h2>

        <p>Do not confuse the radius with the diameter. The diameter is always twice as long.</p>
    `,
        questions: [

            { q: "The center of a circle is?", options: ["The middle point", "The edge", "The diameter"], answer: "The middle point", explanation: "The center is the fixed point." },

            { q: "A radius goes from?", options: ["Center to circle", "Circle to circle", "Outside to center"], answer: "Center to circle", explanation: "A radius connects the center to the circle." },

            { q: "The diameter passes through the?", options: ["Center", "Edge only", "Radius"], answer: "Center", explanation: "Every diameter passes through the center." },

            { q: "Diameter equals?", options: ["2 × Radius", "Radius ÷ 2", "Radius²"], answer: "2 × Radius", explanation: "The diameter is twice the radius." },

            { q: "If radius = 5, diameter = ?", options: ["10", "5", "15"], answer: "10", explanation: "Multiply by 2." },

            { q: "If diameter = 20, radius = ?", options: ["10", "20", "40"], answer: "10", explanation: "Divide by 2." },

            { q: "The distance around a circle is called?", options: ["Circumference", "Area", "Radius"], answer: "Circumference", explanation: "Circumference is the perimeter of a circle." },

            { q: "A chord connects?", options: ["Two points on the circle", "Center to edge", "Two centers"], answer: "Two points on the circle", explanation: "A chord joins two points on the circle." },

            { q: "The longest chord is?", options: ["Diameter", "Radius", "Arc"], answer: "Diameter", explanation: "The diameter is the longest possible chord." },

            { q: "A tangent touches a circle at?", options: ["One point", "Two points", "Three points"], answer: "One point", explanation: "Tangents touch once." },

            { q: "A secant intersects a circle at?", options: ["Two points", "One point", "No points"], answer: "Two points", explanation: "A secant cuts through the circle." },

            { q: "Every diameter is also a?", options: ["Chord", "Radius", "Arc"], answer: "Chord", explanation: "A diameter is a special chord." },

            { q: "Every chord is a diameter?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Only the longest chord is a diameter." },

            { q: "The radius is?", options: ["Half the diameter", "Twice the diameter", "Equal to the diameter"], answer: "Half the diameter", explanation: "Radius = Diameter ÷ 2." },

            { q: "A wheel is an example of?", options: ["Circle", "Triangle", "Rectangle"], answer: "Circle", explanation: "Wheels are circular." },

            { q: "Which line only touches the circle?", options: ["Tangent", "Secant", "Diameter"], answer: "Tangent", explanation: "Tangents touch once." },

            { q: "Which line cuts through the circle?", options: ["Secant", "Radius", "Arc"], answer: "Secant", explanation: "Secants intersect twice." },

            { q: "The center is?", options: ["Equidistant from every point on the circle", "On the edge", "Outside"], answer: "Equidistant from every point on the circle", explanation: "That defines a circle." },

            { q: "Circles are studied in?", options: ["Geometry", "Grammar", "Economics"], answer: "Geometry", explanation: "Circles are a major geometry topic." },

            { q: "The diameter is always?", options: ["Twice the radius", "Half the radius", "Equal to π"], answer: "Twice the radius", explanation: "d = 2r." }

        ]
    }
    ,

    "arcs-and-chords": {
        title: "Arcs and Chords",
        subtitle: "Understand the curved and straight parts inside a circle.",
        body: `
        <p>An <strong>arc</strong> is a portion of a circle's circumference.</p>

        <p>A <strong>chord</strong> is a line segment whose endpoints lie on the circle.</p>

        <h2>Key Ideas</h2>

        <p>A diameter is the longest possible chord.</p>

        <p>Equal chords create equal arcs.</p>

        <p>Larger chords create larger arcs.</p>

        <h2>Arc Types</h2>

        <p><strong>Minor Arc</strong> – Less than 180°.</p>

        <p><strong>Major Arc</strong> – Greater than 180°.</p>

        <p><strong>Semicircle</strong> – Exactly 180°.</p>

        <h2>Worked Example</h2>

        <p>If a central angle measures 60°, then its intercepted minor arc also measures 60°.</p>

        <h2>Common Mistake</h2>

        <p>A chord is a straight line segment. An arc is curved. They are not the same thing.</p>

        <h2>Summary</h2>

        <p>Arcs are curved portions of a circle. Chords are straight segments joining two points on the circle.</p>
    `,
        questions: [

            { q: "An arc is?", options: ["Part of a circle", "A straight line", "The center"], answer: "Part of a circle", explanation: "An arc is part of the circumference." },

            { q: "A chord is?", options: ["A line joining two points on a circle", "A radius", "A tangent"], answer: "A line joining two points on a circle", explanation: "A chord connects two points on the circle." },

            { q: "The longest chord is the?", options: ["Diameter", "Radius", "Arc"], answer: "Diameter", explanation: "The diameter is the longest chord." },

            { q: "A minor arc measures?", options: ["Less than 180°", "Exactly 180°", "More than 180°"], answer: "Less than 180°", explanation: "Minor arcs are under 180°." },

            { q: "A major arc measures?", options: ["More than 180°", "Exactly 180°", "Less than 90°"], answer: "More than 180°", explanation: "Major arcs exceed 180°." },

            { q: "A semicircle measures?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "A semicircle is half a circle." },

            { q: "Equal chords create?", options: ["Equal arcs", "Different arcs", "Tangents"], answer: "Equal arcs", explanation: "Equal chords intercept equal arcs." },

            { q: "Larger chords create?", options: ["Larger arcs", "Smaller arcs", "No arcs"], answer: "Larger arcs", explanation: "Chord size corresponds to arc size." },

            { q: "A diameter is also a?", options: ["Chord", "Radius", "Tangent"], answer: "Chord", explanation: "Every diameter is a chord." },

            { q: "Every chord is a diameter?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Only one special chord is the diameter." },

            { q: "A central angle of 90° intercepts an arc of?", options: ["90°", "180°", "45°"], answer: "90°", explanation: "Central angles equal intercepted arc measures." },

            { q: "The circumference is?", options: ["Distance around a circle", "Diameter", "Radius"], answer: "Distance around a circle", explanation: "Circumference is the perimeter of a circle." },

            { q: "Arcs are?", options: ["Curved", "Straight", "Vertical"], answer: "Curved", explanation: "Arcs are curved." },

            { q: "Chords are?", options: ["Straight", "Curved", "Circular"], answer: "Straight", explanation: "Chords are straight segments." },

            { q: "A full circle measures?", options: ["360°", "180°", "90°"], answer: "360°", explanation: "A full rotation is 360°." },

            { q: "Half of a circle is?", options: ["Semicircle", "Minor arc", "Major arc"], answer: "Semicircle", explanation: "Half of a circle is a semicircle." },

            { q: "The endpoints of a chord lie?", options: ["On the circle", "At the center", "Outside the circle"], answer: "On the circle", explanation: "Both endpoints lie on the circumference." },

            { q: "The radius touches the circle at?", options: ["One endpoint", "Two endpoints", "Three endpoints"], answer: "One endpoint", explanation: "The other endpoint is the center." },

            { q: "Circle vocabulary belongs to?", options: ["Geometry", "Statistics", "Grammar"], answer: "Geometry", explanation: "These are geometry terms." },

            { q: "Arcs and chords are studied together because?", options: ["They are closely related in circles", "They are polygons", "They are triangles"], answer: "They are closely related in circles", explanation: "Chord length and arc measure are closely connected." }

        ]
    }
    ,

    "area": {
        title: "Area",
        subtitle: "Learn how to calculate the amount of space inside two-dimensional figures.",
        body: `
        <p><strong>Area</strong> measures the amount of space inside a two-dimensional figure.</p>

        <h2>Units</h2>

        <p>Area is always measured in <strong>square units</strong>, such as cm², m², ft², or in².</p>

        <h2>Common Area Formulas</h2>

        <table>
            <tr><th>Shape</th><th>Formula</th></tr>
            <tr><td>Rectangle</td><td>A = l × w</td></tr>
            <tr><td>Square</td><td>A = s²</td></tr>
            <tr><td>Triangle</td><td>A = ½bh</td></tr>
            <tr><td>Parallelogram</td><td>A = bh</td></tr>
            <tr><td>Trapezoid</td><td>A = ½(b₁+b₂)h</td></tr>
            <tr><td>Circle</td><td>A = πr²</td></tr>
        </table>

        <h2>Worked Example 1</h2>

        <p>Rectangle: length = 8, width = 5</p>

        <p>A = 8 × 5 = 40 square units</p>

        <h2>Worked Example 2</h2>

        <p>Triangle: base = 10, height = 6</p>

        <p>A = ½ × 10 × 6 = 30 square units</p>

        <h2>Worked Example 3</h2>

        <p>Circle: radius = 4</p>

        <p>A = π(4²)=16π</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Do not confuse area with perimeter.</li>
            <li>Always square the units.</li>
            <li>Use the height, not the slanted side, for triangles and parallelograms.</li>
        </ul>

        <h2>Summary</h2>

        <p>Area tells us how much surface is inside a shape.</p>
    `,
        questions: [

            { q: "Area measures?", options: ["Space inside a figure", "Distance around a figure", "Length of a side"], answer: "Space inside a figure", explanation: "Area measures the inside of a shape." },

            { q: "Area is measured in?", options: ["Square units", "Linear units", "Degrees"], answer: "Square units", explanation: "Area uses square units." },

            { q: "Rectangle area formula?", options: ["l × w", "2l+2w", "bh"], answer: "l × w", explanation: "Multiply length by width." },

            { q: "Square area formula?", options: ["s²", "4s", "2s"], answer: "s²", explanation: "Multiply the side by itself." },

            { q: "Triangle area formula?", options: ["½bh", "bh", "2bh"], answer: "½bh", explanation: "Triangles use half the rectangle formula." },

            { q: "Parallelogram area?", options: ["bh", "½bh", "l+w"], answer: "bh", explanation: "Base times perpendicular height." },

            { q: "Circle area?", options: ["πr²", "2πr", "πd"], answer: "πr²", explanation: "Area equals π times radius squared." },

            { q: "Rectangle 8×5 area?", options: ["40", "13", "26"], answer: "40", explanation: "8×5=40." },

            { q: "Square side 7 area?", options: ["49", "28", "14"], answer: "49", explanation: "7²=49." },

            { q: "Triangle base10 height6 area?", options: ["30", "60", "16"], answer: "30", explanation: "½×10×6=30." },

            { q: "Circle radius3 area?", options: ["9π", "6π", "3π"], answer: "9π", explanation: "π×3²=9π." },

            { q: "Area and perimeter are?", options: ["Different measurements", "The same", "Always equal"], answer: "Different measurements", explanation: "Area measures inside; perimeter measures around." },

            { q: "Height in a triangle must be?", options: ["Perpendicular", "Slanted side", "Longest side"], answer: "Perpendicular", explanation: "Height is always perpendicular." },

            { q: "Square units example?", options: ["cm²", "cm", "°"], answer: "cm²", explanation: "Area uses squared units." },

            { q: "If length doubles and width stays the same, rectangle area?", options: ["Doubles", "Halves", "Stays same"], answer: "Doubles", explanation: "Area is proportional to length." },

            { q: "Circle radius5 area?", options: ["25π", "10π", "5π"], answer: "25π", explanation: "π×25." },

            { q: "Perimeter measures?", options: ["Distance around", "Space inside", "Volume"], answer: "Distance around", explanation: "Perimeter measures the boundary." },

            { q: "Area is a?", options: ["2-dimensional measurement", "3-dimensional measurement", "Angle measurement"], answer: "2-dimensional measurement", explanation: "Area belongs to flat figures." },

            { q: "Which shape uses ½(b₁+b₂)h?", options: ["Trapezoid", "Rectangle", "Circle"], answer: "Trapezoid", explanation: "That's the trapezoid area formula." },

            { q: "Area belongs to which branch of math?", options: ["Geometry", "Algebra", "Statistics"], answer: "Geometry", explanation: "Area is a geometry concept." }

        ]
    }
    ,

    "surface-area": {
        title: "Surface Area",
        subtitle: "Find the total area covering the outside of three-dimensional objects.",
        body: `
        <p><strong>Surface Area</strong> is the total area covering the outside of a three-dimensional figure.</p>

        <h2>Key Idea</h2>

        <p>Imagine cutting open a box and laying every face flat.</p>

        <p>The total area of all the faces is the surface area.</p>

        <h2>Common Formulas</h2>

        <table>
            <tr><th>Solid</th><th>Formula</th></tr>
            <tr><td>Cube</td><td>6s²</td></tr>
            <tr><td>Rectangular Prism</td><td>2(lw+lh+wh)</td></tr>
            <tr><td>Cylinder</td><td>2πr²+2πrh</td></tr>
            <tr><td>Sphere</td><td>4πr²</td></tr>
        </table>

        <h2>Worked Example</h2>

        <p>A cube has side length 5.</p>

        <p>Surface Area = 6(5²)=6(25)=150 square units.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Do not confuse surface area with volume.</li>
            <li>Surface area uses square units.</li>
            <li>Count every outside face exactly once.</li>
        </ul>

        <h2>Summary</h2>

        <p>Surface area measures everything you could paint on the outside of a solid.</p>
    `,
        questions: [

            { q: "Surface area measures?", options: ["Outside of a solid", "Inside of a solid", "Length"], answer: "Outside of a solid", explanation: "Surface area measures the total outside covering." },

            { q: "Surface area uses?", options: ["Square units", "Cubic units", "Degrees"], answer: "Square units", explanation: "Surface area is two-dimensional." },

            { q: "Cube surface area formula?", options: ["6s²", "s³", "4s²"], answer: "6s²", explanation: "A cube has six equal faces." },

            { q: "Cube side=4. Surface area?", options: ["96", "64", "24"], answer: "96", explanation: "6×16=96." },

            { q: "Rectangular prism surface area?", options: ["2(lw+lh+wh)", "lwh", "2lw"], answer: "2(lw+lh+wh)", explanation: "Add all face pairs." },

            { q: "Sphere surface area?", options: ["4πr²", "πr²", "2πr"], answer: "4πr²", explanation: "Sphere formula." },

            { q: "Cylinder surface area?", options: ["2πr²+2πrh", "πr²h", "2πr"], answer: "2πr²+2πrh", explanation: "Two circles plus curved surface." },

            { q: "Surface area belongs to?", options: ["3D figures", "2D figures only", "Lines"], answer: "3D figures", explanation: "Surface area applies to solids." },

            { q: "Painting a box requires?", options: ["Surface area", "Volume", "Perimeter"], answer: "Surface area", explanation: "Paint covers the outside." },

            { q: "Wrapping a gift uses?", options: ["Surface area", "Volume", "Area"], answer: "Surface area", explanation: "Wrapping paper covers the outside." },

            { q: "Surface area is measured in?", options: ["cm²", "cm³", "cm"], answer: "cm²", explanation: "Square units." },

            { q: "Volume measures?", options: ["Inside", "Outside", "Edges"], answer: "Inside", explanation: "Volume measures space inside." },

            { q: "Cube side=3. Surface area?", options: ["54", "27", "18"], answer: "54", explanation: "6×9=54." },

            { q: "Every face contributes to?", options: ["Surface area", "Volume only", "Height"], answer: "Surface area", explanation: "Every outside face counts." },

            { q: "Surface area is?", options: ["Total outside area", "Inside capacity", "Distance"], answer: "Total outside area", explanation: "Definition." },

            { q: "Surface area is useful for?", options: ["Painting", "Wrapping", "Both"], answer: "Both", explanation: "Many real-life applications." },

            { q: "Surface area uses?", options: ["Area formulas", "Volume formulas", "Slope formulas"], answer: "Area formulas", explanation: "Each face is an area." },

            { q: "Surface area of solids is studied in?", options: ["Geometry", "Grammar", "Biology"], answer: "Geometry", explanation: "A geometry topic." },

            { q: "Cube has how many faces?", options: ["6", "8", "12"], answer: "6", explanation: "A cube has six square faces." },

            { q: "Surface area compares to area because both use?", options: ["Square units", "Cubic units", "Linear units"], answer: "Square units", explanation: "Both are measured in square units." }

        ]
    }
    ,

    "volume": {
        title: "Volume",
        subtitle: "Measure the amount of space inside three-dimensional figures.",
        body: `
        <p><strong>Volume</strong> measures the amount of space inside a three-dimensional object.</p>

        <h2>Key Idea</h2>

        <p>Think of filling a container completely with water.</p>

        <p>The amount of water it can hold is its volume.</p>

        <h2>Common Formulas</h2>

        <table>
            <tr><th>Solid</th><th>Formula</th></tr>
            <tr><td>Cube</td><td>V=s³</td></tr>
            <tr><td>Rectangular Prism</td><td>V=lwh</td></tr>
            <tr><td>Cylinder</td><td>V=πr²h</td></tr>
            <tr><td>Cone</td><td>V=(1/3)πr²h</td></tr>
            <tr><td>Sphere</td><td>V=(4/3)πr³</td></tr>
        </table>

        <h2>Worked Example</h2>

        <p>A rectangular prism has:</p>

        <p>Length = 8</p>
        <p>Width = 4</p>
        <p>Height = 3</p>

        <p>V = 8 × 4 × 3 = 96 cubic units</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Volume uses cubic units, not square units.</li>
            <li>Don't confuse volume with surface area.</li>
            <li>Volume measures the inside.</li>
        </ul>

        <h2>Summary</h2>

        <p>Volume measures how much space is inside a solid object.</p>
    `,
        questions: [

            { q: "Volume measures?", options: ["Space inside a solid", "Outside of a solid", "Length"], answer: "Space inside a solid", explanation: "Volume measures capacity." },

            { q: "Volume uses?", options: ["Cubic units", "Square units", "Degrees"], answer: "Cubic units", explanation: "Volume is three-dimensional." },

            { q: "Cube volume formula?", options: ["s³", "6s²", "s²"], answer: "s³", explanation: "Multiply the side three times." },

            { q: "Rectangular prism volume?", options: ["lwh", "2(lw+lh+wh)", "lw"], answer: "lwh", explanation: "Multiply length, width, and height." },

            { q: "Cylinder volume?", options: ["πr²h", "2πrh", "πd"], answer: "πr²h", explanation: "Circle area times height." },

            { q: "Cone volume?", options: ["(1/3)πr²h", "πr²h", "4πr²"], answer: "(1/3)πr²h", explanation: "A cone has one-third the volume of a matching cylinder." },

            { q: "Sphere volume?", options: ["(4/3)πr³", "4πr²", "πr²"], answer: "(4/3)πr³", explanation: "Standard sphere formula." },

            { q: "Cube side=4. Volume?", options: ["64", "96", "16"], answer: "64", explanation: "4³=64." },

            { q: "Cube side=5. Volume?", options: ["125", "150", "25"], answer: "125", explanation: "5³=125." },

            { q: "Prism 8×4×3 volume?", options: ["96", "32", "24"], answer: "96", explanation: "8×4×3=96." },

            { q: "Volume is measured in?", options: ["cm³", "cm²", "cm"], answer: "cm³", explanation: "Volume uses cubic units." },

            { q: "Water filling a tank measures?", options: ["Volume", "Surface area", "Perimeter"], answer: "Volume", explanation: "Volume measures capacity." },

            { q: "Packing a box depends mostly on?", options: ["Volume", "Surface area", "Circumference"], answer: "Volume", explanation: "Volume tells how much fits inside." },

            { q: "Surface area measures?", options: ["Outside", "Inside", "Height"], answer: "Outside", explanation: "Surface area measures the exterior." },

            { q: "Volume belongs to?", options: ["3D figures", "2D figures", "Lines"], answer: "3D figures", explanation: "Only solids have volume." },

            { q: "Cube side doubles. Volume?", options: ["Increases", "Stays same", "Becomes zero"], answer: "Increases", explanation: "Volume grows quickly because it uses cubes." },

            { q: "Volume is useful in?", options: ["Shipping", "Construction", "Both"], answer: "Both", explanation: "Many real-world applications." },

            { q: "Which measurement tells how much a container holds?", options: ["Volume", "Area", "Perimeter"], answer: "Volume", explanation: "Volume measures capacity." },

            { q: "Volume formulas require?", options: ["Three dimensions", "Two dimensions", "Angles"], answer: "Three dimensions", explanation: "Length, width, and height." },

            { q: "Volume is studied in?", options: ["Geometry", "Grammar", "Economics"], answer: "Geometry", explanation: "A core geometry topic." }

        ]
    }
    ,

    "coordinate-geometry": {
        title: "Coordinate Geometry",
        subtitle: "Use the coordinate plane to analyze geometric figures.",
        body: `
        <p><strong>Coordinate Geometry</strong> combines algebra and geometry by placing figures on the coordinate plane.</p>

        <h2>The Coordinate Plane</h2>

        <p>The horizontal axis is the <strong>x-axis</strong>.</p>

        <p>The vertical axis is the <strong>y-axis</strong>.</p>

        <p>The point where they meet is the <strong>origin (0,0)</strong>.</p>

        <h2>Quadrants</h2>

        <table>
            <tr><th>Quadrant</th><th>x</th><th>y</th></tr>
            <tr><td>I</td><td>+</td><td>+</td></tr>
            <tr><td>II</td><td>-</td><td>+</td></tr>
            <tr><td>III</td><td>-</td><td>-</td></tr>
            <tr><td>IV</td><td>+</td><td>-</td></tr>
        </table>

        <h2>Distance Formula</h2>

        <p>d = √[(x₂−x₁)² + (y₂−y₁)²]</p>

        <h2>Midpoint Formula</h2>

        <p>((x₁+x₂)/2 , (y₁+y₂)/2)</p>

        <h2>Worked Example</h2>

        <p>Find the midpoint of (2,4) and (6,8).</p>

        <p>((2+6)/2 , (4+8)/2)</p>

        <p>(4,6)</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Always subtract coordinates in the correct order.</li>
            <li>Do not forget to square both differences in the distance formula.</li>
            <li>The midpoint averages the coordinates.</li>
        </ul>

        <h2>Summary</h2>

        <p>Coordinate geometry allows us to use algebra to solve geometry problems.</p>
    `,
        questions: [

            { q: "The horizontal axis is the?", options: ["x-axis", "y-axis", "origin"], answer: "x-axis", explanation: "The x-axis runs left to right." },

            { q: "The vertical axis is the?", options: ["y-axis", "x-axis", "origin"], answer: "y-axis", explanation: "The y-axis runs up and down." },

            { q: "The origin is?", options: ["(0,0)", "(1,1)", "(-1,-1)"], answer: "(0,0)", explanation: "The axes intersect at the origin." },

            { q: "Quadrant I contains?", options: ["(+,+)", "(-,+)", "(-,-)"], answer: "(+,+)", explanation: "Both coordinates are positive." },

            { q: "Quadrant II contains?", options: ["(-,+)", "(+,+)", "(+,-)"], answer: "(-,+)", explanation: "Negative x and positive y." },

            { q: "Quadrant III contains?", options: ["(-,-)", "(+,+)", "(+,-)"], answer: "(-,-)", explanation: "Both coordinates are negative." },

            { q: "Quadrant IV contains?", options: ["(+,-)", "(-,+)", "(+,+)"], answer: "(+,-)", explanation: "Positive x and negative y." },

            { q: "The midpoint is found by?", options: ["Averaging coordinates", "Adding coordinates", "Multiplying coordinates"], answer: "Averaging coordinates", explanation: "Average the x-values and y-values separately." },

            { q: "Midpoint of (2,4) and (6,8)?", options: ["(4,6)", "(8,12)", "(2,2)"], answer: "(4,6)", explanation: "Average each coordinate." },

            { q: "Distance measures?", options: ["Length between two points", "Area", "Slope"], answer: "Length between two points", explanation: "The distance formula finds segment length." },

            { q: "The distance formula comes from?", options: ["Pythagorean Theorem", "Area formula", "Slope formula"], answer: "Pythagorean Theorem", explanation: "It is based on right triangles." },

            { q: "The coordinate plane has how many quadrants?", options: ["4", "2", "8"], answer: "4", explanation: "The axes divide the plane into four regions." },

            { q: "Point (5,-2) is in?", options: ["Quadrant IV", "Quadrant II", "Quadrant I"], answer: "Quadrant IV", explanation: "Positive x, negative y." },

            { q: "Point (-4,3) is in?", options: ["Quadrant II", "Quadrant III", "Quadrant IV"], answer: "Quadrant II", explanation: "Negative x, positive y." },

            { q: "Point (-5,-7) is in?", options: ["Quadrant III", "Quadrant II", "Quadrant IV"], answer: "Quadrant III", explanation: "Both coordinates are negative." },

            { q: "Point (7,8) is in?", options: ["Quadrant I", "Quadrant IV", "Quadrant II"], answer: "Quadrant I", explanation: "Both coordinates are positive." },

            { q: "Coordinate geometry combines?", options: ["Algebra and Geometry", "Geometry and Biology", "Statistics and Grammar"], answer: "Algebra and Geometry", explanation: "It uses algebraic methods to solve geometry problems." },

            { q: "The x-coordinate comes?", options: ["First", "Second", "Last"], answer: "First", explanation: "Coordinates are written (x,y)." },

            { q: "The y-coordinate comes?", options: ["Second", "First", "Third"], answer: "Second", explanation: "Coordinates are written (x,y)." },

            { q: "Coordinate geometry is useful for?", options: ["Graphing and measurement", "Cooking", "Music"], answer: "Graphing and measurement", explanation: "Coordinate geometry is widely used in mathematics and engineering." }

        ]
    }
    ,

    "transformations": {
        title: "Transformations",
        subtitle: "Learn how figures move, flip, rotate, and resize on the coordinate plane.",
        body: `
        <p>A <strong>transformation</strong> changes the position, orientation, or size of a figure.</p>

        <h2>Four Main Transformations</h2>

        <p><strong>Translation</strong> – Slides a figure without changing its shape or size.</p>

        <p><strong>Reflection</strong> – Flips a figure across a line.</p>

        <p><strong>Rotation</strong> – Turns a figure around a fixed point.</p>

        <p><strong>Dilation</strong> – Enlarges or shrinks a figure using a scale factor.</p>

        <h2>Rigid Transformations</h2>

        <ul>
            <li>Translation</li>
            <li>Reflection</li>
            <li>Rotation</li>
        </ul>

        <p>Rigid transformations keep both the size and shape the same.</p>

        <h2>Non-Rigid Transformation</h2>

        <p>Dilation changes the size while preserving the shape.</p>

        <h2>Worked Example</h2>

        <p>Translate the point (2,3) right 4 units and up 2 units.</p>

        <p>New point: (6,5)</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Translations never rotate a figure.</li>
            <li>Reflections flip the figure.</li>
            <li>Dilations change size but keep the same shape.</li>
        </ul>

        <h2>Summary</h2>

        <p>Transformations help us describe how figures move and change on the coordinate plane.</p>
    `,
        questions: [

            { q: "A translation does what?", options: ["Slides a figure", "Flips a figure", "Resizes a figure"], answer: "Slides a figure", explanation: "Translations move figures without turning or resizing them." },

            { q: "A reflection does what?", options: ["Flips a figure", "Slides a figure", "Enlarges a figure"], answer: "Flips a figure", explanation: "Reflections flip across a line." },

            { q: "A rotation does what?", options: ["Turns a figure", "Slides a figure", "Shrinks a figure"], answer: "Turns a figure", explanation: "Rotations turn around a fixed point." },

            { q: "A dilation changes?", options: ["Size", "Shape", "Angle measures"], answer: "Size", explanation: "Dilations change size while preserving shape." },

            { q: "Which transformation is NOT rigid?", options: ["Dilation", "Translation", "Rotation"], answer: "Dilation", explanation: "Dilations change size." },

            { q: "Rigid transformations preserve?", options: ["Size and shape", "Only color", "Only area"], answer: "Size and shape", explanation: "Rigid motions preserve congruence." },

            { q: "Translation changes?", options: ["Position", "Shape", "Size"], answer: "Position", explanation: "Only the location changes." },

            { q: "Reflection occurs across a?", options: ["Line", "Circle", "Point"], answer: "Line", explanation: "Reflections occur across a line of reflection." },

            { q: "Rotation occurs around a?", options: ["Point", "Line", "Plane"], answer: "Point", explanation: "Rotations occur around a center." },

            { q: "A scale factor of 2 causes a figure to?", options: ["Double in size", "Stay the same", "Shrink"], answer: "Double in size", explanation: "All lengths double." },

            { q: "A scale factor of 1/2 causes a figure to?", options: ["Shrink", "Rotate", "Reflect"], answer: "Shrink", explanation: "Lengths become half as large." },

            { q: "Translation preserves?", options: ["Distance", "Nothing", "Scale factor"], answer: "Distance", explanation: "Translations preserve all lengths." },

            { q: "Reflection preserves?", options: ["Angle measures", "Scale factor only", "Area only"], answer: "Angle measures", explanation: "Reflections are rigid motions." },

            { q: "Rotation preserves?", options: ["Shape", "Only position", "Nothing"], answer: "Shape", explanation: "Rotations preserve congruence." },

            { q: "Dilation preserves?", options: ["Shape", "Length", "Perimeter"], answer: "Shape", explanation: "Dilations preserve similarity." },

            { q: "A translation right 3 changes x by?", options: ["+3", "-3", "0"], answer: "+3", explanation: "Moving right increases x." },

            { q: "A translation up 5 changes y by?", options: ["+5", "-5", "0"], answer: "+5", explanation: "Moving up increases y." },

            { q: "Congruent figures can be obtained using?", options: ["Rigid transformations", "Dilations only", "Scaling only"], answer: "Rigid transformations", explanation: "Rigid motions preserve congruence." },

            { q: "Similar figures can result from?", options: ["Dilations", "Only reflections", "Only translations"], answer: "Dilations", explanation: "Dilations create similar figures." },

            { q: "Transformations are mainly studied in?", options: ["Geometry", "Chemistry", "Economics"], answer: "Geometry", explanation: "Transformations are a core topic in geometry." }

        ]
    }
    ,

    "geometric-proofs": {
        title: "Geometric Proofs",
        subtitle: "Learn how to prove geometric statements using logical reasoning.",
        body: `
        <p>A <strong>geometric proof</strong> is a logical argument that shows a mathematical statement is always true.</p>

        <h2>What is a Proof?</h2>

        <p>A proof starts with information that is known to be true.</p>

        <p>Using definitions, postulates, properties, and previously proven theorems, we logically reach a conclusion.</p>

        <h2>Basic Structure</h2>

        <ol>
            <li>Given Information</li>
            <li>What Must Be Proven</li>
            <li>Logical Steps</li>
            <li>Final Conclusion</li>
        </ol>

        <h2>Common Reasons Used in Proofs</h2>

        <ul>
            <li>Definition of Congruent Segments</li>
            <li>Definition of Midpoint</li>
            <li>Vertical Angles Theorem</li>
            <li>Reflexive Property</li>
            <li>Transitive Property</li>
            <li>Substitution Property</li>
            <li>Triangle Congruence Theorems</li>
        </ul>

        <h2>Worked Example</h2>

        <p>Given:</p>

        <p>AB = BC</p>

        <p>BC = CD</p>

        <p>Prove: AB = CD</p>

        <p>Since AB = BC and BC = CD, the Transitive Property tells us that AB = CD.</p>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Never skip logical steps.</li>
            <li>Always give a reason for every statement.</li>
            <li>Do not assume something is true because it "looks correct."</li>
        </ul>

        <h2>Summary</h2>

        <p>Geometry proofs use logical reasoning to demonstrate that mathematical statements are always true.</p>
    `,
        questions: [

            { q: "A geometric proof is?", options: ["A logical argument", "A guess", "A drawing"], answer: "A logical argument", explanation: "Proofs use logic to establish truth." },

            { q: "Proofs begin with?", options: ["Given information", "The answer", "A graph"], answer: "Given information", explanation: "Every proof starts with known facts." },

            { q: "Proofs end with?", options: ["A conclusion", "A question", "A picture"], answer: "A conclusion", explanation: "The goal is to prove the required statement." },

            { q: "Every statement in a proof must have?", options: ["A reason", "A color", "A graph"], answer: "A reason", explanation: "Every step must be justified." },

            { q: "The Reflexive Property says?", options: ["A quantity equals itself", "Opposite sides are equal", "Angles total 180°"], answer: "A quantity equals itself", explanation: "Examples: AB = AB or ∠A = ∠A." },

            { q: "The Transitive Property states?", options: ["If a=b and b=c then a=c", "Opposites attract", "A=a"], answer: "If a=b and b=c then a=c", explanation: "This connects equal quantities." },

            { q: "Vertical angles are?", options: ["Congruent", "Supplementary always", "Parallel"], answer: "Congruent", explanation: "Vertical angles always have equal measure." },

            { q: "A midpoint divides a segment into?", options: ["Two equal parts", "Three equal parts", "Unequal parts"], answer: "Two equal parts", explanation: "Definition of midpoint." },

            { q: "Congruent segments have?", options: ["Equal lengths", "Equal colors", "Equal slopes"], answer: "Equal lengths", explanation: "Congruent means equal measure." },

            { q: "Congruent angles have?", options: ["Equal measures", "Equal sides", "Equal areas"], answer: "Equal measures", explanation: "Congruent angles measure the same." },

            { q: "Which theorem is used to prove triangles congruent?", options: ["SSS", "Quadratic Formula", "Slope Formula"], answer: "SSS", explanation: "SSS is a triangle congruence theorem." },

            { q: "Can diagrams alone prove a statement?", options: ["No", "Yes", "Always"], answer: "No", explanation: "Appearances can be misleading." },

            { q: "Proofs rely on?", options: ["Logic", "Opinion", "Guessing"], answer: "Logic", explanation: "Mathematics requires logical reasoning." },

            { q: "Which property says x=x?", options: ["Reflexive", "Symmetric", "Distributive"], answer: "Reflexive", explanation: "Everything equals itself." },

            { q: "The first step of most proofs is?", options: ["Write the given", "Write the answer", "Draw a circle"], answer: "Write the given", explanation: "Proofs begin with known information." },

            { q: "The final step is?", options: ["State the conclusion", "Erase work", "Start over"], answer: "State the conclusion", explanation: "The proof ends when the required statement is shown." },

            { q: "Proofs are important because they?", options: ["Show why something is true", "Memorize formulas", "Estimate answers"], answer: "Show why something is true", explanation: "Proofs explain mathematical truth." },

            { q: "Skipping steps in a proof is?", options: ["Incorrect", "Recommended", "Required"], answer: "Incorrect", explanation: "Each logical step must be justified." },

            { q: "Geometry proofs develop?", options: ["Logical thinking", "Handwriting", "Drawing speed"], answer: "Logical thinking", explanation: "Proofs strengthen reasoning skills." },

            { q: "Proofs are one of the foundations of?", options: ["Mathematics", "History", "Chemistry"], answer: "Mathematics", explanation: "Proof is fundamental to mathematics." }

        ]
    }
    ,

    "geometry-final-exam": {
        title: "Geometry Final Exam",
        subtitle: "Review every major concept from Geometry before earning your certificate.",
        body: `
        <h2>Congratulations!</h2>

        <p>You have completed every Geometry lesson.</p>

        <p>This final exam reviews the entire course.</p>

        <h2>Topics Covered</h2>

        <ul>
            <li>Points, Lines & Planes</li>
            <li>Angles</li>
            <li>Parallel & Perpendicular Lines</li>
            <li>Triangles</li>
            <li>Triangle Congruence</li>
            <li>Triangle Similarity</li>
            <li>Right Triangles</li>
            <li>Pythagorean Theorem</li>
            <li>Polygons</li>
            <li>Quadrilaterals</li>
            <li>Circles</li>
            <li>Arcs & Chords</li>
            <li>Area</li>
            <li>Surface Area</li>
            <li>Volume</li>
            <li>Coordinate Geometry</li>
            <li>Transformations</li>
            <li>Geometric Proofs</li>
        </ul>

        <h2>Exam Information</h2>

        <p><strong>Questions:</strong> 100 (coming soon)</p>

        <p><strong>Passing Score:</strong> 80%</p>

        <p><strong>Time Limit:</strong> None</p>

        <p>Once you pass, you'll earn the <strong>Geometry Master</strong> badge.</p>

        <h2>Good Luck!</h2>

        <p>Take your time, read carefully, and show what you've learned.</p>
    `,
        questions: [

            {
                q: "Are you ready to begin the Geometry Final Exam?",
                options: [
                    "Yes, let's begin!",
                    "I want to review first.",
                    "Not yet."
                ],
                answer: "Yes, let's begin!",
                explanation: "The full 100-question Geometry Final Exam will be added in a separate file."
            }

        ]
    }
};

