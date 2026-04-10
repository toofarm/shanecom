import React, { FC } from 'react'
import { EContentTypes, IContent } from 'types'
import Link from 'next/link'
import styles from './PostFooter.module.scss'

type TProps = {
  type: EContentTypes;
  prev: IContent | null;
  next: IContent | null
}

const ArticleFooter: FC<TProps> = ({ 
  type, 
  prev, 
  next }) => {
  return (
    <div className={styles.post_footer}>
      <div className={styles.wrap}>
        {prev && prev.slug && 
        <>
          <h5>
        &#8592; previous
          </h5>
          <Link href={`/${type}/${prev.slug}`}>
              {prev.title ? prev.title : 'Previous Post'}
          </Link>
        </>}
      </div>
      <div className={`${styles.wrap} ${styles.next}`}>
        {next && next.slug && 
        <>
          <h5>
          next &#8594;
          </h5>
          <Link 
            href={`/${type}/${next.slug}`}>
              {next.title ? next.title : 'Next Post'}
          </Link>
        </>}
      </div>
    </div>
  )
}

export default ArticleFooter