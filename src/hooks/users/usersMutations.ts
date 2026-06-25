import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersApi } from "../../api/usersApi";
import { USERS_QUERY_KEY } from "./usersQuery";

export function useCreateUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: usersApi.createUser,
    onSuccess: () => {
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
