import React, { FC } from "react";

import styles from "./style.module.scss";
import Text from "../../text";
import { ReactSVG } from "react-svg";
import truckIcon from "../../../assets/truck.svg";
import cashIcon from '../../../assets/cash.svg';
import listIcon from '../../../assets/list.svg';

const Delivery: FC = () => (
  <div className={styles.delivery} id="delivery">
    <div className="container">
      <Text className={styles.title}>Доставка и оплата</Text>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.header}>
            <Text className={styles.title}>Заказ</Text>
            <ReactSVG wrapper="span" src={listIcon} />
          </div>
          <Text>
            Наш менеджер свяжется с вами, чтобы обговорить детали заказа и
            выбрать удобное время доставки.
          </Text>
        </div>
        <div>
          <div className={styles.header}>
            <Text className={styles.title}>Оплата</Text>
            <ReactSVG wrapper="span" src={cashIcon} />
          </div>
          <Text>
            Вы сами выбираете способ оплаты. Оплатить можно картой или наличными курьеру.
          </Text>
        </div>
        <div>
          <div className={styles.header}>
            <Text className={styles.title}>Доставка</Text>
            <ReactSVG wrapper="span" src={truckIcon} />
          </div>
          <Text>
            Доставка по Гомельской области до Вашей двери. Курьер будет с Вами на связи.
          </Text>
        </div>
      </div>
    </div>
  </div>
);

export default Delivery;
