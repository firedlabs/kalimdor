import { Title, FloatingButton } from '@firedlabs/design-system'
import { Link } from 'react-router-dom'

function UserPermission() {
  return (
    <>
      <Title center big>
        Permissões
      </Title>
      <FloatingButton as={Link} to="/admin/user/permission/new">
        +
      </FloatingButton>
    </>
  )
}

export default UserPermission
