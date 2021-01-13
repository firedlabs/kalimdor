import axios from 'axios'

const { REACT_APP_API } = process.env

const instance = axios.create({
  baseURL: `${REACT_APP_API}/api`,
  withCredentials: true
})

export default instance
