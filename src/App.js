import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import LoginPage from './Components/LoginPage';
import CovidData from "./Components/CovidDataO";
import ResetPassword from './Components/ResetPassword';
import {connect} from 'react-redux';
import { LOGGED_IN_USER } from './reducers/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {auth} from './firebase';

const App = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      const idTokenResult = await user.getIdTokenResult()
      console.log("user: ", user);
      dispatch({
        type: LOGGED_IN_USER, payload: {
          email: user.email,
          token: idTokenResult.token
        }})
    }
    })

    return () => unsubscribe()
    }, [])

  return (
    <div> 
      <BrowserRouter> 
        <Switch> 
          <Route path="/" exact component={LoginPage} />
          <Route path="/covid" component={CovidData} />
          <Route path="/resetpassword" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}


const mapStateToProps = state => {
   return{
     isLoggedIn: state.isLoggedIn
  }
  
}

export default connect(mapStateToProps)(App);