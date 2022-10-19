import React, { FC } from "react";

import styles from "./style.module.scss";
import Text from "../../text";
import { PRODUCTS } from "../../../const";

const Products: FC = () => (
  <div className={styles.products} id="catalog">
    <div className="container">
      <Text className={styles.title}>Наша продукция</Text>
      <div className={styles.wrapper}>
        {PRODUCTS.map((item) => {
          return (
            <div key={item.id}>
              <div className={styles.imageWrapper}>
                <img src={item.icon} alt="product" />
              </div>
              <Text isSubtitle className={styles.subtitle}>{item.title}</Text>
              <Text className={styles.text}>{item.price}</Text>
              <Text className={styles.text}>{item.deliveryInfo}</Text>
              <Text className={styles.text}>{item.details}</Text>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Products;
