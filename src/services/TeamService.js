import api from './api'
const TeamService = {}

TeamService.save = async (team) => await api.post('/team', JSON.stringify(team))

export default TeamService
