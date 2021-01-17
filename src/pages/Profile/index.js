import { Container, Title, Field, Button, Box } from '@firedlabs/design-system'
import ModalError from 'containers/ModalError'
import useProfile from './useProfile'

function Profile() {
  const {
    user,
    activeModalErrorDefault,
    activeModalErrorInfosUser,
    logout,
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
