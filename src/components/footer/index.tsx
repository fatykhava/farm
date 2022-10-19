import React, { FC } from "react";
import Text from "../text";
import Navigation from "./navigation";

import styles from "./style.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div>
        <div>
          <Text className={styles.title}>Соловьиная роща</Text>
          <Text>
            Свидетельство о государственной регистрации № 692149333 от
            22.10.2019 выдано Минским райисполкомом Регистрационный номер в
            торговом реестре Республики Беларусь 465775 Дата внесения 16 ноября
            2019
          </Text>
        </div>
        <Navigation />
        <div className={styles.contacts}>
          <Text isSubtitle>Контакты</Text>
          <Text>
            Адрес: Республика Беларусь, Минская обл., Минский р-н, а.г.
            Хатежино, ул. Центральная, 18Б/1, пом. 48.
          </Text>
          <Text>Режим работы Пн-Пт с 9:00 - 18:00</Text>
          <Text>Телефон: + 375 29 190 11 39</Text>
          <Text>Email: cra.market@yandex.by</Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
