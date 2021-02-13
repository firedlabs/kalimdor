import { Title, Table, FloatingButton } from '@firedlabs/design-system'
import ModalError from 'containers/ModalError'
import { Link } from 'react-router-dom'
import useUserPermission from './useUserPermission'

function UserPermission() {
  const {
    data,
    columns,
    activeModalError,
    actionCloseModalError
  } = useUserPermission()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />
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
