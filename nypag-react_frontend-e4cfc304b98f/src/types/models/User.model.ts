import { Role } from './Role.model';

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Role[];
};


export interface UserDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: Role[];
}

