import { Box, Field } from '@firedlabs/design-system'
import ModalError from 'containers/ModalError'
import useForm from './useForm'

function FormUserEdit() {
  const { login, activeModalError, actionCloseModalError } = useForm()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <Box as="form">
        <Field.Text label="Login" value={login} readOnly />
      </Box>
    </>
  )
}

export default FormUserEdit
