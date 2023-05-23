import React, { ReactNode } from 'react'
import styles from "./links.module.css";

type TPlugLinkProps = {
  children: ReactNode
}

export const PlugLink = (props: TPlugLinkProps) => {
  return (
    <div className={styles.link}>
      {props.children}
      <div className={styles.tooltip}>Это&nbsp;заглушка</div>
    </div>
  )
}
