import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <div className="lg font-poppins flex justify-between  border-b-2 border-solid pb-[33px] pl-[135px]  pr-[90px] pt-[34px] font-bold text-primary-dark  mobile:pl-[9%] mobile:pr-[9%]">
      <span className="text-[34px] leading-[55px]">Travelulu</span>
      <span className=" flex flex-wrap content-center text-[25px]  ">
        <BiMenu />
      </span>
    </div>
  );
};

export default Header;
