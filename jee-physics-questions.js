/* =========================================================
   BUILDBRIGHT JEE PHYSICS QUESTION BANK
   ========================================================= */

const jeePhysicsQuestions = {

    Kinematics: {

        /* =================================================
           CHAPTER PRACTICE
           ================================================= */

        practice: [

            {
                id: "kin-p-001",
                topic: "Displacement",
                difficulty: "Foundation",

                question:
                    "A particle moves 8 m east and then 3 m west. What is its displacement?",

                options: [
                    "11 m east",
                    "5 m east",
                    "5 m west",
                    "11 m west"
                ],

                answer: 1,

                explanation:
                    "Take east as positive. The displacement is +8 m − 3 m = +5 m, so the particle is displaced 5 m east."
            },


            {
                id: "kin-p-002",
                topic: "Distance & Displacement",
                difficulty: "Foundation",

                question:
                    "A runner completes one full 400 m lap and stops at the starting point. What are the distance and displacement?",

                options: [
                    "400 m and 400 m",
                    "0 m and 400 m",
                    "400 m and 0 m",
                    "0 m and 0 m"
                ],

                answer: 2,

                explanation:
                    "Distance is the complete path traveled, so it is 400 m. The initial and final positions are identical, so displacement is 0 m."
            },


            {
                id: "kin-p-003",
                topic: "Average Velocity",
                difficulty: "Foundation",

                question:
                    "A car moves 60 m east in 5 s and then 20 m west in 5 s. What is its average velocity?",

                options: [
                    "4 m/s east",
                    "8 m/s east",
                    "4 m/s west",
                    "6 m/s east"
                ],

                answer: 0,

                explanation:
                    "Net displacement is 60 − 20 = 40 m east. Total time is 10 s. Average velocity = 40/10 = 4 m/s east."
            },


            {
                id: "kin-p-004",
                topic: "Average Speed",
                difficulty: "Medium",

                question:
                    "A particle travels equal distances at 30 m/s and 60 m/s. What is its average speed?",

                options: [
                    "40 m/s",
                    "45 m/s",
                    "50 m/s",
                    "90 m/s"
                ],

                answer: 0,

                explanation:
                    "For equal distances, average speed = 2v₁v₂/(v₁+v₂). Therefore 2(30)(60)/(30+60) = 40 m/s."
            },


            {
                id: "kin-p-005",
                topic: "Acceleration",
                difficulty: "Foundation",

                question:
                    "The velocity of a car increases from 5 m/s to 25 m/s in 4 s. What is its average acceleration?",

                options: [
                    "4 m/s²",
                    "5 m/s²",
                    "6 m/s²",
                    "20 m/s²"
                ],

                answer: 1,

                explanation:
                    "Average acceleration = change in velocity / time = (25 − 5)/4 = 5 m/s²."
            },


            {
                id: "kin-p-006",
                topic: "Equations of Motion",
                difficulty: "Medium",

                question:
                    "A body starts from rest and accelerates uniformly at 3 m/s² for 4 s. What distance does it travel?",

                options: [
                    "12 m",
                    "18 m",
                    "24 m",
                    "48 m"
                ],

                answer: 2,

                explanation:
                    "Using s = ut + ½at² with u = 0: s = ½(3)(4²) = 24 m."
            },


            {
                id: "kin-p-007",
                topic: "Equations of Motion",
                difficulty: "Medium",

                question:
                    "A particle moving at 10 m/s accelerates uniformly at 2 m/s² for 5 s. What is its final velocity?",

                options: [
                    "12 m/s",
                    "15 m/s",
                    "20 m/s",
                    "25 m/s"
                ],

                answer: 2,

                explanation:
                    "Using v = u + at: v = 10 + (2)(5) = 20 m/s."
            },


            {
                id: "kin-p-008",
                topic: "Motion Graphs",
                difficulty: "Medium",

                question:
                    "What does the slope of a velocity-time graph represent?",

                options: [
                    "Displacement",
                    "Acceleration",
                    "Distance",
                    "Position"
                ],

                answer: 1,

                explanation:
                    "Acceleration is the rate of change of velocity with time, so it is represented by the slope of a velocity-time graph."
            },


            {
                id: "kin-p-009",
                topic: "Motion Graphs",
                difficulty: "Medium",

                question:
                    "What does the area under a velocity-time graph represent?",

                options: [
                    "Acceleration",
                    "Speed",
                    "Displacement",
                    "Force"
                ],

                answer: 2,

                explanation:
                    "The signed area under a velocity-time graph over a time interval gives displacement."
            },


            {
                id: "kin-p-010",
                topic: "Vertical Motion",
                difficulty: "JEE Level",

                question:
                    "A ball is thrown vertically upward with a speed of 30 m/s. Taking g = 10 m/s², how long does it take to reach maximum height?",

                options: [
                    "1 s",
                    "2 s",
                    "3 s",
                    "6 s"
                ],

                answer: 2,

                explanation:
                    "At maximum height the velocity is zero. Using v = u + at: 0 = 30 − 10t, giving t = 3 s."
            }

        ],


        /* =================================================
           CHAPTER TEST
           ================================================= */

        test: [

            {
                id: "kin-t-001",
                topic: "Displacement",

                question:
                    "A particle moves 10 m east, 6 m west and then 4 m east. What is its displacement?",

                options: [
                    "0 m",
                    "8 m east",
                    "20 m east",
                    "12 m east"
                ],

                answer: 1,

                explanation:
                    "Taking east as positive, displacement = 10 − 6 + 4 = 8 m east."
            },


            {
                id: "kin-t-002",
                topic: "Average Velocity",

                question:
                    "A particle moves from x = 5 m to x = 35 m in 6 s. What is its average velocity?",

                options: [
                    "5 m/s",
                    "6 m/s",
                    "30 m/s",
                    "40 m/s"
                ],

                answer: 0,

                explanation:
                    "Displacement = 35 − 5 = 30 m. Average velocity = 30/6 = 5 m/s."
            },


            {
                id: "kin-t-003",
                topic: "Average Speed",

                question:
                    "A car travels 120 km at 60 km/h and another 120 km at 40 km/h. What is the average speed for the complete journey?",

                options: [
                    "45 km/h",
                    "48 km/h",
                    "50 km/h",
                    "52 km/h"
                ],

                answer: 1,

                explanation:
                    "The distances are equal, so average speed = 2v₁v₂/(v₁+v₂) = 2(60)(40)/100 = 48 km/h."
            },


            {
                id: "kin-t-004",
                topic: "Acceleration",

                question:
                    "A particle has velocity +12 m/s and acceleration −3 m/s². What is happening to its speed at that instant?",

                options: [
                    "It is increasing",
                    "It is decreasing",
                    "It must be zero",
                    "It remains constant"
                ],

                answer: 1,

                explanation:
                    "Velocity and acceleration have opposite signs, so acceleration opposes the motion and the speed decreases."
            },


            {
                id: "kin-t-005",
                topic: "Equations of Motion",

                question:
                    "A body starts from rest with constant acceleration 5 m/s². What is its velocity after 6 s?",

                options: [
                    "11 m/s",
                    "25 m/s",
                    "30 m/s",
                    "36 m/s"
                ],

                answer: 2,

                explanation:
                    "Using v = u + at with u = 0: v = 5 × 6 = 30 m/s."
            },


            {
                id: "kin-t-006",
                topic: "Equations of Motion",

                question:
                    "A car moving at 20 m/s comes to rest uniformly in 5 s. What is its acceleration?",

                options: [
                    "−4 m/s²",
                    "4 m/s²",
                    "−5 m/s²",
                    "5 m/s²"
                ],

                answer: 0,

                explanation:
                    "a = (v − u)/t = (0 − 20)/5 = −4 m/s²."
            },


            {
                id: "kin-t-007",
                topic: "Displacement",

                question:
                    "A particle starts from rest and accelerates uniformly at 2 m/s². How far does it travel in 5 s?",

                options: [
                    "10 m",
                    "20 m",
                    "25 m",
                    "50 m"
                ],

                answer: 2,

                explanation:
                    "s = ut + ½at² = 0 + ½(2)(25) = 25 m."
            },


            {
                id: "kin-t-008",
                topic: "Motion Graphs",

                question:
                    "A horizontal line on a velocity-time graph above the time axis represents:",

                options: [
                    "Constant positive velocity",
                    "Constant positive acceleration",
                    "Increasing velocity",
                    "Zero velocity"
                ],

                answer: 0,

                explanation:
                    "A horizontal velocity-time graph has zero slope, meaning zero acceleration. Above the axis means velocity is positive."
            },


            {
                id: "kin-t-009",
                topic: "Motion Graphs",

                question:
                    "A velocity-time graph forms a triangle with base 8 s and height 12 m/s. What displacement is represented by the triangle?",

                options: [
                    "20 m",
                    "48 m",
                    "96 m",
                    "6 m"
                ],

                answer: 1,

                explanation:
                    "Displacement equals the area under the velocity-time graph. Triangle area = ½ × 8 × 12 = 48 m."
            },


            {
                id: "kin-t-010",
                topic: "Vertical Motion",

                question:
                    "A ball is thrown vertically upward at 40 m/s. Taking g = 10 m/s², what maximum height does it reach above the launch point?",

                options: [
                    "40 m",
                    "60 m",
                    "80 m",
                    "160 m"
                ],

                answer: 2,

                explanation:
                    "At maximum height v = 0. Using v² = u² + 2as: 0 = 1600 − 20s, so s = 80 m."
            }

        ]

    }

};