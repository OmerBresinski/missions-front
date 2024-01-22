import { BASE_URL } from "@/api/consts";
import {
  type Organization,
  type OrganizationWithId,
} from "@/api/organization/types";
import { User } from "../user/types";

export const getAll = async (): Promise<OrganizationWithId[]> => {
  const response = await fetch(`${BASE_URL}/organization`);
  const organizations = await response.json();

  return organizations;
};

export const get = async (id: string): Promise<OrganizationWithId> => {
  const response = await fetch(`${BASE_URL}/organization/${id}`);
  const organization = await response.json();

  return organization;
};

export const post = async ({
  organization,
  user,
}: {
  organization: Organization;
  user: User;
}): Promise<OrganizationWithId> => {
  const response = await fetch(`${BASE_URL}/organization`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      organizationName: organization.name,
      industry: organization.industry,
      userName: user.name,
      email: user.email,
      password: user.password,
    }),
  });
  const organizationData = await response.json();

  return organizationData;
};
