import React, {FC } from 'react'
import { TJob } from 'types'
import styles from './JobsList.module.scss'

import JobItem from './JobItem'

// Types
type TProps = {
  jobs: TJob[]
}

const JobsList:FC<TProps> = ({ jobs }) => {
  return (
    <ul className={styles.jobs_list_wrap}>
      {jobs.map((job) => <JobItem job={job} 
        key={job.company} />)}
    </ul>
  )
}

export default JobsList