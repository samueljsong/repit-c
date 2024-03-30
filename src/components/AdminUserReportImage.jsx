import React from 'react';
import '../App.css';
import winstonImage from '../images/winston.png';

import PropTypes from 'prop-types';

export const ImagePopUp = ({ visible, onClose, report }) => {
  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  };

  if (!visible) return null;

  const cloudinaryId = report.report_image[0] != undefined ? true : false;

  return (
    <div
      id='container'
      onClick={handleOnClose}
      className='fixed inset-0 bg-opacity-30 backdrop-blur-sm bg-black flex justify-center items-center'
    >
      <div className='bg-white p-2 rounded'>
        {cloudinaryId ? (
          <img className='w-auto h-auto' src={report.report_image[0].image.cloudinary_id} alt='Report Image' />
        ) : (
          <img className='w-auto h-auto' src={winstonImage} alt='Winston Image' />
        )}
      </div>
    </div>
  );
};

ImagePopUp.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  report: PropTypes.shape({
    report_image: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.shape({
          cloudinary_id: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};
