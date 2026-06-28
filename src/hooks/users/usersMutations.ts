import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersApi, type User } from "../../api/usersApi";
import { USERS_QUERY_KEY } from "./usersQuery";

export function useCreateUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: usersApi.createUser,
    onSuccess: (data) => {
      // queryClient.setQueryData(USERS_QUERY_KEY, (oldData: User[]) => [
      //   data,
      //   ...oldData,
      // ]);
      console.log("Пользователь создан");
      queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
    },
    onError: () => {
      console.log("Ошибка при создании пользователя");
    },
    onSettled: () => {
      console.log("Вызов onSettled");
    },
  });
}

export function useDeletUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: usersApi.deleteUser,
    onSuccess: (_, userId) => {
      queryClient.setQueryData(USERS_QUERY_KEY, (oldData: User[]) =>
        oldData.filter((user) => user.id !== userId),
      );
      console.log("Пользователь удален");
      // queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
    },
    onError: () => {
      console.log("Ошибка при удалении пользователя");
    },
    onSettled: () => {
      console.log("Вызов onSettled");
    },
  });
}
