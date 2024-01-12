export interface User {
  name: string;
  email: string;
  organizationId: number;
}

export interface UserWithId extends User {
  id: number;
}
