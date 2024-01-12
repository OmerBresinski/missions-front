import { organization } from "@/api";
import { useQuery } from "@tanstack/react-query";

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
