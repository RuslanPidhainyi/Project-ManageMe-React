import { NavLink } from "react-router-dom"
import "../../../Style/font.css"
import { EditIcon } from "../../Icons/EditIcon/EditIcon"
import "./style.scss"
import { DeleteIcon } from "../../Icons/DeleteIcon/DeleteIcon"

export const StoryModel = () => {
   return (
      <div className="story-model-container">

         <div className="story-model-details-section">

            <div className="story-model-details-section-top">
               <div className="story-model-name-section">
                  <h2>Name</h2>
               </div>
               <div className='story-model-action-section'>

                  {/* <NavLink to={`/edit/${props.project.projectName}/${props.project.projectId}`} className="action-icon-link">
                     <EditIcon />
                  </NavLink> */}
                  <NavLink to={`/project/:projectName/:projectId/edit-story`} className="story-model-action-icon-link">
                     <EditIcon />
                  </NavLink>

                  {/* <button className="invisible-button" onClick={handleDelete}>
                     <DeleteIcon />
                  </button> */}

                  <button className="story-model-invisible-button">
                     <DeleteIcon />
                  </button>
               </div>
            </div>

            {/* <div className="id-section">
            <span><b>ID: </b>{props.project.id}</span>
            </div> */}

            <div className="story-model-story-id-section">
               <span><b>ID: </b>"01HW66GS2XQ6DYBZQKQR8H98VN"</span>
            </div>

            <div className="story-model-priority">
               <span><b>priority: </b>"Low"</span>
            </div>


            <div className="story-model-status">
               <span><b>priority: </b>"Doing"</span>
            </div>

            <div className="story-model-owner-id-section">
               <span><b>ownerId: </b>"01HW66GS2XQ6DYBZQKQR8H98VN"</span>
            </div>

         </div>
         {/* 
         <div className="story-model-content-section">
            <p>{props.project.projectDesc}</p>
         </div> */}

         <div className="story-model-content-section">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quo beatae. Voluptates magnam quibusdam officia atque? Ut magnam, at est, et veniam reiciendis quaerat vero non ea, harum reprehenderit qui?</p>
         </div>

         <div className="story-model-date-of-creation-section">
            <span>23.04.2024</span>
         </div>
      </div>
   )
}
