import React from "react";
import Container from "../Container";
import Image from "../ui elements/Image";
import logo from "/public/LOGO (2).png";
import { FaBars } from "react-icons/fa";

import Flex from "../Flex";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [menu,setMenu] = useState(false);
  const handleBarIcon =()=>{
    setMenu(!menu)
  }
  return (
    <>
      <Container>
        <div className="main py-2 px-20  bg-yellow-300">
          <Flex className="justify-between ">
            <div className="logo w-max ">
              <Image src={logo} alt={logo} className="h-[60px] " />
            </div>
            <div onClick={handleBarIcon} className="icon relative  ">

              <FaBars className="size-6 text-black  cursor-pointer" />

{menu &&(
  
  <div className="Menu text-black absolute right-7 top-[-8px] py-2 items-center px-2 ">

              <ul className="flex justify-between gap-5">
                <Link to={"/home"}>
                <li className="hover:text-gray-600 cursor-pointer">Home</li>
                </Link>
                <Link to={"/"}>
                <li className="hover:text-gray-600 cursor-pointer">Login</li>
                </Link>
                <Link to={"/signup"}>
                <li className="hover:text-gray-600 cursor-pointer">Signup</li>
                </Link>
              </ul>
            </div>
            )}
            </div>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
