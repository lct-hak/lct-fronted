import React from "react";
import styles from './inputs.module.css'

type TOprion = {
  value: string
  label: string
}

type TRadioInputProps = {
  label: string
  name: string
  options: Array<TOprion>
}

export const RadioInput = (props: TRadioInputProps) => {
  return (
    <div className={styles.radio}>
      <span>{props.label}</span>
      {
        props.options.map(option => (
          <label>
            <input type='radio' id={option.value} name={props.name} /> {option.label}
          </label>
        ))
      }
    </div>
  );
};
