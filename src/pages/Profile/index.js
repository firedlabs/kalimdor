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
  const [activeModal, setActiveModal] = useState(false)
  const [contentModalError, setContentModalError] = useState('')
  const history = useHistory()

  useEffect(
    () =>
      (async () => {
        try {
          const res = await UserService.getTwitch()
          const { login, email } = res.data

          setUser({ login, email })
        } catch (err) {
          setContentModalError(
            'Infelizmente não consegui carregar as informações do seu profile, estamos com algum erro no servidor ou na twitch. Por favor, tente mais tarde1'
          )
          setActiveModal(true)
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
      setActiveModal(true)
    }
  }

  const handleCloseModal = () => {
    setActiveModal(false)
  }

  return (
    <>
      <ModalError active={activeModal} actionClose={handleCloseModal}>
        {contentModalError}
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
