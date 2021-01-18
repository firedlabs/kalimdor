import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FiredLabs } from '@firedlabs/design-system'
import HeaderStyle from './styles'
import useHeader from './useHeader'

function Header() {
  const { hasAvatar } = useHeader()

  return (
    <HeaderStyle>
      <Link to="/">
        <FiredLabs />
      </Link>

      {hasAvatar()}
    </HeaderStyle>
  )
}

Header.defaultProps = {
  avatar: ''
}

Header.propTypes = {
  avatar: PropTypes.string
}

export default Header
