import { NavLink, Outlet } from "react-router-dom"
import "../../../Style/font.css"
import "./style.scss"
import { LogoSection } from "../LeftBarSections/LogoSection/LogoSection"
import { HomeSection } from "../LeftBarSections/ItemsSections/HomeSection/HomeSection"
import { CreateSection } from "../LeftBarSections/ItemsSections/CreateSection/CreateSection"
import { SettingsSection } from "../LeftBarSections/ItemsSections/SettingsSection/SettingsSection"

export const LeftBar = () => {
   return (
      <div style={{ display: "flex" }}>
         <>
            <div className="left-bar">
               <div className="container">
                  <div className="menu">

                     <NavLink to={"/"} className="left-bar-link">
                        <LogoSection />
                     </NavLink>

                     <NavLink to={"/"} className="left-bar-link">
                        <HomeSection />
                     </NavLink>

                     <NavLink to={"/create"} className="left-bar-link">
                        <CreateSection />
                     </NavLink>

                     <NavLink to={"/settings"} className="left-bar-link">
                        <SettingsSection />
                     </NavLink>

                  </div>
               </div>
            </div>
            <div style={{ flex: 9 }}>
               <Outlet />
            </div>
         </>
      </div >
   )
}