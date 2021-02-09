import { Link } from 'react-router-dom'
import { Title, FloatingButton } from '@firedlabs/design-system'

function Course() {
  return (
    <>
      <Title center big>
        Curso
      </Title>

      <FloatingButton as={Link} to="/studio/course/new">
        +
      </FloatingButton>
    </>
  )
}

export default Course
