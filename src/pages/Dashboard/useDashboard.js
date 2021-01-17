import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserService from 'services/UserService'

function useDashboard() {
  const [modalFollowStreamer, setModalFollowStreamer] = useState(false)
  const history = useHistory()

  const handleClickCover = async () => {
    try {
      await UserService.followStreamer()

      history.push('/player')
    } catch (err) {
      const { status } = err.response

      status === 401 && setModalFollowStreamer(true)
    }
  }

  const closeModalFollowStreamer = () => setModalFollowStreamer(false)

  return { handleClickCover, modalFollowStreamer, closeModalFollowStreamer }
}

export default useDashboard
