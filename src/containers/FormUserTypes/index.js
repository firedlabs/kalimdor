import { Form, Button, Field } from '@firedlabs/design-system'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import ModalError from 'containers/ModalError'
import useFormUserTypes from './useFormUserTypes'

function FormUserTypes() {
  const {
    register,
    handleSubmit,
    newUserTypes,
    activeModalError,
    actionCloseModalError,
    activeLoading
  } = useFormUserTypes()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <FakeLoadingScreen active={activeLoading} noPage={true} />

      <Form onSubmit={handleSubmit(newUserTypes)}>
        <Field.Text
          label="Nome"
          name="name"
          register={register}
          placeholder="streamer"
        />
        <Field.Textarea
          label="Descrição"
          name="description"
          register={register}
          placeholder="Descreva o novo tipo de usuário"
        />

        <Button type="submit" medium>
          Enviar
        </Button>
      </Form>
    </>
  )
}

export default FormUserTypes
