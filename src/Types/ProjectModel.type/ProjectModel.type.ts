import { StoryModelType } from "../StoryModel.type/StoryModel.type";

export interface ProjectModelType {
  projectId: string;
  projectName: string;
  projectDesc: string;
  stories: StoryModelType[];
}
