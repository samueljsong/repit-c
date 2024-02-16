//Styles
import '../styles/Warning.css'
import '../styles/Tutorial1.css'

//Dependencties
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

//Images
import photos from '../assets/blue-photos.svg'

export const Warning = () => {

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
            <img className='t1-img' src={photos} alt="" />
            <h1 name="title" className='t1-title warning-red'>WARNING!!!</h1>
            <div className='t1-instructions'>
                <p>Do not take pictures in the washrooms</p>
                <p>Do not take pictures in the changerooms</p>
                <p>Please respect everyone's privacy.</p>
            </div>
            <motion.button name="complete" className='t1-btn' onClick={onStartClickHandler}
            whileHover={{
                size: 1.2
            }}
            whileTap={{
                scale: 0.9
            }}>
                <p className='t1-btn-next'>I understand</p>
            </motion.button>
        </motion.div>
    )
}