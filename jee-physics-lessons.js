const jeePhysicsLessons = {

    Kinematics: {

        description:
            "Study motion using position, displacement, velocity, acceleration, graphs and the equations of uniformly accelerated motion.",

        lessons: [

            {
                title: "Motion, Position and Displacement",

                description:
                    "Build the language of kinematics: reference frames, position, distance and displacement.",

                intro:
                    "Kinematics describes how objects move without asking what forces cause that motion. We begin by learning how to describe an object's position and how that position changes.",

                conceptTitle:
                    "Motion must always be described relative to a reference frame.",

                conceptText:
                    "An object's position tells us where it is relative to an origin. Displacement describes the change from initial position to final position and therefore includes direction.",

                body:
                    "Distance and displacement are not the same quantity. Distance measures the total path traveled and is a scalar. Displacement depends only on the initial and final positions and is a vector. An object can travel a large distance while having zero displacement if it returns to its starting point.",

                keyIdeas: [

                    {
                        label: "POSITION",
                        formula: "x",
                        text:
                            "Position specifies an object's location relative to a chosen origin."
                    },

                    {
                        label: "DISPLACEMENT",
                        formula: "Δx = x₂ − x₁",
                        text:
                            "Displacement is the change in position from the initial point to the final point."
                    },

                    {
                        label: "DISTANCE",
                        formula: "Total path length",
                        text:
                            "Distance measures the complete path traveled and is always non-negative."
                    }

                ],

                example: {

                    problem:
                        "A student walks 30 m east and then 20 m west. Find the total distance traveled and the displacement.",

                    steps: [

                        "The total distance is the complete path traveled: 30 m + 20 m = 50 m.",

                        "Take east as the positive direction. The first displacement is +30 m and the second is −20 m.",

                        "Net displacement = +30 m − 20 m = +10 m. Therefore, the student is displaced 10 m east from the starting point."

                    ]

                },

                jeeQuestion:
                    "A particle moves 5 m east, 12 m north and then 5 m west. What is the magnitude of its displacement from the starting point?",

                jeeOptions: [
                    "A. 5 m",
                    "B. 10 m",
                    "C. 12 m",
                    "D. 22 m"
                ],

                jeeAnswer:
                    "C. 12 m",

                jeeExplanation:
                    "The 5 m east and 5 m west motions cancel. The particle finishes 12 m north of its starting point, so the displacement magnitude is 12 m.",

                checkQuestion:
                    "An athlete completes one full 400 m lap and stops exactly where the athlete started. Which statement is correct?",

                checkOptions: [

                    {
                        text: "Distance = 0 m and displacement = 400 m",
                        correct: false
                    },

                    {
                        text: "Distance = 400 m and displacement = 0 m",
                        correct: true
                    },

                    {
                        text: "Distance = 400 m and displacement = 400 m",
                        correct: false
                    },

                    {
                        text: "Both distance and displacement are zero",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. The athlete travels 400 m, but the initial and final positions are identical, so displacement is zero.",

                incorrectFeedback:
                    "Remember: distance measures the entire path, while displacement depends only on the initial and final positions."
            },


            {
                title: "Speed and Velocity",

                description:
                    "Distinguish speed from velocity and calculate average quantities correctly.",

                intro:
                    "Position tells us where an object is. Speed and velocity tell us how quickly its motion occurs.",

                conceptTitle:
                    "Velocity measures the rate of change of displacement.",

                conceptText:
                    "Speed is a scalar and describes how fast an object moves. Velocity is a vector and includes direction.",

                body:
                    "Average speed is based on total distance traveled, while average velocity is based on displacement. Because distance and displacement can differ, average speed and the magnitude of average velocity are not generally equal.",

                keyIdeas: [

                    {
                        label: "AVERAGE SPEED",
                        formula: "v = distance / time",
                        text:
                            "Average speed uses total distance traveled."
                    },

                    {
                        label: "AVERAGE VELOCITY",
                        formula: "v̄ = Δx / Δt",
                        text:
                            "Average velocity uses displacement divided by elapsed time."
                    },

                    {
                        label: "INSTANTANEOUS VELOCITY",
                        formula: "v = dx/dt",
                        text:
                            "Instantaneous velocity is the rate at which position changes at a particular instant."
                    }

                ],

                example: {

                    problem:
                        "A car travels 60 km east in 1 hour and then 20 km west in 0.5 hour. Find its average speed and average velocity.",

                    steps: [

                        "Total distance = 60 km + 20 km = 80 km. Total time = 1.5 h.",

                        "Average speed = 80 / 1.5 = 53.3 km/h.",

                        "Taking east as positive, displacement = 60 − 20 = 40 km. Average velocity = 40 / 1.5 = 26.7 km/h east."

                    ]

                },

                jeeQuestion:
                    "A particle travels equal distances with speeds 20 m/s and 30 m/s. What is its average speed for the complete journey?",

                jeeOptions: [
                    "A. 24 m/s",
                    "B. 25 m/s",
                    "C. 26 m/s",
                    "D. 50 m/s"
                ],

                jeeAnswer:
                    "A. 24 m/s",

                jeeExplanation:
                    "For equal distances, average speed is the harmonic mean: 2v₁v₂/(v₁+v₂) = 2(20)(30)/50 = 24 m/s.",

                checkQuestion:
                    "Which quantity can be zero even when an object has traveled a nonzero distance?",

                checkOptions: [

                    {
                        text: "Average speed",
                        correct: false
                    },

                    {
                        text: "Total distance",
                        correct: false
                    },

                    {
                        text: "Average velocity",
                        correct: true
                    },

                    {
                        text: "Elapsed time",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. If an object returns to its starting position, displacement and therefore average velocity can be zero.",

                incorrectFeedback:
                    "Average velocity depends on displacement. Think about a round trip that ends at the starting point."
            },


            {
                title: "Acceleration",

                description:
                    "Understand how velocity changes with time and how acceleration describes that change.",

                intro:
                    "An object accelerates whenever its velocity changes. That can mean speeding up, slowing down or changing direction.",

                conceptTitle:
                    "Acceleration is the rate of change of velocity.",

                conceptText:
                    "Because velocity is a vector, acceleration can occur even when the speed of an object remains constant but its direction changes.",

                body:
                    "The sign of acceleration alone does not tell us whether an object is speeding up or slowing down. What matters is the relationship between the signs of velocity and acceleration.",

                keyIdeas: [

                    {
                        label: "AVERAGE ACCELERATION",
                        formula: "ā = Δv / Δt",
                        text:
                            "Average acceleration measures the change in velocity over a time interval."
                    },

                    {
                        label: "INSTANTANEOUS ACCELERATION",
                        formula: "a = dv/dt",
                        text:
                            "Instantaneous acceleration describes how velocity changes at a particular instant."
                    },

                    {
                        label: "FROM POSITION",
                        formula: "a = d²x/dt²",
                        text:
                            "Acceleration is the second derivative of position with respect to time."
                    }

                ],

                example: {

                    problem:
                        "A car increases its velocity from 10 m/s to 25 m/s in 5 s. Find its average acceleration.",

                    steps: [

                        "Initial velocity u = 10 m/s and final velocity v = 25 m/s.",

                        "Change in velocity Δv = 25 − 10 = 15 m/s.",

                        "Average acceleration = Δv/Δt = 15/5 = 3 m/s²."

                    ]

                },

                jeeQuestion:
                    "A particle moves in the positive x-direction but has a constant negative acceleration. Which statement must be true at that instant?",

                jeeOptions: [
                    "A. Its speed is increasing",
                    "B. Its speed is decreasing",
                    "C. Its velocity is zero",
                    "D. Its acceleration is zero"
                ],

                jeeAnswer:
                    "B. Its speed is decreasing",

                jeeExplanation:
                    "The velocity is positive while acceleration is negative. Since acceleration opposes the direction of velocity, the magnitude of velocity decreases at that instant.",

                checkQuestion:
                    "Can an object have zero velocity and nonzero acceleration at the same instant?",

                checkOptions: [

                    {
                        text: "No, never",
                        correct: false
                    },

                    {
                        text: "Yes",
                        correct: true
                    },

                    {
                        text: "Only if its acceleration is also zero",
                        correct: false
                    },

                    {
                        text: "Only in horizontal motion",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. At the highest point of a vertically thrown object, its instantaneous velocity is zero while gravitational acceleration remains nonzero.",

                incorrectFeedback:
                    "Consider an object thrown vertically upward at the exact instant it reaches its highest point."
            },


            {
                title: "Equations of Uniformly Accelerated Motion",

                description:
                    "Use the standard kinematic equations when acceleration remains constant.",

                intro:
                    "When acceleration is constant, position and velocity are connected by a powerful set of equations.",

                conceptTitle:
                    "The standard kinematic equations apply only when acceleration is constant.",

                conceptText:
                    "Before using an equation of motion, identify the known quantities, the unknown quantity and whether the acceleration can be treated as constant.",

                body:
                    "The symbols commonly used are u for initial velocity, v for final velocity, a for constant acceleration, t for elapsed time and s for displacement.",

                keyIdeas: [

                    {
                        label: "VELOCITY–TIME",
                        formula: "v = u + at",
                        text:
                            "Connects initial velocity, final velocity, acceleration and time."
                    },

                    {
                        label: "DISPLACEMENT–TIME",
                        formula: "s = ut + ½at²",
                        text:
                            "Gives displacement after time t under constant acceleration."
                    },

                    {
                        label: "VELOCITY–DISPLACEMENT",
                        formula: "v² = u² + 2as",
                        text:
                            "Useful when time is not given or not required."
                    }

                ],

                example: {

                    problem:
                        "A car starts from rest and accelerates uniformly at 4 m/s² for 6 s. Find its final velocity and displacement.",

                    steps: [

                        "The car starts from rest, so u = 0. Also a = 4 m/s² and t = 6 s.",

                        "Final velocity: v = u + at = 0 + 4(6) = 24 m/s.",

                        "Displacement: s = ut + ½at² = 0 + ½(4)(6²) = 72 m."

                    ]

                },

                jeeQuestion:
                    "A particle moving at 10 m/s accelerates uniformly at 2 m/s². What distance does it travel during the fifth second?",

                jeeOptions: [
                    "A. 17 m",
                    "B. 18 m",
                    "C. 19 m",
                    "D. 20 m"
                ],

                jeeAnswer:
                    "C. 19 m",

                jeeExplanation:
                    "Distance in the nth second is sₙ = u + (a/2)(2n−1). For n = 5: s₅ = 10 + (2/2)(9) = 19 m.",

                checkQuestion:
                    "Which equation is usually most useful when time is not known and is not required?",

                checkOptions: [

                    {
                        text: "v = u + at",
                        correct: false
                    },

                    {
                        text: "s = ut + ½at²",
                        correct: false
                    },

                    {
                        text: "v² = u² + 2as",
                        correct: true
                    },

                    {
                        text: "Average speed = distance/time",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. v² = u² + 2as connects velocity, acceleration and displacement without time.",

                incorrectFeedback:
                    "Look for the constant-acceleration equation that contains no time variable."
            },


            {
                title: "Motion Graphs",

                description:
                    "Interpret position-time, velocity-time and acceleration-time graphs.",

                intro:
                    "Graphs allow a large amount of information about motion to be understood visually. JEE frequently tests slopes and areas on motion graphs.",

                conceptTitle:
                    "In kinematics graphs, slopes and areas have physical meaning.",

                conceptText:
                    "The slope of a position-time graph gives velocity. The slope of a velocity-time graph gives acceleration. The area under a velocity-time graph gives displacement.",

                body:
                    "Always read the axes before interpreting a graph. The same geometric shape can represent completely different physics depending on the quantities plotted.",

                keyIdeas: [

                    {
                        label: "x–t GRAPH",
                        formula: "slope = velocity",
                        text:
                            "A steeper position-time graph represents a greater magnitude of velocity."
                    },

                    {
                        label: "v–t GRAPH",
                        formula: "slope = acceleration",
                        text:
                            "The gradient of a velocity-time graph gives acceleration."
                    },

                    {
                        label: "AREA UNDER v–t",
                        formula: "area = displacement",
                        text:
                            "Signed area between the velocity curve and time axis gives displacement."
                    }

                ],

                example: {

                    problem:
                        "A velocity-time graph shows a velocity increasing uniformly from 0 to 20 m/s during 5 s. Find the acceleration and displacement.",

                    steps: [

                        "Acceleration is the slope of the velocity-time graph: (20 − 0)/5 = 4 m/s².",

                        "Displacement equals the area under the velocity-time graph.",

                        "The region is a triangle, so displacement = ½ × 5 × 20 = 50 m."

                    ]

                },

                jeeQuestion:
                    "The velocity-time graph of a particle is a horizontal line below the time axis. Which description is correct?",

                jeeOptions: [
                    "A. Constant positive velocity",
                    "B. Constant negative velocity",
                    "C. Constant positive acceleration",
                    "D. Increasing negative acceleration"
                ],

                jeeAnswer:
                    "B. Constant negative velocity",

                jeeExplanation:
                    "A horizontal v-t graph has zero slope, so acceleration is zero. Being below the time axis means the velocity is negative.",

                checkQuestion:
                    "What does the area under an acceleration-time graph represent?",

                checkOptions: [

                    {
                        text: "Displacement",
                        correct: false
                    },

                    {
                        text: "Distance",
                        correct: false
                    },

                    {
                        text: "Change in velocity",
                        correct: true
                    },

                    {
                        text: "Position",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. Integrating acceleration over time gives the change in velocity.",

                incorrectFeedback:
                    "Acceleration is the rate of change of velocity, so its area over a time interval gives Δv."
            },


            {
                title: "Kinematics Review",

                description:
                    "Connect the major ideas of one-dimensional kinematics and prepare for chapter practice.",

                intro:
                    "Kinematics problems become much easier when you organize the information before selecting equations.",

                conceptTitle:
                    "A strong solution begins with a model of the motion.",

                conceptText:
                    "Choose a positive direction, identify known and unknown quantities, decide whether acceleration is constant and then select the relationship that connects the required variables.",

                body:
                    "Before moving to chapter practice, make sure you can distinguish distance from displacement, speed from velocity, interpret acceleration signs, use the constant-acceleration equations and extract information from motion graphs.",

                keyIdeas: [

                    {
                        label: "STEP 1",
                        formula: "Define direction",
                        text:
                            "Choose a coordinate direction and remain consistent with signs."
                    },

                    {
                        label: "STEP 2",
                        formula: "List knowns",
                        text:
                            "Identify u, v, a, t and s when they apply."
                    },

                    {
                        label: "STEP 3",
                        formula: "Choose relationship",
                        text:
                            "Use the equation or graph principle that connects the known quantities to the unknown."
                    }

                ],

                example: {

                    problem:
                        "A ball is thrown vertically upward at 20 m/s. Take g = 10 m/s² downward. Find the time to reach maximum height and the maximum height above the launch point.",

                    steps: [

                        "Choose upward as positive. Then u = 20 m/s and a = −10 m/s².",

                        "At maximum height v = 0. From v = u + at: 0 = 20 − 10t, so t = 2 s.",

                        "Use v² = u² + 2as: 0 = 400 − 20s, giving s = 20 m."

                    ]

                },

                jeeQuestion:
                    "A particle starts from rest with constant acceleration. If it travels distance S during the first 4 s, what distance does it travel during the first 8 s?",

                jeeOptions: [
                    "A. 2S",
                    "B. 3S",
                    "C. 4S",
                    "D. 8S"
                ],

                jeeAnswer:
                    "C. 4S",

                jeeExplanation:
                    "Starting from rest under constant acceleration, s = ½at², so displacement is proportional to t². Doubling time from 4 s to 8 s multiplies displacement by 4.",

                checkQuestion:
                    "Before using a constant-acceleration equation, what must you verify?",

                checkOptions: [

                    {
                        text: "The object is moving in the positive direction",
                        correct: false
                    },

                    {
                        text: "Acceleration is constant over the interval",
                        correct: true
                    },

                    {
                        text: "Initial velocity is zero",
                        correct: false
                    },

                    {
                        text: "Displacement is positive",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. The standard equations of uniformly accelerated motion require constant acceleration.",

                incorrectFeedback:
                    "The key assumption behind the standard equations of motion is uniform, or constant, acceleration."
            }

        ]

    },


    "Laws of Motion": {

        description:
            "Understand forces and motion using Newton's laws, free-body diagrams, friction, tension and connected-body systems.",

        lessons: [

            /* =================================================
               LESSON 1
               ================================================= */

            {
                title:
                    "Force, Inertia and Newton's First Law",

                description:
                    "Understand force, inertia, equilibrium and why an object does not need a net force to keep moving.",

                intro:
                    "Newton's laws connect the forces acting on an object with changes in its motion. The first law establishes the idea of inertia and defines the special role of inertial reference frames.",

                conceptTitle:
                    "Newton's First Law",

                conceptText:
                    "An object remains at rest or continues moving with constant velocity unless acted upon by a non-zero net external force.",

                body:
                    "Force is an interaction capable of changing an object's velocity. If all external forces balance, the net force is zero and acceleration is zero. This does not necessarily mean the object is at rest; it may move with constant velocity.",

                keyIdeas: [

                    {
                        label: "Net Force",

                        formula:
                            "F_net = ΣF",

                        text:
                            "The net force is the vector sum of all external forces acting on the object."
                    },

                    {
                        label: "Equilibrium",

                        formula:
                            "ΣF = 0",

                        text:
                            "When the net external force is zero, acceleration is zero."
                    },

                    {
                        label: "Inertia",

                        formula:
                            "Inertia ∝ mass",

                        text:
                            "Mass measures an object's resistance to changes in its velocity."
                    }

                ],

                example: {

                    problem:
                        "A car moves along a straight horizontal road at a constant velocity of 20 m/s. What is the net force on the car?",

                    steps: [

                        "The velocity is constant.",

                        "Therefore the acceleration is zero.",

                        "From Newton's laws, zero acceleration means the net external force is zero.",

                        "The engine may still exert a forward force, but it is balanced by resistive forces.",

                        "Net force = 0 N."

                    ]

                },

                jeeQuestion:
                    "A block moves with constant velocity across a rough horizontal surface while being pulled horizontally. Which statement is correct?",

                jeeOptions: [

                    "No forces act on the block.",

                    "The pulling force is greater than friction.",

                    "The pulling force equals the friction force.",

                    "The friction force is zero."

                ],

                jeeAnswer:
                    2,

                jeeExplanation:
                    "Constant velocity means acceleration is zero, so the net horizontal force must be zero. Therefore the pulling force and friction have equal magnitudes and opposite directions.",

                checkQuestion:
                    "If the net external force on an object is zero, which statement must be true?",

                checkOptions: [

                    {
                        text:
                            "The object must be at rest.",
                        correct: false
                    },

                    {
                        text:
                            "The object's acceleration is zero.",
                        correct: true
                    },

                    {
                        text:
                            "The object's velocity is zero.",
                        correct: false
                    },

                    {
                        text:
                            "No individual forces can act on the object.",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. Zero net force means zero acceleration.",

                incorrectFeedback:
                    "Remember that zero net force means velocity does not change. The velocity itself does not have to be zero."
            },


            /* =================================================
               LESSON 2
               ================================================= */

            {
                title:
                    "Newton's Second Law",

                description:
                    "Use net force and mass to determine acceleration.",

                intro:
                    "Newton's second law gives the quantitative relationship between force and acceleration and is the central equation used in force problems.",

                conceptTitle:
                    "Net Force Produces Acceleration",

                conceptText:
                    "The acceleration of an object is determined by the net external force acting on it and its mass.",

                body:
                    "Newton's second law is a vector equation. Forces must therefore be resolved into components when they act in different directions. The equation should be applied separately along each chosen coordinate axis.",

                keyIdeas: [

                    {
                        label:
                            "Newton's Second Law",

                        formula:
                            "ΣF = ma",

                        text:
                            "The vector sum of external forces equals mass multiplied by acceleration."
                    },

                    {
                        label:
                            "Horizontal Direction",

                        formula:
                            "ΣF_x = ma_x",

                        text:
                            "Apply Newton's second law independently along the x-axis."
                    },

                    {
                        label:
                            "Vertical Direction",

                        formula:
                            "ΣF_y = ma_y",

                        text:
                            "Apply Newton's second law independently along the y-axis."
                    }

                ],

                example: {

                    problem:
                        "A net horizontal force of 18 N acts on a 6 kg block. Find its acceleration.",

                    steps: [

                        "Use Newton's second law: F_net = ma.",

                        "Substitute F_net = 18 N and m = 6 kg.",

                        "18 = 6a.",

                        "a = 3 m/s²."

                    ]

                },

                jeeQuestion:
                    "Two horizontal forces of 20 N and 8 N act in opposite directions on a 4 kg block. What is the magnitude of its acceleration?",

                jeeOptions: [

                    "2 m/s²",

                    "3 m/s²",

                    "5 m/s²",

                    "7 m/s²"

                ],

                jeeAnswer:
                    1,

                jeeExplanation:
                    "The net force is 20 − 8 = 12 N. Therefore a = F_net/m = 12/4 = 3 m/s².",

                checkQuestion:
                    "The same net force is applied separately to masses m and 2m. How does the acceleration of 2m compare with that of m?",

                checkOptions: [

                    {
                        text:
                            "It is twice as large.",
                        correct: false
                    },

                    {
                        text:
                            "It is four times as large.",
                        correct: false
                    },

                    {
                        text:
                            "It is half as large.",
                        correct: true
                    },

                    {
                        text:
                            "It is the same.",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. For a fixed net force, acceleration is inversely proportional to mass.",

                incorrectFeedback:
                    "Use a = F/m. Doubling the mass while keeping force fixed halves the acceleration."
            },


            /* =================================================
               LESSON 3
               ================================================= */

            {
                title:
                    "Free-Body Diagrams and Common Forces",

                description:
                    "Identify weight, normal force, tension and applied forces using free-body diagrams.",

                intro:
                    "Most Newton's-law problems become easier once every external force acting on the chosen object is identified correctly.",

                conceptTitle:
                    "Isolate the Object",

                conceptText:
                    "A free-body diagram represents one chosen object and shows only the external forces acting directly on that object.",

                body:
                    "Common forces include gravitational force, normal force, tension and friction. A normal force acts perpendicular to a contact surface. Tension acts along a taut string or rope. Weight acts vertically downward near Earth's surface.",

                keyIdeas: [

                    {
                        label:
                            "Weight",

                        formula:
                            "W = mg",

                        text:
                            "Near Earth's surface, gravitational force has magnitude mg and acts downward."
                    },

                    {
                        label:
                            "Normal Force",

                        formula:
                            "N ⟂ surface",

                        text:
                            "The normal force is perpendicular to the contact surface."
                    },

                    {
                        label:
                            "Tension",

                        formula:
                            "T along string",

                        text:
                            "For an ideal light string, tension acts along the string."
                    }

                ],

                example: {

                    problem:
                        "A 5 kg block rests on a horizontal table. Taking g = 10 m/s², find the normal force.",

                    steps: [

                        "The block has no vertical acceleration.",

                        "Weight acts downward: W = mg = 5 × 10 = 50 N.",

                        "The normal force acts upward.",

                        "Vertical equilibrium gives N − 50 = 0.",

                        "N = 50 N."

                    ]

                },

                jeeQuestion:
                    "A block rests on a horizontal surface. Which pair of forces acts directly on the block in the vertical direction?",

                jeeOptions: [

                    "Weight downward and normal force upward",

                    "Weight upward and normal force downward",

                    "Friction downward and weight upward",

                    "Tension upward and friction downward"

                ],

                jeeAnswer:
                    0,

                jeeExplanation:
                    "The Earth exerts the gravitational force downward and the surface exerts the normal force upward.",

                checkQuestion:
                    "Which statement about the normal force is generally correct?",

                checkOptions: [

                    {
                        text:
                            "It always equals mg.",
                        correct: false
                    },

                    {
                        text:
                            "It always acts vertically upward.",
                        correct: false
                    },

                    {
                        text:
                            "It acts perpendicular to the contact surface.",
                        correct: true
                    },

                    {
                        text:
                            "It is always greater than weight.",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. The normal force is defined by its direction perpendicular to the contact surface.",

                incorrectFeedback:
                    "The normal force is not automatically equal to mg. Its defining feature is that it acts perpendicular to the contact surface."
            },


            /* =================================================
               LESSON 4
               ================================================= */

            {
                title:
                    "Friction",

                description:
                    "Distinguish static and kinetic friction and solve limiting-friction problems.",

                intro:
                    "Friction acts between contacting surfaces and opposes relative motion or the tendency of relative motion.",

                conceptTitle:
                    "Static and Kinetic Friction",

                conceptText:
                    "Static friction adjusts up to a limiting value, while kinetic friction acts when surfaces slide relative to each other.",

                body:
                    "A common mistake is to assume static friction always equals μₛN. In fact, static friction takes whatever value is required to prevent slipping, up to the maximum value μₛN.",

                keyIdeas: [

                    {
                        label:
                            "Static Friction",

                        formula:
                            "f_s ≤ μ_s N",

                        text:
                            "Static friction varies from zero up to its limiting value."
                    },

                    {
                        label:
                            "Maximum Static Friction",

                        formula:
                            "f_s,max = μ_s N",

                        text:
                            "This is the largest possible static friction before slipping begins."
                    },

                    {
                        label:
                            "Kinetic Friction",

                        formula:
                            "f_k = μ_k N",

                        text:
                            "Kinetic friction applies when the surfaces are sliding."
                    }

                ],

                example: {

                    problem:
                        "A 10 kg block rests on a horizontal surface with coefficient of static friction 0.4. Taking g = 10 m/s², find the maximum static friction.",

                    steps: [

                        "On the horizontal surface, N = mg.",

                        "N = 10 × 10 = 100 N.",

                        "Maximum static friction is μₛN.",

                        "f_s,max = 0.4 × 100.",

                        "f_s,max = 40 N."

                    ]

                },

                jeeQuestion:
                    "A 10 kg block rests on a horizontal rough surface with μₛ = 0.5. A horizontal force of 30 N is applied. Take g = 10 m/s². What is the static friction force?",

                jeeOptions: [

                    "0 N",

                    "30 N",

                    "50 N",

                    "100 N"

                ],

                jeeAnswer:
                    1,

                jeeExplanation:
                    "The maximum static friction is μₛN = 0.5 × 100 = 50 N. Since only 30 N is required to prevent motion, static friction is 30 N.",

                checkQuestion:
                    "A block remains at rest while a 15 N horizontal force is applied. If the maximum possible static friction is 40 N, what is the actual friction force?",

                checkOptions: [

                    {
                        text:
                            "15 N",
                        correct: true
                    },

                    {
                        text:
                            "25 N",
                        correct: false
                    },

                    {
                        text:
                            "40 N",
                        correct: false
                    },

                    {
                        text:
                            "0 N",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. Static friction adjusts to 15 N because that is all that is required to prevent motion.",

                incorrectFeedback:
                    "μₛN gives the maximum static friction, not necessarily the actual friction force."
            },


            /* =================================================
               LESSON 5
               ================================================= */

            {
                title:
                    "Newton's Third Law and Connected Bodies",

                description:
                    "Apply action-reaction pairs and analyze connected blocks and tension.",

                intro:
                    "Newton's third law describes interactions between two bodies. Connected-body problems then combine these interactions with Newton's second law.",

                conceptTitle:
                    "Forces Come in Interaction Pairs",

                conceptText:
                    "If object A exerts a force on object B, object B simultaneously exerts an equal-magnitude, opposite-direction force on object A.",

                body:
                    "Third-law forces act on different objects, so they do not cancel on a single free-body diagram. For connected blocks, treating the entire system first can simplify the acceleration calculation. Individual blocks can then be analyzed to find tension.",

                keyIdeas: [

                    {
                        label:
                            "Third Law",

                        formula:
                            "F_AB = −F_BA",

                        text:
                            "Interaction forces have equal magnitude and opposite direction."
                    },

                    {
                        label:
                            "System Acceleration",

                        formula:
                            "a = F_ext / M_total",

                        text:
                            "For a connected system, internal tensions cancel when the whole system is considered."
                    },

                    {
                        label:
                            "Ideal String",

                        formula:
                            "T = constant",

                        text:
                            "For a massless ideal string over ideal connections, the tension is the same throughout the string."
                    }

                ],

                example: {

                    problem:
                        "Blocks of 2 kg and 3 kg are connected on a frictionless horizontal surface. A horizontal external force of 10 N pulls the system. Find the acceleration.",

                    steps: [

                        "Treat both blocks as one system.",

                        "Total mass = 2 + 3 = 5 kg.",

                        "The external horizontal force is 10 N.",

                        "Use F = ma.",

                        "10 = 5a.",

                        "a = 2 m/s²."

                    ]

                },

                jeeQuestion:
                    "Two blocks of 2 kg and 3 kg are connected by a light string on a frictionless horizontal surface. A 10 N force pulls the 3 kg block. What is the tension in the string?",

                jeeOptions: [

                    "2 N",

                    "4 N",

                    "6 N",

                    "10 N"

                ],

                jeeAnswer:
                    1,

                jeeExplanation:
                    "The system acceleration is 10/(2+3) = 2 m/s². The only horizontal force on the 2 kg block is tension, so T = 2 × 2 = 4 N.",

                checkQuestion:
                    "Why do Newton's third-law force pairs not cancel each other on the free-body diagram of one object?",

                checkOptions: [

                    {
                        text:
                            "They have different magnitudes.",
                        correct: false
                    },

                    {
                        text:
                            "They act at different times.",
                        correct: false
                    },

                    {
                        text:
                            "They act on different objects.",
                        correct: true
                    },

                    {
                        text:
                            "They point in the same direction.",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. A third-law pair consists of forces acting on two different objects.",

                incorrectFeedback:
                    "Third-law forces are equal and opposite, but they act on different objects."
            },


            /* =================================================
               LESSON 6
               ================================================= */

            {
                title:
                    "Laws of Motion Review",

                description:
                    "Combine Newton's laws, free-body diagrams, friction and connected-body reasoning.",

                intro:
                    "JEE mechanics problems often require several ideas at once. The most reliable strategy is to choose the object or system, draw the forces, choose axes and then apply Newton's second law.",

                conceptTitle:
                    "A Systematic Force-Problem Strategy",

                conceptText:
                    "Choose the system, identify external forces, draw a free-body diagram, resolve forces along convenient axes and apply ΣF = ma.",

                body:
                    "Do not begin by selecting a formula. Begin by identifying the physical system and the forces acting on it. On inclined surfaces, axes parallel and perpendicular to the incline are often the most useful.",

                keyIdeas: [

                    {
                        label:
                            "Step 1",

                        formula:
                            "Choose system",

                        text:
                            "Decide exactly which object or collection of objects you are analyzing."
                    },

                    {
                        label:
                            "Step 2",

                        formula:
                            "Draw FBD",

                        text:
                            "Include only external forces acting on the selected system."
                    },

                    {
                        label:
                            "Step 3",

                        formula:
                            "ΣF = ma",

                        text:
                            "Resolve forces and apply Newton's second law along each useful axis."
                    }

                ],

                example: {

                    problem:
                        "A 5 kg block slides on a horizontal surface with coefficient of kinetic friction 0.2. A horizontal force of 20 N pulls it. Taking g = 10 m/s², find its acceleration.",

                    steps: [

                        "Normal force N = mg = 50 N.",

                        "Kinetic friction fₖ = μₖN = 0.2 × 50 = 10 N.",

                        "Net horizontal force = 20 − 10 = 10 N.",

                        "Use F_net = ma.",

                        "10 = 5a.",

                        "a = 2 m/s²."

                    ]

                },

                jeeQuestion:
                    "A 4 kg block is pulled horizontally by a 20 N force on a surface where kinetic friction is 8 N. What is its acceleration?",

                jeeOptions: [

                    "2 m/s²",

                    "3 m/s²",

                    "5 m/s²",

                    "7 m/s²"

                ],

                jeeAnswer:
                    1,

                jeeExplanation:
                    "The net force is 20 − 8 = 12 N. Therefore a = 12/4 = 3 m/s².",

                checkQuestion:
                    "Which should normally be done before writing Newton's second-law equations for a mechanics problem?",

                checkOptions: [

                    {
                        text:
                            "Assume the normal force equals mg.",
                        correct: false
                    },

                    {
                        text:
                            "Identify the system and the forces acting on it.",
                        correct: true
                    },

                    {
                        text:
                            "Set friction equal to μN in every problem.",
                        correct: false
                    },

                    {
                        text:
                            "Assume acceleration is in the direction of velocity.",
                        correct: false
                    }

                ],

                correctFeedback:
                    "Correct. Choosing the system and identifying its external forces comes first.",

                incorrectFeedback:
                    "Start by identifying the system and drawing the forces. The equations follow from that model."
            }


        ]

    },

    "Work, Energy and Power": {

        description:
            "Learn how forces transfer energy, how energy is stored and conserved, and how quickly work is performed.",

        lessons: [

            // LESSON 1
            {
                title: "Work and the Work–Energy Theorem",

                description:
                    "Understand work done by a force and its connection to changes in kinetic energy.",

                intro:
                    "In physics, work occurs when a force acts through a displacement. The amount of work depends on the force, displacement and angle between them.",

                conceptTitle:
                    "Work transfers energy between a system and its surroundings.",

                conceptText:
                    "For a constant force, work is the dot product of force and displacement. Net work equals the change in kinetic energy.",

                body:
                    "Work is positive when the force has a component along displacement, negative when it opposes displacement, and zero when it is perpendicular. The SI unit of work is the joule (J). The work–energy theorem is valid even when multiple forces act on an object.",

                keyIdeas: [
                    {
                        label: "WORK",
                        formula: "W = Fs cos θ",
                        text:
                            "Work by a constant force equals force times displacement times the cosine of the angle between them."
                    },
                    {
                        label: "NET WORK",
                        formula: "Wₙₑₜ = ΔK",
                        text:
                            "The total work done by all forces equals the change in kinetic energy."
                    },
                    {
                        label: "ZERO WORK",
                        formula: "θ = 90° ⇒ W = 0",
                        text:
                            "A force perpendicular to displacement performs no work."
                    }
                ],

                example: {
                    problem:
                        "A 5 kg block initially at rest is pulled horizontally through 4 m by a constant net force of 10 N. Find its final speed.",

                    steps: [
                        "Net work = Fs = 10 × 4 = 40 J.",
                        "By the work–energy theorem, Wₙₑₜ = ΔK.",
                        "Since the block starts from rest, 40 = ½mv².",
                        "40 = ½ × 5 × v².",
                        "v² = 16, so v = 4 m/s."
                    ]
                },

                jeeQuestion:
                    "A force of 20 N acts at 60° to a displacement of 5 m. How much work does the force perform?",

                jeeOptions: [
                    "25 J",
                    "50 J",
                    "100 J",
                    "200 J"
                ],

                jeeAnswer: 1,

                jeeExplanation:
                    "W = Fs cos θ = 20 × 5 × cos 60° = 50 J.",

                checkQuestion:
                    "Which statement correctly describes net work?",

                checkOptions: [
                    {
                        text: "Net work always equals the initial kinetic energy.",
                        correct: false
                    },
                    {
                        text: "Net work equals the change in kinetic energy.",
                        correct: true
                    },
                    {
                        text: "Net work is always positive.",
                        correct: false
                    },
                    {
                        text: "Net work depends only on time.",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. The work–energy theorem states Wₙₑₜ = ΔK.",

                incorrectFeedback:
                    "Remember that net work changes an object's kinetic energy."
            },

            // LESSON 2
            {
                title: "Kinetic and Potential Energy",

                description:
                    "Calculate the energy associated with motion, height and elastic deformation.",

                intro:
                    "Objects can possess energy because they move or because of their position or configuration.",

                conceptTitle:
                    "Kinetic energy depends on speed; potential energy depends on configuration.",

                conceptText:
                    "Kinetic energy is associated with motion. Gravitational and elastic potential energies are associated with interactions and stored configurations.",

                body:
                    "Kinetic energy is proportional to the square of speed. Near Earth's surface, gravitational potential energy changes with height. An ideal spring stores elastic potential energy when stretched or compressed. Potential energy belongs to the interacting system, such as an object and Earth or a mass and spring.",

                keyIdeas: [
                    {
                        label: "KINETIC ENERGY",
                        formula: "K = ½mv²",
                        text:
                            "Energy associated with motion."
                    },
                    {
                        label: "GRAVITATIONAL POTENTIAL ENERGY",
                        formula: "U = mgh",
                        text:
                            "Potential energy relative to a chosen reference height near Earth's surface."
                    },
                    {
                        label: "ELASTIC POTENTIAL ENERGY",
                        formula: "U = ½kx²",
                        text:
                            "Energy stored in an ideal spring stretched or compressed by x."
                    }
                ],

                example: {
                    problem:
                        "A 2 kg object moves at 6 m/s at a height of 5 m. Find its kinetic and gravitational potential energies. Take g = 10 m/s² and zero potential energy at ground level.",

                    steps: [
                        "Kinetic energy K = ½mv².",
                        "K = ½ × 2 × 6² = 36 J.",
                        "Gravitational potential energy U = mgh.",
                        "U = 2 × 10 × 5 = 100 J.",
                        "Total mechanical energy = 36 + 100 = 136 J."
                    ]
                },

                jeeQuestion:
                    "If the speed of an object doubles while its mass stays constant, its kinetic energy becomes:",

                jeeOptions: [
                    "Twice the original",
                    "Three times the original",
                    "Four times the original",
                    "Eight times the original"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "Kinetic energy is proportional to v². Doubling speed multiplies kinetic energy by four.",

                checkQuestion:
                    "Which quantity determines the elastic potential energy stored in an ideal spring?",

                checkOptions: [
                    {
                        text: "Only the mass attached to the spring",
                        correct: false
                    },
                    {
                        text: "Spring constant and squared deformation",
                        correct: true
                    },
                    {
                        text: "Only the velocity of the spring",
                        correct: false
                    },
                    {
                        text: "Only the time of compression",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Elastic potential energy is U = ½kx².",

                incorrectFeedback:
                    "Review the elastic potential energy equation U = ½kx²."
            },

            // LESSON 3
            {
                title: "Conservative and Non-Conservative Forces",

                description:
                    "Distinguish path-independent forces from forces that change mechanical energy.",

                intro:
                    "Some forces do work that depends only on the starting and ending positions. Other forces can do different amounts of work along different paths.",

                conceptTitle:
                    "Conservative forces have path-independent work.",

                conceptText:
                    "Gravity and ideal spring forces are conservative. Kinetic friction is non-conservative because its work depends on the distance traveled.",

                body:
                    "For a conservative force, work equals the negative change in its associated potential energy. Over a closed path, the total work done by a conservative force is zero. Non-conservative forces, such as kinetic friction, can transform mechanical energy into thermal energy. Total energy is still conserved when all forms of energy are included.",

                keyIdeas: [
                    {
                        label: "CONSERVATIVE WORK",
                        formula: "W꜀ = −ΔU",
                        text:
                            "Work by a conservative force is the negative change in potential energy."
                    },
                    {
                        label: "CLOSED PATH",
                        formula: "W꜀ = 0",
                        text:
                            "A conservative force does zero net work over a closed path."
                    },
                    {
                        label: "FRICTION",
                        formula: "W𝒇 = −fₖd",
                        text:
                            "Kinetic friction opposes sliding and performs negative work over sliding distance d."
                    }
                ],

                example: {
                    problem:
                        "A 3 kg object moves downward through 4 m. Find the work done by gravity. Take g = 10 m/s².",

                    steps: [
                        "Gravity acts downward with magnitude mg.",
                        "The displacement is also downward.",
                        "W = mgd cos 0°.",
                        "W = 3 × 10 × 4 = 120 J.",
                        "The work is positive because force and displacement are aligned."
                    ]
                },

                jeeQuestion:
                    "Which of the following is a conservative force?",

                jeeOptions: [
                    "Kinetic friction",
                    "Air resistance",
                    "Gravitational force",
                    "Viscous drag"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "Gravitational force is conservative; its work depends only on the initial and final positions.",

                checkQuestion:
                    "What is the work done by a conservative force around a closed path?",

                checkOptions: [
                    {
                        text: "Always positive",
                        correct: false
                    },
                    {
                        text: "Always negative",
                        correct: false
                    },
                    {
                        text: "Zero",
                        correct: true
                    },
                    {
                        text: "Equal to the total distance",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Conservative forces do zero work over a closed path.",

                incorrectFeedback:
                    "A conservative force depends only on the endpoints, so a closed path gives zero net work."
            },

            // LESSON 4
            {
                title: "Conservation of Mechanical Energy",

                description:
                    "Use energy conservation to solve motion problems without calculating time.",

                intro:
                    "When only conservative forces do work on a system, its mechanical energy remains constant.",

                conceptTitle:
                    "Energy can change form without changing the total mechanical energy.",

                conceptText:
                    "Kinetic and potential energy may increase or decrease, but their sum stays constant when no non-conservative work is done.",

                body:
                    "Mechanical energy is the sum of kinetic and potential energy. For a freely falling object without air resistance, gravitational potential energy converts into kinetic energy. For a spring–mass system without friction, elastic potential energy can convert into kinetic energy. When non-conservative forces do work, their work equals the change in mechanical energy.",

                keyIdeas: [
                    {
                        label: "MECHANICAL ENERGY",
                        formula: "E = K + U",
                        text:
                            "Mechanical energy combines kinetic and potential energy."
                    },
                    {
                        label: "CONSERVATION",
                        formula: "Kᵢ + Uᵢ = K𝒇 + U𝒇",
                        text:
                            "Mechanical energy is conserved when only conservative forces do work."
                    },
                    {
                        label: "NON-CONSERVATIVE WORK",
                        formula: "Wₙ꜀ = Δ(K + U)",
                        text:
                            "Work by non-conservative forces changes mechanical energy."
                    }
                ],

                example: {
                    problem:
                        "A ball is dropped from rest at a height of 20 m. Find its speed just before reaching the ground. Ignore air resistance and take g = 10 m/s².",

                    steps: [
                        "Choose gravitational potential energy to be zero at ground level.",
                        "Initially Kᵢ = 0 and Uᵢ = mgh.",
                        "Just before impact, U𝒇 = 0 and K𝒇 = ½mv².",
                        "Conservation gives mgh = ½mv².",
                        "Cancel m: v² = 2gh = 2 × 10 × 20 = 400.",
                        "Therefore v = 20 m/s."
                    ]
                },

                jeeQuestion:
                    "A body falls freely from rest through a height of 5 m. What is its speed after falling this distance? Take g = 10 m/s².",

                jeeOptions: [
                    "5 m/s",
                    "10 m/s",
                    "15 m/s",
                    "20 m/s"
                ],

                jeeAnswer: 1,

                jeeExplanation:
                    "v = √(2gh) = √(2 × 10 × 5) = 10 m/s.",

                checkQuestion:
                    "When is mechanical energy conserved?",

                checkOptions: [
                    {
                        text: "Whenever the object moves",
                        correct: false
                    },
                    {
                        text: "When only conservative forces do work",
                        correct: true
                    },
                    {
                        text: "Whenever friction is present",
                        correct: false
                    },
                    {
                        text: "Only when kinetic energy is zero",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Mechanical energy is conserved when non-conservative work is zero.",

                incorrectFeedback:
                    "Mechanical energy remains constant when only conservative forces perform work."
            },

            // LESSON 5
            {
                title: "Power and Efficiency",

                description:
                    "Calculate the rate of doing work and the efficiency of energy conversion.",

                intro:
                    "Two machines may perform the same amount of work but take different amounts of time. Power measures how quickly work is performed.",

                conceptTitle:
                    "Power is the rate of energy transfer.",

                conceptText:
                    "Average power is work divided by elapsed time. Instantaneous mechanical power equals the dot product of force and velocity.",

                body:
                    "The SI unit of power is the watt, equal to one joule per second. A machine with greater power can transfer energy faster. Efficiency compares useful output energy or power with total input energy or power. Efficiency cannot exceed 100% for a real energy-conversion device.",

                keyIdeas: [
                    {
                        label: "AVERAGE POWER",
                        formula: "P = W/t",
                        text:
                            "Average power is work divided by the time interval."
                    },
                    {
                        label: "INSTANTANEOUS POWER",
                        formula: "P = Fv cos θ",
                        text:
                            "Instantaneous mechanical power depends on force and velocity."
                    },
                    {
                        label: "EFFICIENCY",
                        formula: "η = (Useful output/Input) × 100%",
                        text:
                            "Efficiency measures the fraction of input energy or power delivered usefully."
                    }
                ],

                example: {
                    problem:
                        "A motor lifts a 50 kg load vertically through 4 m in 5 s. Find its average useful power. Take g = 10 m/s².",

                    steps: [
                        "Useful work done = mgh.",
                        "W = 50 × 10 × 4 = 2000 J.",
                        "Average power = W/t.",
                        "P = 2000/5 = 400 W.",
                        "The motor delivers 400 W of average useful power."
                    ]
                },

                jeeQuestion:
                    "A machine receives 500 W of input power and delivers 400 W of useful output power. What is its efficiency?",

                jeeOptions: [
                    "60%",
                    "70%",
                    "80%",
                    "90%"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "Efficiency = (400/500) × 100% = 80%.",

                checkQuestion:
                    "What is the SI unit of power?",

                checkOptions: [
                    {
                        text: "Joule",
                        correct: false
                    },
                    {
                        text: "Newton",
                        correct: false
                    },
                    {
                        text: "Watt",
                        correct: true
                    },
                    {
                        text: "Meter",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. One watt equals one joule per second.",

                incorrectFeedback:
                    "Power is measured in watts (W), where 1 W = 1 J/s."
            },

            // LESSON 6
            {
                title: "Work, Energy and Power Review",

                description:
                    "Combine work, energy conservation, friction and power to solve multi-step problems.",

                intro:
                    "JEE mechanics problems often combine several ideas. Choosing the right energy principle can make a complicated problem much simpler.",

                conceptTitle:
                    "Identify the system, forces and energy changes before calculating.",

                conceptText:
                    "Use the work–energy theorem for net work, mechanical energy conservation when only conservative forces do work, and the general energy equation when friction or other non-conservative work is present.",

                body:
                    "Start by identifying the initial and final states. Determine whether the system contains gravitational or elastic potential energy. Check for friction and other non-conservative forces. Write an energy equation, substitute the known quantities, and verify that the units and physical result make sense.",

                keyIdeas: [
                    {
                        label: "WORK–ENERGY THEOREM",
                        formula: "Wₙₑₜ = ΔK",
                        text:
                            "Use when net work changes kinetic energy."
                    },
                    {
                        label: "MECHANICAL ENERGY",
                        formula: "Kᵢ + Uᵢ + Wₙ꜀ = K𝒇 + U𝒇",
                        text:
                            "Include non-conservative work when mechanical energy changes."
                    },
                    {
                        label: "POWER",
                        formula: "P = dW/dt",
                        text:
                            "Power is the rate of doing work."
                    }
                ],

                example: {
                    problem:
                        "A 2 kg block starts from rest and slides down a track through a vertical height of 5 m. Friction does −20 J of work. Find its speed at the bottom. Take g = 10 m/s².",

                    steps: [
                        "Choose zero gravitational potential energy at the bottom.",
                        "Initial energy = mgh = 2 × 10 × 5 = 100 J.",
                        "Work done by friction = −20 J.",
                        "Final kinetic energy = 100 − 20 = 80 J.",
                        "½mv² = 80.",
                        "½ × 2 × v² = 80, so v² = 80.",
                        "v = √80 ≈ 8.94 m/s."
                    ]
                },

                jeeQuestion:
                    "A 4 kg object starts from rest and gains 200 J of kinetic energy. What is its final speed?",

                jeeOptions: [
                    "5 m/s",
                    "10 m/s",
                    "15 m/s",
                    "20 m/s"
                ],

                jeeAnswer: 1,

                jeeExplanation:
                    "½mv² = 200. Therefore ½ × 4 × v² = 200, giving v² = 100 and v = 10 m/s.",

                checkQuestion:
                    "Which equation is most useful when friction changes a system's mechanical energy?",

                checkOptions: [
                    {
                        text: "Kᵢ + Uᵢ = K𝒇 + U𝒇 in every situation",
                        correct: false
                    },
                    {
                        text: "Kᵢ + Uᵢ + Wₙ꜀ = K𝒇 + U𝒇",
                        correct: true
                    },
                    {
                        text: "Power always equals zero",
                        correct: false
                    },
                    {
                        text: "Potential energy must remain constant",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Non-conservative work accounts for changes in mechanical energy.",

                incorrectFeedback:
                    "Include the work done by friction or other non-conservative forces in the energy equation."
            }


        ]

    },

    "System of Particles and Rotational Motion": {

        description:
            "Understand the motion of systems of particles, torque, angular momentum, rotational inertia and rolling motion.",

        lessons: [

            // LESSON 1
            {
                title: "Centre of Mass",

                description:
                    "Find the centre of mass of systems of particles and understand its physical significance.",

                intro:
                    "A system of many particles can often be described using one special point called its centre of mass.",

                conceptTitle:
                    "The centre of mass is the mass-weighted average position.",

                conceptText:
                    "The centre of mass depends on how mass is distributed throughout a system.",

                body:
                    "For discrete particles, multiply each particle's position by its mass, add these products and divide by the total mass. The centre of mass may lie outside the physical material of an object, such as at the centre of a ring.",

                keyIdeas: [
                    {
                        label: "TWO PARTICLES",
                        formula: "x꜀ₘ = (m₁x₁ + m₂x₂)/(m₁ + m₂)",
                        text:
                            "The centre of mass of two particles is the weighted average of their positions."
                    },
                    {
                        label: "MULTIPLE PARTICLES",
                        formula: "r꜀ₘ = (Σmᵢrᵢ)/(Σmᵢ)",
                        text:
                            "The vector position of the centre of mass is the mass-weighted average position."
                    },
                    {
                        label: "SYMMETRY",
                        formula: "Uniform symmetric body → geometric centre",
                        text:
                            "For a uniform body with suitable symmetry, the centre of mass lies at its geometric centre."
                    }
                ],

                example: {
                    problem:
                        "Two particles of masses 2 kg and 3 kg are placed at x = 0 m and x = 10 m. Find their centre of mass.",

                    steps: [
                        "Use x꜀ₘ = (m₁x₁ + m₂x₂)/(m₁ + m₂).",
                        "Substitute the values: x꜀ₘ = (2 × 0 + 3 × 10)/(2 + 3).",
                        "x꜀ₘ = 30/5 = 6 m.",
                        "The centre of mass is 6 m from the origin."
                    ]
                },

                jeeQuestion:
                    "Two particles of masses 1 kg and 3 kg are located at x = 0 m and x = 8 m. Where is their centre of mass?",

                jeeOptions: [
                    "2 m",
                    "4 m",
                    "6 m",
                    "8 m"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "x꜀ₘ = (1 × 0 + 3 × 8)/4 = 6 m.",

                checkQuestion:
                    "What determines the centre of mass of a system?",

                checkOptions: [
                    {
                        text: "Only the total mass",
                        correct: false
                    },
                    {
                        text: "Masses and positions of the particles",
                        correct: true
                    },
                    {
                        text: "Only the largest particle",
                        correct: false
                    },
                    {
                        text: "Only the speed of the particles",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Centre of mass depends on mass distribution.",

                incorrectFeedback:
                    "Use the mass-weighted average of particle positions."
            },

            // LESSON 2
            {
                title: "Motion of the Centre of Mass",

                description:
                    "Relate the motion of a system's centre of mass to external forces and total momentum.",

                intro:
                    "Even when particles move in complicated ways, their centre of mass follows a simple rule determined by external forces.",

                conceptTitle:
                    "Only the net external force accelerates the centre of mass.",

                conceptText:
                    "Internal forces cancel in the total momentum balance for a system, leaving the net external force to determine centre-of-mass acceleration.",

                body:
                    "The total linear momentum of a system equals its total mass multiplied by the centre-of-mass velocity. For a system of constant total mass, the net external force equals total mass times centre-of-mass acceleration. If the net external force is zero, the centre of mass moves with constant velocity.",

                keyIdeas: [
                    {
                        label: "TOTAL MOMENTUM",
                        formula: "P = Mv꜀ₘ",
                        text:
                            "Total momentum equals total mass times centre-of-mass velocity."
                    },
                    {
                        label: "EXTERNAL FORCE",
                        formula: "Fₑₓₜ = Ma꜀ₘ",
                        text:
                            "Net external force determines centre-of-mass acceleration."
                    },
                    {
                        label: "MOMENTUM CONSERVATION",
                        formula: "Fₑₓₜ = 0 ⇒ P = constant",
                        text:
                            "Total momentum remains constant when net external force is zero."
                    }
                ],

                example: {
                    problem:
                        "A system has a total mass of 10 kg. A net external force of 30 N acts on it. Find the acceleration of its centre of mass.",

                    steps: [
                        "Use Fₑₓₜ = Ma꜀ₘ.",
                        "Substitute 30 = 10a꜀ₘ.",
                        "a꜀ₘ = 30/10.",
                        "The acceleration is 3 m/s²."
                    ]
                },

                jeeQuestion:
                    "Two particles of masses 2 kg and 3 kg move in the same direction at 4 m/s and 6 m/s. What is their centre-of-mass velocity?",

                jeeOptions: [
                    "4.0 m/s",
                    "5.0 m/s",
                    "5.2 m/s",
                    "6.0 m/s"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "v꜀ₘ = (2 × 4 + 3 × 6)/5 = 26/5 = 5.2 m/s.",

                checkQuestion:
                    "What happens to centre-of-mass velocity when the net external force is zero?",

                checkOptions: [
                    {
                        text: "It must become zero",
                        correct: false
                    },
                    {
                        text: "It remains constant",
                        correct: true
                    },
                    {
                        text: "It continuously increases",
                        correct: false
                    },
                    {
                        text: "It changes direction every second",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Zero net external force means constant total momentum.",

                incorrectFeedback:
                    "Remember that Fₑₓₜ = Ma꜀ₘ."
            },

            // LESSON 3
            {
                title: "Torque and Angular Momentum",

                description:
                    "Understand the turning effect of forces and the conservation of angular momentum.",

                intro:
                    "Forces can cause objects to rotate. Torque measures how effectively a force produces rotation.",

                conceptTitle:
                    "Torque changes angular momentum.",

                conceptText:
                    "Torque is the cross product of position vector and force. Net external torque equals the rate of change of angular momentum about a fixed inertial origin.",

                body:
                    "The magnitude of torque is rF sin θ, where θ is the angle between the position vector and force. Angular momentum of a particle about an origin is r × p. When net external torque about that origin is zero, angular momentum is conserved.",

                keyIdeas: [
                    {
                        label: "TORQUE",
                        formula: "τ = rF sin θ",
                        text:
                            "Torque depends on force, lever arm and angle."
                    },
                    {
                        label: "ANGULAR MOMENTUM",
                        formula: "L = r × p",
                        text:
                            "Angular momentum of a particle is the cross product of position and linear momentum."
                    },
                    {
                        label: "ROTATIONAL LAW",
                        formula: "τₑₓₜ = dL/dt",
                        text:
                            "Net external torque changes angular momentum."
                    }
                ],

                example: {
                    problem:
                        "A perpendicular force of 20 N acts at a distance of 0.5 m from a fixed pivot. Find the torque magnitude.",

                    steps: [
                        "Use τ = rF sin θ.",
                        "The force is perpendicular, so θ = 90°.",
                        "τ = 0.5 × 20 × 1.",
                        "Torque magnitude = 10 N·m."
                    ]
                },

                jeeQuestion:
                    "A 10 N force acts perpendicular to a 2 m lever arm. What torque does it produce?",

                jeeOptions: [
                    "5 N·m",
                    "10 N·m",
                    "20 N·m",
                    "40 N·m"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "τ = rF sin 90° = 2 × 10 = 20 N·m.",

                checkQuestion:
                    "When is angular momentum conserved about a fixed inertial origin?",

                checkOptions: [
                    {
                        text: "When net external torque is zero",
                        correct: true
                    },
                    {
                        text: "Whenever a force acts",
                        correct: false
                    },
                    {
                        text: "Only when the object is at rest",
                        correct: false
                    },
                    {
                        text: "Whenever kinetic energy increases",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Zero net external torque means angular momentum is conserved.",

                incorrectFeedback:
                    "Use the relationship τₑₓₜ = dL/dt."
            },

            // LESSON 4
            {
                title: "Moment of Inertia",

                description:
                    "Calculate rotational inertia and understand how mass distribution affects rotation.",

                intro:
                    "Objects with the same mass can resist changes in rotational motion differently because their mass is distributed differently.",

                conceptTitle:
                    "Moment of inertia is rotational resistance to angular acceleration.",

                conceptText:
                    "Moment of inertia depends on the chosen axis of rotation and the distances of mass elements from that axis.",

                body:
                    "For discrete particles, moment of inertia is the sum of mr². For continuous bodies, use integration. The parallel-axis theorem relates the moment of inertia about an axis through the centre of mass to that about a parallel displaced axis.",

                keyIdeas: [
                    {
                        label: "POINT MASSES",
                        formula: "I = Σmᵢrᵢ²",
                        text:
                            "Each particle contributes mass times squared perpendicular distance from the axis."
                    },
                    {
                        label: "PARALLEL-AXIS THEOREM",
                        formula: "I = I꜀ₘ + Md²",
                        text:
                            "Shift from a centre-of-mass axis by distance d."
                    },
                    {
                        label: "UNIFORM SOLID DISK",
                        formula: "I = ½MR²",
                        text:
                            "Moment of inertia about the central symmetry axis."
                    }
                ],

                example: {
                    problem:
                        "Two point masses of 2 kg each are located 0.5 m from a rotation axis. Find the total moment of inertia.",

                    steps: [
                        "Use I = Σmr².",
                        "Each mass contributes 2 × (0.5)².",
                        "Each contribution equals 0.5 kg·m².",
                        "Total moment of inertia = 1 kg·m²."
                    ]
                },

                jeeQuestion:
                    "A point mass of 4 kg is located 0.5 m from a rotation axis. What is its moment of inertia?",

                jeeOptions: [
                    "0.5 kg·m²",
                    "1 kg·m²",
                    "2 kg·m²",
                    "4 kg·m²"
                ],

                jeeAnswer: 1,

                jeeExplanation:
                    "I = mr² = 4 × (0.5)² = 1 kg·m².",

                checkQuestion:
                    "What happens to a point mass's moment of inertia if its distance from the rotation axis doubles?",

                checkOptions: [
                    {
                        text: "It doubles",
                        correct: false
                    },
                    {
                        text: "It becomes four times as large",
                        correct: true
                    },
                    {
                        text: "It becomes half as large",
                        correct: false
                    },
                    {
                        text: "It stays unchanged",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Moment of inertia is proportional to r².",

                incorrectFeedback:
                    "Use I = mr² to determine how distance affects rotational inertia."
            },

            // LESSON 5
            {
                title: "Rotational Dynamics",

                description:
                    "Connect torque, angular acceleration and rotational kinetic energy.",

                intro:
                    "Rotational dynamics describes how torques change the rotational motion of rigid bodies.",

                conceptTitle:
                    "Torque plays a role similar to force in linear motion.",

                conceptText:
                    "For rotation about a fixed principal axis of a rigid body with constant moment of inertia, net torque equals I times angular acceleration.",

                body:
                    "Angular velocity measures how rapidly angular position changes. Angular acceleration measures the rate of change of angular velocity. Rotational kinetic energy is ½Iω². For a rigid body rotating about a fixed axis, the work done by torque changes its rotational kinetic energy.",

                keyIdeas: [
                    {
                        label: "ROTATIONAL NEWTON'S LAW",
                        formula: "τₙₑₜ = Iα",
                        text:
                            "Net torque equals moment of inertia times angular acceleration for fixed-axis rotation."
                    },
                    {
                        label: "ROTATIONAL KINETIC ENERGY",
                        formula: "Kᵣₒₜ = ½Iω²",
                        text:
                            "Energy associated with rotation about a fixed axis."
                    },
                    {
                        label: "ANGULAR ACCELERATION",
                        formula: "α = Δω/Δt",
                        text:
                            "Average angular acceleration is change in angular velocity divided by time."
                    }
                ],

                example: {
                    problem:
                        "A wheel has a moment of inertia of 2 kg·m². A net torque of 10 N·m acts about its fixed axis. Find its angular acceleration.",

                    steps: [
                        "Use τₙₑₜ = Iα.",
                        "Substitute 10 = 2α.",
                        "α = 10/2.",
                        "Angular acceleration = 5 rad/s²."
                    ]
                },

                jeeQuestion:
                    "A rigid wheel has moment of inertia 3 kg·m² and angular speed 4 rad/s. What is its rotational kinetic energy?",

                jeeOptions: [
                    "12 J",
                    "18 J",
                    "24 J",
                    "48 J"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "Kᵣₒₜ = ½Iω² = ½ × 3 × 16 = 24 J.",

                checkQuestion:
                    "For fixed-axis rotation, which equation relates net torque and angular acceleration?",

                checkOptions: [
                    {
                        text: "τ = Iα",
                        correct: true
                    },
                    {
                        text: "τ = mv",
                        correct: false
                    },
                    {
                        text: "τ = mgh",
                        correct: false
                    },
                    {
                        text: "τ = P/t",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Net torque equals Iα for fixed-axis rotation.",

                incorrectFeedback:
                    "The rotational analogue of F = ma is τ = Iα."
            },

            // LESSON 6
            {
                title: "Rolling Motion and Chapter Review",

                description:
                    "Combine translation, rotation and energy conservation in rolling-motion problems.",

                intro:
                    "A rolling object can move forward while simultaneously rotating about its centre of mass.",

                conceptTitle:
                    "Pure rolling combines translation and rotation without slipping.",

                conceptText:
                    "For rolling without slipping on a stationary surface, the centre-of-mass speed equals angular speed times radius.",

                body:
                    "The kinetic energy of a rolling rigid body is the sum of translational and rotational kinetic energy about its centre of mass. On a fixed incline, static friction can provide torque while doing no work on a rigid body in pure rolling. Energy conservation can determine the speed of a rolling object when dissipative losses are negligible.",

                keyIdeas: [
                    {
                        label: "PURE ROLLING",
                        formula: "v꜀ₘ = ωR",
                        text:
                            "The no-slip condition relates translational and angular speed."
                    },
                    {
                        label: "TOTAL KINETIC ENERGY",
                        formula: "K = ½Mv꜀ₘ² + ½I꜀ₘω²",
                        text:
                            "Rolling kinetic energy includes translation and rotation."
                    },
                    {
                        label: "ANGULAR MOMENTUM",
                        formula: "τₑₓₜ = dL/dt",
                        text:
                            "Net external torque controls changes in angular momentum."
                    }
                ],

                example: {
                    problem:
                        "A uniform solid disk of mass 2 kg and radius 0.5 m rolls without slipping at 4 m/s. Find its total kinetic energy.",

                    steps: [
                        "For a solid disk, I꜀ₘ = ½MR².",
                        "I꜀ₘ = ½ × 2 × (0.5)² = 0.25 kg·m².",
                        "Pure rolling gives ω = v/R = 4/0.5 = 8 rad/s.",
                        "Translational kinetic energy = ½ × 2 × 4² = 16 J.",
                        "Rotational kinetic energy = ½ × 0.25 × 8² = 8 J.",
                        "Total kinetic energy = 16 + 8 = 24 J."
                    ]
                },

                jeeQuestion:
                    "A wheel of radius 0.25 m rolls without slipping at 5 m/s. What is its angular speed?",

                jeeOptions: [
                    "5 rad/s",
                    "10 rad/s",
                    "20 rad/s",
                    "25 rad/s"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "ω = v/R = 5/0.25 = 20 rad/s.",

                checkQuestion:
                    "Which statement is true for pure rolling without slipping?",

                checkOptions: [
                    {
                        text: "v꜀ₘ = ωR",
                        correct: true
                    },
                    {
                        text: "Angular speed must be zero",
                        correct: false
                    },
                    {
                        text: "Translational kinetic energy must be zero",
                        correct: false
                    },
                    {
                        text: "The object must have zero mass",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Pure rolling satisfies v꜀ₘ = ωR.",

                incorrectFeedback:
                    "Remember that pure rolling connects centre-of-mass speed and angular speed."
            }

        ]

    }

};

