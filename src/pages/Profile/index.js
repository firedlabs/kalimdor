import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Title, Field, Button } from '@firedlabs/design-system'
import UserService from 'services/UserService'
import ModalError from 'containers/ModalError'

function Profile() {
  const [activeModal, setActiveModal] = useState(false)
  const history = useHistory()

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
      <ModalError active={activeModal} actionClose={handleCloseModal} />

      <Container>
        <Title>Dados da Twitch</Title>

        <Field.Email value="marco.bruno.br@gmail.com" readOnly />

        <Button medium onClick={logout}>
          Logout
        </Button>
      </Container>
    </>
  )
}

export default Profile
