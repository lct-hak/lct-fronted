import React from "react";
import { Button } from "../../components/buttons/button";
import { Form } from "../../components/forms/form";
import { Input } from "../../components/forms/inputs/input";
import { PlugLink } from "../../components/links/plug-link";
import styles from "./authorization.module.css";

export const AuthorizationPage = () => {
  return (
    <div className={styles.authorization}>
      <div className={styles.info}>
        <h2>Портал Москвы</h2>
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
      <div className={styles.workspace}>
        <div className={styles.formTop}>
          <h2>Вход</h2>
          <PlugLink>Зарегистрироваться</PlugLink>
        </div>
        <Form>
          <Input
            label='Телефон, электронная почта или СНИЛС'
            id='login'
            type='text'
          />
          <Input label='Пароль' id='password' type='password' />
          <div className={styles.formBottom}>
            <label>
              <input type='checkbox' id='show-password' name='scales' />{" "}
              Показать пароль
            </label>
            <PlugLink>Восстановить пароль</PlugLink>
          </div>
          <Button disabled>Войти</Button>
        </Form>
      </div>
    </div>
  );
};
