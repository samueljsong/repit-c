//Styles
import './App.css'

import { ToastContainer } from 'react-toastify';

//Dependencies
import { Route, Routes } from 'react-router-dom'

//Pages
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { TutorialPage } from './pages/TutorialPage'
import { AdminDashboardPage } from './pages/AdminDashboardPage'
import { AdminUserReport } from './pages/AdminUserReport'
import CreateReportPage from './pages/CreateReportPage'
import ViewReportsPage from './pages/ViewReportsPage'
import { AdminUserReportList } from './pages/AdminUserReportList'

//Components

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/tutorial' element={<TutorialPage/>}></Route>
        <Route path='/create' element={<CreateReportPage/>}></Route>
        <Route path='/view-reports' element={<ViewReportsPage/>}></Route>
        <Route path='/admindashboard' element={<AdminDashboardPage/>}></Route>
        <Route path='/admin-user-report-card' element={<AdminUserReport/>}></Route>
        <Route path='/admin-user-report-list' element={<AdminUserReportList/>}></Route>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
