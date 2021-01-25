import { Form, Button, Field } from '@firedlabs/design-system'
import ModalError from 'containers/ModalError'
import useFormUserTypes from './useFormUserTypes'

function FormUserTypes() {
  const {
    register,
    handleSubmit,
    newUserTypes,
    activeModalError,
    actionCloseModalError
  } = useFormUserTypes()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />
      <Form onSubmit={handleSubmit(newUserTypes)}>
        <Field.Text label="Nome" name="name" register={register} />
        <Field.Textarea
          label="Descrição"
          name="description"
          register={register}
        />

        <Button type="submit" medium>
          Enviar
        </Button>
      </Form>
    </>
  )
}

export default FormUserTypes
