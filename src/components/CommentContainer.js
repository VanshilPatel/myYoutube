import React from 'react'
import Comment from './Comment'
import CommentsList from './CommentsList'

const commentsData = [
  {
    name : "Vanshil",
    text : "lorem123",
    replies : [
      {
        name : "fox",
        text : "Hi shawty",
        replies : [
          {
            name : "binod",
            text : "lorem ipsum dolor",
          },
        ]
      },
    ]
  },
  {
    name : "Vanshil",
    text : "lorem123",
    replies : [
      {
        name : "fox",
        text : "Hi shawty",
        replies : [
          {
            name : "binod",
            text : "lorem ipsum dolor",
          }
        ]
      },{
      name : "MrNobody",
      text : "Hi I am Mr Nobody . Mind your own business"
      }
    ]
  },
]

const CommentContainer = () => {
  return (
    <div className='px-11 my-3'>
    <h1 className=' text-2xl font-semibold'>Comments</h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentContainer
