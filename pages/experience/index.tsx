import React, { FC } from 'react'
import { getAllContentByType } from '../api/get_content'
import { EContentTypes, TJob, TSkill } from 'types'
import styles from './Experience.module.scss'

// Components
import HeadStateful from 'components/HeadStateful'
import Layout from 'components/Layout'
import JobsList from 'components/JobsList'
import SkillBadge from 'components/SkillBadge'

// Types
type TProps = {
  jobs: TJob[];
  skills: TSkill[]
}

const Experience:FC<TProps> = ({ jobs, skills }) => {
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
        <div className={styles.skills_section}>
          <h2>A particular set of skills</h2>
          <div className={styles.skills_header}>
            <div>
              <h4>Technology name</h4>
            </div>
            <div>
              <h4>Years&apos; experience</h4>
            </div>
          </div>
          {skills.map((skill) => <SkillBadge skill={skill} key={skill.name} />)}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = () => {
  const jobs = 
    getAllContentByType(
      EContentTypes.JOBS, 
      ['tags', 
        'title', 
        'company', 
        'company_link',
        'logo', 
        'start_date', 
        'end_date',
        'description']
    )
    
  const skills = 
      getAllContentByType(
        EContentTypes.SKILLS, ['name', 'years', 'keySkill', 'logo']
      )

  skills.sort((
    a, b
  ) => {
    if (a.years && b.years) {
      if (a.years > b.years) return -1
      else if (a.years < b.years) return 1
    }
    return 0
  })

  return {
    props: {
      jobs,
      skills
    }
  }
}

export default Experience