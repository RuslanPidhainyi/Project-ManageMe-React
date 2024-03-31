import "./style.scss"
import "../../Style/font.css"
import { CreateBtnFromCreatePage } from "../Buttons/CreateBtnFromCreatePage/CreateBtnFromCreatePage"
// import { useState } from "react"
// import { ProjectModelService } from "../../Services/ProjectModel.Service/ProjectModel.Service"

export const NewProjectModel = () => {
   // const [newProjectItem, setNewProjectItem] = useState<string>("");

   // const handleCreateProject = () => {
   //    if (newProjectItem.trim() !== "") {
   //       const NewProject = ProjectModelService.createProjectModel(newProjectItem);
   //    }
   // }
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
