import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CourseRegister from './pages/EventRegister'
import Dashboard from 'pages/Dashboard'
import Player from 'pages/Player'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Player} />
      <Route path="/event/register" component={CourseRegister} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/player" component={Player} />
    </Switch>
  </BrowserRouter>
)

export default Router
