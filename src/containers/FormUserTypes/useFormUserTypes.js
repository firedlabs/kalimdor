import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import UserPermissionService from 'services/UserPermissionService'
import UserTypesService from 'services/UserTypesService'

function useFormUserTypes() {
  const history = useHistory()
  const [activeModalError, setActiveModalError] = useState()
  const [activeLoading, setActiveLoading] = useState()
  const [permissions, setPermissions] = useState([
    { name: 'Carregando...', id: 'carregando' }
  ])
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { name: '', description: '' }
  })

  const newUserTypes = async (type) => {
    try {
      setActiveLoading(true)
      await UserTypesService.save(type)
      setActiveLoading(false)
      history.push('/admin/user/types')
    } catch (err) {
      setActiveLoading(false)
      setActiveModalError(true)
    }
  }

  useEffect(
    () =>
      (async () => {
        try {
          const res = await UserPermissionService.getAll()
          const permissions = res.data.userPermissions.map(({ name, id }) => ({
            name,
            id
          }))

          console.log('permissions', permissions)

          setPermissions(permissions)
        } catch (err) {
          setActiveLoading(false)
          setActiveModalError(true)
        }
      })(),
    []
  )

  const actionCloseModalError = () => setActiveModalError(false)

  return {
    register,
    handleSubmit,
    newUserTypes,
    activeModalError,
    actionCloseModalError,
    activeLoading,
    watch,
    permissions
  }
}

export default useFormUserTypes
