import React from 'react';
import './LoginPage.css';
import {Link} from "react-router-dom"

const ResetPassword = () => {
    return (
      <div className="main">
          <div className="container">
              <div id="square">
                  <div className="right">
                      <h1>Reset Password</h1>
                      <form>
                          <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          placeholder="Email"
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