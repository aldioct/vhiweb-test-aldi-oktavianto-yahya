import axios from 'axios'

export default defineEventHandler(async event => {
    let data = {}

    try {
        const body = await readBody(event)
        const response = await axios.post(`https://reqres.in/api/login`, body)
        data = response.data
        event.node.res.statusCode = response.status || 200
        event.node.res.message = response.statusText || 'Ok'
    } catch (e: any) {
        event.node.res.statusCode = e.response.status || 500
        event.node.res.message = e.response.data.error || 'Internal server error'
    }

    return {
        data,
        meta: {
            http_status: event.node.res.statusCode,
            message: event.node.res.message,
        },
    }
})
