import axios from 'axios'

export const client = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {"Content-Type" : "application/json"},
    withCredentials: true
})

export const loggedIn = (navigate) => {
    client.get('/auth/me')
        .catch(() => {
            navigate('/login')
        })
}

export const logout = (navigate) => {
    client.get('/auth/logout')
        .then(json => {
            navigate('/login')
        })
}