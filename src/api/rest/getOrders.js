import { makeRequest } from '../requests'

export const getOrders = () => {
    return makeRequest({
        url: `/events`
    })
}


export const updateStatus = ({ id, status }) => makeRequest({
    url: `/events/${id}`,
    method: 'PATCH',
    data: {status}
})