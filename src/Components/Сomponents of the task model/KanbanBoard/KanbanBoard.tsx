import "./style.scss"
import "../../../Style/font.css"
import { Task } from "../Task/Task"
// 1. przefiltruj liste taskow - wszystkie todo
// 2. wyswietl je w kolumnie todo
// 3. przefiltruj liste taskow - wszystkie doing

export const KanbanBoard = () => {
   return (
      <div className="kanban-board-container">
         <div className="kanban-board">

            <div className="board">
               <div className="board-title">
                  <h2>ToDo</h2>
               </div>
               <div className="item">
                  <Task />
               </div>
            </div>

            <div className="board" >
               <div className="board-title">
                  <h2>Doing</h2>
               </div>

            </div>

            <div className="board">
               <div className="board-title">
                  <h2>Done</h2>
               </div>

            </div>
         </div>
      </div>
   )
}
