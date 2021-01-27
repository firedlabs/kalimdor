import { Form, Field, Button } from '@firedlabs/design-system'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import ModalError from 'containers/ModalError'
import useFormUserEdit from './useFormUserEdit'

function FormUserEdit() {
  const {
    activeModalError,
    actionCloseModalError,
    register,
    userTypes,
    valueUserTypes,
    handleChange,
    handleSubmit,
    updateUser,
    activeLoading
  } = useFormUserEdit()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <FakeLoadingScreen active={activeLoading} noPage />

      <Form onSubmit={handleSubmit(updateUser)}>
        <Field.Text label="Login" name="login" register={register} readOnly />
        <Field.Select
          label="Tipo"
          options={userTypes}
          name="type"
          value={valueUserTypes}
          onChange={handleChange}
          register={register}
        />

        <Button type="submit" medium>
          Atualizar
        </Button>
      </Form>
    </>
  )
}

export default FormUserEdit
