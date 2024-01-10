import { Link } from "react-scroll";
import { Button, ModalButton } from "@shared/ui/Button";

import logo from "@assets/logo.svg";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} className={styles.footer__logo} alt="logo" />
      <nav className={styles.footer__nav}>
        <Link to="main" className={styles.footer__nav__link}>
          Главная
        </Link>
        <Link to="about" className={styles.footer__nav__link}>
          О Компании
        </Link>
        <Link to="services" className={styles.footer__nav__link}>
          Услуги
        </Link>
        <Link to="markets" className={styles.footer__nav__link}>
          Площадки
        </Link>
        <Link to="contacts" className={styles.footer__nav__link}>
          Контакты
        </Link>
      </nav>
      <ModalButton
        text="Связаться с нами"
        onClick={() => console.log("aaa")}
        marginTop="mt-8"
      />
      <hr className={styles.footer__separator} />
      <a
        href="tel:+77273316641"
        className={`${styles.footer__contact_link_margin} mt-8`}
      >
        +7 (727) 331 66 41
      </a>
      <a href="tel:+77475281601" className={styles.footer__contact_link}>
        +7 (747) 528 16 01{" "}
      </a>
      <a
        href="mailto:Info@korund-777.kz"
        className={styles.footer__contact_link}
      >
        Info@korund-777.kz
      </a>
      <span className={`${styles.footer__contact_link} w-[70%] mb-15`}>
        Республика Казахстан,050064, г. Алматы,мкр. Думан-2, д. 18, кв. 55
      </span>
    </footer>
  );
};
