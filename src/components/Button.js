import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='px-4 py-1 mx-2 border border-gray-400 bg-slate-100 rounded-lg'>{props.name}</button>
      
    </div>
  )
}

export default Button
