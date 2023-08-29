import React from "react";
import Logo from "../Asstes/logo.png";
import Restaurant from "../Asstes/restaurant.jpg";

const About = () => {
  return (
    <section name='about' className=" bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pr-8">
          <div className="text-center mb-4">
            <p className="text-yellow-500 text-xl font-bold pb-4">Welcome To</p>
            <div className="text-center mb-4 flex items-center">
              <h1 className="text-2xl font-bold mb-2 lg:ml-32">
                Soul For
              </h1>
              <img
                src={Logo}
                alt="logo"
                className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-2"
              />
              <h1 className="text-2xl font-bold lg:mr-32">Your Soul</h1>
            </div>
          </div>
          <p className="text-2xl text-gray-700 pb-8">
            Your go-to destination for soulful and comforting flavors. Our
            passion for delivering soul food that warms the heart and satisfies
            the taste buds drives us every day. With a rich history of family
            recipes passed down through generations, we've curated a menu that
            pays homage to traditional southern cuisine while adding our own
            modern twist.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={Restaurant}
            alt="restaurant"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
