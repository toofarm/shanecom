import React, { FC, useState, useEffect } from 'react'
import { EContentTypes, TPost, TProject } from 'types'
import format from 'date-fns/format'
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
  const [date, setDate] = useState<string>('')

  useEffect(
    () => {
      setDate(format(
        new Date(stub.date_created.split(' ')[0]), 'MMMM do, yyyy'
      ))
    }, [stub]
  )
  
  return (
    <li className={styles.link_wrap}>
      <Link href={`/${type}/${stub.slug}`}>
        <a>
          <div className={styles.post_stub}> 
            <h3>{stub.title}</h3>
            <span className={styles.date}>{date}</span>
            <TagCloud tags={stub.tags} />
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostStub