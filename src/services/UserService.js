import api from './api'
const UserService = {}

UserService.getAll = async () => await api.get('/user')
UserService.getAvatar = async () => await api.get('/user/avatar')
UserService.getTwitch = async () => await api.get('/user/twitch')
UserService.hasAuthorized = async () => await api.get('/user/authorized')
UserService.hasAdmin = async (login) =>
  await api.get(`/user/admin/validate/${login}`)
UserService.get = async (login) => await api.get(`/user/login/${login}`)
UserService.twitchRevoke = async () => await api.post('/user/twitch/revoke')
UserService.validateTwitch = async () => await api.get('/user/twitch/validate')
UserService.hasFollowStreamer = async () => await api.get('/user/twitch/follow')
UserService.followStreamer = async () => await api.post('/user/twitch/follow')
UserService.hasSubTwitch = async () => await api.get('/user/twitch/sub')
UserService.update = async (body) =>
  await api.post('/user', JSON.stringify(body))

export default UserService
