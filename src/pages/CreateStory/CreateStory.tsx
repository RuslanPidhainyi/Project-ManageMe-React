import "./style.scss"
import "../../Style/font.css"
import { NewStoryModule } from "../../Components/Сomponents of the story module/NewStoryModule/NewStoryModule"


export const CreateStory = () => {
   return (
      <div className='create-story-page'>
         <div className='new-story-page'>
            <NewStoryModule />
         </div>
      </div>
   )
}
