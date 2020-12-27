import { Heading, ListActionImage } from '@firedlabs/design-system'
import diolinux from 'assets/images/diolinux.png'
import negros from 'assets/images/negros.png'
import SupportersStyle from './styles'

function Supporters() {
  const items = [
    {
      src: diolinux,
      alt: 'Logo do Diolinux',
      href: 'https://www.youtube.com/diolinux',
      isPadding: false
    },
    {
      src: negros,
      alt: 'Logo da NegrosDev',
      href: 'https://negros.dev',
      backgroundColor: 'colorSecond'
    }
  ]

  return (
    <SupportersStyle borderColor="colorBlack">
      <Heading>Apoiadores</Heading>

      <ListActionImage items={items} />
    </SupportersStyle>
  )
}

export default Supporters
