import { BASE_URL } from "@/api/consts";
import {
  type Organization,
  type OrganizationWithId,
} from "@/api/organization/types";

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
}: {
  organization: Organization;
}): Promise<OrganizationWithId> => {
  const response = await fetch(`${BASE_URL}/organization`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ organization }),
  });
  const organizationData = await response.json();

  return organizationData;
};
