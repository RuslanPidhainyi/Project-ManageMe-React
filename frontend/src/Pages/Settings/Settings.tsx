import "./style.scss"
import "../../Style/font.css"
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { DisplayModeSwitch } from "../../Components/Button components/DisplayModeSwitch/DisplayModeSwitch";
import { useEffect } from "react";

interface ModeProps {
   displayModeSwitch: () => void;
}

export const Settings = (props: ModeProps) => {

   //TODO: Hook useState for dark-mode
   useEffect(() => {
      const displayedModeData = localStorage.getItem('displayMode');
      if (displayedModeData == null) {
         localStorage.setItem('displayMode', JSON.stringify('light'));
      }
   }, []);

   const handleDisplayModeSwitch = () => {
      const displayedModeData = localStorage.getItem('displayMode');
      if (JSON.parse(displayedModeData || '') == 'light') {
         localStorage.setItem('displayMode', JSON.stringify('dark'));
      } else if (JSON.parse(displayedModeData || '') == 'dark') {
         localStorage.setItem('displayMode', JSON.stringify('light'));
      }

      props.displayModeSwitch();

   };

   return (
      <div className='settings-page'>
         <div className='settings-section'>
            <h2>Settings <SettingsRoundedIcon className='setting-icon' /></h2>
            <div className='dark-mode-section'>
               Dark Mode: <DisplayModeSwitch onClick={handleDisplayModeSwitch} className='switch' />
            </div>
         </div>
      </div>
   )
}
