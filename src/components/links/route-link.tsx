import React from 'react'
import styles from "./links.module.css";
import { Link } from 'react-router-dom'

type TRouteLinkProps = {
  children: string
  to: string
}

export const RouteLink = (props: TRouteLinkProps) => {
  return (
    <Link to={props.to} className={styles.link}>{props.children}</Link>
  )
}
