import React, { FC } from "react";

import styles from "./style.module.scss";
import Text from "../../text";
import about1 from "../../../assets/about1.jpg";
import about2 from "../../../assets/about2.jpg";
import about3 from "../../../assets/about3.jpg";

const AboutUs: FC = () => (
  <div className={styles.aboutUs} id='aboutUs'>
    <div className="container">
      <div>
        <Text className={styles.title}>О нас</Text>
        <Text>
          «Фермерское хозяйство «Соловьиная роща» производит овощи, ягоды и
          зерновую продукцию в Гомельской области. Мы дорожим каждым нашим
          клиентом, поэтому отбираем весь товар вручную, благодаря чему клиенты
          влюбляются в нашу продукцию с первого раза! Воспользуйтесь услугами
          нашего сайта, чтобы заказать натуральные фермерские продукты для
          всей семьи. Мы с радостью примем ваш заказ и доставим все в точно
          оговоренный срок к вашему дому.
        </Text>
      </div>

      <div className={styles.productsPics}>
        <div>
          <img src={about1} alt="farm product" />
        </div>
        <div>
          <img src={about2} alt="farm product" />
        </div>
        <div>
          <img src={about3} alt="farm product" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
