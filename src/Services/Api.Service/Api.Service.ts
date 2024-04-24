//import { fakeDbUser } from "../../Data/FakeDataUser/FakeDataUser";
import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type";
import { StoryModelType } from "../../Types/StoryModel.type/StoryModel.type";
//import { UserType } from "../../Types/User.type/User.type";

//JOSN.parse(...) - Z JSON w js
//JSON.stringify(...) - z js w JSON

const LOCAL_STORAGE_KEY_FOR_PROJECT = "ProjectModel"; //const LOCAL_STORAGE_KEY = "ManageMe";

const LOCAL_STORAGE_KEY_FOR_STORY = "StoryModel"; //Temporarily

export const ApiService = {
  saveProjectModel(project: ProjectModelType[]) {
    return localStorage.setItem(
      LOCAL_STORAGE_KEY_FOR_PROJECT,
      JSON.stringify(project)
    );
  },

  getProjectModel() {
    return localStorage.getItem(LOCAL_STORAGE_KEY_FOR_PROJECT);
  },

  //Temporarily
  // getUser(): UserType {
  //   return fakeDbUser;
  // },

  //Temporarily
  saveStoryModel(story: StoryModelType[]) {
    return localStorage.setItem(
      LOCAL_STORAGE_KEY_FOR_STORY,
      JSON.stringify(story)
    );
  },

  //Temporarily
  getStoryModel() {
    return localStorage.getItem(LOCAL_STORAGE_KEY_FOR_STORY);
  },
};
