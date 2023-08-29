import React from 'react'
import Catfish from '../Asstes/catfish.jpg'
import Button from '../Components/Button'


const Recommended = () => {
  return (
    <div className='md:w-[1000px] bg-gray-950 mx-auto flex flex-col justify-center items-center py-8'>
        <div className='py-4'>
            <p className='text-gray-100 text-xl border-b-2 border-yellow-500 flex justify-center items-center pb-1'>Featured Dish</p>
            <h2 className='text-3xl text-yellow-500 font-bold py-4'>Recommended by Our Chef</h2>
        </div>
        <div>
            <div>
                <img src={Catfish} alt='catfish-dinner' className='py-4 my-2'/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='text-yellow-500 text-2xl'>Sothern Fried Catfish Dinner</h4>
                <p className='text-gray-100 text-xl'>Fried Okra</p>
                <p className='text-gray-100 text-xl'>Black Eye'd Peas</p>
                <p className='text-gray-100 text-xl'><span className='text-yellow-500'>Soul</span> Mac and Cheese</p>
                <p className='text-gray-100 text-xl'>Corn Bread</p>
                <p className='text-gray-100 text-xl'>Banana Pudding</p>
                <h6 className='text-gray-950 bg-yellow-500 text-2xl p-2 my-4 font-semibold'>$29.95</h6>
                <Button />
            </div>
        </div>
    </div>
  )
}

export default Recommended