"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

import { useCinematicTransition } from "@/components/transition-provider";

type CinematicLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function CinematicLink({
  href,
  onClick,
  target,
  ...props
}: CinematicLinkProps) {
  const { navigateWithTransition } = useCinematicTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const usesModifiedKey =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    if (event.button !== 0 || usesModifiedKey || target === "_blank") {
      return;
    }

    const started = navigateWithTransition(href);
    if (started) {
      event.preventDefault();
    }
  };

  return <Link href={href} onClick={handleClick} target={target} {...props} />;
}
