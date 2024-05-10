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
  // updateStoryModel: (
  //   projectId: string,
  //   story: StoryModelType
  // ): StoryModelType => {
  //   const project = ProjectModelService.getProjectById(projectId);

  //   if (project) {
  //     const updateStory = project.stories.map((item) =>
  //       item.storyId === story.storyId ? story : item
  //     );

  //     ProjectModelService.updateProject(updateStory);
  //     return story;
  //   } else {
  //     throw new Error("Project not found");
  //   }
  // },

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
