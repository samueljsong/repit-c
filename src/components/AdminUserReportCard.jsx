import React, { useEffect, useState } from 'react';
import '../App.css';
import { ImagePopUp } from './AdminUserReportImage';
import { getLocationByIdAdmin, getAdminUserReport, updateReportStateAdmin } from '../api/Client';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const updateReportState = (reportId, state) => {
  updateReportStateAdmin(reportId, state)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error('Error updating user report state:', error));
};

export const AdminUserReportCard = (props) => {
  const navigate = useNavigate();

  const [report, setReport] = useState([]);
  const [location, setLocation] = useState([]);

  AdminUserReportCard.propTypes = {
    reportId: PropTypes.string.isRequired,
  };

  const handleSubmit = () => {
    if (option == undefined) {
      navigate(-1);
    } else {
      updateReportState(props.reportId, option);
      navigate(-1);
    }
  };

  useEffect(() => {
    const getData = async () => {
      await getAdminUserReport(props.reportId)
        .then((response) => {
          setReport(response);
          console.log(response);
          getLocationByIdAdmin(response.location_tag_id)
            .then((response) => {
              setLocation(response);
              console.log(response);
            })
            .catch((error) => console.error('Error fetching location:', error));
        })
        .catch((error) => console.error('Error fetching users reports:', error));
    };

    getData();
  }, []);

  const [option, setOption] = useState();

  const [showImage, setShowImage] = useState(false);
  const handleOnClose = () => setShowImage(false);

  return (
    <div className='grid h-screen w-full place-items-center bg-background'>
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-[10vh]'>
        <div className='p-5 shadow-lg'>
          <div className='mb-1'>
            <p className='font-normal text-gray-700 pl-[10px]'>Title</p>
            <input
              type='text'
              value={report.title}
              disabled
              className='bg-[#D9D9D9] w-[300px] p-[10px] text-[#333] rounded'
            ></input>
          </div>
          <div className='mb-1'>
            <p className='font-normal text-gray-700 pl-[10px]'>Location</p>
            <input
              type='text'
              value={location.building}
              disabled
              className='bg-[#D9D9D9] w-[300px] p-[10px] text-[#333] rounded'
            ></input>
          </div>
          <div className='mb-1'>
            <p className='font-normal text-gray-700 pl-[10px]'>Description of Problem</p>
            <textarea
              type='text'
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
                  {report.status_id == 1 ? (
                    <option value={1} selected>
                      Unread 🟠
                    </option>
                  ) : (
                    <option value={1}>Unread 🟠</option>
                  )}
                  {report.status_id == 2 ? (
                    <option value={2} selected>
                      Resolved 🟢
                    </option>
                  ) : (
                    <option value={2}>Resolved 🟢</option>
                  )}
                  {report.status_id == 3 ? (
                    <option value={3} selected>
                      Rejected 🔴
                    </option>
                  ) : (
                    <option value={3}>Rejected 🔴</option>
                  )}
                  {report.status_id == 4 ? (
                    <option value={4} selected>
                      In-Progress 🔵
                    </option>
                  ) : (
                    <option value={4}>In-Progress 🔵</option>
                  )}
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
