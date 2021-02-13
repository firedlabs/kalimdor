import { useState } from 'react'

function useUserPermission() {
  const columns = ['Name', 'Editar']
  const [data] = useState([['Carregando...', 'Carregando..']])

  return { columns, data }
}

export default useUserPermission
