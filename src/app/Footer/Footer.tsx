const Footer = () => {
  return (
    <div className=" mx-auto flex w-[81.25%] pb-[44px] pt-[91px] mobile:flex-col mobile:pt-[54px] mobile:text-center">
      <div className="flex basis-[40%] flex-col ">
        <div className="text-[20px] font-semibold  leading-[32px] text-primary-dark mobile:text-[34px] mobile:font-bold mobile:leading-[55px]">
          Travelulu
        </div>
        <div className=" mt-[30px] w-[55%] mobile:w-[100%] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
          ullamcorper magna, ac laoreet ex. Integer a consequat lectus. Nullam
          tortor sem .
          <div className="mt-[20px] text-[14px] font-semibold leading-[24px] mobile:mb-[40px] mobile:text-center">
            Copyright 2021, All Rights Reserved
          </div>
        </div>
      </div>

      <div className="  flex flex-1 flex-col gap-[23px] text-[14px] font-normal leading-[24px] text-[#6E7191] mobile:hidden">
        <div className="text-[20px] font-semibold leading-[32px] text-[#14142B]">
          Services
        </div>
        <div>Planning</div>
        <div>Financing</div>
        <div>Purchasing</div>
        <div>Meeting</div>
        <div>Flying</div>
      </div>
      <div className="flex flex-1 flex-col gap-[23px] text-[14px] font-normal leading-[24px] text-[#6E7191] mobile:hidden">
        <div className="text-[20px] font-semibold leading-[32px] text-[#14142B]">
          Continents
        </div>
        <div>North America</div>
        <div>South America</div>
        <div>Asia</div>
        <div>Africa</div>
        <div>Europe</div>
        <div>Australia</div>
      </div>

      <div className="flex flex-1 flex-col gap-[23px]">
        <div className="text-[20px] font-semibold leading-[32px] text-[#14142B]">
          Contact
        </div>
        <div className=" text-[14px] font-normal leading-[24px] text-primary-dark">
          travelulu@website.com
        </div>
        <div>
          22 Street Address, Suburb Address Main City, PO Box Country
          <div className="mt-[20px] text-[14px] font-semibold leading-[24px] ">
            08 8888 88888
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
