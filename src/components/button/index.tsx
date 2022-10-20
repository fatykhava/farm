import React, { FC } from "react";

import styles from "./style.module.scss";

type Props = {
  text?: string;
  onClick: () => void;
  children: React.ReactNode;
};

const Button: FC<Props> = ({ text, onClick, children}) => (
  <button onClick={onClick} className={styles.button}>
    {text || children}
  </button>
);

export default Button;
