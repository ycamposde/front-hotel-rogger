import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Home from '././scenes/Full/projects/Home/Home';
import Private from '././scenes/Private';
import Login from '././scenes/Login/Login';
import Register from '././scenes/Register/Register';
import NotFound from '././scenes/NotFound/NotFound';
import Inicio from '././scenes/page/scenes/Inicio';

const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Private}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/inicio" component={ Inicio }/>
          <Route path="*" component={NotFound}/>
          
      </Switch>
  </BrowserRouter>
);

export default Routes;
