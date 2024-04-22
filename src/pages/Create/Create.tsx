import "./style.scss"
import "../../Style/font.css"
import { NewProjectModel } from "../../Components/Сomponents of the project model/NewProjectModel/NewProjectModel"

export const Create = () => {
   return (
      <div className="create-page">
         <div className="new-project-model">
            <NewProjectModel />
         </div>
      </div>
   )
}
