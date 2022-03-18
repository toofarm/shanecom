import React, { FC } from 'react'
import { getAllContentByType, getContentBySlug } from 'pages/api/get_content'
import { EContentTypes, TProject } from 'types'
import markdownToHtml from 'lib/markdownToHtml'
import styles from 'styles/Content.module.scss'
import 'highlight.js/styles/base16/railscasts.css'

// Components
import Layout from 'components/Layout'
import HeadStateful from 'components/HeadStateful'
import PostHeader from 'components/PostHeader'
import TagCloud from 'components/TagCloud'
import ProjectLinks from 'components/ProjectLinks'

// Types
type TParams = {
    [key: string] : any
}

type TProps = {
    project: TProject,
    content: string
}

const Project:FC<TProps> = ({ project, content }) => {
  return (
    <>
      <HeadStateful pageTitle={project.title} />
      <Layout>
        <PostHeader 
          title={project.title} 
          sub_head={project.sub_head} 
          img={project.featured_image} 
          caption={project.caption}
          publication_date={project.date_created} />
        <TagCloud tags={project.tags} />
        <ProjectLinks 
          website={project.project_web_link ? project.project_web_link : undefined}
          repo={project.project_repo_link ? project.project_repo_link : undefined} />
        <div dangerouslySetInnerHTML={{ __html : content }} className={styles.post_content}>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }:TParams) => {
  const project = 
    getContentBySlug(params.slug, 
      ['tags', 
        'title', 
        'sub_head', 
        'featured_image', 
        'additional_images', 
        'content', 
        'date_created', 
        'date_updated',
        'highlighted',
        'caption',
        'project_web_link',
        'project_repo_link'], 
      EContentTypes.PROJECTS)
  const content = await markdownToHtml(project.content || '')
  return {
    props: {
      project,
      content
    }
  }
}

export const getStaticPaths = async () => {
  const projects = getAllContentByType(EContentTypes.PROJECTS, ['slug'])
  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Project