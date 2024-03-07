import { useEffect, useRef, useState } from "react";

import '../styles/UploadPhoto.css'

export const UploadPhoto = (props) => {

    

    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "dxp9ftmcw",
            uploadPreset: "z5ejbum7"
        }, function(error, result){
            console.log("HELLO")
            console.log(result)
            if(result.event === "success"){
                props.changeImage(result.info.secure_url)
            }
        })
    }, [])

    return(
        <div className="general-container">
            <img className="image" src={props.image} alt={"none"}/>
            <div className="button-container"> 
                <button className="upload-button" onClick={() => widgetRef.current.open()}>Upload</button>
                <button className="clear-button" onClick={props.clearImage}>X</button>
            </div>
        </div>
    )
    
}