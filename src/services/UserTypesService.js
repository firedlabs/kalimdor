import api from './api'
const UserTypesService = {}

UserTypesService.save = async (body) =>
  await api.post('/user/types', JSON.stringify(body))
UserTypesService.getAll = async () => await api.get('/user/types')
UserTypesService.getById = async (id) => await api.get(`/user/types/edit/${id}`)
UserTypesService.update = async (body) =>
  await api.post('/user/types/update', JSON.stringify(body))

export default UserTypesService
