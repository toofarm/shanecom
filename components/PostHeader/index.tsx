import React, { FC, useState, useEffect } from 'react'
import styles from './PostHeader.module.scss'
import format from 'date-fns/format'

// Types
type TProps = {
  title: string;
  sub_head?: string;
  img?: string;
  publication_date: string;
  updated_date?: string;
}

const PostHeader:FC<TProps> = ({ title, sub_head, img, publication_date }) => {
  const [pubDate, setPubDate] = useState<string>('')

  useEffect(() => {
    setPubDate(format(new Date(publication_date.split(' ')[0]), 'MMMM do, yyyy'))
  }, [])

  const rowStyles = {
    backgroundImage: `url(${img ? img : undefined})`
  }

  return (
    <div>
      <div className={`${img ? styles.has_image : ''} ${styles.post_header}`}>
        <div className={styles.background_grid} style={rowStyles}>
          <div></div>
          <div></div>
          <div className={styles.arbitrary_shell}>
            <h1>{title}</h1>
          </div>
          <div></div>
        </div>
        <h2>{sub_head}</h2>
      </div>
      <div className={styles.date_wrap}>
        <span>
          {pubDate}
        </span>
      </div>
    </div>
  )
}

export default PostHeader