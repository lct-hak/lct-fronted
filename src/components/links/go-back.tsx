import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./links.module.css";

export const GoBack = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <span onClick={goBack} className={styles.link}>Назад</span>
  )
}
