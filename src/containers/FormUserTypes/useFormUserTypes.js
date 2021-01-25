import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import UserTypesService from 'services/UserTypesService'

function useFormUserTypes() {
  const history = useHistory()
  const [activeModalError, setActiveModalError] = useState()
  const { register, handleSubmit } = useForm({
    defaultValues: { name: '', description: '' }
  })

  const newUserTypes = async (type) => {
    try {
      console.log('type', type)
      await UserTypesService.save(type)
      history.push('/admin/user/types')
    } catch (err) {
      console.log('err', err)
      setActiveModalError(true)
    }
  }

  const actionCloseModalError = () => setActiveModalError(false)

  return {
    register,
    handleSubmit,
    newUserTypes,
    activeModalError,
    actionCloseModalError
  }
}

export default useFormUserTypes
