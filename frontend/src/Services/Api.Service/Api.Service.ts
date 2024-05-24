import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type";

//JOSN.parse(...) - Z JSON w js
//JSON.stringify(...) - z js w JSON

const LOCAL_STORAGE_KEY_FOR_PROJECT = "ProjectModel"; //const LOCAL_STORAGE_KEY = "ManageMe";

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

  //getStoryModel
};
