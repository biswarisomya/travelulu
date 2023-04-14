import Image from "next/image";

const Main = () => {
  return (
    <div data-test-id="Main" className="relative flex">
      <Image
        className="absolute right-0 mobile:top-[43px] mobile:w-[572px]"
        src={"/boarding.png"}
        width="986"
        height="634"
      />
      <div className="flex flex-col gap-[25px]  pb-[195px] pl-[135px] pt-[194px] mobile:mx-auto mobile:mt-[77%] mobile:w-[86%]  mobile:p-[unset] ">
        <div className="w-[669px] text-[64px] font-bold leading-[66px] text-g-dark  mobile:w-[100%] mobile:pl-[20px] mobile:text-[48px] mobile:leading-[50px]">
          Plan your next big trip overseas
        </div>
        <div className=" flex gap-[25px] font-medium text-white mobile:h-[unset]  mobile:flex-col mobile:font-semibold mobile:leading-[28px]  ">
          <button className="btn-plans h-[64px] bg-primary-dark  mobile:w-[100%]">
            begin plans
          </button>
          <button className=" btn-plans h-[64px] text-primary-dark mobile:w-[100%]">
            review plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
