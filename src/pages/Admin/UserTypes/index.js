import { Title, FloatingButton, Table } from '@firedlabs/design-system'
import ModalError from 'containers/ModalError'
import { Link } from 'react-router-dom'
import useUserTypes from './useUserTypes'

function UserTypes() {
  const {
    columns,
    data,
    activeModalError,
    actionCloseModalError
  } = useUserTypes()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <Title big center>
        Tipos de usuários
      </Title>

      <Table columns={columns} data={data} />

      <FloatingButton as={Link} to="/admin/user/types/new">
        +
      </FloatingButton>
    </>
  )
}

export default UserTypes
