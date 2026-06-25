import { useUsersQuery } from "../../hooks/users/usersQuery";

export const UsersList = () => {
  const { data: users } = useUsersQuery();
  return (
    <div>
      <h4>Список пользователей</h4>
      <div>
        {users?.map((user) => (
          <div key={user.id}>
            <p>{user.username}</p>
            <p>{user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
