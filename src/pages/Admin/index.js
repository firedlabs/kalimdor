import { Link } from 'react-router-dom'
import { ActionCard } from '@firedlabs/design-system'
import { Actions } from './styles'

function Admin() {
  return (
    <Actions>
      <ActionCard as={Link} to="/admin/user">
        Usuários
      </ActionCard>

      <ActionCard as={Link} to="/admin/user/types">
        Tipos de Usuário
      </ActionCard>
    </Actions>
  )
}

export default Admin
