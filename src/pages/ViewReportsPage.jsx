import React from 'react'
import "../styles/ViewReportsPage.css";

//Dependencies
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

//API
import { loggedIn } from '../api/Client'


export default function ViewReportsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Active');
  
  useEffect(() => {
    loggedIn(navigate);
  }, [navigate]);

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
              <p>Active</p>
            </div>
          ) : (
            <div className='History-div'>
              <p>History</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}