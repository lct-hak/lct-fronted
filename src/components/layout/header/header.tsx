import React from 'react'
import { Button } from '../../buttons/button'
import logoImg from '../../../static/logo.svg'
import styles from './header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.container}`}>
        <img src={logoImg} alt="" />
        <Button text="Войти" />
      </div>
    </div>
  )
}
