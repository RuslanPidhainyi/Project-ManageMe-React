import { Role } from "../../Data/Enums/EnumRole/Role";

export interface UserType {
  // userId: string;
  // userName: string;
  // userSurname: string;
  // userFullname?: string;
  // userRole?: Role;

  id: string;
  email: string;
  password: string;
  name: string;
  role?: Role;
}
