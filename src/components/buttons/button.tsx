import clsx from "clsx";
import React from "react";
import styles from "./button.module.css";

type TButtonProps = {
  children: string;
  disabled?: boolean;
  isSecondary?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined
};

export const Button = (props: TButtonProps) => {
  return (
    <button
      className={clsx(styles.button, { [styles.secondary]: props.isSecondary })}
      {...props}
    >
      {props.children}
    </button>
  );
};
