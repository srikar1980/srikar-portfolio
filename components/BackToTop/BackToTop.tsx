"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import { SECTION_NAVIGATION_EVENT } from "@/components/SectionNavigation/SectionNavigation";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.dispatchEvent(
      new CustomEvent(SECTION_NAVIGATION_EVENT, {
        detail: "home",
      }),
    );
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${styles.button} ${
        visible ? styles.visible : ""
      }`}
      aria-label="Back to top"
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
}