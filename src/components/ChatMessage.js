import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center mt-3'>
      <img className="  w-6 h-6 rounded-full" src="https://yt4.ggpht.com/ytc/AGIKgqOv1fIH1LnwR7PEKN570H12_3ExqNHKrdzXJKxvDm3nkTEH0ZDHl_sAlM9wMjcY=s64-c-k-c0x00ffffff-no-rj"/>
      <span className=' ml-3 text-sm text-gray-600'>{name} </span>
      <span className=' ml-2 text-sm font-medium'>{message}</span>
     
    </div>
    
  )
}

export default ChatMessage
