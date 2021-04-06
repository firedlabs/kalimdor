import { Link } from 'react-router-dom'
import { FiredLabs } from '@firedlabs/design-system'
import { HeaderStyle } from './styles'
import Menu from 'containers/Menu'

function Header() {
  return (
    <HeaderStyle>
      <Link to="/">
        <FiredLabs />
      </Link>

      <Menu />
    </HeaderStyle>
  )
}

export default Header
