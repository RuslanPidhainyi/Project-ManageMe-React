import "../../../Style/font.css"
import "./style.scss"

type DisplayModeSwitchProps = {
   onClick: () => void,
   className?: string
}

export const DisplayModeSwitch = (props: DisplayModeSwitchProps) => {
   return (
      <div className={`display-mode-button  ${props.className}`} onClick={props.onClick} >
         <div className='light-dark-flag'></div>
      </div>
   )
}