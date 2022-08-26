import React, { FC, useRef } from 'react'
import { getAllContentByType, getContentBySlug } from 'pages/api/get_content'
import { EContentTypes, IContent, TPost } from 'types'
import { findArrayIndex, markdownToHtml } from 'lib'
import styles from 'styles/Content.module.scss'
import 'highlight.js/styles/base16/railscasts.css'

// Components
import Layout from 'components/Layout'
import HeadStateful from 'components/HeadStateful'
import PostHeader from 'components/PostHeader'
import ArticleFooter from 'components/ArticleFooter'
import TagCloud from 'components/TagCloud'
import ProgressBar from 'components/ProgressBar'

// Types
type TParams = {
    [key: string] : any
}

type TProps = {
    post: TPost,
    prevPost: IContent,
    nextPost: IContent,
    content: string
}

const Post:FC<TProps> = ({ 
  post, 
  prevPost,
  nextPost,
  content
}) => {
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
        <ArticleFooter
          type={EContentTypes.POSTS}
          prev={prevPost}
          next={nextPost} />
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }:TParams) => {

  let prevPost:IContent | null = null
  let nextPost:IContent | null = null

  const post = 
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
        'caption',
        'highlighted'], 
      EContentTypes.POSTS
    )

  const posts = getAllContentByType(
    EContentTypes.POSTS, [
      'slug',
      'date_created'
    ]
  )

  const sortedPosts = posts.sort((
    a:IContent, b:IContent
  ) => {
    if (a.date_created && b.date_created && a.date_created > b.date_created) return 1
    else if (a.date_created && b.date_created && a.date_created < b.date_created) return -1
    else return 0
  })

  const postIndex = findArrayIndex(
    sortedPosts, post.date_created, 'date_created'
  )

  if (postIndex !== null) {

    prevPost = postIndex > 0 ?
      getContentBySlug(
      posts[postIndex - 1].slug as string, 
      [ 'slug', 
        'title'], 
      EContentTypes.POSTS
      ) :
      null

    nextPost = postIndex < posts.length - 1 ?
      getContentBySlug(
      posts[postIndex + 1].slug as string, 
      [ 'slug', 
        'title'], 
      EContentTypes.POSTS
      ) :
      null
  }

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post,
      content,
      prevPost,
      nextPost 
    }
  }
  
}

export const getStaticPaths = async () => {

  const posts = getAllContentByType(
    EContentTypes.POSTS, ['slug']
  )
  
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        },
      }
    }),
    fallback: false,
  }
}

export default Post