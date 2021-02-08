import { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import VideoService from 'services/VideoService'
import ModuleService from 'services/ModuleService'

function useFormModule(id) {
  const { register, handleSubmit, watch, setValue } = useForm()
  // const history = useHistory()
  const [courses] = useState(['', 'html-css'])
  const [valueCourses, setValueCourses] = useState('')
  const [videos, setVideos] = useState([
    { id: 'carregando1', name: 'Carregando...' }
  ])
  const [activeModalError, setActiveModalError] = useState(false)
  const [activeLoading, setActiveLoading] = useState(false)

  const hasId = async () => {
    if (id) {
      const res = await ModuleService.getById(id)
      const { module } = res.data
      const { name, course, description } = module

      console.log(`videos[${Object.keys(module.videos)[0]}]`)

      setValue('name', name)
      setValue('course', course)
      setValueCourses(course)
      setValue('description', description)
      setValue(`videos[${Object.keys(module.videos)[0]}]`, 'checked')
    }
    return false
  }

  useEffect(
    () =>
      (async () => {
        try {
          const res = await VideoService.getAll()
          await hasId()

          setVideos(res.data.videos)
        } catch (err) {
          setActiveModalError(true)
        }
      })(),
    []
  )

  const actionCloseModalError = () => setActiveModalError(false)

  const newModule = async (module) => {
    try {
      setActiveModalError(false)
      setActiveLoading(true)
      // await ModuleService.save(module)
      // history.push('/studio/module')
      console.log('send module', module)
      setActiveLoading(false)
    } catch (err) {
      setActiveLoading(false)
      setActiveModalError(true)
    }
  }

  const handleChange = ({ target }) => setValueCourses(target.value)

  return {
    register,
    handleSubmit,
    newModule,
    handleChange,
    courses,
    valueCourses,
    videos,
    watch,
    activeModalError,
    actionCloseModalError,
    activeLoading
  }
}

export default useFormModule
