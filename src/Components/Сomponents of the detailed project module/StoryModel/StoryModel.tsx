import { NavLink } from "react-router-dom"
import "../../../Style/font.css"
import { EditIcon } from "../../Icons/EditIcon/EditIcon"
import "./style.scss"
import { DeleteIcon } from "../../Icons/DeleteIcon/DeleteIcon"
import { StoryModelType } from "../../../Types/StoryModel.type/StoryModel.type"
import { StoryModelService } from "../../../Services/StoryModel.Service/StoryModel.Service"

interface StoryModelProps {
   story: StoryModelType
   projectId: string;
}


export const StoryModel = ({ story, projectId }: StoryModelProps) => {

   const handleDelete = () => {
      StoryModelService.deleteStoryModel(projectId, story.storyId);
   };

   return (
      <div className="story-model-container">

         <div className="story-model-details-section">

            <div className="story-model-details-section-top">
               <div className="story-model-name-section">
                  <h2>{story.storyName}</h2>
               </div>
               <div className='story-model-action-section'>

                  <NavLink to={`/project/:projectName/:projectId/edit-story`} className="story-model-action-icon-link">
                     <EditIcon />
                  </NavLink>

                  <button onClick={handleDelete} className="story-model-invisible-button">
                     <DeleteIcon />
                  </button>
               </div>
            </div>

            <div className="story-model-story-id-section">
               <span><b>ID: </b>{story.storyId}</span>
            </div>

            <div className="story-model-priority">
               <span><b>Priority: </b>{story.storyPriority}</span>
            </div>


            <div className="story-model-status">
               <span><b>Status: </b>{story.storyStatus}</span>
            </div>

            <div className="story-model-owner-id-section">
               <span><b>Owner Id: </b>"01HW66GS2XQ6DYBZQKQR8H98VN"</span>
            </div>

         </div>
         <div className="story-model-content-section">
            <p>{story.storyDesc}</p>
         </div>

         <div className="story-model-date-of-creation-section">
            <span>{story.stroryDate}</span>
         </div>
      </div>
   )
}
