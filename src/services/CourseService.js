import api from './api'
const CourseService = {}

CourseService.save = async (course) =>
  await api.post('/course', JSON.stringify(course))
CourseService.getAll = async () => await api.get('/course')
CourseService.getToPlayer = async () => await api.get('/course/player')

export default CourseService
