import "./style.scss"
import "../../Style/font.css"
import { CreateBtnFromCreatePage } from "../Buttons/CreateBtnFromCreatePage/CreateBtnFromCreatePage"
import { ProjectModelService } from "../../Services/ProjectModel.Service/ProjectModel.Service";

export const NewProjectModel = () => {
   const handleCreateProject = (name: string, desc: string) => {
      if (name.trim() !== "" && desc.trim() !== "") {
         ProjectModelService.createProjectModel(name, desc);
      }
   }

   return (
      <div className="new-project-model-container">
         <main className='common-card'>
            <main className='main-contener'>
               <h2 className='page-name'>New project</h2>
               <form onSubmit={(e) => {
                  e.preventDefault();
                  const name = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='name']")!.value;
                  const desc = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='desc']")!.value;
                  handleCreateProject(name, desc);
               }}>
                  <input type="text" name="name" placeholder='Name project' maxLength={30} />
                  <input type="text" name="desc" placeholder='Description project' maxLength={130} />
                  <CreateBtnFromCreatePage />
               </form>
            </main>
         </main>
      </div>
   )
}
