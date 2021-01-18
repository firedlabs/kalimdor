import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserService from 'services/UserService'

function useDashboard() {
  const [modalFollowStreamer, setModalFollowStreamer] = useState(false)
  const [modalError, setModalError] = useState(false)
  const history = useHistory()
  const { REACT_APP_API } = process.env

  const handleClickCover = async () => {
    try {
      await UserService.hasFollowStreamer()

      history.push('/player')
    } catch (err) {
      const { status } = err.response || false

      if (status === 401) {
        setModalFollowStreamer(true)
      } else {
        window.location = `${REACT_APP_API}/api/auth/twitch/`
      }
    }
  }

  const closeModalFollowStreamer = () => setModalFollowStreamer(false)
  const closeModalError = () => setModalError(false)

  const followStreamer = async () => {
    try {
      await UserService.followStreamer()
      setModalFollowStreamer(false)
      history.push('/player')
    } catch (err) {
      setModalFollowStreamer(false)
      setModalError(true)
    }
  }

  return {
    handleClickCover,
    modalFollowStreamer,
    closeModalFollowStreamer,
    followStreamer,
    modalError,
    closeModalError
  }
}

export default useDashboard
