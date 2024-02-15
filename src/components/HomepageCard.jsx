import React from 'react'
import createIcon from '../assets/icons/hp-create.png'
import addSquare from '../assets/icons/hp-add-square.svg'

export const HomePageCard = () => {
  function click(e) {
    e.preventDefault()
    alert("CLICKED")
  }
  return (
    <div className='flex flex-col w-56 h-56 border-2 rounded-2xl justify-center items-center text-white font-bold font-inter my-2 bg-ui-background shadow-sm'>
        <div className=' mx-6'>
            <img src={createIcon}/>
        </div>
        <div className='bg-bcit-blue flex justify-center items-center rounded-md shadow-2xl mt-2 w-5/6 h-7 font-inter-thin text-xs'>
            <button onClick={click} className=' w-full'>REPIT</button>
        </div>
    </div>
  )
}
