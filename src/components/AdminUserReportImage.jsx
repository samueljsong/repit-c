import React, { useState } from 'react';
import '../App.css';

export const ImagePopUp = ({visible, onClose}) => {
    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose()
    }

    if (!visible) return null
    
    return (
        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-opacity-30 backdrop-blur-sm bg-black flex justify-center items-center'>
            <div className='bg-white p-2 rounded'> 
                <p>reportImg</p>
            </div>
        </div>
    )
}