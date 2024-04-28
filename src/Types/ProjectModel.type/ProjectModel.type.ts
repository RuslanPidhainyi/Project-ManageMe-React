import { StoryModelType } from "../StoryModel.type/StoryModel.type";
//import { UserType } from "../User.type/User.type";

export interface ProjectModelType {
  projectId: string;
  projectName: string;
  projectDesc: string;
  stories: StoryModelType[];
}
