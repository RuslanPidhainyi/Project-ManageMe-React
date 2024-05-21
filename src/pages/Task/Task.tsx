import { useParams } from "react-router-dom"
import { KanbanBoardModel } from "../../Components/Сomponents of the task model/KanbanBoardModel/KanbanBoardModel"
import "./style.scss"
import { StoryModelService } from "../../Services/StoryModel.Service/StoryModel.Service";
import { ProjectModelService } from "../../Services/ProjectModel.Service/ProjectModel.Service";

export const Task = () => {

   const { projectId, storyId } = useParams();
   const project = projectId ? ProjectModelService.getProjectById(projectId) : undefined;
   const story = projectId && storyId ? StoryModelService.getStoryById(projectId, storyId) : undefined;

   return (
      <div className="single-story-model-page">
         <div className="single-story-model">
            {project && story && < KanbanBoardModel project={project} story={story} />}
         </div>
      </div>
   )
}
