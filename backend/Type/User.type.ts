import { Role } from "../Enum/EnumRole/Role";

export interface UserType {
    id: string;
    email: string;
    password: string;
    name: string;
    role?: Role;
  }
  