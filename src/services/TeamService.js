import api from './api'
const TeamService = {}

TeamService.getAll = async () => await api.get('/team')
TeamService.save = async (team) => await api.post('/team', JSON.stringify(team))

export default TeamService
