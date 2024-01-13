export interface Mission {
  title: string;
  content: string;
  createdById: number;
}

export interface MissionWithId extends Mission {
  id: number;
}
