import api from './api'

const VideoService = {}

VideoService.getPlaylist = async (id) => await api.get(`/video/playlist/${id}`)
