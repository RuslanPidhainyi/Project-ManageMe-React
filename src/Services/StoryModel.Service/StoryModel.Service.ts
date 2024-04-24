import { StoryModelType } from "../../Types/StoryModel.type/StoryModel.type";
import { ApiService } from "../Api.Service/Api.Service";
import { ulid } from "ulid"; // генеруємо новий ULID
//import { v4 as uuid } from "uuid"; // генеруємо новий UUID

export const StoryModelService = {
  //Read ( Get )
  getStories: (): StoryModelType[] => {
    const dbStoryModel = ApiService.getStoryModel();
    return dbStoryModel ? JSON.parse(dbStoryModel) : [];
  },

  //Create
  createStoryModel: (storyName: string, storyDesc: string): StoryModelType => {
    const stories = StoryModelService.getStories();
    const newStory: StoryModelType = {
      storyId: ulid(),
      storyName,
      storyDesc,
      //storyPriority,
      //projectName,
      //storyData,
      //storyStatus,
      //userFullname,
    };

    const updateStories = [...stories, newStory];
    ApiService.saveStoryModel(updateStories);
    return newStory;
  },
};
