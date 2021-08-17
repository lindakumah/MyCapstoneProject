import React, {useState} from 'react';
import './LoginPage.css';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";
import {auth} from '../firebase';

const ResetPassword = ({history}) => {

    const[email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const config = {
            url: "http://localhost:3000/login",
            handleCodeInApp: true,
        };

    await auth.sendPasswordResetEmail(email, config).then(() => {
        setEmail("")
        setIsLoading(false)
        alert('Please check your email to continue')
    }).catch((error) => {
        setIsLoading(false)
        alert(error.message)
    })
};

    return (
      <div className="main">
          <div className="container">
              <div id="square">
                  <div className="right">
                      <h1>Reset Password</h1>
                      <form onSubmit={submitHandler}>
                          <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} 
                          required
                          />
                          <Link to="/covid"><button type="submit">Submit</button></Link>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default ResetPassword;