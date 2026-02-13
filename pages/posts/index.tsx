import React, { FC } from 'react'
import Layout from 'components/Layout'
import { getAllContentByType } from '../api/get_content'
import { EContentTypes, TPost } from 'types'
import styles from './Posts.module.scss'

// Components
import PostStub from 'components/PostStub'
import HeadStateful from 'components/HeadStateful'

// Types 
type TProps = {
  posts: TPost[]
}

const Posts:FC<TProps> = ({ posts }) => {
  return (
    <>
      <HeadStateful pageTitle='Posts' />
      <Layout>
        <div className={styles.posts_wrap}>
          <h2>Posts</h2> 
          <ul className={styles.posts_list}>
            {posts.map((post) => <PostStub 
              type={EContentTypes.POSTS}
              stub={post} 
              key={post.title} />)}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = 
    getAllContentByType(
      EContentTypes.POSTS, 
      ['tags', 
        'title',
        'featured_image', 
        'date_created',
        'slug']
    )
  return {
    props: {
      posts
    }
  }
}

export default Posts