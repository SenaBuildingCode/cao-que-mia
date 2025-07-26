"use client";

import styles from "./AboutUs.module.css";
import ImageGalleryCarousel from "./ImageGalleryCarousel";

const AboutUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Sobre nós</h1>
          <p>
            O grupo nasceu da constante presença de maus tratos na cidade de
            Franca e da vontade de seus cidadãos de mudar esse cenário de
            abandono. Fundado há mais de 10 anos, possui atualmente 9
            integrantes permanentes e em torno de 500 animais, entre cães, gatos
            e até cavalos ou aves.
          </p>

          <p>
            Acreditamos que apenas com o trabalho conjunto dos protetores,
            governantes e de <strong>VOCÊS</strong>, podemos realmente criar uma
            onda de mudança na vida dos animais de rua.
          </p>

          <p>
            No nosso dia a dia realizamos três tipos diferentes de trabalho:
          </p>

          <ul>
            <li>
              - <strong>Feiras de Conscientização:</strong> realizadas em locais
              como shoppings, com panfletagem sobre castração, vacinação e
              abandono.
            </li>
            <li>
              - <strong>Palestras para jovens:</strong> encontros educativos com
              foco em empatia e proteção animal.
            </li>
            <li>
              - <strong>Feiras de Adoção:</strong> acontecem semanalmente há
              mais de 10 anos, em locais de grande circulação como praças e
              estacionamentos.
            </li>
          </ul>
        </div>

        <ImageGalleryCarousel />
      </div>
    </section>
  );
};

export default AboutUs;
