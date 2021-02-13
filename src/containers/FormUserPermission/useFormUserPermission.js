import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import UserPermissionService from 'services/UserPermissionService'

function useFormUserPermission() {
  const history = useHistory()
  const [activeLoading, setActiveLoading] = useState(false)
  const [activeModalError, setActiveModalError] = useState(false)
  const { register, handleSubmit } = useForm()

  const newUserPermission = async (userPermission) => {
    try {
      setActiveLoading(true)
      await UserPermissionService.save(userPermission)
      setActiveLoading(false)

      history.push('/admin/user/permission')
    } catch (err) {
      setActiveLoading(false)
      setActiveModalError(true)
    }
  }

  const handleCloseModalError = () => setActiveModalError(false)

  return {
    register,
    handleSubmit,
    newUserPermission,
    activeModalError,
    activeLoading,
    handleCloseModalError
  }
}

export default useFormUserPermission
