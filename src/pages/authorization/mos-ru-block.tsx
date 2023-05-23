import React from "react";
import { PlugLink } from "../../components/links/plug-link";
import styles from "./authorization.module.css";

export const MosRuBlock = () => {
  return (
    <div className={styles.info}>
      <h2>Портал Москвы</h2>
      <p>
        Страница не является частью сервиса mos.ru и реализована в рамках
        хакатона с целью продемонстрировать пользовательский путь
      </p>
      <ol>
        <li>Инструкция для входа в личный кабинет:</li>
        <li>
          <PlugLink>Для физических лиц</PlugLink>
        </li>
        <li>
          <PlugLink>Для юридических лиц</PlugLink>
        </li>
        <li>
          <PlugLink>Для доверенных лиц и организаций</PlugLink>
        </li>
      </ol>
    </div>
  );
};
