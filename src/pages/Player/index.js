import { VideoPlayer } from '@firedlabs/design-system'

function Player() {
  const data = {
    sources: {
      src:
        'https://player.vimeo.com/external/490348141.hd.mp4?s=e473c83ba63929f71334bd4167fcf8be3fd59930&profile_id=175',

      type: 'video/mp4'
    },
    poster:
      'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    lessons: [
      {
        title: 'Aula 00',
        videos: [
          {
            src:
              'https://player.vimeo.com/external/490348141.hd.mp4?s=e473c83ba63929f71334bd4167fcf8be3fd59930&profile_id=175',
            title: 'Projeto do curso',
            poster: 'https://i.vimeocdn.com/video/1027992089.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490348213.hd.mp4?s=65af3df8e8f3339abf933b0cb1aea8e9a67c587e&profile_id=175',
            title: 'Pré-requisitos do curso',
            poster: 'https://i.vimeocdn.com/video/1028703945.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490348393.hd.mp4?s=8734fcb0db1e45cde958fe2e34daea395c18e9b1&profile_id=175',
            title: 'Onde tirar suas dúvidas',
            poster: 'https://i.vimeocdn.com/video/1028704335.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490348510.hd.mp4?s=b3c3e588fc32b8189be1d866ae27e43ef311f457&profile_id=175',
            title: 'Como funciona o VSCode',
            poster: 'https://i.vimeocdn.com/video/1028704690.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490349544.hd.mp4?s=c25d851552a45d6799188b6983df9b8bcd2ec549&profile_id=175',
            title: 'Figma para Devs',
            poster: 'https://i.vimeocdn.com/video/1028705279.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490349755.hd.mp4?s=daca5c077323b3bc97caa615b5c2dcbcef9a8080&profile_id=175',
            title: 'Revisão',
            poster: 'https://i.vimeocdn.com/video/1028705790.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490349849.hd.mp4?s=5a01556b0267414d24988bcff741c7da270c7df4&profile_id=175',
            title: 'Desafios top top top',
            poster: 'https://i.vimeocdn.com/video/1028706127.jpg',
            type: 'video/mp4'
          }
        ]
      }
    ],
    lessonActive: 'Aula 00'
  }

  return <VideoPlayer {...data} />
}

export default Player
