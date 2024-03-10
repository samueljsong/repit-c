import React, { useState, useEffect } from 'react';
import '../App.css'

import { me, getAdminUserReports } from "../api/Client";
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

export const AdminUserReportList = () => {
    useAdminOnly()

    const location = useLocation()
	const navigate = useNavigate();
	
    const [reports, setReports] = useState([]);

    useEffect(() => {
        getAdminUserReports(location.state)
          .then((response) => {
            setReports(response);
            console.log(response);
          })
          .catch((error) => console.error("Error fetching users reports:", error));
      }, []);

    const handleClick = (reportId) => {
        console.log(`Report with ID ${reportId} clicked`);
        navigate('/admin-user-report-card', {state: reportId})
    };

    return(
        <div className='h-[100vh] w-full grid place-items-center bg-[#f9f9f9] overflow-hidden'>
            <div className="h-[80%] w-[80%] bg-white shadow-lg rounded-lg mt-[10vh]">
                <h2 name="title" className="dashboard-title">List of Reports</h2>
                <div className="p-[20px] pt-[10px] h-[80%]">
                    <div className="scrollable-list">
                        <ul className="user-list">
                        {reports.map((report) => (
                            <button
                            key={report.report_id}
                            onClick={() => handleClick(report.report_id)}
                            >
                            {" "}
                            {report.title}
                            </button>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}