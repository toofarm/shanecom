import React, { FC, useState, useEffect } from 'react'
import { TPost } from 'types'
import format from 'date-fns/format'
import Link from 'next/link'
import styles from './PostStub.module.scss'

// Components
import Tag from 'components/Tag'

// Types
type TProps = {
  stub: TPost
}

const PostStub:FC<TProps> = ({ stub }) => {
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    setDate(format(new Date(stub.date_created.split(' ')[0]), 'MMMM do, yyyy'))
  }, [stub])
  
  return (
    <div className={styles.link_wrap}>
      <Link href={`/posts/${stub.slug}`}>
        <a>
          <div className={styles.post_stub}> 
            <h3>{stub.post_title}</h3>
            <span className={styles.date}>{date}</span>
            <ul>
              {stub.tags.map((tag) => <Tag tag={tag} key={`${tag}_${stub.post_title}`} />)}
            </ul>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PostStub