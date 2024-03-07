import React, { useState, useEffect } from 'react';
import '../App.css'

import { client, getAdminUserReports } from "../api/Client";
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';


export const AdminUserReportList = () => {
    
    const navigate = useNavigate()
    const location = useLocation()

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
        navigate('/admin-user-report', {state: reportId})
    };

    return(
        <div className='h-[100vh] w-full grid place-items-center bg-[#f9f9f9]'>
            <div className="dashboard-div mt-[12vh] relative h-[80%] w-[80%] bg-white shadow-">
                <h2 name="title" className="dashboard-title">List of Reports</h2>
                <div className="dashboard-list">
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