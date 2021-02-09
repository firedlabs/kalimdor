import { Container, Form, Field, Button } from '@firedlabs/design-system'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import ModalError from 'containers/ModalError'
import PatentTwitch from 'containers/PatentTwitch'
import useFormCourse from './useFormCourse'

function FormCourse() {
  const {
    register,
    handleSubmit,
    newCourse,
    watch,
    modules,
    activeModalError,
    actionCloseModalError,
    activeLoading
  } = useFormCourse()

  return (
    <Container>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <FakeLoadingScreen active={activeLoading} noPage />

      <Form onSubmit={handleSubmit(newCourse)} biggest>
        <Field.Text
          name="name"
          label="Nome"
          register={register}
          placeholder="Curso de HTML e CSSS"
        />

        <Field.Text
          name="shortName"
          label="Nome curto"
          register={register}
          placeholder="html-css"
        />

        <Field.Text
          name="thumbnail"
          label="Thumbnail"
          register={register}
          placeholder="310x400"
        />

        <Field.Textarea
          name="description"
          label="Descrição"
          register={register}
          placeholder="Escreva o objetivo do curso e outras coisas mais"
        />

        <Field.Text
          name="tags"
          label="Tags"
          register={register}
          placeholder="html, css"
        />

        <Field.Fieldset legend="Módulos">
          {modules.map(({ id, name }) => (
            <Field.Checkbox
              key={id}
              name={`modules[${id}]`}
              register={register}
              active={watch(`modules[${id}]`)}
              value={true}
              small
            >
              {name}
            </Field.Checkbox>
          ))}
        </Field.Fieldset>

        <PatentTwitch register={register} watch={watch} />

        <Button medium>Enviar</Button>
      </Form>
    </Container>
  )
}

export default FormCourse
