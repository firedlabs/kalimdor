import { useState } from 'react'

function useTeam() {
  const columns = ['Nome', 'Editar']
  const [data] = useState([['Carregando...', 'Carregando...']])

  return { data, columns }
}

export default useTeam
