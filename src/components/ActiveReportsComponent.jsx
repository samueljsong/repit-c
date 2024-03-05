import React from 'react';

export default function ActiveReportsComponent({ report }) {
  const { location, date_submitted, title, description, status, report_image } = report;

  return (
    <div className="report">
      <div className='report-top'>
        <h3>{location}</h3>
        <h3>{date_submitted}</h3>
      </div>
      <div className='report-bottom'>
        <p>{title}</p>
        <p>{description}</p>
        <p>{status}</p>
        <img src={report_image} alt="Report Image" />
      </div>
    </div>
  );
}
