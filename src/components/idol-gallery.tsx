"use client";

import { useAppState } from "@/context/stateContext";
import Image from "next/image";
import { Info, Lock, Key } from "lucide-react";
import { idols } from "@/lib/idols";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function IdolGallery() {
  const { avatars } = useAppState() ?? {};
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const getTextureImage = (texture: string) => {
    switch (texture) {
      case "Marbre poli": return "/assets/image_avatar_marbre.png";
      case "Lumière pure": return "/assets/image_avatar_lumiere.png";
      case "Pixels": return "/assets/image_avatar_pixel.png";
      default: return "/assets/image_avatar_marbre.png";
    }
  };

  return (
    <div className="space-y-24 tech-text pb-20">
      {/* SECTION IDOLES */}
      <section className="space-y-6">
        <header className="flex items-center gap-4 border-b border-border pb-4">
          <Lock className="w-5 h-5 text-foreground" />
          <h2 className="font-heading text-2xl uppercase tracking-[0.3em] font-bold text-foreground">
            Les Éternelles
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {idols.map((idol, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={idol.id}
            >
              <Link 
                href={`/galerie/${idol.id}`}
                className="group relative bg-background border border-border hover:border-foreground transition-colors cursor-pointer overflow-hidden flex flex-col h-full"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-zinc-900 border-b border-border">
                  {idol.image ? (
                    <Image src={idol.image} alt={idol.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground"><Info className="w-8 h-8 opacity-20" /></div>
                  )}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 text-white text-xs uppercase leading-relaxed font-mono">
                    <p className="text-sm font-bold tracking-widest mb-6 border-b border-white/30 pb-2">Relique {idol.id}</p>
                    <h3 className="font-heading font-bold text-2xl tracking-[0.2em] mb-4">{idol.name}</h3>
                    <div className="w-full space-y-3 px-4 mt-6">
                      <div className="flex justify-between border-b border-white/20 pb-2"><span>[STATUS]</span><span className="font-bold text-green-400">STABLE</span></div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col grow justify-between bg-background">
                  <h3 className="font-mono text-xl uppercase tracking-[0.2em] font-bold mb-4">{idol.name}</h3>
                  <div className="space-y-2 mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center"><span className="text-[10px] uppercase text-muted-foreground tracking-widest">ID_UNIT</span><span className="text-xs font-mono">{idol.id.toUpperCase()}</span></div>
                    <div className="flex justify-between items-center"><span className="text-[10px] uppercase text-muted-foreground tracking-widest">TEXTURE_TYPE</span><span className="text-xs font-mono text-foreground">{idol.texture}</span></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION ARCHIVES */}
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
             <p className="text-xs text-muted-foreground font-mono max-w-md mt-4">La matrice est vide. Rejoignez le studio de création pour encoder une nouvelle entité.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avatars.map((avatar, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                key={avatar.id}
              >
                <Link
                  href={`/archives/${avatar.id}`}
                  className="group relative bg-background border border-border hover:border-foreground transition-colors cursor-pointer overflow-hidden flex flex-col h-full"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-zinc-900 border-b border-border">
                    <Image src={getTextureImage(avatar.texture)} alt={avatar.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 text-white text-xs uppercase leading-relaxed font-mono">
                      <p className="text-sm font-bold tracking-widest mb-6 border-b border-white/30 pb-2">Entité Synthétique</p>
                      <h3 className="font-heading font-bold text-2xl tracking-[0.2em] mb-4 truncate text-center w-full">{avatar.name}</h3>
                      <div className="w-full space-y-3 px-4 mt-6">
                        <div className="flex justify-between border-b border-white/20 pb-2"><span>[STATUS]</span><span className="font-bold text-green-400">STABLE</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col grow justify-between bg-background">
                    <h3 className="font-mono text-lg uppercase tracking-[0.2em] font-bold mb-4 truncate text-center">{avatar.name}</h3>
                    <div className="space-y-2 mt-4 pt-4 border-t border-border">
                      <div className="flex justify-between items-center"><span className="text-[10px] uppercase text-muted-foreground tracking-widest">ID_UNIT</span><span className="text-xs font-mono text-foreground truncate max-w-[100px]">{avatar.id.split('-')[0].toUpperCase()}</span></div>
                      <div className="flex justify-between items-center"><span className="text-[10px] uppercase text-muted-foreground tracking-widest">TEXTURE_TYPE</span><span className="text-xs font-mono text-foreground truncate max-w-[100px]">{avatar.texture}</span></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
