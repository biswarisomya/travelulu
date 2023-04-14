import React from "react";

export const Heading = ({ children, className }) => {
  return (
    <div
      className={`basis-[100%] pl-[3px] text-[16px] font-semibold uppercase leading-[28px] text-primary-light ${className}`}
    >
      {children}
    </div>
  );
};
export const SubHeading = ({ children, className }) => {
  return (
    <div
      className={`mt-[36px] basis-[515px] text-[48px] font-bold leading-[50px] text-g-dark mobile:mt-[16px] mobile:basis-0 mobile:text-[32px] mobile:leading-[36px] ${className}`}
    >
      {children}
    </div>
  );
};

export const Description = ({ children, className }) => {
  return (
    <div
      className={`mt-[36px] basis-[435px] text-[16px] font-normal leading-[28px] mobile:mt-[16px] mobile:mt-[30px] mobile:basis-0 ${className}`}
    >
      {children}
    </div>
  );
};
export const Content = ({ children, className }) => {
  return <div className="w-[100%]">{children}</div>;
};

const SectionLayout = ({ children, className }: { children: any }) => {
  const heading = children.find((c) => c.type.name === "Heading");
  const subHeading = children.find((c) => c.type.name === "SubHeading");
  const description = children.find((c) => c.type.name === "Description");
  const content = children.find((c) => c.type.name === "Content");
  return (
    <div
      className={`mx-auto mt-[83px] flex w-[81.25%] flex-wrap justify-between mobile:mt-[44px] mobile:flex-col ${className}`}
    >
      {heading}
      {subHeading}
      {description}
      {content}
    </div>
  );
};

export default SectionLayout;
