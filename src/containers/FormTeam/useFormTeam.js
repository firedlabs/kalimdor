import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import TeamService from 'services/TeamService'

function useFormTeam() {
  const { register, handleSubmit } = useForm()
  const history = useHistory()
  const [activeModalError, setActiveModalError] = useState(false)
  const [activeLoading, setActiveLoading] = useState(false)

  const actionCloseModalError = () => setActiveModalError(false)

  const newTeam = async (data) => {
    try {
      setActiveLoading(true)
      await TeamService.save(data)
      history.push('/admin/team')
    } catch (err) {
      setActiveLoading(false)
      setActiveModalError(true)
    }
  }

  return {
    register,
    handleSubmit,
    newTeam,
    activeModalError,
    activeLoading,
    actionCloseModalError
  }
}

export default useFormTeam
