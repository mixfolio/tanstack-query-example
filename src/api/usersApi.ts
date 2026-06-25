import { api } from "./api";

export type User = {
  id: string;
  username: string;
  age: number;
};

export const usersApi = {
  getUsers: () => api.get<User[]>("/users").then((res) => res.data),
  createUser: (user: Omit<User, "id">) =>
    api.post<User>("/users", user).then((res) => res.data),
  updateUser: (user: User) =>
    api.put<User>("/users", user).then((res) => res.data),
  deleteUser: (id: string) =>
    api.delete<User>(`/users/${id}`).then((res) => res.data),
};
