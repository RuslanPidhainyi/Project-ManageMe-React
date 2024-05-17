//import { v4 as uuid } from "uuid"; // генеруємо новий UUID
import { ulid } from "ulid";
import { Priority } from "../../Data/Enums/EnumPriority/Priority";
import { Status } from "../../Data/Enums/EnumStatus/Status";
import { TaskModelType } from "../../Types/TaskModel.type/TaskModel.type";
import { StoryModelService } from "../StoryModel.Service/StoryModel.Service";
import { fakeDbUser } from "../../Data/FakeDataUser/FakeDataUser";

export const TaskModelService = {
  //Create
  createTaskModel: (
    projectId: string,
    storyId: string,
    taskName: string,
    taskDesc: string,
    taskPriority: Priority,
    taskStatus: Status
  ): TaskModelType => {
    const story = StoryModelService.getStoryById(projectId, storyId);

    if (story) {
      const newTask: TaskModelType = {
        taskId: ulid(),
        taskName,
        taskDesc,
        taskPriority,
        taskStatus,
        // taskEstimatedFinishTime,
        // taskCreationDate,
        // taskStartDate,
        // taskEndDate,
        ownerId: fakeDbUser.userId,
        storyId,
      };

      story.tasks.push(newTask);
      StoryModelService.updateStoryModel(projectId, story);
      return newTask;
    } else {
      throw new Error("Project not found");
    }
  },

  //Update
  //Delete
  // Get task by ID
};
