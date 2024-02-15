//Styles
import '../styles/Tutorial1.css'

//Dependencies
import {motion} from 'framer-motion'

//Images
import check from '../assets/check.svg'

export const Tutorial2 = ({next}) => {

    const onNextClickHandler= () => {
        next(3)
    }

    return(
        <motion.div className='t1-container'
        initial={{opacity: 0, y:20}} 
        animate={{opacity: 1, y: 0}} 
        transition={{duration: "0.5", delay: 0.25}}>
            <img className='t1-img' src={check} alt="" />
            <h1 className='t1-title'>Help us understand better!</h1>
            <div className='t1-instructions'>
                <p>Create a new report to send to BCIT</p>
                <p>Fill in important details</p>
                <p>And add photos!</p>
            </div>
            <motion.button className='t1-btn' onClick={onNextClickHandler}
            whileHover={{
                size: 1.2
            }}
            whileTap={{
                scale: 0.9
            }}>
                <p className='t1-btn-next'>Next</p>
            </motion.button>
        </motion.div>
    )
}
