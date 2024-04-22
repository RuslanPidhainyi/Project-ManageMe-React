import "./style.scss"
import "../../Style/font.css"
import { BaseProjectModel } from "../../Components/Сomponents of the detailed project module/BaseProjectModel/BaseProjectModel";
import { ProjectModelService } from "../../Services/ProjectModel.Service/ProjectModel.Service";
import { useParams } from "react-router-dom";

export const DetailedProjectModel = () => {
   const { id } = useParams();
   const project = id ? ProjectModelService.getProjectById(id) : undefined;

   return (
      <div className="single-project-model-page">
         <div className="single-project-model">
            {project && <BaseProjectModel project={project} />}
         </div>
      </div>
   );
};


