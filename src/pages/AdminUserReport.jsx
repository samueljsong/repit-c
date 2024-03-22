import React, { useEffect } from 'react';
import '../App.css';
import { useLocation, useNavigate } from 'react-router-dom';

import { AdminUserReportCard } from '../components/AdminUserReportCard';
import { me } from '../api/Client';

const useAdminOnly = () => {
  const navigate = useNavigate();

  useEffect(() => {
    me()
      .then((userData) => {
        if (userData && userData.user_type !== 'admin') {
          navigate('/login');
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        navigate('/login');
      });
  }, [navigate]);

  return null;
};

const AdminUserReport = function () {
  useAdminOnly();
  const location = useLocation();

  return (
    <div>
      <AdminUserReportCard reportId={location.state} />
    </div>
  );
};

export default AdminUserReport;
