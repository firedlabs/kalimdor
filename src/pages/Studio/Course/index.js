import { Link } from 'react-router-dom'
import { Title, FloatingButton, Table } from '@firedlabs/design-system'
import useCourse from './useCourse'
import ModalError from 'containers/ModalError'

function Course() {
  const { columns, data, activeModalError, actionCloseModalError } = useCourse()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />

      <Title center big>
        Curso
      </Title>

      <Table columns={columns} data={data} />

      <FloatingButton as={Link} to="/studio/course/new">
        +
      </FloatingButton>
    </>
  )
}

export default Course
