import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
//import { logout } from '../../../../../Services/AuthService/authService';
import authService from '../../../../../Services/AuthService/authService';
import "../CommonStyle/style.scss"
import "../../../../../Style/font.css"

export const LogoutSection = () => {

   const handleLogout = () => {
      authService.logout();
    };

   return (
      <div className="item" onClick={handleLogout}>
         <LogoutRoundedIcon className="icon" />
         <span>Logout</span>
      </div>
   )
}
