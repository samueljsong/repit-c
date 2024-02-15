import React, { useState, useEffect } from 'react';
import '../styles/AdminDashboard.css';
import { client } from '../api/Client';

export const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        client.get('/admin/all')
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const filteredUsers = users.filter(user =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='main-div'>
            <div className='dashboard-div'>
                <h2>List of All Users</h2>
                <input
                    type="text"
                    placeholder="Search by email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ul>
                    {filteredUsers.map(user => (
                        <li key={user.id}>{user.email}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
