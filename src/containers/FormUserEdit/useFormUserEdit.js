import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import UserService from 'services/UserService'
import UserTypesService from 'services/UserTypesService'

function useFormUserEdit() {
  const { login } = useParams()
  const history = useHistory()
  const { register, setValue, handleSubmit } = useForm({
    defaultValues: { login, type: 'Carregando...' }
  })
  const [userTypes, setUserTypes] = useState(['Carregando...'])
  const [activeLoading, setActiveLoading] = useState(false)
  const [valueUserTypes, setValueUserTypes] = useState('Carregando...')
  const [activeModalError, setActiveModalError] = useState(false)

  const actionCloseModalError = () => {
    setActiveModalError(false)
  }

  const handleChange = ({ target }) => setValueUserTypes(target.value)

  const updateUser = async (user) => {
    try {
      setActiveLoading(true)
      await UserService.update(user)
      setActiveLoading(false)
      history.push('/admin/user')
    } catch (err) {
      setActiveLoading(false)
      setActiveModalError(true)
    }
  }

  useEffect(
    () =>
      (async () => {
        try {
          const resUser = await UserService.get(login)
          const { data } = await UserTypesService.getAll()

          setValue('login', resUser.data.login)
          setValueUserTypes(resUser.data.type)
          setUserTypes(data.map(({ name }) => name))
        } catch (err) {
          setActiveModalError(true)
        }
      })(),
    []
  )

  return {
    activeModalError,
    actionCloseModalError,
    register,
    userTypes,
    valueUserTypes,
    handleChange,
    handleSubmit,
    updateUser,
    activeLoading
  }
}

export default useFormUserEdit
