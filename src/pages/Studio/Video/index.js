import { Title, Table, FloatingButton } from '@firedlabs/design-system'
import { Link } from 'react-router-dom'
import ModalError from 'containers/ModalError'
import useVideo from './useVideo'

function Video() {
  const { columns, data, activeModalError, actionCloseModalError } = useVideo()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />
      <Title center big>
        Todos os vídeos
      </Title>
      <Table columns={columns} data={data} />

      <FloatingButton as={Link} to="/studio/video/new">
        +
      </FloatingButton>
    </>
  )
}

export default Video
