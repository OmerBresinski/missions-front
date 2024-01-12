import { mission } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useMissions = () => {
  return useQuery({
    queryKey: ["missions"],
    queryFn: mission.getAll,
  });
};

export const useMission = (id: string) => {
  return useQuery({
    queryKey: ["mission", id],
    queryFn: () => mission.get(id),
  });
};
