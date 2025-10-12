import React from "react";
import Container from "../Container";
import Image from "../ui elements/Image";
import logo from "/public/LOGO (2).png";
import Flex from "../Flex";
const Navbar = () => {
  return (
    <>
      <Container>
        <div className="main py-2   bg-yellow-300">
          <Flex className="justify-between">
            <div className="main  w-max ">
              <Image src={logo} alt={logo} className="h-[60px] " />
            </div>
            <div className="icon">
              
            </div>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
