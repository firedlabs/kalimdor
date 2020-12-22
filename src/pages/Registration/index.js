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
import { BannerContent, CourseContent, Header, WrapperIcons } from './styles'
import thumb from 'assets/images/thumb.png'
import Sponsor from 'containers/Sponsor'
import Instructor from 'containers/Instructor'
import Footer from 'containers/Footer'

function Registration() {
  const days = [
    {
      title: 'Aula 00',
      goal:
        'Entender como funcionarão as aulas, onde tirar as dúvidas e o que você precisa instalar na sua máquina.',
      options: [
        {
          label: 'Qtd. Videos',
          description: '7'
        },
        {
          label: 'Liberar Acesso',
          description: 'Matrícula'
        }
      ]
    },
    {
      title: 'Aula 01',
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
          label: 'Liberar Acesso',
          description: '08/02/2021'
        }
      ]
    },
    {
      title: 'Aula 02',
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
          label: 'Liberar Acesso',
          description: '09/02/2021'
        }
      ]
    },
    {
      title: 'Aula 03',
      goal:
        'Entender como posicionar os elementos e quando usar o seletor de class.',
      options: [
        {
          label: 'Qtd. Videos',
          description: '22'
        },
        {
          label: 'Liberar Acesso',
          description: '10/02/2021'
        }
      ]
    },
    {
      title: 'Aula 04',
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
          label: 'Liberar Acesso',
          description: '11/02/2021'
        }
      ]
    },
    {
      title: 'Aula 05',
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
          label: 'Liberar Acesso',
          description: '12/02/2021'
        }
      ]
    },
    {
      title: 'Aula 06',
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
          label: 'Liberar Acesso',
          description: '13/02/2021'
        }
      ]
    },
    {
      title: 'Aula 07',
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
          label: 'Liberar Acesso',
          description: '14/02/2021'
        }
      ]
    }
  ]

  return (
    <>
      <Header>
        <Title>Matrícula acaba em...</Title>
        <Countdown paramLastDate="2021-2-7" />
      </Header>

      <Section
        id="video"
        biggest
        backgroundColor="colorSecond"
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
          <Button>Matrícula 100% free</Button>
        </BannerContent>
      </Section>

      <Sponsor />

      <Instructor />

      <CourseContent
        biggest
        backgroundColor="colorBlackSecond"
        borderColor="colorWarning"
      >
        <Container>
          <Heading medium>Conteúdo do curso</Heading>

          <Box light>
            Será uma semana de conteúdo com uma aula nova todos os dias,
            começando no dia <strong>08/02/2021</strong>. As aula serão
            liberadas às <strong>06:32</strong> da madrugada na FiredLabs e terá
            plantão de dúvidas ao vivo às <strong>17:33</strong> na{' '}
            <a href="https://twitch.tv/marcobrunodev">
              twitch.tv/marcobrunodev
            </a>{' '}
            todos os dias durante a semana do curso.
          </Box>

          <ListContentDay days={days} />
        </Container>
      </CourseContent>

      <Footer />
    </>
  )
}

export default Registration
