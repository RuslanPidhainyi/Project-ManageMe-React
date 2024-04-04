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


function App() {

  const [displayMode, setDisplayMode] = useState('light');

  useEffect(() => {
    const displayedModeData = localStorage.getItem('displayMode');

    if (displayedModeData) {
      try {
        const getDisplayedModeData = JSON.parse(displayedModeData);
        setDisplayMode(getDisplayedModeData);
      }
      catch (error) {
        console.error('Parsing data from local storage error:', error);
      }
    }
  }, []);

  const displayModeSwitch = () => {
    const newMode = displayMode === 'light' ? 'dark' : 'light';
    setDisplayMode(newMode);
  };
  return (
    <main>
      <Routes>
        <Route path="/" element={<LeftBar />}>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path='edit/:id' element={<Edit />} />
          <Route path='settings' element={<Settings displayModeSwitch={displayModeSwitch} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
