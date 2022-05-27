import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../pages/Login'

export const Routers = () => (
  <Switch>
    <Route exact path='/' component={Login}></Route>
  </Switch>
)
