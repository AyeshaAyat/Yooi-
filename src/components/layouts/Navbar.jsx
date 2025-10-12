import React from "react";
import Container from "../Container";
import Image from "../ui elements/Image";
import logo from "/public/LOGO (2).png";
import { FaBars } from "react-icons/fa";

import Flex from "../Flex";
const Navbar = () => {
  return (
    <>
      <Container>
        <div className="main py-2 px-20  bg-yellow-300">
          <Flex className="justify-between ">
            <div className="logo w-max ">
              <Image src={logo} alt={logo} className="h-[60px] " />
            </div>
            <div className="icon text-black  ">
              <FaBars className="size-6 relative" />
              <div className="ul absolute  ">
                <li>Home</li>
                <li>Login</li>
                <li>Signup</li>
              </div>
            </div>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
