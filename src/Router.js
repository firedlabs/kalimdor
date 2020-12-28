import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CourseRegister from './pages/CourseRegister'
import Home from 'pages/Home'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/course/register" component={CourseRegister} />
    </Switch>
  </BrowserRouter>
)

export default Router
