import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserService from 'services/UserService'

function useForm() {
  const { login } = useParams()
  const [loginState, setLoginState] = useState('Carregando...')
  const [activeModalError, setActiveModalError] = useState(false)

  const actionCloseModalError = () => {
    setActiveModalError(false)
  }

  useEffect(
    () =>
      (async () => {
        try {
          const res = await UserService.get(login)

          setLoginState(res.data.login)
        } catch (err) {
          setActiveModalError(true)
        }
      })(),
    []
  )

  return { login: loginState, activeModalError, actionCloseModalError }
}

export default useForm
