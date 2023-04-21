import { ImNotification } from "react-icons/im";
import { IoIosClose } from "react-icons/io";
const Warning = () => {
  return (
    <div className=" font- relative mx-auto mt-[27px] flex  w-[81%] items-center gap-[9px] rounded-[16px] border-2 border-[#ED2E7E] bg-[#FFF3F8] py-[20px] pl-[26px] pr-[39px] font-medium mobile:w-[86%]">
      <div className="text-[23px] mobile:self-start">
        <ImNotification />
      </div>
      <div className=" w-[79%] text-[14px] font-medium leading-[22px] text-[#C30052] mobile:ml-[18px]">
        From 6 April 2022, your chosen cancellation policy will apply,
        regardless of Coronavirus. We recommend booking a free cancellation
        option in case your travel plans need to change.
      </div>
      <button className="absolute right-[38px] mobile:right-[25px]">
        <IoIosClose />
      </button>
    </div>
  );
};

export default Warning;
