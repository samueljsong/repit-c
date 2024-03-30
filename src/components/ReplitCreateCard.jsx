import React from 'react';
import { useNavigate } from 'react-router-dom';
import createIcon from '../assets/icons/hp-create.png';
import addSquare from '../assets/icons/hp-add-square.svg';

function RepitCreateCard() {
  const navigate = useNavigate();

  function CreateReportHandler() {
    navigate('/create');
  }

  return (
    <button
      name='create'
      onClick={CreateReportHandler}
      type='button' // Add explicit type attribute
      className='flex flex-col w-56 h-56 border-2 rounded-2xl justify-center items-center text-white font-bold font-inter my-2 bg-ui-background shadow-sm hover:cursor-pointer'
    >
      <div className='mx-6'>
        <img src={createIcon} alt='Create Icon' />
      </div>

      <button
        type='button' // Remove redundant role attribute
        className='bg-bcit-blue flex items-center rounded-md shadow-2xl mt-2 w-5/6 h-7 font-inter-thin text-xs'
      >
        <img className='w-6 ml-1' src={addSquare} alt='Add Square Icon' />
        <div className='pl-16'>REPIT</div>
      </button>
    </button>
  );
}

export default RepitCreateCard;
