import PropTypes from 'prop-types'
import { Form, Button } from '@firedlabs/design-system'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import ModalError from 'containers/ModalError'
import useFormVideo from './useFormVideo'

function FormVideo({ id = null }) {
  const {
    register,
    handleSubmit,
    newVideo,
    activeModalError,
    actionCloseModalError,
    activeLoading
  } = useFormVideo(id)

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <FakeLoadingScreen active={activeLoading} noPage />

      <Form onSubmit={handleSubmit(newVideo)} biggest>
        <input {...register('teste')} />

        <Button medium type="submit">
          Enviar
        </Button>
      </Form>
    </>
  )
}

FormVideo.propTypes = {
  id: PropTypes.string
}

export default FormVideo
