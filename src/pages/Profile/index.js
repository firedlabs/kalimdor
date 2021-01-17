import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Title, Field, Button, Box } from '@firedlabs/design-system'
import UserService from 'services/UserService'
import ModalError from 'containers/ModalError'

function Profile() {
  const [user, setUser] = useState({
    login: 'carregando...',
    email: 'carregando...'
  })
  const [activeModalErrorDefault, setActiveModalModalErrorDefault] = useState(
    false
  )
  const [activeModalErrorInfosUser, setActiveModalErrorInfosUser] = useState(
    false
  )
  const history = useHistory()

  useEffect(
    () =>
      (async () => {
        try {
          const res = await UserService.getTwitch()
          const { login, email } = res.data

          setUser({ login, email })
        } catch (err) {
          setActiveModalErrorInfosUser(true)
        }
      })(),
    []
  )

  const logout = async () => {
    try {
      await UserService.twitchRevoke()
      localStorage.removeItem('avatar')
      history.push('/logout')
    } catch (err) {
      setActiveModalModalErrorDefault(true)
    }
  }

  const handleCloseModal = () => {
    setActiveModalModalErrorDefault(false)
    setActiveModalErrorInfosUser(false)
  }

  return (
    <>
      <ModalError
        active={activeModalErrorDefault}
        actionClose={handleCloseModal}
      />
      <ModalError
        active={activeModalErrorInfosUser}
        actionClose={handleCloseModal}
      >
        <>
          Infelizment não consegui carregar as infos do seu usuário. Estamos com
          alguma instabilidade no servidor ou na twitch, tente mais tarde e se
          não der vai pentelhar o dev na{' '}
          <a href="https://twitch.tv/marcobrunodev">twitch.tv/marcobrunodev</a>
        </>
      </ModalError>

      <Container>
        <Title>Dados da Twitch</Title>

        <Box>
          <Field.Text label="Login" value={user.login} readOnly />
          <Field.Email value={user.email} readOnly />

          <Button medium onClick={logout}>
            Logout
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default Profile
