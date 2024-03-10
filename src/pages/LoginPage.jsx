//Style
import '../styles/LoginPage.css'
import '../App.css'

//icons
import mail from '../assets/icons/mail.png'
import lock from '../assets/icons/lock.png'

//Toast
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

//Dependencies
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

//API
import { client } from '../api/Client'

export const LoginPage = () => {
    let errorMsg = '';
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailInputChange = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordInputChange = (e) => {
        setPassword(e.target.value)
    }

    const onLoginHandler = () => {
        if (password == '' || email == '') {
            failToast("Please fill out both login fields");
        } else if (!checkEmail(email)) {
            failToast("Please enter a valid BCIT email.");
        }
        client.post('/auth/login', {
            email: email,
            password: password
        })
        .then(json => {
            if(json.data.statusCode === 200){
                navigate('/')
            } else {
                failToast("Invalid credentials, please try again");
            }
            console.log(json);
        }).catch(() =>{
            failToast("Invalid credentials, please try again");
        })
    }

    const failToast = (message) => {
        toast.error(message, {
            position: "bottom-center",
            theme: "dark"
        })
    }

    const checkEmail = (email) => {
        const domain = email.split('@')[1];
        return (domain === 'my.bcit.ca' || domain === 'bcit.ca')
    }

    return (
        <div className='lp-general-container'>
           <div className='lp-container'>
                <div className='lp-title'>
                    <h1 className='lp-bcit-title'>BCIT</h1>
                    <p className='lp-repit-title'>REPIT</p>
                </div>
                
                <motion.div className='lp-email'
                initial={{opacity: 0, y:20, x:3}} 
                animate={{opacity: 1, y: 0, x:0}} 
                transition={{duration: "0.5", delay: 0.25}}>
                    <div className='lp-email-container'>
                        <img className='lp-email-icon' src={mail} alt="" />
                    </div>
                    <input className='lp-input' name='email' placeholder='BCIT Email' type="text" onChange={onEmailInputChange}/>
                </motion.div>
                <motion.div className='lp-password'
                initial={{opacity: 0, y:20, x:3}} 
                animate={{opacity: 1, y: 0, x:0}} 
                transition={{duration: "0.5", delay: 0.40}}>
                    <div className='lp-password-container'>
                        <img className="lp-password-icon" src={lock} alt="" />
                    </div>
                    <input className='lp-input' name='password' placeholder='Password' type="password" onChange={onPasswordInputChange}/>
                </motion.div>

                <motion.button className='lp-button' onClick={onLoginHandler}
                initial={{opacity: 0, y:20, x:3}} 
                animate={{opacity: 1, y: 0, x:0}} 
                transition={{duration: "0.5", delay: 0.60}}
                >
                    Log in
                </motion.button>
                
                <motion.div className='lp-forgot'
                initial={{opacity: 0, y:20, x:3}} 
                animate={{opacity: 1, y: 0, x:0}} 
                transition={{duration: "0.5", delay: 0.60}}
                >
                    Forgot your <a href="">BCIT email</a> or <a href="">password?</a>
                </motion.div> 
                <span></span>
           </div>
           <ToastContainer/>
        </div>
    )
}