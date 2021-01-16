import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ReactGA from 'react-ga'
import CourseRegister from 'pages/EventRegister'
import Dashboard from 'pages/Dashboard'
import Player from 'pages/Player'
import Profile from 'pages/Profile'
import WithHeader from './WithHeader'

const Router = () => {
  ReactGA.initialize('UA-186693543-1')

  return (
    <BrowserRouter>
      <Switch>
        <WithHeader path="/" exact component={Dashboard} />
        <WithHeader path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/event/register" component={CourseRegister} />
        <Route path="/player" component={Player} />
        <Redirect from="/logout" to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
