import { ActionCard } from '@firedlabs/design-system'
import { Link } from 'react-router-dom'
import Actions from 'containers/Actions'

function Studio() {
  return (
    <Actions>
      <ActionCard as={Link} to="/studio/video/new">
        Videos
      </ActionCard>
    </Actions>
  )
}

export default Studio
