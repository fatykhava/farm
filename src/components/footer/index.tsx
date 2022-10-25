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
            Свидетельство о государственной регистрации 490814883 от 15.01.2010
            выдано КФХ «Соловьиная роща» Речицким районным исполнительный
            комитетом
          </Text>
        </div>
        <Navigation />
        <div className={styles.contacts}>
          <Text isSubtitle>Контакты</Text>
          <Text>
            Адрес: Республика Беларусь, Гомельская область, Речицкий р-н,
            Бабичский с/с, х. Бабич, ул. Сосновая, д.27
          </Text>
          <Text>Режим работы Пн-Сб с 9:00 - 20:00</Text>
          <Text>Телефон: <a href="tel:+375291901139">+ 375 29 190 11 39</a></Text>
          <Text>Email: <a href="mailto:sl3010372@gmail.com">sl3010372@gmail.com</a></Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
