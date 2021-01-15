import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Title, Field, Button } from '@firedlabs/design-system'
import UserService from 'services/UserService'
import Header from 'containers/Header'
import ModalError from 'containers/ModalError'

function Profile() {
  const [activeModal, setActiveModal] = useState(false)
  const history = useHistory()

  const logout = async () => {
    try {
      await UserService.twitchRevoke()
      history.push('/')
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
      <Header />
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
