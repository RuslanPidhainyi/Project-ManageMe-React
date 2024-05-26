import { Deadline } from "../../Data/Enums/EnumExecutionTime/Deadline";
import { Priority } from "../../Data/Enums/EnumPriority/Priority";
import { Role } from "../../Data/Enums/EnumRole/Role";
import { Status } from "../../Data/Enums/EnumStatus/Status";

export interface TaskModelType {
  taskId: string;
  taskName: string;
  taskDesc: string;
  taskRole: Role;
  taskPriority: Priority;
  taskStatus: Status; 
  taskDeadline: Deadline;
  taskDate: string;
  //taskStartDate?: string; //Data dodania
  //taskEndDate?: string; //Data startu (stan zmieniony na doing)
  ownerId: string; //Data zakończenia (stan zmieniony na done)
}
