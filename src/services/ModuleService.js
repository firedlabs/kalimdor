import api from './api'
const ModuleService = {}

ModuleService.save = async (module) =>
  await api.post('/module', JSON.stringify(module))
ModuleService.getAll = async () => await api.get('/module')
ModuleService.getById = async (id) => await api.get(`/module/id/${id}`)

export default ModuleService
