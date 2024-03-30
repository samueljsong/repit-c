import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateReportCard from '../components/ReplitCreateCard';
import ViewReportCard from '../components/ViewReportCard';

// API
import { loggedIn } from '../api/Client';

// Testing
export const HomePage = function () {
  const navigate = useNavigate();
  useEffect(() => {
    loggedIn(navigate);
  }, []);

  return (
    <div className=''>
      <div className='flex flex-col items-center w-screen h-screen pt-20 bg-background'>
        <CreateReportCard />
        <ViewReportCard />
      </div>
    </div>
  );
};

export default HomePage;
