import "./style.scss"
import "../../Style/font.css"
import { ProjectModel } from "../../Components/ProjectModel/ProjectModel"

export const Home = () => {
   return (
      <div className="home-page">
         <div className="project">
            <ol className="a-margin-top d-flex">
               <ProjectModel />
               <ProjectModel />
               <ProjectModel />
               <ProjectModel />
               <ProjectModel />
               <ProjectModel />
            </ol>
         </div>
      </div>
   )
}
