import { Create } from '../Create/Create'
import { Edit } from '../Edit/Edit'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
import { Settings } from '../Settings/Settings'
import { Home } from "../Home/Home"
import './background-color.scss'
import "../../Style/font.css"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path='edit' element={<Edit />} />
        <Route path='settings' element={<Settings />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </nav>
  )
}

export default App
