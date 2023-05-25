import React from 'react'
import {Input} from "../../forms/inputs/input";
import {LinkButton} from "../../buttons/link-button";
import styles from "./modal-auth.module.css";

interface ModalProps {
    showModal: boolean;
    onClose: () => void;
}

export const ModalAuth = ({showModal}: ModalProps) => {
    return (
        <>
            {showModal && (
                <div className={styles.overlay}>
                    <div className={styles.auth}>
                        <h2 className={styles.title}>Расскажите о себе</h2>
                        <div className={styles.inputHolder}>
                            <Input label='Фамилия' id='surname'/>
                            <div className={styles.input}>
                                <Input label='Имя' id='name'/>
                            </div>
                            <div className={styles.input}>
                                <Input label='Отчество' id='patronymic'/>
                            </div>
                            <div className={styles.input}>
                                <Input label='Дата рождения' id='birthday' type='date'/>
                            </div>
                        </div>
                        <LinkButton to='/feed'>Продолжить</LinkButton>
                    </div>
                </div>
            )}
        </>
    );
};