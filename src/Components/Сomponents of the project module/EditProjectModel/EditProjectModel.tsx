import "./style.scss"
import "../../../Style/font.css"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectModelType } from "../../../Types/ProjectModel.type/ProjectModel.type";
import { ProjectModelService } from "../../../Services/ProjectModel.Service/ProjectModel.Service";
import { EditBtnFromEditPage } from "../../Button components/EditBtnFromEditPage/EditBtnFromEditPage";

export const EditProjectModel = () => {

   const { id } = useParams<{ id?: string }>();
   const [project, setProject] = useState<ProjectModelType | null>(null);
   const [name, setName] = useState("");
   const [desc, setDesc] = useState("");

   const navigate = useNavigate()

   useEffect(() => {
      if (id) {
         const projects = ProjectModelService.getProjects();
         const currentProject = projects.find(project => project.id === parseInt(id, 10));
         if (currentProject) {
            setProject(currentProject);
            setName(currentProject.name);
            setDesc(currentProject.desc);
         }
      }
   }, [id]);

   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
   };

   const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDesc(event.target.value);
   };

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (project) {
         const updatedProject = { ...project, name, desc };
         ProjectModelService.updateProject(updatedProject);
      }

      navigate(`/`)
   };

   return (
      <div className="currently-project-model-container">
         <main className='common-card'>
            <main className='main-contener'>
               <h2 className='page-name'>Edit project</h2>
               <form onSubmit={handleSubmit}>
                  <input type="text" placeholder='Name project' maxLength={70} value={name} onChange={handleNameChange} />
                  <input type="text" placeholder='Description project' maxLength={250} value={desc} onChange={handleDescChange} />
                  <EditBtnFromEditPage />
               </form>
            </main>
         </main>
      </div>
   )
}
