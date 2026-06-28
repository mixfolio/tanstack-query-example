import { useState } from "react";
import { useUsersQuery } from "../../hooks/users/usersQuery";
import { UserItem } from "./user-item";
import styles from "./users-list.module.css";
import { Button } from "../../shared/ui";
export const UsersList = () => {
  const [page, setPage] = useState(1);
  const limit = 4;
  const { data: usersData } = useUsersQuery({ page, limit });
  const total = usersData?.total ?? 0;
  const users = usersData?.data;
  return (
    <div className={styles.rootList}>
      <h4 className={styles.title}>Список пользователей</h4>
      <h6 className={styles.subtitle}>
        Всего: <strong>{total}</strong> Страница: <strong>{page}</strong>
      </h6>
      <div className={styles.list}>
        {users?.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Button onClick={() => setPage(page - 1)}>Prev</Button>
        {new Array(Math.ceil(total / limit)).fill(0).map((_, index) => (
          <Button key={index} onClick={() => setPage(index + 1)}>
            {index + 1}
          </Button>
        ))}
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
};
