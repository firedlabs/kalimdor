import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ModuleService from 'services/ModuleService'

function useModule() {
  const columns = ['Nome', 'Editar']
  const [activeModalError, setActiveModalError] = useState(false)
  const [data, setData] = useState([['Carregando...', 'Carregando...']])

  const actionCloseModalError = () => setActiveModalError(false)

  useEffect(
    () =>
      (async () => {
        try {
          const res = await ModuleService.getAll('/module')
          const modules = res.data.modules.map(({ id, name }) => [
            name,
            { as: Link, to: `/studio/module/${id}`, content: 'editar' }
          ])

          setData(modules)
        } catch (err) {
          setActiveModalError(true)
        }
      })(),
    []
  )

  return {
    columns,
    data,
    activeModalError,
    actionCloseModalError
  }
}

export default useModule
