//Script
import '../styles/TutorialPage.css'

//Components
import { Tutorial1 } from '../components/Tutorial1'
import { Tutorial2 } from '../components/Tutorial2'
import { Tutorial3 } from '../components/Tutorial3'
import { Warning } from '../components/Warning'

//Dependencies
import {motion, AnimatePresence} from "framer-motion"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

//Api
import { loggedIn } from '../api/Client'

export const TutorialPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        loggedIn(navigate)
    }, [])

    const [step, setStep] = useState([1])

    const onClickNextHandler = (stage) => {
        setStep(stage)
    }

    return(
        <AnimatePresence>
            <div className='tp-container'>
                {
                    step == 1 ? 
                    <Tutorial1 next={onClickNextHandler}/> : <></>
                }

                {
                    step == 2 ?
                    <Tutorial2 next={onClickNextHandler}/> : <></>
                }

                {
                    step == 3 ?
                    <Tutorial3 next={onClickNextHandler}/> : <></>
                }

                {
                    step == 4 ?
                    <Warning/> : <></>
                }
                <motion.div className='tp-stage'
                initial={{opacity: 0, y:20}} 
                animate={{opacity: 1, y: 0}} 
                transition={{duration: "0.5", delay: 0.25}}>
                    {
                        step == 1?
                        <motion.div className='tp1 tp-circle tp-active'
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        transition={{duration: "0.5"}}
                        exit={{ opacity: 0}}>
                        </motion.div>:
                        <div className='tp1 tp-circle'></div>
                    }
                    {
                        step == 2?
                        <motion.div className='tp2 tp-circle tp-active'
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        transition={{duration: "0.5"}}>
                        </motion.div>:
                        <div className='tp1 tp-circle'></div>
                    }
                    {
                        step == 3?
                        <motion.div className='tp3 tp-circle tp-active'
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        transition={{duration: "0.5"}}>
                        </motion.div>:
                        <div className='tp1 tp-circle'></div>
                    }
                </motion.div>
            </div>
        </AnimatePresence>
    )
}