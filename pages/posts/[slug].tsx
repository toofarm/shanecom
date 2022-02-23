import React, { FC } from 'react'
import { getAllContentByType, getContentBySlug } from 'pages/api/get_content'
import { EContentTypes, TPost } from 'types'
import markdownToHtml from 'lib/markdownToHtml'

// Components
import Layout from 'components/Layout'
import HeadStateful from 'components/HeadStateful'
import PostHeader from 'components/PostHeader'

// Types
type TParams = {
    [key: string] : any
}

type TProps = {
    post: TPost,
    content: string
}

const Post:FC<TProps> = ({ post, content }) => {
  return (
    <>
      <HeadStateful pageTitle={post.post_title} />
      <Layout>
        <PostHeader 
          title={post.post_title} 
          sub_head={post.post_sub_head} 
          img={post.featured_image} 
          publication_date={post.date_created}
          tags={post.tags} />
        <div dangerouslySetInnerHTML={{ __html : content }}>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }:TParams) => {
  const post = 
    getContentBySlug(params.slug, 
      ['tags', 
        'post_title', 
        'post_sub_head', 
        'featured_image', 
        'additional_images', 
        'content', 
        'date_created', 
        'date_updated',
        'highlighted_post'], 
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