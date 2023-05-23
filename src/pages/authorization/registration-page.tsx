import React from "react";
import styles from "./authorization.module.css";

import { Button } from "../../components/buttons/button";
import { Form } from "../../components/forms/form";
import { Input } from "../../components/forms/inputs/input";
import { PlugLink } from "../../components/links/plug-link";
import { RouteLink } from "../../components/links/route-link";
import { MosRuBlock } from "./mos-ru-block";
import { RadioInput } from "../../components/forms/inputs/radio-input";

export const RegistrationPage = () => {
  return (
    <div className={styles.authorization}>
      <MosRuBlock />
      <div className={styles.workspace}>
        <div className={styles.formTop}>
          <h2>Регистрация</h2>
          <RouteLink to='/login'>Войти</RouteLink>
        </div>
        <Form>
            <h3>Личные данные</h3>
            <Input label='Фамилия' id='surname' />
            <Input label='Имя' id='name' />
            <Input label='Отчество' id='patronymic' />
            <label>
              <input type='checkbox' id='no-patronymic' /> Нет отчества
            </label>

            <RadioInput
              label="Пол"
              name="gender"
              options={[{ value: 'male', label: 'Мужчина'}, { value: 'female', label: 'Женщина'}]}
            />

            <Input label='Дата рождения' id='birthday' type='date' />
            <Input label='Контактный телефон' id='phone' />
            <Input label='Район проживания' id='district' />

            <RadioInput
              label="Являетесь ли участником проекта?"
              name="is-participant"
              options={[{ value: 'yes', label: 'Да'}, { value: 'no', label: 'Нет'}]}
            />

          <label>
            <input type='checkbox' id='show-password' /> Я принимаю <PlugLink>Соглашение о пользовании информационными системами и ресурсами города Москвы</PlugLink>
          </label>

          <Button disabled>Войти</Button>
        </Form>
      </div>
    </div>
  );
};
