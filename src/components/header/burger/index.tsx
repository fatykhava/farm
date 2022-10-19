/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

import burger from "../../../assets/burger.svg";
import cross from "../../../assets/cross.svg";
import { NAVIGATION } from "../../../const";
import { useBodyLock } from "../../../hooks";

import styles from "./style.module.scss";

const Burger: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShadow, setIsShadow] = useState(false);
  const toggleBodyLock = useBodyLock();

  useEffect(() => {
    if (isMenuOpen) {
      setIsShadow(isMenuOpen);
    } else {
      setTimeout(() => setIsShadow(isMenuOpen), 200);
    }
  }, [isMenuOpen]);

  const onBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleBodyLock();
  };

  const onShadowAreaClick = (ev: any) => {
    const { target } = ev;

    if (!target?.closest('[data-id="menu-area"]')) {
      onBurgerClick();
    }
  };

  return (
    <>
      <button
        type="button"
        data-id="menu-area"
        className={`${styles.burgerButton} ${isMenuOpen ? styles.active : {}}`}
        onClick={onBurgerClick}
      >
        <ReactSVG wrapper="span" src={burger} />
      </button>
      <div
        onClick={onShadowAreaClick}
        className={`${styles.menu} ${isShadow ? styles.active : {}}`}
      >
        <div
          data-id="menu-area"
          className={`${isMenuOpen ? styles.active : {}}`}
        >
          <button
            type="button"
            className={styles.crossButton}
            onClick={onBurgerClick}
          >
            <ReactSVG wrapper="span" src={cross} />
          </button>
          <nav>
            {NAVIGATION.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Burger;
