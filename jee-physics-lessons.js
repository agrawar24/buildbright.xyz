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

    }

};