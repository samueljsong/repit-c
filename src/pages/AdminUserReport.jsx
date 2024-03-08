import React, { useState, useEffect } from 'react';
import '../App.css'

import { AdminUserReportCard } from '../components/AdminUserReportCard'
import { me } from "../api/Client";
import { useLocation, useNavigate } from 'react-router-dom';

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

export const AdminUserReport = () => {
    useAdminOnly()
    const location = useLocation()
    
    return(
        <div>
            <AdminUserReportCard reportId={location.state}/>
        </div>
    )
}

