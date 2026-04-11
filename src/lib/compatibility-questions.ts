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
    id: "nid-familial",
    prompt:
      "Face a la morosite du nid familial, que choisis-tu pour continuer a respirer ?",
    options: [
      {
        value: "attendre",
        label: "Je reste dans la chambre d'enfance et j'attends que la fatigue passe.",
        weight: 1,
      },
      {
        value: "atelier",
        label: "Je m'isole dans un atelier blanc minimaliste.",
        weight: 4,
      },
      {
        value: "ile",
        label: "Je migre vers une ile geometrique calculee en temps reel.",
        weight: 5,
      },
    ],
  },
  {
    id: "banlieue",
    prompt: "Quand la banlieue referme son bruit, ton premier reflexe est de...",
    options: [
      {
        value: "supporter",
        label: "Supporter le decor pour rester ancree dans le reel.",
        weight: 1,
      },
      {
        value: "fuir",
        label: "Fuir mentalement vers des surfaces propres et sans voisinage.",
        weight: 4,
      },
      {
        value: "effacer",
        label: "Effacer completement le lieu et remplacer les murs par des lignes pures.",
        weight: 5,
      },
    ],
  },
  {
    id: "degenerescence",
    prompt: "Face a la degenerescence physique, comment reponds-tu ?",
    options: [
      {
        value: "accepter",
        label: "Je l'accepte comme un destin biologique.",
        weight: 1,
      },
      {
        value: "corriger",
        label: "Je la corrige avec discipline pour retarder la chute.",
        weight: 3,
      },
      {
        value: "convertir",
        label: "Je convertis mon corps en image editable, sans erosion.",
        weight: 5,
      },
    ],
  },
  {
    id: "miroir",
    prompt: "Dans le miroir, quelle version de toi te parait la plus vraie ?",
    options: [
      {
        value: "cicatrice",
        label: "La version avec ses traces, ses doutes et ses limites.",
        weight: 2,
      },
      {
        value: "retouchee",
        label: "La version retouchee, plus nette que ma peau presente.",
        weight: 4,
      },
      {
        value: "avatar",
        label: "L'avatar integral, stable et lumineux, sans gravite.",
        weight: 5,
      },
    ],
  },
  {
    id: "douleur",
    prompt: "Le poids de la mort au ventre monte. Tu cherches...",
    options: [
      {
        value: "sommeil",
        label: "Du repos et une presence humaine ordinaire.",
        weight: 1,
      },
      {
        value: "rituel",
        label: "Un rituel froid, ecrans allumes et respiration reglee.",
        weight: 4,
      },
      {
        value: "upload",
        label: "Un upload immediat vers un espace sans douleur organique.",
        weight: 5,
      },
    ],
  },
  {
    id: "beaute",
    prompt: "La beaute te semble atteindre son sommet quand...",
    options: [
      {
        value: "imparfaite",
        label: "Elle reste imparfaite et passagere.",
        weight: 1,
      },
      {
        value: "controlee",
        label: "Elle est controlee par la lumiere et la mise en scene.",
        weight: 4,
      },
      {
        value: "immortelle",
        label: "Elle devient immortelle grace au rendu numerique.",
        weight: 5,
      },
    ],
  },
  {
    id: "anouk",
    prompt: "Anouk, l'avatar ideal, t'apparait comme...",
    options: [
      {
        value: "masque",
        label: "Un masque utile mais secondaire.",
        weight: 2,
      },
      {
        value: "double",
        label: "Un double consolant, plus fort que moi certains soirs.",
        weight: 4,
      },
      {
        value: "naissance",
        label: "Ma vraie naissance, enfin liberee du corps usant.",
        weight: 5,
      },
    ],
  },
];

export const maxCompatibilityScore = compatibilityQuestions.reduce(
  (score, question) =>
    score + Math.max(...question.options.map((option) => option.weight)),
  0
);
