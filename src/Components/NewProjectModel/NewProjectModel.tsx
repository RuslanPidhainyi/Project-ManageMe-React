import "./style.scss"
import "../../Style/font.css"
import { CreateBtnFromCreatePage } from "../Buttons/CreateBtnFromCreatePage/CreateBtnFromCreatePage"

export const NewProjectModel = () => {
   return (
      <div className="new-project-model-container">
         <main className='common-card'>
            <main className='main-contener'>
               <h2 className='page-name'>New project</h2>
               <form>
                  <input type="text" placeholder='Name project' maxLength={30} />
                  <input type="text" placeholder='Description project' maxLength={130} />
                  <CreateBtnFromCreatePage />
               </form>
            </main>
         </main>
      </div>
   )
}
