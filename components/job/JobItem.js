import React from 'react'
import Link from 'next/link'
import moment from 'moment/moment';
const JobItem = ({job}) => {
  const {id,title,description,industry,jobType,salary,createdAt}= job;
  return (
    <>
        <Link href={`/jobs/${id}`}>
        <div className="job-listing">
        <div className="job-listing-details">
          <div className="job-listing-description">
            <h4 className="job-listing-company">Tech</h4>
            <h3 className="job-listing-title">{title}</h3>
            <p className="job-listing-text">
              {description.substring(0,200)}
            </p>
          </div>

          <span className="bookmark-icon"></span>
        </div>

        <div className="job-listing-footer">
          <ul>
            <li>
              <i aria-hidden className="fas fa-industry"></i> {industry}
            </li>

            <li>
              <i aria-hidden className="fas fa-briefcase"></i> {jobType}
            </li>
            <li>
              <i aria-hidden className="fas fa-money-check-alt"></i>${salary}
            </li>
            <li>
              <i aria-hidden className="fas fa-clock"></i> {moment.utc(createdAt).local().startOf('seconds').fromNow()}
            </li>
          </ul>
        </div>
        </div>
        </Link>
   
    </>
  )
}

export default JobItem