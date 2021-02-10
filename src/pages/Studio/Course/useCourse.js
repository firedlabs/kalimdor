import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CourseService from 'services/CourseService'

function useCourse() {
  const columns = ['Nome', 'Editar']
  const [data, setData] = useState([['Carregando...', 'Carregando..']])
  const [activeModalError, setActiveModalError] = useState(false)

  useEffect(
    () =>
      (async () => {
        try {
          const res = await CourseService.getAll()
          const courses = res.data.courses.map(({ name, id }) => [
            name,
            { as: Link, to: `/studio/course/${id}`, content: 'editar' }
          ])

          setData(courses)
        } catch (err) {
          setActiveModalError(true)
        }
      })(),
    []
  )

  const actionCloseModalError = () => setActiveModalError(false)

  return { columns, data, activeModalError, actionCloseModalError }
}

export default useCourse
