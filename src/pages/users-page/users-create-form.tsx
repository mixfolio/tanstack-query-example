import { useEffect, useState } from "react";
import styles from "./users-create-form.module.css";
import { Button, Input } from "../../shared/ui";
import { useCreateUserMutation } from "../../hooks/users/usersMutations";

export const UsersCreateForm = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const createUserMutation = useCreateUserMutation();
  const onHandleCreateUser = () => {
    if (!username || !age) return;
    createUserMutation.mutate({ username, age: Number(age) });
  };

  useEffect(() => {
    if (createUserMutation.isSuccess) {
      setUsername("");
      setAge("");
    }
  }, [createUserMutation.isSuccess]);

  return (
    <div className={styles.rootCard}>
      <div>
        <h4 className={styles.cardTitle}>Создание нового пользователя</h4>
        <p className={styles.cardSubtitle}>Заполните поля</p>
      </div>

      <div className={styles.loginForm}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <Button
          loading={createUserMutation.isPending}
          onClick={onHandleCreateUser}
        >
          Создать
        </Button>
      </div>
    </div>
  );
};
