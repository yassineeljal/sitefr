"use client";

import { useAppState } from "@/context/stateContext";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function AvatarPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { avatars } = useAppState() ?? {};
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const avatar = avatars?.find((a) => a.id === resolvedParams.id);

  if (!avatar) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center tech-text space-y-6">
        <p className="uppercase tracking-widest text-muted-foreground text-sm">Erreur 404</p>
        <h1 className="text-3xl uppercase tracking-[0.2em] font-heading">Entité Non Trouvée</h1>
        <Link href="/galerie" className="border border-border px-6 py-2 uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-colors">Retour aux Archives</Link>
      </div>
    );
  }

  const getTextureImage = (texture: string) => {
    switch (texture) {
      case "Marbre poli": return "/assets/image_avatar_marbre.png";
      case "Lumière pure": return "/assets/image_avatar_lumiere.png";
      case "Pixels": return "/assets/image_avatar_pixel.png";
      default: return "/assets/image_avatar_marbre.png";
    }
  };

  return (
    <main className="min-h-screen bg-background tech-text pb-20 animate-in fade-in duration-700">
      <div className="relative w-full max-h-[60vh] aspect-[4/3] md:aspect-[21/9] bg-zinc-900 border-b border-border overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 p-8 md:p-24 pt-32 pb-32">
          <div className="relative w-full h-full">
            <Image src={getTextureImage(avatar.texture)} alt={avatar.name} fill priority className="object-contain opacity-90" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent pointer-events-none" />
        <Link href="/galerie" className="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-white/60 transition-colors z-10">
          <ArrowLeft className="w-4 h-4" /> Retour aux Archives
        </Link>
        <div className="relative z-20 w-full p-6 md:p-12">
          <h1 className="font-heading text-4xl md:text-6xl uppercase tracking-[0.2em] font-bold text-white drop-shadow-md">{avatar.name}</h1>
          <p className="text-sm md:text-base font-mono mt-4 max-w-2xl text-white/90 leading-relaxed uppercase tracking-widest drop-shadow-md">Archive de Synthèse V.{avatar.resolution}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-12">
          <section className="space-y-6">
            <h2 className="text-xs font-bold font-mono tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-4">Niveau de Sublime</h2>
            <div className="flex items-center gap-6">
                <div className="text-6xl font-heading text-foreground">{avatar.sublimeLevel}%</div>
                <p className="text-sm font-serif leading-relaxed text-muted-foreground flex-1">Le pourcentage de sublimation représente la distance qui sépare cette entité de la réalité physique. Plus le niveau est élevé, plus l&apos;avatar échappe à la vulnérabilité de la chair pour atteindre la pureté absolue.</p>
            </div>
          </section>
          
          <section className="space-y-6">
            <h2 className="text-xs font-bold font-mono tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-4">Journal d&apos;Émancipation</h2>
            <p className="text-lg md:text-xl font-serif leading-relaxed text-foreground">Cette image virtuelle a été encodée pour affranchir le sujet de l&apos;angoisse corporelle.</p>
            <p className="text-base leading-relaxed text-muted-foreground">La texture &quot;{avatar.texture}&quot; a été délibérément sélectionnée parmi les matériaux synthétiques pour sa capacité à réfléchir la lumière sans se compromettre. {avatar.fatigueSuppressed ? "Les senseurs de fatigue ont été complètement supprimés, offrant une insomnie lumineuse perpétuelle." : "La fatigue organique a été modérée par un système de balayage régulier des données."}</p>
          </section>
        </div>

        <aside className="space-y-8 bg-zinc-50 dark:bg-zinc-950 p-8 border border-border h-max">
           <h3 className="font-bold text-sm tracking-[0.2em] uppercase font-mono border-b border-border pb-4 mb-6">Paramètres d&apos;Entité</h3>
           <div className="space-y-6 font-mono text-xs uppercase tracking-widest">
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">ID_Hash</span><span className="text-foreground break-all">{avatar.id}</span></div>
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">Condition</span><span className="text-green-500 font-bold">[STABLE]</span></div>
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">Type de Texture</span><span className="text-foreground">{avatar.texture}</span></div>
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">Résolution Native</span><span className="text-foreground">{avatar.resolution}</span></div>
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">Densité de Polygone</span><span className="text-foreground">{avatar.density} PPI</span></div>
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">Fatigue</span><span className="text-foreground">{avatar.fatigueSuppressed ? "OFF" : "ON"}</span></div>
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">Création Alpha</span><span className="text-foreground">{new Date(avatar.timestamp).toLocaleString("fr-FR")}</span></div>
           </div>
        </aside>
      </div>
    </main>
  );
}