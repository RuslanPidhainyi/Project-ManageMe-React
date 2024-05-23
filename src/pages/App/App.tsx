import './background-color.scss'
import "../../Style/font.css"
import { Create } from "../Create/Create"
import { Edit } from '../Edit/Edit'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
import { Settings } from '../Settings/Settings'
import { Home } from "../Home/Home"
import { Routes, Route } from "react-router-dom"
import { LeftBar } from '../../Components/Layout/LeftBar/LeftBar'
import { useEffect, useState } from "react"
import { Profile } from "../Profile/Profile"
import { Story } from "../Story/Story"
import { CreateStory } from "../CreateStory/CreateStory"
import { EditStory } from "../EditStory/EditStory"
import { UserService } from "../../Services/User.Service/User.Service"
import { Task } from "../Task/Task"
import Login from "../Login/Login"
import Register from "../Register/Register"
import { CreateTask } from "../CreateTask/CreateTask"
import { EditTask } from '../EditTask/EditTask'

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

    /**************** URL ****************/

    //register

    //home / story / task  

    /**************** HOME czyli PROJECT ****************/

    //home - [page project], PROJECTS
    //create 
    //edit/:projectId

    /**************** STORY ****************/

    //project /:projectID - [page story], STORIES
    //project/:projectId/add-story
    //project/:projectId/edit-story/:storyId

    /**************** TASK ****************/

    //project/:projectId/story/:storyId - [page task], tasks
    //project/:projectId/story/:storyId/add-task
    //project/:projectId/story/:storyId/edit-task/:taskId

    
    

    <main className="App" id={displayMode}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path="/" element={<LeftBar profileUser={profileUser} />}>
          <Route path="profile/:userFullname/:userId" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path='edit/:projectId' element={<Edit />} />
          <Route path='settings' element={<Settings displayModeSwitch={displayModeSwitch} />} />
          
          <Route path='project/:projectId' element={<Story />} />
          <Route path="project/:projectId/add-story" element={<CreateStory />} />
          <Route path="project/:projectId/edit-story/:storyId" element={<EditStory />} />
          
          <Route path="project/:projectId/story/:storyId" element={<Task />} />
          <Route path="project/:projectId/story/:storyId/add-task" element={<CreateTask />} />
          <Route path="project/:projectId/story/:storyId/edit-task/:taskId" element={<EditTask />} />
          
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes >
    </main >
  )
}

export default App
