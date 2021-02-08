import PropTypes from 'prop-types'
import { Container, Form, Field, Button } from '@firedlabs/design-system'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import ModalError from 'containers/ModalError'
import PatentTwitch from 'containers/PatentTwitch'
import useFormModule from './useFormModule'

function FormModule({ id }) {
  const {
    register,
    handleSubmit,
    newModule,
    handleChange,
    courses,
    valueCourses,
    videos,
    watch,
    activeModalError,
    actionCloseModalError,
    activeLoading
  } = useFormModule(id)

  return (
    <Container>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <FakeLoadingScreen active={activeLoading} noPage />

      <Form onSubmit={handleSubmit(newModule)}>
        <Field.Text label="Nome" name="name" register={register} />
        <Field.Select
          label="Curso"
          options={courses}
          name="course"
          value={valueCourses}
          onChange={handleChange}
          register={register}
        />
        <Field.Textarea
          label="Descrição"
          name="description"
          register={register}
        />

        <Field.Fieldset legend="Videos">
          {videos.map(({ id, name }) => (
            <Field.Checkbox
              key={id}
              name={`videos[${id}]`}
              value={true}
              register={register}
              small
              checked
              active={watch(`videos[${id}]`)}
            >
              {name}
            </Field.Checkbox>
          ))}
        </Field.Fieldset>

        <PatentTwitch register={register} watch={watch} />

        <Button type="submit" medium>
          Enviar
        </Button>
      </Form>
    </Container>
  )
}

FormModule.defaultProps = {
  id: ''
}

FormModule.propTypes = {
  id: PropTypes.string
}

export default FormModule
