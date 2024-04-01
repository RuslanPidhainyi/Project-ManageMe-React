import { NavLink } from "react-router-dom";
import "../../Style/font.css"
import { DeleteIcon } from "../Icons/DeleteIcon/DeleteIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import "./style.scss"
import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type";
import { ProjectModelService } from "../../Services/ProjectModel.Service/ProjectModel.Service";

interface ProjectModelProps {
   project: ProjectModelType;
}

export const ProjectModel = (props: ProjectModelProps) => {

   const handleDelete = () => {
      ProjectModelService.deleteProject(props.project.id);
   };

   return (
      <div className="project-model-container">

         <div className="details-section">

            <div className="details-section-top">
               <div className="name-section">
                  <h1>{props.project.name}</h1>
               </div>
               <div className='action-section'>
                  <NavLink to={`/edit/${props.project.id}`} className="action-icon-link">
                     <EditIcon />
                  </NavLink>
                  <button className="invisible-button" onClick={handleDelete}>
                     <DeleteIcon />
                  </button>
               </div>
            </div>

            <div className="id-section">
               <span><b>ID: </b>{props.project.id}</span>
            </div>

         </div>

         <div className="content-section">
            <p>{props.project.desc}</p>
         </div>
      </div>
   )
}
