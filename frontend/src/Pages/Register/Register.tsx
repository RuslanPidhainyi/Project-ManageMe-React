import "./style.scss"
import "../../Style/font.css"
import { Link, useNavigate  } from 'react-router-dom'
import { SingUpBtnForRegisterPage } from "../../Components/Button components/SingUpBtnForRegisterPage/SingUpBtnForRegisterPage"
import { LogInBtnForRegisterPage } from "../../Components/Button components/LogInBtnForRegisterPage/LogInBtnForRegisterPage"
//import { authService } from '../../Services/AuthService/authService';
import { register } from '../../Services/AuthService/authService';
import { useState } from "react"


const Register = () => {

   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [name, setName] = useState('');
   const [role, setRole] = useState('Developer');
   


   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        const result = await register(email, password, name, role);
        console.log('Registration successful:', result);
        navigate('/');
      } catch (error) {
        console.error('Registration failed:', error);
      }
   };

   return (
      <div className='register-page'>
         <main className='common-card'>
            <main className='main-contener'>
               <h1 className='page-name'>Sing up</h1>
               <form onSubmit={handleSubmit}>


                  <input
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Name"
                     required/>
                  
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email"
                     required/>

                     <select id="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="Developer">Developer</option>
                        <option value="Devops">Devops</option>
                        <option value="Admin">Admin</option>
                     </select>

                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                     required/>

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
