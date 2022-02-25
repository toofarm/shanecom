import React, { FC } from 'react'
import { getAllContentByType } from './api/get_content'
import { EContentTypes, TJob } from 'types'
import styles from 'styles/pages/Experience.module.scss'

// Components
import HeadStateful from 'components/HeadStateful'
import Layout from 'components/Layout'
import JobsList from 'components/JobsList'

// Types
type TProps = {
  jobs: TJob[];
}

const Experience:FC<TProps> = ({ jobs }) => {
  return (
    <>
      <HeadStateful pageTitle='Experience' />
      <Layout>
        <div className={styles.posts_wrap}>
          <h2>Experiential learning</h2>
          <div>
            Get the full story on 
            {' '}<a href='https://www.linkedin.com/in/shaners/' target='_blank' rel='noreferrer'>LinkedIn</a>
          </div>
          <JobsList jobs={jobs} />
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = () => {
  const jobs = 
    getAllContentByType(EContentTypes.JOBS, 
      ['tags', 
        'title', 
        'company', 
        'company_link',
        'logo', 
        'start_date', 
        'end_date',
        'description'])
  return {
    props: {
      jobs
    }
  }
}

export default Experience