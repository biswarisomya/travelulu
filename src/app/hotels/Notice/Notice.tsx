import { FiThumbsUp } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
const Notice = () => {
  return (
    <div className=" font- relative mx-auto flex flex h-[84.14px] w-[81%] items-center gap-[9px] rounded-[16px] border-2 border-[#00BA88] bg-[#F2FFFB] py-[20px] pl-[26px] font-medium">
      <div className="border-2 text-[23px]">
        <FiThumbsUp />
      </div>
      <div className=" text-[14px] font-medium leading-[22px] text-[#00966D]">
        Lock in a great price for your upcoming stay
        <div>
          Get instant confirmation with FREE cancellation on most rooms!
        </div>
      </div>
      <div className="absolute right-[38px]">
        <IoIosClose />
      </div>
    </div>
  );
};

export default Notice;
