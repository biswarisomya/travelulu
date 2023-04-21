import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { FaRegStarHalf } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { images } from "next/dist/build/webpack/config/blocks/images";
import Link from "next/link";
const Properties = () => {
  const data = [
    {
      img: "/Property1.png",
      images: ["/Property2.png", "/Property3.png", "/Property4.png"],
      star: "4.5",
      name: "Estate de la Newcastle",
      description: " Newcastle City Centre, Newcastle upon Tyne",
      distance: "0.3km",
      address:
        "Situated in Newcastle City Centre, Maldron Hotel features free WiFi and a private court yard.",
    },
    {
      img: "/Property2.png",
      images: ["/Property1.png", "/Property3.png", "/Property4.png"],
      star: "5",
      name: "Maldron Hotel Newcastle",
      description: " Newcastle City Centre, Newcastle upon Tyne",
      distance: "0.2km",
      address:
        "Situated in Newcastle City Centre, Maldron Hotel features free WiFi and a private court yard.",
    },
    {
      img: "/Property3.png",
      images: ["/Property1.png", "/Property2.png", "/Property4.png"],
      star: "3",
      name: "Newcastle Premier Hotel",
      description: " Newcastle City Centre, Newcastle upon Tyne",
      distance: "1.5km",
      address:
        "Situated in Newcastle City Centre, Maldron Hotel features free WiFi and a private court yard.",
    },
    {
      img: "/Property4.png",
      images: ["/Property1.png", "/Property2.png", "/Property3.png"],
      star: "3.5",
      name: "AirBnB Residemce",
      description: " Newcastle City Centre, Newcastle upon Tyne",
      distance: "2.2km",
      address:
        "Situated in Newcastle City Centre, Maldron Hotel features free WiFi and a private court yard.",
    },
  ];

  return (
    <div className="ml-[37px] mr-[135px] mt-[41px]  w-[54%] mobile:ml-[30px] mobile:mr-[unset] mobile:w-[87.5%] ">
      <div className="text-[32px] font-bold leading-[34px]">
        254 Properties Found
      </div>

      {data.map((d) => (
        <div
          key={d.name}
          className="flex border-b-2 last:border-none mobile:flex-col"
        >
          <div className="mt-[42px] mobile:flex mobile:w-[calc(100%_-_-31px)] mobile:gap-[20px] mobile:overflow-x-scroll">
            <Image
              className="mobile:h-[204px] "
              src={d.img}
              width="268"
              height="204"
              alt="image 1"
            />
            {d.images.map((i, index) => (
              <Image
                key={i}
                className="mobile:h-[204px]  desktop:hidden"
                src={i}
                width="268"
                height="204"
                alt={`image ${index + 2}`}
              />
            ))}
          </div>
          <div className=" ml-[35px] mt-[52px] flex w-[478px]  flex-wrap mobile:ml-[unset]  mobile:mt-[22px] mobile:w-[unset] mobile:gap-2 mobile:pb-[39px] ">
            <span className=" flex w-[64%]  gap-[8px] text-[#ED2E7E] mobile:order-1 mobile:basis-full">
              <BiStar className="text-[22px]" />
              <BiStar className="text-[22px]" />
              <BiStar className="text-[22px]" />
              <BiStar className="text-[22px]" />
              <FaRegStarHalf className="text-[22px]" />
            </span>
            <button className="flex h-[40px] w-[172px] items-center  justify-center rounded-[40px] border-2 border-[#D9DBE9] text-[14px] font-semibold leading-[24px] text-[#5F2EEA] mobile:order-6 mobile:basis-[50%] mobile:basis-full ">
              Make a booking
            </button>
            <Link
              href={`/${d.name}`}
              className="mt-[9px] text-[24px] font-semibold leading-[28px] text-[#5F2EEA]  mobile:order-2 mobile:basis-full"
            >
              {d.name}
            </Link>
            <div className=" font-normal mobile:order-3 mobile:basis-full ">
              {d.description}
              <div>{d.distance} from centre</div>
            </div>
            <div className="  flex items-center font-semibold leading-[28px] text-[#5F2EEA] mobile:order-4 mobile:basis-full">
              <CiLocationOn />
              <Link href="/">Show on map</Link>
            </div>
            <div className="mobile:order-5  ">{d.address}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Properties;
