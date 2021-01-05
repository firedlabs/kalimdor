import { ListCovers, TitleLive, Action } from '@firedlabs/design-system'
import Header from 'containers/Header'
import curso from 'assets/images/curso-html-css.png'
import marco from 'assets/images/marcobruno.png'
import Streamer from './styles'
import { Link } from 'react-router-dom'

function Dashboard() {
  const covers = [
    {
      alt: 'Curso feliz de HTML e CSS',
      progress: {
        valueMax: 164,
        valueNow: 40
      },
      src: curso,
      tags: [
        {
          backgroundColor: 'colorThird',
          children: 'video',
          color: 'colorBlackFirst'
        },
        {
          backgroundColor: 'colorThird',
          children: 'pdf',
          color: 'colorBlackFirst'
        }
      ],
      title: 'Curso feliz de HTML e CSS'
    }
  ]

  const titleLive = {
    isLive: true,
    title: 'marcobrunodev',
    src: marco,
    alt: 'Avatar do Marco Brunoss'
  }

  return (
    <>
      <Header />
      <Streamer>
        <Action href="https://twitch.tv/marcobrunodev" target="_blank">
          <TitleLive {...titleLive} />
        </Action>
        <Link to="/player">
          <ListCovers covers={covers} />
        </Link>
      </Streamer>
    </>
  )
}

export default Dashboard
