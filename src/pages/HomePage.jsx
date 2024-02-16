import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import createIcon from '../assets/icons/hp-create.png'
import addSquare from '../assets/icons/hp-add-square.svg'
import viewIcon from '../assets/icons/hp-view.png'
import viewSquare from '../assets/icons/hp-view-icon.svg'

//API
import { loggedIn } from '../api/Client'


// Testing
export const HomePage = () => {
    
    useEffect(() => {
        loggedIn(navigate)
    },[])

    const navigate = useNavigate();
    function CreateReportHandler() {
      navigate('/create')
    }

    function ViewReportHandler() {
        navigate('/view-reports')
    }

    function RepitCreateCard() {
      return (
        <div className='flex flex-col w-64 h-64 border-2 rounded-2xl justify-center items-center text-white font-bold font-inter my-2 bg-ui-background shadow-sm'>
          <div className='mx-6'>
              <img src={createIcon}/>
          </div>

            <button name='create' onClick={CreateReportHandler} className='bg-bcit-blue flex items-center rounded-md shadow-2xl mt-2 w-5/6 h-7 font-inter-thin text-xs'>
                <img className='w-6 ml-1' src={addSquare}/>
                <div className='pl-16'>
                    REPIT
                </div>
            </button>
        </div>
      )
    }

    function ViewReportCard() {
        return (
            <div className='flex flex-col w-64 h-64 border-2 rounded-2xl justify-center items-center text-white font-inter-thin my-2 bg-ui-background shadow-sm'>
                <div className='mx-6'>
                    <img src={viewIcon}/>
                </div>
                <button name='view' onClick={ViewReportHandler} className='bg-bcit-blue flex items-center rounded-md shadow-2xl mt-2 w-5/6 h-7 font-inter-thin text-xs'>
                    <img className='w-5 ml-2' src={viewSquare}/>
                    <div className='pl-8'>
                        VIEW MY POSTS
                    </div>
                </button>
            </div>
          )
    }

    return (
      <div className=''>
          <div className='flex flex-col items-center w-screen h-screen pt-20 bg-background'>
             <RepitCreateCard/>
             <ViewReportCard/>
          </div> 
      </div>
  )
}
