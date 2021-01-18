import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import UserService from 'services/UserService'

function useProfile() {
  const [user, setUser] = useState({
    login: 'carregando...',
    email: 'carregando...'
  })
  const [activeModalErrorDefault, setActiveModalModalErrorDefault] = useState(
    false
  )
  const [activeModalErrorInfosUser, setActiveModalErrorInfosUser] = useState(
    false
  )
  const history = useHistory()

  useEffect(
    () =>
      (async () => {
        try {
          const res = await UserService.getTwitch()
          const { login, email } = res.data

          setUser({ login, email })
        } catch (err) {
          setActiveModalErrorInfosUser(true)
        }
      })(),
    []
  )

  const logout = async () => {
    try {
      await UserService.twitchRevoke()
      localStorage.removeItem('avatar')
      history.push('/logout')
    } catch (err) {
      setActiveModalModalErrorDefault(true)
    }
  }

  const handleCloseModal = () => {
    setActiveModalModalErrorDefault(false)
    setActiveModalErrorInfosUser(false)
  }

  return {
    user,
    activeModalErrorDefault,
    activeModalErrorInfosUser,
    logout,
    handleCloseModal
  }
}

export default useProfile
