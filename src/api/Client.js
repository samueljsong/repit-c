import axios from 'axios'
import createToast from '../components/CreateToast';

export const client = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    headers: {"Content-Type" : "application/json"},
    withCredentials: true
})

export const loggedIn = (navigate) => {
    const { failToast } = createToast();
    return client.get('/auth/me')
        .then(response => {
            if (response.data) {
                return Promise.resolve(response.data);
            } else {
                navigate('/login');
                return Promise.reject('User not logged in');
            }
        })
        .catch(error => {
            console.error('Error checking authentication:', error);
            failToast("Failed to authenticate user. Please login.");
            navigate('/login');
            return Promise.reject(error);
        });
};

export const logout = (navigate) => {
    client.get('/auth/logout')
        .then(json => {
            navigate('/login')
        })
}

export const me = () => {
    return client.get('/auth/me')
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error('Error checking authentication:', error);
            return Promise.reject(error);
        });
}

export const getLocationTagById = (locationTagId) => {
    return client.get(`/user/locationTagIds/${locationTagId}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching location tag:', error);
            return Promise.reject(error);
        });
}

export const getAdminAll = () => {
    return client.get('/admin/all')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching admin all:', error);
            return Promise.reject(error);
        });
}

export const getAdminUserReports = (userId) => {
    return client.get(`/admin/${userId}/reports`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching admin all:', error);
            return Promise.reject(error);
        });
}

export const getAdminUserReport = (reportId) => {
    return client.get(`/admin/${reportId}/report`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching admin all:', error);
            return Promise.reject(error);
        });
}

export const getLocationByIdAdmin = (locationTagId) => {
    return client.get(`/admin/${locationTagId}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching location tag:', error);
            return Promise.reject(error);
        });
}

export const updateReportStateAdmin = (reportId, state) => {
    return client.patch(`/admin/${reportId}/change-state/${state}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error updating user report state:', error);
            return Promise.reject(error);
        });
}