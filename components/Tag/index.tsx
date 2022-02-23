import React, { FC } from 'react'
import styles from './Tag.module.scss'

// Types
type TProps = {
  tag: string
}

const Tag:FC<TProps> = ({ tag }) => {
  return (
    <li className={styles.tag_wrap}>
      {tag}
    </li>
  )
}

export default Tag