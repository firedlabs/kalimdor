import { useEffect, useState } from 'react'
import UserService from 'services/UserService'

const { REACT_APP_API } = process.env

function useMenu() {
  const [loading, setLoading] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [loadingMenu, setLoadingMenu] = useState(false)
  const [avatar, setAvatar] = useState(false)

  const hasLogin = async () => {
    try {
      const { data } = await UserService.getAvatar()
      setAvatar(data)
    } catch (error) {
      console.log(error)
    }
  }

  const hasAdmin = async () => {
    try {
      if (avatar) {
        setLoadingMenu(true)
        const {
          data: { login }
        } = await UserService.getTwitch()

        await UserService.hasAdmin(login)
        setLoadingMenu(false)
        setAdmin(true)
      }
    } catch (error) {
      setLoadingMenu(false)
      setAdmin(false)
    }
  }

  useEffect(() => {
    hasLogin()
  }, [])

  useEffect(() => {
    hasAdmin()
  }, [avatar])

  const signupAndLogin = (event) => {
    if (loading) {
      event.preventDefault()

      return false
    }

    setLoading(true)
  }

  return { REACT_APP_API, loading, signupAndLogin, avatar, admin, loadingMenu }
}

export default useMenu
