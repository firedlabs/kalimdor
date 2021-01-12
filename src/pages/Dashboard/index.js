import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Cover, TitleLive, Action, Modal } from '@firedlabs/design-system'
import Header from 'containers/Header'
import curso from 'assets/images/curso-html-css.png'
import marco from 'assets/images/marcobruno.png'
import { Streamer, CoverLink } from './styles'

function Dashboard() {
  const history = useHistory()
  const [activeModal, setActiveModal] = useState(false)
  const { REACT_APP_API } = process.env
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
    alt: 'Avatar do Marco Brunoss'
  }

  const closeModal = () => {
    setActiveModal(false)
  }

  const hasFollow = async () => {
    try {
      const res = await axios.get(`${REACT_APP_API}/api/twitch/followme`, {
        withCredentials: true
      })
      console.log(res)
      history.push('/player')
    } catch (error) {
      console.log('habilitar modal')
    }
  }

  return (
    <>
      <Header />
      <Modal
        actionClose={closeModal}
        active={activeModal}
        title="Me segue na Twitch"
      >
        Para assistir o curso voce precisa me segui na twitch
      </Modal>

      <Streamer>
        <Action href="https://twitch.tv/marcobrunodev" target="_blank">
          <TitleLive {...titleLive} />
        </Action>
        <CoverLink onClick={hasFollow}>
          <Cover {...htmlCss} />
        </CoverLink>
      </Streamer>
    </>
  )
}

export default Dashboard
