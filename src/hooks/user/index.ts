import { user } from "@/api";
import { UserWithId } from "@/api/user/types";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

export const useUsers = () => {
  return useSuspenseQuery<UserWithId[]>({
    queryKey: ["users"],
    queryFn: user.getAll,
  });
};

export const useUser = (id: string) => {
  return useSuspenseQuery<UserWithId>({
    queryKey: ["user", id],
    queryFn: () => user.get(id),
  });
};

export const usersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: user.getAll,
});
