import { Title, Container } from '@firedlabs/design-system'
import FormVideo from 'containers/FormVideo'

function NewVideo() {
  return (
    <Container>
      <Title center big>
        Novo vídeo
      </Title>

      <FormVideo />
    </Container>
  )
}

export default NewVideo
