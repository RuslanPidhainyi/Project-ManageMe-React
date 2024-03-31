import { Create } from '../Create/Create'
import { Edit } from '../Edit/Edit'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
import { Settings } from '../Settings/Settings'
import { Home } from "../Home/Home"
import './background-color.scss'
import "../../Style/font.css"
import { Routes, Route } from "react-router-dom"
import { LeftBar } from '../../Components/Layout/LeftBar/LeftBar'

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LeftBar />}>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path='edit/:id' element={<Edit />} />
          <Route path='settings' element={<Settings />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
