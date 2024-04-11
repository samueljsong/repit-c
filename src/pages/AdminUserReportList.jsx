import React, { useState, useEffect } from 'react';
import '../App.css';

import { useLocation, useNavigate} from 'react-router-dom';
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

function truncateTitle(title, maxLength) {
  if (title.length <= maxLength) {
    return title;
  } else {
    return title.slice(0, maxLength) + '...';
  }
}



function AdminUserReportList() {
  useAdminOnly();

  const location = useLocation();
  const navigate = useNavigate();
  const isReportListPage = location.pathname.includes('/admin-user-report-list');
  const isDashboardPage = location.pathname.includes('/AdminDashboard');

  const [reports, setReports] = useState([]);

  useEffect(() => {
    getAdminUserReports(location.state)
      .then((response) => {
        setReports(response);
      })
      .catch(() => console.log('Error fetching reports'));
  }, []);

  const handleClick = (reportId) => {
    navigate('/admin-user-report-card', { state: reportId });
  };

  return (
    <div name='page-container' className='h-screen w-full grid place-items-center bg-gray-200'>
      <div className='dashboard-div bg-white shadow'>
        <h2 name='title' className='dashboard-title'>
          List of Reports
        </h2>
        <div className='dashboard-list'>
          <div className="scrollable-list" style={{ maxHeight: isReportListPage ? 'calc(100vh - 200px)' : isDashboardPage ? 'calc(100vh - 250px)' : 'calc(100vh - 200px)' }}>
            <ul className='user-list'>
              {reports.map((report) => (
                <button
                  className='button-report max-w-md text-overflow-ellipsis whitespace-normal'
                  key={report.report_id}
                  type='button'
                  onClick={() => handleClick(report.report_id)}
                >
                  {truncateTitle(report.title, 25)}
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
