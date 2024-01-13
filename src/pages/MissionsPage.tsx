import { MissionTable } from "@/components/features/MissionTable";
import { Button } from "@/components/ui/button";
import { useMissions } from "@/hooks/mission";
import { useUsers } from "@/hooks/user";

const useMissionsWithUsers = () => {
  const { data: users, isLoading: isLoadingUsers } = useUsers();
  const { data: missions, isLoading: isLoadingMissions } = useMissions();

  const missionsWithUsers = missions?.map((mission) => ({
    ...mission,
    createdBy: users?.find((user) => user.id === mission.createdById),
  }));

  return {
    missions: missionsWithUsers,
    isLoadingMissions,
    isLoadingUsers,
  };
};

export const MissionsPage = () => {
  const { missions, isLoadingMissions, isLoadingUsers } =
    useMissionsWithUsers();

  return (
    <div className="flex h-full w-full flex-col items-center gap-5 pt-40">
      <h1 className="text-6xl font-bold">Missions</h1>
      <Button variant="default" size="lg">
        Register Your Organization
      </Button>
      <div className="mt-7 flex w-5/6 flex-col gap-5">
        {(isLoadingMissions || isLoadingUsers) && <p>Loading...</p>}
        {!!missions && <MissionTable missions={missions} />}
      </div>
    </div>
  );
};
