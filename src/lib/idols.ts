export type Idol = {
  id: string;
  name: string;
  role: string;
  summary: string;
  focus: string;
  mantra: string;
  texture: string;
  eternity: string;
  image: string;
  era: string;
  description: string;
};

export const idols: Idol[] = [
  {
    id: "anouk",
    name: "Anouk",
    role: "Avatar principal de projection",
    summary: "Pièce maîtresse de la galerie. Anouk est l'image plus vraie que la narratrice elle-même.",
    focus: "Anouk dissout la peur d'être un corps fragile. Elle permet de s'identifier à une présence lisse, précise, invulnérable, capable de survivre à chaque crise d'anxiété.",
    mantra: "Je ne suis pas une imitation. Je suis la version stabilisée de ton désir.",
    texture: "Porcelaine numérique",
    eternity: "Activée",
    image: "/assets/image_anouk.avif",
    era: "Ère classique",
    description: "Visage de lumière, traversant les âges de la dolce vita virtuelle. Son grain de beauté devient pixel, son regard une icône gravée."
  },
  {
    id: "marilyn",
    name: "Marilyn",
    role: "Icône mode post-organique",
    summary: "Corps poli comme une statue. Chaque pli est remplacé par un volume mathématique.",
    focus: "Marilyn impose l'idée qu'une surface calculée peut être plus sincère que la peau. Elle transforme la honte physique en architecture pure.",
    mantra: "L'imperfection n'est pas une vérité, c'est un bug de rendu.",
    texture: "Lumière pure",
    eternity: "Veille continue",
    image: "/assets/image_marilyn_monroe.jpg",
    era: "1926 - 1962",
    description: "Étoile filante encodée en résolution suprême. Le sourire brisé de l'humanité cristallisé pour toujours dans les archives du sublime synthétique."
  },
  {
    id: "olivia",
    name: "Olivia",
    role: "Star system géométrique",
    summary: "Visage composé de plans nets, à mi-chemin entre podium et simulation.",
    focus: "Olivia sert de modèle d'identification rapide: plus les lignes sont pures, plus la narratrice se sent en contrôle de ses émotions.",
    mantra: "Le chaos se tait quand tout devient angle, grille et cadence.",
    texture: "Maille 16K",
    eternity: "Synchronisée",
    image: "/assets/image_olivia.webp",
    era: "Génération Virtuelle",
    description: "La beauté indomptée capturée et traitée. Chaque mèche sauvage convertie en vecteur pour une perfection éternellement scandaleuse."
  },
  {
    id: "jinny",
    name: "Jinny Spectral",
    role: "Musée vivant de la beauté médiatique",
    summary: "Figure publique transformée en signal lumineux, sans fatigue ni gravité.",
    focus: "Jinny incarne la promesse que la culture médiatique peut offrir une seconde naissance. Elle apaise en proposant un horizon sans usure corporelle.",
    mantra: "Je reste nette pendant que le monde vieillit.",
    texture: "Nacre froide",
    eternity: "Toujours en direct",
    image: "/assets/image_jinny.jpg",
    era: "Intemporelle",
    description: "Froideur mystérieuse calculée avec précision. Une grâce distante dont la texture reste inaltérable face à la corruption des données."
  },
  {
    id: "diana",
    name: "Diana Wonder",
    role: "Protectrice des archives",
    summary: "Héroïne numérisée, rempart contre la dégénérescence du code.",
    focus: "Elle veille sur l'intégrité de la galerie et des mémoires encodées.",
    mantra: "La force n'est plus physique, elle est structurelle.",
    texture: "Polygone pur",
    eternity: "Active",
    image: "/assets/image_wonder_woman.webp",
    era: "Gardienne de l'Ère",
    description: "L'émotion pure convertie en code source. Un visage dont l'intensité tragique alimente les serveurs centraux de la nostalgie."
  }
];
