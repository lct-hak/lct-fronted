import React from "react";
import styles from "./authorization.module.css";

import { Button } from "../../components/buttons/button";
import { Form } from "../../components/forms/form";
import { Input } from "../../components/forms/inputs/input";
import { RouteLink } from "../../components/links/route-link";
import { MosRuBlock } from "./mos-ru-block";

export const RestorePage = () => {
  return (
    <div className={styles.authorization}>
      <MosRuBlock /> 
      <div className={styles.workspace}>
        <div className={styles.formTop}>
          <h2>Восстановление пароля</h2>
          <RouteLink to="/login">Войти</RouteLink>
        </div>
        <Form>
          <Input
            label='Телефон, электронная почта или СНИЛС'
            id='login'
            type='text'
          />
          <Input label='Фамилия' id='surname' type='text' />
          <Button disabled>Восстановить доступ</Button>
        </Form>
      </div>
    </div>
  );
};
