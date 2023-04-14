"use client";
import SectionLayout, {
  Content,
  Heading,
  SubHeading,
} from "@/app/components/layouts/SectionLayout/SectionLayout";

import Image from "next/image";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import useWindowSize from "@rooks/use-window-size";

const ForwardArrow = () => (
  <div className=" flex h-[54px] w-[54px] items-center justify-center rounded-[54px] border-2 border-primary-dark text-g-dark ring-8 ring-[#E4DAFF]">
    <div className=" text-[25px] text-primary-dark">
      <MdArrowForwardIos />
    </div>
  </div>
);

const BackwardArrow = () => (
  <div className=" flex h-[54px] w-[54px] items-center justify-center rounded-[54px] border-2 border-primary-dark text-g-dark ring-8 ring-[#E4DAFF]">
    <div className=" text-[25px] text-primary-dark">
      <MdArrowBackIos />
    </div>
  </div>
);
const PlanningAhead = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize?.outerWidth && windowSize?.outerWidth < 640;
  return (
    <SectionLayout>
      <Heading className="text-center">planning ahead</Heading>
      <SubHeading className="mx-auto w-[50%] basis-[unset] text-center mobile:w-[unset]">
        Let’s review your checklist of everything
      </SubHeading>
      <Content>
        <div className=" mt-[118px] flex justify-between  bg-contain bg-center  bg-no-repeat text-[18px] font-semibold leading-[34px] mobile:mt-[45px] mobile:flex-col mobile:bg-none">
          <div className="mb-[50px] flex basis-[29%] flex-col gap-[75px] mobile:order-2 mobile:mt-[122px] mobile:gap-[48px] ">
            <div className="flex self-end mobile:flex-row-reverse mobile:gap-[30px] mobile:self-start">
              <div className="mr-[50px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur ds.
              </div>
              <div className="pt-[8px]">
                <ForwardArrow />
              </div>
            </div>
            <div className="flex self-end pr-[50px]  mobile:flex-row-reverse mobile:gap-[30px] mobile:self-start mobile:pl-[22%]">
              <div className="mr-[50px] w-[200px] ">
                Lorem ipsum dolor sit amet, consectetur ds.
              </div>
              <div className="pt-[8px]">
                <ForwardArrow />
              </div>
            </div>
            <div className="flex self-end mobile:flex-row-reverse mobile:gap-[30px] mobile:self-start">
              <div className="mr-[50px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur ds.
              </div>
              <div className="pt-[8px]">
                <ForwardArrow />
              </div>
            </div>
          </div>

          <Image
            className="basis-[42%]  mobile:order-1"
            src={"/AirHelp.png"}
            width="570"
            height="337"
            alt="Air help"
          />
          <div className="mb-[50px] flex basis-[29%] flex-col  gap-[75px]  mobile:order-3 ">
            <div className="flex flex-row-reverse self-start mobile:pl-[22%]">
              <div className="ml-[50px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur ds.
              </div>
              <div className="pt-[8px]">
                {isMobile ? <ForwardArrow /> : <BackwardArrow />}
              </div>
            </div>
            <div className="flex flex-row-reverse self-end pl-[50px] mobile:self-start mobile:pl-[unset]">
              <div className="ml-[50px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur ds.
              </div>
              <div className="pt-[8px]">
                {isMobile ? <ForwardArrow /> : <BackwardArrow />}
              </div>
            </div>
            <div className="flex flex-row-reverse self-start mobile:pl-[22%]">
              <div className="ml-[50px] w-[200px]">
                Lorem ipsum dolor sit amet, consectetur ds.
              </div>
              <div className="pt-[8px]">
                {isMobile ? <ForwardArrow /> : <BackwardArrow />}
              </div>
            </div>
          </div>
        </div>
      </Content>
    </SectionLayout>
  );
};

export default PlanningAhead;
