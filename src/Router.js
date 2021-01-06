import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactGA from 'react-ga'
import CourseRegister from './pages/EventRegister'
import Dashboard from 'pages/Dashboard'
import Player from 'pages/Player'

const Router = () => {
  ReactGA.initialize('UA-186693543-1')

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/event/register" component={CourseRegister} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/player" component={Player} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
