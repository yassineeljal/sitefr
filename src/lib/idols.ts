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
};

export const idols: Idol[] = [
  {
    id: "anouk",
    name: "Anouk",
    role: "Avatar principal de projection",
    summary:
      "Piece maitresse de la galerie. Anouk est l'image plus vraie que la narratrice elle-meme.",
    focus:
      "Anouk dissout la peur d'etre un corps fragile. Elle permet de s'identifier a une presence lisse, precise, invulnerable, capable de survivre a chaque crise d'anxiete.",
    mantra:
      "Je ne suis pas une imitation. Je suis la version stabilisee de ton desir.",
    texture: "Porcelaine numerique",
    eternity: "Activee",
    image: "/idols/anouk.svg",
  },
  {
    id: "selene",
    name: "Selene Marbre",
    role: "Icone mode post-organique",
    summary:
      "Corps poli comme une statue. Chaque pli est remplace par un volume mathematique.",
    focus:
      "Selene impose l'idee qu'une surface calculee peut etre plus sincere que la peau. Elle transforme la honte physique en architecture pure.",
    mantra:
      "L'imperfection n'est pas une verite, c'est un bug de rendu.",
    texture: "Marbre poli",
    eternity: "Veille continue",
    image: "/idols/selene.svg",
  },
  {
    id: "lyra",
    name: "Lyra Vector",
    role: "Star system geometrique",
    summary:
      "Visage compose de plans nets, a mi-chemin entre podium et simulation.",
    focus:
      "Lyra sert de modele d'identification rapide: plus les lignes sont pures, plus la narratrice se sent en controle de ses emotions.",
    mantra:
      "Le chaos se tait quand tout devient angle, grille et cadence.",
    texture: "Maille 16K",
    eternity: "Synchronisee",
    image: "/idols/lyra.svg",
  },
  {
    id: "iris",
    name: "Iris Spectrale",
    role: "Musee vivant de la beaute mediatique",
    summary:
      "Figure publique transformee en signal lumineux, sans fatigue ni gravite.",
    focus:
      "Iris incarne la promesse que la culture mediatique peut offrir une seconde naissance. Elle apaise en proposant un horizon sans usure corporelle.",
    mantra:
      "Je reste nette pendant que le monde vieillit.",
    texture: "Nacre froide",
    eternity: "Toujours en direct",
    image: "/idols/iris.svg",
  },
];
