import { Button, type ButtonProps } from "@base-ui/react";
import type { FC, ReactNode } from "react";
import styles from "./button-ui.module.css";
interface ButtonUIProps extends React.ForwardRefExoticComponent<
  Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLElement>
> {
  children?: ReactNode;
}
export const ButtonUI: FC<ButtonUIProps> = ({ children, ...props }) => {
  return (
    <Button className={styles.Button} {...props}>
      {children}
    </Button>
  );
};
