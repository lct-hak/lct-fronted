import React from 'react'
import styles from './button.module.css'

export const Button = ({ text }: { text: string}) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}
