import { useNavigate, useParams } from "react-router-dom"
import "../../../Style/font.css"
import "./style.scss"
import React, { useEffect, useState } from "react"
import { StoryModelType } from "../../../Types/StoryModel.type/StoryModel.type"
import { StoryModelService } from "../../../Services/StoryModel.Service/StoryModel.Service"
import { ProjectModelService } from "../../../Services/ProjectModel.Service/ProjectModel.Service"
import { Priority } from "../../../Data/Enums/EnumPriority/Priority"
import { Status } from "../../../Data/Enums/EnumStatus/Status"
import { ConfirmBtn } from "../../Button components/ConfirmBtn/ConfirmBtn"

export const EditStoryModel = () => {

   const { projectId, storyId } = useParams<{ storyId?: string, projectId?: string }>();

   const [story, setStory] = useState<StoryModelType | null>(null);

   const [name, setName] = useState("");
   const [desc, setDesc] = useState("");
   const [priority, setPriority] = useState<Priority>(Priority.LOW)
   const [status, setStatus] = useState<Status>(Status.TODO)

   const navigate = useNavigate();


   useEffect(() => {
      if (projectId) {
         const projects = ProjectModelService.getProjects();
         const currentProject = projects.find(project => project.projectId === projectId);

         if (currentProject) {
            const currentStory = currentProject.stories.find(story => story.storyId === storyId)

            if (currentStory) {
               setStory(currentStory)
               setName(currentStory.storyName)
               setDesc(currentStory.storyDesc)
            }
         }
      }
   }, [projectId, storyId]);


   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
   }

   const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDesc(event.target.value)
   }

   const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPriority(event.target.value as Priority)
   }

   const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setStatus(event.target.value as Status)
   }

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (story && projectId) {
         const updateStory = { ...story, storyName: name, storyDesc: desc, storyPriority: priority, storyStatus: status };
         StoryModelService.updateStoryModel(projectId, updateStory);
         navigate(`/project/${projectId}`)
      } else {
         console.error("projectId is undefined");
      }
   }
   
   return (
      <div className="edit-story-model-container">
         <main className="common-card-edit-story-model-container">
            <main className="main-contener-edit-story-model-container">
               <h2 className="page-name-edit-story-model-container">Edit story</h2>
               <form onSubmit={handleSubmit}>
                  <div className="form-name-story">
                     <label htmlFor="name">Name:</label>
                     <input type="text" name="name" maxLength={51} value={name} onChange={handleNameChange} />
                  </div>
                  <div className="form-desc-story">
                     <label htmlFor="desc">Description:</label>
                     <input type="text" name="desc" maxLength={250} value={desc} onChange={handleDescChange} />
                  </div>
                  <div className="form-priority-story">
                     <label htmlFor="priority">Priority:</label>
                     <select id="priority" value={priority} onChange={handlePriorityChange}>
                        <option value={Priority.LOW}>{Priority.LOW}</option>
                        <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
                        <option value={Priority.HIGH}>{Priority.HIGH}</option>
                     </select>
                  </div>
                  <div className="form-status-story">
                     <label htmlFor="status">Status:</label>
                     <select id="status" value={status} onChange={handleStatusChange}>
                        <option value={Status.TODO}>{Status.TODO}</option>
                        <option value={Status.DOING}>{Status.DOING}</option>
                        <option value={Status.DONE}>{Status.DONE}</option>
                     </select>
                  </div>
                  <ConfirmBtn />
               </form>
            </main>
         </main>
      </div>
   )
}
