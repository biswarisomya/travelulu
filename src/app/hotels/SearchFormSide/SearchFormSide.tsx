"use client";

import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { RxPerson } from "react-icons/rx";
import { useState } from "react";

const SearchFormSide = () => {
  const [isFocusCheckIn, setIsFocusCheckIn] = useState(false);
  const [isFocusCheckOut, setIsFocusCheckOut] = useState(false);
  return (
    <div className="ml-[130px] mt-[45px] flex h-[49%]  w-[25%] flex-col rounded-[20px] bg-[#2A00A2] pb-[35px] pl-[35px] pr-[38px] pt-[30px]">
      <div className="text-[24px] font-semibold leading-[38px] text-primary-light ">
        Search
      </div>

      <form className="mt-[27px] flex  flex-col gap-[13px]">
        <div className="relative rounded-[16px]  ">
          <span className="absolute left-[24px] top-[45px] text-[25px]">
            <BiSearch />
          </span>
          <label
            className="text-[16px] font-normal leading-[28px] text-[#F3EFFF] text-white"
            htmlFor="destination"
          >
            Destination/property name
          </label>
          <input
            className=" h-[59px] w-[100%]  rounded-[16px] pl-[60px]"
            type="text"
            id="destination"
            name="destination"
            placeholder="Gold Coast"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <span className="absolute right-[24.5px] right-[27px] top-[50px]">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="relative rounded-[16px]  ">
          <span className="absolute left-[24px] top-[45px] text-[22px]">
            <SlCalender />
          </span>
          <label
            className="text-[16px] font-normal leading-[28px] text-[#F3EFFF] text-white"
            htmlFor="check-in"
          >
            Check-in date
          </label>
          <input
            className=" h-[59px] w-[100%]  rounded-[16px]  pl-[60px]"
            type={isFocusCheckIn ? "date" : "text"}
            id="check-in"
            name="check-in"
            placeholder="Check-in date"
            onFocus={() => setIsFocusCheckIn(true)}
            onBlur={() => setIsFocusCheckIn(false)}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <span className="absolute right-[24.5px] right-[27px] top-[50px]">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="relative rounded-[16px]  ">
          <span className="absolute left-[24px] top-[45px] text-[22px]">
            <SlCalender />
          </span>
          <label
            className="text-[16px] font-normal leading-[28px] text-[#F3EFFF] text-white"
            htmlFor="check-out"
          >
            Check-out date
          </label>
          <input
            className=" h-[59px] w-[100%]  rounded-[16px]  pl-[60px]"
            type={isFocusCheckOut ? "date" : "text"}
            id="check-out"
            name="check-out"
            onFocus={() => setIsFocusCheckOut(true)}
            onBlur={() => setIsFocusCheckOut(false)}
            placeholder="Check-out date"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <span className="absolute right-[24.5px] right-[27px] top-[50px]">
            <RiArrowDropDownLine />
          </span>
        </div>
        <div className="relative rounded-[16px] ">
          <span className="absolute left-[24px] top-[45px] text-[20px]">
            <RxPerson />
          </span>
          <label
            className="text-[16px] font-normal leading-[28px] text-[#F3EFFF] text-white"
            htmlFor="travellers"
          >
            Travellers
          </label>
          <input
            className=" h-[59px] w-[100%]  rounded-[16px]  pl-[60px]"
            type="text"
            id="travellers"
            name="travellers"
            placeholder="2 adults - 0 childern"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <span className="absolute right-[24.5px] right-[27px] top-[50px]">
            <RiArrowDropDownLine />
          </span>
        </div>
        <button className=" mt-[15px] h-[55px]  rounded-[40px] border bg-[#ED2E7E] text-[#F7F7FC]">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFormSide;
