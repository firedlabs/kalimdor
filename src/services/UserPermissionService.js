import api from './api'
const UserPermissionService = {}

UserPermissionService.save = async (userPermission) =>
  await api.post('/user/permission', JSON.stringify(userPermission))
UserPermissionService.getAll = async () => await api.get('/user/permission')

export default UserPermissionService
