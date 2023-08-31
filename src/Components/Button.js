import React from 'react'

const Button = () => {
  return (
    <a href='/resturant-website/order'>
    <div className='flex justify-center items-center text-center'>
        <button className='font-bold text-2xl bg-gray-950 text-yellow-500 px-2 rounded-sm'>
            Order Online
        </button>
    </div>
    </a>
  )
}

export default Button