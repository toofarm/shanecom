import React, { FC } from 'react'
import { EContentTypes, TPost, TProject } from 'types'
import Link from 'next/link'
import styles from './PostStub.module.scss'

// Components
import TagCloud from 'components/TagCloud'

// Types
type TProps = {
  stub: TPost | TProject,
  type: EContentTypes
}

const PostStub:FC<TProps> = ({ stub, type }) => {
  return (
    <li className={styles.link_wrap}>
      <Link href={`/${type}/${stub.slug}`}>
          <div className={styles.post_stub}> 
            <h3>{stub.title}</h3>
            <span className={styles.date}>{stub.date_created}</span>
            <TagCloud 
              tags={stub.tags}
              link={false} />
          </div>
      </Link>
    </li>
  )
}

export default PostStub