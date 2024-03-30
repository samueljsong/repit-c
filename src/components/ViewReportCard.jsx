import React from 'react';
import { useNavigate } from 'react-router-dom';
import viewIcon from '../assets/icons/hp-view.png';
import viewSquare from '../assets/icons/hp-view-icon.svg';

function ViewReportCard() {
  const navigate = useNavigate();

  function ViewReportHandler() {
    navigate('/view-reports');
  }

  return (
    <div
      name='view'
      onClick={ViewReportHandler}
      onKeyDown={ViewReportHandler}
      role='button'
      tabIndex={0}
      className='flex flex-col w-56 h-56 border-2 rounded-2xl justify-center items-center text-white font-inter-thin my-2 bg-ui-background shadow-sm hover:cursor-pointer'
    >
      <div className='mx-6'>
        <img src={viewIcon} alt='View Icon' />
      </div>
      <button
        type='button'
        className='bg-bcit-blue flex items-center rounded-md shadow-2xl mt-2 w-5/6 h-7 font-inter-thin text-xs'
      >
        <img className='w-5 ml-2' src={viewSquare} alt='View Square Icon' />
        <div className='pl-8'>VIEW MY POSTS</div>
      </button>
    </div>
  );
}

export default ViewReportCard;
