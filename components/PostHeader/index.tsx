import React, { FC, useState, useEffect } from 'react'
import format from 'date-fns/format'
import useWindowSize from 'hooks/use_window_size'
import styles from './PostHeader.module.scss'

// Types
type TProps = {
  title: string;
  sub_head?: string;
  img?: string;
  publication_date: string;
  updated_date?: string;
  caption?: string;
}

const PostHeader:FC<TProps> = ({ title, sub_head, img, publication_date, caption }) => {
  const { width } = useWindowSize()
  const [pubDate, setPubDate] = useState<string>('')
  const [showImg, setShowImg] = useState<boolean>(false)
 
  useEffect(
    () => {
      setPubDate(publication_date)
      if (width && width <= 767) setShowImg(true)
    }, [width]
  ) 

  const rowStyles = {
    backgroundImage: `url(${img ? img : undefined})`
  }

  return (
    <div>
      <div className={`${img ? styles.has_image : ''} ${styles.post_header}`}>
        {showImg && <img src={img} alt={title} />}
        {caption && width && width <= 767 && <div className={styles.caption}>{caption}</div>}
        <div className={styles.background_grid} style={width && width > 767 ? rowStyles : {}}>
          <div>
          </div>
          <div></div>
          <div className={styles.arbitrary_shell}>
            <h1>{title}</h1>
          </div>
          <div></div>
        </div>
        {caption && width && width > 767 && <div className={styles.caption}>{caption}</div>}
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