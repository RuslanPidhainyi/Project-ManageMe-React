import { StoryModelType } from "../../Types/StoryModel.type/StoryModel.type";
import { ulid } from "ulid"; // генеруємо новий ULID
import { ProjectModelService } from "../ProjectModel.Service/ProjectModel.Service";
import { StoryStatus } from "../../Data/Enums/EnumStoryStatus/StoryStatus";
import { StoryPriority } from "../../Data/Enums/EnumStoryPriority/StoryPriority";
//import { v4 as uuid } from "uuid"; // генеруємо новий UUID

export const StoryModelService = {
  //Create
  createStoryModel: (
    projectId: string,
    storyName: string,
    storyDesc: string,
    storyStatus: StoryStatus,
    storyPriority: StoryPriority
  ): StoryModelType => {
    const project = ProjectModelService.getProjectById(projectId);

    if (project) {
      const newStory: StoryModelType = {
        storyId: ulid(),
        storyName,
        storyDesc,
        storyStatus,
        storyPriority,
        stroryDate: new Date().toLocaleString(), //.toLocaleDateString(),
      };

      project.stories.push(newStory);
      ProjectModelService.updateProject(project);
      return newStory;
    } else {
      throw new Error("Project not found");
    }
  },

  //Update
  // updateStoryModel: (projectId: string, updateStory: StoryModelType): StoryModelType => {
  //   const project = ProjectModelService.getProjectById(projectId)

  // }

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
};
