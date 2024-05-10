import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import "../CommonStyle/style.scss"
import "../../../../../Style/font.css"

export const LogoutSection = () => {
   return (
      <div className="item">
         <LogoutRoundedIcon className="icon" />
         <span>Logout</span>
      </div>
   )
}
