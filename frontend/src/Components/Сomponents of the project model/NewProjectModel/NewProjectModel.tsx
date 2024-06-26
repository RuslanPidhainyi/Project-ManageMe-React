import "./style.scss"
import "../../../Style/font.css"
import { ProjectModelService } from "../../../Services/ProjectModel.Service/ProjectModel.Service";
import { useNavigate } from "react-router-dom";
import { CreateBtnFromCreatePage } from "../../Button components/CreateBtnFromCreatePage/CreateBtnFromCreatePage";


export const NewProjectModel = () => {

   const navigate = useNavigate()

   const handleCreateProject = (name: string, desc: string) => {
      if (name.trim() !== "" && desc.trim() !== "") {
         ProjectModelService.createProjectModel(name, desc);
      }

      navigate(`/`)
   }

   const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();

      const name = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='name']")!.value;

      const desc = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='desc']")!.value;

      handleCreateProject(name, desc);
   }

   return (
      <div className="new-project-model-container">
         <main className='common-card-new-project-model-container'>
            <main className='main-contener-new-project-model-container'>
               <h2 className='page-name-new-project-model-container'>New project</h2>
               <form onSubmit={handleOnSubmit}>
                  <input type="text" name="name" placeholder='Name project' maxLength={51} />
                  <input type="text" name="desc" placeholder='Description project' maxLength={250} />
                  <CreateBtnFromCreatePage />
               </form>
            </main>
         </main>
      </div>
   )
}
