import { UsersCreateForm } from "./users-create-form";
import { UsersList } from "./users-list";
import styles from "./users-page.module.css";

export const UsersPage = () => {
  return (
    <div className={styles.page}>
      <UsersCreateForm />
      <UsersList />
    </div>
  );
};
