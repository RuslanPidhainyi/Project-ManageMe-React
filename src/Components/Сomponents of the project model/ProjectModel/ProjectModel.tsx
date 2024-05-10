import { Link, NavLink } from "react-router-dom";
import "../../../Style/font.css"
import { DeleteIcon } from "../../Icons/DeleteIcon/DeleteIcon";
import { EditIcon } from "../../Icons/EditIcon/EditIcon";
import "./style.scss"
import { ProjectModelType } from "../../../Types/ProjectModel.type/ProjectModel.type";
import { ProjectModelService } from "../../../Services/ProjectModel.Service/ProjectModel.Service";

interface ProjectModelProps {
   project: ProjectModelType;
}

export const ProjectModel = (props: ProjectModelProps) => {

   const handleDelete = () => {
      ProjectModelService.deleteProject(props.project.projectId);
   };

   return (
      <div className="project-model-container">

         <div className="details-section">

            <div className="details-section-top">

               <div className="project-model-name-section">
                  <Link to={`/project/${props.project.projectId}`} className="single-project-model-link">
                     <h1>{props.project.projectName}</h1>
                  </Link>
               </div>

               <div className='action-section'>
                  <NavLink to={`/edit/${props.project.projectId}`} className="action-icon-link">
                     <EditIcon />
                  </NavLink>
                  <button className="invisible-button" onClick={handleDelete}>
                     <DeleteIcon />
                  </button>
               </div>
            </div>
         </div>

         <div className="content-section">
            <p>{props.project.projectDesc}</p>
         </div>
      </div>
   )
}
