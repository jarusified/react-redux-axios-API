import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

const agent = superagentPromise(_superagent, global.Promise)

const API_ROOT = 'http://localhost:3001'

const responseBody = res => res.body

const requests = {
    get: (url, query) => agent.get(`${API_ROOT}${url}`).query(query).then(responseBody)
}

const iciSank = {
    getStats: () => requests.get('/fetchStats'),
    getState: (query) => requests.get('/fetchSequenceState', query)
}

export default {
    iciSank
}
