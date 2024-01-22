export interface User {
  name: string;
  email: string;
  organizationId?: number | string;
  password: string;
}

export interface UserWithId extends User {
  id: number;
}
