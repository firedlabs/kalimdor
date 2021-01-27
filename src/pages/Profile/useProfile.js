import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import UserService from 'services/UserService'

function useProfile() {
  const { register, setValue } = useForm()
  const [activeModalErrorDefault, setActiveModalModalErrorDefault] = useState(
    false
  )
  const [activeModalErrorInfosUser, setActiveModalErrorInfosUser] = useState(
    false
  )

  useEffect(
    () =>
      (async () => {
        try {
          const res = await UserService.getTwitch()
          const { login, email } = res.data

          setValue('login', login)
          setValue('email', email)
        } catch (err) {
          setActiveModalErrorInfosUser(true)
        }
      })(),
    []
  )

  const handleCloseModal = () => {
    setActiveModalModalErrorDefault(false)
    setActiveModalErrorInfosUser(false)
  }

  return {
    register,
    activeModalErrorDefault,
    activeModalErrorInfosUser,
    handleCloseModal
  }
}

export default useProfile
