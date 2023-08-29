import React from "react";
import Yams from "../Asstes/yams.jpg";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-[1800px] w-full h-full">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-40 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-semibold text-yellow-500">
              Contact Us
            </h1>
          </div>
        </div>
        <img
          src={Yams}
          alt="deviled-eggs"
          className="w-full md:h-[400px] h-[400px] object-cover"
        ></img>
      </div>
      
      <div className="max-w-[1000px] mx-auto my-4 py-6">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold mb-6 text-yellow-500">
          If you have any questions or inquiries, please feel free to contact
          us. We'd love to hear from you!
        </h1>
      </div>
        <form className="text-2xl py-2">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-gray-950 py-2 px-4 rounded font-semibold hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
