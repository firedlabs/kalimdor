import { Container, Title } from '@firedlabs/design-system'
import FormUserTypes from 'containers/FormUserTypes'

function UserTypesEdit() {
  return (
    <Container>
      <Title center big>
        Editar tipo de usuário
      </Title>

      <FormUserTypes />
    </Container>
  )
}

export default UserTypesEdit
