import api from './api'
const UserService = {}

UserService.getAvatar = async () => await api.get('/user/avatar')

UserService.twitchRevoke = async () => await api.post('/user/twitch/revoke')

export default UserService
