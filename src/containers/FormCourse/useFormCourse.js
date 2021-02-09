import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ModuleService from 'services/ModuleService'
import CourseService from 'services/CourseService'

function useFormCourse() {
  const history = useHistory()
  const { register, handleSubmit, watch } = useForm()
  const [activeModalError, setActiveModalError] = useState(false)
  const [modules, setModules] = useState([
    { id: '011927191918', name: 'Carregando...' }
  ])

  const actionCloseModalError = () => setActiveModalError(false)

  useEffect(
    () =>
      (async () => {
        try {
          const res = await ModuleService.getAll()
          const { modules } = res.data

          setActiveModalError(false)
          setModules(modules)
        } catch (err) {
          setActiveModalError(true)
        }
      })(),
    []
  )

  const newCourse = async (course) => {
    try {
      await CourseService.save(course)
      history.push('/studio/course')
    } catch (err) {
      setActiveModalError(true)
    }
  }

  return {
    register,
    handleSubmit,
    newCourse,
    watch,
    modules,
    activeModalError,
    actionCloseModalError
  }
}

export default useFormCourse
