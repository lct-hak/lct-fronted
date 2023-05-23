import React from 'react'
import styles from './button.module.css'

type TButtonProps = {
  children: string
  disabled?: boolean
}

export const Button = (props: TButtonProps) => {
  return (
    <button className={styles.button} {...props}>{props.children}</button>
  )
}
