import api from './api'

const VideoService = {}

VideoService.getPlaylist = async (id) => await api.get(`/video/playlist/${id}`)
VideoService.save = async (video) =>
  await api.post('/video', JSON.stringify(video))

export default VideoService
