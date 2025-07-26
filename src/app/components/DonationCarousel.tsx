"use client";

import Image from "next/image";

import styles from "./DonationCarousel.module.css";

const donations = [
  {
    value: "R$ 5",
    description: "Ajuda na compra de medicamentos básicos como vermífugos.",
  },
  {
    value: "R$ 20",
    description: "Garante ração para um filhote durante uma semana.",
  },
  { value: "R$ 100", description: "Cobre as vacinas de animais adultos." },
  {
    value: "R$ 300",
    description: "Permite atendimento veterinário completo para um resgatado.",
  },
];

const DonationCarousel = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Com sua doação, vidas são transformadas
        </h1>
        <div className={styles.carousel}>
          {donations.map((item, index) => (
            <div className={styles.card} key={index}>
              <span className={styles.value}>{item.value}</span>
              <p className={styles.description}>{item.description}</p>
              <button className={styles.button}>Quero doar</button>
            </div>
          ))}
        </div>
        <Image
          src="/gato-olhando.png"
          alt="Gato observando"
          width={400}
          height={400}
          className={styles.catImage}
        />
      </div>
    </section>
  );
};

export default DonationCarousel;
