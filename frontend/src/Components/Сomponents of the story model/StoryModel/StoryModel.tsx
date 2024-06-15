import { Link, NavLink } from "react-router-dom"
import "../../../Style/font.css"
import { EditIcon } from "../../Icons/EditIcon/EditIcon"
import "./style.scss"
import { DeleteIcon } from "../../Icons/DeleteIcon/DeleteIcon"
import { StoryModelType } from "../../../Types/StoryModel.type/StoryModel.type"
import { StoryModelService } from "../../../Services/StoryModel.Service/StoryModel.Service"
import { useEffect, useState } from "react"


interface StoryModelProps {
   story: StoryModelType
   projectId: string;
}


export const StoryModel = (props: StoryModelProps) => {

   const [ownerId, setOwnerId] = useState('');

   const handleDelete = () => {
      StoryModelService.deleteStoryModel(props.projectId, props.story.storyId);
   };

   // useEffect(() => {
   //    // Отримання імені користувача з Local Storage
   //    const storedUsers = localStorage.getItem("currentUser");
   //    if (storedUsers) {
   //      try {
   //        const users = JSON.parse(storedUsers);
   //        if (Array.isArray(users) && users.length > 0) {
   //          setOwnerId(users[0].id); // Вибір імені першого користувача
   //        }
   //      } catch (error) {
   //        console.error("Помилка парсингу даних з Local Storage:", error);
   //      }
   //    }
   //  }, []);

   useEffect(() => {
      // Отримання імені користувача з Local Storage
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          if (user && user.id) {
            setOwnerId(user.id); // Встановлення ID користувача
          }
        } catch (error) {
          console.error("Помилка парсингу даних з Local Storage:", error);
        }
      }
    }, []);

   return (
      <div className="story-model-container">

         <div className="story-model-details-section">

            <div className="story-model-details-section-top">
               <div className="story-model-name-section">
                  <Link to={`story/${props.story.storyId}`} className="single-story-model-link">
                     <h2>{props.story.storyName}</h2>
                  </Link>
               </div>
               <div className='story-model-action-section'>

                  <NavLink to={`edit-story/${props.story.storyId}`} className="story-model-action-icon-link">
                     <EditIcon />
                  </NavLink>

                  <button onClick={handleDelete} className="story-model-invisible-button">
                     <DeleteIcon />
                  </button>
               </div>
            </div>

            <div className="story-model-story-id-section">
               <span><b>ID: </b>{props.story.storyId}</span>
            </div>

            <div className="story-model-priority">
               <span><b>Priority: </b>{props.story.storyPriority}</span>
            </div>


            <div className="story-model-status">
               <span><b>Status: </b>{props.story.storyStatus}</span>
            </div>

            <div className="story-model-owner-id-section">
               {/* <span><b>Owner Id: </b>{props.story.ownerId}</span> */}
               <span><b>Owner Id: </b>{ownerId}</span>
            </div>

         </div>
         <div className="story-model-content-section">
            <p>{props.story.storyDesc}</p>
         </div>

         <div className="story-model-date-of-creation-section">
            <span>{props.story.stroryDate}</span>
         </div>
      </div >
   )
}
