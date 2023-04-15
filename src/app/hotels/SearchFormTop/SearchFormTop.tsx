import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Input } from "postcss";

const SearchFormTop = () => {
  return (
    <div className="my-[66px] ml-[125px] mr-[110px]  w-[83.6%] mobile:mx-auto mobile:mt-[77px] mobile:flex mobile:w-[87.5%] mobile:flex-col mobile:gap-[25px] ">
      <div className="text-[32px] font-bold leading-[34px]  mobile:text-[24px] mobile:leading-[32px]">
        Find deals on hotels, homes and much more...
      </div>
      <form className="flex gap-[20px] pt-[28px] text-[16px] font-semibold leading-[28px] text-[#14142B]  mobile:flex-col mobile:pt-[unset]">
        <div className="m  relative">
          <input
            className=" h-[56px] w-[474px] items-center justify-between rounded-[16px] border-2 pl-[24px] pr-[24px] mobile:w-[100%]"
            type="text"
            name="Where are you going?"
            placeholder="Where are you going?"
          />
          <span className="absolute right-[24.5px] right-[24.5px] top-[19.5px]">
            <MdArrowForwardIos />
          </span>
        </div>
        <div className="relative ">
          <input
            className=" flex h-[56px] w-[260px] items-center justify-between  rounded-[16px] border-2  pl-[24px] pr-[24px] mobile:w-[100%]"
            type="text"
            placeholder="Check-in - Check-out"
          />
          <span className="absolute right-[24.5px] top-[19.5px]">
            <MdArrowForwardIos />
          </span>
        </div>
        <div className="relative">
          <input
            className="  flex h-[56px] w-[260px] items-center justify-between rounded-[16px] border-2 pl-[24px] pr-[24px] mobile:w-[100%]"
            type="text"
            placeholder=" 2 adults - 0 children"
          />
          <span className="absolute right-[24.5px] top-[19.5px]">
            <MdArrowForwardIos />
          </span>
        </div>
        <button className="flex  h-[55px] w-[156px] items-center justify-center rounded-[40px] border bg-[#ED2E7E] text-[#F7F7FC] mobile:w-[100%]">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFormTop;
