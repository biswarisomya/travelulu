import { ImNotification } from "react-icons/im";
import { IoIosClose } from "react-icons/io";
const Warning = () => {
  return (
    <div className=" font- relative mx-auto mt-[27px] flex flex h-[84.14px] w-[81%] items-center gap-[9px] rounded-[16px] border-2 border-[#ED2E7E] bg-[#FFF3F8] py-[20px] pl-[26px] pr-[39px] font-medium">
      <div className="border-2 text-[23px]">
        <ImNotification />
      </div>
      <div className=" w-[79%] text-[14px] font-medium leading-[22px] text-[#C30052]">
        From 6 April 2022, your chosen cancellation policy will apply,
        regardless of Coronavirus. We recommend booking a free cancellation
        option in case your travel plans need to change.
      </div>
      <div className="absolute right-[38px]">
        <IoIosClose />
      </div>
    </div>
  );
};

export default Warning;
