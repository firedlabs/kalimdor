import PropTypes from 'prop-types'
import { Form, Button, Field } from '@firedlabs/design-system'
import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import ModalError from 'containers/ModalError'
import useFormUserTypes from './useFormUserTypes'

function FormUserTypes({ id }) {
  const {
    register,
    handleSubmit,
    newOrUpdateUserTypes,
    activeModalError,
    actionCloseModalError,
    activeLoading,
    watch,
    permissions
  } = useFormUserTypes(id)

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <FakeLoadingScreen active={activeLoading} noPage={true} />

      <Form onSubmit={handleSubmit(newOrUpdateUserTypes)} biggest>
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

        <Field.Fieldset legend="Permissões">
          {permissions.map(({ id, name }) => (
            <Field.Checkbox
              key={id}
              name={`permissions[${id}]`}
              register={register}
              active={watch(`permissions[${id}]`)}
              value={true}
              small
            >
              {name}
            </Field.Checkbox>
          ))}
        </Field.Fieldset>

        <Button type="submit" medium>
          Enviar
        </Button>
      </Form>
    </>
  )
}

FormUserTypes.defaulProps = {
  id: ''
}

FormUserTypes.propTypes = {
  id: PropTypes.string
}

export default FormUserTypes
