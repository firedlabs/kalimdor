import { useParams } from 'react-router-dom'

function useModuleEdit() {
  const { id } = useParams()

  return {
    id
  }
}

export default useModuleEdit
