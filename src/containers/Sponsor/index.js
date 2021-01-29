import { Heading, ActionImage } from '@firedlabs/design-system'
import { SponsorStyles } from './styles'
import alura from 'assets/images/alura.png'

function Sponsor() {
  return (
    <SponsorStyles big>
      <Heading medium>Patrocinadores</Heading>

      <ActionImage
        href="https://www.alura.com.br/promocao/marcobrunodev"
        src={alura}
        target="_blank"
        alt="Logo da Alura"
        size="medium"
        isPadding={false}
      />
    </SponsorStyles>
  )
}

export default Sponsor
