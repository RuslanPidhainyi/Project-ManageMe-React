import { ulid } from "ulid";

import { UserType } from "../../Types/User.type/User.type";

export const fakeDbUser: UserType = {
  id: ulid(),
  name: "David",
  surname: "Chimik",
};
