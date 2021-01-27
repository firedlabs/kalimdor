import { Container, Title } from '@firedlabs/design-system'
import FormUserTypes from 'containers/FormUserTypes'

function UserTypesNew() {
  return (
    <Container>
      <Title big center>
        Novo tipo de Usuário
      </Title>

      <FormUserTypes />
    </Container>
  )
}

export default UserTypesNew
