import "./style.scss"
import "../../../Style/font.css"
import { TaskModelType } from "../../../Types/TaskModel.type/TaskModel.type";

interface TaskModelProps {
   task: TaskModelType;
}

export const TaskModel = (props: TaskModelProps) => {
   return (
      <div className="task-container">
         <div className="task">
            <div className="teg-task">
               <h3>#{props.task.taskName}</h3>
            </div>
            <div className="desc-task">
               <p>{props.task.taskDesc}</p>
            </div>
         </div>
      </div>
   )
}
