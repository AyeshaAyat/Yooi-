import Container from "../Container";
import Image from "../ui elements/Image";
import bgFriends from "../../assets/bgFriends.png";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [InfoSave, setInfoSave] = useState(false);
  const handlePassInfo = () => {
    setInfoSave(!InfoSave);
  };

  return (
    <>
      <Container>
        <div className="main  py-2 bg-white m-auto w-80 rounded-[6px] mt-15">
          <div className="up flex  items-center pl-7   border-[#c1bfbf] border-b-1">
            <h1 className="text-[30px] text-[#111111] leading-0 font-sans ">
              ---
            </h1>
            <h1 className="text-[30px] text-[#111111] leading-7 font-sans ">
              Yooi
            </h1>
            <Image src={bgFriends} alt={bgFriends} className="h-13 " />
          </div>
          <div className="down border-1 m-3 text-center pb-3  border-[#d7d5d5]  rounded-[6px]">
            <input
              type="email"
              className="w-65 mt-3  py-1 focus:outline-0 text-[12px] border-[#a1a0a0]  text-black border-b-1"
              placeholder="Your Email"
            />
            <input
              onClick={handlePassInfo}
              type="email"
              className="w-65 mt-3  py-1 focus:outline-0 text-[12px] border-[#a1a0a0]  text-black border-b-1"
              placeholder="@!@#password"
            />

            {/* ----------------infoSave----------- */}
            {InfoSave && (
              <div className="infoSave flex  items-center px-4 py-2 ">
                <input
                  type="checkbox"
                  className="  appearance-none h-3 w-3 mr-0.5  cursor-pointer checked:bg-yellow-400  border-1 border-red-500 rounded-full   "
                />
                <p className="text-[9px] mr-0.5 text-red-500 font-sans whitespace-nowrap">
                  Save Login Information
                </p>
                <IoIosInformationCircleOutline className="text-red-500 text-[10px]" />
              </div>
            )}
            {/* ----------------infoSave----------- */}
            <div className="buttons mt-7">
              <button className="h-7 w-65 rounded-[3px] hover:bg-[#e3e0e0]/40 cursor-pointer bg-yellow-300/90 text-[#181715] font-sans font-medium text-[10px] ">
                Log In
              </button>
              <p className="text-[10px]  text-[#aeaaaa] m-1">or</p>
              <button className="h-7 w-65 rounded-[3px] hover:bg-[#e3e0e0]/40 cursor-pointer bg-[#e3e0e0] text-[#181715] font-sans font-medium text-[10px] ">
                Log in with Google
              </button>
            </div>
            <div className="reset flex justify-between  w-63 ml-5  mt-0.5">
              <div className="left">
                <button className="text-[8px] font-sans mr-3 hover:text-black cursor-pointer text-[#3b3a3a]">
                  Find Account
                </button>
                <button className="text-[8px] font-sans hover:text-black cursor-pointer  text-[#3b3a3a]">
                  Reset Password
                </button>
              </div>
              <Link to="/signup">
                <button className="text-[8.5px] font-sans font-semibold hover:text-red-500 cursor-pointer text-black">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
