import {
  Heading,
  Icons,
  Section,
  Box,
  Button,
  ListContentDay,
  Container,
  VideoPlayer
} from '@firedlabs/design-system'
import { BannerContent, EventContent, WrapperIcons } from './styles'
import Sponsor from 'containers/Sponsor'
import Instructor from 'containers/Instructor'
import Footer from 'containers/Footer'
import Supporters from 'containers/Supporters'
import marcobruno from 'assets/images/marcobruno.png'

function EventRegister() {
  const instructor = {
    avatar: marcobruno,
    socialMedias: [
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
        url: 'https://youtube.com/marcobrunodev'
      }
    ],
    bio: `Hoje, instrutor e desenvolvedor FrontEnd/UX pela CollabCode, Marco já
    trabalhou nas mais diversas áreas. Foi palhaço, entrou na área de TI
    como desenvolvedor HMI/PLC e gosta de ir descobrindo seu caminho
    conforme o percorre. Marco também tem uma crescente presença em
    comunidades de UX e Front-end, trabalhando para uní-las, palestra em
    empresas e eventos como o WebBR, escreve em diversos blogs como o da
    Caelum, o Pinceladas da Web e seu Medium, quando não está jogando
    Airsoft ou trocando ideias com amigos.`
  }

  const days = [
    {
      title: 'Módulo 00',
      color: 'colorSecond',
      fontColor: 'colorThird',
      goal:
        'Entender como funcionarão as aulas, onde tirar as dúvidas e o que você precisa instalar na sua máquina.',
      options: [
        {
          label: 'Qtd. Aulas',
          description: '7'
        }
      ]
    },
    {
      title: 'Módulo 01',
      color: 'colorSecond',
      fontColor: 'colorThird',
      goal: (
        <>
          Aprender o básico de <strong>HTML</strong> e <strong>CSS</strong>
          ,criando o cabeçalho. Mostro o layout no <a href="#video">
            vídeo
          </a>{' '}
          que está no top da página.
        </>
      ),
      options: [
        {
          label: 'Qtd. Aulas',
          description: '20'
        }
      ]
    },
    {
      title: 'Módulo 02',
      color: 'colorSecond',
      fontColor: 'colorThird',
      goal: (
        <>
          Entender o básico de <strong>Git</strong> e <strong>GitHub</strong>{' '}
          além de já colocar o site no ar para você mandar no whats da família.
        </>
      ),
      options: [
        {
          label: 'Qtd. Aulas',
          description: '16'
        }
      ]
    },
    {
      title: 'Módulo 03',
      color: 'colorSecond',
      fontColor: 'colorThird',
      goal:
        'Entender como posicionar os elementos e quando usar o seletor de class.',
      options: [
        {
          label: 'Qtd. Aulas',
          description: '22'
        }
      ]
    },
    {
      title: 'Módulo 04',
      color: 'colorSecond',
      fontColor: 'colorThird',
      goal: (
        <>
          Aprofundar o conhecimento em <strong>FlexBox</strong> trabalhando na
          seção de Skills.
        </>
      ),
      options: [
        {
          label: 'Qtd. Aulas',
          description: '26'
        }
      ]
    },
    {
      title: 'Módulo 05',
      color: 'colorSecond',
      fontColor: 'colorThird',
      goal: (
        <>
          Estudar ainda mais sobre animações com <strong>CSS</strong> e entregar
          a seção Projetos.
        </>
      ),
      options: [
        {
          label: 'Qtd. Aulas',
          description: '18'
        }
      ]
    },
    {
      title: 'Módulo 06',
      color: 'colorSecond',
      fontColor: 'colorThird',
      goal: (
        <>
          Criar a seção Sobre e aprender um pouco sobre{' '}
          <strong>JavaScript</strong>, será apenas uma introdução para um curso
          do futuro feliz.
        </>
      ),
      options: [
        {
          label: 'Qtd. Aulas',
          description: '27'
        }
      ]
    },
    {
      title: 'Módulo 07',
      color: 'colorSecond',
      fontColor: 'colorThird',
      goal: (
        <>
          Lidar com o formulário de contato e validações do{' '}
          <strong>HTML5</strong>, além de finalizar a página com o rodapé.
        </>
      ),
      options: [
        {
          label: 'Qtd. Aulas',
          description: '28'
        }
      ]
    }
  ]
  const { REACT_APP_API } = process.env

  return (
    <>
      <Section
        id="video"
        biggest
        backgroundColor="colorBlackThird"
        borderColor="colorThird"
      >
        <BannerContent>
          <Heading>
            Curso Feliz de <br />
            HTML e CSS
          </Heading>
          <WrapperIcons>
            <Icons name="html" />
            <Icons name="css" />
          </WrapperIcons>
          <VideoPlayer
            box={true}
            sources={{
              src:
                'https://player.vimeo.com/external/535897255.hd.mp4?s=1afb4760ac9656e314b4fc26e65f50cfbb401e9c&profile_id=175',
              type: 'video/mp4'
            }}
            poster="https://i.vimeocdn.com/video/1111140531.jpg"
          />
          <Button
            as="a"
            href={`${REACT_APP_API}/api/auth/twitch/`}
            backgroundColor="colorSecond"
            color="colorThird"
          >
            Matrícula via Twitch
          </Button>
        </BannerContent>
      </Section>

      <Instructor data={instructor} />

      <EventContent
        biggest
        backgroundColor="colorBlackSecond"
        borderColor="colorThird"
      >
        <Container>
          <Heading medium>Conteúdo do curso</Heading>

          <Box light>
            Conteúdo feliz de graça e online com 7 módulos para você começar a
            dar seu primeiros passos com <strong>HTML</strong>,{' '}
            <strong>CSS</strong> e uma introdução a <strong>Git/GitHub</strong>.
            Nesse curso criamos um portfolio do zero e colocamos ele no ar
            usando <strong>GitHub Pages</strong>. Qualquer dúvida que tiver,
            entre no{' '}
            <a
              href="https://discord.gg/FP5UaAG"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>{' '}
            ou na{' '}
            <a
              href="https://twitch.tv/marcobrunodev"
              target="_blank"
              rel="noreferrer"
            >
              twitch.tv/marcobrunodev
            </a>
          </Box>

          <ListContentDay days={days} />
        </Container>
      </EventContent>

      <Sponsor />

      <Supporters />

      <Footer />
    </>
  )
}

export default EventRegister
