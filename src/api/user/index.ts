import { BASE_URL } from "@/api/consts";

export const getAll = async () => {
  const response = await fetch(`${BASE_URL}/api/user`);
  const users = await response.json();

  return users;
};

export const get = async (id: string) => {
  const response = await fetch(`${BASE_URL}/user/${id}`);
  const user = await response.json();

  return user;
};
