import React, { FC } from "react";

import styles from "./style.module.scss";
import Text from "../../text";
import Button from "../../button";

const Intro: FC = () => (
  <div className={styles.intro}>
    <div className="container">
      <div className={styles.titleWrapper}>
        <Text className={styles.title}>Соловьиная роща</Text>
        <Text isTitle>Напрямую с фермерского хозяйства к вам на стол</Text>
      </div>

      <Text>Выбирайте натуральные продукты в нашем каталоге или звоните</Text>
      <Text className={styles.phoneNumber}>+ 375 (29) 190-11-39</Text>
      <Button text="Перезвоните мне" onClick={() => console.log("click")} />
    </div>
  </div>
);

export default Intro;
