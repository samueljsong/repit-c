import React, { useState } from 'react';
import '../App.css';


export const RegularUserReportCard = (props) => {
    const locationOptions = ["Select Option", "SW1 1st Floor", "SW1 2nd Floor", "SE12 - 303", "SW12 - 323"] // Get from database (NOT POPULATED YET)
    
    const [location, setLocation] = useState(locationOptions[0])

    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')


    const handleSubmit = () => {
        // if location == locationOptions[0] OR empty fields => give error message
        alert("TODO: SEND FORM TO DATABASE AND GIVE RETURN MESSAGE")
    }

    const [showImage, setShowImage] = useState(false)
    const handleOnClose = () => setShowImage(false)

    const handleUploadImage = () => {
        alert("TODO: HANDLE IMAGE UPLOAD")
    }

    return(
        <div>
            <div className='grid h-screen w-full place-items-center bg-background'>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-[65px]">
                    <div className="p-5 shadow-lg">
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Location</p>
                            {/* <input type="text" value={location} className='bg-[#D9D9D9]' onChange={(e) => setLocation(e.target.value)}></input> */}
                            <select class="bg-[#D9D9D9] selection:focus:ring-4 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center w-full" value={location} onChange={(e) => setLocation(e.target.value)}>  
                                {locationOptions.map((option, idx) => {
                                    return <option key={idx}>{option}</option>
                                })}     
                            </select>
                        </div>
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Subject of Object</p>
                            <input type="text" value={subject} className='bg-[#D9D9D9] selection:focus:ring-4 font-medium rounded-lg text-sm px-3 py-1.5 inline-flex w-full' onChange={(e) => setSubject(e.target.value)}></input>
                        </div>
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Description of Problem</p>
                            <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='bg-[#D9D9D9] h-[129px] w-[300px] resize-none p-[10px] text-[#333] rounded'></textarea>
                        </div>
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Upload Image (Optional)</p>
                            <div onClick={handleUploadImage} className='bg-[#D9D9D9] h-[129px] w-[300px] resize-none p-[10px] text-[#333] select-none rounded flex justify-center align-middle'>
                                <svg className='w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M18.22 19.9628C17.8703 20 17.4213 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.12583 18.7271 4.07264 18.5226 4.04193 18.2622M18.22 19.9628C18.5007 19.9329 18.7175 19.8791 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V13M11 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M18 9V6M18 6V3M18 6H21M18 6H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-7'>
                            <button type='submit' onClick={handleSubmit} className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#043C6C] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[270px] h-[40px]">
                                Submit
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-[2.2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

