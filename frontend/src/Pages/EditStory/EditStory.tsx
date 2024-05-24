import "./style.scss"
import "../../Style/font.css"
import { EditStoryModel } from "../../Components/Сomponents of the story model/EditStoryModel/EditStoryModel"


export const EditStory = () => {
   return (
      <div className='edit-story-page'>
         <div className='existing-story-page'>
            <EditStoryModel />
         </div>
      </div>
   )
}
