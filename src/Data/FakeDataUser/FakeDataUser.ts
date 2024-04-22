import { ulid } from "ulid";
import { UserType } from "../../Types/User.type/User.type";

//Temporarily
export const fakeDbUser: UserType = {
  id: ulid(),
  name: "David",
  surname: "Chimik",
  fullname: "David Chimik",
};
