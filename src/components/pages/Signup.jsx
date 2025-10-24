import React from "react";
import Container from "../Container";
import Image from "../ui elements/Image";
import Cartoons from "../../assets/cartoons.png";
import { Link } from "react-router-dom";
const Signup = () => {

  return (
    <>
      <Container>
        <div  className="main   bg-white m-auto w-75 rounded-[6px] mt-15">
          <div className="up flex items-center pl-12">
            <h1 className="text-[30px] pt-2 text-[#111111] font-sans ">
              REGISTER
            </h1>
            <Image src={Cartoons} alt={Cartoons} className="h-20"/>
          </div>
          <p className="text-[22px] text-center leading-3 tracking-wide text-[#866465] font-sans ">
            Create your free account
          </p>
         
          <div className="down text-center mt-3  ">
            <input 
             
              type="text"
              className="w-60 mt-3  p-1 focus:outline-0 text-[12px] border-[#a1a0a0]  text-black border-1"
              placeholder="Full Name"
            />
            <input
           
              type="email"
              className="w-60 mt-3 p-1 focus:outline-0 text-[12px] border-[#a1a0a0]  text-black border-1"
              placeholder="Email"
            />

            <input
            
              type="email"
              className="w-60 mt-3 p-1 focus:outline-0 text-[12px]  border-[#a1a0a0] text-black border-1"
              placeholder="Password"
            />

            <div className="buttons mt-4">
              <button className="py-1.5 w-60 rounded-[3px] hover:bg-[#e3e0e0] cursor-pointer bg-yellow-300 text-[#181715] font-sans font-medium text-[12px] ">
               Sign up
              </button>
            </div>
            <div className="reset flex justify-between items-center ml-8 w-60 pb-2  ">
             
             <p className="text-[9px] font-sans text-[#3b3a3a]">Already have an account?</p>
             
              <Link to="/">
                <button className="text-[9px] font-sans font-semibold hover:text-red-500 cursor-pointer text-black">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
