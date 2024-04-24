import { useNavigate } from "react-router-dom"
import "../../../Style/font.css"
//import { CancelBtnFromNewStoryModule } from "../../Button components/CancelBtnFromNewStoryModule/CancelBtnFromNewStoryModule"
import { ConfirmBtnFromNewStoryModule } from "../../Button components/ConfirmBtnFromNewStoryModule/ConfirmBtnFromNewStoryModule"
// import { CancelBtnFromNewStoryModule } from "../../Button components/CancelBtnFromNewStoryModule/CancelBtnFromNewStoryModule"
// import { ConfirmBtnFromNewStoryModule } from "../../Button components/ConfirmBtnFromNewStoryModule/ConfirmBtnFromNewStoryModule"
import "./style.scss"
import { StoryModelService } from "../../../Services/StoryModel.Service/StoryModel.Service"

export const NewStoryModule = () => {

   const navigate = useNavigate()

   const handleCreateStory = (name: string, desc: string) => {
      if (name.trim() !== "" && desc.trim() !== "") {
         StoryModelService.createStoryModel(name, desc)
      }

      navigate(`/`) //Temporarily
   }

   const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const name = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='name']")!.value;

      const desc = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='desc']")!.value;

      handleCreateStory(name, desc)
   }

   return (
      <div className="new-story-model-container">
         <main className="common-card-new-story-model-container">
            <main className="main-contener-new-story-model-container">
               <h2 className="page-name-new-story-model-container">Add new task</h2>
               <form onSubmit={handleOnSubmit}>
                  <div className="form-name-task">
                     <label htmlFor="name">Name:</label>
                     <input type="text" name="name" maxLength={51} />
                  </div>
                  <div className="form-desc-task">
                     <label htmlFor="desc">Description:</label>
                     <input type="text" name="desc" />
                  </div>
                  <div className="form-priority-task">
                     <label htmlFor="priority">Priority:</label>
                     <select id="priority">
                        <option value="low">Low</option>
                        <option value="medium">Mediun</option>
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
