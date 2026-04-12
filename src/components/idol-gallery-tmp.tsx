"use client";

import { useAppState } from "@/context/stateContext";
import Image from "next/image";
import { Info, Lock, Key, X } from "lucide-react";
import { idols, Idol } from "@/lib/idols";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IdolGallery() {
  const { avatars } = useAppState() ?? {};
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedIdol, setSelectedIdol] = useState<Idol | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<any | null>(null);       

  useEffect(() => {
    if (selectedIdol || selectedAvatar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIdol, selectedAvatar]);
  const getTextureImage = (texture: string) => {
    switch (texture) {
      case "Marbre poli":
        return "/assets/image_avatar_marbre.png";
      case "Lumière pure":
        return "/assets/image_avatar_lumiere.png";
      case "Pixels":
        return "/assets/image_avatar_pixel.png";
      default:
        return "/assets/image_avatar_marbre.png";
    }
  };

  return (
    <div className="space-y-24 tech-text">
      <section className="space-y-6">
        <header className="flex items-center gap-4 border-b border-border pb-4">
          <Lock className="w-5 h-5 text-foreground" />
          <h2 className="font-heading text-2xl uppercase tracking-[0.3em] font-bold text-foreground">
            Les Éternelles
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {idols.map((idol) => (
            <div
              key={idol.id}
              className="group relative bg-background border border-border p-4 transition-all duration-300 hover:border-foreground cursor-pointer"
              onMouseEnter={() => setHoveredId(idol.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedIdol(idol)}
            >
              <div className="relative aspect-square mb-4 overflow-hidden bg-background">
                {idol.image ? (
                  <Image src={idol.image} alt={idol.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground"><Info className="w-8 h-8 opacity-20" /></div>
                )}
                <div className={`absolute inset-0 bg-background/90 p-6 flex flex-col justify-center items-center text-center transition-opacity duration-300 ${hoveredId === idol.id ? 'opacity-100' : 'opacity-0'}`}>
                   <p className="text-sm font-bold tracking-widest mb-4">RELIQUE {idol.id}</p>
                   <p className="text-xs uppercase leading-relaxed font-mono opacity-80 border-t border-b border-foreground/30 py-4">{idol.description}</p>
                </div>
              </div>
              <div className="space-y-2 border-t border-border pt-4">
                <h3 className="font-heading text-xl uppercase tracking-widest truncate">{idol.name}</h3>
                <div className="flex justify-between items-center pt-2"><span className="text-[10px] uppercase text-muted-foreground tracking-widest">Date de synthèse</span><span className="text-xs font-mono">{idol.era}</span></div>
                <div className="flex justify-between items-center"><span className="text-[10px] uppercase text-muted-foreground tracking-widest">Condition</span><span className="text-xs font-mono text-foreground font-bold">Immortelle</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <header className="flex items-center gap-4 border-b border-border pb-4">
          <Key className="w-5 h-5 text-foreground" />
          <h2 className="font-heading text-2xl uppercase tracking-[0.3em] font-bold text-foreground">Archives de Synthèse</h2>
        </header>

        {(!avatars || avatars.length === 0) ? (
          <div className="border border-border border-dashed p-12 flex flex-col items-center justify-center text-center space-y-4">
             <div className="w-12 h-12 border border-foreground flex items-center justify-center mb-4"><span className="animate-pulse">_</span></div>
             <p className="text-sm text-muted-foreground uppercase tracking-widest">Erreur 404</p>
             <h3 className="text-xl font-bold uppercase tracking-[0.2em]">Aucune donnée de synthèse détectée</h3>
             <p className="text-xs text-muted-foreground font-mono max-w-md mt-4">La matrice est vide. Rejoignez le studio de création pour encoder une nouvelle entité et l'inscrire dans l'éternité du réseau.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avatars.map((avatar) => (
              <div key={avatar.id} className="bg-background border border-border p-4 hover:border-foreground transition-colors group relative cursor-pointer" onClick={() => setSelectedAvatar(avatar)}>
                <div className="relative aspect-square mb-4 overflow-hidden bg-background">
                  <Image src={getTextureImage(avatar.texture)} alt={avatar.name} fill className="object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-1000" />
                </div>
                <div className="space-y-3 border-t border-border pt-4">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-widest truncate">{avatar.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <AnimatePresence>
        {selectedIdol && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-foreground/10 backdrop-blur-md" onClick={() => setSelectedIdol(null)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative bg-background border border-border w-full max-w-5xl flex flex-col md:flex-row shadow-2xl" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedIdol(null)} className="absolute top-4 right-4 z-10 w-8 h-8 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"><X size={18} /></button>
              <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto min-h-[50vh]">
                 <Image src={selectedIdol.image} alt={selectedIdol.name} fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                <h2 className="font-heading text-4xl uppercase tracking-[0.2em]">{selectedIdol.name}</h2>
                <div className="space-y-2 text-sm font-mono border-t border-b border-border py-6">
                   <div className="flex justify-between"><span className="text-muted-foreground">Statut</span><span>Éternelle</span></div>
                   <div className="flex justify-between"><span className="text-muted-foreground">Époque</span><span>{selectedIdol.era}</span></div>
                   <div className="flex justify-between"><span className="text-muted-foreground">Résolution</span><span>Maximum</span></div>
                </div>
                <p className="text-sm leading-relaxed font-mono opacity-80">{selectedIdol.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
        {selectedAvatar && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-foreground/10 backdrop-blur-md" onClick={() => setSelectedAvatar(null)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative bg-background border border-border w-full max-w-4xl flex flex-col md:flex-row shadow-2xl" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedAvatar(null)} className="absolute top-4 right-4 z-10 w-8 h-8 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"><X size={18} /></button>
              <div className="w-full md:w-1/2 relative aspect-square">
                 <Image src={getTextureImage(selectedAvatar.texture)} alt={selectedAvatar.name} fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                <h2 className="font-heading text-3xl uppercase tracking-[0.2em]">{selectedAvatar.name}</h2>
                <div className="space-y-2 text-sm font-mono border-t border-b border-border py-4">
                   <div className="flex justify-between"><span className="text-muted-foreground">ID</span><span>{selectedAvatar.id.slice(0,8)}</span></div>
                   <div className="flex justify-between"><span className="text-muted-foreground">Texture</span><span>{selectedAvatar.texture}</span></div>
                   <div className="flex justify-between"><span className="text-muted-foreground">Résolution</span><span>{selectedAvatar.resolution}</span></div>
                   <div className="flex justify-between"><span className="text-muted-foreground">Sublime</span><span>{selectedAvatar.sublimeLevel}%</span></div>
                   <div className="flex justify-between"><span className="text-muted-foreground">Densité</span><span>{selectedAvatar.density}%</span></div>
                   <div className="flex justify-between"><span className="text-muted-foreground">Fatigue</span><span>{selectedAvatar.fatigueSuppressed ? "OUI" : "NON"}</span></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
