import { NavLink } from "react-router-dom";
import "../../Style/font.css"
import { DeleteIcon } from "../Icons/DeleteIcon/DeleteIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import "./style.scss"
import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type";


interface ProjectModelProps {
   project: ProjectModelType;
}

export const ProjectModel = (props: ProjectModelProps) => {
   return (
      // <div className="project-model-container">
      //    <div className="container">
      //       <div className="details-section">
      //          <div className="name-section">
      //             <span>NameProject</span>
      //          </div>
      //       </div>
      //       <div className="content-section">
      //          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam minima necessitatibus tempore, doloribus
      //       </div>
      //    </div>
      // </div>

      <div className="project-model-container">

         <div className="details-section">

            <div className="details-section-top">
               <div className="name-section">
                  <h2>{props.project.name}</h2>
               </div>
               <div className='action-section'>
                  <NavLink to={"/edit"} className="action-icon-link">
                     <EditIcon />
                  </NavLink>
                  <DeleteIcon />
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
