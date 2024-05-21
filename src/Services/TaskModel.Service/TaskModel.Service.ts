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
        //storyId,
      };

      story.tasks.push(newTask);
      StoryModelService.updateStoryModel(projectId, story);
      return newTask;
    } else {
      throw new Error("Project not found");
    }
  },

  //Update
  updateTaskModel: (
    projectId: string, 
    storyId: string,
    updatedTask: TaskModelType
  ): TaskModelType => { 

    const story = StoryModelService.getStoryById(projectId, storyId);

    if(story)
    {
      const updatedTasks = story.tasks.map((task) => task.taskId === updatedTask.taskId ? updatedTask : task);
      
      story.tasks = updatedTasks;
      StoryModelService.updateStoryModel(projectId, story);
      return updatedTask;
    }
    else{
      throw new Error("Story not found");
    }
  },


  //Delete
  deleteTaskModel:(projectId: string, storyId: string, taskId: string ): void => {
    
    const story = StoryModelService.getStoryById(projectId, storyId);

    if(story)
    {
      story.tasks = story.tasks.filter((task) => task.taskId !== taskId);
      StoryModelService.updateStoryModel(projectId, story);
    }
    else{
     throw new Error ("Story not found");
    }
  },



  // Get task by ID
  getTaskById: (
    projectId: string, storyId: string, taskId: string
  ): TaskModelType | undefined => {

    const story = StoryModelService.getStoryById(projectId, storyId);


    if (story) {
      return story.tasks.find((task) => task.taskId === taskId);
    } else {
      throw new Error("Story not found");
    }
  },
};
