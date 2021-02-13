import { Link } from 'react-router-dom'
import { ActionCard } from '@firedlabs/design-system'
import Actions from 'containers/Actions'

function Admin() {
  return (
    <Actions>
      <ActionCard as={Link} to="/admin/user">
        Usuários
      </ActionCard>

      <ActionCard as={Link} to="/admin/user/types">
        Tipos de Usuário
      </ActionCard>

      <ActionCard as={Link} to="/admin/user/permission">
        Permissões de Usuário
      </ActionCard>
    </Actions>
  )
}

export default Admin
