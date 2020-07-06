import React from 'react'
import '../css/index2.css'
import '../css/index.css'
import NavBar from '../componentes/Header'
import { Route, Switch, withRouter } from 'react-router-dom';
import Inicio from './../pages/Inicio'
import Login from './../Login'
import Registrar from './../pages/Registrar'
  
const Main = withRouter(({ location }) => {
  return (
    <>
      {
        location.pathname != '/login' && location.pathname!= '/registrar' && <NavBar />
      }
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/login" component={Login} />
        <Route path="/registrar" component={Registrar} />
      </Switch>
    </>
  )
});

export default Main;


