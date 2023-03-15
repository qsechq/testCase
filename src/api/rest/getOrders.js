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

export const deleteOrder = ({ id }) => makeRequest({
    url: `/events/${id}`,
    method: 'DELETE'
})

export const createOrder = ({ id, address, date, status, comment, name }) => makeRequest({
    url: `/events`,
    method: 'POST',
    data: {
        id,
        address,
        date,
        status,
        comment,
        name
    }
})
