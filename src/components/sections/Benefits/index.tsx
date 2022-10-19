import React, { FC } from "react";

import styles from "./style.module.scss";
import Text from "../../text";
import { BENEFITS } from "../../../const";
import { ReactSVG } from "react-svg";

const Benefits: FC = () => (
  <div className={styles.benefits}>
    <div className="container">
      <div className={styles.wrapper}>
        {BENEFITS.map((item) => {
          return (
            <div key={item.id}>
              <ReactSVG wrapper="span" src={item.icon} />
              <Text className={styles.title}>{item.title}</Text>
              <Text className={styles.description}>{item.descriptions}</Text>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Benefits;
