import React, {useState} from 'react';
import './LoginPage.css';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {auth} from "../firebase";
import {useDispatch, useSelector} from 'react-redux';
import {LOGGED_IN_USER} from "../reducers/actions";



const LoginPage = ({history}) => {
    const dispatch = useDispatch();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     setEmail(window.localStorage.getItem("registrationEmail"))
    // }, []);

    const submitHandler = async (e) => {
        e.preventDefault();       
        setIsLoading(true);

            try{
                const result = await auth.signInWithEmailLinkAndPassword(email, password)
                const {user} = result;
                const idTokenResult = await user.getIdTokenResult();
                dispatch({
                    type: LOGGED_IN_USER,
                    payload: {
                        email: user.email,
                        token: idTokenResult.token,
                    },
                })
                history.push("/");
            } catch (error) {
                console.log(error.message);
                setIsLoading(false);
            }
    };

        return (
            <div className="main">
              <div className="container">
                  <div id="square">
                      <div className="left">
                          <h1>Login</h1>
                          <form onchange={submitHandler}>
                              <input 
                              type="email" 
                              name="email" 
                              id="email" 
                              placeholder="Email" 
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              />
                              <input 
                              type="password" 
                              name="password" 
                              id="password" 
                              placeholder="Password" 
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              />
                              <Link to= "/covid"><button type="submit">Submit</button></Link>
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