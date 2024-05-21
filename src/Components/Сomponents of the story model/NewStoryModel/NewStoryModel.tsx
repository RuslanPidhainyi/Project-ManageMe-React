import { useNavigate, useParams } from "react-router-dom"
import "../../../Style/font.css"
import "./style.scss"
import { StoryModelService } from "../../../Services/StoryModel.Service/StoryModel.Service"
import { Priority } from "../../../Data/Enums/EnumPriority/Priority"
import { Status } from "../../../Data/Enums/EnumStatus/Status"
import { ConfirmBtn } from "../../Button components/ConfirmBtn/ConfirmBtn"

export const NewStoryModel = () => {

   const navigate = useNavigate()
   const { projectId } = useParams()

   const handleCreateStory = (name: string, desc: string, status: Status, priority: Priority) => {
      if (name.trim() !== "" && desc.trim() !== "") {
         if (projectId) {
            StoryModelService.createStoryModel(projectId, name, desc, status, priority);
            navigate(`/project/${projectId}`);
         } else {
            console.error("projectId is undefined");
         }
      }
   };


   const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const name = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='name']")!.value;

      const desc = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='desc']")!.value;

      const priority = (e.target as HTMLFormElement).querySelector<HTMLSelectElement>("#priority")!.value as Priority;

      const status = (e.target as HTMLFormElement).querySelector<HTMLSelectElement>("#status")!.value as Status;

      handleCreateStory(name, desc, status, priority)
   }

   return (
      <div className="new-story-model-container">
         <main className="common-card-new-story-model-container">
            <main className="main-contener-new-story-model-container">
               <h2 className="page-name-new-story-model-container">Add new story</h2>
               <form onSubmit={handleOnSubmit}>
                  <div className="form-name-task">
                     <label htmlFor="name">Name:</label>
                     <input type="text" name="name" maxLength={53} />
                  </div>
                  <div className="form-desc-task">
                     <label htmlFor="desc">Description:</label>
                     <input type="text" name="desc" />
                  </div>
                  <div className="form-priority-task">
                     <label htmlFor="priority">Priority:</label>
                     <select id="priority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                     </select>
                  </div>
                  <div className="form-status-task">
                     <label htmlFor="status">Status:</label>
                     <select id="status" >
                        <option value="Todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                     </select>
                  </div>
                  <ConfirmBtn />
               </form>
            </main>
         </main>
      </div>
   )
}
