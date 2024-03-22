import React from 'react';
import '../styles/ViewReportsPage.css';
import winstonImage from '../images/winston.png';
import ReportsComponent from '../components/ReportsComponent';

//Dependencies
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

//API
import { client, loggedIn, me } from '../api/Client';

export default function ViewReportsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Active');
  const [activeReports, setActiveReports] = useState([]);
  const [historyReports, setHistoryReports] = useState([]);

  useEffect(() => {
    loggedIn(navigate)
      .then(() => {
        me()
          .then((user) => {
            fetchUserReports(user.user_id);
          })
          .catch((error) => {
            console.error('Error:', error);
            navigate('/login');
          });
      })
      .catch((error) => {
        console.error('Error:', error);
        navigate('/login');
      });
  }, [navigate]);

  const fetchUserReports = (userId) => {
    client
      .get(`user/${userId}/reports`)
      .then((response) => {
        console.log('user Id:', userId);
        console.log('response:', response.data);

        const reports = Object.values(response.data);

        const activeReportsFiltered = reports.filter((report) => {
          return report.status_id === 1 || report.status_id === 4;
        });

        const historyReportsFiltered = reports.filter((report) => {
          console.log('History Report:', report);
          return report.status_id === 2 || report.status_id === 3;
        });

        setActiveReports(activeReportsFiltered);
        setHistoryReports(historyReportsFiltered);

        console.log('Active Reports:', activeReportsFiltered);
        console.log('History Reports:', historyReportsFiltered);
      })
      .catch((error) => {
        console.error('Error fetching user reports:', error);
      });
  };

  return (
    <div className='pt-20'>
      <div className='main-content-holder'>
        <div className='new-repit-submit-div'>
          <button className='new-repit-submit-btn' onClick={() => navigate('/create')}>
            New Repit
          </button>
        </div>
        <div className='swtich-content-buttons-div'>
          <button
            className={`switch-content-btn ${activeTab === 'Active' ? 'active' : ''}`}
            onClick={() => setActiveTab('Active')}
          >
            Active
          </button>
          <button
            className={`switch-content-btn ${activeTab === 'History' ? 'active' : ''}`}
            onClick={() => setActiveTab('History')}
          >
            History
          </button>
        </div>
        <div className='main-content'>
          {activeTab === 'Active' ? (
            <div className='Active-div'>
              {/* <h2>Active Reports</h2> */}
              {activeReports.length === 0 ? (
                <p>No active reports</p>
              ) : (
                <div name='report-list'>
                  {activeReports.map((report) => (
                    <ReportsComponent key={report.id} report={report} winstonImage={winstonImage} />
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
                  {historyReports.map((report) => (
                    <ReportsComponent key={report.id} report={report} winstonImage={winstonImage} />
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
