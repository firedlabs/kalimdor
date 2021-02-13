import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserPermissionService from 'services/UserPermissionService'

function useUserPermission() {
  const columns = ['Name', 'Editar']
  const [data, setData] = useState([['Carregando...', 'Carregando..']])
  const [activeModalError, setActiveModalError] = useState(false)

  const actionCloseModalError = () => setActiveModalError(false)

  useEffect(
    () =>
      (async () => {
        try {
          const res = await UserPermissionService.getAll()
          const userPermissions = res.data.userPermissions.map(
            ({ name, id }) => [
              name,
              {
                content: 'editar',
                as: Link,
                to: `/admin/user/permission/${id}`
              }
            ]
          )

          setData(userPermissions)
        } catch (err) {
          setActiveModalError(true)
        }
      })(),
    []
  )

  return { columns, data, activeModalError, actionCloseModalError }
}

export default useUserPermission
