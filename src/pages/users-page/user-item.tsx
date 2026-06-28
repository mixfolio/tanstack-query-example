import type { User } from "../../api/usersApi";
import { useDeletUserMutation } from "../../hooks/users/usersMutations";
import { Button } from "../../shared/ui";
import styles from "./user-item.module.css";
export const UserItem = ({ user }: { user: User }) => {
  const deleteUserMutation = useDeletUserMutation();
  const handleDeleteUser = (id: string) => {
    deleteUserMutation.mutate(id);
  };
  return (
    <div className={styles.cardItem}>
      <p>{user.username}</p>
      <p>{user.age}</p>
      <Button onClick={() => handleDeleteUser(user.id)}>
        {deleteUserMutation.isPending ? "Удаление..." : "Удалить"}
      </Button>
    </div>
  );
};
