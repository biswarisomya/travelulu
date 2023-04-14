import Image from "next/image";

const ContactBox = () => {
  return (
    <div className=" bg-[url('/Rectangle 4.png')] ]  mx-auto mt-[43px] flex h-[437px]  w-[81.25%] flex-col  rounded-[20px] bg-primary-dark bg-no-repeat pt-[143px] mobile:w-[87%] mobile:bg-none mobile:bg-no-repeat  mobile:pt-[110px] ">
      <div className="mx-auto w-[605px] justify-center text-center text-[48px] font-bold leading-[50px] text-white mobile:w-[290px]  mobile:text-[38px]  ">
        Need more information to get started?
      </div>
      <button className=" mx-auto  mt-[33px] h-[64px] w-[218.7px] justify-center rounded-[40px] border-2 border-white text-[16px] font-semibold uppercase leading-[28px] text-white  mobile:mx-auto  mobile:mt-[20px] mobile:w-[82%] ">
        contact us
      </button>
    </div>
  );
};

export default ContactBox;
