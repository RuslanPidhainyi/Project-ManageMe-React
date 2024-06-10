import { Role } from "../Enum/Role";

export interface UserType {
    id: string;
    email: string;
    password: string;
    login: string;
    role?: Role;
  }
  