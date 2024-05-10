import { Priority } from "../../Data/Enums/EnumPriority/Priority";
import { Status } from "../../Data/Enums/EnumStatus/Status";
//import { fakeDbUser } from "../../Data/FakeDataUser/FakeDataUser";

export type StoryModelType = {
  storyId: string;
  storyName: string;
  storyDesc: string;
  storyPriority: Priority;
  storyStatus: Status;
  stroryDate: string;
  ownerId: string;
  //userFullname:
};
