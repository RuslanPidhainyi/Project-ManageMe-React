import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type";

const LOCAL_STORAGE_KEY = "ProjectModel";

export const ProjectModelService = {
  //Create
  createProjectModel: (name: string, desc: string): ProjectModelType => {
    const projects = ProjectModelService.getProjects();
    const newProject: ProjectModelType = {
      id: projects.length + 1,
      name,
      desc,
    };

    const updateProjects = [...projects, newProject];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateProjects));
    return newProject;
  },

  //Read (Get)
  getProjects: (): ProjectModelType[] => {
    const dbProjectModel = localStorage.getItem(LOCAL_STORAGE_KEY);
    return dbProjectModel ? JSON.parse(dbProjectModel) : [];
  },

  //Update
  updateProject: (project: ProjectModelType): ProjectModelType => {
    const projects = ProjectModelService.getProjects();

    const updateProjects = projects.map((item) =>
      item.id === project.id ? project : item
    );

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateProjects));
    return project;
  },

  //Delete
  deleteProject: (id: number): void => {
    const projects = ProjectModelService.getProjects();
    const updateProjects = projects.filter((item) => item.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateProjects));
  },
};
