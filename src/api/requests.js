import axios from 'axios'

const baseURL = 'http://localhost:3000/'

export const makeRequest = ({
  url, method = 'get', data = {}, headers = {}
}) => axios({
  url,
  method,
  data,
  baseURL,
  headers
})
