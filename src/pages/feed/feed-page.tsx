import React from "react";
import styles from "./feed.module.css";
import cancelImg from '../../static/cancel.svg'
import { Button } from "../../components/buttons/button";
import { Input } from "../../components/forms/inputs/input";
import { Header } from "../../components/layout/header/header";
import clsx from "clsx";
import { Card } from "../../components/cards/card";

export const FeedPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={clsx('container', styles.container)}>
        <h1>Поиск занятий</h1>
        <form>
          <Input id='search' placeholder="Направление или номер группы" />
          <Button>Найти</Button>
        </form>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <span>14 направлений</span>
            <img src={cancelImg} alt="" />
          </div>
          <div className={styles.filter}>
            <span>Очный</span>
            <img src={cancelImg} alt="" />
          </div>
          <span className={styles.reset}>Сбросить</span>
        </div>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
