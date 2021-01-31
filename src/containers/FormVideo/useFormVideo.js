import { useState } from 'react'
import { useForm } from 'react-hook-form'
import VideoService from 'services/VideoService'

function useFormVideo() {
  const { register, handleSubmit, watch } = useForm()
  const [activeLoading, setActiveLoading] = useState(false)
  const [activeModalError, setActiveModalError] = useState(false)

  const actionCloseModalError = () => {
    setActiveModalError(false)
  }

  const newVideo = async (video) => {
    try {
      setActiveLoading(true)
      await VideoService.save(video)
      setActiveLoading(false)
    } catch (err) {
      setActiveLoading(false)
      setActiveModalError(true)
    }
  }

  return {
    register,
    handleSubmit,
    newVideo,
    watch,
    activeModalError,
    activeLoading,
    actionCloseModalError
  }
}

export default useFormVideo
