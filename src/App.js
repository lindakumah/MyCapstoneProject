import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginPage from './Components/LoginPage';
import CovidData from "./Components/CovidDataO";
import ResetPassword from './Components/ResetPassword';
import {connect} from 'react-redux';

const App = () => {

 
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