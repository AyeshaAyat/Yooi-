import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Container from "../Container";
import Image from "../ui elements/Image";
import bgFriends from "../../assets/bgFriends.png";
const Login = () => {
  return (
    <>
      <Container>
        <div className="main py-2 text-center bg-[#e3e0e0] m-auto w-100 rounded-[6px] mt-6">
          <div className="up flex px-3 justify-between scale-60 border-b-1">
            <h1 className="text-[48px] text-[#111111] font-sans mt-4  ">---</h1>
            <h1 className="text-[48px] text-[#111111] font-sans mt-4  ">
              Yooi
            </h1>
            <Image src={bgFriends} alt={bgFriends} />
          </div>
          <div className="down">
            
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
