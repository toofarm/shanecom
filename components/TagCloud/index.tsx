import React, { FC } from 'react'
import styles from './Tag.module.scss'
import Tag from './Tag'
import { TTag } from 'types'

// Types
type TProps = {
  tags: TTag[]
}

const TagCloud:FC<TProps> = ({ tags }) => {
  return (
    <ul className={styles.tag_list}>
      {tags.map((tag) => <Tag tag={tag} key={`${tag.slug}_${Math.random() * 1000}`} />)}
    </ul>
  )
}

export default TagCloud