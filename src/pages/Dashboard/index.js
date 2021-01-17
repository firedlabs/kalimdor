import {
  Cover,
  TitleLive,
  Action,
  Modal,
  Description,
  Button
} from '@firedlabs/design-system'
import curso from 'assets/images/curso-html-css.png'
import marco from 'assets/images/marcobruno.png'
import { Streamer, CoverAction } from './styles'
import useDashboard from './useDashboard'

function Dashboard() {
  const {
    handleClickCover,
    modalFollowStreamer,
    closeModalFollowStreamer
  } = useDashboard()

  const htmlCss = {
    alt: 'Curso feliz de HTML e CSS',
    src: curso,
    tags: [
      {
        backgroundColor: 'colorThird',
        children: 'video',
        color: 'colorBlackFirst'
      }
    ],
    title: 'Curso feliz de HTML e CSS'
  }
  const titleLive = {
    isLive: true,
    title: 'marcobrunodev',
    src: marco,
    alt: 'Avatar do Marco Brunos'
  }

  return (
    <>
      <Modal
        active={modalFollowStreamer}
        actionClose={closeModalFollowStreamer}
        title="Siga o Streamer"
      >
        <Description big>
          Para acessar esse conteúdo é necessário seguir o Marco Bruno na{' '}
          <a href="https://twitch.tv/marcobrunodev">twitch.tv/marcobrunodev</a>
        </Description>

        <Button medium backgroundColor="colorSecond">
          Seguir Marco Bruno
        </Button>
      </Modal>
      <Streamer>
        <Action href="https://twitch.tv/marcobrunodev" target="_blank">
          <TitleLive {...titleLive} />
        </Action>
        <CoverAction onClick={handleClickCover}>
          <Cover {...htmlCss} />
        </CoverAction>
      </Streamer>
    </>
  )
}

export default Dashboard
