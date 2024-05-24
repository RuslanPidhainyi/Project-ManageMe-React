import "./style.scss"
import "../../Style/font.css"
import { Link } from 'react-router-dom'
import { SingUpBtnForRegisterPage } from "../../Components/Button components/SingUpBtnForRegisterPage/SingUpBtnForRegisterPage"
import { LogInBtnForRegisterPage } from "../../Components/Button components/LogInBtnForRegisterPage/LogInBtnForRegisterPage"


const Register = () => {
   return (
      <div className='register-page'>
         <main className='common-card'>
            <main className='main-contener'>
               <h1 className='page-name'>Sing up</h1>
               <form>
                  <input type="text" placeholder='Name' maxLength={30} />
                  <input type="text" placeholder='Surname' maxLength={30} />
                  <input type="email" placeholder='Email' maxLength={30} />
                  <input type="password" placeholder='Password' maxLength={30} />
                  <SingUpBtnForRegisterPage />
               </form>
               <span>Do you have an account?</span>
               <Link to="/"><LogInBtnForRegisterPage /></Link>

            </main>
         </main>
      </div>
   )
}

export default Register;

