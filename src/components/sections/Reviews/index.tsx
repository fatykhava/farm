import React, { FC } from "react";

import styles from "./style.module.scss";
import Text from "../../text";
import { ReactSVG } from "react-svg";
import { REVIEWS } from "../../../const";
import starsIcon from "../../../assets/stars.svg";

const Reviews: FC = () => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.slice(0, 1))
      .join("")
      .toUpperCase();
  };

  return (
    <div className={styles.delivery}>
      <div className="container">
        <Text className={styles.title}>Отзывы</Text>
        <div className={styles.wrapper}>
          {REVIEWS.map((item) => {
            return (
              <div key={item.id}>
                <div className={styles.header}>
                  <div className={styles.initials}>
                    <Text>{getInitials(item.name)}</Text>
                  </div>
                  <div>
                    <Text className={styles.name}>{item.name}</Text>
                    <ReactSVG wrapper="span" src={starsIcon} />
                  </div>
                  <Text className={styles.date}>{item.date}</Text>
                </div>
                <Text className={styles.text}>{item.text}</Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
