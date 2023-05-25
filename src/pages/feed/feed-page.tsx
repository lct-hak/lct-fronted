import React from "react";
import styles from "./feed.module.css";

import { Button } from "../../components/buttons/button";
import { Input } from "../../components/forms/inputs/input";
import { Header } from "../../components/layout/header/header";
import clsx from "clsx";
import { Card } from "../../components/cards/card";
import { Filter } from "../../components/filters/filter";

export const FeedPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={clsx('container', styles.container)}>
        <h1>Поиск занятий</h1>
        <form>
          <Input id='search' placeholder="Направление или номер группы" />
          <Button disabled>Найти</Button>
        </form>
        <div className={styles.filters}>
          <Filter text='14 направлений' />
          <Filter text='Очный' />
          <span className={styles.reset} role="button" tabIndex={0}>Сбросить</span>
        </div>
        <div className={styles.cards}>
          <Card id={1} />
          <Card id={2} />
          <Card id={3} />
        </div>
      </div>
    </div>
  );
};
