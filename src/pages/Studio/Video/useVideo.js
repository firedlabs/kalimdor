import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import VideoService from 'services/VideoService'

function useVideo() {
  const [activeModalError, setActiveModalError] = useState(false)
  const columns = ['Nome', 'Editar']
  const [data, setData] = useState([['Carregando...', 'Carregando...']])

  useEffect(
    () =>
      (async () => {
        try {
          const res = await VideoService.getAll()
          const videos = res.data.videos.map(({ name, id }) => [
            name,
            { as: Link, to: `/studio/video/${id}`, content: 'editar' }
          ])

          setData(videos)
        } catch (err) {
          setActiveModalError(true)
        }
      })(),
    []
  )

  const actionCloseModalError = () => setActiveModalError(false)

  return { columns, data, activeModalError, actionCloseModalError }
}

export default useVideo
