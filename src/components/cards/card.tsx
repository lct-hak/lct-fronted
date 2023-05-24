import clsx from "clsx";
import React from "react";
import { Button } from "../buttons/button";
import { LinkButton } from "../buttons/link-button";
import styles from "./cards.module.css";

type TCardProps = {
  id: number
}

// TODO: Вынести теги и расписание в компоненты
export const Card = (props: TCardProps) => {
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

      <div className={styles.buttons}>
        <Button>Записаться</Button>
        <LinkButton to={`/group/${props.id}`} isSecondary>Узнать больше</LinkButton>
      </div>
    </div>
  );
};
