import { Form, Field, Button } from '@firedlabs/design-system'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import ModalError from 'containers/ModalError'
import PatentTwitch from 'containers/PatentTwitch'
import useFormVideo from './useFormVideo'

function FormVideo() {
  const {
    register,
    handleSubmit,
    newVideo,
    watch,
    activeModalError,
    actionCloseModalError,
    activeLoading
  } = useFormVideo()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <FakeLoadingScreen active={activeLoading} noPage />

      <Form onSubmit={handleSubmit(newVideo)} biggest>
        <Field.Text
          label="Nome"
          placeholder="Nome do video"
          name="name"
          register={register}
        />

        <Field.Text
          label="URL"
          placeholder="URL do vídeo"
          name="url"
          register={register}
        />

        <Field.Text
          label="Thumbnail"
          placeholder="URL da thumbnail"
          name="thumbnail"
          register={register}
        />

        <Field.Textarea
          label="Descrição"
          placeholder="Descreve o conteúdo do vídeo com 280 letras felizes"
          name="description"
          register={register}
        />

        <Field.Text
          label="Tags"
          placeholder="tag,"
          name="tags"
          register={register}
        />

        <PatentTwitch watch={watch} register={register} />

        <Button medium type="submit">
          Enviar
        </Button>
      </Form>
    </>
  )
}

export default FormVideo
