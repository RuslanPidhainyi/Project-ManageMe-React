import "./style.scss"
import "../../Style/font.css"
import { EditStoryModule } from "../../Components/Сomponents of the story module/EditStoryModule/EditStoryModule"


export const EditStory = () => {
   return (
      <div className='edit-story-page'>
         <div className='existing-story-page'>
            <EditStoryModule />
         </div>
      </div>
   )
}
