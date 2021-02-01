import { Title, Table } from '@firedlabs/design-system'
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
    </>
  )
}

export default Video
