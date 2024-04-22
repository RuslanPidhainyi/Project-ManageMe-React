//import { fakeDbUser } from "../../Data/FakeDataUser/FakeDataUser";
import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type";
//import { UserType } from "../../Types/User.type/User.type";

//JOSN.parse(...) - Z JSON w js
//JSON.stringify(...) - z js w JSON

const LOCAL_STORAGE_KEY = "ProjectModel";

export const ApiService = {
  saveProjectModel(project: ProjectModelType[]) {
    return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(project));
  },

  getProjectModel() {
    return localStorage.getItem(LOCAL_STORAGE_KEY);
  },

  //Temporarily
  // getUser(): UserType {
  //   return fakeDbUser;
  // },
};
