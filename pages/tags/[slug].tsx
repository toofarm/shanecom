// Tags page
// Path: pages/tags/[slug].tsx
// This page is a dynamic route. Given a particular tag, it will display all content that has that tag.

import React, { FC } from 'react'
import Layout from 'components/Layout'
import { getAllContentByTag, getAllContentByType, getContentBySlug } from '../api/get_content'
import { EContentTypes, TPost, TProject, TParams, TTag } from 'types'
import styles from './Tags.module.scss'

// Components
import PostStub from 'components/PostStub'
import HeadStateful from 'components/HeadStateful'

// Types
type TProps = {
  posts: TPost[];
  projects: TProject[];
  tag: TTag;
}

const Tag:FC<TProps> = ({ posts, projects, tag }) => {
  return (
    <>
      <HeadStateful pageTitle={tag.name} />
      <Layout>
        <div>
          <h2>
            <span style={{ backgroundColor: tag.color }}
              className={styles.tag_badge}></span>
            {tag.name}
          </h2>
          {(posts.length > 0) && 
          <>
            <h3 className={styles.h3}>Posts</h3>
            <ul className={styles.post_list}>
              {posts.map((post) => <PostStub 
                stub={post} 
                type={EContentTypes.POSTS} 
                key={post.title} />)}
            </ul>
          </>}
          {(projects.length > 0) && 
          <>
            <h3 className={styles.h3}>Projects</h3>
            <ul className={styles.post_list}>
              {projects.map((project) => <PostStub 
                stub={project} 
                type={EContentTypes.PROJECTS} 
                key={project.title} />)}
            </ul>
          </>}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }:TParams) => {
  const { slug } = params
  const posts = 
    getAllContentByTag(
      EContentTypes.POSTS, 
      slug as string, 
      ['tags', 
        'title',
        'featured_image', 
        'date_created',
        'slug']
    )
  const projects = 
    getAllContentByTag(
      EContentTypes.PROJECTS, 
      slug as string, 
      ['tags', 
        'title',
        'featured_image', 
        'date_created',
        'slug']
    )

  const tag = getContentBySlug(
      slug as string, 
      ['name', 'color'], 
      EContentTypes.TAGS
  )
    
  return {
    props: {
      posts,
      projects,
      tag
    }
  }
}

export const getStaticPaths = async () => {
  const tags = getAllContentByType(
    EContentTypes.TAGS, ['name']
  )
  return {
    paths: tags.map((tag) => {
      return {
        params: {
          slug: tag.name,
        },
      }
    }),
    fallback: false,
  }
}

export default Tag
