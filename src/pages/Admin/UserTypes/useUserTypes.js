import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserTypesService from 'services/UserTypesService'

function useUserTypes() {
  const columns = ['Nome', 'editar']
  const [activeModalError, setActiveModalError] = useState(false)
  const [data, setData] = useState([['carregando...', 'carregando...']])

  const actionCloseModalError = () => setActiveModalError(false)

  useEffect(
    () =>
      (async () => {
        try {
          const { data } = await UserTypesService.getAll()
          setData(
            data.map(({ name }) => [
              name,
              { as: Link, to: `/admin/user/types/${name}`, content: 'editar' }
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
