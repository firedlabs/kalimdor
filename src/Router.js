import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Registration from './pages/Registration'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/registration" component={Registration} />
    </Switch>
  </BrowserRouter>
)

export default Router
