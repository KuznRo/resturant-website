import React, { useState } from 'react';
import Review_1 from '../Asstes/review_1.jpg';
import Review_2 from '../Asstes/review_2.jpg'
import Review_3 from '../Asstes/review_3.jpg'
import { FaStar } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const testimonialsData = [
  {
    image: Review_1,
    quote: "I had the pleasure of dining at Soul for Your Soul, and it was an unforgettable experience. The lasagna I enjoyed was a true masterpiece, bursting with rich flavors and a comforting warmth that reminded me of home-cooked meals. However, what truly stole the show was their baked potato – a true marvel of culinary craftsmanship. The perfectly crispy skin and the fluffy interior, paired with a medley of delectable toppings, created a harmonious symphony of taste and texture. Soul for Your Soul has certainly won my heart with their soulful and irresistible dishes.",
    rating: 5
  },
  {
    image: Review_2,
    quote: "Soul for Your Soul is an absolute gem of a soul food restaurant. From the moment my father and I savored their wings, I was transported by the incredible flavors. The variety of sauce choices is a true delight, and the yams are nothing short of amazing. It's a place where comfort and taste come together in every bite, making it our top choice for soulful and unforgettable dining experiences.",
    rating: 5
  },
  {
    image: Review_3,
    quote: "We have two words, Thumbs up!",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleLeftButtonClick = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleRightButtonClick = () => {
    setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonialsData[currentTestimonial];

  return (
    <div name='/resturant-website/testimonials' className='md:w-[1000px] bg-gray-50 mx-auto flex flex-col justify-center items-center py-8'>
      <h3 className='text-lg text-gray-950 font-semibold border-b-2 border-yellow-500'>Testimonials</h3>
      <div className='py-4 flex justify-center items-center'>
        <h2 className='text-3xl text-yellow-500 font-bold'>Our Customer Reviews</h2>
      </div>
      <div>
        <div className='flex justify-center items-center'>
          <img src={testimonial.image} alt='smiling-woman' className='py-4 my-2' />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-lg m-2 p-2'>{testimonial.quote}</p>
          <div className='flex items-center space-x-1'>
            {[...Array(testimonial.rating)].map((_, index) => (
              <FaStar key={index} className='text-yellow-500' />
            ))}
            <p className='px-4'>5/5 Stars</p>
          </div>
        </div>
      </div>

      {/* Buttons to scroll testimonials */}
      <div className='flex my-1 mx-auto p-2 space-x-12'>
  <button onClick={handleLeftButtonClick}>
    <FaArrowLeft />
  </button>
  <button onClick={handleRightButtonClick}>
    <FaArrowRight />
  </button>
</div>
    </div>
  );
};

export default Testimonials;
