import React from 'react'
import styles from './inputs.module.css'

type TInputProps = {
  label: string
  id: string
  type: string
  placeholder?: string
  errormessage?: string
}

export const Input = (props: TInputProps) => {
  return (
    <label className={styles.label}>
      <span>{props.label}</span>
      { props.errormessage && <p className={styles.error}>{props.errormessage}</p> }
      <input {...props} className={styles.input} />
    </label>
  )
}
