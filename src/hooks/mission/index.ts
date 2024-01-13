import { mission } from "@/api";
import { MissionWithId } from "@/api/mission/types";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

export const useMissions = () => {
  return useSuspenseQuery<MissionWithId[]>({
    queryKey: ["missions"],
    queryFn: mission.getAll,
  });
};

export const useMission = (id: string) => {
  return useSuspenseQuery<MissionWithId>({
    queryKey: ["mission", id],
    queryFn: () => mission.get(id),
  });
};

export const missionsQueryOptions = queryOptions({
  queryKey: ["missions"],
  queryFn: mission.getAll,
});
