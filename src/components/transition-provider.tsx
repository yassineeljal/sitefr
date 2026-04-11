"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

type TransitionPhase = "idle" | "closing" | "opening";

type TransitionContextValue = {
  navigateWithTransition: (href: string) => boolean;
  phase: TransitionPhase;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const navigateWithTransition = useCallback(
    (href: string) => {
      if (!href || href === pathname || phase !== "idle") {
        return false;
      }

      setPendingHref(href);
      setPhase("closing");

      return true;
    },
    [pathname, phase]
  );

  useEffect(() => {
    if (phase !== "closing" || !pendingHref) {
      return;
    }

    const timer = window.setTimeout(() => {
      router.push(pendingHref);
      setPhase("opening");
    }, 360);

    return () => window.clearTimeout(timer);
  }, [pendingHref, phase, router]);

  useEffect(() => {
    if (phase !== "opening") {
      return;
    }

    const timer = window.setTimeout(() => {
      setPhase("idle");
      setPendingHref(null);
    }, 520);

    return () => window.clearTimeout(timer);
  }, [phase]);

  const contextValue = useMemo(
    () => ({ navigateWithTransition, phase }),
    [navigateWithTransition, phase]
  );

  return (
    <TransitionContext.Provider value={contextValue}>
      <div className="relative flex min-h-full flex-col">
        <div key={pathname} className="route-enter">
          {children}
        </div>

        <div aria-hidden="true" data-phase={phase} className="route-curtain">
          <div className="route-curtain__line" />
          <p className="route-curtain__text">Transfert en cours</p>
        </div>
      </div>
    </TransitionContext.Provider>
  );
}

export function useCinematicTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error("useCinematicTransition must be used inside TransitionProvider");
  }

  return context;
}
