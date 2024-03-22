// Styles
import './App.css';

import { ToastContainer } from 'react-toastify';

import React from 'react'; // Add import statement for React

// Dependencies
import { Route, Routes } from 'react-router-dom';

// Pages
import LoginPage from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { TutorialPage } from './pages/TutorialPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import { AdminUserReport } from './pages/AdminUserReport';
import CreateReportPage from './pages/CreateReportPage';
import ViewReportsPage from './pages/ViewReportsPage';
import { AdminUserReportList } from './pages/AdminUserReportList';

// Components

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/create" element={<CreateReportPage />} />
        <Route path="/view-reports" element={<ViewReportsPage />} />
        <Route path="/admindashboard" element={<AdminDashboardPage />} />
        <Route path="/admin-user-report-card" element={<AdminUserReport />} />
        <Route path="/admin-user-report-list" element={<AdminUserReportList />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
