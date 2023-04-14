import Image from "next/image";
import SectionLayout, {
  Content,
  Description,
  Heading,
  SubHeading,
} from "@/app/components/layouts/SectionLayout/SectionLayout";

const ToolList = () => {
  return (
    <SectionLayout>
      <Heading>toollist</Heading>
      <SubHeading>Use our assortment of travel plan tools</SubHeading>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        pulvinar lorem justo, Lorem ipsum dolor sit amet, consectetur
      </Description>
      <Content>
        <div className="mt-[87px] flex  gap-[32px] mobile:mt-[36px]  mobile:flex-col">
          <div className="flex flex-1 flex-col rounded-[20px] border border-grey-light pb-[61px] pl-[33px] pr-[33px] pt-[53px]">
            <Image
              className="mx-auto"
              src={"/Time.png"}
              width="302"
              height="180"
              alt="time"
            />
            <div className=" mx-auto mt-[14px]  w-[216px] text-[16px] leading-[28px]">
              orem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

            <button className=" btn-plans mx-auto mt-[32px] h-[64px] w-[216px] text-[16px] font-semibold uppercase leading-[28px] text-primary-dark ">
              learn more
            </button>
          </div>
          <div className="flex flex-1 flex-col rounded-[20px] border border-grey-light pb-[61px] pl-[33px] pr-[33px] pt-[53px]">
            <Image
              className="mx-auto"
              src={"/Plane and money.png"}
              width="302"
              height="180"
              alt="plane and money"
            />
            <div className="mx-auto mt-[30px] text-[18px] font-semibold leading-[34px]">
              Pay For Your Flights
            </div>
            <div className=" mx-auto mt-[14px]  w-[216px] text-[16px] leading-[28px]">
              orem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

            <button className=" btn-plans mx-auto mt-[32px] h-[64px] w-[216px] text-[16px] font-semibold uppercase leading-[28px] text-primary-dark ">
              learn more
            </button>
          </div>
          <div className="flex flex-1 flex-col rounded-[20px] border border-grey-light pb-[61px] pl-[33px] pr-[33px] pt-[53px]">
            <Image
              className="mx-auto"
              src={"/Money.png"}
              width="302"
              height="180"
              alt="money"
            />
            <div className="mx-auto mt-[30px] text-[18px] font-semibold leading-[34px]">
              Plan Your Finances
            </div>
            <div className=" mx-auto mt-[14px]  w-[216px] text-[16px] leading-[28px]">
              orem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

            <button className=" btn-plans mx-auto mt-[32px] h-[64px] w-[216px] text-[16px] font-semibold uppercase leading-[28px] text-primary-dark ">
              learn more
            </button>
          </div>
        </div>
      </Content>
    </SectionLayout>
  );
};

export default ToolList;
