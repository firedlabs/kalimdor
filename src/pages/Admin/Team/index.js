import { Link } from 'react-router-dom'
import { Title, FloatingButton } from '@firedlabs/design-system'

function Team() {
  return (
    <>
      <Title center biggest>
        Times
      </Title>

      <FloatingButton as={Link} to="/admin/team/new">
        +
      </FloatingButton>
    </>
  )
}

export default Team
