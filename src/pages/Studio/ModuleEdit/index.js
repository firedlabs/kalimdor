import { Title } from '@firedlabs/design-system'
import FormModule from 'containers/FormModule'
import useModuleEdit from './useModuleEdit'

function ModuleEdit() {
  const { id } = useModuleEdit()

  return (
    <>
      <Title center big>
        Editar Módulo - erro no checkbox
      </Title>

      <FormModule id={id} />
    </>
  )
}

export default ModuleEdit
