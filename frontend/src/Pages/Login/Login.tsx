import "./style.scss";
import "../../Style/font.css";
import { Link, useNavigate } from 'react-router-dom';
import { SingupBtnForLoginPage } from "../../Components/Button components/SingupBtnForLoginPage/SingupBtnForLoginPage";
import { LogInBtnForLoginPage } from "../../Components/Button components/LogInBtnForLoginPage/LoginBtnForLoginPage";
import authService from '../../Auth/AuthService/authService'; // переконайтеся, що шлях правильний
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthContext/AuthContext ";

const Login = () => {
   // const navigate = useNavigate();
   // const [userLogin, setUserLogin] = useState('');
   // const [password, setPassword] = useState('');
   // const [message, setMessage] = useState('');

   // const handleSubmit = async (event: React.FormEvent) => {
   //    event.preventDefault();
   //    setMessage('');

   //    try {
   //        await authService.login(userLogin, password);
   //        navigate('/Home'); // Перенаправлення після успішного входу
   //    } catch (error) {
   //        setMessage('Login failed. Please check your credentials.');
   //    }
   // };

   const navigate = useNavigate();
  const { setUser } = useContext(AuthContext)!;
  const [userLogin, setUserLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('');

    try {
      const user = await authService.login(userLogin, password);
      setUser(user);
      navigate('/home'); // Przekierowanie po pomyślnym logowaniu
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
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
                  <input
                     type="text"
                     value={userLogin}
                     onChange={(e) => setUserLogin(e.target.value)}
                     placeholder="Login"
                     required/>

                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                     required/>

                  <LogInBtnForLoginPage />
               </form>
               {message && <div className="error-message">{message}</div>}
            </aside>
         </main>
      </div>
   );
};

export default Login;





//New code 

// import "./style.scss";
// import "../../Style/font.css";
// import { Link, useNavigate } from 'react-router-dom';
// import { SingupBtnForLoginPage } from "../../Components/Button components/SingupBtnForLoginPage/SingupBtnForLoginPage";
// import { LogInBtnForLoginPage } from "../../Components/Button components/LogInBtnForLoginPage/LoginBtnForLoginPage";
// import { login } from '../../Services/AuthService/authService';
// import { useState } from "react";
// import { UserType } from "../../Types/User.type/User.type";

// const Login = () => {
   
//    const navigate = useNavigate();
//    const [userLogin, setUserLogin] = useState('');
//    const [password, setPassword] = useState('');

//    const handleSubmit = async (event: React.FormEvent) => {

//       e.preventDefault();
//       setMessage('');

//       try {
//           await authService.login(username, password);
//           window.location.reload();
//       } catch (error) {
//           setMessage('Login failed. Please check your credentials.');
//       }



//        ///////////////////////////////////////////////////////////
//        //Patryka z Angulara 

//       // event.preventDefault();

//       // const loginPayload = {
//       //    login: this.username,
//       //    password: this.password
//       //  };
   
//       //  this.http.post<{ token: string, refreshToken: string }>('http://localhost:3000/token', loginPayload)
//       //    .subscribe({
//       //      next: (response) => {
//       //        const decodedToken: any = jwtDecode(response.token);
//       //        this.authService.setCurrentUser(decodedToken.user);
   
//       //        this.router.navigateByUrl('/');
//       //      },
//       //      error: (err) => {
//       //        console.error('Login error:', err);
//       //      }
//       //    });

//       //    navigate('/home');








//       ///////////////////////////////////////////////////////////
//       //Mij Jakyj pracuje    

//       // event.preventDefault();
//       // try {
//       //   const result = await login(userLogin, password);
//       //   console.log('Login successful:', result);

//       //   localStorage.setItem('token', result.token);

//       //   const users: UserType[] = JSON.parse(localStorage.getItem('users') || '[]');
//       //   const user = users.find((user: UserType) => user.login === userLogin);

//       //    if (user) {
//       //       localStorage.setItem('currentUser', JSON.stringify(user));
//       //    } else {
//       //       console.error('User not found');
//       //    }

//       //   navigate('/home');
//       // } catch (error) {
//       //   console.error('Login failed:', error);
//       // }

//    };








//    return (
//       <div className='login-page'>
//          <main className='common-card'>
//             <aside className='left-side'>
//                <h1>Welcome on MM!</h1>
//                <div className='list'>
//                   <h4>What can you do on MM?</h4>
//                   <ul>
//                      <li>Create and manage your projects.</li>
//                      <li>We offer an interactive graphical interface.</li>
//                      <li>Create projects and share with friends.</li>
//                   </ul>
//                </div>
//                <span>Do not you have an account?</span>
//                <Link to="register"><SingupBtnForLoginPage /></Link>
//             </aside>
//             <aside className='right-side'>
//                <h1>Log in</h1>
//                <form onSubmit={handleSubmit}>
//                   <input
//                      type="text"
//                      value={userLogin}
//                      onChange={(e) => setUserLogin(e.target.value)}
//                      placeholder="Login"
//                      required/>

//                   <input
//                      type="password"
//                      value={password}
//                      onChange={(e) => setPassword(e.target.value)}
//                      placeholder="Password"
//                      required/>

//                   <LogInBtnForLoginPage />
//                </form>
//             </aside>
//          </main>
//       </div>
//    );
// };

// export default Login;



////////////////////////////////////////////////////////////
//OLDER CODE

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
