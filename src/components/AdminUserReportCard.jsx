import React, { useEffect, useState } from 'react';
import '../App.css';
import { ImagePopUp } from './AdminUserReportImage';
import { getLocationByIdAdmin, getAdminUserReport } from '../api/Client';


export const AdminUserReportCard = (props) => {    
    const [report, setReport] = useState([])
    const [location, setLocation] = useState([])

    const states = ["green", "orange", "red", "blue"]
    const [option, setOption] = useState(states[report.status_id])

    const handleSubmit = () => {
        alert(option)
    }

    const [showImage, setShowImage] = useState(false)
    const handleOnClose = () => setShowImage(false)

    useEffect(() => {
        getAdminUserReport(props.reportId)
          .then((response) => {
            setReport(response);
            console.log(response);
            getLocationByIdAdmin(response.location_tag_id)
            .then((response) => {
                setLocation(response)
                console.log(response)
            })
            .catch((error) => console.error("Error fetching location:", error))
          })
          .catch((error) => console.error("Error fetching users reports:", error));
    }, []);

    return(
        <div className='grid h-screen w-full place-items-center bg-background'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-[10vh]">
                <div className="p-5 shadow-lg">
                    <div className='mb-1'>
                        <p className="font-normal text-gray-700 pl-[10px]">Title</p>
                        <input type="text" value={report.title} disabled className='bg-[#D9D9D9] w-[300px] p-[10px] text-[#333] rounded'></input>
                    </div>
                    <div className='mb-1'>
                        <p className="font-normal text-gray-700 pl-[10px]">Location</p>
                        <input type="text" value={location.building} disabled className='bg-[#D9D9D9] w-[300px] p-[10px] text-[#333] rounded'></input>
                    </div>
                    <div className='mb-1'>
                        <p className="font-normal text-gray-700 pl-[10px]">Description of Problem</p>
                        <textarea type="text" value={report.description} disabled className='bg-[#D9D9D9] h-[129px] w-[300px] resize-none p-[10px] text-[#333] rounded'></textarea>
                    </div>
                    <div className='mb-5 mt-5 flex flex-row'>
                        <div id='report-status' className='flex flex-col flex-1 wl-64'>
                            <h3 className='text-gray-700 pl-[10px]'>Report Status</h3>
                            <form onSubmit={handleSubmit} id='state-submit'>
                                <label>
                                    <select className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3 py-1.5 text-center inline-flex items-center" defaultValue={option} onChange={(e) => setOption(e.target.value)}>  
                                        {states.map((option, idx) => {
                                            <option key={idx}>{option}</option>
                                        })}          
                                        <option value="orange">Unread 🟠</option>
                                        <option value="green">Resolved 🟢</option>
                                        <option value="red">Rejected 🔴</option>
                                        <option value="blue">In-Progress 🔵</option>
                                    </select>
                                </label>
                            </form>
                        </div>
                        <div className='flex justify-center items-center flex-1'>
                            <button className='font-normal text-blue-500 underline decoration-solid hover:text-blue-700' onClick={() => setShowImage(true)}>Image</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-7'>
                        <button type='submit' form='state-submit' className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#043C6C] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[270px] h-[40px]">
                            Submit
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-[2.2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <ImagePopUp visible={showImage} onClose={handleOnClose} />
        </div>        
    )
}

