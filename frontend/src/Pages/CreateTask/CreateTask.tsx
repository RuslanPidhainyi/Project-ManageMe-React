import "./style.scss"
import "../../Style/font.css"
import { NewTaskModel } from "../../Components/Сomponents of the task model/NewTaskModel/NewTaskModel"


export const CreateTask = () => {
   return (
      <div className='create-task-page'>
         <div className='new-task-model'>
            <NewTaskModel />
         </div>
      </div>
   )
}
