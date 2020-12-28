import { FiredLabs, Button } from '@firedlabs/design-system'
import HeaderStyle from './styles'

function Header() {
  return (
    <HeaderStyle>
      <FiredLabs />

      <Button small={true}>Signup/Login</Button>
    </HeaderStyle>
  )
}

export default Header
