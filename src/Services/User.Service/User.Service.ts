import { fakeDbUser } from "../../Data/FakeDataUser/FakeDataUser";
import { UserType } from "../../Types/User.type/User.type";

export const UserService = {
  //Temporarily
  getUserById(): UserType {
    return fakeDbUser;
  },
};
