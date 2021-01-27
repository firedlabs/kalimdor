import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserService from 'services/UserService'

function useUser() {
  const columns = ['', 'Login', 'editar']
  const [activeModalError, setActiveModalError] = useState(false)
  const [data, setData] = useState([['...', 'Carregando...', 'Carregando...']])

  useEffect(
    () =>
      (async () => {
        try {
          const res = await UserService.getAll()
          const { users } = res.data

          setData(
            users.map(({ avatar, login }) => [
              avatar,
              login,
              { as: Link, to: `/admin/user/${login}`, content: 'editar' }
            ])
          )
        } catch (err) {
          setActiveModalError(true)
        }
      })(),
    []
  )

  const actionCloseModalError = () => setActiveModalError(false)

  return { columns, data, activeModalError, actionCloseModalError }
}

export default useUser
