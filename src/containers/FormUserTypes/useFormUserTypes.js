import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useHistory } from 'react-router-dom'
import UserPermissionService from 'services/UserPermissionService'
import UserTypesService from 'services/UserTypesService'

function useFormUserTypes() {
  const { id } = useParams()
  const history = useHistory()
  const [activeModalError, setActiveModalError] = useState()
  const [activeLoading, setActiveLoading] = useState()
  const [permissions, setPermissions] = useState([
    { name: 'Carregando...', id: 'carregando' }
  ])
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: { name: '', description: '' }
  })

  const newOrUpdateUserTypes = async (type) => {
    try {
      setActiveLoading(true)
      if (id) {
        console.log({ ...type, id })

        await UserTypesService.update({ ...type, id })
      } else {
        await UserTypesService.save(type)
      }
      setActiveLoading(false)
      history.push('/admin/user/types')
      console.log('type', type)
    } catch (err) {
      setActiveLoading(false)
      setActiveModalError(true)
    }
  }

  const hasId = async () => {
    setActiveLoading(true)
    const res = await UserTypesService.getById(id)
    const { name, description, permissions } = res.data.userType

    setValue('name', name)
    setValue('description', description)

    const idPermissions = Object.keys(permissions)
    const idPermissionsActive = idPermissions.filter((id) => permissions[id])

    idPermissionsActive.forEach((id) => {
      setValue(`permissions[${id}]`, 'true')
    })
    setActiveLoading(false)
  }

  useEffect(
    () =>
      (async () => {
        try {
          setActiveLoading(true)
          const res = await UserPermissionService.getAll()
          const permissions = res.data.userPermissions.map(({ name, id }) => ({
            name,
            id
          }))

          setPermissions(permissions)
          setActiveLoading(false)
        } catch (err) {
          setActiveLoading(false)
          setActiveModalError(true)
        }
      })(),
    []
  )

  useEffect(
    () =>
      (async () => {
        await hasId()
      })(),
    [permissions]
  )

  const actionCloseModalError = () => setActiveModalError(false)

  return {
    register,
    handleSubmit,
    newOrUpdateUserTypes,
    activeModalError,
    actionCloseModalError,
    activeLoading,
    watch,
    permissions
  }
}

export default useFormUserTypes
