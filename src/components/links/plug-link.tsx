import React, { ReactNode } from 'react'
import styles from "./links.module.css";

type TPlugLinkProps = {
  children: ReactNode
}

export const PlugLink = (props: TPlugLinkProps) => {
  return (
    <div className={styles.link}>
      {props.children}
      <div className={styles.tooltip}>Этот&nbsp;элемент&nbsp;не&nbsp;предполагает реализацию&nbsp;в&nbsp;рамках&nbsp;хакатона</div>
    </div>
  )
}
