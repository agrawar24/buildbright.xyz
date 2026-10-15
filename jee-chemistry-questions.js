const jeeChemistryQuestions = {

    "Atomic Structure": {

        practice: [
            {
                id: "chem-a-001",
                topic: "Atomic Number",
                difficulty: "Foundation",
                question: "How many protons are present in a neutral sodium atom with atomic number 11?",
                options: ["10", "11", "12", "23"],
                answer: 1,
                explanation:
                    "Atomic number equals the number of protons. Sodium has 11 protons."
            },
            {
                id: "chem-a-002",
                topic: "Quantum Numbers",
                difficulty: "Medium",
                question: "What is the maximum number of electrons in a p subshell?",
                options: ["2", "4", "6", "10"],
                answer: 2,
                explanation:
                    "A p subshell has three orbitals. Each holds two electrons, so the maximum is six."
            },
            {
                id: "chem-a-003",
                topic: "Electronic Configuration",
                difficulty: "Foundation",
                question: "What is the ground-state electronic configuration of magnesium (Z = 12)?",
                options: [
                    "1s² 2s² 2p⁶ 3s²",
                    "1s² 2s² 2p⁶ 3p²",
                    "1s² 2s² 2p⁵ 3s³",
                    "1s² 2s² 2p⁶ 3s¹"
                ],
                answer: 0,
                explanation:
                    "Magnesium has 12 electrons. Filling orbitals in the ground state gives 1s² 2s² 2p⁶ 3s²."
            }
        ],

        test: [
            {
                id: "chem-at-001",
                topic: "Electron Capacity",
                difficulty: "Medium",
                question: "What is the maximum number of electrons in a shell with principal quantum number n = 3?",
                options: ["8", "12", "18", "32"],
                answer: 2,
                explanation:
                    "The maximum capacity of a shell is 2n² = 2(3²) = 18."
            },
            {
                id: "chem-at-002",
                topic: "Isotopes",
                difficulty: "Foundation",
                question: "Isotopes of the same element have different numbers of which particle?",
                options: [
                    "Protons",
                    "Neutrons",
                    "Electrons in neutral atoms",
                    "Nuclear charges"
                ],
                answer: 1,
                explanation:
                    "Isotopes have the same atomic number but different neutron numbers."
            }
        ]
    },

    "Chemical Bonding": {

        practice: [
            {
                id: "chem-b-001",
                topic: "Ionic Bonding",
                difficulty: "Foundation",
                question: "Which compound predominantly contains ionic bonding?",
                options: ["CH₄", "H₂", "NaCl", "CO₂"],
                answer: 2,
                explanation:
                    "Sodium transfers an electron to chlorine, forming Na⁺ and Cl⁻ ions."
            },
            {
                id: "chem-b-002",
                topic: "Molecular Geometry",
                difficulty: "Medium",
                question: "What is the molecular shape of methane (CH₄)?",
                options: [
                    "Linear",
                    "Trigonal planar",
                    "Tetrahedral",
                    "Bent"
                ],
                answer: 2,
                explanation:
                    "Carbon forms four equivalent bonds with no lone pairs, giving tetrahedral geometry."
            },
            {
                id: "chem-b-003",
                topic: "Hybridization",
                difficulty: "Medium",
                question: "What is the hybridization of carbon in ethene (C₂H₄)?",
                options: ["sp", "sp²", "sp³", "dsp²"],
                answer: 1,
                explanation:
                    "Each carbon has three sigma-bonding regions and one unhybridized p orbital for the pi bond, giving sp² hybridization."
            }
        ],

        test: [
            {
                id: "chem-bt-001",
                topic: "Bond Polarity",
                difficulty: "Foundation",
                question: "Which molecule contains a polar covalent bond?",
                options: ["H₂", "Cl₂", "HCl", "N₂"],
                answer: 2,
                explanation:
                    "Hydrogen and chlorine have different electronegativities, making the H–Cl bond polar."
            },
            {
                id: "chem-bt-002",
                topic: "VSEPR Theory",
                difficulty: "Medium",
                question: "What is the molecular shape of ammonia (NH₃)?",
                options: [
                    "Linear",
                    "Trigonal planar",
                    "Trigonal pyramidal",
                    "Tetrahedral"
                ],
                answer: 2,
                explanation:
                    "Nitrogen has three bonding pairs and one lone pair, producing a trigonal pyramidal molecular shape."
            }
        ]
    }
};