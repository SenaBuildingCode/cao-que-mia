import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Image
            src="/icone-cao-que-mia.png"
            width={50}
            height={50}
            alt="icone cao que mia"
          />
        </div>

        <div className={styles.column}>
          <h4 className={styles.texth4}>Projeto</h4>
          <ul className={styles.ul}>
            <li>
              <a href="#">Sobre nós</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.texth4}>Contato</h4>
          <ul className={styles.ul}>
            <li>
              <a href="#">Fale conosco</a>
            </li>
            <li>
              <a href="#">Apoie mensalmente</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.texth4}>Redes</h4>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/caoquemia.franca" target="_blank">
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/caoquemia.franca/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
