import { makeRequest } from '../requests'

export const auth = ({ name, password }) => makeRequest({
    url: `/users?name=${name}&password=${password}`,
    method: 'GET',
})