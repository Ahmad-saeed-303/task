import React, { useState, useEffect } from "react";
import { AiOutlineUser, AiOutlineUsergroupAdd, AiOutlineLeft, AiOutlineHeart } from "react-icons/ai";
import { FiFolder, FiShoppingCart } from "react-icons/fi";
import { RiSettings4Line } from "react-icons/ri";
import { BiArch } from "react-icons/bi";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const Home = () => {
  const menus = [
    { name: "Horses", link: "/", icon: AiOutlineUser },
    { name: "Clients", link: "/", icon: AiOutlineUsergroupAdd },
    { name: "Instructors", link: "/", icon: AiOutlineUser, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];

  const menus2 = [{ name: "Dashboard", link: "/", icon: BiArch }];

  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) setOpen(false); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex gap-6">
      <div className="grid grid-cols-1 gap-4 my-10 mx-5">
        <div
          className={`bg-[#cac7c7] min-h-screen rounded-lg ${
            open ? "w-72" : "w-16"
          } duration-500 text-[#646464] px-2`}
        >
          {/* {!isMobile && ( 
            <div className="py-3 flex justify-end">
              <AiOutlineLeft
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
          )} */}

          <div className="mt-4 flex flex-col gap-4 relative px-3">
            {menus2.map((menu, i) => (
              <Link
                to={menu.link}
                key={i}
                className={`${
                  menu.margin && "mt-5"
                } group flex items-center text-sm gap-3.5 font-medium p-0 rounded-md`}
              >
                <div>{React.createElement(menu.icon, { size: "30" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 text-[20px] ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-[#646464] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu.name}
                </h2>
              </Link>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-4 relative">
            <span className={`group flex items-center text-sm gap-3.5 font-medium py-2 text-gray-400 rounded-md ${!open && "hidden"}`}>
              Resources
            </span>
            {menus.map((menu, i) => (
              <Link
                to={menu.link}
                key={i}
                className={`${
                  menu.margin && "mt-5"
                } group flex items-center text-sm gap-3.5 font-medium py-3 hover:bg-gradient-to-r from-orange-500 to-white-500 w-full`}
              >
                <div>{React.createElement(menu.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[80%] rounded-md my-10 px-5">
        <div className="flex items-center px-5">
        {!isMobile && ( 
          <div className=" flex justify-ecenter items-center bg-gray-400 rounded-full w-7 h-7">
              <AiOutlineLeft
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
          )}
          <span className="px-5 text-[15px] lg:text-[30px] text-white">Medical / <span className="text-orange-300">Add Medicine</span></span>
        </div>
        <div className="m-3 text-xl text-gray-900 font-semibold mx-5 bg-[#cac7c7] rounded-md">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Home;
