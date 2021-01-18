import { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import UserService from 'services/UserService'

function PrivateRoute({ component: Component, ...rest }) {
  const [isAuthorized, setIsAuthorized] = useState('loading')
  const screens = {
    loading: <FakeLoadingScreen active={isAuthorized === 'loading'} />,
    authorized: (
      <Route {...rest} render={(propsRoute) => <Component {...propsRoute} />} />
    ),
    noAuthorized: <Redirect to="/404" />
  }

  useEffect(
    () =>
      (async () => {
        try {
          await UserService.validateTwitch()
          await UserService.hasFollowStreamer('marcobruodev')

          setIsAuthorized('authorized')
        } catch (err) {
          setIsAuthorized('noAuthorized')
        }
      })(),
    []
  )

  return screens[isAuthorized]
}

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired
}

export default PrivateRoute
