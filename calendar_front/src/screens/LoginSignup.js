import React, { useState } from 'react';
import './LoginSignup.css'; // CSS 파일을 import
import Login from '../components/Login';
import Signup from '../components/Signup';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

const LoginSignup = () => {
  const [isSignupActive, setIsSignupActive] = useState(false);

  const handleClick = () => {
    setIsSignupActive(!isSignupActive);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isSignupActive ? <Signup /> : <Login />}
      </button>
    </div>
  );
};

//   const handleSignupClick = () => {
//     setIsSignupActive(true);
//   };

//   const handleSigninClick = () => {
//     setIsSignupActive(false);
//   };

//   return (
//     <div className={`wrapper ${isSignupActive ? 'right-panel-active' : ''}`}>
//       <div className="container">
//         <div className={`sign-up-container ${isSignupActive ? 'active' : ''}`}>
//           <Signup />
//         </div>
//         <div className={`sign-in-container ${!isSignupActive ? 'active' : ''}`}>
//           <Login />
//         </div>
//         <div className="overlay-container">
//           <div className={`overlay-left ${!isSignupActive ? 'active' : ''}`}>
//             <h1>Welcome Back</h1>
//             <p>
//               To keep connected with us please login with your personal info
//             </p>
//             <button
//               id="signIn"
//               className="overlay_btn"
//               onClick={handleSigninClick}
//             >
//               Sign In
//             </button>
//           </div>
//           <div className={`overlay-right ${isSignupActive ? 'active' : ''}`}>
//             <h1>Hello, Friend</h1>
//             <p>Enter your personal details and start journey with us</p>
//             <button
//               id="signUp"
//               className="overlay_btn"
//               onClick={handleSignupClick}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default LoginSignup;
