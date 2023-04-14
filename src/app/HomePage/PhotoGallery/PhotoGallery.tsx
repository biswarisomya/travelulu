"use client";
import SectionLayout, {
  Content,
  Description,
  Heading,
  SubHeading,
} from "@/app/components/layouts/SectionLayout/SectionLayout";

import Image from "next/image";

export const getImage = (url: string) => (
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
  );
};

export default PhotoGallery;
