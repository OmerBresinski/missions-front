//create get requests for missions
import { BASE_URL } from "@/api/consts";

export const getAll = async () => {
  const response = await fetch(`${BASE_URL}/mission`);
  const missions = await response.json();

  return missions;
};

export const get = async (id: string) => {
  const response = await fetch(`${BASE_URL}/mission/${id}`);
  const mission = await response.json();

  return mission;
};
