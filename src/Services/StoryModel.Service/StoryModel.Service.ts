import { StoryModelType } from "../../Types/StoryModel.type/StoryModel.type";
import { ulid } from "ulid"; // генеруємо новий ULID
import { ProjectModelService } from "../ProjectModel.Service/ProjectModel.Service";
import { Status } from "../../Data/Enums/EnumStatus/Status";
import { Priority } from "../../Data/Enums/EnumPriority/Priority";
import { fakeDbUser } from "../../Data/FakeDataUser/FakeDataUser";
//import { v4 as uuid } from "uuid"; // генеруємо новий UUID

export const StoryModelService = {
  //Create
  createStoryModel: (
    projectId: string,
    storyName: string,
    storyDesc: string,
    storyStatus: Status,
    storyPriority: Priority
  ): StoryModelType => {
    const project = ProjectModelService.getProjectById(projectId);

    if (project) {
      const newStory: StoryModelType = {
        storyId: ulid(),
        storyName,
        storyDesc,
        storyStatus,
        storyPriority,
        ownerId: fakeDbUser.userId,
        stroryDate: new Date().toLocaleString(),
        tasks: [],
      };

      project.stories.push(newStory);
      ProjectModelService.updateProject(project);
      return newStory;
    } else {
      throw new Error("Project not found");
    }
  },

  //Update
  updateStoryModel: (
    projectId: string,
    updatedStory: StoryModelType
  ): StoryModelType => {
    const project = ProjectModelService.getProjectById(projectId);

    if (project) {
      const updatedStories = project.stories.map((story) =>
        story.storyId === updatedStory.storyId ? updatedStory : story
      );

      project.stories = updatedStories;
      ProjectModelService.updateProject(project);
      return updatedStory;
    } else {
      throw new Error("Project not found");
    }
  },

  //Delete
  deleteStoryModel: (projectId: string, storyId: string): void => {
    const project = ProjectModelService.getProjectById(projectId);
    if (project) {
      project.stories = project.stories.filter(
        (story) => story.storyId !== storyId
      );
      ProjectModelService.updateProject(project);
    } else {
      throw new Error("Project not found");
    }
  },

  // Get story by ID
  getStoryById: (
    projectId: string,
    storyId: string
  ): StoryModelType | undefined => {
    const project = ProjectModelService.getProjectById(projectId);

    if (project) {
      return project.stories.find((story) => story.storyId === storyId);
    } else {
      throw new Error("Project not found");
    }
  },
};
