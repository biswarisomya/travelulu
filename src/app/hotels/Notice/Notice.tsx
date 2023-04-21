import { FiThumbsUp } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
const Notice = () => {
  return (
    <div className=" relative mx-auto flex  w-[81%] items-center gap-[9px] rounded-[16px] border-2 border-[#00BA88] bg-[#F2FFFB] py-[20px] pl-[26px] font-medium mobile:mt-[67px] mobile:w-[86%] mobile:p-[unset] mobile:pb-[16px] mobile:pl-[24px] mobile:pt-[20px] ">
      <div className="text-[23px] mobile:self-start">
        <FiThumbsUp />
      </div>
      <div className=" text-[14px] font-medium leading-[22px] text-[#00966D] mobile:ml-[18px] mobile:w-[56%] ">
        Lock in a great price for your upcoming stay
        <div>
          Get instant confirmation with FREE cancellation on most rooms!
        </div>
      </div>
      <button className="absolute right-[38px] mobile:right-[25px]">
        <IoIosClose />
      </button>
    </div>
  );
};

export default Notice;
