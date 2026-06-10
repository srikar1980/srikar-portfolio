"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.button} ${
        visible ? styles.visible : ""
      }`}
    >
      <FaArrowUp />
    </button>
  );
}