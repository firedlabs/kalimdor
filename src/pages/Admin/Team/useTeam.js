import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TeamService from 'services/TeamService'

function useTeam() {
  const columns = ['Nome', 'Editar']
  const [data, setData] = useState([['Carregando...', 'Carregando...']])

  useEffect(
    () =>
      (async () => {
        try {
          const { data } = await TeamService.getAll()
          setData(() =>
            data.map(({ id, name }) => [
              name,
              { as: Link, to: `/admin/team/${id}`, content: 'Editar' }
            ])
          )
        } catch (err) {
          console.log('err', err)
        }
      })(),
    []
  )

  return { data, columns }
}

export default useTeam
