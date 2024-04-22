import "../../../Style/font.css"
import { CancelBtnFromNewStoryModule } from "../../Button components/CancelBtnFromNewStoryModule/CancelBtnFromNewStoryModule"
import { ConfirmBtnFromNewStoryModule } from "../../Button components/ConfirmBtnFromNewStoryModule/ConfirmBtnFromNewStoryModule"
import "./style.scss"

export const EditStoryModule = () => {
   return (
      <div className="edit-story-model-container">
         <main className="common-card-edit-story-model-container">
            <main className="main-contener-edit-story-model-container">
               <h2 className="page-name-edit-story-model-container">Edit task</h2>
               <form>
                  <div className="form-name-task">
                     <label htmlFor="name">Name:</label>
                     <input type="text" name="name" maxLength={51} />
                  </div>
                  <div className="form-desc-task">
                     <label htmlFor="desc">Description:</label>
                     <input type="text" name="desc" maxLength={250} />
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
               </form>
               <main className="section-btns-edit-story-module">
                  <div className="confirm-btn-from-edit-story-module">
                     <ConfirmBtnFromNewStoryModule />
                  </div>
                  <div className="cancel-btn-from-edit-story-module">
                     <CancelBtnFromNewStoryModule />
                  </div>
               </main>
            </main>
         </main>
      </div>
   )
}
