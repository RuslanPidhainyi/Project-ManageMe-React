import "./style.scss"
import "../../../Style/font.css"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { TaskModelType } from "../../../Types/TaskModel.type/TaskModel.type";

interface TaskDialogModelProps {
   open: boolean;
   handleClose: () => void;
   task: TaskModelType;
}

export const TaskDialogModel = (props: TaskDialogModelProps) => {
   return (
      <Dialog className="task-dialog-container" open={props.open} onClose={props.handleClose}>
         <DialogTitle className="task-dialog-title">{props.task.taskName}</DialogTitle>
         <DialogContent className="task-dialog-form">
            <DialogContentText className="task-dialog-desc">
               {props.task.taskDesc}
            </DialogContentText>
            <DialogContentText className="task-dialog-priority">
               <b>Priority:</b> {props.task.taskPriority}
            </DialogContentText>
            <DialogContentText className="task-dialog-status">
               <b>Status:</b> {props.task.taskStatus}
            </DialogContentText>
            {/* <DialogContentText>
               <b>Estimated Finish Time:</b> {props.task.taskEstimatedFinishTime}
            </DialogContentText> */}
         </DialogContent>
         <DialogActions className="task-dialog-action">
            <Button onClick={props.handleClose}>Close</Button>
         </DialogActions>
      </Dialog>
   )
}
