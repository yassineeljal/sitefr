"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAppState } from "@/context/stateContext";
import { motion } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const { quizPassed } = useAppState() ?? {};

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between border-b border-border bg-background/60 backdrop-blur-md px-6 h-16 tech-text text-xs uppercase tracking-widest"
    >
      <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-70">
        <div className="flex items-center justify-center w-6 h-6 border border-foreground">
          <img src="/favicon.ico" alt="Logo" className="w-4 h-4 object-contain invert dark:invert-0" />
        </div>
        <span className="font-bold text-foreground leading-none tracking-[0.3em]">ANOUK-OS</span>
      </Link>

      <div className="flex items-center gap-8 text-xs font-mono">
        <Link href="/calculateur" className={cn("transition-colors hover:text-foreground", pathname === "/calculateur" ? "text-foreground font-bold border-b border-foreground" : "text-muted-foreground")}>
          Calculateur
        </Link>
        <Link href={quizPassed ? "/creation" : "/calculateur"} className={cn("transition-colors hover:text-foreground", pathname === "/creation" ? "text-foreground font-bold border-b border-foreground" : "text-muted-foreground")}>
          Studio
        </Link>
        <Link href={quizPassed ? "/galerie" : "/calculateur"} className={cn("transition-colors hover:text-foreground", pathname === "/galerie" ? "text-foreground font-bold border-b border-foreground" : "text-muted-foreground")}>
          Galerie
        </Link>
      </div>
    </motion.nav>
  );
}
