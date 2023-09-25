import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let routeList = [
    { id: 1, name: "Home", rout: "/" },
    { id: 2, name: "About", rout: "/about" },
    { id: 3, name: "Contuct", rout: "/contuct" },
    { id: 4, name: "Servise", rout: "/product" },
    { id: 5, name: "Servise", rout: "/service" },
  ];
  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-2.5 md:py-1 bg-black text-white">
        <img src="/public/vite.svg" alt="" />
        <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <span>
            {isOpen === true ? (
              <XMarkIcon className="text-purple-400 w-9"></XMarkIcon>
            ) : (
              <Bars3Icon className="text-purple-400 w-9"></Bars3Icon>
            )}
          </span>
        </div>
        <ul
          className={`md:flex absolute duration-500 md:static bg-black px-3 py-1 ${
            isOpen === true ? "top-14 left-0" : "-start-44 top-14"
          }`}
        >
          {routeList.map((item) => (
            <li
              className="p-3 ms-1 sm:mb-5 md:mb-0 hover:bg-teal-200 uppercase hover:text-black rounded-sm"
              key={item.id}
            >
              <a href={item.rout}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navebar;
