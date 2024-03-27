import "../../Style/font.css"
import "./style.scss"
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

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
                  <div className="edit-icon">
                     <EditNoteRoundedIcon className="icon" />
                  </div>
                  <div className="delete-icon">                         <DeleteForeverRoundedIcon className="icon" />
                  </div>
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
