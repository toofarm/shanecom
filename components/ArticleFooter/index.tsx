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
      {prev && prev.slug && <Link href={`/${type}/${prev.slug}`}>
        Previous Post
      </Link>}
      {next && next.slug && <Link href={`/${type}/${next.slug}`}>
        Next Post
      </Link>}
    </div>
  )
}

export default ArticleFooter