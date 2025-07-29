"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

import { scrollToSection } from "../utils/scrollToSection";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/cao-que-mia-logo.png"
          alt="Paiming logo"
          width={110}
          height={40}
        />
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/" className={styles.active}>
              Início
            </Link>
          </li>
          <li>
            <Link href="#about-us">Sobre nós</Link>
          </li>
          <li>
            <Link href="#contact">Contato</Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => scrollToSection("donation")}
        className={styles.button}
      >
        Faça uma doação
      </button>
    </header>
  );
};

export default Header;
