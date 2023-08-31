import React from "react";
import Cornbread from "../Asstes/cornbread.jpg";
import Lasagna from "../Asstes/dinner-lasagna.jpg";
import Wings from "../Asstes/lunch-wings.jpg";
import Yams from "../Asstes/yams.jpg";
import Cheesecake from "../Asstes/cheesecake.jpg";

const DinnerMenuItems = [
  {
    name: "2 Piece Fried Chicken",
    description: "Choice of 2 Sides",
    price: "$10.99",
  },
  { name: "Half Rack Ribs", description: "Choice of 2 Sides", price: "$15.99" },
  { name: "Fried Catfish", description: "Choice of 2 Sides", price: "$12.99" },
  { name: "Lasagna", description: "Choice of 2 Sides", price: "$13.99" },
  {
    name: "Smothered Pork Chop",
    description: "Choice of 2 Sides",
    price: "$14.99",
  },
];

const LunchMenuItems = [
  {
    name: "3 Philly Cheese Sliders",
    description: "Choice of 1 Side",
    price: "$10.99",
  },
  { name: "Goulash", description: "Choice of 1 Side", price: "$8.99" },
  { name: "6 Hot Wings", description: "Choice of 1 Side", price: "$10.99" },
  { name: "4 Fish Sticks", description: "Choice of 1 Side", price: "$11.99" },
];

const SideDishes = [
  { name: "Mac and Cheese", price: "$4.99" },
  { name: "Greens", price: "$4.99" },
  { name: "Devilled Eggs", price: "$4.99" },
  { name: "Yams", price: "$4.99" },
  { name: "Corn Bread", price: "$4.99" },
  { name: "Dressing", price: "$5.99" },
];

const Desserts = [
  { name: "Peach Cobbler", price: "$4.99" },
  { name: "Pound Cake", price: "$3.99" },
  { name: "Cheese Cake", price: "$4.99" },
  { name: "Banana Pudding", price: "$5.99" },
];

const Menu = () => {
  return (
    <div name='/resturant-website/menu' className="max-w-[1800px] w-full h-full bg-gray-50 mx-auto">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-40 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-semibold text-yellow-500">Our Menu</h1>
          </div>
        </div>
        <img
          src={Cornbread}
          alt="Corn-bread"
          className="w-full md:h-[400px] h-[400px] object-cover"
        />
      </div>
      <div className="full-menu-container flex flex-col justify-center items-center my-12 mx-auto p-6 space-x-4">
        {/* Dinner Menu */}
        <div name="dinner" className="bg-gray-50 grid grid-cols-3">
          <div className="text-6xl font-bold text-yellow-500 flex justify-center items-center">
            <h1>Dinner Menu</h1>
          </div>
          <div></div>
          <div className="md:block hidden">
            <img
              className="max-h-[400px] max-w-[300px]"
              src={Lasagna}
              alt="lasagna"
            />
          </div>
        </div>
        <div className="menu-items grid grid-cols-3 gap-3 max-w-[1000px]">
          {DinnerMenuItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center p-4">
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className="text-lg font-semibold px-4 my-4">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-center items-center p-4">
                <p>----------</p>
              </div>
              <div className="flex justify-end items-center p-4">
                <div className="text-xl font-semibold">{item.price}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
        {/* Lunch Menu */}

        <div name="lunch" className="bg-gray-50 grid grid-cols-3">
          <div className="text-6xl font-bold text-yellow-500 flex justify-center items-center">
            <h1>Lunch Menu</h1>
          </div>
          <div></div>
          <div className="md:block hidden">
            <img
              className="max-h-[400px] max-w-[300px]"
              src={Wings}
              alt="Hot-Wings"
            />
          </div>
        </div>
        <div className="menu-items grid grid-cols-3 gap-3 max-w-[1000px]">
          {LunchMenuItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center p-4">
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className="text-lg font-semibold px-4 my-4">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-center items-center p-4">
                <p>----------</p>
              </div>
              <div className="flex justify-end items-center p-4">
                <div className="text-xl font-semibold">{item.price}</div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Side Dishes */}

        <div name="sides" className="bg-gray-50 grid grid-cols-3">
          <div className="text-6xl font-bold text-yellow-500 flex justify-center items-center">
            <h1>Side Dishes</h1>
          </div>
          <div></div>
          <div className="md:block hidden">
            <img
              className="max-h-[400px] max-w-[300px]"
              src={Yams}
              alt="Yams"
            />
          </div>
        </div>
        <div className="menu-items grid grid-cols-3 gap-3 max-w-[1000px]">
          {SideDishes.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center p-4">
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className="text-lg font-semibold px-4 my-4">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-center items-center p-4">
                <p>----------</p>
              </div>
              <div className="flex justify-end items-center p-4">
                <div className="text-xl font-semibold">{item.price}</div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Deserts */}

        <div name="dessert" className="bg-gray-50 grid grid-cols-3">
          <div className="text-6xl font-bold text-yellow-500 flex justify-center items-center">
            <h1>Deserts</h1>
          </div>
          <div></div>
          <div className="md:block hidden">
            <img
              className="max-h-[400px] max-w-[300px]"
              src={Cheesecake}
              alt="Cheesecake"
            />
          </div>
        </div>
        <div className="menu-items grid grid-cols-3 gap-3 max-w-[1000px]">
          {Desserts.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center p-4">
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className="text-lg font-semibold px-4 my-4">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-center items-center p-4">
                <p>----------</p>
              </div>
              <div className="flex justify-end items-center p-4">
                <div className="text-xl font-semibold">{item.price}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
