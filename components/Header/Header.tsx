"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#techstack" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.navbar}`}>
        <div className={styles.logoSection}>
  <div className={styles.logo}>
    <Link href="/">
      Srikar <span>Ravoori</span>
    </Link>
  </div>

  <a href="tel:+919948800149" className={styles.contact}>
    <FaPhoneAlt />
    <span>+91 99488 00149</span>
  </a>
</div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>

        <ul
          className={`${styles.navLinks} ${
            menuOpen ? styles.active : ""
          }`}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}