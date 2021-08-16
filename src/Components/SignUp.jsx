// import React, {useEffect, useState} from 'react';
// import './LoginPage.css';
// import {Link} from "react-router-dom"
// import {auth} from "../firebase";
// import { useSelector } from 'react-redux';
// import { toSafeInteger } from 'lodash';

// const SignUp = ({history}) => {

//     const [email, setEmail] = useState("");

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const config = {
//             url: "http://localhost:3000/signup/complete",
//             handleCodeInApp: true, }
//             if (!email) {
//                 alert("Email is required!");
//                 return;
//             }
//             await auth.sendSignInLinkToEmail(email, config);
//             alert("Please complete your registration in your email")
        
//             window.localStorage.setItem('registrationEmail', email);
        
//             setEmail('');
//     };

//     return (
//       <div className="main">
//           <div className="container">
//               <div id="square">
//                   <div className="right">
//                       <h1>Reset Password</h1>
//                       <form onSubmit = {submitHandler}>
//                           <input 
//                           type="email" 
//                           name="email" 
//                           id="email" 
//                           placeholder="Email" 
//                           value={email} 
//                           onChange={(e)=> setEmail(e.target.value)} 
//                           required
//                           />
//                           <button type="submit">Submit</button>
//                       </form>
//                   </div>
//               </div>
//           </div>
//       </div>
//     )
// }

// export default SignUp;