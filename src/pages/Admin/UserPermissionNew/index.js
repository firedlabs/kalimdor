import { Container, Title } from '@firedlabs/design-system'
import FormUserPermission from 'containers/FormUserPermission'

function UserPermissionNew() {
  return (
    <Container>
      <Title center big>
        Nova permissão
      </Title>

      <FormUserPermission />
    </Container>
  )
}

export default UserPermissionNew
