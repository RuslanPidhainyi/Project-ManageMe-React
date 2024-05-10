import { KanbanBoardModel } from "../../Components/Сomponents of the task model/KanbanBoardModel/KanbanBoardModel"
import "./style.scss"

export const Task = () => {
   return (
      <div className="single-story-model-page">
         <div className="single-story-model">
            <KanbanBoardModel />
         </div>
      </div>
   )
}
