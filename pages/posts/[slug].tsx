import React, { FC, useRef } from 'react'
import { getAllContentByType, getContentBySlug } from 'pages/api/get_content'
import { EContentTypes, TPost } from 'types'
import markdownToHtml from 'lib/markdownToHtml'
import styles from 'styles/Content.module.scss'
import 'highlight.js/styles/base16/railscasts.css'

// Components
import Layout from 'components/Layout'
import HeadStateful from 'components/HeadStateful'
import PostHeader from 'components/PostHeader'
import TagCloud from 'components/TagCloud'
import ProgressBar from 'components/ProgressBar'

// Types
type TParams = {
    [key: string] : any
}

type TProps = {
    post: TPost,
    content: string
}

const Post:FC<TProps> = ({ post, content }) => {
  const article = useRef<HTMLDivElement>(null)

  return (
    <>
      <HeadStateful pageTitle={post.title} />
      <Layout>
        <PostHeader 
          title={post.title} 
          sub_head={post.sub_head} 
          img={post.featured_image} 
          publication_date={post.date_created}
          caption={post.caption} />
        <TagCloud tags={post.tags} />
        <ProgressBar article={article} />
        <div 
          dangerouslySetInnerHTML={{ __html : content }} 
          className={styles.post_content} 
          ref={article}>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }:TParams) => {

  const post = 
    getContentBySlug(params.slug, 
      ['tags', 
        'title', 
        'sub_head', 
        'featured_image', 
        'additional_images', 
        'content', 
        'date_created', 
        'date_updated',
        'caption',
        'highlighted'], 
      EContentTypes.POSTS)

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post,
      content
    }
  }
  
}

export const getStaticPaths = async () => {
  const posts = getAllContentByType(EContentTypes.POSTS, ['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Post