import { useState, useEffect } from 'react'
import UserService from 'services/UserService'

function usePlayer() {
  const dataFollow = {
    sources: {
      src:
        'https://player.vimeo.com/external/490348141.hd.mp4?s=e473c83ba63929f71334bd4167fcf8be3fd59930&profile_id=175',

      type: 'video/mp4'
    },
    lessons: [
      {
        title: 'Módulo 00',
        tag: '',
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
      },
      {
        title: 'Módulo 01',
        tag: '',
        videos: [
          {
            src:
              'https://player.vimeo.com/external/490353357.hd.mp4?s=5ff987902981db01a28edba220cf69274d6ea1db&profile_id=175',
            title: 'Cria pasta do projeto',
            poster: 'https://i.vimeocdn.com/video/1048737200.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490353416.hd.mp4?s=b1b35bb8e7d123d3f6341bcd554931f064599d2d&profile_id=175',
            title: 'Alterar layout no Figma',
            poster: 'https://i.vimeocdn.com/video/1049413877.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490353732.hd.mp4?s=0e80b16dd9a35636faac4ac2015372aa40a6c842&profile_id=175',
            title: 'O que é o HTML?',
            poster: 'https://i.vimeocdn.com/video/1055155625.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490354053.hd.mp4?s=cf6e4aa7404b2d09bdd3df62f47586d5e2a668ac&profile_id=175',
            title: 'HTML do cabeçalho',
            poster: 'https://i.vimeocdn.com/video/1055156451.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490354693.hd.mp4?s=0c249509c605ef51790c3f3b7e1ee478693401ce&profile_id=175',
            title: 'Comentar ou não o código?',
            poster: 'https://i.vimeocdn.com/video/1055157673.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490354854.hd.mp4?s=6b8185505a59b68a09ae998ca7fd4bac08d6eb47&profile_id=175',
            title: 'O que falta para o HTML?',
            poster: 'https://i.vimeocdn.com/video/1055158894.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490355165.hd.mp4?s=4dd2e69b10a8cbf2335cd9b13fa4a53d8bd423e5&profile_id=175',
            title: 'Atributo global no HTML',
            poster: 'https://i.vimeocdn.com/video/1055160159.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490355311.hd.mp4?s=b79ea4d9e5ea22c174e99101d1308c2fc68cfc98&profile_id=175',
            title: 'HTML feliz com Emmet',
            poster: 'https://i.vimeocdn.com/video/1055161137.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490355676.hd.mp4?s=6c59dabc3d43f6130323ed39c34c484b4c4a47d3&profile_id=175',
            title: 'O que é CSS?',
            poster: 'https://i.vimeocdn.com/video/1055162417.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490355817.hd.mp4?s=fd3022b2be667cd8fdb148789ecb834070b27d8e&profile_id=175',
            title: 'Cor de fundo no header',
            poster: 'https://i.vimeocdn.com/video/1055163835.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490356851.hd.mp4?s=65b906ecc4a3f3a11cb63f931c0e6335acf6c7d3&profile_id=175',
            title: 'Sistema de cores',
            poster: 'https://i.vimeocdn.com/video/1055164918.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490357235.hd.mp4?s=4557b43a55fa68d0ed03239eaa0d55e94f857185&profile_id=175',
            title: 'Reset CSS',
            poster: 'https://i.vimeocdn.com/video/1055165884.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490357405.hd.mp4?s=8df48469d8e9f707757343f0e7e230973ce9c5ca&profile_id=175',
            title: 'Reset CSS da comunidade',
            poster: 'https://i.vimeocdn.com/video/1055166866.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490357568.hd.mp4?s=4e7a9624bc226eb424a94c2d0acf5ab7c64f921c&profile_id=175',
            title: 'CSS do menu de navegação',
            poster: 'https://i.vimeocdn.com/video/1055168024.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490357928.hd.mp4?s=89b0b7c989cee0b66e54a8d8385b599e43da5541&profile_id=175',
            title: 'Serif e sans-serif',
            poster: 'https://i.vimeocdn.com/video/1055169216.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490358078.hd.mp4?s=d4c59bd17dc4f6d6b21de896a0a8cf0955c61da3&profile_id=175',
            title: 'CSS do botão',
            poster: 'https://i.vimeocdn.com/video/1055171623.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490358540.hd.mp4?s=b7324bb501c6fe0de1de90eea0c13cf202238742&profile_id=175',
            title: 'Base sobre display',
            poster: 'https://i.vimeocdn.com/video/1055172464.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490358838.hd.mp4?s=e77ac8e24769881e8a03f3db3c132c4fb04bfa63&profile_id=175',
            title: 'Propriedade display: inline',
            poster: 'https://i.vimeocdn.com/video/1055173213.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490359454.hd.mp4?s=83bf9a0a126a9e0d2ff96606c3fc941a9e7e18a2&profile_id=175',
            title: 'Propriedade display: block',
            poster: 'https://i.vimeocdn.com/video/1055174319.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490359696.hd.mp4?s=9a51a4b53d7cf22772e5647b03313c8ec676a056&profile_id=175',
            title: 'Propriedade display: inline-block',
            poster: 'https://i.vimeocdn.com/video/1055175133.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490500684.hd.mp4?s=c3a35a74317bbf6c3250f9816875ca559d9b17e0&profile_id=175',
            title: 'Diferença entre margin e padding',
            poster: 'https://i.vimeocdn.com/video/1055176870.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490501181.hd.mp4?s=2b1908a5ae2eaa482ccaa4150d05a667d7db383d&profile_id=175',
            title: 'Forma resumida e específica',
            poster: 'https://i.vimeocdn.com/video/1055177737.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490501752.hd.mp4?s=c19411f66dd775982444e4e00e0f982daec6699b&profile_id=175',
            title: '1px no CSS',
            poster: 'https://i.vimeocdn.com/video/1055178638.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490502008.hd.mp4?s=696827aa5b8574cd7cda1f83bed0857598f161b6&profile_id=175',
            title: 'Quadrado items do menu',
            poster: 'https://i.vimeocdn.com/video/1055179344.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490502526.hd.mp4?s=5d4d6db273135db18ff7f5322fda56cee9034cac&profile_id=175',
            title: 'Finalizar CSS do header',
            poster: 'https://i.vimeocdn.com/video/1055180525.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490504020.hd.mp4?s=4ccf141017bea9cababe86afd3e147642ce5c5d1&profile_id=175',
            title: 'Revisão',
            poster: 'https://i.vimeocdn.com/video/1055181633.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490509221.hd.mp4?s=336aa02c469c0b460705a2818fe8fa5e12b4ade5&profile_id=175',
            title: 'Desafios top top top',
            poster: 'https://i.vimeocdn.com/video/1055182885.jpg',
            type: 'video/mp4'
          }
        ]
      },
      {
        title: 'Módulo 02',
        tag: '',
        videos: [
          {
            src:
              'https://player.vimeo.com/external/490516639.hd.mp4?s=cd445677ef02cd02a66e3c777e25e4788a1ab708&profile_id=175',
            title: 'Mudar logo e cores',
            poster: 'https://i.vimeocdn.com/video/1056070600.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490521734.hd.mp4?s=9f2efed1d9cf8fc7d740fb94c755d2a7da94504d&profile_id=175',
            title: 'Hover no botão',
            poster: 'https://i.vimeocdn.com/video/1056071872.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490932943.hd.mp4?s=f9ce7f63771ca7db3b9d36b31d110845131a13f1&profile_id=175',
            title: 'O que é Git?',
            poster: 'https://i.vimeocdn.com/video/1056074020.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490944645.hd.mp4?s=23e2e623bf5fce9fff87db773452d7a68d10f92e&profile_id=175',
            title: 'Como instalar o Git?',
            poster: 'https://i.vimeocdn.com/video/1056075091.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490940674.hd.mp4?s=9214eb056c893200f79aa6b31a55af6829910136&profile_id=175',
            title: 'O que é repositório?',
            poster: 'https://i.vimeocdn.com/video/1056076106.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490952751.hd.mp4?s=5d067b08208ed8103dab44ee359ef79ec86f7650&profile_id=175',
            title: 'Guardando estado do arquivo',
            poster: 'https://i.vimeocdn.com/video/1056077434.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490955749.hd.mp4?s=6d24583519b357f71127a0ec64c2f785e26e64e3&profile_id=175',
            title: 'Mensagem errada no commit',
            poster: 'https://i.vimeocdn.com/video/1056078871.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490962934.hd.mp4?s=586b920ee1022dbfff9d53d60c7325f9444a9863&profile_id=175',
            title: 'O que é GitHub?',
            poster: 'https://i.vimeocdn.com/video/1056080000.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490969029.hd.mp4?s=bb4731e983bb6e46e481ee185b2c617bc09f93f0&profile_id=175',
            title: 'Criar repositório remoto',
            poster: 'https://i.vimeocdn.com/video/1056086555.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490984076.hd.mp4?s=e7f0c381f5083c9dbdd8bcce4e9c5f4e012cd201&profile_id=175',
            title: 'Enviar pro GitHub',
            poster: 'https://i.vimeocdn.com/video/1056088115.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/490984480.hd.mp4?s=a136007449452abcdeebc0b5c1eb4c8db3195cff&profile_id=175',
            title: 'Outra pessoa com seu código',
            poster: 'https://i.vimeocdn.com/video/1056090984.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/491355937.hd.mp4?s=dd04f5b70c6af9f40bb0e6899d597481a1aeb69b&profile_id=175',
            title: 'O que é GitHub Pages',
            poster: 'https://i.vimeocdn.com/video/1056092191.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/491376603.hd.mp4?s=309d181ac3aab2e2a55b410b4b01a8b8e75ca983&profile_id=175',
            title: 'Cria site no GH Pages',
            poster: 'https://i.vimeocdn.com/video/1056092971.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/491377243.hd.mp4?s=276a4ab007c0b403e952d3dd4bba998b2d451aea&profile_id=175',
            title: 'Projeto no GH Pages',
            poster: 'https://i.vimeocdn.com/video/1056093602.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/491383744.hd.mp4?s=989aa5f27d2e491749996f1ce1f2d749c23c1342&profile_id=175',
            title: 'Revisão',
            poster: 'https://i.vimeocdn.com/video/1056094939.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/491387700.hd.mp4?s=c11f727a3efce1a20528ad3d6667b31c40d16de2&profile_id=175',
            title: 'Desafios top top top',
            poster: 'https://i.vimeocdn.com/video/1056096190.jpg',
            type: 'video/mp4'
          }
        ]
      },
      {
        title: 'Módulo 03',
        tag: '',
        videos: [
          {
            src:
              'https://player.vimeo.com/external/497204594.hd.mp4?s=e1d8f22574d064f9abf7d807b9befa104195f4c9&profile_id=175',
            title: 'Criar HTML do Title',
            poster: 'https://i.vimeocdn.com/video/1057000399.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497214977.hd.mp4?s=b80308017a2bd3349e0bfcac2da24165bed57d2f&profile_id=175',
            title: 'Cria base do CSS do Title',
            poster: 'https://i.vimeocdn.com/video/1057002219.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497220022.hd.mp4?s=03f43f9c4be3118c44964971a35e52eb9b6aadcf&profile_id=175',
            title: 'Sombra no Title',
            poster: 'https://i.vimeocdn.com/video/1057003143.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497225948.hd.mp4?s=996b3083ce8ef4188813157817252fb89b38fdcb&profile_id=175',
            title: 'Organiza o CSS do Title',
            poster: 'https://i.vimeocdn.com/video/1057004369.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497274218.hd.mp4?s=a9eb9a082d6485c90c18a907ec8dffa012831b29&profile_id=175',
            title: 'Commit do component Title',
            poster: 'https://i.vimeocdn.com/video/1057005470.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497278793.hd.mp4?s=5ed0516ce208725ff0f6ce765ca318776b19e624&profile_id=175',
            title: 'Cria HTML do Subtitle',
            poster: 'https://i.vimeocdn.com/video/1057011264.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/510608909.hd.mp4?s=a79150737e0e6544314f7a1e40eee676ec67aa19&profile_id=175',
            title: 'Cria CSS do Subtitle',
            poster: 'https://i.vimeocdn.com/video/1057012309.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497290644.hd.mp4?s=aeb53a95201729cd48a92e3738c741136eb2dbd1&profile_id=175',
            title: 'Commit do component Subtitle',
            poster: 'https://i.vimeocdn.com/video/1057013232.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/510609235.hd.mp4?s=36f316935ed388596f180954a168c607d76d72e6&profile_id=175',
            title: 'Cria HTML do Box',
            poster: 'https://i.vimeocdn.com/video/1057014211.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497312387.hd.mp4?s=59afad83032b7c0b0f667873dc29078d67c87d78&profile_id=175',
            title: 'Cria CSS do Box',
            poster: 'https://i.vimeocdn.com/video/1057015204.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497312564.hd.mp4?s=a253f4b64d56db44ada8b45416c2ca3c166714ac&profile_id=175',
            title: 'Adiciona Title e Subtitle',
            poster: 'https://i.vimeocdn.com/video/1057016025.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/510609657.hd.mp4?s=3b77856ad07cef425ad61809ea5ceb1ebc21aea5&profile_id=175',
            title: 'Commit do component Box',
            poster: 'https://i.vimeocdn.com/video/1057017333.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497578229.hd.mp4?s=317391ddb946baeed31f990d27a1cba1f539c1a3&profile_id=175',
            title: 'Isola o código do Button',
            poster: 'https://i.vimeocdn.com/video/1057018309.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497589954.hd.mp4?s=61a910804328c35ce26168ede3984ee9a92700e6&profile_id=175',
            title: 'Usa class no Button',
            poster: 'https://i.vimeocdn.com/video/1057019104.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497596713.hd.mp4?s=886682a9abdd297e47d51c5c33579cdbac3e8cba&profile_id=175',
            title: 'Quando usa o seletor de tag',
            poster: 'https://i.vimeocdn.com/video/1057019925.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497598973.hd.mp4?s=e3893ee67dd1156af1070d24f01bf89358d8f03c&profile_id=175',
            title: 'Quando usa o seletor de id',
            poster: 'https://i.vimeocdn.com/video/1057021031.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/497604102.hd.mp4?s=7617302401b1f2dd03eb1b2479d0bdfe2c9c94e9&profile_id=175',
            title: 'Quando usa o seletor de class',
            poster: 'https://i.vimeocdn.com/video/1057021798.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/507505616.hd.mp4?s=40ec61ee9bea711cd56c1cbb86dbc48cca9de690&profile_id=174',
            title: 'Commit do component Button',
            poster: 'https://i.vimeocdn.com/video/1057022639.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/507513508.hd.mp4?s=94d5839392c9c5507ec9e6378be06b931a6c12ea&profile_id=174',
            title: 'Commit da refatoração',
            poster: 'https://i.vimeocdn.com/video/1057023403.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/508601003.hd.mp4?s=491b22e4525c8789a5381660c33de3ca50b3ca1e&profile_id=174',
            title: 'Adicionar imagem de fundo',
            poster: 'https://i.vimeocdn.com/video/1057024234.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/508607092.hd.mp4?s=b78bb84a0e500704881f59132605daa31c31f559&profile_id=174',
            title: 'Diferença entre div e section',
            poster: 'https://i.vimeocdn.com/video/1057025007.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/508617212.hd.mp4?s=4aa70fc43107d9ba4c8ec11215439b289490803f&profile_id=174',
            title: 'Cria component Banner',
            poster: 'https://i.vimeocdn.com/video/1057026370.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/508628731.hd.mp4?s=3a636f1a1a12624c3a5450157c6b4bd05f04a79b&profile_id=174',
            title: 'Alinha títulos e botões',
            poster: 'https://i.vimeocdn.com/video/1057029941.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/509298307.hd.mp4?s=e917f896b2ed9876d824db9ccf0fbbe680cc3826&profile_id=174',
            title: 'Adiciona respiro no Box',
            poster: 'https://i.vimeocdn.com/video/1057030829.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/509300362.hd.mp4?s=e86606d7793b857861ead977b93bb53420dac181&profile_id=174',
            title: 'Commit do Banner',
            poster: 'https://i.vimeocdn.com/video/1057031922.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/509302654.hd.mp4?s=09cec6df50e9d36094368e7037a90df543423073&profile_id=174',
            title: 'Revisão',
            poster: 'https://i.vimeocdn.com/video/1057033185.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/509304962.hd.mp4?s=f78ac4e4a14f04a9a00b89c9af1904eb66de05bb&profile_id=174',
            title: 'Desafios top top top',
            poster: 'https://i.vimeocdn.com/video/1057034754.jpg',
            type: 'video/mp4'
          }
        ]
      },
      {
        title: 'Módulo 04',
        tag: 'Novo',
        videos: [
          {
            src:
              'https://player.vimeo.com/external/509310469.hd.mp4?s=71e3b87cd7a3cc0d12a758860c34348f299fbd0f&profile_id=174',
            title: 'Variação do component Title',
            poster: 'https://i.vimeocdn.com/video/1057931896.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/509313172.hd.mp4?s=a31acdb9faabfae1e3e19135cdbd5473c612821b&profile_id=174',
            title: 'Commit da variação',
            poster: 'https://i.vimeocdn.com/video/1057934569.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/509315335.hd.mp4?s=da79eb0a5f2c8d45b2a3da503f4da9024e516746&profile_id=174',
            title: 'Criando component Section',
            poster: 'https://i.vimeocdn.com/video/1057936387.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/510909561.hd.mp4?s=f675cf64e2fc4ed315af3092b7bb97c4dc4b2fcd&profile_id=174',
            title: 'Commit do component Section',
            poster: 'https://i.vimeocdn.com/video/1057942047.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/510920663.hd.mp4?s=36a11075f837037a1c40ec372d751e0892a75d0e&profile_id=174',
            title: 'Cria component Skill',
            poster: 'https://i.vimeocdn.com/video/1057945344.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/510920564.hd.mp4?s=aa1d1b202743237a79da7e4ba6d16fe34fbdf7da&profile_id=174',
            title: 'Cria CSS do Skill',
            poster: 'https://i.vimeocdn.com/video/1057949305.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/510925063.hd.mp4?s=e44bcaca3ee14d37fe9e2dc5234d276e887d550a&profile_id=174',
            title: 'Title do lado do Icon',
            poster: 'https://i.vimeocdn.com/video/1057953558.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/510947676.hd.mp4?s=ac51ac84e0807ad3d09a73c97a9508b394a55ae6&profile_id=174',
            title: 'Component progress-bar',
            poster: 'https://i.vimeocdn.com/video/1057956781.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/510952425.hd.mp4?s=f856edc68ed95cef7063fa6c4e2fa4e6f630a174&profile_id=174',
            title: 'Posicionar bar e title',
            poster: 'https://i.vimeocdn.com/video/1057958685.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/510952518.hd.mp4?s=9c89f3bdeac41cbad3ab36a5de8ecd70b0f44baf&profile_id=174',
            title: 'Commits e mais commits',
            poster: 'https://i.vimeocdn.com/video/1057961801.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/510954710.hd.mp4?s=f403f8bd5e02aaf589393189edada09944a28c80&profile_id=174',
            title: 'Mais 7 skill-tec',
            poster: 'https://i.vimeocdn.com/video/1057963723.jpg',
            type: 'video/mp4'
          }
        ]
      },
      { title: 'Módulo 05', tag: '12/02', videos: [] },
      { title: 'Módulo 06', tag: '13/02', videos: [] },
      { title: 'Módulo 07', tag: '14/02', videos: [] }
    ]
  }

  const dataSub = dataFollow

  const [data, setData] = useState(dataFollow)
  const [lessonActive, setLessonActive] = useState('Módulo 00')

  useEffect(
    () =>
      (async () => {
        try {
          await UserService.hasSubTwitch()

          setData(dataSub)

          setLessonActive('Módulo 00')
        } catch (err) {
          setData(dataFollow)
          setLessonActive('Módulo 00')
        }
      })(),
    []
  )

  const changeLessonActive = (event) => {
    const module = event.target.getAttribute('data-ref')

    setLessonActive(module)
  }

  return { data, changeLessonActive, lessonActive }
}

export default usePlayer
