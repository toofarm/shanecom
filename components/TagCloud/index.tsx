import React, { FC } from 'react'
import styles from './Tag.module.scss'
import Tag from './Tag'
import { TTag } from 'types'

// Types
type TProps = {
  tags: TTag[];
  link?: boolean;
}

const TagCloud:FC<TProps> = ({ tags, link=false }) => {
  return (
    <ul className={styles.tag_list}>
      {tags.map((tag) => <Tag 
        tag={tag} 
        key={`${tag.slug}_${Math.random() * 1000}`}
        link={link} />)}
    </ul>
  )
}

export default TagCloud