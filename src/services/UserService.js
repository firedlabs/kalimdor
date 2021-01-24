import api from './api'
const UserService = {}

UserService.getAll = async () => await api.get('/user')
UserService.getAvatar = async () => await api.get('/user/avatar')
UserService.twitchRevoke = async () => await api.post('/user/twitch/revoke')
UserService.getTwitch = async () => await api.get('/user/twitch')
UserService.validateTwitch = async () => await api.get('/user/twitch/validate')
UserService.hasFollowStreamer = async () => await api.get('/user/twitch/follow')
UserService.followStreamer = async () => await api.post('/user/twitch/follow')
UserService.hasSubTwitch = async () => await api.get('/user/twitch/sub')

export default UserService
