import React, { useState, useEffect } from 'react';
import '../App.css'

import { AdminUserReportCard } from '../components/AdminUserReportCard'
import { getAdminUserReport } from "../api/Client";
import { useLocation } from 'react-router-dom';

export const AdminUserReport = () => {

    const location = useLocation()

    const [report, setReport] = useState([])

    useEffect(() => {
        getAdminUserReport(location.state)
          .then((response) => {
            setReport(response[0]);
            console.log(response);
          })
          .catch((error) => console.error("Error fetching users reports:", error));
    }, []);

    return(
        <div>
            <AdminUserReportCard title={report.title} desc={report.description} status={report.status_id} location={report.location_tag_id}/>
        </div>
    )
}

