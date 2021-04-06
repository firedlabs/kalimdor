import { Button, ActionImage } from '@firedlabs/design-system'
import { Link } from 'react-router-dom'
import { MenuStyle, Navigation, Action } from './styles'
import useMenu from './useMenu'

function Menu() {
  const {
    REACT_APP_API,
    loading,
    signupAndLogin,
    avatar,
    admin,
    loadingMenu
  } = useMenu()

  const buttonOrAvatar = () =>
    avatar ? (
      <ActionImage
        as={Link}
        to="/profile"
        src={avatar.src}
        alt={avatar.alt}
        boxShadow="small"
        isPadding={false}
      />
    ) : (
      <Button
        loading={loading}
        onClick={signupAndLogin}
        small
        as="a"
        href={`${REACT_APP_API}/api/auth/twitch/`}
      >
        Signup/Login
      </Button>
    )

  const showLoadingMenu = () =>
    loadingMenu && (
      <Navigation loading={loadingMenu}>
        <Action>loading...</Action>
        <Action>loading...</Action>
      </Navigation>
    )

  const showMenuAdmin = () =>
    admin && (
      <Navigation>
        <Action to="/admin">Admin</Action>
        <Action to="/studio">Studio</Action>
      </Navigation>
    )

  return (
    <MenuStyle>
      {showLoadingMenu()}
      {showMenuAdmin()}
      {buttonOrAvatar()}
    </MenuStyle>
  )
}

export default Menu
