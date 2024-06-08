import "./style.scss"
import "../../Style/font.css"
import { Link, useNavigate  } from 'react-router-dom'
import { SingupBtnForLoginPage } from "../../Components/Button components/SingupBtnForLoginPage/SingupBtnForLoginPage"
import { LogInBtnForLoginPage } from "../../Components/Button components/LogInBtnForLoginPage/LoginBtnForLoginPage"
//import { authService } from '../../Services/AuthService/authService';
import { login } from '../../Services/AuthService/authService';
import { useState } from "react"
import { UserType } from "../../Types/User.type/User.type"



const Login = () => {

   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        const result = await login(email, password);
        console.log('Login successful:', result);

        localStorage.setItem('token', result.token);

         // Отримуємо користувача з таблиці Local Storage
         const users: UserType[] = JSON.parse(localStorage.getItem('users') || '[]');
         const user = users.find((user: UserType) => user.email === email);

         if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
         } else {
            console.error('User not found');
         }

        navigate('/home');
      } catch (error) {
        console.error('Login failed:', error);
      }
   };

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
               <form onSubmit={handleSubmit}>

                  {/* <input type="text" placeholder='Username' /> */}
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email"
                     required/>

                  {/* <input type="password" placeholder='Password' maxLength={30} /> */}
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                     required/>

                  <LogInBtnForLoginPage />
               </form>
            </aside>
         </main>
      </div>
   )
}

export default Login;


// import { useNavigate  } from 'react-router-dom'
// import React, { useState } from 'react';
// import { login } from '../../Services/AuthService/authService';

//const Login = () => {

//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     try {
//       const result = await login(email, password);
//       console.log('Login successful:', result);
//       // Зберегти токен в локальне сховище або перенаправити користувача на головну сторінку
//       localStorage.setItem('token', result.token);
//       navigate('/home');
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;
