import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../App.css';

import {UploadPhoto} from "./UploadPhoto"

import holder from "../assets/holder.png"

//API
import { client } from '../api/Client'

export const RegularUserReportCard = (props) => {
    const navigate = useNavigate();
    
    const [allLocations, setAllLocations] = useState([]);
    const [location, setLocation] = useState(0);

    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const [image, setImage] = useState(holder);

    const [buttonDisabled, setButtonDisabled] = useState(false);
    

    useEffect(() => {
        getLocations()
    }, [])

    const getLocations = () => {
        client.get('/user/allLocations')
        .then(json => {
            if(json.status === 200){
                setAllLocations(json.data)
            } else {
                alert("Error: Failed to get locations")
            }
        })
    }

    const changeImage = (url) => {
        setImage(url)
    }

    const clearImage = () => {
        setImage(holder)
    }

    const handleSubmit = () => {
        setButtonDisabled(true)
        if(location <= 0 || description == '' || subject == '') {
            alert("Please fill out all required fields!")
        }
        client.post('/user/createReport', {
            locationTagId: parseInt(location), 
            subject: subject,
            description: description,
            cloudinaryUrl: (image == holder ? '' : image)
        })
        .then(json => {
            if(json.data.statusCode === 200){
                navigate('/')
            } else {
                console.log(json)
                alert("Error: Failed to create report.  ")
                setButtonDisabled(false)
            }
        })
    }

    const [showImage, setShowImage] = useState(false)
    const handleOnClose = () => setShowImage(false)


    return(
        <div>
            <div className='grid h-screen w-full place-items-center bg-background'>
                <div className="w-[20rem] bg-white border border-gray-200 rounded-lg shadow ">
                    <div className="p-5 shadow-lg">
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Title*</p>
                            <input type="text" value={subject} className='bg-[#D9D9D9] selection:focus:ring-4 font-medium rounded-lg text-sm px-3 py-1.5 inline-flex w-full' onChange={(e) => setSubject(e.target.value)}></input>
                        </div>
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Location*</p>
                            <select class="bg-[#D9D9D9] selection:focus:ring-4 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center w-full" value={location} onChange={(e) => {setLocation(e.target.value); console.log(e.target.value)}}>  
                                <option key={0} value={0}>Select Location</option>
                                    {allLocations.map((option) => {
                                        return <option key={option.location_tag_id} value={option.location_tag_id}>{option.building + ' - ' + option.room}</option>
                                    })}     
                            </select>
                        </div>
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Description of Problem*</p>
                            <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='bg-[#D9D9D9] h-[129px] resize-none p-[10px] text-[#333] rounded w-full'></textarea>
                        </div>
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Upload Image (Optional)</p>
                            <UploadPhoto image={image} changeImage={changeImage} clearImage={clearImage}/>
                        </div>
                        <div className='flex justify-center items-center mt-7'>
                            <button disabled={buttonDisabled} type='submit' onClick={handleSubmit} className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#043C6C] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[100%] h-[40px]">
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

