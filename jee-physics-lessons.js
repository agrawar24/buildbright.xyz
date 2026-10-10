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

    },

    "Gravitation": {

        description:
            "Explore gravitational forces, fields, potential energy, planetary motion, satellites and escape velocity.",

        lessons: [

            // LESSON 1
            {
                title: "Newton's Law of Universal Gravitation",

                description:
                    "Understand gravitational attraction between masses and apply Newton's inverse-square law.",

                intro:
                    "Every object with mass attracts every other object with mass. Newton's universal law of gravitation describes this interaction.",

                conceptTitle:
                    "Gravitational force depends on both masses and their separation.",

                conceptText:
                    "For two point masses, the gravitational force is proportional to the product of their masses and inversely proportional to the square of the distance between them.",

                body:
                    "Newton's law of universal gravitation applies to point masses and to spherically symmetric bodies when their centre-to-centre separation is used and they do not overlap. The force is always attractive and acts along the line joining the centres. The gravitational constant G is approximately 6.67 × 10⁻¹¹ N·m²/kg². If separation doubles, the force becomes one-fourth as large.",

                keyIdeas: [
                    {
                        label: "GRAVITATIONAL FORCE",
                        formula: "F = Gm₁m₂/r²",
                        text:
                            "Magnitude of the attractive force between two point masses."
                    },
                    {
                        label: "INVERSE-SQUARE LAW",
                        formula: "F ∝ 1/r²",
                        text:
                            "Doubling the separation reduces the force to one-fourth."
                    },
                    {
                        label: "GRAVITATIONAL CONSTANT",
                        formula: "G ≈ 6.67 × 10⁻¹¹ N·m²/kg²",
                        text:
                            "Universal constant in Newton's gravitational law."
                    }
                ],

                example: {
                    problem:
                        "Two point masses of 10 kg and 20 kg are separated by 2 m. Find the magnitude of their gravitational attraction. Take G = 6.67 × 10⁻¹¹ N·m²/kg².",

                    steps: [
                        "Use F = Gm₁m₂/r².",
                        "Substitute F = 6.67 × 10⁻¹¹ × 10 × 20 / 2².",
                        "F = 6.67 × 10⁻¹¹ × 50.",
                        "F = 3.335 × 10⁻⁹ N."
                    ]
                },

                jeeQuestion:
                    "If the distance between two point masses is tripled without changing their masses, the gravitational force becomes:",

                jeeOptions: [
                    "One-third of the original",
                    "One-sixth of the original",
                    "One-ninth of the original",
                    "Nine times the original"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "Because F ∝ 1/r², tripling r makes the force 1/9 of its original value.",

                checkQuestion:
                    "Which statement correctly describes Newtonian gravitational force?",

                checkOptions: [
                    {
                        text: "It is always repulsive.",
                        correct: false
                    },
                    {
                        text: "It acts along the line joining the masses.",
                        correct: true
                    },
                    {
                        text: "It does not depend on distance.",
                        correct: false
                    },
                    {
                        text: "It acts only on planets.",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Gravitational attraction acts along the line joining the masses.",

                incorrectFeedback:
                    "Gravity is attractive and follows the inverse-square law."
            },

            // LESSON 2
            {
                title: "Gravitational Field and Acceleration Due to Gravity",

                description:
                    "Calculate gravitational field strength and understand how gravity changes with altitude and depth.",

                intro:
                    "A massive body creates a gravitational field around it. Another mass placed in that field experiences a gravitational force.",

                conceptTitle:
                    "Gravitational field strength is force per unit mass.",

                conceptText:
                    "Outside a spherically symmetric body, gravitational field magnitude equals GM/r² and points toward the body's centre.",

                body:
                    "Near Earth's surface, gravitational field strength is approximately 9.8 N/kg, numerically equal to free-fall acceleration in m/s². Above Earth's surface, gravity decreases with increasing distance from Earth's centre. Inside a uniform-density spherical planet, gravitational field strength decreases linearly with distance from the centre; this depth relation is a model approximation, not an exact description of Earth.",

                keyIdeas: [
                    {
                        label: "GRAVITATIONAL FIELD",
                        formula: "g = GM/r²",
                        text:
                            "Field magnitude outside a spherical body of mass M."
                    },
                    {
                        label: "AT ALTITUDE h",
                        formula: "gₕ = g₀[R/(R + h)]²",
                        text:
                            "Gravity at height h above a planet of radius R."
                    },
                    {
                        label: "AT DEPTH d",
                        formula: "g𝒅 = g₀(1 − d/R)",
                        text:
                            "Approximation for a uniform-density spherical planet."
                    }
                ],

                example: {
                    problem:
                        "A satellite is located at a height equal to Earth's radius above the surface. What is the gravitational acceleration there in terms of surface gravity g₀?",

                    steps: [
                        "The satellite's distance from Earth's centre is R + h.",
                        "Here h = R, so r = 2R.",
                        "Use gₕ = g₀[R/(R + h)]².",
                        "gₕ = g₀(R/2R)² = g₀/4."
                    ]
                },

                jeeQuestion:
                    "At a height equal to Earth's radius above the surface, gravitational acceleration is approximately:",

                jeeOptions: [
                    "g",
                    "g/2",
                    "g/4",
                    "g/8"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "At height R, distance from Earth's centre is 2R. Therefore g' = GM/(2R)² = g/4.",

                checkQuestion:
                    "What is the direction of the gravitational field due to an isolated spherical planet?",

                checkOptions: [
                    {
                        text: "Radially outward",
                        correct: false
                    },
                    {
                        text: "Tangential to the surface",
                        correct: false
                    },
                    {
                        text: "Toward the planet's centre",
                        correct: true
                    },
                    {
                        text: "Always vertically upward",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. The gravitational field points toward the attracting mass.",

                incorrectFeedback:
                    "Gravity is attractive, so the field points toward the planet."
            },

            // LESSON 3
            {
                title: "Gravitational Potential and Potential Energy",

                description:
                    "Distinguish gravitational potential from potential energy and calculate work in gravitational fields.",

                intro:
                    "Gravitational potential describes energy per unit mass, while gravitational potential energy describes the energy of an interacting system.",

                conceptTitle:
                    "Gravitational potential is negative when zero is chosen at infinity.",

                conceptText:
                    "For a point mass M, gravitational potential at distance r is −GM/r. The potential energy of another mass m is −GMm/r.",

                body:
                    "Gravitational potential is a scalar quantity measured in J/kg. Potential energy is measured in joules. With zero potential at infinity, both are negative for attractive gravitational interactions. The work done by gravity equals the negative change in gravitational potential energy. Near Earth's surface, changes in potential energy can be approximated using mgh when height changes are small compared with Earth's radius.",

                keyIdeas: [
                    {
                        label: "GRAVITATIONAL POTENTIAL",
                        formula: "V = −GM/r",
                        text:
                            "Potential per unit mass outside a spherical body, taking V = 0 at infinity."
                    },
                    {
                        label: "POTENTIAL ENERGY",
                        formula: "U = −GMm/r",
                        text:
                            "Potential energy of two point masses with zero at infinite separation."
                    },
                    {
                        label: "WORK BY GRAVITY",
                        formula: "W = −ΔU",
                        text:
                            "Gravitational work is the negative change in potential energy."
                    }
                ],

                example: {
                    problem:
                        "A 2 kg mass is placed at a location where gravitational potential is −30 J/kg. Find its gravitational potential energy.",

                    steps: [
                        "Use U = mV.",
                        "Substitute m = 2 kg and V = −30 J/kg.",
                        "U = 2 × (−30).",
                        "U = −60 J."
                    ]
                },

                jeeQuestion:
                    "The gravitational potential at a point is −50 J/kg. What is the potential energy of a 3 kg mass placed there?",

                jeeOptions: [
                    "−150 J",
                    "−50 J",
                    "50 J",
                    "150 J"
                ],

                jeeAnswer: 0,

                jeeExplanation:
                    "U = mV = 3 × (−50) = −150 J.",

                checkQuestion:
                    "What is the SI unit of gravitational potential?",

                checkOptions: [
                    {
                        text: "Joule",
                        correct: false
                    },
                    {
                        text: "Joule per kilogram",
                        correct: true
                    },
                    {
                        text: "Newton-meter squared",
                        correct: false
                    },
                    {
                        text: "Kilogram per joule",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Gravitational potential is energy per unit mass.",

                incorrectFeedback:
                    "Potential V = U/m, so its unit is J/kg."
            },

            // LESSON 4
            {
                title: "Escape Velocity and Orbital Velocity",

                description:
                    "Derive the speeds required for circular orbit and escape from a planet.",

                intro:
                    "A satellite can orbit a planet because gravity continuously changes the direction of its velocity. Escape requires sufficient energy to reach infinity without returning.",

                conceptTitle:
                    "Orbital speed and escape speed follow from Newtonian mechanics.",

                conceptText:
                    "For a circular orbit of radius r, orbital speed is √(GM/r). The minimum escape speed from radius r is √(2GM/r), neglecting drag and propulsion after launch.",

                body:
                    "For a circular orbit, gravity supplies the required centripetal force. Escape speed follows from conservation of mechanical energy by setting total energy equal to zero at infinity. Escape speed is √2 times the circular orbital speed at the same radius. These ideal formulas assume a spherical central body and neglect atmospheric drag and other gravitational influences.",

                keyIdeas: [
                    {
                        label: "CIRCULAR ORBITAL SPEED",
                        formula: "vₒ = √(GM/r)",
                        text:
                            "Speed required for a circular orbit of radius r."
                    },
                    {
                        label: "ESCAPE SPEED",
                        formula: "vₑ = √(2GM/r)",
                        text:
                            "Minimum speed to reach infinity with zero final speed."
                    },
                    {
                        label: "SPEED RELATION",
                        formula: "vₑ = √2 vₒ",
                        text:
                            "Escape speed is √2 times circular orbital speed at the same radius."
                    }
                ],

                example: {
                    problem:
                        "At a certain distance from a planet, the circular orbital speed is 6 km/s. What is the escape speed from that distance?",

                    steps: [
                        "Use vₑ = √2 vₒ.",
                        "Substitute vₒ = 6 km/s.",
                        "vₑ = 6√2 km/s.",
                        "vₑ ≈ 8.49 km/s."
                    ]
                },

                jeeQuestion:
                    "If the circular orbital speed at a certain radius is v, the escape speed from that radius is:",

                jeeOptions: [
                    "v/√2",
                    "v",
                    "√2v",
                    "2v"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "vₑ = √(2GM/r) and vₒ = √(GM/r), so vₑ = √2vₒ.",

                checkQuestion:
                    "Which statement is correct for a circular satellite orbit?",

                checkOptions: [
                    {
                        text: "Gravity supplies the centripetal force.",
                        correct: true
                    },
                    {
                        text: "No force acts on the satellite.",
                        correct: false
                    },
                    {
                        text: "The satellite moves in a straight line.",
                        correct: false
                    },
                    {
                        text: "Its speed must equal escape speed.",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Gravity provides the centripetal acceleration.",

                incorrectFeedback:
                    "A circular orbit requires centripetal acceleration supplied by gravity."
            },

            // LESSON 5
            {
                title: "Satellites and Kepler's Laws",

                description:
                    "Understand orbital periods, satellite motion and Kepler's three laws.",

                intro:
                    "Kepler described planetary motion using three laws. Newton later explained these patterns through gravitational attraction.",

                conceptTitle:
                    "Orbital period depends on orbital size and central mass.",

                conceptText:
                    "For a circular orbit around mass M, the orbital period is 2π√(r³/GM). Kepler's third law generalizes this relationship to elliptical orbits using the semi-major axis.",

                body:
                    "Kepler's first law states that planets move in ellipses with the Sun at one focus. The second law states that the line joining a planet and the Sun sweeps out equal areas in equal times. The third law states that orbital period squared is proportional to the cube of the semi-major axis for bodies orbiting the same dominant central mass. A geostationary satellite has an approximately circular equatorial orbit with the same angular velocity and direction as Earth's rotation.",

                keyIdeas: [
                    {
                        label: "KEPLER'S FIRST LAW",
                        formula: "Orbit = ellipse",
                        text:
                            "The central attracting body lies at one focus of an ideal two-body elliptical orbit."
                    },
                    {
                        label: "KEPLER'S SECOND LAW",
                        formula: "dA/dt = constant",
                        text:
                            "Equal areas are swept out in equal time intervals."
                    },
                    {
                        label: "KEPLER'S THIRD LAW",
                        formula: "T² ∝ a³",
                        text:
                            "For a fixed central mass, orbital period squared scales with the cube of semi-major axis."
                    }
                ],

                example: {
                    problem:
                        "Two satellites orbit the same planet in circular orbits. The second satellite's orbital radius is four times that of the first. Find the ratio of their orbital periods.",

                    steps: [
                        "Use Kepler's third law: T² ∝ r³ for circular orbits.",
                        "Therefore T ∝ r^(3/2).",
                        "T₂/T₁ = (r₂/r₁)^(3/2).",
                        "T₂/T₁ = 4^(3/2) = 8.",
                        "The second satellite's period is eight times the first."
                    ]
                },

                jeeQuestion:
                    "If the radius of a circular orbit around the same planet doubles, the orbital period becomes:",

                jeeOptions: [
                    "√2 times",
                    "2 times",
                    "2√2 times",
                    "4 times"
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "T ∝ r^(3/2), so doubling r gives T'/T = 2^(3/2) = 2√2.",

                checkQuestion:
                    "Which statement is Kepler's second law?",

                checkOptions: [
                    {
                        text: "All orbits must be circular.",
                        correct: false
                    },
                    {
                        text: "Equal areas are swept out in equal times.",
                        correct: true
                    },
                    {
                        text: "All planets have the same orbital period.",
                        correct: false
                    },
                    {
                        text: "Orbital speed is always constant in an ellipse.",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. Kepler's second law expresses conservation of angular momentum.",

                incorrectFeedback:
                    "Kepler's second law is the equal-areas-in-equal-times law."
            },

            // LESSON 6
            {
                title: "Gravitation Review",

                description:
                    "Combine gravitational force, fields, energy, orbital motion and Kepler's laws.",

                intro:
                    "Gravitation questions often connect several concepts. Identify whether the problem concerns force, field, energy or orbital motion before selecting an equation.",

                conceptTitle:
                    "Choose the gravitational model that matches the physical situation.",

                conceptText:
                    "Use the inverse-square law for forces and fields, energy conservation for escape, and centripetal motion for circular orbits.",

                body:
                    "Remember that orbital radius is measured from the centre of the planet, not from its surface. Use consistent SI units and distinguish gravitational potential from potential energy. For circular orbits, orbital speed decreases as radius increases, while orbital period increases. For escape, total mechanical energy must be at least zero in the ideal two-body model.",

                keyIdeas: [
                    {
                        label: "GRAVITATIONAL FORCE",
                        formula: "F = GMm/r²",
                        text:
                            "Force between a spherical central mass and an external point mass."
                    },
                    {
                        label: "TOTAL ORBITAL ENERGY",
                        formula: "E = −GMm/(2r)",
                        text:
                            "Total mechanical energy of a circular orbit."
                    },
                    {
                        label: "ORBITAL PERIOD",
                        formula: "T = 2π√(r³/GM)",
                        text:
                            "Period of a circular orbit around central mass M."
                    }
                ],

                example: {
                    problem:
                        "A satellite of mass 100 kg moves in a circular orbit of radius 2 × 10⁷ m around Earth. Take GM = 4 × 10¹⁴ m³/s². Find its orbital speed and total mechanical energy.",

                    steps: [
                        "Orbital speed is v = √(GM/r).",
                        "v = √[(4 × 10¹⁴)/(2 × 10⁷)] = √(2 × 10⁷).",
                        "v ≈ 4.47 × 10³ m/s.",
                        "Total orbital energy E = −GMm/(2r).",
                        "E = −[(4 × 10¹⁴) × 100]/[2 × (2 × 10⁷)].",
                        "E = −1 × 10⁹ J."
                    ]
                },

                jeeQuestion:
                    "A satellite moves in a circular orbit. If its orbital radius increases while the central mass stays the same, which statement is correct?",

                jeeOptions: [
                    "Its orbital speed increases.",
                    "Its orbital period decreases.",
                    "Its orbital speed decreases and period increases.",
                    "Its orbital speed and period both decrease."
                ],

                jeeAnswer: 2,

                jeeExplanation:
                    "v ∝ r^(−1/2), so orbital speed decreases with radius. T ∝ r^(3/2), so period increases.",

                checkQuestion:
                    "What is the total mechanical energy of a satellite in a bound circular gravitational orbit, taking potential energy as zero at infinity?",

                checkOptions: [
                    {
                        text: "Positive",
                        correct: false
                    },
                    {
                        text: "Zero",
                        correct: false
                    },
                    {
                        text: "Negative",
                        correct: true
                    },
                    {
                        text: "Always equal to its kinetic energy",
                        correct: false
                    }
                ],

                correctFeedback:
                    "Correct. A bound circular orbit has negative total mechanical energy.",

                incorrectFeedback:
                    "For a circular orbit, E = −GMm/(2r), which is negative."
            }


        ]

    },

    "Units and Measurements": {

        description:
            "Master SI units, dimensional analysis, measurement errors, significant figures and experimental precision.",

        lessons: [

            // LESSON 1
            {
                title: "Physical Quantities and SI Units",
                description:
                    "Understand fundamental quantities, derived quantities and the SI system.",
                intro:
                    "Physics begins with measurement. Every physical measurement consists of a numerical value and a unit.",
                conceptTitle:
                    "Physical quantities are expressed using standard units.",
                conceptText:
                    "The International System of Units (SI) defines seven base units from which derived units can be constructed.",
                body:
                    "The seven SI base quantities are length, mass, time, electric current, thermodynamic temperature, amount of substance and luminous intensity. Their units are metre, kilogram, second, ampere, kelvin, mole and candela. Derived quantities such as force, energy and pressure are expressed in combinations of base units. Always distinguish the physical quantity from the unit used to measure it.",
                keyIdeas: [
                    {
                        label: "FORCE",
                        formula: "1 N = 1 kg·m/s²",
                        text: "The newton is the SI derived unit of force."
                    },
                    {
                        label: "ENERGY",
                        formula: "1 J = 1 kg·m²/s²",
                        text: "The joule is the SI derived unit of energy."
                    },
                    {
                        label: "PRESSURE",
                        formula: "1 Pa = 1 N/m²",
                        text: "The pascal is the SI derived unit of pressure."
                    }
                ],
                example: {
                    problem:
                        "Express a force of 12 N in SI base units.",
                    steps: [
                        "Use Newton's second law: F = ma.",
                        "Mass has unit kg and acceleration has unit m/s².",
                        "Therefore 1 N = 1 kg·m/s².",
                        "12 N = 12 kg·m/s²."
                    ]
                },
                jeeQuestion:
                    "Which expression represents one joule in SI base units?",
                jeeOptions: [
                    "kg·m/s",
                    "kg·m²/s²",
                    "kg·m/s²",
                    "kg·m²/s³"
                ],
                jeeAnswer: 1,
                jeeExplanation:
                    "Energy = force × displacement, so 1 J = 1 N·m = 1 kg·m²/s².",
                checkQuestion:
                    "Which of the following is an SI base unit?",
                checkOptions: [
                    { text: "Newton", correct: false },
                    { text: "Joule", correct: false },
                    { text: "Kelvin", correct: true },
                    { text: "Pascal", correct: false }
                ],
                correctFeedback:
                    "Correct. Kelvin is the SI base unit of thermodynamic temperature.",
                incorrectFeedback:
                    "Newton, joule and pascal are derived units. Kelvin is a base unit."
            },

            // LESSON 2
            {
                title: "Dimensions of Physical Quantities",
                description:
                    "Determine dimensional formulas and test equations for dimensional consistency.",
                intro:
                    "Dimensional analysis helps us understand how physical quantities depend on mass, length, time and other base quantities.",
                conceptTitle:
                    "Dimensions describe the physical nature of a quantity.",
                conceptText:
                    "A dimensional formula expresses a physical quantity in powers of fundamental dimensions such as M, L and T.",
                body:
                    "For mechanical quantities, mass, length and time are represented by M, L and T. Velocity has dimensions [LT⁻¹], acceleration [LT⁻²], force [MLT⁻²] and energy [ML²T⁻²]. Every term added or subtracted in a valid physical equation must have the same dimensions. Dimensional consistency is necessary but does not prove an equation is correct.",
                keyIdeas: [
                    {
                        label: "VELOCITY",
                        formula: "[v] = LT⁻¹",
                        text: "Velocity is displacement divided by time."
                    },
                    {
                        label: "FORCE",
                        formula: "[F] = MLT⁻²",
                        text: "Force equals mass multiplied by acceleration."
                    },
                    {
                        label: "ENERGY",
                        formula: "[E] = ML²T⁻²",
                        text: "Work equals force multiplied by displacement."
                    }
                ],
                example: {
                    problem:
                        "Find the dimensions of pressure.",
                    steps: [
                        "Pressure = force/area.",
                        "Force has dimensions [MLT⁻²].",
                        "Area has dimensions [L²].",
                        "[P] = [MLT⁻²]/[L²] = [ML⁻¹T⁻²]."
                    ]
                },
                jeeQuestion:
                    "What is the dimensional formula of momentum?",
                jeeOptions: [
                    "MLT⁻¹",
                    "MLT⁻²",
                    "ML²T⁻¹",
                    "ML²T⁻²"
                ],
                jeeAnswer: 0,
                jeeExplanation:
                    "Momentum = mass × velocity, so [p] = M × LT⁻¹ = MLT⁻¹.",
                checkQuestion:
                    "Which statement about dimensional analysis is correct?",
                checkOptions: [
                    {
                        text: "It can prove any equation is physically correct.",
                        correct: false
                    },
                    {
                        text: "It can identify dimensionally inconsistent equations.",
                        correct: true
                    },
                    {
                        text: "It determines all numerical constants.",
                        correct: false
                    },
                    {
                        text: "It works only for velocity.",
                        correct: false
                    }
                ],
                correctFeedback:
                    "Correct. Dimensional analysis is a consistency check.",
                incorrectFeedback:
                    "Matching dimensions is necessary but not sufficient for physical correctness."
            },

            // LESSON 3
            {
                title: "Dimensional Analysis and Applications",
                description:
                    "Use dimensions to derive relationships and convert physical units.",
                intro:
                    "Dimensions can help predict relationships between physical quantities, even before a complete derivation is available.",
                conceptTitle:
                    "Dimensional homogeneity constrains possible physical formulas.",
                conceptText:
                    "If a quantity depends on other physical quantities, their dimensional powers can sometimes be determined by matching dimensions.",
                body:
                    "Suppose the period of a simple pendulum depends only on its length l and gravitational acceleration g. Assume T = klᵃgᵇ, where k is dimensionless. Comparing powers of length and time gives a = 1/2 and b = −1/2. Thus T is proportional to √(l/g). Dimensional analysis cannot determine the numerical factor 2π or account for variables omitted from the original assumption.",
                keyIdeas: [
                    {
                        label: "DIMENSIONAL HOMOGENEITY",
                        formula: "[LHS] = [RHS]",
                        text: "Both sides of a physical equation must have identical dimensions."
                    },
                    {
                        label: "PENDULUM PERIOD",
                        formula: "T ∝ √(l/g)",
                        text: "Dimensional analysis predicts the length and gravity dependence."
                    },
                    {
                        label: "UNIT CONVERSION",
                        formula: "1 km/h = 5/18 m/s",
                        text: "Convert numerical values while preserving the physical quantity."
                    }
                ],
                example: {
                    problem:
                        "Assuming a pendulum's period depends only on length l and gravitational acceleration g, find its dimensional dependence.",
                    steps: [
                        "Assume T = klᵃgᵇ.",
                        "Dimensions: [T] = [L]ᵃ[LT⁻²]ᵇ.",
                        "Equating time powers gives −2b = 1, so b = −1/2.",
                        "Equating length powers gives a + b = 0, so a = 1/2.",
                        "Therefore T ∝ √(l/g)."
                    ]
                },
                jeeQuestion:
                    "A quantity Q has dimensions [L²T⁻²]. Which expression has the same dimensions?",
                jeeOptions: [
                    "Acceleration × time",
                    "Velocity squared",
                    "Force × distance",
                    "Momentum ÷ mass"
                ],
                jeeAnswer: 1,
                jeeExplanation:
                    "Velocity has dimensions [LT⁻¹], so velocity squared has dimensions [L²T⁻²].",
                checkQuestion:
                    "What cannot generally be determined using dimensional analysis alone?",
                checkOptions: [
                    { text: "Dimensions of force", correct: false },
                    { text: "Whether terms have matching dimensions", correct: false },
                    { text: "A dimensionless numerical factor such as 2π", correct: true },
                    { text: "Dimensions of acceleration", correct: false }
                ],
                correctFeedback:
                    "Correct. Dimensional analysis cannot generally determine dimensionless constants.",
                incorrectFeedback:
                    "Dimensions cannot distinguish numerical factors such as 2 or 2π."
            },

            // LESSON 4
            {
                title: "Errors in Measurement",
                description:
                    "Understand absolute, relative and percentage errors and their propagation.",
                intro:
                    "Every experimental measurement has uncertainty. Understanding that uncertainty is essential for interpreting results.",
                conceptTitle:
                    "Measurement errors describe uncertainty in measured values.",
                conceptText:
                    "Absolute error is expressed in the same units as the measured quantity. Relative error compares the absolute error with the measured value.",
                body:
                    "Random errors cause variations between repeated measurements. Systematic errors consistently bias measurements because of factors such as incorrect calibration. For independent small uncertainties, the maximum fractional error in a product or quotient is approximately the sum of the absolute fractional errors. When a quantity is raised to a power, its fractional error is multiplied by the absolute value of that power. These are first-order maximum-error rules, not statistical uncertainty formulas.",
                keyIdeas: [
                    {
                        label: "RELATIVE ERROR",
                        formula: "Relative error = Δx/|x|",
                        text: "Compare absolute uncertainty with the magnitude of the measured value."
                    },
                    {
                        label: "PERCENTAGE ERROR",
                        formula: "% error = (Δx/|x|) × 100",
                        text: "Express relative uncertainty as a percentage."
                    },
                    {
                        label: "POWER RULE",
                        formula: "Q = xⁿ ⇒ ΔQ/|Q| ≈ |n|Δx/|x|",
                        text: "Approximate maximum fractional uncertainty for a power."
                    }
                ],
                example: {
                    problem:
                        "The radius of a circle is measured as (10.0 ± 0.1) cm. Find the approximate maximum percentage uncertainty in its area.",
                    steps: [
                        "Area A = πr².",
                        "For A proportional to r², ΔA/A ≈ 2Δr/r.",
                        "Δr/r = 0.1/10.0 = 0.01.",
                        "Percentage uncertainty in area ≈ 2 × 0.01 × 100 = 2%."
                    ]
                },
                jeeQuestion:
                    "A cube's side length has a maximum percentage uncertainty of 2%. What is the approximate maximum percentage uncertainty in its volume?",
                jeeOptions: [
                    "2%",
                    "4%",
                    "6%",
                    "8%"
                ],
                jeeAnswer: 2,
                jeeExplanation:
                    "Volume V = a³, so ΔV/V ≈ 3Δa/a. The maximum percentage uncertainty is approximately 3 × 2% = 6%.",
                checkQuestion:
                    "Which type of error can result from an incorrectly calibrated measuring instrument?",
                checkOptions: [
                    { text: "Systematic error", correct: true },
                    { text: "Only random error", correct: false },
                    { text: "No measurement error", correct: false },
                    { text: "Only rounding error", correct: false }
                ],
                correctFeedback:
                    "Correct. Incorrect calibration can produce systematic error.",
                incorrectFeedback:
                    "A consistent calibration bias is a systematic error."
            },

            // LESSON 5
            {
                title: "Significant Figures and Precision",
                description:
                    "Apply significant-figure rules and distinguish accuracy from precision.",
                intro:
                    "A measurement should communicate only the precision supported by the measuring instrument.",
                conceptTitle:
                    "Significant figures communicate measurement precision.",
                conceptText:
                    "The number of significant figures depends on which digits are meaningful in a reported measurement.",
                body:
                    "All nonzero digits are significant. Zeros between nonzero digits are significant. Leading zeros are not significant, while trailing zeros after a decimal point are significant. In multiplication and division, the final result is generally rounded to the fewest significant figures among the measured inputs. In addition and subtraction, round to the least precise decimal place. Accuracy refers to closeness to the true value; precision refers to repeatability or resolution.",
                keyIdeas: [
                    {
                        label: "LEADING ZEROS",
                        formula: "0.0045 → 2 significant figures",
                        text: "Zeros before the first nonzero digit are not significant."
                    },
                    {
                        label: "DECIMAL TRAILING ZEROS",
                        formula: "2.500 → 4 significant figures",
                        text: "Trailing zeros after a decimal point are significant."
                    },
                    {
                        label: "MULTIPLICATION",
                        formula: "2.5 × 3.42 = 8.6",
                        text: "Round to two significant figures because 2.5 has two."
                    }
                ],
                example: {
                    problem:
                        "Calculate 4.56 × 2.1 and report the result with the correct number of significant figures.",
                    steps: [
                        "Multiply: 4.56 × 2.1 = 9.576.",
                        "4.56 has three significant figures.",
                        "2.1 has two significant figures.",
                        "Round the product to two significant figures.",
                        "Final answer = 9.6."
                    ]
                },
                jeeQuestion:
                    "How many significant figures are present in 0.003040?",
                jeeOptions: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                jeeAnswer: 2,
                jeeExplanation:
                    "The significant digits are 3, 0, 4 and the final 0. Therefore 0.003040 has four significant figures.",
                checkQuestion:
                    "Which measurement has exactly three significant figures?",
                checkOptions: [
                    { text: "0.004", correct: false },
                    { text: "2.50", correct: true },
                    { text: "0.02000", correct: false },
                    { text: "12.345", correct: false }
                ],
                correctFeedback:
                    "Correct. The trailing zero in 2.50 is significant.",
                incorrectFeedback:
                    "Count nonzero digits, internal zeros and trailing decimal zeros."
            },

            // LESSON 6
            {
                title: "Units and Measurements Review",
                description:
                    "Combine dimensional analysis, unit conversion, significant figures and uncertainty calculations.",
                intro:
                    "JEE questions frequently combine multiple measurement concepts in one problem.",
                conceptTitle:
                    "Check units, dimensions and precision before finalizing an answer.",
                conceptText:
                    "A reliable solution uses consistent units, dimensionally valid equations and appropriately reported precision.",
                body:
                    "Convert quantities to consistent units before substituting into formulas. Check dimensional homogeneity to catch incorrect expressions. Apply error-propagation rules when measurement uncertainty is given. Finally, report numerical answers with appropriate significant figures. Dimensional correctness alone does not guarantee physical correctness.",
                keyIdeas: [
                    {
                        label: "DIMENSIONAL CHECK",
                        formula: "[Energy] = ML²T⁻²",
                        text: "Verify that expressions for energy have the correct dimensions."
                    },
                    {
                        label: "ERROR PROPAGATION",
                        formula: "Q = ab² ⇒ ΔQ/|Q| ≈ Δa/|a| + 2Δb/|b|",
                        text: "Approximate maximum fractional uncertainty for independent small measurement errors."
                    },
                    {
                        label: "SPEED CONVERSION",
                        formula: "72 km/h = 20 m/s",
                        text: "Convert kilometre per hour to metre per second by multiplying by 5/18."
                    }
                ],
                example: {
                    problem:
                        "A rectangle has measured length (20.0 ± 0.2) cm and width (10.0 ± 0.1) cm. Find its area and approximate maximum absolute uncertainty.",
                    steps: [
                        "Area A = length × width = 20.0 × 10.0 = 200.0 cm².",
                        "Relative uncertainty in length = 0.2/20.0 = 0.01.",
                        "Relative uncertainty in width = 0.1/10.0 = 0.01.",
                        "Maximum relative uncertainty in area ≈ 0.01 + 0.01 = 0.02.",
                        "Absolute uncertainty ≈ 0.02 × 200.0 = 4 cm².",
                        "Report the result as approximately (200 ± 4) cm²."
                    ]
                },
                jeeQuestion:
                    "A physical quantity Q is given by Q = a²b³. If the maximum percentage uncertainties in a and b are 1% and 2%, respectively, what is the approximate maximum percentage uncertainty in Q?",
                jeeOptions: [
                    "3%",
                    "5%",
                    "8%",
                    "10%"
                ],
                jeeAnswer: 2,
                jeeExplanation:
                    "Maximum percentage uncertainty ≈ 2 × 1% + 3 × 2% = 8%.",
                checkQuestion:
                    "Which is the best final step when reporting a calculated experimental result?",
                checkOptions: [
                    {
                        text: "Ignore all units.",
                        correct: false
                    },
                    {
                        text: "Report every calculator digit.",
                        correct: false
                    },
                    {
                        text: "Check units and use appropriate precision.",
                        correct: true
                    },
                    {
                        text: "Round every value to an integer.",
                        correct: false
                    }
                ],
                correctFeedback:
                    "Correct. Units and precision are essential to meaningful measurements.",
                incorrectFeedback:
                    "Always check dimensions, units and significant figures."
            }

        ]

    }

};

