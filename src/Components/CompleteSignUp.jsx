// import React, {useEffect, useState} from 'react';
// import './LoginPage.css';
// import {Link} from "react-router-dom"
// import {auth} from "../firebase";

// const CompleteSignUp = ({history}) => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     useEffect(() => {
//         setEmail(window.localStorage.getItem("registrationEmail"))
//     }, []);

//     const submitHandler = async (e) => {
//         e.preventDefault();       
//             if (!email || !password) {
//                 alert("Please enter Email and Password!");
//                 return;
//             }

//             try{
//                 const result = await auth.signInWithEmailLink(
//                     email,
//                     window.location.href
//                 );
//                 console.log(result);
//                 if(result.user.emailVerified) {
//                     window.localStorage.removeItem("registrationEmail");
//                     let user = auth.currentUser;
//                     await user.updatePassword(password);
//                     const idTokenResult = await user.getIdTokenResult();
//                     history.push("/");
//                 }
//             } catch (error) {
//                 console.log(error);
//                 alert(error.message);
//             }
//     };

//     return (
//       <div className="main">
//           <div className="container">
//               <div id="square">
//                   <div className="right">
//                       <h1>Reset Password</h1>
//                       <form onSubmit={submitHandler}>
//                           <input type="email" name="email" id="email" placeholder="Email" required/>
//                           <input type="password" name="password" id="password" placeholder="Password" required/>
//                           <button type="submit">Submit</button>
//                       </form>
//                   </div>
//               </div>
//           </div>
//       </div>
//     )
// }

// export default CompleteSignUp;