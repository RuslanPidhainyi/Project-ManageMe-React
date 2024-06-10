
//JOSN.parse(...) - Z JSON w js
//JSON.stringify(...) - z js w JSON

import { UserType } from "../../Type/User.type";

const LOCAL_STORAGE_KEY_FOR_USER = "Users"; //const LOCAL_STORAGE_KEY = "ManageMe";

export const ApiService = {
  save(users: UserType[]) {
    return localStorage.setItem(
      LOCAL_STORAGE_KEY_FOR_USER,
      JSON.stringify(users)
    );
  },

  get() {
    return localStorage.getItem(LOCAL_STORAGE_KEY_FOR_USER);
  },
};
