import { useEffect, useState } from 'react'
import UserService from 'services/UserService'
import Cookie from 'js-cookie'

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
      const token = Cookie.get('token')

      console.log(token)

      if (token) {
        setLoadingMenu(true)
        await UserService.hasAdmin()
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
    hasAdmin()
  }, [])

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
