import React from 'react'
import {Link} from 'react-router-dom'

const Button = () => {
  return (
    <Link path='/resturant-website/order'>
    <div className='flex justify-center items-center text-center'>
        <button className='font-bold text-2xl bg-gray-950 text-yellow-500 px-2 rounded-sm'>
            Order Online
        </button>
    </div>
    </Link>
  )
}

export default Button