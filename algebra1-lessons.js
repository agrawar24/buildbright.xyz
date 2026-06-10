



const lessonBank = {
    algebra1: {
        "solving-equations": {
            title: "Solving Equations",
            subtitle: "Learn how to isolate x step by step.",
            body: `
                <p>An equation says two expressions are equal.</p>
                <p>Your goal is to find the value of the variable.</p>

                <h2>Example</h2>
                <p><strong>x + 5 = 12</strong></p>
                <p>Subtract 5 from both sides:</p>
                <p><strong>x = 7</strong></p>

                <p>Whatever you do to one side, you must do to the other side.</p>
            `,
            questions: [
                { q: "x + 3 = 8", options: ["4", "5", "6"], answer: "5", explanation: "Subtract 3 from both sides: x = 5." },
                { q: "x - 4 = 10", options: ["6", "14", "40"], answer: "14", explanation: "Add 4 to both sides: x = 14." },
                { q: "2x = 12", options: ["5", "6", "10"], answer: "6", explanation: "Divide both sides by 2: x = 6." },
                { q: "x / 3 = 4", options: ["1", "7", "12"], answer: "12", explanation: "Multiply both sides by 3: x = 12." },
                { q: "x + 9 = 20", options: ["9", "11", "29"], answer: "11", explanation: "Subtract 9 from both sides: x = 11." },
                { q: "3x = 21", options: ["6", "7", "9"], answer: "7", explanation: "Divide both sides by 3: x = 7." },
                { q: "x - 8 = 15", options: ["7", "23", "120"], answer: "23", explanation: "Add 8 to both sides: x = 23." },
                { q: "4x = 32", options: ["6", "8", "12"], answer: "8", explanation: "Divide both sides by 4: x = 8." },
                { q: "x / 5 = 6", options: ["11", "30", "1"], answer: "30", explanation: "Multiply both sides by 5: x = 30." },
                { q: "x + 14 = 25", options: ["11", "39", "9"], answer: "11", explanation: "Subtract 14 from both sides: x = 11." },
                { q: "2x + 3 = 11", options: ["3", "4", "7"], answer: "4", explanation: "Subtract 3: 2x = 8. Divide by 2: x = 4." },
                { q: "5x - 10 = 15", options: ["3", "5", "25"], answer: "5", explanation: "Add 10: 5x = 25. Divide by 5: x = 5." },
                { q: "3x + 6 = 18", options: ["4", "6", "8"], answer: "4", explanation: "Subtract 6: 3x = 12. Divide by 3: x = 4." },
                { q: "4x - 7 = 9", options: ["2", "4", "16"], answer: "4", explanation: "Add 7: 4x = 16. Divide by 4: x = 4." },
                { q: "6x + 2 = 20", options: ["2", "3", "6"], answer: "3", explanation: "Subtract 2: 6x = 18. Divide by 6: x = 3." },
                { q: "7x - 5 = 30", options: ["4", "5", "7"], answer: "5", explanation: "Add 5: 7x = 35. Divide by 7: x = 5." },
                { q: "8x + 4 = 28", options: ["3", "4", "6"], answer: "3", explanation: "Subtract 4: 8x = 24. Divide by 8: x = 3." },
                { q: "9x - 9 = 45", options: ["4", "5", "6"], answer: "6", explanation: "Add 9: 9x = 54. Divide by 9: x = 6." },
                { q: "10x + 5 = 65", options: ["5", "6", "7"], answer: "6", explanation: "Subtract 5: 10x = 60. Divide by 10: x = 6." },
                { q: "12x - 6 = 30", options: ["2", "3", "4"], answer: "3", explanation: "Add 6: 12x = 36. Divide by 12: x = 3." }
            ]
        },

        "multi-step-equations": {
            title: "Multi-Step Equations",
            subtitle: "Solve equations that take more than one move.",
            body: `
                <p>A multi-step equation needs more than one operation to solve.</p>
                <p>The goal is still the same: isolate the variable.</p>

                <h2>Example</h2>
                <p><strong>2x + 5 = 17</strong></p>
                <p>Step 1: Subtract 5 from both sides.</p>
                <p><strong>2x = 12</strong></p>
                <p>Step 2: Divide both sides by 2.</p>
                <p><strong>x = 6</strong></p>
            `,
            questions: [
                { q: "2x + 3 = 11", options: ["3", "4", "7"], answer: "4", explanation: "Subtract 3: 2x = 8. Divide by 2: x = 4." },
                { q: "3x + 4 = 19", options: ["5", "6", "7"], answer: "5", explanation: "Subtract 4: 3x = 15. Divide by 3: x = 5." },
                { q: "4x - 2 = 14", options: ["3", "4", "5"], answer: "4", explanation: "Add 2: 4x = 16. Divide by 4: x = 4." },
                { q: "5x + 5 = 30", options: ["4", "5", "6"], answer: "5", explanation: "Subtract 5: 5x = 25. Divide by 5: x = 5." },
                { q: "6x - 6 = 18", options: ["3", "4", "5"], answer: "4", explanation: "Add 6: 6x = 24. Divide by 6: x = 4." },
                { q: "2x - 7 = 15", options: ["8", "10", "11"], answer: "11", explanation: "Add 7: 2x = 22. Divide by 2: x = 11." },
                { q: "3x - 9 = 12", options: ["5", "6", "7"], answer: "7", explanation: "Add 9: 3x = 21. Divide by 3: x = 7." },
                { q: "4x + 8 = 28", options: ["4", "5", "6"], answer: "5", explanation: "Subtract 8: 4x = 20. Divide by 4: x = 5." },
                { q: "7x + 1 = 50", options: ["6", "7", "8"], answer: "7", explanation: "Subtract 1: 7x = 49. Divide by 7: x = 7." },
                { q: "8x - 4 = 60", options: ["7", "8", "9"], answer: "8", explanation: "Add 4: 8x = 64. Divide by 8: x = 8." },
                { q: "2(x + 3) = 14", options: ["4", "5", "7"], answer: "4", explanation: "Distribute: 2x + 6 = 14. Subtract 6: 2x = 8. Divide by 2: x = 4." },
                { q: "3(x - 2) = 15", options: ["5", "7", "9"], answer: "7", explanation: "Distribute: 3x - 6 = 15. Add 6: 3x = 21. Divide by 3: x = 7." },
                { q: "4(x + 1) = 24", options: ["4", "5", "6"], answer: "5", explanation: "Distribute: 4x + 4 = 24. Subtract 4: 4x = 20. Divide by 4: x = 5." },
                { q: "5(x - 3) = 20", options: ["4", "7", "10"], answer: "7", explanation: "Distribute: 5x - 15 = 20. Add 15: 5x = 35. Divide by 5: x = 7." },
                { q: "6(x + 2) = 48", options: ["6", "8", "10"], answer: "6", explanation: "Distribute: 6x + 12 = 48. Subtract 12: 6x = 36. Divide by 6: x = 6." },
                { q: "2x + 5 = 3x - 4", options: ["7", "8", "9"], answer: "9", explanation: "Subtract 2x: 5 = x - 4. Add 4: x = 9." },
                { q: "4x - 6 = 2x + 10", options: ["6", "8", "10"], answer: "8", explanation: "Subtract 2x: 2x - 6 = 10. Add 6: 2x = 16. Divide by 2: x = 8." },
                { q: "5x + 2 = 3x + 18", options: ["6", "8", "10"], answer: "8", explanation: "Subtract 3x: 2x + 2 = 18. Subtract 2: 2x = 16. Divide by 2: x = 8." },
                { q: "7x - 5 = 4x + 16", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 4x: 3x - 5 = 16. Add 5: 3x = 21. Divide by 3: x = 7." },
                { q: "9x + 3 = 6x + 24", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 6x: 3x + 3 = 24. Subtract 3: 3x = 21. Divide by 3: x = 7." }
            ]
        },

        "variables-on-both-sides": {
            title: "Variables on Both Sides",
            subtitle: "Move variables to one side before solving.",
            body: `
                <p>Some equations have variables on both sides.</p>
                <p>Move all x terms to one side first.</p>

                <h2>Example</h2>
                <p><strong>3x + 4 = x + 12</strong></p>
                <p>Subtract x from both sides:</p>
                <p><strong>2x + 4 = 12</strong></p>
                <p>Subtract 4:</p>
                <p><strong>2x = 8</strong></p>
                <p>Divide by 2:</p>
                <p><strong>x = 4</strong></p>
            `,
            questions: [
                { q: "2x + 3 = x + 7", options: ["2", "4", "6"], answer: "4", explanation: "Subtract x: x + 3 = 7. Subtract 3: x = 4." },
                { q: "3x + 2 = x + 10", options: ["3", "4", "5"], answer: "4", explanation: "Subtract x: 2x + 2 = 10. Subtract 2: 2x = 8. Divide by 2: x = 4." },
                { q: "4x - 1 = 2x + 7", options: ["3", "4", "5"], answer: "4", explanation: "Subtract 2x: 2x - 1 = 7. Add 1: 2x = 8. Divide by 2: x = 4." },
                { q: "5x + 6 = 3x + 14", options: ["2", "4", "8"], answer: "4", explanation: "Subtract 3x: 2x + 6 = 14. Subtract 6: 2x = 8. Divide by 2: x = 4." },
                { q: "6x - 5 = 4x + 9", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 4x: 2x - 5 = 9. Add 5: 2x = 14. Divide by 2: x = 7." },
                { q: "7x + 3 = 5x + 17", options: ["5", "7", "10"], answer: "7", explanation: "Subtract 5x: 2x + 3 = 17. Subtract 3: 2x = 14. Divide by 2: x = 7." },
                { q: "8x - 4 = 6x + 12", options: ["6", "8", "10"], answer: "8", explanation: "Subtract 6x: 2x - 4 = 12. Add 4: 2x = 16. Divide by 2: x = 8." },
                { q: "9x + 1 = 6x + 22", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 6x: 3x + 1 = 22. Subtract 1: 3x = 21. Divide by 3: x = 7." },
                { q: "10x - 8 = 7x + 13", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 7x: 3x - 8 = 13. Add 8: 3x = 21. Divide by 3: x = 7." },
                { q: "12x + 4 = 8x + 20", options: ["2", "4", "6"], answer: "4", explanation: "Subtract 8x: 4x + 4 = 20. Subtract 4: 4x = 16. Divide by 4: x = 4." },
                { q: "2(x + 3) = x + 10", options: ["2", "4", "6"], answer: "4", explanation: "Distribute: 2x + 6 = x + 10. Subtract x: x + 6 = 10. Subtract 6: x = 4." },
                { q: "3(x - 2) = x + 8", options: ["5", "7", "9"], answer: "7", explanation: "Distribute: 3x - 6 = x + 8. Subtract x: 2x - 6 = 8. Add 6: 2x = 14. Divide by 2: x = 7." },
                { q: "4(x + 1) = 2x + 12", options: ["3", "4", "5"], answer: "4", explanation: "Distribute: 4x + 4 = 2x + 12. Subtract 2x: 2x + 4 = 12. Subtract 4: 2x = 8. Divide by 2: x = 4." },
                { q: "5(x - 1) = 3x + 9", options: ["5", "7", "9"], answer: "7", explanation: "Distribute: 5x - 5 = 3x + 9. Subtract 3x: 2x - 5 = 9. Add 5: 2x = 14. Divide by 2: x = 7." },
                { q: "6(x + 2) = 4x + 20", options: ["2", "4", "6"], answer: "4", explanation: "Distribute: 6x + 12 = 4x + 20. Subtract 4x: 2x + 12 = 20. Subtract 12: 2x = 8. Divide by 2: x = 4." },
                { q: "3x + 10 = 5x - 4", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 3x: 10 = 2x - 4. Add 4: 14 = 2x. Divide by 2: x = 7." },
                { q: "4x + 18 = 7x - 3", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 4x: 18 = 3x - 3. Add 3: 21 = 3x. Divide by 3: x = 7." },
                { q: "6x + 2 = 9x - 19", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 6x: 2 = 3x - 19. Add 19: 21 = 3x. Divide by 3: x = 7." },
                { q: "8x - 12 = 5x + 9", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 5x: 3x - 12 = 9. Add 12: 3x = 21. Divide by 3: x = 7." },
                { q: "10x + 6 = 4x + 48", options: ["5", "7", "9"], answer: "7", explanation: "Subtract 4x: 6x + 6 = 48. Subtract 6: 6x = 42. Divide by 6: x = 7." }
            ]
        },

        "inequalities": {
            title: "Inequalities",
            subtitle: "Solve inequalities like equations, but watch the direction of the sign.",
            body: `
                <p>An inequality compares two expressions using symbols like &lt;, &gt;, ≤, or ≥.</p>
                <p>You solve inequalities almost the same way you solve equations.</p>

                <h2>Important Rule</h2>
                <p>If you multiply or divide by a negative number, you must flip the inequality sign.</p>

                <h2>Example</h2>
                <p><strong>x + 4 &gt; 10</strong></p>
                <p>Subtract 4 from both sides:</p>
                <p><strong>x &gt; 6</strong></p>
            `,
            questions: [
                { q: "x + 3 > 8", options: ["x > 5", "x > 11", "x < 5"], answer: "x > 5", explanation: "Subtract 3 from both sides: x > 5." },
                { q: "x - 4 < 10", options: ["x < 6", "x < 14", "x > 14"], answer: "x < 14", explanation: "Add 4 to both sides: x < 14." },
                { q: "2x > 12", options: ["x > 6", "x < 6", "x > 24"], answer: "x > 6", explanation: "Divide both sides by 2: x > 6." },
                { q: "x / 3 ≤ 4", options: ["x ≤ 12", "x ≥ 12", "x ≤ 1"], answer: "x ≤ 12", explanation: "Multiply both sides by 3: x ≤ 12." },
                { q: "x + 9 ≥ 20", options: ["x ≥ 11", "x ≤ 11", "x ≥ 29"], answer: "x ≥ 11", explanation: "Subtract 9 from both sides: x ≥ 11." },
                { q: "3x < 21", options: ["x < 7", "x > 7", "x < 18"], answer: "x < 7", explanation: "Divide both sides by 3: x < 7." },
                { q: "x - 8 ≥ 15", options: ["x ≥ 7", "x ≥ 23", "x ≤ 23"], answer: "x ≥ 23", explanation: "Add 8 to both sides: x ≥ 23." },
                { q: "4x ≤ 32", options: ["x ≤ 8", "x ≥ 8", "x ≤ 28"], answer: "x ≤ 8", explanation: "Divide both sides by 4: x ≤ 8." },
                { q: "x / 5 > 6", options: ["x > 30", "x < 30", "x > 1"], answer: "x > 30", explanation: "Multiply both sides by 5: x > 30." },
                { q: "x + 14 < 25", options: ["x < 11", "x > 11", "x < 39"], answer: "x < 11", explanation: "Subtract 14 from both sides: x < 11." },
                { q: "-2x < 10", options: ["x < -5", "x > -5", "x < 5"], answer: "x > -5", explanation: "Divide by -2 and flip the sign: x > -5." },
                { q: "-3x > 12", options: ["x > -4", "x < -4", "x < 4"], answer: "x < -4", explanation: "Divide by -3 and flip the sign: x < -4." },
                { q: "-4x ≤ 20", options: ["x ≤ -5", "x ≥ -5", "x ≥ 5"], answer: "x ≥ -5", explanation: "Divide by -4 and flip the sign: x ≥ -5." },
                { q: "-5x ≥ 25", options: ["x ≥ -5", "x ≤ -5", "x ≤ 5"], answer: "x ≤ -5", explanation: "Divide by -5 and flip the sign: x ≤ -5." },
                { q: "-6x < 18", options: ["x > -3", "x < -3", "x > 3"], answer: "x > -3", explanation: "Divide by -6 and flip the sign: x > -3." },
                { q: "2x + 3 > 11", options: ["x > 4", "x < 4", "x > 7"], answer: "x > 4", explanation: "Subtract 3: 2x > 8. Divide by 2: x > 4." },
                { q: "5x - 10 ≤ 15", options: ["x ≤ 5", "x ≥ 5", "x ≤ 25"], answer: "x ≤ 5", explanation: "Add 10: 5x ≤ 25. Divide by 5: x ≤ 5." },
                { q: "3x + 6 ≥ 18", options: ["x ≥ 4", "x ≤ 4", "x ≥ 8"], answer: "x ≥ 4", explanation: "Subtract 6: 3x ≥ 12. Divide by 3: x ≥ 4." },
                { q: "4x - 7 < 9", options: ["x < 4", "x > 4", "x < 16"], answer: "x < 4", explanation: "Add 7: 4x < 16. Divide by 4: x < 4." },
                { q: "-2x + 5 ≥ 13", options: ["x ≤ -4", "x ≥ -4", "x ≤ 4"], answer: "x ≤ -4", explanation: "Subtract 5: -2x ≥ 8. Divide by -2 and flip: x ≤ -4." }
            ]
        },

        "compound-inequalities": {
            title: "Compound Inequalities",
            subtitle: "Solve two inequalities connected by AND or OR.",
            body: `
                <p>A compound inequality combines two inequalities.</p>
                <p>AND means the answer must satisfy both inequalities.</p>
                <p>OR means the answer can satisfy either inequality.</p>

                <h2>Example</h2>
                <p><strong>2 &lt; x + 3 &lt; 9</strong></p>
                <p>Subtract 3 from all three parts:</p>
                <p><strong>-1 &lt; x &lt; 6</strong></p>
            `,
            questions: [
                { q: "2 < x + 3 < 8", options: ["-1 < x < 5", "5 < x < 11", "x < -1 or x > 5"], answer: "-1 < x < 5", explanation: "Subtract 3 from all three parts: -1 < x < 5." },
                { q: "5 < x + 2 < 10", options: ["3 < x < 8", "7 < x < 12", "x < 3 or x > 8"], answer: "3 < x < 8", explanation: "Subtract 2 from all three parts: 3 < x < 8." },
                { q: "-1 < x - 4 < 6", options: ["3 < x < 10", "-5 < x < 2", "x < 3 or x > 10"], answer: "3 < x < 10", explanation: "Add 4 to all three parts: 3 < x < 10." },
                { q: "0 ≤ x + 5 ≤ 12", options: ["-5 ≤ x ≤ 7", "5 ≤ x ≤ 17", "x ≤ -5 or x ≥ 7"], answer: "-5 ≤ x ≤ 7", explanation: "Subtract 5 from all three parts: -5 ≤ x ≤ 7." },
                { q: "4 < x - 1 < 9", options: ["5 < x < 10", "3 < x < 8", "x < 5 or x > 10"], answer: "5 < x < 10", explanation: "Add 1 to all three parts: 5 < x < 10." },
                { q: "1 < 2x < 10", options: ["0.5 < x < 5", "2 < x < 20", "x < 0.5 or x > 5"], answer: "0.5 < x < 5", explanation: "Divide all three parts by 2: 0.5 < x < 5." },
                { q: "6 ≤ 3x ≤ 18", options: ["2 ≤ x ≤ 6", "3 ≤ x ≤ 9", "x ≤ 2 or x ≥ 6"], answer: "2 ≤ x ≤ 6", explanation: "Divide all three parts by 3: 2 ≤ x ≤ 6." },
                { q: "-8 < 4x < 12", options: ["-2 < x < 3", "-4 < x < 8", "x < -2 or x > 3"], answer: "-2 < x < 3", explanation: "Divide all three parts by 4: -2 < x < 3." },
                { q: "-15 ≤ 5x ≤ 20", options: ["-3 ≤ x ≤ 4", "-10 ≤ x ≤ 15", "x ≤ -3 or x ≥ 4"], answer: "-3 ≤ x ≤ 4", explanation: "Divide all three parts by 5: -3 ≤ x ≤ 4." },
                { q: "10 < 2x + 4 < 18", options: ["3 < x < 7", "6 < x < 11", "x < 3 or x > 7"], answer: "3 < x < 7", explanation: "Subtract 4: 6 < 2x < 14. Divide by 2: 3 < x < 7." },
                { q: "x < 3 or x > 8", options: ["Outside 3 and 8", "Between 3 and 8", "Only x = 3"], answer: "Outside 3 and 8", explanation: "OR means either side works, so the solution is outside the interval." },
                { q: "x > 2 and x < 9", options: ["2 < x < 9", "x < 2 or x > 9", "x = 2 only"], answer: "2 < x < 9", explanation: "AND means both must be true, so x is between 2 and 9." },
                { q: "x ≤ -1 or x ≥ 5", options: ["Outside -1 and 5", "Between -1 and 5", "-1 ≤ x ≤ 5"], answer: "Outside -1 and 5", explanation: "OR with opposite directions usually means outside the interval." },
                { q: "x ≥ 4 and x ≤ 12", options: ["4 ≤ x ≤ 12", "x ≤ 4 or x ≥ 12", "x = 4 only"], answer: "4 ≤ x ≤ 12", explanation: "AND means x must be at least 4 and at most 12." },
                { q: "x < -2 or x > 6", options: ["Outside -2 and 6", "Between -2 and 6", "-2 < x < 6"], answer: "Outside -2 and 6", explanation: "The solution includes values less than -2 or greater than 6." },
                { q: "-4 < 2x + 2 < 10", options: ["-3 < x < 4", "-6 < x < 8", "x < -3 or x > 4"], answer: "-3 < x < 4", explanation: "Subtract 2: -6 < 2x < 8. Divide by 2: -3 < x < 4." },
                { q: "3 ≤ 4x - 1 ≤ 15", options: ["1 ≤ x ≤ 4", "4 ≤ x ≤ 16", "x ≤ 1 or x ≥ 4"], answer: "1 ≤ x ≤ 4", explanation: "Add 1: 4 ≤ 4x ≤ 16. Divide by 4: 1 ≤ x ≤ 4." },
                { q: "-7 < 3x + 2 < 11", options: ["-3 < x < 3", "-9 < x < 9", "x < -3 or x > 3"], answer: "-3 < x < 3", explanation: "Subtract 2: -9 < 3x < 9. Divide by 3: -3 < x < 3." },
                { q: "5 < 2x - 3 < 13", options: ["4 < x < 8", "2 < x < 5", "x < 4 or x > 8"], answer: "4 < x < 8", explanation: "Add 3: 8 < 2x < 16. Divide by 2: 4 < x < 8." },
                { q: "-10 ≤ -2x ≤ 4", options: ["-2 ≤ x ≤ 5", "2 ≤ x ≤ -5", "x ≤ -2 or x ≥ 5"], answer: "-2 ≤ x ≤ 5", explanation: "Divide by -2 and flip both signs: 5 ≥ x ≥ -2, rewritten as -2 ≤ x ≤ 5." }
            ]
        },

        "absolute-value-equations": {
            title: "Absolute Value Equations",
            subtitle: "Solve equations where distance from zero matters.",
            body: `
        <p>Absolute value means distance from zero.</p>
        <p>Because distance can be positive in two directions, most absolute value equations split into two cases.</p>

        <h2>Example</h2>
        <p><strong>|x| = 5</strong></p>
        <p>This means x can be 5 or -5.</p>

        <h2>Example</h2>
        <p><strong>|x - 3| = 7</strong></p>
        <p>Case 1: x - 3 = 7, so x = 10.</p>
        <p>Case 2: x - 3 = -7, so x = -4.</p>
    `,
            questions: [
                { q: "|x| = 4", options: ["x = 4 only", "x = -4 only", "x = 4 or x = -4"], answer: "x = 4 or x = -4", explanation: "Absolute value is distance from zero, so both 4 and -4 work." },
                { q: "|x| = 9", options: ["x = 9 or x = -9", "x = 0", "x = 9 only"], answer: "x = 9 or x = -9", explanation: "Both 9 and -9 are 9 units from zero." },
                { q: "|x - 2| = 5", options: ["x = 7 or x = -3", "x = 3 or x = -7", "x = 5 only"], answer: "x = 7 or x = -3", explanation: "Set x - 2 = 5 and x - 2 = -5." },
                { q: "|x + 1| = 6", options: ["x = 5 or x = -7", "x = 7 or x = -5", "x = 6 only"], answer: "x = 5 or x = -7", explanation: "Set x + 1 = 6 and x + 1 = -6." },
                { q: "|x - 4| = 3", options: ["x = 7 or x = 1", "x = 3 or x = -3", "x = 4 only"], answer: "x = 7 or x = 1", explanation: "Set x - 4 = 3 and x - 4 = -3." },

                { q: "|x + 5| = 2", options: ["x = -3 or x = -7", "x = 3 or x = 7", "x = -5 only"], answer: "x = -3 or x = -7", explanation: "Set x + 5 = 2 and x + 5 = -2." },
                { q: "|x - 6| = 4", options: ["x = 10 or x = 2", "x = 6 or x = 4", "x = -10 or x = -2"], answer: "x = 10 or x = 2", explanation: "Set x - 6 = 4 and x - 6 = -4." },
                { q: "|x + 3| = 8", options: ["x = 5 or x = -11", "x = 11 or x = -5", "x = 8 only"], answer: "x = 5 or x = -11", explanation: "Set x + 3 = 8 and x + 3 = -8." },
                { q: "|x - 1| = 10", options: ["x = 11 or x = -9", "x = 9 or x = -11", "x = 10 only"], answer: "x = 11 or x = -9", explanation: "Set x - 1 = 10 and x - 1 = -10." },
                { q: "|x + 4| = 9", options: ["x = 5 or x = -13", "x = 13 or x = -5", "x = 9 only"], answer: "x = 5 or x = -13", explanation: "Set x + 4 = 9 and x + 4 = -9." },

                { q: "2|x| = 10", options: ["x = 5 or x = -5", "x = 10 or x = -10", "x = 2 only"], answer: "x = 5 or x = -5", explanation: "Divide by 2 first: |x| = 5." },
                { q: "3|x| = 12", options: ["x = 4 or x = -4", "x = 12 only", "x = 3 only"], answer: "x = 4 or x = -4", explanation: "Divide by 3 first: |x| = 4." },
                { q: "|x - 2| + 1 = 6", options: ["x = 7 or x = -3", "x = 5 only", "x = 6 only"], answer: "x = 7 or x = -3", explanation: "Subtract 1: |x - 2| = 5. Then split into two cases." },
                { q: "|x + 3| - 2 = 4", options: ["x = 3 or x = -9", "x = 6 only", "x = -3 only"], answer: "x = 3 or x = -9", explanation: "Add 2: |x + 3| = 6. Then split." },
                { q: "2|x - 1| = 8", options: ["x = 5 or x = -3", "x = 4 only", "x = 8 only"], answer: "x = 5 or x = -3", explanation: "Divide by 2: |x - 1| = 4. Then x - 1 = 4 or -4." },

                { q: "|x - 5| = 0", options: ["x = 5", "x = 0", "x = 5 or x = -5"], answer: "x = 5", explanation: "Only x = 5 makes x - 5 equal zero." },
                { q: "|x + 2| = 0", options: ["x = -2", "x = 2", "No solution"], answer: "x = -2", explanation: "Only x = -2 makes x + 2 equal zero." },
                { q: "|x| = -3", options: ["No solution", "x = 3", "x = -3"], answer: "No solution", explanation: "Absolute value cannot be negative." },
                { q: "|x - 4| = -1", options: ["No solution", "x = 3", "x = 5"], answer: "No solution", explanation: "Absolute value is never negative." },
                { q: "|x + 6| = -2", options: ["No solution", "x = -8", "x = -4"], answer: "No solution", explanation: "Absolute value cannot equal a negative number." }
            ]
        },

        "absolute-value-inequalities": {
            title: "Absolute Value Inequalities",
            subtitle: "Solve distance inequalities using AND and OR.",
            body: `
        <p>Absolute value inequalities describe distance.</p>
        <p><strong>|x| &lt; a</strong> means x is between -a and a.</p>
        <p><strong>|x| &gt; a</strong> means x is outside -a and a.</p>

        <h2>Examples</h2>
        <p><strong>|x| &lt; 5</strong> becomes <strong>-5 &lt; x &lt; 5</strong>.</p>
        <p><strong>|x| &gt; 5</strong> becomes <strong>x &lt; -5 or x &gt; 5</strong>.</p>
    `,
            questions: [
                { q: "|x| < 4", options: ["-4 < x < 4", "x < -4 or x > 4", "x > 4"], answer: "-4 < x < 4", explanation: "Less than means between: -4 < x < 4." },
                { q: "|x| > 6", options: ["-6 < x < 6", "x < -6 or x > 6", "x < 6"], answer: "x < -6 or x > 6", explanation: "Greater than means outside: x < -6 or x > 6." },
                { q: "|x - 2| < 5", options: ["-3 < x < 7", "x < -3 or x > 7", "2 < x < 5"], answer: "-3 < x < 7", explanation: "Write -5 < x - 2 < 5, then add 2." },
                { q: "|x + 1| < 3", options: ["-4 < x < 2", "x < -4 or x > 2", "-3 < x < 3"], answer: "-4 < x < 2", explanation: "Write -3 < x + 1 < 3, then subtract 1." },
                { q: "|x - 4| > 2", options: ["x < 2 or x > 6", "2 < x < 6", "x > 2"], answer: "x < 2 or x > 6", explanation: "Greater than means split into x - 4 < -2 or x - 4 > 2." },

                { q: "|x + 5| > 4", options: ["x < -9 or x > -1", "-9 < x < -1", "x > -9"], answer: "x < -9 or x > -1", explanation: "Split: x + 5 < -4 or x + 5 > 4." },
                { q: "|x - 3| ≤ 6", options: ["-3 ≤ x ≤ 9", "x ≤ -3 or x ≥ 9", "3 ≤ x ≤ 6"], answer: "-3 ≤ x ≤ 9", explanation: "Write -6 ≤ x - 3 ≤ 6, then add 3." },
                { q: "|x + 2| ≥ 5", options: ["x ≤ -7 or x ≥ 3", "-7 ≤ x ≤ 3", "x ≥ 3 only"], answer: "x ≤ -7 or x ≥ 3", explanation: "Greater than or equal means outside." },
                { q: "|x - 1| < 8", options: ["-7 < x < 9", "x < -7 or x > 9", "1 < x < 8"], answer: "-7 < x < 9", explanation: "Write -8 < x - 1 < 8, then add 1." },
                { q: "|x + 4| > 7", options: ["x < -11 or x > 3", "-11 < x < 3", "x > 7"], answer: "x < -11 or x > 3", explanation: "Split into two inequalities and subtract 4." },

                { q: "2|x| < 10", options: ["-5 < x < 5", "x < -5 or x > 5", "x < 10"], answer: "-5 < x < 5", explanation: "Divide by 2 first: |x| < 5." },
                { q: "3|x| > 12", options: ["x < -4 or x > 4", "-4 < x < 4", "x > 12"], answer: "x < -4 or x > 4", explanation: "Divide by 3 first: |x| > 4." },
                { q: "|x - 2| + 1 < 6", options: ["-3 < x < 7", "x < -3 or x > 7", "x < 5"], answer: "-3 < x < 7", explanation: "Subtract 1: |x - 2| < 5, then solve." },
                { q: "|x + 3| - 2 > 4", options: ["x < -9 or x > 3", "-9 < x < 3", "x > 4"], answer: "x < -9 or x > 3", explanation: "Add 2: |x + 3| > 6, then split." },
                { q: "2|x - 1| ≤ 8", options: ["-3 ≤ x ≤ 5", "x ≤ -3 or x ≥ 5", "x ≤ 4"], answer: "-3 ≤ x ≤ 5", explanation: "Divide by 2: |x - 1| ≤ 4, then solve between." },

                { q: "|x| ≤ 0", options: ["x = 0", "No solution", "All real numbers"], answer: "x = 0", explanation: "Only 0 has absolute value 0." },
                { q: "|x| < 0", options: ["No solution", "x = 0", "All real numbers"], answer: "No solution", explanation: "Absolute value cannot be less than 0." },
                { q: "|x| ≥ 0", options: ["All real numbers", "No solution", "x = 0 only"], answer: "All real numbers", explanation: "Every absolute value is zero or positive." },
                { q: "|x - 5| < 0", options: ["No solution", "x = 5", "All real numbers"], answer: "No solution", explanation: "Absolute value cannot be negative." },
                { q: "|x + 2| ≥ 0", options: ["All real numbers", "x = -2 only", "No solution"], answer: "All real numbers", explanation: "Absolute value is always greater than or equal to 0." }
            ]
        },

        "coordinate-plane": {
            title: "Coordinate Plane",
            subtitle: "Learn how points are located using x and y coordinates.",
            body: `
        <p>The coordinate plane uses two number lines.</p>

        <p><strong>x-coordinate</strong> tells you left and right.</p>
        <p><strong>y-coordinate</strong> tells you up and down.</p>

        <h2>Example</h2>

        <p>(3, 4)</p>

        <p>Move 3 units right.</p>
        <p>Move 4 units up.</p>

        <h2>Quadrants</h2>

        <p>Quadrant I: (+,+)</p>
        <p>Quadrant II: (-,+)</p>
        <p>Quadrant III: (-,-)</p>
        <p>Quadrant IV: (+,-)</p>
    `,
            questions: [
                { q: "Point (3,4) is in which quadrant?", options: ["I", "II", "III"], answer: "I", explanation: "Both coordinates are positive." },
                { q: "Point (-2,5) is in which quadrant?", options: ["I", "II", "IV"], answer: "II", explanation: "Negative x, positive y." },
                { q: "Point (-3,-7) is in which quadrant?", options: ["II", "III", "IV"], answer: "III", explanation: "Both coordinates are negative." },
                { q: "Point (4,-2) is in which quadrant?", options: ["I", "III", "IV"], answer: "IV", explanation: "Positive x, negative y." },
                { q: "What is the x-coordinate of (8,2)?", options: ["8", "2", "10"], answer: "8", explanation: "The x-coordinate is always first." },

                { q: "What is the y-coordinate of (8,2)?", options: ["8", "2", "10"], answer: "2", explanation: "The y-coordinate is always second." },
                { q: "Point (0,5) lies on which axis?", options: ["x-axis", "y-axis", "neither"], answer: "y-axis", explanation: "x = 0 means the point is on the y-axis." },
                { q: "Point (4,0) lies on which axis?", options: ["x-axis", "y-axis", "neither"], answer: "x-axis", explanation: "y = 0 means the point is on the x-axis." },
                { q: "Point (0,0) is called?", options: ["origin", "center", "vertex"], answer: "origin", explanation: "The point (0,0) is the origin." },
                { q: "Point (-7,0) lies on?", options: ["x-axis", "y-axis", "neither"], answer: "x-axis", explanation: "Any point with y = 0 is on the x-axis." },

                { q: "Which quadrant contains (5,8)?", options: ["I", "II", "III"], answer: "I", explanation: "Positive x and positive y." },
                { q: "Which quadrant contains (-5,8)?", options: ["I", "II", "IV"], answer: "II", explanation: "Negative x and positive y." },
                { q: "Which quadrant contains (-5,-8)?", options: ["II", "III", "IV"], answer: "III", explanation: "Both negative." },
                { q: "Which quadrant contains (5,-8)?", options: ["I", "III", "IV"], answer: "IV", explanation: "Positive x and negative y." },
                { q: "Which point is in Quadrant II?", options: ["(-3,5)", "(3,5)", "(3,-5)"], answer: "(-3,5)", explanation: "Negative x and positive y." },

                { q: "Which point is in Quadrant III?", options: ["(-2,-4)", "(2,-4)", "(-2,4)"], answer: "(-2,-4)", explanation: "Both coordinates are negative." },
                { q: "Which point is in Quadrant IV?", options: ["(6,-1)", "(-6,-1)", "(-6,1)"], answer: "(6,-1)", explanation: "Positive x, negative y." },
                { q: "What direction increases x?", options: ["right", "left", "up"], answer: "right", explanation: "Positive x moves right." },
                { q: "What direction increases y?", options: ["down", "left", "up"], answer: "up", explanation: "Positive y moves upward." },
                { q: "The coordinate pair (x,y) represents?", options: ["location", "equation", "slope"], answer: "location", explanation: "Coordinates identify a location on the plane." }
            ]
        },



        "graphing-lines": {
            title: "Graphing Lines",
            subtitle: "Learn how straight lines are drawn on a coordinate plane.",
            body: `
        <p>A line is a straight path that extends forever.</p>

        <p>To graph a line, you need points.</p>

        <h2>Example</h2>

        <p>y = x</p>

        <p>When x = 0, y = 0</p>
        <p>When x = 1, y = 1</p>
        <p>When x = 2, y = 2</p>

        <p>Plot the points and connect them with a straight line.</p>
    `,
            questions: [
                { q: "Which graph is a line?", options: ["Straight", "Circle", "Parabola"], answer: "Straight", explanation: "Lines are straight." },
                { q: "How many points are needed to draw a line?", options: ["1", "2", "10"], answer: "2", explanation: "Two points determine a line." },
                { q: "Does a line curve?", options: ["Yes", "No", "Sometimes"], answer: "No", explanation: "A line is straight." },
                { q: "Point (0,0) is called?", options: ["Origin", "Vertex", "Slope"], answer: "Origin", explanation: "The origin is (0,0)." },
                { q: "y=x passes through?", options: ["(1,1)", "(1,2)", "(2,1)"], answer: "(1,1)", explanation: "x and y are equal." },

                { q: "y=x passes through?", options: ["(2,2)", "(2,3)", "(3,2)"], answer: "(2,2)", explanation: "x and y are equal." },
                { q: "y=x passes through?", options: ["(4,4)", "(4,1)", "(1,4)"], answer: "(4,4)", explanation: "x and y are equal." },
                { q: "A graph is made of?", options: ["Points", "Words", "Paragraphs"], answer: "Points", explanation: "Graphs are built from points." },
                { q: "Lines continue forever?", options: ["Yes", "No", "Sometimes"], answer: "Yes", explanation: "Lines extend infinitely." },
                { q: "Can a line go upward?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Many lines rise left to right." },

                { q: "Can a line go downward?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Many lines fall left to right." },
                { q: "Can a line be horizontal?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Horizontal lines exist." },
                { q: "Can a line be vertical?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Vertical lines exist." },
                { q: "Which point lies on y=x?", options: ["(5,5)", "(5,4)", "(4,5)"], answer: "(5,5)", explanation: "x and y must match." },
                { q: "Which point lies on y=x?", options: ["(7,7)", "(7,6)", "(6,7)"], answer: "(7,7)", explanation: "x and y must match." },

                { q: "A line is?", options: ["Straight", "Curved", "Circular"], answer: "Straight", explanation: "A line is straight." },
                { q: "Two points define?", options: ["One line", "Two lines", "Infinite circles"], answer: "One line", explanation: "Exactly one line." },
                { q: "Graphing helps visualize?", options: ["Relationships", "Stories", "Poems"], answer: "Relationships", explanation: "Graphs show relationships." },
                { q: "Lines use coordinates?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Coordinates create points." },
                { q: "The coordinate plane contains?", options: ["x-axis and y-axis", "Only x-axis", "Only y-axis"], answer: "x-axis and y-axis", explanation: "Both axes form the plane." }
            ]
        },

        "slope": {
            title: "Slope",
            subtitle: "Understand how steep a line is.",
            body: `
        <p>Slope measures how steep a line is.</p>
        <p>Slope compares vertical change to horizontal change.</p>

        <h2>Formula</h2>
        <p><strong>slope = rise / run</strong></p>

        <h2>Example</h2>
        <p>If a line rises 6 units and runs 3 units, then:</p>
        <p><strong>slope = 6 / 3 = 2</strong></p>

        <p>Positive slope rises from left to right.</p>
        <p>Negative slope falls from left to right.</p>
    `,
            questions: [
                { q: "Slope means?", options: ["Steepness", "Height only", "Width only"], answer: "Steepness", explanation: "Slope tells how steep a line is." },
                { q: "Slope formula is?", options: ["rise/run", "run/rise", "x/y"], answer: "rise/run", explanation: "Slope compares vertical change to horizontal change." },
                { q: "If rise = 6 and run = 3, slope is?", options: ["2", "3", "9"], answer: "2", explanation: "6 divided by 3 equals 2." },
                { q: "If rise = 10 and run = 5, slope is?", options: ["2", "5", "15"], answer: "2", explanation: "10 divided by 5 equals 2." },
                { q: "A positive slope goes?", options: ["Up left to right", "Down left to right", "Flat"], answer: "Up left to right", explanation: "Positive slope rises from left to right." },

                { q: "A negative slope goes?", options: ["Down left to right", "Up left to right", "Flat"], answer: "Down left to right", explanation: "Negative slope falls from left to right." },
                { q: "A horizontal line has slope?", options: ["0", "1", "undefined"], answer: "0", explanation: "Horizontal lines have no vertical change." },
                { q: "A vertical line has slope?", options: ["undefined", "0", "1"], answer: "undefined", explanation: "Vertical lines have zero run, so slope is undefined." },
                { q: "If rise = 4 and run = 2, slope is?", options: ["2", "6", "8"], answer: "2", explanation: "4 divided by 2 equals 2." },
                { q: "If rise = -6 and run = 3, slope is?", options: ["-2", "2", "9"], answer: "-2", explanation: "-6 divided by 3 equals -2." },

                { q: "If slope is 3, the line is?", options: ["Positive", "Negative", "Undefined"], answer: "Positive", explanation: "A positive number means positive slope." },
                { q: "If slope is -4, the line is?", options: ["Negative", "Positive", "Zero"], answer: "Negative", explanation: "A negative number means negative slope." },
                { q: "If slope is 0, the line is?", options: ["Horizontal", "Vertical", "Diagonal"], answer: "Horizontal", explanation: "Zero slope is horizontal." },
                { q: "Undefined slope is?", options: ["Vertical", "Horizontal", "Curved"], answer: "Vertical", explanation: "Vertical lines have undefined slope." },
                { q: "Slope of rise 9, run 3 is?", options: ["3", "6", "12"], answer: "3", explanation: "9 divided by 3 equals 3." },

                { q: "Slope of rise 12, run 4 is?", options: ["3", "4", "8"], answer: "3", explanation: "12 divided by 4 equals 3." },
                { q: "Slope of rise -8, run 4 is?", options: ["-2", "2", "4"], answer: "-2", explanation: "-8 divided by 4 equals -2." },
                { q: "Slope of rise 5, run 1 is?", options: ["5", "1", "6"], answer: "5", explanation: "5 divided by 1 equals 5." },
                { q: "Slope of rise 0, run 7 is?", options: ["0", "7", "undefined"], answer: "0", explanation: "0 divided by 7 equals 0." },
                { q: "Slope describes a line's?", options: ["Steepness and direction", "Color", "Length only"], answer: "Steepness and direction", explanation: "Slope tells steepness and whether the line rises or falls." }
            ]
        },

        "slope-intercept-form": {
            title: "Slope Intercept Form",
            subtitle: "The most common way to write a line.",
            body: `
        <p>Slope-intercept form is:</p>

        <p><strong>y = mx + b</strong></p>

        <p><strong>m</strong> = slope</p>
        <p><strong>b</strong> = y-intercept</p>

        <h2>Example</h2>

        <p><strong>y = 2x + 3</strong></p>

        <p>Slope = 2</p>
        <p>Y-intercept = 3</p>

        <p>The line crosses the y-axis at (0,3).</p>
    `,
            questions: [
                { q: "Slope-intercept form is?", options: ["y=mx+b", "ax+by=c", "x=y+b"], answer: "y=mx+b", explanation: "This is the standard slope-intercept form." },
                { q: "In y=mx+b, m represents?", options: ["Slope", "Intercept", "x-value"], answer: "Slope", explanation: "m is slope." },
                { q: "In y=mx+b, b represents?", options: ["Y-intercept", "Slope", "x-value"], answer: "Y-intercept", explanation: "b is the y-intercept." },
                { q: "In y=3x+2, slope is?", options: ["3", "2", "5"], answer: "3", explanation: "m=3." },
                { q: "In y=3x+2, y-intercept is?", options: ["2", "3", "5"], answer: "2", explanation: "b=2." },

                { q: "In y=5x-4, slope is?", options: ["5", "-4", "1"], answer: "5", explanation: "m=5." },
                { q: "In y=5x-4, y-intercept is?", options: ["-4", "5", "4"], answer: "-4", explanation: "b=-4." },
                { q: "In y=-2x+7, slope is?", options: ["-2", "7", "5"], answer: "-2", explanation: "m=-2." },
                { q: "In y=-2x+7, y-intercept is?", options: ["7", "-2", "9"], answer: "7", explanation: "b=7." },
                { q: "A positive slope rises?", options: ["Yes", "No", "Sometimes"], answer: "Yes", explanation: "Positive slope rises left to right." },

                { q: "A negative slope falls?", options: ["Yes", "No", "Sometimes"], answer: "Yes", explanation: "Negative slope falls left to right." },
                { q: "The y-intercept occurs when x equals?", options: ["0", "1", "b"], answer: "0", explanation: "The y-intercept is where the line crosses the y-axis." },
                { q: "In y=x+5, slope is?", options: ["1", "5", "6"], answer: "1", explanation: "The coefficient of x is 1." },
                { q: "In y=x+5, y-intercept is?", options: ["5", "1", "0"], answer: "5", explanation: "b=5." },
                { q: "In y=-4x+1, slope is?", options: ["-4", "1", "-1"], answer: "-4", explanation: "m=-4." },

                { q: "In y=-4x+1, y-intercept is?", options: ["1", "-4", "5"], answer: "1", explanation: "b=1." },
                { q: "The graph of y=2x+0 crosses y-axis at?", options: ["0", "2", "-2"], answer: "0", explanation: "b=0." },
                { q: "The graph of y=7x+9 crosses y-axis at?", options: ["9", "7", "16"], answer: "9", explanation: "b=9." },
                { q: "The graph of y=-3x-8 crosses y-axis at?", options: ["-8", "-3", "5"], answer: "-8", explanation: "b=-8." },
                { q: "Slope-intercept form helps us?", options: ["Graph lines quickly", "Factor polynomials", "Solve radicals"], answer: "Graph lines quickly", explanation: "Slope and intercept make graphing easy." }
            ]
        },

        "point-slope-form": {
            title: "Point Slope Form",
            subtitle: "Write a line using a point and a slope.",
            body: `
        <p>Point-slope form is:</p>

        <p><strong>y - y₁ = m(x - x₁)</strong></p>

        <p>m = slope</p>
        <p>(x₁,y₁) = known point</p>

        <h2>Example</h2>

        <p>Slope = 2</p>
        <p>Point = (3,4)</p>

        <p><strong>y - 4 = 2(x - 3)</strong></p>

        <p>This equation represents the line.</p>
    `,
            questions: [
                { q: "Point-slope form is?", options: ["y-y₁=m(x-x₁)", "y=mx+b", "ax+by=c"], answer: "y-y₁=m(x-x₁)", explanation: "This is the point-slope formula." },
                { q: "m represents?", options: ["Slope", "Intercept", "Point"], answer: "Slope", explanation: "m is the slope." },
                { q: "(x₁,y₁) represents?", options: ["Known point", "Slope", "Intercept"], answer: "Known point", explanation: "It is the point on the line." },
                { q: "Slope=3, point=(2,5)", options: ["y-5=3(x-2)", "y=3x+5", "3x+2=5"], answer: "y-5=3(x-2)", explanation: "Substitute into the formula." },
                { q: "Slope=4, point=(1,7)", options: ["y-7=4(x-1)", "y-1=4(x-7)", "y=4x+7"], answer: "y-7=4(x-1)", explanation: "Use y₁=7 and x₁=1." },

                { q: "Slope=2, point=(3,4)", options: ["y-4=2(x-3)", "y-3=2(x-4)", "y=2x+4"], answer: "y-4=2(x-3)", explanation: "Direct substitution." },
                { q: "Slope=-1, point=(5,2)", options: ["y-2=-1(x-5)", "y-5=-1(x-2)", "y=x-5"], answer: "y-2=-1(x-5)", explanation: "Use the given point." },
                { q: "Slope=6, point=(0,8)", options: ["y-8=6(x-0)", "y=6x+8", "6x=8"], answer: "y-8=6(x-0)", explanation: "Substitute m=6." },
                { q: "Slope=-3, point=(4,1)", options: ["y-1=-3(x-4)", "y-4=-3(x-1)", "y=-3x+1"], answer: "y-1=-3(x-4)", explanation: "Correct substitution." },
                { q: "Point-slope form requires?", options: ["Point and slope", "Two intercepts", "A graph"], answer: "Point and slope", explanation: "That's why it's called point-slope form." },

                { q: "Slope=5, point=(7,2)", options: ["y-2=5(x-7)", "y-7=5(x-2)", "y=5x+2"], answer: "y-2=5(x-7)", explanation: "Plug in the values." },
                { q: "Slope=-2, point=(3,6)", options: ["y-6=-2(x-3)", "y-3=-2(x-6)", "y=-2x+6"], answer: "y-6=-2(x-3)", explanation: "Correct substitution." },
                { q: "Slope=1, point=(9,4)", options: ["y-4=(x-9)", "y-9=(x-4)", "y=x+4"], answer: "y-4=(x-9)", explanation: "Slope 1 means coefficient 1." },
                { q: "Slope=7, point=(2,1)", options: ["y-1=7(x-2)", "y-2=7(x-1)", "y=7x+1"], answer: "y-1=7(x-2)", explanation: "Correct placement of coordinates." },
                { q: "Slope=-4, point=(8,3)", options: ["y-3=-4(x-8)", "y-8=-4(x-3)", "y=-4x+3"], answer: "y-3=-4(x-8)", explanation: "Use x₁=8 and y₁=3." },

                { q: "Which form uses a point directly?", options: ["Point-slope", "Standard", "Intercept"], answer: "Point-slope", explanation: "It is built around a known point." },
                { q: "Which variable pair comes from the point?", options: ["x₁,y₁", "m,b", "x,y"], answer: "x₁,y₁", explanation: "These come from the known point." },
                { q: "Point-slope form is useful for?", options: ["Writing equations quickly", "Factoring", "Radicals"], answer: "Writing equations quickly", explanation: "One point and slope are enough." },
                { q: "Slope can be negative?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Negative slopes are common." },
                { q: "Point-slope form represents?", options: ["A line", "A parabola", "A circle"], answer: "A line", explanation: "It is a linear equation form." }
            ]
        },

        "standard-form": {
            title: "Standard Form",
            subtitle: "Write linear equations in Ax + By = C form.",
            body: `
        <p>Standard form is:</p>

        <p><strong>Ax + By = C</strong></p>

        <p>A, B, and C are usually integers.</p>

        <h2>Example</h2>

        <p><strong>2x + 3y = 12</strong></p>

        <p>This equation is already in standard form.</p>
    `,
            questions: [
                { q: "Standard form is?", options: ["Ax+By=C", "y=mx+b", "x=y+b"], answer: "Ax+By=C", explanation: "This is the standard form of a line." },
                { q: "Which is standard form?", options: ["2x+3y=12", "y=2x+3", "x=4"], answer: "2x+3y=12", explanation: "Matches Ax+By=C." },
                { q: "A in standard form is usually?", options: ["Integer", "Fraction only", "Variable"], answer: "Integer", explanation: "Standard form usually uses integers." },
                { q: "B in standard form is?", options: ["Coefficient", "Variable", "Point"], answer: "Coefficient", explanation: "B is the coefficient of y." },
                { q: "C represents?", options: ["Constant", "Slope", "Point"], answer: "Constant", explanation: "C is the constant value." },

                { q: "3x+4y=20 is?", options: ["Standard Form", "Point-Slope", "Slope-Intercept"], answer: "Standard Form", explanation: "It matches Ax+By=C." },
                { q: "5x-y=10 is?", options: ["Standard Form", "Quadratic", "Inequality"], answer: "Standard Form", explanation: "It follows Ax+By=C." },
                { q: "Can B be negative?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Coefficients may be negative." },
                { q: "Can A be negative?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Coefficients may be negative." },
                { q: "A line can be written in?", options: ["Many forms", "One form only", "No forms"], answer: "Many forms", explanation: "Lines have several equation forms." },

                { q: "7x+2y=14 is?", options: ["Standard Form", "Point-Slope", "Factored"], answer: "Standard Form", explanation: "Matches Ax+By=C." },
                { q: "x+y=5 is?", options: ["Standard Form", "Quadratic", "Polynomial"], answer: "Standard Form", explanation: "A=1, B=1, C=5." },
                { q: "4x-3y=9 is?", options: ["Standard Form", "Point-Slope", "Exponential"], answer: "Standard Form", explanation: "Fits Ax+By=C." },
                { q: "Standard form represents?", options: ["A line", "A parabola", "A circle"], answer: "A line", explanation: "Linear equations graph as lines." },
                { q: "Which variable usually appears?", options: ["x and y", "x only", "y only"], answer: "x and y", explanation: "Both variables appear." },

                { q: "2x+y=8 is?", options: ["Standard Form", "Quadratic", "Radical"], answer: "Standard Form", explanation: "Matches Ax+By=C." },
                { q: "9x+6y=18 is?", options: ["Standard Form", "Point-Slope", "Function Notation"], answer: "Standard Form", explanation: "Correct format." },
                { q: "Which form is easiest for graphing intercepts?", options: ["Standard Form", "Quadratic Form", "Factored Form"], answer: "Standard Form", explanation: "Standard form works well with intercepts." },
                { q: "Can every line be converted to standard form?", options: ["Yes", "No", "Sometimes"], answer: "Yes", explanation: "Equivalent forms can be rewritten." },
                { q: "Standard form describes?", options: ["Linear equations", "Only inequalities", "Only quadratics"], answer: "Linear equations", explanation: "Standard form is a linear equation format." }
            ]
        },

        "linear-functions": {
            title: "Linear Functions",
            subtitle: "Functions whose graphs are straight lines.",
            body: `
        <p>A linear function has a constant rate of change.</p>

        <p>Its graph is always a straight line.</p>

        <h2>Example</h2>

        <p><strong>f(x)=2x+3</strong></p>

        <p>For every increase of 1 in x, y increases by 2.</p>
    `,
            questions: [
                { q: "A linear function graphs as a?", options: ["Line", "Circle", "Parabola"], answer: "Line", explanation: "Linear functions graph as straight lines." },
                { q: "Linear functions have?", options: ["Constant rate of change", "Changing rate", "No rate"], answer: "Constant rate of change", explanation: "The slope stays constant." },
                { q: "f(x)=2x+3 is?", options: ["Linear", "Quadratic", "Exponential"], answer: "Linear", explanation: "Highest exponent is 1." },
                { q: "f(x)=5x-1 is?", options: ["Linear", "Quadratic", "Radical"], answer: "Linear", explanation: "Highest exponent is 1." },
                { q: "Slope of f(x)=4x+2?", options: ["4", "2", "6"], answer: "4", explanation: "Slope is coefficient of x." },

                { q: "Slope of f(x)=7x-3?", options: ["7", "-3", "4"], answer: "7", explanation: "Slope is 7." },
                { q: "Y-intercept of f(x)=7x-3?", options: ["-3", "7", "4"], answer: "-3", explanation: "Constant term is the y-intercept." },
                { q: "Linear functions contain x to power?", options: ["1", "2", "3"], answer: "1", explanation: "Linear means first degree." },
                { q: "f(x)=x+5 is?", options: ["Linear", "Quadratic", "Exponential"], answer: "Linear", explanation: "Degree 1." },
                { q: "f(x)=10x is?", options: ["Linear", "Quadratic", "Absolute Value"], answer: "Linear", explanation: "Straight-line function." },

                { q: "Linear graphs are?", options: ["Straight", "Curved", "Circular"], answer: "Straight", explanation: "Linear graphs are lines." },
                { q: "Rate of change equals?", options: ["Slope", "Intercept", "Point"], answer: "Slope", explanation: "Slope measures rate of change." },
                { q: "f(x)=3x+1 has slope?", options: ["3", "1", "4"], answer: "3", explanation: "Coefficient of x." },
                { q: "f(x)=3x+1 has intercept?", options: ["1", "3", "4"], answer: "1", explanation: "Constant term." },
                { q: "Linear functions are?", options: ["First degree", "Second degree", "Third degree"], answer: "First degree", explanation: "Highest exponent is 1." },

                { q: "f(x)=-2x+7 is?", options: ["Linear", "Quadratic", "Exponential"], answer: "Linear", explanation: "Degree 1." },
                { q: "A constant slope means?", options: ["Linear", "Quadratic", "Random"], answer: "Linear", explanation: "Constant slope defines linear functions." },
                { q: "Linear functions model?", options: ["Constant change", "Accelerating change", "Random change"], answer: "Constant change", explanation: "They represent constant rates." },
                { q: "The graph of a linear function is?", options: ["A line", "A parabola", "A circle"], answer: "A line", explanation: "Always a straight line." },
                { q: "Linear functions are foundational for?", options: ["Algebra", "Geometry only", "Trigonometry only"], answer: "Algebra", explanation: "They are one of the most important algebra topics." }
            ]
        },

        "systems-of-equations": {
            title: "Systems of Equations",
            subtitle: "Solve two equations at the same time.",
            body: `
                <p>A system of equations contains two or more equations.</p>
                <p>The solution is the point that satisfies both equations.</p>

                <h2>Example</h2>

                <p>x + y = 10</p>
                <p>x - y = 2</p>

                <p>Add the equations:</p>

                <p>2x = 12</p>

                <p>x = 6</p>

                <p>Then y = 4</p>
            `,
            questions: [
                { q: "A system contains?", options: ["Two equations", "One equation", "No equations"], answer: "Two equations", explanation: "A system contains multiple equations." },
                { q: "The solution satisfies?", options: ["Both equations", "One equation only", "Neither"], answer: "Both equations", explanation: "The solution must work in every equation." },
                { q: "Systems are often graphed as?", options: ["Lines", "Circles only", "Triangles"], answer: "Lines", explanation: "Linear systems are usually graphed as lines." },
                { q: "Intersection means?", options: ["Solution", "Slope", "Intercept"], answer: "Solution", explanation: "The intersection point solves the system." },
                { q: "Two intersecting lines have?", options: ["One solution", "No solution", "Infinite solutions"], answer: "One solution", explanation: "They meet at one point." },

                { q: "Parallel lines have?", options: ["No solution", "One solution", "Infinite solutions"], answer: "No solution", explanation: "Parallel lines never meet." },
                { q: "Same line has?", options: ["Infinite solutions", "One solution", "No solution"], answer: "Infinite solutions", explanation: "Every point works." },
                { q: "x+y=10 and x-y=2 gives x=?", options: ["6", "4", "8"], answer: "6", explanation: "Add equations: 2x=12." },
                { q: "x+y=10 and x-y=2 gives y=?", options: ["4", "6", "8"], answer: "4", explanation: "Substitute x=6." },
                { q: "Systems can be solved by?", options: ["Graphing", "Substitution", "Both"], answer: "Both", explanation: "Multiple methods exist." },

                { q: "Intersection point is?", options: ["Solution", "Slope", "Axis"], answer: "Solution", explanation: "Intersection solves both equations." },
                { q: "Two lines crossing once means?", options: ["One solution", "No solution", "Infinite solutions"], answer: "One solution", explanation: "One intersection." },
                { q: "Parallel lines mean?", options: ["No solution", "One solution", "Infinite solutions"], answer: "No solution", explanation: "No intersection." },
                { q: "Identical lines mean?", options: ["Infinite solutions", "No solution", "One solution"], answer: "Infinite solutions", explanation: "Every point overlaps." },
                { q: "System solutions are usually written as?", options: ["Ordered pairs", "Fractions only", "Integers only"], answer: "Ordered pairs", explanation: "Solutions are coordinates." },

                { q: "Graphing finds the?", options: ["Intersection", "Slope only", "Intercept only"], answer: "Intersection", explanation: "The intersection is the solution." },
                { q: "A system can contain?", options: ["Multiple variables", "No variables", "Only constants"], answer: "Multiple variables", explanation: "Variables are typically involved." },
                { q: "Systems appear in?", options: ["Algebra", "Science", "Both"], answer: "Both", explanation: "Systems are widely used." },
                { q: "The goal is to find?", options: ["Values that satisfy all equations", "Only x", "Only y"], answer: "Values that satisfy all equations", explanation: "The solution must satisfy every equation." },
                { q: "Systems of equations are a major topic in?", options: ["Algebra 1", "Spelling", "History"], answer: "Algebra 1", explanation: "They are a core Algebra 1 concept." }
            ]
        },


        "systems-by-substitution": {
            title: "Systems by Substitution",
            subtitle: "Solve systems by replacing one variable with an equivalent expression.",
            body: `
        <p>Substitution means replacing one variable with what it equals.</p>

        <h2>Example</h2>

        <p>y = x + 2</p>
        <p>x + y = 10</p>

        <p>Substitute x + 2 for y:</p>
        <p>x + (x + 2) = 10</p>
        <p>2x + 2 = 10</p>
        <p>2x = 8</p>
        <p>x = 4</p>
        <p>Then y = 6</p>
    `,
            questions: [
                { q: "Substitution means?", options: ["Replace one variable", "Graph only", "Guess"], answer: "Replace one variable", explanation: "Substitution replaces a variable with an equivalent expression." },
                { q: "If y=x+2 and x+y=10, x=?", options: ["4", "5", "6"], answer: "4", explanation: "x+(x+2)=10, so 2x+2=10, x=4." },
                { q: "If y=x+2 and x=4, y=?", options: ["6", "4", "2"], answer: "6", explanation: "y=4+2=6." },
                { q: "Substitution is useful when one equation says?", options: ["y=...", "0=0", "No solution"], answer: "y=...", explanation: "It is easy to substitute when a variable is isolated." },
                { q: "If x=3 and y=x+5, y=?", options: ["8", "5", "3"], answer: "8", explanation: "y=3+5=8." },

                { q: "If y=2x and x+y=9, x=?", options: ["3", "6", "9"], answer: "3", explanation: "x+2x=9, so 3x=9, x=3." },
                { q: "If y=2x and x=3, y=?", options: ["6", "3", "9"], answer: "6", explanation: "y=2(3)=6." },
                { q: "If y=x-1 and x+y=7, x=?", options: ["4", "3", "5"], answer: "4", explanation: "x+(x-1)=7, so 2x-1=7, x=4." },
                { q: "If y=x-1 and x=4, y=?", options: ["3", "4", "5"], answer: "3", explanation: "y=4-1=3." },
                { q: "Substitution gives a solution as?", options: ["Ordered pair", "Paragraph", "Triangle"], answer: "Ordered pair", explanation: "System solutions are written as (x,y)." },

                { q: "If x=y+1 and y=2, x=?", options: ["3", "2", "1"], answer: "3", explanation: "x=2+1=3." },
                { q: "If y=3x and x+y=12, x=?", options: ["3", "4", "6"], answer: "3", explanation: "x+3x=12, so 4x=12, x=3." },
                { q: "If y=3x and x=3, y=?", options: ["9", "6", "3"], answer: "9", explanation: "y=3(3)=9." },
                { q: "If y=x+4 and x+y=14, x=?", options: ["5", "6", "7"], answer: "5", explanation: "x+(x+4)=14, so 2x+4=14, x=5." },
                { q: "If x=5 and y=x+4, y=?", options: ["9", "5", "4"], answer: "9", explanation: "y=5+4=9." },

                { q: "If y=10-x and x=6, y=?", options: ["4", "6", "10"], answer: "4", explanation: "y=10-6=4." },
                { q: "If x=y and x+y=8, x=?", options: ["4", "8", "2"], answer: "4", explanation: "x+x=8, so 2x=8, x=4." },
                { q: "If x=y and x=4, y=?", options: ["4", "8", "0"], answer: "4", explanation: "If x=y, then y=4." },
                { q: "Substitution reduces two-variable equations into?", options: ["One-variable equation", "No equation", "Graph only"], answer: "One-variable equation", explanation: "After substitution, you solve for one variable." },
                { q: "After finding one variable, you should?", options: ["Substitute back", "Stop immediately", "Erase work"], answer: "Substitute back", explanation: "Substitute back to find the other variable." }
            ]
        },

        "systems-by-elimination": {
            title: "Systems by Elimination",
            subtitle: "Solve systems by adding or subtracting equations.",
            body: `
        <p>Elimination means removing one variable by combining equations.</p>

        <h2>Example</h2>

        <p>x + y = 10</p>
        <p>x - y = 2</p>

        <p>Add the equations:</p>
        <p>2x = 12</p>
        <p>x = 6</p>

        <p>Then substitute back:</p>
        <p>6 + y = 10</p>
        <p>y = 4</p>
    `,
            questions: [
                { q: "Elimination means?", options: ["Remove a variable", "Graph only", "Guess"], answer: "Remove a variable", explanation: "Elimination removes one variable by combining equations." },
                { q: "x+y=10 and x-y=2 gives?", options: ["2x=12", "2y=12", "x=10"], answer: "2x=12", explanation: "Add the equations and y cancels." },
                { q: "If 2x=12, x=?", options: ["6", "12", "2"], answer: "6", explanation: "Divide by 2." },
                { q: "If x=6 and x+y=10, y=?", options: ["4", "6", "10"], answer: "4", explanation: "6+y=10, so y=4." },
                { q: "Elimination works best when variables have?", options: ["Opposite coefficients", "No coefficients", "Only decimals"], answer: "Opposite coefficients", explanation: "Opposite coefficients cancel easily." },

                { q: "x+y=8 and x-y=2 gives x=?", options: ["5", "3", "8"], answer: "5", explanation: "Add: 2x=10, so x=5." },
                { q: "If x=5 and x+y=8, y=?", options: ["3", "5", "8"], answer: "3", explanation: "5+y=8, so y=3." },
                { q: "2x+y=9 and 2x-y=3 gives?", options: ["4x=12", "2y=12", "x=9"], answer: "4x=12", explanation: "Add equations and y cancels." },
                { q: "If 4x=12, x=?", options: ["3", "4", "12"], answer: "3", explanation: "Divide by 4." },
                { q: "If x=3 and 2x+y=9, y=?", options: ["3", "6", "9"], answer: "3", explanation: "6+y=9, so y=3." },

                { q: "x+2y=11 and x-2y=3 gives?", options: ["2x=14", "4y=14", "x=11"], answer: "2x=14", explanation: "Add equations and y cancels." },
                { q: "If 2x=14, x=?", options: ["7", "14", "2"], answer: "7", explanation: "Divide by 2." },
                { q: "If x=7 and x+2y=11, y=?", options: ["2", "4", "7"], answer: "2", explanation: "7+2y=11, so 2y=4, y=2." },
                { q: "3x+y=13 and 3x-y=5 gives?", options: ["6x=18", "2y=18", "x=13"], answer: "6x=18", explanation: "Add equations and y cancels." },
                { q: "If 6x=18, x=?", options: ["3", "6", "18"], answer: "3", explanation: "Divide by 6." },

                { q: "After elimination, you usually get?", options: ["One-variable equation", "No equation", "A graph"], answer: "One-variable equation", explanation: "Then solve the remaining variable." },
                { q: "After finding x, you should?", options: ["Substitute back", "Stop", "Delete y"], answer: "Substitute back", explanation: "Use x to find y." },
                { q: "Elimination can use?", options: ["Addition or subtraction", "Only multiplication", "Only graphing"], answer: "Addition or subtraction", explanation: "You combine equations." },
                { q: "If variables cancel and numbers don't match, there is?", options: ["No solution", "One solution", "Infinite solutions"], answer: "No solution", explanation: "Contradictions mean no solution." },
                { q: "If both equations become identical, there are?", options: ["Infinite solutions", "No solution", "One solution"], answer: "Infinite solutions", explanation: "Same line means infinite solutions." }
            ]
        },



        "systems-of-inequalities": {
            title: "Systems of Inequalities",
            subtitle: "Find the region that satisfies multiple inequalities.",
            body: `
        <p>A system of inequalities contains two or more inequalities.</p>

        <p>The solution is the overlapping shaded region.</p>

        <h2>Example</h2>

        <p>y > x</p>
        <p>y < x + 4</p>

        <p>The solution is the region that satisfies both conditions.</p>
    `,
            questions: [
                { q: "A system of inequalities contains?", options: ["Multiple inequalities", "One equation", "Only numbers"], answer: "Multiple inequalities", explanation: "A system contains two or more inequalities." },
                { q: "The solution is the?", options: ["Overlap region", "Intercept", "Slope"], answer: "Overlap region", explanation: "The overlapping region satisfies all inequalities." },
                { q: "Dashed boundary means?", options: ["Not included", "Included", "Vertical"], answer: "Not included", explanation: "Dashed lines mean < or >." },
                { q: "Solid boundary means?", options: ["Included", "Not included", "Horizontal"], answer: "Included", explanation: "Solid lines mean ≤ or ≥." },
                { q: "y > x means shade?", options: ["Above line", "Below line", "On axis"], answer: "Above line", explanation: "Greater y-values are above the line." },

                { q: "y < x means shade?", options: ["Below line", "Above line", "On line"], answer: "Below line", explanation: "Smaller y-values are below the line." },
                { q: "Solution region satisfies?", options: ["All inequalities", "One inequality only", "None"], answer: "All inequalities", explanation: "The solution must satisfy every inequality." },
                { q: "A dashed line represents?", options: ["Strict inequality", "Equal sign", "Vertical line"], answer: "Strict inequality", explanation: "Dashed lines are used for < and >." },
                { q: "A solid line represents?", options: ["≤ or ≥", "< or >", "No solution"], answer: "≤ or ≥", explanation: "Boundary is included." },
                { q: "Systems of inequalities are usually graphed?", options: ["On coordinate plane", "On number line only", "In tables only"], answer: "On coordinate plane", explanation: "Graphing shows the solution region." },

                { q: "The overlap is also called?", options: ["Feasible region", "Vertex", "Slope"], answer: "Feasible region", explanation: "Feasible region satisfies all constraints." },
                { q: "If regions don't overlap?", options: ["No solution", "Infinite solutions", "One solution"], answer: "No solution", explanation: "No common region exists." },
                { q: "Can systems have many solutions?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Every point in the region is a solution." },
                { q: "Inequalities use symbols like?", options: [">, <, ≥, ≤", "+, -, ×", "= only"], answer: ">, <, ≥, ≤", explanation: "These symbols compare values." },
                { q: "Boundary lines come from?", options: ["Changing inequality to equation", "Random drawing", "Slope only"], answer: "Changing inequality to equation", explanation: "Graph the boundary equation first." },

                { q: "y ≥ 2x uses a?", options: ["Solid line", "Dashed line", "No line"], answer: "Solid line", explanation: "≥ includes the boundary." },
                { q: "y > 2x uses a?", options: ["Dashed line", "Solid line", "Circle"], answer: "Dashed line", explanation: "> excludes the boundary." },
                { q: "Graphing inequalities helps find?", options: ["Valid solutions", "Only intercepts", "Only slopes"], answer: "Valid solutions", explanation: "Graphing shows all solutions." },
                { q: "A point in the overlap region is?", options: ["A solution", "An error", "Impossible"], answer: "A solution", explanation: "It satisfies every inequality." },
                { q: "Systems of inequalities are used in?", options: ["Optimization", "Engineering", "Both"], answer: "Both", explanation: "They are widely used in real applications." }
            ]
        },


        "exponents": {
            title: "Exponents",
            subtitle: "Learn repeated multiplication.",
            body: `
        <p>An exponent tells how many times a number is multiplied by itself.</p>

        <h2>Example</h2>

        <p><strong>2³ = 2 × 2 × 2 = 8</strong></p>

        <p>The base is 2.</p>
        <p>The exponent is 3.</p>
    `,
            questions: [
                { q: "2³ equals?", options: ["8", "6", "9"], answer: "8", explanation: "2×2×2=8." },
                { q: "3² equals?", options: ["9", "6", "5"], answer: "9", explanation: "3×3=9." },
                { q: "5² equals?", options: ["25", "10", "20"], answer: "25", explanation: "5×5=25." },
                { q: "10² equals?", options: ["100", "20", "10"], answer: "100", explanation: "10×10=100." },
                { q: "4³ equals?", options: ["64", "12", "16"], answer: "64", explanation: "4×4×4=64." },

                { q: "The small raised number is called?", options: ["Exponent", "Base", "Factor"], answer: "Exponent", explanation: "The exponent tells how many times to multiply." },
                { q: "The large number is called?", options: ["Base", "Exponent", "Power"], answer: "Base", explanation: "The base is repeatedly multiplied." },
                { q: "7¹ equals?", options: ["7", "1", "49"], answer: "7", explanation: "Any number to the first power equals itself." },
                { q: "9¹ equals?", options: ["9", "1", "81"], answer: "9", explanation: "Exponent 1 leaves the number unchanged." },
                { q: "1⁵ equals?", options: ["1", "5", "0"], answer: "1", explanation: "1 multiplied by itself is always 1." },

                { q: "2⁴ equals?", options: ["16", "8", "12"], answer: "16", explanation: "2×2×2×2=16." },
                { q: "3³ equals?", options: ["27", "9", "18"], answer: "27", explanation: "3×3×3=27." },
                { q: "6² equals?", options: ["36", "12", "18"], answer: "36", explanation: "6×6=36." },
                { q: "8² equals?", options: ["64", "16", "32"], answer: "64", explanation: "8×8=64." },
                { q: "2⁵ equals?", options: ["32", "16", "64"], answer: "32", explanation: "2×2×2×2×2=32." },

                { q: "An exponent represents?", options: ["Repeated multiplication", "Addition", "Subtraction"], answer: "Repeated multiplication", explanation: "Exponents are shorthand multiplication." },
                { q: "4² equals?", options: ["16", "8", "4"], answer: "16", explanation: "4×4=16." },
                { q: "5³ equals?", options: ["125", "25", "75"], answer: "125", explanation: "5×5×5=125." },
                { q: "10³ equals?", options: ["1000", "100", "30"], answer: "1000", explanation: "10×10×10=1000." },
                { q: "Exponents are important for?", options: ["Algebra", "Science", "Both"], answer: "Both", explanation: "Exponents appear throughout mathematics and science." }
            ]
        },


        "scientific-notation": {
            title: "Scientific Notation",
            subtitle: "Write very large or very small numbers using powers of 10.",
            body: `
        <p>Scientific notation is a shorter way to write very large or very small numbers.</p>

        <p>It has this form:</p>

        <p><strong>a × 10ⁿ</strong></p>

        <p>The number a is at least 1 but less than 10.</p>
        <p>The exponent n tells how many places the decimal moves.</p>

        <h2>Example</h2>

        <p><strong>4500 = 4.5 × 10³</strong></p>

        <p>The decimal moved 3 places left.</p>
    `,
            questions: [
                { q: "4500 in scientific notation is?", options: ["4.5 × 10³", "45 × 10²", "0.45 × 10⁴"], answer: "4.5 × 10³", explanation: "Move the decimal 3 places left: 4.5 × 10³." },
                { q: "32000 in scientific notation is?", options: ["3.2 × 10⁴", "32 × 10³", "0.32 × 10⁵"], answer: "3.2 × 10⁴", explanation: "Move the decimal 4 places left." },
                { q: "700 in scientific notation is?", options: ["7 × 10²", "70 × 10¹", "0.7 × 10³"], answer: "7 × 10²", explanation: "700 = 7 × 100 = 7 × 10²." },
                { q: "9000 in scientific notation is?", options: ["9 × 10³", "90 × 10²", "0.9 × 10⁴"], answer: "9 × 10³", explanation: "9000 = 9 × 10³." },
                { q: "120000 in scientific notation is?", options: ["1.2 × 10⁵", "12 × 10⁴", "0.12 × 10⁶"], answer: "1.2 × 10⁵", explanation: "Move the decimal 5 places left." },

                { q: "4.5 × 10³ equals?", options: ["4500", "450", "45000"], answer: "4500", explanation: "Move decimal 3 places right." },
                { q: "3.2 × 10⁴ equals?", options: ["32000", "3200", "320000"], answer: "32000", explanation: "Move decimal 4 places right." },
                { q: "7 × 10² equals?", options: ["700", "70", "7000"], answer: "700", explanation: "7 × 100 = 700." },
                { q: "9 × 10³ equals?", options: ["9000", "900", "90000"], answer: "9000", explanation: "9 × 1000 = 9000." },
                { q: "1.2 × 10⁵ equals?", options: ["120000", "12000", "1200000"], answer: "120000", explanation: "Move decimal 5 places right." },

                { q: "0.004 in scientific notation is?", options: ["4 × 10⁻³", "4 × 10³", "0.4 × 10⁻²"], answer: "4 × 10⁻³", explanation: "Small numbers use negative exponents." },
                { q: "0.0008 in scientific notation is?", options: ["8 × 10⁻⁴", "8 × 10⁴", "0.8 × 10⁻³"], answer: "8 × 10⁻⁴", explanation: "Move decimal 4 places right to get 8." },
                { q: "0.06 in scientific notation is?", options: ["6 × 10⁻²", "6 × 10²", "0.6 × 10⁻¹"], answer: "6 × 10⁻²", explanation: "0.06 = 6 × 10⁻²." },
                { q: "0.00005 in scientific notation is?", options: ["5 × 10⁻⁵", "5 × 10⁵", "0.5 × 10⁻⁴"], answer: "5 × 10⁻⁵", explanation: "Move decimal 5 places right." },
                { q: "0.009 in scientific notation is?", options: ["9 × 10⁻³", "9 × 10³", "0.9 × 10⁻²"], answer: "9 × 10⁻³", explanation: "0.009 = 9 × 10⁻³." },

                { q: "6 × 10⁻² equals?", options: ["0.06", "0.6", "6"], answer: "0.06", explanation: "Negative exponent moves decimal left." },
                { q: "8 × 10⁻⁴ equals?", options: ["0.0008", "0.008", "8000"], answer: "0.0008", explanation: "Move decimal 4 places left." },
                { q: "5 × 10⁻⁵ equals?", options: ["0.00005", "0.0005", "50000"], answer: "0.00005", explanation: "Move decimal 5 places left." },
                { q: "Scientific notation is useful for?", options: ["Very large or small numbers", "Only fractions", "Only geometry"], answer: "Very large or small numbers", explanation: "It makes extreme numbers easier to write." },
                { q: "In a × 10ⁿ, a should be?", options: ["At least 1 and less than 10", "Greater than 10", "Always 0"], answer: "At least 1 and less than 10", explanation: "That is proper scientific notation form." }
            ]
        },


        "polynomials": {
            title: "Polynomials",
            subtitle: "Understand expressions made of terms.",
            body: `
        <p>A polynomial is an expression made of terms added or subtracted.</p>

        <p>Terms can include numbers, variables, and exponents.</p>

        <h2>Example</h2>

        <p><strong>3x² + 2x - 5</strong></p>

        <p>This polynomial has three terms.</p>

        <p>3x² is the leading term.</p>
        <p>-5 is the constant term.</p>
    `,
            questions: [
                { q: "3x² + 2x - 5 has how many terms?", options: ["3", "2", "5"], answer: "3", explanation: "The terms are 3x², 2x, and -5." },
                { q: "A polynomial is made of?", options: ["Terms", "Only fractions", "Only roots"], answer: "Terms", explanation: "Polynomials are sums or differences of terms." },
                { q: "The constant term has?", options: ["No variable", "Only x", "Only x²"], answer: "No variable", explanation: "A constant is just a number." },
                { q: "In 4x + 9, the constant is?", options: ["9", "4", "x"], answer: "9", explanation: "9 has no variable." },
                { q: "In 5x² + 3x + 1, the leading term is?", options: ["5x²", "3x", "1"], answer: "5x²", explanation: "The leading term has the highest power." },

                { q: "A monomial has how many terms?", options: ["1", "2", "3"], answer: "1", explanation: "Mono means one." },
                { q: "A binomial has how many terms?", options: ["2", "1", "3"], answer: "2", explanation: "Bi means two." },
                { q: "A trinomial has how many terms?", options: ["3", "2", "1"], answer: "3", explanation: "Tri means three." },
                { q: "7x is a?", options: ["Monomial", "Binomial", "Trinomial"], answer: "Monomial", explanation: "It has one term." },
                { q: "x + 5 is a?", options: ["Binomial", "Monomial", "Trinomial"], answer: "Binomial", explanation: "It has two terms." },

                { q: "x² + x + 1 is a?", options: ["Trinomial", "Binomial", "Monomial"], answer: "Trinomial", explanation: "It has three terms." },
                { q: "Degree of 3x² is?", options: ["2", "3", "1"], answer: "2", explanation: "The exponent is 2." },
                { q: "Degree of 5x³ is?", options: ["3", "5", "1"], answer: "3", explanation: "The exponent is 3." },
                { q: "Degree of 8x is?", options: ["1", "8", "0"], answer: "1", explanation: "x means x¹." },
                { q: "Degree of constant 6 is?", options: ["0", "1", "6"], answer: "0", explanation: "A nonzero constant has degree 0." },

                { q: "Which is a polynomial?", options: ["x² + 3x + 2", "1/x", "√x"], answer: "x² + 3x + 2", explanation: "It uses nonnegative whole-number exponents." },
                { q: "Which has 2 terms?", options: ["x² + 4", "x² + x + 4", "7x"], answer: "x² + 4", explanation: "It has two terms." },
                { q: "Which has 1 term?", options: ["9x²", "x+1", "x²+x+1"], answer: "9x²", explanation: "One term means monomial." },
                { q: "Polynomials are important for?", options: ["Algebra", "Only spelling", "Only history"], answer: "Algebra", explanation: "Polynomials are a major algebra topic." },
                { q: "The highest exponent tells the?", options: ["Degree", "Constant", "Coefficient"], answer: "Degree", explanation: "The degree is the highest exponent." }
            ]
        },



        "adding-and-subtracting-polynomials": {
            title: "Adding and Subtracting Polynomials",
            subtitle: "Combine like terms.",
            body: `
        <p>When adding or subtracting polynomials, combine like terms.</p>

        <p>Like terms have the same variable and exponent.</p>

        <h2>Example</h2>

        <p>(3x + 2) + (4x + 5)</p>

        <p>= 7x + 7</p>
    `,
            questions: [
                { q: "(3x+2)+(4x+5)", options: ["7x+7", "7x+3", "12x"], answer: "7x+7", explanation: "Combine like terms." },
                { q: "(5x+1)+(2x+4)", options: ["7x+5", "3x+5", "7x+4"], answer: "7x+5", explanation: "5x+2x=7x and 1+4=5." },
                { q: "(8x-3)+(x+7)", options: ["9x+4", "7x+4", "9x+10"], answer: "9x+4", explanation: "Combine x terms and constants." },
                { q: "(4x+8)-(x+2)", options: ["3x+6", "5x+10", "3x+10"], answer: "3x+6", explanation: "Distribute subtraction." },
                { q: "(9x+5)-(3x+1)", options: ["6x+4", "12x+6", "6x+6"], answer: "6x+4", explanation: "9x-3x and 5-1." },

                { q: "(2x²+3x)+(x²+x)", options: ["3x²+4x", "2x²+4x", "3x²+3x"], answer: "3x²+4x", explanation: "Combine like powers." },
                { q: "(7x²+2)-(4x²+1)", options: ["3x²+1", "11x²+3", "3x²+3"], answer: "3x²+1", explanation: "Subtract like terms." },
                { q: "(6x+4)+(3x-2)", options: ["9x+2", "3x+2", "9x+6"], answer: "9x+2", explanation: "Combine terms." },
                { q: "(10x-5)-(2x-1)", options: ["8x-4", "12x-6", "8x-6"], answer: "8x-4", explanation: "Distribute the minus sign." },
                { q: "(x²+2x+1)+(x²+3x+4)", options: ["2x²+5x+5", "2x²+6x+5", "x²+5x+5"], answer: "2x²+5x+5", explanation: "Combine matching terms." },

                { q: "Like terms must have?", options: ["Same variable and exponent", "Same coefficient", "Same sign"], answer: "Same variable and exponent", explanation: "That's the definition of like terms." },
                { q: "3x and 5x are?", options: ["Like terms", "Unlike terms", "Constants"], answer: "Like terms", explanation: "Same variable and exponent." },
                { q: "x² and x are?", options: ["Unlike terms", "Like terms", "Constants"], answer: "Unlike terms", explanation: "Different exponents." },
                { q: "2x²+4x²", options: ["6x²", "8x⁴", "6x⁴"], answer: "6x²", explanation: "Add coefficients." },
                { q: "7x-2x", options: ["5x", "9x", "14x"], answer: "5x", explanation: "Subtract coefficients." },

                { q: "5x²-3x²", options: ["2x²", "8x²", "15x⁴"], answer: "2x²", explanation: "Subtract coefficients." },
                { q: "(2x+1)+(2x+1)", options: ["4x+2", "2x+2", "4x+1"], answer: "4x+2", explanation: "Add corresponding terms." },
                { q: "Adding polynomials means?", options: ["Combine like terms", "Multiply terms", "Factor terms"], answer: "Combine like terms", explanation: "That's the goal." },
                { q: "Subtracting polynomials requires?", options: ["Distribute negatives", "Graphing", "Factoring"], answer: "Distribute negatives", explanation: "Don't forget the minus sign." },
                { q: "Polynomials are simplified by?", options: ["Combining like terms", "Guessing", "Dividing everything"], answer: "Combining like terms", explanation: "Simplify by combining like terms." }
            ]
        },



        "multiplying-polynomials": {
            title: "Multiplying Polynomials",
            subtitle: "Use distribution to multiply every term.",
            body: `
        <p>Multiply every term in the first polynomial by every term in the second.</p>

        <h2>Example</h2>

        <p>(x+2)(x+3)</p>

        <p>x²+3x+2x+6</p>

        <p>= x²+5x+6</p>
    `,
            questions: [
                { q: "(x+2)(x+3)", options: ["x²+5x+6", "x²+6", "x²+3x+6"], answer: "x²+5x+6", explanation: "FOIL method." },
                { q: "(x+1)(x+1)", options: ["x²+2x+1", "x²+1", "x²+2"], answer: "x²+2x+1", explanation: "Multiply each term." },
                { q: "(x+4)(x+2)", options: ["x²+6x+8", "x²+8", "x²+2x+4"], answer: "x²+6x+8", explanation: "FOIL." },
                { q: "(x-1)(x+1)", options: ["x²-1", "x²+1", "x²-2x+1"], answer: "x²-1", explanation: "Difference of squares." },
                { q: "(x+5)(x+5)", options: ["x²+10x+25", "x²+25", "x²+5x+25"], answer: "x²+10x+25", explanation: "Perfect square trinomial." },

                { q: "(2x)(3x)", options: ["6x²", "5x²", "6x"], answer: "6x²", explanation: "Multiply coefficients and variables." },
                { q: "x·x", options: ["x²", "x", "2x"], answer: "x²", explanation: "Add exponents." },
                { q: "(x+2)(x-2)", options: ["x²-4", "x²+4", "x²-2x-4"], answer: "x²-4", explanation: "Difference of squares." },
                { q: "(x+3)(x+4)", options: ["x²+7x+12", "x²+12", "x²+4x+12"], answer: "x²+7x+12", explanation: "FOIL." },
                { q: "(x-3)(x-2)", options: ["x²-5x+6", "x²-6", "x²+5x+6"], answer: "x²-5x+6", explanation: "Multiply carefully." },

                { q: "FOIL stands for?", options: ["First Outside Inside Last", "Factor Order Integer Linear", "None"], answer: "First Outside Inside Last", explanation: "FOIL helps multiply binomials." },
                { q: "x²·x³", options: ["x⁵", "x⁶", "x⁹"], answer: "x⁵", explanation: "Add exponents." },
                { q: "2x·5x", options: ["10x²", "7x²", "10x"], answer: "10x²", explanation: "Multiply coefficients." },
                { q: "(x+0)(x+2)", options: ["x²+2x", "x²+2", "2x"], answer: "x²+2x", explanation: "Distribute." },
                { q: "Multiplying polynomials uses?", options: ["Distribution", "Factoring", "Graphing"], answer: "Distribution", explanation: "Multiply every term." },

                { q: "(x+6)(x+1)", options: ["x²+7x+6", "x²+6", "x²+6x+1"], answer: "x²+7x+6", explanation: "FOIL." },
                { q: "(x-4)(x+4)", options: ["x²-16", "x²+16", "x²-8x+16"], answer: "x²-16", explanation: "Difference of squares." },
                { q: "Polynomial multiplication often creates?", options: ["Quadratics", "Circles", "Triangles"], answer: "Quadratics", explanation: "Degree increases." },
                { q: "(2x+1)(x+2)", options: ["2x²+5x+2", "2x²+3x+2", "2x²+2"], answer: "2x²+5x+2", explanation: "Distribute carefully." },
                { q: "Distribution means?", options: ["Multiply every term", "Add terms only", "Subtract terms only"], answer: "Multiply every term", explanation: "Each term multiplies every other term." }
            ]
        },



        "factoring": {
            title: "Factoring",
            subtitle: "Rewrite expressions as products.",
            body: `
        <p>Factoring is the reverse of multiplication.</p>

        <h2>Example</h2>

        <p>x² + 5x + 6</p>

        <p>= (x+2)(x+3)</p>

        <p>Because 2×3=6 and 2+3=5.</p>
    `,
            questions: [
                { q: "Factoring is the reverse of?", options: ["Multiplication", "Division", "Graphing"], answer: "Multiplication", explanation: "Factoring undoes multiplication." },
                { q: "x²+5x+6 factors to?", options: ["(x+2)(x+3)", "(x+1)(x+6)", "(x+2)(x+2)"], answer: "(x+2)(x+3)", explanation: "2+3=5 and 2×3=6." },
                { q: "x²+7x+12 factors to?", options: ["(x+3)(x+4)", "(x+2)(x+6)", "(x+1)(x+12)"], answer: "(x+3)(x+4)", explanation: "3+4=7 and 3×4=12." },
                { q: "x²+6x+8 factors to?", options: ["(x+2)(x+4)", "(x+1)(x+8)", "(x+2)(x+2)"], answer: "(x+2)(x+4)", explanation: "2+4=6 and 2×4=8." },
                { q: "x²+9x+20 factors to?", options: ["(x+4)(x+5)", "(x+2)(x+10)", "(x+1)(x+20)"], answer: "(x+4)(x+5)", explanation: "4+5=9 and 4×5=20." },

                { q: "x²-1 factors to?", options: ["(x-1)(x+1)", "(x-1)²", "x(x-1)"], answer: "(x-1)(x+1)", explanation: "Difference of squares." },
                { q: "x²-4 factors to?", options: ["(x-2)(x+2)", "(x-4)(x+1)", "x(x-4)"], answer: "(x-2)(x+2)", explanation: "Difference of squares." },
                { q: "x²+10x+25 factors to?", options: ["(x+5)²", "(x+25)", "(x+10)(x+15)"], answer: "(x+5)²", explanation: "Perfect square trinomial." },
                { q: "Factoring helps solve?", options: ["Quadratic equations", "Circles", "Statistics"], answer: "Quadratic equations", explanation: "Factoring is often used to solve quadratics." },
                { q: "If a polynomial is factored, it is written as?", options: ["Products", "Sums only", "Graphs"], answer: "Products", explanation: "Factoring creates multiplication expressions." },

                { q: "2 and 3 multiply to?", options: ["6", "5", "7"], answer: "6", explanation: "Basic multiplication." },
                { q: "2 and 3 add to?", options: ["5", "6", "1"], answer: "5", explanation: "Basic addition." },
                { q: "3 and 4 multiply to?", options: ["12", "7", "1"], answer: "12", explanation: "Basic multiplication." },
                { q: "3 and 4 add to?", options: ["7", "12", "1"], answer: "7", explanation: "Basic addition." },
                { q: "Factoring requires finding numbers that?", options: ["Multiply and add correctly", "Only multiply", "Only add"], answer: "Multiply and add correctly", explanation: "Both conditions matter." },

                { q: "x²+8x+15 factors to?", options: ["(x+3)(x+5)", "(x+1)(x+15)", "(x+2)(x+8)"], answer: "(x+3)(x+5)", explanation: "3+5=8 and 3×5=15." },
                { q: "x²+11x+30 factors to?", options: ["(x+5)(x+6)", "(x+3)(x+10)", "(x+2)(x+15)"], answer: "(x+5)(x+6)", explanation: "5+6=11 and 5×6=30." },
                { q: "Factoring makes expressions?", options: ["Simpler to analyze", "Harder", "Impossible"], answer: "Simpler to analyze", explanation: "Factored form reveals structure." },
                { q: "Factoring and multiplying are?", options: ["Opposites", "Identical", "Unrelated"], answer: "Opposites", explanation: "One undoes the other." },
                { q: "Factoring is heavily used in?", options: ["Algebra", "History", "English"], answer: "Algebra", explanation: "It is a core Algebra 1 skill." }
            ]
        },


        "quadratic-equations": {
            title: "Quadratic Equations",
            subtitle: "Solve equations containing x².",
            body: `
        <p>A quadratic equation contains x².</p>

        <h2>Example</h2>

        <p>x² - 5x + 6 = 0</p>

        <p>Factor:</p>

        <p>(x-2)(x-3)=0</p>

        <p>x=2 or x=3</p>
    `,
            questions: [
                { q: "A quadratic contains?", options: ["x²", "x³", "No variable"], answer: "x²", explanation: "Quadratics have degree 2." },
                { q: "x²-5x+6=0 factors to?", options: ["(x-2)(x-3)", "(x+2)(x+3)", "(x-1)(x-6)"], answer: "(x-2)(x-3)", explanation: "2+3=5 and 2×3=6." },
                { q: "Solutions of x²-5x+6=0?", options: ["2 and 3", "1 and 6", "-2 and -3"], answer: "2 and 3", explanation: "Set each factor equal to zero." },
                { q: "Degree of a quadratic?", options: ["2", "1", "3"], answer: "2", explanation: "Highest exponent is 2." },
                { q: "x²=16 gives?", options: ["±4", "4 only", "8"], answer: "±4", explanation: "Both positive and negative work." },

                { q: "x²-9=0 factors to?", options: ["(x-3)(x+3)", "(x-9)(x+1)", "x(x-9)"], answer: "(x-3)(x+3)", explanation: "Difference of squares." },
                { q: "Solutions of x²-9=0?", options: ["3 and -3", "9 and -9", "3 only"], answer: "3 and -3", explanation: "Set factors equal to zero." },
                { q: "x²=25 gives?", options: ["±5", "5", "25"], answer: "±5", explanation: "Both roots work." },
                { q: "Quadratic equations usually graph as?", options: ["Parabolas", "Lines", "Circles"], answer: "Parabolas", explanation: "Quadratics form parabolas." },
                { q: "x²+7x+12 factors to?", options: ["(x+3)(x+4)", "(x+2)(x+6)", "(x+1)(x+12)"], answer: "(x+3)(x+4)", explanation: "3+4=7 and 3×4=12." },

                { q: "Solutions of x²+7x+12=0?", options: ["-3 and -4", "3 and 4", "-2 and -6"], answer: "-3 and -4", explanation: "Set each factor equal to zero." },
                { q: "A quadratic can have?", options: ["Two solutions", "One solution only", "No graph"], answer: "Two solutions", explanation: "Most have up to two real roots." },
                { q: "x²-4=0 gives?", options: ["±2", "2", "4"], answer: "±2", explanation: "Square root both sides." },
                { q: "Quadratics are solved by?", options: ["Factoring", "Graphing", "Both"], answer: "Both", explanation: "Multiple methods exist." },
                { q: "x²+10x+25 factors to?", options: ["(x+5)²", "(x+25)", "(x+10)(x+15)"], answer: "(x+5)²", explanation: "Perfect square trinomial." },

                { q: "Solution of (x+5)²=0?", options: ["-5", "5", "0"], answer: "-5", explanation: "x+5=0." },
                { q: "A quadratic is what degree?", options: ["2", "1", "3"], answer: "2", explanation: "Degree 2." },
                { q: "Quadratics are important in?", options: ["Algebra", "Only Geometry", "Only Calculus"], answer: "Algebra", explanation: "Core Algebra topic." },
                { q: "Factoring helps find?", options: ["Roots", "Slopes", "Angles"], answer: "Roots", explanation: "Factored form reveals roots." },
                { q: "Quadratic equations involve?", options: ["x²", "x⁵", "No exponent"], answer: "x²", explanation: "That's the defining feature." }
            ]
        },



        "graphing-quadratics": {
            title: "Graphing Quadratics",
            subtitle: "Learn how parabolas look and behave.",
            body: `
        <p>Quadratic functions graph as parabolas.</p>

        <p>Example:</p>

        <p>y = x²</p>

        <p>This parabola opens upward and has vertex (0,0).</p>
    `,
            questions: [
                { q: "Quadratics graph as?", options: ["Parabolas", "Lines", "Circles"], answer: "Parabolas", explanation: "Quadratic graphs are parabolas." },
                { q: "y=x² opens?", options: ["Upward", "Downward", "Sideways"], answer: "Upward", explanation: "Positive coefficient." },
                { q: "Vertex of y=x²?", options: ["(0,0)", "(1,1)", "(0,1)"], answer: "(0,0)", explanation: "The parabola's lowest point." },
                { q: "A parabola has?", options: ["Vertex", "Slope only", "No shape"], answer: "Vertex", explanation: "Every parabola has a vertex." },
                { q: "If coefficient of x² is positive?", options: ["Opens up", "Opens down", "Flat"], answer: "Opens up", explanation: "Positive coefficient." },

                { q: "If coefficient of x² is negative?", options: ["Opens down", "Opens up", "Flat"], answer: "Opens down", explanation: "Negative coefficient." },
                { q: "Graph of y=-x²?", options: ["Opens down", "Opens up", "Line"], answer: "Opens down", explanation: "Negative leading coefficient." },
                { q: "The vertex is the?", options: ["Turning point", "Slope", "Intercept"], answer: "Turning point", explanation: "Where direction changes." },
                { q: "Quadratic graphs are symmetric?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Parabolas are symmetric." },
                { q: "Axis of symmetry divides?", options: ["Parabola in half", "Circle", "Triangle"], answer: "Parabola in half", explanation: "It creates mirror halves." },

                { q: "y=x² has minimum value?", options: ["0", "1", "-1"], answer: "0", explanation: "Vertex is lowest point." },
                { q: "y=-x² has maximum value?", options: ["0", "1", "-1"], answer: "0", explanation: "Vertex is highest point." },
                { q: "A parabola can cross x-axis?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Roots appear as x-intercepts." },
                { q: "Roots are also called?", options: ["X-intercepts", "Vertices", "Slopes"], answer: "X-intercepts", explanation: "Where graph crosses x-axis." },
                { q: "Vertex form helps find?", options: ["Vertex", "Roots only", "Slope"], answer: "Vertex", explanation: "Vertex form shows vertex immediately." },

                { q: "y=(x-2)² has vertex?", options: ["(2,0)", "(0,2)", "(-2,0)"], answer: "(2,0)", explanation: "Shift right 2." },
                { q: "y=(x+3)² has vertex?", options: ["(-3,0)", "(3,0)", "(0,3)"], answer: "(-3,0)", explanation: "Shift left 3." },
                { q: "Parabolas are examples of?", options: ["Quadratic functions", "Linear functions", "Constant functions"], answer: "Quadratic functions", explanation: "They come from degree-2 equations." },
                { q: "The graph of y=x² is?", options: ["U-shaped", "Straight", "Circular"], answer: "U-shaped", explanation: "Classic parabola." },
                { q: "Graphing helps visualize?", options: ["Behavior of quadratics", "Only roots", "Only coefficients"], answer: "Behavior of quadratics", explanation: "Graphs show how functions behave." }
            ]
        },



        "completing-the-square": {
            title: "Completing the Square",
            subtitle: "Rewrite quadratics into perfect square form.",
            body: `
        <p>Completing the square creates a perfect square trinomial.</p>

        <h2>Example</h2>

        <p>x² + 6x + 5 = 0</p>

        <p>x² + 6x + 9 = 4</p>

        <p>(x+3)² = 4</p>

        <p>x = -1 or x = -5</p>
    `,
            questions: [
                { q: "Completing the square creates?", options: ["Perfect square trinomial", "Line", "Circle"], answer: "Perfect square trinomial", explanation: "That's the goal." },
                { q: "Half of 6 is?", options: ["3", "6", "9"], answer: "3", explanation: "Divide by 2." },
                { q: "3² equals?", options: ["9", "6", "3"], answer: "9", explanation: "3×3=9." },
                { q: "x²+6x+9 becomes?", options: ["(x+3)²", "(x+9)²", "(x+6)²"], answer: "(x+3)²", explanation: "Perfect square trinomial." },
                { q: "Completing the square helps solve?", options: ["Quadratics", "Lines", "Angles"], answer: "Quadratics", explanation: "It is a quadratic solving method." },

                { q: "Half of 8 is?", options: ["4", "8", "2"], answer: "4", explanation: "Divide by 2." },
                { q: "4² equals?", options: ["16", "8", "4"], answer: "16", explanation: "Square the half." },
                { q: "x²+8x+16 becomes?", options: ["(x+4)²", "(x+8)²", "(x+16)²"], answer: "(x+4)²", explanation: "Perfect square trinomial." },
                { q: "Half of 10 is?", options: ["5", "10", "2"], answer: "5", explanation: "Divide by 2." },
                { q: "5² equals?", options: ["25", "10", "15"], answer: "25", explanation: "Square it." },

                { q: "x²+10x+25 becomes?", options: ["(x+5)²", "(x+10)²", "(x+25)²"], answer: "(x+5)²", explanation: "Perfect square trinomial." },
                { q: "Completing the square often leads to?", options: ["Square roots", "Slope", "Graphs"], answer: "Square roots", explanation: "Take square roots to solve." },
                { q: "The process starts by?", options: ["Finding half the coefficient", "Graphing", "Factoring"], answer: "Finding half the coefficient", explanation: "Then square it." },
                { q: "Why add the same number to both sides?", options: ["Keep equation balanced", "For fun", "To graph"], answer: "Keep equation balanced", explanation: "Balance must be maintained." },
                { q: "Completing the square rewrites equations into?", options: ["Vertex form", "Slope form", "Standard form only"], answer: "Vertex form", explanation: "It naturally creates vertex form." },

                { q: "Perfect square trinomials factor easily?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "That's why we create them." },
                { q: "Completing the square is used before?", options: ["Quadratic Formula derivation", "Graphing lines", "Statistics"], answer: "Quadratic Formula derivation", explanation: "The formula comes from this method." },
                { q: "It is an alternative to?", options: ["Factoring", "Only graphing", "Only substitution"], answer: "Factoring", explanation: "Another way to solve quadratics." },
                { q: "Completing the square works even when factoring is?", options: ["Difficult", "Easy", "Finished"], answer: "Difficult", explanation: "Useful when factoring is hard." },
                { q: "This method is important for?", options: ["Algebra 1 and beyond", "Only Geometry", "Only Arithmetic"], answer: "Algebra 1 and beyond", explanation: "It appears throughout higher math." }
            ]
        },



        "quadratic-formula": {
            title: "Quadratic Formula",
            subtitle: "Solve any quadratic equation.",
            body: `
        <p>The quadratic formula solves equations of the form:</p>

        <p><strong>ax² + bx + c = 0</strong></p>

        <p><strong>x = (-b ± √(b² - 4ac)) / 2a</strong></p>

        <p>This works even when factoring is difficult.</p>
    `,
            questions: [
                { q: "The quadratic formula solves?", options: ["Quadratics", "Lines", "Circles"], answer: "Quadratics", explanation: "It is designed for quadratic equations." },
                { q: "Quadratic formula contains?", options: ["Square root", "Cube root", "Logarithm"], answer: "Square root", explanation: "The discriminant is under a square root." },
                { q: "The expression b²-4ac is called?", options: ["Discriminant", "Slope", "Vertex"], answer: "Discriminant", explanation: "It determines the number of solutions." },
                { q: "If b²-4ac > 0, there are?", options: ["2 real solutions", "1 real solution", "No real solutions"], answer: "2 real solutions", explanation: "Positive discriminant." },
                { q: "If b²-4ac = 0, there are?", options: ["1 real solution", "2 real solutions", "No solutions"], answer: "1 real solution", explanation: "Repeated root." },

                { q: "If b²-4ac < 0, there are?", options: ["No real solutions", "One solution", "Infinite solutions"], answer: "No real solutions", explanation: "Negative discriminant." },
                { q: "In ax²+bx+c=0, a is?", options: ["Coefficient of x²", "Constant", "Slope"], answer: "Coefficient of x²", explanation: "a multiplies x²." },
                { q: "In ax²+bx+c=0, b is?", options: ["Coefficient of x", "Constant", "Root"], answer: "Coefficient of x", explanation: "b multiplies x." },
                { q: "In ax²+bx+c=0, c is?", options: ["Constant", "Coefficient", "Exponent"], answer: "Constant", explanation: "c has no variable." },
                { q: "The formula works for?", options: ["All quadratics", "Some quadratics", "Only easy quadratics"], answer: "All quadratics", explanation: "It always works." },

                { q: "The ± symbol means?", options: ["Plus or minus", "Multiply", "Divide"], answer: "Plus or minus", explanation: "Two possible values." },
                { q: "A positive discriminant gives?", options: ["Two roots", "One root", "No roots"], answer: "Two roots", explanation: "Two real solutions." },
                { q: "A zero discriminant gives?", options: ["One root", "Two roots", "No roots"], answer: "One root", explanation: "Repeated root." },
                { q: "A negative discriminant gives?", options: ["Complex roots", "Two real roots", "One root"], answer: "Complex roots", explanation: "No real solutions." },
                { q: "Quadratic formula comes from?", options: ["Completing the square", "Factoring", "Graphing"], answer: "Completing the square", explanation: "It is derived from that method." },

                { q: "The formula is used when?", options: ["Factoring is difficult", "Factoring is easy", "Never"], answer: "Factoring is difficult", explanation: "It works regardless." },
                { q: "Quadratic formula is part of?", options: ["Algebra", "Geometry", "Statistics"], answer: "Algebra", explanation: "Core algebra topic." },
                { q: "Roots are also called?", options: ["Solutions", "Slopes", "Vertices"], answer: "Solutions", explanation: "Roots solve the equation." },
                { q: "The discriminant helps predict?", options: ["Number of solutions", "Slope", "Intercept"], answer: "Number of solutions", explanation: "It determines root behavior." },
                { q: "The quadratic formula is one of Algebra's most?", options: ["Important formulas", "Graphs", "Tables"], answer: "Important formulas", explanation: "It is a fundamental formula." }
            ]
        },



        "radicals": {
            title: "Radicals",
            subtitle: "Work with square roots and other roots.",
            body: `
        <p>A radical contains a root symbol.</p>

        <p><strong>√25 = 5</strong></p>

        <p>Because 5 × 5 = 25.</p>

        <p>Square roots undo squaring.</p>
    `,
            questions: [
                { q: "√25 =", options: ["5", "25", "10"], answer: "5", explanation: "5×5=25." },
                { q: "√49 =", options: ["7", "14", "49"], answer: "7", explanation: "7×7=49." },
                { q: "√64 =", options: ["8", "16", "32"], answer: "8", explanation: "8×8=64." },
                { q: "√81 =", options: ["9", "18", "27"], answer: "9", explanation: "9×9=81." },
                { q: "√100 =", options: ["10", "20", "50"], answer: "10", explanation: "10×10=100." },

                { q: "A radical contains?", options: ["Root symbol", "Slope", "Fraction"], answer: "Root symbol", explanation: "That's the defining feature." },
                { q: "√36 =", options: ["6", "12", "18"], answer: "6", explanation: "6×6=36." },
                { q: "√121 =", options: ["11", "22", "12"], answer: "11", explanation: "11×11=121." },
                { q: "√144 =", options: ["12", "24", "72"], answer: "12", explanation: "12×12=144." },
                { q: "√169 =", options: ["13", "26", "39"], answer: "13", explanation: "13×13=169." },

                { q: "Square roots undo?", options: ["Squaring", "Adding", "Subtracting"], answer: "Squaring", explanation: "They are inverse operations." },
                { q: "√1 =", options: ["1", "0", "2"], answer: "1", explanation: "1×1=1." },
                { q: "√4 =", options: ["2", "4", "8"], answer: "2", explanation: "2×2=4." },
                { q: "√9 =", options: ["3", "9", "6"], answer: "3", explanation: "3×3=9." },
                { q: "√16 =", options: ["4", "8", "16"], answer: "4", explanation: "4×4=16." },

                { q: "√225 =", options: ["15", "25", "30"], answer: "15", explanation: "15×15=225." },
                { q: "Radicals are used in?", options: ["Algebra", "Geometry", "Both"], answer: "Both", explanation: "They appear throughout mathematics." },
                { q: "The symbol √ is called?", options: ["Radical sign", "Division sign", "Slope sign"], answer: "Radical sign", explanation: "It indicates a root." },
                { q: "√400 =", options: ["20", "40", "200"], answer: "20", explanation: "20×20=400." },
                { q: "Radicals and exponents are?", options: ["Related", "Unrelated", "Opposites"], answer: "Related", explanation: "Roots and powers are inverse concepts." }
            ]
        },



        "rational-expressions": {
            title: "Rational Expressions",
            subtitle: "Work with algebraic fractions.",
            body: `
        <p>A rational expression is a fraction containing variables.</p>

        <h2>Example</h2>

        <p><strong>(x²-1)/(x-1)</strong></p>

        <p>Factor the numerator:</p>

        <p>(x-1)(x+1)/(x-1)</p>

        <p>= x+1</p>
    `,
            questions: [
                { q: "A rational expression contains?", options: ["Fractions with variables", "Only numbers", "Only roots"], answer: "Fractions with variables", explanation: "Variables appear in the numerator or denominator." },
                { q: "(x²-1)/(x-1) simplifies to?", options: ["x+1", "x-1", "1"], answer: "x+1", explanation: "Factor and cancel." },
                { q: "x²-1 factors to?", options: ["(x-1)(x+1)", "(x-1)²", "(x+1)²"], answer: "(x-1)(x+1)", explanation: "Difference of squares." },
                { q: "Rational expressions are similar to?", options: ["Fractions", "Lines", "Angles"], answer: "Fractions", explanation: "Same rules often apply." },
                { q: "Before simplifying, you should?", options: ["Factor", "Graph", "Estimate"], answer: "Factor", explanation: "Factoring reveals common factors." },

                { q: "Common factors may be?", options: ["Canceled", "Squared", "Ignored"], answer: "Canceled", explanation: "If they appear in numerator and denominator." },
                { q: "(x+2)/x is a?", options: ["Rational expression", "Quadratic", "Radical"], answer: "Rational expression", explanation: "Variable in a fraction." },
                { q: "A denominator cannot equal?", options: ["0", "1", "2"], answer: "0", explanation: "Division by zero is undefined." },
                { q: "Factoring helps?", options: ["Simplify expressions", "Create graphs", "Find angles"], answer: "Simplify expressions", explanation: "Common factors become visible." },
                { q: "Rational expressions appear in?", options: ["Algebra", "Science", "Both"], answer: "Both", explanation: "Used in many applications." },

                { q: "x/x simplifies to?", options: ["1", "x", "0"], answer: "1", explanation: "For x ≠ 0." },
                { q: "(2x)/x simplifies to?", options: ["2", "x", "1"], answer: "2", explanation: "Cancel x." },
                { q: "(3x²)/(x) simplifies to?", options: ["3x", "3", "x"], answer: "3x", explanation: "Cancel one x." },
                { q: "(4x)/(2x) simplifies to?", options: ["2", "4", "1"], answer: "2", explanation: "Reduce fraction." },
                { q: "A rational expression is essentially?", options: ["An algebraic fraction", "A graph", "An equation"], answer: "An algebraic fraction", explanation: "That's the simplest description." },

                { q: "Simplifying means?", options: ["Reducing common factors", "Adding roots", "Graphing"], answer: "Reducing common factors", explanation: "Factor and cancel." },
                { q: "Denominators are important because?", options: ["They cannot be zero", "They must be one", "They are always x"], answer: "They cannot be zero", explanation: "Division by zero is undefined." },
                { q: "Factoring is often the first step?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Most simplifications begin with factoring." },
                { q: "Rational expressions connect to?", options: ["Fractions", "Polynomials", "Both"], answer: "Both", explanation: "They combine fraction and polynomial concepts." },
                { q: "This is one of the final major Algebra 1 topics?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "It appears near the end of many Algebra 1 courses." }
            ]
        },



        "functions": {
            title: "Functions",
            subtitle: "Understand inputs and outputs.",
            body: `
        <p>A function gives exactly one output for each input.</p>

        <p>You can think of a function as a machine.</p>

        <p>Input goes in.</p>

        <p>Output comes out.</p>

        <h2>Example</h2>

        <p>f(x)=x+2</p>

        <p>If x=3:</p>

        <p>f(3)=5</p>
    `,
            questions: [
                { q: "A function assigns?", options: ["One output per input", "Many outputs per input", "No outputs"], answer: "One output per input", explanation: "Functions have exactly one output for each input." },
                { q: "f(x)=x+2, f(3)=?", options: ["5", "3", "1"], answer: "5", explanation: "3+2=5." },
                { q: "f(x)=x+2, f(10)=?", options: ["12", "8", "20"], answer: "12", explanation: "10+2=12." },
                { q: "Input values are called?", options: ["Domain", "Range", "Slope"], answer: "Domain", explanation: "Domain contains inputs." },
                { q: "Output values are called?", options: ["Range", "Domain", "Intercept"], answer: "Range", explanation: "Range contains outputs." },

                { q: "f(x)=2x, f(4)=?", options: ["8", "6", "4"], answer: "8", explanation: "2×4=8." },
                { q: "f(x)=5x, f(2)=?", options: ["10", "7", "5"], answer: "10", explanation: "5×2=10." },
                { q: "Functions are often written as?", options: ["f(x)", "x=f", "s(x,y,z)"], answer: "f(x)", explanation: "Function notation." },
                { q: "Each input gets?", options: ["One output", "Many outputs", "No outputs"], answer: "One output", explanation: "Definition of function." },
                { q: "Functions model?", options: ["Relationships", "Triangles", "Proofs"], answer: "Relationships", explanation: "Functions relate variables." },

                { q: "f(x)=x², f(3)=?", options: ["9", "6", "3"], answer: "9", explanation: "3²=9." },
                { q: "f(x)=x², f(5)=?", options: ["25", "10", "5"], answer: "25", explanation: "5²=25." },
                { q: "Domain means?", options: ["Inputs", "Outputs", "Solutions"], answer: "Inputs", explanation: "Domain is the set of inputs." },
                { q: "Range means?", options: ["Outputs", "Inputs", "Intercepts"], answer: "Outputs", explanation: "Range is the set of outputs." },
                { q: "Functions are important in?", options: ["All higher math", "Only Algebra 1", "Only Geometry"], answer: "All higher math", explanation: "Functions appear everywhere." },

                { q: "f(x)=x+1, f(7)=?", options: ["8", "7", "6"], answer: "8", explanation: "7+1=8." },
                { q: "f(x)=3x, f(5)=?", options: ["15", "8", "5"], answer: "15", explanation: "3×5=15." },
                { q: "Functions connect?", options: ["Inputs and outputs", "Only numbers", "Only graphs"], answer: "Inputs and outputs", explanation: "That's their purpose." },
                { q: "A function can be graphed?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Functions often appear as graphs." },
                { q: "Functions are one of the most important concepts in?", options: ["Mathematics", "History", "English"], answer: "Mathematics", explanation: "They are fundamental." }
            ]
        },



        "domain-and-range": {
            title: "Domain and Range",
            subtitle: "Identify all possible inputs and outputs.",
            body: `
        <p>The domain is all possible inputs.</p>

        <p>The range is all possible outputs.</p>

        <h2>Example</h2>

        <p>f(x)=x²</p>

        <p>Domain: all real numbers</p>

        <p>Range: y ≥ 0</p>
    `,
            questions: [
                { q: "Domain means?", options: ["Inputs", "Outputs", "Solutions"], answer: "Inputs", explanation: "Domain contains inputs." },
                { q: "Range means?", options: ["Outputs", "Inputs", "Roots"], answer: "Outputs", explanation: "Range contains outputs." },
                { q: "For f(x)=x², range is?", options: ["y≥0", "All reals", "y≤0"], answer: "y≥0", explanation: "Squares cannot be negative." },
                { q: "For f(x)=x², domain is?", options: ["All reals", "Positive numbers only", "Integers only"], answer: "All reals", explanation: "Any real number can be squared." },
                { q: "Domain relates to?", options: ["x-values", "y-values", "slopes"], answer: "x-values", explanation: "Inputs are x-values." },

                { q: "Range relates to?", options: ["y-values", "x-values", "roots"], answer: "y-values", explanation: "Outputs are y-values." },
                { q: "f(x)=x+5 has domain?", options: ["All reals", "Positive only", "None"], answer: "All reals", explanation: "Any real input works." },
                { q: "f(x)=x+5 has range?", options: ["All reals", "Positive only", "None"], answer: "All reals", explanation: "Outputs cover all reals." },
                { q: "Domain comes first?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Input before output." },
                { q: "Range comes after?", options: ["Domain", "Slope", "Vertex"], answer: "Domain", explanation: "Outputs result from inputs." },

                { q: "Functions connect domain to?", options: ["Range", "Slope", "Roots"], answer: "Range", explanation: "Functions map inputs to outputs." },
                { q: "Domain is often shown on?", options: ["x-axis", "y-axis", "Neither"], answer: "x-axis", explanation: "Inputs are x-values." },
                { q: "Range is often shown on?", options: ["y-axis", "x-axis", "Neither"], answer: "y-axis", explanation: "Outputs are y-values." },
                { q: "Can a function have infinite domain?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Many functions do." },
                { q: "Can a function have infinite range?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Many functions do." },

                { q: "Domain and range describe?", options: ["Function behavior", "Only roots", "Only graphs"], answer: "Function behavior", explanation: "They define possible values." },
                { q: "Domain is also called?", options: ["Input set", "Output set", "Root set"], answer: "Input set", explanation: "It contains inputs." },
                { q: "Range is also called?", options: ["Output set", "Input set", "Root set"], answer: "Output set", explanation: "It contains outputs." },
                { q: "Every function has?", options: ["Domain and range", "Only domain", "Only range"], answer: "Domain and range", explanation: "Both are essential." },
                { q: "Domain and range are foundational for?", options: ["Algebra 2 and Calculus", "Only Geometry", "Only Arithmetic"], answer: "Algebra 2 and Calculus", explanation: "Very important concepts." }
            ]
        },



        "piecewise-functions": {
            title: "Piecewise Functions",
            subtitle: "Functions with different rules.",
            body: `
        <p>A piecewise function uses different formulas for different inputs.</p>

        <h2>Example</h2>

        <p>f(x)=x if x≥0</p>

        <p>f(x)=-x if x<0</p>

        <p>This is the absolute value function.</p>
    `,
            questions: [
                { q: "A piecewise function has?", options: ["Multiple rules", "One rule only", "No rules"], answer: "Multiple rules", explanation: "Different inputs use different formulas." },
                { q: "Piecewise functions use?", options: ["Conditions", "Slopes only", "Roots only"], answer: "Conditions", explanation: "Each formula has a condition." },
                { q: "Different inputs may use?", options: ["Different equations", "Same equation always", "No equation"], answer: "Different equations", explanation: "That's the point of piecewise functions." },
                { q: "Piecewise functions are still?", options: ["Functions", "Triangles", "Polynomials"], answer: "Functions", explanation: "They still assign one output per input." },
                { q: "Conditions often use?", options: ["Inequalities", "Roots", "Fractions"], answer: "Inequalities", explanation: "Conditions split the domain." },

                { q: "Absolute value can be written as?", options: ["Piecewise function", "Circle", "Quadratic"], answer: "Piecewise function", explanation: "It uses different rules." },
                { q: "Piecewise functions appear in?", options: ["Real-world modeling", "Nothing", "Only geometry"], answer: "Real-world modeling", explanation: "Different situations require different rules." },
                { q: "Can piecewise functions be graphed?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Each piece is graphed separately." },
                { q: "Each piece covers?", options: ["Part of the domain", "Entire domain", "No domain"], answer: "Part of the domain", explanation: "Conditions divide the inputs." },
                { q: "Together the pieces create?", options: ["One function", "Many functions", "No function"], answer: "One function", explanation: "All pieces form a single function." },

                { q: "Piecewise functions help model?", options: ["Changing situations", "Only lines", "Only circles"], answer: "Changing situations", explanation: "Different conditions require different formulas." },
                { q: "A piecewise graph may have?", options: ["Multiple segments", "One point only", "No graph"], answer: "Multiple segments", explanation: "Each rule creates a piece." },
                { q: "Conditions decide?", options: ["Which formula to use", "The answer only", "The graph only"], answer: "Which formula to use", explanation: "Conditions choose the correct piece." },
                { q: "Piecewise functions extend the idea of?", options: ["Functions", "Triangles", "Statistics"], answer: "Functions", explanation: "They are still functions." },
                { q: "Piecewise functions are useful in?", options: ["Advanced math", "Programming", "Both"], answer: "Both", explanation: "Very common in many fields." },

                { q: "Different intervals can have?", options: ["Different equations", "Same equation only", "No equation"], answer: "Different equations", explanation: "That's the definition." },
                { q: "Piecewise means?", options: ["In pieces", "In circles", "In roots"], answer: "In pieces", explanation: "Different parts." },
                { q: "Piecewise functions can be continuous?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Some connect smoothly." },
                { q: "Piecewise functions can be discontinuous?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Some have jumps." },
                { q: "Piecewise functions prepare students for?", options: ["Higher mathematics", "Only Algebra 1", "Only arithmetic"], answer: "Higher mathematics", explanation: "They appear throughout advanced math." }
            ]
        },



        "function-notation": {
            title: "Function Notation",
            subtitle: "Evaluate functions using f(x).",
            body: `
        <p>Function notation tells us to substitute a value into a function.</p>

        <h2>Example</h2>

        <p>f(x)=2x+3</p>

        <p>f(4)=2(4)+3</p>

        <p>f(4)=11</p>
    `,
            questions: [
                { q: "f(x)=x+2, f(3)=?", options: ["5", "3", "1"], answer: "5", explanation: "3+2=5." },
                { q: "f(x)=2x, f(5)=?", options: ["10", "7", "5"], answer: "10", explanation: "2×5=10." },
                { q: "f(x)=x², f(4)=?", options: ["16", "8", "4"], answer: "16", explanation: "4²=16." },
                { q: "f(x)=3x+1, f(2)=?", options: ["7", "5", "6"], answer: "7", explanation: "3(2)+1=7." },
                { q: "f(x)=10-x, f(4)=?", options: ["6", "14", "4"], answer: "6", explanation: "10-4=6." },

                { q: "Function notation uses?", options: ["f(x)", "y=x only", "m=b"], answer: "f(x)", explanation: "Standard notation." },
                { q: "f(1) means?", options: ["Replace x with 1", "Multiply by 1", "Graph it"], answer: "Replace x with 1", explanation: "Substitute 1." },
                { q: "f(x)=x+7, f(10)=?", options: ["17", "70", "10"], answer: "17", explanation: "10+7=17." },
                { q: "f(x)=4x, f(3)=?", options: ["12", "7", "3"], answer: "12", explanation: "4×3=12." },
                { q: "f(x)=x-5, f(9)=?", options: ["4", "14", "9"], answer: "4", explanation: "9-5=4." },

                { q: "f(x)=x²+1, f(2)=?", options: ["5", "4", "3"], answer: "5", explanation: "2²+1=5." },
                { q: "f(x)=x²+1, f(3)=?", options: ["10", "9", "6"], answer: "10", explanation: "3²+1=10." },
                { q: "Evaluating means?", options: ["Substitute and simplify", "Factor", "Graph"], answer: "Substitute and simplify", explanation: "That's evaluation." },
                { q: "Functions connect?", options: ["Inputs and outputs", "Angles and sides", "Circles and lines"], answer: "Inputs and outputs", explanation: "Core function idea." },
                { q: "Function notation appears heavily in?", options: ["Algebra and Calculus", "History", "English"], answer: "Algebra and Calculus", explanation: "Very important concept." },

                { q: "f(x)=5, f(100)=?", options: ["5", "100", "500"], answer: "5", explanation: "Constant function." },
                { q: "f(x)=x, f(9)=?", options: ["9", "0", "18"], answer: "9", explanation: "Identity function." },
                { q: "f(x)=2x+1, f(0)=?", options: ["1", "0", "2"], answer: "1", explanation: "2(0)+1=1." },
                { q: "f(x)=7-x, f(2)=?", options: ["5", "9", "2"], answer: "5", explanation: "7-2=5." },
                { q: "Function notation is a way to?", options: ["Describe functions", "Factor quadratics", "Find slopes"], answer: "Describe functions", explanation: "It names functions clearly." }
            ]
        },



        "transformations-of-functions": {
            title: "Transformations of Functions",
            subtitle: "Shift, stretch, and reflect graphs.",
            body: `
        <p>Transformations change a graph's position or shape.</p>

        <p>y=x²</p>

        <p>y=(x-3)² shifts right 3 units.</p>

        <p>y=(x+2)² shifts left 2 units.</p>
    `,
            questions: [
                { q: "(x-3)² shifts?", options: ["Right 3", "Left 3", "Up 3"], answer: "Right 3", explanation: "Subtract inside moves right." },
                { q: "(x+2)² shifts?", options: ["Left 2", "Right 2", "Up 2"], answer: "Left 2", explanation: "Add inside moves left." },
                { q: "x²+5 shifts?", options: ["Up 5", "Down 5", "Right 5"], answer: "Up 5", explanation: "Add outside moves up." },
                { q: "x²-4 shifts?", options: ["Down 4", "Up 4", "Left 4"], answer: "Down 4", explanation: "Subtract outside moves down." },
                { q: "-x² reflects across?", options: ["x-axis", "y-axis", "origin"], answer: "x-axis", explanation: "Negative outside reflects vertically." },

                { q: "Transformations affect?", options: ["Graphs", "Equations only", "Fractions"], answer: "Graphs", explanation: "Graph movement." },
                { q: "Adding outside shifts?", options: ["Vertically", "Horizontally", "Neither"], answer: "Vertically", explanation: "Outside changes y-values." },
                { q: "Changing inside shifts?", options: ["Horizontally", "Vertically", "Neither"], answer: "Horizontally", explanation: "Inside changes x-values." },
                { q: "x²+7 moves?", options: ["Up 7", "Down 7", "Right 7"], answer: "Up 7", explanation: "Vertical shift." },
                { q: "x²-9 moves?", options: ["Down 9", "Up 9", "Left 9"], answer: "Down 9", explanation: "Vertical shift." },

                { q: "Transformations preserve?", options: ["Basic shape", "Nothing", "Intercepts"], answer: "Basic shape", explanation: "Shape often stays the same." },
                { q: "Graph movement is called?", options: ["Transformation", "Factorization", "Substitution"], answer: "Transformation", explanation: "Standard term." },
                { q: "Reflections flip a graph?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Reflection creates mirror image." },
                { q: "Stretching makes graphs?", options: ["Steeper or wider", "Invisible", "Linear"], answer: "Steeper or wider", explanation: "Vertical stretch/compression." },
                { q: "Transformations are important for?", options: ["Graphing", "Factoring", "Statistics"], answer: "Graphing", explanation: "Main graphing tool." },

                { q: "y=x² and y=x²+1 differ by?", options: ["Up 1", "Down 1", "Right 1"], answer: "Up 1", explanation: "Vertical shift." },
                { q: "y=(x-1)² moves?", options: ["Right 1", "Left 1", "Up 1"], answer: "Right 1", explanation: "Inside subtraction." },
                { q: "y=(x+1)² moves?", options: ["Left 1", "Right 1", "Down 1"], answer: "Left 1", explanation: "Inside addition." },
                { q: "Transformations appear in?", options: ["Every advanced math course", "Only Algebra 1", "Only Geometry"], answer: "Every advanced math course", explanation: "Very common concept." },
                { q: "Transformation means?", options: ["Change a graph", "Solve equation", "Factor expression"], answer: "Change a graph", explanation: "Graph movement." }
            ]
        },



        "absolute-value-functions": {
            title: "Absolute Value Functions",
            subtitle: "Distance from zero on a number line.",
            body: `
        <p>Absolute value measures distance from zero.</p>

        <p>|5| = 5</p>

        <p>|-5| = 5</p>

        <p>Distance is always positive.</p>

        <h2>Example</h2>

        <p>|-8| = 8</p>
    `,
            questions: [
                { q: "|5| =", options: ["5", "-5", "0"], answer: "5", explanation: "Distance from zero." },
                { q: "|-5| =", options: ["5", "-5", "0"], answer: "5", explanation: "Distance from zero." },
                { q: "|10| =", options: ["10", "-10", "1"], answer: "10", explanation: "Positive stays positive." },
                { q: "|-10| =", options: ["10", "-10", "0"], answer: "10", explanation: "Distance from zero." },
                { q: "|0| =", options: ["0", "1", "-1"], answer: "0", explanation: "Zero is zero units from itself." },

                { q: "|7| =", options: ["7", "-7", "14"], answer: "7", explanation: "Positive value." },
                { q: "|-7| =", options: ["7", "-7", "14"], answer: "7", explanation: "Distance from zero." },
                { q: "|12| =", options: ["12", "-12", "24"], answer: "12", explanation: "Positive value." },
                { q: "|-12| =", options: ["12", "-12", "24"], answer: "12", explanation: "Distance from zero." },
                { q: "Absolute value is always?", options: ["Nonnegative", "Negative", "Zero"], answer: "Nonnegative", explanation: "Distance cannot be negative." },

                { q: "|3| + |-4| =", options: ["7", "1", "12"], answer: "7", explanation: "3+4=7." },
                { q: "|-8| + |2| =", options: ["10", "6", "-10"], answer: "10", explanation: "8+2=10." },
                { q: "|-6| =", options: ["6", "-6", "0"], answer: "6", explanation: "Distance from zero." },
                { q: "|15| =", options: ["15", "-15", "30"], answer: "15", explanation: "Positive value." },
                { q: "|-20| =", options: ["20", "-20", "40"], answer: "20", explanation: "Distance from zero." },

                { q: "Absolute value represents?", options: ["Distance", "Slope", "Area"], answer: "Distance", explanation: "Distance from zero." },
                { q: "|1| =", options: ["1", "-1", "0"], answer: "1", explanation: "Distance from zero." },
                { q: "|-1| =", options: ["1", "-1", "0"], answer: "1", explanation: "Distance from zero." },
                { q: "Can absolute value be negative?", options: ["No", "Yes", "Sometimes"], answer: "No", explanation: "Distance is never negative." },
                { q: "Absolute value is used throughout?", options: ["Algebra", "History", "English"], answer: "Algebra", explanation: "Common algebra concept." }
            ]
        },



        "absolute-value-graphs": {
            title: "Absolute Value Graphs",
            subtitle: "Graph V-shaped functions.",
            body: `
        <p>The graph of y=|x| forms a V shape.</p>

        <p>The vertex is at (0,0).</p>

        <p>The graph is symmetric about the y-axis.</p>
    `,
            questions: [
                { q: "Graph of y=|x| looks like?", options: ["V", "U", "Line"], answer: "V", explanation: "Absolute value graph." },
                { q: "Vertex of y=|x|?", options: ["(0,0)", "(1,1)", "(0,1)"], answer: "(0,0)", explanation: "Origin." },
                { q: "y=|x| is symmetric about?", options: ["y-axis", "x-axis", "origin"], answer: "y-axis", explanation: "Mirror image." },
                { q: "y=|0| =", options: ["0", "1", "-1"], answer: "0", explanation: "Origin." },
                { q: "y=|2| =", options: ["2", "-2", "4"], answer: "2", explanation: "Absolute value." },

                { q: "y=|-2| =", options: ["2", "-2", "4"], answer: "2", explanation: "Distance from zero." },
                { q: "Graph opens?", options: ["Upward", "Downward", "Sideways"], answer: "Upward", explanation: "Standard graph." },
                { q: "Lowest point?", options: ["Vertex", "Slope", "Intercept"], answer: "Vertex", explanation: "Turning point." },
                { q: "Range of y=|x|?", options: ["y≥0", "All reals", "y≤0"], answer: "y≥0", explanation: "Outputs are nonnegative." },
                { q: "Domain of y=|x|?", options: ["All reals", "Positive only", "Negative only"], answer: "All reals", explanation: "Any x works." },

                { q: "y=|x|+3 shifts?", options: ["Up 3", "Down 3", "Right 3"], answer: "Up 3", explanation: "Vertical shift." },
                { q: "y=|x|-2 shifts?", options: ["Down 2", "Up 2", "Left 2"], answer: "Down 2", explanation: "Vertical shift." },
                { q: "y=|x-1| shifts?", options: ["Right 1", "Left 1", "Up 1"], answer: "Right 1", explanation: "Horizontal shift." },
                { q: "y=|x+4| shifts?", options: ["Left 4", "Right 4", "Up 4"], answer: "Left 4", explanation: "Horizontal shift." },
                { q: "Absolute value graphs are?", options: ["Piecewise", "Linear", "Quadratic"], answer: "Piecewise", explanation: "Two line segments." },

                { q: "The graph contains?", options: ["Straight segments", "Parabolas", "Circles"], answer: "Straight segments", explanation: "V-shape." },
                { q: "Absolute value graphs are useful in?", options: ["Modeling distance", "Only geometry", "Only statistics"], answer: "Modeling distance", explanation: "Distance applications." },
                { q: "The vertex is a?", options: ["Minimum point", "Maximum point", "Root"], answer: "Minimum point", explanation: "Lowest point." },
                { q: "y=-|x| opens?", options: ["Downward", "Upward", "Sideways"], answer: "Downward", explanation: "Reflection." },
                { q: "Absolute value graphs are common in?", options: ["Algebra", "History", "English"], answer: "Algebra", explanation: "Important graph type." }
            ]
        },



        "arithmetic-sequences": {
            title: "Arithmetic Sequences",
            subtitle: "Sequences with a constant difference.",
            body: `
        <p>An arithmetic sequence increases or decreases by the same amount.</p>

        <h2>Example</h2>

        <p>2, 5, 8, 11, 14</p>

        <p>The common difference is 3.</p>
    `,
            questions: [
                { q: "2,5,8,11,... difference?", options: ["3", "2", "5"], answer: "3", explanation: "Add 3 each time." },
                { q: "4,8,12,16,... difference?", options: ["4", "8", "2"], answer: "4", explanation: "Add 4 each time." },
                { q: "10,15,20,... difference?", options: ["5", "10", "15"], answer: "5", explanation: "Add 5." },
                { q: "1,3,5,7,... difference?", options: ["2", "3", "4"], answer: "2", explanation: "Add 2." },
                { q: "6,9,12,... difference?", options: ["3", "6", "9"], answer: "3", explanation: "Add 3." },

                { q: "Next term: 2,5,8,11 ?", options: ["14", "13", "15"], answer: "14", explanation: "Add 3." },
                { q: "Next term: 4,8,12 ?", options: ["16", "18", "20"], answer: "16", explanation: "Add 4." },
                { q: "Next term: 10,15,20 ?", options: ["25", "30", "35"], answer: "25", explanation: "Add 5." },
                { q: "Next term: 1,3,5 ?", options: ["7", "8", "9"], answer: "7", explanation: "Add 2." },
                { q: "Next term: 6,9,12 ?", options: ["15", "18", "21"], answer: "15", explanation: "Add 3." },

                { q: "Arithmetic sequences use?", options: ["Constant difference", "Constant ratio", "No pattern"], answer: "Constant difference", explanation: "Key property." },
                { q: "Difference means?", options: ["Subtract consecutive terms", "Multiply terms", "Divide terms"], answer: "Subtract consecutive terms", explanation: "Find change." },
                { q: "5,10,15,20 is?", options: ["Arithmetic", "Geometric", "Neither"], answer: "Arithmetic", explanation: "Difference 5." },
                { q: "3,6,9,12 is?", options: ["Arithmetic", "Geometric", "Neither"], answer: "Arithmetic", explanation: "Difference 3." },
                { q: "100,90,80 is?", options: ["Arithmetic", "Geometric", "Neither"], answer: "Arithmetic", explanation: "Difference -10." },

                { q: "Common difference can be negative?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Sequences can decrease." },
                { q: "Arithmetic sequences appear in?", options: ["Algebra", "History", "English"], answer: "Algebra", explanation: "Common topic." },
                { q: "The pattern repeats using?", options: ["Addition/Subtraction", "Multiplication only", "Division only"], answer: "Addition/Subtraction", explanation: "Constant difference." },
                { q: "Arithmetic sequences help prepare for?", options: ["Algebra 2", "Only Geometry", "Only Arithmetic"], answer: "Algebra 2", explanation: "Important foundation." },
                { q: "A sequence is?", options: ["Ordered list of numbers", "Graph", "Equation"], answer: "Ordered list of numbers", explanation: "Definition of sequence." }
            ]
        },



        "geometric-sequences": {
            title: "Geometric Sequences",
            subtitle: "Sequences with a constant ratio.",
            body: `
        <p>A geometric sequence multiplies by the same number each time.</p>

        <h2>Example</h2>

        <p>2, 4, 8, 16, 32</p>

        <p>The common ratio is 2.</p>
    `,
            questions: [
                { q: "2,4,8,16 ratio?", options: ["2", "4", "8"], answer: "2", explanation: "Each term doubles." },
                { q: "3,6,12,24 ratio?", options: ["2", "3", "4"], answer: "2", explanation: "Multiply by 2." },
                { q: "5,15,45 ratio?", options: ["3", "5", "9"], answer: "3", explanation: "Multiply by 3." },
                { q: "10,20,40 ratio?", options: ["2", "10", "4"], answer: "2", explanation: "Multiply by 2." },
                { q: "1,2,4,8 ratio?", options: ["2", "4", "8"], answer: "2", explanation: "Multiply by 2." },

                { q: "Next term: 2,4,8,16 ?", options: ["32", "24", "18"], answer: "32", explanation: "Multiply by 2." },
                { q: "Next term: 3,6,12 ?", options: ["24", "18", "15"], answer: "24", explanation: "Multiply by 2." },
                { q: "Next term: 5,15,45 ?", options: ["135", "90", "150"], answer: "135", explanation: "Multiply by 3." },
                { q: "Next term: 10,20,40 ?", options: ["80", "60", "50"], answer: "80", explanation: "Multiply by 2." },
                { q: "Next term: 1,2,4,8 ?", options: ["16", "12", "10"], answer: "16", explanation: "Multiply by 2." },

                { q: "Geometric sequences use?", options: ["Constant ratio", "Constant difference", "No pattern"], answer: "Constant ratio", explanation: "Key property." },
                { q: "Ratio means?", options: ["Divide consecutive terms", "Subtract terms", "Add terms"], answer: "Divide consecutive terms", explanation: "Find multiplier." },
                { q: "2,6,18,54 is?", options: ["Geometric", "Arithmetic", "Neither"], answer: "Geometric", explanation: "Ratio 3." },
                { q: "1,3,9,27 is?", options: ["Geometric", "Arithmetic", "Neither"], answer: "Geometric", explanation: "Ratio 3." },
                { q: "4,8,16,32 is?", options: ["Geometric", "Arithmetic", "Neither"], answer: "Geometric", explanation: "Ratio 2." },

                { q: "Can ratios be fractions?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Example: multiply by 1/2." },
                { q: "Geometric sequences model?", options: ["Exponential growth", "Linear growth", "Circles"], answer: "Exponential growth", explanation: "Repeated multiplication." },
                { q: "Common ratio can be negative?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Signs alternate." },
                { q: "Geometric sequences prepare for?", options: ["Algebra 2", "Only Geometry", "Only Arithmetic"], answer: "Algebra 2", explanation: "Important topic." },
                { q: "A sequence is?", options: ["Ordered list of numbers", "Graph", "Triangle"], answer: "Ordered list of numbers", explanation: "Definition." }
            ]
        },



        "probability-basics": {
            title: "Probability Basics",
            subtitle: "Measure the chance an event occurs.",
            body: `
        <p>Probability measures how likely something is to happen.</p>

        <p>Probability = Favorable Outcomes ÷ Total Outcomes</p>

        <h2>Example</h2>

        <p>Rolling a 6 on a fair die:</p>

        <p>1 favorable outcome out of 6 total outcomes</p>

        <p>P(6)=1/6</p>
    `,
            questions: [
                { q: "Probability ranges from?", options: ["0 to 1", "1 to 10", "-1 to 1"], answer: "0 to 1", explanation: "Probability cannot exceed 1." },
                { q: "Probability of rolling a 6?", options: ["1/6", "1/2", "1/3"], answer: "1/6", explanation: "One favorable outcome." },
                { q: "Probability of heads?", options: ["1/2", "1", "1/4"], answer: "1/2", explanation: "Fair coin." },
                { q: "Probability of impossible event?", options: ["0", "1", "1/2"], answer: "0", explanation: "Impossible means zero chance." },
                { q: "Probability of certain event?", options: ["1", "0", "1/2"], answer: "1", explanation: "Guaranteed." },

                { q: "A die has how many sides?", options: ["6", "8", "10"], answer: "6", explanation: "Standard die." },
                { q: "Probability of rolling odd number?", options: ["1/2", "1/6", "2/3"], answer: "1/2", explanation: "3 odd outcomes out of 6." },
                { q: "Probability of rolling even number?", options: ["1/2", "1/3", "1"], answer: "1/2", explanation: "3 even outcomes out of 6." },
                { q: "Probability of drawing one ace?", options: ["4/52", "1/52", "13/52"], answer: "4/52", explanation: "4 aces in deck." },
                { q: "Probability is a branch of?", options: ["Mathematics", "History", "English"], answer: "Mathematics", explanation: "Math topic." },

                { q: "Probability of tails?", options: ["1/2", "1", "0"], answer: "1/2", explanation: "Fair coin." },
                { q: "Probability uses?", options: ["Fractions", "Triangles", "Graphs only"], answer: "Fractions", explanation: "Often expressed as fractions." },
                { q: "Probability of rolling number less than 7?", options: ["1", "0", "1/2"], answer: "1", explanation: "All outcomes qualify." },
                { q: "Probability of rolling 7 on one die?", options: ["0", "1", "1/6"], answer: "0", explanation: "Impossible." },
                { q: "Total outcomes on die?", options: ["6", "5", "7"], answer: "6", explanation: "Numbers 1-6." },

                { q: "Probability predicts?", options: ["Likelihood", "Area", "Slope"], answer: "Likelihood", explanation: "Chance of event." },
                { q: "More favorable outcomes means?", options: ["Higher probability", "Lower probability", "No change"], answer: "Higher probability", explanation: "More ways to win." },
                { q: "Probability is useful in?", options: ["Science and business", "Only Algebra", "Only Geometry"], answer: "Science and business", explanation: "Many applications." },
                { q: "Probability of drawing red card?", options: ["1/2", "1/4", "1"], answer: "1/2", explanation: "26 red cards out of 52." },
                { q: "Probability helps make?", options: ["Predictions", "Triangles", "Roots"], answer: "Predictions", explanation: "Estimate outcomes." }
            ]
        },


        "statistics-basics": {
            title: "Statistics Basics",
            subtitle: "Analyze and summarize data.",
            body: `
        <p>Statistics helps us understand data.</p>

        <p>Common measures:</p>

        <p>Mean = average</p>
        <p>Median = middle value</p>
        <p>Mode = most common value</p>
        <p>Range = highest - lowest</p>
    `,
            questions: [
                { q: "Mean is?", options: ["Average", "Middle value", "Most common"], answer: "Average", explanation: "Sum divided by count." },
                { q: "Median is?", options: ["Middle value", "Average", "Largest value"], answer: "Middle value", explanation: "Middle after sorting." },
                { q: "Mode is?", options: ["Most common value", "Middle value", "Average"], answer: "Most common value", explanation: "Occurs most often." },
                { q: "Range is?", options: ["Highest-Lowest", "Average", "Middle"], answer: "Highest-Lowest", explanation: "Measure spread." },
                { q: "Mean of 2,4,6?", options: ["4", "6", "2"], answer: "4", explanation: "(2+4+6)/3." },

                { q: "Median of 1,2,3,4,5?", options: ["3", "2", "4"], answer: "3", explanation: "Middle value." },
                { q: "Mode of 2,2,3,4?", options: ["2", "3", "4"], answer: "2", explanation: "Appears most often." },
                { q: "Range of 2,8?", options: ["6", "10", "4"], answer: "6", explanation: "8-2=6." },
                { q: "Statistics studies?", options: ["Data", "Triangles", "Roots"], answer: "Data", explanation: "Primary purpose." },
                { q: "Mean of 5,5,5?", options: ["5", "15", "0"], answer: "5", explanation: "Average is 5." },

                { q: "Median of 10,20,30?", options: ["20", "10", "30"], answer: "20", explanation: "Middle value." },
                { q: "Mode of 7,7,7,8?", options: ["7", "8", "None"], answer: "7", explanation: "Most frequent." },
                { q: "Range of 3,9?", options: ["6", "12", "3"], answer: "6", explanation: "9-3=6." },
                { q: "Mean uses?", options: ["All values", "One value", "Middle value only"], answer: "All values", explanation: "Average uses all data." },
                { q: "Statistics helps?", options: ["Analyze data", "Factor polynomials", "Graph circles"], answer: "Analyze data", explanation: "Primary goal." },

                { q: "Mean is sensitive to?", options: ["Outliers", "Nothing", "Order"], answer: "Outliers", explanation: "Extreme values affect mean." },
                { q: "Median is resistant to?", options: ["Outliers", "Addition", "Subtraction"], answer: "Outliers", explanation: "Middle value less affected." },
                { q: "Statistics is used in?", options: ["Science and business", "Only Algebra", "Only Geometry"], answer: "Science and business", explanation: "Many applications." },
                { q: "Data can be summarized using?", options: ["Mean Median Mode", "Only Mean", "Only Range"], answer: "Mean Median Mode", explanation: "Common measures." },
                { q: "Statistics is part of?", options: ["Mathematics", "History", "English"], answer: "Mathematics", explanation: "Math field." }
            ]
        },



        "scatter-plots": {
            title: "Scatter Plots",
            subtitle: "Display relationships between two variables.",
            body: `
        <p>A scatter plot shows pairs of data points.</p>

        <p>Each point represents two related values.</p>

        <h2>Example</h2>

        <p>Hours Studied vs Test Score</p>

        <p>Scatter plots help reveal patterns and trends.</p>
    `,
            questions: [
                { q: "A scatter plot displays?", options: ["Data pairs", "Triangles", "Fractions"], answer: "Data pairs", explanation: "Each point represents two values." },
                { q: "Each point represents?", options: ["One data pair", "One equation", "One line"], answer: "One data pair", explanation: "An x-value and y-value." },
                { q: "Scatter plots help identify?", options: ["Patterns", "Roots", "Factors"], answer: "Patterns", explanation: "They reveal trends." },
                { q: "Scatter plots use?", options: ["Coordinate plane", "Number line", "Table only"], answer: "Coordinate plane", explanation: "Points are graphed." },
                { q: "Points close together suggest?", options: ["Pattern", "Nothing", "Error"], answer: "Pattern", explanation: "Data may be related." },

                { q: "Scatter plots compare?", options: ["Two variables", "One variable", "Three variables"], answer: "Two variables", explanation: "Typically x and y." },
                { q: "Each point has?", options: ["x and y values", "Only x", "Only y"], answer: "x and y values", explanation: "Coordinates." },
                { q: "Scatter plots can show?", options: ["Trends", "Only averages", "Only medians"], answer: "Trends", explanation: "Relationship between variables." },
                { q: "Data points are shown as?", options: ["Dots", "Lines", "Bars"], answer: "Dots", explanation: "Scatter plots use dots." },
                { q: "Scatter plots are used in?", options: ["Statistics", "Only geometry", "Only algebra"], answer: "Statistics", explanation: "Common statistical tool." },

                { q: "More study hours often means?", options: ["Higher score", "Lower score", "No score"], answer: "Higher score", explanation: "Positive relationship example." },
                { q: "Scatter plots help predict?", options: ["Relationships", "Factors", "Roots"], answer: "Relationships", explanation: "Patterns can be analyzed." },
                { q: "Data visualization means?", options: ["Showing data graphically", "Factoring", "Solving equations"], answer: "Showing data graphically", explanation: "Visual representation." },
                { q: "Scatter plots are useful for?", options: ["Finding trends", "Finding GCF", "Completing square"], answer: "Finding trends", explanation: "Main purpose." },
                { q: "A scatter plot can suggest?", options: ["Correlation", "Slope only", "Area"], answer: "Correlation", explanation: "Relationship strength." },

                { q: "Scatter plots are part of?", options: ["Statistics", "Calculus", "Geometry"], answer: "Statistics", explanation: "Data analysis." },
                { q: "Each plotted dot is called?", options: ["Data point", "Factor", "Vertex"], answer: "Data point", explanation: "Represents an observation." },
                { q: "Scatter plots can reveal?", options: ["Outliers", "Only averages", "Only medians"], answer: "Outliers", explanation: "Unusual points stand out." },
                { q: "Scatter plots help businesses?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Used for analysis." },
                { q: "Scatter plots help scientists?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Used to study relationships." }
            ]
        },


        "correlation": {
            title: "Correlation",
            subtitle: "Measure relationships between variables.",
            body: `
        <p>Correlation describes how two variables are related.</p>

        <p>Positive correlation: both increase together.</p>

        <p>Negative correlation: one increases while the other decreases.</p>

        <p>No correlation: no clear pattern.</p>
    `,
            questions: [
                { q: "Positive correlation means?", options: ["Both increase together", "One increases, one decreases", "No relationship"], answer: "Both increase together", explanation: "Move in same direction." },
                { q: "Negative correlation means?", options: ["One up, one down", "Both up", "No pattern"], answer: "One up, one down", explanation: "Move in opposite directions." },
                { q: "No correlation means?", options: ["No clear pattern", "Strong relationship", "Perfect line"], answer: "No clear pattern", explanation: "Variables unrelated." },
                { q: "Study hours and grades often show?", options: ["Positive correlation", "Negative correlation", "No correlation"], answer: "Positive correlation", explanation: "More study often means higher grades." },
                { q: "Temperature and heating bill often show?", options: ["Negative correlation", "Positive correlation", "No correlation"], answer: "Negative correlation", explanation: "Higher temperature, lower bill." },

                { q: "Correlation describes?", options: ["Relationship", "Equation", "Factor"], answer: "Relationship", explanation: "Connection between variables." },
                { q: "Perfect positive correlation forms?", options: ["Straight upward line", "Circle", "Parabola"], answer: "Straight upward line", explanation: "Strongest positive relationship." },
                { q: "Perfect negative correlation forms?", options: ["Straight downward line", "Circle", "Parabola"], answer: "Straight downward line", explanation: "Strongest negative relationship." },
                { q: "Correlation implies causation?", options: ["No", "Always", "Usually"], answer: "No", explanation: "Important statistics rule." },
                { q: "Strong correlation means?", options: ["Clear relationship", "No relationship", "Random points"], answer: "Clear relationship", explanation: "Pattern is visible." },

                { q: "Weak correlation means?", options: ["Loose relationship", "Perfect line", "No data"], answer: "Loose relationship", explanation: "Relationship exists but is weaker." },
                { q: "Correlation is studied using?", options: ["Scatter plots", "Triangles", "Radicals"], answer: "Scatter plots", explanation: "Visual relationship." },
                { q: "Positive correlation slopes?", options: ["Upward", "Downward", "Flat"], answer: "Upward", explanation: "Increasing trend." },
                { q: "Negative correlation slopes?", options: ["Downward", "Upward", "Flat"], answer: "Downward", explanation: "Decreasing trend." },
                { q: "Random scatter suggests?", options: ["No correlation", "Positive", "Negative"], answer: "No correlation", explanation: "No trend visible." },

                { q: "Correlation is part of?", options: ["Statistics", "Geometry", "Trigonometry"], answer: "Statistics", explanation: "Data analysis." },
                { q: "Correlation helps identify?", options: ["Patterns", "Roots", "Factoring"], answer: "Patterns", explanation: "Relationship analysis." },
                { q: "Correlation is useful in?", options: ["Business and science", "Only Algebra", "Only Geometry"], answer: "Business and science", explanation: "Widely used." },
                { q: "Positive correlation example?", options: ["Hours studied and grades", "Temperature and heating bill", "Random numbers"], answer: "Hours studied and grades", explanation: "Generally move together." },
                { q: "Correlation strength measures?", options: ["How closely variables relate", "Area", "Volume"], answer: "How closely variables relate", explanation: "Relationship strength." }
            ]
        },


        "regression-lines": {
            title: "Regression Lines",
            subtitle: "Find the line of best fit.",
            body: `
        <p>A regression line models the trend in data.</p>

        <p>It is often called the line of best fit.</p>

        <p>The line helps make predictions.</p>

        <h2>Example</h2>

        <p>Study hours and test scores may have a regression line.</p>
    `,
            questions: [
                { q: "A regression line is also called?", options: ["Line of best fit", "Parabola", "Histogram"], answer: "Line of best fit", explanation: "Common name." },
                { q: "Regression lines help?", options: ["Make predictions", "Factor equations", "Find roots"], answer: "Make predictions", explanation: "Main purpose." },
                { q: "Regression lines summarize?", options: ["Data trends", "Triangles", "Functions"], answer: "Data trends", explanation: "Overall pattern." },
                { q: "Regression lines are used with?", options: ["Scatter plots", "Circles", "Radicals"], answer: "Scatter plots", explanation: "Common combination." },
                { q: "Best fit means?", options: ["Closest to data overall", "Passes every point", "Random line"], answer: "Closest to data overall", explanation: "Represents trend." },

                { q: "Regression is part of?", options: ["Statistics", "Geometry", "Calculus"], answer: "Statistics", explanation: "Data analysis." },
                { q: "Line of best fit helps estimate?", options: ["Future values", "Factors", "Roots"], answer: "Future values", explanation: "Prediction." },
                { q: "Regression lines model?", options: ["Relationships", "Triangles", "Quadratics"], answer: "Relationships", explanation: "Between variables." },
                { q: "Regression lines often appear?", options: ["On scatter plots", "On circles", "On radicals"], answer: "On scatter plots", explanation: "Data analysis." },
                { q: "A positive trend gives?", options: ["Upward regression line", "Downward line", "No line"], answer: "Upward regression line", explanation: "Positive correlation." },

                { q: "A negative trend gives?", options: ["Downward regression line", "Upward line", "Flat line"], answer: "Downward regression line", explanation: "Negative correlation." },
                { q: "Regression lines help businesses?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Forecasting." },
                { q: "Regression lines help scientists?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Modeling data." },
                { q: "Line of best fit is usually?", options: ["Approximate", "Exact through every point", "Random"], answer: "Approximate", explanation: "Represents trend." },
                { q: "Predictions from regression are?", options: ["Estimates", "Guarantees", "Proofs"], answer: "Estimates", explanation: "Not exact." },

                { q: "Regression lines are useful for?", options: ["Forecasting", "Factoring", "Geometry proofs"], answer: "Forecasting", explanation: "Predict outcomes." },
                { q: "A regression line follows?", options: ["General trend", "Every point exactly", "No points"], answer: "General trend", explanation: "Overall pattern." },
                { q: "Regression analysis studies?", options: ["Relationships", "Triangles", "Radicals"], answer: "Relationships", explanation: "Core purpose." },
                { q: "The line of best fit minimizes?", options: ["Overall error", "Area", "Volume"], answer: "Overall error", explanation: "Closest overall fit." },
                { q: "Regression lines are one of the most important tools in?", options: ["Statistics", "Geometry", "Trigonometry"], answer: "Statistics", explanation: "Widely used." }
            ]
        },



        "review-linear-equations": {
            title: "Review: Linear Equations",
            subtitle: "Master the core concepts of linear equations.",
            body: `
        <p>Linear equations create straight lines.</p>

        <p>They have a constant rate of change.</p>

        <p>Examples:</p>

        <p>x + 5 = 10</p>

        <p>y = 2x + 3</p>

        <p>Linear equations are one of the most important Algebra 1 topics.</p>
    `,
            questions: [
                { q: "x+5=10, x=?", options: ["5", "10", "15"], answer: "5", explanation: "Subtract 5." },
                { q: "2x=12, x=?", options: ["6", "12", "24"], answer: "6", explanation: "Divide by 2." },
                { q: "3x+4=19, x=?", options: ["5", "6", "7"], answer: "5", explanation: "Subtract 4 then divide by 3." },
                { q: "Slope measures?", options: ["Rate of change", "Area", "Volume"], answer: "Rate of change", explanation: "Slope = change in y over change in x." },
                { q: "Linear graphs are?", options: ["Straight lines", "Parabolas", "Circles"], answer: "Straight lines", explanation: "Definition of linear." },

                { q: "y=mx+b is called?", options: ["Slope-intercept form", "Standard form", "Factored form"], answer: "Slope-intercept form", explanation: "Most common linear form." },
                { q: "In y=2x+3, slope=?", options: ["2", "3", "5"], answer: "2", explanation: "Coefficient of x." },
                { q: "In y=2x+3, y-intercept=?", options: ["3", "2", "0"], answer: "3", explanation: "Constant term." },
                { q: "Parallel lines have same?", options: ["Slope", "Intercept", "Length"], answer: "Slope", explanation: "Same slope." },
                { q: "Perpendicular lines have?", options: ["Negative reciprocal slopes", "Same slopes", "Zero slopes"], answer: "Negative reciprocals", explanation: "Perpendicular rule." },

                { q: "4x=20, x=?", options: ["5", "4", "20"], answer: "5", explanation: "Divide by 4." },
                { q: "x-7=10, x=?", options: ["17", "3", "70"], answer: "17", explanation: "Add 7." },
                { q: "5x+5=30, x=?", options: ["5", "6", "7"], answer: "5", explanation: "Subtract then divide." },
                { q: "Linear functions have constant?", options: ["Rate of change", "Area", "Radius"], answer: "Rate of change", explanation: "Constant slope." },
                { q: "Graph of y=5?", options: ["Horizontal line", "Vertical line", "Parabola"], answer: "Horizontal line", explanation: "Constant y." },

                { q: "Graph of x=5?", options: ["Vertical line", "Horizontal line", "Parabola"], answer: "Vertical line", explanation: "Constant x." },
                { q: "Linear equations are degree?", options: ["1", "2", "3"], answer: "1", explanation: "Highest exponent is 1." },
                { q: "A solution makes equation?", options: ["True", "False", "Undefined"], answer: "True", explanation: "Definition of solution." },
                { q: "Linear equations appear in?", options: ["Every math course", "Only Algebra 1", "Only Geometry"], answer: "Every math course", explanation: "Foundational topic." },
                { q: "Linear equations are one of the most important Algebra 1 topics?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Core skill." }
            ]
        },



        "review-quadratics": {
            title: "Review: Quadratics",
            subtitle: "Master quadratic equations and graphs.",
            body: `
        <p>Quadratics contain x².</p>

        <p>They graph as parabolas.</p>

        <p>Common solving methods:</p>

        <p>Factoring</p>
        <p>Completing the Square</p>
        <p>Quadratic Formula</p>
    `,
            questions: [
                { q: "Quadratics contain?", options: ["x²", "x³", "No variable"], answer: "x²", explanation: "Degree 2." },
                { q: "Quadratics graph as?", options: ["Parabolas", "Lines", "Circles"], answer: "Parabolas", explanation: "Characteristic shape." },
                { q: "x²-9 factors to?", options: ["(x-3)(x+3)", "(x-9)(x+1)", "x(x-9)"], answer: "(x-3)(x+3)", explanation: "Difference of squares." },
                { q: "Solutions of x²-9=0?", options: ["±3", "3", "9"], answer: "±3", explanation: "Square roots." },
                { q: "Vertex of y=x²?", options: ["(0,0)", "(1,1)", "(-1,-1)"], answer: "(0,0)", explanation: "Origin." },

                { q: "Positive x² coefficient opens?", options: ["Up", "Down", "Sideways"], answer: "Up", explanation: "Positive parabola." },
                { q: "Negative x² coefficient opens?", options: ["Down", "Up", "Flat"], answer: "Down", explanation: "Reflection." },
                { q: "Quadratic Formula contains?", options: ["Square root", "Cube root", "Log"], answer: "Square root", explanation: "Discriminant." },
                { q: "Discriminant=?", options: ["b²-4ac", "mx+b", "x²+y²"], answer: "b²-4ac", explanation: "Quadratic formula component." },
                { q: "Positive discriminant gives?", options: ["Two real roots", "One root", "No real roots"], answer: "Two real roots", explanation: "Positive under radical." },

                { q: "Zero discriminant gives?", options: ["One root", "Two roots", "No roots"], answer: "One root", explanation: "Repeated root." },
                { q: "Negative discriminant gives?", options: ["Complex roots", "One root", "Two real roots"], answer: "Complex roots", explanation: "No real solutions." },
                { q: "Factoring reverses?", options: ["Multiplication", "Division", "Graphing"], answer: "Multiplication", explanation: "Reverse process." },
                { q: "Quadratic degree?", options: ["2", "1", "3"], answer: "2", explanation: "Highest exponent." },
                { q: "Roots are also called?", options: ["Solutions", "Slopes", "Vertices"], answer: "Solutions", explanation: "Solve the equation." },

                { q: "Parabola symmetry line?", options: ["Axis of symmetry", "y-axis always", "x-axis"], answer: "Axis of symmetry", explanation: "Splits parabola." },
                { q: "x²+6x+9 factors to?", options: ["(x+3)²", "(x+9)²", "(x+6)²"], answer: "(x+3)²", explanation: "Perfect square." },
                { q: "Completing the square creates?", options: ["Perfect square trinomial", "Circle", "Line"], answer: "Perfect square trinomial", explanation: "Main goal." },
                { q: "Quadratics are used in?", options: ["Physics and engineering", "Only Algebra", "Only Geometry"], answer: "Physics and engineering", explanation: "Many applications." },
                { q: "Quadratics are a major Algebra 1 topic?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Essential skill." }
            ]
        },



        "review-functions": {
            title: "Review: Functions",
            subtitle: "Master functions, notation, and graphs.",
            body: `
        <p>A function assigns exactly one output to each input.</p>

        <p>Functions connect x-values to y-values.</p>

        <p>Functions are one of the most important ideas in mathematics.</p>
    `,
            questions: [
                { q: "A function gives?", options: ["One output per input", "Many outputs", "No outputs"], answer: "One output per input", explanation: "Definition." },
                { q: "f(x)=x+2, f(3)=?", options: ["5", "3", "1"], answer: "5", explanation: "3+2=5." },
                { q: "f(x)=2x, f(5)=?", options: ["10", "5", "7"], answer: "10", explanation: "2×5=10." },
                { q: "Domain means?", options: ["Inputs", "Outputs", "Roots"], answer: "Inputs", explanation: "Input values." },
                { q: "Range means?", options: ["Outputs", "Inputs", "Slopes"], answer: "Outputs", explanation: "Output values." },

                { q: "f(x)=x², f(4)=?", options: ["16", "8", "4"], answer: "16", explanation: "4²=16." },
                { q: "Functions connect?", options: ["Inputs and outputs", "Triangles and circles", "Factors and roots"], answer: "Inputs and outputs", explanation: "Core idea." },
                { q: "Function notation uses?", options: ["f(x)", "mx+b", "a²+b²"], answer: "f(x)", explanation: "Standard notation." },
                { q: "A graph that passes the vertical line test is?", options: ["Function", "Not function", "Circle"], answer: "Function", explanation: "One y per x." },
                { q: "Piecewise functions have?", options: ["Multiple rules", "No rules", "One point"], answer: "Multiple rules", explanation: "Different intervals." },

                { q: "Absolute value function graph?", options: ["V-shape", "U-shape", "Line"], answer: "V-shape", explanation: "Characteristic graph." },
                { q: "Linear function graph?", options: ["Line", "Parabola", "Circle"], answer: "Line", explanation: "Straight line." },
                { q: "Quadratic function graph?", options: ["Parabola", "Line", "Circle"], answer: "Parabola", explanation: "Degree 2." },
                { q: "Transformations move?", options: ["Graphs", "Roots", "Factors"], answer: "Graphs", explanation: "Graph changes." },
                { q: "Adding outside a function shifts?", options: ["Vertically", "Horizontally", "Neither"], answer: "Vertically", explanation: "Changes y-values." },

                { q: "Changing inside shifts?", options: ["Horizontally", "Vertically", "Neither"], answer: "Horizontally", explanation: "Changes x-values." },
                { q: "Functions appear in?", options: ["Every advanced math course", "Only Algebra 1", "Only Geometry"], answer: "Every advanced math course", explanation: "Fundamental concept." },
                { q: "A function can be represented by?", options: ["Equation, table, graph", "Only equation", "Only graph"], answer: "Equation, table, graph", explanation: "Multiple forms." },
                { q: "Functions model?", options: ["Relationships", "Triangles", "Proofs"], answer: "Relationships", explanation: "Variables connected." },
                { q: "Functions are one of the most important ideas in mathematics?", options: ["Yes", "No", "Never"], answer: "Yes", explanation: "Foundational concept." }
            ]
        },



        "algebra-1-final-exam": {
            title: "Algebra 1 Final Exam",
            subtitle: "Comprehensive Algebra 1 Mastery Test",
            body: `
        <p>Congratulations on reaching the end of Algebra 1.</p>

        <p>This final exam reviews equations, inequalities, functions,
        graphing, quadratics, exponents, radicals, probability,
        statistics, and sequences.</p>

        <p>Passing Score: 70%</p>
    `,

            questions: [

                { q: "x + 5 = 12", options: ["5", "7", "12"], answer: "7", explanation: "Subtract 5." },
                { q: "2x = 18", options: ["8", "9", "18"], answer: "9", explanation: "Divide by 2." },
                { q: "3x + 4 = 19", options: ["5", "6", "7"], answer: "5", explanation: "Subtract 4 then divide by 3." },
                { q: "4x - 8 = 16", options: ["4", "6", "8"], answer: "6", explanation: "Add 8 then divide by 4." },
                { q: "5x = 50", options: ["5", "10", "15"], answer: "10", explanation: "Divide by 5." },

                { q: "Slope of y=2x+3?", options: ["2", "3", "5"], answer: "2", explanation: "Coefficient of x." },
                { q: "Y-intercept of y=2x+3?", options: ["2", "3", "5"], answer: "3", explanation: "Constant term." },
                { q: "Parallel lines have same?", options: ["Slope", "Intercept", "Length"], answer: "Slope", explanation: "Same slope." },
                { q: "Perpendicular slopes are?", options: ["Negative reciprocals", "Equal", "Zero"], answer: "Negative reciprocals", explanation: "Perpendicular rule." },
                { q: "Linear graphs are?", options: ["Lines", "Parabolas", "Circles"], answer: "Lines", explanation: "Straight lines." },

                { q: "f(x)=x+2, f(5)=?", options: ["5", "7", "10"], answer: "7", explanation: "5+2." },
                { q: "f(x)=2x, f(4)=?", options: ["6", "8", "10"], answer: "8", explanation: "2×4." },
                { q: "Domain means?", options: ["Inputs", "Outputs", "Roots"], answer: "Inputs", explanation: "Input values." },
                { q: "Range means?", options: ["Outputs", "Inputs", "Slope"], answer: "Outputs", explanation: "Output values." },
                { q: "Function notation?", options: ["f(x)", "mx+b", "x²"], answer: "f(x)", explanation: "Standard notation." },

                { q: "x²-9 factors to?", options: ["(x-3)(x+3)", "(x-9)(x+1)", "x(x-9)"], answer: "(x-3)(x+3)", explanation: "Difference of squares." },
                { q: "Solutions of x²-9=0?", options: ["±3", "3", "9"], answer: "±3", explanation: "Square roots." },
                { q: "Quadratics graph as?", options: ["Parabolas", "Lines", "Circles"], answer: "Parabolas", explanation: "Degree 2 graph." },
                { q: "Vertex of y=x²?", options: ["(0,0)", "(1,1)", "(-1,-1)"], answer: "(0,0)", explanation: "Origin." },
                { q: "Positive x² coefficient opens?", options: ["Up", "Down", "Sideways"], answer: "Up", explanation: "Standard parabola." },

                { q: "4²=?", options: ["8", "16", "32"], answer: "16", explanation: "4×4." },
                { q: "2³=?", options: ["6", "8", "16"], answer: "8", explanation: "2×2×2." },
                { q: "10²=?", options: ["20", "100", "1000"], answer: "100", explanation: "10×10." },
                { q: "Scientific notation of 1000?", options: ["1×10³", "10×10²", "100×10"], answer: "1×10³", explanation: "Scientific notation." },
                { q: "Scientific notation of 0.001?", options: ["1×10⁻³", "1×10³", "10⁻¹"], answer: "1×10⁻³", explanation: "Move decimal 3 places." },

                { q: "|-5|=?", options: ["5", "-5", "0"], answer: "5", explanation: "Distance from zero." },
                { q: "|8|=?", options: ["8", "-8", "16"], answer: "8", explanation: "Positive value." },
                { q: "Absolute value is always?", options: ["Nonnegative", "Negative", "Zero"], answer: "Nonnegative", explanation: "Distance." },
                { q: "Graph of y=|x|?", options: ["V", "U", "Line"], answer: "V", explanation: "Absolute value graph." },
                { q: "Vertex of y=|x|?", options: ["(0,0)", "(1,1)", "(0,1)"], answer: "(0,0)", explanation: "Origin." },

                { q: "√25=?", options: ["5", "25", "10"], answer: "5", explanation: "5×5." },
                { q: "√49=?", options: ["7", "14", "49"], answer: "7", explanation: "7×7." },
                { q: "√64=?", options: ["8", "16", "32"], answer: "8", explanation: "8×8." },
                { q: "√81=?", options: ["9", "18", "27"], answer: "9", explanation: "9×9." },
                { q: "√100=?", options: ["10", "20", "100"], answer: "10", explanation: "10×10." },

                { q: "2,5,8,11 is?", options: ["Arithmetic", "Geometric", "Neither"], answer: "Arithmetic", explanation: "Difference 3." },
                { q: "2,4,8,16 is?", options: ["Geometric", "Arithmetic", "Neither"], answer: "Geometric", explanation: "Ratio 2." },
                { q: "Arithmetic sequences use?", options: ["Difference", "Ratio", "Roots"], answer: "Difference", explanation: "Constant difference." },
                { q: "Geometric sequences use?", options: ["Ratio", "Difference", "Roots"], answer: "Ratio", explanation: "Constant ratio." },
                { q: "Next term: 3,6,12,24 ?", options: ["48", "36", "30"], answer: "48", explanation: "Multiply by 2." },

                { q: "Probability of heads?", options: ["1/2", "1", "0"], answer: "1/2", explanation: "Fair coin." },
                { q: "Probability of rolling a 6?", options: ["1/6", "1/2", "1/3"], answer: "1/6", explanation: "One favorable outcome." },
                { q: "Probability of impossible event?", options: ["0", "1", "1/2"], answer: "0", explanation: "Impossible." },
                { q: "Probability of certain event?", options: ["1", "0", "1/2"], answer: "1", explanation: "Guaranteed." },
                { q: "Probability measures?", options: ["Likelihood", "Slope", "Area"], answer: "Likelihood", explanation: "Chance." },

                { q: "Mean means?", options: ["Average", "Middle", "Most common"], answer: "Average", explanation: "Sum divided by count." },
                { q: "Median means?", options: ["Middle value", "Average", "Range"], answer: "Middle value", explanation: "Middle after sorting." },
                { q: "Mode means?", options: ["Most common", "Middle", "Average"], answer: "Most common", explanation: "Appears most." },
                { q: "Range means?", options: ["Highest-Lowest", "Average", "Middle"], answer: "Highest-Lowest", explanation: "Spread." },
                { q: "Statistics studies?", options: ["Data", "Triangles", "Functions"], answer: "Data", explanation: "Data analysis." },

                { q: "Scatter plots show?", options: ["Relationships", "Roots", "Factors"], answer: "Relationships", explanation: "Data patterns." },
                { q: "Positive correlation means?", options: ["Both increase together", "Opposite directions", "No pattern"], answer: "Both increase together", explanation: "Positive trend." },
                { q: "Negative correlation means?", options: ["One up one down", "Both increase", "No trend"], answer: "One up one down", explanation: "Negative trend." },
                { q: "Line of best fit is called?", options: ["Regression line", "Slope line", "Axis"], answer: "Regression line", explanation: "Statistics term." },
                { q: "Regression lines help?", options: ["Make predictions", "Factor equations", "Graph circles"], answer: "Make predictions", explanation: "Forecast trends." }
            ]
        }


    }
};

