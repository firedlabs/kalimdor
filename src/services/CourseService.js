import api from './api'
const CourseService = {}

CourseService.save = async (course) =>
  await api.post('/course', JSON.stringify(course))

export default CourseService
