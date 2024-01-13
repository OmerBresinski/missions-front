import { MissionWithId } from "@/api/mission/types";
import { UserWithId } from "@/api/user/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface MissionTableProps {
  missions: (MissionWithId & { createdBy?: UserWithId })[];
}

export const MissionTable = ({ missions }: MissionTableProps) => {
  return (
    <div className="w-full select-none rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Created By</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {missions.map((mission) => (
            <TableRow key={mission.id}>
              <TableCell className="text-start">{mission.id}</TableCell>
              <TableCell className="text-start">{mission.title}</TableCell>
              <TableCell className="text-start">Open</TableCell>
              <TableCell className="text-start">{mission.content}</TableCell>
              <TableCell className="w-36 text-start">
                {mission.createdBy?.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
