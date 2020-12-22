import {
  Section,
  Heading,
  Profile,
  Description
} from '@firedlabs/design-system'
import Content from './styles'
import marcobruno from 'assets/images/marcobruno.png'

function Instructor() {
  return (
    <Section backgroundColor="colorBlackFirst" big borderColor="colorFirst">
      <Heading big>Instrutor</Heading>
      <Content>
        <Profile
          avatar={marcobruno}
          name="Marco Bruno"
          socialMedias={[
            {
              name: 'twitter',
              url: 'https://twitter.com/marcobrunodev'
            },
            {
              name: 'twitch',
              url: 'https://twitch.tv/marcobrunodev'
            },
            {
              name: 'youtube',
              url: 'https://youtube.com/collabcode'
            }
          ]}
        />

        <Description>
          Hoje, instrutor e desenvolvedor FrontEnd/UX pela CollabCode, Marco já
          trabalhou nas mais diversas áreas. Foi palhaço, entrou na área de TI
          como desenvolvedor HMI/PLC e gosta de ir descobrindo seu caminho
          conforme o percorre. Marco também tem uma crescente presença em
          comunidades de UX e Front-end, trabalhando para uní-las, palestra em
          empresas e eventos como o WebBR, escreve em diversos blogs como o da
          Caelum, o Pinceladas da Web e seu Medium, quando não está jogando
          Airsoft ou trocando ideias com amigos.
        </Description>
      </Content>
    </Section>
  )
}

export default Instructor
