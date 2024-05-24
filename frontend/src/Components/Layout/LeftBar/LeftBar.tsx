import { NavLink, Outlet } from "react-router-dom"
import "../../../Style/font.css"
import "./style.scss"
import { LogoSection } from "../LeftBarSections/LogoSection/LogoSection"
import { HomeSection } from "../LeftBarSections/ItemsSections/HomeSection/HomeSection"
import { CreateSection } from "../LeftBarSections/ItemsSections/CreateSection/CreateSection"
import { SettingsSection } from "../LeftBarSections/ItemsSections/SettingsSection/SettingsSection"
import { ProfileSection } from "../LeftBarSections/ItemsSections/ProfileSection/ProfileSection"
import { UserType } from "../../../Types/User.type/User.type"
import { LogoutSection } from "../LeftBarSections/ItemsSections/LogoutSection/LogoutSection"

interface LeftBarProps {
   profileUser: UserType;
}
export const LeftBar = (props: LeftBarProps) => {
   return (
      <div style={{ display: "flex" }}>
         <>
            <div className="left-bar">
               <div className="container">
                  <div className="menu">

                     <NavLink to={"/home"} className="left-bar-link">
                        <LogoSection />
                     </NavLink>

                     <NavLink to={`/profile/${props.profileUser.userFullname}/${props.profileUser.userId}`} className="left-bar-link link-hover">
                        <ProfileSection />
                     </NavLink>

                     <NavLink to={"/home"} className="left-bar-link link-hover">
                        <HomeSection />
                     </NavLink>

                     <NavLink to={"/create"} className="left-bar-link link-hover">
                        <CreateSection />
                     </NavLink>

                     <NavLink to={"/settings"} className="left-bar-link link-hover">
                        <SettingsSection />
                     </NavLink>

                     <NavLink to={"/"} className="left-bar-link link-hover">
                        <LogoutSection />
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
