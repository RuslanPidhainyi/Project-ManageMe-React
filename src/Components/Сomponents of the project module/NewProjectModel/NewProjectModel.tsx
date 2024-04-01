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
                  <input type="text" name="name" placeholder='Name project' maxLength={70} />
                  <input type="text" name="desc" placeholder='Description project' maxLength={250} />
                  <CreateBtnFromCreatePage />
               </form>
            </main>
         </main>
      </div>
   )
}
