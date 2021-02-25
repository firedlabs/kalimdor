import { useState } from 'react'
import * as I from 'intz-design-system'
import Intz from 'containers/Intz'
import avatar from 'assets/images/marcobruno.png'
import screen from 'assets/images/screen-live.png'
import lg from 'assets/images/lg.png'

function IntzPage() {
  const [streamersOffline] = useState([
    { avatar, twitch: 'https://twitch.tv/marcobrunodev' },
    { avatar, twitch: 'https://twitch.tv/marcobrunodev' },
    { avatar, twitch: 'https://twitch.tv/marcobrunodev' }
  ])

  const [sponsors] = useState([
    { logo: lg, alt: 'Logo da LG Monitores', url: 'https://www.lg.com' },
    { logo: lg, alt: 'Logo da LG Monitores', url: 'https://www.lg.com' },
    { logo: lg, alt: 'Logo da LG Monitores', url: 'https://www.lg.com' },
    { logo: lg, alt: 'Logo da LG Monitores', url: 'https://www.lg.com' }
  ])

  const streamersOnline = [
    {
      url: 'https://twitch.tv/marcobrunodev',
      avatar,
      altAvatar: 'Avatar do Marco Bruno',
      screen,
      altScreen: 'Tela do Marco Bruno',
      title: '0 - Plataforma de live !Alura !intz',
      name: 'marcobrunodev',
      game: 'Science & Technology'
    },
    {
      url: 'https://twitch.tv/jovica',
      avatar,
      altAvatar: 'Avatar do Marco Bruno',
      screen,
      altScreen: 'Tela do Marco Bruno',
      title: '1 - Plataforma de live !Alura !intz',
      name: 'marcobrunodev',
      game: 'Science & Technology'
    },
    {
      url: 'https://twitch.tv/giizaa',
      avatar,
      altAvatar: 'Avatar do Marco Bruno',
      screen,
      altScreen: 'Tela do Marco Bruno',
      title: '2 - Plataforma de live !Alura !intz',
      name: 'marcobrunodev',
      game: 'Science & Technology'
    },
    {
      url: 'https://twitch.tv/giizaa',
      avatar,
      altAvatar: 'Avatar do Marco Bruno',
      screen,
      altScreen: 'Tela do Marco Bruno',
      title: '3 - Plataforma de live !Alura !intz',
      name: 'marcobrunodev',
      game: 'Science & Technology'
    },
    {
      url: 'https://twitch.tv/giizaa',
      avatar,
      altAvatar: 'Avatar do Marco Bruno',
      screen,
      altScreen: 'Tela do Marco Bruno',
      title: '4 - Plataforma de live !Alura !intz',
      name: 'marcobrunodev',
      game: 'Science & Technology'
    }
  ]

  return (
    <>
      <I.Styles />
      <Intz.Header />

      <Intz.Online streamers={streamersOnline} />

      <Intz.Offline streamers={streamersOffline} />

      <Intz.Sponsor sponsors={sponsors} />
    </>
  )
}

export default IntzPage
