import { Role } from "../../Enum/Role";
import { UserType } from "../../Type/User.type";


export const users: UserType[] = [
  
  { id: '1', login: 'admin', email: 'admin@example.com', password: 'adminpass', role: Role.ADMIN },
  { id: '2', login: 'ruslan', email: 'ruslam@gmail.com', password: 'ruslan', role: Role.DEVELOPER },
 
];