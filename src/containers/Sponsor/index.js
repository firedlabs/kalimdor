import { Heading, ActionImage } from '@firedlabs/design-system'
import { SponsorStyles } from './styles'
import alura from 'assets/images/alura.png'

function Sponsor() {
  return (
    <SponsorStyles big>
      <Heading medium>Apoiadores</Heading>

      <ActionImage
        href="https://www.alura.com.br/promocao/marcobrunodev"
        src={alura}
        alt="Logo da Alura"
      />
    </SponsorStyles>
  )
}

export default Sponsor
