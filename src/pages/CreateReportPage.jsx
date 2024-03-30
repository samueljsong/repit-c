// Styles
import '../styles/CreateReportPage.css';

import React, { useEffect } from 'react';

// Dependencies
import { useNavigate } from 'react-router-dom';

// API
import { loggedIn } from '../api/Client';

import { RegularUserReportCard } from '../components/RegularUserReportCard';

export default function CreateReportPage() {
  const navigate = useNavigate();

  useEffect(() => {
    loggedIn(navigate);
  }, []);

  return (
    <div className='pt-8'>
      <RegularUserReportCard />
    </div>
  );
}
