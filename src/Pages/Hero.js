import React from 'react';
import hero from '../Asstes/hero-plate.jpg';

const Hero = () => {
  return (
    <div className="relative">
      <img src={hero} alt="Plate of Food" className='w-full md:h-[600px] h-[450px] object-cover hero-img' />
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-8 pb-16">
        <div className="bg-black opacity-40 absolute inset-0"></div> {/* Color overlay */}
        <div className="max-w-2xl mx-auto relative text-white"> {/* Added max width and centered using mx-auto */}
          <p className="text-4xl font-semibold mb-8">Satisfaction Guaranteed</p>
          <h1 className="text-6xl md:text-8xl font-bold my-6">You WILL Need a Nap<span className="bg-yellow-400 text-gray-950">kin</span></h1>
          <a href='/order'>
            <div className='flex justify-center items-center text-center py-4'>
              <button className='font-bold text-4xl text-gray-950 bg-yellow-500 p-3 rounded-sm'>
                Order Online
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

