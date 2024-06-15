import { fakeDbUser } from "../../Data/FakeDataUser/FakeDataUser";
import { UserType } from "../../Types/User.type/User.type";

// import { login } from "../AuthService/authService";


// const LOCAL_STORAGE_KEY_FOR_USER = "USER";

export const UserService = {
  //Temporarily
  getUserById(): UserType {
    return fakeDbUser;
  },
};


// export const UserServiceDb = {

//     saveUser (dataUser: login any){
//       return localStorage.setItem(LOCAL_STORAGE_KEY_FOR_USER, JSON.stringify(dataUser))
//     },

//     getUser() {
//       return localStorage.getItem(LOCAL_STORAGE_KEY_FOR_USER);
//     }


// };
