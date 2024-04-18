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

  return (
    <main className="App" id={displayMode}>
      <Routes>
        <Route path="/" element={<LeftBar />}>
          <Route path="/" element={<Home />}>
            {/* <Route path='project' element={<DetailedProjectModel />} /> */}
          </Route>
          <Route path="profile" element={<Profile />} >
            {/* <Route path='project' element={<DetailedProjectModel />} /> */}
          </Route>
          <Route path="create" element={<Create />} />
          <Route path='edit/:id' element={<Edit />} />
          <Route path='settings' element={<Settings displayModeSwitch={displayModeSwitch} />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='project' element={<DetailedProjectModel />} />
          {/* <Route path='project/:id' element={<DetailedProjectModel />} /> */}
          <Route path='project/:name/:id' element={<DetailedProjectModel />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
