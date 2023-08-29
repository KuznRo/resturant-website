import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <div className='flex justify-center items-center text-lg w-full py-4 bg-gray-950'>
            <p className='text-gray-50'>
                Copyright &copy; {date}
                <span className='px-4 text-yellow-500'>Soul For Your Soul</span>
            </p>
        </div>
    );
};

export default Footer;
