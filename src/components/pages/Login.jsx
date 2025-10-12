import { FaStar } from "react-icons/fa6";
import Container from "../Container";
import Image from "../ui elements/Image";
import bgFriends from "../../assets/bgFriends.png";
const Login = () => {
  return (
    <>
      <Container>
        <div className="main pb-3  bg-[#e3e0e0] m-auto w-100 rounded-[6px] mt-6">
          <div className="up flex px-3 justify-between scale-60 border-[#c1bfbf] border-b-1">
            <h1 className="text-[48px] text-[#111111] font-sans mt-4  ">---</h1>
            <h1 className="text-[48px] text-[#111111] font-sans mt-4  ">
              Yooi
            </h1>
            <Image src={bgFriends} alt={bgFriends} />
          </div>
          <div className="down border-1 p-5 mx-2.5   border-[#383838] rounded-[6px]">
            <div className="flex gap-2 mb-2">

            <FaStar className="text-black size-4 mt-1.5"/>
            <input type="email" className="w-60  py-1 focus:outline-0 text-[14px]  text-black border-b-1" placeholder="Your email" />
            </div>
            <div className="flex gap-2">

            <FaStar className="text-black size-4 mt-1.5"/>
            <input type="email" className="w-55  py-1 focus:outline-0 text-[14px]  text-black border-b-1" placeholder="@!@#password" />
          </div>
            </div>
           
        </div>
      </Container>
    </>
  );
};

export default Login;
