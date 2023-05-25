import React, {useState} from "react";
import styles from "./feed.module.css";
import cancelImg from '../../static/cancel.svg'

import {Button} from "../../components/buttons/button";
import {Input} from "../../components/forms/inputs/input";
import {Header} from "../../components/layout/header/header";
import clsx from "clsx";
import {Card} from "../../components/cards/card";
import {ModalSuccess} from "../../components/modals/success/modal-success";

export const FeedPage = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.page}>
            <Header/>

            <ModalSuccess showModal={showModal} onClose={handleClose}/>

            <div className={clsx('container', styles.container)}>
                <h1>Поиск занятий</h1>
                <form>
                    <Input id='search' placeholder="Направление или номер группы"/>
                    <Button>Найти</Button>
                </form>
                <div className={styles.filters}>
                    <div className={styles.filter}>
                        <span>14 направлений</span>
                        <img src={cancelImg} alt=""/>
                    </div>
                    <div className={styles.filter}>
                        <span>Очный</span>
                        <img src={cancelImg} alt=""/>
                    </div>
                    <span className={styles.reset}>Сбросить</span>
                </div>
                <div className={styles.cards}>
                    <Card id={1} onClickSignUp={handleClick}/>
                    <Card id={2} onClickSignUp={handleClick}/>
                    <Card id={3} onClickSignUp={handleClick}/>
                </div>
            </div>
        </div>
    );
};
