import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { logout } from '../../../../../Services/AuthService/authService';
import "../CommonStyle/style.scss"
import "../../../../../Style/font.css"

export const LogoutSection = () => {

   const handleLogout = () => {
      logout();
    };

   return (
      <div className="item" onClick={handleLogout}>
         <LogoutRoundedIcon className="icon" />
         <span>Logout</span>
      </div>
   )
}
