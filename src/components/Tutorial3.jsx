//Styles
import '../styles/Tutorial1.css'

//Dependencies
import {motion} from 'framer-motion'
import {useNavigate} from "react-router-dom"

//Images
import post from '../assets/post.svg'

export const Tutorial3 = () => {
    const navigate = useNavigate()

    const onStartClickHandler = () => {
        navigate('/')
    }

    return(
        <motion.div className='t1-container'
        initial={{opacity: 0, y:20}} 
        animate={{opacity: 1, y: 0}} 
        transition={{duration: "0.5", delay: 0.25}}
        exit={{opacity: 0}}>
            <img className='t1-img' src={post} alt="" />
            <h1 className='t1-title'>Finalize and send a report!</h1>
            <div className='t1-instructions'>
                <p>Double check and finalize your report</p>
                <p>Once ready you can REPIT</p>
                <p>BCIT will fix it soon!</p>
            </div>
            <motion.button className='t1-btn' onClick={onStartClickHandler}
            whileHover={{
                size: 1.2
            }}
            whileTap={{
                scale: 0.9
            }}>
                <p className='t1-btn-next'>Start</p>
            </motion.button>
        </motion.div>
    )
}
