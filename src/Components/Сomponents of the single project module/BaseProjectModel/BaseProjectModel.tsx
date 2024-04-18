import "./style.scss"
import "../../../Style/font.css"
//import { useParams } from "react-router-dom"
import { ProjectModelType } from "../../../Types/ProjectModel.type/ProjectModel.type";

interface BaseProjectModelProps {
   project: ProjectModelType;
}

export const BaseProjectModel = (props: BaseProjectModelProps) => {
   const { project } = props;

   return (
      <div className="base-project-model-container">
         <div className="base-project-model-task">
            <div className="base-project-model-details-section">
               <div className="base-project-model-details-section-top">
                  <div className="base-project-model-name-section">
                     <h1>{project.name}</h1>
                  </div>
               </div>
               <div className="base-project-model-id-section">
                  <span><b>ID: </b>{project.id}</span>
               </div>
            </div>
            <div className="base-project-model-content-section">
               <p>{project.desc}</p>
            </div>
         </div>
         <div className="base-project-model-subtask">
            <p>subtask</p>
         </div>
      </div>
   );
};
