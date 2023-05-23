import clsx from "clsx";
import React from "react";
import { Button } from "../buttons/button";
import styles from "./cards.module.css";

export const Card = () => {
  return (
    <div className={styles.card}>
      <span className={styles.direction}>Образование</span>
      <h3 className={styles.title}>Английский язык</h3>

      <div className={styles.tags}>
        <span className={clsx(styles.tag, styles.active)}>Очный формат</span>
        <span className={styles.tag}>Группа занимается</span>
        <span className={styles.tag}>Запись продолжается</span>
      </div>

      <h4>Группа G-02069387</h4>

      <div className={styles.schedule}>
        <p className={styles.schedule_row}>
          <span>Вт</span>
          <span>11:15-13:15</span>
        </p>
        <p className={styles.schedule_row}>
          <span>Чт</span>
          <span>11:15-13:15</span>
        </p>
      </div>

      <div className={styles.button}>
        <Button>Записаться</Button>
        <Button isSecondary>Узнать больше</Button>
      </div>
    </div>
  );
};
