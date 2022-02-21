import React, { FC } from 'react'
import { getAllContentByType, getContentBySlug } from 'pages/api/get_content'
import { EContentTypes } from 'types'
import markdownToHtml from 'lib/markdownToHtml'

// Types
type TParams = {
    [key: string] : any
}

type TProps = {
    post: string,
    content: string
}

const Post:FC<TProps> = ({ post, content }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html : content }}>
    </div>
  )
}

export const getStaticProps = async ({ params }:TParams) => {
  const post = 
    getContentBySlug(params.slug, 
      ['tags', 
        'post_title', 
        'post_sub-head', 
        'featured_image', 
        'additional_images', 
        'content', 
        'date_created', 
        'date_updated'], 
      EContentTypes.POSTS)
  const content = await markdownToHtml(post.content || '')
  return {
    props: {
      ...post,
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