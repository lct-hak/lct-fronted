import React from 'react'
import logoImg from '../../../static/logo.svg'
import styles from './header.module.css'
import { LinkButton } from '../../buttons/link-button'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link to='/'><img src={logoImg} alt="" /></Link>
        <LinkButton to="/login">Войти</LinkButton>
      </div>
    </div>
  )
}
