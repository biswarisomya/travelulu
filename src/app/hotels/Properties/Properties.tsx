import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { FaRegStarHalf } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
const Properties = () => {
  return (
    <div className="ml-[37px] mr-[135px] mt-[41px] h-[1244px] w-[54%] ">
      <div className="text-[32px] font-bold leading-[34px]">
        254 Properties Found
      </div>
      <div className="flex ">
        <div className="mt-[42px]">
          <Image src={"/Property1.png"} width="268" height="204" />
        </div>
        <div className="ml-[35px] mt-[52px] flex h-[253px] w-[478px] flex-col ">
          <div className="flex items-center">
            <span className="  flex h-[22px] w-[64%]   gap-[8px] text-[#ED2E7E]">
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
              <FaRegStarHalf />
            </span>
            <span className="  flex h-[40px] w-[172px] items-center justify-center rounded-[40px] border-2 border-[#D9DBE9] text-[14px] font-semibold leading-[24px] text-[#5F2EEA] ">
              Make a booking
            </span>
          </div>

          <div className="mt-[9px] text-[24px] font-semibold  leading-[28px] text-[#5F2EEA]">
            Maldron Hotel Newcastle
          </div>
          <div className="font-normal ">
            Newcastle City Centre, Newcastle upon Tyne
            <div>0.3km from centre</div>
          </div>
          <div className="flex items-center font-semibold leading-[28px] text-[#5F2EEA]">
            <CiLocationOn />
            Show on map
          </div>
          <div>
            Situated in Newcastle City Centre, Maldron Hotel features free WiFi
            and a private court yard.
          </div>
        </div>
      </div>
      <div className="border border-[#D9DBE9]"></div>
      <div className="flex ">
        <div className="mt-[42px]">
          <Image src={"/Property2.png"} width="268" height="204" />
        </div>
        <div className="ml-[35px] mt-[52px] flex h-[253px] w-[478px] flex-col ">
          <div className="flex items-center">
            <span className="  flex h-[22px] w-[64%]   gap-[8px] text-[#ED2E7E]">
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
            </span>
            <span className="  flex h-[40px] w-[172px] items-center justify-center rounded-[40px] border-2 border-[#D9DBE9] text-[14px] font-semibold leading-[24px] text-[#5F2EEA] ">
              Make a booking
            </span>
          </div>

          <div className="mt-[9px] text-[24px] font-semibold  leading-[28px] text-[#5F2EEA]">
            Estate de la Newcastle
          </div>
          <div className="font-normal ">
            Newcastle City Centre, Newcastle upon Tyne
            <div>0.1km from centre</div>
          </div>
          <div className="flex items-center font-semibold leading-[28px] text-[#5F2EEA]">
            <CiLocationOn />
            Show on map
          </div>
          <div>
            Situated in Newcastle City Centre, Maldron Hotel features free WiFi
            and a private court yard.
          </div>
        </div>
      </div>
      <div className="border border-[#D9DBE9]"></div>
      <div className="flex ">
        <div className="mt-[42px]">
          <Image src={"/Property3.png"} width="268" height="204" />
        </div>
        <div className="ml-[35px] mt-[52px] flex h-[253px] w-[478px] flex-col ">
          <div className="flex items-center">
            <span className="  flex h-[22px] w-[64%]   gap-[8px] text-[#ED2E7E]">
              <BiStar />
              <BiStar />
              <BiStar />
            </span>
            <span className="  flex h-[40px] w-[172px] items-center justify-center rounded-[40px] border-2 border-[#D9DBE9] text-[14px] font-semibold leading-[24px] text-[#5F2EEA] ">
              Make a booking
            </span>
          </div>

          <div className="mt-[9px] text-[24px] font-semibold  leading-[28px] text-[#5F2EEA]">
            Newcastle Premier Hotel
          </div>
          <div className="font-normal ">
            Newcastle City Centre, Newcastle upon Tyne
            <div>1.5km from centre</div>
          </div>
          <div className="flex items-center font-semibold leading-[28px] text-[#5F2EEA]">
            <CiLocationOn />
            Show on map
          </div>
          <div>
            Situated in Newcastle City Centre, Maldron Hotel features free WiFi
            and a private court yard.
          </div>
        </div>
      </div>
      <div className="border border-[#D9DBE9]"></div>
      <div className="flex ">
        <div className="mt-[42px]">
          <Image src={"/Property4.png"} width="268" height="204" />
        </div>
        <div className="ml-[35px] mt-[52px] flex h-[253px] w-[478px] flex-col ">
          <div className="flex items-center">
            <span className="  flex h-[22px] w-[64%]   gap-[8px] text-[#ED2E7E]">
              <BiStar />
              <BiStar />
              <BiStar />

              <FaRegStarHalf />
            </span>
            <span className="  flex h-[40px] w-[172px] items-center justify-center rounded-[40px] border-2 border-[#D9DBE9] text-[14px] font-semibold leading-[24px] text-[#5F2EEA] ">
              Make a booking
            </span>
          </div>

          <div className="mt-[9px] text-[24px] font-semibold  leading-[28px] text-[#5F2EEA]">
            AirBnB Residence
          </div>
          <div className="font-normal ">
            Newcastle City Centre, Newcastle upon Tyne
            <div>2.2km from centre</div>
          </div>
          <div className="flex items-center font-semibold leading-[28px] text-[#5F2EEA]">
            <CiLocationOn />
            Show on map
          </div>
          <div>
            Situated in Newcastle City Centre, Maldron Hotel features free WiFi
            and a private court yard.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
