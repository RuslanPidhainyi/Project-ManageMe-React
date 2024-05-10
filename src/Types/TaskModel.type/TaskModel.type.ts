import { Priority } from "../../Data/Enums/EnumPriority/Priority";
import { Status } from "../../Data/Enums/EnumStatus/Status";

export interface TaskModelType {
  taskId: string;
  taskName: string;
  taskDesc: string;
  taskPriority: Priority;
  //Historyjka do której przynależy zadanie
  taskEstimatedFinishTime: number; //Enum
  taskStatus: Status; //doing  -> czas startu oraz (przypisanego użytkownika) && //done -> datę zakończenia oraz (przypisanego użytkownika)
  //Data dodania
  //Data startu (stan zmieniony na doing)
  //Data zakończenia (stan zmieniony na done)
  //Użytkownik odpowiedzialny za zadanie (zadanie może wykonywać devops lub developer)
}
