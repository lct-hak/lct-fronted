import React from 'react'
import styles from './inputs.module.css'

type TInputProps = {
  label?: string
  id: string
  name?: string
  type?: string
  placeholder?: string
  errormessage?: string
  required?: boolean
}

export const Input = (props: TInputProps) => {
  return (
    <label className={styles.label}>
      {props.label && <span>{props.label}</span>}
      { props.errormessage && <p className={styles.error}>{props.errormessage}</p> }
      <input
        className={styles.input}
        name={props.name}
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder ? props.placeholder : ''}
        required={props.required}
      />
    </label>
  )
}
