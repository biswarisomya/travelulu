import SectionLayout, {
  Content,
  Description,
  Heading,
  SubHeading,
} from "@/app/components/layouts/SectionLayout/SectionLayout";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const ForwardArrow = () => (
  <div className=" flex h-[78px] w-[78px] items-center justify-center rounded-[57.66px] border-2 border-primary-dark bg-primary-dark text-g-dark">
    <div className=" text-[25px] text-white">
      <MdArrowForwardIos />
    </div>
  </div>
);
const BackwardArrow = () => (
  <div className=" flex h-[78px] w-[78px] items-center justify-center rounded-[57.66px] border-2 border-primary-dark bg-primary-dark text-g-dark">
    <div className=" text-[25px] text-white">
      <MdArrowBackIos />
    </div>
  </div>
);

const data = [
  {
    url: "/Avatar face.png",
    name: "Joe Blo",
    visited: "France",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar lorem justo, id faucibus mi.",
  },
  {
    url: "/Avatar face 2.png",
    name: "Jane Blo",
    visited: "France",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar lorem justo, id faucibus mi.",
  },
  {
    url: "/Avatar 3.png",
    name: "Rogan Blo",
    visited: "France",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar lorem justo, id faucibus mi.",
  },
];

const Avatar = ({
  name,
  visited,
  description,
  url,
}: {
  name: string;
  visited: string;
  description: string;
  url: string;
}) => {
  return (
    <div
      key={name}
      className="relative mt-[55px] flex flex-1 flex-col rounded-[20px] border border-2 border-primary-extra-light mobile:flex-none mobile:basis-[79%]"
    >
      <div className=" absolute left-[35%] top-[-55px] mx-auto h-[121px] w-[121px] items-center justify-center rounded-[121px] bg-[#CDCCFF]  text-g-dark mobile:top-[-55px]">
        <Image src={url} width="121" height="0" alt="avatar" />
      </div>

      <div className=" mx-auto mt-[80px] flex w-[141px]  flex-col  text-[18px] leading-[27px] text-primary-dark">
        <div className=" mx-auto font-semibold">{name}</div>
        <div className="font-normal">Visited: {visited} </div>
      </div>

      <div className="bored-text-primary-light mx-auto mb-[52px] mt-[22px] w-[73%] border-t pt-[21px] text-[18px]  leading-[34px] mobile:w-[70%]">
        “{description}”
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <SectionLayout className="mobile:w-[100%]">
      <Heading className="mobile:mx-auto mobile:w-[81.25%]">
        testimonials
      </Heading>
      <SubHeading className="basis-[532px] mobile:mx-auto mobile:w-[81.25%]">
        Let’s see what fans of Travelulu have to say
      </SubHeading>
      <Description>
        <div className=" flex justify-end  gap-[27px] mobile:hidden">
          <BackwardArrow />
          <ForwardArrow />
        </div>
      </Description>
      <Content>
        <div className=" mt-[111px] flex  flex-1 gap-[32px] overflow-x-scroll mobile:ml-[34px] mobile:mt-[63px]  mobile:h-[unset] mobile:w-[calc(100%_-_34px)] mobile:gap-[16px]">
          {data.map((d) => (
            <Avatar
              key={d.name}
              visited={d.visited}
              description={d.description}
              url={d.url}
              name={d.name}
            />
          ))}
        </div>
      </Content>
    </SectionLayout>
  );
};

export default Testimonials;
