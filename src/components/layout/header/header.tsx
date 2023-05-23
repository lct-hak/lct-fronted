import React from 'react'
import logoImg from '../../../static/logo.svg'
import styles from './header.module.css'
import { LinkButton } from '../../buttons/link-button'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.container}`}>
        <img src={logoImg} alt="" />
        <LinkButton to="/login">Войти</LinkButton>
      </div>
    </div>
  )
}
