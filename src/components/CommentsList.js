import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  return (
    <div>
      {comments.map(comment => {
        return ( 
            <div className='my-2'>
            <Comment data = {comment} />
            <div className='ml-7 pl-2'>
            <Comment data = {comment} />
            <Comment data = {comment} />
            <Comment data = {comment} />
            </div>
            </div>
            )
      })}
    </div>
  )
}

export default CommentsList
