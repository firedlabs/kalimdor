import PropTypes from 'prop-types'
import { Loading } from '@firedlabs/design-system'
import FakeLoadingScreenStyle from './styles'

function FakeLoadingScreen({ active }) {
  return (
    <FakeLoadingScreenStyle>
      <Loading active={active} />
    </FakeLoadingScreenStyle>
  )
}

FakeLoadingScreen.propTypes = {
  active: PropTypes.bool.isRequired
}

export default FakeLoadingScreen
