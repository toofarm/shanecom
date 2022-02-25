import React, { FC, useState, useEffect } from 'react'
import { TJob } from 'types'
import format from 'date-fns/format'
import styles from './JobsList.module.scss'

// Components
import TagCloud from 'components/TagCloud'

// Types
type TProps = {
  job: TJob
}

const JobItem:FC<TProps> = ({ job }) => {
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('Present')

  useEffect(() => {
    setStartDate(format(new Date(job.start_date.split(' ')[0]), 'MMMM, yyyy'))
    if (job.end_date) setEndDate(format(new Date(job.end_date.split(' ')[0]), 'MMMM, yyyy'))
  }, [job])

  return (
    <li className={styles.job_item}>
      <div className={styles.job_format_meta}>
        <div className={styles.job_innards}>
          <div className={styles.job_dates}>
            {startDate} - {endDate}
          </div>
          <h3>
            <a href={job.company_link} target='_blank' rel='noreferrer'>
              {job.company}
            </a>
          </h3>
          <h4>{job.title}</h4>
          <p>
            {job.description}
          </p>
          <TagCloud tags={job.tags} />
        </div>
        <div className={styles.job_image_wrap}>
          <a href={job.company_link} target='_blank' rel='noreferrer'>
            <img src={job.logo} alt={job.company} />
          </a>
        </div>
      </div>
    </li>
  )
}

export default JobItem