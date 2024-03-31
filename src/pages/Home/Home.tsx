import "./style.scss"
import "../../Style/font.css"
import { ProjectModel } from "../../Components/ProjectModel/ProjectModel"
//import { ProjectModelType } from "../../Types/ProjectModel.type/ProjectModel.type"
// import { ProjectModelService } from "../../Services/ProjectModel.Service/ProjectModel.Service"
// import { useState } from "react"

import { fakeDbProjects } from "../../FakeData/FakeDataProject/FakeDataProject"

export const Home = () => {
   // //const [projects, setProjects] = useState<ProjectModelType[]>(ProjectModelService.getProjects())
   // const [projects] = useState<ProjectModelType[]>(ProjectModelService.getProjects())

   return (
      <section className="home-page">
         <div className="project">
            <ol className="a-margin-top d-flex">
               {/* {projects.map((project: ProjectModelType) => (
                  <ProjectModel key={project.id} project={project} />
               ))} */}
               {
                  fakeDbProjects.map((project) => <ProjectModel key={project.id} project={project} />)
               }
            </ol>
         </div>
      </section>
   )
}