import { Title, Table, FloatingButton } from '@firedlabs/design-system'
import ModalError from 'containers/ModalError'
import { Link } from 'react-router-dom'
import useModule from './useModule'

function Module() {
  const { columns, data, activeModalError, actionCloseModalError } = useModule()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <Title center big>
        Todos os Módulos
      </Title>

      <Table columns={columns} data={data} />

      <FloatingButton as={Link} to="/studio/module/new">
        +
      </FloatingButton>
    </>
  )
}

export default Module
