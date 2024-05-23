import "./style.scss"
import "../../Style/font.css"
import { ProjectModelService } from "../../Services/ProjectModel.Service/ProjectModel.Service";
import { useParams } from "react-router-dom";
import { DetailedProjectModel } from "../../Components/Сomponents of the detailed project model/DetailedProjectModel/DetailedProjectModel";

export const Story = () => {
   const { projectId } = useParams();
   const project = projectId ? ProjectModelService.getProjectById(projectId) : undefined;

   return (
      <div className="single-project-model-page">
         <div className="single-project-model">
            {project && <DetailedProjectModel project={project} />}

         </div>
      </div>
   );
};


