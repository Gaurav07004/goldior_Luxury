import React from "react";
import { useNavigate } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

interface HeroProps {
  heading?: string;
  subtext?: string;
  imageUrl?: string;
  shopButton?: string;
  viewDetail?: string;
  expertTitle?: string;
  expertTitletext?: string;
  explore?: string;
  navigateToshop?: string;
  navigateToView?: string;
  navigateToAbout?: string;
}

function Hero({
  heading,
  subtext,
  imageUrl,
  shopButton,
  viewDetail,
  expertTitle,
  expertTitletext,
  explore,
  navigateToshop,
  navigateToView,
  navigateToAbout,
}: HeroProps) {
  const navigate = useNavigate();
  const splitWord = "ingredients";
  const splitIndex =
    expertTitletext?.indexOf(splitWord) || 0 + splitWord.length;

  const firstLine = expertTitletext?.slice(0, splitIndex).trim();
  const secondLine = expertTitletext?.slice(splitIndex).trim();
  console.log(navigateToView);

  const result = `${firstLine}\n${secondLine}`;

  return (
    <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between lg:w-full xl:px-[8rem] xl:py-[6rem] sm:px-0 sm:w-full md:px-8 lg:px-12 lg:py-36 py-12 xs:py-20 xs:px-6 bg-gradient-to-r from-[#fef3e6] via-white to-[#fdebd0]">
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start p-0 w-full sm:w-[90%] md:w-[100%] lg:w-[50%] xl:w-[45%] xl:mt-20">
        <p className="mt-4 xl:text-[3.5rem] xs:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] my-4 font-medium font-serif text-slate-700 xl:leading-[4.5rem] sm:leading-[3rem] xs:leading-[2.2rem] lg:leading-[3.5rem]">
          {heading}
        </p>
        <p className="xl:text-[1.1rem] xs:text-[0.8rem] text-justify lg:text-[1rem] md:text-[1.1rem] text-slate-500 mb-4">
          {subtext}
        </p>
        <div className="flex flex-wrap justify-start items-center gap-4 mt-6">
          <button
            onClick={() => navigate(navigateToshop || "/")}
            className="bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white shadow-md font-medium px-6 py-3 rounded-lg w-auto xs:w-fit xs:text-xs lg:w-fit lg:text-sm xl:w-fit xl:text-lg sm:w-fit sm:text-xs duration-500"
          >
            {shopButton}
          </button>
          <button
            onClick={() => navigate("/discover")}
            className="bg-[#000] text-white shadow-md font-medium px-6 py-3 rounded-lg w-auto xs:w-fit xs:text-xs lg:w-fit lg:text-sm xl:w-fit xl:text-lg sm:w-fit sm:text-xs hover:bg-[#353535] duration-500"
          >
            {viewDetail}
          </button>
        </div>
        <p className="mt-10 text-[1rem] sm:text-[1.1rem] font-semibold text-slate-700">
          {expertTitle}
        </p>
        <p className="mt-1 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] font-medium text-slate-500">
          {result.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <p
          onClick={() => navigate(navigateToAbout || "/")}
          className="cursor-pointer mt-4 text-[0.8rem] sm:text-[0.9rem] font-semibold text-[var(--theme-brown)] flex justify-between items-center gap-1 underline underline-offset-4"
        >
          {explore}
          <LiaLongArrowAltRightSolid className="text-[1.2rem] sm:text-[1.5rem]" />
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full sm:w-[80%] md:w-[85%] lg:w-[50%] xl:w-[45%] flex justify-center items-center lg:mt-0">
        <img
          src={imageUrl || "/default-image.jpg"}
          alt="Hero Banner"
          className="rounded-b-full w-[80%] sm:w-[50%] md:w-[50%] lg:w-[70%] xl:w-[60%] h-auto object-cover xl:-mt-14 xl:ml-24"
        />
      </div>
    </div>
  );
}

export default Hero;
