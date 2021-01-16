import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from 'containers/Header'

function WithHeader({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(propsRoute) => (
        <>
          <Header />
          <Component {...propsRoute} />{' '}
        </>
      )}
    />
  )
}

WithHeader.propTypes = {
  component: PropTypes.element.isRequired
}

export default WithHeader
