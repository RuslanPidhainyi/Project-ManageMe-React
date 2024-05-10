import { KanbanBoard } from "../../Components/Сomponents of the task model/KanbanBoard/KanbanBoard"
import "./style.scss"

export const DetailedStoryModel = () => {
   return (
      <div className="single-story-model-page">
         <div className="single-story-model">
            <KanbanBoard />
         </div>
      </div>
   )
}
