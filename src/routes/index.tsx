import React from 'react'
import { Switch } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { Route } from './Route'
import { SignUp } from '../pages/SignUp'

export const Routers = () => (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route exact path='/signup' component={SignUp} />
    <Route exact path='/dashboard' component={Dashboard} isPrivate />

  </Switch>
);
