import React, { useState } from 'react';
import "../styles/ReportsComponent.css";

export default function ReportsComponent({ report }) {
  const { location, date_submitted, title, description, status, report_image } = report;
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const getStatusClass = () => {
    switch (status) {
      case 'unread':
        return 'dot-unread';
      case 'resolved':
        return 'dot-resolved';
      case 'rejected':
        return 'dot-rejected';
      case 'in-progress':
        return 'dot-in-progress';
      default:
        return 'dot-default';
    }
  };

  return (
    <div className="report">
      <div className='report-top'>
        <h3 className='report-location'>{location}</h3>
        <h3 className='report-date'>{date_submitted}</h3>
      </div>
      <div className='report-bottom'>
        <div className='report-bottom-left'>
          <p className='report-title'>{title}</p>
          <p className="description" onClick={toggleDescription}>{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
        </div>
        <div className='report-bottom-right'>
          <div className={`status-dot ${getStatusClass()}`} />
          <img className='report-image' src={report_image} alt="Report Image" />
        </div>
      </div>
      {showDescription && (
        <div className="popup">
          <div className="popup-content">
            <div className="close" onClick={toggleDescription}>&times;</div>
            <div className='popup-description-content'>
              <p className='popup-description'>{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
