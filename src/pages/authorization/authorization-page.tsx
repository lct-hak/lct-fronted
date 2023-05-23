import React from "react";
import { Button } from "../../components/buttons/button";
import { Form } from "../../components/forms/form";
import { Input } from "../../components/forms/inputs/input";
import { RouteLink } from "../../components/links/route-link";
import styles from "./authorization.module.css";
import { MosRuBlock } from "./mos-ru-block";

export const AuthorizationPage = () => {
  return (
    <div className={styles.authorization}>
      <MosRuBlock /> 
      <div className={styles.workspace}>
        <div className={styles.formTop}>
          <h2>Вход</h2>
          <RouteLink to="/registration">Зарегистрироваться</RouteLink>
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
            <RouteLink to="/restore">Восстановить пароль</RouteLink>
          </div>
          <Button disabled>Войти</Button>
        </Form>
      </div>
    </div>
  );
};
