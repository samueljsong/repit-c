import { useEffect, useRef, useState } from "react";

import '../components/UploadPhoto.css'

export const UploadPhoto = () => {

    const [image, setImage] = useState("");

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
                setImage(result.info.secure_url)
            }
        })
    }, [])

    return(
        <div className="general-container">
            <img className="image" src={image} alt="https://res.cloudinary.com/dxp9ftmcw/image/upload/v1709781917/n8zdgiv16vcgomhryinr.png" />
            <button onClick={() => widgetRef.current.open()}>Upload</button>
        </div>
    )
    
}