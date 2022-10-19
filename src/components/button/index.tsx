import React, { FC } from "react";

import styles from "./style.module.scss";

type Props = {
  text: string;
  onClick: () => void;
};

const Button: FC<Props> = ({ text, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {text}
  </button>
);

export default Button;
