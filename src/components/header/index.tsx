import React, { FC } from "react";

import Burger from "./burger";
import Logo from "./logo";
import Navigation from "./navigation";

import styles from "./style.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
        <Navigation />
        <Burger />
      </div>
    </header>
  );
};

export default Header;
