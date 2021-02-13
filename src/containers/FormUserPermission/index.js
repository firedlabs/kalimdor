import { Form, Field, Button } from '@firedlabs/design-system'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import ModalError from 'containers/ModalError'
import useFormUserPermission from './useFormUserPermission'

function FormUserPermission() {
  const {
    register,
    handleSubmit,
    newUserPermission,
    activeModalError,
    handleCloseModalError,
    activeLoading
  } = useFormUserPermission()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={handleCloseModalError}
      />

      <FakeLoadingScreen active={activeLoading} noPage />

      <Form onSubmit={handleSubmit(newUserPermission)}>
        <Field.Text
          label="Nome"
          name="name"
          placeholder="Lista de usuário"
          register={register}
        />

        <Field.Text
          label="Caminho"
          name="path"
          placeholder="/admin/user"
          register={register}
        />

        <Field.Textarea
          label="Descrição"
          name="description"
          placeholder="Descriva a permissão"
          register={register}
        />

        <Button medium>Enviar</Button>
      </Form>
    </>
  )
}

export default FormUserPermission
