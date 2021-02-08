import { Container, Title } from '@firedlabs/design-system'
import FormModule from 'containers/FormModule'

function ModuleNew() {
  return (
    <Container>
      <Title center big>
        Novo módulo
      </Title>

      <FormModule />
    </Container>
  )
}

export default ModuleNew
