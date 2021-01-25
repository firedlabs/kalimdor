import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import UserTypesService from 'services/UserTypesService'

function useFormUserTypes() {
  const history = useHistory()
  const [activeModalError, setActiveModalError] = useState()
  const [activeLoading, setActiveLoading] = useState()
  const { register, handleSubmit } = useForm({
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

  const actionCloseModalError = () => setActiveModalError(false)

  return {
    register,
    handleSubmit,
    newUserTypes,
    activeModalError,
    actionCloseModalError,
    activeLoading
  }
}

export default useFormUserTypes
