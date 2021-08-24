import React from 'react';
import './LoginPage.css';
import {Link} from "react-router-dom";



const LoginPage = () => {
          return (
            <div className="main">
              <div className="container">
                  <div id="square">
                      <div className="left">
                          <h1>Login to continue</h1>
                          <form>
                              <input 
                              type="email" 
                              name="email" 
                              id="email" 
                              placeholder="Email" 
                              required
                             
                              />
                              <input 
                              type="password" 
                              name="password" 
                              id="password" 
                              placeholder="Password" 
                              required
                             
                              />
                              <Link to="/covid"><button type="submit">Log in</button></Link>
                          </form>
                      </div>
                  </div>
      
                    <div className="actions">
                        <Link to="/resetpassword">Forgotten Password?</Link>
                    </div>
      
              </div>
            </div>
          )
      }
    

export default LoginPage;