import "./style.scss"
import "../../Style/font.css"
import { ProjectModel } from "../../Components/Сomponents of the project model/ProjectModel/ProjectModel"
import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type"
import { ProjectModelService } from "../../Services/ProjectModel.Service/ProjectModel.Service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserService } from "../../Services/User.Service/User.Service";

export const Profile = () => {
   const [projects, setProjects] = useState<ProjectModelType[]>([]);
   const { id } = useParams();
   const profileUser = id ? UserService.getUserById() : undefined;

   useEffect(() => {
      const storedProjects = ProjectModelService.getProjects();
      setProjects(storedProjects);
   }, []);

   return (
      <section className="profile-page">
         <div className="project">
            <ol className="a-margin-top d-flex">
               {projects.map((project: ProjectModelType) => (
                  profileUser && <ProjectModel key={project.id} project={project} />
               ))}
            </ol>
         </div>
      </section>
   )
}
