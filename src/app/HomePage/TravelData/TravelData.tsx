import { GiCommercialAirplane } from "react-icons/gi";
import { BiGlobe } from "react-icons/bi";
import { BsBicycle } from "react-icons/bs";

const getIcon = (type: string) => {
  if (type === "locations") return <GiCommercialAirplane />;
  if (type === "reviews") return <BiGlobe />;
  if (type === "travellers") return <BsBicycle />;
};

const data = [
  {
    type: "locations",
    title: "23,973",
    description: " Travel to over 23 thousand locations around the world.",
  },
  {
    type: "reviews",
    title: "82,000",
    description: "Read tens of thousands of reviews of destinations.",
  },
  {
    type: "travellers",
    title: "4,000,000",
    description: " Visited by millions of travellers every single day.",
  },
];

const TravelData = () => {
  return (
    <div className="flex justify-between border-y border-grey-light mobile:mx-auto mobile:mt-[87px] mobile:w-[86%] mobile:flex-col mobile:border-l">
      {data.map((d) => (
        <div
          key={d.type}
          className="flex flex-1  border-r pb-[57px] pl-[9.5%] pr-[3.3%] pt-[51px] mobile:border-y mobile:pb-[30px]"
        >
          <div className="mr-[25px]  text-[32px] text-primary-light ">
            {getIcon(d.type)}
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="h-[34px] text-[32px] font-bold leading-[34px] text-primary-extra-dark">
              {d.title}
            </div>
            <div className="text-grey-dark">{d.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelData;
