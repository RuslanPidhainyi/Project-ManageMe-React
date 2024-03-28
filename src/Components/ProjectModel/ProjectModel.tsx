import { NavLink } from "react-router-dom";
import "../../Style/font.css"
import { DeleteIcon } from "../Icons/DeleteIcon/DeleteIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import "./style.scss"


// interface ProjectModel {
//    name: string;
//    desc: string
// }

export const ProjectModel = () => {
   return (
      // <div className="project-model-container">
      //    <div className="container">
      //       <div className="details-section">
      //          <div className="name-section">
      //             <span>NameProject</span>
      //          </div>
      //       </div>
      //       <div className="content-section">
      //          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam minima necessitatibus tempore, doloribus
      //       </div>
      //    </div>
      // </div>

      <div className="project-model-container">

         <div className="details-section">

            <div className="details-section-top">
               <div className="name-section">
                  <h2>Hello</h2>
               </div>
               <div className='action-section'>
                  <NavLink to={"/edit"} className="action-icon-link">
                     <EditIcon />
                  </NavLink>
                  <DeleteIcon />
               </div>
            </div>

            <div className="id-section">
               <span>131321312312312qwasdadadasdajghj</span>
            </div>

         </div>

         <div className="content-section">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, minima architecto voluptatibus sed officia nesciunt eius excepturi accusantium. Vero laborum vel tempora error. Sunt quisquam doloribus soluta deserunt ea repellat.</p>
         </div>
      </div>
   )
}
