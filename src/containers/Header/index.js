import PropTypes from 'prop-types'
import { FiredLabs, Button, ActionImage } from '@firedlabs/design-system'
import HeaderStyle from './styles'

function Header({ avatar }) {
  const { REACT_APP_API } = process.env

  const hasAvatar = () => {
    if (avatar) {
      return <ActionImage src={avatar.src} alt={avatar.alt} />
    }

    return (
      <Button small as="a" href={`${REACT_APP_API}/api/auth/twitch/`}>
        Signup/Login
      </Button>
    )
  }

  return (
    <HeaderStyle>
      <FiredLabs />

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
