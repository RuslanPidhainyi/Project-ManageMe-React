import { useNavigate, useParams } from "react-router-dom"
import "../../../Style/font.css"
import "./style.scss"
import { Priority } from "../../../Data/Enums/EnumPriority/Priority"
import { Status } from "../../../Data/Enums/EnumStatus/Status"
import { TaskModelService } from "../../../Services/TaskModel.Service/TaskModel.Service"
import { ConfirmBtn } from "../../Button components/ConfirmBtn/ConfirmBtn"
import { Role } from "../../../Data/Enums/EnumRole/Role"
import { Deadline } from "../../../Data/Enums/EnumExecutionTime/Deadline"

export const NewTaskModel = () => {

   const navigate = useNavigate()
   const { projectId, storyId } = useParams()

   const handleCreateTask = (name: string, desc: string, role: Role, priority: Priority, status: Status, deadline: Deadline) => {
      if (name.trim() !== "" && desc.trim() !== "") {
         if (projectId && storyId) {
            TaskModelService.createTaskModel(projectId, storyId, name, desc, role, priority, status, deadline);
            navigate(`/project/${projectId}/story/${storyId}`);
         } else {
            console.error("projectId is undefined");
         }
      }
   };


   const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const name = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='name']")!.value;

      const desc = (e.target as HTMLFormElement).querySelector<HTMLInputElement>("input[name='desc']")!.value;

      const role = (e.target as HTMLFormElement).querySelector<HTMLSelectElement>("#role")!.value as Role;

      const priority = (e.target as HTMLFormElement).querySelector<HTMLSelectElement>("#priority")!.value as Priority;

      const status = (e.target as HTMLFormElement).querySelector<HTMLSelectElement>("#status")!.value as Status;

      const deadline = (e.target as HTMLFormElement).querySelector<HTMLSelectElement>("#deadline")!.value as Deadline;

      handleCreateTask(name, desc, role,  priority, status, deadline);
   }

   return (
      <div className="new-story-model-container">
         <main className="common-card-new-story-model-container">
            <main className="main-contener-new-story-model-container">
               <h2 className="page-name-new-story-model-container">Add new task</h2>
               <form onSubmit={handleOnSubmit}>
                  <div className="form-name-task">
                     <label htmlFor="name">Name:</label>
                     <input type="text" name="name" maxLength={53} />
                  </div>
                  <div className="form-desc-task">
                     <label htmlFor="desc">Description:</label>
                     <input type="text" name="desc" />
                  </div>
                  <div className="form-role-task">
                     <label htmlFor="role">Role:</label>
                     <select id="role">
                     <option value="NONE">NONE</option>
                        <option value="Developer">Developer</option>
                        <option value="Devops">Devops</option>
                     </select>
                  </div>
                  <div className="form-priority-task">
                     <label htmlFor="priority">Priority:</label>
                     <select id="priority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                     </select>
                  </div>
                  <div className="form-status-task">
                     <label htmlFor="status">Status:</label>
                     <select id="status" >
                        <option value="Todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                     </select>
                  </div>
                  <div className="form-deadline-task">
                     <label htmlFor="deadline">Deadline:</label>
                     <select id="deadline" >
                        <option value="0 h">0 h</option>
                        <option value="6 h">6 h</option>
                        <option value="8 h">8 h</option>
                        <option value="12 h">12 h</option>
                        <option value="24 h">24 h</option>
                        <option value="1 week">1 week</option>
                        <option value="2 weeks">2 weeks</option>
                        <option value="1 month">1 month</option>
                        <option value="3 months">3 months</option>
                     </select>
                  </div>
                  <ConfirmBtn />
               </form>
            </main>
         </main>
      </div>
   )
}
