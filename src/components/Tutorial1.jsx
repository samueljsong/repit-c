//Styles
import '../styles/Tutorial1.css'

//Dependencies
import {motion} from 'framer-motion'

//Images
import location from '../assets/location.svg'

export const Tutorial1 = ({next}) => {

    const onNextClickHandler= () => {
        next(2)
    }

    return(
        <motion.div className='t1-container'
        initial={{opacity: 0, y:20}} 
        animate={{opacity: 1, y: 0}} 
        transition={{duration: "0.5", delay: 0.25}}
        exit={{opacity: 0}}>
            <img className='t1-img' src={location} alt="" />
            <h1 className='t1-title'>Discover something broken?</h1>
            <div className='t1-instructions'>
                <p>If you discover something broken,</p>
                <p>help BCIT by reporting it.</p>
                <p>It can be anything.</p>
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
