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
import UserEdit from 'pages/Admin/UserEdit'
import UserTypes from 'pages/Admin/UserTypes'
import UserTypesNew from 'pages/Admin/UserTypesNew'
import PrivateRouteAdmin from './PrivavateRouteAdmin'
import Logout from 'pages/Logout'
import Studio from 'pages/Studio'
import NewVideo from 'pages/Studio/NewVideo'
import Video from 'pages/Studio/Video'

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
        <PrivateRouteAdmin path="/admin" exact component={Admin} />
        <PrivateRouteAdmin path="/admin/user" exact component={User} />
        <PrivateRouteAdmin
          path="/admin/user/types"
          exact
          component={UserTypes}
        />
        <PrivateRouteAdmin
          path="/admin/user/types/new"
          component={UserTypesNew}
        />
        <PrivateRouteAdmin path="/admin/user/:login" component={UserEdit} />

        <PrivateRouteAdmin path="/studio" exact component={Studio} />
        <PrivateRouteAdmin path="/studio/video" exact component={Video} />
        <PrivateRouteAdmin path="/studio/video/new" component={NewVideo} />

        <Route path="/logout" component={Logout} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
