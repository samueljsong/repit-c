import React, { useEffect } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { me } from '../api/Client';
import { AdminDashboardCard } from '../components/AdminDashboardCard'

const useAdminOnly = () => {
  const navigate = useNavigate();

  useEffect(() => {
    me()
      .then(userData => {
        if (userData && userData.user_type !== 'admin') {
          navigate('/login'); 
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        navigate('/login'); 
      });
  }, [navigate]);

  return null;
};

export const AdminDashboardPage = () => {
  useAdminOnly();

  return (
    <div>
      <AdminDashboardCard />
    </div>
  );
};
