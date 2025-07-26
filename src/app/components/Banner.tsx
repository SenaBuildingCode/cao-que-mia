"use client";

import styles from "./Banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            A sua ajuda <span className={styles.break} /> é fundamental!
          </h1>
          <p>
            Nos ajude a manter a nossa missão ativa em prol da vida dos irmãos
            animais que resgatamos, acolhemos e cuidamos.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Quero fazer uma contribuição
            </button>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src="/vira-lata.png"
            alt="Vira lata simpático"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className={styles.waveDivider}></div>
    </section>
  );
};

export default Banner;
