import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

  if(!isMenuOpen) return null //early return

  return (
    <div className='p-5 w-48 shadow-lg'>
   
    <ul className='my-2'>
        <li className='my-2'><Link to="/">Home</Link></li>
        <li className='my-2'>Shorts</li>
        <li className='my-2'>Subscriptions</li>
    </ul>
    <hr className='mt-4'></hr>
    <ul className='pt-3'>
        <li className='my-2'>Library</li>
        <li className='my-2'>History</li>
        <li className='my-2'>Your Videos</li>
        <li className='my-2'>Watch Later</li>
        <li className='my-2'>Liked Videos</li>
    </ul>
    <hr className='mt-4'></hr>
    <ul>
        <h1 className='font-bold text-l my-3'>Subscriptions</h1>
        <li className='my-2'>Gate Smashers</li>
        <li className='my-2'>Knowledge Gate</li>
        <li className='my-2'>Your Videos</li>
        <li className='my-2'>Watch Later</li>
        <li className='my-2'>Liked Videos</li>
    </ul>
      
    </div>
  )
}

export default SideBar
