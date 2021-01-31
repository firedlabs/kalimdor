import { Form, Field, Button } from '@firedlabs/design-system'
import Checkboxs from 'containers/Checkboxs'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import ModalError from 'containers/ModalError'
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

        <Checkboxs>
          <Field.Checkbox
            name="viewer"
            active={watch('viewer')}
            register={register}
          >
            Viewer
          </Field.Checkbox>
          <Field.Checkbox
            name="follow"
            register={register}
            active={watch('follow')}
          >
            Follow
          </Field.Checkbox>
          <Field.Checkbox name="vip" register={register} active={watch('vip')}>
            Vip
          </Field.Checkbox>
          <Field.Checkbox name="sub" register={register} active={watch('sub')}>
            Sub
          </Field.Checkbox>
          <Field.Checkbox name="mod" register={register} active={watch('mod')}>
            Mod
          </Field.Checkbox>
        </Checkboxs>

        <Button medium type="submit">
          Enviar
        </Button>
      </Form>
    </>
  )
}

export default FormVideo
