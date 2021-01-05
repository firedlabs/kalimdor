import { useState, useEffect } from 'react'
import { FiredLabs, Button, ActionImage } from '@firedlabs/design-system'
import HeaderStyle from './styles'
import UserService from 'services/UserService'

function Header() {
  const [avatar, setAvatar] = useState(false)

  useEffect(() => {
    UserService.getAvatar().then(({ avatar: avatarData }) => {
      setAvatar(avatarData)
    })
  }, [])

  const isLogging = () => {
    if (avatar) {
      return <ActionImage src={avatar} isPadding={false} boxShadow="small" />
    }
    return <Button small={true}>Signup/Login</Button>
  }

  return (
    <HeaderStyle>
      <FiredLabs />

      {isLogging()}
    </HeaderStyle>
  )
}

export default Header
