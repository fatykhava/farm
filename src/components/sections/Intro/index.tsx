import React, { FC } from "react";

import styles from "./style.module.scss";
import Text from "../../text";
import Button from "../../button";

const Intro: FC = () => (
  <div className={styles.intro}>
    <div className="container">
      <div className={styles.titleWrapper}>
        <Text className={styles.title}>Соловьиная роща</Text>
        <Text isTitle>Напрямую с фермерского хозяйства к Вам на стол</Text>
      </div>

      <Text>Выбирайте натуральные продукты в нашем каталоге или звоните</Text>
      <Text className={styles.phoneNumber}>+ 375 (29) 190-11-39</Text>
      <Button onClick={() => console.log("click")}>
        <a href="tel:+375291901139">Позвонить</a>
      </Button>
    </div>
  </div>
);

export default Intro;
