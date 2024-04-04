import React, { useEffect } from 'react'
import "./style.scss"
import "../../Style/font.css"
import { DisplayModeSwitch } from "../../Components/Button components/DisplayModeSwitch/DisplayModeSwitch"
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

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

   //TODO: Hook useState for translator

   return (
      <div className='settings-page'>
         <div className='settings-section'>
            <h2>Settings <SettingsRoundedIcon className='setting-icon' /></h2>
            <div className='dark-mode-section'>
               Dark Mode:<DisplayModeSwitch onClick={handleDisplayModeSwitch} className='switch' />
            </div>
         </div>
      </div>
   )
}
