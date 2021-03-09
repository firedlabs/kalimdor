import { Link } from 'react-router-dom'
import { Title, FloatingButton, Table } from '@firedlabs/design-system'
import useTeam from './useTeam'

function Team() {
  const { columns, data } = useTeam()

  return (
    <>
      <Title center biggest>
        Times
      </Title>

      <Table columns={columns} data={data} />

      <FloatingButton as={Link} to="/admin/team/new">
        +
      </FloatingButton>
    </>
  )
}

export default Team
