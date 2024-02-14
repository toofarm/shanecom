// Tags page
// Path: pages/tags/[slug].tsx
// This page is a dynamic route. Given a particular tag, it will display all content that has that tag.

import React, { FC } from 'react'
import Layout from 'components/Layout'
import { getAllContentByTag, getSlugs, getContentBySlug, getAllContentByType } from '../api/get_content'
import { EContentTypes, TPost, TProject, TParams, TTag } from 'types'

// Components
import PostStub from 'components/PostStub'
import HeadStateful from 'components/HeadStateful'

// Types
type TProps = {
  posts: TPost[];
  projects: TProject[];
  tag: string;
}

const Tag:FC<TProps> = ({ posts, projects, tag }) => {
  return (
    <>
      <HeadStateful pageTitle={tag} />
      <Layout>
        <div>
          <h2>{tag}</h2>
          <h3>Posts</h3>
          <ul>
            {posts.map((post) => <PostStub 
              stub={post} 
              type={EContentTypes.POSTS} 
              key={post.title} />)}
          </ul>
          <h3>Projects</h3>
          <ul>
            {projects.map((project) => <PostStub 
              stub={project} 
              type={EContentTypes.PROJECTS} 
              key={project.title} />)}
          </ul>
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
  return {
    props: {
      posts,
      projects,
      tag: slug
    }
  }
}

export const getStaticPaths = async () => {
  const tags = getAllContentByType(
    EContentTypes.PROJECTS, ['slug']
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
