import { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import UserService from 'services/UserService'
import Header from 'containers/Header'

function PrivateRouteAdmin({ component: Component, ...rest }) {
  const [isAuthorized, setIsAuthorized] = useState('loading')
  const screens = {
    loading: <FakeLoadingScreen active={isAuthorized === 'loading'} />,
    authorized: (
      <Route
        {...rest}
        render={(propsRoute) => (
          <>
            <Header />
            <Component {...propsRoute} />
          </>
        )}
      />
    ),
    noAuthorized: <Redirect to="/404" />
  }

  useEffect(
    () =>
      (async () => {
        try {
          await UserService.hasAuthorized()

          setIsAuthorized('authorized')
        } catch (err) {
          setIsAuthorized('noAuthorized')
        }
      })(),
    []
  )

  return screens[isAuthorized]
}

PrivateRouteAdmin.propTypes = {
  component: PropTypes.element.isRequired
}

export default PrivateRouteAdmin
