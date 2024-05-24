import "./style.scss"
import "../../Style/font.css"
import { EditTaskModel } from "../../Components/Сomponents of the task model/EditTaskModel/EditTaskModel"


export const EditTask = () => {
   return (
      <div className='edit-task-page'>
         <div className='existing-task-model'>
            <EditTaskModel />
         </div>
      </div>
   )
}
