// BANQUE COMPLÈTE DE CAS DÉDUITE DE CROPANZANO ET AL. (2007)
const ALL_ARTICLE_CASES = [
    // --- MODULE 1 : SELECTION ---
    {
        id: "sel_1",
        authors: "Smither et al. (1993) / Steiner & Gilliland (1996)",
        topic: "Le Paradoxe de la Sélection",
        speech: "Le comité RH veut imposer un test cognitif abstrait très valide scientifiquement, mais perçu comme intrusif par les candidats.",
        options: [
            { text: "Imposer le test sans explications", isCorrect: false, exp: "Viole la justice informationnelle. Risque de poursuites (Bauer et al., 2001)." },
            { text: "Mettre en place un Work Sample Test (mise en situation)", isCorrect: true, exp: "Allie haute validité prédictive et haute justice procédurale perçue." }
        ]
    },
    // --- MODULE 2 : RÉMUNÉRATION ---
    {
        id: "rem_1",
        authors: "Greenberg (1993)",
        topic: "La Baisse Salariale et la Criminalité d'Entreprise",
        speech: "L'entreprise doit réduire les salaires de 15% pour éviter la faillite. Comment annoncer la nouvelle ?",
        options: [
            { text: "Annonce rapide de 15 minutes sans questions", isCorrect: false, exp: "Augmente le vol d'entreprise de 80% par sentiment d'injustice." },
            { text: "Réunion de 1h30 avec explications détaillées et empathie", isCorrect: true, exp: "Réduit le vol et les démissions. La justice interactionnelle compense la perte financière." }
        ]
    },
    {
        id: "rem_2",
        authors: "Pfeffer & Langton (1993)",
        topic: "Dispersion Salariale et Collaboration",
        speech: "Faut-il publier des écarts de salaires très importants basés uniquement sur la performance individuelle des chercheurs ?",
        options: [
            { text: "Oui, créer une forte dispersion par le mérite", isCorrect: false, exp: "Détruit la collaboration et fait chuter la productivité globale." },
            { text: "Créer un système hybride (socle fixe garanti + part variable)", isCorrect: true, exp: "Préserve l'esprit d'équipe tout en valorisant la performance." }
        ]
    },
    // --- MODULE 3 : CONFLITS & ARBITRAGE ---
    {
        id: "conf_1",
        authors: "Kim & Mauborgne (1991, 2005)",
        topic: "Fair Process Effect en Planification Stratégique",
        speech: "Le siège doit imposer une restructuration à une filiale locale qui n'est pas d'accord.",
        options: [
            { text: "Imposer la décision du siège sans concertation", isCorrect: false, exp: "Provoque le ressentiment et l'échec de l'exécution stratégique." },
            { text: "Accorder la parole (Voice) et expliquer les critères de choix", isCorrect: true, exp: "Crée l'engagement volontaire et la confiance dans le leadership." }
        ]
    },
    // --- MODULE 4 : LICENCIEMENTS ---
    {
        id: "lay_1",
        authors: "Lind, Greenberg, Scott & Welchans (2000)",
        topic: "Prévention du Risque Juridique",
        speech: "Comment gérer le départ des salariés licenciés pour éviter les attaques aux prud'hommes ?",
        options: [
            { text: "Eviter de s'excuser sur conseil des avocats", isCorrect: false, exp: "66% des victimes d'injustice perçue portent plainte." },
            { text: "Offrir des explications sincères, de l'écoute et du respect", isCorrect: true, exp: "Fait chuter le taux de poursuites judiciaires à 16%." }
        ]
    },
    // --- MODULE 5 : EVALUATION ---
    {
        id: "eval_1",
        authors: "Folger, Konovsky & Cropanzano (1992) / Taylor et al. (1995)",
        topic: "L'Approche Due Process",
        speech: "Comment réformer le système d'évaluation annuelle pour qu'il soit accepté par tous ?",
        options: [
            { text: "Traiter l'évaluation comme un test chiffré unilatéral", isCorrect: false, exp: "Génère du cynisme et le phénomène de l'évaluation 'fantôme'." },
            { text: "Appliquer les 3 règles : Notice (préavis), Hearing (audition), Evidence (preuves)", isCorrect: true, exp: "Les employés jugent le système plus juste, même s'ils reçoivent de moins bonnes notes." }
        ]
    }
];
