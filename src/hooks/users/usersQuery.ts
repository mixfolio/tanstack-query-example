import { useQuery } from "@tanstack/react-query";
import { usersApi, type User } from "../../api/usersApi";

export const USERS_QUERY_KEY = ["users"];

export function useUsersQuery() {
  return useQuery<User[]>({
    queryKey: USERS_QUERY_KEY,
    queryFn: usersApi.getUsers,
  });
}
