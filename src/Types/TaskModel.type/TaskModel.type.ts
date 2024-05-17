import { Priority } from "../../Data/Enums/EnumPriority/Priority";
import { Status } from "../../Data/Enums/EnumStatus/Status";

export interface TaskModelType {
  taskId: string;
  taskName: string;
  taskDesc: string;
  taskPriority: Priority;
  storyId: string; //Historyjka do której przynależy zadanie
  //taskEstimatedFinishTime: string; //number; //Enum
  taskStatus: Status; //doing  -> czas startu oraz (przypisanego użytkownika) && //done -> datę zakończenia oraz (przypisanego użytkownika)
  //taskStartDate?: string; //Data dodania
  //taskEndDate?: string; //Data startu (stan zmieniony na doing)
  ownerId: string; //Data zakończenia (stan zmieniony na done)
  //taskCreationDate?: string; //Użytkownik odpowiedzialny za zadanie (zadanie może wykonywać devops lub developer)
}
