import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import "../CommonStyle/style.scss"
import "../../../../../Style/font.css"

export const ProfileSection = () => {
   return (
      <div className="item">
         <PersonRoundedIcon className="icon" />
         <span>Profile</span>
      </div>
   )
}
