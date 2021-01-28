import {
  Heading,
  Icons,
  Section,
  Title,
  Countdown,
  Box,
  Button,
  ListContentDay,
  Container
} from '@firedlabs/design-system'
import { BannerContent, EventContent, Header, WrapperIcons } from './styles'
import thumb from 'assets/images/thumb.png'
import Sponsor from 'containers/Sponsor'
import Instructor from 'containers/Instructor'
import Footer from 'containers/Footer'
import Supporters from 'containers/Supporters'

function EventRegister() {
  const days = [
    {
      title: 'Aula 00',
      color: 'colorSecond',
      fontColor: 'colorThird',
      goal:
        'Entender como funcionarão as aulas, onde tirar as dúvidas e o que você precisa instalar na sua máquina.',
      options: [
        {
          label: 'Qtd. Videos',
          description: '7'
        },
        {
          label: 'Disponível após a',
          description: 'Matrícula'
        }
      ]
    },
    {
      title: 'Aula 01',
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
          label: 'Qtd. Videos',
          description: '20'
        },
        {
          label: 'Disponível em:',
          description: '08/02/2021'
        }
      ]
    },
    {
      title: 'Aula 02',
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
          label: 'Qtd. Videos',
          description: '16'
        },
        {
          label: 'Disponível em:',
          description: '09/02/2021'
        }
      ]
    },
    {
      title: 'Aula 03',
      color: 'colorSecond',
      fontColor: 'colorThird',
      goal:
        'Entender como posicionar os elementos e quando usar o seletor de class.',
      options: [
        {
          label: 'Qtd. Videos',
          description: '22'
        },
        {
          label: 'Disponível em:',
          description: '10/02/2021'
        }
      ]
    },
    {
      title: 'Aula 04',
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
          label: 'Qtd. Videos',
          description: '26'
        },
        {
          label: 'Disponível em:',
          description: '11/02/2021'
        }
      ]
    },
    {
      title: 'Aula 05',
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
          label: 'Qtd. Videos',
          description: '18'
        },
        {
          label: 'Disponível em:',
          description: '12/02/2021'
        }
      ]
    },
    {
      title: 'Aula 06',
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
          label: 'Qtd. Videos',
          description: '27'
        },
        {
          label: 'Disponível em:',
          description: '13/02/2021'
        }
      ]
    },
    {
      title: 'Aula 07',
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
          label: 'Qtd. Videos',
          description: '28'
        },
        {
          label: 'Disponível em:',
          description: '14/02/2021'
        }
      ]
    }
  ]
  const { REACT_APP_API } = process.env

  return (
    <>
      <Header>
        <Title>Matrícula acaba em...</Title>
        <Countdown paramLastDate="2021-2-7" />
      </Header>

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
          <Box
            src={thumb}
            alt="Matrículas abertas para o curso feliz de HTMl e CSS com o Marco Bruno"
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

      <Instructor />

      <EventContent
        biggest
        backgroundColor="colorBlackSecond"
        borderColor="colorThird"
      >
        <Container>
          <Heading medium>Conteúdo do curso</Heading>

          <Box light>
            Uma semana de aulas práticas, 100% grátis e 100% online. Começa no
            dia <strong>08/02/2021</strong>. As aulas serão liberadas às{' '}
            <strong>06:32</strong> da madrugada na plataforma{' '}
            <a href="https://www.firedlabs.com">FiredLabs</a> e terá plantão de
            dúvidas ao vivo às <strong>17:33</strong> na{' '}
            <a href="https://twitch.tv/marcobrunodev">
              twitch.tv/marcobrunodev
            </a>{' '}
            em todos os dias durante a semana do curso. As aulas ficam
            disponiveis até o dia 14/02/2021 às 23:59.
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
