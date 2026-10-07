"use client";

import { useEffect, useState, type ReactNode } from "react";

export const SECTION_NAVIGATION_EVENT = "portfolio:section-navigation";

const sectionNames: Record<string, string> = {
  home: "Home",
  about: "About",
  "tech-stack": "Tech Stack",
  experience: "Experience",
  projects: "Projects",
  education: "Education",
  "main-content": "main content",
};

type SectionNavigationProps = {
  children: ReactNode;
};

export default function SectionNavigation({
  children,
}: SectionNavigationProps) {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading Srikar Ravoori portfolio");

  useEffect(() => {
    let timeout = window.setTimeout(() => setLoading(false), 650);

    const handleSectionNavigation = (event: Event) => {
      const targetId = (event as CustomEvent<string>).detail;
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      window.clearTimeout(timeout);
      setMessage(`Moving to ${sectionNames[targetId] ?? "section"}`);
      setLoading(true);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      target.focus({ preventScroll: true });

      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );

      timeout = window.setTimeout(
        () => setLoading(false),
        prefersReducedMotion ? 250 : 650,
      );
    };

    window.addEventListener(
      SECTION_NAVIGATION_EVENT,
      handleSectionNavigation,
    );

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener(
        SECTION_NAVIGATION_EVENT,
        handleSectionNavigation,
      );
    };
  }, []);

  return (
    <>
      {children}
      <div
        className={
          loading
            ? "sectionLoader sectionLoaderVisible"
            : "sectionLoader"
        }
        role="status"
        aria-live="polite"
        aria-atomic="true"
        aria-hidden={!loading}
      >
        <div className="sectionLoaderContent">
          <span className="sectionLoaderSpinner" aria-hidden="true" />
          <span>{message}</span>
        </div>
      </div>
    </>
  );
}
