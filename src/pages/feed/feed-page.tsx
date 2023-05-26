import React, {useState} from "react";
import styles from "./feed.module.css";

import {Button} from "../../components/buttons/button";
import {Input} from "../../components/forms/inputs/input";
import {Header} from "../../components/layout/header/header";
import clsx from "clsx";
import {Card} from "../../components/cards/card";
import {ModalSuccess} from "../../components/modals/success/modal-success";
import { Filter } from "../../components/filters/filter";

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
                    <Button disabled>Найти</Button>
                </form>
                <div className={styles.filters}>
                    <Filter text='14 направлений' />
                    <Filter text='Очный' />
                    <span className={styles.reset} role="button" tabIndex={0}>Сбросить</span>
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
