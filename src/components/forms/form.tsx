import React from 'react'
import styles from './forms.module.css'


type TFormProps = {
  children: string | JSX.Element | JSX.Element[]
}

export const Form = (props: TFormProps) => {
  return (
    <form className={styles.form}>
      {props.children}
    </form>
  )
}
