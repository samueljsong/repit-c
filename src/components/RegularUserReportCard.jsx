import React, { useState } from 'react';
import '../App.css';

import {UploadPhoto} from "./UploadPhoto"

import holder from "../assets/holder.png"


export const RegularUserReportCard = (props) => {
    const locationOptions = ["Select Option", "SW1 1st Floor", "SW1 2nd Floor", "SE12 - 303", "SW12 - 323"] // Get from database (NOT POPULATED YET)
    
    const [location, setLocation] = useState(locationOptions[0])

    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')

    const [image, setImage] = useState(holder)

    const changeImage = (url) => {
        setImage(url)
    }

    const clearImage = () => {
        setImage(holder)
    }

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
                <div className="w-[20rem] bg-white border border-gray-200 rounded-lg shadow mt-[65px]">
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
                            <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='bg-[#D9D9D9] h-[129px] w-[300px] resize-none p-[10px] text-[#333] rounded w-full'></textarea>
                        </div>
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Upload Image (Optional)</p>
                            <UploadPhoto image={image} changeImage={changeImage} clearImage={clearImage}/>
                        </div>
                        <div className='flex justify-center items-center mt-7'>
                            <button type='submit' onClick={handleSubmit} className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#043C6C] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[100%] h-[40px]">
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

