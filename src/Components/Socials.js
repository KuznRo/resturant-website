import React from 'react';
import { FaPhoneVolume, FaLocationDot, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className='w-full text-lg text-yellow-500 py-2 px-3 mx-auto bg-gray-950 md:flex md:justify-between'>
      <div className='flex justify-center items-center px-4 mx-[4rem]'>
        <h3>Follow us!</h3>
        <ul className='flex justify-evenly items-center max-w-[1000px] px-3'>
          <li className='px-2'>
            <a href='http://www.facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
          </li>
          <li className='px-2'>
            <a href='http://www.twitter.com' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
          </li>
          <li className='px-2'>
            <a href='http://www.instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
          </li>
        </ul>
      </div>
      <div className='flex justify-center items-center mx-[4rem]'>
        <ul className='flex justify-center items-center max-w-[1000px] p-2'>
          <li className='px-3 flex'>
            <span className="mr-2"><FaPhoneVolume /></span>
            987-654-3210
          </li>
          <li className='px-3 flex'>
            <a href='http://www.google.com/maps' target='_blank' rel='noopener noreferrer' className="no-underline flex items-center">
              <FaLocationDot className="mr-2" />
              123 Main st.
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Socials;
