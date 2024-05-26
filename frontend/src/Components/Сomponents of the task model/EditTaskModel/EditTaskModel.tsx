import { useNavigate, useParams } from "react-router-dom"
import "../../../Style/font.css"
import "./style.scss"
import { useEffect, useState } from "react";
import { TaskModelType } from "../../../Types/TaskModel.type/TaskModel.type";
//import { StoryModelService } from "../../../Services/StoryModel.Service/StoryModel.Service";
import { Priority } from "../../../Data/Enums/EnumPriority/Priority";
import { Status } from "../../../Data/Enums/EnumStatus/Status";
import { TaskModelService } from "../../../Services/TaskModel.Service/TaskModel.Service";
import { ConfirmBtn } from "../../Button components/ConfirmBtn/ConfirmBtn";
import { Role } from "../../../Data/Enums/EnumRole/Role";
import { Deadline } from "../../../Data/Enums/EnumExecutionTime/Deadline";


export const EditTaskModel = () => {

   const { projectId, storyId, taskId } = useParams<{ projectId?: string, storyId?: string, taskId?: string }>();

   const [task, setTask] = useState<TaskModelType | null>(null);
   
   const [name, setName] = useState("");
   const [desc, setDesc] = useState("");
   const [role, setRole] = useState<Role>(Role.NONE)
   const [priority, setPriority] = useState<Priority>(Priority.LOW)
   const [status, setStatus] = useState<Status>(Status.TODO)
   const [deadline, setDeadline] = useState<Deadline>(Deadline.ZERO)

   const navigate = useNavigate();

   useEffect(() => {
      if (projectId && storyId && taskId) {
         const currentTask = TaskModelService.getTaskById(projectId, storyId, taskId);
         
         if (currentTask) {
            setTask(currentTask);
            setName(currentTask.taskName);
            setDesc(currentTask.taskDesc);
            setRole(currentTask.taskRole);
            setPriority(currentTask.taskPriority);
            setStatus(currentTask.taskStatus);
            setDeadline(currentTask.taskDeadline);
         }
      }
   }, [projectId, storyId, taskId]);


   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
   }

   const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDesc(event.target.value)
   }

   const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setRole(event.target.value as Role)
   }

   const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPriority(event.target.value as Priority)
   }

   const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setStatus(event.target.value as Status)
   }

   const handleDeadlineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setDeadline(event.target.value as Deadline)
   }

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (task && projectId && storyId) {
         const updateTask = { ...task, taskName: name, taskDesc: desc, taskRole: role, taskPriority: priority, taskStatus: status, taskDeadline: deadline };
         TaskModelService.updateTaskModel(projectId, storyId, updateTask);
         navigate(`/project/${projectId}/story/${storyId}`)
      } else {
         console.error("projectId is undefined");
      }
   }

   return (
      <div className="edit-task-model-container">
         <main className="common-card-edit-task-model-container">
            <main className="main-contener-edit-task-model-container">
               <h2 className="page-name-edit-task-model-container">Edit task</h2>
               <form onSubmit={handleSubmit}>
                  <div className="form-name-task">
                     <label htmlFor="name">Name:</label>
                     <input type="text" name="name" maxLength={53} value={name} onChange={handleNameChange} />
                  </div>
                  <div className="form-desc-task">
                     <label htmlFor="desc">Description:</label>
                     <input type="text" name="desc" maxLength={250} value={desc} onChange={handleDescChange}/>
                  </div>
                  <div className="form-role-task">
                     <label htmlFor="role">Role:</label>
                     <select id="role" value={role} onChange={handleRoleChange}>
                     <option value={Role.NONE}>{Role.NONE}</option>
                        <option value={Role.DEVELOPER}>{Role.DEVELOPER}</option>
                        <option value={Role.DEVOPS}>{Role.DEVOPS}</option>
                     </select>
                  </div>
                  <div className="form-priority-task">
                     <label htmlFor="priority">Priority:</label>
                     <select id="priority" value={priority} onChange={handlePriorityChange}>
                     <option value={Priority.LOW}>{Priority.LOW}</option>
                        <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
                        <option value={Priority.HIGH}>{Priority.HIGH}</option>
                     </select>
                  </div>
                  <div className="form-status-task">
                     <label htmlFor="status">Status:</label>
                     <select id="status" value={status} onChange={handleStatusChange}>
                        <option value={Status.TODO}>{Status.TODO}</option>
                        <option value={Status.DOING}>{Status.DOING}</option>
                        <option value={Status.DONE}>{Status.DONE}</option>
                     </select>
                  </div>
                  <div className="form-deadline-task">
                     <label htmlFor="deadline">Deadline:</label>
                     <select id="deadline" value={deadline} onChange={handleDeadlineChange}>
                        <option value={Deadline.ZERO}>{Deadline.ZERO}</option>
                        <option value={Deadline.SIX}>{Deadline.SIX}</option>
                        <option value={Deadline.EIGHT}>{Deadline.EIGHT}</option>
                        <option value={Deadline.TWELVE}>{Deadline.TWELVE}</option>
                        <option value={Deadline.TWENTY_FOUR}>{Deadline.TWENTY_FOUR}</option>
                        <option value={Deadline.WEEK}>{Deadline.WEEK}</option>
                        <option value={Deadline.TWO_WEEKS}>{Deadline.TWO_WEEKS}</option>
                        <option value={Deadline.MONTH}>{Deadline.MONTH}</option>
                        <option value={Deadline.THREE_MONTHS}>{Deadline.THREE_MONTHS}</option>
                     </select>
                  </div>
                  <ConfirmBtn />
               </form>
            </main>
         </main>
      </div>
   )
}
