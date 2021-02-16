import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserTypesService from 'services/UserTypesService'

function useUserTypes() {
  const columns = ['Nome', 'Editar']
  const [activeModalError, setActiveModalError] = useState(false)
  const [data, setData] = useState([['Carregando...', 'Carregando...']])

  const actionCloseModalError = () => setActiveModalError(false)

  useEffect(
    () =>
      (async () => {
        try {
          const { data } = await UserTypesService.getAll()
          setData(
            data.map(({ id, name }) => [
              name,
              { as: Link, to: `/admin/user/types/${id}`, content: 'Editar' }
            ])
          )
        } catch (err) {
          setActiveModalError(true)
        }
      })(),
    []
  )

  return { columns, data, activeModalError, actionCloseModalError }
}

export default useUserTypes
