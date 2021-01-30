import { useForm } from 'react-hook-form'

function useFormVideo() {
  const { register, handleSubmit } = useForm()

  const newVideo = async (video) => {
    try {
      // await VideoService.save(video)
    } catch (err) {}
  }

  return { register, handleSubmit, newVideo }
}

export default useFormVideo
