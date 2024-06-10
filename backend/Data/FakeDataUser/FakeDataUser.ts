import { Role } from "../../Enum/Role";
import { UserType } from "../../Type/User.type";


export const users: UserType[] = [
  
  { id: '1', login: 'admin', email: 'admin@example.com', password: 'adminpass', role: Role.ADMIN },
  { id: '2', login: 'ruslan', email: 'ruslan@gmail.com', password: 'ruslan', role: Role.DEVELOPER },
  { id: '3', login: 'patryk', email: 'patryk@gmail.com', password: 'patryk', role: Role.DEVOPS },
];