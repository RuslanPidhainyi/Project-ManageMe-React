//import * as React from 'react';
import "./style.scss";
import "../../../Style/font.css";
import { TaskModelType } from "../../../Types/TaskModel.type/TaskModel.type";
import { TaskDialogModel } from '../TaskDialogModel/TaskDialogModel';
import { DeleteIcon } from '../../Icons/DeleteIcon/DeleteIcon';
import { EditIcon } from '../../Icons/EditIcon/EditIcon';
import { EditTaskDialogModel } from '../EditTaskDialogModel/EditTaskDialogModel';
import { useState } from "react";

interface TaskModelProps {
   task: TaskModelType;
}

export const TaskModel = (props: TaskModelProps) => {
   const [open, setOpen] = useState(false);//Dialogowe Okno
   const [openEdit, setOpenEdit] = useState(false);//Edit Dialogowe Okno

   //Dialogowe Okno
   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };


   //Edit Dialogowe Okno
   const handleOpenEdit = () => {
      setOpenEdit(true);
   }

   const handleCloseEdit = () => {
      setOpenEdit(false);
   }

   return (
      <div className="task-container">
         <div className="task">

            <div className="teg-task" onClick={handleClickOpen}>
               <h3>#{props.task.taskName}</h3>
            </div>

            <div className='task-action-section'>
               <button className="task-action-btn-edit" onClick={handleOpenEdit}>
                  <EditIcon />
               </button>
               <button className="task-invisible-button">
                  <DeleteIcon />
               </button>
            </div>

         </div>
         <TaskDialogModel open={open} handleClose={handleClose} task={props.task} />
         <EditTaskDialogModel openEdit={openEdit} handleCloseEdit={handleCloseEdit} task={props.task} />
      </div>
   );
};
