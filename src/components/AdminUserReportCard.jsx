import React, { useEffect, useState } from 'react';
import '../App.css';
import { ImagePopUp } from './AdminUserReportImage';
import { getLocationByIdAdmin, getAdminUserReport, updateReportStateAdmin } from '../api/Client';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const updateReportState = async (reportId, state) => {
  try {
    const response = await updateReportStateAdmin(reportId, state);
    console.log(response);
  } catch (error) {
    console.error('Error updating user report state:', error);
  }
};

export const AdminUserReportCard = (props) => {
  const navigate = useNavigate();

  const [report, setReport] = useState([]);
  const [location, setLocation] = useState([]);
  const [option, setOption] = useState();
  const [showImage, setShowImage] = useState(false);

  AdminUserReportCard.propTypes = {
    reportId: PropTypes.string.isRequired,
  };

  const handleSubmit = () => {
    if (option === undefined) {
      navigate(-1);
    } else {
      updateReportState(props.reportId, option);
      navigate(-1);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const reportData = await getAdminUserReport(props.reportId);
        setReport(reportData);
        console.log(reportData);
        const locationData = await getLocationByIdAdmin(reportData.location_tag_id);
        setLocation(locationData);
        console.log(locationData);
      } catch (error) {
        console.error('Error fetching report and location:', error);
      }
    };

    getData();
  }, []);

  const handleOnClose = () => setShowImage(false);

  return (
    <div className='grid h-screen w-full place-items-center bg-background' name='whole-page-container'>
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-[10vh]' name='report-page-container'>
        <div className='p-5 shadow-lg' name='report-container'>
          <div className='mb-1' name='title-container'>
            <p className='font-normal text-gray-700 pl-[10px]'>Title</p>
            <input
              type='text'
              name='title-input'
              value={report.title}
              disabled
              className='bg-[#D9D9D9] w-[300px] p-[10px] text-[#333] rounded'
            ></input>
          </div>
          <div className='mb-1' name='location-container'>
            <p className='font-normal text-gray-700 pl-[10px]'>Location</p>
            <input
              type='text'
              name='location-input'
              value={location.building}
              disabled
              className='bg-[#D9D9D9] w-[300px] p-[10px] text-[#333] rounded'
            ></input>
          </div>
          <div className='mb-1' name='description-container'>
            <p className='font-normal text-gray-700 pl-[10px]'>Description of Problem</p>
            <textarea
              type='text'
              name='description-input'
              value={report.description}
              disabled
              className='bg-[#D9D9D9] h-[129px] w-[300px] resize-none p-[10px] text-[#333] rounded'
            ></textarea>
          </div>
          <div className='mb-5 mt-5 flex flex-row'>
            <div id='report-status' className='flex flex-col flex-1 wl-64'>
              <h3 className='text-gray-700 pl-[10px]'>Report Status</h3>
              <label>
                <select
                  name='status'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3 py-1.5 text-center inline-flex items-center'
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option value={1} selected={report.status_id === 1}>Unread 🟠</option>
                  <option value={2} selected={report.status_id === 2}>Resolved 🟢</option>
                  <option value={3} selected={report.status_id === 3}>Rejected 🔴</option>
                  <option value={4} selected={report.status_id === 4}>In-Progress 🔵</option>
                </select>
              </label>
            </div>
            <div className='flex justify-center items-center flex-1'>
              <button
                className='font-normal text-blue-500 underline decoration-solid hover:text-blue-700'
                onClick={() => setShowImage(true)}
              >
                Image
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center mt-7'>
            <button
              name='submit'
              onClick={handleSubmit}
              className='flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#043C6C] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[270px] h-[40px]'
            >
              Submit
              <svg
                className='rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-[2.2px]'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ImagePopUp visible={showImage} onClose={handleOnClose} report={report} />
    </div>
  );
};
