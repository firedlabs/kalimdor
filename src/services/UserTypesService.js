import api from './api'
const UserTypesService = {}

UserTypesService.save = async (body) =>
  await api.post('/user/types', JSON.stringify(body))

export default UserTypesService
