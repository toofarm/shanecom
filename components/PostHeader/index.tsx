import React, { FC, useState, useEffect } from 'react'
import styles from './PostHeader.module.scss'
import format from 'date-fns/format'
import useWindowSize from 'hooks/use_window_size'

// Types
type TProps = {
  title: string;
  sub_head?: string;
  img?: string;
  publication_date: string;
  updated_date?: string;
}

const PostHeader:FC<TProps> = ({ title, sub_head, img, publication_date }) => {
  const { width } = useWindowSize()
  const [pubDate, setPubDate] = useState<string>('')
  const [showImg, setShowImg] = useState<boolean>(false)
 
  useEffect(() => {
    setPubDate(format(new Date(publication_date.split(' ')[0]), 'MMMM do, yyyy'))
    if (width && width < 767) setShowImg(true)
  }, [width]) 

  const rowStyles = {
    backgroundImage: `url(${img ? img : undefined})`
  }

  return (
    <div>
      <div className={`${img ? styles.has_image : ''} ${styles.post_header}`}>
        {showImg && <img src={img} alt={title} />}
        <div className={styles.background_grid} style={rowStyles}>
          <div>
          </div>
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