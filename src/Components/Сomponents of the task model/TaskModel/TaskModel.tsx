//import * as React from 'react';
import "./style.scss";
import "../../../Style/font.css";
import { TaskModelType } from "../../../Types/TaskModel.type/TaskModel.type";
import { TaskDialogModel } from '../TaskDialogModel/TaskDialogModel';
import { DeleteIcon } from '../../Icons/DeleteIcon/DeleteIcon';
import { EditIcon } from '../../Icons/EditIcon/EditIcon';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TaskModelService } from "../../../Services/TaskModel.Service/TaskModel.Service";

interface TaskModelProps {
   task: TaskModelType;
   projectId: string;
   storyId: string;
}

export const TaskModel = (props: TaskModelProps) => {
   const [open, setOpen] = useState(false);//Dialogowe Okno
   //const [openEdit, setOpenEdit] = useState(false);//Edit Dialogowe Okno

   //Dialogowe Okno
   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   //Delete
   const handleDelete = () => {
      TaskModelService.deleteTaskModel(props.projectId, props.storyId, props.task.taskId);
   }

   return (
      <div className="task-container">
         <div className="task">

            <div className="teg-task" onClick={handleClickOpen}>
               <h3>#{props.task.taskName}</h3>
            </div>

            <div className='task-action-section'>
               <NavLink to={`edit-task/${props.task.taskId}`} className="task-action-btn-edit">
                  <EditIcon />
               </NavLink>
               <button onClick={handleDelete} className="task-invisible-button">
                  <DeleteIcon />
               </button>
            </div>

         </div>
         <TaskDialogModel open={open} handleClose={handleClose} task={props.task} />
      </div>
   );
};
