"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppState } from "@/context/stateContext";

export default function CreationPage() {
  const { quizPassed, addAvatar } = useAppState() ?? {};
  const router = useRouter();

  const [name, setName] = useState("");
  const [texture, setTexture] = useState("Marbre poli");
  const [resolution, setResolution] = useState("8K");
  const [sublimeLevel, setSublimeLevel] = useState(50);
  const [density, setDensity] = useState(50);
  const [fatigueSuppressed, setFatigueSuppressed] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);

  const getTextureImage = (texture: string) => {
    switch (texture) {
      case "Marbre poli": return "/assets/image_avatar_marbre.png";
      case "Lumière pure": return "/assets/image_avatar_lumiere.png";
      case "Pixels": return "/assets/image_avatar_pixel.png";
      default: return "/assets/image_avatar_marbre.png";
    }
  };

  useEffect(() => {
    if (quizPassed === false) {
      router.push("/calculateur");
    }
  }, [quizPassed, router]);

  if (!quizPassed) {
    return null;
  }

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompiling(true);

    setTimeout(() => {
      if (addAvatar) {
        addAvatar({
          id: crypto.randomUUID(),
          name: name || "Entité Anonyme",
          texture,
          resolution,
          sublimeLevel,
          density,
          fatigueSuppressed,
          timestamp: Date.now(),
          status: "Éternelle"
        });
      }
      router.push("/galerie");
    }, 1800);
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-6 pt-24 pb-14 flex items-center justify-center cinematic-enter bg-background">
      <div className="pointer-events-none absolute inset-0 synth-grid opacity-20" />
      
      {isCompiling ? (
        <div className="relative z-10 flex flex-col items-center justify-center text-foreground tech-text uppercase tracking-widest text-sm space-y-6">
          <div className="animate-pulse mb-8 border border-foreground w-16 h-16 flex items-center justify-center rounded-none relative">
            <span className="absolute w-2 h-2 bg-foreground animate-ping" />
          </div>
          <p className="animate-pulse">Compilation du maillage en cours...</p>
          <p className="text-muted-foreground opacity-50 text-xs">[ABSENCE DE FATIGUE : CONFIRMÉE]</p>
        </div>
      ) : (
        <div className="relative z-10 w-full max-w-2xl bg-background border border-border p-8 tech-text">
          <header className="space-y-3 border-b border-border pb-6 mb-6">
            <h1 className="font-heading text-3xl uppercase tracking-[0.2em] text-center text-foreground">Studio de Synthèse</h1>
            <p className="text-muted-foreground text-center text-sm uppercase tracking-wider">
              Démarrage du processus d&apos;abstraction. Élimination du corps organique.
            </p>
          </header>
          
          <form id="avatar-form" onSubmit={handleGenerate} className="space-y-6">
            <div className="mb-6 flex justify-center">
              <div className="relative aspect-square w-32 md:w-48 overflow-hidden bg-zinc-900 border border-border">
                <Image src={getTextureImage(texture)} alt={texture} fill className="object-cover grayscale" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-foreground font-bold">Nom de l&apos;entité</label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                placeholder="Ex: Anouk-7"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="texture" className="text-xs uppercase tracking-widest text-foreground font-bold">Texture (Revêtement)</label>
                <select
                  id="texture"
                  value={texture}
                  onChange={(e) => setTexture(e.target.value)}
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                >
                  <option value="Marbre poli">Marbre poli</option>
                  <option value="Lumière pure">Lumière pure</option>
                  <option value="Pixels">Pixels</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="resolution" className="text-xs uppercase tracking-widest text-foreground font-bold">Résolution</label>
                <select
                  id="resolution"
                  value={resolution}
                  onChange={(e) => setResolution(e.target.value)}
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                >
                  <option value="8K">8K</option>
                  <option value="16K">16K</option>
                  <option value="Éternité">Éternité</option>
                </select>
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-border">
              <div className="space-y-2">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="sublime" className="text-xs uppercase tracking-widest text-foreground font-bold">Niveau de Sublime</label>
                  <span className="text-xs text-muted-foreground">[{sublimeLevel}%]</span>
                </div>
                <input
                  id="sublime"
                  type="range"
                  min="0"
                  max="100"
                  value={sublimeLevel}
                  onChange={(e) => setSublimeLevel(parseInt(e.target.value))}
                  className="w-full accent-foreground h-1 bg-border rounded-none appearance-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="density" className="text-xs uppercase tracking-widest text-foreground font-bold">Densité de l&apos;air virtuel</label>
                  <span className="text-xs text-muted-foreground">[{density}%]</span>
                </div>
                <input
                  id="density"
                  type="range"
                  min="0"
                  max="100"
                  value={density}
                  onChange={(e) => setDensity(parseInt(e.target.value))}
                  className="w-full accent-foreground h-1 bg-border rounded-none appearance-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  id="fatigue"
                  type="checkbox"
                  checked={fatigueSuppressed}
                  onChange={(e) => setFatigueSuppressed(e.target.checked)}
                  className="w-4 h-4 accent-foreground border-border bg-background"
                />
                <label htmlFor="fatigue" className="text-xs uppercase tracking-widest text-foreground font-bold cursor-pointer">
                  Suppression absolue de la fatigue
                </label>
              </div>
            </div>
            
            <div className="pt-8">
              <button
                type="submit"
                className="w-full bg-foreground text-background border border-foreground hover:bg-background hover:text-foreground transition-colors font-bold uppercase tracking-widest py-4 text-sm"
              >
                GÉNÉRER
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
