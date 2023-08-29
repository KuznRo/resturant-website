import React from "react";
import Eggs from "../Asstes/eggs.jpg";
import GrubHub from "../Asstes/grubhub.jpg";
import DoorDash from "../Asstes/door-dash.jpg"
import UberEats from "../Asstes/uber-eats.jpg"
const Order = () => {
  return (
    <div className="max-w-[1800px] w-full h-full bg-white my-8 mx-auto">
      <div className="relative">
      <div className="absolute bottom-0 w-full h-40 bg-black bg-opacity-70 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-semibold text-yellow-500">Order Online</h1>
        </div>
      </div>
      <img
        src={Eggs}
        alt="deviled-eggs"
        className="w-full md:h-[400px] h-[400px] object-cover"
      ></img>
    </div>
    <div className="md:flex justify-center items-center my-12 mx-auto p-6 space-x-4">
      <div className="menu-block mt-4 hover:scale-105 duration-500">
        <a href='http://www.grubhub.com' target='_blank' rel='noopener noreferrer'>
        <div className="image">
          <img src={GrubHub} alt="grub-hub" className="w-full h-[12rem]" />
        </div>
        </a>
      </div>
      <div className="menu-block mt-4 hover:scale-105 duration-500">
      <a href='http://www.doordash.com' target='_blank' rel='noopener noreferrer'>
        <div className="image">
          <img src={DoorDash} alt="door-dash" className="w-full h-[12rem]" />
        </div>
        </a>
      </div>
      <div className="menu-block mt-4 hover:scale-105 duration-500">
      <a href='http://www.ubereats.com' target='_blank' rel='noopener noreferrer'>
        <div className="image">
          <img src={UberEats} alt="uber-eats" className="w-full h-[12rem]" />
        </div>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Order;
