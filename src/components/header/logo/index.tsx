import React, { FC } from "react";

import styles from "./style.module.scss";
import logo from "../../../assets/logo.png";

const Logo: FC = () => (
  <div>
    <img src={logo} className={styles.logo} alt="logo" />
  </div>
);

export default Logo;
