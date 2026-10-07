"use client";

import type {
  AnchorHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import { SECTION_NAVIGATION_EVENT } from "@/components/SectionNavigation/SectionNavigation";

type SectionLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children" | "onClick"
> & {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export default function SectionLink({
  href,
  children,
  onNavigate,
  ...anchorProps
}: SectionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      !href.startsWith("#") ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById(href.slice(1));
    if (!target) {
      return;
    }

    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent(SECTION_NAVIGATION_EVENT, {
        detail: target.id,
      }),
    );
    onNavigate?.();
  };

  return (
    <a {...anchorProps} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
