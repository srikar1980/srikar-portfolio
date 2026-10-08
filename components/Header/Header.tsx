"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";
import SectionLink from "@/components/SectionLink/SectionLink";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    if (menuOpen) {
      menuButtonRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveSection = () => {
      animationFrame = 0;
      const marker =
        (document.querySelector("header")?.getBoundingClientRect().bottom ?? 0) +
        Math.min(window.innerHeight * 0.25, 180);
      const sections = navItems
        .map((item) => document.getElementById(item.href.slice(1)))
        .filter((section): section is HTMLElement => section !== null);

      let activeId = sections[0]?.id ?? "home";
      let nearestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= marker && rect.bottom > marker) {
          activeId = section.id;
          break;
        }

        const distance =
          rect.top > marker ? rect.top - marker : marker - rect.bottom;
        if (distance < nearestDistance) {
          nearestDistance = distance;
          activeId = section.id;
        }
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        activeId = sections.at(-1)?.id ?? activeId;
      }

      setActiveSection(activeId);
    };

    const scheduleUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <>
      <SectionLink href="#main-content" className="skipLink">
        Skip to main content
      </SectionLink>
      <header className={styles.header}>
        <nav
          className={`container ${styles.navbar}`}
          aria-label="Main navigation"
        >
          <div className={styles.contacts}>
            <div className={styles.brand}>
              <Link href="/" aria-label="Go to home page">
                <FaEnvelope aria-hidden="true" />
                <span>srikar.ravoori@gmail.com</span>
              </Link>
            </div>
            <a
              href="tel:+919948800149"
              className={styles.phone}
              aria-label="Call +91 9948800149"
            >
              <FaPhoneAlt aria-hidden="true" />
              <span>+91 9948800149</span>
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className={styles.hamburger}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? (
              <FaXmark aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>

          <ul
            id="primary-navigation"
            className={`${styles.navLinks} ${
              menuOpen ? styles.active : ""
            }`}
          >
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);

              return (
                <li key={item.label}>
                  <SectionLink
                    href={item.href}
                    onNavigate={closeMenu}
                    aria-current={
                      activeSection === sectionId ? "location" : undefined
                    }
                  >
                    {item.label}
                  </SectionLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}