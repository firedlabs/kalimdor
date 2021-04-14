import {
  Heading,
  Icons,
  Section,
  Title,
  Countdown,
  Box,
  Button,
  ListContentDay,
  Container,
  VideoPlayer
} from '@firedlabs/design-system'
import { BannerContent, EventContent, Header, WrapperIcons } from './styles'
import Sponsor from 'containers/Sponsor'
import Instructor from 'containers/Instructor'
import Footer from 'containers/Footer'
import Supporters from 'containers/Supporters'
import marcobruno from 'assets/images/marcobruno.png'

function MobileFirst() {
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

  const course = {
    start: '2021-5-10',
    title: 'Curso feliz de Mobile First',
    goal: (
      <>
        São 25 dias de muito conteúdo feliz pra você sobre{' '}
        <strong>carreira</strong>, <strong>Mobile First</strong>,{' '}
        <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>{' '}
        e <strong>Git/GitHub</strong>, tudo de graça e online. São 23 módulos e
        2 entrevistas com pessoas que trabalham como FrontEnd dentro e fora do
        Brasil. É liberado um módulo por dia às <strong>08:32</strong>,
        começando pelo dia <strong>10/05</strong> e terminamos o curso no dia{' '}
        <strong>01/06</strong>. Se tiver qualquer dúvida entre no{' '}
        <a href="https://discord.gg/FP5UaAG" target="_blank" rel="noreferrer">
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
      </>
    ),
    modules: [
      {
        title: 'Módulo 00',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Entender como funcionarão as aulas, onde tirar as dúvidas e o que você precisa instalar na sua máquina.',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível após a',
            description: 'Matrícula'
          }
        ]
      },
      {
        title: 'Módulo 01',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal: `Finalizar a primeira tela (splash screen) na versão mobile e colocamos o site no ar usando GitHub Pages`,
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '10/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 02',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal: `Iniciamos o conhecimento de responsivo, criando a versão desktop da nossa primeira página`,
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '11/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 03',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Criar uma tela de cadastro e modal carregando, focada na versão mobile',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '12/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 04',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Responsivo da tela de cadastro e modal carregando, agora focando na versão desktop',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '13/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 05',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Validação dos campos do formulário de cadastro, usando JavaScript',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '14/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 06',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Entendo o protocolo HTTP e aprendendo a consumir um API para realizar o cadastro do usuário',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '15/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 07',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Criar a versão mobile da página de login, recuperar senha e modal do email enviado',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '16/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 08',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Trabalhar no responsivo da página de login, recuperar senha e do modal do email enviado, agora focando na versão desktop',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '17/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 09',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Validação dos campos das telas de login e recuperar senha, consumir a API para realizar o login e recuperar a senha',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '18/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 10',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Criar o cabeçalho da página do chat mas por enquanto só na versão mobile',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '19/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 11',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Entender ainda mais sobre responsivo, criando a versão desktop do cabeçalho',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '20/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 12',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Versão mobile do menu, tanto aberto quanto fechado, mas sem o JavaScript por enquanto',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '21/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 13',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Fazer o menu ficar aberto e fechado com a interação de click do usuário, usando um JavaScript feliz',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '22/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 14',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Componente da mensagem dos usuários e o input para o usuário enviar a mensagem, foco na versão mobile',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '23/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 15',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Versão desktop e mais conhecimento sobre responsivo para criar o componente de mensagem de usuário e input',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '24/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 16',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'JavaScript para pegar a mensagem que o usuário enviar e fazer aparecer na tela com o componente feliz',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '25/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 17',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Versão mobile e desktop da página de usuários online, pagina simples mais feliz para aprender mais sobre FlexBox',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '26/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 18',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Criar versão mobile e desktop da tela de profile e modal atualizado com sucesso, aqui vamos conhecer mais sobre o form e responsivo',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '27/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 19',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Validação dos campos e envio dos dados da tela de profile usando a API e um JavaScript feliz',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '28/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 20',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Tela de troca senha e modal de atualizado com sucesso, tanto a versão mobile quanto desktop',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '29/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 21',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Validação dos campos da tela de trocar senha e enviar dados para API, sempre com JavaScript feliz',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '30/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 22',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Criar conexão com a API usando socketio para saber quais pessoas estão online no chat',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '31/05/2021'
          }
        ]
      },
      {
        title: 'Módulo 23',
        color: 'colorSecond',
        fontColor: 'colorThird',
        goal:
          'Receber e enviar mensagens no chat utilizando socketio, aqui vamos abusar ainda mais do HTTP e de JavaScript',
        options: [
          {
            label: 'Qtd. Aulas',
            description: 'Gravando'
          },
          {
            label: 'Disponível em:',
            description: '01/06/2021'
          }
        ]
      }
    ]
  }
  const { REACT_APP_API } = process.env

  return (
    <>
      <Header>
        <Title>Aulas começam em ...</Title>
        <Countdown paramLastDate={course.start} />
      </Header>

      <Section
        id="video"
        biggest
        backgroundColor="colorBlackThird"
        borderColor="colorThird"
      >
        <BannerContent>
          <Heading>{course.title}</Heading>
          <WrapperIcons>
            <Icons name="html" />
            <Icons name="css" />
          </WrapperIcons>
          <VideoPlayer
            box={true}
            sources={{
              src:
                'https://player.vimeo.com/external/536741788.hd.mp4?s=4847710c5f2f8401cb424125f5f9503b67f98e02&profile_id=175',
              type: 'video/mp4'
            }}
            poster="https://i.vimeocdn.com/video/1111153812.jpg"
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

          <Box light>{course.goal}</Box>

          <ListContentDay days={course.modules} />
        </Container>
      </EventContent>

      <Sponsor />

      <Supporters />

      <Footer />
    </>
  )
}

export default MobileFirst
