export interface Organization {
  name: string;
  industry: string;
}

export interface OrganizationWithId extends Organization {
  id: number;
}
