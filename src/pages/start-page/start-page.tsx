import React from 'react'
import {Header} from '../../components/layout/header/header'
import styles from "./startpage.module.css";
import glassImg from "../../static/glass.svg";
import { LinkButton } from '../../components/buttons/link-button';

export const StartPage = () => {
    return (
        <div>
            <Header/>
            <div className={styles.container}>
                <div className={styles.main_info_with_icon}>
                    <div className={styles.main_info}>
                        <h2 className={styles.title}>Поможем вам подобрать интересные занятия</h2>

                        <p className={styles.description}>Пройдите тест и узнайте, какие направления подходят именно
                            вам.</p>

                        <LinkButton to='/test'>Подобрать занятие</LinkButton>
                    </div>

                    <img src={glassImg} alt="" className={styles.img}/>
                </div>
            </div>
        </div>
    )
}
