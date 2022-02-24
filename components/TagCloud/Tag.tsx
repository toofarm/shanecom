import React, { FC } from 'react'
import styles from './Tag.module.scss'

// Types
type TProps = {
  tag: string
}

type Obj = {
  [key: string] : string
}

const Tag:FC<TProps> = ({ tag }) => {
  const tagColors:Obj = {
    'giggles' : '#962d3e',
    'silly tings' : '#343642',
    'farts' : '#348899',
    'javascript' : '#b39d2a'
  }

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