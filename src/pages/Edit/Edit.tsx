import "./style.scss"
import "../../Style/font.css"
import { EditProjectModel } from "../../Components/Сomponents of the project module/EditProjectModel/EditProjectModel"

export const Edit = () => {
   return (
      <div className="edit-page">
         <div className="project-model">
            <EditProjectModel />
         </div>
      </div>
   )
}
