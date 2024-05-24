import "./style.scss"
import "../../Style/font.css"
import { Link } from 'react-router-dom'
import { SingupBtnForLoginPage } from "../../Components/Button components/SingupBtnForLoginPage/SingupBtnForLoginPage"
import { LogInBtnForLoginPage } from "../../Components/Button components/LogInBtnForLoginPage/LoginBtnForLoginPage"



const Login = () => {

   return (
      <div className='login-page'>
         <main className='common-card'>
            <aside className='left-side'>
               <h1>Welcome on MM!</h1>
               <div className='list'>
                  <h4>What can you do on MM?</h4>
                  <ul>
                     <li>Create and manage your projects.</li>
                     <li>We offer an interactive graphical interface.</li>
                     <li>Create projects and share with friends.</li>
                  </ul>
               </div>
               <span>Do not you have an account?</span>
               <Link to="register"><SingupBtnForLoginPage /></Link>
            </aside>
            <aside className='right-side'>
               <h1>Log in</h1>
               <form>
                  <input type="text" placeholder='Surname' />
                  <input type="password" placeholder='Password' maxLength={30} />
                  <LogInBtnForLoginPage />
               </form>
            </aside>
         </main>
      </div>
   )
}

export default Login;

