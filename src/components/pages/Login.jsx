import { FaStar } from "react-icons/fa6";
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
        <div className="main pb-3   bg-white m-auto w-100 rounded-[6px] mt-15">
          <div className="up flex px-3 justify-between scale-60 border-[#c1bfbf] border-b-1">
            <h1 className="text-[48px] text-[#111111] font-sans mt-4  ">---</h1>
            <h1 className="text-[48px] text-[#111111] font-sans mt-4  ">
              Yooi
            </h1>
            <Image src={bgFriends} alt={bgFriends} />
          </div>
          <div className="down border-1 p-5 mx-2.5   border-[#858585]  rounded-[6px]">
            <div className="flex gap-2 mb-2.5">
              <FaStar className="text-black size-4 mt-2" />
              <input
                type="email"
                className="w-70  py-1 focus:outline-0 text-[14px] border-[#a1a0a0]  text-black border-b-1"
                placeholder="Your email"
              />
            </div>

            <div className="flex gap-2">
              <FaStar className="text-black size-4 mt-2" />
              <input
                onClick={handlePassInfo}
                type="email"
                className="w-65  py-1 focus:outline-0 text-[14px]  border-[#a1a0a0] text-black border-b-1"
                placeholder="@!@#password"
              />
            </div>
            {/* ----------------infoSave----------- */}
            {InfoSave && (
              <div className="infoSave flex items-center gap-[2px]  mt-2 w-30  h-4.5 ml-6  ">
                <input
                  type="checkbox"
                  className="  appearance-none h-[11px] w-[11px]  cursor-pointer checked:bg-yellow-400  border-1 border-red-500 rounded-full   "
                />
                <p className="text-[8px] text-red-500  whitespace-nowrap">
                  Save Login Information
                </p>
                <IoIosInformationCircleOutline className="text-red-500 text-[11px]" />
              </div>
            )}
            {/* ----------------infoSave----------- */}
            <div className="buttons mt-7 ml-10">
              <button className="h-7 w-60 rounded-[3px] hover:bg-[#e3e0e0]/40 cursor-pointer bg-yellow-300/90 text-[#181715] font-sans font-medium text-[11px] ">
                Log In
              </button>
              <p className="text-[10px] ml-29 text-[#cecccc] m-1">or</p>
              <button className="h-7 w-60 rounded-[3px] hover:bg-[#e3e0e0]/40 cursor-pointer bg-[#e3e0e0] text-[#181715] font-sans font-medium text-[11px] ">
                Log in with Google
              </button>
            </div>
            <div className="reset flex justify-between ml-10 w-60  mt-0.5">
              <div className="left">
                <button className="text-[7px] font-sans mr-3 hover:text-black cursor-pointer text-[#3b3a3a]">
                  Find Account
                </button>
                <button className="text-[7px] font-sans hover:text-black cursor-pointer  text-[#3b3a3a]">
                  Reset Password
                </button>
              </div>
              <Link to="/signup">
                <button className="text-[8px] font-sans font-semibold hover:text-red-500 cursor-pointer text-black">
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
