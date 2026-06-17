const geometryLessons = {

    "points-lines-and-planes": {
        title: "Points, Lines, and Planes",
        subtitle: "Learn the basic building blocks of geometry.",
        body: `
            <p>Geometry starts with points, lines, and planes.</p>
            <p>A <strong>point</strong> shows an exact location.</p>
            <p>A <strong>line</strong> goes forever in both directions.</p>
            <p>A <strong>plane</strong> is a flat surface that extends forever.</p>
        `,
        questions: [
            { q: "A point represents?", options: ["Exact location", "Flat surface", "Curved shape"], answer: "Exact location", explanation: "A point marks one exact location." },
            { q: "A line extends?", options: ["Forever in both directions", "Only left", "Only right"], answer: "Forever in both directions", explanation: "A line has no endpoints." },
            { q: "A plane is?", options: ["Flat surface", "Single dot", "Curved line"], answer: "Flat surface", explanation: "A plane is a flat surface that extends forever." }
        ]
    },

    "angles": {
        title: "Angles",
        subtitle: "Understand angle types and measurements.",
        body: `
            <p>An angle is formed by two rays that share an endpoint.</p>
            <p>The shared endpoint is called the vertex.</p>
            <p>Acute: less than 90°. Right: exactly 90°. Obtuse: between 90° and 180°.</p>
        `,
        questions: [
            { q: "An angle is formed by?", options: ["Two rays", "Two circles", "Two planes"], answer: "Two rays", explanation: "Angles are formed by two rays sharing an endpoint." },
            { q: "The shared endpoint is called?", options: ["Vertex", "Segment", "Plane"], answer: "Vertex", explanation: "The vertex is the common endpoint." },
            { q: "A right angle is?", options: ["90°", "180°", "45°"], answer: "90°", explanation: "A right angle measures exactly 90°." }
        ]
    },

    "parallel-and-perpendicular-lines": {
        title: "Parallel and Perpendicular Lines",
        subtitle: "Compare lines by direction and intersection.",
        body: `
            <p>Parallel lines never intersect.</p>
            <p>Perpendicular lines intersect at a right angle.</p>
            <p>Perpendicular lines form 90° angles.</p>
        `,
        questions: [
            { q: "Parallel lines?", options: ["Never intersect", "Always intersect", "Form circles"], answer: "Never intersect", explanation: "Parallel lines stay the same distance apart." },
            { q: "Perpendicular lines intersect at?", options: ["90°", "180°", "45°"], answer: "90°", explanation: "Perpendicular lines form right angles." },
            { q: "Railroad tracks are an example of?", options: ["Parallel lines", "Perpendicular lines", "Curved lines"], answer: "Parallel lines", explanation: "Tracks run side by side without meeting." }
        ]
    },

    "triangles": {
        title: "Triangles",
        subtitle: "Learn the basic properties of triangles.",
        body: `
            <p>A triangle is a polygon with three sides.</p>
            <p>Every triangle has three angles.</p>
            <p>The angles inside a triangle always add to 180°.</p>
        `,
        questions: [
            { q: "A triangle has how many sides?", options: ["3", "4", "5"], answer: "3", explanation: "A triangle has three sides." },
            { q: "Triangle angles add to?", options: ["180°", "90°", "360°"], answer: "180°", explanation: "Interior angles of a triangle sum to 180°." },
            { q: "An equilateral triangle has?", options: ["3 equal sides", "2 equal sides", "No equal sides"], answer: "3 equal sides", explanation: "Equilateral means all sides equal." }
        ]
    }

};