import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

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
        tag: '',
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
          },
          {
            src:
              'https://player.vimeo.com/external/511309184.hd.mp4?s=241ec3a8603a77f135302df28f9d29134e2a8bf0&profile_id=175',
            title: 'Bug no icon',
            poster: 'https://i.vimeocdn.com/video/1059422210.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511320474.hd.mp4?s=5817b1a7508dc91200848b19bedf321c7b2238a8&profile_id=175',
            title: 'Cria wrapper-skill',
            poster: 'https://i.vimeocdn.com/video/1059424700.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511332632.hd.mp4?s=cb087d1916fca7a6be78931533b1823caff80076&profile_id=175',
            title: 'Revisão',
            poster: 'https://i.vimeocdn.com/video/1059426485.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511337735.hd.mp4?s=770475190691a2627b2658d278c2983a4be45109&profile_id=175',
            title: 'Desafios top top top',
            poster: 'https://i.vimeocdn.com/video/1059427529.jpg',
            type: 'video/mp4'
          }
        ]
      },
      {
        title: 'Módulo 05',
        tag: '',
        videos: [
          {
            src:
              'https://player.vimeo.com/external/511521564.hd.mp4?s=640fbb2ba0040982a204bce81294289690deb249&profile_id=175',
            title: 'HTML do card-project',
            poster: 'https://i.vimeocdn.com/video/1060078736.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511532250.hd.mp4?s=b4d13a20506e6890a016430103befddc058781dc&profile_id=175',
            title: 'CSS do card-project',
            poster: 'https://i.vimeocdn.com/video/1060079877.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511545335.hd.mp4?s=470a161a467c078c98bd87bf5363887e3d7bc68d&profile_id=175',
            title: 'Variação card-project',
            poster: 'https://i.vimeocdn.com/video/1060080659.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511551397.hd.mp4?s=93979d5024d3f85748a77fea23e7eed85d525974&profile_id=175',
            title: 'Commit card-project',
            poster: 'https://i.vimeocdn.com/video/1060081268.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511566546.hd.mp4?s=3622e12d11b1fbfb34f062e32f9851f0f693a8b2&profile_id=175',
            title: 'Variação da section',
            poster: 'https://i.vimeocdn.com/video/1060081705.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511569735.hd.mp4?s=2100739c2a02ffa1e8a65ed4db13fe7f47793ac2&profile_id=175',
            title: 'Commit da section',
            poster: 'https://i.vimeocdn.com/video/1060082701.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511575176.hd.mp4?s=781f582c1f3b634e3b8aa397e7c79e001d7f941b&profile_id=175',
            title: 'Cria wrapper-card',
            poster: 'https://i.vimeocdn.com/video/1060083136.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511584067.hd.mp4?s=52760c8ac3f40f4cd680504e11f2dd3101f8bafc&profile_id=175',
            title: 'Commit wrapper-card',
            poster: 'https://i.vimeocdn.com/video/1060083594.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511587820.hd.mp4?s=bc65e864a0cf1aa0955442030fa625bd7549fd60&profile_id=175',
            title: 'Links nos projetos',
            poster: 'https://i.vimeocdn.com/video/1060084884.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/512063532.hd.mp4?s=c5efae85550a7efcc720070c2f843c0dda648dac&profile_id=175',
            title: 'Commit dos links',
            poster: 'https://i.vimeocdn.com/video/1060087295.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511596639.hd.mp4?s=a979db3291f1c8faf540db58a12c4171bcce6c7a&profile_id=175',
            title: 'Refatoração action',
            poster: 'https://i.vimeocdn.com/video/1060086384.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511610953.hd.mp4?s=d2dc1cea73d54575c6ff49dcdb1bdefd6ce638c9&profile_id=175',
            title: 'Refatoração banner',
            poster: 'https://i.vimeocdn.com/video/1060086899.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511611286.hd.mp4?s=1efb5eab484f19a95e21675293eaa25f123f6073&profile_id=175',
            title: 'Refatoração box',
            poster: 'https://i.vimeocdn.com/video/1060087904.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511622626.hd.mp4?s=b3e40d5d91fa318cfc415482177b7f0b7ffaee15&profile_id=175',
            title: 'Refatoração button',
            poster: 'https://i.vimeocdn.com/video/1060088312.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511633016.hd.mp4?s=f9a8fce2dee870b4f9b0807e553673c71b15b3c4&profile_id=175',
            title: 'Refatoração header',
            poster: 'https://i.vimeocdn.com/video/1060089250.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511633151.hd.mp4?s=d6bd5992e43fab45a1db76d392da4e5a13ea27d8&profile_id=175',
            title: 'Refatoração section',
            poster: 'https://i.vimeocdn.com/video/1060089250.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511637831.hd.mp4?s=fb0616e2f5bbbf8a9f049fa8a364e3fac64fec71&profile_id=175',
            title: 'Refatoração subtitle',
            poster: 'https://i.vimeocdn.com/video/1060090387.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511647356.hd.mp4?s=5bd53fe103564e9a904a6811bbc79fe396f3d75b&profile_id=175',
            title: 'Revisão',
            poster: 'https://i.vimeocdn.com/video/1060091241.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/511647674.hd.mp4?s=d5ca4e0ec8d460538ec08a8c71d0fdea1acea45b&profile_id=175',
            title: 'Desafios top top top',
            poster: 'https://i.vimeocdn.com/video/1060091764.jpg',
            type: 'video/mp4'
          }
        ]
      },
      {
        title: 'Módulo 06',
        tag: '',
        videos: [
          {
            src:
              'https://player.vimeo.com/external/515049154.hd.mp4?s=27344a7f7cec1376b71e77cc78537b0f7ff2375a&profile_id=175',
            title: 'Cria component Description',
            poster: 'https://i.vimeocdn.com/video/1066887837.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/515052406.hd.mp4?s=24e6c02916fec00a7898934b90596e7081b03588&profile_id=175',
            title: 'Cria CSS do Description',
            poster: 'https://i.vimeocdn.com/video/1066894580.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/515196847.hd.mp4?s=99dc2f85e2e3c2a1c13befca9c0fa858b18d8ac7&profile_id=175',
            title: 'Adiciona section e title',
            poster: 'https://i.vimeocdn.com/video/1066905092.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/515197295.hd.mp4?s=b5bc8d6e34d943f014b5d1873087c14cd0f597b6&profile_id=175',
            title: 'Variação da section',
            poster: 'https://i.vimeocdn.com/video/1066913354.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/515496845.hd.mp4?s=d1dabc7e8c66260940321bedbc501aafff708d04&profile_id=175',
            title: 'Cria component button-arrow',
            poster: 'https://i.vimeocdn.com/video/1074881213.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/515503709.hd.mp4?s=9c523cf4ae952191129316c30fc771454daae2a7&profile_id=175',
            title: 'Cria CSS do button-arrow',
            poster: 'https://i.vimeocdn.com/video/1074882338.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/515510323.hd.mp4?s=4d4f472b700b7b32652fc5b2849924b42d6b689d&profile_id=175',
            title: 'Cria seta',
            poster: 'https://i.vimeocdn.com/video/1074884458.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/515519443.hd.mp4?s=382072477445780f1e50746dcb87482d25b1ddc3&profile_id=175',
            title: 'Esconder texto',
            poster: 'https://i.vimeocdn.com/video/1074890971.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/515521914.hd.mp4?s=719971a22aa40c4fa959d73b415b2c761a3bcff9&profile_id=175',
            title: 'Variação do button-arrow',
            poster: 'https://i.vimeocdn.com/video/1074894343.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/515960389.hd.mp4?s=c999f88bad332b7e4f50b3a2ab8d534a5c1bfc6d&profile_id=175',
            title: 'Cria component node-card',
            poster: 'https://i.vimeocdn.com/video/1074896060.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/515963769.hd.mp4?s=d7170ea25359425fceacbefb1e1e59d941d01698&profile_id=175',
            title: 'CSS do node-card',
            poster: 'https://i.vimeocdn.com/video/1074901123.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/515969573.hd.mp4?s=f39150ad8b05717d5363b2176e53ff98f848aa8b&profile_id=175',
            title: 'Tracinho ---',
            poster: 'https://i.vimeocdn.com/video/1074906653.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/516424637.hd.mp4?s=7ad4bcd57eccf58c837a2064ae3294cb883428c9&profile_id=175',
            title: 'Adiciona mais nodes',
            poster: 'https://i.vimeocdn.com/video/1074909400.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/516437012.hd.mp4?s=39526db348c7ba5976d2c1823ec9d9f50751f425&profile_id=175',
            title: 'Variação sem padding',
            poster: 'https://i.vimeocdn.com/video/1074912770.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/516442489.hd.mp4?s=032c74d5dcd0bbdaa7b5616e8a4e0064d0c9643c&profile_id=175',
            title: 'Variação da cor',
            poster: 'https://i.vimeocdn.com/video/1074914817.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/516451179.hd.mp4?s=3e1da813e65f73f605bab7fdbee15872f360cab3&profile_id=175',
            title: 'Posição do botão',
            poster: 'https://i.vimeocdn.com/video/1074927467.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/516455728.hd.mp4?s=131b0c57638999b94cdbc916092f8cb4c8f5300a&profile_id=175',
            title: 'Alinha os node-card',
            poster: 'https://i.vimeocdn.com/video/1074933573.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/516458105.hd.mp4?s=e8358463408cfe60101ec5f6d1d0d71d8564d1bf&profile_id=175',
            title: 'Linha horizontal',
            poster: 'https://i.vimeocdn.com/video/1074935748.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/519040460.hd.mp4?s=d862b97c0d4bf69f0f8fccff3b3bed25e8499118&profile_id=175',
            title: 'Mais tracinhos ---',
            poster: 'https://i.vimeocdn.com/video/1074954796.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/517893731.hd.mp4?s=6c21614283bcebefbed107eaa67856f291bcaf54&profile_id=175',
            title: 'Bug nos Projetos',
            poster: 'https://i.vimeocdn.com/video/1074961534.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/517904653.hd.mp4?s=ff8c0a390ca8959d0aaa6ee1fe7ef3563ca0941e&profile_id=175',
            title: 'Move node-card',
            poster: 'https://i.vimeocdn.com/video/1074972797.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/517909790.hd.mp4?s=57e5aec1d38796c058c950b6a4f1d5e5092a8c86&profile_id=175',
            title: 'Remove scroll horizontal',
            poster: 'https://i.vimeocdn.com/video/1074975099.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/517924234.hd.mp4?s=83bb66050daee1701d479bf6f9010404606ef016&profile_id=175',
            title: 'Primeiro JavaScript',
            poster: 'https://i.vimeocdn.com/video/1074984130.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/521582310.hd.mp4?s=67fc99feadc4109655fd8e1837ef3af12b42f794&profile_id=175',
            title: 'Ops! Commit',
            poster: 'https://i.vimeocdn.com/video/1086955495.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/517926655.hd.mp4?s=0d7092f3435b61782e74d3effcff564cde077b82&profile_id=175',
            title: 'Revisão',
            poster: 'https://i.vimeocdn.com/video/1074984130.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/517931309.hd.mp4?s=67b80cf4c611d2694a4fdd00a7d2245e202b8939&profile_id=175',
            title: 'Desafios top top top',
            poster: 'https://i.vimeocdn.com/video/1074987962.jpg',
            type: 'video/mp4'
          }
        ]
      },
      {
        title: 'Módulo 07',
        tag: 'Novo',
        videos: [
          {
            src:
              'https://player.vimeo.com/external/522256513.hd.mp4?s=92285b34e46ae060048cdbdb75234633376fcfbb&profile_id=175',
            title: 'Cria HTML do footer',
            poster: 'https://i.vimeocdn.com/video/1086961644.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522256884.hd.mp4?s=e91597a2d6c635632d710ba179e3a8fa17576679&profile_id=175',
            title: 'Cria CSS do footer',
            poster: 'https://i.vimeocdn.com/video/1086966174.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522257058.hd.mp4?s=f606d0e60761db88ec64087854bdb26d8dc8cf65&profile_id=175',
            title: 'Commit main-footer',
            poster: 'https://i.vimeocdn.com/video/1086973978.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522257150.hd.mp4?s=a459d5763a4de47b015c8d755dbe9f5a3a69286e&profile_id=175',
            title: 'Cria HTML do form',
            poster: 'https://i.vimeocdn.com/video/1086977669.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522257713.hd.mp4?s=3dfbfb74aec35772cf357d8bbf86f9442be4a6e4&profile_id=175',
            title: 'Cria component main-label',
            poster: 'https://i.vimeocdn.com/video/1086982642.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522257894.hd.mp4?s=56cc6652df73104680f06575ecfdd462f913a3ef&profile_id=175',
            title: 'Commit main-label',
            poster: 'https://i.vimeocdn.com/video/1086988616.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522257973.hd.mp4?s=4af732bfa016374862010bab6fa282d709972882&profile_id=175',
            title: 'Cria component main-input',
            poster: 'https://i.vimeocdn.com/video/1086991132.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522258165.hd.mp4?s=ae3e8a7284e45933aa74442b92705dfe86842b81&profile_id=175',
            title: 'Commit main-input',
            poster: 'https://i.vimeocdn.com/video/1086995034.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522258253.hd.mp4?s=bc087de22b8b86e88bcb66258f97f85b20523ec3&profile_id=175',
            title: 'Variação do main-input',
            poster: 'https://i.vimeocdn.com/video/1081596021.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522258390.hd.mp4?s=b44f57e2bf77d16b6a338f8c94f9c959fc504946&profile_id=175',
            title: 'Commit da variação',
            poster: 'https://i.vimeocdn.com/video/1087000234.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522258470.hd.mp4?s=899f6809933e6c1b12fa2d07eb66e43698219a89&profile_id=175',
            title: 'Variação do main-button',
            poster: 'https://i.vimeocdn.com/video/1087002186.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522258618.hd.mp4?s=f2e3f3bad554dd69312826463a9ce37dd181862d&profile_id=175',
            title: 'Commit do main-button',
            poster: 'https://i.vimeocdn.com/video/1087004599.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522258685.hd.mp4?s=270ea1f85df891722a18dd4131f9a4297df416f0&profile_id=175',
            title: 'Alinhar form e filhos',
            poster: 'https://i.vimeocdn.com/video/1087010196.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522258979.hd.mp4?s=b921856571c4b03e7e0d54fcf5e70046aef5585e&profile_id=175',
            title: 'Commit do main-form',
            poster: 'https://i.vimeocdn.com/video/1087014483.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522259059.hd.mp4?s=ee724b38c53e31f0c6c699dbc8948593f153eea7&profile_id=175',
            title: 'Bug do main-button',
            poster: 'https://i.vimeocdn.com/video/1081598303.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522259180.hd.mp4?s=f2cf9bdf658779233522cca4727b5af78fdef934&profile_id=175',
            title: 'Commit do main-button',
            poster: 'https://i.vimeocdn.com/video/1087018961.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522259256.hd.mp4?s=548ae17a7c33a237865e16a5ebab2287637b542e&profile_id=175',
            title: 'Title no main-form',
            poster: 'https://i.vimeocdn.com/video/1087026840.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522259394.hd.mp4?s=96a50245d97858b0e21ad51318e28d1283c98d6f&profile_id=175',
            title: 'Commit do title',
            poster: 'https://i.vimeocdn.com/video/1087031334.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522259476.hd.mp4?s=8177ad65dc1a7d5d45d95991c019a804cc661954&profile_id=175',
            title: 'Validação do main-form',
            poster: 'https://i.vimeocdn.com/video/1087033638.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522259705.hd.mp4?s=a0753870999db0705f1b7e05865125c2f7a46422&profile_id=175',
            title: 'Revisão',
            poster: 'https://i.vimeocdn.com/video/1087037396.jpg',
            type: 'video/mp4'
          },
          {
            src:
              'https://player.vimeo.com/external/522260054.hd.mp4?s=1e94f606b23053998770af0d92f680d679d7e8a6&profile_id=175',
            title: 'Desafio final',
            poster: 'https://i.vimeocdn.com/video/1087038774.jpg',
            type: 'video/mp4'
          }
        ]
      }
    ]
  }
  const [data, setData] = useState(dataFollow)
  const [lessonActive, setLessonActive] = useState('Módulo 00')
  const history = useHistory()

  useEffect(
    () =>
      (async () => {
        try {
          setData(dataFollow)

          setLessonActive('Módulo 00')
        } catch (err) {
          history.push('/404')
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
