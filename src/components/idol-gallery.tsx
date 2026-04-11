"use client";

import Image from "next/image";
import { ArrowLeft, Eye } from "lucide-react";

import { CinematicLink } from "@/components/cinematic-link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { idols } from "@/lib/idols";
import { cn } from "@/lib/utils";

export function IdolGallery() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-8 cinematic-enter">
      <header className="space-y-5">
        <Badge
          variant="secondary"
          className="cinematic-enter uppercase tracking-[0.24em]"
        >
          Catalogue esthetique
        </Badge>
        <h1 className="hero-headline cinematic-enter cinematic-delay-1 text-5xl leading-none sm:text-6xl">
          Galerie des Idoles
        </h1>
        <p className="cinematic-enter cinematic-delay-2 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Un inventaire minimaliste des figures qui deviennent plus vraies que
          la realite. Chaque carte explique comment l&apos;identification a ces
          images parfaites calme l&apos;anxiete et pousse vers une renaissance
          virtuelle.
        </p>
        <div className="cinematic-enter cinematic-delay-3 flex flex-wrap gap-3">
          <CinematicLink
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full px-4"
            )}
          >
            <ArrowLeft className="size-4" />
            Retour a la passerelle
          </CinematicLink>
          <CinematicLink
            href="/calculateur"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "rounded-full px-4"
            )}
          >
            Lancer le calculateur
          </CinematicLink>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {idols.map((idol, index) => (
          <Dialog key={idol.id}>
            <Card
              className="group h-full border-none bg-zinc-950 text-zinc-100 ring-zinc-700/70 cinematic-enter"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={idol.image}
                  alt={`Portrait stylise de ${idol.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute right-3 bottom-3 left-3 space-y-1">
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-zinc-300">
                    {idol.role}
                  </p>
                  <h2 className="font-heading text-3xl leading-none text-zinc-100">
                    {idol.name}
                  </h2>
                </div>
              </div>

              <CardContent className="space-y-4 pt-4">
                <p className="line-clamp-3 text-sm leading-6 text-zinc-300">
                  {idol.summary}
                </p>
                <DialogTrigger
                  render={
                    <Button
                      variant="outline"
                      className="w-full border-zinc-600 bg-transparent text-zinc-100 hover:bg-zinc-100 hover:text-zinc-950"
                    />
                  }
                >
                  <Eye className="size-4" />
                  Ouvrir la fiche detaillee
                </DialogTrigger>
              </CardContent>
            </Card>

            <DialogContent className="max-w-3xl border-none bg-stone-100 text-stone-900">
              <DialogHeader className="space-y-2">
                <Badge
                  variant="outline"
                  className="w-fit border-stone-400 text-stone-700"
                >
                  Dossier esthetique
                </Badge>
                <DialogTitle className="font-heading text-4xl leading-none sm:text-5xl">
                  {idol.name}
                </DialogTitle>
                <DialogDescription className="text-sm uppercase tracking-[0.2em] text-stone-600">
                  {idol.role}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-stone-300">
                  <Image
                    src={idol.image}
                    alt={`Etude visuelle de ${idol.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <p className="leading-7 text-stone-800">{idol.focus}</p>
                  <Separator className="bg-stone-300" />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <article className="rounded-lg border border-stone-300 bg-white p-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                        Texture
                      </p>
                      <p className="mt-1 text-sm font-medium text-stone-800">
                        {idol.texture}
                      </p>
                    </article>
                    <article className="rounded-lg border border-stone-300 bg-white p-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                        Eternite
                      </p>
                      <p className="mt-1 text-sm font-medium text-stone-800">
                        {idol.eternity}
                      </p>
                    </article>
                  </div>
                  <CardDescription className="rounded-lg border border-stone-300 bg-white/80 p-4 text-sm leading-6 text-stone-800">
                    {idol.mantra}
                  </CardDescription>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </section>
    </main>
  );
}
