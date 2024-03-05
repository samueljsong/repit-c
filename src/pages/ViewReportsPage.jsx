import React from 'react'
import "../styles/ViewReportsPage.css";
import winstonImage from "../images/winston.png";
import ReportsComponent from '../components/ReportsComponent'; // Import ReportsComponent

//Dependencies
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

//API
import { loggedIn } from '../api/Client'


export default function ViewReportsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Active');
  const [activeReports, setActiveReports] = useState([]);
  const [historyReports, setHistoryReports] = useState([]);

  const fakeActiveReports = [
    { id: 1, title: 'Active Report 1', description: 'Description of active report 1 Description of active report 1 Description of active report 1 Description of active report 1 Description of active report 1', date_submitted: '2024-03-04', location: 'Room 101, Building A', status: 'unread', report_image: winstonImage},
    { id: 2, title: 'Active Report 2', description: 'Description of active report 2', date_submitted: '2024-03-03', location: 'Room 102, Building B', status: 'resolved', report_image: winstonImage },
    { id: 3, title: 'Active Report 3', description: 'Description of active report 3', date_submitted: '2024-03-04', location: 'Room 103, Building A', status: 'rejected', report_image: winstonImage},
    { id: 4, title: 'Active Report 4', description: 'Description of active report 4', date_submitted: '2024-03-03', location: 'Room 104, Building B', status: 'in-progress', report_image: winstonImage},
    // Add more active reports as needed
  ];
  
  // Mock data for report history
  const fakeReportHistory = [
    { id: 3, title: 'Report History 1', description: 'Description of report history 1', date_submitted: '2023-12-15', location: 'Room 201, Building A', status: 'resolved', report_image: winstonImage},
    { id: 4, title: 'Report History 2', description: 'Description of report history 2', date_submitted: '2023-11-30', location: 'Room 202, Building B', status: 'resolved', report_image: winstonImage },
    { id: 5, title: 'Report History 3', description: 'Description of report history 3', date_submitted: '2023-12-15', location: 'Room 203, Building A', status: 'resolved', report_image: winstonImage },
    { id: 6, title: 'Report History 4', description: 'Description of report history 4', date_submitted: '2023-11-30', location: 'Room 204, Building B', status: 'resolved', report_image: winstonImage },
  ];

  useEffect(() => {
    loggedIn(navigate)
      .then(() => {
        fetchUserReports();
      })
      .catch(error => {
        console.error('Error:', error);
        navigate('/login');
      });
  }, [navigate]);

  const fetchUserReports = () => {
    setActiveReports(fakeActiveReports);
    setHistoryReports(fakeReportHistory);

    // Set userReports based on activeTab
    // if (activeTab === 'Active') {
    //   setUserReports(activeReports);
    // } else {
    //   setUserReports(reportHistory);
    // }
  };

  return (
    <div className='pt-20'>
      <div className='main-content-holder'>
        <div className='new-repit-submit-div'>
          <button className='new-repit-submit-btn' onClick={() => navigate('/create')}>New Repit</button>
        </div>
        <div className='swtich-content-buttons-div'>
          <button className={`switch-content-btn ${activeTab === 'Active' ? 'active' : ''}`} onClick={() => setActiveTab('Active')}>Active</button>
          <button className={`switch-content-btn ${activeTab === 'History' ? 'active' : ''}`} onClick={() => setActiveTab('History')}>History</button>
        </div>
        <div className='main-content'>
          {activeTab === 'Active' ? (
            <div className='Active-div'>
              {/* <h2>Active Reports</h2> */}
              {activeReports.length === 0 ? (
                <p>No active reports</p>
              ) : (
                <div>
                  {activeReports.map(report => (
                    <ReportsComponent key={report.id} report={report} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className='History-div'>
              {/* <h2>Report History</h2> */}
              {historyReports.length === 0 ? (
                <p>No report history</p>
              ) : (
                <div>
                  {historyReports.map(report => (
                    <ReportsComponent key={report.id} report={report} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}