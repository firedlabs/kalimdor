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

  useEffect(() => {
    hasLogin()
    hasAdmin()
  }, [])

  const hasAdmin = async () => {
    try {
      setLoadingMenu(true)
      const token = Cookie.get('token')
      await UserService.hasAdmin(token)
      setLoadingMenu(false)
      setAdmin(true)
    } catch (error) {
      setLoadingMenu(false)
      setAdmin(false)
    }
  }

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
