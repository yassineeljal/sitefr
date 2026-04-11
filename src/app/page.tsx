"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import { CinematicLink } from "@/components/cinematic-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const destinations = [
  {
    href: "/calculateur",
    title: "Calculateur de Compatibilite Virtuelle",
    description:
      "Teste ton aptitude a quitter la chair et mesure ton niveau de Purete de Synthese.",
    label: "Aptitude",
  },
  {
    href: "/galerie",
    title: "Galerie des Idoles",
    description:
      "Catalogue de figures parfaites, entre mode, star system et avatar Anouk.",
    label: "Identification",
  },
];

export default function Home() {
  const [portalActive, setPortalActive] = useState(false);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    if (!portalActive) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowChoices(true);
    }, 700);

    return () => window.clearTimeout(timer);
  }, [portalActive]);

  const activatePortal = () => {
    if (portalActive) {
      return;
    }

    setPortalActive(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
      <div className="pointer-events-none absolute inset-0 synth-grid opacity-55" />
      <div
        className={cn(
          "pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 transition-all duration-700",
          portalActive ? "scale-[18] opacity-90" : "scale-0 opacity-0"
        )}
      />

      <section
        className={cn(
          "relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col justify-center gap-8 transition-colors duration-500",
          portalActive ? "text-zinc-100" : "text-foreground"
        )}
      >
        <div className="max-w-2xl space-y-6">
          <Badge
            variant="secondary"
            className={cn(
              "cinematic-enter uppercase tracking-[0.24em]",
              portalActive && "border-zinc-500 bg-zinc-800/70 text-zinc-100"
            )}
          >
            Protocole Anouk // 10 avril 2026
          </Badge>
          <h1
            className={cn(
              "hero-headline cinematic-enter cinematic-delay-1 text-5xl leading-none sm:text-7xl",
              portalActive ? "text-zinc-100" : "text-foreground"
            )}
          >
            Atelier de Purete de Synthese
          </h1>
          <p
            className={cn(
              "cinematic-enter cinematic-delay-2 max-w-xl text-base leading-7 sm:text-lg",
              portalActive ? "text-zinc-300" : "text-muted-foreground"
            )}
          >
            Clique pour lancer le transfert. Une animation te guide vers deux
            experiences: le test de compatibilite virtuelle et la galerie des
            idoles qui apaisent l&apos;anxiete par la perfection de l&apos;image.
          </p>
          <Button
            size="lg"
            className={cn(
              "cinematic-enter cinematic-delay-3 rounded-full px-6",
              portalActive && "pointer-events-none opacity-0"
            )}
            onClick={activatePortal}
          >
            Cliquer pour ouvrir la passerelle
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div
          className={cn(
            "grid gap-5 transition-all duration-700 sm:grid-cols-2",
            showChoices
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-10 opacity-0"
          )}
        >
          {destinations.map((destination) => (
            <CinematicLink
              key={destination.href}
              href={destination.href}
              className="block"
            >
              <Card className="h-full border-none bg-zinc-900/90 text-zinc-100 ring-white/15 transition-transform duration-300 hover:-translate-y-1 hover:ring-white/35">
                <CardHeader>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="border-zinc-500 text-zinc-200"
                    >
                      {destination.label}
                    </Badge>
                  </CardAction>
                  <CardTitle className="font-heading text-3xl leading-tight">
                    {destination.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-300">
                    {destination.description}
                  </CardDescription>
                </CardHeader>
                <div className="px-4 pb-4 text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Entrer
                  <Sparkles className="ml-2 inline size-3" />
                </div>
              </Card>
            </CinematicLink>
          ))}
        </div>
      </section>
    </main>
  );
}
