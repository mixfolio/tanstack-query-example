import { Menu } from "../menu/menu";

import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.rootSidebar}>
      <div className={styles.header}>
        <h4>ИИ-ассистент Градкомплекса</h4>
      </div>
      <div className={styles.content}>
        <Menu />
        <div className={styles.profile}>
          <div className={styles.text}>
            <p className={styles.title}>Сергей Семенов</p>
            <p className={styles.subtitle}>Администратор проекта</p>
          </div>
        </div>
      </div>
    </div>
  );
};
