import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type";
import { ulid } from "ulid";
import { ApiService } from "../Api.Service/Api.Service";
//import { v4 as uuid } from "uuid";

//JOSN.parse(...) - Z JSON w js
//JSON.stringify(...) - z js w JSON

export const ProjectModelService = {
  //Create
  createProjectModel: (name: string, desc: string): ProjectModelType => {
    const projects = ProjectModelService.getProjects();
    const newProject: ProjectModelType = {
      id: ulid(), //uuid(), // генеруємо новий UUID
      name,
      desc,
    };

    const updateProjects = [...projects, newProject];
    ApiService.saveProjectModel(updateProjects);
    return newProject;
  },

  //Read (Get)
  getProjects: (): ProjectModelType[] => {
    const dbProjectModel = ApiService.getProjectModel();
    return dbProjectModel ? JSON.parse(dbProjectModel) : [];
  },

  //Update
  updateProject: (project: ProjectModelType): ProjectModelType => {
    const projects = ProjectModelService.getProjects();

    const updateProjects = projects.map((item) =>
      item.id === project.id ? project : item
    );

    ApiService.saveProjectModel(updateProjects);
    return project;
  },

  //Delete
  deleteProject: (id: string): void => {
    const projects = ProjectModelService.getProjects();
    const updateProjects = projects.filter((item) => item.id !== id);
    ApiService.saveProjectModel(updateProjects);
  },
};
