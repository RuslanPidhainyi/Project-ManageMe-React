import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type";
import { ulid } from "ulid"; // генеруємо новий ULID
import { ApiService } from "../Api.Service/Api.Service";
//import { v4 as uuid } from "uuid"; // генеруємо новий UUID

export const ProjectModelService = {
  //Create
  createProjectModel: (
    projectName: string,
    projectDesc: string
  ): ProjectModelType => {
    const projects = ProjectModelService.getProjects();
    const newProject: ProjectModelType = {
      projectId: ulid(), //uuid(),
      projectName,
      projectDesc,
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
      item.projectId === project.projectId ? project : item
    );

    ApiService.saveProjectModel(updateProjects);
    return project;
  },

  //Delete
  deleteProject: (id: string): void => {
    const projects = ProjectModelService.getProjects();
    const updateProjects = projects.filter((item) => item.projectId !== id);
    ApiService.saveProjectModel(updateProjects);
  },

  // Get project by ID
  getProjectById: (id: string): ProjectModelType | undefined => {
    const projects = ProjectModelService.getProjects();
    return projects.find((project) => project.projectId === id);
  },
};
