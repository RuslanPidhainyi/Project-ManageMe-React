import "./style.scss"
import "../../../Style/font.css"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { TaskModelType } from "../../../Types/TaskModel.type/TaskModel.type";

interface EditTaskDialogModelProps {
   openEdit: boolean;
   handleCloseEdit: () => void;
   task: TaskModelType;
}

export const EditTaskDialogModel = (props: EditTaskDialogModelProps) => {
   return (
      <Dialog open={props.openEdit} onClose={props.handleCloseEdit}>
         <DialogTitle>{props.task.taskName}</DialogTitle>
         <DialogContent>
            <DialogContentText>
               {props.task.taskDesc}
            </DialogContentText>
            <DialogContentText>
               <b>Priority:</b> {props.task.taskPriority}
            </DialogContentText>
            <DialogContentText>
               <b>Status:</b> {props.task.taskStatus}
            </DialogContentText>
            {/* <DialogContentText>
               <b>Estimated Finish Time:</b> {props.task.taskEstimatedFinishTime}
            </DialogContentText> */}
         </DialogContent>
         <DialogActions>
            <Button onClick={props.handleCloseEdit}>Close</Button>
         </DialogActions>
      </Dialog>
   )
}
