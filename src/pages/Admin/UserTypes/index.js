import { Title, FloatingButton } from '@firedlabs/design-system'
import { Link } from 'react-router-dom'

function UserTypes() {
  return (
    <>
      <Title big center>
        Tipos de usuários
      </Title>

      <FloatingButton as={Link} to="/admin/user/types/new">
        +
      </FloatingButton>
    </>
  )
}

export default UserTypes
