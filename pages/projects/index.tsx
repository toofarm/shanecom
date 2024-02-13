import React, { FC } from 'react'
import Layout from 'components/Layout'
import { getAllContentByType } from '../api/get_content'
import { EContentTypes, TProject } from 'types'
import styles from 'styles/pages/Posts.module.scss'

// Components
import PostStub from 'components/PostStub'
import HeadStateful from 'components/HeadStateful'

// Types 
type TProps = {
  projects: TProject[]
}

const Projects:FC<TProps> = ({ projects }) => {
  return (
    <>
      <HeadStateful pageTitle='Projects' />
      <Layout>
        <div className={styles.posts_wrap}>
          <h2>Projects</h2>
          {projects.map((project) => <PostStub 
            stub={project} 
            type={EContentTypes.PROJECTS} 
            key={project.title} />)}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const projects = 
    getAllContentByType(
      EContentTypes.PROJECTS, 
      ['tags', 
        'title',
        'featured_image', 
        'date_created',
        'slug']
    )
  return {
    props: {
      projects
    }
  }
}

export default Projects