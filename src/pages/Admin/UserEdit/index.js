import { Title, Container } from '@firedlabs/design-system'
import FormUserEdit from 'containers/FormUserEdit'

function UserEdit() {
  return (
    <Container>
      <Title big center>
        Editar usuário
      </Title>

      <FormUserEdit />
    </Container>
  )
}

export default UserEdit
