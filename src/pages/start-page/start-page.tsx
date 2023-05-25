import React, {useState} from 'react'
import {Header} from '../../components/layout/header/header'
import styles from "./startpage.module.css";
import glassImg from "../../static/glass.svg";
import {Button} from "../../components/buttons/button";
import {ModalAuth} from "../../components/modals/auth/modal-auth";

export const StartPage = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Header/>

            <ModalAuth showModal={showModal} onClose={handleClose}/>

            <div className={styles.container}>
                <div className={styles.main_info_with_icon}>
                    <div className={styles.main_info}>
                        <h2 className={styles.title}>Поможем вам подобрать интересные занятия</h2>

                        <p className={styles.description}>Пройдите тест и узнайте, какие направления подходят именно
                            вам.</p>

                        <Button onClick={handleClick}>Подобрать занятие</Button>
                    </div>

                    <img src={glassImg} alt="" className={styles.img}/>
                </div>
            </div>
        </div>
    )
}
