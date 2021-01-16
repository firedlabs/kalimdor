import api from './api'
const UserService = {}

UserService.getAvatar = async () => await api.get('/user/avatar')
UserService.twitchRevoke = async () => await api.post('/user/twitch/revoke')
UserService.getTwitch = async () => await api.get('/user/twitch')

export default UserService
