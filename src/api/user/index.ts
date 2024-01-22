import { BASE_URL } from "@/api/consts";
import { User } from "@/api/user/types";

export const getAll = async () => {
  const response = await fetch(`${BASE_URL}/user`);
  const users = await response.json();

  return users;
};

export const get = async (id: string) => {
  const response = await fetch(`${BASE_URL}/user/${id}`);
  const user = await response.json();

  return user;
};

export const post = async ({
  user,
  organizationId,
}: {
  user: User;
  organizationId: string;
}) => {
  const response = await fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: user.name,
      email: user.email,
      password: user.password,
      organizationId,
    }),
  });

  return { status: response.status };
};
