import { useNavigate, useParams } from "react-router-dom"
import "../../../Style/font.css"
import { ConfirmBtnFromNewStoryModule } from "../../Button components/ConfirmBtnFromNewStoryModule/ConfirmBtnFromNewStoryModule"
import "./style.scss"
import { StoryModelService } from "../../../Services/StoryModel.Service/StoryModel.Service"
import { StoryPriority } from "../../../Data/Enums/EnumStoryPriority/StoryPriority"
import { StoryStatus } from "../../../Data/Enums/EnumStoryStatus/StoryStatus"

export const NewStoryModule = () => {

   const navigate = useNavigate()
   const { projectName, projectId } = useParams()

   const handleCreateStory = (name: string, desc: string, status: StoryStatus, priority: StoryPriority) => {
      if (name.trim() !== "" && desc.trim() !== "") {
         if (projectId) {
            StoryModelService.createStoryModel(projectId, name, desc, status, priority);
            navigate(`/project/${projectName}/${projectId}`);
         } else {
            console.error("projectId is undefined");
         }
      }
   };


   const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const name = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='name']")!.value;

      const desc = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='desc']")!.value;

      const priority = (e.target as HTMLFormElement).querySelector<HTMLSelectElement>("#priority")!.value as StoryPriority;

      const status = (e.target as HTMLFormElement).querySelector<HTMLSelectElement>("#status")!.value as StoryStatus;

      handleCreateStory(name, desc, status, priority)
   }

   return (
      <div className="new-story-model-container">
         <main className="common-card-new-story-model-container">
            <main className="main-contener-new-story-model-container">
               <h2 className="page-name-new-story-model-container">Add new task</h2>
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
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                     </select>
                  </div>
                  <div className="form-status-task">
                     <label htmlFor="status">Status:</label>
                     <select id="status" >
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                     </select>
                  </div>
                  <ConfirmBtnFromNewStoryModule />
               </form>
            </main>
         </main>
      </div>
   )
}
