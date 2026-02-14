import React, { FC } from 'react'
import styles from './Tag.module.scss'
import { TTag } from 'types'
import Link from 'next/link'

// Types
type TProps = {
  tag: TTag;
  link: boolean;
}

const Tag:FC<TProps> = ({ tag, link }) => {

  const tagStyles = {
    backgroundColor : tag.color ? tag.color : 'red'
  }

  return (
    <li style={tagStyles} className={styles.tag_wrap}>
      {link ? 
        <Link 
          href={`/tags/${tag.slug}`}
          className={styles.tag_link}>
          {tag.name}
        </Link> : 
        <span>{tag.name}</span>}
    </li>
  )
}

export default Tag