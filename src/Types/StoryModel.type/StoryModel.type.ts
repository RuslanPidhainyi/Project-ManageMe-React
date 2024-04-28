import { StoryPriority } from "../../Data/Enums/EnumStoryPriority/StoryPriority";
import { StoryStatus } from "../../Data/Enums/EnumStoryStatus/StoryStatus";

export interface StoryModelType {
  storyId: string;
  storyName: string;
  storyDesc: string;
  storyPriority: StoryPriority;
  storyStatus: StoryStatus;
  stroryDate: string;
  //ownerId:
  //userFullname:
}
