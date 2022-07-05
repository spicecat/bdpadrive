import superagent from 'superagent'
import superagentCache from 'superagent-cache'
import Cookies from 'universal-cookie'

import { API, SERVER, API_KEY } from '../var.js'

superagentCache(superagent, null, { preventDuplicateCalls: true })
const cookies = new Cookies()

export const register = async () => {
}

export const login = async () => {
}

export const logout = () => {
}