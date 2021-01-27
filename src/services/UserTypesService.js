import api from './api'
const UserTypesService = {}

UserTypesService.save = async (body) =>
  await api.post('/user/types', JSON.stringify(body))
UserTypesService.getAll = async () => await api.get('/user/types')

export default UserTypesService
