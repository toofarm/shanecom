import React, { FC } from 'react'
import tagColors from 'lib/constants'
import styles from './Tag.module.scss'

// Types
type TProps = {
  tag: string
}

const Tag:FC<TProps> = ({ tag }) => {

  const tagStyles = {
    backgroundColor : Object.prototype.hasOwnProperty.call(tagColors, tag.toLowerCase()) ? 
      tagColors[tag.toLowerCase()] : 'red'
  }

  return (
    <li style={tagStyles} className={styles.tag_wrap}>
      {tag}
    </li>
  )
}

export default Tag