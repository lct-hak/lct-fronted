import React from 'react'
import { Link } from 'react-router-dom'
import styles from './button.module.css'

type TLinkButtonProps = {
  children: string
  to: string
}

export const LinkButton = (props: TLinkButtonProps) => {
  return (
    <Link to={props.to} className={styles.button}>{props.children}</Link>
  )
}
