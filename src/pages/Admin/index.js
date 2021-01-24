import { Link } from 'react-router-dom'
import { Container, ActionCard } from '@firedlabs/design-system'

function Admin() {
  return (
    <Container>
      <ActionCard as={Link} to="/admin/user">
        Usuários
      </ActionCard>
    </Container>
  )
}

export default Admin
