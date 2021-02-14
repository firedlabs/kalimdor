import { useState, useEffect } from 'react'
import UserTypesService from 'services/UserTypesService'

function useUserTypes() {
  const columns = ['Nome']
  const [activeModalError, setActiveModalError] = useState(false)
  const [data, setData] = useState([['carregando...']])

  const actionCloseModalError = () => setActiveModalError(false)

  useEffect(
    () =>
      (async () => {
        try {
          const { data } = await UserTypesService.getAll()
          console.log('data', data)
          setData(data.map(({ name }) => [name]))
        } catch (err) {
          setActiveModalError(true)
        }
      })(),
    []
  )

  return { columns, data, activeModalError, actionCloseModalError }
}

export default useUserTypes
