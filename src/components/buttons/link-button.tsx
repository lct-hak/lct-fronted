import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './button.module.css'

type TLinkButtonProps = {
  children: string
  to: string
  isSecondary?: boolean
}

export const LinkButton = (props: TLinkButtonProps) => {
  return (
    <Link
      to={props.to}
      className={clsx(styles.button, { [styles.secondary]: props.isSecondary })}
    >{props.children}</Link>
  )
}
