"use client";
import SectionLayout, {
  Content,
  Description,
  Heading,
  SubHeading,
} from "@/app/components/layouts/SectionLayout/SectionLayout";

import Image from "next/image";

export const getImage = (url) => (
  <Image
    className="mobile:h-[364px] mobile:w-[343px]"
    src={url}
    width="569"
    height="603"
    alt="url"
  />
);
const PhotoGallery = () => {
  return (
    <SectionLayout>
      <Heading>photogallery</Heading>
      <SubHeading>View the wonderful places you can visit</SubHeading>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        pulvinar lorem justo, Lorem ipsum dolor sit amet, consectetur
      </Description>
      <Content>
        <div className=" mt-[111px] flex h-[603px] flex-1 gap-[32px] overflow-x-scroll mobile:ml-[34px] mobile:mt-[63px] mobile:flex mobile:h-[unset] mobile:w-[calc(100%_-_34px)]">
          {getImage("/Rectangle 12.png")}
          {getImage("/Rectangle 13.png")}
          {getImage("/Rectangle 16.png")}
        </div>
      </Content>
    </SectionLayout>

    // <>
    //   <div className=" mx-auto mt-[135px] w-[81.25%] mobile:mt-[35px] mobile:flex-col ">
    //     <div className=" pl-[3px] text-[16px] font-semibold uppercase leading-[28px] text-primary-light ">
    //       photogallery
    //     </div>
    //     <div className="mt-[36px] flex justify-between mobile:mt-[16px] mobile:flex-col">
    //       <div className="basis-[515px] text-[48px] font-bold leading-[50px] text-g-dark  mobile:basis-0 mobile:text-[32px] mobile:leading-[36px]">
    //         View the wonderful places you can visit
    //       </div>
    //       <div className=" basis-[435px] text-[16px] font-normal leading-[28px] mobile:mt-[30px] mobile:basis-0 ">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //         Pellentesque pulvinar lorem justo, Lorem ipsum dolor sit amet,
    //         consectetur{" "}
    //       </div>
    //     </div>
    //   </div>
    //
    //   <div className="ml-[135px] mt-[111px] flex h-[603px] flex-1 gap-[32px] overflow-x-scroll mobile:ml-[34px] mobile:mt-[63px] mobile:flex mobile:w-[calc(100%_-_34px)]">
    //     {getImage("/Rectangle 12.png")}
    //     {getImage("/Rectangle 13.png")}
    //     {getImage("/Rectangle 16.png")}
    //   </div>
    // </>
  );
};

export default PhotoGallery;
