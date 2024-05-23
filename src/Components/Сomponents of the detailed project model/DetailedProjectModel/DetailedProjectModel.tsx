import "./style.scss"
import "../../../Style/font.css"
import { ProjectModelType } from "../../../Types/ProjectModel.type/ProjectModel.type";
import { AddBtnFromStoryPage } from "../../Button components/AddBtnFromStoryPage/AddBtnFromStoryPage";
import { NavLink } from "react-router-dom";
import { StoryModel } from "../../Сomponents of the story model/StoryModel/StoryModel";
//import { useEffect, useState } from "react";

interface DetailedProjectModelProps {
   project: ProjectModelType;
}

export const DetailedProjectModel = (props: DetailedProjectModelProps) => {
   return (
      <div className="base-project-model-container">
         <div className="base-project-model-task">
            <div className="base-project-model-details-section">
               <div className="base-project-model-details-section-top">
                  <div className="base-project-model-name-section">
                     <h1>{props.project.projectName}</h1>
                  </div>
               </div>
               <div className="base-project-model-id-section">
                  <h3><b>ID: </b>{props.project.projectId}</h3>
               </div>
            </div>
            <div className="base-project-model-content-section">
               <h4>{props.project.projectDesc}</h4>
            </div>
         </div>
         <div className="base-project-model-subtask">
            <form>
               <NavLink to={`add-story`}>
                  <AddBtnFromStoryPage />
               </NavLink>
            </form>
            <div className="base-project-model-subtask-section">
               {props.project.stories.map(story => (
                  <StoryModel key={story.storyId} story={story} projectId={props.project.projectId} />))}
            </div>
         </div>
      </div>
   );
};
