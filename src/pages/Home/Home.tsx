import "./style.scss"
import "../../Style/font.css"
import { ProjectModel } from "../../Components/Сomponents of the project module/ProjectModel/ProjectModel"
import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type"
import { ProjectModelService } from "../../Services/ProjectModel.Service/ProjectModel.Service";
import { useEffect, useState } from "react";

export const Home = () => {
   const [projects, setProjects] = useState<ProjectModelType[]>([]);

   useEffect(() => {
      const storedProjects = ProjectModelService.getProjects();
      setProjects(storedProjects);
   }, []);

   return (
      <section className="home-page">
         {/* ******************************************************************************* */}

         {/* 
         <div className="container-​​search-for-a-city">
            <div className="​​search-for-a-city">
               <input
                  type="text"
                  className="city-​​search"
                  placeholder="Search for a city or country"
               />
               <button className="btn-add">
                  <i className="material-symbols-rounded"> add </i>
               </button>

            </div>
         </div> */}

         {/* ******************************************************************************* */}
         <div className="project">
            <ol className="a-margin-top d-flex">
               {projects.map((project: ProjectModelType) => (
                  <ProjectModel key={project.id} project={project} />
               ))}
            </ol>
         </div>
      </section>
   )
}
