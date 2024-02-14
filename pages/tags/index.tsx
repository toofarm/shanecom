import React, { FC } from 'react'
import { getAllContentByTag, getSlugs, getContentBySlug } from '../api/get_content'
import { EContentTypes, TPost, TProject, TParams, TTag } from 'types'

// Components
import Layout from 'components/Layout'
import PostStub from 'components/PostStub'

// Types
type TProps = {
  tags: string[];
}

const Tag:FC<TProps> = ({ tags }) => {
  return (
    <>
      <Layout>
        <div>
          <h2>Tags</h2>
          <ul>
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const tags = getSlugs(EContentTypes.TAGS)
  return {
    props: {
      tags
    }
  }
}

export default Tag
