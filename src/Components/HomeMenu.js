import React from "react";
import Dinner from "../Asstes/dinner.jpg";
import Lunch from "../Asstes/lunch.jpg";
import Sides from "../Asstes/sides.jpg";
import Cobbler from "../Asstes/cobbler.jpg";

const HomeMenu = () => {
  const menuItems = [
    { image: Dinner, title: "Dinner Menu", path: "/resturant-website/menu" },
    { image: Lunch, title: "Lunch Menu", path: "/resturant-website/menu" },
    { image: Sides, title: "Side Dishes", path: "/resturant-website/menu" },
    { image: Cobbler, title: "Desserts", path: "/resturant-website/menu" },
  ];

  return (
    <section className="menu-section bg-gray-100 py-12">
      <div className="auto-container">
        <div className="max-w-[1400px] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="menu-block shadow-lg mt-4 hover:scale-105 duration-500"
            >
              <div className="inner-box">
                <div className="image relative">
                  <img
                    src={item.image}
                    alt={`${item.title}`}
                    className="w-full h-[12rem]"
                  />
                  {/* Overlay Box */}
                  <div className="overlay-box absolute inset-0 flex flex-col justify-end">
                    <div className="overlay-inner">
                      <div className="content text-center">
                        <h2 className="font-semibold text-2xl py-2 bg-yellow-500 bg-opacity-50">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
