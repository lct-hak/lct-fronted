import React from "react";
import styles from "./modal-success.module.css";
import { Button } from "../../buttons/button";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
}

export const ModalSuccess = ({ showModal, onClose }: ModalProps) => {
  return (
    <>
      {showModal && (
        <>
          <div className={styles.overlay} onClick={onClose}></div>
          <div className={styles.success}>
            <h2 className={styles.title}>Получилось!</h2>
            <p className={styles.subtitle}>
              Вы записались на занятие в группе G-202838384 по направлению
              “Английский язык”. Ближайшее занятие во вторник 19.02.2025 в 16:25
            </p>
            <Button onClick={onClose}>ОК</Button>
          </div>
        </>
      )}
    </>
  );
};
