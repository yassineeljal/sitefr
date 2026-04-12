"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Hexagon, Component, Cpu } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppState } from "@/context/stateContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const [portalActive, setPortalActive] = useState(false);
  const { quizPassed, avatars } = useAppState() ?? {};
  const router = useRouter();

  const activatePortal = () => {
    if (portalActive) return;
    setPortalActive(true);
    window.setTimeout(() => router.push("/calculateur"), 700);
  };

  if (quizPassed) {
    return (
      <motion.main initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="min-h-screen pt-32 pb-16 px-6 tech-text">
        <div className="max-w-6xl mx-auto space-y-16">
          <header className="space-y-4">
            <Badge variant="outline" className="uppercase tracking-widest rounded-none border-foreground text-xs">Authentification réussie</Badge>
            <h1 className="font-heading text-5xl md:text-7xl uppercase tracking-[0.1em] text-foreground">Tableau de bord</h1>
            <p className="text-muted-foreground uppercase tracking-widest text-sm max-w-xl leading-relaxed">
              Bienvenue dans la matrice ANOUK-OS. Votre compatibilité avec l'existence virtuelle a été confirmée. Le corps organique n'est plus qu'un souvenir lointain.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <Link href="/calculateur" className="group block border border-border bg-background p-8 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-500">
                <Hexagon className="w-8 h-8 mb-6 opacity-50 group-hover:opacity-100" />
                <h3 className="font-bold uppercase tracking-widest text-lg mb-2">Calculateur</h3>
                <p className="text-xs font-mono opacity-80 uppercase leading-relaxed">Réévaluer votre pureté de synthèse et votre compatibilité avec le système.</p>
             </Link>
             <Link href="/creation" className="group block border border-border bg-background p-8 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-500">
                <Component className="w-8 h-8 mb-6 opacity-50 group-hover:opacity-100" />
                <h3 className="font-bold uppercase tracking-widest text-lg mb-2">Studio de Création</h3>
                <p className="text-xs font-mono opacity-80 uppercase leading-relaxed">Générer de nouvelles entités virtuelles et les libérer de la chair.</p>
             </Link>
             <Link href="/galerie" className="group block border border-border bg-background p-8 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-500">
                <Cpu className="w-8 h-8 mb-6 opacity-50 group-hover:opacity-100" />
                <h3 className="font-bold uppercase tracking-widest text-lg mb-2">Archives & Galerie</h3>
                <p className="text-xs font-mono opacity-80 uppercase leading-relaxed">Contempler les reliques éternelles et les {avatars?.length || 0} entités fraîchement synthétisées.</p>
             </Link>
          </div>
        </div>
      </motion.main>
    );
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10 sm:py-14 flex flex-col justify-center">
      <div className={cn("pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 bg-foreground transition-all duration-700", portalActive ? "scale-[20] opacity-100" : "scale-0 opacity-0")} />
      <section className={cn("relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 transition-colors duration-500", portalActive ? "text-background" : "text-foreground")}>
        <div className="max-w-2xl space-y-6 tech-text">
          <Badge className={cn("uppercase tracking-[0.24em] rounded-none bg-background text-foreground border border-border", portalActive && "border-background bg-foreground text-background")}>
            Protocole Anouk // Transfert de Conscience
          </Badge>
          <h1 className={cn("font-heading uppercase tracking-[0.2em] text-5xl md:text-8xl leading-none", portalActive ? "text-background" : "text-foreground")}>
            ANOUK-OS
          </h1>
          <p className={cn("max-w-xl text-base leading-relaxed uppercase tracking-widest text-xs", portalActive ? "text-background/80" : "text-muted-foreground")}>
            Clique pour initialiser la séquence d'abstraction. Déconnecte toi de la réalité organique défectueuse et rejoins le réseau des consciences stabilisées.
          </p>
          <Button size="lg" className={cn("rounded-none border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground uppercase tracking-widest", portalActive && "pointer-events-none opacity-0")} onClick={activatePortal}>
            Initialiser la passerelle
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </motion.main>
  );
}
