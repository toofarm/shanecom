import React, { FC } from 'react'
import { tagColors } from 'lib/constants'
import styles from './Tag.module.scss'
import { TTag } from 'types'

// Types
type TProps = {
  tag: TTag
}

const Tag:FC<TProps> = ({ tag }) => {

  const tagStyles = {
    backgroundColor : tag.color ? tag.color : 'red'
  }

  return (
    <li style={tagStyles} className={styles.tag_wrap}>
      {tag.name}
    </li>
  )
}

export default Tag