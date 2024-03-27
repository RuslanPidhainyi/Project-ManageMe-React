import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import "../CommonStyle/style.scss"
import "../../../../../Style/font.css"

export const SettingsSection = () => {
   return (
      <div className="item">
         <SettingsRoundedIcon className="icon" />
         <span>Settings</span>
      </div>
   )
}
