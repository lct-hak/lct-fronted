import React from 'react'
import styles from "./modal.module.css";

interface ModalProps {
    showModal: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({showModal, children}: ModalProps) => {
    return (
        <>
            {showModal && (
                <div className={styles.modal}>
                    {children}
                </div>
            )}
        </>
    );
};