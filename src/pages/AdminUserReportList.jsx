import React, { useState, useEffect } from 'react';
import '../App.css';

import { useLocation, useNavigate } from 'react-router-dom';
import { me, getAdminUserReports } from '../api/Client';

const useAdminOnly = () => {
  const navigate = useNavigate();

  useEffect(() => {
    me()
      .then((userData) => {
        if (userData && userData.user_type !== 'admin') {
          navigate('/login');
        }
      })
      .catch(() => {
        navigate('/login');
      });
  }, [navigate]);

  return null;
};

function AdminUserReportList() {
  useAdminOnly();

  const location = useLocation();
  const navigate = useNavigate();

  const [reports, setReports] = useState([]);

  useEffect(() => {
    getAdminUserReports(location.state)
      .then((response) => {
        setReports(response);
      })
      // eslint-disable-next-line no-console
      .catch(() => console.log('Error fetching reports'));
  }, []);

  const handleClick = (reportId) => {
    navigate('/admin-user-report-card', { state: reportId });
  };

  return (
    <div className='h-[100vh] w-full grid place-items-center bg-[#f9f9f9]'>
      <div className='dashboard-div mt-[12vh] h-[80%] w-[80%] bg-white shadow-'>
        <h2 name='title' className='dashboard-title'>
          List of Reports
        </h2>
        <div className='dashboard-list'>
          <div className='scrollable-list'>
            <ul className='user-list'>
              {reports.map((report) => (
                <button key={report.report_id} type='button' onClick={() => handleClick(report.report_id)}>
                  {' '}
                  {report.title}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUserReportList;
