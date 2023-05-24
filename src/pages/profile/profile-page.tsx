import React from "react";
import styles from "./profile.module.css";

import { Card } from "../../components/cards/card";
import { Header } from "../../components/layout/header/header";
import clsx from "clsx";
import { PlugLink } from "../../components/links/plug-link";

export const ProfilePage = () => {
  return(
    <div className={styles.page}>
      <Header />
      <div className={clsx('container', styles.container)}>
        <h1>Личный кабинет</h1>
        <div className={styles.content}>
          <div>
            <h3>Контактные данные</h3>
            <div className={styles.info}>
              <h4>Иванов Аркадий Петрович</h4>
              <PlugLink>Редактировать профиль</PlugLink>
              <div className={styles.property}>
                <span className={styles.attribute}>Пол</span>
                <span>Мужской</span>
              </div>
              <div className={styles.property}>
                <span className={styles.attribute}>Дата рождения</span>
                <span>12.04.1955</span>
              </div>
              <div className={styles.property}>
                <span className={styles.attribute}>Контактный телефон</span>
                <span>+7 (952) 831 46 04</span>
              </div>
              <div className={styles.property}>
                <span className={styles.attribute}>Район проживания</span>
                <span>Троицкий район</span>
              </div>
              <div className={styles.property}>
                <span className={styles.attribute}>СНИЛС</span>
                <span>123456789101</span>
              </div>
              <div className={styles.property}>
                <span className={styles.attribute}>Карта москвича</span>
                <span>1234 5678 9101</span>
              </div>
            </div>
          </div>
          <div>
            <h3>Мои занятия</h3>
            <div className={styles.groups}>
              <Card id={54} />
              <Card id={55} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}