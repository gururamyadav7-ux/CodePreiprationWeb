import React, { useState } from "react";

import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function show(e) {
    setShowMenu(!showMenu);
  }

  const menuSm = (
    <div className=" absolute top-full border-t border-t-white flex gap-3 py-3 flex-col left-0 pl-10 w-full bg-black">
      <NavLink
        className={`${(isActive) => {
          return isActive ? "text-orange-600" : "text-white";
        }} text-[14px] hover:text-orange-600 font-bold w-full text-center`}
        to="/Home"
      >
        Home
      </NavLink>
      <NavLink
        className={`${(isActive) => {
          return isActive ? "text-orange-600" : "text-white";
        }} text-[14px] hover:text-orange-600 font-bold w-full text-center`}
        to="/Aboute"
      >
        Aboute
      </NavLink>
      <NavLink
        className={`${(isActive) => {
          return isActive ? "text-orange-600" : "text-white";
        }} text-[14px] hover:text-orange-600 font-bold w-full text-center`}
        to="/Course"
      >
        Course
      </NavLink>
      <NavLink
        className={`${(isActive) => {
          return isActive ? "text-orange-600" : "text-white";
        }} text-[14px] hover:text-orange-600 font-bold w-full text-center`}
        to="/CPL-Ditels"
      >
        CPL-Ditels
      </NavLink>
      <NavLink
        className={`${(isActive) => {
          return isActive ? "text-orange-600" : "text-white";
        }}  text-[14px] hover:text-orange-600 font-bold w-full text-center`}
        to="/Project"
      >
        Project
      </NavLink>
    </div>
  );
  return (
    <div className="w-full h-[10vh] text-white bg-black">
      <div className=" relative flex items-center justify-between w-full  h-full px-2 sm:px-10">
        <figure className="flex items-center justify-center gap-1">
          <img className="h-5" src="src\assets\codemoniter.svg" alt="" />
          <h3 className="text-[16px] font-bold">
            C <span className="text-red-600 text-2xl ">P</span> L
          </h3>
        </figure>

        <div className=" sm:flex hidden sm:block items-center gap-5 ">
          <NavLink
            className={`${(isActive) => {
              return isActive ? "text-orange-600" : "text-white";
            }} text-[14px] hover:text-orange-600 font-bold`}
            to="/Home"
          >
            Home
          </NavLink>
          <NavLink
            className={`${(isActive) => {
              return isActive ? "text-orange-600" : "text-white";
            }} text-[14px] hover:text-orange-600 font-bold`}
            to="/Aboute"
          >
            Aboute
          </NavLink>
          <NavLink
            className={`${(isActive) => {
              return isActive ? "text-orange-600" : "text-white";
            }} text-[14px] hover:text-orange-600 font-bold`}
            to="/Course"
          >
            Course
          </NavLink>
          <NavLink
            className={`${(isActive) => {
              return isActive ? "text-orange-600" : "text-white";
            }} text-[14px] hover:text-orange-600 font-bold`}
            to="/CPL-Ditels"
          >
            CPL-Ditels
          </NavLink>
          <NavLink
            className={`${(isActive) => {
              return isActive ? "text-orange-600" : "text-white";
            }}  text-[14px] hover:text-orange-600 font-bold`}
            to="/Project"
          >
            Project
          </NavLink>
        </div>
        {showMenu ? menuSm : ""}

        <div className=" sm:hidden ">
          <button onClick={show}>
            {showMenu ? (
              <IoClose className="text-3xl text-red-600" />
            ) : (
              <LuMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
