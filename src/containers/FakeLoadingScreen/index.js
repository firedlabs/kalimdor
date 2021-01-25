import PropTypes from 'prop-types'
import { Loading } from '@firedlabs/design-system'
import FakeLoadingScreenStyle from './styles'

function FakeLoadingScreen({ active, noPage }) {
  return (
    <FakeLoadingScreenStyle active={active} noPage={noPage}>
      <Loading active={active} />
    </FakeLoadingScreenStyle>
  )
}

FakeLoadingScreen.defaultProps = {
  noPage: false
}

FakeLoadingScreen.propTypes = {
  active: PropTypes.bool.isRequired,
  noPage: PropTypes.bool
}

export default FakeLoadingScreen
