import React from 'react'
import "../styles/ViewReportsPage.css";
import "../components/ActiveReportsComponent.jsx";

//Dependencies
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

//API
import { loggedIn } from '../api/Client'


export default function ViewReportsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Active');
  const [userReports, setUserReports] = useState([]);

  const activeReports = [
    { id: 1, title: 'Active Report 1', description: 'Description of active report 1', dateSubmitted: '2024-03-04', location: 'Room 101, Building A', status: 'Active' },
    { id: 2, title: 'Active Report 2', description: 'Description of active report 2', dateSubmitted: '2024-03-03', location: 'Room 102, Building B', status: 'Active' },
    // Add more active reports as needed
  ];
  
  // Mock data for report history
  const reportHistory = [
    { id: 3, title: 'Report History 1', description: 'Description of report history 1', dateSubmitted: '2023-12-15', location: 'Room 201, Building A', status: 'Resolved' },
    { id: 4, title: 'Report History 2', description: 'Description of report history 2', dateSubmitted: '2023-11-30', location: 'Room 202, Building B', status: 'Resolved' },
    // Add more report history entries as needed
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
    // Set userReports based on activeTab
    if (activeTab === 'Active') {
      setUserReports(activeReports);
    } else {
      setUserReports(reportHistory);
    }
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
              <h2>Active Reports</h2>
              {userReports.length === 0 ? (
                <p>No active reports</p>
              ) : (
                <ul>
                  {userReports.map(report => (
                    <li key={report.id}>{report.title}</li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className='History-div'>
              <h2>Report History</h2>
              {userReports.length === 0 ? (
                <p>No report history</p>
              ) : (
                <ul>
                  {userReports.map(report => (
                    <li key={report.id}>{report.title}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}