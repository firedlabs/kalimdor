import api from './api'
const UserService = {}

UserService.getAvatar = async () => await api.get('/user/avatar')

export default UserService
