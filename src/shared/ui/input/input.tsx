import type { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import styles from "./input.module.css";

interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ onChange, ...props }) => {
  return <input className={styles.rootInput} onChange={onChange} {...props} />;
};
