import { NavLink } from "react-router";
import styles from "./menu-item.module.css";
import type { FC, ReactNode } from "react";

interface MenuItemProps {
  label?: string;
  icon?: ReactNode;
  type?: "divider" | "menuItem" | string;
  href?: "string";
}
export const MenuItem: FC<MenuItemProps> = ({
  label,
  icon,
  href,
  type = "menuItem",
}) => {
  return type === "divider" ? (
    <li className={styles.divider}></li>
  ) : (
    <li className={styles.rootMenuItem}>
      <NavLink to={href}>
        <div className={styles.content}>
          {icon}
          <span className={styles.title}>{label}</span>
        </div>
      </NavLink>
    </li>
  );
};

export const MenuItemTitle = () => (
  <li>
    <p className={styles.menuTitle}>Конструктор агентов</p>
  </li>
);
