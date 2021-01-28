import { Container, Title, Field, Button, Form } from '@firedlabs/design-system'
import ModalError from 'containers/ModalError'
import { Link } from 'react-router-dom'
import useProfile from './useProfile'

function Profile() {
  const {
    register,
    activeModalErrorDefault,
    activeModalErrorInfosUser,
    handleCloseModal
  } = useProfile()

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
          Infelizmente não consegui carregar as infos do seu usuário. Estamos
          com alguma instabilidade no servidor ou na twitch, tente mais tarde e
          se não der vai pentelhar o dev na{' '}
          <a href="https://twitch.tv/marcobrunodev">twitch.tv/marcobrunodev</a>
        </>
      </ModalError>

      <Container>
        <Title>Dados da Twitch</Title>

        <Form>
          <Field.Text label="Login" name="login" register={register} readOnly />
          <Field.Email name="email" register={register} readOnly />

          <Button medium as={Link} to="/logout">
            Logout
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Profile
