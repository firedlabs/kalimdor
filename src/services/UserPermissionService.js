import api from './api'
const UserPermissionService = {}

UserPermissionService.save = async (userPermission) =>
  await api.post('/user/permission', JSON.stringify(userPermission))

export default UserPermissionService
