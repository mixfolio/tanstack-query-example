import type { FC, ReactNode } from "react";

import styles from "./button.module.css";

interface ButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children: ReactNode;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, loading, ...props }) => {
  return (
    <button disabled={loading} className={styles.rootBtn} {...props}>
      {children} {loading && " Загрузка"}
    </button>
  );
};
