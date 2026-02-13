import React, { FC } from 'react'
import { getAllContentByType, getContentBySlug } from 'pages/api/get_content'
import { EContentTypes, TProject, IContent } from 'types'
import { markdownToHtml, findArrayIndex } from 'lib'
import styles from 'styles/Content.module.scss'
import 'highlight.js/styles/base16/railscasts.css'

// Components
import Layout from 'components/Layout'
import HeadStateful from 'components/HeadStateful'
import PostHeader from 'components/PostHeader'
import TagCloud from 'components/TagCloud'
import ArticleFooter from 'components/ArticleFooter'
import ProjectLinks from 'components/ProjectLinks'

// Types
type TParams = {
    [key: string] : any 
}

type TProps = {
    project: TProject,
    prevPost: IContent | null;
    nextPost: IContent | null;
    content: string
}

const Project:FC<TProps> = ({ 
  project, 
  prevPost, 
  nextPost, 
  content }) => {
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
        <TagCloud 
          tags={project.tags}
          link={true} />
        <ProjectLinks 
          website={project.project_web_link ? project.project_web_link : undefined}
          repo={project.project_repo_link ? project.project_repo_link : undefined} />
        <div dangerouslySetInnerHTML={{ __html : content }} className={styles.post_content}>
        </div>
        <ArticleFooter 
          type={EContentTypes.PROJECTS}
          prev={prevPost}
          next={nextPost}
        />
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }:TParams) => {

  let prevPost:IContent | null = null
  let nextPost:IContent | null = null

  const project = 
    getContentBySlug(
      params.slug, 
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
      EContentTypes.PROJECTS
    )

  const projects = getAllContentByType(
    EContentTypes.PROJECTS, [
      'slug',
      'date_created'
    ]
  )
    
  const sortedProjects = projects.sort((
    a:IContent, b:IContent
  ) => {
    if (a.date_created && b.date_created && a.date_created > b.date_created) return 1
    else if (a.date_created && b.date_created && a.date_created < b.date_created) return -1
    else return 0
  })
    
  const postIndex = findArrayIndex(
    sortedProjects, project.date_created, 'date_created'
  )
    
  if (postIndex !== null) {
    
    prevPost = postIndex > 0 ?
      getContentBySlug(
          projects[postIndex - 1].slug as string, 
          [ 'slug', 
            'title'], 
          EContentTypes.PROJECTS
      ) :
      null
    
    nextPost = postIndex < projects.length - 1 ?
      getContentBySlug(
          projects[postIndex + 1].slug as string, 
          [ 'slug', 
            'title'], 
          EContentTypes.PROJECTS
      ) :
      null
  }

  const content = await markdownToHtml(project.content || '')
  return {
    props: {
      project,
      prevPost,
      nextPost,
      content
    }
  }
}

export const getStaticPaths = async () => {
  const projects = getAllContentByType(
    EContentTypes.PROJECTS, ['slug']
  )

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