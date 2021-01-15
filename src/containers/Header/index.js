import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FiredLabs, Button, ActionImage } from '@firedlabs/design-system'
import UserService from 'services/UserService'
import HeaderStyle from './styles'

function Header() {
  const [avatar, setAvatar] = useState('')
  const { REACT_APP_API } = process.env

  useEffect(
    () =>
      (async () => {
        try {
          const res = await UserService.getAvatar()
          setAvatar(res.data)
        } catch (err) {
          setAvatar('')
        }
      })(),
    []
  )

  const hasAvatar = () => {
    if (avatar) {
      return (
        <ActionImage
          as={Link}
          to="/profile"
          src={avatar.src}
          alt={avatar.alt}
        />
      )
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
