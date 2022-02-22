import React, { FC } from 'react'
import { TPost } from 'types'

// Types
type TProps = {
  stub: TPost
}

const PostStub:FC<TProps> = ({ stub }) => {
  return (
    <div>
      <span>{stub.post_title}</span>
      <span>{stub.post_sub_head}</span>
    </div>
  )
}

export default PostStub