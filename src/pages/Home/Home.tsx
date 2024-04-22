import "./style.scss"
import "../../Style/font.css"
import { ProjectModel } from "../../Components/Сomponents of the project model/ProjectModel/ProjectModel"
import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type"
import { ProjectModelService } from "../../Services/ProjectModel.Service/ProjectModel.Service";
import { useEffect, useState } from "react";
import { SearchFor } from "../../Components/SearchFor/SearchFor";



export const Home = () => {
   const [projects, setProjects] = useState<ProjectModelType[]>([]);

   useEffect(() => {
      const storedProjects = ProjectModelService.getProjects();
      setProjects(storedProjects);
   }, []);

   return (
      <div className="home-page">
         <div className="search-for-projects">
            <SearchFor />
         </div>
         <div className="project">
            <ol className="a-margin-top d-flex">
               {projects.map((project: ProjectModelType) => (
                  <ProjectModel key={project.projectId} project={project} />
               ))}
            </ol>
         </div>
      </div >
   )
}
