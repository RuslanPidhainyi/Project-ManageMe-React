import { Create } from "../Create/Create"
import { Edit } from '../Edit/Edit'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
import { Settings } from '../Settings/Settings'
import { Home } from "../Home/Home"
import './background-color.scss'
import "../../Style/font.css"
import { Routes, Route } from "react-router-dom"
import { LeftBar } from '../../Components/Layout/LeftBar/LeftBar'
import { useEffect, useState } from "react"
import { Profile } from "../Profile/Profile"
import { DetailedProjectModel } from "../DetailedProjectModel/DetailedProjectModel"
import { CreateStory } from "../CreateStory/CreateStory"
import { EditStory } from "../EditStory/EditStory"
import { UserService } from "../../Services/User.Service/User.Service"

function App() {
  const [displayMode, setDisplayMode] = useState("light");

  //TODO: Dark mode
  useEffect(() => {
    const displayModeData = localStorage.getItem("displayMode");

    if (displayModeData) {
      try {
        const getDisplayedModeData = JSON.parse(displayModeData);
        setDisplayMode(getDisplayedModeData);
      }
      catch (error) {
        console.error('Parsing data from local storage error:', error)
      }
    }
  }, []);

  const displayModeSwitch = () => {
    const newMode = displayMode === "light" ? "dark" : "light";
    setDisplayMode(newMode);
  }

  const profileUser = UserService.getUserById();

  return (
    <main className="App" id={displayMode}>
      <Routes>
        <Route path="/" element={<LeftBar profileUser={profileUser} />}>
          <Route path="/" element={<Home />} />
          <Route path="profile/:fullname/:id" element={<Profile />} />
          <Route path="create" element={<Create />} />
          <Route path='edit/:name/:id' element={<Edit />} />
          <Route path='settings' element={<Settings displayModeSwitch={displayModeSwitch} />} />
          <Route path='project/:name/:id' element={<DetailedProjectModel />} />
          <Route path="project/:name/:id/add-story" element={<CreateStory />} />
          <Route path="project/:name/:id/edit-story" element={<EditStory />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes >
    </main >
  )
}

export default App
