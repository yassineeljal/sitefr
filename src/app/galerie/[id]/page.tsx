import { idols } from "@/lib/idols";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default async function IdolPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const idol = idols.find((i) => i.id === resolvedParams.id);

  if (!idol) return notFound();

  return (
    <main className="min-h-screen bg-background tech-text pb-20">
      <div className="relative w-full max-h-[60vh] aspect-[4/3] md:aspect-[21/9] bg-zinc-900 border-b border-border overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 p-8 md:p-24 pt-32 pb-32">
          <div className="relative w-full h-full">
            {idol.image && <Image src={idol.image} alt={idol.name} fill priority className="object-contain opacity-90" />}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent pointer-events-none" />
        <Link href="/galerie" className="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-white/60 transition-colors z-10">
          <ArrowLeft className="w-4 h-4" /> Retour aux Archives
        </Link>
        <div className="relative z-20 w-full p-6 md:p-12">
          <h1 className="font-heading text-4xl md:text-6xl uppercase tracking-[0.2em] font-bold text-white drop-shadow-md">{idol.name}</h1>
          <p className="text-sm md:text-base font-mono mt-4 max-w-2xl text-white/90 leading-relaxed uppercase tracking-widest drop-shadow-md">{idol.role}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-12">
          <section className="space-y-6">
            <h2 className="text-xs font-bold font-mono tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-4">Pureté de Synthèse</h2>
            <p className="text-lg md:text-xl font-serif leading-relaxed text-foreground">{idol.summary}</p>
            <p className="text-base md:text-lg font-serif leading-relaxed text-muted-foreground">{idol.focus}</p>
          </section>
          <section className="space-y-6">
            <h2 className="text-xs font-bold font-mono tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-4">Mantra</h2>
            <blockquote className="border-l-2 border-foreground pl-6 text-xl md:text-2xl font-heading italic text-foreground tracking-wide">&quot;{idol.mantra}&quot;</blockquote>
          </section>
          <section className="space-y-6">
            <h2 className="text-xs font-bold font-mono tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-4">Analyse Structurelle</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{idol.description}</p>
          </section>
        </div>
        <aside className="space-y-8 bg-zinc-50 dark:bg-zinc-950 p-8 border border-border h-max">
           <h3 className="font-bold text-sm tracking-[0.2em] uppercase font-mono border-b border-border pb-4 mb-6">Métadonnées</h3>
           <div className="space-y-6 font-mono text-xs uppercase tracking-widest">
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">ID_Relique</span><span className="text-foreground break-all">{idol.id.toUpperCase()}</span></div>
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">Condition</span><span className="text-green-500 font-bold">[STABLE]</span></div>
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">Époque Générée</span><span className="text-foreground">{idol.era}</span></div>
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">Texture Globale</span><span className="text-foreground">{idol.texture}</span></div>
             <div className="flex flex-col space-y-2"><span className="text-muted-foreground">Protocole d&apos;Éternité</span><span className="text-foreground">{idol.eternity}</span></div>
           </div>
        </aside>
      </div>
    </main>
  );
}