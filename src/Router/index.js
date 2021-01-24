import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ReactGA from 'react-ga'
import CourseRegister from 'pages/EventRegister'
import Dashboard from 'pages/Dashboard'
import Player from 'pages/Player'
import Profile from 'pages/Profile'
import WithHeader from './WithHeader'
import PrivateRoute from './PrivateRoute'
import NotFound from 'pages/NotFound'
import Admin from 'pages/Admin'
import User from 'pages/Admin/User'

const Router = () => {
  ReactGA.initialize('UA-186693543-1')

  return (
    <BrowserRouter>
      <Switch>
        <WithHeader path="/" exact component={Dashboard} />
        <WithHeader path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/event/register" component={CourseRegister} />
        <PrivateRoute path="/player" component={Player} />
        <WithHeader path="/admin" exact component={Admin} />
        <WithHeader path="/admin/user" component={User} />
        <Redirect from="/logout" to="/" />

        <Route path="/404" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
