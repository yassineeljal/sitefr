export type QuizOption = {
  value: string;
  label: string;
  weight: number;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export const compatibilityQuestions: QuizQuestion[] = [
  {
    id: "degenerescence",
    prompt: "Face à la dégénérescence du corps biologique, préférez-vous la stabilité d'un maillage numérique ?",
    options: [
      {
        value: "oui",
        label: "Oui (Virtuel)",
        weight: 10,
      },
      {
        value: "non",
        label: "Non (Physique)",
        weight: 0,
      },
    ],
  },
  {
    id: "lumiere",
    prompt: "La lumière de l'écran est-elle plus pure que celle de la banlieue ?",
    options: [
      {
        value: "oui",
        label: "Oui (Virtuel)",
        weight: 10,
      },
      {
        value: "non",
        label: "Non (Physique)",
        weight: 0,
      },
    ],
  },
  {
    id: "eternelle",
    prompt: "Êtes-vous prêt à devenir une Éternelle pour échapper au poids de la mort ?",
    options: [
      {
        value: "oui",
        label: "Oui (Virtuel)",
        weight: 10,
      },
      {
        value: "non",
        label: "Non (Physique)",
        weight: 0,
      },
    ],
  }
];

export const maxCompatibilityScore = compatibilityQuestions.reduce(
  (score, question) =>
    score + Math.max(...question.options.map((option) => option.weight)),
  0
);
