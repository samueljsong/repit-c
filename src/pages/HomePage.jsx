import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import createIcon from '../assets/icons/hp-create.png'
import addSquare from '../assets/icons/hp-add-square.svg'
import viewIcon from '../assets/icons/hp-view.png'
import viewSquare from '../assets/icons/hp-view-icon.svg'


// Testing
export const HomePage = () => {
    const navigate = useNavigate();
    function CreateReportHandler() {
      navigate('/create')
    }

    function ViewReportHandler() {
        navigate('/view-reports')
    }

    function RepitCreateCard() {
      return (
        <div name='create' onClick={CreateReportHandler} className='flex flex-col w-56 h-56 border-2 rounded-2xl justify-center items-center text-white font-bold font-inter my-2 bg-ui-background shadow-sm'>
          <div className='mx-6'>
              <img src={createIcon}/>
          </div>

            <button className='bg-bcit-blue flex items-center rounded-md shadow-2xl mt-2 w-5/6 h-7 font-inter-thin text-xs hover:bg-red-400'>
                <img className='w-6 ml-1' src={addSquare}/>
                <div className='pl-12'>
                    REPIT
                </div>
            </button>
        </div>
      )
    }

    function ViewReportCard() {
        return (
            <div name='view' onClick={ViewReportHandler} className='flex flex-col w-56 h-56 border-2 rounded-2xl justify-center items-center text-white font-inter-thin my-2 bg-ui-background shadow-sm'>
                <div className='mx-6'>
                    <img src={viewIcon}/>
                </div>
                <button className='bg-bcit-blue flex items-center rounded-md shadow-2xl mt-2 w-5/6 h-7 font-inter-thin text-xs'>
                    <img className='w-5 ml-2' src={viewSquare}/>
                    <div className=' pl-5'>
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
