import "./style.scss"
import "../../Style/font.css"
import { NewStoryModel } from "../../Components/Сomponents of the story model/NewStoryModel/NewStoryModel"


export const CreateStory = () => {
   return (
      <div className='create-story-page'>
         <div className='new-story-model'>
            <NewStoryModel />
         </div>
      </div>
   )
}
