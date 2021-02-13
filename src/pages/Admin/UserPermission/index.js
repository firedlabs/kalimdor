import { Title, Table, FloatingButton } from '@firedlabs/design-system'
import { Link } from 'react-router-dom'
import useUserPermission from './useUserPermission'

function UserPermission() {
  const { data, columns } = useUserPermission()

  return (
    <>
      <Title center big>
        Permissões
      </Title>

      <Table columns={columns} data={data} />

      <FloatingButton as={Link} to="/admin/user/permission/new">
        +
      </FloatingButton>
    </>
  )
}

export default UserPermission
