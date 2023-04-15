import { BiMenu } from "react-icons/bi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="lg font-poppins flex justify-between  border-b-2 border-solid pb-[33px] pl-[135px]  pr-[90px] pt-[34px] font-bold text-primary-dark  mobile:pl-[9%] mobile:pr-[9%]">
      <Link href="/" className="text-[34px] leading-[55px]">
        Travelulu
      </Link>
      <button className=" flex flex-wrap content-center text-[25px]  ">
        <BiMenu />
      </button>
    </div>
  );
};

export default Header;
