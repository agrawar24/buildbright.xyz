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

    },


    "Laws of Motion": {

        /* =================================================
           CHAPTER PRACTICE
           ================================================= */

        practice: [

            {
                id: "lom-p-001",
                topic: "Newton's First Law",
                difficulty: "Foundation",

                question:
                    "A body moves with constant velocity in a straight line. What can be concluded about the net external force acting on it?",

                options: [
                    "It is zero",
                    "It acts in the direction of motion",
                    "It acts opposite to the direction of motion",
                    "It continuously increases"
                ],

                answer: 0,

                explanation:
                    "Constant velocity means zero acceleration. From Newton's second law, ΣF = ma, so the net external force is zero."
            },


            {
                id: "lom-p-002",
                topic: "Newton's Second Law",
                difficulty: "Foundation",

                question:
                    "A net force of 24 N acts on a 6 kg block. What is the acceleration of the block?",

                options: [
                    "2 m/s²",
                    "4 m/s²",
                    "6 m/s²",
                    "144 m/s²"
                ],

                answer: 1,

                explanation:
                    "Using ΣF = ma, acceleration a = F/m = 24/6 = 4 m/s²."
            },


            {
                id: "lom-p-003",
                topic: "Net Force",
                difficulty: "Foundation",

                question:
                    "Two horizontal forces of 18 N and 10 N act in opposite directions on a 4 kg block. What is the magnitude of its acceleration?",

                options: [
                    "2 m/s²",
                    "4 m/s²",
                    "7 m/s²",
                    "28 m/s²"
                ],

                answer: 0,

                explanation:
                    "The net force is 18 − 10 = 8 N. Therefore a = 8/4 = 2 m/s²."
            },


            {
                id: "lom-p-004",
                topic: "Normal Force",
                difficulty: "Foundation",

                question:
                    "A 7 kg block rests on a horizontal table. Taking g = 10 m/s² and assuming no other vertical forces act, what is the normal force?",

                options: [
                    "7 N",
                    "10 N",
                    "70 N",
                    "700 N"
                ],

                answer: 2,

                explanation:
                    "The block has zero vertical acceleration. Therefore N = mg = 7 × 10 = 70 N."
            },


            {
                id: "lom-p-005",
                topic: "Static Friction",
                difficulty: "Medium",

                question:
                    "A 10 kg block rests on a horizontal surface with coefficient of static friction 0.4. Taking g = 10 m/s², what is the maximum static friction?",

                options: [
                    "4 N",
                    "25 N",
                    "40 N",
                    "100 N"
                ],

                answer: 2,

                explanation:
                    "N = mg = 100 N. Therefore maximum static friction is fₛ,max = μₛN = 0.4 × 100 = 40 N."
            },


            {
                id: "lom-p-006",
                topic: "Static Friction",
                difficulty: "Medium",

                question:
                    "A horizontal force of 20 N is applied to a block that remains at rest. If the maximum possible static friction is 35 N, what is the actual static friction force?",

                options: [
                    "0 N",
                    "15 N",
                    "20 N",
                    "35 N"
                ],

                answer: 2,

                explanation:
                    "Static friction adjusts to the value required to prevent relative motion, up to its maximum. Since 20 N is below 35 N, the actual friction force is 20 N."
            },


            {
                id: "lom-p-007",
                topic: "Kinetic Friction",
                difficulty: "Medium",

                question:
                    "A 5 kg block slides on a horizontal surface with coefficient of kinetic friction 0.2. Taking g = 10 m/s², what is the kinetic friction force?",

                options: [
                    "5 N",
                    "10 N",
                    "20 N",
                    "50 N"
                ],

                answer: 1,

                explanation:
                    "N = mg = 50 N. Kinetic friction is fₖ = μₖN = 0.2 × 50 = 10 N."
            },


            {
                id: "lom-p-008",
                topic: "Newton's Third Law",
                difficulty: "Medium",

                question:
                    "A person pushes a wall with a force of 100 N. According to Newton's third law, what force does the wall exert on the person?",

                options: [
                    "0 N",
                    "50 N in the same direction",
                    "100 N in the same direction",
                    "100 N in the opposite direction"
                ],

                answer: 3,

                explanation:
                    "Newton's third law states that interaction forces have equal magnitudes and opposite directions. The wall therefore exerts 100 N on the person in the opposite direction."
            },


            {
                id: "lom-p-009",
                topic: "Connected Bodies",
                difficulty: "JEE Level",

                question:
                    "Two blocks of masses 2 kg and 3 kg are connected by a light string on a frictionless horizontal surface. A 15 N horizontal force pulls the system. What is the acceleration?",

                options: [
                    "1 m/s²",
                    "2 m/s²",
                    "3 m/s²",
                    "5 m/s²"
                ],

                answer: 2,

                explanation:
                    "Treat both blocks as one system. Total mass = 2 + 3 = 5 kg. Therefore a = 15/5 = 3 m/s²."
            },


            {
                id: "lom-p-010",
                topic: "Force and Friction",
                difficulty: "JEE Level",

                question:
                    "A 4 kg block is pulled horizontally by a 20 N force. A kinetic friction force of 8 N opposes the motion. What is the acceleration of the block?",

                options: [
                    "2 m/s²",
                    "3 m/s²",
                    "5 m/s²",
                    "7 m/s²"
                ],

                answer: 1,

                explanation:
                    "Net force = 20 − 8 = 12 N. Therefore a = F_net/m = 12/4 = 3 m/s²."
            }

        ],


        /* =================================================
           CHAPTER TEST
           ================================================= */

        test: [

            {
                id: "lom-t-001",
                topic: "Newton's First Law",

                question:
                    "An object is moving to the right at constant velocity. Which statement must be true?",

                options: [
                    "A net force acts to the right",
                    "A net force acts to the left",
                    "The net external force is zero",
                    "No individual forces act on the object"
                ],

                answer: 2,

                explanation:
                    "Constant velocity means zero acceleration. Therefore the vector sum of all external forces is zero."
            },


            {
                id: "lom-t-002",
                topic: "Newton's Second Law",

                question:
                    "A 5 kg object experiences a net force of 30 N. What is its acceleration?",

                options: [
                    "5 m/s²",
                    "6 m/s²",
                    "25 m/s²",
                    "150 m/s²"
                ],

                answer: 1,

                explanation:
                    "Using F_net = ma, a = 30/5 = 6 m/s²."
            },


            {
                id: "lom-t-003",
                topic: "Force Components",

                question:
                    "A 10 kg block has a horizontal acceleration of 2 m/s². What net horizontal force acts on it?",

                options: [
                    "5 N",
                    "10 N",
                    "20 N",
                    "50 N"
                ],

                answer: 2,

                explanation:
                    "Using ΣFₓ = maₓ, the net horizontal force is 10 × 2 = 20 N."
            },


            {
                id: "lom-t-004",
                topic: "Free-Body Diagrams",

                question:
                    "Which force is always perpendicular to a contact surface?",

                options: [
                    "Weight",
                    "Tension",
                    "Normal force",
                    "Friction"
                ],

                answer: 2,

                explanation:
                    "The normal force exerted by a surface acts perpendicular to that surface."
            },


            {
                id: "lom-t-005",
                topic: "Static Friction",

                question:
                    "A 20 kg block rests on a horizontal surface with μₛ = 0.3. Take g = 10 m/s². What is the maximum static friction?",

                options: [
                    "6 N",
                    "20 N",
                    "60 N",
                    "200 N"
                ],

                answer: 2,

                explanation:
                    "N = mg = 200 N. Thus fₛ,max = μₛN = 0.3 × 200 = 60 N."
            },


            {
                id: "lom-t-006",
                topic: "Friction",

                question:
                    "A block remains at rest when a 25 N horizontal force is applied. The maximum static friction is 40 N. What is the magnitude of the friction force?",

                options: [
                    "0 N",
                    "15 N",
                    "25 N",
                    "40 N"
                ],

                answer: 2,

                explanation:
                    "Because the block remains at rest and 25 N is below the limiting friction, static friction adjusts to 25 N."
            },


            {
                id: "lom-t-007",
                topic: "Newton's Third Law",

                question:
                    "Which statement correctly describes a Newton's third-law pair?",

                options: [
                    "The two forces act on the same object",
                    "The two forces have equal magnitude and act on different objects",
                    "One force occurs before the other",
                    "The larger object exerts the larger force"
                ],

                answer: 1,

                explanation:
                    "Third-law forces are equal in magnitude and opposite in direction, and they act on different interacting objects."
            },


            {
                id: "lom-t-008",
                topic: "Connected Bodies",

                question:
                    "Blocks of 4 kg and 6 kg are connected on a frictionless horizontal surface. A 30 N horizontal external force acts on the system. What is their common acceleration?",

                options: [
                    "2 m/s²",
                    "3 m/s²",
                    "5 m/s²",
                    "10 m/s²"
                ],

                answer: 1,

                explanation:
                    "Total mass = 4 + 6 = 10 kg. Therefore a = 30/10 = 3 m/s²."
            },


            {
                id: "lom-t-009",
                topic: "Connected Bodies",

                question:
                    "Two blocks of 2 kg and 3 kg are connected by a light string on a frictionless horizontal surface. A 20 N force pulls the 3 kg block. What is the tension in the string?",

                options: [
                    "4 N",
                    "8 N",
                    "12 N",
                    "20 N"
                ],

                answer: 1,

                explanation:
                    "The system acceleration is 20/(2+3) = 4 m/s². For the 2 kg block, T = ma = 2 × 4 = 8 N."
            },


            {
                id: "lom-t-010",
                topic: "Force and Friction",

                question:
                    "A 6 kg block is pulled horizontally with a force of 30 N while kinetic friction of 12 N opposes its motion. What is its acceleration?",

                options: [
                    "2 m/s²",
                    "3 m/s²",
                    "5 m/s²",
                    "7 m/s²"
                ],

                answer: 1,

                explanation:
                    "The net horizontal force is 30 − 12 = 18 N. Therefore a = 18/6 = 3 m/s²."
            }


        ]

    },

    "Work, Energy and Power": {

        /* ==========================================
           CHAPTER PRACTICE — 10 QUESTIONS
           ========================================== */

        practice: [

            {
                id: "wep-p-001",
                topic: "Work Done",
                difficulty: "Foundation",

                question:
                    "A constant horizontal force of 15 N moves an object 4 m in the direction of the force. How much work is done?",

                options: [
                    "15 J",
                    "30 J",
                    "60 J",
                    "75 J"
                ],

                answer: 2,

                explanation:
                    "W = Fs cos θ. Here θ = 0°, so W = 15 × 4 = 60 J."
            },

            {
                id: "wep-p-002",
                topic: "Work and Angle",
                difficulty: "Foundation",

                question:
                    "A force of 20 N acts at 60° to a displacement of 5 m. Find the work done by the force.",

                options: [
                    "25 J",
                    "50 J",
                    "75 J",
                    "100 J"
                ],

                answer: 1,

                explanation:
                    "W = Fs cos θ = 20 × 5 × cos 60° = 50 J."
            },

            {
                id: "wep-p-003",
                topic: "Kinetic Energy",
                difficulty: "Foundation",

                question:
                    "What is the kinetic energy of a 4 kg body moving at 5 m/s?",

                options: [
                    "20 J",
                    "40 J",
                    "50 J",
                    "100 J"
                ],

                answer: 2,

                explanation:
                    "K = ½mv² = ½ × 4 × 25 = 50 J."
            },

            {
                id: "wep-p-004",
                topic: "Work–Energy Theorem",
                difficulty: "Medium",

                question:
                    "A 2 kg body initially at rest experiences 36 J of net work. What is its final speed?",

                options: [
                    "3 m/s",
                    "4 m/s",
                    "6 m/s",
                    "9 m/s"
                ],

                answer: 2,

                explanation:
                    "Wnet = ΔK = ½mv². Therefore 36 = ½ × 2 × v², giving v = 6 m/s."
            },

            {
                id: "wep-p-005",
                topic: "Gravitational Potential Energy",
                difficulty: "Foundation",

                question:
                    "A 3 kg object is raised vertically by 4 m. Find the increase in gravitational potential energy. Take g = 10 m/s².",

                options: [
                    "12 J",
                    "40 J",
                    "120 J",
                    "300 J"
                ],

                answer: 2,

                explanation:
                    "ΔU = mgh = 3 × 10 × 4 = 120 J."
            },

            {
                id: "wep-p-006",
                topic: "Elastic Potential Energy",
                difficulty: "Medium",

                question:
                    "A spring with spring constant 200 N/m is compressed by 0.10 m. How much elastic potential energy is stored?",

                options: [
                    "0.5 J",
                    "1 J",
                    "2 J",
                    "10 J"
                ],

                answer: 1,

                explanation:
                    "U = ½kx² = ½ × 200 × (0.10)² = 1 J."
            },

            {
                id: "wep-p-007",
                topic: "Conservation of Energy",
                difficulty: "Medium",

                question:
                    "A ball is dropped from rest from a height of 20 m. Ignoring air resistance, find its speed just before impact. Take g = 10 m/s².",

                options: [
                    "10 m/s",
                    "15 m/s",
                    "20 m/s",
                    "40 m/s"
                ],

                answer: 2,

                explanation:
                    "mgh = ½mv², so v = √(2gh) = √400 = 20 m/s."
            },

            {
                id: "wep-p-008",
                topic: "Friction and Energy",
                difficulty: "Medium",

                question:
                    "A frictional force of 5 N opposes a block moving through 8 m. What is the work done by friction?",

                options: [
                    "−40 J",
                    "−13 J",
                    "0 J",
                    "40 J"
                ],

                answer: 0,

                explanation:
                    "Friction opposes displacement, so W = −fd = −5 × 8 = −40 J."
            },

            {
                id: "wep-p-009",
                topic: "Power",
                difficulty: "Foundation",

                question:
                    "A motor performs 1200 J of work in 6 seconds. What is its average power?",

                options: [
                    "100 W",
                    "200 W",
                    "600 W",
                    "7200 W"
                ],

                answer: 1,

                explanation:
                    "Average power P = W/t = 1200/6 = 200 W."
            },

            {
                id: "wep-p-010",
                topic: "Efficiency",
                difficulty: "Medium",

                question:
                    "A machine receives 800 J of energy and produces 600 J of useful output energy. What is its efficiency?",

                options: [
                    "60%",
                    "70%",
                    "75%",
                    "80%"
                ],

                answer: 2,

                explanation:
                    "Efficiency = (useful output/input) × 100 = (600/800) × 100 = 75%."
            }

        ],

        /* ==========================================
           CHAPTER TEST — 10 QUESTIONS
           ========================================== */

        test: [

            {
                id: "wep-t-001",
                topic: "Variable Force",

                question:
                    "A force F = 4x N acts along the x-axis, where x is measured in meters. How much work is done as the object moves from x = 0 to x = 3 m?",

                options: [
                    "6 J",
                    "12 J",
                    "18 J",
                    "36 J"
                ],

                answer: 2,

                explanation:
                    "Work is the area under the force–position graph. W = ∫(0 to 3) 4x dx = 2x² evaluated from 0 to 3 = 18 J."
            },

            {
                id: "wep-t-002",
                topic: "Work–Energy Theorem",

                question:
                    "A 5 kg object increases its speed from 2 m/s to 6 m/s. What is the net work done on it?",

                options: [
                    "40 J",
                    "60 J",
                    "80 J",
                    "100 J"
                ],

                answer: 2,

                explanation:
                    "Wnet = ½m(v² − u²) = ½ × 5 × (36 − 4) = 80 J."
            },

            {
                id: "wep-t-003",
                topic: "Energy Conservation",

                question:
                    "A 2 kg block slides from rest down a frictionless track through a vertical height of 5 m. Find its speed at the bottom. Take g = 10 m/s².",

                options: [
                    "5 m/s",
                    "10 m/s",
                    "15 m/s",
                    "20 m/s"
                ],

                answer: 1,

                explanation:
                    "mgh = ½mv². Therefore v = √(2 × 10 × 5) = 10 m/s."
            },

            {
                id: "wep-t-004",
                topic: "Spring Energy",

                question:
                    "An ideal spring with spring constant 400 N/m is compressed by 0.20 m. What energy is stored in the spring?",

                options: [
                    "4 J",
                    "8 J",
                    "16 J",
                    "40 J"
                ],

                answer: 1,

                explanation:
                    "U = ½kx² = ½ × 400 × (0.20)² = 8 J."
            },

            {
                id: "wep-t-005",
                topic: "Friction and Energy",

                question:
                    "A 2 kg block moves at 10 m/s on a horizontal surface. A constant frictional force of 5 N brings it to rest. How far does it travel before stopping?",

                options: [
                    "10 m",
                    "15 m",
                    "20 m",
                    "25 m"
                ],

                answer: 2,

                explanation:
                    "Initial kinetic energy = ½ × 2 × 10² = 100 J. Friction removes this energy, so 5d = 100 and d = 20 m."
            },

            {
                id: "wep-t-006",
                topic: "Power",

                question:
                    "A constant force of 50 N acts in the direction of motion of an object traveling at 4 m/s. What instantaneous power does the force deliver?",

                options: [
                    "50 W",
                    "100 W",
                    "200 W",
                    "400 W"
                ],

                answer: 2,

                explanation:
                    "P = Fv cos θ = 50 × 4 × cos 0° = 200 W."
            },

            {
                id: "wep-t-007",
                topic: "Gravitational Energy",

                question:
                    "A 1 kg object is thrown vertically upward at 20 m/s. Ignoring air resistance, what maximum height does it reach above its release point? Take g = 10 m/s².",

                options: [
                    "10 m",
                    "20 m",
                    "30 m",
                    "40 m"
                ],

                answer: 1,

                explanation:
                    "At maximum height, final kinetic energy is zero. ½mu² = mgh, so h = u²/(2g) = 400/20 = 20 m."
            },

            {
                id: "wep-t-008",
                topic: "Non-Conservative Work",

                question:
                    "A 4 kg block starts from rest at a height of 10 m and slides to the bottom of a track. Friction does −80 J of work. Find its kinetic energy at the bottom. Take g = 10 m/s².",

                options: [
                    "240 J",
                    "320 J",
                    "400 J",
                    "480 J"
                ],

                answer: 1,

                explanation:
                    "Initial gravitational potential energy = mgh = 400 J. Final kinetic energy = 400 − 80 = 320 J."
            },

            {
                id: "wep-t-009",
                topic: "Conservative Forces",

                question:
                    "Which statement about a conservative force is correct?",

                options: [
                    "Its work always depends on the path length.",
                    "Its work around any closed path is zero.",
                    "Its work must always be positive.",
                    "It always reduces mechanical energy."
                ],

                answer: 1,

                explanation:
                    "For a conservative force, work depends only on the initial and final positions. The work done around a closed path is zero."
            },

            {
                id: "wep-t-010",
                topic: "Combined Energy and Power",

                question:
                    "A motor lifts a 100 kg load vertically through 6 m in 10 s at constant speed. If its efficiency is 75%, what is its average input power? Take g = 10 m/s².",

                options: [
                    "450 W",
                    "600 W",
                    "800 W",
                    "1000 W"
                ],

                answer: 2,

                explanation:
                    "Useful work = mgh = 100 × 10 × 6 = 6000 J. Useful power = 600 W. Input power = 600/0.75 = 800 W."
            }


        ]

    },

    "System of Particles and Rotational Motion": {

        /* ==========================================
           PRACTICE — 10 QUESTIONS
           ========================================== */

        practice: [

            {
                id: "rot-p-001",
                topic: "Centre of Mass",
                difficulty: "Foundation",

                question:
                    "Two particles of masses 2 kg and 3 kg are placed at x = 0 m and x = 10 m. Find their centre of mass.",

                options: [
                    "4 m",
                    "5 m",
                    "6 m",
                    "8 m"
                ],

                answer: 2,

                explanation:
                    "xCM = (2 × 0 + 3 × 10)/(2 + 3) = 30/5 = 6 m."
            },

            {
                id: "rot-p-002",
                topic: "Centre-of-Mass Velocity",
                difficulty: "Foundation",

                question:
                    "A 2 kg particle moves at +4 m/s and a 3 kg particle moves at +6 m/s along the x-axis. What is their centre-of-mass velocity?",

                options: [
                    "4.0 m/s",
                    "5.0 m/s",
                    "5.2 m/s",
                    "6.0 m/s"
                ],

                answer: 2,

                explanation:
                    "vCM = (2 × 4 + 3 × 6)/5 = 26/5 = 5.2 m/s."
            },

            {
                id: "rot-p-003",
                topic: "External Force",
                difficulty: "Foundation",

                question:
                    "A system of total mass 8 kg experiences a net external force of 24 N. What is its centre-of-mass acceleration?",

                options: [
                    "2 m/s²",
                    "3 m/s²",
                    "4 m/s²",
                    "6 m/s²"
                ],

                answer: 1,

                explanation:
                    "Fext = MaCM, so aCM = 24/8 = 3 m/s²."
            },

            {
                id: "rot-p-004",
                topic: "Torque",
                difficulty: "Foundation",

                question:
                    "A 15 N force acts perpendicular to a 0.4 m lever arm. Find the torque magnitude about the pivot.",

                options: [
                    "3 N·m",
                    "6 N·m",
                    "15 N·m",
                    "37.5 N·m"
                ],

                answer: 1,

                explanation:
                    "Torque magnitude = rF sin 90° = 0.4 × 15 = 6 N·m."
            },

            {
                id: "rot-p-005",
                topic: "Angular Momentum",
                difficulty: "Medium",

                question:
                    "A particle of mass 2 kg moves at 3 m/s perpendicular to its position vector of length 4 m. What is its angular momentum magnitude about the origin?",

                options: [
                    "6 kg·m²/s",
                    "12 kg·m²/s",
                    "24 kg·m²/s",
                    "48 kg·m²/s"
                ],

                answer: 2,

                explanation:
                    "L = rmv sin 90° = 4 × 2 × 3 = 24 kg·m²/s."
            },

            {
                id: "rot-p-006",
                topic: "Moment of Inertia",
                difficulty: "Foundation",

                question:
                    "A point mass of 4 kg is located 0.5 m from a rotation axis. Find its moment of inertia.",

                options: [
                    "0.5 kg·m²",
                    "1 kg·m²",
                    "2 kg·m²",
                    "4 kg·m²"
                ],

                answer: 1,

                explanation:
                    "I = mr² = 4 × (0.5)² = 1 kg·m²."
            },

            {
                id: "rot-p-007",
                topic: "Parallel-Axis Theorem",
                difficulty: "Medium",

                question:
                    "A rigid body has mass 3 kg and moment of inertia 2 kg·m² about an axis through its centre of mass. What is its moment of inertia about a parallel axis 2 m away?",

                options: [
                    "8 kg·m²",
                    "12 kg·m²",
                    "14 kg·m²",
                    "18 kg·m²"
                ],

                answer: 2,

                explanation:
                    "I = ICM + Md² = 2 + 3 × 2² = 14 kg·m²."
            },

            {
                id: "rot-p-008",
                topic: "Rotational Dynamics",
                difficulty: "Medium",

                question:
                    "A rigid wheel with moment of inertia 5 kg·m² experiences a net torque of 20 N·m about its fixed axis. What is its angular acceleration?",

                options: [
                    "2 rad/s²",
                    "4 rad/s²",
                    "5 rad/s²",
                    "10 rad/s²"
                ],

                answer: 1,

                explanation:
                    "τ = Iα, so α = 20/5 = 4 rad/s²."
            },

            {
                id: "rot-p-009",
                topic: "Rotational Kinetic Energy",
                difficulty: "Medium",

                question:
                    "A wheel has moment of inertia 2 kg·m² and angular speed 5 rad/s. Find its rotational kinetic energy.",

                options: [
                    "10 J",
                    "20 J",
                    "25 J",
                    "50 J"
                ],

                answer: 2,

                explanation:
                    "Krot = ½Iω² = ½ × 2 × 5² = 25 J."
            },

            {
                id: "rot-p-010",
                topic: "Pure Rolling",
                difficulty: "Foundation",

                question:
                    "A wheel of radius 0.25 m rolls without slipping at 5 m/s. Find its angular speed.",

                options: [
                    "5 rad/s",
                    "10 rad/s",
                    "20 rad/s",
                    "25 rad/s"
                ],

                answer: 2,

                explanation:
                    "For pure rolling, v = ωR. Thus ω = 5/0.25 = 20 rad/s."
            }

        ],

        /* ==========================================
           TIMED CHAPTER TEST — 10 QUESTIONS
           ========================================== */

        test: [

            {
                id: "rot-t-001",
                topic: "Centre of Mass",

                question:
                    "Three particles of masses 1 kg, 2 kg and 3 kg are located at x = 0 m, 3 m and 6 m respectively. What is their centre-of-mass position?",

                options: [
                    "3 m",
                    "4 m",
                    "5 m",
                    "6 m"
                ],

                answer: 1,

                explanation:
                    "xCM = (1 × 0 + 2 × 3 + 3 × 6)/(1 + 2 + 3) = 24/6 = 4 m."
            },

            {
                id: "rot-t-002",
                topic: "Momentum Conservation",

                question:
                    "Two particles of masses 2 kg and 3 kg move along the x-axis at +5 m/s and −2 m/s respectively. What is their centre-of-mass velocity?",

                options: [
                    "0.4 m/s",
                    "0.8 m/s",
                    "1.2 m/s",
                    "2.0 m/s"
                ],

                answer: 1,

                explanation:
                    "Total momentum = 2 × 5 + 3 × (−2) = 4 kg·m/s. Total mass = 5 kg, so vCM = 4/5 = +0.8 m/s."
            },

            {
                id: "rot-t-003",
                topic: "Torque and Angle",

                question:
                    "A 20 N force acts at an angle of 30° to a position vector of magnitude 2 m. What is the torque magnitude?",

                options: [
                    "10 N·m",
                    "20 N·m",
                    "30 N·m",
                    "40 N·m"
                ],

                answer: 1,

                explanation:
                    "τ = rF sin θ = 2 × 20 × sin 30° = 20 N·m."
            },

            {
                id: "rot-t-004",
                topic: "Angular Momentum Conservation",

                question:
                    "A rotating system has moment of inertia 4 kg·m² and angular speed 3 rad/s. Its moment of inertia decreases to 2 kg·m² with zero net external torque. What is its new angular speed?",

                options: [
                    "1.5 rad/s",
                    "3 rad/s",
                    "6 rad/s",
                    "12 rad/s"
                ],

                answer: 2,

                explanation:
                    "Angular momentum is conserved: I₁ω₁ = I₂ω₂. Therefore 4 × 3 = 2 × ω₂, giving ω₂ = 6 rad/s."
            },

            {
                id: "rot-t-005",
                topic: "Moment of Inertia",

                question:
                    "A uniform solid disk has mass 4 kg and radius 0.5 m. What is its moment of inertia about its central symmetry axis?",

                options: [
                    "0.25 kg·m²",
                    "0.5 kg·m²",
                    "1.0 kg·m²",
                    "2.0 kg·m²"
                ],

                answer: 1,

                explanation:
                    "For a uniform solid disk, I = ½MR² = ½ × 4 × (0.5)² = 0.5 kg·m²."
            },

            {
                id: "rot-t-006",
                topic: "Parallel-Axis Theorem",

                question:
                    "A uniform thin rod has mass 3 kg and length 2 m. Its moment of inertia about an axis through its centre, perpendicular to its length, is ML²/12. What is its moment of inertia about a parallel axis through one end?",

                options: [
                    "0.5 kg·m²",
                    "1 kg·m²",
                    "2 kg·m²",
                    "4 kg·m²"
                ],

                answer: 3,

                explanation:
                    "ICM = ML²/12 = 3 × 4/12 = 1 kg·m². The parallel-axis theorem gives Iend = 1 + 3 × 1² = 4 kg·m²."
            },

            {
                id: "rot-t-007",
                topic: "Rotational Dynamics",

                question:
                    "A wheel initially at rest has moment of inertia 2 kg·m². A constant net torque of 6 N·m acts for 4 seconds. What is its final angular speed?",

                options: [
                    "6 rad/s",
                    "9 rad/s",
                    "12 rad/s",
                    "24 rad/s"
                ],

                answer: 2,

                explanation:
                    "Angular acceleration α = τ/I = 6/2 = 3 rad/s². Starting from rest, ω = αt = 3 × 4 = 12 rad/s."
            },

            {
                id: "rot-t-008",
                topic: "Rotational Kinetic Energy",

                question:
                    "A rigid body rotating about a fixed axis has moment of inertia 8 kg·m² and rotational kinetic energy 100 J. What is its angular speed?",

                options: [
                    "2 rad/s",
                    "4 rad/s",
                    "5 rad/s",
                    "10 rad/s"
                ],

                answer: 2,

                explanation:
                    "K = ½Iω². Thus 100 = ½ × 8 × ω² = 4ω², so ω² = 25 and ω = 5 rad/s."
            },

            {
                id: "rot-t-009",
                topic: "Rolling Motion",

                question:
                    "A uniform solid cylinder of mass 2 kg rolls without slipping at a centre-of-mass speed of 4 m/s. What is its total kinetic energy? Use ICM = ½MR².",

                options: [
                    "16 J",
                    "20 J",
                    "24 J",
                    "32 J"
                ],

                answer: 2,

                explanation:
                    "Total kinetic energy = ½Mv² + ½Iω². With I = ½MR² and ω = v/R, K = ¾Mv² = ¾ × 2 × 16 = 24 J."
            },

            {
                id: "rot-t-010",
                topic: "Rolling Energy Conservation",

                question:
                    "A uniform solid cylinder rolls without slipping down an incline through a vertical height of 3 m, starting from rest. Ignore energy losses. What is its speed at the bottom? Take g = 10 m/s² and ICM = ½MR².",

                options: [
                    "√20 m/s",
                    "√30 m/s",
                    "√40 m/s",
                    "√60 m/s"
                ],

                answer: 2,

                explanation:
                    "Energy conservation gives Mgh = ½Mv² + ½(½MR²)(v²/R²) = ¾Mv². Thus v² = 4gh/3 = 4 × 10 × 3/3 = 40, so v = √40 m/s."
            }

        ]

    }

};
