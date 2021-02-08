import { Title, Table } from '@firedlabs/design-system'
import ModalError from 'containers/ModalError'
import useUser from './useUser'

function User() {
  const {
    columns,
    data,
    activeModalError,
    actionCloseModalError,
    amount
  } = useUser()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />
      <Title big center>
        Usuários {amount}
      </Title>

      <Table columns={columns} data={data} />
    </>
  )
}

export default User
