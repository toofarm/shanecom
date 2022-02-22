import React, { FC } from 'react'
import Layout from 'components/Layout'
import { getAllContentByType } from './api/get_content'
import { EContentTypes, TPost } from 'types'

// Components
import PostStub from 'components/PostStub'

// Types 
type TProps = {
  posts: TPost[]
}


const Posts:FC<TProps> = ({ posts }) => {
  console.log('Posts received in component')
  console.log(posts)

  return (
    <Layout>
      <h2>Posts</h2>
      {posts.map((post) => <PostStub stub={post} key={post.post_title} />)}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = 
    getAllContentByType(EContentTypes.POSTS, 
      ['tags', 
        'post_title', 
        'post_sub-head', 
        'featured_image', 
        'date_created',])
  console.log('Posts returned by getStaticProps')
  console.log(posts)
  return {
    props: {
      posts
    }
  }
}

export default Posts