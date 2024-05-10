import { ulid } from "ulid";
import { UserType } from "../../Types/User.type/User.type";

//Temporarily
export const fakeDbUser: UserType = {
  userId: ulid(),
  userName: "David",
  userSurname: "Chimik",
  userFullname: "David Chimik",
};
