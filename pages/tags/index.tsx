import React, { FC } from 'react'
import { getAllContentByType } from '../api/get_content'
import { EContentTypes, TTag } from 'types'
import styles from './Tags.module.scss'

// Components
import Layout from 'components/Layout'

// Types
type TProps = {
  tags: TTag[];
}

const Tag:FC<TProps> = ({ tags }) => {
  return (
    <>
      <Layout>
        <div>
          <h2>Tags</h2>
          <ul className={styles.post_list}>
            {tags.map((tag) => <li 
              className={styles.tag_item}
              key={tag.slug}>
              <a href={`/tags/${tag.slug}`}>
                <span style={{ backgroundColor: tag.color }}
                  className={styles.tag_badge}></span>
                {tag.name}
              </a>
            </li>)}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const tags = getAllContentByType(
    EContentTypes.TAGS, ['name', 'slug', 'color']
  )

  return {
    props: {
      tags
    }
  }
}

export default Tag
