import { organization } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useOrganizations = () => {
  return useQuery({
    queryKey: ["organizations"],
    queryFn: organization.getAll,
  });
};

export const useOrganization = (id: string) => {
  return useQuery({
    queryKey: ["organization", id],
    queryFn: () => organization.get(id),
  });
};

export const usePostOrganization = () => {
  return useMutation({
    mutationFn: organization.post,
    mutationKey: ["postOrganization"],
  });
};
