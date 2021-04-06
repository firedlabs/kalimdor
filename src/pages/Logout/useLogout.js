import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'
import UserService from 'services/UserService'

function useLogout() {
  const [activeLoading, setActiveLoading] = useState(true)
  const [activeModalError, setActiveModalError] = useState(false)
  const history = useHistory()

  useEffect(
    () =>
      (async () => {
        try {
          await UserService.twitchRevoke()
          localStorage.removeItem('avatar')
          Cookie.remove('token')
          setActiveLoading(false)
          history.push('/')
        } catch (err) {
          setActiveLoading(false)
          setActiveModalError(true)
        }
      })(),
    []
  )

  const actionCloseModalError = () => {
    setActiveModalError(false)
    history.push('/')
  }

  return { activeLoading, activeModalError, actionCloseModalError }
}

export default useLogout
