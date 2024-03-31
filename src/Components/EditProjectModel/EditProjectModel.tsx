import "./style.scss"
import "../../Style/font.css"
import { EditBtnFromEditPage } from "../Buttons/EditBtnFromEditPage/EditBtnFromEditPage"

export const EditProjectModel = () => {

   return (
      <div className="currently-project-model-container">
         <main className='common-card'>
            <main className='main-contener'>
               <h2 className='page-name'>Edit project</h2>
               <form>
                  <input type="text" placeholder='Name project' maxLength={30} />
                  <input type="text" placeholder='Description project' maxLength={130} />
                  <EditBtnFromEditPage />
               </form>
            </main>
         </main>
      </div>
   )
}
