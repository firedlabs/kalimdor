import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserService from 'services/UserService'

function useDashboard() {
  const [modalFollowStreamer, setModalFollowStreamer] = useState(false)
  const [modalError, setModalError] = useState(false)
  const history = useHistory()

  const handleClickCover = async () => {
    try {
      await UserService.hasFollowStreamer()

      history.push('/player')
    } catch (err) {
      const { status } = err.response

      status === 401 && setModalFollowStreamer(true)
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
