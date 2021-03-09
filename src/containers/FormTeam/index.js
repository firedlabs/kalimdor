import { Form, Field, Container, Button } from '@firedlabs/design-system'
import useFormTeam from './useFormTeam'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import ModalError from 'containers/ModalError'

function FormTeam() {
  const {
    register,
    handleSubmit,
    newTeam,
    activeModalError,
    activeLoading,
    actionCloseModalError
  } = useFormTeam()

  return (
    <Container>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <FakeLoadingScreen active={activeLoading} noPage={true} />

      <Form onSubmit={handleSubmit(newTeam)}>
        <Field.Text
          label="Nome"
          name="name"
          register={register}
          placehodler="intz"
        />

        <Button type="submit" medium>
          Enviar
        </Button>
      </Form>
    </Container>
  )
}

export default FormTeam
