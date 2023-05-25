import React from 'react'
import cancelImg from '../../static/cancel.svg'
import styles from "./filter.module.css";

type TFilterProps = {
  text: string
}

export const Filter = (props: TFilterProps) => {
  return (
    <div className={styles.filter} role="button" tabIndex={0}>
      <span>{props.text}</span>
      <img src={cancelImg} alt="" />
      <div className={styles.tooltip}>Этот&nbsp;элемент&nbsp;не&nbsp;предполагает реализацию&nbsp;в&nbsp;рамках&nbsp;хакатона</div>
    </div>
  )
}
