import React from "react";
import styles from "./feed.module.css";

import { useParams } from "react-router-dom";
import { Header } from "../../components/layout/header/header";
import clsx from "clsx";
import { Button } from "../../components/buttons/button";
import { Card } from "../../components/cards/card";

export const GroupPage = () => {
  const { id } = useParams();

  return (
    <div className={styles.page}>
      <Header />
      <div className={clsx('container', styles.container, styles.about_group)}>
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

        <Button>Записаться</Button>

        <h3>Другие занятия по этому направлению</h3>
        <Card id={34} />
      </div>
    </div>
  );
};
