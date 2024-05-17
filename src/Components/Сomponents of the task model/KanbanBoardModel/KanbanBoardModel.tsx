import "./style.scss"
import "../../../Style/font.css"
import { TaskModel } from "../TaskModel/TaskModel"
import { StoryModelType } from "../../../Types/StoryModel.type/StoryModel.type"
import { NavLink } from "react-router-dom";
import { AddBtnFromTaskPage } from "../../Button components/AddBtnFromTaskPage/AddBtnFromTaskPage";
// 1. przefiltruj liste taskow - wszystkie todo
// 2. wyswietl je w kolumnie todo
// 3. przefiltruj liste taskow - wszystkie doing

interface KanbanBoardModelProps {
   story: StoryModelType;
}


export const KanbanBoardModel = (props: KanbanBoardModelProps) => {

   const todoTasks = props.story.tasks.filter(task => task.taskStatus === 'Todo');
   const doingTasks = props.story.tasks.filter(task => task.taskStatus === 'Doing');
   const doneTasks = props.story.tasks.filter(task => task.taskStatus === 'Done');

   return (

      <div className="kanban-board-container">

         <h1 className="name-story-kanban-board">{props.story.storyName}</h1>

         <form>
            <NavLink to={`add-task`}>
               <AddBtnFromTaskPage />
            </NavLink>
         </form>

         <div className="kanban-board">

            <div className="board">
               <div className="board-title">
                  <h2>ToDo</h2>
               </div>
               <div className="item">
                  {todoTasks.map(task => <TaskModel key={task.taskId} task={task} />)}
               </div>
            </div>

            <div className="board" >
               <div className="board-title">
                  <h2>Doing</h2>
               </div>
               <div className="item">
                  {doingTasks.map(task => <TaskModel key={task.taskId} task={task} />)}
               </div>
            </div>

            <div className="board">
               <div className="board-title">
                  <h2>Done</h2>
               </div>
               <div className="item">
                  {doneTasks.map(task => <TaskModel key={task.taskId} task={task} />)}
               </div>
            </div>
         </div>
      </div>
   )
}
