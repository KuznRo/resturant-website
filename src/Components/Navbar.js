
import { Link } from 'react-router-dom';
import Logo from '../Asstes/logo.jpg';
import { FaBars, FaX } from "react-icons/fa6";
import Button from './Button';
import { useState } from 'react';
const Navbar = () => {

  const [nav, setNav] = useState(false)
    const handleNavClick = () => setNav(!nav)

  return (
    <nav className='w-full text-gray-800 bg-gray-50 py-4 flex justify-center md:justify-between items-center px-4'>
      <div className='flex flex-col items-center md:flex-row md:items-center'>
      <a href='/resturant-website' className='flex items-center'>
          <h1 className='text-2xl font-bold mr-4 '>Soul For</h1>
          <img src={Logo} alt='logo' className='w-[70px]' />
          <h1 className='text-2xl font-bold ml-4 '>Your Soul</h1>
        </a>
        

        {/* Buttons and Icons */}
        <div className='flex justify-center items-center space-x-12 md:hidden md:flex-col md:items-center md:space-x-0 text-2xl py-4'>
          <div className='flex items-center'>
            <button onClick={handleNavClick} className='p-1 text-3xl text-yellow-500 font-bold border-2 border-yellow-500'><FaBars /></button>
          </div>
          <Button />
        </div>
        
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-4 text-lg font-semibold mr-4">
        <li>
        <Link to="/resturant-website" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li>
        <Link to="/resturant-website/menu" smooth={true} duration={500}>
          Menu
        </Link>
        </li>
        <li>
        <Link to="/resturant-website/about" smooth={true} duration={500}>
          About us
          </Link>
        </li>
        <li>
        <Link to="/resturant-website/testimonials" smooth={true} duration={500}>
          Testimonials
          </Link>
        </li>
        <li>
        <Link to="/resturant-website/contact" smooth={true} duration={500}>
          Contact Us
          </Link>
        </li>
        <Button />
      </ul>

       {/*Mobile Menu*/}
       
       <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-full bg-gray-50 text-yellow-500 font-bold  flex flex-col justify-center items-center z-10 "}>
        <button onClick={handleNavClick} className='absolute top-20 right-20 text-3xl p-1 font-bold border-2 border-yellow-500'><FaX/></button>
       <div className="text-center mb-4 flex items-center">
              <h1 className="text-2xl font-bold mb-2 mr-4">
                Soul For
              </h1>
              <img
                src={Logo}
                alt="logo"
                className="w-24 h-24 m-4 mb-2"
              />
              <h1 className="text-2xl font-bold ml-4">Your Soul</h1>
            </div>

        <li className="py-6 text-4xl border-b-2 border-gray-950" >
        <Link onClick={handleNavClick} to="/resturant-website" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl border-b-2 border-gray-950" >
        <Link onClick={handleNavClick} to="/resturant-website/menu" smooth={true} duration={500}>
          Menu
        </Link>
        </li>
        <li className="py-6 text-4xl border-b-2 border-gray-950" >
        <Link onClick={handleNavClick} to="/resturant-website/about" smooth={true} duration={500}>
          About us
          </Link>
        </li>
        <li className="py-6 text-4xl border-b-2 border-gray-950" >
        <Link onClick={handleNavClick} to="/resturant-website/testimonials" smooth={true} duration={500}>
          Testimonials
          </Link>
        </li>
        <li className="py-6 text-4xl border-b-2 border-gray-950" >
        <Link onClick={handleNavClick} to="/resturant-website/contact" smooth={true} duration={500}>
          Contact Us
          </Link>
        </li>
        <li className="py-8" >
        <Button />
        </li>
        
      </ul>
      
    </nav>
  )
}

export default Navbar;

