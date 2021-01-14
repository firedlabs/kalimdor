import { useState, useEffect } from 'react'
import { Cover, TitleLive, Action } from '@firedlabs/design-system'
import Header from 'containers/Header'
import curso from 'assets/images/curso-html-css.png'
import marco from 'assets/images/marcobruno.png'
import { Streamer, CoverLink } from './styles'
import UserService from 'services/UserService'

function Dashboard() {
  const [avatar, setAvatar] = useState('')
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

  useEffect(
    () =>
      (async () => {
        try {
          const res = await UserService.getAvatar()
          setAvatar(res.data)
        } catch (err) {
          setAvatar('')
        }
      })(),
    []
  )

  return (
    <>
      <Header avatar={avatar} />

      <Streamer>
        <Action href="https://twitch.tv/marcobrunodev" target="_blank">
          <TitleLive {...titleLive} />
        </Action>
        <CoverLink to="/player">
          <Cover {...htmlCss} />
        </CoverLink>
      </Streamer>
    </>
  )
}

export default Dashboard
